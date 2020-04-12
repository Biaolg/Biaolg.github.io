//x轴移动
function animated_X(obj, target, callback) {
    clearInterval(obj.time);

    obj.time = setInterval(function () {
        // 公式: (目标值 - 现在的位置)   /  10   得到步长
        var step = (target - obj.offsetLeft) / 10;
        step = step >= 0 ? Math.ceil(step) : Math.floor(step);//判断方向

        if (obj.offsetLeft == target) {
            clearInterval(obj.time);

            callback && callback();//用法:前面为真时执行
        } else {
            obj.style.left = obj.offsetLeft + step + "px";
        }
    }, 15)
}
//y轴移动
function animated_Y(obj, target, callback) {
    clearInterval(obj.time);

    obj.time = setInterval(function () {
        // 公式: (目标值 - 现在的位置)   /  10   得到步长
        var step = (target - obj.offsetTop) / 10;
        step = step >= 0 ? Math.ceil(step) : Math.floor(step);//判断方向

        if (obj.offsetTop == target) {
            clearInterval(obj.time);

            callback && callback();//用法:前面为真时执行
        } else {
            obj.style.top = obj.offsetTop + step + "px";
        }
    }, 15)
}
//滚动条动画
function animated_scroll(obj, target, callback) {
    clearInterval(obj.timer);
    var now = null;
    obj.timer = window.setInterval(function () {
        var step = (target - window.pageYOffset) / 10;
        step = step >= 0 ? Math.ceil(step) : Math.floor(step);

        if (window.pageYOffset == target) {
            window.clearInterval(obj.timer);
            callback && callback();
        } else {
            window.scroll(0, window.pageYOffset + step);
            now = window.pageYOffset;

        }
    }, 15)
    //动画执行时,当滚轮向下滚动则会停止动画
    window.onscroll = function () {
        if (window.pageYOffset > now){
            window.clearInterval(obj.timer);
        }
    }
}