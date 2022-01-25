import sdata from './xici_0.js';
import xdata from './xici_1.js';

export default function (el) {
    let body = document.querySelector('body')
    let s = document.createElement('a'),
        x = document.createElement('a')

    s.innerHTML = '系辞传-上';
    x.innerHTML = '<br/>系辞传-下';


    s.onclick = ev => el.innerHTML = sdata.replace(/\r|\n/g, '<br/>');
    x.onclick = ev => el.innerHTML = xdata.replace(/\r|\n/g, '<br/>');

    body.insertAdjacentElement('afterbegin', x);
    body.insertAdjacentElement('afterbegin', s);
}