const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-fHpccRdM.js","assets/TrainTrack-DvWT2qVq.js","assets/TrainTrack-sVEUxovV.css","assets/Actions-DhYtcDjF.js","assets/lightBulb2-t6vOkfMd.js","assets/HeaderFilter-DD3eZoAp.js","assets/SDGs_goal-BU-5yG0n.js","assets/CJKSub-BHGwHLKd.js","assets/CJKSub-RziVMV1s.css","assets/ActionNew-C0C12PrC.js","assets/index-DvpNQBNt.js","assets/ActionNew-DVY1c1LX.css","assets/ActionDetail-CYXhi02Y.js","assets/ActionDetail-D06jGIYP.css","assets/SDGs-Ch3lMB81.js","assets/平和國小_mobile_Example-Bsr5Md9p.js","assets/Story-DYQCatm0.js","assets/useDateFormat-BFMwo5FP.js","assets/Story-DaemCPTX.css","assets/StoryNew-BIR7P-VV.js","assets/StoryNew-BSvno8O3.css","assets/StoryDetail-CR-x9XZ4.js","assets/StoryDetail-wwtSax38.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ni(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ne={},an=[],tt=()=>{},da=()=>!1,Ks=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),si=t=>t.startsWith("onUpdate:"),ye=Object.assign,ri=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Al=Object.prototype.hasOwnProperty,Y=(t,e)=>Al.call(t,e),V=Array.isArray,cn=t=>ss(t)==="[object Map]",In=t=>ss(t)==="[object Set]",Ui=t=>ss(t)==="[object Date]",W=t=>typeof t=="function",ae=t=>typeof t=="string",He=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",ha=t=>(ie(t)||W(t))&&W(t.then)&&W(t.catch),pa=Object.prototype.toString,ss=t=>pa.call(t),Rl=t=>ss(t).slice(8,-1),ga=t=>ss(t)==="[object Object]",ii=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Nn=ni(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gs=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Pl=/-\w/g,Le=Gs(t=>t.replace(Pl,e=>e.slice(1).toUpperCase())),kl=/\B([A-Z])/g,Yt=Gs(t=>t.replace(kl,"-$1").toLowerCase()),qs=Gs(t=>t.charAt(0).toUpperCase()+t.slice(1)),dr=Gs(t=>t?`on${qs(t)}`:""),Dt=(t,e)=>!Object.is(t,e),ws=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ma=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ks=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fi;const Js=()=>Fi||(Fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ys(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ae(s)?Dl(s):Ys(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ae(t)||ie(t))return t}const Ol=/;(?![^(]*\))/g,xl=/:([^]+)/,Nl=/\/\*[^]*?\*\//g;function Dl(t){const e={};return t.replace(Nl,"").split(Ol).forEach(n=>{if(n){const s=n.split(xl);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function be(t){let e="";if(ae(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=be(t[n]);s&&(e+=s+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function z_(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ae(e)&&(t.class=be(e)),n&&(t.style=Ys(n)),t}const Ml="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ll=ni(Ml);function _a(t){return!!t||t===""}function Ul(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=rs(t[s],e[s]);return n}function rs(t,e){if(t===e)return!0;let n=Ui(t),s=Ui(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=He(t),s=He(e),n||s)return t===e;if(n=V(t),s=V(e),n||s)return n&&s?Ul(t,e):!1;if(n=ie(t),s=ie(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!rs(t[o],e[o]))return!1}}return String(t)===String(e)}function oi(t,e){return t.findIndex(n=>rs(n,e))}const ya=t=>!!(t&&t.__v_isRef===!0),va=t=>ae(t)?t:t==null?"":V(t)||ie(t)&&(t.toString===pa||!W(t.toString))?ya(t)?va(t.value):JSON.stringify(t,ba,2):String(t),ba=(t,e)=>ya(e)?ba(t,e.value):cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[hr(s,i)+" =>"]=r,n),{})}:In(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>hr(n))}:He(e)?hr(e):ie(e)&&!V(e)&&!ga(e)?String(e):e,hr=(t,e="")=>{var n;return He(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class Fl{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Re,!e&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Re;try{return Re=this,e()}finally{Re=n}}}on(){++this._on===1&&(this.prevScope=Re,Re=this)}off(){this._on>0&&--this._on===0&&(Re=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function $l(){return Re}let re;const pr=new WeakSet;class wa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&Re.active&&Re.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pr.has(this)&&(pr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ia(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$i(this),Sa(this);const e=re,n=$e;re=this,$e=!0;try{return this.fn()}finally{Ta(this),re=e,$e=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)li(e);this.deps=this.depsTail=void 0,$i(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xr(this)&&this.run()}get dirty(){return xr(this)}}let Ea=0,Dn,Mn;function Ia(t,e=!1){if(t.flags|=8,e){t.next=Mn,Mn=t;return}t.next=Dn,Dn=t}function ai(){Ea++}function ci(){if(--Ea>0)return;if(Mn){let e=Mn;for(Mn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Dn;){let e=Dn;for(Dn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Sa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ta(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),li(s),Vl(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function xr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ca(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ca(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Wn)||(t.globalVersion=Wn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!xr(t))))return;t.flags|=2;const e=t.dep,n=re,s=$e;re=t,$e=!0;try{Sa(t);const r=t.fn(t._value);(e.version===0||Dt(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{re=n,$e=s,Ta(t),t.flags&=-3}}function li(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)li(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $e=!0;const Aa=[];function gt(){Aa.push($e),$e=!1}function mt(){const t=Aa.pop();$e=t===void 0?!0:t}function $i(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let Wn=0;class Hl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!re||!$e||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new Hl(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,Ra(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=s)}return n}trigger(e){this.version++,Wn++,this.notify(e)}notify(e){ai();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ci()}}}function Ra(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ra(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Nr=new WeakMap,Gt=Symbol(""),Dr=Symbol(""),zn=Symbol("");function ge(t,e,n){if($e&&re){let s=Nr.get(t);s||Nr.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Xs),r.map=s,r.key=n),r.track()}}function lt(t,e,n,s,r,i){const o=Nr.get(t);if(!o){Wn++;return}const a=c=>{c&&c.trigger()};if(ai(),e==="clear")o.forEach(a);else{const c=V(t),l=c&&ii(n);if(c&&n==="length"){const u=Number(s);o.forEach((d,h)=>{(h==="length"||h===zn||!He(h)&&h>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(zn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Gt)),cn(t)&&a(o.get(Dr)));break;case"delete":c||(a(o.get(Gt)),cn(t)&&a(o.get(Dr)));break;case"set":cn(t)&&a(o.get(Gt));break}}ci()}function tn(t){const e=J(t);return e===t?e:(ge(e,"iterate",zn),Me(t)?e:e.map(fe))}function Zs(t){return ge(t=J(t),"iterate",zn),t}const Bl={__proto__:null,[Symbol.iterator](){return gr(this,Symbol.iterator,fe)},concat(...t){return tn(this).concat(...t.map(e=>V(e)?tn(e):e))},entries(){return gr(this,"entries",t=>(t[1]=fe(t[1]),t))},every(t,e){return ot(this,"every",t,e,void 0,arguments)},filter(t,e){return ot(this,"filter",t,e,n=>n.map(fe),arguments)},find(t,e){return ot(this,"find",t,e,fe,arguments)},findIndex(t,e){return ot(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ot(this,"findLast",t,e,fe,arguments)},findLastIndex(t,e){return ot(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ot(this,"forEach",t,e,void 0,arguments)},includes(...t){return mr(this,"includes",t)},indexOf(...t){return mr(this,"indexOf",t)},join(t){return tn(this).join(t)},lastIndexOf(...t){return mr(this,"lastIndexOf",t)},map(t,e){return ot(this,"map",t,e,void 0,arguments)},pop(){return An(this,"pop")},push(...t){return An(this,"push",t)},reduce(t,...e){return Vi(this,"reduce",t,e)},reduceRight(t,...e){return Vi(this,"reduceRight",t,e)},shift(){return An(this,"shift")},some(t,e){return ot(this,"some",t,e,void 0,arguments)},splice(...t){return An(this,"splice",t)},toReversed(){return tn(this).toReversed()},toSorted(t){return tn(this).toSorted(t)},toSpliced(...t){return tn(this).toSpliced(...t)},unshift(...t){return An(this,"unshift",t)},values(){return gr(this,"values",fe)}};function gr(t,e,n){const s=Zs(t),r=s[e]();return s!==t&&!Me(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const jl=Array.prototype;function ot(t,e,n,s,r,i){const o=Zs(t),a=o!==t&&!Me(t),c=o[e];if(c!==jl[e]){const d=c.apply(t,i);return a?fe(d):d}let l=n;o!==t&&(a?l=function(d,h){return n.call(this,fe(d),h,t)}:n.length>2&&(l=function(d,h){return n.call(this,d,h,t)}));const u=c.call(o,l,s);return a&&r?r(u):u}function Vi(t,e,n,s){const r=Zs(t);let i=n;return r!==t&&(Me(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,fe(a),c,t)}),r[e](i,...s)}function mr(t,e,n){const s=J(t);ge(s,"iterate",zn);const r=s[e](...n);return(r===-1||r===!1)&&di(n[0])?(n[0]=J(n[0]),s[e](...n)):r}function An(t,e,n=[]){gt(),ai();const s=J(t)[e].apply(t,n);return ci(),mt(),s}const Wl=ni("__proto__,__v_isRef,__isVue"),Pa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(He));function zl(t){He(t)||(t=String(t));const e=J(this);return ge(e,"has",t),e.hasOwnProperty(t)}class ka{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?tu:Da:i?Na:xa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=V(e);if(!r){let c;if(o&&(c=Bl[n]))return c;if(n==="hasOwnProperty")return zl}const a=Reflect.get(e,n,_e(e)?e:s);return(He(n)?Pa.has(n):Wl(n))||(r||ge(e,"get",n),i)?a:_e(a)?o&&ii(n)?a:a.value:ie(a)?r?La(a):Qs(a):a}}class Oa extends ka{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Ut(i);if(!Me(s)&&!Ut(s)&&(i=J(i),s=J(s)),!V(e)&&_e(i)&&!_e(s))return c||(i.value=s),!0}const o=V(e)&&ii(n)?Number(n)<e.length:Y(e,n),a=Reflect.set(e,n,s,_e(e)?e:r);return e===J(r)&&(o?Dt(s,i)&&lt(e,"set",n,s):lt(e,"add",n,s)),a}deleteProperty(e,n){const s=Y(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&lt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!He(n)||!Pa.has(n))&&ge(e,"has",n),s}ownKeys(e){return ge(e,"iterate",V(e)?"length":Gt),Reflect.ownKeys(e)}}class Kl extends ka{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gl=new Oa,ql=new Kl,Jl=new Oa(!0);const Mr=t=>t,gs=t=>Reflect.getPrototypeOf(t);function Yl(t,e,n){return function(...s){const r=this.__v_raw,i=J(r),o=cn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Mr:e?Os:fe;return!e&&ge(i,"iterate",c?Dr:Gt),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function ms(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xl(t,e){const n={get(r){const i=this.__v_raw,o=J(i),a=J(r);t||(Dt(r,a)&&ge(o,"get",r),ge(o,"get",a));const{has:c}=gs(o),l=e?Mr:t?Os:fe;if(c.call(o,r))return l(i.get(r));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&ge(J(r),"iterate",Gt),r.size},has(r){const i=this.__v_raw,o=J(i),a=J(r);return t||(Dt(r,a)&&ge(o,"has",r),ge(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=J(a),l=e?Mr:t?Os:fe;return!t&&ge(c,"iterate",Gt),a.forEach((u,d)=>r.call(i,l(u),l(d),o))}};return ye(n,t?{add:ms("add"),set:ms("set"),delete:ms("delete"),clear:ms("clear")}:{add(r){!e&&!Me(r)&&!Ut(r)&&(r=J(r));const i=J(this);return gs(i).has.call(i,r)||(i.add(r),lt(i,"add",r,r)),this},set(r,i){!e&&!Me(i)&&!Ut(i)&&(i=J(i));const o=J(this),{has:a,get:c}=gs(o);let l=a.call(o,r);l||(r=J(r),l=a.call(o,r));const u=c.call(o,r);return o.set(r,i),l?Dt(i,u)&&lt(o,"set",r,i):lt(o,"add",r,i),this},delete(r){const i=J(this),{has:o,get:a}=gs(i);let c=o.call(i,r);c||(r=J(r),c=o.call(i,r)),a&&a.call(i,r);const l=i.delete(r);return c&&lt(i,"delete",r,void 0),l},clear(){const r=J(this),i=r.size!==0,o=r.clear();return i&&lt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Yl(r,t,e)}),n}function ui(t,e){const n=Xl(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Y(n,r)&&r in s?n:s,r,i)}const Zl={get:ui(!1,!1)},Ql={get:ui(!1,!0)},eu={get:ui(!0,!1)};const xa=new WeakMap,Na=new WeakMap,Da=new WeakMap,tu=new WeakMap;function nu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function su(t){return t.__v_skip||!Object.isExtensible(t)?0:nu(Rl(t))}function Qs(t){return Ut(t)?t:fi(t,!1,Gl,Zl,xa)}function Ma(t){return fi(t,!1,Jl,Ql,Na)}function La(t){return fi(t,!0,ql,eu,Da)}function fi(t,e,n,s,r){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=su(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function ln(t){return Ut(t)?ln(t.__v_raw):!!(t&&t.__v_isReactive)}function Ut(t){return!!(t&&t.__v_isReadonly)}function Me(t){return!!(t&&t.__v_isShallow)}function di(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function ru(t){return!Y(t,"__v_skip")&&Object.isExtensible(t)&&ma(t,"__v_skip",!0),t}const fe=t=>ie(t)?Qs(t):t,Os=t=>ie(t)?La(t):t;function _e(t){return t?t.__v_isRef===!0:!1}function ce(t){return Ua(t,!1)}function iu(t){return Ua(t,!0)}function Ua(t,e){return _e(t)?t:new ou(t,e)}class ou{constructor(e,n){this.dep=new Xs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:J(e),this._value=n?e:fe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Me(e)||Ut(e);e=s?e:J(e),Dt(e,n)&&(this._rawValue=e,this._value=s?e:fe(e),this.dep.trigger())}}function Pe(t){return _e(t)?t.value:t}const au={get:(t,e,n)=>e==="__v_raw"?t:Pe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return _e(r)&&!_e(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Fa(t){return ln(t)?t:new Proxy(t,au)}class cu{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Xs,{get:s,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=s,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function K_(t){return new cu(t)}class lu{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return Ia(this,!0),!0}get value(){const e=this.dep.track();return Ca(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function uu(t,e,n=!1){let s,r;return W(t)?s=t:(s=t.get,r=t.set),new lu(s,r,n)}const _s={},xs=new WeakMap;let zt;function fu(t,e=!1,n=zt){if(n){let s=xs.get(n);s||xs.set(n,s=[]),s.push(t)}}function du(t,e,n=ne){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=x=>r?x:Me(x)||r===!1||r===0?ut(x,1):ut(x);let u,d,h,g,v=!1,E=!1;if(_e(t)?(d=()=>t.value,v=Me(t)):ln(t)?(d=()=>l(t),v=!0):V(t)?(E=!0,v=t.some(x=>ln(x)||Me(x)),d=()=>t.map(x=>{if(_e(x))return x.value;if(ln(x))return l(x);if(W(x))return c?c(x,2):x()})):W(t)?e?d=c?()=>c(t,2):t:d=()=>{if(h){gt();try{h()}finally{mt()}}const x=zt;zt=u;try{return c?c(t,3,[g]):t(g)}finally{zt=x}}:d=tt,e&&r){const x=d,F=r===!0?1/0:r;d=()=>ut(x(),F)}const M=$l(),k=()=>{u.stop(),M&&M.active&&ri(M.effects,u)};if(i&&e){const x=e;e=(...F)=>{x(...F),k()}}let C=E?new Array(t.length).fill(_s):_s;const O=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const F=u.run();if(r||v||(E?F.some((D,K)=>Dt(D,C[K])):Dt(F,C))){h&&h();const D=zt;zt=u;try{const K=[F,C===_s?void 0:E&&C[0]===_s?[]:C,g];C=F,c?c(e,3,K):e(...K)}finally{zt=D}}}else u.run()};return a&&a(O),u=new wa(d),u.scheduler=o?()=>o(O,!1):O,g=x=>fu(x,!1,u),h=u.onStop=()=>{const x=xs.get(u);if(x){if(c)c(x,4);else for(const F of x)F();xs.delete(u)}},e?s?O(!0):C=u.run():o?o(O.bind(null,!0),!0):u.run(),k.pause=u.pause.bind(u),k.resume=u.resume.bind(u),k.stop=k,k}function ut(t,e=1/0,n){if(e<=0||!ie(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,_e(t))ut(t.value,e,n);else if(V(t))for(let s=0;s<t.length;s++)ut(t[s],e,n);else if(In(t)||cn(t))t.forEach(s=>{ut(s,e,n)});else if(ga(t)){for(const s in t)ut(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ut(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function is(t,e,n,s){try{return s?t(...s):t()}catch(r){er(r,e,n)}}function rt(t,e,n,s){if(W(t)){const r=is(t,e,n,s);return r&&ha(r)&&r.catch(i=>{er(i,e,n)}),r}if(V(t)){const r=[];for(let i=0;i<t.length;i++)r.push(rt(t[i],e,n,s));return r}}function er(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ne;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,l)===!1)return}a=a.parent}if(i){gt(),is(i,null,10,[t,c,l]),mt();return}}hu(t,n,r,s,o)}function hu(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const we=[];let Ze=-1;const un=[];let Ct=null,nn=0;const $a=Promise.resolve();let Ns=null;function hi(t){const e=Ns||$a;return t?e.then(this?t.bind(this):t):e}function pu(t){let e=Ze+1,n=we.length;for(;e<n;){const s=e+n>>>1,r=we[s],i=Kn(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function pi(t){if(!(t.flags&1)){const e=Kn(t),n=we[we.length-1];!n||!(t.flags&2)&&e>=Kn(n)?we.push(t):we.splice(pu(e),0,t),t.flags|=1,Va()}}function Va(){Ns||(Ns=$a.then(Ba))}function gu(t){V(t)?un.push(...t):Ct&&t.id===-1?Ct.splice(nn+1,0,t):t.flags&1||(un.push(t),t.flags|=1),Va()}function Hi(t,e,n=Ze+1){for(;n<we.length;n++){const s=we[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;we.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ha(t){if(un.length){const e=[...new Set(un)].sort((n,s)=>Kn(n)-Kn(s));if(un.length=0,Ct){Ct.push(...e);return}for(Ct=e,nn=0;nn<Ct.length;nn++){const n=Ct[nn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ct=null,nn=0}}const Kn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ba(t){try{for(Ze=0;Ze<we.length;Ze++){const e=we[Ze];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),is(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ze<we.length;Ze++){const e=we[Ze];e&&(e.flags&=-2)}Ze=-1,we.length=0,Ha(),Ns=null,(we.length||un.length)&&Ba()}}let de=null,ja=null;function Ds(t){const e=de;return de=t,ja=t&&t.type.__scopeId||null,e}function Qe(t,e=de,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Us(-1);const i=Ds(e);let o;try{o=t(...r)}finally{Ds(i),s._d&&Us(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function G_(t,e){if(de===null)return t;const n=ir(de),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=ne]=e[r];i&&(W(i)&&(i={mounted:i,updated:i}),i.deep&&ut(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Bt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(gt(),rt(c,n,8,[t.el,a,t,e]),mt())}}const mu=Symbol("_vte"),_u=t=>t.__isTeleport,yu=Symbol("_leaveCb");function gi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,gi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wa(t,e){return W(t)?ye({name:t.name},e,{setup:t}):t}function za(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Ms=new WeakMap;function Ln(t,e,n,s,r=!1){if(V(t)){t.forEach((v,E)=>Ln(v,e&&(V(e)?e[E]:e),n,s,r));return}if(fn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ln(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?ir(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ne?a.refs={}:a.refs,d=a.setupState,h=J(d),g=d===ne?da:v=>Y(h,v);if(l!=null&&l!==c){if(Bi(e),ae(l))u[l]=null,g(l)&&(d[l]=null);else if(_e(l)){l.value=null;const v=e;v.k&&(u[v.k]=null)}}if(W(c))is(c,a,12,[o,u]);else{const v=ae(c),E=_e(c);if(v||E){const M=()=>{if(t.f){const k=v?g(c)?d[c]:u[c]:c.value;if(r)V(k)&&ri(k,i);else if(V(k))k.includes(i)||k.push(i);else if(v)u[c]=[i],g(c)&&(d[c]=u[c]);else{const C=[i];c.value=C,t.k&&(u[t.k]=C)}}else v?(u[c]=o,g(c)&&(d[c]=o)):E&&(c.value=o,t.k&&(u[t.k]=o))};if(o){const k=()=>{M(),Ms.delete(t)};k.id=-1,Ms.set(t,k),Oe(k,n)}else Bi(t),M()}}}function Bi(t){const e=Ms.get(t);e&&(e.flags|=8,Ms.delete(t))}Js().requestIdleCallback;Js().cancelIdleCallback;const fn=t=>!!t.type.__asyncLoader,Ka=t=>t.type.__isKeepAlive;function vu(t,e){Ga(t,"a",e)}function bu(t,e){Ga(t,"da",e)}function Ga(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(tr(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ka(r.parent.vnode)&&wu(s,e,n,r),r=r.parent}}function wu(t,e,n,s){const r=tr(e,t,s,!0);qa(()=>{ri(s[e],r)},n)}function tr(t,e,n=me,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{gt();const a=os(n),c=rt(e,n,t,o);return a(),mt(),c});return s?r.unshift(i):r.push(i),i}}const bt=t=>(e,n=me)=>{(!Jn||t==="sp")&&tr(t,(...s)=>e(...s),n)},Eu=bt("bm"),nr=bt("m"),Iu=bt("bu"),Su=bt("u"),mi=bt("bum"),qa=bt("um"),Tu=bt("sp"),Cu=bt("rtg"),Au=bt("rtc");function Ru(t,e=me){tr("ec",t,e)}const Pu="components";function Lr(t,e){return Ou(Pu,t,!0,e)||t}const ku=Symbol.for("v-ndc");function Ou(t,e,n=!0,s=!1){const r=de||me;if(r){const i=r.type;{const a=bf(i,!1);if(a&&(a===e||a===Le(e)||a===qs(Le(e))))return i}const o=ji(r[t]||i[t],e)||ji(r.appContext[t],e);return!o&&s?i:o}}function ji(t,e){return t&&(t[e]||t[Le(e)]||t[qs(Le(e))])}function q_(t,e,n,s){let r;const i=n,o=V(t);if(o||ae(t)){const a=o&&ln(t);let c=!1,l=!1;a&&(c=!Me(t),l=Ut(t),t=Zs(t)),r=new Array(t.length);for(let u=0,d=t.length;u<d;u++)r[u]=e(c?l?Os(fe(t[u])):fe(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(ie(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];r[c]=e(t[u],u,c,i)}}else r=[];return r}function J_(t,e,n={},s,r){if(de.ce||de.parent&&fn(de.parent)&&de.parent.ce)return e!=="default"&&(n.name=e),le(),Hr(xe,null,[oe("slot",n,s)],64);let i=t[e];i&&i._c&&(i._d=!1),le();const o=i&&Ja(i(n)),a=n.key||o&&o.key,c=Hr(xe,{key:(a&&!He(a)?a:`_${e}`)+(!o&&s?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Ja(t){return t.some(e=>qn(e)?!(e.type===_t||e.type===xe&&!Ja(e.children)):!0)?t:null}const Ur=t=>t?gc(t)?ir(t):Ur(t.parent):null,Un=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ur(t.parent),$root:t=>Ur(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Xa(t),$forceUpdate:t=>t.f||(t.f=()=>{pi(t.update)}),$nextTick:t=>t.n||(t.n=hi.bind(t.proxy)),$watch:t=>Zu.bind(t)}),_r=(t,e)=>t!==ne&&!t.__isScriptSetup&&Y(t,e),xu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(_r(s,e))return o[e]=1,s[e];if(r!==ne&&Y(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Y(l,e))return o[e]=3,i[e];if(n!==ne&&Y(n,e))return o[e]=4,n[e];Fr&&(o[e]=0)}}const u=Un[e];let d,h;if(u)return e==="$attrs"&&ge(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ne&&Y(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Y(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return _r(r,e)?(r[e]=n,!0):s!==ne&&Y(s,e)?(s[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:o}},a){let c,l;return!!(n[a]||t!==ne&&a[0]!=="$"&&Y(t,a)||_r(e,a)||(c=i[0])&&Y(c,a)||Y(s,a)||Y(Un,a)||Y(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wi(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Fr=!0;function Nu(t){const e=Xa(t),n=t.proxy,s=t.ctx;Fr=!1,e.beforeCreate&&zi(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:g,updated:v,activated:E,deactivated:M,beforeDestroy:k,beforeUnmount:C,destroyed:O,unmounted:x,render:F,renderTracked:D,renderTriggered:K,errorCaptured:Se,serverPrefetch:he,expose:We,inheritAttrs:Et,components:Ht,directives:ze,filters:Tn}=e;if(l&&Du(l,s,null),o)for(const Z in o){const G=o[Z];W(G)&&(s[Z]=G.bind(n))}if(r){const Z=r.call(n,n);ie(Z)&&(t.data=Qs(Z))}if(Fr=!0,i)for(const Z in i){const G=i[Z],it=W(G)?G.bind(n,n):W(G.get)?G.get.bind(n,n):tt,It=!W(G)&&W(G.set)?G.set.bind(n):tt,Ke=Ee({get:it,set:It});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Te=>Ke.value=Te})}if(a)for(const Z in a)Ya(a[Z],s,n,Z);if(c){const Z=W(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(G=>{Fn(G,Z[G])})}u&&zi(u,t,"c");function ue(Z,G){V(G)?G.forEach(it=>Z(it.bind(n))):G&&Z(G.bind(n))}if(ue(Eu,d),ue(nr,h),ue(Iu,g),ue(Su,v),ue(vu,E),ue(bu,M),ue(Ru,Se),ue(Au,D),ue(Cu,K),ue(mi,C),ue(qa,x),ue(Tu,he),V(We))if(We.length){const Z=t.exposed||(t.exposed={});We.forEach(G=>{Object.defineProperty(Z,G,{get:()=>n[G],set:it=>n[G]=it,enumerable:!0})})}else t.exposed||(t.exposed={});F&&t.render===tt&&(t.render=F),Et!=null&&(t.inheritAttrs=Et),Ht&&(t.components=Ht),ze&&(t.directives=ze),he&&za(t)}function Du(t,e,n=tt){V(t)&&(t=$r(t));for(const s in t){const r=t[s];let i;ie(r)?"default"in r?i=Ve(r.from||s,r.default,!0):i=Ve(r.from||s):i=Ve(r),_e(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function zi(t,e,n){rt(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ya(t,e,n,s){let r=s.includes(".")?lc(n,s):()=>n[s];if(ae(t)){const i=e[t];W(i)&&Es(r,i)}else if(W(t))Es(r,t.bind(n));else if(ie(t))if(V(t))t.forEach(i=>Ya(i,e,n,s));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&Es(r,i,t)}}function Xa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ls(c,l,o,!0)),Ls(c,e,o)),ie(e)&&i.set(e,c),c}function Ls(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ls(t,i,n,!0),r&&r.forEach(o=>Ls(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Mu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Mu={data:Ki,props:Gi,emits:Gi,methods:kn,computed:kn,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:kn,directives:kn,watch:Uu,provide:Ki,inject:Lu};function Ki(t,e){return e?t?function(){return ye(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Lu(t,e){return kn($r(t),$r(e))}function $r(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function kn(t,e){return t?ye(Object.create(null),t,e):e}function Gi(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:ye(Object.create(null),Wi(t),Wi(e??{})):e}function Uu(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const s in e)n[s]=ve(t[s],e[s]);return n}function Za(){return{app:null,config:{isNativeTag:da,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fu=0;function $u(t,e){return function(s,r=null){W(s)||(s=ye({},s)),r!=null&&!ie(r)&&(r=null);const i=Za(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Fu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Ef,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&W(u.install)?(o.add(u),u.install(l,...d)):W(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,h){if(!c){const g=l._ceVNode||oe(s,r);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),t(g,u,h),c=!0,l._container=u,u.__vue_app__=l,ir(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(rt(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=dn;dn=l;try{return u()}finally{dn=d}}};return l}}let dn=null;function Fn(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function Ve(t,e,n=!1){const s=gf();if(s||dn){let r=dn?dn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&W(e)?e.call(s&&s.proxy):e}}const Qa={},ec=()=>Object.create(Qa),tc=t=>Object.getPrototypeOf(t)===Qa;function Vu(t,e,n,s=!1){const r={},i=ec();t.propsDefaults=Object.create(null),nc(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ma(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Hu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=J(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(sr(t.emitsOptions,h))continue;const g=e[h];if(c)if(Y(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const v=Le(h);r[v]=Vr(c,a,v,g,t,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{nc(t,e,r,i)&&(l=!0);let u;for(const d in a)(!e||!Y(e,d)&&((u=Yt(d))===d||!Y(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Vr(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!Y(e,d))&&(delete i[d],l=!0)}l&&lt(t.attrs,"set","")}function nc(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Nn(c))continue;const l=e[c];let u;r&&Y(r,u=Le(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:sr(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=J(n),l=a||ne;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Vr(r,c,d,l[d],t,!Y(l,d))}}return o}function Vr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Y(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=os(r);s=l[n]=c.call(null,e),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Yt(n))&&(s=!0))}return s}const Bu=new WeakMap;function sc(t,e,n=!1){const s=n?Bu:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=d=>{c=!0;const[h,g]=sc(d,e,!0);ye(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ie(t)&&s.set(t,an),an;if(V(i))for(let u=0;u<i.length;u++){const d=Le(i[u]);qi(d)&&(o[d]=ne)}else if(i)for(const u in i){const d=Le(u);if(qi(d)){const h=i[u],g=o[d]=V(h)||W(h)?{type:h}:ye({},h),v=g.type;let E=!1,M=!0;if(V(v))for(let k=0;k<v.length;++k){const C=v[k],O=W(C)&&C.name;if(O==="Boolean"){E=!0;break}else O==="String"&&(M=!1)}else E=W(v)&&v.name==="Boolean";g[0]=E,g[1]=M,(E||Y(g,"default"))&&a.push(d)}}const l=[o,a];return ie(t)&&s.set(t,l),l}function qi(t){return t[0]!=="$"&&!Nn(t)}const _i=t=>t==="_"||t==="_ctx"||t==="$stable",yi=t=>V(t)?t.map(et):[et(t)],ju=(t,e,n)=>{if(e._n)return e;const s=Qe((...r)=>yi(e(...r)),n);return s._c=!1,s},rc=(t,e,n)=>{const s=t._ctx;for(const r in t){if(_i(r))continue;const i=t[r];if(W(i))e[r]=ju(r,i,s);else if(i!=null){const o=yi(i);e[r]=()=>o}}},ic=(t,e)=>{const n=yi(e);t.slots.default=()=>n},oc=(t,e,n)=>{for(const s in e)(n||!_i(s))&&(t[s]=e[s])},Wu=(t,e,n)=>{const s=t.slots=ec();if(t.vnode.shapeFlag&32){const r=e._;r?(oc(s,e,n),n&&ma(s,"_",r,!0)):rc(e,s)}else e&&ic(t,e)},zu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ne;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:oc(r,e,n):(i=!e.$stable,rc(e,r)),o=e}else e&&(ic(t,e),o={default:1});if(i)for(const a in r)!_i(a)&&o[a]==null&&delete r[a]},Oe=af;function Ku(t){return Gu(t)}function Gu(t,e){const n=Js();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:g=tt,insertStaticContent:v}=t,E=(f,p,m,y=null,w=null,_=null,A=void 0,T=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!Rn(f,p)&&(y=b(f),Te(f,w,_,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:I,ref:$,shapeFlag:P}=p;switch(I){case rr:M(f,p,m,y);break;case _t:k(f,p,m,y);break;case Is:f==null&&C(p,m,y,A);break;case xe:Ht(f,p,m,y,w,_,A,T,S);break;default:P&1?F(f,p,m,y,w,_,A,T,S):P&6?ze(f,p,m,y,w,_,A,T,S):(P&64||P&128)&&I.process(f,p,m,y,w,_,A,T,S,L)}$!=null&&w?Ln($,f&&f.ref,_,p||f,!p):$==null&&f&&f.ref!=null&&Ln(f.ref,null,_,f,!0)},M=(f,p,m,y)=>{if(f==null)s(p.el=a(p.children),m,y);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},k=(f,p,m,y)=>{f==null?s(p.el=c(p.children||""),m,y):p.el=f.el},C=(f,p,m,y)=>{[f.el,f.anchor]=v(f.children,p,m,y,f.el,f.anchor)},O=({el:f,anchor:p},m,y)=>{let w;for(;f&&f!==p;)w=h(f),s(f,m,y),f=w;s(p,m,y)},x=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=h(f),r(f),f=m;r(p)},F=(f,p,m,y,w,_,A,T,S)=>{p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),f==null?D(p,m,y,w,_,A,T,S):he(f,p,w,_,A,T,S)},D=(f,p,m,y,w,_,A,T)=>{let S,I;const{props:$,shapeFlag:P,transition:U,dirs:j}=f;if(S=f.el=o(f.type,_,$&&$.is,$),P&8?u(S,f.children):P&16&&Se(f.children,S,null,y,w,yr(f,_),A,T),j&&Bt(f,null,y,"created"),K(S,f,f.scopeId,A,y),$){for(const se in $)se!=="value"&&!Nn(se)&&i(S,se,null,$[se],_,y);"value"in $&&i(S,"value",null,$.value,_),(I=$.onVnodeBeforeMount)&&Ye(I,y,f)}j&&Bt(f,null,y,"beforeMount");const z=qu(w,U);z&&U.beforeEnter(S),s(S,p,m),((I=$&&$.onVnodeMounted)||z||j)&&Oe(()=>{I&&Ye(I,y,f),z&&U.enter(S),j&&Bt(f,null,y,"mounted")},w)},K=(f,p,m,y,w)=>{if(m&&g(f,m),y)for(let _=0;_<y.length;_++)g(f,y[_]);if(w){let _=w.subTree;if(p===_||fc(_.type)&&(_.ssContent===p||_.ssFallback===p)){const A=w.vnode;K(f,A,A.scopeId,A.slotScopeIds,w.parent)}}},Se=(f,p,m,y,w,_,A,T,S=0)=>{for(let I=S;I<f.length;I++){const $=f[I]=T?At(f[I]):et(f[I]);E(null,$,p,m,y,w,_,A,T)}},he=(f,p,m,y,w,_,A)=>{const T=p.el=f.el;let{patchFlag:S,dynamicChildren:I,dirs:$}=p;S|=f.patchFlag&16;const P=f.props||ne,U=p.props||ne;let j;if(m&&jt(m,!1),(j=U.onVnodeBeforeUpdate)&&Ye(j,m,p,f),$&&Bt(p,f,m,"beforeUpdate"),m&&jt(m,!0),(P.innerHTML&&U.innerHTML==null||P.textContent&&U.textContent==null)&&u(T,""),I?We(f.dynamicChildren,I,T,m,y,yr(p,w),_):A||G(f,p,T,null,m,y,yr(p,w),_,!1),S>0){if(S&16)Et(T,P,U,m,w);else if(S&2&&P.class!==U.class&&i(T,"class",null,U.class,w),S&4&&i(T,"style",P.style,U.style,w),S&8){const z=p.dynamicProps;for(let se=0;se<z.length;se++){const X=z[se],Ce=P[X],Ae=U[X];(Ae!==Ce||X==="value")&&i(T,X,Ce,Ae,w,m)}}S&1&&f.children!==p.children&&u(T,p.children)}else!A&&I==null&&Et(T,P,U,m,w);((j=U.onVnodeUpdated)||$)&&Oe(()=>{j&&Ye(j,m,p,f),$&&Bt(p,f,m,"updated")},y)},We=(f,p,m,y,w,_,A)=>{for(let T=0;T<p.length;T++){const S=f[T],I=p[T],$=S.el&&(S.type===xe||!Rn(S,I)||S.shapeFlag&198)?d(S.el):m;E(S,I,$,null,y,w,_,A,!0)}},Et=(f,p,m,y,w)=>{if(p!==m){if(p!==ne)for(const _ in p)!Nn(_)&&!(_ in m)&&i(f,_,p[_],null,w,y);for(const _ in m){if(Nn(_))continue;const A=m[_],T=p[_];A!==T&&_!=="value"&&i(f,_,T,A,w,y)}"value"in m&&i(f,"value",p.value,m.value,w)}},Ht=(f,p,m,y,w,_,A,T,S)=>{const I=p.el=f?f.el:a(""),$=p.anchor=f?f.anchor:a("");let{patchFlag:P,dynamicChildren:U,slotScopeIds:j}=p;j&&(T=T?T.concat(j):j),f==null?(s(I,m,y),s($,m,y),Se(p.children||[],m,$,w,_,A,T,S)):P>0&&P&64&&U&&f.dynamicChildren?(We(f.dynamicChildren,U,m,w,_,A,T),(p.key!=null||w&&p===w.subTree)&&ac(f,p,!0)):G(f,p,m,$,w,_,A,T,S)},ze=(f,p,m,y,w,_,A,T,S)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?w.ctx.activate(p,m,y,A,S):Tn(p,m,y,w,_,A,S):Zt(f,p,S)},Tn=(f,p,m,y,w,_,A)=>{const T=f.component=pf(f,y,w);if(Ka(f)&&(T.ctx.renderer=L),mf(T,!1,A),T.asyncDep){if(w&&w.registerDep(T,ue,A),!f.el){const S=T.subTree=oe(_t);k(null,S,p,m),f.placeholder=S.el}}else ue(T,f,p,m,w,_,A)},Zt=(f,p,m)=>{const y=p.component=f.component;if(rf(f,p,m))if(y.asyncDep&&!y.asyncResolved){Z(y,p,m);return}else y.next=p,y.update();else p.el=f.el,y.vnode=p},ue=(f,p,m,y,w,_,A)=>{const T=()=>{if(f.isMounted){let{next:P,bu:U,u:j,parent:z,vnode:se}=f;{const qe=cc(f);if(qe){P&&(P.el=se.el,Z(f,P,A)),qe.asyncDep.then(()=>{f.isUnmounted||T()});return}}let X=P,Ce;jt(f,!1),P?(P.el=se.el,Z(f,P,A)):P=se,U&&ws(U),(Ce=P.props&&P.props.onVnodeBeforeUpdate)&&Ye(Ce,z,P,se),jt(f,!0);const Ae=Yi(f),Ge=f.subTree;f.subTree=Ae,E(Ge,Ae,d(Ge.el),b(Ge),f,w,_),P.el=Ae.el,X===null&&of(f,Ae.el),j&&Oe(j,w),(Ce=P.props&&P.props.onVnodeUpdated)&&Oe(()=>Ye(Ce,z,P,se),w)}else{let P;const{el:U,props:j}=p,{bm:z,m:se,parent:X,root:Ce,type:Ae}=f,Ge=fn(p);jt(f,!1),z&&ws(z),!Ge&&(P=j&&j.onVnodeBeforeMount)&&Ye(P,X,p),jt(f,!0);{Ce.ce&&Ce.ce._def.shadowRoot!==!1&&Ce.ce._injectChildStyle(Ae);const qe=f.subTree=Yi(f);E(null,qe,m,y,f,w,_),p.el=qe.el}if(se&&Oe(se,w),!Ge&&(P=j&&j.onVnodeMounted)){const qe=p;Oe(()=>Ye(P,X,qe),w)}(p.shapeFlag&256||X&&fn(X.vnode)&&X.vnode.shapeFlag&256)&&f.a&&Oe(f.a,w),f.isMounted=!0,p=m=y=null}};f.scope.on();const S=f.effect=new wa(T);f.scope.off();const I=f.update=S.run.bind(S),$=f.job=S.runIfDirty.bind(S);$.i=f,$.id=f.uid,S.scheduler=()=>pi($),jt(f,!0),I()},Z=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Hu(f,p.props,y,m),zu(f,p.children,m),gt(),Hi(f),mt()},G=(f,p,m,y,w,_,A,T,S=!1)=>{const I=f&&f.children,$=f?f.shapeFlag:0,P=p.children,{patchFlag:U,shapeFlag:j}=p;if(U>0){if(U&128){It(I,P,m,y,w,_,A,T,S);return}else if(U&256){it(I,P,m,y,w,_,A,T,S);return}}j&8?($&16&&De(I,w,_),P!==I&&u(m,P)):$&16?j&16?It(I,P,m,y,w,_,A,T,S):De(I,w,_,!0):($&8&&u(m,""),j&16&&Se(P,m,y,w,_,A,T,S))},it=(f,p,m,y,w,_,A,T,S)=>{f=f||an,p=p||an;const I=f.length,$=p.length,P=Math.min(I,$);let U;for(U=0;U<P;U++){const j=p[U]=S?At(p[U]):et(p[U]);E(f[U],j,m,null,w,_,A,T,S)}I>$?De(f,w,_,!0,!1,P):Se(p,m,y,w,_,A,T,S,P)},It=(f,p,m,y,w,_,A,T,S)=>{let I=0;const $=p.length;let P=f.length-1,U=$-1;for(;I<=P&&I<=U;){const j=f[I],z=p[I]=S?At(p[I]):et(p[I]);if(Rn(j,z))E(j,z,m,null,w,_,A,T,S);else break;I++}for(;I<=P&&I<=U;){const j=f[P],z=p[U]=S?At(p[U]):et(p[U]);if(Rn(j,z))E(j,z,m,null,w,_,A,T,S);else break;P--,U--}if(I>P){if(I<=U){const j=U+1,z=j<$?p[j].el:y;for(;I<=U;)E(null,p[I]=S?At(p[I]):et(p[I]),m,z,w,_,A,T,S),I++}}else if(I>U)for(;I<=P;)Te(f[I],w,_,!0),I++;else{const j=I,z=I,se=new Map;for(I=z;I<=U;I++){const ke=p[I]=S?At(p[I]):et(p[I]);ke.key!=null&&se.set(ke.key,I)}let X,Ce=0;const Ae=U-z+1;let Ge=!1,qe=0;const Cn=new Array(Ae);for(I=0;I<Ae;I++)Cn[I]=0;for(I=j;I<=P;I++){const ke=f[I];if(Ce>=Ae){Te(ke,w,_,!0);continue}let Je;if(ke.key!=null)Je=se.get(ke.key);else for(X=z;X<=U;X++)if(Cn[X-z]===0&&Rn(ke,p[X])){Je=X;break}Je===void 0?Te(ke,w,_,!0):(Cn[Je-z]=I+1,Je>=qe?qe=Je:Ge=!0,E(ke,p[Je],m,null,w,_,A,T,S),Ce++)}const Di=Ge?Ju(Cn):an;for(X=Di.length-1,I=Ae-1;I>=0;I--){const ke=z+I,Je=p[ke],Mi=p[ke+1],Li=ke+1<$?Mi.el||Mi.placeholder:y;Cn[I]===0?E(null,Je,m,Li,w,_,A,T,S):Ge&&(X<0||I!==Di[X]?Ke(Je,m,Li,2):X--)}}},Ke=(f,p,m,y,w=null)=>{const{el:_,type:A,transition:T,children:S,shapeFlag:I}=f;if(I&6){Ke(f.component.subTree,p,m,y);return}if(I&128){f.suspense.move(p,m,y);return}if(I&64){A.move(f,p,m,L);return}if(A===xe){s(_,p,m);for(let P=0;P<S.length;P++)Ke(S[P],p,m,y);s(f.anchor,p,m);return}if(A===Is){O(f,p,m);return}if(y!==2&&I&1&&T)if(y===0)T.beforeEnter(_),s(_,p,m),Oe(()=>T.enter(_),w);else{const{leave:P,delayLeave:U,afterLeave:j}=T,z=()=>{f.ctx.isUnmounted?r(_):s(_,p,m)},se=()=>{_._isLeaving&&_[yu](!0),P(_,()=>{z(),j&&j()})};U?U(_,z,se):se()}else s(_,p,m)},Te=(f,p,m,y=!1,w=!1)=>{const{type:_,props:A,ref:T,children:S,dynamicChildren:I,shapeFlag:$,patchFlag:P,dirs:U,cacheIndex:j}=f;if(P===-2&&(w=!1),T!=null&&(gt(),Ln(T,null,m,f,!0),mt()),j!=null&&(p.renderCache[j]=void 0),$&256){p.ctx.deactivate(f);return}const z=$&1&&U,se=!fn(f);let X;if(se&&(X=A&&A.onVnodeBeforeUnmount)&&Ye(X,p,f),$&6)ps(f.component,m,y);else{if($&128){f.suspense.unmount(m,y);return}z&&Bt(f,null,p,"beforeUnmount"),$&64?f.type.remove(f,p,m,L,y):I&&!I.hasOnce&&(_!==xe||P>0&&P&64)?De(I,p,m,!1,!0):(_===xe&&P&384||!w&&$&16)&&De(S,p,m),y&&Qt(f)}(se&&(X=A&&A.onVnodeUnmounted)||z)&&Oe(()=>{X&&Ye(X,p,f),z&&Bt(f,null,p,"unmounted")},m)},Qt=f=>{const{type:p,el:m,anchor:y,transition:w}=f;if(p===xe){en(m,y);return}if(p===Is){x(f);return}const _=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:A,delayLeave:T}=w,S=()=>A(m,_);T?T(f.el,_,S):S()}else _()},en=(f,p)=>{let m;for(;f!==p;)m=h(f),r(f),f=m;r(p)},ps=(f,p,m)=>{const{bum:y,scope:w,job:_,subTree:A,um:T,m:S,a:I}=f;Ji(S),Ji(I),y&&ws(y),w.stop(),_&&(_.flags|=8,Te(A,f,p,m)),T&&Oe(T,p),Oe(()=>{f.isUnmounted=!0},p)},De=(f,p,m,y=!1,w=!1,_=0)=>{for(let A=_;A<f.length;A++)Te(f[A],p,m,y,w)},b=f=>{if(f.shapeFlag&6)return b(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=h(f.anchor||f.el),m=p&&p[mu];return m?h(m):p};let N=!1;const R=(f,p,m)=>{f==null?p._vnode&&Te(p._vnode,null,null,!0):E(p._vnode||null,f,p,null,null,null,m),p._vnode=f,N||(N=!0,Hi(),Ha(),N=!1)},L={p:E,um:Te,m:Ke,r:Qt,mt:Tn,mc:Se,pc:G,pbc:We,n:b,o:t};return{render:R,hydrate:void 0,createApp:$u(R)}}function yr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function jt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function qu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ac(t,e,n=!1){const s=t.children,r=e.children;if(V(s)&&V(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=At(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ac(o,a)),a.type===rr&&a.patchFlag!==-1&&(a.el=o.el),a.type===_t&&!a.el&&(a.el=o.el)}}function Ju(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function cc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cc(e)}function Ji(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Yu=Symbol.for("v-scx"),Xu=()=>Ve(Yu);function Y_(t,e){return vi(t,null,e)}function Es(t,e,n){return vi(t,e,n)}function vi(t,e,n=ne){const{immediate:s,deep:r,flush:i,once:o}=n,a=ye({},n),c=e&&s||!e&&i!=="post";let l;if(Jn){if(i==="sync"){const g=Xu();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=tt,g.resume=tt,g.pause=tt,g}}const u=me;a.call=(g,v,E)=>rt(g,u,v,E);let d=!1;i==="post"?a.scheduler=g=>{Oe(g,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,v)=>{v?g():pi(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const h=du(t,e,a);return Jn&&(l?l.push(h):c&&h()),h}function Zu(t,e,n){const s=this.proxy,r=ae(t)?t.includes(".")?lc(s,t):()=>s[t]:t.bind(s,s);let i;W(e)?i=e:(i=e.handler,n=e);const o=os(this),a=vi(r,i.bind(s),n);return o(),a}function lc(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Qu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Le(e)}Modifiers`]||t[`${Yt(e)}Modifiers`];function ef(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ne;let r=n;const i=e.startsWith("update:"),o=i&&Qu(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>ae(u)?u.trim():u)),o.number&&(r=n.map(ks)));let a,c=s[a=dr(e)]||s[a=dr(Le(e))];!c&&i&&(c=s[a=dr(Yt(e))]),c&&rt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rt(l,t,6,r)}}const tf=new WeakMap;function uc(t,e,n=!1){const s=n?tf:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=uc(l,e,!0);u&&(a=!0,ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ie(t)&&s.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):ye(o,i),ie(t)&&s.set(t,o),o)}function sr(t,e){return!t||!Ks(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,Yt(e))||Y(t,e))}function Yi(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:h,setupState:g,ctx:v,inheritAttrs:E}=t,M=Ds(t);let k,C;try{if(n.shapeFlag&4){const x=r||s,F=x;k=et(l.call(F,x,u,d,g,h,v)),C=a}else{const x=e;k=et(x.length>1?x(d,{attrs:a,slots:o,emit:c}):x(d,null)),C=e.props?a:nf(a)}}catch(x){$n.length=0,er(x,t,1),k=oe(_t)}let O=k;if(C&&E!==!1){const x=Object.keys(C),{shapeFlag:F}=O;x.length&&F&7&&(i&&x.some(si)&&(C=sf(C,i)),O=_n(O,C,!1,!0))}return n.dirs&&(O=_n(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&gi(O,n.transition),k=O,Ds(M),k}const nf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ks(n))&&((e||(e={}))[n]=t[n]);return e},sf=(t,e)=>{const n={};for(const s in t)(!si(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function rf(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Xi(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!sr(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Xi(s,o,l):!0:!!o;return!1}function Xi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!sr(n,i))return!0}return!1}function of({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const fc=t=>t.__isSuspense;function af(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):gu(t)}const xe=Symbol.for("v-fgt"),rr=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),Is=Symbol.for("v-stc"),$n=[];let Ne=null;function le(t=!1){$n.push(Ne=t?null:[])}function cf(){$n.pop(),Ne=$n[$n.length-1]||null}let Gn=1;function Us(t,e=!1){Gn+=t,t<0&&Ne&&e&&(Ne.hasOnce=!0)}function dc(t){return t.dynamicChildren=Gn>0?Ne||an:null,cf(),Gn>0&&Ne&&Ne.push(t),t}function pe(t,e,n,s,r,i){return dc(B(t,e,n,s,r,i,!0))}function Hr(t,e,n,s,r){return dc(oe(t,e,n,s,r,!0))}function qn(t){return t?t.__v_isVNode===!0:!1}function Rn(t,e){return t.type===e.type&&t.key===e.key}const hc=({key:t})=>t??null,Ss=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ae(t)||_e(t)||W(t)?{i:de,r:t,k:e,f:!!n}:t:null);function B(t,e=null,n=null,s=0,r=null,i=t===xe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hc(e),ref:e&&Ss(e),scopeId:ja,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:de};return a?(bi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ae(n)?8:16),Gn>0&&!o&&Ne&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ne.push(c),c}const oe=lf;function lf(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===ku)&&(t=_t),qn(t)){const a=_n(t,e,!0);return n&&bi(a,n),Gn>0&&!i&&Ne&&(a.shapeFlag&6?Ne[Ne.indexOf(t)]=a:Ne.push(a)),a.patchFlag=-2,a}if(wf(t)&&(t=t.__vccOpts),e){e=uf(e);let{class:a,style:c}=e;a&&!ae(a)&&(e.class=be(a)),ie(c)&&(di(c)&&!V(c)&&(c=ye({},c)),e.style=Ys(c))}const o=ae(t)?1:fc(t)?128:_u(t)?64:ie(t)?4:W(t)?2:0;return B(t,e,n,s,r,o,i,!0)}function uf(t){return t?di(t)||tc(t)?ye({},t):t:null}function _n(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?ff(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&hc(l),ref:e&&e.ref?n&&i?V(i)?i.concat(Ss(e)):[i,Ss(e)]:Ss(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_n(t.ssContent),ssFallback:t.ssFallback&&_n(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&gi(u,c.clone(u)),u}function pc(t=" ",e=0){return oe(rr,null,t,e)}function ys(t,e){const n=oe(Is,null,t);return n.staticCount=e,n}function sn(t="",e=!1){return e?(le(),Hr(_t,null,t)):oe(_t,null,t)}function et(t){return t==null||typeof t=="boolean"?oe(_t):V(t)?oe(xe,null,t.slice()):qn(t)?At(t):oe(rr,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_n(t)}function bi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!tc(e)?e._ctx=de:r===3&&de&&(de.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:de},n=32):(e=String(e),s&64?(n=16,e=[pc(e)]):n=8);t.children=e,t.shapeFlag|=n}function ff(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=be([e.class,s.class]));else if(r==="style")e.style=Ys([e.style,s.style]);else if(Ks(r)){const i=e[r],o=s[r];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ye(t,e,n,s=null){rt(t,e,7,[n,s])}const df=Za();let hf=0;function pf(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||df,i={uid:hf++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sc(s,r),emitsOptions:uc(s,r),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:s.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ef.bind(null,i),t.ce&&t.ce(i),i}let me=null;const gf=()=>me||de;let Fs,Br;{const t=Js(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Fs=e("__VUE_INSTANCE_SETTERS__",n=>me=n),Br=e("__VUE_SSR_SETTERS__",n=>Jn=n)}const os=t=>{const e=me;return Fs(t),t.scope.on(),()=>{t.scope.off(),Fs(e)}},Zi=()=>{me&&me.scope.off(),Fs(null)};function gc(t){return t.vnode.shapeFlag&4}let Jn=!1;function mf(t,e=!1,n=!1){e&&Br(e);const{props:s,children:r}=t.vnode,i=gc(t);Vu(t,s,i,e),Wu(t,r,n||e);const o=i?_f(t,e):void 0;return e&&Br(!1),o}function _f(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,xu);const{setup:s}=n;if(s){gt();const r=t.setupContext=s.length>1?vf(t):null,i=os(t),o=is(s,t,0,[t.props,r]),a=ha(o);if(mt(),i(),(a||t.sp)&&!fn(t)&&za(t),a){if(o.then(Zi,Zi),e)return o.then(c=>{Qi(t,c)}).catch(c=>{er(c,t,0)});t.asyncDep=o}else Qi(t,o)}else mc(t)}function Qi(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=Fa(e)),mc(t)}function mc(t,e,n){const s=t.type;t.render||(t.render=s.render||tt);{const r=os(t);gt();try{Nu(t)}finally{mt(),r()}}}const yf={get(t,e){return ge(t,"get",""),t[e]}};function vf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,yf),slots:t.slots,emit:t.emit,expose:e}}function ir(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Fa(ru(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Un)return Un[n](t)},has(e,n){return n in e||n in Un}})):t.proxy}function bf(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function wf(t){return W(t)&&"__vccOpts"in t}const Ee=(t,e)=>uu(t,e,Jn);function _c(t,e,n){const s=(i,o,a)=>{Us(-1);try{return oe(i,o,a)}finally{Us(1)}},r=arguments.length;return r===2?ie(e)&&!V(e)?qn(e)?s(t,null,[e]):s(t,e):s(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&qn(n)&&(n=[n]),s(t,e,n))}const Ef="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jr;const eo=typeof window<"u"&&window.trustedTypes;if(eo)try{jr=eo.createPolicy("vue",{createHTML:t=>t})}catch{}const yc=jr?t=>jr.createHTML(t):t=>t,If="http://www.w3.org/2000/svg",Sf="http://www.w3.org/1998/Math/MathML",ct=typeof document<"u"?document:null,to=ct&&ct.createElement("template"),Tf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?ct.createElementNS(If,t):e==="mathml"?ct.createElementNS(Sf,t):n?ct.createElement(t,{is:n}):ct.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>ct.createTextNode(t),createComment:t=>ct.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ct.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{to.innerHTML=yc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=to.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cf=Symbol("_vtc");function Af(t,e,n){const s=t[Cf];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const no=Symbol("_vod"),Rf=Symbol("_vsh"),Pf=Symbol(""),kf=/(?:^|;)\s*display\s*:/;function Of(t,e,n){const s=t.style,r=ae(n);let i=!1;if(n&&!r){if(e)if(ae(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ts(s,a,"")}else for(const o in e)n[o]==null&&Ts(s,o,"");for(const o in n)o==="display"&&(i=!0),Ts(s,o,n[o])}else if(r){if(e!==n){const o=s[Pf];o&&(n+=";"+o),s.cssText=n,i=kf.test(n)}}else e&&t.removeAttribute("style");no in t&&(t[no]=i?s.display:"",t[Rf]&&(s.display="none"))}const so=/\s*!important$/;function Ts(t,e,n){if(V(n))n.forEach(s=>Ts(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=xf(t,e);so.test(n)?t.setProperty(Yt(s),n.replace(so,""),"important"):t[s]=n}}const ro=["Webkit","Moz","ms"],vr={};function xf(t,e){const n=vr[e];if(n)return n;let s=Le(e);if(s!=="filter"&&s in t)return vr[e]=s;s=qs(s);for(let r=0;r<ro.length;r++){const i=ro[r]+s;if(i in t)return vr[e]=i}return e}const io="http://www.w3.org/1999/xlink";function oo(t,e,n,s,r,i=Ll(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(io,e.slice(6,e.length)):t.setAttributeNS(io,e,n):n==null||i&&!_a(n)?t.removeAttribute(e):t.setAttribute(e,i?"":He(n)?String(n):n)}function ao(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?yc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=_a(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Pt(t,e,n,s){t.addEventListener(e,n,s)}function Nf(t,e,n,s){t.removeEventListener(e,n,s)}const co=Symbol("_vei");function Df(t,e,n,s,r=null){const i=t[co]||(t[co]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Mf(e);if(s){const l=i[e]=Ff(s,r);Pt(t,a,l,c)}else o&&(Nf(t,a,o,c),i[e]=void 0)}}const lo=/(?:Once|Passive|Capture)$/;function Mf(t){let e;if(lo.test(t)){e={};let s;for(;s=t.match(lo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yt(t.slice(2)),e]}let br=0;const Lf=Promise.resolve(),Uf=()=>br||(Lf.then(()=>br=0),br=Date.now());function Ff(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;rt($f(s,n.value),e,5,[s])};return n.value=t,n.attached=Uf(),n}function $f(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const uo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Vf=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Af(t,s,o):e==="style"?Of(t,n,s):Ks(e)?si(e)||Df(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hf(t,e,s,o))?(ao(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&oo(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ae(s))?ao(t,Le(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),oo(t,e,s,o))};function Hf(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&uo(e)&&W(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return uo(e)&&ae(n)?!1:e in t}const yn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>ws(e,n):e};function Bf(t){t.target.composing=!0}function fo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ht=Symbol("_assign"),X_={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[ht]=yn(r);const i=s||r.props&&r.props.type==="number";Pt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ks(a)),t[ht](a)}),n&&Pt(t,"change",()=>{t.value=t.value.trim()}),e||(Pt(t,"compositionstart",Bf),Pt(t,"compositionend",fo),Pt(t,"change",fo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[ht]=yn(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?ks(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},Z_={deep:!0,created(t,e,n){t[ht]=yn(n),Pt(t,"change",()=>{const s=t._modelValue,r=Yn(t),i=t.checked,o=t[ht];if(V(s)){const a=oi(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(In(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(vc(t,i))})},mounted:ho,beforeUpdate(t,e,n){t[ht]=yn(n),ho(t,e,n)}};function ho(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(V(e))r=oi(e,s.props.value)>-1;else if(In(e))r=e.has(s.props.value);else{if(e===n)return;r=rs(e,vc(t,!0))}t.checked!==r&&(t.checked=r)}const Q_={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=In(e);Pt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ks(Yn(o)):Yn(o));t[ht](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,hi(()=>{t._assigning=!1})}),t[ht]=yn(s)},mounted(t,{value:e}){po(t,e)},beforeUpdate(t,e,n){t[ht]=yn(n)},updated(t,{value:e}){t._assigning||po(t,e)}};function po(t,e){const n=t.multiple,s=V(e);if(!(n&&!s&&!In(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=Yn(o);if(n)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=oi(e,a)>-1}else o.selected=e.has(a);else if(rs(Yn(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Yn(t){return"_value"in t?t._value:t.value}function vc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const jf=["ctrl","shift","alt","meta"],Wf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jf.some(n=>t[`${n}Key`]&&!e.includes(n))},ey=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const a=Wf[e[o]];if(a&&a(r,e))return}return t(r,...i)}))},zf=ye({patchProp:Vf},Tf);let go;function Kf(){return go||(go=Ku(zf))}const Gf=((...t)=>{const e=Kf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Jf(s);if(!r)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,qf(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function qf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Jf(t){return ae(t)?document.querySelector(t):t}const Yf="/Pinghe/assets/LoadingTrain-Dl9H4zbh.png",Xf="/Pinghe/assets/Logo-DzrdicbF.gif",Zf="/Pinghe/assets/student-h4fKY3lv.png",Qf=()=>{};var mo={};/**
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
 */const bc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ed=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),s.push(n[u],n[d],n[h],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ed(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||d==null)throw new td;const h=i<<2|a>>4;if(s.push(h),l!==64){const g=a<<4&240|l>>2;if(s.push(g),d!==64){const v=l<<6&192|d;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class td extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nd=function(t){const e=bc(t);return wc.encodeByteArray(e,!0)},Ec=function(t){return nd(t).replace(/\./g,"")},Ic=function(t){try{return wc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rd=()=>sd().__FIREBASE_DEFAULTS__,id=()=>{if(typeof process>"u"||typeof mo>"u")return;const t=mo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},od=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ic(t[1]);return e&&JSON.parse(e)},wi=()=>{try{return Qf()||rd()||id()||od()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ad=t=>wi()?.emulatorHosts?.[t],Sc=()=>wi()?.config,Tc=t=>wi()?.[`_${t}`];/**
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
 */class cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function or(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ld(t){return(await fetch(t,{credentials:"include"})).ok}const Vn={};function ud(){const t={prod:[],emulator:[]};for(const e of Object.keys(Vn))Vn[e]?t.emulator.push(e):t.prod.push(e);return t}function fd(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let _o=!1;function dd(t,e){if(typeof window>"u"||typeof document>"u"||!or(window.location.host)||Vn[t]===e||Vn[t]||_o)return;Vn[t]=e;function n(h){return`__firebase__banner__${h}`}const s="__firebase__banner",i=ud().prod.length>0;function o(){const h=document.getElementById(s);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,g){h.setAttribute("width","24"),h.setAttribute("id",g),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function l(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{_o=!0,o()},h}function u(h,g){h.setAttribute("id",g),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function d(){const h=fd(s),g=n("text"),v=document.getElementById(g)||document.createElement("span"),E=n("learnmore"),M=document.getElementById(E)||document.createElement("a"),k=n("preprendIcon"),C=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const O=h.element;a(O),u(M,E);const x=l();c(C,k),O.append(C,v,M,x),document.body.appendChild(O)}i?(v.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function pd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function md(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _d(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yd(){try{return typeof indexedDB=="object"}catch{return!1}}function vd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const bd="FirebaseError";class Ft extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=bd,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?wd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ft(r,a,s)}}function wd(t,e){return t.replace(Ed,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ed=/\{\$([^}]+)}/g;function Id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(yo(i)&&yo(o)){if(!vn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function yo(t){return t!==null&&typeof t=="object"}/**
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
 */function cs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function On(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function xn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sd(t,e){const n=new Td(t,e);return n.subscribe.bind(n)}class Td{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Cd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=wr),r.error===void 0&&(r.error=wr),r.complete===void 0&&(r.complete=wr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wr(){}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kt="[DEFAULT]";/**
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
 */class Ad{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new cd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pd(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rd(t){return t===Kt?void 0:t}function Pd(t){return t.instantiationMode==="EAGER"}/**
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
 */class kd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ad(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Od={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},xd=te.INFO,Nd={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Dd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Nd[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cc{constructor(e){this.name=e,this._logLevel=xd,this._logHandler=Dd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Od[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Md=(t,e)=>e.some(n=>t instanceof n);let vo,bo;function Ld(){return vo||(vo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ud(){return bo||(bo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ac=new WeakMap,Wr=new WeakMap,Rc=new WeakMap,Er=new WeakMap,Ei=new WeakMap;function Fd(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ac.set(n,t)}).catch(()=>{}),Ei.set(e,t),e}function $d(t){if(Wr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wr.set(t,e)}let zr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vd(t){zr=t(zr)}function Hd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ir(this),e,...n);return Rc.set(s,e.sort?e.sort():[e]),Mt(s)}:Ud().includes(t)?function(...e){return t.apply(Ir(this),e),Mt(Ac.get(this))}:function(...e){return Mt(t.apply(Ir(this),e))}}function Bd(t){return typeof t=="function"?Hd(t):(t instanceof IDBTransaction&&$d(t),Md(t,Ld())?new Proxy(t,zr):t)}function Mt(t){if(t instanceof IDBRequest)return Fd(t);if(Er.has(t))return Er.get(t);const e=Bd(t);return e!==t&&(Er.set(t,e),Ei.set(e,t)),e}const Ir=t=>Ei.get(t);function jd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Wd=["get","getKey","getAll","getAllKeys","count"],zd=["put","add","delete","clear"],Sr=new Map;function wo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sr.get(e))return Sr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=zd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Wd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Sr.set(e,i),i}Vd(t=>({...t,get:(e,n,s)=>wo(e,n)||t.get(e,n,s),has:(e,n)=>!!wo(e,n)||t.has(e,n)}));/**
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
 */class Kd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Gd(t){return t.getComponent()?.type==="VERSION"}const Kr="@firebase/app",Eo="0.14.2";/**
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
 */const yt=new Cc("@firebase/app"),qd="@firebase/app-compat",Jd="@firebase/analytics-compat",Yd="@firebase/analytics",Xd="@firebase/app-check-compat",Zd="@firebase/app-check",Qd="@firebase/auth",eh="@firebase/auth-compat",th="@firebase/database",nh="@firebase/data-connect",sh="@firebase/database-compat",rh="@firebase/functions",ih="@firebase/functions-compat",oh="@firebase/installations",ah="@firebase/installations-compat",ch="@firebase/messaging",lh="@firebase/messaging-compat",uh="@firebase/performance",fh="@firebase/performance-compat",dh="@firebase/remote-config",hh="@firebase/remote-config-compat",ph="@firebase/storage",gh="@firebase/storage-compat",mh="@firebase/firestore",_h="@firebase/ai",yh="@firebase/firestore-compat",vh="firebase",bh="12.2.0";/**
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
 */const Gr="[DEFAULT]",wh={[Kr]:"fire-core",[qd]:"fire-core-compat",[Yd]:"fire-analytics",[Jd]:"fire-analytics-compat",[Zd]:"fire-app-check",[Xd]:"fire-app-check-compat",[Qd]:"fire-auth",[eh]:"fire-auth-compat",[th]:"fire-rtdb",[nh]:"fire-data-connect",[sh]:"fire-rtdb-compat",[rh]:"fire-fn",[ih]:"fire-fn-compat",[oh]:"fire-iid",[ah]:"fire-iid-compat",[ch]:"fire-fcm",[lh]:"fire-fcm-compat",[uh]:"fire-perf",[fh]:"fire-perf-compat",[dh]:"fire-rc",[hh]:"fire-rc-compat",[ph]:"fire-gcs",[gh]:"fire-gcs-compat",[mh]:"fire-fst",[yh]:"fire-fst-compat",[_h]:"fire-vertex","fire-js":"fire-js",[vh]:"fire-js-all"};/**
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
 */const $s=new Map,Eh=new Map,qr=new Map;function Io(t,e){try{t.container.addComponent(e)}catch(n){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(qr.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;qr.set(e,t);for(const n of $s.values())Io(n,t);for(const n of Eh.values())Io(n,t);return!0}function Pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ue(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Ih={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new as("app","Firebase",Ih);/**
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
 */class Sh{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=bh;function kc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Gr,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Lt.create("bad-app-name",{appName:String(r)});if(n||(n=Sc()),!n)throw Lt.create("no-options");const i=$s.get(r);if(i){if(vn(n,i.options)&&vn(s,i.config))return i;throw Lt.create("duplicate-app",{appName:r})}const o=new kd(r);for(const c of qr.values())o.addComponent(c);const a=new Sh(n,s,o);return $s.set(r,a),a}function Th(t=Gr){const e=$s.get(t);if(!e&&t===Gr&&Sc())return kc();if(!e)throw Lt.create("no-app",{appName:t});return e}function hn(t,e,n){let s=wh[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(o.join(" "));return}Xn(new bn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ch="firebase-heartbeat-database",Ah=1,Zn="firebase-heartbeat-store";let Tr=null;function Oc(){return Tr||(Tr=jd(Ch,Ah,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),Tr}async function Rh(t){try{const n=(await Oc()).transaction(Zn),s=await n.objectStore(Zn).get(xc(t));return await n.done,s}catch(e){if(e instanceof Ft)yt.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e?.message});yt.warn(n.message)}}}async function So(t,e){try{const s=(await Oc()).transaction(Zn,"readwrite");await s.objectStore(Zn).put(e,xc(t)),await s.done}catch(n){if(n instanceof Ft)yt.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n?.message});yt.warn(s.message)}}}function xc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ph=1024,kh=30;class Oh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=To();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>kh){const r=Dh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){yt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=To(),{heartbeatsToSend:n,unsentEntries:s}=xh(this._heartbeatsCache.heartbeats),r=Ec(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return yt.warn(e),""}}}function To(){return new Date().toISOString().substring(0,10)}function xh(t,e=Ph){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Co(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Co(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Nh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yd()?vd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rh(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return So(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return So(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Co(t){return Ec(JSON.stringify({version:2,heartbeats:t})).length}function Dh(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function Mh(t){Xn(new bn("platform-logger",e=>new Kd(e),"PRIVATE")),Xn(new bn("heartbeat",e=>new Oh(e),"PRIVATE")),hn(Kr,Eo,t),hn(Kr,Eo,"esm2020"),hn("fire-js","")}Mh("");function Nc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lh=Nc,Dc=new as("auth","Firebase",Nc());/**
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
 */const Vs=new Cc("@firebase/auth");function Uh(t,...e){Vs.logLevel<=te.WARN&&Vs.warn(`Auth (${ls}): ${t}`,...e)}function Cs(t,...e){Vs.logLevel<=te.ERROR&&Vs.error(`Auth (${ls}): ${t}`,...e)}/**
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
 */function Be(t,...e){throw Ii(t,...e)}function nt(t,...e){return Ii(t,...e)}function Mc(t,e,n){const s={...Lh(),[e]:n};return new as("auth","Firebase",s).create(e,{appName:t.name})}function pt(t){return Mc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ii(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Dc.create(t,...e)}function H(t,e,...n){if(!t)throw Ii(e,...n)}function ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cs(e),new Error(e)}function vt(t,e){t||ft(e)}/**
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
 */function Jr(){return typeof self<"u"&&self.location?.href||""}function Fh(){return Ao()==="http:"||Ao()==="https:"}function Ao(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function $h(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fh()||gd()||"connection"in navigator)?navigator.onLine:!0}function Vh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class us{constructor(e,n){this.shortDelay=e,this.longDelay=n,vt(n>e,"Short delay should be less than long delay!"),this.isMobile=hd()||md()}get(){return $h()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Si(t,e){vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Lc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Hh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jh=new us(3e4,6e4);function $t(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Vt(t,e,n,s,r={}){return Uc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=cs({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return pd()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&or(t.emulatorConfig.host)&&(l.credentials="include"),Lc.fetch()(await Fc(t,t.config.apiHost,n,a),l)})}async function Uc(t,e,n){t._canInitEmulator=!1;const s={...Hh,...e};try{const r=new zh(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw vs(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Mc(t,u,l);Be(t,u)}}catch(r){if(r instanceof Ft)throw r;Be(t,"network-request-failed",{message:String(r)})}}async function fs(t,e,n,s,r={}){const i=await Vt(t,e,n,s,r);return"mfaPendingCredential"in i&&Be(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Fc(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Si(t.config,r):`${t.config.apiScheme}://${r}`;return Bh.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Wh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nt(this.auth,"network-request-failed")),jh.get())})}}function vs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=nt(t,e,s);return r.customData._tokenResponse=n,r}function Ro(t){return t!==void 0&&t.enterprise!==void 0}class Kh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Wh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Gh(t,e){return Vt(t,"GET","/v2/recaptchaConfig",$t(t,e))}/**
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
 */async function qh(t,e){return Vt(t,"POST","/v1/accounts:delete",e)}async function Hs(t,e){return Vt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jh(t,e=!1){const n=wt(t),s=await n.getIdToken(e),r=Ti(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:Hn(Cr(r.auth_time)),issuedAtTime:Hn(Cr(r.iat)),expirationTime:Hn(Cr(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Cr(t){return Number(t)*1e3}function Ti(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Cs("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ic(n);return r?JSON.parse(r):(Cs("Failed to decode base64 JWT payload"),null)}catch(r){return Cs("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Po(t){const e=Ti(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ft&&Yh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Yh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Xh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hn(this.lastLoginAt),this.creationTime=Hn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bs(t){const e=t.auth,n=await t.getIdToken(),s=await Qn(t,Hs(e,{idToken:n}));H(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?$c(r.providerUserInfo):[],o=Qh(t.providerData,i),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!o?.length,l=a?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Yr(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function Zh(t){const e=wt(t);await Bs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function $c(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function ep(t,e){const n=await Uc(t,{},async()=>{const s=cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await Fc(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return t.emulatorConfig&&or(t.emulatorConfig.host)&&(c.credentials="include"),Lc.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tp(t,e){return Vt(t,"POST","/v2/accounts:revokeToken",$t(t,e))}/**
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
 */class pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Po(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Po(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await ep(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new pn;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pn,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
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
 */function St(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fe{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Xh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Qn(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jh(this,e)}reload(){return Zh(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Bs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(pt(this.auth));const e=await this.getIdToken();return await Qn(this,qh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:h,isAnonymous:g,providerData:v,stsTokenManager:E}=n;H(d&&E,e,"internal-error");const M=pn.fromJSON(this.name,E);H(typeof d=="string",e,"internal-error"),St(s,e.name),St(r,e.name),H(typeof h=="boolean",e,"internal-error"),H(typeof g=="boolean",e,"internal-error"),St(i,e.name),St(o,e.name),St(a,e.name),St(c,e.name),St(l,e.name),St(u,e.name);const k=new Fe({uid:d,auth:e,email:r,emailVerified:h,displayName:s,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:M,createdAt:l,lastLoginAt:u});return v&&Array.isArray(v)&&(k.providerData=v.map(C=>({...C}))),c&&(k._redirectEventId=c),k}static async _fromIdTokenResponse(e,n,s=!1){const r=new pn;r.updateFromServerResponse(n);const i=new Fe({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Bs(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];H(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?$c(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,a=new pn;a.updateFromIdToken(s);const c=new Fe({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Yr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
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
 */const ko=new Map;function dt(t){vt(t instanceof Function,"Expected a class definition");let e=ko.get(t);return e?(vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ko.set(t,e),e)}/**
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
 */function As(t,e,n){return`firebase:${t}:${e}:${n}`}class gn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=As(this.userKey,r.apiKey,i),this.fullPersistenceKey=As("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Hs(this.auth,{idToken:e}).catch(()=>{});return n?Fe._fromGetAccountInfoResponse(this.auth,n,e):null}return Fe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new gn(dt(Oo),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||dt(Oo);const o=As(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let d;if(typeof u=="string"){const h=await Hs(e,{idToken:u}).catch(()=>{});if(!h)break;d=await Fe._fromGetAccountInfoResponse(e,h,u)}else d=Fe._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new gn(i,e,s))}}/**
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
 */function xo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kc(e))return"Blackberry";if(Gc(e))return"Webos";if(Bc(e))return"Safari";if((e.includes("chrome/")||jc(e))&&!e.includes("edge/"))return"Chrome";if(zc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Hc(t=Ie()){return/firefox\//i.test(t)}function Bc(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jc(t=Ie()){return/crios\//i.test(t)}function Wc(t=Ie()){return/iemobile/i.test(t)}function zc(t=Ie()){return/android/i.test(t)}function Kc(t=Ie()){return/blackberry/i.test(t)}function Gc(t=Ie()){return/webos/i.test(t)}function Ci(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function np(t=Ie()){return Ci(t)&&!!window.navigator?.standalone}function sp(){return _d()&&document.documentMode===10}function qc(t=Ie()){return Ci(t)||zc(t)||Gc(t)||Kc(t)||/windows phone/i.test(t)||Wc(t)}/**
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
 */class rp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function ip(t,e={}){return Vt(t,"GET","/v2/passwordPolicy",$t(t,e))}/**
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
 */const op=6;class ap{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??op,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class cp{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new No(this),this.idTokenSubscription=new No(this),this.beforeStateQueue=new rp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await gn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hs(this,{idToken:e}),s=await Fe._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ue(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bs(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(pt(this));const n=e?wt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ip(this),n=new ap(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await tp(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await gn.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Uh(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Xt(t){return wt(t)}class No{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sd(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ar={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lp(t){ar=t}function Yc(t){return ar.loadJS(t)}function up(){return ar.recaptchaEnterpriseScript}function fp(){return ar.gapiScript}function dp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class hp{constructor(){this.enterprise=new pp}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class pp{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const gp="recaptcha-enterprise",Xc="NO_RECAPTCHA";class mp{constructor(e){this.type=gp,this.auth=Xt(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Gh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Kh(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Ro(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Xc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hp().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Ro(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=up();c.length!==0&&(c+=a),Yc(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Do(t,e,n,s=!1,r=!1){const i=new mp(t);let o;if(r)o=Xc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Xr(t,e,n,s,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Do(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Do(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
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
 */function _p(t,e){const n=Pc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(vn(i,e??{}))return r;Be(r,"already-initialized")}return n.initialize({options:e})}function yp(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(dt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function vp(t,e,n){const s=Xt(t);H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Zc(e),{host:o,port:a}=bp(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){H(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),H(vn(l,s.config.emulator)&&vn(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,or(o)?(ld(`${i}//${o}${c}`),dd("Auth",!0)):wp()}function Zc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bp(t){const e=Zc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Mo(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Mo(o)}}}function Mo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ai{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,n){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function Ep(t,e){return Vt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ip(t,e){return fs(t,"POST","/v1/accounts:signInWithPassword",$t(t,e))}/**
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
 */async function Sp(t,e){return fs(t,"POST","/v1/accounts:signInWithEmailLink",$t(t,e))}async function Tp(t,e){return fs(t,"POST","/v1/accounts:signInWithEmailLink",$t(t,e))}/**
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
 */class es extends Ai{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new es(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new es(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xr(e,n,"signInWithPassword",Ip);case"emailLink":return Sp(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xr(e,s,"signUpPassword",Ep);case"emailLink":return Tp(e,{idToken:n,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mn(t,e){return fs(t,"POST","/v1/accounts:signInWithIdp",$t(t,e))}/**
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
 */const Cp="http://localhost";class qt extends Ai{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new qt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,mn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mn(e,n)}buildRequest(){const e={requestUri:Cp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cs(n)}return e}}/**
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
 */function Ap(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rp(t){const e=On(xn(t)).link,n=e?On(xn(e)).deep_link_id:null,s=On(xn(t)).deep_link_id;return(s?On(xn(s)).link:null)||s||n||e||t}class Ri{constructor(e){const n=On(xn(e)),s=n.apiKey??null,r=n.oobCode??null,i=Ap(n.mode??null);H(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Rp(e);try{return new Ri(n)}catch{return null}}}/**
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
 */class Sn{constructor(){this.providerId=Sn.PROVIDER_ID}static credential(e,n){return es._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ri.parseLink(n);return H(s,"argument-error"),es._fromEmailAndCode(e,s.code,s.tenantId)}}Sn.PROVIDER_ID="password";Sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kt extends ds{constructor(){super("facebook.com")}static credential(e){return qt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ot.credential(n,s)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class xt extends ds{constructor(){super("github.com")}static credential(e){return qt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
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
 */class Nt extends ds{constructor(){super("twitter.com")}static credential(e,n){return qt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Nt.credential(n,s)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
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
 */async function Pp(t,e){return fs(t,"POST","/v1/accounts:signUp",$t(t,e))}/**
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
 */class Jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Fe._fromIdTokenResponse(e,s,r),o=Lo(s);return new Jt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Lo(s);return new Jt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Lo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class js extends Ft{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,js.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new js(e,n,s,r)}}function el(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?js._fromErrorAndOperation(t,i,e,s):i})}async function kp(t,e,n=!1){const s=await Qn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jt._forOperation(t,"link",s)}/**
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
 */async function Op(t,e,n=!1){const{auth:s}=t;if(Ue(s.app))return Promise.reject(pt(s));const r="reauthenticate";try{const i=await Qn(t,el(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=Ti(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),Jt._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&Be(s,"user-mismatch"),i}}/**
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
 */async function tl(t,e,n=!1){if(Ue(t.app))return Promise.reject(pt(t));const s="signIn",r=await el(t,s,e),i=await Jt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function xp(t,e){return tl(Xt(t),e)}/**
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
 */async function nl(t){const e=Xt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Np(t,e,n){if(Ue(t.app))return Promise.reject(pt(t));const s=Xt(t),o=await Xr(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Pp).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&nl(t),c}),a=await Jt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Dp(t,e,n){return Ue(t.app)?Promise.reject(pt(t)):xp(wt(t),Sn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&nl(t),s})}function Mp(t,e,n,s){return wt(t).onIdTokenChanged(e,n,s)}function Lp(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function Up(t,e,n,s){return wt(t).onAuthStateChanged(e,n,s)}function Fp(t){return wt(t).signOut()}const Ws="__sak";/**
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
 */class sl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ws,"1"),this.storage.removeItem(Ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $p=1e3,Vp=10;class rl extends sl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);sp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Vp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},$p)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rl.type="LOCAL";const Hp=rl;/**
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
 */function Bp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new cr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Bp(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cr.receivers=[];/**
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
 */class jp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Pi("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function st(){return window}function Wp(t){st().location.href=t}/**
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
 */function al(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function zp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kp(){return navigator?.serviceWorker?.controller||null}function Gp(){return al()?self:null}/**
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
 */const cl="firebaseLocalStorageDb",qp=1,zs="firebaseLocalStorage",ll="fbase_key";class hs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lr(t,e){return t.transaction([zs],e?"readwrite":"readonly").objectStore(zs)}function Jp(){const t=indexedDB.deleteDatabase(cl);return new hs(t).toPromise()}function Zr(){const t=indexedDB.open(cl,qp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(zs,{keyPath:ll})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(zs)?e(s):(s.close(),await Jp(),e(await Zr()))})})}async function Uo(t,e,n){const s=lr(t,!0).put({[ll]:e,value:n});return new hs(s).toPromise()}async function Yp(t,e){const n=lr(t,!1).get(e),s=await new hs(n).toPromise();return s===void 0?null:s.value}function Fo(t,e){const n=lr(t,!0).delete(e);return new hs(n).toPromise()}const Xp=800,Zp=3;class ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Zp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return al()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cr._getInstance(Gp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await zp(),!this.activeServiceWorker)return;this.sender=new jp(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zr();return await Uo(e,Ws,"1"),await Fo(e,Ws),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Yp(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=lr(r,!1).getAll();return new hs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ul.type="LOCAL";const Qp=ul;new us(3e4,6e4);/**
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
 */function eg(t,e){return e?dt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ki extends Ai{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tg(t){return tl(t.auth,new ki(t),t.bypassAuthState)}function ng(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Op(n,new ki(t),t.bypassAuthState)}async function sg(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),kp(n,new ki(t),t.bypassAuthState)}/**
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
 */class fl{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tg;case"linkViaPopup":case"linkViaRedirect":return sg;case"reauthViaPopup":case"reauthViaRedirect":return ng;default:Be(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rg=new us(2e3,1e4);class on extends fl{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=Pi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rg.get())};e()}}on.currentPopupAction=null;/**
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
 */const ig="pendingRedirect",Rs=new Map;class og extends fl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Rs.get(this.auth._key());if(!e){try{const s=await ag(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Rs.set(this.auth._key(),e)}return this.bypassAuthState||Rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ag(t,e){const n=ug(e),s=lg(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function cg(t,e){Rs.set(t._key(),e)}function lg(t){return dt(t._redirectPersistence)}function ug(t){return As(ig,t.config.apiKey,t.name)}async function fg(t,e,n=!1){if(Ue(t.app))return Promise.reject(pt(t));const s=Xt(t),r=eg(s,e),o=await new og(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const dg=600*1e3;class hg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!dl(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(nt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dg&&this.cachedEventUids.clear(),this.cachedEventUids.has($o(e))}saveEventToCache(e){this.cachedEventUids.add($o(e)),this.lastProcessedEventTime=Date.now()}}function $o(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dl({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function pg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dl(t);default:return!1}}/**
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
 */async function gg(t,e={}){return Vt(t,"GET","/v1/projects",e)}/**
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
 */const mg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_g=/^https?/;async function yg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gg(t);for(const n of e)try{if(vg(n))return}catch{}Be(t,"unauthorized-domain")}function vg(t){const e=Jr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!_g.test(n))return!1;if(mg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const bg=new us(3e4,6e4);function Vo(){const t=st().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wg(t){return new Promise((e,n)=>{function s(){Vo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vo(),n(nt(t,"network-request-failed"))},timeout:bg.get()})}if(st().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(st().gapi?.load)s();else{const r=dp("iframefcb");return st()[r]=()=>{gapi.load?s():n(nt(t,"network-request-failed"))},Yc(`${fp()}?onload=${r}`).catch(i=>n(i))}}).catch(e=>{throw Ps=null,e})}let Ps=null;function Eg(t){return Ps=Ps||wg(t),Ps}/**
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
 */const Ig=new us(5e3,15e3),Sg="__/auth/iframe",Tg="emulator/auth/iframe",Cg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ag=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rg(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Si(e,Tg):`https://${t.config.authDomain}/${Sg}`,s={apiKey:e.apiKey,appName:t.name,v:ls},r=Ag.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${cs(s).slice(1)}`}async function Pg(t){const e=await Eg(t),n=st().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:Rg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=st().setTimeout(()=>{i(o)},Ig.get());function c(){st().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const kg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Og=500,xg=600,Ng="_blank",Dg="http://localhost";class Ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mg(t,e,n,s=Og,r=xg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...kg,width:s.toString(),height:r.toString(),top:i,left:o},l=Ie().toLowerCase();n&&(a=jc(l)?Ng:n),Hc(l)&&(e=e||Dg,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(np(l)&&a!=="_self")return Lg(e||"",a),new Ho(null);const d=window.open(e||"",a,u);H(d,t,"popup-blocked");try{d.focus()}catch{}return new Ho(d)}function Lg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Ug="__/auth/handler",Fg="emulator/auth/handler",$g=encodeURIComponent("fac");async function Bo(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ls,eventId:r};if(e instanceof Qc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Id(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof ds){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${$g}=${encodeURIComponent(c)}`:"";return`${Vg(t)}?${cs(a).slice(1)}${l}`}function Vg({config:t}){return t.emulator?Si(t,Fg):`https://${t.authDomain}/${Ug}`}/**
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
 */const Ar="webStorageSupport";class Hg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ol,this._completeRedirectFn=fg,this._overrideRedirectResult=cg}async _openPopup(e,n,s,r){vt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Bo(e,n,s,Jr(),r);return Mg(e,i,Pi())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Bo(e,n,s,Jr(),r);return Wp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(vt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Pg(e),s=new hg(e);return n.register("authEvent",r=>(H(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ar,{type:Ar},r=>{const i=r?.[0]?.[Ar];i!==void 0&&n(!!i),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qc()||Bc()||Ci()}}const Bg=Hg;var jo="@firebase/auth",Wo="1.11.0";/**
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
 */class jg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Wg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zg(t){Xn(new bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jc(t)},l=new cp(s,r,i,c);return yp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Xn(new bn("auth-internal",e=>{const n=Xt(e.getProvider("auth").getImmediate());return(s=>new jg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(jo,Wo,Wg(t)),hn(jo,Wo,"esm2020")}/**
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
 */const Kg=300,Gg=Tc("authIdTokenMaxAge")||Kg;let zo=null;const qg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Gg)return;const r=n?.token;zo!==r&&(zo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Jg(t=Th()){const e=Pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_p(t,{popupRedirectResolver:Bg,persistence:[Qp,Hp,ol]}),s=Tc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=qg(i.toString());Lp(n,o,()=>o(n.currentUser)),Mp(n,a=>o(a))}}const r=ad("auth");return r&&vp(n,`http://${r}`),n}function Yg(){return document.getElementsByTagName("head")?.[0]??document}lp({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Yg().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zg("Browser");var Xg="firebase",Zg="12.2.1";/**
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
 */hn(Xg,Zg,"app");const Qg={apiKey:"AIzaSyAPw8mtj5DM7z9g5MHOfHhDPuqJl4RmX3k",authDomain:"sdgs-journey.firebaseapp.com",projectId:"sdgs-journey",storageBucket:"sdgs-journey.firebasestorage.app",messagingSenderId:"233910289851",appId:"1:233910289851:web:e2641b83540889819a309e"},em=kc(Qg),bs=Jg(em);console.log(!1);const tm="https://api.sdgs-journey.com/api/v1",Ko=parseInt("5242880")||5242880,Go="image/jpeg,image/jpg,image/png,image/gif,image/webp".split(",");class nm{constructor(){this.baseURL=tm}async request(e,n={}){if(!this.baseURL||this.baseURL.trim()==="")throw console.warn("API_BASE_URL is empty, skipping API call for:",e),new Error("API_BASE_URL_NOT_CONFIGURED");const s=`${this.baseURL}${e}`,r={headers:{"Content-Type":"application/json",...n.headers},...n},i=localStorage.getItem("auth_token");i&&i!=="student_token"&&i!=="visitor_token"&&(r.headers.Authorization=`Bearer ${i}`);try{const o=await fetch(s,r);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const a=o.headers.get("content-type");return a&&a.includes("application/json")?await o.json():o}catch(o){throw console.error("API request failed:",o),o}}validateImageFile(e){const n=[];if(!e)return n.push("No file selected"),n;if(Go.includes(e.type)||n.push(`Invalid file type. Allowed types: ${Go.join(", ")}`),e.size>Ko){const s=(Ko/1024/1024).toFixed(1);n.push(`File size too large. Maximum size: ${s}MB`)}return n}async uploadImage(e,n="story"){const s=this.validateImageFile(e);if(s.length>0)throw new Error(s.join(", "));const r=new FormData;r.append("image",e),r.append("type",n);try{const i=await fetch(`${this.baseURL}/upload/image`,{method:"POST",headers:{...localStorage.getItem("auth_token")&&localStorage.getItem("auth_token")!=="student_token"&&localStorage.getItem("auth_token")!=="visitor_token"?{Authorization:`Bearer ${localStorage.getItem("auth_token")}`}:{}},body:r});if(!i.ok){const a=await i.text();throw new Error(`Upload failed (${i.status}): ${a}`)}const o=await i.json();if(!o.url)throw new Error("Invalid server response: missing URL");return o}catch(i){throw console.error("Image upload failed:",i),i}}async getArticles(){return this.request("/articles")}async getArticle(e){return this.request(`/articles/${e}`)}async createArticle(e){return this.request("/articles",{method:"POST",body:JSON.stringify(e)})}async updateArticle(e,n){return this.request(`/articles/${e}`,{method:"PUT",body:JSON.stringify(n)})}async deleteArticle(e){return this.request(`/articles/${e}`,{method:"DELETE"})}async login(e){return this.request("/auth/login",{method:"POST",body:JSON.stringify(e)})}async register(e){return console.log(JSON.stringify(e)),this.request("/auth/register",{method:"POST",body:JSON.stringify(e)})}async getProfile(){return this.request("/users/profile")}async updateProfile(e){return this.request("/users/profile",{method:"PUT",body:JSON.stringify(e)})}}const Rr=new nm,Wt=ce(!1),ee=ce(null),Oi=()=>{const t={admin:{account:"admin",password:"admin"},teacher:{account:"tc",password:"tc"}},e=async(v,E,M,k,C)=>{try{const O=await Np(bs,E,M),x=await O.user.getIdToken();console.log("Firebase registration successful"),localStorage.setItem("auth_token",x);const F={full_name:v,institution_id:1,role:C,id_token:x};console.log(F);try{const D=await Rr.register(F);console.log("Backend registration successful:",D)}catch(D){console.error("Backend registration failed:",D);const K=!1,Se=D.message?.includes("ERR_CONNECTION_REFUSED")||D.message?.includes("Failed to fetch")||D.message?.includes("NetworkError")||D.message?.includes("API_BASE_URL_NOT_CONFIGURED");K&&Se||console.warn("User registered in Firebase but backend registration failed")}return ee.value={email:O.user.email,role:C,username:v,displayName:"老師",uid:O.user.uid,institution_id:k,id_token:x},Wt.value=!0,localStorage.setItem("auth_token",x),localStorage.setItem("user_data",JSON.stringify(ee.value)),{success:!0,user:ee.value}}catch(O){return console.error("Registration Error:",O),O.code==="auth/email-already-in-use"?{success:!1,message:"此電子郵件已被註冊"}:O.code==="auth/weak-password"?{success:!1,message:"密碼強度不足"}:O.code==="auth/invalid-email"?{success:!1,message:"無效的電子郵件格式"}:{success:!1,message:O.message||"註冊失敗，請稍後再試"}}},n=async v=>{const E={id_token:"eyJhbGciOiJSUzI1NiIsImtpZCI6ImUzZWU3ZTAyOGUzODg1YTM0NWNlMDcwNTVmODQ2ODYyMjU1YTcwNDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2Rncy1qb3VybmV5IiwiYXVkIjoic2Rncy1qb3VybmV5IiwiYXV0aF90aW1lIjoxNzU4MDA1Njc2LCJ1c2VyX2lkIjoiemRwZ1JqY2NlVWVqNzFGSmZFWnIwZk1UdnhsMiIsInN1YiI6InpkcGdSamNjZVVlajcxRkpmRVpyMGZNVHZ4bDIiLCJpYXQiOjE3NTgwMDU2NzYsImV4cCI6MTc1ODAwOTI3NiwiZW1haWwiOiJ0ZXN0OThAc2Rnc2pvdXJuZXkuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3Q5OEBzZGdzam91cm5leS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Z6-8m6VlNV1IZ6fnMCifgP1flT3zZRVxhfovKUyvdZ0nwodxkgfcjlsSavH6tnEaijdOKQYCm5WL016EPpNK5k2nT7OuO269rfAsNOs9JC6VAgHbFVWVyV4WLF6ssVbpEQCEd6z3RTGRX2NJf0BS3dXyozAOMuUbz_wMeNFNe4I_8Os19FAJZFGLjATBkkm1ccqEtKpyYoZBE0loQ6g4VxH-z8xuF7GPimpMnVrB-UYAmyK6NPXJt4AKEMbXkIkTM8kBf3f3dwP5GxoG_WlWpIdVWuVANQwjkbpYi6nLvCFlWFd0eNg_GjhJ9Xl7xc_ecyo0COXIo97587V3RiBoDw",full_name:"Test Teacher User",role:"teacher",institution_id:1};localStorage.setItem("auth_token",E.id_token);try{const M=await Rr.register(E);console.log("Backend registration successful:",M)}catch(M){console.error("Backend registration failed:",M),console.warn("User registered in Firebase but backend registration failed")}},s=async(v,E)=>{try{const k=await(await Dp(bs,v,E)).user.getIdToken();try{const C=await Rr.login({id_token:k});console.log("Backend login successful:",C),ee.value=C.user}catch(C){return console.error("Backend login failed:",C),{success:!1,message:"後端登入失敗，請稍後再試"}}return localStorage.removeItem("user_data"),Wt.value=!0,localStorage.setItem("auth_token",k),localStorage.setItem("user_data",JSON.stringify(ee.value)),{success:!0}}catch(M){return console.error("Login Error:",M),{success:!1,message:M.message}}},r=async(v,E)=>await s(v,E),i=(v,E={})=>{switch(Wt.value=!0,v){case"admin":ee.value={account:E.account||"admin",role:"admin",displayName:"管理員",icon:"fa-user-shield"},localStorage.setItem("auth_token","admin_token"),localStorage.setItem("user_data",JSON.stringify(ee.value));break;case"teacher":ee.value={account:E.account||"teacher",role:"teacher",displayName:"老師",icon:"fa-user-tie"},localStorage.setItem("auth_token","teacher_token"),localStorage.setItem("user_data",JSON.stringify(ee.value));break;case"student":ee.value={account:E.name||"學生",role:"student",displayName:"學生",icon:"fa-user-graduate"},localStorage.setItem("auth_token","student_token"),localStorage.setItem("user_data",JSON.stringify(ee.value));break;case"visitor":ee.value={account:"訪客",role:"visitor",displayName:"訪客",icon:"fa-user"},localStorage.setItem("auth_token","visitor_token"),localStorage.setItem("user_data",JSON.stringify(ee.value));break}return{success:!0}},o=(v,E)=>v===t.admin.account&&E===t.admin.password?i("admin",{account:v}):{success:!1,message:"帳號或密碼錯誤"},a=(v,E)=>v===t.teacher.account&&E===t.teacher.password?i("teacher",{account:v}):{success:!1,message:"帳號或密碼錯誤"},c=async()=>{try{await Fp(bs)}catch(v){console.error("Sign out error",v)}Wt.value=!1,ee.value=null,localStorage.removeItem("auth_token"),localStorage.removeItem("user_data")},l=()=>{Up(bs,v=>{if(v){Wt.value=!0;const E=localStorage.getItem("user_data");E?ee.value=JSON.parse(E):(ee.value={email:v.email,uid:v.uid,role:"teacher",displayName:"老師"},localStorage.setItem("user_data",JSON.stringify(ee.value)),v.getIdToken().then(M=>{localStorage.setItem("auth_token",M)}))}else Wt.value=!1,ee.value=null,localStorage.removeItem("auth_token"),localStorage.removeItem("user_data")})},u=Ee(()=>ee.value&&ee.value.role==="admin"),d=Ee(()=>ee.value&&ee.value.role==="teacher"),h=Ee(()=>ee.value&&ee.value.role==="student"),g=Ee(()=>ee.value&&ee.value.role==="visitor");return{isAuthenticated:Wt,user:ee,isAdmin:u,isTeacher:d,isStudent:h,isVisitor:g,selectRole:i,adminLogin:o,teacherLogin:a,logout:c,checkAuth:l,registerWithEmailAndPassword:e,loginWithEmailAndPassword:r,loginWithCredentials:s,test:n}};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const rn=typeof document<"u";function hl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function sm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&hl(t.default)}const q=Object.assign;function Pr(t,e){const n={};for(const s in e){const r=e[s];n[s]=je(r)?r.map(t):t(r)}return n}const Bn=()=>{},je=Array.isArray,pl=/#/g,rm=/&/g,im=/\//g,om=/=/g,am=/\?/g,gl=/\+/g,cm=/%5B/g,lm=/%5D/g,ml=/%5E/g,um=/%60/g,_l=/%7B/g,fm=/%7C/g,yl=/%7D/g,dm=/%20/g;function xi(t){return encodeURI(""+t).replace(fm,"|").replace(cm,"[").replace(lm,"]")}function hm(t){return xi(t).replace(_l,"{").replace(yl,"}").replace(ml,"^")}function Qr(t){return xi(t).replace(gl,"%2B").replace(dm,"+").replace(pl,"%23").replace(rm,"%26").replace(um,"`").replace(_l,"{").replace(yl,"}").replace(ml,"^")}function pm(t){return Qr(t).replace(om,"%3D")}function gm(t){return xi(t).replace(pl,"%23").replace(am,"%3F")}function mm(t){return t==null?"":gm(t).replace(im,"%2F")}function ts(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const _m=/\/$/,ym=t=>t.replace(_m,"");function kr(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Em(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:ts(o)}}function vm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bm(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&wn(e.matched[s],n.matched[r])&&vl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function wn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wm(t[n],e[n]))return!1;return!0}function wm(t,e){return je(t)?Jo(t,e):je(e)?Jo(e,t):t===e}function Jo(t,e){return je(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Em(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ns;(function(t){t.pop="pop",t.push="push"})(ns||(ns={}));var jn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(jn||(jn={}));function Im(t){if(!t)if(rn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ym(t)}const Sm=/^[^#]+#/;function Tm(t,e){return t.replace(Sm,"#")+e}function Cm(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ur=()=>({left:window.scrollX,top:window.scrollY});function Am(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Cm(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yo(t,e){return(history.state?history.state.position-e:-1)+t}const ei=new Map;function Rm(t,e){ei.set(t,e)}function Pm(t){const e=ei.get(t);return ei.delete(t),e}let km=()=>location.protocol+"//"+location.host;function bl(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),qo(c,"")}return qo(n,t)+s+r}function Om(t,e,n,s){let r=[],i=[],o=null;const a=({state:h})=>{const g=bl(t,location),v=n.value,E=e.value;let M=0;if(h){if(n.value=g,e.value=h,o&&o===v){o=null;return}M=E?h.position-E.position:0}else s(g);r.forEach(k=>{k(n.value,v,{delta:M,type:ns.pop,direction:M?M>0?jn.forward:jn.back:jn.unknown})})};function c(){o=n.value}function l(h){r.push(h);const g=()=>{const v=r.indexOf(h);v>-1&&r.splice(v,1)};return i.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(q({},h.state,{scroll:ur()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function Xo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ur():null}}function xm(t){const{history:e,location:n}=window,s={value:bl(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:km()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=q({},e.state,Xo(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=q({},r.value,e.state,{forward:c,scroll:ur()});i(u.current,u,!0);const d=q({},Xo(s.value,c,null),{position:u.position+1},l);i(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Nm(t){t=Im(t);const e=xm(t),n=Om(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=q({location:"",base:t,go:s,createHref:Tm.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Dm(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Nm(t)}function Mm(t){return typeof t=="string"||t&&typeof t=="object"}function wl(t){return typeof t=="string"||typeof t=="symbol"}const El=Symbol("");var Zo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zo||(Zo={}));function En(t,e){return q(new Error,{type:t,[El]:!0},e)}function at(t,e){return t instanceof Error&&El in t&&(e==null||!!(t.type&e))}const Qo="[^/]+?",Lm={sensitive:!1,strict:!1,start:!0,end:!0},Um=/[.+*?^${}()[\]/\\]/g;function Fm(t,e){const n=q({},Lm,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let d=0;d<l.length;d++){const h=l[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(Um,"\\$&"),g+=40;else if(h.type===1){const{value:v,repeatable:E,optional:M,regexp:k}=h;i.push({name:v,repeatable:E,optional:M});const C=k||Qo;if(C!==Qo){g+=10;try{new RegExp(`(${C})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${v}" (${C}): `+x.message)}}let O=E?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(O=M&&l.length<2?`(?:/${O})`:"/"+O),M&&(O+="?"),r+=O,g+=20,M&&(g+=-8),E&&(g+=-20),C===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",v=i[h-1];d[v.name]=g&&v.repeatable?g.split("/"):g}return d}function c(l){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:E,optional:M}=g,k=v in l?l[v]:"";if(je(k)&&!E)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const C=je(k)?k.join("/"):k;if(!C)if(M)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=C}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function $m(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Il(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=$m(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(ea(s))return 1;if(ea(r))return-1}return r.length-s.length}function ea(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Vm={type:0,value:""},Hm=/[a-zA-Z0-9_]/;function Bm(t){if(!t)return[[]];if(t==="/")return[[Vm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:Hm.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),r}function jm(t,e,n){const s=Fm(Bm(t.path),n),r=q(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Wm(t,e){const n=[],s=new Map;e=ra({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,h,g){const v=!g,E=na(d);E.aliasOf=g&&g.record;const M=ra(e,d),k=[E];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const F of x)k.push(na(q({},E,{components:g?g.record.components:E.components,path:F,aliasOf:g?g.record:E})))}let C,O;for(const x of k){const{path:F}=x;if(h&&F[0]!=="/"){const D=h.record.path,K=D[D.length-1]==="/"?"":"/";x.path=h.record.path+(F&&K+F)}if(C=jm(x,h,M),g?g.alias.push(C):(O=O||C,O!==C&&O.alias.push(C),v&&d.name&&!sa(C)&&o(d.name)),Sl(C)&&c(C),E.children){const D=E.children;for(let K=0;K<D.length;K++)i(D[K],C,g&&g.children[K])}g=g||C}return O?()=>{o(O)}:Bn}function o(d){if(wl(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const h=Gm(d,n);n.splice(h,0,d),d.record.name&&!sa(d)&&s.set(d.record.name,d)}function l(d,h){let g,v={},E,M;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw En(1,{location:d});M=g.record.name,v=q(ta(h.params,g.keys.filter(O=>!O.optional).concat(g.parent?g.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),d.params&&ta(d.params,g.keys.map(O=>O.name))),E=g.stringify(v)}else if(d.path!=null)E=d.path,g=n.find(O=>O.re.test(E)),g&&(v=g.parse(E),M=g.record.name);else{if(g=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!g)throw En(1,{location:d,currentLocation:h});M=g.record.name,v=q({},h.params,d.params),E=g.stringify(v)}const k=[];let C=g;for(;C;)k.unshift(C.record),C=C.parent;return{name:M,path:E,params:v,matched:k,meta:Km(k)}}t.forEach(d=>i(d));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function ta(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function na(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:zm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function zm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function sa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Km(t){return t.reduce((e,n)=>q(e,n.meta),{})}function ra(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Gm(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;Il(t,e[i])<0?s=i:n=i+1}const r=qm(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function qm(t){let e=t;for(;e=e.parent;)if(Sl(e)&&Il(t,e)===0)return e}function Sl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Jm(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(gl," "),o=i.indexOf("="),a=ts(o<0?i:i.slice(0,o)),c=o<0?null:ts(i.slice(o+1));if(a in e){let l=e[a];je(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ia(t){let e="";for(let n in t){const s=t[n];if(n=pm(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(je(s)?s.map(i=>i&&Qr(i)):[s&&Qr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ym(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=je(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Xm=Symbol(""),oa=Symbol(""),fr=Symbol(""),Ni=Symbol(""),ti=Symbol("");function Pn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rt(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(En(4,{from:n,to:e})):h instanceof Error?c(h):Mm(h)?c(En(2,{from:e,to:h})):(o&&s.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(s&&s.instances[r],e,n,l));let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(h=>c(h))})}function Or(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(hl(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Rt(u,n,s,o,a,r))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=sm(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Rt(g,n,s,o,a,r)()}))}}return i}function aa(t){const e=Ve(fr),n=Ve(Ni),s=Ee(()=>{const c=Pe(t.to);return e.resolve(c)}),r=Ee(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(wn.bind(null,u));if(h>-1)return h;const g=ca(c[l-2]);return l>1&&ca(u)===g&&d[d.length-1].path!==g?d.findIndex(wn.bind(null,c[l-2])):h}),i=Ee(()=>r.value>-1&&n_(n.params,s.value.params)),o=Ee(()=>r.value>-1&&r.value===n.matched.length-1&&vl(n.params,s.value.params));function a(c={}){if(t_(c)){const l=e[Pe(t.replace)?"replace":"push"](Pe(t.to)).catch(Bn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:s,href:Ee(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function Zm(t){return t.length===1?t[0]:t}const Qm=Wa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:aa,setup(t,{slots:e}){const n=Qs(aa(t)),{options:s}=Ve(fr),r=Ee(()=>({[la(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[la(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Zm(e.default(n));return t.custom?i:_c("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),e_=Qm;function t_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function n_(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!je(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ca(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const la=(t,e,n)=>t??e??n,s_=Wa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ve(ti),r=Ee(()=>t.route||s.value),i=Ve(oa,0),o=Ee(()=>{let l=Pe(i);const{matched:u}=r.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Ee(()=>r.value.matched[o.value]);Fn(oa,Ee(()=>o.value+1)),Fn(Xm,a),Fn(ti,r);const c=ce();return Es(()=>[c.value,a.value,t.name],([l,u,d],[h,g,v])=>{u&&(u.instances[d]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!wn(u,g)||!h)&&(u.enterCallbacks[d]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return ua(n.default,{Component:h,route:l});const g=d.props[u],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,M=_c(h,q({},v,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return ua(n.default,{Component:M,route:l})||M}}});function ua(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const r_=s_;function i_(t){const e=Wm(t.routes,t),n=t.parseQuery||Jm,s=t.stringifyQuery||ia,r=t.history,i=Pn(),o=Pn(),a=Pn(),c=iu(Tt);let l=Tt;rn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Pr.bind(null,b=>""+b),d=Pr.bind(null,mm),h=Pr.bind(null,ts);function g(b,N){let R,L;return wl(b)?(R=e.getRecordMatcher(b),L=N):L=b,e.addRoute(L,R)}function v(b){const N=e.getRecordMatcher(b);N&&e.removeRoute(N)}function E(){return e.getRoutes().map(b=>b.record)}function M(b){return!!e.getRecordMatcher(b)}function k(b,N){if(N=q({},N||c.value),typeof b=="string"){const m=kr(n,b,N.path),y=e.resolve({path:m.path},N),w=r.createHref(m.fullPath);return q(m,y,{params:h(y.params),hash:ts(m.hash),redirectedFrom:void 0,href:w})}let R;if(b.path!=null)R=q({},b,{path:kr(n,b.path,N.path).path});else{const m=q({},b.params);for(const y in m)m[y]==null&&delete m[y];R=q({},b,{params:d(m)}),N.params=d(N.params)}const L=e.resolve(R,N),Q=b.hash||"";L.params=u(h(L.params));const f=vm(s,q({},b,{hash:hm(Q),path:L.path})),p=r.createHref(f);return q({fullPath:f,hash:Q,query:s===ia?Ym(b.query):b.query||{}},L,{redirectedFrom:void 0,href:p})}function C(b){return typeof b=="string"?kr(n,b,c.value.path):q({},b)}function O(b,N){if(l!==b)return En(8,{from:N,to:b})}function x(b){return K(b)}function F(b){return x(q(C(b),{replace:!0}))}function D(b){const N=b.matched[b.matched.length-1];if(N&&N.redirect){const{redirect:R}=N;let L=typeof R=="function"?R(b):R;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=C(L):{path:L},L.params={}),q({query:b.query,hash:b.hash,params:L.path!=null?{}:b.params},L)}}function K(b,N){const R=l=k(b),L=c.value,Q=b.state,f=b.force,p=b.replace===!0,m=D(R);if(m)return K(q(C(m),{state:typeof m=="object"?q({},Q,m.state):Q,force:f,replace:p}),N||R);const y=R;y.redirectedFrom=N;let w;return!f&&bm(s,L,R)&&(w=En(16,{to:y,from:L}),Ke(L,L,!0,!1)),(w?Promise.resolve(w):We(y,L)).catch(_=>at(_)?at(_,2)?_:It(_):G(_,y,L)).then(_=>{if(_){if(at(_,2))return K(q({replace:p},C(_.to),{state:typeof _.to=="object"?q({},Q,_.to.state):Q,force:f}),N||y)}else _=Ht(y,L,!0,p,Q);return Et(y,L,_),_})}function Se(b,N){const R=O(b,N);return R?Promise.reject(R):Promise.resolve()}function he(b){const N=en.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(b):b()}function We(b,N){let R;const[L,Q,f]=o_(b,N);R=Or(L.reverse(),"beforeRouteLeave",b,N);for(const m of L)m.leaveGuards.forEach(y=>{R.push(Rt(y,b,N))});const p=Se.bind(null,b,N);return R.push(p),De(R).then(()=>{R=[];for(const m of i.list())R.push(Rt(m,b,N));return R.push(p),De(R)}).then(()=>{R=Or(Q,"beforeRouteUpdate",b,N);for(const m of Q)m.updateGuards.forEach(y=>{R.push(Rt(y,b,N))});return R.push(p),De(R)}).then(()=>{R=[];for(const m of f)if(m.beforeEnter)if(je(m.beforeEnter))for(const y of m.beforeEnter)R.push(Rt(y,b,N));else R.push(Rt(m.beforeEnter,b,N));return R.push(p),De(R)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),R=Or(f,"beforeRouteEnter",b,N,he),R.push(p),De(R))).then(()=>{R=[];for(const m of o.list())R.push(Rt(m,b,N));return R.push(p),De(R)}).catch(m=>at(m,8)?m:Promise.reject(m))}function Et(b,N,R){a.list().forEach(L=>he(()=>L(b,N,R)))}function Ht(b,N,R,L,Q){const f=O(b,N);if(f)return f;const p=N===Tt,m=rn?history.state:{};R&&(L||p?r.replace(b.fullPath,q({scroll:p&&m&&m.scroll},Q)):r.push(b.fullPath,Q)),c.value=b,Ke(b,N,R,p),It()}let ze;function Tn(){ze||(ze=r.listen((b,N,R)=>{if(!ps.listening)return;const L=k(b),Q=D(L);if(Q){K(q(Q,{replace:!0,force:!0}),L).catch(Bn);return}l=L;const f=c.value;rn&&Rm(Yo(f.fullPath,R.delta),ur()),We(L,f).catch(p=>at(p,12)?p:at(p,2)?(K(q(C(p.to),{force:!0}),L).then(m=>{at(m,20)&&!R.delta&&R.type===ns.pop&&r.go(-1,!1)}).catch(Bn),Promise.reject()):(R.delta&&r.go(-R.delta,!1),G(p,L,f))).then(p=>{p=p||Ht(L,f,!1),p&&(R.delta&&!at(p,8)?r.go(-R.delta,!1):R.type===ns.pop&&at(p,20)&&r.go(-1,!1)),Et(L,f,p)}).catch(Bn)}))}let Zt=Pn(),ue=Pn(),Z;function G(b,N,R){It(b);const L=ue.list();return L.length?L.forEach(Q=>Q(b,N,R)):console.error(b),Promise.reject(b)}function it(){return Z&&c.value!==Tt?Promise.resolve():new Promise((b,N)=>{Zt.add([b,N])})}function It(b){return Z||(Z=!b,Tn(),Zt.list().forEach(([N,R])=>b?R(b):N()),Zt.reset()),b}function Ke(b,N,R,L){const{scrollBehavior:Q}=t;if(!rn||!Q)return Promise.resolve();const f=!R&&Pm(Yo(b.fullPath,0))||(L||!R)&&history.state&&history.state.scroll||null;return hi().then(()=>Q(b,N,f)).then(p=>p&&Am(p)).catch(p=>G(p,b,N))}const Te=b=>r.go(b);let Qt;const en=new Set,ps={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:M,getRoutes:E,resolve:k,options:t,push:x,replace:F,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:it,install(b){const N=this;b.component("RouterLink",e_),b.component("RouterView",r_),b.config.globalProperties.$router=N,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Pe(c)}),rn&&!Qt&&c.value===Tt&&(Qt=!0,x(r.location).catch(Q=>{}));const R={};for(const Q in Tt)Object.defineProperty(R,Q,{get:()=>c.value[Q],enumerable:!0});b.provide(fr,N),b.provide(Ni,Ma(R)),b.provide(ti,c);const L=b.unmount;en.add(b),b.unmount=function(){en.delete(b),en.size<1&&(l=Tt,ze&&ze(),ze=null,c.value=Tt,Qt=!1,Z=!1),L()}}};function De(b){return b.reduce((N,R)=>N.then(()=>he(R)),Promise.resolve())}return ps}function o_(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>wn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>wn(l,c))||r.push(c))}return[n,s,r]}function a_(){return Ve(fr)}function ty(t){return Ve(Ni)}function c_(t,e){const n=s=>{t.value&&!t.value.contains(s.target)&&e()};nr(()=>document.addEventListener("mousedown",n)),mi(()=>document.removeEventListener("mousedown",n))}const l_={key:0,class:"loading-overlay text-pblue-500"},u_={class:"train-track"},f_={key:0,class:"fallback-train"},d_={class:"p-3"},h_={key:0},p_={key:1},g_={class:"p-3 md:p-3"},m_={key:0},__={key:1},y_={class:"p-3"},v_={key:0},b_={key:1},w_={class:"px-4 text-rice-500 text-shadow-3d"},E_={key:0,class:"p-3"},I_={key:0,class:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20 text-gray-800"},S_={class:"px-4 py-2"},T_={__name:"App",setup(t){const{isAuthenticated:e,isAdmin:n,isTeacher:s,isStudent:r,isVisitor:i,logout:o,checkAuth:a}=Oi(),c=a_(),l=JSON.parse(localStorage.getItem("user_data"));console.log(l);const u=ce(!0),d=ce(!1),h=ce(!1),g=ce(!0),v=ce(0),E=ce(!1),M=ce(null);c_(M,()=>{E.value=!1});const k=()=>{console.log("Train image failed to load"),d.value=!0},C=()=>{console.log("Train image loaded successfully"),d.value=!1},O=F=>{const D=F.target.scrollTop===void 0?window.scrollY:F.target.scrollTop;D<100||h.value?g.value=!0:D>v.value?g.value=!1:g.value=!0,v.value=D<0?0:D},x=()=>{o(),h.value=!1,E.value=!1,c.push("/")};return Fn("handleAppScroll",O),nr(()=>{a(),window.addEventListener("scroll",O),setTimeout(()=>{u.value=!1},1e3)}),mi(()=>{window.removeEventListener("scroll",O)}),(F,D)=>{const K=Lr("router-link"),Se=Lr("router-view");return le(),pe(xe,null,[u.value&&F.$route.path!=="/"&&F.$route.path!=="/about"?(le(),pe("div",l_,[B("div",u_,[B("img",{src:Yf,class:"loader",alt:"Loading...",onError:k,onLoad:C},null,32),d.value?(le(),pe("div",f_,"🚂")):sn("",!0)]),D[8]||(D[8]=B("p",null,"載入中...",-1))])):sn("",!0),B("nav",{class:be(["fixed top-0 left-0 z-50 w-full p-2 text-rice-500 md:text-4xl flex flex-row justify-between items-center transition-transform duration-300 ease-in-out",[F.$route.path!=="/"?"bg-header":"",g.value||h.value?"translate-y-0":"-translate-y-full",{"pointer-events-none":!g.value&&!h.value}]])},[oe(K,{to:"/",onClick:D[0]||(D[0]=he=>h.value=!1),class:"flex flex-row items-center gap-2"},{default:Qe(()=>[B("img",{src:Xf,alt:"School Logo",class:be([{hidden:F.$route.path==="/"},"relative z-20 inset-0 w-1/11 object-center md:w-1/20"])},null,2),B("div",{class:be([{hidden:F.$route.path==="/"},"relative z-20 my-auto md:text-3xl text-2xl"])}," 彰化市平和國民小學 ",2)]),_:1}),F.$route.path!=="/"?(le(),pe("button",{key:0,onClick:D[1]||(D[1]=he=>h.value=!h.value),class:"md:hidden z-20"},[...D[9]||(D[9]=[B("i",{class:"fa-solid fa-bars"},null,-1)])])):sn("",!0),F.$route.path!=="/"?(le(),pe("div",{key:1,class:be([["fixed top-0 left-0 w-full flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out md:relative md:h-[4rem] md:w-auto md:bg-transparent md:flex-row md:gap-3 text-xl md:text-2xl md:whitespace-nowrap",h.value?"h-screen":"h-0",h.value?"translate-x-0":"-translate-x-full md:translate-x-0",h.value?"bg-[url(@/assets/images/Mobile/mobile_Bcakground_2.png)] bg-cover bg-center overflow-hidden":""],"md:text-shadow-none"])},[D[14]||(D[14]=B("div",{class:"absolute z-[-10] inset-0 bg-black/40 md:hidden"},null,-1)),oe(K,{to:"/",class:be(["px-8 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":F.$route.path==="/"}]),onClick:D[2]||(D[2]=he=>h.value=!1)},{default:Qe(()=>[...D[10]||(D[10]=[B("div",{class:"p-3"},"首頁",-1)])]),_:1},8,["class"]),oe(K,{to:"/about",class:be(["px-4 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":F.$route.path==="/about"}]),onClick:D[3]||(D[3]=he=>h.value=!1)},{default:Qe(()=>[B("div",d_,[F.$route.path!=="/about"?(le(),pe("span",h_,"校園探索")):(le(),pe("span",p_,"EXPLORATION"))])]),_:1},8,["class"]),oe(K,{to:"/actions",class:be(["px-4 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":F.$route.path==="/actions"}]),onClick:D[4]||(D[4]=he=>h.value=!1)},{default:Qe(()=>[B("div",g_,[F.$route.path!=="/actions"?(le(),pe("span",m_,"SDGs行動")):(le(),pe("span",__,"SDGs ACTION"))])]),_:1},8,["class"]),oe(K,{to:"/sdgs",class:be(["px-4 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":F.$route.path==="/sdgs"||F.$route.path.includes("/story")}]),onClick:D[5]||(D[5]=he=>h.value=!1)},{default:Qe(()=>[B("div",y_,[F.$route.path!=="/sdgs"&&!F.$route.path.includes("/story")?(le(),pe("span",v_,"SDGs成果")):(le(),pe("span",b_,"SDGs RESULT"))])]),_:1},8,["class"]),B("div",w_,[Pe(e)?(le(),pe("div",{key:1,class:"relative",ref_key:"profileMenu",ref:M},[B("button",{onClick:D[7]||(D[7]=he=>E.value=!E.value),class:"min-w-10"},[...D[12]||(D[12]=[B("img",{src:Zf,alt:"User Profile",class:"w-10 h-10 rounded-full object-cover"},null,-1)])]),E.value?(le(),pe("div",I_,[B("div",S_,[B("p",{class:be(["text-sm font-medium",{"text-red-500":Pe(n),"text-blue-500":Pe(s),"text-green-500":Pe(r),"text-gray-500":Pe(i)}])},va(Pe(l)?.full_name),3)]),D[13]||(D[13]=B("div",{class:"border-t border-gray-200"},null,-1)),B("button",{onClick:x,class:"w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"}," 登出 ")])):sn("",!0)],512)):(le(),pe("div",E_,[oe(K,{to:"/login",onClick:D[6]||(D[6]=he=>h.value=!1),class:"hover:text-orange-300 transition-colors flex items-center gap-2"},{default:Qe(()=>[...D[11]||(D[11]=[B("i",{class:"fas fa-user-plus"},null,-1),pc(" 登入 ",-1)])]),_:1})]))])],2)):sn("",!0)],2),oe(Se)],64)}}},C_="modulepreload",A_=function(t){return"/Pinghe/"+t},fa={},Xe=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=c(n.map(l=>{if(l=A_(l),l in fa)return;fa[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":C_,u||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((g,v)=>{h.addEventListener("load",g),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},R_="/Pinghe/assets/Title-DP11h-Zm.png",P_="/Pinghe/assets/Train_Smoke_W-CTtTvEtc.gif",k_="/Pinghe/assets/Train_Smoke_M-CsE4hGUV.gif",O_=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},x_={class:"relative w-screen h-screen flex flex-col gap-12 lg:gap-0 max-[380px]:gap-1 justify-start items-center lg:flex-row text-center bg-[url('@/assets/images/Mobile/Mobile_MainPage_Background2.png')] bg-cover bg-center overflow-hidden lg:bg-[url('@/assets/images/MainPage_Pic.webp'),_url('@/assets/images/MainPage_Background_T.png')] lg:[background-repeat:no-repeat,no-repeat] lg:[background-position:right,center] lg:[background-size:contain,cover]"},N_={class:"order-1 lg:order-2 z-10 lg:w-1/2 flex justify-center items-center pt-25 lg:pt-0 lg:h-full lg:items-start lg:translate-y-18"},D_={class:"order-2 lg:order-1 z-20 lg:w-1/2 flex justify-center items-center lg:h-full lg:items-start lg:translate-66 lg:translate-x-78"},M_={class:"relative group self-stretch"},L_={class:"relative group self-stretch"},U_={class:"relative group self-stretch"},F_={class:"w-full h-full absolute top-0 left-0 pointer-events-none overflow-hidden"},$_=["src"],V_=["src"],H_={key:0,class:"fixed inset-0 bg-black/80 flex items-center justify-center z-50"},B_={__name:"Home",setup(t){const{selectRole:e}=Oi(),n=ce(!1),s=ce(!1),r=ce(!1),i=ce(!1),o=ce(!1);ce(""),ce({username:"",password:""}),ce({username:"",password:""}),ce(!1),ce("");const a=localStorage.getItem("user_data");console.log(JSON.parse(a)),nr(()=>{setTimeout(()=>{n.value=!0},100)});const c=()=>{s.value=!1,r.value=!0},l=()=>{s.value=!1,i.value=!0},u=()=>{s.value=!1,o.value=!0},d=()=>{e("visitor"),s.value=!1};return(h,g)=>{const v=Lr("router-link");return le(),pe("main",x_,[B("section",N_,[B("div",{class:be([["transition-all duration-3000 ease-out",n.value?"opacity-100":"opacity-0"],"w-full flex justify-center lg:justify-start"])},[...g[0]||(g[0]=[B("picture",null,[B("img",{src:R_,class:"pointer-events-none select-none max-w-77 lg:max-w-150",alt:"Pinghe_Text_H"})],-1)])],2)]),B("section",D_,[B("div",{class:be([["transition-all duration-3000 ease-out",n.value?"opacity-100":"opacity-0"],"inline-flex flex-col gap-4 lg:gap-10 items-start justify-center text-xl lg:text-4xl text-black"])},[B("div",M_,[oe(v,{to:"/about",class:"relative block ml-22 mr-50 lg:ml-10 lg:mr-50 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"},{default:Qe(()=>[...g[1]||(g[1]=[B("span",{class:"block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"},"校園探索",-1),B("span",{class:"absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"},"Explore →",-1)])]),_:1})]),B("div",L_,[oe(v,{to:"/actions",class:"relative block ml-36 mr-36 lg:ml-30 lg:mr-30 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"},{default:Qe(()=>[...g[2]||(g[2]=[B("span",{class:"block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"},"SDGs行動",-1),B("span",{class:"absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"},"Actions →",-1)])]),_:1})]),B("div",U_,[oe(v,{to:"/sdgs",class:"relative block ml-50 mr-22 lg:ml-60 lg:mr-0 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"},{default:Qe(()=>[...g[3]||(g[3]=[B("span",{class:"block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"},"SDGs成果",-1),B("span",{class:"absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"},"Results →",-1)])]),_:1})])],2)]),B("div",F_,[B("img",{src:Pe(P_),class:"hidden lg:block absolute top-0 left-0 w-full h-full object-cover object-center select-none animate-train-enter",alt:"Pinghe_Train_Smoke"},null,8,$_),B("img",{src:Pe(k_),class:"block lg:hidden absolute top-0 left-0 w-full h-full object-cover object-center select-none animate-train-enter",alt:"Pinghe_Train_Smoke"},null,8,V_)]),s.value?(le(),pe("div",H_,[B("div",{class:"bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"},[g[8]||(g[8]=B("h2",{class:"text-2xl font-bold text-center mb-6 text-gray-800"}," 請選擇您的身分 ",-1)),B("div",{class:"space-y-4"},[B("button",{onClick:c,class:"w-full p-4 border-2 border-red-200 rounded-lg hover:border-red-400 hover:bg-red-50 transition-colors group"},[...g[4]||(g[4]=[ys('<div class="flex items-center gap-4" data-v-0a9e91cc><div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white group-hover:bg-red-600" data-v-0a9e91cc><i class="fas fa-user-shield text-xl" data-v-0a9e91cc></i></div><div class="text-left" data-v-0a9e91cc><h3 class="text-lg font-semibold text-gray-800" data-v-0a9e91cc>管理員</h3><p class="text-sm text-gray-600" data-v-0a9e91cc>系統管理員權限</p></div></div>',1)])]),B("button",{onClick:l,class:"w-full p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors group"},[...g[5]||(g[5]=[ys('<div class="flex items-center gap-4" data-v-0a9e91cc><div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white group-hover:bg-blue-600" data-v-0a9e91cc><i class="fas fa-user-tie text-xl" data-v-0a9e91cc></i></div><div class="text-left" data-v-0a9e91cc><h3 class="text-lg font-semibold text-gray-800" data-v-0a9e91cc>老師</h3><p class="text-sm text-gray-600" data-v-0a9e91cc>具有編輯和管理權限</p></div></div>',1)])]),B("button",{onClick:u,class:"w-full p-4 border-2 border-green-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors group"},[...g[6]||(g[6]=[ys('<div class="flex items-center gap-4" data-v-0a9e91cc><div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:bg-green-600" data-v-0a9e91cc><i class="fas fa-user-graduate text-xl" data-v-0a9e91cc></i></div><div class="text-left" data-v-0a9e91cc><h3 class="text-lg font-semibold text-gray-800" data-v-0a9e91cc>學生</h3><p class="text-sm text-gray-600" data-v-0a9e91cc>瀏覽內容並參與互動</p></div></div>',1)])]),B("button",{onClick:d,class:"w-full p-4 border-2 border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors group"},[...g[7]||(g[7]=[ys('<div class="flex items-center gap-4" data-v-0a9e91cc><div class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white group-hover:bg-gray-600" data-v-0a9e91cc><i class="fas fa-user text-xl" data-v-0a9e91cc></i></div><div class="text-left" data-v-0a9e91cc><h3 class="text-lg font-semibold text-gray-800" data-v-0a9e91cc>訪客</h3><p class="text-sm text-gray-600" data-v-0a9e91cc>瀏覽所有公開內容</p></div></div>',1)])])])])])):sn("",!0)])}}},j_=O_(B_,[["__scopeId","data-v-0a9e91cc"]]),W_=[{path:"/",name:"Home",component:j_},{path:"/login",name:"Login",component:()=>Xe(()=>import("./Login-C_7K9hFI.js"),[])},{path:"/register",name:"Register",component:()=>Xe(()=>import("./Register-DfiJ9FuK.js"),[])},{path:"/about",name:"About",component:()=>Xe(()=>import("./About-fHpccRdM.js"),__vite__mapDeps([0,1,2]))},{path:"/actions",name:"Actions",component:()=>Xe(()=>import("./Actions-DhYtcDjF.js"),__vite__mapDeps([3,4,5,6,7,8,1,2]))},{path:"/actions/new",name:"actions-new",component:()=>Xe(()=>import("./ActionNew-C0C12PrC.js"),__vite__mapDeps([9,7,8,10,6,11])),meta:{requiresTeacher:!0}},{path:"/actions/:id",name:"action-detail",component:()=>Xe(()=>import("./ActionDetail-CYXhi02Y.js"),__vite__mapDeps([12,4,7,8,13])),props:!0},{path:"/sdgs",name:"SDGs",component:()=>Xe(()=>import("./SDGs-Ch3lMB81.js"),__vite__mapDeps([14,15,7,8,1,2]))},{path:"/story",name:"Story",component:()=>Xe(()=>import("./Story-DYQCatm0.js"),__vite__mapDeps([16,17,6,7,8,15,5,1,2,18]))},{path:"/story/new",name:"story-new",component:()=>Xe(()=>import("./StoryNew-BIR7P-VV.js"),__vite__mapDeps([19,7,8,10,6,20])),meta:{requiresTeacher:!0}},{path:"/story/:id",name:"story-detail",component:()=>Xe(()=>import("./StoryDetail-CR-x9XZ4.js"),__vite__mapDeps([21,15,17,6,7,8,10,22])),props:!0}],Tl=i_({history:Dm(),routes:W_});Tl.beforeEach((t,e,n)=>{const{isAuthenticated:s,isTeacher:r,isAdmin:i,checkAuth:o}=Oi();if(o(),t.meta.requiresAdmin&&!i.value){s.value?(alert("此功能僅限管理員使用"),n(!1)):n({name:"Home"});return}if(t.meta.requiresTeacher&&!r.value){s.value?(alert("此功能僅限老師使用"),n(!1)):n({name:"Home"});return}if(t.meta.requiresAuth&&!s.value){n({name:"Home"});return}n()});const Cl=Gf(T_);Cl.use(Tl);Cl.mount("#app");export{c_ as A,qa as B,iu as C,Es as D,ty as E,xe as F,nr as G,Iu as H,Su as I,mi as J,_c as K,hi as L,Fn as M,Eu as N,Rr as O,Z_ as P,Wa as Q,Y_ as R,ru as S,K_ as T,gf as U,J_ as V,Yf as _,pe as a,B as b,Ee as c,sn as d,G_ as e,oe as f,Qe as g,pc as h,Lr as i,a_ as j,Q_ as k,q_ as l,Pe as m,be as n,le as o,Ys as p,z_ as q,ce as r,uf as s,va as t,Oi as u,X_ as v,ey as w,Hr as x,Ve as y,O_ as z};
