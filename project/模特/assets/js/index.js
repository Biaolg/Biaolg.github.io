$(".dropdown").hover(
    function () {
        // over
        $(this).addClass("open");
    },
    function () {
        // out
        $(this).removeClass("open");
    }
);

// $('body').scrollspy({ target: '#mynavbar' })

// 滚动

function vsctoll(sel) {
    var idindex = $(sel).data('index');
    if (idindex === undefined) {
        return
    } else {
        console.log(idindex)
        //对应的模块
        var $modelTop = $('.box').children('#' + idindex + '').offset().top;

        $('html').animate({
            scrollTop: $modelTop + 1
        }, 800)
    }
}

$('.dropdown-menu>li').on('click', function () {

    vsctoll(this);
});

$('.vvnav>li').on('click', function () {

    vsctoll(this);
});

$('#contactvv').on('click', function () {
    vsctoll(this);
})

$('.vfoot a').on('click', function () {
    $('html').animate({
        scrollTop: 0
    }, 3000)
})

//切换模态框图片
$('.vgallery img').on('click',function(){
    $url = $(this).attr('src');
    $('.vphoto img').attr('src',$url) 
})