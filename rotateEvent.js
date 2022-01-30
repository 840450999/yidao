import Rotate from './rotate.js';
import Y from './y.js';
let y = new Y();

// new rotate(b1)
// new rotate(b2)
let y64 = (new Array(3)).join('a').split('a').reduce((arr) => y._YanHua(arr), y.bagua)

function rotate(el) {
    let r = new Rotate(el);
    r.on('active', ({ target }, { el }) => {
        el.style.transform = `rotate(${180 - (y._FangWei(y.bagua)[parseInt(target.dataset.g, 2)])}deg)`
        // if (y64_el.style.transform.indexOf('rotate') !== -1) {                        
        //     y64_el.style.transform = y64_el.style.transform.replace(/rotate\(.*?\)/, `rotate(${180 - (y64[parseInt(target.dataset.g, 2)])}deg)`)
        // }
        // else {
        //     y64_el.style.transform = y64_el.style.transform + `rotate(${180 - (y64[parseInt(target.dataset.g, 2)])}deg)`
        // }
    })
    return r;
}



export default rotate