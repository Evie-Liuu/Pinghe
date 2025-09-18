const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-CpE9eSqm.js","assets/TrainTrack-D7F1Ee3X.js","assets/TrainTrack-sVEUxovV.css","assets/Actions-hVI-0Lc3.js","assets/lightBulb2-0S6W8jUj.js","assets/HeaderFilter-DiAl6f6z.js","assets/SDGs_goal-BU-5yG0n.js","assets/CJKSub-XmbfC7Yg.js","assets/CJKSub-DT0M_kds.css","assets/ActionNew-BtTLUUaC.js","assets/index-CkggoVtU.js","assets/ActionNew-DVY1c1LX.css","assets/ActionDetail-AOEsbWM-.js","assets/平和國小_mobile_Example-Bsr5Md9p.js","assets/ActionDetail-os6uaAHL.css","assets/SDGs-DkIyoKeo.js","assets/Story-BmmNVNPp.js","assets/useDateFormat-BFMwo5FP.js","assets/Story-DaemCPTX.css","assets/StoryNew-dzYrB_CH.js","assets/StoryNew-BSvno8O3.css","assets/StoryDetail-MqAu5cFs.js","assets/StoryDetail-wwtSax38.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ni(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const te={},on=[],et=()=>{},da=()=>!1,qs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),si=t=>t.startsWith("onUpdate:"),ye=Object.assign,ri=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Cl=Object.prototype.hasOwnProperty,J=(t,e)=>Cl.call(t,e),F=Array.isArray,an=t=>ns(t)==="[object Map]",En=t=>ns(t)==="[object Set]",Ui=t=>ns(t)==="[object Date]",j=t=>typeof t=="function",ae=t=>typeof t=="string",Ve=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",ha=t=>(ie(t)||j(t))&&j(t.then)&&j(t.catch),pa=Object.prototype.toString,ns=t=>pa.call(t),Al=t=>ns(t).slice(8,-1),ga=t=>ns(t)==="[object Object]",ii=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xn=ni(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Js=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Rl=/-\w/g,Me=Js(t=>t.replace(Rl,e=>e.slice(1).toUpperCase())),Pl=/\B([A-Z])/g,Jt=Js(t=>t.replace(Pl,"-$1").toLowerCase()),Ys=Js(t=>t.charAt(0).toUpperCase()+t.slice(1)),hr=Js(t=>t?`on${Ys(t)}`:""),Dt=(t,e)=>!Object.is(t,e),bs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ma=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Os=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fi;const Xs=()=>Fi||(Fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ae(s)?Nl(s):Zs(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ae(t)||ie(t))return t}const kl=/;(?![^(]*\))/g,Ol=/:([^]+)/,xl=/\/\*[^]*?\*\//g;function Nl(t){const e={};return t.replace(xl,"").split(kl).forEach(n=>{if(n){const s=n.split(Ol);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function be(t){let e="";if(ae(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const s=be(t[n]);s&&(e+=s+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function J_(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ae(e)&&(t.class=be(e)),n&&(t.style=Zs(n)),t}const Dl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ml=ni(Dl);function _a(t){return!!t||t===""}function Ll(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ss(t[s],e[s]);return n}function ss(t,e){if(t===e)return!0;let n=Ui(t),s=Ui(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ve(t),s=Ve(e),n||s)return t===e;if(n=F(t),s=F(e),n||s)return n&&s?Ll(t,e):!1;if(n=ie(t),s=ie(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ss(t[o],e[o]))return!1}}return String(t)===String(e)}function oi(t,e){return t.findIndex(n=>ss(n,e))}const ya=t=>!!(t&&t.__v_isRef===!0),va=t=>ae(t)?t:t==null?"":F(t)||ie(t)&&(t.toString===pa||!j(t.toString))?ya(t)?va(t.value):JSON.stringify(t,ba,2):String(t),ba=(t,e)=>ya(e)?ba(t,e.value):an(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[pr(s,i)+" =>"]=r,n),{})}:En(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pr(n))}:Ve(e)?pr(e):ie(e)&&!F(e)&&!ga(e)?String(e):e,pr=(t,e="")=>{var n;return Ve(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ae;class Ul{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ae,!e&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ae;try{return Ae=this,e()}finally{Ae=n}}}on(){++this._on===1&&(this.prevScope=Ae,Ae=this)}off(){this._on>0&&--this._on===0&&(Ae=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Fl(){return Ae}let re;const gr=new WeakSet;class wa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ae&&Ae.active&&Ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gr.has(this)&&(gr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ia(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$i(this),Sa(this);const e=re,n=Fe;re=this,Fe=!0;try{return this.fn()}finally{Ta(this),re=e,Fe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)li(e);this.deps=this.depsTail=void 0,$i(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Nr(this)&&this.run()}get dirty(){return Nr(this)}}let Ea=0,Nn,Dn;function Ia(t,e=!1){if(t.flags|=8,e){t.next=Dn,Dn=t;return}t.next=Nn,Nn=t}function ai(){Ea++}function ci(){if(--Ea>0)return;if(Dn){let e=Dn;for(Dn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Nn;){let e=Nn;for(Nn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Sa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ta(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),li(s),$l(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Nr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ca(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ca(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===jn)||(t.globalVersion=jn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Nr(t))))return;t.flags|=2;const e=t.dep,n=re,s=Fe;re=t,Fe=!0;try{Sa(t);const r=t.fn(t._value);(e.version===0||Dt(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{re=n,Fe=s,Ta(t),t.flags&=-3}}function li(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)li(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function $l(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Fe=!0;const Aa=[];function pt(){Aa.push(Fe),Fe=!1}function gt(){const t=Aa.pop();Fe=t===void 0?!0:t}function $i(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let jn=0;class Vl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!re||!Fe||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new Vl(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,Ra(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=s)}return n}trigger(e){this.version++,jn++,this.notify(e)}notify(e){ai();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ci()}}}function Ra(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ra(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const xs=new WeakMap,Kt=Symbol(""),Dr=Symbol(""),Wn=Symbol("");function me(t,e,n){if(Fe&&re){let s=xs.get(t);s||xs.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Qs),r.map=s,r.key=n),r.track()}}function ct(t,e,n,s,r,i){const o=xs.get(t);if(!o){jn++;return}const a=c=>{c&&c.trigger()};if(ai(),e==="clear")o.forEach(a);else{const c=F(t),l=c&&ii(n);if(c&&n==="length"){const u=Number(s);o.forEach((f,h)=>{(h==="length"||h===Wn||!Ve(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Wn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Kt)),an(t)&&a(o.get(Dr)));break;case"delete":c||(a(o.get(Kt)),an(t)&&a(o.get(Dr)));break;case"set":an(t)&&a(o.get(Kt));break}}ci()}function Hl(t,e){const n=xs.get(t);return n&&n.get(e)}function en(t){const e=K(t);return e===t?e:(me(e,"iterate",Wn),De(t)?e:e.map(de))}function er(t){return me(t=K(t),"iterate",Wn),t}const Bl={__proto__:null,[Symbol.iterator](){return mr(this,Symbol.iterator,de)},concat(...t){return en(this).concat(...t.map(e=>F(e)?en(e):e))},entries(){return mr(this,"entries",t=>(t[1]=de(t[1]),t))},every(t,e){return it(this,"every",t,e,void 0,arguments)},filter(t,e){return it(this,"filter",t,e,n=>n.map(de),arguments)},find(t,e){return it(this,"find",t,e,de,arguments)},findIndex(t,e){return it(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return it(this,"findLast",t,e,de,arguments)},findLastIndex(t,e){return it(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return it(this,"forEach",t,e,void 0,arguments)},includes(...t){return _r(this,"includes",t)},indexOf(...t){return _r(this,"indexOf",t)},join(t){return en(this).join(t)},lastIndexOf(...t){return _r(this,"lastIndexOf",t)},map(t,e){return it(this,"map",t,e,void 0,arguments)},pop(){return Cn(this,"pop")},push(...t){return Cn(this,"push",t)},reduce(t,...e){return Vi(this,"reduce",t,e)},reduceRight(t,...e){return Vi(this,"reduceRight",t,e)},shift(){return Cn(this,"shift")},some(t,e){return it(this,"some",t,e,void 0,arguments)},splice(...t){return Cn(this,"splice",t)},toReversed(){return en(this).toReversed()},toSorted(t){return en(this).toSorted(t)},toSpliced(...t){return en(this).toSpliced(...t)},unshift(...t){return Cn(this,"unshift",t)},values(){return mr(this,"values",de)}};function mr(t,e,n){const s=er(t),r=s[e]();return s!==t&&!De(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const jl=Array.prototype;function it(t,e,n,s,r,i){const o=er(t),a=o!==t&&!De(t),c=o[e];if(c!==jl[e]){const f=c.apply(t,i);return a?de(f):f}let l=n;o!==t&&(a?l=function(f,h){return n.call(this,de(f),h,t)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,t)}));const u=c.call(o,l,s);return a&&r?r(u):u}function Vi(t,e,n,s){const r=er(t);let i=n;return r!==t&&(De(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,de(a),c,t)}),r[e](i,...s)}function _r(t,e,n){const s=K(t);me(s,"iterate",Wn);const r=s[e](...n);return(r===-1||r===!1)&&di(n[0])?(n[0]=K(n[0]),s[e](...n)):r}function Cn(t,e,n=[]){pt(),ai();const s=K(t)[e].apply(t,n);return ci(),gt(),s}const Wl=ni("__proto__,__v_isRef,__isVue"),Pa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ve));function zl(t){Ve(t)||(t=String(t));const e=K(this);return me(e,"has",t),e.hasOwnProperty(t)}class ka{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?tu:Da:i?Na:xa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=F(e);if(!r){let c;if(o&&(c=Bl[n]))return c;if(n==="hasOwnProperty")return zl}const a=Reflect.get(e,n,pe(e)?e:s);return(Ve(n)?Pa.has(n):Wl(n))||(r||me(e,"get",n),i)?a:pe(a)?o&&ii(n)?a:a.value:ie(a)?r?La(a):rs(a):a}}class Oa extends ka{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Ut(i);if(!De(s)&&!Ut(s)&&(i=K(i),s=K(s)),!F(e)&&pe(i)&&!pe(s))return c||(i.value=s),!0}const o=F(e)&&ii(n)?Number(n)<e.length:J(e,n),a=Reflect.set(e,n,s,pe(e)?e:r);return e===K(r)&&(o?Dt(s,i)&&ct(e,"set",n,s):ct(e,"add",n,s)),a}deleteProperty(e,n){const s=J(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&ct(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ve(n)||!Pa.has(n))&&me(e,"has",n),s}ownKeys(e){return me(e,"iterate",F(e)?"length":Kt),Reflect.ownKeys(e)}}class Kl extends ka{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gl=new Oa,ql=new Kl,Jl=new Oa(!0);const Mr=t=>t,gs=t=>Reflect.getPrototypeOf(t);function Yl(t,e,n){return function(...s){const r=this.__v_raw,i=K(r),o=an(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Mr:e?Ns:de;return!e&&me(i,"iterate",c?Dr:Kt),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ms(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xl(t,e){const n={get(r){const i=this.__v_raw,o=K(i),a=K(r);t||(Dt(r,a)&&me(o,"get",r),me(o,"get",a));const{has:c}=gs(o),l=e?Mr:t?Ns:de;if(c.call(o,r))return l(i.get(r));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&me(K(r),"iterate",Kt),r.size},has(r){const i=this.__v_raw,o=K(i),a=K(r);return t||(Dt(r,a)&&me(o,"has",r),me(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=K(a),l=e?Mr:t?Ns:de;return!t&&me(c,"iterate",Kt),a.forEach((u,f)=>r.call(i,l(u),l(f),o))}};return ye(n,t?{add:ms("add"),set:ms("set"),delete:ms("delete"),clear:ms("clear")}:{add(r){!e&&!De(r)&&!Ut(r)&&(r=K(r));const i=K(this);return gs(i).has.call(i,r)||(i.add(r),ct(i,"add",r,r)),this},set(r,i){!e&&!De(i)&&!Ut(i)&&(i=K(i));const o=K(this),{has:a,get:c}=gs(o);let l=a.call(o,r);l||(r=K(r),l=a.call(o,r));const u=c.call(o,r);return o.set(r,i),l?Dt(i,u)&&ct(o,"set",r,i):ct(o,"add",r,i),this},delete(r){const i=K(this),{has:o,get:a}=gs(i);let c=o.call(i,r);c||(r=K(r),c=o.call(i,r)),a&&a.call(i,r);const l=i.delete(r);return c&&ct(i,"delete",r,void 0),l},clear(){const r=K(this),i=r.size!==0,o=r.clear();return i&&ct(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Yl(r,t,e)}),n}function ui(t,e){const n=Xl(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(J(n,r)&&r in s?n:s,r,i)}const Zl={get:ui(!1,!1)},Ql={get:ui(!1,!0)},eu={get:ui(!0,!1)};const xa=new WeakMap,Na=new WeakMap,Da=new WeakMap,tu=new WeakMap;function nu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function su(t){return t.__v_skip||!Object.isExtensible(t)?0:nu(Al(t))}function rs(t){return Ut(t)?t:fi(t,!1,Gl,Zl,xa)}function Ma(t){return fi(t,!1,Jl,Ql,Na)}function La(t){return fi(t,!0,ql,eu,Da)}function fi(t,e,n,s,r){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=su(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function cn(t){return Ut(t)?cn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ut(t){return!!(t&&t.__v_isReadonly)}function De(t){return!!(t&&t.__v_isShallow)}function di(t){return t?!!t.__v_raw:!1}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function ru(t){return!J(t,"__v_skip")&&Object.isExtensible(t)&&ma(t,"__v_skip",!0),t}const de=t=>ie(t)?rs(t):t,Ns=t=>ie(t)?La(t):t;function pe(t){return t?t.__v_isRef===!0:!1}function fe(t){return Ua(t,!1)}function iu(t){return Ua(t,!0)}function Ua(t,e){return pe(t)?t:new ou(t,e)}class ou{constructor(e,n){this.dep=new Qs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:K(e),this._value=n?e:de(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||De(e)||Ut(e);e=s?e:K(e),Dt(e,n)&&(this._rawValue=e,this._value=s?e:de(e),this.dep.trigger())}}function Re(t){return pe(t)?t.value:t}const au={get:(t,e,n)=>e==="__v_raw"?t:Re(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return pe(r)&&!pe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Fa(t){return cn(t)?t:new Proxy(t,au)}class cu{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Qs,{get:s,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=s,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Y_(t){return new cu(t)}function lu(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=fu(t,n);return e}class uu{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Hl(K(this._object),this._key)}}function fu(t,e,n){const s=t[e];return pe(s)?s:new uu(t,e,n)}class du{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Qs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return Ia(this,!0),!0}get value(){const e=this.dep.track();return Ca(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function hu(t,e,n=!1){let s,r;return j(t)?s=t:(s=t.get,r=t.set),new du(s,r,n)}const _s={},Ds=new WeakMap;let Wt;function pu(t,e=!1,n=Wt){if(n){let s=Ds.get(n);s||Ds.set(n,s=[]),s.push(t)}}function gu(t,e,n=te){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=I=>r?I:De(I)||r===!1||r===0?lt(I,1):lt(I);let u,f,h,g,b=!1,S=!1;if(pe(t)?(f=()=>t.value,b=De(t)):cn(t)?(f=()=>l(t),b=!0):F(t)?(S=!0,b=t.some(I=>cn(I)||De(I)),f=()=>t.map(I=>{if(pe(I))return I.value;if(cn(I))return l(I);if(j(I))return c?c(I,2):I()})):j(t)?e?f=c?()=>c(t,2):t:f=()=>{if(h){pt();try{h()}finally{gt()}}const I=Wt;Wt=u;try{return c?c(t,3,[g]):t(g)}finally{Wt=I}}:f=et,e&&r){const I=f,O=r===!0?1/0:r;f=()=>lt(I(),O)}const U=Fl(),k=()=>{u.stop(),U&&U.active&&ri(U.effects,u)};if(i&&e){const I=e;e=(...O)=>{I(...O),k()}}let C=S?new Array(t.length).fill(_s):_s;const D=I=>{if(!(!(u.flags&1)||!u.dirty&&!I))if(e){const O=u.run();if(r||b||(S?O.some((ne,Z)=>Dt(ne,C[Z])):Dt(O,C))){h&&h();const ne=Wt;Wt=u;try{const Z=[O,C===_s?void 0:S&&C[0]===_s?[]:C,g];C=O,c?c(e,3,Z):e(...Z)}finally{Wt=ne}}}else u.run()};return a&&a(D),u=new wa(f),u.scheduler=o?()=>o(D,!1):D,g=I=>pu(I,!1,u),h=u.onStop=()=>{const I=Ds.get(u);if(I){if(c)c(I,4);else for(const O of I)O();Ds.delete(u)}},e?s?D(!0):C=u.run():o?o(D.bind(null,!0),!0):u.run(),k.pause=u.pause.bind(u),k.resume=u.resume.bind(u),k.stop=k,k}function lt(t,e=1/0,n){if(e<=0||!ie(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,pe(t))lt(t.value,e,n);else if(F(t))for(let s=0;s<t.length;s++)lt(t[s],e,n);else if(En(t)||an(t))t.forEach(s=>{lt(s,e,n)});else if(ga(t)){for(const s in t)lt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&lt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function is(t,e,n,s){try{return s?t(...s):t()}catch(r){tr(r,e,n)}}function st(t,e,n,s){if(j(t)){const r=is(t,e,n,s);return r&&ha(r)&&r.catch(i=>{tr(i,e,n)}),r}if(F(t)){const r=[];for(let i=0;i<t.length;i++)r.push(st(t[i],e,n,s));return r}}function tr(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||te;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){pt(),is(i,null,10,[t,c,l]),gt();return}}mu(t,n,r,s,o)}function mu(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const we=[];let Xe=-1;const ln=[];let Ct=null,tn=0;const $a=Promise.resolve();let Ms=null;function hi(t){const e=Ms||$a;return t?e.then(this?t.bind(this):t):e}function _u(t){let e=Xe+1,n=we.length;for(;e<n;){const s=e+n>>>1,r=we[s],i=zn(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function pi(t){if(!(t.flags&1)){const e=zn(t),n=we[we.length-1];!n||!(t.flags&2)&&e>=zn(n)?we.push(t):we.splice(_u(e),0,t),t.flags|=1,Va()}}function Va(){Ms||(Ms=$a.then(Ba))}function yu(t){F(t)?ln.push(...t):Ct&&t.id===-1?Ct.splice(tn+1,0,t):t.flags&1||(ln.push(t),t.flags|=1),Va()}function Hi(t,e,n=Xe+1){for(;n<we.length;n++){const s=we[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;we.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ha(t){if(ln.length){const e=[...new Set(ln)].sort((n,s)=>zn(n)-zn(s));if(ln.length=0,Ct){Ct.push(...e);return}for(Ct=e,tn=0;tn<Ct.length;tn++){const n=Ct[tn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ct=null,tn=0}}const zn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ba(t){try{for(Xe=0;Xe<we.length;Xe++){const e=we[Xe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),is(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xe<we.length;Xe++){const e=we[Xe];e&&(e.flags&=-2)}Xe=-1,we.length=0,Ha(),Ms=null,(we.length||ln.length)&&Ba()}}let he=null,ja=null;function Ls(t){const e=he;return he=t,ja=t&&t.type.__scopeId||null,e}function Ze(t,e=he,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&$s(-1);const i=Ls(e);let o;try{o=t(...r)}finally{Ls(i),s._d&&$s(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function X_(t,e){if(he===null)return t;const n=or(he),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=te]=e[r];i&&(j(i)&&(i={mounted:i,updated:i}),i.deep&&lt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Bt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(pt(),st(c,n,8,[t.el,a,t,e]),gt())}}const vu=Symbol("_vte"),bu=t=>t.__isTeleport,wu=Symbol("_leaveCb");function gi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,gi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wa(t,e){return j(t)?ye({name:t.name},e,{setup:t}):t}function za(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Us=new WeakMap;function Mn(t,e,n,s,r=!1){if(F(t)){t.forEach((b,S)=>Mn(b,e&&(F(e)?e[S]:e),n,s,r));return}if(un(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Mn(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?or(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===te?a.refs={}:a.refs,f=a.setupState,h=K(f),g=f===te?da:b=>J(h,b);if(l!=null&&l!==c){if(Bi(e),ae(l))u[l]=null,g(l)&&(f[l]=null);else if(pe(l)){l.value=null;const b=e;b.k&&(u[b.k]=null)}}if(j(c))is(c,a,12,[o,u]);else{const b=ae(c),S=pe(c);if(b||S){const U=()=>{if(t.f){const k=b?g(c)?f[c]:u[c]:c.value;if(r)F(k)&&ri(k,i);else if(F(k))k.includes(i)||k.push(i);else if(b)u[c]=[i],g(c)&&(f[c]=u[c]);else{const C=[i];c.value=C,t.k&&(u[t.k]=C)}}else b?(u[c]=o,g(c)&&(f[c]=o)):S&&(c.value=o,t.k&&(u[t.k]=o))};if(o){const k=()=>{U(),Us.delete(t)};k.id=-1,Us.set(t,k),ke(k,n)}else Bi(t),U()}}}function Bi(t){const e=Us.get(t);e&&(e.flags|=8,Us.delete(t))}Xs().requestIdleCallback;Xs().cancelIdleCallback;const un=t=>!!t.type.__asyncLoader,Ka=t=>t.type.__isKeepAlive;function Eu(t,e){Ga(t,"a",e)}function Iu(t,e){Ga(t,"da",e)}function Ga(t,e,n=_e){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(nr(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ka(r.parent.vnode)&&Su(s,e,n,r),r=r.parent}}function Su(t,e,n,s){const r=nr(e,t,s,!0);qa(()=>{ri(s[e],r)},n)}function nr(t,e,n=_e,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{pt();const a=os(n),c=st(e,n,t,o);return a(),gt(),c});return s?r.unshift(i):r.push(i),i}}const vt=t=>(e,n=_e)=>{(!qn||t==="sp")&&nr(t,(...s)=>e(...s),n)},Tu=vt("bm"),sr=vt("m"),Cu=vt("bu"),Au=vt("u"),mi=vt("bum"),qa=vt("um"),Ru=vt("sp"),Pu=vt("rtg"),ku=vt("rtc");function Ou(t,e=_e){nr("ec",t,e)}const xu="components";function Lr(t,e){return Du(xu,t,!0,e)||t}const Nu=Symbol.for("v-ndc");function Du(t,e,n=!0,s=!1){const r=he||_e;if(r){const i=r.type;{const a=If(i,!1);if(a&&(a===e||a===Me(e)||a===Ys(Me(e))))return i}const o=ji(r[t]||i[t],e)||ji(r.appContext[t],e);return!o&&s?i:o}}function ji(t,e){return t&&(t[e]||t[Me(e)]||t[Ys(Me(e))])}function Z_(t,e,n,s){let r;const i=n,o=F(t);if(o||ae(t)){const a=o&&cn(t);let c=!1,l=!1;a&&(c=!De(t),l=Ut(t),t=er(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(c?l?Ns(de(t[u])):de(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(ie(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];r[c]=e(t[u],u,c,i)}}else r=[];return r}function Q_(t,e,n={},s,r){if(he.ce||he.parent&&un(he.parent)&&he.parent.ce)return e!=="default"&&(n.name=e),ce(),Hr(Oe,null,[oe("slot",n,s)],64);let i=t[e];i&&i._c&&(i._d=!1),ce();const o=i&&Ja(i(n)),a=n.key||o&&o.key,c=Hr(Oe,{key:(a&&!Ve(a)?a:`_${e}`)+(!o&&s?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Ja(t){return t.some(e=>Gn(e)?!(e.type===mt||e.type===Oe&&!Ja(e.children)):!0)?t:null}const Ur=t=>t?gc(t)?or(t):Ur(t.parent):null,Ln=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ur(t.parent),$root:t=>Ur(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Xa(t),$forceUpdate:t=>t.f||(t.f=()=>{pi(t.update)}),$nextTick:t=>t.n||(t.n=hi.bind(t.proxy)),$watch:t=>tf.bind(t)}),yr=(t,e)=>t!==te&&!t.__isScriptSetup&&J(t,e),Mu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(yr(s,e))return o[e]=1,s[e];if(r!==te&&J(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&J(l,e))return o[e]=3,i[e];if(n!==te&&J(n,e))return o[e]=4,n[e];Fr&&(o[e]=0)}}const u=Ln[e];let f,h;if(u)return e==="$attrs"&&me(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==te&&J(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,J(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return yr(r,e)?(r[e]=n,!0):s!==te&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:o}},a){let c,l;return!!(n[a]||t!==te&&a[0]!=="$"&&J(t,a)||yr(e,a)||(c=i[0])&&J(c,a)||J(s,a)||J(Ln,a)||J(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wi(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Fr=!0;function Lu(t){const e=Xa(t),n=t.proxy,s=t.ctx;Fr=!1,e.beforeCreate&&zi(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:b,activated:S,deactivated:U,beforeDestroy:k,beforeUnmount:C,destroyed:D,unmounted:I,render:O,renderTracked:ne,renderTriggered:Z,errorCaptured:le,serverPrefetch:wt,expose:je,inheritAttrs:Et,components:Ht,directives:We,filters:Sn}=e;if(l&&Uu(l,s,null),o)for(const X in o){const G=o[X];j(G)&&(s[X]=G.bind(n))}if(r){const X=r.call(n,n);ie(X)&&(t.data=rs(X))}if(Fr=!0,i)for(const X in i){const G=i[X],rt=j(G)?G.bind(n,n):j(G.get)?G.get.bind(n,n):et,It=!j(G)&&j(G.set)?G.set.bind(n):et,ze=Ee({get:rt,set:It});Object.defineProperty(s,X,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Se=>ze.value=Se})}if(a)for(const X in a)Ya(a[X],s,n,X);if(c){const X=j(c)?c.call(n):c;Reflect.ownKeys(X).forEach(G=>{Un(G,X[G])})}u&&zi(u,t,"c");function ue(X,G){F(G)?G.forEach(rt=>X(rt.bind(n))):G&&X(G.bind(n))}if(ue(Tu,f),ue(sr,h),ue(Cu,g),ue(Au,b),ue(Eu,S),ue(Iu,U),ue(Ou,le),ue(ku,ne),ue(Pu,Z),ue(mi,C),ue(qa,I),ue(Ru,wt),F(je))if(je.length){const X=t.exposed||(t.exposed={});je.forEach(G=>{Object.defineProperty(X,G,{get:()=>n[G],set:rt=>n[G]=rt,enumerable:!0})})}else t.exposed||(t.exposed={});O&&t.render===et&&(t.render=O),Et!=null&&(t.inheritAttrs=Et),Ht&&(t.components=Ht),We&&(t.directives=We),wt&&za(t)}function Uu(t,e,n=et){F(t)&&(t=$r(t));for(const s in t){const r=t[s];let i;ie(r)?"default"in r?i=$e(r.from||s,r.default,!0):i=$e(r.from||s):i=$e(r),pe(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function zi(t,e,n){st(F(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ya(t,e,n,s){let r=s.includes(".")?lc(n,s):()=>n[s];if(ae(t)){const i=e[t];j(i)&&ws(r,i)}else if(j(t))ws(r,t.bind(n));else if(ie(t))if(F(t))t.forEach(i=>Ya(i,e,n,s));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&ws(r,i,t)}}function Xa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Fs(c,l,o,!0)),Fs(c,e,o)),ie(e)&&i.set(e,c),c}function Fs(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Fs(t,i,n,!0),r&&r.forEach(o=>Fs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Fu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Fu={data:Ki,props:Gi,emits:Gi,methods:Pn,computed:Pn,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:Pn,directives:Pn,watch:Vu,provide:Ki,inject:$u};function Ki(t,e){return e?t?function(){return ye(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function $u(t,e){return Pn($r(t),$r(e))}function $r(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function Pn(t,e){return t?ye(Object.create(null),t,e):e}function Gi(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:ye(Object.create(null),Wi(t),Wi(e??{})):e}function Vu(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const s in e)n[s]=ve(t[s],e[s]);return n}function Za(){return{app:null,config:{isNativeTag:da,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hu=0;function Bu(t,e){return function(s,r=null){j(s)||(s=ye({},s)),r!=null&&!ie(r)&&(r=null);const i=Za(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Hu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Tf,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(l,...f)):j(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,h){if(!c){const g=l._ceVNode||oe(s,r);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),t(g,u,h),c=!0,l._container=u,u.__vue_app__=l,or(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(st(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=fn;fn=l;try{return u()}finally{fn=f}}};return l}}let fn=null;function Un(t,e){if(_e){let n=_e.provides;const s=_e.parent&&_e.parent.provides;s===n&&(n=_e.provides=Object.create(s)),n[t]=e}}function $e(t,e,n=!1){const s=yf();if(s||fn){let r=fn?fn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&j(e)?e.call(s&&s.proxy):e}}const Qa={},ec=()=>Object.create(Qa),tc=t=>Object.getPrototypeOf(t)===Qa;function ju(t,e,n,s=!1){const r={},i=ec();t.propsDefaults=Object.create(null),nc(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ma(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Wu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=K(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(rr(t.emitsOptions,h))continue;const g=e[h];if(c)if(J(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const b=Me(h);r[b]=Vr(c,a,b,g,t,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{nc(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!J(e,f)&&((u=Jt(f))===f||!J(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Vr(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!J(e,f))&&(delete i[f],l=!0)}l&&ct(t.attrs,"set","")}function nc(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(xn(c))continue;const l=e[c];let u;r&&J(r,u=Me(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:rr(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=K(n),l=a||te;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Vr(r,c,f,l[f],t,!J(l,f))}}return o}function Vr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=J(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=os(r);s=l[n]=c.call(null,e),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Jt(n))&&(s=!0))}return s}const zu=new WeakMap;function sc(t,e,n=!1){const s=n?zu:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=f=>{c=!0;const[h,g]=sc(f,e,!0);ye(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ie(t)&&s.set(t,on),on;if(F(i))for(let u=0;u<i.length;u++){const f=Me(i[u]);qi(f)&&(o[f]=te)}else if(i)for(const u in i){const f=Me(u);if(qi(f)){const h=i[u],g=o[f]=F(h)||j(h)?{type:h}:ye({},h),b=g.type;let S=!1,U=!0;if(F(b))for(let k=0;k<b.length;++k){const C=b[k],D=j(C)&&C.name;if(D==="Boolean"){S=!0;break}else D==="String"&&(U=!1)}else S=j(b)&&b.name==="Boolean";g[0]=S,g[1]=U,(S||J(g,"default"))&&a.push(f)}}const l=[o,a];return ie(t)&&s.set(t,l),l}function qi(t){return t[0]!=="$"&&!xn(t)}const _i=t=>t==="_"||t==="_ctx"||t==="$stable",yi=t=>F(t)?t.map(Qe):[Qe(t)],Ku=(t,e,n)=>{if(e._n)return e;const s=Ze((...r)=>yi(e(...r)),n);return s._c=!1,s},rc=(t,e,n)=>{const s=t._ctx;for(const r in t){if(_i(r))continue;const i=t[r];if(j(i))e[r]=Ku(r,i,s);else if(i!=null){const o=yi(i);e[r]=()=>o}}},ic=(t,e)=>{const n=yi(e);t.slots.default=()=>n},oc=(t,e,n)=>{for(const s in e)(n||!_i(s))&&(t[s]=e[s])},Gu=(t,e,n)=>{const s=t.slots=ec();if(t.vnode.shapeFlag&32){const r=e._;r?(oc(s,e,n),n&&ma(s,"_",r,!0)):rc(e,s)}else e&&ic(t,e)},qu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=te;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:oc(r,e,n):(i=!e.$stable,rc(e,r)),o=e}else e&&(ic(t,e),o={default:1});if(i)for(const a in r)!_i(a)&&o[a]==null&&delete r[a]},ke=uf;function Ju(t){return Yu(t)}function Yu(t,e){const n=Xs();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=et,insertStaticContent:b}=t,S=(d,p,m,y=null,w=null,_=null,R=void 0,A=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!An(d,p)&&(y=v(d),Se(d,w,_,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:$,shapeFlag:x}=p;switch(E){case ir:U(d,p,m,y);break;case mt:k(d,p,m,y);break;case Es:d==null&&C(p,m,y,R);break;case Oe:Ht(d,p,m,y,w,_,R,A,T);break;default:x&1?O(d,p,m,y,w,_,R,A,T):x&6?We(d,p,m,y,w,_,R,A,T):(x&64||x&128)&&E.process(d,p,m,y,w,_,R,A,T,M)}$!=null&&w?Mn($,d&&d.ref,_,p||d,!p):$==null&&d&&d.ref!=null&&Mn(d.ref,null,_,d,!0)},U=(d,p,m,y)=>{if(d==null)s(p.el=a(p.children),m,y);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},k=(d,p,m,y)=>{d==null?s(p.el=c(p.children||""),m,y):p.el=d.el},C=(d,p,m,y)=>{[d.el,d.anchor]=b(d.children,p,m,y,d.el,d.anchor)},D=({el:d,anchor:p},m,y)=>{let w;for(;d&&d!==p;)w=h(d),s(d,m,y),d=w;s(p,m,y)},I=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),r(d),d=m;r(p)},O=(d,p,m,y,w,_,R,A,T)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),d==null?ne(p,m,y,w,_,R,A,T):wt(d,p,w,_,R,A,T)},ne=(d,p,m,y,w,_,R,A)=>{let T,E;const{props:$,shapeFlag:x,transition:L,dirs:B}=d;if(T=d.el=o(d.type,_,$&&$.is,$),x&8?u(T,d.children):x&16&&le(d.children,T,null,y,w,vr(d,_),R,A),B&&Bt(d,null,y,"created"),Z(T,d,d.scopeId,R,y),$){for(const se in $)se!=="value"&&!xn(se)&&i(T,se,null,$[se],_,y);"value"in $&&i(T,"value",null,$.value,_),(E=$.onVnodeBeforeMount)&&Je(E,y,d)}B&&Bt(d,null,y,"beforeMount");const z=Xu(w,L);z&&L.beforeEnter(T),s(T,p,m),((E=$&&$.onVnodeMounted)||z||B)&&ke(()=>{E&&Je(E,y,d),z&&L.enter(T),B&&Bt(d,null,y,"mounted")},w)},Z=(d,p,m,y,w)=>{if(m&&g(d,m),y)for(let _=0;_<y.length;_++)g(d,y[_]);if(w){let _=w.subTree;if(p===_||fc(_.type)&&(_.ssContent===p||_.ssFallback===p)){const R=w.vnode;Z(d,R,R.scopeId,R.slotScopeIds,w.parent)}}},le=(d,p,m,y,w,_,R,A,T=0)=>{for(let E=T;E<d.length;E++){const $=d[E]=A?At(d[E]):Qe(d[E]);S(null,$,p,m,y,w,_,R,A)}},wt=(d,p,m,y,w,_,R)=>{const A=p.el=d.el;let{patchFlag:T,dynamicChildren:E,dirs:$}=p;T|=d.patchFlag&16;const x=d.props||te,L=p.props||te;let B;if(m&&jt(m,!1),(B=L.onVnodeBeforeUpdate)&&Je(B,m,p,d),$&&Bt(p,d,m,"beforeUpdate"),m&&jt(m,!0),(x.innerHTML&&L.innerHTML==null||x.textContent&&L.textContent==null)&&u(A,""),E?je(d.dynamicChildren,E,A,m,y,vr(p,w),_):R||G(d,p,A,null,m,y,vr(p,w),_,!1),T>0){if(T&16)Et(A,x,L,m,w);else if(T&2&&x.class!==L.class&&i(A,"class",null,L.class,w),T&4&&i(A,"style",x.style,L.style,w),T&8){const z=p.dynamicProps;for(let se=0;se<z.length;se++){const Y=z[se],Te=x[Y],Ce=L[Y];(Ce!==Te||Y==="value")&&i(A,Y,Te,Ce,w,m)}}T&1&&d.children!==p.children&&u(A,p.children)}else!R&&E==null&&Et(A,x,L,m,w);((B=L.onVnodeUpdated)||$)&&ke(()=>{B&&Je(B,m,p,d),$&&Bt(p,d,m,"updated")},y)},je=(d,p,m,y,w,_,R)=>{for(let A=0;A<p.length;A++){const T=d[A],E=p[A],$=T.el&&(T.type===Oe||!An(T,E)||T.shapeFlag&198)?f(T.el):m;S(T,E,$,null,y,w,_,R,!0)}},Et=(d,p,m,y,w)=>{if(p!==m){if(p!==te)for(const _ in p)!xn(_)&&!(_ in m)&&i(d,_,p[_],null,w,y);for(const _ in m){if(xn(_))continue;const R=m[_],A=p[_];R!==A&&_!=="value"&&i(d,_,A,R,w,y)}"value"in m&&i(d,"value",p.value,m.value,w)}},Ht=(d,p,m,y,w,_,R,A,T)=>{const E=p.el=d?d.el:a(""),$=p.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:L,slotScopeIds:B}=p;B&&(A=A?A.concat(B):B),d==null?(s(E,m,y),s($,m,y),le(p.children||[],m,$,w,_,R,A,T)):x>0&&x&64&&L&&d.dynamicChildren?(je(d.dynamicChildren,L,m,w,_,R,A),(p.key!=null||w&&p===w.subTree)&&ac(d,p,!0)):G(d,p,m,$,w,_,R,A,T)},We=(d,p,m,y,w,_,R,A,T)=>{p.slotScopeIds=A,d==null?p.shapeFlag&512?w.ctx.activate(p,m,y,R,T):Sn(p,m,y,w,_,R,T):Xt(d,p,T)},Sn=(d,p,m,y,w,_,R)=>{const A=d.component=_f(d,y,w);if(Ka(d)&&(A.ctx.renderer=M),vf(A,!1,R),A.asyncDep){if(w&&w.registerDep(A,ue,R),!d.el){const T=A.subTree=oe(mt);k(null,T,p,m),d.placeholder=T.el}}else ue(A,d,p,m,w,_,R)},Xt=(d,p,m)=>{const y=p.component=d.component;if(cf(d,p,m))if(y.asyncDep&&!y.asyncResolved){X(y,p,m);return}else y.next=p,y.update();else p.el=d.el,y.vnode=p},ue=(d,p,m,y,w,_,R)=>{const A=()=>{if(d.isMounted){let{next:x,bu:L,u:B,parent:z,vnode:se}=d;{const Ge=cc(d);if(Ge){x&&(x.el=se.el,X(d,x,R)),Ge.asyncDep.then(()=>{d.isUnmounted||A()});return}}let Y=x,Te;jt(d,!1),x?(x.el=se.el,X(d,x,R)):x=se,L&&bs(L),(Te=x.props&&x.props.onVnodeBeforeUpdate)&&Je(Te,z,x,se),jt(d,!0);const Ce=Yi(d),Ke=d.subTree;d.subTree=Ce,S(Ke,Ce,f(Ke.el),v(Ke),d,w,_),x.el=Ce.el,Y===null&&lf(d,Ce.el),B&&ke(B,w),(Te=x.props&&x.props.onVnodeUpdated)&&ke(()=>Je(Te,z,x,se),w)}else{let x;const{el:L,props:B}=p,{bm:z,m:se,parent:Y,root:Te,type:Ce}=d,Ke=un(p);jt(d,!1),z&&bs(z),!Ke&&(x=B&&B.onVnodeBeforeMount)&&Je(x,Y,p),jt(d,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(Ce);const Ge=d.subTree=Yi(d);S(null,Ge,m,y,d,w,_),p.el=Ge.el}if(se&&ke(se,w),!Ke&&(x=B&&B.onVnodeMounted)){const Ge=p;ke(()=>Je(x,Y,Ge),w)}(p.shapeFlag&256||Y&&un(Y.vnode)&&Y.vnode.shapeFlag&256)&&d.a&&ke(d.a,w),d.isMounted=!0,p=m=y=null}};d.scope.on();const T=d.effect=new wa(A);d.scope.off();const E=d.update=T.run.bind(T),$=d.job=T.runIfDirty.bind(T);$.i=d,$.id=d.uid,T.scheduler=()=>pi($),jt(d,!0),E()},X=(d,p,m)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Wu(d,p.props,y,m),qu(d,p.children,m),pt(),Hi(d),gt()},G=(d,p,m,y,w,_,R,A,T=!1)=>{const E=d&&d.children,$=d?d.shapeFlag:0,x=p.children,{patchFlag:L,shapeFlag:B}=p;if(L>0){if(L&128){It(E,x,m,y,w,_,R,A,T);return}else if(L&256){rt(E,x,m,y,w,_,R,A,T);return}}B&8?($&16&&Ne(E,w,_),x!==E&&u(m,x)):$&16?B&16?It(E,x,m,y,w,_,R,A,T):Ne(E,w,_,!0):($&8&&u(m,""),B&16&&le(x,m,y,w,_,R,A,T))},rt=(d,p,m,y,w,_,R,A,T)=>{d=d||on,p=p||on;const E=d.length,$=p.length,x=Math.min(E,$);let L;for(L=0;L<x;L++){const B=p[L]=T?At(p[L]):Qe(p[L]);S(d[L],B,m,null,w,_,R,A,T)}E>$?Ne(d,w,_,!0,!1,x):le(p,m,y,w,_,R,A,T,x)},It=(d,p,m,y,w,_,R,A,T)=>{let E=0;const $=p.length;let x=d.length-1,L=$-1;for(;E<=x&&E<=L;){const B=d[E],z=p[E]=T?At(p[E]):Qe(p[E]);if(An(B,z))S(B,z,m,null,w,_,R,A,T);else break;E++}for(;E<=x&&E<=L;){const B=d[x],z=p[L]=T?At(p[L]):Qe(p[L]);if(An(B,z))S(B,z,m,null,w,_,R,A,T);else break;x--,L--}if(E>x){if(E<=L){const B=L+1,z=B<$?p[B].el:y;for(;E<=L;)S(null,p[E]=T?At(p[E]):Qe(p[E]),m,z,w,_,R,A,T),E++}}else if(E>L)for(;E<=x;)Se(d[E],w,_,!0),E++;else{const B=E,z=E,se=new Map;for(E=z;E<=L;E++){const Pe=p[E]=T?At(p[E]):Qe(p[E]);Pe.key!=null&&se.set(Pe.key,E)}let Y,Te=0;const Ce=L-z+1;let Ke=!1,Ge=0;const Tn=new Array(Ce);for(E=0;E<Ce;E++)Tn[E]=0;for(E=B;E<=x;E++){const Pe=d[E];if(Te>=Ce){Se(Pe,w,_,!0);continue}let qe;if(Pe.key!=null)qe=se.get(Pe.key);else for(Y=z;Y<=L;Y++)if(Tn[Y-z]===0&&An(Pe,p[Y])){qe=Y;break}qe===void 0?Se(Pe,w,_,!0):(Tn[qe-z]=E+1,qe>=Ge?Ge=qe:Ke=!0,S(Pe,p[qe],m,null,w,_,R,A,T),Te++)}const Di=Ke?Zu(Tn):on;for(Y=Di.length-1,E=Ce-1;E>=0;E--){const Pe=z+E,qe=p[Pe],Mi=p[Pe+1],Li=Pe+1<$?Mi.el||Mi.placeholder:y;Tn[E]===0?S(null,qe,m,Li,w,_,R,A,T):Ke&&(Y<0||E!==Di[Y]?ze(qe,m,Li,2):Y--)}}},ze=(d,p,m,y,w=null)=>{const{el:_,type:R,transition:A,children:T,shapeFlag:E}=d;if(E&6){ze(d.component.subTree,p,m,y);return}if(E&128){d.suspense.move(p,m,y);return}if(E&64){R.move(d,p,m,M);return}if(R===Oe){s(_,p,m);for(let x=0;x<T.length;x++)ze(T[x],p,m,y);s(d.anchor,p,m);return}if(R===Es){D(d,p,m);return}if(y!==2&&E&1&&A)if(y===0)A.beforeEnter(_),s(_,p,m),ke(()=>A.enter(_),w);else{const{leave:x,delayLeave:L,afterLeave:B}=A,z=()=>{d.ctx.isUnmounted?r(_):s(_,p,m)},se=()=>{_._isLeaving&&_[wu](!0),x(_,()=>{z(),B&&B()})};L?L(_,z,se):se()}else s(_,p,m)},Se=(d,p,m,y=!1,w=!1)=>{const{type:_,props:R,ref:A,children:T,dynamicChildren:E,shapeFlag:$,patchFlag:x,dirs:L,cacheIndex:B}=d;if(x===-2&&(w=!1),A!=null&&(pt(),Mn(A,null,m,d,!0),gt()),B!=null&&(p.renderCache[B]=void 0),$&256){p.ctx.deactivate(d);return}const z=$&1&&L,se=!un(d);let Y;if(se&&(Y=R&&R.onVnodeBeforeUnmount)&&Je(Y,p,d),$&6)ps(d.component,m,y);else{if($&128){d.suspense.unmount(m,y);return}z&&Bt(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,m,M,y):E&&!E.hasOnce&&(_!==Oe||x>0&&x&64)?Ne(E,p,m,!1,!0):(_===Oe&&x&384||!w&&$&16)&&Ne(T,p,m),y&&Zt(d)}(se&&(Y=R&&R.onVnodeUnmounted)||z)&&ke(()=>{Y&&Je(Y,p,d),z&&Bt(d,null,p,"unmounted")},m)},Zt=d=>{const{type:p,el:m,anchor:y,transition:w}=d;if(p===Oe){Qt(m,y);return}if(p===Es){I(d);return}const _=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:R,delayLeave:A}=w,T=()=>R(m,_);A?A(d.el,_,T):T()}else _()},Qt=(d,p)=>{let m;for(;d!==p;)m=h(d),r(d),d=m;r(p)},ps=(d,p,m)=>{const{bum:y,scope:w,job:_,subTree:R,um:A,m:T,a:E}=d;Ji(T),Ji(E),y&&bs(y),w.stop(),_&&(_.flags|=8,Se(R,d,p,m)),A&&ke(A,p),ke(()=>{d.isUnmounted=!0},p)},Ne=(d,p,m,y=!1,w=!1,_=0)=>{for(let R=_;R<d.length;R++)Se(d[R],p,m,y,w)},v=d=>{if(d.shapeFlag&6)return v(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),m=p&&p[vu];return m?h(m):p};let N=!1;const P=(d,p,m)=>{d==null?p._vnode&&Se(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,m),p._vnode=d,N||(N=!0,Hi(),Ha(),N=!1)},M={p:S,um:Se,m:ze,r:Zt,mt:Sn,mc:le,pc:G,pbc:je,n:v,o:t};return{render:P,hydrate:void 0,createApp:Bu(P)}}function vr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function jt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Xu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ac(t,e,n=!1){const s=t.children,r=e.children;if(F(s)&&F(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=At(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ac(o,a)),a.type===ir&&a.patchFlag!==-1&&(a.el=o.el),a.type===mt&&!a.el&&(a.el=o.el)}}function Zu(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function cc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cc(e)}function Ji(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Qu=Symbol.for("v-scx"),ef=()=>$e(Qu);function ey(t,e){return vi(t,null,e)}function ws(t,e,n){return vi(t,e,n)}function vi(t,e,n=te){const{immediate:s,deep:r,flush:i,once:o}=n,a=ye({},n),c=e&&s||!e&&i!=="post";let l;if(qn){if(i==="sync"){const g=ef();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=et,g.resume=et,g.pause=et,g}}const u=_e;a.call=(g,b,S)=>st(g,u,b,S);let f=!1;i==="post"?a.scheduler=g=>{ke(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,b)=>{b?g():pi(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const h=gu(t,e,a);return qn&&(l?l.push(h):c&&h()),h}function tf(t,e,n){const s=this.proxy,r=ae(t)?t.includes(".")?lc(s,t):()=>s[t]:t.bind(s,s);let i;j(e)?i=e:(i=e.handler,n=e);const o=os(this),a=vi(r,i.bind(s),n);return o(),a}function lc(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const nf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Me(e)}Modifiers`]||t[`${Jt(e)}Modifiers`];function sf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||te;let r=n;const i=e.startsWith("update:"),o=i&&nf(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>ae(u)?u.trim():u)),o.number&&(r=n.map(Os)));let a,c=s[a=hr(e)]||s[a=hr(Me(e))];!c&&i&&(c=s[a=hr(Jt(e))]),c&&st(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,st(l,t,6,r)}}const rf=new WeakMap;function uc(t,e,n=!1){const s=n?rf:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=uc(l,e,!0);u&&(a=!0,ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ie(t)&&s.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):ye(o,i),ie(t)&&s.set(t,o),o)}function rr(t,e){return!t||!qs(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,Jt(e))||J(t,e))}function Yi(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:g,ctx:b,inheritAttrs:S}=t,U=Ls(t);let k,C;try{if(n.shapeFlag&4){const I=r||s,O=I;k=Qe(l.call(O,I,u,f,g,h,b)),C=a}else{const I=e;k=Qe(I.length>1?I(f,{attrs:a,slots:o,emit:c}):I(f,null)),C=e.props?a:of(a)}}catch(I){Fn.length=0,tr(I,t,1),k=oe(mt)}let D=k;if(C&&S!==!1){const I=Object.keys(C),{shapeFlag:O}=D;I.length&&O&7&&(i&&I.some(si)&&(C=af(C,i)),D=mn(D,C,!1,!0))}return n.dirs&&(D=mn(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&gi(D,n.transition),k=D,Ls(U),k}const of=t=>{let e;for(const n in t)(n==="class"||n==="style"||qs(n))&&((e||(e={}))[n]=t[n]);return e},af=(t,e)=>{const n={};for(const s in t)(!si(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function cf(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Xi(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==s[h]&&!rr(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Xi(s,o,l):!0:!!o;return!1}function Xi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!rr(n,i))return!0}return!1}function lf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const fc=t=>t.__isSuspense;function uf(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):yu(t)}const Oe=Symbol.for("v-fgt"),ir=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),Es=Symbol.for("v-stc"),Fn=[];let xe=null;function ce(t=!1){Fn.push(xe=t?null:[])}function ff(){Fn.pop(),xe=Fn[Fn.length-1]||null}let Kn=1;function $s(t,e=!1){Kn+=t,t<0&&xe&&e&&(xe.hasOnce=!0)}function dc(t){return t.dynamicChildren=Kn>0?xe||on:null,ff(),Kn>0&&xe&&xe.push(t),t}function ge(t,e,n,s,r,i){return dc(H(t,e,n,s,r,i,!0))}function Hr(t,e,n,s,r){return dc(oe(t,e,n,s,r,!0))}function Gn(t){return t?t.__v_isVNode===!0:!1}function An(t,e){return t.type===e.type&&t.key===e.key}const hc=({key:t})=>t??null,Is=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ae(t)||pe(t)||j(t)?{i:he,r:t,k:e,f:!!n}:t:null);function H(t,e=null,n=null,s=0,r=null,i=t===Oe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hc(e),ref:e&&Is(e),scopeId:ja,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:he};return a?(bi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ae(n)?8:16),Kn>0&&!o&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const oe=df;function df(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Nu)&&(t=mt),Gn(t)){const a=mn(t,e,!0);return n&&bi(a,n),Kn>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(t)]=a:xe.push(a)),a.patchFlag=-2,a}if(Sf(t)&&(t=t.__vccOpts),e){e=hf(e);let{class:a,style:c}=e;a&&!ae(a)&&(e.class=be(a)),ie(c)&&(di(c)&&!F(c)&&(c=ye({},c)),e.style=Zs(c))}const o=ae(t)?1:fc(t)?128:bu(t)?64:ie(t)?4:j(t)?2:0;return H(t,e,n,s,r,o,i,!0)}function hf(t){return t?di(t)||tc(t)?ye({},t):t:null}function mn(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?pf(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&hc(l),ref:e&&e.ref?n&&i?F(i)?i.concat(Is(e)):[i,Is(e)]:Is(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Oe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mn(t.ssContent),ssFallback:t.ssFallback&&mn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&gi(u,c.clone(u)),u}function pc(t=" ",e=0){return oe(ir,null,t,e)}function ys(t,e){const n=oe(Es,null,t);return n.staticCount=e,n}function nn(t="",e=!1){return e?(ce(),Hr(mt,null,t)):oe(mt,null,t)}function Qe(t){return t==null||typeof t=="boolean"?oe(mt):F(t)?oe(Oe,null,t.slice()):Gn(t)?At(t):oe(ir,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mn(t)}function bi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!tc(e)?e._ctx=he:r===3&&he&&(he.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:he},n=32):(e=String(e),s&64?(n=16,e=[pc(e)]):n=8);t.children=e,t.shapeFlag|=n}function pf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=be([e.class,s.class]));else if(r==="style")e.style=Zs([e.style,s.style]);else if(qs(r)){const i=e[r],o=s[r];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Je(t,e,n,s=null){st(t,e,7,[n,s])}const gf=Za();let mf=0;function _f(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||gf,i={uid:mf++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ul(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sc(s,r),emitsOptions:uc(s,r),emit:null,emitted:null,propsDefaults:te,inheritAttrs:s.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sf.bind(null,i),t.ce&&t.ce(i),i}let _e=null;const yf=()=>_e||he;let Vs,Br;{const t=Xs(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Vs=e("__VUE_INSTANCE_SETTERS__",n=>_e=n),Br=e("__VUE_SSR_SETTERS__",n=>qn=n)}const os=t=>{const e=_e;return Vs(t),t.scope.on(),()=>{t.scope.off(),Vs(e)}},Zi=()=>{_e&&_e.scope.off(),Vs(null)};function gc(t){return t.vnode.shapeFlag&4}let qn=!1;function vf(t,e=!1,n=!1){e&&Br(e);const{props:s,children:r}=t.vnode,i=gc(t);ju(t,s,i,e),Gu(t,r,n||e);const o=i?bf(t,e):void 0;return e&&Br(!1),o}function bf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Mu);const{setup:s}=n;if(s){pt();const r=t.setupContext=s.length>1?Ef(t):null,i=os(t),o=is(s,t,0,[t.props,r]),a=ha(o);if(gt(),i(),(a||t.sp)&&!un(t)&&za(t),a){if(o.then(Zi,Zi),e)return o.then(c=>{Qi(t,c)}).catch(c=>{tr(c,t,0)});t.asyncDep=o}else Qi(t,o)}else mc(t)}function Qi(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=Fa(e)),mc(t)}function mc(t,e,n){const s=t.type;t.render||(t.render=s.render||et);{const r=os(t);pt();try{Lu(t)}finally{gt(),r()}}}const wf={get(t,e){return me(t,"get",""),t[e]}};function Ef(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wf),slots:t.slots,emit:t.emit,expose:e}}function or(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Fa(ru(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ln)return Ln[n](t)},has(e,n){return n in e||n in Ln}})):t.proxy}function If(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function Sf(t){return j(t)&&"__vccOpts"in t}const Ee=(t,e)=>hu(t,e,qn);function _c(t,e,n){const s=(i,o,a)=>{$s(-1);try{return oe(i,o,a)}finally{$s(1)}},r=arguments.length;return r===2?ie(e)&&!F(e)?Gn(e)?s(t,null,[e]):s(t,e):s(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gn(n)&&(n=[n]),s(t,e,n))}const Tf="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jr;const eo=typeof window<"u"&&window.trustedTypes;if(eo)try{jr=eo.createPolicy("vue",{createHTML:t=>t})}catch{}const yc=jr?t=>jr.createHTML(t):t=>t,Cf="http://www.w3.org/2000/svg",Af="http://www.w3.org/1998/Math/MathML",at=typeof document<"u"?document:null,to=at&&at.createElement("template"),Rf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?at.createElementNS(Cf,t):e==="mathml"?at.createElementNS(Af,t):n?at.createElement(t,{is:n}):at.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>at.createTextNode(t),createComment:t=>at.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>at.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{to.innerHTML=yc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=to.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Pf=Symbol("_vtc");function kf(t,e,n){const s=t[Pf];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const no=Symbol("_vod"),Of=Symbol("_vsh"),xf=Symbol(""),Nf=/(?:^|;)\s*display\s*:/;function Df(t,e,n){const s=t.style,r=ae(n);let i=!1;if(n&&!r){if(e)if(ae(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ss(s,a,"")}else for(const o in e)n[o]==null&&Ss(s,o,"");for(const o in n)o==="display"&&(i=!0),Ss(s,o,n[o])}else if(r){if(e!==n){const o=s[xf];o&&(n+=";"+o),s.cssText=n,i=Nf.test(n)}}else e&&t.removeAttribute("style");no in t&&(t[no]=i?s.display:"",t[Of]&&(s.display="none"))}const so=/\s*!important$/;function Ss(t,e,n){if(F(n))n.forEach(s=>Ss(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Mf(t,e);so.test(n)?t.setProperty(Jt(s),n.replace(so,""),"important"):t[s]=n}}const ro=["Webkit","Moz","ms"],br={};function Mf(t,e){const n=br[e];if(n)return n;let s=Me(e);if(s!=="filter"&&s in t)return br[e]=s;s=Ys(s);for(let r=0;r<ro.length;r++){const i=ro[r]+s;if(i in t)return br[e]=i}return e}const io="http://www.w3.org/1999/xlink";function oo(t,e,n,s,r,i=Ml(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(io,e.slice(6,e.length)):t.setAttributeNS(io,e,n):n==null||i&&!_a(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ve(n)?String(n):n)}function ao(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?yc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=_a(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Pt(t,e,n,s){t.addEventListener(e,n,s)}function Lf(t,e,n,s){t.removeEventListener(e,n,s)}const co=Symbol("_vei");function Uf(t,e,n,s,r=null){const i=t[co]||(t[co]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Ff(e);if(s){const l=i[e]=Hf(s,r);Pt(t,a,l,c)}else o&&(Lf(t,a,o,c),i[e]=void 0)}}const lo=/(?:Once|Passive|Capture)$/;function Ff(t){let e;if(lo.test(t)){e={};let s;for(;s=t.match(lo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jt(t.slice(2)),e]}let wr=0;const $f=Promise.resolve(),Vf=()=>wr||($f.then(()=>wr=0),wr=Date.now());function Hf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;st(Bf(s,n.value),e,5,[s])};return n.value=t,n.attached=Vf(),n}function Bf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const uo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,jf=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?kf(t,s,o):e==="style"?Df(t,n,s):qs(e)?si(e)||Uf(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wf(t,e,s,o))?(ao(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&oo(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ae(s))?ao(t,Me(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),oo(t,e,s,o))};function Wf(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&uo(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return uo(e)&&ae(n)?!1:e in t}const _n=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>bs(e,n):e};function zf(t){t.target.composing=!0}function fo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dt=Symbol("_assign"),ty={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[dt]=_n(r);const i=s||r.props&&r.props.type==="number";Pt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Os(a)),t[dt](a)}),n&&Pt(t,"change",()=>{t.value=t.value.trim()}),e||(Pt(t,"compositionstart",zf),Pt(t,"compositionend",fo),Pt(t,"change",fo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[dt]=_n(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Os(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},ny={deep:!0,created(t,e,n){t[dt]=_n(n),Pt(t,"change",()=>{const s=t._modelValue,r=Jn(t),i=t.checked,o=t[dt];if(F(s)){const a=oi(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(En(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(vc(t,i))})},mounted:ho,beforeUpdate(t,e,n){t[dt]=_n(n),ho(t,e,n)}};function ho(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(F(e))r=oi(e,s.props.value)>-1;else if(En(e))r=e.has(s.props.value);else{if(e===n)return;r=ss(e,vc(t,!0))}t.checked!==r&&(t.checked=r)}const sy={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=En(e);Pt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Os(Jn(o)):Jn(o));t[dt](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,hi(()=>{t._assigning=!1})}),t[dt]=_n(s)},mounted(t,{value:e}){po(t,e)},beforeUpdate(t,e,n){t[dt]=_n(n)},updated(t,{value:e}){t._assigning||po(t,e)}};function po(t,e){const n=t.multiple,s=F(e);if(!(n&&!s&&!En(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=Jn(o);if(n)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=oi(e,a)>-1}else o.selected=e.has(a);else if(ss(Jn(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Jn(t){return"_value"in t?t._value:t.value}function vc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Kf=["ctrl","shift","alt","meta"],Gf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Kf.some(n=>t[`${n}Key`]&&!e.includes(n))},ry=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const a=Gf[e[o]];if(a&&a(r,e))return}return t(r,...i)}))},qf=ye({patchProp:jf},Rf);let go;function Jf(){return go||(go=Ju(qf))}const Yf=((...t)=>{const e=Jf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Zf(s);if(!r)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Xf(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Xf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Zf(t){return ae(t)?document.querySelector(t):t}const Qf="/Pinghe/assets/LoadingTrain-Dl9H4zbh.png",ed="/Pinghe/assets/Logo-DzrdicbF.gif",td="/Pinghe/assets/student-h4fKY3lv.png",nd=()=>{};var mo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},sd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),s.push(n[u],n[f],n[h],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw new rd;const h=i<<2|a>>4;if(s.push(h),l!==64){const g=a<<4&240|l>>2;if(s.push(g),f!==64){const b=l<<6&192|f;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const id=function(t){const e=bc(t);return wc.encodeByteArray(e,!0)},Ec=function(t){return id(t).replace(/\./g,"")},Ic=function(t){try{return wc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=()=>od().__FIREBASE_DEFAULTS__,cd=()=>{if(typeof process>"u"||typeof mo>"u")return;const t=mo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ld=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ic(t[1]);return e&&JSON.parse(e)},wi=()=>{try{return nd()||ad()||cd()||ld()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ud=t=>wi()?.emulatorHosts?.[t],Sc=()=>wi()?.config,Tc=t=>wi()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dd(t){return(await fetch(t,{credentials:"include"})).ok}const $n={};function hd(){const t={prod:[],emulator:[]};for(const e of Object.keys($n))$n[e]?t.emulator.push(e):t.prod.push(e);return t}function pd(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let _o=!1;function gd(t,e){if(typeof window>"u"||typeof document>"u"||!ar(window.location.host)||$n[t]===e||$n[t]||_o)return;$n[t]=e;function n(h){return`__firebase__banner__${h}`}const s="__firebase__banner",i=hd().prod.length>0;function o(){const h=document.getElementById(s);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,g){h.setAttribute("width","24"),h.setAttribute("id",g),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function l(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{_o=!0,o()},h}function u(h,g){h.setAttribute("id",g),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=pd(s),g=n("text"),b=document.getElementById(g)||document.createElement("span"),S=n("learnmore"),U=document.getElementById(S)||document.createElement("a"),k=n("preprendIcon"),C=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const D=h.element;a(D),u(U,S);const I=l();c(C,k),D.append(C,b,U,I),document.body.appendChild(D)}i?(b.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(C.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function _d(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bd(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wd(){try{return typeof indexedDB=="object"}catch{return!1}}function Ed(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="FirebaseError";class Ft extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Id,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Sd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ft(r,a,s)}}function Sd(t,e){return t.replace(Td,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Td=/\{\$([^}]+)}/g;function Cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(yo(i)&&yo(o)){if(!yn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function yo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function kn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function On(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ad(t,e){const n=new Rd(t,e);return n.subscribe.bind(n)}class Rd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Pd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Er),r.error===void 0&&(r.error=Er),r.complete===void 0&&(r.complete=Er);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Er(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){return t&&t._delegate?t._delegate:t}class vn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new fd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xd(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zt){return this.instances.has(e)}getOptions(e=zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Od(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zt){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Od(t){return t===zt?void 0:t}function xd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Dd={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Md=ee.INFO,Ld={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Ud=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Ld[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cc{constructor(e){this.name=e,this._logLevel=Md,this._logHandler=Ud,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Fd=(t,e)=>e.some(n=>t instanceof n);let vo,bo;function $d(){return vo||(vo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vd(){return bo||(bo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ac=new WeakMap,Wr=new WeakMap,Rc=new WeakMap,Ir=new WeakMap,Ei=new WeakMap;function Hd(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ac.set(n,t)}).catch(()=>{}),Ei.set(e,t),e}function Bd(t){if(Wr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wr.set(t,e)}let zr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jd(t){zr=t(zr)}function Wd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Sr(this),e,...n);return Rc.set(s,e.sort?e.sort():[e]),Mt(s)}:Vd().includes(t)?function(...e){return t.apply(Sr(this),e),Mt(Ac.get(this))}:function(...e){return Mt(t.apply(Sr(this),e))}}function zd(t){return typeof t=="function"?Wd(t):(t instanceof IDBTransaction&&Bd(t),Fd(t,$d())?new Proxy(t,zr):t)}function Mt(t){if(t instanceof IDBRequest)return Hd(t);if(Ir.has(t))return Ir.get(t);const e=zd(t);return e!==t&&(Ir.set(t,e),Ei.set(e,t)),e}const Sr=t=>Ei.get(t);function Kd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Gd=["get","getKey","getAll","getAllKeys","count"],qd=["put","add","delete","clear"],Tr=new Map;function wo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tr.get(e))return Tr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=qd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Gd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Tr.set(e,i),i}jd(t=>({...t,get:(e,n,s)=>wo(e,n)||t.get(e,n,s),has:(e,n)=>!!wo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Yd(t){return t.getComponent()?.type==="VERSION"}const Kr="@firebase/app",Eo="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Cc("@firebase/app"),Xd="@firebase/app-compat",Zd="@firebase/analytics-compat",Qd="@firebase/analytics",eh="@firebase/app-check-compat",th="@firebase/app-check",nh="@firebase/auth",sh="@firebase/auth-compat",rh="@firebase/database",ih="@firebase/data-connect",oh="@firebase/database-compat",ah="@firebase/functions",ch="@firebase/functions-compat",lh="@firebase/installations",uh="@firebase/installations-compat",fh="@firebase/messaging",dh="@firebase/messaging-compat",hh="@firebase/performance",ph="@firebase/performance-compat",gh="@firebase/remote-config",mh="@firebase/remote-config-compat",_h="@firebase/storage",yh="@firebase/storage-compat",vh="@firebase/firestore",bh="@firebase/ai",wh="@firebase/firestore-compat",Eh="firebase",Ih="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="[DEFAULT]",Sh={[Kr]:"fire-core",[Xd]:"fire-core-compat",[Qd]:"fire-analytics",[Zd]:"fire-analytics-compat",[th]:"fire-app-check",[eh]:"fire-app-check-compat",[nh]:"fire-auth",[sh]:"fire-auth-compat",[rh]:"fire-rtdb",[ih]:"fire-data-connect",[oh]:"fire-rtdb-compat",[ah]:"fire-fn",[ch]:"fire-fn-compat",[lh]:"fire-iid",[uh]:"fire-iid-compat",[fh]:"fire-fcm",[dh]:"fire-fcm-compat",[hh]:"fire-perf",[ph]:"fire-perf-compat",[gh]:"fire-rc",[mh]:"fire-rc-compat",[_h]:"fire-gcs",[yh]:"fire-gcs-compat",[vh]:"fire-fst",[wh]:"fire-fst-compat",[bh]:"fire-vertex","fire-js":"fire-js",[Eh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new Map,Th=new Map,qr=new Map;function Io(t,e){try{t.container.addComponent(e)}catch(n){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yn(t){const e=t.name;if(qr.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;qr.set(e,t);for(const n of Hs.values())Io(n,t);for(const n of Th.values())Io(n,t);return!0}function Pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Le(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new as("app","Firebase",Ch);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=Ih;function kc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Gr,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Lt.create("bad-app-name",{appName:String(r)});if(n||(n=Sc()),!n)throw Lt.create("no-options");const i=Hs.get(r);if(i){if(yn(n,i.options)&&yn(s,i.config))return i;throw Lt.create("duplicate-app",{appName:r})}const o=new Nd(r);for(const c of qr.values())o.addComponent(c);const a=new Ah(n,s,o);return Hs.set(r,a),a}function Rh(t=Gr){const e=Hs.get(t);if(!e&&t===Gr&&Sc())return kc();if(!e)throw Lt.create("no-app",{appName:t});return e}function dn(t,e,n){let s=Sh[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(o.join(" "));return}Yn(new vn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="firebase-heartbeat-database",kh=1,Xn="firebase-heartbeat-store";let Cr=null;function Oc(){return Cr||(Cr=Kd(Ph,kh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),Cr}async function Oh(t){try{const n=(await Oc()).transaction(Xn),s=await n.objectStore(Xn).get(xc(t));return await n.done,s}catch(e){if(e instanceof Ft)_t.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e?.message});_t.warn(n.message)}}}async function So(t,e){try{const s=(await Oc()).transaction(Xn,"readwrite");await s.objectStore(Xn).put(e,xc(t)),await s.done}catch(n){if(n instanceof Ft)_t.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n?.message});_t.warn(s.message)}}}function xc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=1024,Nh=30;class Dh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=To();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>Nh){const r=Uh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){_t.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=To(),{heartbeatsToSend:n,unsentEntries:s}=Mh(this._heartbeatsCache.heartbeats),r=Ec(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return _t.warn(e),""}}}function To(){return new Date().toISOString().substring(0,10)}function Mh(t,e=xh){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Co(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Co(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wd()?Ed().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Oh(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return So(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return So(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Co(t){return Ec(JSON.stringify({version:2,heartbeats:t})).length}function Uh(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t){Yn(new vn("platform-logger",e=>new Jd(e),"PRIVATE")),Yn(new vn("heartbeat",e=>new Dh(e),"PRIVATE")),dn(Kr,Eo,t),dn(Kr,Eo,"esm2020"),dn("fire-js","")}Fh("");function Nc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $h=Nc,Dc=new as("auth","Firebase",Nc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Cc("@firebase/auth");function Vh(t,...e){Bs.logLevel<=ee.WARN&&Bs.warn(`Auth (${ls}): ${t}`,...e)}function Ts(t,...e){Bs.logLevel<=ee.ERROR&&Bs.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t,...e){throw Ii(t,...e)}function tt(t,...e){return Ii(t,...e)}function Mc(t,e,n){const s={...$h(),[e]:n};return new as("auth","Firebase",s).create(e,{appName:t.name})}function ht(t){return Mc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ii(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Dc.create(t,...e)}function V(t,e,...n){if(!t)throw Ii(e,...n)}function ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ts(e),new Error(e)}function yt(t,e){t||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(){return typeof self<"u"&&self.location?.href||""}function Hh(){return Ao()==="http:"||Ao()==="https:"}function Ao(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hh()||yd()||"connection"in navigator)?navigator.onLine:!0}function jh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.shortDelay=e,this.longDelay=n,yt(n>e,"Short delay should be less than long delay!"),this.isMobile=md()||vd()}get(){return Bh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t,e){yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Kh=new us(3e4,6e4);function $t(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Vt(t,e,n,s,r={}){return Uc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=cs({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return _d()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&ar(t.emulatorConfig.host)&&(l.credentials="include"),Lc.fetch()(await Fc(t,t.config.apiHost,n,a),l)})}async function Uc(t,e,n){t._canInitEmulator=!1;const s={...Wh,...e};try{const r=new qh(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw vs(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Mc(t,u,l);He(t,u)}}catch(r){if(r instanceof Ft)throw r;He(t,"network-request-failed",{message:String(r)})}}async function fs(t,e,n,s,r={}){const i=await Vt(t,e,n,s,r);return"mfaPendingCredential"in i&&He(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Fc(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Si(t.config,r):`${t.config.apiScheme}://${r}`;return zh.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Gh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tt(this.auth,"network-request-failed")),Kh.get())})}}function vs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=tt(t,e,s);return r.customData._tokenResponse=n,r}function Ro(t){return t!==void 0&&t.enterprise!==void 0}class Jh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Gh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Yh(t,e){return Vt(t,"GET","/v2/recaptchaConfig",$t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(t,e){return Vt(t,"POST","/v1/accounts:delete",e)}async function js(t,e){return Vt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zh(t,e=!1){const n=bt(t),s=await n.getIdToken(e),r=Ti(s);V(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:Vn(Ar(r.auth_time)),issuedAtTime:Vn(Ar(r.iat)),expirationTime:Vn(Ar(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ar(t){return Number(t)*1e3}function Ti(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ts("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ic(n);return r?JSON.parse(r):(Ts("Failed to decode base64 JWT payload"),null)}catch(r){return Ts("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Po(t){const e=Ti(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ft&&Qh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Qh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vn(this.lastLoginAt),this.creationTime=Vn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t){const e=t.auth,n=await t.getIdToken(),s=await Zn(t,js(e,{idToken:n}));V(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?$c(r.providerUserInfo):[],o=np(t.providerData,i),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!o?.length,l=a?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Yr(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function tp(t){const e=bt(t);await Ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function np(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function $c(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(t,e){const n=await Uc(t,{},async()=>{const s=cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await Fc(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return t.emulatorConfig&&ar(t.emulatorConfig.host)&&(c.credentials="include"),Lc.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rp(t,e){return Vt(t,"POST","/v2/accounts:revokeToken",$t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Po(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){V(e.length!==0,"internal-error");const n=Po(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await sp(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new hn;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(V(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(V(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ue{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new ep(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zh(this,e)}reload(){return tp(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ws(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(ht(this.auth));const e=await this.getIdToken();return await Zn(this,Xh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:h,isAnonymous:g,providerData:b,stsTokenManager:S}=n;V(f&&S,e,"internal-error");const U=hn.fromJSON(this.name,S);V(typeof f=="string",e,"internal-error"),St(s,e.name),St(r,e.name),V(typeof h=="boolean",e,"internal-error"),V(typeof g=="boolean",e,"internal-error"),St(i,e.name),St(o,e.name),St(a,e.name),St(c,e.name),St(l,e.name),St(u,e.name);const k=new Ue({uid:f,auth:e,email:r,emailVerified:h,displayName:s,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:U,createdAt:l,lastLoginAt:u});return b&&Array.isArray(b)&&(k.providerData=b.map(C=>({...C}))),c&&(k._redirectEventId=c),k}static async _fromIdTokenResponse(e,n,s=!1){const r=new hn;r.updateFromServerResponse(n);const i=new Ue({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ws(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];V(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?$c(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,a=new hn;a.updateFromIdToken(s);const c=new Ue({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Yr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map;function ft(t){yt(t instanceof Function,"Expected a class definition");let e=ko.get(t);return e?(yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ko.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vc.type="NONE";const Oo=Vc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t,e,n){return`firebase:${t}:${e}:${n}`}class pn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Cs(this.userKey,r.apiKey,i),this.fullPersistenceKey=Cs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await js(this.auth,{idToken:e}).catch(()=>{});return n?Ue._fromGetAccountInfoResponse(this.auth,n,e):null}return Ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pn(ft(Oo),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ft(Oo);const o=Cs(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const h=await js(e,{idToken:u}).catch(()=>{});if(!h)break;f=await Ue._fromGetAccountInfoResponse(e,h,u)}else f=Ue._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new pn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new pn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kc(e))return"Blackberry";if(Gc(e))return"Webos";if(Bc(e))return"Safari";if((e.includes("chrome/")||jc(e))&&!e.includes("edge/"))return"Chrome";if(zc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Hc(t=Ie()){return/firefox\//i.test(t)}function Bc(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jc(t=Ie()){return/crios\//i.test(t)}function Wc(t=Ie()){return/iemobile/i.test(t)}function zc(t=Ie()){return/android/i.test(t)}function Kc(t=Ie()){return/blackberry/i.test(t)}function Gc(t=Ie()){return/webos/i.test(t)}function Ci(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ip(t=Ie()){return Ci(t)&&!!window.navigator?.standalone}function op(){return bd()&&document.documentMode===10}function qc(t=Ie()){return Ci(t)||zc(t)||Gc(t)||Kc(t)||/windows phone/i.test(t)||Wc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t,e=[]){let n;switch(t){case"Browser":n=xo(Ie());break;case"Worker":n=`${xo(Ie())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(t,e={}){return Vt(t,"GET","/v2/passwordPolicy",$t(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=6;class up{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??lp,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new No(this),this.idTokenSubscription=new No(this),this.beforeStateQueue=new ap(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await pn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await js(this,{idToken:e}),s=await Ue._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Le(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ws(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(ht(this));const n=e?bt(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cp(this),n=new up(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await rp(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Vh(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Yt(t){return bt(t)}class No{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ad(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dp(t){cr=t}function Yc(t){return cr.loadJS(t)}function hp(){return cr.recaptchaEnterpriseScript}function pp(){return cr.gapiScript}function gp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class mp{constructor(){this.enterprise=new _p}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class _p{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const yp="recaptcha-enterprise",Xc="NO_RECAPTCHA";class vp{constructor(e){this.type=yp,this.auth=Yt(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Yh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Jh(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Ro(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Xc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mp().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Ro(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=hp();c.length!==0&&(c+=a),Yc(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Do(t,e,n,s=!1,r=!1){const i=new vp(t);let o;if(r)o=Xc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Xr(t,e,n,s,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Do(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Do(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t,e){const n=Pc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(yn(i,e??{}))return r;He(r,"already-initialized")}return n.initialize({options:e})}function wp(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(ft);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function Ep(t,e,n){const s=Yt(t);V(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Zc(e),{host:o,port:a}=Ip(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){V(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),V(yn(l,s.config.emulator)&&yn(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,ar(o)?(dd(`${i}//${o}${c}`),gd("Auth",!0)):Sp()}function Zc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ip(t){const e=Zc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Mo(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Mo(o)}}}function Mo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Sp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,n){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}async function Tp(t,e){return Vt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(t,e){return fs(t,"POST","/v1/accounts:signInWithPassword",$t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ap(t,e){return fs(t,"POST","/v1/accounts:signInWithEmailLink",$t(t,e))}async function Rp(t,e){return fs(t,"POST","/v1/accounts:signInWithEmailLink",$t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Ai{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Qn(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Qn(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xr(e,n,"signInWithPassword",Cp);case"emailLink":return Ap(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xr(e,s,"signUpPassword",Tp);case"emailLink":return Rp(e,{idToken:n,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e){return fs(t,"POST","/v1/accounts:signInWithIdp",$t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="http://localhost";class Gt extends Ai{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):He("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new Gt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gn(e,n)}buildRequest(){const e={requestUri:Pp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Op(t){const e=kn(On(t)).link,n=e?kn(On(e)).deep_link_id:null,s=kn(On(t)).deep_link_id;return(s?kn(On(s)).link:null)||s||n||e||t}class Ri{constructor(e){const n=kn(On(e)),s=n.apiKey??null,r=n.oobCode??null,i=kp(n.mode??null);V(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Op(e);try{return new Ri(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.providerId=In.PROVIDER_ID}static credential(e,n){return Qn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ri.parseLink(n);return V(s,"argument-error"),Qn._fromEmailAndCode(e,s.code,s.tenantId)}}In.PROVIDER_ID="password";In.EMAIL_PASSWORD_SIGN_IN_METHOD="password";In.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Qc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends ds{constructor(){super("facebook.com")}static credential(e){return Gt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ot.credential(n,s)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends ds{constructor(){super("github.com")}static credential(e){return Gt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends ds{constructor(){super("twitter.com")}static credential(e,n){return Gt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Nt.credential(n,s)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(t,e){return fs(t,"POST","/v1/accounts:signUp",$t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ue._fromIdTokenResponse(e,s,r),o=Lo(s);return new qt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Lo(s);return new qt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Lo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Ft{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,zs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new zs(e,n,s,r)}}function el(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zs._fromErrorAndOperation(t,i,e,s):i})}async function Np(t,e,n=!1){const s=await Zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(t,e,n=!1){const{auth:s}=t;if(Le(s.app))return Promise.reject(ht(s));const r="reauthenticate";try{const i=await Zn(t,el(s,r,e,t),n);V(i.idToken,s,"internal-error");const o=Ti(i.idToken);V(o,s,"internal-error");const{sub:a}=o;return V(t.uid===a,s,"user-mismatch"),qt._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&He(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(t,e,n=!1){if(Le(t.app))return Promise.reject(ht(t));const s="signIn",r=await el(t,s,e),i=await qt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Mp(t,e){return tl(Yt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(t){const e=Yt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Lp(t,e,n){if(Le(t.app))return Promise.reject(ht(t));const s=Yt(t),o=await Xr(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xp).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&nl(t),c}),a=await qt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Up(t,e,n){return Le(t.app)?Promise.reject(ht(t)):Mp(bt(t),In.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&nl(t),s})}function Fp(t,e,n,s){return bt(t).onIdTokenChanged(e,n,s)}function $p(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}function Vp(t,e,n,s){return bt(t).onAuthStateChanged(e,n,s)}function Hp(t){return bt(t).signOut()}const Ks="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ks,"1"),this.storage.removeItem(Ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=1e3,jp=10;class rl extends sl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);op()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,jp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Bp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rl.type="LOCAL";const Wp=rl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends sl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}il.type="SESSION";const ol=il;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new lr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await zp(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Pi("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function Gp(t){nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function qp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jp(){return navigator?.serviceWorker?.controller||null}function Yp(){return al()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="firebaseLocalStorageDb",Xp=1,Gs="firebaseLocalStorage",ll="fbase_key";class hs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ur(t,e){return t.transaction([Gs],e?"readwrite":"readonly").objectStore(Gs)}function Zp(){const t=indexedDB.deleteDatabase(cl);return new hs(t).toPromise()}function Zr(){const t=indexedDB.open(cl,Xp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Gs,{keyPath:ll})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Gs)?e(s):(s.close(),await Zp(),e(await Zr()))})})}async function Uo(t,e,n){const s=ur(t,!0).put({[ll]:e,value:n});return new hs(s).toPromise()}async function Qp(t,e){const n=ur(t,!1).get(e),s=await new hs(n).toPromise();return s===void 0?null:s.value}function Fo(t,e){const n=ur(t,!0).delete(e);return new hs(n).toPromise()}const eg=800,tg=3;class ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>tg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return al()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lr._getInstance(Yp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await qp(),!this.activeServiceWorker)return;this.sender=new Kp(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zr();return await Uo(e,Ks,"1"),await Fo(e,Ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Qp(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ur(r,!1).getAll();return new hs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ul.type="LOCAL";const ng=ul;new us(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e){return e?ft(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Ai{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rg(t){return tl(t.auth,new ki(t),t.bypassAuthState)}function ig(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Dp(n,new ki(t),t.bypassAuthState)}async function og(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Np(n,new ki(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rg;case"linkViaPopup":case"linkViaRedirect":return og;case"reauthViaPopup":case"reauthViaRedirect":return ig;default:He(this.auth,"internal-error")}}resolve(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=new us(2e3,1e4);class rn extends fl{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){yt(this.filter.length===1,"Popup operations only handle one event");const e=Pi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ag.get())};e()}}rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="pendingRedirect",As=new Map;class lg extends fl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=As.get(this.auth._key());if(!e){try{const s=await ug(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}As.set(this.auth._key(),e)}return this.bypassAuthState||As.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ug(t,e){const n=hg(e),s=dg(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function fg(t,e){As.set(t._key(),e)}function dg(t){return ft(t._redirectPersistence)}function hg(t){return Cs(cg,t.config.apiKey,t.name)}async function pg(t,e,n=!1){if(Le(t.app))return Promise.reject(ht(t));const s=Yt(t),r=sg(s,e),o=await new lg(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=600*1e3;class mg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_g(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!dl(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(tt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gg&&this.cachedEventUids.clear(),this.cachedEventUids.has($o(e))}saveEventToCache(e){this.cachedEventUids.add($o(e)),this.lastProcessedEventTime=Date.now()}}function $o(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dl({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function _g(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(t,e={}){return Vt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bg=/^https?/;async function wg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yg(t);for(const n of e)try{if(Eg(n))return}catch{}He(t,"unauthorized-domain")}function Eg(t){const e=Jr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!bg.test(n))return!1;if(vg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new us(3e4,6e4);function Vo(){const t=nt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Sg(t){return new Promise((e,n)=>{function s(){Vo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vo(),n(tt(t,"network-request-failed"))},timeout:Ig.get()})}if(nt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(nt().gapi?.load)s();else{const r=gp("iframefcb");return nt()[r]=()=>{gapi.load?s():n(tt(t,"network-request-failed"))},Yc(`${pp()}?onload=${r}`).catch(i=>n(i))}}).catch(e=>{throw Rs=null,e})}let Rs=null;function Tg(t){return Rs=Rs||Sg(t),Rs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=new us(5e3,15e3),Ag="__/auth/iframe",Rg="emulator/auth/iframe",Pg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Og(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Si(e,Rg):`https://${t.config.authDomain}/${Ag}`,s={apiKey:e.apiKey,appName:t.name,v:ls},r=kg.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${cs(s).slice(1)}`}async function xg(t){const e=await Tg(t),n=nt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:Og(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{i(o)},Cg.get());function c(){nt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dg=500,Mg=600,Lg="_blank",Ug="http://localhost";class Ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fg(t,e,n,s=Dg,r=Mg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...Ng,width:s.toString(),height:r.toString(),top:i,left:o},l=Ie().toLowerCase();n&&(a=jc(l)?Lg:n),Hc(l)&&(e=e||Ug,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,b])=>`${h}${g}=${b},`,"");if(ip(l)&&a!=="_self")return $g(e||"",a),new Ho(null);const f=window.open(e||"",a,u);V(f,t,"popup-blocked");try{f.focus()}catch{}return new Ho(f)}function $g(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="__/auth/handler",Hg="emulator/auth/handler",Bg=encodeURIComponent("fac");async function Bo(t,e,n,s,r,i){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ls,eventId:r};if(e instanceof Qc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof ds){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Bg}=${encodeURIComponent(c)}`:"";return`${jg(t)}?${cs(a).slice(1)}${l}`}function jg({config:t}){return t.emulator?Si(t,Hg):`https://${t.authDomain}/${Vg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="webStorageSupport";class Wg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ol,this._completeRedirectFn=pg,this._overrideRedirectResult=fg}async _openPopup(e,n,s,r){yt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Bo(e,n,s,Jr(),r);return Fg(e,i,Pi())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Bo(e,n,s,Jr(),r);return Gp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(yt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xg(e),s=new mg(e);return n.register("authEvent",r=>(V(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rr,{type:Rr},r=>{const i=r?.[0]?.[Rr];i!==void 0&&n(!!i),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qc()||Bc()||Ci()}}const zg=Wg;var jo="@firebase/auth",Wo="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qg(t){Yn(new vn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jc(t)},l=new fp(s,r,i,c);return wp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Yn(new vn("auth-internal",e=>{const n=Yt(e.getProvider("auth").getImmediate());return(s=>new Kg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(jo,Wo,Gg(t)),dn(jo,Wo,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=300,Yg=Tc("authIdTokenMaxAge")||Jg;let zo=null;const Xg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Yg)return;const r=n?.token;zo!==r&&(zo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Zg(t=Rh()){const e=Pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bp(t,{popupRedirectResolver:zg,persistence:[ng,Wp,ol]}),s=Tc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Xg(i.toString());$p(n,o,()=>o(n.currentUser)),Fp(n,a=>o(a))}}const r=ud("auth");return r&&Ep(n,`http://${r}`),n}function Qg(){return document.getElementsByTagName("head")?.[0]??document}dp({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=tt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Qg().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qg("Browser");var em="firebase",tm="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(em,tm,"app");const nm={apiKey:"AIzaSyAPw8mtj5DM7z9g5MHOfHhDPuqJl4RmX3k",authDomain:"sdgs-journey.firebaseapp.com",projectId:"sdgs-journey",storageBucket:"sdgs-journey.firebasestorage.app",messagingSenderId:"233910289851",appId:"1:233910289851:web:e2641b83540889819a309e"},sm=kc(nm),Ps=Zg(sm);console.log(!1);const rm="https://api.sdgs-journey.com/api/v1",Ko=parseInt("5242880")||5242880,Go="image/jpeg,image/jpg,image/png,image/gif,image/webp".split(",");class im{constructor(){this.baseURL=rm}async request(e,n={}){if(!this.baseURL||this.baseURL.trim()==="")throw console.warn("API_BASE_URL is empty, skipping API call for:",e),new Error("API_BASE_URL_NOT_CONFIGURED");const s=`${this.baseURL}${e}`,r={headers:{"Content-Type":"application/json",...n.headers},...n},i=localStorage.getItem("auth_token");i&&i!=="student_token"&&i!=="visitor_token"&&(r.headers.Authorization=`Bearer ${i}`);try{const o=await fetch(s,r);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const a=o.headers.get("content-type");return a&&a.includes("application/json")?await o.json():o}catch(o){throw console.error("API request failed:",o),o}}validateImageFile(e){const n=[];if(!e)return n.push("No file selected"),n;if(Go.includes(e.type)||n.push(`Invalid file type. Allowed types: ${Go.join(", ")}`),e.size>Ko){const s=(Ko/1024/1024).toFixed(1);n.push(`File size too large. Maximum size: ${s}MB`)}return n}async uploadImage(e,n="story"){const s=this.validateImageFile(e);if(s.length>0)throw new Error(s.join(", "));const r=new FormData;r.append("image",e),r.append("type",n);try{const i=await fetch(`${this.baseURL}/upload/image`,{method:"POST",headers:{...localStorage.getItem("auth_token")&&localStorage.getItem("auth_token")!=="student_token"&&localStorage.getItem("auth_token")!=="visitor_token"?{Authorization:`Bearer ${localStorage.getItem("auth_token")}`}:{}},body:r});if(!i.ok){const a=await i.text();throw new Error(`Upload failed (${i.status}): ${a}`)}const o=await i.json();if(!o.url)throw new Error("Invalid server response: missing URL");return o}catch(i){throw console.error("Image upload failed:",i),i}}async getArticles(){return this.request("/articles")}async getArticle(e){return this.request(`/articles/${e}`)}async createArticle(e){return this.request("/articles",{method:"POST",body:JSON.stringify(e)})}async updateArticle(e,n){return this.request(`/articles/${e}`,{method:"PUT",body:JSON.stringify(n)})}async deleteArticle(e){return this.request(`/articles/${e}`,{method:"DELETE"})}async login(e){return this.request("/auth/login",{method:"POST",body:JSON.stringify(e)})}async register(e){return console.log(JSON.stringify(e)),this.request("/auth/register",{method:"POST",body:JSON.stringify(e)})}async getProfile(){return this.request("/users/profile")}async updateProfile(e){return this.request("/users/profile",{method:"PUT",body:JSON.stringify(e)})}}const Pr=new im,W=rs({isAuthenticated:!1,user:null});let ks;const om=new Promise(t=>{ks=t});Vp(Ps,t=>{if(t){W.isAuthenticated=!0;const e=localStorage.getItem("user_data");if(e){const n=JSON.parse(e);n.uid===t.uid?W.user=n:(localStorage.removeItem("user_data"),W.user=null)}else W.user=null;t.getIdToken().then(n=>{localStorage.setItem("auth_token",n)})}else W.isAuthenticated=!1,W.user=null,localStorage.removeItem("auth_token"),localStorage.removeItem("user_data");ks&&(ks(),ks=null)});const Oi=()=>{const t={admin:{account:"admin",password:"admin"},teacher:{account:"tc",password:"tc"}},e=async(g,b,S,U,k)=>{try{const C=await Lp(Ps,b,S),D=await C.user.getIdToken();console.log("Firebase registration successful"),localStorage.setItem("auth_token",D);const I={full_name:g,institution_id:1,role:k,id_token:D};console.log(I);try{const O=await Pr.register(I);console.log("Backend registration successful:",O)}catch(O){console.error("Backend registration failed:",O);const ne=!1,Z=O.message?.includes("ERR_CONNECTION_REFUSED")||O.message?.includes("Failed to fetch")||O.message?.includes("NetworkError")||O.message?.includes("API_BASE_URL_NOT_CONFIGURED");ne&&Z||console.warn("User registered in Firebase but backend registration failed")}return W.user={email:C.user.email,role:k,username:g,displayName:"老師",uid:C.user.uid,institution_id:U,id_token:D},W.isAuthenticated=!0,localStorage.setItem("auth_token",D),localStorage.setItem("user_data",JSON.stringify(W.user)),{success:!0,user:W.user}}catch(C){return console.error("Registration Error:",C),C.code==="auth/email-already-in-use"?{success:!1,message:"此電子郵件已被註冊"}:C.code==="auth/weak-password"?{success:!1,message:"密碼強度不足"}:C.code==="auth/invalid-email"?{success:!1,message:"無效的電子郵件格式"}:{success:!1,message:C.message||"註冊失敗，請稍後再試"}}},n=async g=>{const b={id_token:"eyJhbGciOiJSUzI1NiIsImtpZCI6ImUzZWU3ZTAyOGUzODg1YTM0NWNlMDcwNTVmODQ2ODYyMjU1YTcwNDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2Rncy1qb3VybmV5IiwiYXVkIjoic2Rncy1qb3VybmV5IiwiYXV0aF90aW1lIjoxNzU4MDA1Njc2LCJ1c2VyX2lkIjoiemRwZ1JqY2NlVWVqNzFGSmZFWnIwZk1UdnhsMiIsInN1YiI6InpkcGdSamNjZVVlajcxRkpmRVpyMGZNVHZ4bDIiLCJpYXQiOjE3NTgwMDU2NzYsImV4cCI6MTc1ODAwOTI3NiwiZW1haWwiOiJ0ZXN0OThAc2Rnc2pvdXJuZXkuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3Q5OEBzZGdzam91cm5leS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Z6-8m6VlNV1IZ6fnMCifgP1flT3zZRVxhfovKUyvdZ0nwodxkgfcjlsSavH6tnEaijdOKQYCm5WL016EPpNK5k2nT7OuO269rfAsNOs9JC6VAgHbFVWVyV4WLF6ssVbpEQCEd6z3RTGRX2NJf0BS3dXyozAOMuUbz_wMeNFNe4I_8Os19FAJZFGLjATBkkm1ccqEtKpyYoZBE0loQ6g4VxH-z8xuF7GPimpMnVrB-UYAmyK6NPXJt4AKEMbXkIkTM8kBf3f3dwP5GxoG_WlWpIdVWuVANQwjkbpYi6nLvCFlWFd0eNg_GjhJ9Xl7xc_ecyo0COXIo97587V3RiBoDw",full_name:"Test Teacher User",role:"teacher",institution_id:1};localStorage.setItem("auth_token",b.id_token);try{const S=await Pr.register(b);console.log("Backend registration successful:",S)}catch(S){console.error("Backend registration failed:",S),console.warn("User registered in Firebase but backend registration failed")}},s=async(g,b)=>{try{localStorage.removeItem("user_data"),W.user=null;const U=await(await Up(Ps,g,b)).user.getIdToken();localStorage.setItem("auth_token",U);try{const k=await Pr.login({id_token:U});console.log("Backend login successful:",k),W.user=k.user}catch(k){return console.error("Backend login failed:",k),localStorage.removeItem("auth_token"),{success:!1,message:"後端登入失敗，請稍後再試"}}return W.isAuthenticated=!0,localStorage.setItem("user_data",JSON.stringify(W.user)),{success:!0}}catch(S){return console.error("Login Error:",S),localStorage.removeItem("auth_token"),localStorage.removeItem("user_data"),W.user=null,W.isAuthenticated=!1,{success:!1,message:S.message}}},r=async(g,b)=>await s(g,b),i=(g,b={})=>{switch(W.isAuthenticated=!0,g){case"admin":W.user={account:b.account||"admin",role:"admin",displayName:"管理員",icon:"fa-user-shield"},localStorage.setItem("auth_token","admin_token"),localStorage.setItem("user_data",JSON.stringify(W.user));break;case"teacher":W.user={account:b.account||"teacher",role:"teacher",displayName:"老師",icon:"fa-user-tie"},localStorage.setItem("auth_token","teacher_token"),localStorage.setItem("user_data",JSON.stringify(W.user));break;case"student":W.user={account:b.name||"學生",role:"student",displayName:"學生",icon:"fa-user-graduate"},localStorage.setItem("auth_token","student_token"),localStorage.setItem("user_data",JSON.stringify(W.user));break;case"visitor":W.user={account:"訪客",role:"visitor",displayName:"訪客",icon:"fa-user"},localStorage.setItem("auth_token","visitor_token"),localStorage.setItem("user_data",JSON.stringify(W.user));break}return{success:!0}},o=(g,b)=>g===t.admin.account&&b===t.admin.password?i("admin",{account:g}):{success:!1,message:"帳號或密碼錯誤"},a=(g,b)=>g===t.teacher.account&&b===t.teacher.password?i("teacher",{account:g}):{success:!1,message:"帳號或密碼錯誤"},c=async()=>{try{await Hp(Ps)}catch(g){console.error("Sign out error",g)}W.isAuthenticated=!1,W.user=null,localStorage.removeItem("auth_token"),localStorage.removeItem("user_data")},l=Ee(()=>W.user&&W.user.role==="admin"),u=Ee(()=>W.user&&W.user.role==="teacher"),f=Ee(()=>W.user&&W.user.role==="student"),h=Ee(()=>W.user&&W.user.role==="visitor");return{...lu(W),isAdmin:l,isTeacher:u,isStudent:f,isVisitor:h,selectRole:i,adminLogin:o,teacherLogin:a,logout:c,registerWithEmailAndPassword:e,loginWithEmailAndPassword:r,loginWithCredentials:s,test:n}};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const sn=typeof document<"u";function hl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function am(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&hl(t.default)}const q=Object.assign;function kr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Be(r)?r.map(t):t(r)}return n}const Hn=()=>{},Be=Array.isArray,pl=/#/g,cm=/&/g,lm=/\//g,um=/=/g,fm=/\?/g,gl=/\+/g,dm=/%5B/g,hm=/%5D/g,ml=/%5E/g,pm=/%60/g,_l=/%7B/g,gm=/%7C/g,yl=/%7D/g,mm=/%20/g;function xi(t){return encodeURI(""+t).replace(gm,"|").replace(dm,"[").replace(hm,"]")}function _m(t){return xi(t).replace(_l,"{").replace(yl,"}").replace(ml,"^")}function Qr(t){return xi(t).replace(gl,"%2B").replace(mm,"+").replace(pl,"%23").replace(cm,"%26").replace(pm,"`").replace(_l,"{").replace(yl,"}").replace(ml,"^")}function ym(t){return Qr(t).replace(um,"%3D")}function vm(t){return xi(t).replace(pl,"%23").replace(fm,"%3F")}function bm(t){return t==null?"":vm(t).replace(lm,"%2F")}function es(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const wm=/\/$/,Em=t=>t.replace(wm,"");function Or(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Cm(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:es(o)}}function Im(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sm(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&bn(e.matched[s],n.matched[r])&&vl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Tm(t[n],e[n]))return!1;return!0}function Tm(t,e){return Be(t)?Jo(t,e):Be(e)?Jo(e,t):t===e}function Jo(t,e){return Be(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Cm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ts;(function(t){t.pop="pop",t.push="push"})(ts||(ts={}));var Bn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bn||(Bn={}));function Am(t){if(!t)if(sn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Em(t)}const Rm=/^[^#]+#/;function Pm(t,e){return t.replace(Rm,"#")+e}function km(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const fr=()=>({left:window.scrollX,top:window.scrollY});function Om(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=km(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yo(t,e){return(history.state?history.state.position-e:-1)+t}const ei=new Map;function xm(t,e){ei.set(t,e)}function Nm(t){const e=ei.get(t);return ei.delete(t),e}let Dm=()=>location.protocol+"//"+location.host;function bl(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),qo(c,"")}return qo(n,t)+s+r}function Mm(t,e,n,s){let r=[],i=[],o=null;const a=({state:h})=>{const g=bl(t,location),b=n.value,S=e.value;let U=0;if(h){if(n.value=g,e.value=h,o&&o===b){o=null;return}U=S?h.position-S.position:0}else s(g);r.forEach(k=>{k(n.value,b,{delta:U,type:ts.pop,direction:U?U>0?Bn.forward:Bn.back:Bn.unknown})})};function c(){o=n.value}function l(h){r.push(h);const g=()=>{const b=r.indexOf(h);b>-1&&r.splice(b,1)};return i.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(q({},h.state,{scroll:fr()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Xo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?fr():null}}function Lm(t){const{history:e,location:n}=window,s={value:bl(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Dm()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=q({},e.state,Xo(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=q({},r.value,e.state,{forward:c,scroll:fr()});i(u.current,u,!0);const f=q({},Xo(s.value,c,null),{position:u.position+1},l);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Um(t){t=Am(t);const e=Lm(t),n=Mm(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=q({location:"",base:t,go:s,createHref:Pm.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Fm(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Um(t)}function $m(t){return typeof t=="string"||t&&typeof t=="object"}function wl(t){return typeof t=="string"||typeof t=="symbol"}const El=Symbol("");var Zo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zo||(Zo={}));function wn(t,e){return q(new Error,{type:t,[El]:!0},e)}function ot(t,e){return t instanceof Error&&El in t&&(e==null||!!(t.type&e))}const Qo="[^/]+?",Vm={sensitive:!1,strict:!1,start:!0,end:!0},Hm=/[.+*?^${}()[\]/\\]/g;function Bm(t,e){const n=q({},Vm,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let f=0;f<l.length;f++){const h=l[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Hm,"\\$&"),g+=40;else if(h.type===1){const{value:b,repeatable:S,optional:U,regexp:k}=h;i.push({name:b,repeatable:S,optional:U});const C=k||Qo;if(C!==Qo){g+=10;try{new RegExp(`(${C})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${b}" (${C}): `+I.message)}}let D=S?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;f||(D=U&&l.length<2?`(?:/${D})`:"/"+D),U&&(D+="?"),r+=D,g+=20,U&&(g+=-8),S&&(g+=-20),C===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",b=i[h-1];f[b.name]=g&&b.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:b,repeatable:S,optional:U}=g,k=b in l?l[b]:"";if(Be(k)&&!S)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const C=Be(k)?k.join("/"):k;if(!C)if(U)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=C}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function jm(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Il(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=jm(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(ea(s))return 1;if(ea(r))return-1}return r.length-s.length}function ea(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Wm={type:0,value:""},zm=/[a-zA-Z0-9_]/;function Km(t){if(!t)return[[]];if(t==="/")return[[Wm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:zm.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),r}function Gm(t,e,n){const s=Bm(Km(t.path),n),r=q(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function qm(t,e){const n=[],s=new Map;e=ra({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,h,g){const b=!g,S=na(f);S.aliasOf=g&&g.record;const U=ra(e,f),k=[S];if("alias"in f){const I=typeof f.alias=="string"?[f.alias]:f.alias;for(const O of I)k.push(na(q({},S,{components:g?g.record.components:S.components,path:O,aliasOf:g?g.record:S})))}let C,D;for(const I of k){const{path:O}=I;if(h&&O[0]!=="/"){const ne=h.record.path,Z=ne[ne.length-1]==="/"?"":"/";I.path=h.record.path+(O&&Z+O)}if(C=Gm(I,h,U),g?g.alias.push(C):(D=D||C,D!==C&&D.alias.push(C),b&&f.name&&!sa(C)&&o(f.name)),Sl(C)&&c(C),S.children){const ne=S.children;for(let Z=0;Z<ne.length;Z++)i(ne[Z],C,g&&g.children[Z])}g=g||C}return D?()=>{o(D)}:Hn}function o(f){if(wl(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const h=Xm(f,n);n.splice(h,0,f),f.record.name&&!sa(f)&&s.set(f.record.name,f)}function l(f,h){let g,b={},S,U;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw wn(1,{location:f});U=g.record.name,b=q(ta(h.params,g.keys.filter(D=>!D.optional).concat(g.parent?g.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),f.params&&ta(f.params,g.keys.map(D=>D.name))),S=g.stringify(b)}else if(f.path!=null)S=f.path,g=n.find(D=>D.re.test(S)),g&&(b=g.parse(S),U=g.record.name);else{if(g=h.name?s.get(h.name):n.find(D=>D.re.test(h.path)),!g)throw wn(1,{location:f,currentLocation:h});U=g.record.name,b=q({},h.params,f.params),S=g.stringify(b)}const k=[];let C=g;for(;C;)k.unshift(C.record),C=C.parent;return{name:U,path:S,params:b,matched:k,meta:Ym(k)}}t.forEach(f=>i(f));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function ta(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function na(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Jm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Jm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function sa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ym(t){return t.reduce((e,n)=>q(e,n.meta),{})}function ra(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Xm(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;Il(t,e[i])<0?s=i:n=i+1}const r=Zm(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function Zm(t){let e=t;for(;e=e.parent;)if(Sl(e)&&Il(t,e)===0)return e}function Sl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Qm(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(gl," "),o=i.indexOf("="),a=es(o<0?i:i.slice(0,o)),c=o<0?null:es(i.slice(o+1));if(a in e){let l=e[a];Be(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ia(t){let e="";for(let n in t){const s=t[n];if(n=ym(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Be(s)?s.map(i=>i&&Qr(i)):[s&&Qr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function e_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Be(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const t_=Symbol(""),oa=Symbol(""),dr=Symbol(""),Ni=Symbol(""),ti=Symbol("");function Rn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rt(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(wn(4,{from:n,to:e})):h instanceof Error?c(h):$m(h)?c(wn(2,{from:e,to:h})):(o&&s.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(s&&s.instances[r],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(h=>c(h))})}function xr(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(hl(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Rt(u,n,s,o,a,r))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=am(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Rt(g,n,s,o,a,r)()}))}}return i}function aa(t){const e=$e(dr),n=$e(Ni),s=Ee(()=>{const c=Re(t.to);return e.resolve(c)}),r=Ee(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(bn.bind(null,u));if(h>-1)return h;const g=ca(c[l-2]);return l>1&&ca(u)===g&&f[f.length-1].path!==g?f.findIndex(bn.bind(null,c[l-2])):h}),i=Ee(()=>r.value>-1&&o_(n.params,s.value.params)),o=Ee(()=>r.value>-1&&r.value===n.matched.length-1&&vl(n.params,s.value.params));function a(c={}){if(i_(c)){const l=e[Re(t.replace)?"replace":"push"](Re(t.to)).catch(Hn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:s,href:Ee(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function n_(t){return t.length===1?t[0]:t}const s_=Wa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:aa,setup(t,{slots:e}){const n=rs(aa(t)),{options:s}=$e(dr),r=Ee(()=>({[la(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[la(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&n_(e.default(n));return t.custom?i:_c("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),r_=s_;function i_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function o_(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Be(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ca(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const la=(t,e,n)=>t??e??n,a_=Wa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=$e(ti),r=Ee(()=>t.route||s.value),i=$e(oa,0),o=Ee(()=>{let l=Re(i);const{matched:u}=r.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ee(()=>r.value.matched[o.value]);Un(oa,Ee(()=>o.value+1)),Un(t_,a),Un(ti,r);const c=fe();return ws(()=>[c.value,a.value,t.name],([l,u,f],[h,g,b])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!bn(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(S=>S(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return ua(n.default,{Component:h,route:l});const g=f.props[u],b=g?g===!0?l.params:typeof g=="function"?g(l):g:null,U=_c(h,q({},b,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return ua(n.default,{Component:U,route:l})||U}}});function ua(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const c_=a_;function l_(t){const e=qm(t.routes,t),n=t.parseQuery||Qm,s=t.stringifyQuery||ia,r=t.history,i=Rn(),o=Rn(),a=Rn(),c=iu(Tt);let l=Tt;sn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=kr.bind(null,v=>""+v),f=kr.bind(null,bm),h=kr.bind(null,es);function g(v,N){let P,M;return wl(v)?(P=e.getRecordMatcher(v),M=N):M=v,e.addRoute(M,P)}function b(v){const N=e.getRecordMatcher(v);N&&e.removeRoute(N)}function S(){return e.getRoutes().map(v=>v.record)}function U(v){return!!e.getRecordMatcher(v)}function k(v,N){if(N=q({},N||c.value),typeof v=="string"){const m=Or(n,v,N.path),y=e.resolve({path:m.path},N),w=r.createHref(m.fullPath);return q(m,y,{params:h(y.params),hash:es(m.hash),redirectedFrom:void 0,href:w})}let P;if(v.path!=null)P=q({},v,{path:Or(n,v.path,N.path).path});else{const m=q({},v.params);for(const y in m)m[y]==null&&delete m[y];P=q({},v,{params:f(m)}),N.params=f(N.params)}const M=e.resolve(P,N),Q=v.hash||"";M.params=u(h(M.params));const d=Im(s,q({},v,{hash:_m(Q),path:M.path})),p=r.createHref(d);return q({fullPath:d,hash:Q,query:s===ia?e_(v.query):v.query||{}},M,{redirectedFrom:void 0,href:p})}function C(v){return typeof v=="string"?Or(n,v,c.value.path):q({},v)}function D(v,N){if(l!==v)return wn(8,{from:N,to:v})}function I(v){return Z(v)}function O(v){return I(q(C(v),{replace:!0}))}function ne(v){const N=v.matched[v.matched.length-1];if(N&&N.redirect){const{redirect:P}=N;let M=typeof P=="function"?P(v):P;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=C(M):{path:M},M.params={}),q({query:v.query,hash:v.hash,params:M.path!=null?{}:v.params},M)}}function Z(v,N){const P=l=k(v),M=c.value,Q=v.state,d=v.force,p=v.replace===!0,m=ne(P);if(m)return Z(q(C(m),{state:typeof m=="object"?q({},Q,m.state):Q,force:d,replace:p}),N||P);const y=P;y.redirectedFrom=N;let w;return!d&&Sm(s,M,P)&&(w=wn(16,{to:y,from:M}),ze(M,M,!0,!1)),(w?Promise.resolve(w):je(y,M)).catch(_=>ot(_)?ot(_,2)?_:It(_):G(_,y,M)).then(_=>{if(_){if(ot(_,2))return Z(q({replace:p},C(_.to),{state:typeof _.to=="object"?q({},Q,_.to.state):Q,force:d}),N||y)}else _=Ht(y,M,!0,p,Q);return Et(y,M,_),_})}function le(v,N){const P=D(v,N);return P?Promise.reject(P):Promise.resolve()}function wt(v){const N=Qt.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(v):v()}function je(v,N){let P;const[M,Q,d]=u_(v,N);P=xr(M.reverse(),"beforeRouteLeave",v,N);for(const m of M)m.leaveGuards.forEach(y=>{P.push(Rt(y,v,N))});const p=le.bind(null,v,N);return P.push(p),Ne(P).then(()=>{P=[];for(const m of i.list())P.push(Rt(m,v,N));return P.push(p),Ne(P)}).then(()=>{P=xr(Q,"beforeRouteUpdate",v,N);for(const m of Q)m.updateGuards.forEach(y=>{P.push(Rt(y,v,N))});return P.push(p),Ne(P)}).then(()=>{P=[];for(const m of d)if(m.beforeEnter)if(Be(m.beforeEnter))for(const y of m.beforeEnter)P.push(Rt(y,v,N));else P.push(Rt(m.beforeEnter,v,N));return P.push(p),Ne(P)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),P=xr(d,"beforeRouteEnter",v,N,wt),P.push(p),Ne(P))).then(()=>{P=[];for(const m of o.list())P.push(Rt(m,v,N));return P.push(p),Ne(P)}).catch(m=>ot(m,8)?m:Promise.reject(m))}function Et(v,N,P){a.list().forEach(M=>wt(()=>M(v,N,P)))}function Ht(v,N,P,M,Q){const d=D(v,N);if(d)return d;const p=N===Tt,m=sn?history.state:{};P&&(M||p?r.replace(v.fullPath,q({scroll:p&&m&&m.scroll},Q)):r.push(v.fullPath,Q)),c.value=v,ze(v,N,P,p),It()}let We;function Sn(){We||(We=r.listen((v,N,P)=>{if(!ps.listening)return;const M=k(v),Q=ne(M);if(Q){Z(q(Q,{replace:!0,force:!0}),M).catch(Hn);return}l=M;const d=c.value;sn&&xm(Yo(d.fullPath,P.delta),fr()),je(M,d).catch(p=>ot(p,12)?p:ot(p,2)?(Z(q(C(p.to),{force:!0}),M).then(m=>{ot(m,20)&&!P.delta&&P.type===ts.pop&&r.go(-1,!1)}).catch(Hn),Promise.reject()):(P.delta&&r.go(-P.delta,!1),G(p,M,d))).then(p=>{p=p||Ht(M,d,!1),p&&(P.delta&&!ot(p,8)?r.go(-P.delta,!1):P.type===ts.pop&&ot(p,20)&&r.go(-1,!1)),Et(M,d,p)}).catch(Hn)}))}let Xt=Rn(),ue=Rn(),X;function G(v,N,P){It(v);const M=ue.list();return M.length?M.forEach(Q=>Q(v,N,P)):console.error(v),Promise.reject(v)}function rt(){return X&&c.value!==Tt?Promise.resolve():new Promise((v,N)=>{Xt.add([v,N])})}function It(v){return X||(X=!v,Sn(),Xt.list().forEach(([N,P])=>v?P(v):N()),Xt.reset()),v}function ze(v,N,P,M){const{scrollBehavior:Q}=t;if(!sn||!Q)return Promise.resolve();const d=!P&&Nm(Yo(v.fullPath,0))||(M||!P)&&history.state&&history.state.scroll||null;return hi().then(()=>Q(v,N,d)).then(p=>p&&Om(p)).catch(p=>G(p,v,N))}const Se=v=>r.go(v);let Zt;const Qt=new Set,ps={currentRoute:c,listening:!0,addRoute:g,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:U,getRoutes:S,resolve:k,options:t,push:I,replace:O,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:rt,install(v){const N=this;v.component("RouterLink",r_),v.component("RouterView",c_),v.config.globalProperties.$router=N,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Re(c)}),sn&&!Zt&&c.value===Tt&&(Zt=!0,I(r.location).catch(Q=>{}));const P={};for(const Q in Tt)Object.defineProperty(P,Q,{get:()=>c.value[Q],enumerable:!0});v.provide(dr,N),v.provide(Ni,Ma(P)),v.provide(ti,c);const M=v.unmount;Qt.add(v),v.unmount=function(){Qt.delete(v),Qt.size<1&&(l=Tt,We&&We(),We=null,c.value=Tt,Zt=!1,X=!1),M()}}};function Ne(v){return v.reduce((N,P)=>N.then(()=>wt(P)),Promise.resolve())}return ps}function u_(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>bn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>bn(l,c))||r.push(c))}return[n,s,r]}function f_(){return $e(dr)}function iy(t){return $e(Ni)}function d_(t,e){const n=s=>{t.value&&!t.value.contains(s.target)&&e()};sr(()=>document.addEventListener("mousedown",n)),mi(()=>document.removeEventListener("mousedown",n))}const h_={key:0,class:"loading-overlay text-pblue-500"},p_={class:"train-track"},g_={key:0,class:"fallback-train"},m_={class:"p-3"},__={key:0},y_={key:1},v_={class:"p-3 md:p-3"},b_={key:0},w_={key:1},E_={class:"p-3"},I_={key:0},S_={key:1},T_={class:"px-4 text-rice-500 text-shadow-3d"},C_={key:0,class:"p-3"},A_={key:0,class:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20 text-gray-800 overflow-hidden"},R_={class:"px-4 py-2"},P_={__name:"App",setup(t){const{isAuthenticated:e,user:n,isAdmin:s,isTeacher:r,isStudent:i,isVisitor:o,logout:a}=Oi(),c=f_(),l=fe(!0),u=fe(!1),f=fe(!1),h=fe(!0),g=fe(0),b=fe(!1),S=fe(null);d_(S,()=>{b.value=!1});const U=()=>{console.log("Train image failed to load"),u.value=!0},k=()=>{console.log("Train image loaded successfully"),u.value=!1},C=I=>{const O=I.target.scrollTop===void 0?window.scrollY:I.target.scrollTop;O<100||f.value?h.value=!0:O>g.value?h.value=!1:h.value=!0,g.value=O<0?0:O},D=()=>{a(),f.value=!1,b.value=!1,c.push("/")};return Un("handleAppScroll",C),sr(()=>{window.addEventListener("scroll",C),setTimeout(()=>{l.value=!1},1e3)}),mi(()=>{window.removeEventListener("scroll",C)}),(I,O)=>{const ne=Lr("router-link"),Z=Lr("router-view");return ce(),ge(Oe,null,[l.value&&I.$route.path!=="/"&&I.$route.path!=="/about"?(ce(),ge("div",h_,[H("div",p_,[H("img",{src:Qf,class:"loader",alt:"Loading...",onError:U,onLoad:k},null,32),u.value?(ce(),ge("div",g_,"🚂")):nn("",!0)]),O[8]||(O[8]=H("p",null,"載入中...",-1))])):nn("",!0),H("nav",{class:be(["fixed top-0 left-0 z-50 w-full p-2 text-rice-500 md:text-4xl flex flex-row justify-between items-center transition-transform duration-300 ease-in-out",[I.$route.path!=="/"?"bg-header":"",h.value||f.value?"translate-y-0":"-translate-y-full",{"pointer-events-none":!h.value&&!f.value}]])},[oe(ne,{to:"/",onClick:O[0]||(O[0]=le=>f.value=!1),class:"flex flex-row items-center gap-2"},{default:Ze(()=>[H("img",{src:ed,alt:"School Logo",class:be([{hidden:I.$route.path==="/"},"relative z-20 inset-0 w-1/11 object-center md:w-1/20"])},null,2),H("div",{class:be([{hidden:I.$route.path==="/"},"relative z-20 my-auto md:text-3xl text-2xl"])}," 彰化市平和國民小學 ",2)]),_:1}),I.$route.path!=="/"?(ce(),ge("button",{key:0,onClick:O[1]||(O[1]=le=>f.value=!f.value),class:"md:hidden z-20"},[...O[9]||(O[9]=[H("i",{class:"fa-solid fa-bars"},null,-1)])])):nn("",!0),I.$route.path!=="/"?(ce(),ge("div",{key:1,class:be([["fixed top-0 left-0 w-full flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out md:relative md:h-[4rem] md:w-auto md:bg-transparent md:flex-row md:gap-3 text-xl md:text-2xl md:whitespace-nowrap",f.value?"h-screen":"h-0",f.value?"translate-x-0":"-translate-x-full md:translate-x-0",f.value?"bg-[url(@/assets/images/Mobile/mobile_Bcakground_2.png)] bg-cover bg-center overflow-hidden":""],"md:text-shadow-none"])},[O[14]||(O[14]=H("div",{class:"absolute z-[-10] inset-0 bg-black/40 md:hidden"},null,-1)),oe(ne,{to:"/",class:be(["px-8 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":I.$route.path==="/"}]),onClick:O[2]||(O[2]=le=>f.value=!1)},{default:Ze(()=>[...O[10]||(O[10]=[H("div",{class:"p-3"},"首頁",-1)])]),_:1},8,["class"]),oe(ne,{to:"/about",class:be(["px-4 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":I.$route.path==="/about"}]),onClick:O[3]||(O[3]=le=>f.value=!1)},{default:Ze(()=>[H("div",m_,[I.$route.path!=="/about"?(ce(),ge("span",__,"校園探索")):(ce(),ge("span",y_,"EXPLORATION"))])]),_:1},8,["class"]),oe(ne,{to:"/actions",class:be(["px-4 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":I.$route.path==="/actions"}]),onClick:O[4]||(O[4]=le=>f.value=!1)},{default:Ze(()=>[H("div",v_,[I.$route.path!=="/actions"?(ce(),ge("span",b_,"SDGs行動")):(ce(),ge("span",w_,"SDGs ACTION"))])]),_:1},8,["class"]),oe(ne,{to:"/sdgs",class:be(["px-4 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":I.$route.path==="/sdgs"||I.$route.path.includes("/story")}]),onClick:O[5]||(O[5]=le=>f.value=!1)},{default:Ze(()=>[H("div",E_,[I.$route.path!=="/sdgs"&&!I.$route.path.includes("/story")?(ce(),ge("span",I_,"SDGs成果")):(ce(),ge("span",S_,"SDGs RESULT"))])]),_:1},8,["class"]),H("div",T_,[Re(e)?(ce(),ge("div",{key:1,class:"relative",ref_key:"profileMenu",ref:S},[H("button",{onClick:O[7]||(O[7]=le=>b.value=!b.value),class:"min-w-10"},[...O[12]||(O[12]=[H("img",{src:td,alt:"User Profile",class:"w-10 h-10 rounded-full object-cover"},null,-1)])]),b.value?(ce(),ge("div",A_,[H("div",R_,[H("p",{class:be(["text-sm font-medium",{"text-red-500":Re(s),"text-blue-500":Re(r),"text-green-500":Re(i),"text-gray-500":Re(o)}])},va(Re(n)?.full_name),3)]),O[13]||(O[13]=H("div",{class:"border-t border-gray-200"},null,-1)),H("button",{onClick:D,class:"w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"}," 登出 ")])):nn("",!0)],512)):(ce(),ge("div",C_,[oe(ne,{to:"/login",onClick:O[6]||(O[6]=le=>f.value=!1),class:"hover:text-orange-300 transition-colors flex items-center gap-2"},{default:Ze(()=>[...O[11]||(O[11]=[H("i",{class:"fas fa-user-plus"},null,-1),pc(" 登入 ",-1)])]),_:1})]))])],2)):nn("",!0)],2),oe(Z)],64)}}},k_="modulepreload",O_=function(t){return"/Pinghe/"+t},fa={},Ye=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=c(n.map(l=>{if(l=O_(l),l in fa)return;fa[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":k_,u||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((g,b)=>{h.addEventListener("load",g),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},x_="/Pinghe/assets/Title-DP11h-Zm.png",N_="/Pinghe/assets/Train_Smoke_W-CTtTvEtc.gif",D_="/Pinghe/assets/Train_Smoke_M-CsE4hGUV.gif",M_=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},L_={class:"relative w-screen h-screen flex flex-col gap-12 lg:gap-0 max-[380px]:gap-1 justify-start items-center lg:flex-row text-center bg-[url('@/assets/images/Mobile/Mobile_MainPage_Background2.png')] bg-cover bg-center overflow-hidden lg:bg-[url('@/assets/images/MainPage_Pic.webp'),_url('@/assets/images/MainPage_Background_T.png')] lg:[background-repeat:no-repeat,no-repeat] lg:[background-position:right,center] lg:[background-size:contain,cover]"},U_={class:"order-1 lg:order-2 z-10 lg:w-1/2 flex justify-center items-center pt-25 lg:pt-0 lg:h-full lg:items-start lg:translate-y-18"},F_={class:"order-2 lg:order-1 z-20 lg:w-1/2 flex justify-center items-center lg:h-full lg:items-start lg:translate-66 lg:translate-x-78"},$_={class:"relative group self-stretch"},V_={class:"relative group self-stretch"},H_={class:"relative group self-stretch"},B_={class:"w-full h-full absolute top-0 left-0 pointer-events-none overflow-hidden"},j_=["src"],W_=["src"],z_={key:0,class:"fixed inset-0 bg-black/80 flex items-center justify-center z-50"},K_={__name:"Home",setup(t){const{selectRole:e}=Oi(),n=fe(!1),s=fe(!1),r=fe(!1),i=fe(!1),o=fe(!1);fe(""),fe({username:"",password:""}),fe({username:"",password:""}),fe(!1),fe("");const a=localStorage.getItem("user_data");console.log(JSON.parse(a)),sr(()=>{setTimeout(()=>{n.value=!0},100)});const c=()=>{s.value=!1,r.value=!0},l=()=>{s.value=!1,i.value=!0},u=()=>{s.value=!1,o.value=!0},f=()=>{e("visitor"),s.value=!1};return(h,g)=>{const b=Lr("router-link");return ce(),ge("main",L_,[H("section",U_,[H("div",{class:be([["transition-all duration-3000 ease-out",n.value?"opacity-100":"opacity-0"],"w-full flex justify-center lg:justify-start"])},[...g[0]||(g[0]=[H("picture",null,[H("img",{src:x_,class:"pointer-events-none select-none max-w-77 lg:max-w-150",alt:"Pinghe_Text_H"})],-1)])],2)]),H("section",F_,[H("div",{class:be([["transition-all duration-3000 ease-out",n.value?"opacity-100":"opacity-0"],"inline-flex flex-col gap-4 lg:gap-10 items-start justify-center text-xl lg:text-4xl text-black"])},[H("div",$_,[oe(b,{to:"/about",class:"relative block ml-22 mr-50 lg:ml-10 lg:mr-50 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"},{default:Ze(()=>[...g[1]||(g[1]=[H("span",{class:"block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"},"校園探索",-1),H("span",{class:"absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"},"Explore →",-1)])]),_:1})]),H("div",V_,[oe(b,{to:"/actions",class:"relative block ml-36 mr-36 lg:ml-30 lg:mr-30 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"},{default:Ze(()=>[...g[2]||(g[2]=[H("span",{class:"block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"},"SDGs行動",-1),H("span",{class:"absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"},"Actions →",-1)])]),_:1})]),H("div",H_,[oe(b,{to:"/sdgs",class:"relative block ml-50 mr-22 lg:ml-60 lg:mr-0 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"},{default:Ze(()=>[...g[3]||(g[3]=[H("span",{class:"block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"},"SDGs成果",-1),H("span",{class:"absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"},"Results →",-1)])]),_:1})])],2)]),H("div",B_,[H("img",{src:Re(N_),class:"hidden lg:block absolute top-0 left-0 w-full h-full object-cover object-center select-none animate-train-enter",alt:"Pinghe_Train_Smoke"},null,8,j_),H("img",{src:Re(D_),class:"block lg:hidden absolute top-0 left-0 w-full h-full object-cover object-center select-none animate-train-enter",alt:"Pinghe_Train_Smoke"},null,8,W_)]),s.value?(ce(),ge("div",z_,[H("div",{class:"bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"},[g[8]||(g[8]=H("h2",{class:"text-2xl font-bold text-center mb-6 text-gray-800"}," 請選擇您的身分 ",-1)),H("div",{class:"space-y-4"},[H("button",{onClick:c,class:"w-full p-4 border-2 border-red-200 rounded-lg hover:border-red-400 hover:bg-red-50 transition-colors group"},[...g[4]||(g[4]=[ys('<div class="flex items-center gap-4" data-v-fac249cd><div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white group-hover:bg-red-600" data-v-fac249cd><i class="fas fa-user-shield text-xl" data-v-fac249cd></i></div><div class="text-left" data-v-fac249cd><h3 class="text-lg font-semibold text-gray-800" data-v-fac249cd>管理員</h3><p class="text-sm text-gray-600" data-v-fac249cd>系統管理員權限</p></div></div>',1)])]),H("button",{onClick:l,class:"w-full p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors group"},[...g[5]||(g[5]=[ys('<div class="flex items-center gap-4" data-v-fac249cd><div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white group-hover:bg-blue-600" data-v-fac249cd><i class="fas fa-user-tie text-xl" data-v-fac249cd></i></div><div class="text-left" data-v-fac249cd><h3 class="text-lg font-semibold text-gray-800" data-v-fac249cd>老師</h3><p class="text-sm text-gray-600" data-v-fac249cd>具有編輯和管理權限</p></div></div>',1)])]),H("button",{onClick:u,class:"w-full p-4 border-2 border-green-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors group"},[...g[6]||(g[6]=[ys('<div class="flex items-center gap-4" data-v-fac249cd><div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:bg-green-600" data-v-fac249cd><i class="fas fa-user-graduate text-xl" data-v-fac249cd></i></div><div class="text-left" data-v-fac249cd><h3 class="text-lg font-semibold text-gray-800" data-v-fac249cd>學生</h3><p class="text-sm text-gray-600" data-v-fac249cd>瀏覽內容並參與互動</p></div></div>',1)])]),H("button",{onClick:f,class:"w-full p-4 border-2 border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors group"},[...g[7]||(g[7]=[ys('<div class="flex items-center gap-4" data-v-fac249cd><div class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white group-hover:bg-gray-600" data-v-fac249cd><i class="fas fa-user text-xl" data-v-fac249cd></i></div><div class="text-left" data-v-fac249cd><h3 class="text-lg font-semibold text-gray-800" data-v-fac249cd>訪客</h3><p class="text-sm text-gray-600" data-v-fac249cd>瀏覽所有公開內容</p></div></div>',1)])])])])])):nn("",!0)])}}},G_=M_(K_,[["__scopeId","data-v-fac249cd"]]),q_=[{path:"/",name:"Home",component:G_},{path:"/login",name:"Login",component:()=>Ye(()=>import("./Login-1jKGG87b.js"),[])},{path:"/register",name:"Register",component:()=>Ye(()=>import("./Register-ipNOplRq.js"),[])},{path:"/about",name:"About",component:()=>Ye(()=>import("./About-CpE9eSqm.js"),__vite__mapDeps([0,1,2]))},{path:"/actions",name:"Actions",component:()=>Ye(()=>import("./Actions-hVI-0Lc3.js"),__vite__mapDeps([3,4,5,6,7,8,1,2]))},{path:"/actions/new",name:"actions-new",component:()=>Ye(()=>import("./ActionNew-BtTLUUaC.js"),__vite__mapDeps([9,7,8,10,6,11])),meta:{requiresTeacher:!0}},{path:"/actions/:id",name:"action-detail",component:()=>Ye(()=>import("./ActionDetail-AOEsbWM-.js"),__vite__mapDeps([12,4,7,8,13,14])),props:!0},{path:"/sdgs",name:"SDGs",component:()=>Ye(()=>import("./SDGs-DkIyoKeo.js"),__vite__mapDeps([15,13,7,8,1,2]))},{path:"/story",name:"Story",component:()=>Ye(()=>import("./Story-BmmNVNPp.js"),__vite__mapDeps([16,17,6,7,8,13,5,1,2,18]))},{path:"/story/new",name:"story-new",component:()=>Ye(()=>import("./StoryNew-dzYrB_CH.js"),__vite__mapDeps([19,7,8,10,6,20])),meta:{requiresTeacher:!0}},{path:"/story/:id",name:"story-detail",component:()=>Ye(()=>import("./StoryDetail-MqAu5cFs.js"),__vite__mapDeps([21,13,17,6,7,8,10,22])),props:!0}],Tl=l_({history:Fm(),routes:q_});Tl.beforeEach((t,e,n)=>{const{isAuthenticated:s,isTeacher:r,isAdmin:i}=Oi();if(t.meta.requiresAdmin&&!i.value){s.value?(alert("此功能僅限管理員使用"),n(!1)):n({name:"Home"});return}if(t.meta.requiresTeacher&&!r.value){s.value?(alert("此功能僅限老師使用"),n(!1)):n({name:"Home"});return}if(t.meta.requiresAuth&&!s.value){n({name:"Home"});return}n()});om.then(()=>{const t=Yf(P_);t.use(Tl),t.mount("#app")});export{d_ as A,qa as B,iu as C,ws as D,iy as E,Oe as F,sr as G,Cu as H,Au as I,mi as J,_c as K,hi as L,Un as M,Tu as N,Pr as O,ny as P,Wa as Q,ey as R,ru as S,Y_ as T,yf as U,Q_ as V,Qf as _,ge as a,H as b,Ee as c,nn as d,X_ as e,oe as f,Ze as g,pc as h,Lr as i,f_ as j,sy as k,Z_ as l,Re as m,be as n,ce as o,Zs as p,J_ as q,fe as r,hf as s,va as t,Oi as u,ty as v,ry as w,Hr as x,$e as y,M_ as z};
