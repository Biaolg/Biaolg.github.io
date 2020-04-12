
let $ = id => document.querySelector(id);
let $all = id => document.querySelectorAll(id);

function adapion(size) {
    //标准屏幕大小
    const standard = 375;
    let width = window.screen.width;
    let cha = width - standard;
    let par = Math.round(cha / standard * 100);
    var size = size;
    size += Math.round(size * (par / 100));
    document.querySelector('html').style.fontSize = size + 'px';
}
//获取数据GET
function promiseGet(o) {
    let promise = new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseText);
            }
        }
        xhr.open('GET', o.url, o.isAsync);
        xhr.send()
    });
    return promise;
}
//获取数据
function jsonp(o) {
    return new Promise((resolve, reject) => {
        //创建全局函数
        let fnName = 'jsonp' + new Date().getTime();
        window[fnName] = resolve;
        let params = '';
        for (let key in o.data) {
            params += key + '=' + o.data[key] + '&';
        }
        params = params + o.callback + '=' + fnName;
        let script = document.createElement('script');

        script.src = o.url + '?' + params;

        document.body.appendChild(script);

        setTimeout(() => {
            script.remove();
            delete window[fnName];
        }, 600)
    })
}

window.onload = () => {
    adapion(100);
    let city = $('.city').innerText;

    //实时数据
    promiseGet({
        url: 'https://api.heweather.net/s6/weather/now?location=' + city + '&key=0a3be83b3c494cc6b9701769141694cf',
        isAsync: true
    }).then(result => {
        let data = JSON.parse(result).HeWeather6[0].now;
        console.log(data);
        $('.weather').innerText = data.cond_txt;
        $('.temp').innerText = data.tmp + '°';
    })

    //小时预报
    promiseGet({
        url: 'https://api.heweather.net/s6/weather/hourly?location=' + city + '&key=0a3be83b3c494cc6b9701769141694cf',
        isAsync: true
    }).then(result => {
        let data = JSON.parse(result).HeWeather6[0].hourly;
        let div = $all('.b-zhong>div');
        for (let i = 0; i < div.length; i++) {
            let sj = data[i].time.split(' ')[1];
            div[i].innerHTML = `<div class="shi">${sj}</div><div class="tq">${data[i].cond_txt}/${data[i].tmp}°</div>`;
        }

    })

    // 7天预报
    promiseGet({
        url: 'https://api.heweather.net/s6/weather/forecast?location=' + city + '&key=0a3be83b3c494cc6b9701769141694cf',
        isAsync: true
    }).then(result => {
        let data = JSON.parse(result).HeWeather6[0].daily_forecast;
        let date = $all('.date');
        let end = $all('.end>span');
        let liTq = $all('li .tq');
        console.log(data);
        

        for (var i = 0; i < date.length; i++) {
            date[i].innerText = data[i].date;
            liTq[i].innerText = data[i].cond_txt_d+'/'+data[i].cond_txt_n;
            end[i].innerHTML = `${data[i].tmp_max}°&nbsp;<span>/&nbsp;${data[i].tmp_min}°</span>`;
        }
    })

    let Bzong = $('.b-zhong');
    Bzong.ontouchstart = e => {
        let toNo = e.targetTouches[0].pageX;
        Bzong.ontouchmove = e => {
            let cha = e.targetTouches[0].pageX - toNo + Bzong.offsetLeft;
            toNo = e.targetTouches[0].pageX;
            if (cha > 0) {
                return;
            }
            Bzong.style.marginLeft = cha + 'px';
        }
    }

}
window.onresize = () => {
    adapion(100);
}