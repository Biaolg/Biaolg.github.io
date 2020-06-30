$(function () {

    var worker = new Worker('js/worker.js');

    $('.open').click(function () {

        var text = $('.text')[0].value;

        if (text == '') {
            return;
        }

        $('.text')[0].value = '';

        var html = $(`<div class="news user">
        <div class="r">
            <div class="inf">${text}</div>
            <div class="head">
                <img src="img/144152f8680f421599233c6ffcfcef49_1476265267104.jpeg">
            </div>
        </div>
    </div>`);

        $('.top').append(html);

        worker.postMessage(text);
    })

    worker.onmessage = function (e) {

        var html = $(`<div class="news service">
        <div class="l">
            <div class="head">
                <img src="img/u=2508337205,2072470190&fm=26&gp=0.jpg">
            </div>
            <div class="inf">${e.data}</div>
        </div>
    </div>`)

        $('.top').append(html);

    }

    $('.text').keyup(function(e){
        
        if(e.keyCode == 13){
            $('.open')[0].click();
        }
        
    })


})