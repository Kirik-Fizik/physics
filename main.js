var i = 0;
var colors = ['rgb(233, 192, 79)', 'rgb(194, 167, 212)', 'rgb(255, 255, 255)'];
function hello() {
    document.body.style.background = colors[i];
    i++;
    if (i > colors.length - 1) {
        i = 0;
    }
}
function hello1() {
    var x1 = Number(document.getElementById('x1').value);
    var hmax = x1 * x1 / (2 * 10);
    var x3 = document.getElementById('x3');
    x3.innerHTML = 'Вычислить:' + hmax; 
}
function hello2() {
    var x1 = Number(document.getElementById('x1').value);
    var vrema = 2 * x1 / 10;
    var x4 = document.getElementById('x4');
    x4.innerHTML = 'Вычислить:' + vrema;
}
function hello3() {
    var x1 = Number(document.getElementById('x1').value);
    var vrema1 = 2 * x1 / 10;
    var x2 = Number(document.getElementById('x2').value);
    var x5 = document.getElementById('x5');
    if (x2 >= vrema1) {
        x5.innerHTML = 'Вычислить:' + ' мяч на земле';
    } else {
        var h2 = x1 * x2 - ((10 * x2 * x2) / 2);
        x5.innerHTML = 'Вычислить:' + h2;
    }
}

