(function(e){function t(t){for(var r,o,l=t[0],a=t[1],u=t[2],c=0,p=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],r=!0,l=1;l<s.length;l++){var a=s[l];0!==n[a]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=a;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var r=s("85ec"),n=s.n(r);n.a},"56d7":function(e,t,s){"use strict";s.r(t);var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Old+Standard+TT&display=swap",rel:"stylesheet"}}),s("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}}),s("div",{staticClass:"help"},[s("div",{staticClass:"question-box"},[s("h1",[e._v(e._s(e.quiz.title))]),s("div",{staticClass:"question-block"},[e._l(e.quiz.questions,(function(t,r){return s("div",{key:t.id},[s("div",{directives:[{name:"show",rawName:"v-show",value:r===e.questionIndex,expression:"index === questionIndex"}]},[s("h3",[e._v(e._s(t.text))]),s("ul",e._l(t.responses,(function(t){return s("li",{key:t.id},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userResponses[r],expression:"userResponses[index]"}],staticClass:"answerlist",attrs:{type:"radio",name:r},domProps:{value:t.value,checked:e._q(e.userResponses[r],t.value)},on:{click:e.next,change:function(s){return e.$set(e.userResponses,r,t.value)}}}),e._v(" "+e._s(t.text)+" ")])])})),0)])])})),s("div",{directives:[{name:"show",rawName:"v-show",value:e.questionIndex===e.quiz.questions.length,expression:"questionIndex === quiz.questions.length"}]},[s("p",[e._v("You are: "+e._s(e.crest()))]),s("myCanvas",{attrs:{userResponses:e.userResponses}},[s("crestDrawing",{attrs:{userResponses:e.userResponses}})],1)],1)],2)])])])},i=[];const o={title:"WEAR THIS INTO BATTLE",questions:[{id:1,text:"WHAT IS YOUR NAME?",responses:[{id:"a",text:"secret",value:"Per Fess"},{id:"b",text:"given",value:"Quarterly"},{id:"c",text:"chosen",value:"Per Chevron"},{id:"d",text:"inherent",value:"Per Saltire"},{id:"e",text:"translated",value:"Per Bend"}]},{id:2,text:"WHAT HAVE YOU MADE?",responses:[{id:"a",text:"peace",value:"Silver"},{id:"b",text:"friends",value:"Blue"},{id:"c",text:"amends",value:"Purple"},{id:"d",text:"time",value:"Gold"},{id:"e",text:"trouble",value:"Black"}]},{id:3,text:"WHAT HAVE YOU DONE?",responses:[{id:"a",text:"fought",value:"Red"},{id:"b",text:"decided",value:"Blue"},{id:"c",text:"given",value:"Gold"},{id:"d",text:"hoped",value:"Green"},{id:"e",text:"grieved",value:"Black"}]},{id:4,text:"GIVE YOURSELF A GIFT.",responses:[{id:"a",text:"book",value:"Deer"},{id:"b",text:"power",value:"Eagle"},{id:"c",text:"pillow",value:"Badger"},{id:"d",text:"flight",value:"Lion"},{id:"e",text:"five more minutes",value:"Dragon"}]}]};var l,a,u=o,d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"my-canvas"}},[s("canvas",{ref:"display",attrs:{width:"360",height:"400"}}),e._t("default")],2)},c=[],p={name:"crest",props:{userResponses:Array},data:function(){return{provider:{context:null}}},provide(){return{provider:this.provider}},mounted(){this.provider.context=this.$refs["display"].getContext("2d")}},v=p,f=s("2877"),h=Object(f["a"])(v,d,c,!1,null,"7bcbb747",null),x=h.exports,b={inject:["provider"],props:{userResponses:Array},render(){if(!this.provider.context)return;const e=this.provider.context,t=new Image;t.src="./dragon.png",t.onload=()=>{e.drawImage(t,0,0)},e.beginPath(),"Silver"===this.userResponses[1]?e.fillStyle="#93a2af":"Blue"===this.userResponses[1]?e.fillStyle="#26426b":"Purple"===this.userResponses[1]?e.fillStyle="#29244d":"Gold"===this.userResponses[1]?e.fillStyle="#7d6d50":"Black"===this.userResponses[1]&&(e.fillStyle="#1b1d27"),e.rect(89,78,184,158),e.moveTo(181,112),e.bezierCurveTo(231.810196984433,112,273,164.83039951996636,273,230),e.bezierCurveTo(273,295.16960048003364,231.810196984433,348,181,348),e.bezierCurveTo(130.189803015567,348,89,295.16960048003364,89,230),e.bezierCurveTo(89,164.83039951996636,130.189803015567,112,181,112),e.fill(),e.closePath(),"Per Fess"===this.userResponses[0]&&(e.beginPath(),e.rect(89,78,184,130),e.moveTo(181,112),"Red"===this.userResponses[2]?e.fillStyle="#54131c":"Blue"===this.userResponses[2]?e.fillStyle="#26426b":"Gold"===this.userResponses[2]?e.fillStyle="#7d6d50":"Green"===this.userResponses[2]?e.fillStyle="#243c37":"Black"===this.userResponses[2]&&(e.fillStyle="#1b1d27"),e.fill(),e.closePath())}},y=b,m=Object(f["a"])(y,l,a,!1,null,null,null),g=m.exports,w={name:"app",components:{myCanvas:x,crestDrawing:g},data:function(){return{quiz:u,title:"Personal Crest",questionIndex:0,userResponses:Array()}},methods:{next:function(){this.questionIndex++},crest:function(){return this.userResponses}}},R=w,S=(s("034f"),Object(f["a"])(R,n,i,!1,null,null,null)),_=S.exports,O=s("5f5b");s("f9e3"),s("2dd8");r["default"].config.productionTip=!1,new r["default"]({render:e=>e(_)}).$mount("#app"),r["default"].use(O["a"])},"85ec":function(e,t,s){}});
//# sourceMappingURL=app.13ebdceb.js.map