"use strict";(self.webpackChunkyidao=self.webpackChunkyidao||[]).push([[530],{314:(n,e,t)=>{t.d(e,{Z:()=>f});var r=t(213),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(232),t.b),p=i()(o()),d=s()(l);p.push([n.id,':root {\n  --b-color: black;\n  --a-color: black;\n  --bg-color: #b59253;\n  --ybg-color: #b59253;\n  --yao-width: 2rem;\n  --yao-height: 0.2rem;\n}\n\nbody {\n  font-family: "Reggae One", cursive;\n  font-weight: 600;\n  color: var(--b-color);\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n   /* background: var(--bg-color); */\n  background: url('+d+"), url("+d+"), var(--ybg-color); \n  overflow-x: hidden;\n}\n\n@media screen and (max-width: 1000px) {\n  .BaGua-content {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    height: 64vh;\n  }\n  .Ci-content {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  #app {\n    position: relative;\n    width: 30vw;\n    height: 30vw;\n    left: calc(50vw - 200px - 2rem - 250px);\n    top: calc(50vh - 200px - 2rem);\n  }\n  .BaGua-content {\n    width: calc(100vw - 500px);\n  }\n  .Ci-content {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 500px;\n    height: 100vh;\n  }\n}\n\n.Ci-content {\n  padding-left: 10px;\n  background: url("+d+"), url("+d+'), var(--ybg-color);\n}\n\n#app {\n  transform: rotate(180deg);\n  line-height: 1.7rem;\n}\n\n.g {\n  display: inline-block;\n  text-align: center;\n}\n\n.g-content {\n  transition: 1s all;\n}\n\n.y0 {\n  filter: drop-shadow(0px 0px 21px);\n  pointer-events: none;\n  width: var(--yao-width);\n  height: var(--yao-height);\n  background: linear-gradient(90deg, var(--b-color) 40%, transparent 40%, transparent 60%, var(--b-color) 63%);\n  margin-top: 4px;\n}\n\n.y1 {\n  filter: drop-shadow(0px 0px 21px);\n  pointer-events: none;\n  width: var(--yao-width);\n  height: var(--yao-height);\n  background: var(--b-color);\n  margin-top: 4px;\n}\n\n.y01 {\n  /* padding:10px 0; */\n}\n\n.y01 * {\n  position: absolute;\n}\n\n.y01 .y1 {\n  animation: y01 2s alternate infinite;\n}\n\n@keyframes y01 {\n  100% {\n    opacity: 0;\n  }\n}\n\n#ci {\n  font-family: "Reggae One", cursive;\n  font-weight: 600;\n  text-indent: 2rem;\n  color: var(--a-color);\n  height: 100%;\n  overflow: auto;\n}\n\n#ci * {\n  animation: 1s ci;\n}\n\n@keyframes ci {\n  0% {\n    color: transparent;\n  }\n  100% {\n    color: var(--a-color);\n  }\n}\n\n.taiji {\n  position: relative;\n  transform: scale(0.1);\n  transform-origin: 0 0;\n  border-radius: 50%;\n  width: 0px;\n  height: 300px;\n  border-left: 150px solid black;\n  border-right: 150px solid #ffffff;\n  background: radial-gradient(black, #ffffff);\n  /* transition: all 12s; */\n}\n\n.taiji::after {\n  content: " ";\n  position: absolute;\n  margin-left: -75px;\n  margin-top: 150px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 50px solid #ffffff;\n  background: black;\n  /* box-shadow: 0px 0px 40px 40px  inset black; */\n  /* position: relative; */\n}\n\n.taiji::before {\n  content: " ";\n  position: absolute;\n  display: inline-block;\n  left: -75px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #ffffff;\n  border: 50px solid black;\n  /* transition: 2s all; */\n}\n',""]);const f=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},213:n=>{n.exports=function(n){return n[1]}},530:(n,e,t)=>{t.r(e),t.d(e,{default:()=>b});var r=t(379),o=t.n(r),a=t(795),i=t.n(a),c=t(569),s=t.n(c),l=t(565),p=t.n(l),d=t(216),f=t.n(d),u=t(589),h=t.n(u),v=t(314),g={};g.styleTagTransform=h(),g.setAttributes=p(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=f(),o()(v.Z,g);const b=v.Z&&v.Z.locals?v.Z.locals:void 0},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var f=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var h=o(u,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},232:(n,e,t)=>{n.exports=t.p+"dd29a028f1793a551e92.png"}}]);