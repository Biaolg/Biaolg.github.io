onmessage = function (e) {

    if (e.data == '你好') {
        postMessage('您好');
    } else {
        postMessage('我不明白您说什么!');
    }

}