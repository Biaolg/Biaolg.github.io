
window.onload = function () {
    var canvas = document.getElementById('canvas');
    var menu = document.getElementById('menu');
    var box = document.querySelector('.box');

    var cxt = canvas.getContext('2d');

    var color = 'rgb(0,0,0)';
    var penWidth = '2';

    var pen = document.querySelector('.pen');

    pen.onclick = function (e) {//笔头

        if (e.target.className == 'penno') {

            document.querySelector('.atta').className = 'penno';

            e.target.className = 'penno atta';

            penWidth = e.target.getAttribute('data-width');

        }

    }

    var adColor = document.querySelector('.ad-color');

    adColor.onclick = function (e) {
        if (e.target.className == 'the-div') {

            var div = e.target.querySelector('div');
            
            
        }
    }


    canvas.onmousedown = function (e) {

        menu.style.display = 'none';
        if (e.button == 2) {//菜单栏
            menu.style.display = 'block';

            var x = e.offsetX, y = e.offsetY;

            var cw = canvas.offsetWidth, ch = canvas.offsetHeight;

            var mw = menu.offsetWidth, mh = menu.offsetHeight;

            if (x + mw > cw) {
                x = x - mw;
            }

            if (y + mh > ch) {
                y = y - mh;
            }

            menu.style.left = x + 'px';
            menu.style.top = y + 'px';
        } else {
            cxt.beginPath();
            cxt.strokeStyle = color;
            cxt.lineWidth = penWidth;
            cxt.moveTo(e.offsetX, e.offsetY);
            this.onmousemove = function (e) {
                cxt.lineTo(e.offsetX, e.offsetY);
                cxt.stroke();
            }
            this.onmouseup = function () {
                this.onmousemove = null;
            }
        }
    }
    document.body.oncontextmenu = function (e) {//阻止右键默认事件
        return false;
    }
}
