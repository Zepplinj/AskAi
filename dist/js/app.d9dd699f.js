(function(t){function e(e){for(var r,u,i=e[0],s=e[1],c=e[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("034f"),n("2877")),i={},s=Object(u["a"])(i,o,a,!1,null,null,null),c=s.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card-panel col s6"},[n("h5",{staticClass:"z-depth-2"},[t._v(t._s(t.msg))])]),n("div",{staticClass:"row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.submit,expression:"submit"}],staticClass:"center-align",attrs:{type:"text",name:"",value:""},domProps:{value:t.submit},on:{input:function(e){e.target.composing||(t.submit=e.target.value)}}}),n("br"),n("button",{staticClass:"btn",attrs:{type:"button",name:"button"},on:{click:t.sendPrompt}},[t._v("Send prompt")]),n("br"),1==t.prompted?n("button",{staticClass:"btn",attrs:{type:"button",name:"button"},on:{click:t.generate}},[t._v("Generate")]):t._e()])])},f=[],d=n("bc3a"),m=n.n(d),b={name:"Shark",data:function(){return{msg:"",prompted:!1,submit:null}},methods:{sendPrompt:function(){if(null!=this.submit){var t="http://127.0.0.1:5000/prompt",e=this.submit,n=this;m.a.post(t,{prompt:e}).then((function(t){console.log(t),n.prompted=!0})).catch((function(t){console.log(t)}))}},generate:function(){var t=this,e="http://127.0.0.1:5000/shark",n=this;m.a.get(e).then((function(e){console.log(e.data),t.msg=e.data,n.prompted=!1})).catch((function(t){console.error(t)}))}},created:function(){}},h=b,v=Object(u["a"])(h,p,f,!1,null,"858278f4",null),g=v.exports;r["a"].use(l["a"]);var y=[{path:"/",name:"Shark",component:g}],w=new l["a"]({mode:"history",base:"/",routes:y}),_=w;r["a"].config.productionTip=!1,new r["a"]({router:_,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.d9dd699f.js.map