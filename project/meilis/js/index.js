window.onload = function () {

    //宝贝,店铺样式切换
    var qh1 = document.getElementById("qh1");
    var qh2 = document.getElementById("qh2");

    qh1.onclick = function () {
        qh1.style.background = "#ff3366";
        qh1.style.color = "#ffffff";
        qh2.style.background = "#f2f2f2";
        qh2.style.color = "#6f6f6f";
    }

    qh2.onclick = function () {
        qh2.style.background = "#ff3366";
        qh2.style.color = "#ffffff";
        qh1.style.background = "#f2f2f2";
        qh1.style.color = "#6f6f6f";
    }
    //新品热销切换
    var tit1 = document.getElementById("tit1");
    var tit2 = document.getElementById("tit2");
    var tsp1 = document.getElementById("tsp1");
    var tsp2 = document.getElementById("tsp2");
    var hide1 = document.getElementById("hide1");
    var hide2 = document.getElementById("hide2");


    tit1.onclick = function () {
        tit1.style.color = "#ff3366";
        tit2.style.color = "#000000";
        tsp1.style.borderBottom = "solid #ff3366";
        tsp2.style.borderBottom = "none";
        hide1.style.display = "block";
        hide2.style.display = "none";
    }

    tit2.onclick = function () {
        tit2.style.color = "#ff3366";
        tit1.style.color = "#000000";
        tsp2.style.borderBottom = "solid #ff3366";
        tsp1.style.borderBottom = "none";
        hide2.style.display = "block";
        hide1.style.display = "none";
    }


    //轮播图开始
    var tupian = document.getElementById("tupian");
    var lpt = document.getElementById("lbt");
    var lis = document.querySelectorAll(".lbt li");
    var aLeft = document.getElementById("Aimg1");
    var aRight = document.getElementById("Aimg2");
    var fdian = document.querySelector(".Container #dian");
    var dindex = null;
    //动态设定ul的宽
    lpt.style.width = lis.length * 100 + "%";
    //动态创建小点
    for (var i = 0; i < lis.length - 1; i++) {
        var li = document.createElement("li");
        fdian.appendChild(li);
    }
    var dian = fdian.getElementsByTagName("li");

    //圆点
    dian[0].style.width = "25px";

    for (var i = 0; i < dian.length; i++) {
        dian[i].setAttribute("index", i);
    }
    for (var i = 0; i < dian.length; i++) {
        dian[i].onclick = function () {
            for (var j = 0; j < dian.length; j++) {
                dian[j].style.width = "10px";
            }
            this.style.width = "25px";
            dindex = this.getAttribute("index");
            aLeft.onclick = null;
            aRight.onclick = null;
            animated_X(lpt, -this.getAttribute("index") * lis[0].offsetWidth, function () {
                aLeft.onclick = btnleft;
                aRight.onclick = btnRight;
            });
        }
    }

    //左点击事件
    function btnleft() {

        if (dindex == null) {
            dindex = dian.length;
        }
        if (dindex <= 0) {
            dindex = dian.length;
        }
        for (var j = 0; j < dian.length; j++) {
            dian[j].style.width = "10px";
        }
        dian[+dindex - 1].style.width = "25px";
        dindex = +dindex - 1;

        var pos = lpt.offsetLeft;
        if (pos == 0) {
            lpt.style.left = -(lpt.offsetWidth - lis[0].offsetWidth) + "px";
        }
        animated_X(lpt, lpt.offsetLeft + lis[0].offsetWidth, function () {
            aLeft.onclick = btnleft;
        });
        aLeft.onclick = null;
    }
    //右点击事件
    function btnRight() {
        aRight.onclick = null;
        if (dindex == null) {
            dindex = 0;
        }
        if (dindex >= dian.length - 1) {
            dindex = -1;
        }
        for (var j = 0; j < dian.length; j++) {
            dian[j].style.width = "10px";
        }
        dian[+dindex + 1].style.width = "25px";
        dindex = +dindex + 1;

        var pos = lpt.offsetLeft;
        if (pos <= -lpt.offsetWidth + lis[0].offsetWidth) {
            lpt.style.left = 0 + "px";
        }
        animated_X(lpt, lpt.offsetLeft - lis[0].offsetWidth, function () {
            aRight.onclick = btnRight;
        });
    }
    aLeft.onclick = btnleft;
    aRight.onclick = btnRight;


    var time = setInterval(btnRight, 3 * 1000);
    //解决浏览器中后台时会出现计时器在运作但objul不进行偏移的bug
    window.onfocus = function () {//当页面获取焦点时开启定时器
        window.clearInterval(time);//先清除
        time = setInterval(btnRight, 3 * 1000);
    }
    window.onblur = function () {//当页面失去焦点时清除定时器
        window.clearInterval(time);
    }
    //鼠标移上
    tupian.onmousemove = function () {
        aLeft.style.display = "block";
        aRight.style.display = "block";
        window.clearInterval(time);//清除定时器
    }
    //鼠标移出
    tupian.onmouseout = function () {
        aLeft.style.display = "none";
        aRight.style.display = "none";
        time = setInterval(btnRight, 3 * 1000);
    }
    //轮播图结束


    //滚动条特效
    var Roll = 0;
    var reg = document.getElementById("regression");
    var nav_f = document.getElementById("nav-f");

    reg.onclick = function () {
        var time = setInterval(function () {
            Roll = window.pageYOffset;
            if (Roll <= 194) {
                nav_f.style.position = "relative";
                nav_f.style.zIndex = "0";
            }
        }, 15);
        animated_scroll(window, 0, function () {
            window.clearInterval(time);
            time = null;
        });
    }
    window.addEventListener("scroll", function () {
        Roll = window.pageYOffset;
        if (Roll == 0) {
            reg.style.display = "none";
        } else {
            reg.style.display = "block";
        }
        if (Roll >= 194) {
            nav_f.style.position = "fixed";
            nav_f.style.top = "0px";
            nav_f.style.zIndex = "500";
        } else {
            nav_f.style.position = "relative";
            nav_f.style.zIndex = "0";
        }
    })
}