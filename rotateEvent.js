import Rotate from './rotate.js';
import Y from './y.js';
let y = new Y();

// new rotate(b1)
// new rotate(b2)

function rotate(el) {
    let r = new Rotate(el);
    r.on('active', ({ target }, { el }) => {
        el.style.transform = `rotate(${180 - (y._FangWei(y.bagua)[parseInt(target.dataset.g, 2)])}deg)`
    })
    return r;
}

export default rotate