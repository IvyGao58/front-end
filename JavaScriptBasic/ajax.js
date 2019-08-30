/**
 * @topic: 原生JS实现Ajax
 * @Date: 2019-08-24
 */

function ajax() {
    let xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = ActiveXObject('Microsoft.XMLHTTP');
    }
    xmlhttp.open('GET', 'http://localhost:4040/getData', true); // 请求方式 请求路径 是否异步
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState === 4) { // readyState表示XMLHttpRequest对象的处理状态。
            if (xmlhttp.status >= 200 && xmlhttp.status < 300 && xmlhttp.status === 304) {
                console.log(xmlhttp.response);
            }
        }
    };
    xmlhttp.send();
}
