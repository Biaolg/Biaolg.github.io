
window.onload = (function () {


    class Company {
        constructor(x, y, r, cantext, color) {

            this.x = x;
            this.y = y;
            this.r = r;
            this.cantext = cantext;
            this.color = color;

            this.cantext.fillStyle = this.color;
            this.cantext.beginPath();
            this.cantext.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
            this.cantext.closePath();
            this.cantext.fill();
        }
        Repaint(x, y, r = this.r, color = this.color) {//重绘
            this.x = x;
            this.y = y;
            this.r = r;
            this.cantext.fillStyle = color;
            this.cantext.beginPath();
            this.cantext.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
            this.cantext.closePath();
            this.cantext.fill();
        }
        EliminateCanvas(canvas) {//清除单位
            // this.cantext.clearRect(0, 0, canvas.width, canvas.height);
            this.cantext.clearRect(this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
        }
        dynamicRepaint(x, y, r = this.r, Boer = true) {//动态重绘

            if (Boer) {
                this.EliminateCanvas(canvas);
            }
            this.Repaint(x, y, r);
            // console.log(x, y, r);
        }

    }
    function getRandom(max, min) {//随机数
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var box = document.querySelector("#box");
    var canvas = document.getElementById("canvas");
    var cantext = canvas.getContext("2d");
    var lead = new Company(x, y, r1, cantext, "aliceblue");
    var x = 100, y = 300;
    var r1 = 15;
    var Score = 0;


    alert("wsad(对应上下左右)控制移动!")
    alert("游戏规则:1.不要踩到自己走过的路!ps:注意不要反向移动!");
    alert("也不要撞上墙壁!!!~");

    var arrX = [];
    function routeRecord(x, y, time) {//路径记录
        if (arrX.indexOf(x + "," + y) != -1) {
            alert("游戏结束,你的得分是:" + Score);
            box.style.display = "none";
            window.clearInterval(time);//清除定时器
            window.clearInterval(scoring);
        }
        arrX.push(x + "," + y);
    }
    var scoring = setInterval(function () {
        Score += 1;
    }, 1000);

    function leadTime() {
        var time = setInterval(function () {
        }, 10);
        document.onkeydown = keyDown;
        //在Document对象中注册keyDown事件处理函数
        function keyDown(event) {
            var event = event || window.event;  // 标准化事件对象
            switch (event.keyCode) {  // 获取当前按下键盘键的编码
                case 68:
                    window.clearTimeout(time);

                    time = setInterval(function () {
                        if (x <= 1000 - r1) {
                            x += 1;
                            lead.dynamicRepaint(x, y, r1, false);
                        }
                        routeRecord(x, y, time);
                    }, 10);

                    break;
                case 65:
                    window.clearTimeout(time);
                    time = setInterval(function () {
                        if (x >= r1) {
                            x -= 1;
                            lead.dynamicRepaint(x, y, r1, false);
                        }
                        routeRecord(x, y, time);
                    }, 10);

                    break;
                case 87:
                    window.clearTimeout(time);

                    time = setInterval(function () {
                        if (y >= r1) {
                            y -= 1;
                            lead.dynamicRepaint(x, y, r1, false);
                        }
                        routeRecord(x, y, time);
                    }, 10);

                    break;
                case 83:
                    window.clearTimeout(time);

                    time = setInterval(function () {
                        if (y <= 600 - r1) {
                            y += 1;
                            lead.dynamicRepaint(x, y, r1, false);
                        }
                        routeRecord(x, y, time);
                    }, 10);
                    break;
                case 9:
                    window.clearTimeout(time);
                    break;
            }
            return false;
        }
    }
    leadTime();


    function randomAppear() {
        var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var cntArr = [];


        time = setInterval(function () {
            var color = "#";

            for (var j = 0; j < 6; j++) {
                color += arr[getRandom(0, 15)];
            }
            cntArr[cntArr.length] = new Company(getRandom(0, 1000), getRandom(0, 600), getRandom(15, 200), cantext, color);
        }, 500);
    }
    randomAppear();

})