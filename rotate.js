import event from './event.js';


let abs = Math.abs,
    pow = Math.pow,
    sqrt = Math.sqrt,
    globalWindow = document.documentElement.clientWidth;

class rotate extends event {
    constructor(el) {
        super();
        this.state = false;
        this.el = el;
        this.deg = 0;
        this.ox = 0;
        this.oy = 0;
        this.x = 0;
        this.y = 0;
        this.bindEvent();
    }

    rot(l) {
        this.el.style.transform = this.el.style.transform.replace(/(\d+)deg/g, (n, i) => (+i + l) + "deg")
    }

    start = thro(100, () => {
        if (!this.state) return;
        let { x, y, ox, oy } = this,
            dre = x - ox > 0 ? 1 : -1,
            j = ~~sqrt(pow(abs(x - ox), 2) + pow(abs(y - oy), 2)) + 1,
            l = (~~(j / 2 / 45)) * 45 * dre
   
        this.rot(l)
    })

    // 临时
    active(ev) {
        this.emit('active', ev, this)

    }

    bindEvent() {       
        window.addEventListener('mousemove', (ev) => {
            this.x = ev.screenX;
            this.y = ev.screenY;
            this.start();            
        })


        this.el.addEventListener('mousedown', (ev) => {
            this.ox = ev.screenX;
            this.oy = ev.screenY;
            this.x = ev.screenX;
            this.y = ev.screenY;
            this.state = true;
            setTimeout(() => {
                this.state=false 
            }, 2000);
        })

        window.addEventListener('mouseup', (ev) => {
            let { x, y, ox, oy } = this;
            if (x == ox && y == oy && this.state) this.active(ev);
            if (this.state) this.emit('up',ev,this);            
            this.state = false;
            this.ox = 0;
            this.oy = 0;
            this.x = 0;
            this.y = 0;
        })
    }

}



function thro(time, fn) {
    var run = true;
    if (!fn) {
        fn = time;
        time = 200;
    }

    return function () {
        if (!run) { return; }
        var self = this;
        run = !run;
        var arg = arguments;
        setTimeout(function () {
            fn.apply(self, [].slice.call(arg));
            run = !run;
        }, time);
    }
}

function qois(time, fn) {
    var tname = null;
    if (!fn) {
        fn = time;
        time = 200;
    }
    return function () {
        var arg = arguments;
        tname && clearTimeout(tname);
        var self = this;
        tname = setTimeout(function () { fn.apply(self, [].slice.call(arg)); }, time);
    }
}
export default rotate