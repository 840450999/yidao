class y {
    constructor() {
        this.yin = '0';
        this.yang = '1';
        this.TaiJi = ['0', '1'];
        this.YinYang = ['阴', '阳'];
        this.SiXiang = ['老阴', '少阳', '少阴', '老阳'];
        this.BaGua = ["坤", "艮", "坎", "巽", "震", "离", "兑", "乾"];
        this.YiJing = ['乾', '坤', '屯', '蒙', '需', '讼', '师', '比', '小畜', '履', '泰', '否', '同人', '大有', '谦', '豫', '随', '蛊', '临', '观', '噬嗑', '贲', '剥', '复', '无妄', '大畜', '颐', '大过', '坎', '离', '咸', '恒', '遯', '大壮', '晋', '明夷', '家人', '睽', '蹇', '解', '损', '益', '夬', '姤', '萃', '升', '困', '井', '革', '鼎', '震', '艮', '渐', '归妹', '丰', '旅', '巽', '兑', '涣', '节', '中孚', '小过', '既济', '未济']
        this.sixiang = this._SiXiang();        
        this.bagua = this._BaGua();
    }

    _YanHua(arr) {
        return arr.reduce((N, X) => N.concat(this.TaiJi.map(I => X + I)), [])
    }

    _SiXiang() {
        return this._YanHua(this.TaiJi);
    }

    _BaGua() {
        return this._YanHua(this._YanHua(this.TaiJi));
    }

    _YiJing() {
        let ret = this._BaGua();
        for (let i = 4; i > 1; i--) ret = this._YanHua(ret);
        return ret;
    }

    _FangWei(arr) {
        let S = 360 / 2,
            Yi = -360 / arr.length,
            L = arr.length - 1,
            Zhong = arr.length / 2;
        return [].slice.call(arr.slice(0, Zhong).reduce((O, X, I) => (O[I] = parseInt(X, 2) * Yi, O[L - I] = parseInt(X, 2) * Yi + S, O), { length: arr.length }))
    }
}

export default y;
