import{isArr,isNum} from './type.js'
import {isUnExist} from './type.js'
 function Event(name) {
    this._events = Object.create(null);
    define(this._events, "__name", name);
    this.evList = Object.create(null);
}

Event.prototype.on = function on(name) {
    var self = this,
        fns = [].slice.call(arguments, 1);

    if (isArr(name)) {
        for (var i = 0, l = name.length; i < l; i++) {
            self.on.apply(self, [name[i]].concat(fns));
        }
    } else {
        self.evList[name] = true;
        self._events[name] = (self._events[name] || []).concat(fns);
    }
    return self;
}

Event.prototype.once = function once(name) {
    var self = this,
        fns = [].slice.call(arguments, 1);

    if (isArr(name)) {
        for (var i = 0, l = name.length; i < l; i++) {
            self.once.apply(self, [name[i]].concat(fns));
        }
    } else {
        self.evList[name] = true;
        fns = fns.map(function(fn) {
            return function F() {
                F = function() {};
                fn.apply(fn, arguments);
            }
        })
        self._events[name] = (self._events[name] || []).concat(fns);
    }
    return self;
}

Event.prototype.unEmit = function(name) {
    this.evList[name] = false;
}

Event.prototype.emit = function onEmit(name, data) {
    if (!this.evList[name]) { return; }
    var self = this,
        datas = [].slice.call(arguments, 1),
        evs = null,
        scope = null;
    if (isArr(name)) {
        for (var i = 0, l = name.length; i < l; i++) {
            evs = this._events[name[i]]
            if (isUnExist(self._events[name][i])) { return; }
            for (var e = 0, n = evs.length; e < n; e++) {
                scope = evs[e];
                scope.apply(scope, datas);
            }
        }
        return self;
    } else {
        if (isUnExist(self._events[name])) { return; }
        evs = self._events[name];
        if (evs.length === 1) { return evs[0].apply(self, datas) }
        for (var i = 0, l = evs.length; i < l; i++) {
            scope = evs[i];
            scope.apply(self, datas);
        }
    }
    return self;
}

   /* 对象是否可修改设置 */
   function define(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        configurable: false,
        writable: true,
        enumerable: !!enumerable
    })
    return val;
}
 

export default Event