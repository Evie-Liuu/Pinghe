const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Actions-D7Z091X9.js","assets/HeaderFilter-CYtPPhyP.js","assets/SDGs_goal-BU-5yG0n.js","assets/CJKSub-BHUOfDQU.js","assets/CJKSub-DT0M_kds.css","assets/TrainTrack-C1zD5JTZ.js","assets/TrainTrack-CM12UC_r.css","assets/SDGs-CfaZp1WA.js","assets/平和國小_mobile_Example-CdOxhO6_.js","assets/Story-JnreIc7J.js","assets/useDateFormat-BFMwo5FP.js","assets/Story-BkvKDO3T.css","assets/StoryNew-BIQpAMWP.js","assets/index-B59Gehoz.js","assets/StoryNew-ITTc1tJ7.css","assets/StoryDetail-Bmr1UY4h.js","assets/StoryDetail-wwtSax38.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oi(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const se={},ln=[],tt=()=>{},ha=()=>!1,Ys=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ai=t=>t.startsWith("onUpdate:"),be=Object.assign,ci=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Al=Object.prototype.hasOwnProperty,Q=(t,e)=>Al.call(t,e),V=Array.isArray,un=t=>as(t)==="[object Map]",Tn=t=>as(t)==="[object Set]",Hi=t=>as(t)==="[object Date]",K=t=>typeof t=="function",ue=t=>typeof t=="string",je=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",pa=t=>(oe(t)||K(t))&&K(t.then)&&K(t.catch),ga=Object.prototype.toString,as=t=>ga.call(t),Rl=t=>as(t).slice(8,-1),ma=t=>as(t)==="[object Object]",li=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Un=oi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xs=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Pl=/-\w/g,$e=Xs(t=>t.replace(Pl,e=>e.slice(1).toUpperCase())),xl=/\B([A-Z])/g,Qt=Xs(t=>t.replace(xl,"-$1").toLowerCase()),Qs=Xs(t=>t.charAt(0).toUpperCase()+t.slice(1)),mr=Xs(t=>t?`on${Qs(t)}`:""),Mt=(t,e)=>!Object.is(t,e),Ts=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_a=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ds=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vi;const Zs=()=>Vi||(Vi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function er(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ue(s)?Dl(s):er(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ue(t)||oe(t))return t}const kl=/;(?![^(]*\))/g,Ol=/:([^]+)/,Nl=/\/\*[^]*?\*\//g;function Dl(t){const e={};return t.replace(Nl,"").split(kl).forEach(n=>{if(n){const s=n.split(Ol);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ee(t){let e="";if(ue(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=Ee(t[n]);s&&(e+=s+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ey(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ue(e)&&(t.class=Ee(e)),n&&(t.style=er(n)),t}const Ml="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ll=oi(Ml);function ya(t){return!!t||t===""}function Ul(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=cs(t[s],e[s]);return n}function cs(t,e){if(t===e)return!0;let n=Hi(t),s=Hi(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=je(t),s=je(e),n||s)return t===e;if(n=V(t),s=V(e),n||s)return n&&s?Ul(t,e):!1;if(n=oe(t),s=oe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!cs(t[o],e[o]))return!1}}return String(t)===String(e)}function ui(t,e){return t.findIndex(n=>cs(n,e))}const va=t=>!!(t&&t.__v_isRef===!0),Gt=t=>ue(t)?t:t==null?"":V(t)||oe(t)&&(t.toString===ga||!K(t.toString))?va(t)?Gt(t.value):JSON.stringify(t,ba,2):String(t),ba=(t,e)=>va(e)?ba(t,e.value):un(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[_r(s,i)+" =>"]=r,n),{})}:Tn(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_r(n))}:je(e)?_r(e):oe(e)&&!V(e)&&!ma(e)?String(e):e,_r=(t,e="")=>{var n;return je(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class $l{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xe,!e&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xe;try{return xe=this,e()}finally{xe=n}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){this._on>0&&--this._on===0&&(xe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Fl(){return xe}let ie;const yr=new WeakSet;class wa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&xe.active&&xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yr.has(this)&&(yr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ia(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bi(this),Sa(this);const e=ie,n=Be;ie=this,Be=!0;try{return this.fn()}finally{Ta(this),ie=e,Be=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hi(e);this.deps=this.depsTail=void 0,Bi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Lr(this)&&this.run()}get dirty(){return Lr(this)}}let Ea=0,$n,Fn;function Ia(t,e=!1){if(t.flags|=8,e){t.next=Fn,Fn=t;return}t.next=$n,$n=t}function fi(){Ea++}function di(){if(--Ea>0)return;if(Fn){let e=Fn;for(Fn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$n;){let e=$n;for($n=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Sa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ta(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),hi(s),Hl(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Lr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ca(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ca(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Gn)||(t.globalVersion=Gn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Lr(t))))return;t.flags|=2;const e=t.dep,n=ie,s=Be;ie=t,Be=!0;try{Sa(t);const r=t.fn(t._value);(e.version===0||Mt(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ie=n,Be=s,Ta(t),t.flags&=-3}}function hi(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)hi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Be=!0;const Aa=[];function mt(){Aa.push(Be),Be=!1}function _t(){const t=Aa.pop();Be=t===void 0?!0:t}function Bi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ie;ie=void 0;try{e()}finally{ie=n}}}let Gn=0;class Vl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ie||!Be||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink=new Vl(ie,this),ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,Ra(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=s)}return n}trigger(e){this.version++,Gn++,this.notify(e)}notify(e){fi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{di()}}}function Ra(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ra(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ur=new WeakMap,Jt=Symbol(""),$r=Symbol(""),Jn=Symbol("");function _e(t,e,n){if(Be&&ie){let s=Ur.get(t);s||Ur.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new tr),r.map=s,r.key=n),r.track()}}function ut(t,e,n,s,r,i){const o=Ur.get(t);if(!o){Gn++;return}const a=c=>{c&&c.trigger()};if(fi(),e==="clear")o.forEach(a);else{const c=V(t),l=c&&li(n);if(c&&n==="length"){const u=Number(s);o.forEach((f,h)=>{(h==="length"||h===Jn||!je(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Jn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Jt)),un(t)&&a(o.get($r)));break;case"delete":c||(a(o.get(Jt)),un(t)&&a(o.get($r)));break;case"set":un(t)&&a(o.get(Jt));break}}di()}function sn(t){const e=X(t);return e===t?e:(_e(e,"iterate",Jn),Ue(t)?e:e.map(ge))}function nr(t){return _e(t=X(t),"iterate",Jn),t}const Bl={__proto__:null,[Symbol.iterator](){return vr(this,Symbol.iterator,ge)},concat(...t){return sn(this).concat(...t.map(e=>V(e)?sn(e):e))},entries(){return vr(this,"entries",t=>(t[1]=ge(t[1]),t))},every(t,e){return at(this,"every",t,e,void 0,arguments)},filter(t,e){return at(this,"filter",t,e,n=>n.map(ge),arguments)},find(t,e){return at(this,"find",t,e,ge,arguments)},findIndex(t,e){return at(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return at(this,"findLast",t,e,ge,arguments)},findLastIndex(t,e){return at(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return at(this,"forEach",t,e,void 0,arguments)},includes(...t){return br(this,"includes",t)},indexOf(...t){return br(this,"indexOf",t)},join(t){return sn(this).join(t)},lastIndexOf(...t){return br(this,"lastIndexOf",t)},map(t,e){return at(this,"map",t,e,void 0,arguments)},pop(){return Pn(this,"pop")},push(...t){return Pn(this,"push",t)},reduce(t,...e){return ji(this,"reduce",t,e)},reduceRight(t,...e){return ji(this,"reduceRight",t,e)},shift(){return Pn(this,"shift")},some(t,e){return at(this,"some",t,e,void 0,arguments)},splice(...t){return Pn(this,"splice",t)},toReversed(){return sn(this).toReversed()},toSorted(t){return sn(this).toSorted(t)},toSpliced(...t){return sn(this).toSpliced(...t)},unshift(...t){return Pn(this,"unshift",t)},values(){return vr(this,"values",ge)}};function vr(t,e,n){const s=nr(t),r=s[e]();return s!==t&&!Ue(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const jl=Array.prototype;function at(t,e,n,s,r,i){const o=nr(t),a=o!==t&&!Ue(t),c=o[e];if(c!==jl[e]){const f=c.apply(t,i);return a?ge(f):f}let l=n;o!==t&&(a?l=function(f,h){return n.call(this,ge(f),h,t)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,t)}));const u=c.call(o,l,s);return a&&r?r(u):u}function ji(t,e,n,s){const r=nr(t);let i=n;return r!==t&&(Ue(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,ge(a),c,t)}),r[e](i,...s)}function br(t,e,n){const s=X(t);_e(s,"iterate",Jn);const r=s[e](...n);return(r===-1||r===!1)&&mi(n[0])?(n[0]=X(n[0]),s[e](...n)):r}function Pn(t,e,n=[]){mt(),fi();const s=X(t)[e].apply(t,n);return di(),_t(),s}const Wl=oi("__proto__,__v_isRef,__isVue"),Pa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(je));function Kl(t){je(t)||(t=String(t));const e=X(this);return _e(e,"has",t),e.hasOwnProperty(t)}class xa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?tu:Da:i?Na:Oa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=V(e);if(!r){let c;if(o&&(c=Bl[n]))return c;if(n==="hasOwnProperty")return Kl}const a=Reflect.get(e,n,ve(e)?e:s);return(je(n)?Pa.has(n):Wl(n))||(r||_e(e,"get",n),i)?a:ve(a)?o&&li(n)?a:a.value:oe(a)?r?La(a):sr(a):a}}class ka extends xa{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=$t(i);if(!Ue(s)&&!$t(s)&&(i=X(i),s=X(s)),!V(e)&&ve(i)&&!ve(s))return c||(i.value=s),!0}const o=V(e)&&li(n)?Number(n)<e.length:Q(e,n),a=Reflect.set(e,n,s,ve(e)?e:r);return e===X(r)&&(o?Mt(s,i)&&ut(e,"set",n,s):ut(e,"add",n,s)),a}deleteProperty(e,n){const s=Q(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&ut(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!je(n)||!Pa.has(n))&&_e(e,"has",n),s}ownKeys(e){return _e(e,"iterate",V(e)?"length":Jt),Reflect.ownKeys(e)}}class zl extends xa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ql=new ka,Gl=new zl,Jl=new ka(!0);const Fr=t=>t,vs=t=>Reflect.getPrototypeOf(t);function Yl(t,e,n){return function(...s){const r=this.__v_raw,i=X(r),o=un(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Fr:e?Ms:ge;return!e&&_e(i,"iterate",c?$r:Jt),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function bs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xl(t,e){const n={get(r){const i=this.__v_raw,o=X(i),a=X(r);t||(Mt(r,a)&&_e(o,"get",r),_e(o,"get",a));const{has:c}=vs(o),l=e?Fr:t?Ms:ge;if(c.call(o,r))return l(i.get(r));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&_e(X(r),"iterate",Jt),r.size},has(r){const i=this.__v_raw,o=X(i),a=X(r);return t||(Mt(r,a)&&_e(o,"has",r),_e(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=X(a),l=e?Fr:t?Ms:ge;return!t&&_e(c,"iterate",Jt),a.forEach((u,f)=>r.call(i,l(u),l(f),o))}};return be(n,t?{add:bs("add"),set:bs("set"),delete:bs("delete"),clear:bs("clear")}:{add(r){!e&&!Ue(r)&&!$t(r)&&(r=X(r));const i=X(this);return vs(i).has.call(i,r)||(i.add(r),ut(i,"add",r,r)),this},set(r,i){!e&&!Ue(i)&&!$t(i)&&(i=X(i));const o=X(this),{has:a,get:c}=vs(o);let l=a.call(o,r);l||(r=X(r),l=a.call(o,r));const u=c.call(o,r);return o.set(r,i),l?Mt(i,u)&&ut(o,"set",r,i):ut(o,"add",r,i),this},delete(r){const i=X(this),{has:o,get:a}=vs(i);let c=o.call(i,r);c||(r=X(r),c=o.call(i,r)),a&&a.call(i,r);const l=i.delete(r);return c&&ut(i,"delete",r,void 0),l},clear(){const r=X(this),i=r.size!==0,o=r.clear();return i&&ut(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Yl(r,t,e)}),n}function pi(t,e){const n=Xl(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const Ql={get:pi(!1,!1)},Zl={get:pi(!1,!0)},eu={get:pi(!0,!1)};const Oa=new WeakMap,Na=new WeakMap,Da=new WeakMap,tu=new WeakMap;function nu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function su(t){return t.__v_skip||!Object.isExtensible(t)?0:nu(Rl(t))}function sr(t){return $t(t)?t:gi(t,!1,ql,Ql,Oa)}function Ma(t){return gi(t,!1,Jl,Zl,Na)}function La(t){return gi(t,!0,Gl,eu,Da)}function gi(t,e,n,s,r){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=su(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function fn(t){return $t(t)?fn(t.__v_raw):!!(t&&t.__v_isReactive)}function $t(t){return!!(t&&t.__v_isReadonly)}function Ue(t){return!!(t&&t.__v_isShallow)}function mi(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function ru(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&_a(t,"__v_skip",!0),t}const ge=t=>oe(t)?sr(t):t,Ms=t=>oe(t)?La(t):t;function ve(t){return t?t.__v_isRef===!0:!1}function fe(t){return Ua(t,!1)}function iu(t){return Ua(t,!0)}function Ua(t,e){return ve(t)?t:new ou(t,e)}class ou{constructor(e,n){this.dep=new tr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:X(e),this._value=n?e:ge(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ue(e)||$t(e);e=s?e:X(e),Mt(e,n)&&(this._rawValue=e,this._value=s?e:ge(e),this.dep.trigger())}}function ke(t){return ve(t)?t.value:t}const au={get:(t,e,n)=>e==="__v_raw"?t:ke(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ve(r)&&!ve(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function $a(t){return fn(t)?t:new Proxy(t,au)}class cu{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new tr,{get:s,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=s,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function ty(t){return new cu(t)}class lu{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new tr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return Ia(this,!0),!0}get value(){const e=this.dep.track();return Ca(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function uu(t,e,n=!1){let s,r;return K(t)?s=t:(s=t.get,r=t.set),new lu(s,r,n)}const ws={},Ls=new WeakMap;let zt;function fu(t,e=!1,n=zt){if(n){let s=Ls.get(n);s||Ls.set(n,s=[]),s.push(t)}}function du(t,e,n=se){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=D=>r?D:Ue(D)||r===!1||r===0?ft(D,1):ft(D);let u,f,h,g,b=!1,I=!1;if(ve(t)?(f=()=>t.value,b=Ue(t)):fn(t)?(f=()=>l(t),b=!0):V(t)?(I=!0,b=t.some(D=>fn(D)||Ue(D)),f=()=>t.map(D=>{if(ve(D))return D.value;if(fn(D))return l(D);if(K(D))return c?c(D,2):D()})):K(t)?e?f=c?()=>c(t,2):t:f=()=>{if(h){mt();try{h()}finally{_t()}}const D=zt;zt=u;try{return c?c(t,3,[g]):t(g)}finally{zt=D}}:f=tt,e&&r){const D=f,B=r===!0?1/0:r;f=()=>ft(D(),B)}const $=Fl(),P=()=>{u.stop(),$&&$.active&&ci($.effects,u)};if(i&&e){const D=e;e=(...B)=>{D(...B),P()}}let C=I?new Array(t.length).fill(ws):ws;const M=D=>{if(!(!(u.flags&1)||!u.dirty&&!D))if(e){const B=u.run();if(r||b||(I?B.some((U,z)=>Mt(U,C[z])):Mt(B,C))){h&&h();const U=zt;zt=u;try{const z=[B,C===ws?void 0:I&&C[0]===ws?[]:C,g];C=B,c?c(e,3,z):e(...z)}finally{zt=U}}}else u.run()};return a&&a(M),u=new wa(f),u.scheduler=o?()=>o(M,!1):M,g=D=>fu(D,!1,u),h=u.onStop=()=>{const D=Ls.get(u);if(D){if(c)c(D,4);else for(const B of D)B();Ls.delete(u)}},e?s?M(!0):C=u.run():o?o(M.bind(null,!0),!0):u.run(),P.pause=u.pause.bind(u),P.resume=u.resume.bind(u),P.stop=P,P}function ft(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ve(t))ft(t.value,e,n);else if(V(t))for(let s=0;s<t.length;s++)ft(t[s],e,n);else if(Tn(t)||un(t))t.forEach(s=>{ft(s,e,n)});else if(ma(t)){for(const s in t)ft(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ft(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ls(t,e,n,s){try{return s?t(...s):t()}catch(r){rr(r,e,n)}}function it(t,e,n,s){if(K(t)){const r=ls(t,e,n,s);return r&&pa(r)&&r.catch(i=>{rr(i,e,n)}),r}if(V(t)){const r=[];for(let i=0;i<t.length;i++)r.push(it(t[i],e,n,s));return r}}function rr(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||se;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){mt(),ls(i,null,10,[t,c,l]),_t();return}}hu(t,n,r,s,o)}function hu(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Ie=[];let Qe=-1;const dn=[];let At=null,rn=0;const Fa=Promise.resolve();let Us=null;function _i(t){const e=Us||Fa;return t?e.then(this?t.bind(this):t):e}function pu(t){let e=Qe+1,n=Ie.length;for(;e<n;){const s=e+n>>>1,r=Ie[s],i=Yn(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function yi(t){if(!(t.flags&1)){const e=Yn(t),n=Ie[Ie.length-1];!n||!(t.flags&2)&&e>=Yn(n)?Ie.push(t):Ie.splice(pu(e),0,t),t.flags|=1,Ha()}}function Ha(){Us||(Us=Fa.then(Ba))}function gu(t){V(t)?dn.push(...t):At&&t.id===-1?At.splice(rn+1,0,t):t.flags&1||(dn.push(t),t.flags|=1),Ha()}function Wi(t,e,n=Qe+1){for(;n<Ie.length;n++){const s=Ie[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ie.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Va(t){if(dn.length){const e=[...new Set(dn)].sort((n,s)=>Yn(n)-Yn(s));if(dn.length=0,At){At.push(...e);return}for(At=e,rn=0;rn<At.length;rn++){const n=At[rn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}At=null,rn=0}}const Yn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ba(t){try{for(Qe=0;Qe<Ie.length;Qe++){const e=Ie[Qe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ls(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qe<Ie.length;Qe++){const e=Ie[Qe];e&&(e.flags&=-2)}Qe=-1,Ie.length=0,Va(),Us=null,(Ie.length||dn.length)&&Ba()}}let me=null,ja=null;function $s(t){const e=me;return me=t,ja=t&&t.type.__scopeId||null,e}function Ze(t,e=me,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Vs(-1);const i=$s(e);let o;try{o=t(...r)}finally{$s(i),s._d&&Vs(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xn(t,e){if(me===null)return t;const n=lr(me),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=se]=e[r];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&ft(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function jt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(mt(),it(c,n,8,[t.el,a,t,e]),_t())}}const mu=Symbol("_vte"),_u=t=>t.__isTeleport,yu=Symbol("_leaveCb");function vi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,vi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wa(t,e){return K(t)?be({name:t.name},e,{setup:t}):t}function Ka(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Fs=new WeakMap;function Hn(t,e,n,s,r=!1){if(V(t)){t.forEach((b,I)=>Hn(b,e&&(V(e)?e[I]:e),n,s,r));return}if(hn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Hn(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?lr(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===se?a.refs={}:a.refs,f=a.setupState,h=X(f),g=f===se?ha:b=>Q(h,b);if(l!=null&&l!==c){if(Ki(e),ue(l))u[l]=null,g(l)&&(f[l]=null);else if(ve(l)){l.value=null;const b=e;b.k&&(u[b.k]=null)}}if(K(c))ls(c,a,12,[o,u]);else{const b=ue(c),I=ve(c);if(b||I){const $=()=>{if(t.f){const P=b?g(c)?f[c]:u[c]:c.value;if(r)V(P)&&ci(P,i);else if(V(P))P.includes(i)||P.push(i);else if(b)u[c]=[i],g(c)&&(f[c]=u[c]);else{const C=[i];c.value=C,t.k&&(u[t.k]=C)}}else b?(u[c]=o,g(c)&&(f[c]=o)):I&&(c.value=o,t.k&&(u[t.k]=o))};if(o){const P=()=>{$(),Fs.delete(t)};P.id=-1,Fs.set(t,P),Ne(P,n)}else Ki(t),$()}}}function Ki(t){const e=Fs.get(t);e&&(e.flags|=8,Fs.delete(t))}Zs().requestIdleCallback;Zs().cancelIdleCallback;const hn=t=>!!t.type.__asyncLoader,za=t=>t.type.__isKeepAlive;function vu(t,e){qa(t,"a",e)}function bu(t,e){qa(t,"da",e)}function qa(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ir(e,s,n),n){let r=n.parent;for(;r&&r.parent;)za(r.parent.vnode)&&wu(s,e,n,r),r=r.parent}}function wu(t,e,n,s){const r=ir(e,t,s,!0);Ga(()=>{ci(s[e],r)},n)}function ir(t,e,n=ye,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{mt();const a=us(n),c=it(e,n,t,o);return a(),_t(),c});return s?r.unshift(i):r.push(i),i}}const wt=t=>(e,n=ye)=>{(!Zn||t==="sp")&&ir(t,(...s)=>e(...s),n)},Eu=wt("bm"),or=wt("m"),Iu=wt("bu"),Su=wt("u"),bi=wt("bum"),Ga=wt("um"),Tu=wt("sp"),Cu=wt("rtg"),Au=wt("rtc");function Ru(t,e=ye){ir("ec",t,e)}const Pu="components";function Hr(t,e){return ku(Pu,t,!0,e)||t}const xu=Symbol.for("v-ndc");function ku(t,e,n=!0,s=!1){const r=me||ye;if(r){const i=r.type;{const a=bf(i,!1);if(a&&(a===e||a===$e(e)||a===Qs($e(e))))return i}const o=zi(r[t]||i[t],e)||zi(r.appContext[t],e);return!o&&s?i:o}}function zi(t,e){return t&&(t[e]||t[$e(e)]||t[Qs($e(e))])}function ny(t,e,n,s){let r;const i=n,o=V(t);if(o||ue(t)){const a=o&&fn(t);let c=!1,l=!1;a&&(c=!Ue(t),l=$t(t),t=nr(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(c?l?Ms(ge(t[u])):ge(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(oe(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];r[c]=e(t[u],u,c,i)}}else r=[];return r}function sy(t,e,n={},s,r){if(me.ce||me.parent&&hn(me.parent)&&me.parent.ce)return e!=="default"&&(n.name=e),ae(),Kr(De,null,[ce("slot",n,s)],64);let i=t[e];i&&i._c&&(i._d=!1),ae();const o=i&&Ja(i(n)),a=n.key||o&&o.key,c=Kr(De,{key:(a&&!je(a)?a:`_${e}`)+(!o&&s?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Ja(t){return t.some(e=>Qn(e)?!(e.type===yt||e.type===De&&!Ja(e.children)):!0)?t:null}const Vr=t=>t?pc(t)?lr(t):Vr(t.parent):null,Vn=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vr(t.parent),$root:t=>Vr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Xa(t),$forceUpdate:t=>t.f||(t.f=()=>{yi(t.update)}),$nextTick:t=>t.n||(t.n=_i.bind(t.proxy)),$watch:t=>Qu.bind(t)}),wr=(t,e)=>t!==se&&!t.__isScriptSetup&&Q(t,e),Ou={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(wr(s,e))return o[e]=1,s[e];if(r!==se&&Q(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,i[e];if(n!==se&&Q(n,e))return o[e]=4,n[e];Br&&(o[e]=0)}}const u=Vn[e];let f,h;if(u)return e==="$attrs"&&_e(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==se&&Q(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Q(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return wr(r,e)?(r[e]=n,!0):s!==se&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:o}},a){let c,l;return!!(n[a]||t!==se&&a[0]!=="$"&&Q(t,a)||wr(e,a)||(c=i[0])&&Q(c,a)||Q(s,a)||Q(Vn,a)||Q(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qi(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Br=!0;function Nu(t){const e=Xa(t),n=t.proxy,s=t.ctx;Br=!1,e.beforeCreate&&Gi(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:b,activated:I,deactivated:$,beforeDestroy:P,beforeUnmount:C,destroyed:M,unmounted:D,render:B,renderTracked:U,renderTriggered:z,errorCaptured:pe,serverPrefetch:R,expose:Ce,inheritAttrs:de,components:Bt,directives:ze,filters:An}=e;if(l&&Du(l,s,null),o)for(const ee in o){const G=o[ee];K(G)&&(s[ee]=G.bind(n))}if(r){const ee=r.call(n,n);oe(ee)&&(t.data=sr(ee))}if(Br=!0,i)for(const ee in i){const G=i[ee],ot=K(G)?G.bind(n,n):K(G.get)?G.get.bind(n,n):tt,It=!K(G)&&K(G.set)?G.set.bind(n):tt,qe=Se({get:ot,set:It});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Ae=>qe.value=Ae})}if(a)for(const ee in a)Ya(a[ee],s,n,ee);if(c){const ee=K(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(G=>{Bn(G,ee[G])})}u&&Gi(u,t,"c");function he(ee,G){V(G)?G.forEach(ot=>ee(ot.bind(n))):G&&ee(G.bind(n))}if(he(Eu,f),he(or,h),he(Iu,g),he(Su,b),he(vu,I),he(bu,$),he(Ru,pe),he(Au,U),he(Cu,z),he(bi,C),he(Ga,D),he(Tu,R),V(Ce))if(Ce.length){const ee=t.exposed||(t.exposed={});Ce.forEach(G=>{Object.defineProperty(ee,G,{get:()=>n[G],set:ot=>n[G]=ot,enumerable:!0})})}else t.exposed||(t.exposed={});B&&t.render===tt&&(t.render=B),de!=null&&(t.inheritAttrs=de),Bt&&(t.components=Bt),ze&&(t.directives=ze),R&&Ka(t)}function Du(t,e,n=tt){V(t)&&(t=jr(t));for(const s in t){const r=t[s];let i;oe(r)?"default"in r?i=nt(r.from||s,r.default,!0):i=nt(r.from||s):i=nt(r),ve(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Gi(t,e,n){it(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ya(t,e,n,s){let r=s.includes(".")?lc(n,s):()=>n[s];if(ue(t)){const i=e[t];K(i)&&Cs(r,i)}else if(K(t))Cs(r,t.bind(n));else if(oe(t))if(V(t))t.forEach(i=>Ya(i,e,n,s));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&Cs(r,i,t)}}function Xa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Hs(c,l,o,!0)),Hs(c,e,o)),oe(e)&&i.set(e,c),c}function Hs(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Hs(t,i,n,!0),r&&r.forEach(o=>Hs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Mu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Mu={data:Ji,props:Yi,emits:Yi,methods:Dn,computed:Dn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Dn,directives:Dn,watch:Uu,provide:Ji,inject:Lu};function Ji(t,e){return e?t?function(){return be(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Lu(t,e){return Dn(jr(t),jr(e))}function jr(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function we(t,e){return t?[...new Set([].concat(t,e))]:e}function Dn(t,e){return t?be(Object.create(null),t,e):e}function Yi(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:be(Object.create(null),qi(t),qi(e??{})):e}function Uu(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const s in e)n[s]=we(t[s],e[s]);return n}function Qa(){return{app:null,config:{isNativeTag:ha,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $u=0;function Fu(t,e){return function(s,r=null){K(s)||(s=be({},s)),r!=null&&!oe(r)&&(r=null);const i=Qa(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:$u++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Ef,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(l,...f)):K(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,h){if(!c){const g=l._ceVNode||ce(s,r);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),t(g,u,h),c=!0,l._container=u,u.__vue_app__=l,lr(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(it(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=pn;pn=l;try{return u()}finally{pn=f}}};return l}}let pn=null;function Bn(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function nt(t,e,n=!1){const s=gf();if(s||pn){let r=pn?pn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}const Za={},ec=()=>Object.create(Za),tc=t=>Object.getPrototypeOf(t)===Za;function Hu(t,e,n,s=!1){const r={},i=ec();t.propsDefaults=Object.create(null),nc(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ma(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Vu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=X(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ar(t.emitsOptions,h))continue;const g=e[h];if(c)if(Q(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const b=$e(h);r[b]=Wr(c,a,b,g,t,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{nc(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!Q(e,f)&&((u=Qt(f))===f||!Q(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Wr(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Q(e,f))&&(delete i[f],l=!0)}l&&ut(t.attrs,"set","")}function nc(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Un(c))continue;const l=e[c];let u;r&&Q(r,u=$e(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ar(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=X(n),l=a||se;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Wr(r,c,f,l[f],t,!Q(l,f))}}return o}function Wr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&K(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=us(r);s=l[n]=c.call(null,e),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Qt(n))&&(s=!0))}return s}const Bu=new WeakMap;function sc(t,e,n=!1){const s=n?Bu:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!K(t)){const u=f=>{c=!0;const[h,g]=sc(f,e,!0);be(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return oe(t)&&s.set(t,ln),ln;if(V(i))for(let u=0;u<i.length;u++){const f=$e(i[u]);Xi(f)&&(o[f]=se)}else if(i)for(const u in i){const f=$e(u);if(Xi(f)){const h=i[u],g=o[f]=V(h)||K(h)?{type:h}:be({},h),b=g.type;let I=!1,$=!0;if(V(b))for(let P=0;P<b.length;++P){const C=b[P],M=K(C)&&C.name;if(M==="Boolean"){I=!0;break}else M==="String"&&($=!1)}else I=K(b)&&b.name==="Boolean";g[0]=I,g[1]=$,(I||Q(g,"default"))&&a.push(f)}}const l=[o,a];return oe(t)&&s.set(t,l),l}function Xi(t){return t[0]!=="$"&&!Un(t)}const wi=t=>t==="_"||t==="_ctx"||t==="$stable",Ei=t=>V(t)?t.map(et):[et(t)],ju=(t,e,n)=>{if(e._n)return e;const s=Ze((...r)=>Ei(e(...r)),n);return s._c=!1,s},rc=(t,e,n)=>{const s=t._ctx;for(const r in t){if(wi(r))continue;const i=t[r];if(K(i))e[r]=ju(r,i,s);else if(i!=null){const o=Ei(i);e[r]=()=>o}}},ic=(t,e)=>{const n=Ei(e);t.slots.default=()=>n},oc=(t,e,n)=>{for(const s in e)(n||!wi(s))&&(t[s]=e[s])},Wu=(t,e,n)=>{const s=t.slots=ec();if(t.vnode.shapeFlag&32){const r=e._;r?(oc(s,e,n),n&&_a(s,"_",r,!0)):rc(e,s)}else e&&ic(t,e)},Ku=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=se;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:oc(r,e,n):(i=!e.$stable,rc(e,r)),o=e}else e&&(ic(t,e),o={default:1});if(i)for(const a in r)!wi(a)&&o[a]==null&&delete r[a]},Ne=af;function zu(t){return qu(t)}function qu(t,e){const n=Zs();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=tt,insertStaticContent:b}=t,I=(d,p,m,y=null,w=null,_=null,x=void 0,A=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!kn(d,p)&&(y=v(d),Ae(d,w,_,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:S,ref:H,shapeFlag:O}=p;switch(S){case cr:$(d,p,m,y);break;case yt:P(d,p,m,y);break;case As:d==null&&C(p,m,y,x);break;case De:Bt(d,p,m,y,w,_,x,A,T);break;default:O&1?B(d,p,m,y,w,_,x,A,T):O&6?ze(d,p,m,y,w,_,x,A,T):(O&64||O&128)&&S.process(d,p,m,y,w,_,x,A,T,L)}H!=null&&w?Hn(H,d&&d.ref,_,p||d,!p):H==null&&d&&d.ref!=null&&Hn(d.ref,null,_,d,!0)},$=(d,p,m,y)=>{if(d==null)s(p.el=a(p.children),m,y);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},P=(d,p,m,y)=>{d==null?s(p.el=c(p.children||""),m,y):p.el=d.el},C=(d,p,m,y)=>{[d.el,d.anchor]=b(d.children,p,m,y,d.el,d.anchor)},M=({el:d,anchor:p},m,y)=>{let w;for(;d&&d!==p;)w=h(d),s(d,m,y),d=w;s(p,m,y)},D=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),r(d),d=m;r(p)},B=(d,p,m,y,w,_,x,A,T)=>{p.type==="svg"?x="svg":p.type==="math"&&(x="mathml"),d==null?U(p,m,y,w,_,x,A,T):R(d,p,w,_,x,A,T)},U=(d,p,m,y,w,_,x,A)=>{let T,S;const{props:H,shapeFlag:O,transition:F,dirs:W}=d;if(T=d.el=o(d.type,_,H&&H.is,H),O&8?u(T,d.children):O&16&&pe(d.children,T,null,y,w,Er(d,_),x,A),W&&jt(d,null,y,"created"),z(T,d,d.scopeId,x,y),H){for(const re in H)re!=="value"&&!Un(re)&&i(T,re,null,H[re],_,y);"value"in H&&i(T,"value",null,H.value,_),(S=H.onVnodeBeforeMount)&&Xe(S,y,d)}W&&jt(d,null,y,"beforeMount");const q=Gu(w,F);q&&F.beforeEnter(T),s(T,p,m),((S=H&&H.onVnodeMounted)||q||W)&&Ne(()=>{S&&Xe(S,y,d),q&&F.enter(T),W&&jt(d,null,y,"mounted")},w)},z=(d,p,m,y,w)=>{if(m&&g(d,m),y)for(let _=0;_<y.length;_++)g(d,y[_]);if(w){let _=w.subTree;if(p===_||fc(_.type)&&(_.ssContent===p||_.ssFallback===p)){const x=w.vnode;z(d,x,x.scopeId,x.slotScopeIds,w.parent)}}},pe=(d,p,m,y,w,_,x,A,T=0)=>{for(let S=T;S<d.length;S++){const H=d[S]=A?Rt(d[S]):et(d[S]);I(null,H,p,m,y,w,_,x,A)}},R=(d,p,m,y,w,_,x)=>{const A=p.el=d.el;let{patchFlag:T,dynamicChildren:S,dirs:H}=p;T|=d.patchFlag&16;const O=d.props||se,F=p.props||se;let W;if(m&&Wt(m,!1),(W=F.onVnodeBeforeUpdate)&&Xe(W,m,p,d),H&&jt(p,d,m,"beforeUpdate"),m&&Wt(m,!0),(O.innerHTML&&F.innerHTML==null||O.textContent&&F.textContent==null)&&u(A,""),S?Ce(d.dynamicChildren,S,A,m,y,Er(p,w),_):x||G(d,p,A,null,m,y,Er(p,w),_,!1),T>0){if(T&16)de(A,O,F,m,w);else if(T&2&&O.class!==F.class&&i(A,"class",null,F.class,w),T&4&&i(A,"style",O.style,F.style,w),T&8){const q=p.dynamicProps;for(let re=0;re<q.length;re++){const Z=q[re],Re=O[Z],Pe=F[Z];(Pe!==Re||Z==="value")&&i(A,Z,Re,Pe,w,m)}}T&1&&d.children!==p.children&&u(A,p.children)}else!x&&S==null&&de(A,O,F,m,w);((W=F.onVnodeUpdated)||H)&&Ne(()=>{W&&Xe(W,m,p,d),H&&jt(p,d,m,"updated")},y)},Ce=(d,p,m,y,w,_,x)=>{for(let A=0;A<p.length;A++){const T=d[A],S=p[A],H=T.el&&(T.type===De||!kn(T,S)||T.shapeFlag&198)?f(T.el):m;I(T,S,H,null,y,w,_,x,!0)}},de=(d,p,m,y,w)=>{if(p!==m){if(p!==se)for(const _ in p)!Un(_)&&!(_ in m)&&i(d,_,p[_],null,w,y);for(const _ in m){if(Un(_))continue;const x=m[_],A=p[_];x!==A&&_!=="value"&&i(d,_,A,x,w,y)}"value"in m&&i(d,"value",p.value,m.value,w)}},Bt=(d,p,m,y,w,_,x,A,T)=>{const S=p.el=d?d.el:a(""),H=p.anchor=d?d.anchor:a("");let{patchFlag:O,dynamicChildren:F,slotScopeIds:W}=p;W&&(A=A?A.concat(W):W),d==null?(s(S,m,y),s(H,m,y),pe(p.children||[],m,H,w,_,x,A,T)):O>0&&O&64&&F&&d.dynamicChildren?(Ce(d.dynamicChildren,F,m,w,_,x,A),(p.key!=null||w&&p===w.subTree)&&ac(d,p,!0)):G(d,p,m,H,w,_,x,A,T)},ze=(d,p,m,y,w,_,x,A,T)=>{p.slotScopeIds=A,d==null?p.shapeFlag&512?w.ctx.activate(p,m,y,x,T):An(p,m,y,w,_,x,T):en(d,p,T)},An=(d,p,m,y,w,_,x)=>{const A=d.component=pf(d,y,w);if(za(d)&&(A.ctx.renderer=L),mf(A,!1,x),A.asyncDep){if(w&&w.registerDep(A,he,x),!d.el){const T=A.subTree=ce(yt);P(null,T,p,m),d.placeholder=T.el}}else he(A,d,p,m,w,_,x)},en=(d,p,m)=>{const y=p.component=d.component;if(rf(d,p,m))if(y.asyncDep&&!y.asyncResolved){ee(y,p,m);return}else y.next=p,y.update();else p.el=d.el,y.vnode=p},he=(d,p,m,y,w,_,x)=>{const A=()=>{if(d.isMounted){let{next:O,bu:F,u:W,parent:q,vnode:re}=d;{const Je=cc(d);if(Je){O&&(O.el=re.el,ee(d,O,x)),Je.asyncDep.then(()=>{d.isUnmounted||A()});return}}let Z=O,Re;Wt(d,!1),O?(O.el=re.el,ee(d,O,x)):O=re,F&&Ts(F),(Re=O.props&&O.props.onVnodeBeforeUpdate)&&Xe(Re,q,O,re),Wt(d,!0);const Pe=Zi(d),Ge=d.subTree;d.subTree=Pe,I(Ge,Pe,f(Ge.el),v(Ge),d,w,_),O.el=Pe.el,Z===null&&of(d,Pe.el),W&&Ne(W,w),(Re=O.props&&O.props.onVnodeUpdated)&&Ne(()=>Xe(Re,q,O,re),w)}else{let O;const{el:F,props:W}=p,{bm:q,m:re,parent:Z,root:Re,type:Pe}=d,Ge=hn(p);Wt(d,!1),q&&Ts(q),!Ge&&(O=W&&W.onVnodeBeforeMount)&&Xe(O,Z,p),Wt(d,!0);{Re.ce&&Re.ce._def.shadowRoot!==!1&&Re.ce._injectChildStyle(Pe);const Je=d.subTree=Zi(d);I(null,Je,m,y,d,w,_),p.el=Je.el}if(re&&Ne(re,w),!Ge&&(O=W&&W.onVnodeMounted)){const Je=p;Ne(()=>Xe(O,Z,Je),w)}(p.shapeFlag&256||Z&&hn(Z.vnode)&&Z.vnode.shapeFlag&256)&&d.a&&Ne(d.a,w),d.isMounted=!0,p=m=y=null}};d.scope.on();const T=d.effect=new wa(A);d.scope.off();const S=d.update=T.run.bind(T),H=d.job=T.runIfDirty.bind(T);H.i=d,H.id=d.uid,T.scheduler=()=>yi(H),Wt(d,!0),S()},ee=(d,p,m)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Vu(d,p.props,y,m),Ku(d,p.children,m),mt(),Wi(d),_t()},G=(d,p,m,y,w,_,x,A,T=!1)=>{const S=d&&d.children,H=d?d.shapeFlag:0,O=p.children,{patchFlag:F,shapeFlag:W}=p;if(F>0){if(F&128){It(S,O,m,y,w,_,x,A,T);return}else if(F&256){ot(S,O,m,y,w,_,x,A,T);return}}W&8?(H&16&&Le(S,w,_),O!==S&&u(m,O)):H&16?W&16?It(S,O,m,y,w,_,x,A,T):Le(S,w,_,!0):(H&8&&u(m,""),W&16&&pe(O,m,y,w,_,x,A,T))},ot=(d,p,m,y,w,_,x,A,T)=>{d=d||ln,p=p||ln;const S=d.length,H=p.length,O=Math.min(S,H);let F;for(F=0;F<O;F++){const W=p[F]=T?Rt(p[F]):et(p[F]);I(d[F],W,m,null,w,_,x,A,T)}S>H?Le(d,w,_,!0,!1,O):pe(p,m,y,w,_,x,A,T,O)},It=(d,p,m,y,w,_,x,A,T)=>{let S=0;const H=p.length;let O=d.length-1,F=H-1;for(;S<=O&&S<=F;){const W=d[S],q=p[S]=T?Rt(p[S]):et(p[S]);if(kn(W,q))I(W,q,m,null,w,_,x,A,T);else break;S++}for(;S<=O&&S<=F;){const W=d[O],q=p[F]=T?Rt(p[F]):et(p[F]);if(kn(W,q))I(W,q,m,null,w,_,x,A,T);else break;O--,F--}if(S>O){if(S<=F){const W=F+1,q=W<H?p[W].el:y;for(;S<=F;)I(null,p[S]=T?Rt(p[S]):et(p[S]),m,q,w,_,x,A,T),S++}}else if(S>F)for(;S<=O;)Ae(d[S],w,_,!0),S++;else{const W=S,q=S,re=new Map;for(S=q;S<=F;S++){const Oe=p[S]=T?Rt(p[S]):et(p[S]);Oe.key!=null&&re.set(Oe.key,S)}let Z,Re=0;const Pe=F-q+1;let Ge=!1,Je=0;const Rn=new Array(Pe);for(S=0;S<Pe;S++)Rn[S]=0;for(S=W;S<=O;S++){const Oe=d[S];if(Re>=Pe){Ae(Oe,w,_,!0);continue}let Ye;if(Oe.key!=null)Ye=re.get(Oe.key);else for(Z=q;Z<=F;Z++)if(Rn[Z-q]===0&&kn(Oe,p[Z])){Ye=Z;break}Ye===void 0?Ae(Oe,w,_,!0):(Rn[Ye-q]=S+1,Ye>=Je?Je=Ye:Ge=!0,I(Oe,p[Ye],m,null,w,_,x,A,T),Re++)}const Ui=Ge?Ju(Rn):ln;for(Z=Ui.length-1,S=Pe-1;S>=0;S--){const Oe=q+S,Ye=p[Oe],$i=p[Oe+1],Fi=Oe+1<H?$i.el||$i.placeholder:y;Rn[S]===0?I(null,Ye,m,Fi,w,_,x,A,T):Ge&&(Z<0||S!==Ui[Z]?qe(Ye,m,Fi,2):Z--)}}},qe=(d,p,m,y,w=null)=>{const{el:_,type:x,transition:A,children:T,shapeFlag:S}=d;if(S&6){qe(d.component.subTree,p,m,y);return}if(S&128){d.suspense.move(p,m,y);return}if(S&64){x.move(d,p,m,L);return}if(x===De){s(_,p,m);for(let O=0;O<T.length;O++)qe(T[O],p,m,y);s(d.anchor,p,m);return}if(x===As){M(d,p,m);return}if(y!==2&&S&1&&A)if(y===0)A.beforeEnter(_),s(_,p,m),Ne(()=>A.enter(_),w);else{const{leave:O,delayLeave:F,afterLeave:W}=A,q=()=>{d.ctx.isUnmounted?r(_):s(_,p,m)},re=()=>{_._isLeaving&&_[yu](!0),O(_,()=>{q(),W&&W()})};F?F(_,q,re):re()}else s(_,p,m)},Ae=(d,p,m,y=!1,w=!1)=>{const{type:_,props:x,ref:A,children:T,dynamicChildren:S,shapeFlag:H,patchFlag:O,dirs:F,cacheIndex:W}=d;if(O===-2&&(w=!1),A!=null&&(mt(),Hn(A,null,m,d,!0),_t()),W!=null&&(p.renderCache[W]=void 0),H&256){p.ctx.deactivate(d);return}const q=H&1&&F,re=!hn(d);let Z;if(re&&(Z=x&&x.onVnodeBeforeUnmount)&&Xe(Z,p,d),H&6)ys(d.component,m,y);else{if(H&128){d.suspense.unmount(m,y);return}q&&jt(d,null,p,"beforeUnmount"),H&64?d.type.remove(d,p,m,L,y):S&&!S.hasOnce&&(_!==De||O>0&&O&64)?Le(S,p,m,!1,!0):(_===De&&O&384||!w&&H&16)&&Le(T,p,m),y&&tn(d)}(re&&(Z=x&&x.onVnodeUnmounted)||q)&&Ne(()=>{Z&&Xe(Z,p,d),q&&jt(d,null,p,"unmounted")},m)},tn=d=>{const{type:p,el:m,anchor:y,transition:w}=d;if(p===De){nn(m,y);return}if(p===As){D(d);return}const _=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:A}=w,T=()=>x(m,_);A?A(d.el,_,T):T()}else _()},nn=(d,p)=>{let m;for(;d!==p;)m=h(d),r(d),d=m;r(p)},ys=(d,p,m)=>{const{bum:y,scope:w,job:_,subTree:x,um:A,m:T,a:S}=d;Qi(T),Qi(S),y&&Ts(y),w.stop(),_&&(_.flags|=8,Ae(x,d,p,m)),A&&Ne(A,p),Ne(()=>{d.isUnmounted=!0},p)},Le=(d,p,m,y=!1,w=!1,_=0)=>{for(let x=_;x<d.length;x++)Ae(d[x],p,m,y,w)},v=d=>{if(d.shapeFlag&6)return v(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),m=p&&p[mu];return m?h(m):p};let N=!1;const k=(d,p,m)=>{d==null?p._vnode&&Ae(p._vnode,null,null,!0):I(p._vnode||null,d,p,null,null,null,m),p._vnode=d,N||(N=!0,Wi(),Va(),N=!1)},L={p:I,um:Ae,m:qe,r:tn,mt:An,mc:pe,pc:G,pbc:Ce,n:v,o:t};return{render:k,hydrate:void 0,createApp:Fu(k)}}function Er({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Gu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ac(t,e,n=!1){const s=t.children,r=e.children;if(V(s)&&V(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Rt(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ac(o,a)),a.type===cr&&a.patchFlag!==-1&&(a.el=o.el),a.type===yt&&!a.el&&(a.el=o.el)}}function Ju(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function cc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cc(e)}function Qi(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Yu=Symbol.for("v-scx"),Xu=()=>nt(Yu);function ry(t,e){return Ii(t,null,e)}function Cs(t,e,n){return Ii(t,e,n)}function Ii(t,e,n=se){const{immediate:s,deep:r,flush:i,once:o}=n,a=be({},n),c=e&&s||!e&&i!=="post";let l;if(Zn){if(i==="sync"){const g=Xu();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=tt,g.resume=tt,g.pause=tt,g}}const u=ye;a.call=(g,b,I)=>it(g,u,b,I);let f=!1;i==="post"?a.scheduler=g=>{Ne(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,b)=>{b?g():yi(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const h=du(t,e,a);return Zn&&(l?l.push(h):c&&h()),h}function Qu(t,e,n){const s=this.proxy,r=ue(t)?t.includes(".")?lc(s,t):()=>s[t]:t.bind(s,s);let i;K(e)?i=e:(i=e.handler,n=e);const o=us(this),a=Ii(r,i.bind(s),n);return o(),a}function lc(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Zu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$e(e)}Modifiers`]||t[`${Qt(e)}Modifiers`];function ef(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||se;let r=n;const i=e.startsWith("update:"),o=i&&Zu(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>ue(u)?u.trim():u)),o.number&&(r=n.map(Ds)));let a,c=s[a=mr(e)]||s[a=mr($e(e))];!c&&i&&(c=s[a=mr(Qt(e))]),c&&it(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,it(l,t,6,r)}}const tf=new WeakMap;function uc(t,e,n=!1){const s=n?tf:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!K(t)){const c=l=>{const u=uc(l,e,!0);u&&(a=!0,be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(oe(t)&&s.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):be(o,i),oe(t)&&s.set(t,o),o)}function ar(t,e){return!t||!Ys(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Qt(e))||Q(t,e))}function Zi(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:g,ctx:b,inheritAttrs:I}=t,$=$s(t);let P,C;try{if(n.shapeFlag&4){const D=r||s,B=D;P=et(l.call(B,D,u,f,g,h,b)),C=a}else{const D=e;P=et(D.length>1?D(f,{attrs:a,slots:o,emit:c}):D(f,null)),C=e.props?a:nf(a)}}catch(D){jn.length=0,rr(D,t,1),P=ce(yt)}let M=P;if(C&&I!==!1){const D=Object.keys(C),{shapeFlag:B}=M;D.length&&B&7&&(i&&D.some(ai)&&(C=sf(C,i)),M=vn(M,C,!1,!0))}return n.dirs&&(M=vn(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&vi(M,n.transition),P=M,$s($),P}const nf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ys(n))&&((e||(e={}))[n]=t[n]);return e},sf=(t,e)=>{const n={};for(const s in t)(!ai(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function rf(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?eo(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==s[h]&&!ar(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?eo(s,o,l):!0:!!o;return!1}function eo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ar(n,i))return!0}return!1}function of({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const fc=t=>t.__isSuspense;function af(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):gu(t)}const De=Symbol.for("v-fgt"),cr=Symbol.for("v-txt"),yt=Symbol.for("v-cmt"),As=Symbol.for("v-stc"),jn=[];let Me=null;function ae(t=!1){jn.push(Me=t?null:[])}function cf(){jn.pop(),Me=jn[jn.length-1]||null}let Xn=1;function Vs(t,e=!1){Xn+=t,t<0&&Me&&e&&(Me.hasOnce=!0)}function dc(t){return t.dynamicChildren=Xn>0?Me||ln:null,cf(),Xn>0&&Me&&Me.push(t),t}function le(t,e,n,s,r,i){return dc(E(t,e,n,s,r,i,!0))}function Kr(t,e,n,s,r){return dc(ce(t,e,n,s,r,!0))}function Qn(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const hc=({key:t})=>t??null,Rs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ue(t)||ve(t)||K(t)?{i:me,r:t,k:e,f:!!n}:t:null);function E(t,e=null,n=null,s=0,r=null,i=t===De?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hc(e),ref:e&&Rs(e),scopeId:ja,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:me};return a?(Si(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),Xn>0&&!o&&Me&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Me.push(c),c}const ce=lf;function lf(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===xu)&&(t=yt),Qn(t)){const a=vn(t,e,!0);return n&&Si(a,n),Xn>0&&!i&&Me&&(a.shapeFlag&6?Me[Me.indexOf(t)]=a:Me.push(a)),a.patchFlag=-2,a}if(wf(t)&&(t=t.__vccOpts),e){e=uf(e);let{class:a,style:c}=e;a&&!ue(a)&&(e.class=Ee(a)),oe(c)&&(mi(c)&&!V(c)&&(c=be({},c)),e.style=er(c))}const o=ue(t)?1:fc(t)?128:_u(t)?64:oe(t)?4:K(t)?2:0;return E(t,e,n,s,r,o,i,!0)}function uf(t){return t?mi(t)||tc(t)?be({},t):t:null}function vn(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?ff(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&hc(l),ref:e&&e.ref?n&&i?V(i)?i.concat(Rs(e)):[i,Rs(e)]:Rs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&vi(u,c.clone(u)),u}function an(t=" ",e=0){return ce(cr,null,t,e)}function Es(t,e){const n=ce(As,null,t);return n.staticCount=e,n}function Fe(t="",e=!1){return e?(ae(),Kr(yt,null,t)):ce(yt,null,t)}function et(t){return t==null||typeof t=="boolean"?ce(yt):V(t)?ce(De,null,t.slice()):Qn(t)?Rt(t):ce(cr,null,String(t))}function Rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vn(t)}function Si(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Si(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!tc(e)?e._ctx=me:r===3&&me&&(me.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:me},n=32):(e=String(e),s&64?(n=16,e=[an(e)]):n=8);t.children=e,t.shapeFlag|=n}function ff(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ee([e.class,s.class]));else if(r==="style")e.style=er([e.style,s.style]);else if(Ys(r)){const i=e[r],o=s[r];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Xe(t,e,n,s=null){it(t,e,7,[n,s])}const df=Qa();let hf=0;function pf(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||df,i={uid:hf++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $l(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sc(s,r),emitsOptions:uc(s,r),emit:null,emitted:null,propsDefaults:se,inheritAttrs:s.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ef.bind(null,i),t.ce&&t.ce(i),i}let ye=null;const gf=()=>ye||me;let Bs,zr;{const t=Zs(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Bs=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),zr=e("__VUE_SSR_SETTERS__",n=>Zn=n)}const us=t=>{const e=ye;return Bs(t),t.scope.on(),()=>{t.scope.off(),Bs(e)}},to=()=>{ye&&ye.scope.off(),Bs(null)};function pc(t){return t.vnode.shapeFlag&4}let Zn=!1;function mf(t,e=!1,n=!1){e&&zr(e);const{props:s,children:r}=t.vnode,i=pc(t);Hu(t,s,i,e),Wu(t,r,n||e);const o=i?_f(t,e):void 0;return e&&zr(!1),o}function _f(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ou);const{setup:s}=n;if(s){mt();const r=t.setupContext=s.length>1?vf(t):null,i=us(t),o=ls(s,t,0,[t.props,r]),a=pa(o);if(_t(),i(),(a||t.sp)&&!hn(t)&&Ka(t),a){if(o.then(to,to),e)return o.then(c=>{no(t,c)}).catch(c=>{rr(c,t,0)});t.asyncDep=o}else no(t,o)}else gc(t)}function no(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=$a(e)),gc(t)}function gc(t,e,n){const s=t.type;t.render||(t.render=s.render||tt);{const r=us(t);mt();try{Nu(t)}finally{_t(),r()}}}const yf={get(t,e){return _e(t,"get",""),t[e]}};function vf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,yf),slots:t.slots,emit:t.emit,expose:e}}function lr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($a(ru(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vn)return Vn[n](t)},has(e,n){return n in e||n in Vn}})):t.proxy}function bf(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function wf(t){return K(t)&&"__vccOpts"in t}const Se=(t,e)=>uu(t,e,Zn);function mc(t,e,n){const s=(i,o,a)=>{Vs(-1);try{return ce(i,o,a)}finally{Vs(1)}},r=arguments.length;return r===2?oe(e)&&!V(e)?Qn(e)?s(t,null,[e]):s(t,e):s(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qn(n)&&(n=[n]),s(t,e,n))}const Ef="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qr;const so=typeof window<"u"&&window.trustedTypes;if(so)try{qr=so.createPolicy("vue",{createHTML:t=>t})}catch{}const _c=qr?t=>qr.createHTML(t):t=>t,If="http://www.w3.org/2000/svg",Sf="http://www.w3.org/1998/Math/MathML",lt=typeof document<"u"?document:null,ro=lt&&lt.createElement("template"),Tf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?lt.createElementNS(If,t):e==="mathml"?lt.createElementNS(Sf,t):n?lt.createElement(t,{is:n}):lt.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>lt.createTextNode(t),createComment:t=>lt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>lt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ro.innerHTML=_c(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=ro.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cf=Symbol("_vtc");function Af(t,e,n){const s=t[Cf];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const io=Symbol("_vod"),Rf=Symbol("_vsh"),Pf=Symbol(""),xf=/(?:^|;)\s*display\s*:/;function kf(t,e,n){const s=t.style,r=ue(n);let i=!1;if(n&&!r){if(e)if(ue(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ps(s,a,"")}else for(const o in e)n[o]==null&&Ps(s,o,"");for(const o in n)o==="display"&&(i=!0),Ps(s,o,n[o])}else if(r){if(e!==n){const o=s[Pf];o&&(n+=";"+o),s.cssText=n,i=xf.test(n)}}else e&&t.removeAttribute("style");io in t&&(t[io]=i?s.display:"",t[Rf]&&(s.display="none"))}const oo=/\s*!important$/;function Ps(t,e,n){if(V(n))n.forEach(s=>Ps(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Of(t,e);oo.test(n)?t.setProperty(Qt(s),n.replace(oo,""),"important"):t[s]=n}}const ao=["Webkit","Moz","ms"],Ir={};function Of(t,e){const n=Ir[e];if(n)return n;let s=$e(e);if(s!=="filter"&&s in t)return Ir[e]=s;s=Qs(s);for(let r=0;r<ao.length;r++){const i=ao[r]+s;if(i in t)return Ir[e]=i}return e}const co="http://www.w3.org/1999/xlink";function lo(t,e,n,s,r,i=Ll(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(co,e.slice(6,e.length)):t.setAttributeNS(co,e,n):n==null||i&&!ya(n)?t.removeAttribute(e):t.setAttribute(e,i?"":je(n)?String(n):n)}function uo(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?_c(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ya(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function xt(t,e,n,s){t.addEventListener(e,n,s)}function Nf(t,e,n,s){t.removeEventListener(e,n,s)}const fo=Symbol("_vei");function Df(t,e,n,s,r=null){const i=t[fo]||(t[fo]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Mf(e);if(s){const l=i[e]=$f(s,r);xt(t,a,l,c)}else o&&(Nf(t,a,o,c),i[e]=void 0)}}const ho=/(?:Once|Passive|Capture)$/;function Mf(t){let e;if(ho.test(t)){e={};let s;for(;s=t.match(ho);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qt(t.slice(2)),e]}let Sr=0;const Lf=Promise.resolve(),Uf=()=>Sr||(Lf.then(()=>Sr=0),Sr=Date.now());function $f(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;it(Ff(s,n.value),e,5,[s])};return n.value=t,n.attached=Uf(),n}function Ff(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const po=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Hf=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Af(t,s,o):e==="style"?kf(t,n,s):Ys(e)?ai(e)||Df(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vf(t,e,s,o))?(uo(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&lo(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ue(s))?uo(t,$e(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),lo(t,e,s,o))};function Vf(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&po(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return po(e)&&ue(n)?!1:e in t}const bn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>Ts(e,n):e};function Bf(t){t.target.composing=!0}function go(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pt=Symbol("_assign"),On={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[pt]=bn(r);const i=s||r.props&&r.props.type==="number";xt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ds(a)),t[pt](a)}),n&&xt(t,"change",()=>{t.value=t.value.trim()}),e||(xt(t,"compositionstart",Bf),xt(t,"compositionend",go),xt(t,"change",go))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[pt]=bn(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ds(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},iy={deep:!0,created(t,e,n){t[pt]=bn(n),xt(t,"change",()=>{const s=t._modelValue,r=es(t),i=t.checked,o=t[pt];if(V(s)){const a=ui(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(Tn(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(yc(t,i))})},mounted:mo,beforeUpdate(t,e,n){t[pt]=bn(n),mo(t,e,n)}};function mo(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(V(e))r=ui(e,s.props.value)>-1;else if(Tn(e))r=e.has(s.props.value);else{if(e===n)return;r=cs(e,yc(t,!0))}t.checked!==r&&(t.checked=r)}const oy={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Tn(e);xt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ds(es(o)):es(o));t[pt](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,_i(()=>{t._assigning=!1})}),t[pt]=bn(s)},mounted(t,{value:e}){_o(t,e)},beforeUpdate(t,e,n){t[pt]=bn(n)},updated(t,{value:e}){t._assigning||_o(t,e)}};function _o(t,e){const n=t.multiple,s=V(e);if(!(n&&!s&&!Tn(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=es(o);if(n)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=ui(e,a)>-1}else o.selected=e.has(a);else if(cs(es(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function es(t){return"_value"in t?t._value:t.value}function yc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const jf=["ctrl","shift","alt","meta"],Wf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jf.some(n=>t[`${n}Key`]&&!e.includes(n))},Tr=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const a=Wf[e[o]];if(a&&a(r,e))return}return t(r,...i)}))},Kf=be({patchProp:Hf},Tf);let yo;function zf(){return yo||(yo=zu(Kf))}const qf=((...t)=>{const e=zf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Jf(s);if(!r)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Gf(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Gf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Jf(t){return ue(t)?document.querySelector(t):t}const Yf="/Pinghe/assets/LoadingTrain-Dl9H4zbh.png",Xf="/Pinghe/assets/Logo-DzrdicbF.gif",Qf="/Pinghe/assets/student-h4fKY3lv.png",Zf=()=>{};var vo={};/**
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
 */const vc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ed=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),s.push(n[u],n[f],n[h],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ed(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw new td;const h=i<<2|a>>4;if(s.push(h),l!==64){const g=a<<4&240|l>>2;if(s.push(g),f!==64){const b=l<<6&192|f;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class td extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nd=function(t){const e=vc(t);return bc.encodeByteArray(e,!0)},wc=function(t){return nd(t).replace(/\./g,"")},Ec=function(t){try{return bc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const rd=()=>sd().__FIREBASE_DEFAULTS__,id=()=>{if(typeof process>"u"||typeof vo>"u")return;const t=vo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},od=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ec(t[1]);return e&&JSON.parse(e)},Ti=()=>{try{return Zf()||rd()||id()||od()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ad=t=>Ti()?.emulatorHosts?.[t],Ic=()=>Ti()?.config,Sc=t=>Ti()?.[`_${t}`];/**
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
 */function ur(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ld(t){return(await fetch(t,{credentials:"include"})).ok}const Wn={};function ud(){const t={prod:[],emulator:[]};for(const e of Object.keys(Wn))Wn[e]?t.emulator.push(e):t.prod.push(e);return t}function fd(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let bo=!1;function dd(t,e){if(typeof window>"u"||typeof document>"u"||!ur(window.location.host)||Wn[t]===e||Wn[t]||bo)return;Wn[t]=e;function n(h){return`__firebase__banner__${h}`}const s="__firebase__banner",i=ud().prod.length>0;function o(){const h=document.getElementById(s);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,g){h.setAttribute("width","24"),h.setAttribute("id",g),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function l(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{bo=!0,o()},h}function u(h,g){h.setAttribute("id",g),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=fd(s),g=n("text"),b=document.getElementById(g)||document.createElement("span"),I=n("learnmore"),$=document.getElementById(I)||document.createElement("a"),P=n("preprendIcon"),C=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const M=h.element;a(M),u($,I);const D=l();c(C,P),M.append(C,b,$,D),document.body.appendChild(M)}i?(b.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function pd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function md(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _d(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yd(){try{return typeof indexedDB=="object"}catch{return!1}}function vd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const bd="FirebaseError";class Ft extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=bd,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?wd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ft(r,a,s)}}function wd(t,e){return t.replace(Ed,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ed=/\{\$([^}]+)}/g;function Id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(wo(i)&&wo(o)){if(!wn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function wo(t){return t!==null&&typeof t=="object"}/**
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
 */function ds(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Mn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ln(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sd(t,e){const n=new Td(t,e);return n.subscribe.bind(n)}class Td{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Cd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Cr),r.error===void 0&&(r.error=Cr),r.complete===void 0&&(r.complete=Cr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cr(){}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class En{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qt="[DEFAULT]";/**
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
 */class Ad{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new cd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pd(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rd(t){return t===qt?void 0:t}function Pd(t){return t.instantiationMode==="EAGER"}/**
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
 */class xd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ad(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const kd={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Od=ne.INFO,Nd={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Dd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Nd[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tc{constructor(e){this.name=e,this._logLevel=Od,this._logHandler=Dd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Md=(t,e)=>e.some(n=>t instanceof n);let Eo,Io;function Ld(){return Eo||(Eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ud(){return Io||(Io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cc=new WeakMap,Gr=new WeakMap,Ac=new WeakMap,Ar=new WeakMap,Ci=new WeakMap;function $d(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Lt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cc.set(n,t)}).catch(()=>{}),Ci.set(e,t),e}function Fd(t){if(Gr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Gr.set(t,e)}let Jr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ac.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hd(t){Jr=t(Jr)}function Vd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Rr(this),e,...n);return Ac.set(s,e.sort?e.sort():[e]),Lt(s)}:Ud().includes(t)?function(...e){return t.apply(Rr(this),e),Lt(Cc.get(this))}:function(...e){return Lt(t.apply(Rr(this),e))}}function Bd(t){return typeof t=="function"?Vd(t):(t instanceof IDBTransaction&&Fd(t),Md(t,Ld())?new Proxy(t,Jr):t)}function Lt(t){if(t instanceof IDBRequest)return $d(t);if(Ar.has(t))return Ar.get(t);const e=Bd(t);return e!==t&&(Ar.set(t,e),Ci.set(e,t)),e}const Rr=t=>Ci.get(t);function jd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Lt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Lt(o.result),c.oldVersion,c.newVersion,Lt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Wd=["get","getKey","getAll","getAllKeys","count"],Kd=["put","add","delete","clear"],Pr=new Map;function So(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pr.get(e))return Pr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Kd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Wd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Pr.set(e,i),i}Hd(t=>({...t,get:(e,n,s)=>So(e,n)||t.get(e,n,s),has:(e,n)=>!!So(e,n)||t.has(e,n)}));/**
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
 */class zd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function qd(t){return t.getComponent()?.type==="VERSION"}const Yr="@firebase/app",To="0.14.2";/**
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
 */const vt=new Tc("@firebase/app"),Gd="@firebase/app-compat",Jd="@firebase/analytics-compat",Yd="@firebase/analytics",Xd="@firebase/app-check-compat",Qd="@firebase/app-check",Zd="@firebase/auth",eh="@firebase/auth-compat",th="@firebase/database",nh="@firebase/data-connect",sh="@firebase/database-compat",rh="@firebase/functions",ih="@firebase/functions-compat",oh="@firebase/installations",ah="@firebase/installations-compat",ch="@firebase/messaging",lh="@firebase/messaging-compat",uh="@firebase/performance",fh="@firebase/performance-compat",dh="@firebase/remote-config",hh="@firebase/remote-config-compat",ph="@firebase/storage",gh="@firebase/storage-compat",mh="@firebase/firestore",_h="@firebase/ai",yh="@firebase/firestore-compat",vh="firebase",bh="12.2.0";/**
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
 */const Xr="[DEFAULT]",wh={[Yr]:"fire-core",[Gd]:"fire-core-compat",[Yd]:"fire-analytics",[Jd]:"fire-analytics-compat",[Qd]:"fire-app-check",[Xd]:"fire-app-check-compat",[Zd]:"fire-auth",[eh]:"fire-auth-compat",[th]:"fire-rtdb",[nh]:"fire-data-connect",[sh]:"fire-rtdb-compat",[rh]:"fire-fn",[ih]:"fire-fn-compat",[oh]:"fire-iid",[ah]:"fire-iid-compat",[ch]:"fire-fcm",[lh]:"fire-fcm-compat",[uh]:"fire-perf",[fh]:"fire-perf-compat",[dh]:"fire-rc",[hh]:"fire-rc-compat",[ph]:"fire-gcs",[gh]:"fire-gcs-compat",[mh]:"fire-fst",[yh]:"fire-fst-compat",[_h]:"fire-vertex","fire-js":"fire-js",[vh]:"fire-js-all"};/**
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
 */const js=new Map,Eh=new Map,Qr=new Map;function Co(t,e){try{t.container.addComponent(e)}catch(n){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(Qr.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;Qr.set(e,t);for(const n of js.values())Co(n,t);for(const n of Eh.values())Co(n,t);return!0}function Rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function He(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Ih={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ut=new fs("app","Firebase",Ih);/**
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
 */class Sh{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=bh;function Pc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Xr,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Ut.create("bad-app-name",{appName:String(r)});if(n||(n=Ic()),!n)throw Ut.create("no-options");const i=js.get(r);if(i){if(wn(n,i.options)&&wn(s,i.config))return i;throw Ut.create("duplicate-app",{appName:r})}const o=new xd(r);for(const c of Qr.values())o.addComponent(c);const a=new Sh(n,s,o);return js.set(r,a),a}function Th(t=Xr){const e=js.get(t);if(!e&&t===Xr&&Ic())return Pc();if(!e)throw Ut.create("no-app",{appName:t});return e}function gn(t,e,n){let s=wh[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(o.join(" "));return}ts(new En(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ch="firebase-heartbeat-database",Ah=1,ns="firebase-heartbeat-store";let xr=null;function xc(){return xr||(xr=jd(Ch,Ah,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ns)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ut.create("idb-open",{originalErrorMessage:t.message})})),xr}async function Rh(t){try{const n=(await xc()).transaction(ns),s=await n.objectStore(ns).get(kc(t));return await n.done,s}catch(e){if(e instanceof Ft)vt.warn(e.message);else{const n=Ut.create("idb-get",{originalErrorMessage:e?.message});vt.warn(n.message)}}}async function Ao(t,e){try{const s=(await xc()).transaction(ns,"readwrite");await s.objectStore(ns).put(e,kc(t)),await s.done}catch(n){if(n instanceof Ft)vt.warn(n.message);else{const s=Ut.create("idb-set",{originalErrorMessage:n?.message});vt.warn(s.message)}}}function kc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ph=1024,xh=30;class kh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ro();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>xh){const r=Dh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){vt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ro(),{heartbeatsToSend:n,unsentEntries:s}=Oh(this._heartbeatsCache.heartbeats),r=wc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return vt.warn(e),""}}}function Ro(){return new Date().toISOString().substring(0,10)}function Oh(t,e=Ph){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Po(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Po(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Nh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yd()?vd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rh(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ao(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ao(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Po(t){return wc(JSON.stringify({version:2,heartbeats:t})).length}function Dh(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function Mh(t){ts(new En("platform-logger",e=>new zd(e),"PRIVATE")),ts(new En("heartbeat",e=>new kh(e),"PRIVATE")),gn(Yr,To,t),gn(Yr,To,"esm2020"),gn("fire-js","")}Mh("");function Oc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lh=Oc,Nc=new fs("auth","Firebase",Oc());/**
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
 */const Ws=new Tc("@firebase/auth");function Uh(t,...e){Ws.logLevel<=ne.WARN&&Ws.warn(`Auth (${hs}): ${t}`,...e)}function xs(t,...e){Ws.logLevel<=ne.ERROR&&Ws.error(`Auth (${hs}): ${t}`,...e)}/**
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
 */function We(t,...e){throw Ai(t,...e)}function st(t,...e){return Ai(t,...e)}function Dc(t,e,n){const s={...Lh(),[e]:n};return new fs("auth","Firebase",s).create(e,{appName:t.name})}function gt(t){return Dc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ai(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Nc.create(t,...e)}function j(t,e,...n){if(!t)throw Ai(e,...n)}function dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xs(e),new Error(e)}function bt(t,e){t||dt(e)}/**
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
 */function Zr(){return typeof self<"u"&&self.location?.href||""}function $h(){return xo()==="http:"||xo()==="https:"}function xo(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Fh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($h()||gd()||"connection"in navigator)?navigator.onLine:!0}function Hh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ps{constructor(e,n){this.shortDelay=e,this.longDelay=n,bt(n>e,"Short delay should be less than long delay!"),this.isMobile=hd()||md()}get(){return Fh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ri(t,e){bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Mc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jh=new ps(3e4,6e4);function Ht(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Vt(t,e,n,s,r={}){return Lc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ds({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return pd()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&ur(t.emulatorConfig.host)&&(l.credentials="include"),Mc.fetch()(await Uc(t,t.config.apiHost,n,a),l)})}async function Lc(t,e,n){t._canInitEmulator=!1;const s={...Vh,...e};try{const r=new Kh(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Is(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Is(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Is(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Is(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Dc(t,u,l);We(t,u)}}catch(r){if(r instanceof Ft)throw r;We(t,"network-request-failed",{message:String(r)})}}async function gs(t,e,n,s,r={}){const i=await Vt(t,e,n,s,r);return"mfaPendingCredential"in i&&We(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Uc(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Ri(t.config,r):`${t.config.apiScheme}://${r}`;return Bh.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Wh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Kh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(st(this.auth,"network-request-failed")),jh.get())})}}function Is(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=st(t,e,s);return r.customData._tokenResponse=n,r}function ko(t){return t!==void 0&&t.enterprise!==void 0}class zh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Wh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qh(t,e){return Vt(t,"GET","/v2/recaptchaConfig",Ht(t,e))}/**
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
 */async function Gh(t,e){return Vt(t,"POST","/v1/accounts:delete",e)}async function Ks(t,e){return Vt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Kn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jh(t,e=!1){const n=Et(t),s=await n.getIdToken(e),r=Pi(s);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:Kn(kr(r.auth_time)),issuedAtTime:Kn(kr(r.iat)),expirationTime:Kn(kr(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function kr(t){return Number(t)*1e3}function Pi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return xs("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ec(n);return r?JSON.parse(r):(xs("Failed to decode base64 JWT payload"),null)}catch(r){return xs("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Oo(t){const e=Pi(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ss(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ft&&Yh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Yh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ei{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kn(this.lastLoginAt),this.creationTime=Kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zs(t){const e=t.auth,n=await t.getIdToken(),s=await ss(t,Ks(e,{idToken:n}));j(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?$c(r.providerUserInfo):[],o=Zh(t.providerData,i),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!o?.length,l=a?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ei(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function Qh(t){const e=Et(t);await zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function $c(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function ep(t,e){const n=await Lc(t,{},async()=>{const s=ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await Uc(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return t.emulatorConfig&&ur(t.emulatorConfig.host)&&(c.credentials="include"),Mc.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tp(t,e){return Vt(t,"POST","/v2/accounts:revokeToken",Ht(t,e))}/**
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
 */class mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Oo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=Oo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await ep(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new mn;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(j(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mn,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
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
 */function St(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ve{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Xh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ei(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ss(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jh(this,e)}reload(){return Qh(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ve({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await zs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(He(this.auth.app))return Promise.reject(gt(this.auth));const e=await this.getIdToken();return await ss(this,Gh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:h,isAnonymous:g,providerData:b,stsTokenManager:I}=n;j(f&&I,e,"internal-error");const $=mn.fromJSON(this.name,I);j(typeof f=="string",e,"internal-error"),St(s,e.name),St(r,e.name),j(typeof h=="boolean",e,"internal-error"),j(typeof g=="boolean",e,"internal-error"),St(i,e.name),St(o,e.name),St(a,e.name),St(c,e.name),St(l,e.name),St(u,e.name);const P=new Ve({uid:f,auth:e,email:r,emailVerified:h,displayName:s,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:$,createdAt:l,lastLoginAt:u});return b&&Array.isArray(b)&&(P.providerData=b.map(C=>({...C}))),c&&(P._redirectEventId=c),P}static async _fromIdTokenResponse(e,n,s=!1){const r=new mn;r.updateFromServerResponse(n);const i=new Ve({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await zs(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];j(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?$c(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,a=new mn;a.updateFromIdToken(s);const c=new Ve({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ei(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
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
 */const No=new Map;function ht(t){bt(t instanceof Function,"Expected a class definition");let e=No.get(t);return e?(bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,No.set(t,e),e)}/**
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
 */class Fc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fc.type="NONE";const Do=Fc;/**
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
 */function ks(t,e,n){return`firebase:${t}:${e}:${n}`}class _n{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ks(this.userKey,r.apiKey,i),this.fullPersistenceKey=ks("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ks(this.auth,{idToken:e}).catch(()=>{});return n?Ve._fromGetAccountInfoResponse(this.auth,n,e):null}return Ve._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new _n(ht(Do),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ht(Do);const o=ks(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const h=await Ks(e,{idToken:u}).catch(()=>{});if(!h)break;f=await Ve._fromGetAccountInfoResponse(e,h,u)}else f=Ve._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _n(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new _n(i,e,s))}}/**
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
 */function Mo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kc(e))return"Blackberry";if(zc(e))return"Webos";if(Vc(e))return"Safari";if((e.includes("chrome/")||Bc(e))&&!e.includes("edge/"))return"Chrome";if(Wc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Hc(t=Te()){return/firefox\//i.test(t)}function Vc(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bc(t=Te()){return/crios\//i.test(t)}function jc(t=Te()){return/iemobile/i.test(t)}function Wc(t=Te()){return/android/i.test(t)}function Kc(t=Te()){return/blackberry/i.test(t)}function zc(t=Te()){return/webos/i.test(t)}function xi(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function np(t=Te()){return xi(t)&&!!window.navigator?.standalone}function sp(){return _d()&&document.documentMode===10}function qc(t=Te()){return xi(t)||Wc(t)||zc(t)||Kc(t)||/windows phone/i.test(t)||jc(t)}/**
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
 */function Gc(t,e=[]){let n;switch(t){case"Browser":n=Mo(Te());break;case"Worker":n=`${Mo(Te())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${s}`}/**
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
 */async function ip(t,e={}){return Vt(t,"GET","/v2/passwordPolicy",Ht(t,e))}/**
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
 */class cp{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lo(this),this.idTokenSubscription=new Lo(this),this.beforeStateQueue=new rp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ks(this,{idToken:e}),s=await Ve._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(He(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zs(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(He(this.app))return Promise.reject(gt(this));const n=e?Et(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return He(this.app)?Promise.reject(gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return He(this.app)?Promise.reject(gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ip(this),n=new ap(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await tp(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ht(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(He(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Uh(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Zt(t){return Et(t)}class Lo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sd(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lp(t){fr=t}function Jc(t){return fr.loadJS(t)}function up(){return fr.recaptchaEnterpriseScript}function fp(){return fr.gapiScript}function dp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class hp{constructor(){this.enterprise=new pp}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class pp{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const gp="recaptcha-enterprise",Yc="NO_RECAPTCHA";class mp{constructor(e){this.type=gp,this.auth=Zt(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{qh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new zh(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;ko(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Yc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hp().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&ko(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=up();c.length!==0&&(c+=a),Jc(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Uo(t,e,n,s=!1,r=!1){const i=new mp(t);let o;if(r)o=Yc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ti(t,e,n,s,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Uo(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Uo(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
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
 */function _p(t,e){const n=Rc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(wn(i,e??{}))return r;We(r,"already-initialized")}return n.initialize({options:e})}function yp(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(ht);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function vp(t,e,n){const s=Zt(t);j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Xc(e),{host:o,port:a}=bp(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){j(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),j(wn(l,s.config.emulator)&&wn(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,ur(o)?(ld(`${i}//${o}${c}`),dd("Auth",!0)):wp()}function Xc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bp(t){const e=Xc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:$o(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:$o(o)}}}function $o(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ki{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,n){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function Ep(t,e){return Vt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ip(t,e){return gs(t,"POST","/v1/accounts:signInWithPassword",Ht(t,e))}/**
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
 */async function Sp(t,e){return gs(t,"POST","/v1/accounts:signInWithEmailLink",Ht(t,e))}async function Tp(t,e){return gs(t,"POST","/v1/accounts:signInWithEmailLink",Ht(t,e))}/**
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
 */class rs extends ki{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new rs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new rs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ti(e,n,"signInWithPassword",Ip);case"emailLink":return Sp(e,{email:this._email,oobCode:this._password});default:We(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ti(e,s,"signUpPassword",Ep);case"emailLink":return Tp(e,{idToken:n,email:this._email,oobCode:this._password});default:We(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function yn(t,e){return gs(t,"POST","/v1/accounts:signInWithIdp",Ht(t,e))}/**
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
 */const Cp="http://localhost";class Yt extends ki{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):We("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new Yt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,yn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yn(e,n)}buildRequest(){const e={requestUri:Cp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ds(n)}return e}}/**
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
 */function Ap(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rp(t){const e=Mn(Ln(t)).link,n=e?Mn(Ln(e)).deep_link_id:null,s=Mn(Ln(t)).deep_link_id;return(s?Mn(Ln(s)).link:null)||s||n||e||t}class Oi{constructor(e){const n=Mn(Ln(e)),s=n.apiKey??null,r=n.oobCode??null,i=Ap(n.mode??null);j(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Rp(e);try{return new Oi(n)}catch{return null}}}/**
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
 */class Cn{constructor(){this.providerId=Cn.PROVIDER_ID}static credential(e,n){return rs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Oi.parseLink(n);return j(s,"argument-error"),rs._fromEmailAndCode(e,s.code,s.tenantId)}}Cn.PROVIDER_ID="password";Cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ms extends Qc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kt extends ms{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ot.credential(n,s)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class Nt extends ms{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com";Nt.PROVIDER_ID="github.com";/**
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
 */class Dt extends ms{constructor(){super("twitter.com")}static credential(e,n){return Yt._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Dt.credential(n,s)}catch{return null}}}Dt.TWITTER_SIGN_IN_METHOD="twitter.com";Dt.PROVIDER_ID="twitter.com";/**
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
 */async function Pp(t,e){return gs(t,"POST","/v1/accounts:signUp",Ht(t,e))}/**
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
 */class Xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ve._fromIdTokenResponse(e,s,r),o=Fo(s);return new Xt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Fo(s);return new Xt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Fo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qs extends Ft{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,qs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new qs(e,n,s,r)}}function Zc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qs._fromErrorAndOperation(t,i,e,s):i})}async function xp(t,e,n=!1){const s=await ss(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xt._forOperation(t,"link",s)}/**
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
 */async function kp(t,e,n=!1){const{auth:s}=t;if(He(s.app))return Promise.reject(gt(s));const r="reauthenticate";try{const i=await ss(t,Zc(s,r,e,t),n);j(i.idToken,s,"internal-error");const o=Pi(i.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),Xt._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&We(s,"user-mismatch"),i}}/**
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
 */async function el(t,e,n=!1){if(He(t.app))return Promise.reject(gt(t));const s="signIn",r=await Zc(t,s,e),i=await Xt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Op(t,e){return el(Zt(t),e)}/**
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
 */async function tl(t){const e=Zt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Np(t,e,n){if(He(t.app))return Promise.reject(gt(t));const s=Zt(t),o=await ti(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Pp).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&tl(t),c}),a=await Xt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Dp(t,e,n){return He(t.app)?Promise.reject(gt(t)):Op(Et(t),Cn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&tl(t),s})}function Mp(t,e,n,s){return Et(t).onIdTokenChanged(e,n,s)}function Lp(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function Up(t,e,n,s){return Et(t).onAuthStateChanged(e,n,s)}function $p(t){return Et(t).signOut()}const Gs="__sak";/**
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
 */class nl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gs,"1"),this.storage.removeItem(Gs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Fp=1e3,Hp=10;class sl extends nl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);sp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Hp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Fp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sl.type="LOCAL";const Vp=sl;/**
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
 */class rl extends nl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rl.type="SESSION";const il=rl;/**
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
 */class dr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new dr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Bp(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dr.receivers=[];/**
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
 */function Ni(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class jp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ni("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rt(){return window}function Wp(t){rt().location.href=t}/**
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
 */function ol(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function Kp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zp(){return navigator?.serviceWorker?.controller||null}function qp(){return ol()?self:null}/**
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
 */const al="firebaseLocalStorageDb",Gp=1,Js="firebaseLocalStorage",cl="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hr(t,e){return t.transaction([Js],e?"readwrite":"readonly").objectStore(Js)}function Jp(){const t=indexedDB.deleteDatabase(al);return new _s(t).toPromise()}function ni(){const t=indexedDB.open(al,Gp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Js,{keyPath:cl})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Js)?e(s):(s.close(),await Jp(),e(await ni()))})})}async function Ho(t,e,n){const s=hr(t,!0).put({[cl]:e,value:n});return new _s(s).toPromise()}async function Yp(t,e){const n=hr(t,!1).get(e),s=await new _s(n).toPromise();return s===void 0?null:s.value}function Vo(t,e){const n=hr(t,!0).delete(e);return new _s(n).toPromise()}const Xp=800,Qp=3;class ll{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ni(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Qp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ol()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dr._getInstance(qp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Kp(),!this.activeServiceWorker)return;this.sender=new jp(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ni();return await Ho(e,Gs,"1"),await Vo(e,Gs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ho(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Yp(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=hr(r,!1).getAll();return new _s(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ll.type="LOCAL";const Zp=ll;new ps(3e4,6e4);/**
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
 */function eg(t,e){return e?ht(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Di extends ki{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tg(t){return el(t.auth,new Di(t),t.bypassAuthState)}function ng(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),kp(n,new Di(t),t.bypassAuthState)}async function sg(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),xp(n,new Di(t),t.bypassAuthState)}/**
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
 */class ul{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tg;case"linkViaPopup":case"linkViaRedirect":return sg;case"reauthViaPopup":case"reauthViaRedirect":return ng;default:We(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rg=new ps(2e3,1e4);class cn extends ul{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=Ni();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rg.get())};e()}}cn.currentPopupAction=null;/**
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
 */const ig="pendingRedirect",Os=new Map;class og extends ul{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Os.get(this.auth._key());if(!e){try{const s=await ag(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Os.set(this.auth._key(),e)}return this.bypassAuthState||Os.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ag(t,e){const n=ug(e),s=lg(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function cg(t,e){Os.set(t._key(),e)}function lg(t){return ht(t._redirectPersistence)}function ug(t){return ks(ig,t.config.apiKey,t.name)}async function fg(t,e,n=!1){if(He(t.app))return Promise.reject(gt(t));const s=Zt(t),r=eg(s,e),o=await new og(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const dg=600*1e3;class hg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!fl(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(st(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bo(e))}saveEventToCache(e){this.cachedEventUids.add(Bo(e)),this.lastProcessedEventTime=Date.now()}}function Bo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fl({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function pg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fl(t);default:return!1}}/**
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
 */const mg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_g=/^https?/;async function yg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gg(t);for(const n of e)try{if(vg(n))return}catch{}We(t,"unauthorized-domain")}function vg(t){const e=Zr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!_g.test(n))return!1;if(mg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const bg=new ps(3e4,6e4);function jo(){const t=rt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wg(t){return new Promise((e,n)=>{function s(){jo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jo(),n(st(t,"network-request-failed"))},timeout:bg.get()})}if(rt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(rt().gapi?.load)s();else{const r=dp("iframefcb");return rt()[r]=()=>{gapi.load?s():n(st(t,"network-request-failed"))},Jc(`${fp()}?onload=${r}`).catch(i=>n(i))}}).catch(e=>{throw Ns=null,e})}let Ns=null;function Eg(t){return Ns=Ns||wg(t),Ns}/**
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
 */const Ig=new ps(5e3,15e3),Sg="__/auth/iframe",Tg="emulator/auth/iframe",Cg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ag=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rg(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ri(e,Tg):`https://${t.config.authDomain}/${Sg}`,s={apiKey:e.apiKey,appName:t.name,v:hs},r=Ag.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ds(s).slice(1)}`}async function Pg(t){const e=await Eg(t),n=rt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:Rg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=st(t,"network-request-failed"),a=rt().setTimeout(()=>{i(o)},Ig.get());function c(){rt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const xg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kg=500,Og=600,Ng="_blank",Dg="http://localhost";class Wo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mg(t,e,n,s=kg,r=Og){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...xg,width:s.toString(),height:r.toString(),top:i,left:o},l=Te().toLowerCase();n&&(a=Bc(l)?Ng:n),Hc(l)&&(e=e||Dg,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,b])=>`${h}${g}=${b},`,"");if(np(l)&&a!=="_self")return Lg(e||"",a),new Wo(null);const f=window.open(e||"",a,u);j(f,t,"popup-blocked");try{f.focus()}catch{}return new Wo(f)}function Lg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Ug="__/auth/handler",$g="emulator/auth/handler",Fg=encodeURIComponent("fac");async function Ko(t,e,n,s,r,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:hs,eventId:r};if(e instanceof Qc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Id(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof ms){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Fg}=${encodeURIComponent(c)}`:"";return`${Hg(t)}?${ds(a).slice(1)}${l}`}function Hg({config:t}){return t.emulator?Ri(t,$g):`https://${t.authDomain}/${Ug}`}/**
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
 */const Or="webStorageSupport";class Vg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=il,this._completeRedirectFn=fg,this._overrideRedirectResult=cg}async _openPopup(e,n,s,r){bt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Ko(e,n,s,Zr(),r);return Mg(e,i,Ni())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Ko(e,n,s,Zr(),r);return Wp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(bt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Pg(e),s=new hg(e);return n.register("authEvent",r=>(j(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Or,{type:Or},r=>{const i=r?.[0]?.[Or];i!==void 0&&n(!!i),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qc()||Vc()||xi()}}const Bg=Vg;var zo="@firebase/auth",qo="1.11.0";/**
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
 */class jg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Wg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Kg(t){ts(new En("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gc(t)},l=new cp(s,r,i,c);return yp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ts(new En("auth-internal",e=>{const n=Zt(e.getProvider("auth").getImmediate());return(s=>new jg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(zo,qo,Wg(t)),gn(zo,qo,"esm2020")}/**
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
 */const zg=300,qg=Sc("authIdTokenMaxAge")||zg;let Go=null;const Gg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>qg)return;const r=n?.token;Go!==r&&(Go=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Jg(t=Th()){const e=Rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_p(t,{popupRedirectResolver:Bg,persistence:[Zp,Vp,il]}),s=Sc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Gg(i.toString());Lp(n,o,()=>o(n.currentUser)),Mp(n,a=>o(a))}}const r=ad("auth");return r&&vp(n,`http://${r}`),n}function Yg(){return document.getElementsByTagName("head")?.[0]??document}lp({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=st("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Yg().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Kg("Browser");var Xg="firebase",Qg="12.2.1";/**
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
 */gn(Xg,Qg,"app");const Zg={apiKey:"AIzaSyAPw8mtj5DM7z9g5MHOfHhDPuqJl4RmX3k",authDomain:"sdgs-journey.firebaseapp.com",projectId:"sdgs-journey",storageBucket:"sdgs-journey.firebasestorage.app",messagingSenderId:"233910289851",appId:"1:233910289851:web:e2641b83540889819a309e"},em=Pc(Zg),Ss=Jg(em),Kt=fe(!1),J=fe(null),Mi=()=>{const t={admin:{account:"admin",password:"admin"},teacher:{account:"tc",password:"tc"}},e=async(g,b,I,$)=>{try{const P=await Np(Ss,b,I),C=await P.user.getIdToken();return console.log("Firebase ID Token:",C),J.value={email:P.user.email,role:"teacher",username:g,displayName:"老師",uid:P.user.uid,school:$},Kt.value=!0,localStorage.setItem("auth_token",C),localStorage.setItem("user_data",JSON.stringify(J.value)),{success:!0,user:J.value}}catch(P){return console.error("Registration Error:",P),{success:!1,message:P.message}}},n=async(g,b)=>{try{const I=await Dp(Ss,g,b),$=await I.user.getIdToken(),P=localStorage.getItem("user_data");let C=null;return P&&(C=JSON.parse(P),C.uid===I.user.uid?J.value=C:localStorage.removeItem("user_data")),(!J.value||J.value.uid!==I.user.uid)&&(J.value={email:I.user.email,role:"teacher",displayName:"老師",uid:I.user.uid,school:C?C.school:null}),Kt.value=!0,localStorage.setItem("auth_token",$),localStorage.setItem("user_data",JSON.stringify(J.value)),{success:!0}}catch(I){return console.error("Login Error:",I),{success:!1,message:I.message}}},s=async(g,b)=>await n(g,b),r=(g,b={})=>{switch(Kt.value=!0,g){case"admin":J.value={account:b.account||"admin",role:"admin",displayName:"管理員",icon:"fa-user-shield"},localStorage.setItem("auth_token","admin_token"),localStorage.setItem("user_data",JSON.stringify(J.value));break;case"teacher":J.value={account:b.account||"teacher",role:"teacher",displayName:"老師",icon:"fa-user-tie"},localStorage.setItem("auth_token","teacher_token"),localStorage.setItem("user_data",JSON.stringify(J.value));break;case"student":J.value={account:b.name||"學生",role:"student",displayName:"學生",icon:"fa-user-graduate"},localStorage.setItem("auth_token","student_token"),localStorage.setItem("user_data",JSON.stringify(J.value));break;case"visitor":J.value={account:"訪客",role:"visitor",displayName:"訪客",icon:"fa-user"},localStorage.setItem("auth_token","visitor_token"),localStorage.setItem("user_data",JSON.stringify(J.value));break}return{success:!0}},i=(g,b)=>g===t.admin.account&&b===t.admin.password?r("admin",{account:g}):{success:!1,message:"帳號或密碼錯誤"},o=(g,b)=>g===t.teacher.account&&b===t.teacher.password?r("teacher",{account:g}):{success:!1,message:"帳號或密碼錯誤"},a=async()=>{try{await $p(Ss)}catch(g){console.error("Sign out error",g)}Kt.value=!1,J.value=null,localStorage.removeItem("auth_token"),localStorage.removeItem("user_data")},c=()=>{Up(Ss,g=>{if(g){Kt.value=!0;const b=localStorage.getItem("user_data");b?J.value=JSON.parse(b):(J.value={email:g.email,uid:g.uid,role:"teacher",displayName:"老師"},localStorage.setItem("user_data",JSON.stringify(J.value)),g.getIdToken().then(I=>{localStorage.setItem("auth_token",I)}))}else Kt.value=!1,J.value=null,localStorage.removeItem("auth_token"),localStorage.removeItem("user_data")})},l=Se(()=>J.value&&J.value.role==="admin"),u=Se(()=>J.value&&J.value.role==="teacher"),f=Se(()=>J.value&&J.value.role==="student"),h=Se(()=>J.value&&J.value.role==="visitor");return{isAuthenticated:Kt,user:J,isAdmin:l,isTeacher:u,isStudent:f,isVisitor:h,selectRole:r,adminLogin:i,teacherLogin:o,logout:a,checkAuth:c,registerWithEmailAndPassword:e,loginWithEmailAndPassword:s,loginWithCredentials:n}};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const on=typeof document<"u";function dl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&dl(t.default)}const Y=Object.assign;function Nr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ke(r)?r.map(t):t(r)}return n}const zn=()=>{},Ke=Array.isArray,hl=/#/g,nm=/&/g,sm=/\//g,rm=/=/g,im=/\?/g,pl=/\+/g,om=/%5B/g,am=/%5D/g,gl=/%5E/g,cm=/%60/g,ml=/%7B/g,lm=/%7C/g,_l=/%7D/g,um=/%20/g;function Li(t){return encodeURI(""+t).replace(lm,"|").replace(om,"[").replace(am,"]")}function fm(t){return Li(t).replace(ml,"{").replace(_l,"}").replace(gl,"^")}function si(t){return Li(t).replace(pl,"%2B").replace(um,"+").replace(hl,"%23").replace(nm,"%26").replace(cm,"`").replace(ml,"{").replace(_l,"}").replace(gl,"^")}function dm(t){return si(t).replace(rm,"%3D")}function hm(t){return Li(t).replace(hl,"%23").replace(im,"%3F")}function pm(t){return t==null?"":hm(t).replace(sm,"%2F")}function is(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const gm=/\/$/,mm=t=>t.replace(gm,"");function Dr(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=bm(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:is(o)}}function _m(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ym(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&In(e.matched[s],n.matched[r])&&yl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function In(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vm(t[n],e[n]))return!1;return!0}function vm(t,e){return Ke(t)?Yo(t,e):Ke(e)?Yo(e,t):t===e}function Yo(t,e){return Ke(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function bm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var os;(function(t){t.pop="pop",t.push="push"})(os||(os={}));var qn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qn||(qn={}));function wm(t){if(!t)if(on){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mm(t)}const Em=/^[^#]+#/;function Im(t,e){return t.replace(Em,"#")+e}function Sm(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const pr=()=>({left:window.scrollX,top:window.scrollY});function Tm(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Sm(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Xo(t,e){return(history.state?history.state.position-e:-1)+t}const ri=new Map;function Cm(t,e){ri.set(t,e)}function Am(t){const e=ri.get(t);return ri.delete(t),e}let Rm=()=>location.protocol+"//"+location.host;function vl(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Jo(c,"")}return Jo(n,t)+s+r}function Pm(t,e,n,s){let r=[],i=[],o=null;const a=({state:h})=>{const g=vl(t,location),b=n.value,I=e.value;let $=0;if(h){if(n.value=g,e.value=h,o&&o===b){o=null;return}$=I?h.position-I.position:0}else s(g);r.forEach(P=>{P(n.value,b,{delta:$,type:os.pop,direction:$?$>0?qn.forward:qn.back:qn.unknown})})};function c(){o=n.value}function l(h){r.push(h);const g=()=>{const b=r.indexOf(h);b>-1&&r.splice(b,1)};return i.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(Y({},h.state,{scroll:pr()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Qo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?pr():null}}function xm(t){const{history:e,location:n}=window,s={value:vl(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Rm()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=Y({},e.state,Qo(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Y({},r.value,e.state,{forward:c,scroll:pr()});i(u.current,u,!0);const f=Y({},Qo(s.value,c,null),{position:u.position+1},l);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function km(t){t=wm(t);const e=xm(t),n=Pm(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Y({location:"",base:t,go:s,createHref:Im.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Om(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),km(t)}function Nm(t){return typeof t=="string"||t&&typeof t=="object"}function bl(t){return typeof t=="string"||typeof t=="symbol"}const wl=Symbol("");var Zo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zo||(Zo={}));function Sn(t,e){return Y(new Error,{type:t,[wl]:!0},e)}function ct(t,e){return t instanceof Error&&wl in t&&(e==null||!!(t.type&e))}const ea="[^/]+?",Dm={sensitive:!1,strict:!1,start:!0,end:!0},Mm=/[.+*?^${}()[\]/\\]/g;function Lm(t,e){const n=Y({},Dm,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let f=0;f<l.length;f++){const h=l[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Mm,"\\$&"),g+=40;else if(h.type===1){const{value:b,repeatable:I,optional:$,regexp:P}=h;i.push({name:b,repeatable:I,optional:$});const C=P||ea;if(C!==ea){g+=10;try{new RegExp(`(${C})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${b}" (${C}): `+D.message)}}let M=I?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;f||(M=$&&l.length<2?`(?:/${M})`:"/"+M),$&&(M+="?"),r+=M,g+=20,$&&(g+=-8),I&&(g+=-20),C===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",b=i[h-1];f[b.name]=g&&b.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:b,repeatable:I,optional:$}=g,P=b in l?l[b]:"";if(Ke(P)&&!I)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const C=Ke(P)?P.join("/"):P;if(!C)if($)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=C}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Um(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function El(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Um(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(ta(s))return 1;if(ta(r))return-1}return r.length-s.length}function ta(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $m={type:0,value:""},Fm=/[a-zA-Z0-9_]/;function Hm(t){if(!t)return[[]];if(t==="/")return[[$m]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:Fm.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),r}function Vm(t,e,n){const s=Lm(Hm(t.path),n),r=Y(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Bm(t,e){const n=[],s=new Map;e=ia({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,h,g){const b=!g,I=sa(f);I.aliasOf=g&&g.record;const $=ia(e,f),P=[I];if("alias"in f){const D=typeof f.alias=="string"?[f.alias]:f.alias;for(const B of D)P.push(sa(Y({},I,{components:g?g.record.components:I.components,path:B,aliasOf:g?g.record:I})))}let C,M;for(const D of P){const{path:B}=D;if(h&&B[0]!=="/"){const U=h.record.path,z=U[U.length-1]==="/"?"":"/";D.path=h.record.path+(B&&z+B)}if(C=Vm(D,h,$),g?g.alias.push(C):(M=M||C,M!==C&&M.alias.push(C),b&&f.name&&!ra(C)&&o(f.name)),Il(C)&&c(C),I.children){const U=I.children;for(let z=0;z<U.length;z++)i(U[z],C,g&&g.children[z])}g=g||C}return M?()=>{o(M)}:zn}function o(f){if(bl(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const h=Km(f,n);n.splice(h,0,f),f.record.name&&!ra(f)&&s.set(f.record.name,f)}function l(f,h){let g,b={},I,$;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw Sn(1,{location:f});$=g.record.name,b=Y(na(h.params,g.keys.filter(M=>!M.optional).concat(g.parent?g.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&na(f.params,g.keys.map(M=>M.name))),I=g.stringify(b)}else if(f.path!=null)I=f.path,g=n.find(M=>M.re.test(I)),g&&(b=g.parse(I),$=g.record.name);else{if(g=h.name?s.get(h.name):n.find(M=>M.re.test(h.path)),!g)throw Sn(1,{location:f,currentLocation:h});$=g.record.name,b=Y({},h.params,f.params),I=g.stringify(b)}const P=[];let C=g;for(;C;)P.unshift(C.record),C=C.parent;return{name:$,path:I,params:b,matched:P,meta:Wm(P)}}t.forEach(f=>i(f));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function na(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function sa(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:jm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function ra(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Wm(t){return t.reduce((e,n)=>Y(e,n.meta),{})}function ia(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Km(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;El(t,e[i])<0?s=i:n=i+1}const r=zm(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function zm(t){let e=t;for(;e=e.parent;)if(Il(e)&&El(t,e)===0)return e}function Il({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function qm(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(pl," "),o=i.indexOf("="),a=is(o<0?i:i.slice(0,o)),c=o<0?null:is(i.slice(o+1));if(a in e){let l=e[a];Ke(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function oa(t){let e="";for(let n in t){const s=t[n];if(n=dm(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ke(s)?s.map(i=>i&&si(i)):[s&&si(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Gm(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ke(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Jm=Symbol(""),aa=Symbol(""),gr=Symbol(""),Sl=Symbol(""),ii=Symbol("");function Nn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pt(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(Sn(4,{from:n,to:e})):h instanceof Error?c(h):Nm(h)?c(Sn(2,{from:e,to:h})):(o&&s.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(s&&s.instances[r],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(h=>c(h))})}function Mr(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(dl(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Pt(u,n,s,o,a,r))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=tm(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Pt(g,n,s,o,a,r)()}))}}return i}function ca(t){const e=nt(gr),n=nt(Sl),s=Se(()=>{const c=ke(t.to);return e.resolve(c)}),r=Se(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(In.bind(null,u));if(h>-1)return h;const g=la(c[l-2]);return l>1&&la(u)===g&&f[f.length-1].path!==g?f.findIndex(In.bind(null,c[l-2])):h}),i=Se(()=>r.value>-1&&e_(n.params,s.value.params)),o=Se(()=>r.value>-1&&r.value===n.matched.length-1&&yl(n.params,s.value.params));function a(c={}){if(Zm(c)){const l=e[ke(t.replace)?"replace":"push"](ke(t.to)).catch(zn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:s,href:Se(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function Ym(t){return t.length===1?t[0]:t}const Xm=Wa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ca,setup(t,{slots:e}){const n=sr(ca(t)),{options:s}=nt(gr),r=Se(()=>({[ua(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ua(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Ym(e.default(n));return t.custom?i:mc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Qm=Xm;function Zm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function e_(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ke(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function la(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ua=(t,e,n)=>t??e??n,t_=Wa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=nt(ii),r=Se(()=>t.route||s.value),i=nt(aa,0),o=Se(()=>{let l=ke(i);const{matched:u}=r.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Se(()=>r.value.matched[o.value]);Bn(aa,Se(()=>o.value+1)),Bn(Jm,a),Bn(ii,r);const c=fe();return Cs(()=>[c.value,a.value,t.name],([l,u,f],[h,g,b])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!In(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return fa(n.default,{Component:h,route:l});const g=f.props[u],b=g?g===!0?l.params:typeof g=="function"?g(l):g:null,$=mc(h,Y({},b,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return fa(n.default,{Component:$,route:l})||$}}});function fa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const n_=t_;function s_(t){const e=Bm(t.routes,t),n=t.parseQuery||qm,s=t.stringifyQuery||oa,r=t.history,i=Nn(),o=Nn(),a=Nn(),c=iu(Tt);let l=Tt;on&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Nr.bind(null,v=>""+v),f=Nr.bind(null,pm),h=Nr.bind(null,is);function g(v,N){let k,L;return bl(v)?(k=e.getRecordMatcher(v),L=N):L=v,e.addRoute(L,k)}function b(v){const N=e.getRecordMatcher(v);N&&e.removeRoute(N)}function I(){return e.getRoutes().map(v=>v.record)}function $(v){return!!e.getRecordMatcher(v)}function P(v,N){if(N=Y({},N||c.value),typeof v=="string"){const m=Dr(n,v,N.path),y=e.resolve({path:m.path},N),w=r.createHref(m.fullPath);return Y(m,y,{params:h(y.params),hash:is(m.hash),redirectedFrom:void 0,href:w})}let k;if(v.path!=null)k=Y({},v,{path:Dr(n,v.path,N.path).path});else{const m=Y({},v.params);for(const y in m)m[y]==null&&delete m[y];k=Y({},v,{params:f(m)}),N.params=f(N.params)}const L=e.resolve(k,N),te=v.hash||"";L.params=u(h(L.params));const d=_m(s,Y({},v,{hash:fm(te),path:L.path})),p=r.createHref(d);return Y({fullPath:d,hash:te,query:s===oa?Gm(v.query):v.query||{}},L,{redirectedFrom:void 0,href:p})}function C(v){return typeof v=="string"?Dr(n,v,c.value.path):Y({},v)}function M(v,N){if(l!==v)return Sn(8,{from:N,to:v})}function D(v){return z(v)}function B(v){return D(Y(C(v),{replace:!0}))}function U(v){const N=v.matched[v.matched.length-1];if(N&&N.redirect){const{redirect:k}=N;let L=typeof k=="function"?k(v):k;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=C(L):{path:L},L.params={}),Y({query:v.query,hash:v.hash,params:L.path!=null?{}:v.params},L)}}function z(v,N){const k=l=P(v),L=c.value,te=v.state,d=v.force,p=v.replace===!0,m=U(k);if(m)return z(Y(C(m),{state:typeof m=="object"?Y({},te,m.state):te,force:d,replace:p}),N||k);const y=k;y.redirectedFrom=N;let w;return!d&&ym(s,L,k)&&(w=Sn(16,{to:y,from:L}),qe(L,L,!0,!1)),(w?Promise.resolve(w):Ce(y,L)).catch(_=>ct(_)?ct(_,2)?_:It(_):G(_,y,L)).then(_=>{if(_){if(ct(_,2))return z(Y({replace:p},C(_.to),{state:typeof _.to=="object"?Y({},te,_.to.state):te,force:d}),N||y)}else _=Bt(y,L,!0,p,te);return de(y,L,_),_})}function pe(v,N){const k=M(v,N);return k?Promise.reject(k):Promise.resolve()}function R(v){const N=nn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(v):v()}function Ce(v,N){let k;const[L,te,d]=r_(v,N);k=Mr(L.reverse(),"beforeRouteLeave",v,N);for(const m of L)m.leaveGuards.forEach(y=>{k.push(Pt(y,v,N))});const p=pe.bind(null,v,N);return k.push(p),Le(k).then(()=>{k=[];for(const m of i.list())k.push(Pt(m,v,N));return k.push(p),Le(k)}).then(()=>{k=Mr(te,"beforeRouteUpdate",v,N);for(const m of te)m.updateGuards.forEach(y=>{k.push(Pt(y,v,N))});return k.push(p),Le(k)}).then(()=>{k=[];for(const m of d)if(m.beforeEnter)if(Ke(m.beforeEnter))for(const y of m.beforeEnter)k.push(Pt(y,v,N));else k.push(Pt(m.beforeEnter,v,N));return k.push(p),Le(k)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),k=Mr(d,"beforeRouteEnter",v,N,R),k.push(p),Le(k))).then(()=>{k=[];for(const m of o.list())k.push(Pt(m,v,N));return k.push(p),Le(k)}).catch(m=>ct(m,8)?m:Promise.reject(m))}function de(v,N,k){a.list().forEach(L=>R(()=>L(v,N,k)))}function Bt(v,N,k,L,te){const d=M(v,N);if(d)return d;const p=N===Tt,m=on?history.state:{};k&&(L||p?r.replace(v.fullPath,Y({scroll:p&&m&&m.scroll},te)):r.push(v.fullPath,te)),c.value=v,qe(v,N,k,p),It()}let ze;function An(){ze||(ze=r.listen((v,N,k)=>{if(!ys.listening)return;const L=P(v),te=U(L);if(te){z(Y(te,{replace:!0,force:!0}),L).catch(zn);return}l=L;const d=c.value;on&&Cm(Xo(d.fullPath,k.delta),pr()),Ce(L,d).catch(p=>ct(p,12)?p:ct(p,2)?(z(Y(C(p.to),{force:!0}),L).then(m=>{ct(m,20)&&!k.delta&&k.type===os.pop&&r.go(-1,!1)}).catch(zn),Promise.reject()):(k.delta&&r.go(-k.delta,!1),G(p,L,d))).then(p=>{p=p||Bt(L,d,!1),p&&(k.delta&&!ct(p,8)?r.go(-k.delta,!1):k.type===os.pop&&ct(p,20)&&r.go(-1,!1)),de(L,d,p)}).catch(zn)}))}let en=Nn(),he=Nn(),ee;function G(v,N,k){It(v);const L=he.list();return L.length?L.forEach(te=>te(v,N,k)):console.error(v),Promise.reject(v)}function ot(){return ee&&c.value!==Tt?Promise.resolve():new Promise((v,N)=>{en.add([v,N])})}function It(v){return ee||(ee=!v,An(),en.list().forEach(([N,k])=>v?k(v):N()),en.reset()),v}function qe(v,N,k,L){const{scrollBehavior:te}=t;if(!on||!te)return Promise.resolve();const d=!k&&Am(Xo(v.fullPath,0))||(L||!k)&&history.state&&history.state.scroll||null;return _i().then(()=>te(v,N,d)).then(p=>p&&Tm(p)).catch(p=>G(p,v,N))}const Ae=v=>r.go(v);let tn;const nn=new Set,ys={currentRoute:c,listening:!0,addRoute:g,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:$,getRoutes:I,resolve:P,options:t,push:D,replace:B,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:he.add,isReady:ot,install(v){const N=this;v.component("RouterLink",Qm),v.component("RouterView",n_),v.config.globalProperties.$router=N,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ke(c)}),on&&!tn&&c.value===Tt&&(tn=!0,D(r.location).catch(te=>{}));const k={};for(const te in Tt)Object.defineProperty(k,te,{get:()=>c.value[te],enumerable:!0});v.provide(gr,N),v.provide(Sl,Ma(k)),v.provide(ii,c);const L=v.unmount;nn.add(v),v.unmount=function(){nn.delete(v),nn.size<1&&(l=Tt,ze&&ze(),ze=null,c.value=Tt,tn=!1,ee=!1),L()}}};function Le(v){return v.reduce((N,k)=>N.then(()=>R(k)),Promise.resolve())}return ys}function r_(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>In(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>In(l,c))||r.push(c))}return[n,s,r]}function i_(){return nt(gr)}function o_(t,e){const n=s=>{t.value&&!t.value.contains(s.target)&&e()};or(()=>document.addEventListener("mousedown",n)),bi(()=>document.removeEventListener("mousedown",n))}const a_={key:0,class:"loading-overlay text-pblue-500"},c_={class:"train-track"},l_={key:0,class:"fallback-train"},u_={class:"p-3"},f_={key:0},d_={key:1},h_={class:"p-3 md:p-3"},p_={key:0},g_={key:1},m_={class:"p-3"},__={key:0},y_={key:1},v_={class:"px-4 text-rice-500 text-shadow-3d"},b_={key:0,class:"p-3"},w_={key:0,class:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20 text-gray-800"},E_={class:"px-4 py-2"},I_={class:"text-sm text-gray-500"},S_={__name:"App",setup(t){const{isAuthenticated:e,user:n,isAdmin:s,isTeacher:r,isStudent:i,isVisitor:o,logout:a,checkAuth:c}=Mi(),l=i_(),u=fe(!0),f=fe(!1),h=fe(!1),g=fe(!0),b=fe(0),I=fe(!1),$=fe(null);o_($,()=>{I.value=!1});const P=()=>{console.log("Train image failed to load"),f.value=!0},C=()=>{console.log("Train image loaded successfully"),f.value=!1},M=B=>{const U=B.target.scrollTop===void 0?window.scrollY:B.target.scrollTop;U<100||h.value?g.value=!0:U>b.value?g.value=!1:g.value=!0,b.value=U<0?0:U},D=()=>{a(),h.value=!1,I.value=!1,l.push("/")};return Bn("handleAppScroll",M),or(()=>{c(),window.addEventListener("scroll",M),setTimeout(()=>{u.value=!1},1e3)}),bi(()=>{window.removeEventListener("scroll",M)}),(B,U)=>{const z=Hr("router-link"),pe=Hr("router-view");return ae(),le(De,null,[u.value&&B.$route.path!=="/"&&B.$route.path!=="/about"?(ae(),le("div",a_,[E("div",c_,[E("img",{src:Yf,class:"loader",alt:"Loading...",onError:P,onLoad:C},null,32),f.value?(ae(),le("div",l_,"🚂")):Fe("",!0)]),U[8]||(U[8]=E("p",null,"載入中...",-1))])):Fe("",!0),E("nav",{class:Ee(["fixed top-0 left-0 z-50 w-full p-2 text-rice-500 md:text-4xl flex flex-row justify-between items-center transition-transform duration-300 ease-in-out",[B.$route.path!=="/"?"bg-header":"",g.value||h.value?"translate-y-0":"-translate-y-full",{"pointer-events-none":!g.value&&!h.value}]])},[ce(z,{to:"/",onClick:U[0]||(U[0]=R=>h.value=!1),class:"flex flex-row items-center gap-2"},{default:Ze(()=>[E("img",{src:Xf,alt:"School Logo",class:Ee([{hidden:B.$route.path==="/"},"relative z-20 inset-0 w-1/11 object-center md:w-1/20"])},null,2),E("div",{class:Ee([{hidden:B.$route.path==="/"},"relative z-20 my-auto md:text-3xl text-2xl"])}," 彰化市平和國民小學 ",2)]),_:1}),B.$route.path!=="/"?(ae(),le("button",{key:0,onClick:U[1]||(U[1]=R=>h.value=!h.value),class:"md:hidden z-20"},[...U[9]||(U[9]=[E("i",{class:"fa-solid fa-bars"},null,-1)])])):Fe("",!0),B.$route.path!=="/"?(ae(),le("div",{key:1,class:Ee([["fixed top-0 left-0 w-full flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out md:relative md:h-[4rem] md:w-auto md:bg-transparent md:flex-row md:gap-3 text-xl md:text-2xl md:whitespace-nowrap",h.value?"h-screen":"h-0",h.value?"translate-x-0":"-translate-x-full md:translate-x-0",h.value?"bg-[url(@/assets/images/Mobile/mobile_Bcakground_2.png)] bg-cover bg-center overflow-hidden":""],"md:text-shadow-none"])},[U[14]||(U[14]=E("div",{class:"absolute z-[-10] inset-0 bg-black/40 md:hidden"},null,-1)),ce(z,{to:"/",class:Ee(["px-8 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":B.$route.path==="/"}]),onClick:U[2]||(U[2]=R=>h.value=!1)},{default:Ze(()=>[...U[10]||(U[10]=[E("div",{class:"p-3"},"首頁",-1)])]),_:1},8,["class"]),ce(z,{to:"/about",class:Ee(["px-4 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":B.$route.path==="/about"}]),onClick:U[3]||(U[3]=R=>h.value=!1)},{default:Ze(()=>[E("div",u_,[B.$route.path!=="/about"?(ae(),le("span",f_,"校園探索")):(ae(),le("span",d_,"EXPLORATION"))])]),_:1},8,["class"]),ce(z,{to:"/actions",class:Ee(["px-4 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":B.$route.path==="/actions"}]),onClick:U[4]||(U[4]=R=>h.value=!1)},{default:Ze(()=>[E("div",h_,[B.$route.path!=="/actions"?(ae(),le("span",p_,"SDGs行動")):(ae(),le("span",g_,"SDGs ACTION"))])]),_:1},8,["class"]),ce(z,{to:"/sdgs",class:Ee(["px-4 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":B.$route.path==="/sdgs"||B.$route.path.includes("/story")}]),onClick:U[5]||(U[5]=R=>h.value=!1)},{default:Ze(()=>[E("div",m_,[B.$route.path!=="/sdgs"&&!B.$route.path.includes("/story")?(ae(),le("span",__,"SDGs成果")):(ae(),le("span",y_,"SDGs RESULT"))])]),_:1},8,["class"]),E("div",v_,[ke(e)?(ae(),le("div",{key:1,class:"relative",ref_key:"profileMenu",ref:$},[E("button",{onClick:U[7]||(U[7]=R=>I.value=!I.value),class:"min-w-10"},[...U[12]||(U[12]=[E("img",{src:Qf,alt:"User Profile",class:"w-10 h-10 rounded-full object-cover"},null,-1)])]),I.value?(ae(),le("div",w_,[E("div",E_,[E("p",{class:Ee(["text-sm font-medium",{"text-red-500":ke(s),"text-blue-500":ke(r),"text-green-500":ke(i),"text-gray-500":ke(o)}])},Gt(ke(n)?.displayName),3),E("p",I_,Gt(ke(n)?.username),1)]),U[13]||(U[13]=E("div",{class:"border-t border-gray-200"},null,-1)),E("button",{onClick:D,class:"w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"}," 登出 ")])):Fe("",!0)],512)):(ae(),le("div",b_,[ce(z,{to:"/",onClick:U[6]||(U[6]=R=>h.value=!1),class:"hover:text-orange-300 transition-colors flex items-center gap-2"},{default:Ze(()=>[...U[11]||(U[11]=[E("i",{class:"fas fa-user-plus"},null,-1),an(" 選擇身分 ",-1)])]),_:1})]))])],2)):Fe("",!0)],2),ce(pe)],64)}}},T_="modulepreload",C_=function(t){return"/Pinghe/"+t},da={},Ct=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=c(n.map(l=>{if(l=C_(l),l in da)return;da[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":T_,u||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((g,b)=>{h.addEventListener("load",g),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},A_="/Pinghe/assets/Title-DP11h-Zm.png",R_="/Pinghe/assets/Train_Smoke-CwlFHqdb.gif",P_=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},x_={class:"relative w-screen h-screen flex flex-col gap-12 lg:gap-0 max-[380px]:gap-1 justify-start items-center lg:flex-row text-center bg-[url('@/assets/images/Mobile/Mobile_MainPage_Background2.png')] bg-cover bg-center overflow-hidden lg:bg-[url('@/assets/images/MainPage_Pic.webp'),_url('@/assets/images/MainPage_Background_T.png')] lg:[background-repeat:no-repeat,no-repeat] lg:[background-position:right,center] lg:[background-size:contain,cover]"},k_={class:"order-1 lg:order-2 z-10 lg:w-1/2 flex justify-center items-center pt-25 lg:pt-0 lg:h-full lg:items-start lg:translate-y-18"},O_={class:"order-2 lg:order-1 z-20 lg:w-1/2 flex justify-center items-center lg:h-full lg:items-start lg:translate-66 lg:translate-x-78"},N_={class:"relative group self-stretch"},D_={class:"relative group self-stretch"},M_={class:"relative group self-stretch"},L_={class:"w-full absolute bottom-0 lg:-bottom-15 left-0 lg:w-1/2 pointer-events-non"},U_=["src"],$_={key:0,class:"fixed inset-0 bg-black/80 flex items-center justify-center z-50"},F_={key:1,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-gray-700"},H_={class:"bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"},V_={key:0,class:"text-red-600 text-sm"},B_={class:"flex gap-3"},j_=["disabled"],W_={key:2,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-gray-700"},K_={class:"bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"},z_={key:0,class:"text-red-600 text-sm"},q_={class:"flex gap-3"},G_=["disabled"],J_={key:3,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},Y_={class:"bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"},X_={__name:"Home",setup(t){const{isAuthenticated:e,selectRole:n,adminLogin:s,teacherLogin:r,checkAuth:i}=Mi(),o=fe(!1),a=fe(!1),c=fe(!1),l=fe(!1),u=fe(!1),f=fe(""),h=fe({username:"",password:""}),g=fe({username:"",password:""}),b=fe(!1),I=fe("");or(()=>{setTimeout(()=>{o.value=!0},100),i(),e.value||setTimeout(()=>{a.value=!0},1500)});const $=()=>{a.value=!1,c.value=!0},P=()=>{a.value=!1,l.value=!0},C=()=>{a.value=!1,u.value=!0},M=()=>{n("visitor"),a.value=!1},D=async()=>{b.value=!0,I.value="";const{success:pe,message:R}=s(h.value.username,h.value.password);b.value=!1,pe?(c.value=!1,h.value={username:"",password:""}):I.value=R},B=async()=>{b.value=!0,I.value="";const{success:pe,message:R}=r(g.value.username,g.value.password);b.value=!1,pe?(l.value=!1,g.value={username:"",password:""}):I.value=R},U=()=>{n("student",{name:f.value}),u.value=!1,f.value=""},z=()=>{c.value=!1,l.value=!1,u.value=!1,a.value=!0,h.value={username:"",password:""},g.value={username:"",password:""},f.value="",I.value=""};return(pe,R)=>{const Ce=Hr("router-link");return ae(),le("main",x_,[E("section",k_,[E("div",{class:Ee([["transition-all duration-3000 ease-out",o.value?"opacity-100":"opacity-0"],"w-full flex justify-center lg:justify-start"])},[...R[5]||(R[5]=[E("picture",null,[E("img",{src:A_,class:"pointer-events-none select-none max-w-77 lg:max-w-150",alt:"Pinghe_Text_H"})],-1)])],2)]),E("section",O_,[E("div",{class:Ee([["transition-all duration-3000 ease-out",o.value?"opacity-100":"opacity-0"],"inline-flex flex-col gap-4 lg:gap-10 items-start justify-center text-xl lg:text-4xl text-black"])},[E("div",N_,[ce(Ce,{to:"/about",class:"relative block ml-22 mr-50 lg:ml-10 lg:mr-50 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"},{default:Ze(()=>[...R[6]||(R[6]=[E("span",{class:"block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"},"校園探索",-1),E("span",{class:"absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"},"Explore →",-1)])]),_:1})]),E("div",D_,[ce(Ce,{to:"/actions",class:"relative block ml-36 mr-36 lg:ml-30 lg:mr-30 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"},{default:Ze(()=>[...R[7]||(R[7]=[E("span",{class:"block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"},"SDGs行動",-1),E("span",{class:"absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"},"Actions →",-1)])]),_:1})]),E("div",M_,[ce(Ce,{to:"/sdgs",class:"relative block ml-50 mr-22 lg:ml-60 lg:mr-0 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"},{default:Ze(()=>[...R[8]||(R[8]=[E("span",{class:"block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"},"SDGs成果",-1),E("span",{class:"absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"},"Results →",-1)])]),_:1})])],2)]),E("div",L_,[E("img",{src:ke(R_),class:"select-none animate-train-enter",alt:"Pinghe_Train_Smoke"},null,8,U_)]),a.value?(ae(),le("div",$_,[E("div",{class:"bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"},[R[13]||(R[13]=E("h2",{class:"text-2xl font-bold text-center mb-6 text-gray-800"}," 請選擇您的身分 ",-1)),E("div",{class:"space-y-4"},[E("button",{onClick:$,class:"w-full p-4 border-2 border-red-200 rounded-lg hover:border-red-400 hover:bg-red-50 transition-colors group"},[...R[9]||(R[9]=[Es('<div class="flex items-center gap-4" data-v-4ce4dfe9><div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white group-hover:bg-red-600" data-v-4ce4dfe9><i class="fas fa-user-shield text-xl" data-v-4ce4dfe9></i></div><div class="text-left" data-v-4ce4dfe9><h3 class="text-lg font-semibold text-gray-800" data-v-4ce4dfe9>管理員</h3><p class="text-sm text-gray-600" data-v-4ce4dfe9>系統管理員權限</p></div></div>',1)])]),E("button",{onClick:P,class:"w-full p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors group"},[...R[10]||(R[10]=[Es('<div class="flex items-center gap-4" data-v-4ce4dfe9><div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white group-hover:bg-blue-600" data-v-4ce4dfe9><i class="fas fa-user-tie text-xl" data-v-4ce4dfe9></i></div><div class="text-left" data-v-4ce4dfe9><h3 class="text-lg font-semibold text-gray-800" data-v-4ce4dfe9>老師</h3><p class="text-sm text-gray-600" data-v-4ce4dfe9>具有編輯和管理權限</p></div></div>',1)])]),E("button",{onClick:C,class:"w-full p-4 border-2 border-green-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors group"},[...R[11]||(R[11]=[Es('<div class="flex items-center gap-4" data-v-4ce4dfe9><div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:bg-green-600" data-v-4ce4dfe9><i class="fas fa-user-graduate text-xl" data-v-4ce4dfe9></i></div><div class="text-left" data-v-4ce4dfe9><h3 class="text-lg font-semibold text-gray-800" data-v-4ce4dfe9>學生</h3><p class="text-sm text-gray-600" data-v-4ce4dfe9>瀏覽內容並參與互動</p></div></div>',1)])]),E("button",{onClick:M,class:"w-full p-4 border-2 border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors group"},[...R[12]||(R[12]=[Es('<div class="flex items-center gap-4" data-v-4ce4dfe9><div class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white group-hover:bg-gray-600" data-v-4ce4dfe9><i class="fas fa-user text-xl" data-v-4ce4dfe9></i></div><div class="text-left" data-v-4ce4dfe9><h3 class="text-lg font-semibold text-gray-800" data-v-4ce4dfe9>訪客</h3><p class="text-sm text-gray-600" data-v-4ce4dfe9>瀏覽所有公開內容</p></div></div>',1)])])])])])):Fe("",!0),c.value?(ae(),le("div",F_,[E("div",H_,[E("div",{class:"flex items-center justify-between mb-6"},[R[15]||(R[15]=E("h2",{class:"text-2xl font-bold text-gray-800"},"管理員登入",-1)),E("button",{onClick:z,class:"text-gray-400 hover:text-gray-600"},[...R[14]||(R[14]=[E("i",{class:"fas fa-times text-xl"},null,-1)])])]),E("form",{onSubmit:Tr(D,["prevent"]),class:"space-y-4"},[E("div",null,[R[16]||(R[16]=E("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"帳號",-1)),xn(E("input",{"onUpdate:modelValue":R[0]||(R[0]=de=>h.value.username=de),type:"text",required:"",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",placeholder:"請輸入管理員帳號"},null,512),[[On,h.value.username]])]),E("div",null,[R[17]||(R[17]=E("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"密碼",-1)),xn(E("input",{"onUpdate:modelValue":R[1]||(R[1]=de=>h.value.password=de),type:"password",required:"",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",placeholder:"請輸入密碼"},null,512),[[On,h.value.password]])]),I.value?(ae(),le("div",V_,Gt(I.value),1)):Fe("",!0),E("div",B_,[E("button",{type:"button",onClick:z,class:"flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"}," 返回 "),E("button",{type:"submit",disabled:b.value,class:"flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"},Gt(b.value?"登入中...":"登入"),9,j_)])],32),R[18]||(R[18]=E("div",{class:"mt-4 p-3 bg-gray-100 rounded-lg text-sm text-gray-600"},[E("p",null,[E("strong",null,"預設帳號："),an("admin")]),E("p",null,[E("strong",null,"預設密碼："),an("admin")])],-1))])])):Fe("",!0),l.value?(ae(),le("div",W_,[E("div",K_,[E("div",{class:"flex items-center justify-between mb-6"},[R[20]||(R[20]=E("h2",{class:"text-2xl font-bold text-gray-800"},"老師登入",-1)),E("button",{onClick:z,class:"text-gray-400 hover:text-gray-600"},[...R[19]||(R[19]=[E("i",{class:"fas fa-times text-xl"},null,-1)])])]),E("form",{onSubmit:Tr(B,["prevent"]),class:"space-y-4"},[E("div",null,[R[21]||(R[21]=E("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"帳號",-1)),xn(E("input",{"onUpdate:modelValue":R[2]||(R[2]=de=>g.value.username=de),type:"text",required:"",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"請輸入老師帳號"},null,512),[[On,g.value.username]])]),E("div",null,[R[22]||(R[22]=E("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"密碼",-1)),xn(E("input",{"onUpdate:modelValue":R[3]||(R[3]=de=>g.value.password=de),type:"password",required:"",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"請輸入密碼"},null,512),[[On,g.value.password]])]),I.value?(ae(),le("div",z_,Gt(I.value),1)):Fe("",!0),E("div",q_,[E("button",{type:"button",onClick:z,class:"flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"}," 返回 "),E("button",{type:"submit",disabled:b.value,class:"flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"},Gt(b.value?"登入中...":"登入"),9,G_)])],32),R[23]||(R[23]=E("div",{class:"mt-4 p-3 bg-gray-100 rounded-lg text-sm text-gray-600"},[E("p",null,[E("strong",null,"預設帳號："),an("tc")]),E("p",null,[E("strong",null,"預設密碼："),an("tc")])],-1))])])):Fe("",!0),u.value?(ae(),le("div",J_,[E("div",Y_,[E("div",{class:"flex items-center justify-between mb-6"},[R[25]||(R[25]=E("h2",{class:"text-2xl font-bold text-gray-800"},"學生登入",-1)),E("button",{onClick:z,class:"text-gray-400 hover:text-gray-600"},[...R[24]||(R[24]=[E("i",{class:"fas fa-times text-xl"},null,-1)])])]),E("form",{onSubmit:Tr(U,["prevent"]),class:"space-y-4"},[E("div",null,[R[26]||(R[26]=E("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"請輸入您的姓名",-1)),xn(E("input",{"onUpdate:modelValue":R[4]||(R[4]=de=>f.value=de),type:"text",required:"",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent",placeholder:"例如：王小明"},null,512),[[On,f.value]])]),E("div",{class:"flex gap-3"},[E("button",{type:"button",onClick:z,class:"flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"}," 返回 "),R[27]||(R[27]=E("button",{type:"submit",class:"flex-1 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"}," 進入網站 ",-1))])],32)])])):Fe("",!0)])}}},Q_=P_(X_,[["__scopeId","data-v-4ce4dfe9"]]),Z_=[{path:"/",name:"Home",component:Q_},{path:"/login",name:"Login",component:()=>Ct(()=>import("./Login-Dz1UYe6T.js"),[])},{path:"/register",name:"Register",component:()=>Ct(()=>import("./Register-D9UiJxyJ.js"),[])},{path:"/about",name:"About",component:()=>Ct(()=>import("./About-DbL_iCDP.js"),[])},{path:"/actions",name:"Actions",component:()=>Ct(()=>import("./Actions-D7Z091X9.js"),__vite__mapDeps([0,1,2,3,4,5,6]))},{path:"/sdgs",name:"SDGs",component:()=>Ct(()=>import("./SDGs-CfaZp1WA.js"),__vite__mapDeps([7,8,3,4,5,6]))},{path:"/story",name:"Story",component:()=>Ct(()=>import("./Story-JnreIc7J.js"),__vite__mapDeps([9,10,2,3,4,8,1,11]))},{path:"/story/new",name:"story-new",component:()=>Ct(()=>import("./StoryNew-BIQpAMWP.js"),__vite__mapDeps([12,3,4,13,2,14])),meta:{requiresTeacher:!0}},{path:"/story/:id",name:"story-detail",component:()=>Ct(()=>import("./StoryDetail-Bmr1UY4h.js"),__vite__mapDeps([15,8,10,2,3,4,13,16])),props:!0}],Tl=s_({history:Om(),routes:Z_});Tl.beforeEach((t,e,n)=>{const{isAuthenticated:s,isTeacher:r,isAdmin:i,checkAuth:o}=Mi();if(o(),t.meta.requiresAdmin&&!i.value){s.value?(alert("此功能僅限管理員使用"),n(!1)):n({name:"Home"});return}if(t.meta.requiresTeacher&&!r.value){s.value?(alert("此功能僅限老師使用"),n(!1)):n({name:"Home"});return}if(t.meta.requiresAuth&&!s.value){n({name:"Home"});return}n()});const Cl=qf(S_);Cl.use(Tl);Cl.mount("#app");export{P_ as A,or as B,Ga as C,Iu as D,Su as E,De as F,bi as G,mc as H,Cs as I,_i as J,Bn as K,o_ as L,Eu as M,iy as N,Wa as O,iu as P,ry as Q,ru as R,ty as S,gf as T,sy as U,Yf as _,le as a,E as b,Se as c,Fe as d,xn as e,ce as f,Ze as g,an as h,Hr as i,i_ as j,oy as k,ny as l,ke as m,Ee as n,ae as o,er as p,ey as q,fe as r,uf as s,Gt as t,Mi as u,On as v,Tr as w,Es as x,nt as y,Kr as z};
