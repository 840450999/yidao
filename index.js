import data from './data.js';
import Y from './y.js';
import Jing from './jing.js';
import rotate from './rotateEvent.js';

const y0 = '<div class="y0"></div>',
    y1 = '<div class="y1"></div>',
    inter = '-99px'

let app = document.querySelector('#app'),
    ci = document.querySelector('#ci'),
    y = new Y(),
    jing = new Jing();

let sixiang = y.sixiang.map(y => s(y)),
    bagua = y.bagua.map(y => s(y)),
    bagua2 = y.bagua.map(y => s(y)),
    BF = y._FangWei(y.bagua)


let b1 = fw(BF, bagua, inter.replace(/\d+/, num => num * 1.2))
let b2 = fw(BF, bagua2, inter.replace(/\d+/, num => num * 2.5))
fw(y._FangWei(y.sixiang), sixiang, inter.replace(/\d+/, num => num / 2))

jingshu(rotate(b1), rotate(b2))
inner(jing.getS('111', '111').content)



function fw(y_FangWei, els, inter) {
    let div = vessel();
    y_FangWei
        .forEach((deg, i) => els[i].style = `transform:rotate(${deg}deg) translate(-1rem,${inter});position:absolute;transform-origin:0 0;`)

    els.forEach(e => div.appendChild(e));
    app.appendChild(div)
    return div;
}

function vessel() {
    let div = document.createElement('div');
    div.classList.add('g-content');
    div.style = `width:0px;height:0px;position: relative;top:50%;left:50%;transform:rotate(0deg);transform-origin:50% 50%;`;
    return div
}

function s(g) {
    let d = document.createElement('div');
    d.classList.add('g');
    d.dataset.g = g;
    d.innerHTML = g.split('').map(y => y == '0' ? y0 : y1).join('');
    g.length == 3 && (d.innerHTML += y.BaGua[parseInt(g, 2)]);
    return d;
}

function jingshu(b1, b2) {
    let el1 = b1.el,
        el2 = b2.el;

    b1.on('up', () => {
        let data = jing.getS(active_g(el1), active_g(el2));
        inner(data.content);
    })

    b2.on('up', () => {
        let data = jing.getS(active_g(el1), active_g(el2));
        inner(data.content);
    })
}

function inner(d) {
    ci.innerHTML = '<div>'+d.replace(/\n/g, '<br><br>')+'</div>';
}

function active_g(el) {
    let i = -(el.style.transform.replace(/.*?(\d+)deg.*/, '$1') % 360 - 180);
    return y.bagua[BF.indexOf(i)]
}