import data from './data.js';
import Y from './y.js';

let y = new Y();
class Jing {
    constructor() {
        this.data = data;
        this.y = new Y();
    }

    getS(down, up) {
       return this.getG(
            this.y.BaGua[parseInt(down, 2)],
            this.y.BaGua[parseInt(up, 2)]
        )
    }

    getG(down, up) {
        let ret = null;
        this.data.some((g) => {
            return g.g == `${down}下${up}上` && (ret = g);
        })
        return ret;
    }
}


export default Jing