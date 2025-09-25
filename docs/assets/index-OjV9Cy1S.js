const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./About-D66R99en.js","./TrainTrack-C3AaGE5y.js","./TrainTrack-sVEUxovV.css","./Actions-BNOWpPLk.js","./lightBulb2-C7D1_u2a.js","./HeaderFilter-BmFHDX0L.js","./SDGs_goal-BU-5yG0n.js","./CJKSub-D4Q5-j6v.js","./CJKSub-RziVMV1s.css","./ActionNew-CttxPv0A.js","./index-BL31sUer.js","./useDateTime-C5bsu7z3.js","./ActionNew-DdjzCdTW.css","./ActionDetail-BUtxXSE0.js","./平和國小_mobile_Example-xpo9UaZU.js","./ActionDetail-DwIsiGzF.css","./SDGs-D6kC9PqJ.js","./Story-CO_1KjeG.js","./useDateFormat-Tij9gOpP.js","./Story-D7eTOhW5.css","./StoryNew-Dj2k9RQB.js","./StoryNew-Dbui2Mm7.css","./StoryDetail-DXLEN6kA.js","./StoryDetail-CcR_2F8W.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ni(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const te={},on=[],et=()=>{},da=()=>!1,Gs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),si=t=>t.startsWith("onUpdate:"),ye=Object.assign,ri=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Cl=Object.prototype.hasOwnProperty,J=(t,e)=>Cl.call(t,e),$=Array.isArray,an=t=>ns(t)==="[object Map]",En=t=>ns(t)==="[object Set]",Ui=t=>ns(t)==="[object Date]",j=t=>typeof t=="function",ae=t=>typeof t=="string",Ve=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",ha=t=>(ie(t)||j(t))&&j(t.then)&&j(t.catch),pa=Object.prototype.toString,ns=t=>pa.call(t),Al=t=>ns(t).slice(8,-1),ga=t=>ns(t)==="[object Object]",ii=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xn=ni(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Js=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Rl=/-\w/g,Le=Js(t=>t.replace(Rl,e=>e.slice(1).toUpperCase())),Pl=/\B([A-Z])/g,Jt=Js(t=>t.replace(Pl,"-$1").toLowerCase()),Ys=Js(t=>t.charAt(0).toUpperCase()+t.slice(1)),hr=Js(t=>t?`on${Ys(t)}`:""),Dt=(t,e)=>!Object.is(t,e),bs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ma=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Os=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $i;const Xs=()=>$i||($i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zs(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ae(s)?Nl(s):Zs(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ae(t)||ie(t))return t}const kl=/;(?![^(]*\))/g,Ol=/:([^]+)/,xl=/\/\*[^]*?\*\//g;function Nl(t){const e={};return t.replace(xl,"").split(kl).forEach(n=>{if(n){const s=n.split(Ol);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function be(t){let e="";if(ae(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=be(t[n]);s&&(e+=s+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function J_(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ae(e)&&(t.class=be(e)),n&&(t.style=Zs(n)),t}const Dl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ll=ni(Dl);function _a(t){return!!t||t===""}function Ml(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ss(t[s],e[s]);return n}function ss(t,e){if(t===e)return!0;let n=Ui(t),s=Ui(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ve(t),s=Ve(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?Ml(t,e):!1;if(n=ie(t),s=ie(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ss(t[o],e[o]))return!1}}return String(t)===String(e)}function oi(t,e){return t.findIndex(n=>ss(n,e))}const ya=t=>!!(t&&t.__v_isRef===!0),va=t=>ae(t)?t:t==null?"":$(t)||ie(t)&&(t.toString===pa||!j(t.toString))?ya(t)?va(t.value):JSON.stringify(t,ba,2):String(t),ba=(t,e)=>ya(e)?ba(t,e.value):an(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[pr(s,i)+" =>"]=r,n),{})}:En(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pr(n))}:Ve(e)?pr(e):ie(e)&&!$(e)&&!ga(e)?String(e):e,pr=(t,e="")=>{var n;return Ve(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ae;class Ul{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ae,!e&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ae;try{return Ae=this,e()}finally{Ae=n}}}on(){++this._on===1&&(this.prevScope=Ae,Ae=this)}off(){this._on>0&&--this._on===0&&(Ae=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function $l(){return Ae}let re;const gr=new WeakSet;class wa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ae&&Ae.active&&Ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gr.has(this)&&(gr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ia(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fi(this),Sa(this);const e=re,n=$e;re=this,$e=!0;try{return this.fn()}finally{Ta(this),re=e,$e=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)li(e);this.deps=this.depsTail=void 0,Fi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Nr(this)&&this.run()}get dirty(){return Nr(this)}}let Ea=0,Nn,Dn;function Ia(t,e=!1){if(t.flags|=8,e){t.next=Dn,Dn=t;return}t.next=Nn,Nn=t}function ai(){Ea++}function ci(){if(--Ea>0)return;if(Dn){let e=Dn;for(Dn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Nn;){let e=Nn;for(Nn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Sa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ta(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),li(s),Fl(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Nr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ca(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ca(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===jn)||(t.globalVersion=jn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Nr(t))))return;t.flags|=2;const e=t.dep,n=re,s=$e;re=t,$e=!0;try{Sa(t);const r=t.fn(t._value);(e.version===0||Dt(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{re=n,$e=s,Ta(t),t.flags&=-3}}function li(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)li(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Fl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $e=!0;const Aa=[];function pt(){Aa.push($e),$e=!1}function gt(){const t=Aa.pop();$e=t===void 0?!0:t}function Fi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let jn=0;class Vl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!re||!$e||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new Vl(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,Ra(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=s)}return n}trigger(e){this.version++,jn++,this.notify(e)}notify(e){ai();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ci()}}}function Ra(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ra(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const xs=new WeakMap,zt=Symbol(""),Dr=Symbol(""),Wn=Symbol("");function me(t,e,n){if($e&&re){let s=xs.get(t);s||xs.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Qs),r.map=s,r.key=n),r.track()}}function ct(t,e,n,s,r,i){const o=xs.get(t);if(!o){jn++;return}const a=c=>{c&&c.trigger()};if(ai(),e==="clear")o.forEach(a);else{const c=$(t),l=c&&ii(n);if(c&&n==="length"){const u=Number(s);o.forEach((f,p)=>{(p==="length"||p===Wn||!Ve(p)&&p>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Wn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(zt)),an(t)&&a(o.get(Dr)));break;case"delete":c||(a(o.get(zt)),an(t)&&a(o.get(Dr)));break;case"set":an(t)&&a(o.get(zt));break}}ci()}function Hl(t,e){const n=xs.get(t);return n&&n.get(e)}function en(t){const e=z(t);return e===t?e:(me(e,"iterate",Wn),De(t)?e:e.map(de))}function er(t){return me(t=z(t),"iterate",Wn),t}const Bl={__proto__:null,[Symbol.iterator](){return mr(this,Symbol.iterator,de)},concat(...t){return en(this).concat(...t.map(e=>$(e)?en(e):e))},entries(){return mr(this,"entries",t=>(t[1]=de(t[1]),t))},every(t,e){return it(this,"every",t,e,void 0,arguments)},filter(t,e){return it(this,"filter",t,e,n=>n.map(de),arguments)},find(t,e){return it(this,"find",t,e,de,arguments)},findIndex(t,e){return it(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return it(this,"findLast",t,e,de,arguments)},findLastIndex(t,e){return it(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return it(this,"forEach",t,e,void 0,arguments)},includes(...t){return _r(this,"includes",t)},indexOf(...t){return _r(this,"indexOf",t)},join(t){return en(this).join(t)},lastIndexOf(...t){return _r(this,"lastIndexOf",t)},map(t,e){return it(this,"map",t,e,void 0,arguments)},pop(){return Cn(this,"pop")},push(...t){return Cn(this,"push",t)},reduce(t,...e){return Vi(this,"reduce",t,e)},reduceRight(t,...e){return Vi(this,"reduceRight",t,e)},shift(){return Cn(this,"shift")},some(t,e){return it(this,"some",t,e,void 0,arguments)},splice(...t){return Cn(this,"splice",t)},toReversed(){return en(this).toReversed()},toSorted(t){return en(this).toSorted(t)},toSpliced(...t){return en(this).toSpliced(...t)},unshift(...t){return Cn(this,"unshift",t)},values(){return mr(this,"values",de)}};function mr(t,e,n){const s=er(t),r=s[e]();return s!==t&&!De(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const jl=Array.prototype;function it(t,e,n,s,r,i){const o=er(t),a=o!==t&&!De(t),c=o[e];if(c!==jl[e]){const f=c.apply(t,i);return a?de(f):f}let l=n;o!==t&&(a?l=function(f,p){return n.call(this,de(f),p,t)}:n.length>2&&(l=function(f,p){return n.call(this,f,p,t)}));const u=c.call(o,l,s);return a&&r?r(u):u}function Vi(t,e,n,s){const r=er(t);let i=n;return r!==t&&(De(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,de(a),c,t)}),r[e](i,...s)}function _r(t,e,n){const s=z(t);me(s,"iterate",Wn);const r=s[e](...n);return(r===-1||r===!1)&&di(n[0])?(n[0]=z(n[0]),s[e](...n)):r}function Cn(t,e,n=[]){pt(),ai();const s=z(t)[e].apply(t,n);return ci(),gt(),s}const Wl=ni("__proto__,__v_isRef,__isVue"),Pa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ve));function ql(t){Ve(t)||(t=String(t));const e=z(this);return me(e,"has",t),e.hasOwnProperty(t)}class ka{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?tu:Da:i?Na:xa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=$(e);if(!r){let c;if(o&&(c=Bl[n]))return c;if(n==="hasOwnProperty")return ql}const a=Reflect.get(e,n,pe(e)?e:s);return(Ve(n)?Pa.has(n):Wl(n))||(r||me(e,"get",n),i)?a:pe(a)?o&&ii(n)?a:a.value:ie(a)?r?Ma(a):rs(a):a}}class Oa extends ka{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Ut(i);if(!De(s)&&!Ut(s)&&(i=z(i),s=z(s)),!$(e)&&pe(i)&&!pe(s))return c||(i.value=s),!0}const o=$(e)&&ii(n)?Number(n)<e.length:J(e,n),a=Reflect.set(e,n,s,pe(e)?e:r);return e===z(r)&&(o?Dt(s,i)&&ct(e,"set",n,s):ct(e,"add",n,s)),a}deleteProperty(e,n){const s=J(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&ct(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ve(n)||!Pa.has(n))&&me(e,"has",n),s}ownKeys(e){return me(e,"iterate",$(e)?"length":zt),Reflect.ownKeys(e)}}class zl extends ka{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Kl=new Oa,Gl=new zl,Jl=new Oa(!0);const Lr=t=>t,gs=t=>Reflect.getPrototypeOf(t);function Yl(t,e,n){return function(...s){const r=this.__v_raw,i=z(r),o=an(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Lr:e?Ns:de;return!e&&me(i,"iterate",c?Dr:zt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function ms(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xl(t,e){const n={get(r){const i=this.__v_raw,o=z(i),a=z(r);t||(Dt(r,a)&&me(o,"get",r),me(o,"get",a));const{has:c}=gs(o),l=e?Lr:t?Ns:de;if(c.call(o,r))return l(i.get(r));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&me(z(r),"iterate",zt),r.size},has(r){const i=this.__v_raw,o=z(i),a=z(r);return t||(Dt(r,a)&&me(o,"has",r),me(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=z(a),l=e?Lr:t?Ns:de;return!t&&me(c,"iterate",zt),a.forEach((u,f)=>r.call(i,l(u),l(f),o))}};return ye(n,t?{add:ms("add"),set:ms("set"),delete:ms("delete"),clear:ms("clear")}:{add(r){!e&&!De(r)&&!Ut(r)&&(r=z(r));const i=z(this);return gs(i).has.call(i,r)||(i.add(r),ct(i,"add",r,r)),this},set(r,i){!e&&!De(i)&&!Ut(i)&&(i=z(i));const o=z(this),{has:a,get:c}=gs(o);let l=a.call(o,r);l||(r=z(r),l=a.call(o,r));const u=c.call(o,r);return o.set(r,i),l?Dt(i,u)&&ct(o,"set",r,i):ct(o,"add",r,i),this},delete(r){const i=z(this),{has:o,get:a}=gs(i);let c=o.call(i,r);c||(r=z(r),c=o.call(i,r)),a&&a.call(i,r);const l=i.delete(r);return c&&ct(i,"delete",r,void 0),l},clear(){const r=z(this),i=r.size!==0,o=r.clear();return i&&ct(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Yl(r,t,e)}),n}function ui(t,e){const n=Xl(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(J(n,r)&&r in s?n:s,r,i)}const Zl={get:ui(!1,!1)},Ql={get:ui(!1,!0)},eu={get:ui(!0,!1)};const xa=new WeakMap,Na=new WeakMap,Da=new WeakMap,tu=new WeakMap;function nu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function su(t){return t.__v_skip||!Object.isExtensible(t)?0:nu(Al(t))}function rs(t){return Ut(t)?t:fi(t,!1,Kl,Zl,xa)}function La(t){return fi(t,!1,Jl,Ql,Na)}function Ma(t){return fi(t,!0,Gl,eu,Da)}function fi(t,e,n,s,r){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=su(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function cn(t){return Ut(t)?cn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ut(t){return!!(t&&t.__v_isReadonly)}function De(t){return!!(t&&t.__v_isShallow)}function di(t){return t?!!t.__v_raw:!1}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function ru(t){return!J(t,"__v_skip")&&Object.isExtensible(t)&&ma(t,"__v_skip",!0),t}const de=t=>ie(t)?rs(t):t,Ns=t=>ie(t)?Ma(t):t;function pe(t){return t?t.__v_isRef===!0:!1}function fe(t){return Ua(t,!1)}function iu(t){return Ua(t,!0)}function Ua(t,e){return pe(t)?t:new ou(t,e)}class ou{constructor(e,n){this.dep=new Qs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:z(e),this._value=n?e:de(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||De(e)||Ut(e);e=s?e:z(e),Dt(e,n)&&(this._rawValue=e,this._value=s?e:de(e),this.dep.trigger())}}function Re(t){return pe(t)?t.value:t}const au={get:(t,e,n)=>e==="__v_raw"?t:Re(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return pe(r)&&!pe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function $a(t){return cn(t)?t:new Proxy(t,au)}class cu{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Qs,{get:s,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=s,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Y_(t){return new cu(t)}function lu(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=fu(t,n);return e}class uu{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Hl(z(this._object),this._key)}}function fu(t,e,n){const s=t[e];return pe(s)?s:new uu(t,e,n)}class du{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Qs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return Ia(this,!0),!0}get value(){const e=this.dep.track();return Ca(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function hu(t,e,n=!1){let s,r;return j(t)?s=t:(s=t.get,r=t.set),new du(s,r,n)}const _s={},Ds=new WeakMap;let Wt;function pu(t,e=!1,n=Wt){if(n){let s=Ds.get(n);s||Ds.set(n,s=[]),s.push(t)}}function gu(t,e,n=te){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=S=>r?S:De(S)||r===!1||r===0?lt(S,1):lt(S);let u,f,p,g,_=!1,I=!1;if(pe(t)?(f=()=>t.value,_=De(t)):cn(t)?(f=()=>l(t),_=!0):$(t)?(I=!0,_=t.some(S=>cn(S)||De(S)),f=()=>t.map(S=>{if(pe(S))return S.value;if(cn(S))return l(S);if(j(S))return c?c(S,2):S()})):j(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){pt();try{p()}finally{gt()}}const S=Wt;Wt=u;try{return c?c(t,3,[g]):t(g)}finally{Wt=S}}:f=et,e&&r){const S=f,O=r===!0?1/0:r;f=()=>lt(S(),O)}const M=$l(),k=()=>{u.stop(),M&&M.active&&ri(M.effects,u)};if(i&&e){const S=e;e=(...O)=>{S(...O),k()}}let C=I?new Array(t.length).fill(_s):_s;const D=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const O=u.run();if(r||_||(I?O.some((ne,Z)=>Dt(ne,C[Z])):Dt(O,C))){p&&p();const ne=Wt;Wt=u;try{const Z=[O,C===_s?void 0:I&&C[0]===_s?[]:C,g];C=O,c?c(e,3,Z):e(...Z)}finally{Wt=ne}}}else u.run()};return a&&a(D),u=new wa(f),u.scheduler=o?()=>o(D,!1):D,g=S=>pu(S,!1,u),p=u.onStop=()=>{const S=Ds.get(u);if(S){if(c)c(S,4);else for(const O of S)O();Ds.delete(u)}},e?s?D(!0):C=u.run():o?o(D.bind(null,!0),!0):u.run(),k.pause=u.pause.bind(u),k.resume=u.resume.bind(u),k.stop=k,k}function lt(t,e=1/0,n){if(e<=0||!ie(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,pe(t))lt(t.value,e,n);else if($(t))for(let s=0;s<t.length;s++)lt(t[s],e,n);else if(En(t)||an(t))t.forEach(s=>{lt(s,e,n)});else if(ga(t)){for(const s in t)lt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&lt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function is(t,e,n,s){try{return s?t(...s):t()}catch(r){tr(r,e,n)}}function st(t,e,n,s){if(j(t)){const r=is(t,e,n,s);return r&&ha(r)&&r.catch(i=>{tr(i,e,n)}),r}if($(t)){const r=[];for(let i=0;i<t.length;i++)r.push(st(t[i],e,n,s));return r}}function tr(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||te;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){pt(),is(i,null,10,[t,c,l]),gt();return}}mu(t,n,r,s,o)}function mu(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const we=[];let Xe=-1;const ln=[];let Ct=null,tn=0;const Fa=Promise.resolve();let Ls=null;function hi(t){const e=Ls||Fa;return t?e.then(this?t.bind(this):t):e}function _u(t){let e=Xe+1,n=we.length;for(;e<n;){const s=e+n>>>1,r=we[s],i=qn(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function pi(t){if(!(t.flags&1)){const e=qn(t),n=we[we.length-1];!n||!(t.flags&2)&&e>=qn(n)?we.push(t):we.splice(_u(e),0,t),t.flags|=1,Va()}}function Va(){Ls||(Ls=Fa.then(Ba))}function yu(t){$(t)?ln.push(...t):Ct&&t.id===-1?Ct.splice(tn+1,0,t):t.flags&1||(ln.push(t),t.flags|=1),Va()}function Hi(t,e,n=Xe+1){for(;n<we.length;n++){const s=we[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;we.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ha(t){if(ln.length){const e=[...new Set(ln)].sort((n,s)=>qn(n)-qn(s));if(ln.length=0,Ct){Ct.push(...e);return}for(Ct=e,tn=0;tn<Ct.length;tn++){const n=Ct[tn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ct=null,tn=0}}const qn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ba(t){try{for(Xe=0;Xe<we.length;Xe++){const e=we[Xe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),is(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xe<we.length;Xe++){const e=we[Xe];e&&(e.flags&=-2)}Xe=-1,we.length=0,Ha(),Ls=null,(we.length||ln.length)&&Ba()}}let he=null,ja=null;function Ms(t){const e=he;return he=t,ja=t&&t.type.__scopeId||null,e}function Ze(t,e=he,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Fs(-1);const i=Ms(e);let o;try{o=t(...r)}finally{Ms(i),s._d&&Fs(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function X_(t,e){if(he===null)return t;const n=or(he),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=te]=e[r];i&&(j(i)&&(i={mounted:i,updated:i}),i.deep&&lt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Bt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(pt(),st(c,n,8,[t.el,a,t,e]),gt())}}const vu=Symbol("_vte"),bu=t=>t.__isTeleport,wu=Symbol("_leaveCb");function gi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,gi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wa(t,e){return j(t)?ye({name:t.name},e,{setup:t}):t}function qa(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Us=new WeakMap;function Ln(t,e,n,s,r=!1){if($(t)){t.forEach((_,I)=>Ln(_,e&&($(e)?e[I]:e),n,s,r));return}if(un(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ln(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?or(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===te?a.refs={}:a.refs,f=a.setupState,p=z(f),g=f===te?da:_=>J(p,_);if(l!=null&&l!==c){if(Bi(e),ae(l))u[l]=null,g(l)&&(f[l]=null);else if(pe(l)){l.value=null;const _=e;_.k&&(u[_.k]=null)}}if(j(c))is(c,a,12,[o,u]);else{const _=ae(c),I=pe(c);if(_||I){const M=()=>{if(t.f){const k=_?g(c)?f[c]:u[c]:c.value;if(r)$(k)&&ri(k,i);else if($(k))k.includes(i)||k.push(i);else if(_)u[c]=[i],g(c)&&(f[c]=u[c]);else{const C=[i];c.value=C,t.k&&(u[t.k]=C)}}else _?(u[c]=o,g(c)&&(f[c]=o)):I&&(c.value=o,t.k&&(u[t.k]=o))};if(o){const k=()=>{M(),Us.delete(t)};k.id=-1,Us.set(t,k),ke(k,n)}else Bi(t),M()}}}function Bi(t){const e=Us.get(t);e&&(e.flags|=8,Us.delete(t))}Xs().requestIdleCallback;Xs().cancelIdleCallback;const un=t=>!!t.type.__asyncLoader,za=t=>t.type.__isKeepAlive;function Eu(t,e){Ka(t,"a",e)}function Iu(t,e){Ka(t,"da",e)}function Ka(t,e,n=_e){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(nr(e,s,n),n){let r=n.parent;for(;r&&r.parent;)za(r.parent.vnode)&&Su(s,e,n,r),r=r.parent}}function Su(t,e,n,s){const r=nr(e,t,s,!0);Ga(()=>{ri(s[e],r)},n)}function nr(t,e,n=_e,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{pt();const a=os(n),c=st(e,n,t,o);return a(),gt(),c});return s?r.unshift(i):r.push(i),i}}const vt=t=>(e,n=_e)=>{(!Gn||t==="sp")&&nr(t,(...s)=>e(...s),n)},Tu=vt("bm"),sr=vt("m"),Cu=vt("bu"),Au=vt("u"),mi=vt("bum"),Ga=vt("um"),Ru=vt("sp"),Pu=vt("rtg"),ku=vt("rtc");function Ou(t,e=_e){nr("ec",t,e)}const xu="components";function Mr(t,e){return Du(xu,t,!0,e)||t}const Nu=Symbol.for("v-ndc");function Du(t,e,n=!0,s=!1){const r=he||_e;if(r){const i=r.type;{const a=If(i,!1);if(a&&(a===e||a===Le(e)||a===Ys(Le(e))))return i}const o=ji(r[t]||i[t],e)||ji(r.appContext[t],e);return!o&&s?i:o}}function ji(t,e){return t&&(t[e]||t[Le(e)]||t[Ys(Le(e))])}function Z_(t,e,n,s){let r;const i=n,o=$(t);if(o||ae(t)){const a=o&&cn(t);let c=!1,l=!1;a&&(c=!De(t),l=Ut(t),t=er(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(c?l?Ns(de(t[u])):de(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(ie(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];r[c]=e(t[u],u,c,i)}}else r=[];return r}function Q_(t,e,n={},s,r){if(he.ce||he.parent&&un(he.parent)&&he.parent.ce)return e!=="default"&&(n.name=e),ce(),Hr(Oe,null,[oe("slot",n,s)],64);let i=t[e];i&&i._c&&(i._d=!1),ce();const o=i&&Ja(i(n)),a=n.key||o&&o.key,c=Hr(Oe,{key:(a&&!Ve(a)?a:`_${e}`)+(!o&&s?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Ja(t){return t.some(e=>Kn(e)?!(e.type===mt||e.type===Oe&&!Ja(e.children)):!0)?t:null}const Ur=t=>t?gc(t)?or(t):Ur(t.parent):null,Mn=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ur(t.parent),$root:t=>Ur(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Xa(t),$forceUpdate:t=>t.f||(t.f=()=>{pi(t.update)}),$nextTick:t=>t.n||(t.n=hi.bind(t.proxy)),$watch:t=>tf.bind(t)}),yr=(t,e)=>t!==te&&!t.__isScriptSetup&&J(t,e),Lu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(yr(s,e))return o[e]=1,s[e];if(r!==te&&J(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&J(l,e))return o[e]=3,i[e];if(n!==te&&J(n,e))return o[e]=4,n[e];$r&&(o[e]=0)}}const u=Mn[e];let f,p;if(u)return e==="$attrs"&&me(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==te&&J(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,J(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return yr(r,e)?(r[e]=n,!0):s!==te&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:o}},a){let c,l;return!!(n[a]||t!==te&&a[0]!=="$"&&J(t,a)||yr(e,a)||(c=i[0])&&J(c,a)||J(s,a)||J(Mn,a)||J(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wi(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $r=!0;function Mu(t){const e=Xa(t),n=t.proxy,s=t.ctx;$r=!1,e.beforeCreate&&qi(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:_,activated:I,deactivated:M,beforeDestroy:k,beforeUnmount:C,destroyed:D,unmounted:S,render:O,renderTracked:ne,renderTriggered:Z,errorCaptured:le,serverPrefetch:wt,expose:je,inheritAttrs:Et,components:Ht,directives:We,filters:Sn}=e;if(l&&Uu(l,s,null),o)for(const X in o){const K=o[X];j(K)&&(s[X]=K.bind(n))}if(r){const X=r.call(n,n);ie(X)&&(t.data=rs(X))}if($r=!0,i)for(const X in i){const K=i[X],rt=j(K)?K.bind(n,n):j(K.get)?K.get.bind(n,n):et,It=!j(K)&&j(K.set)?K.set.bind(n):et,qe=Ee({get:rt,set:It});Object.defineProperty(s,X,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Se=>qe.value=Se})}if(a)for(const X in a)Ya(a[X],s,n,X);if(c){const X=j(c)?c.call(n):c;Reflect.ownKeys(X).forEach(K=>{Un(K,X[K])})}u&&qi(u,t,"c");function ue(X,K){$(K)?K.forEach(rt=>X(rt.bind(n))):K&&X(K.bind(n))}if(ue(Tu,f),ue(sr,p),ue(Cu,g),ue(Au,_),ue(Eu,I),ue(Iu,M),ue(Ou,le),ue(ku,ne),ue(Pu,Z),ue(mi,C),ue(Ga,S),ue(Ru,wt),$(je))if(je.length){const X=t.exposed||(t.exposed={});je.forEach(K=>{Object.defineProperty(X,K,{get:()=>n[K],set:rt=>n[K]=rt,enumerable:!0})})}else t.exposed||(t.exposed={});O&&t.render===et&&(t.render=O),Et!=null&&(t.inheritAttrs=Et),Ht&&(t.components=Ht),We&&(t.directives=We),wt&&qa(t)}function Uu(t,e,n=et){$(t)&&(t=Fr(t));for(const s in t){const r=t[s];let i;ie(r)?"default"in r?i=Fe(r.from||s,r.default,!0):i=Fe(r.from||s):i=Fe(r),pe(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function qi(t,e,n){st($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ya(t,e,n,s){let r=s.includes(".")?lc(n,s):()=>n[s];if(ae(t)){const i=e[t];j(i)&&ws(r,i)}else if(j(t))ws(r,t.bind(n));else if(ie(t))if($(t))t.forEach(i=>Ya(i,e,n,s));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&ws(r,i,t)}}function Xa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>$s(c,l,o,!0)),$s(c,e,o)),ie(e)&&i.set(e,c),c}function $s(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&$s(t,i,n,!0),r&&r.forEach(o=>$s(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=$u[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $u={data:zi,props:Ki,emits:Ki,methods:Pn,computed:Pn,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:Pn,directives:Pn,watch:Vu,provide:zi,inject:Fu};function zi(t,e){return e?t?function(){return ye(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Fu(t,e){return Pn(Fr(t),Fr(e))}function Fr(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function Pn(t,e){return t?ye(Object.create(null),t,e):e}function Ki(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ye(Object.create(null),Wi(t),Wi(e??{})):e}function Vu(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const s in e)n[s]=ve(t[s],e[s]);return n}function Za(){return{app:null,config:{isNativeTag:da,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hu=0;function Bu(t,e){return function(s,r=null){j(s)||(s=ye({},s)),r!=null&&!ie(r)&&(r=null);const i=Za(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Hu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Tf,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(l,...f)):j(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,p){if(!c){const g=l._ceVNode||oe(s,r);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(g,u,p),c=!0,l._container=u,u.__vue_app__=l,or(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(st(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=fn;fn=l;try{return u()}finally{fn=f}}};return l}}let fn=null;function Un(t,e){if(_e){let n=_e.provides;const s=_e.parent&&_e.parent.provides;s===n&&(n=_e.provides=Object.create(s)),n[t]=e}}function Fe(t,e,n=!1){const s=yf();if(s||fn){let r=fn?fn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&j(e)?e.call(s&&s.proxy):e}}const Qa={},ec=()=>Object.create(Qa),tc=t=>Object.getPrototypeOf(t)===Qa;function ju(t,e,n,s=!1){const r={},i=ec();t.propsDefaults=Object.create(null),nc(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:La(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Wu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=z(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(rr(t.emitsOptions,p))continue;const g=e[p];if(c)if(J(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const _=Le(p);r[_]=Vr(c,a,_,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{nc(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!J(e,f)&&((u=Jt(f))===f||!J(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Vr(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!J(e,f))&&(delete i[f],l=!0)}l&&ct(t.attrs,"set","")}function nc(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(xn(c))continue;const l=e[c];let u;r&&J(r,u=Le(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:rr(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=z(n),l=a||te;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Vr(r,c,f,l[f],t,!J(l,f))}}return o}function Vr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=J(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=os(r);s=l[n]=c.call(null,e),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Jt(n))&&(s=!0))}return s}const qu=new WeakMap;function sc(t,e,n=!1){const s=n?qu:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=f=>{c=!0;const[p,g]=sc(f,e,!0);ye(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ie(t)&&s.set(t,on),on;if($(i))for(let u=0;u<i.length;u++){const f=Le(i[u]);Gi(f)&&(o[f]=te)}else if(i)for(const u in i){const f=Le(u);if(Gi(f)){const p=i[u],g=o[f]=$(p)||j(p)?{type:p}:ye({},p),_=g.type;let I=!1,M=!0;if($(_))for(let k=0;k<_.length;++k){const C=_[k],D=j(C)&&C.name;if(D==="Boolean"){I=!0;break}else D==="String"&&(M=!1)}else I=j(_)&&_.name==="Boolean";g[0]=I,g[1]=M,(I||J(g,"default"))&&a.push(f)}}const l=[o,a];return ie(t)&&s.set(t,l),l}function Gi(t){return t[0]!=="$"&&!xn(t)}const _i=t=>t==="_"||t==="_ctx"||t==="$stable",yi=t=>$(t)?t.map(Qe):[Qe(t)],zu=(t,e,n)=>{if(e._n)return e;const s=Ze((...r)=>yi(e(...r)),n);return s._c=!1,s},rc=(t,e,n)=>{const s=t._ctx;for(const r in t){if(_i(r))continue;const i=t[r];if(j(i))e[r]=zu(r,i,s);else if(i!=null){const o=yi(i);e[r]=()=>o}}},ic=(t,e)=>{const n=yi(e);t.slots.default=()=>n},oc=(t,e,n)=>{for(const s in e)(n||!_i(s))&&(t[s]=e[s])},Ku=(t,e,n)=>{const s=t.slots=ec();if(t.vnode.shapeFlag&32){const r=e._;r?(oc(s,e,n),n&&ma(s,"_",r,!0)):rc(e,s)}else e&&ic(t,e)},Gu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=te;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:oc(r,e,n):(i=!e.$stable,rc(e,r)),o=e}else e&&(ic(t,e),o={default:1});if(i)for(const a in r)!_i(a)&&o[a]==null&&delete r[a]},ke=uf;function Ju(t){return Yu(t)}function Yu(t,e){const n=Xs();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=et,insertStaticContent:_}=t,I=(d,h,m,v=null,w=null,y=null,R=void 0,A=null,T=!!h.dynamicChildren)=>{if(d===h)return;d&&!An(d,h)&&(v=b(d),Se(d,w,y,!0),d=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:E,ref:F,shapeFlag:x}=h;switch(E){case ir:M(d,h,m,v);break;case mt:k(d,h,m,v);break;case Es:d==null&&C(h,m,v,R);break;case Oe:Ht(d,h,m,v,w,y,R,A,T);break;default:x&1?O(d,h,m,v,w,y,R,A,T):x&6?We(d,h,m,v,w,y,R,A,T):(x&64||x&128)&&E.process(d,h,m,v,w,y,R,A,T,L)}F!=null&&w?Ln(F,d&&d.ref,y,h||d,!h):F==null&&d&&d.ref!=null&&Ln(d.ref,null,y,d,!0)},M=(d,h,m,v)=>{if(d==null)s(h.el=a(h.children),m,v);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},k=(d,h,m,v)=>{d==null?s(h.el=c(h.children||""),m,v):h.el=d.el},C=(d,h,m,v)=>{[d.el,d.anchor]=_(d.children,h,m,v,d.el,d.anchor)},D=({el:d,anchor:h},m,v)=>{let w;for(;d&&d!==h;)w=p(d),s(d,m,v),d=w;s(h,m,v)},S=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),r(d),d=m;r(h)},O=(d,h,m,v,w,y,R,A,T)=>{h.type==="svg"?R="svg":h.type==="math"&&(R="mathml"),d==null?ne(h,m,v,w,y,R,A,T):wt(d,h,w,y,R,A,T)},ne=(d,h,m,v,w,y,R,A)=>{let T,E;const{props:F,shapeFlag:x,transition:U,dirs:B}=d;if(T=d.el=o(d.type,y,F&&F.is,F),x&8?u(T,d.children):x&16&&le(d.children,T,null,v,w,vr(d,y),R,A),B&&Bt(d,null,v,"created"),Z(T,d,d.scopeId,R,v),F){for(const se in F)se!=="value"&&!xn(se)&&i(T,se,null,F[se],y,v);"value"in F&&i(T,"value",null,F.value,y),(E=F.onVnodeBeforeMount)&&Je(E,v,d)}B&&Bt(d,null,v,"beforeMount");const q=Xu(w,U);q&&U.beforeEnter(T),s(T,h,m),((E=F&&F.onVnodeMounted)||q||B)&&ke(()=>{E&&Je(E,v,d),q&&U.enter(T),B&&Bt(d,null,v,"mounted")},w)},Z=(d,h,m,v,w)=>{if(m&&g(d,m),v)for(let y=0;y<v.length;y++)g(d,v[y]);if(w){let y=w.subTree;if(h===y||fc(y.type)&&(y.ssContent===h||y.ssFallback===h)){const R=w.vnode;Z(d,R,R.scopeId,R.slotScopeIds,w.parent)}}},le=(d,h,m,v,w,y,R,A,T=0)=>{for(let E=T;E<d.length;E++){const F=d[E]=A?At(d[E]):Qe(d[E]);I(null,F,h,m,v,w,y,R,A)}},wt=(d,h,m,v,w,y,R)=>{const A=h.el=d.el;let{patchFlag:T,dynamicChildren:E,dirs:F}=h;T|=d.patchFlag&16;const x=d.props||te,U=h.props||te;let B;if(m&&jt(m,!1),(B=U.onVnodeBeforeUpdate)&&Je(B,m,h,d),F&&Bt(h,d,m,"beforeUpdate"),m&&jt(m,!0),(x.innerHTML&&U.innerHTML==null||x.textContent&&U.textContent==null)&&u(A,""),E?je(d.dynamicChildren,E,A,m,v,vr(h,w),y):R||K(d,h,A,null,m,v,vr(h,w),y,!1),T>0){if(T&16)Et(A,x,U,m,w);else if(T&2&&x.class!==U.class&&i(A,"class",null,U.class,w),T&4&&i(A,"style",x.style,U.style,w),T&8){const q=h.dynamicProps;for(let se=0;se<q.length;se++){const Y=q[se],Te=x[Y],Ce=U[Y];(Ce!==Te||Y==="value")&&i(A,Y,Te,Ce,w,m)}}T&1&&d.children!==h.children&&u(A,h.children)}else!R&&E==null&&Et(A,x,U,m,w);((B=U.onVnodeUpdated)||F)&&ke(()=>{B&&Je(B,m,h,d),F&&Bt(h,d,m,"updated")},v)},je=(d,h,m,v,w,y,R)=>{for(let A=0;A<h.length;A++){const T=d[A],E=h[A],F=T.el&&(T.type===Oe||!An(T,E)||T.shapeFlag&198)?f(T.el):m;I(T,E,F,null,v,w,y,R,!0)}},Et=(d,h,m,v,w)=>{if(h!==m){if(h!==te)for(const y in h)!xn(y)&&!(y in m)&&i(d,y,h[y],null,w,v);for(const y in m){if(xn(y))continue;const R=m[y],A=h[y];R!==A&&y!=="value"&&i(d,y,A,R,w,v)}"value"in m&&i(d,"value",h.value,m.value,w)}},Ht=(d,h,m,v,w,y,R,A,T)=>{const E=h.el=d?d.el:a(""),F=h.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:U,slotScopeIds:B}=h;B&&(A=A?A.concat(B):B),d==null?(s(E,m,v),s(F,m,v),le(h.children||[],m,F,w,y,R,A,T)):x>0&&x&64&&U&&d.dynamicChildren?(je(d.dynamicChildren,U,m,w,y,R,A),(h.key!=null||w&&h===w.subTree)&&ac(d,h,!0)):K(d,h,m,F,w,y,R,A,T)},We=(d,h,m,v,w,y,R,A,T)=>{h.slotScopeIds=A,d==null?h.shapeFlag&512?w.ctx.activate(h,m,v,R,T):Sn(h,m,v,w,y,R,T):Xt(d,h,T)},Sn=(d,h,m,v,w,y,R)=>{const A=d.component=_f(d,v,w);if(za(d)&&(A.ctx.renderer=L),vf(A,!1,R),A.asyncDep){if(w&&w.registerDep(A,ue,R),!d.el){const T=A.subTree=oe(mt);k(null,T,h,m),d.placeholder=T.el}}else ue(A,d,h,m,w,y,R)},Xt=(d,h,m)=>{const v=h.component=d.component;if(cf(d,h,m))if(v.asyncDep&&!v.asyncResolved){X(v,h,m);return}else v.next=h,v.update();else h.el=d.el,v.vnode=h},ue=(d,h,m,v,w,y,R)=>{const A=()=>{if(d.isMounted){let{next:x,bu:U,u:B,parent:q,vnode:se}=d;{const Ke=cc(d);if(Ke){x&&(x.el=se.el,X(d,x,R)),Ke.asyncDep.then(()=>{d.isUnmounted||A()});return}}let Y=x,Te;jt(d,!1),x?(x.el=se.el,X(d,x,R)):x=se,U&&bs(U),(Te=x.props&&x.props.onVnodeBeforeUpdate)&&Je(Te,q,x,se),jt(d,!0);const Ce=Yi(d),ze=d.subTree;d.subTree=Ce,I(ze,Ce,f(ze.el),b(ze),d,w,y),x.el=Ce.el,Y===null&&lf(d,Ce.el),B&&ke(B,w),(Te=x.props&&x.props.onVnodeUpdated)&&ke(()=>Je(Te,q,x,se),w)}else{let x;const{el:U,props:B}=h,{bm:q,m:se,parent:Y,root:Te,type:Ce}=d,ze=un(h);jt(d,!1),q&&bs(q),!ze&&(x=B&&B.onVnodeBeforeMount)&&Je(x,Y,h),jt(d,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(Ce);const Ke=d.subTree=Yi(d);I(null,Ke,m,v,d,w,y),h.el=Ke.el}if(se&&ke(se,w),!ze&&(x=B&&B.onVnodeMounted)){const Ke=h;ke(()=>Je(x,Y,Ke),w)}(h.shapeFlag&256||Y&&un(Y.vnode)&&Y.vnode.shapeFlag&256)&&d.a&&ke(d.a,w),d.isMounted=!0,h=m=v=null}};d.scope.on();const T=d.effect=new wa(A);d.scope.off();const E=d.update=T.run.bind(T),F=d.job=T.runIfDirty.bind(T);F.i=d,F.id=d.uid,T.scheduler=()=>pi(F),jt(d,!0),E()},X=(d,h,m)=>{h.component=d;const v=d.vnode.props;d.vnode=h,d.next=null,Wu(d,h.props,v,m),Gu(d,h.children,m),pt(),Hi(d),gt()},K=(d,h,m,v,w,y,R,A,T=!1)=>{const E=d&&d.children,F=d?d.shapeFlag:0,x=h.children,{patchFlag:U,shapeFlag:B}=h;if(U>0){if(U&128){It(E,x,m,v,w,y,R,A,T);return}else if(U&256){rt(E,x,m,v,w,y,R,A,T);return}}B&8?(F&16&&Ne(E,w,y),x!==E&&u(m,x)):F&16?B&16?It(E,x,m,v,w,y,R,A,T):Ne(E,w,y,!0):(F&8&&u(m,""),B&16&&le(x,m,v,w,y,R,A,T))},rt=(d,h,m,v,w,y,R,A,T)=>{d=d||on,h=h||on;const E=d.length,F=h.length,x=Math.min(E,F);let U;for(U=0;U<x;U++){const B=h[U]=T?At(h[U]):Qe(h[U]);I(d[U],B,m,null,w,y,R,A,T)}E>F?Ne(d,w,y,!0,!1,x):le(h,m,v,w,y,R,A,T,x)},It=(d,h,m,v,w,y,R,A,T)=>{let E=0;const F=h.length;let x=d.length-1,U=F-1;for(;E<=x&&E<=U;){const B=d[E],q=h[E]=T?At(h[E]):Qe(h[E]);if(An(B,q))I(B,q,m,null,w,y,R,A,T);else break;E++}for(;E<=x&&E<=U;){const B=d[x],q=h[U]=T?At(h[U]):Qe(h[U]);if(An(B,q))I(B,q,m,null,w,y,R,A,T);else break;x--,U--}if(E>x){if(E<=U){const B=U+1,q=B<F?h[B].el:v;for(;E<=U;)I(null,h[E]=T?At(h[E]):Qe(h[E]),m,q,w,y,R,A,T),E++}}else if(E>U)for(;E<=x;)Se(d[E],w,y,!0),E++;else{const B=E,q=E,se=new Map;for(E=q;E<=U;E++){const Pe=h[E]=T?At(h[E]):Qe(h[E]);Pe.key!=null&&se.set(Pe.key,E)}let Y,Te=0;const Ce=U-q+1;let ze=!1,Ke=0;const Tn=new Array(Ce);for(E=0;E<Ce;E++)Tn[E]=0;for(E=B;E<=x;E++){const Pe=d[E];if(Te>=Ce){Se(Pe,w,y,!0);continue}let Ge;if(Pe.key!=null)Ge=se.get(Pe.key);else for(Y=q;Y<=U;Y++)if(Tn[Y-q]===0&&An(Pe,h[Y])){Ge=Y;break}Ge===void 0?Se(Pe,w,y,!0):(Tn[Ge-q]=E+1,Ge>=Ke?Ke=Ge:ze=!0,I(Pe,h[Ge],m,null,w,y,R,A,T),Te++)}const Di=ze?Zu(Tn):on;for(Y=Di.length-1,E=Ce-1;E>=0;E--){const Pe=q+E,Ge=h[Pe],Li=h[Pe+1],Mi=Pe+1<F?Li.el||Li.placeholder:v;Tn[E]===0?I(null,Ge,m,Mi,w,y,R,A,T):ze&&(Y<0||E!==Di[Y]?qe(Ge,m,Mi,2):Y--)}}},qe=(d,h,m,v,w=null)=>{const{el:y,type:R,transition:A,children:T,shapeFlag:E}=d;if(E&6){qe(d.component.subTree,h,m,v);return}if(E&128){d.suspense.move(h,m,v);return}if(E&64){R.move(d,h,m,L);return}if(R===Oe){s(y,h,m);for(let x=0;x<T.length;x++)qe(T[x],h,m,v);s(d.anchor,h,m);return}if(R===Es){D(d,h,m);return}if(v!==2&&E&1&&A)if(v===0)A.beforeEnter(y),s(y,h,m),ke(()=>A.enter(y),w);else{const{leave:x,delayLeave:U,afterLeave:B}=A,q=()=>{d.ctx.isUnmounted?r(y):s(y,h,m)},se=()=>{y._isLeaving&&y[wu](!0),x(y,()=>{q(),B&&B()})};U?U(y,q,se):se()}else s(y,h,m)},Se=(d,h,m,v=!1,w=!1)=>{const{type:y,props:R,ref:A,children:T,dynamicChildren:E,shapeFlag:F,patchFlag:x,dirs:U,cacheIndex:B}=d;if(x===-2&&(w=!1),A!=null&&(pt(),Ln(A,null,m,d,!0),gt()),B!=null&&(h.renderCache[B]=void 0),F&256){h.ctx.deactivate(d);return}const q=F&1&&U,se=!un(d);let Y;if(se&&(Y=R&&R.onVnodeBeforeUnmount)&&Je(Y,h,d),F&6)ps(d.component,m,v);else{if(F&128){d.suspense.unmount(m,v);return}q&&Bt(d,null,h,"beforeUnmount"),F&64?d.type.remove(d,h,m,L,v):E&&!E.hasOnce&&(y!==Oe||x>0&&x&64)?Ne(E,h,m,!1,!0):(y===Oe&&x&384||!w&&F&16)&&Ne(T,h,m),v&&Zt(d)}(se&&(Y=R&&R.onVnodeUnmounted)||q)&&ke(()=>{Y&&Je(Y,h,d),q&&Bt(d,null,h,"unmounted")},m)},Zt=d=>{const{type:h,el:m,anchor:v,transition:w}=d;if(h===Oe){Qt(m,v);return}if(h===Es){S(d);return}const y=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:R,delayLeave:A}=w,T=()=>R(m,y);A?A(d.el,y,T):T()}else y()},Qt=(d,h)=>{let m;for(;d!==h;)m=p(d),r(d),d=m;r(h)},ps=(d,h,m)=>{const{bum:v,scope:w,job:y,subTree:R,um:A,m:T,a:E}=d;Ji(T),Ji(E),v&&bs(v),w.stop(),y&&(y.flags|=8,Se(R,d,h,m)),A&&ke(A,h),ke(()=>{d.isUnmounted=!0},h)},Ne=(d,h,m,v=!1,w=!1,y=0)=>{for(let R=y;R<d.length;R++)Se(d[R],h,m,v,w)},b=d=>{if(d.shapeFlag&6)return b(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),m=h&&h[vu];return m?p(m):h};let N=!1;const P=(d,h,m)=>{d==null?h._vnode&&Se(h._vnode,null,null,!0):I(h._vnode||null,d,h,null,null,null,m),h._vnode=d,N||(N=!0,Hi(),Ha(),N=!1)},L={p:I,um:Se,m:qe,r:Zt,mt:Sn,mc:le,pc:K,pbc:je,n:b,o:t};return{render:P,hydrate:void 0,createApp:Bu(P)}}function vr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function jt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Xu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ac(t,e,n=!1){const s=t.children,r=e.children;if($(s)&&$(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=At(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ac(o,a)),a.type===ir&&a.patchFlag!==-1&&(a.el=o.el),a.type===mt&&!a.el&&(a.el=o.el)}}function Zu(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function cc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cc(e)}function Ji(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Qu=Symbol.for("v-scx"),ef=()=>Fe(Qu);function ey(t,e){return vi(t,null,e)}function ws(t,e,n){return vi(t,e,n)}function vi(t,e,n=te){const{immediate:s,deep:r,flush:i,once:o}=n,a=ye({},n),c=e&&s||!e&&i!=="post";let l;if(Gn){if(i==="sync"){const g=ef();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=et,g.resume=et,g.pause=et,g}}const u=_e;a.call=(g,_,I)=>st(g,u,_,I);let f=!1;i==="post"?a.scheduler=g=>{ke(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,_)=>{_?g():pi(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=gu(t,e,a);return Gn&&(l?l.push(p):c&&p()),p}function tf(t,e,n){const s=this.proxy,r=ae(t)?t.includes(".")?lc(s,t):()=>s[t]:t.bind(s,s);let i;j(e)?i=e:(i=e.handler,n=e);const o=os(this),a=vi(r,i.bind(s),n);return o(),a}function lc(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const nf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Le(e)}Modifiers`]||t[`${Jt(e)}Modifiers`];function sf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||te;let r=n;const i=e.startsWith("update:"),o=i&&nf(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>ae(u)?u.trim():u)),o.number&&(r=n.map(Os)));let a,c=s[a=hr(e)]||s[a=hr(Le(e))];!c&&i&&(c=s[a=hr(Jt(e))]),c&&st(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,st(l,t,6,r)}}const rf=new WeakMap;function uc(t,e,n=!1){const s=n?rf:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=uc(l,e,!0);u&&(a=!0,ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ie(t)&&s.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):ye(o,i),ie(t)&&s.set(t,o),o)}function rr(t,e){return!t||!Gs(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,Jt(e))||J(t,e))}function Yi(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:p,setupState:g,ctx:_,inheritAttrs:I}=t,M=Ms(t);let k,C;try{if(n.shapeFlag&4){const S=r||s,O=S;k=Qe(l.call(O,S,u,f,g,p,_)),C=a}else{const S=e;k=Qe(S.length>1?S(f,{attrs:a,slots:o,emit:c}):S(f,null)),C=e.props?a:of(a)}}catch(S){$n.length=0,tr(S,t,1),k=oe(mt)}let D=k;if(C&&I!==!1){const S=Object.keys(C),{shapeFlag:O}=D;S.length&&O&7&&(i&&S.some(si)&&(C=af(C,i)),D=mn(D,C,!1,!0))}return n.dirs&&(D=mn(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&gi(D,n.transition),k=D,Ms(M),k}const of=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gs(n))&&((e||(e={}))[n]=t[n]);return e},af=(t,e)=>{const n={};for(const s in t)(!si(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function cf(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Xi(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!rr(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Xi(s,o,l):!0:!!o;return!1}function Xi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!rr(n,i))return!0}return!1}function lf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const fc=t=>t.__isSuspense;function uf(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):yu(t)}const Oe=Symbol.for("v-fgt"),ir=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),Es=Symbol.for("v-stc"),$n=[];let xe=null;function ce(t=!1){$n.push(xe=t?null:[])}function ff(){$n.pop(),xe=$n[$n.length-1]||null}let zn=1;function Fs(t,e=!1){zn+=t,t<0&&xe&&e&&(xe.hasOnce=!0)}function dc(t){return t.dynamicChildren=zn>0?xe||on:null,ff(),zn>0&&xe&&xe.push(t),t}function ge(t,e,n,s,r,i){return dc(H(t,e,n,s,r,i,!0))}function Hr(t,e,n,s,r){return dc(oe(t,e,n,s,r,!0))}function Kn(t){return t?t.__v_isVNode===!0:!1}function An(t,e){return t.type===e.type&&t.key===e.key}const hc=({key:t})=>t??null,Is=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ae(t)||pe(t)||j(t)?{i:he,r:t,k:e,f:!!n}:t:null);function H(t,e=null,n=null,s=0,r=null,i=t===Oe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hc(e),ref:e&&Is(e),scopeId:ja,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:he};return a?(bi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ae(n)?8:16),zn>0&&!o&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const oe=df;function df(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Nu)&&(t=mt),Kn(t)){const a=mn(t,e,!0);return n&&bi(a,n),zn>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(t)]=a:xe.push(a)),a.patchFlag=-2,a}if(Sf(t)&&(t=t.__vccOpts),e){e=hf(e);let{class:a,style:c}=e;a&&!ae(a)&&(e.class=be(a)),ie(c)&&(di(c)&&!$(c)&&(c=ye({},c)),e.style=Zs(c))}const o=ae(t)?1:fc(t)?128:bu(t)?64:ie(t)?4:j(t)?2:0;return H(t,e,n,s,r,o,i,!0)}function hf(t){return t?di(t)||tc(t)?ye({},t):t:null}function mn(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?pf(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&hc(l),ref:e&&e.ref?n&&i?$(i)?i.concat(Is(e)):[i,Is(e)]:Is(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Oe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mn(t.ssContent),ssFallback:t.ssFallback&&mn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&gi(u,c.clone(u)),u}function pc(t=" ",e=0){return oe(ir,null,t,e)}function ys(t,e){const n=oe(Es,null,t);return n.staticCount=e,n}function nn(t="",e=!1){return e?(ce(),Hr(mt,null,t)):oe(mt,null,t)}function Qe(t){return t==null||typeof t=="boolean"?oe(mt):$(t)?oe(Oe,null,t.slice()):Kn(t)?At(t):oe(ir,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mn(t)}function bi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!tc(e)?e._ctx=he:r===3&&he&&(he.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:he},n=32):(e=String(e),s&64?(n=16,e=[pc(e)]):n=8);t.children=e,t.shapeFlag|=n}function pf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=be([e.class,s.class]));else if(r==="style")e.style=Zs([e.style,s.style]);else if(Gs(r)){const i=e[r],o=s[r];o&&i!==o&&!($(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Je(t,e,n,s=null){st(t,e,7,[n,s])}const gf=Za();let mf=0;function _f(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||gf,i={uid:mf++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ul(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sc(s,r),emitsOptions:uc(s,r),emit:null,emitted:null,propsDefaults:te,inheritAttrs:s.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sf.bind(null,i),t.ce&&t.ce(i),i}let _e=null;const yf=()=>_e||he;let Vs,Br;{const t=Xs(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Vs=e("__VUE_INSTANCE_SETTERS__",n=>_e=n),Br=e("__VUE_SSR_SETTERS__",n=>Gn=n)}const os=t=>{const e=_e;return Vs(t),t.scope.on(),()=>{t.scope.off(),Vs(e)}},Zi=()=>{_e&&_e.scope.off(),Vs(null)};function gc(t){return t.vnode.shapeFlag&4}let Gn=!1;function vf(t,e=!1,n=!1){e&&Br(e);const{props:s,children:r}=t.vnode,i=gc(t);ju(t,s,i,e),Ku(t,r,n||e);const o=i?bf(t,e):void 0;return e&&Br(!1),o}function bf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Lu);const{setup:s}=n;if(s){pt();const r=t.setupContext=s.length>1?Ef(t):null,i=os(t),o=is(s,t,0,[t.props,r]),a=ha(o);if(gt(),i(),(a||t.sp)&&!un(t)&&qa(t),a){if(o.then(Zi,Zi),e)return o.then(c=>{Qi(t,c)}).catch(c=>{tr(c,t,0)});t.asyncDep=o}else Qi(t,o)}else mc(t)}function Qi(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=$a(e)),mc(t)}function mc(t,e,n){const s=t.type;t.render||(t.render=s.render||et);{const r=os(t);pt();try{Mu(t)}finally{gt(),r()}}}const wf={get(t,e){return me(t,"get",""),t[e]}};function Ef(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wf),slots:t.slots,emit:t.emit,expose:e}}function or(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($a(ru(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Mn)return Mn[n](t)},has(e,n){return n in e||n in Mn}})):t.proxy}function If(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function Sf(t){return j(t)&&"__vccOpts"in t}const Ee=(t,e)=>hu(t,e,Gn);function _c(t,e,n){const s=(i,o,a)=>{Fs(-1);try{return oe(i,o,a)}finally{Fs(1)}},r=arguments.length;return r===2?ie(e)&&!$(e)?Kn(e)?s(t,null,[e]):s(t,e):s(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Kn(n)&&(n=[n]),s(t,e,n))}const Tf="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jr;const eo=typeof window<"u"&&window.trustedTypes;if(eo)try{jr=eo.createPolicy("vue",{createHTML:t=>t})}catch{}const yc=jr?t=>jr.createHTML(t):t=>t,Cf="http://www.w3.org/2000/svg",Af="http://www.w3.org/1998/Math/MathML",at=typeof document<"u"?document:null,to=at&&at.createElement("template"),Rf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?at.createElementNS(Cf,t):e==="mathml"?at.createElementNS(Af,t):n?at.createElement(t,{is:n}):at.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>at.createTextNode(t),createComment:t=>at.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>at.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{to.innerHTML=yc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=to.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Pf=Symbol("_vtc");function kf(t,e,n){const s=t[Pf];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const no=Symbol("_vod"),Of=Symbol("_vsh"),xf=Symbol(""),Nf=/(?:^|;)\s*display\s*:/;function Df(t,e,n){const s=t.style,r=ae(n);let i=!1;if(n&&!r){if(e)if(ae(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ss(s,a,"")}else for(const o in e)n[o]==null&&Ss(s,o,"");for(const o in n)o==="display"&&(i=!0),Ss(s,o,n[o])}else if(r){if(e!==n){const o=s[xf];o&&(n+=";"+o),s.cssText=n,i=Nf.test(n)}}else e&&t.removeAttribute("style");no in t&&(t[no]=i?s.display:"",t[Of]&&(s.display="none"))}const so=/\s*!important$/;function Ss(t,e,n){if($(n))n.forEach(s=>Ss(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Lf(t,e);so.test(n)?t.setProperty(Jt(s),n.replace(so,""),"important"):t[s]=n}}const ro=["Webkit","Moz","ms"],br={};function Lf(t,e){const n=br[e];if(n)return n;let s=Le(e);if(s!=="filter"&&s in t)return br[e]=s;s=Ys(s);for(let r=0;r<ro.length;r++){const i=ro[r]+s;if(i in t)return br[e]=i}return e}const io="http://www.w3.org/1999/xlink";function oo(t,e,n,s,r,i=Ll(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(io,e.slice(6,e.length)):t.setAttributeNS(io,e,n):n==null||i&&!_a(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ve(n)?String(n):n)}function ao(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?yc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=_a(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Pt(t,e,n,s){t.addEventListener(e,n,s)}function Mf(t,e,n,s){t.removeEventListener(e,n,s)}const co=Symbol("_vei");function Uf(t,e,n,s,r=null){const i=t[co]||(t[co]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=$f(e);if(s){const l=i[e]=Hf(s,r);Pt(t,a,l,c)}else o&&(Mf(t,a,o,c),i[e]=void 0)}}const lo=/(?:Once|Passive|Capture)$/;function $f(t){let e;if(lo.test(t)){e={};let s;for(;s=t.match(lo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jt(t.slice(2)),e]}let wr=0;const Ff=Promise.resolve(),Vf=()=>wr||(Ff.then(()=>wr=0),wr=Date.now());function Hf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;st(Bf(s,n.value),e,5,[s])};return n.value=t,n.attached=Vf(),n}function Bf(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const uo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,jf=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?kf(t,s,o):e==="style"?Df(t,n,s):Gs(e)?si(e)||Uf(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wf(t,e,s,o))?(ao(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&oo(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ae(s))?ao(t,Le(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),oo(t,e,s,o))};function Wf(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&uo(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return uo(e)&&ae(n)?!1:e in t}const _n=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>bs(e,n):e};function qf(t){t.target.composing=!0}function fo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dt=Symbol("_assign"),ty={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[dt]=_n(r);const i=s||r.props&&r.props.type==="number";Pt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Os(a)),t[dt](a)}),n&&Pt(t,"change",()=>{t.value=t.value.trim()}),e||(Pt(t,"compositionstart",qf),Pt(t,"compositionend",fo),Pt(t,"change",fo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[dt]=_n(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Os(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},ny={deep:!0,created(t,e,n){t[dt]=_n(n),Pt(t,"change",()=>{const s=t._modelValue,r=Jn(t),i=t.checked,o=t[dt];if($(s)){const a=oi(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(En(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(vc(t,i))})},mounted:ho,beforeUpdate(t,e,n){t[dt]=_n(n),ho(t,e,n)}};function ho(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if($(e))r=oi(e,s.props.value)>-1;else if(En(e))r=e.has(s.props.value);else{if(e===n)return;r=ss(e,vc(t,!0))}t.checked!==r&&(t.checked=r)}const sy={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=En(e);Pt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Os(Jn(o)):Jn(o));t[dt](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,hi(()=>{t._assigning=!1})}),t[dt]=_n(s)},mounted(t,{value:e}){po(t,e)},beforeUpdate(t,e,n){t[dt]=_n(n)},updated(t,{value:e}){t._assigning||po(t,e)}};function po(t,e){const n=t.multiple,s=$(e);if(!(n&&!s&&!En(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=Jn(o);if(n)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=oi(e,a)>-1}else o.selected=e.has(a);else if(ss(Jn(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Jn(t){return"_value"in t?t._value:t.value}function vc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const zf=["ctrl","shift","alt","meta"],Kf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>zf.some(n=>t[`${n}Key`]&&!e.includes(n))},ry=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const a=Kf[e[o]];if(a&&a(r,e))return}return t(r,...i)}))},Gf=ye({patchProp:jf},Rf);let go;function Jf(){return go||(go=Ju(Gf))}const Yf=((...t)=>{const e=Jf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Zf(s);if(!r)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Xf(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Xf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Zf(t){return ae(t)?document.querySelector(t):t}const Qf=""+new URL("LoadingTrain-Dl9H4zbh.png",import.meta.url).href,ed=""+new URL("Logo-DzrdicbF.gif",import.meta.url).href,td=""+new URL("student-h4fKY3lv.png",import.meta.url).href,nd=()=>{};var mo={};/**
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
 */const bc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},sd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),s.push(n[u],n[f],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw new rd;const p=i<<2|a>>4;if(s.push(p),l!==64){const g=a<<4&240|l>>2;if(s.push(g),f!==64){const _=l<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const id=function(t){const e=bc(t);return wc.encodeByteArray(e,!0)},Ec=function(t){return id(t).replace(/\./g,"")},Ic=function(t){try{return wc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ar(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dd(t){return(await fetch(t,{credentials:"include"})).ok}const Fn={};function hd(){const t={prod:[],emulator:[]};for(const e of Object.keys(Fn))Fn[e]?t.emulator.push(e):t.prod.push(e);return t}function pd(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let _o=!1;function gd(t,e){if(typeof window>"u"||typeof document>"u"||!ar(window.location.host)||Fn[t]===e||Fn[t]||_o)return;Fn[t]=e;function n(p){return`__firebase__banner__${p}`}const s="__firebase__banner",i=hd().prod.length>0;function o(){const p=document.getElementById(s);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,g){p.setAttribute("width","24"),p.setAttribute("id",g),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function l(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{_o=!0,o()},p}function u(p,g){p.setAttribute("id",g),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=pd(s),g=n("text"),_=document.getElementById(g)||document.createElement("span"),I=n("learnmore"),M=document.getElementById(I)||document.createElement("a"),k=n("preprendIcon"),C=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const D=p.element;a(D),u(M,I);const S=l();c(C,k),D.append(C,_,M,S),document.body.appendChild(D)}i?(_.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */const Id="FirebaseError";class $t extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Id,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Sd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new $t(r,a,s)}}function Sd(t,e){return t.replace(Td,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Td=/\{\$([^}]+)}/g;function Cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(yo(i)&&yo(o)){if(!yn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function yo(t){return t!==null&&typeof t=="object"}/**
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
 */class kd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new fd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xd(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Od(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Od(t){return t===qt?void 0:t}function xd(t){return t.instantiationMode==="EAGER"}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Dd={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Ld=ee.INFO,Md={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Ud=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Md[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cc{constructor(e){this.name=e,this._logLevel=Ld,this._logHandler=Ud,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const $d=(t,e)=>e.some(n=>t instanceof n);let vo,bo;function Fd(){return vo||(vo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vd(){return bo||(bo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ac=new WeakMap,Wr=new WeakMap,Rc=new WeakMap,Ir=new WeakMap,Ei=new WeakMap;function Hd(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Lt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ac.set(n,t)}).catch(()=>{}),Ei.set(e,t),e}function Bd(t){if(Wr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wr.set(t,e)}let qr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jd(t){qr=t(qr)}function Wd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Sr(this),e,...n);return Rc.set(s,e.sort?e.sort():[e]),Lt(s)}:Vd().includes(t)?function(...e){return t.apply(Sr(this),e),Lt(Ac.get(this))}:function(...e){return Lt(t.apply(Sr(this),e))}}function qd(t){return typeof t=="function"?Wd(t):(t instanceof IDBTransaction&&Bd(t),$d(t,Fd())?new Proxy(t,qr):t)}function Lt(t){if(t instanceof IDBRequest)return Hd(t);if(Ir.has(t))return Ir.get(t);const e=qd(t);return e!==t&&(Ir.set(t,e),Ei.set(e,t)),e}const Sr=t=>Ei.get(t);function zd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Lt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Lt(o.result),c.oldVersion,c.newVersion,Lt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Kd=["get","getKey","getAll","getAllKeys","count"],Gd=["put","add","delete","clear"],Tr=new Map;function wo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tr.get(e))return Tr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Gd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Kd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Tr.set(e,i),i}jd(t=>({...t,get:(e,n,s)=>wo(e,n)||t.get(e,n,s),has:(e,n)=>!!wo(e,n)||t.has(e,n)}));/**
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
 */class Jd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Yd(t){return t.getComponent()?.type==="VERSION"}const zr="@firebase/app",Eo="0.14.2";/**
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
 */const Kr="[DEFAULT]",Sh={[zr]:"fire-core",[Xd]:"fire-core-compat",[Qd]:"fire-analytics",[Zd]:"fire-analytics-compat",[th]:"fire-app-check",[eh]:"fire-app-check-compat",[nh]:"fire-auth",[sh]:"fire-auth-compat",[rh]:"fire-rtdb",[ih]:"fire-data-connect",[oh]:"fire-rtdb-compat",[ah]:"fire-fn",[ch]:"fire-fn-compat",[lh]:"fire-iid",[uh]:"fire-iid-compat",[fh]:"fire-fcm",[dh]:"fire-fcm-compat",[hh]:"fire-perf",[ph]:"fire-perf-compat",[gh]:"fire-rc",[mh]:"fire-rc-compat",[_h]:"fire-gcs",[yh]:"fire-gcs-compat",[vh]:"fire-fst",[wh]:"fire-fst-compat",[bh]:"fire-vertex","fire-js":"fire-js",[Eh]:"fire-js-all"};/**
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
 */const Hs=new Map,Th=new Map,Gr=new Map;function Io(t,e){try{t.container.addComponent(e)}catch(n){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yn(t){const e=t.name;if(Gr.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;Gr.set(e,t);for(const n of Hs.values())Io(n,t);for(const n of Th.values())Io(n,t);return!0}function Pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Me(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Ch={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new as("app","Firebase",Ch);/**
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
 */class Ah{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=Ih;function kc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Kr,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Mt.create("bad-app-name",{appName:String(r)});if(n||(n=Sc()),!n)throw Mt.create("no-options");const i=Hs.get(r);if(i){if(yn(n,i.options)&&yn(s,i.config))return i;throw Mt.create("duplicate-app",{appName:r})}const o=new Nd(r);for(const c of Gr.values())o.addComponent(c);const a=new Ah(n,s,o);return Hs.set(r,a),a}function Rh(t=Kr){const e=Hs.get(t);if(!e&&t===Kr&&Sc())return kc();if(!e)throw Mt.create("no-app",{appName:t});return e}function dn(t,e,n){let s=Sh[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(o.join(" "));return}Yn(new vn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ph="firebase-heartbeat-database",kh=1,Xn="firebase-heartbeat-store";let Cr=null;function Oc(){return Cr||(Cr=zd(Ph,kh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})})),Cr}async function Oh(t){try{const n=(await Oc()).transaction(Xn),s=await n.objectStore(Xn).get(xc(t));return await n.done,s}catch(e){if(e instanceof $t)_t.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:e?.message});_t.warn(n.message)}}}async function So(t,e){try{const s=(await Oc()).transaction(Xn,"readwrite");await s.objectStore(Xn).put(e,xc(t)),await s.done}catch(n){if(n instanceof $t)_t.warn(n.message);else{const s=Mt.create("idb-set",{originalErrorMessage:n?.message});_t.warn(s.message)}}}function xc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xh=1024,Nh=30;class Dh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=To();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>Nh){const r=Uh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){_t.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=To(),{heartbeatsToSend:n,unsentEntries:s}=Lh(this._heartbeatsCache.heartbeats),r=Ec(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return _t.warn(e),""}}}function To(){return new Date().toISOString().substring(0,10)}function Lh(t,e=xh){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Co(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Co(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Mh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wd()?Ed().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Oh(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return So(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return So(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Co(t){return Ec(JSON.stringify({version:2,heartbeats:t})).length}function Uh(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function $h(t){Yn(new vn("platform-logger",e=>new Jd(e),"PRIVATE")),Yn(new vn("heartbeat",e=>new Dh(e),"PRIVATE")),dn(zr,Eo,t),dn(zr,Eo,"esm2020"),dn("fire-js","")}$h("");function Nc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fh=Nc,Dc=new as("auth","Firebase",Nc());/**
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
 */function He(t,...e){throw Ii(t,...e)}function tt(t,...e){return Ii(t,...e)}function Lc(t,e,n){const s={...Fh(),[e]:n};return new as("auth","Firebase",s).create(e,{appName:t.name})}function ht(t){return Lc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ii(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Dc.create(t,...e)}function V(t,e,...n){if(!t)throw Ii(e,...n)}function ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ts(e),new Error(e)}function yt(t,e){t||ut(e)}/**
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
 */class Mc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zh=new us(3e4,6e4);function Ft(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Vt(t,e,n,s,r={}){return Uc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=cs({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return _d()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&ar(t.emulatorConfig.host)&&(l.credentials="include"),Mc.fetch()(await $c(t,t.config.apiHost,n,a),l)})}async function Uc(t,e,n){t._canInitEmulator=!1;const s={...Wh,...e};try{const r=new Gh(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw vs(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Lc(t,u,l);He(t,u)}}catch(r){if(r instanceof $t)throw r;He(t,"network-request-failed",{message:String(r)})}}async function fs(t,e,n,s,r={}){const i=await Vt(t,e,n,s,r);return"mfaPendingCredential"in i&&He(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function $c(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Si(t.config,r):`${t.config.apiScheme}://${r}`;return qh.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Kh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tt(this.auth,"network-request-failed")),zh.get())})}}function vs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=tt(t,e,s);return r.customData._tokenResponse=n,r}function Ro(t){return t!==void 0&&t.enterprise!==void 0}class Jh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Kh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Yh(t,e){return Vt(t,"GET","/v2/recaptchaConfig",Ft(t,e))}/**
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
 */async function Zn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof $t&&Qh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Qh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */async function Ws(t){const e=t.auth,n=await t.getIdToken(),s=await Zn(t,js(e,{idToken:n}));V(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?Fc(r.providerUserInfo):[],o=np(t.providerData,i),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!o?.length,l=a?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Yr(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function tp(t){const e=bt(t);await Ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function np(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Fc(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function sp(t,e){const n=await Uc(t,{},async()=>{const s=cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await $c(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return t.emulatorConfig&&ar(t.emulatorConfig.host)&&(c.credentials="include"),Mc.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rp(t,e){return Vt(t,"POST","/v2/accounts:revokeToken",Ft(t,e))}/**
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
 */function St(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ue{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new ep(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zh(this,e)}reload(){return tp(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ws(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(ht(this.auth));const e=await this.getIdToken();return await Zn(this,Xh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:p,isAnonymous:g,providerData:_,stsTokenManager:I}=n;V(f&&I,e,"internal-error");const M=hn.fromJSON(this.name,I);V(typeof f=="string",e,"internal-error"),St(s,e.name),St(r,e.name),V(typeof p=="boolean",e,"internal-error"),V(typeof g=="boolean",e,"internal-error"),St(i,e.name),St(o,e.name),St(a,e.name),St(c,e.name),St(l,e.name),St(u,e.name);const k=new Ue({uid:f,auth:e,email:r,emailVerified:p,displayName:s,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:M,createdAt:l,lastLoginAt:u});return _&&Array.isArray(_)&&(k.providerData=_.map(C=>({...C}))),c&&(k._redirectEventId=c),k}static async _fromIdTokenResponse(e,n,s=!1){const r=new hn;r.updateFromServerResponse(n);const i=new Ue({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ws(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];V(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Fc(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,a=new hn;a.updateFromIdToken(s);const c=new Ue({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Yr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
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
 */function Cs(t,e,n){return`firebase:${t}:${e}:${n}`}class pn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Cs(this.userKey,r.apiKey,i),this.fullPersistenceKey=Cs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await js(this.auth,{idToken:e}).catch(()=>{});return n?Ue._fromGetAccountInfoResponse(this.auth,n,e):null}return Ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pn(ft(Oo),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ft(Oo);const o=Cs(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const p=await js(e,{idToken:u}).catch(()=>{});if(!p)break;f=await Ue._fromGetAccountInfoResponse(e,p,u)}else f=Ue._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new pn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new pn(i,e,s))}}/**
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
 */function xo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zc(e))return"Blackberry";if(Kc(e))return"Webos";if(Bc(e))return"Safari";if((e.includes("chrome/")||jc(e))&&!e.includes("edge/"))return"Chrome";if(qc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Hc(t=Ie()){return/firefox\//i.test(t)}function Bc(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jc(t=Ie()){return/crios\//i.test(t)}function Wc(t=Ie()){return/iemobile/i.test(t)}function qc(t=Ie()){return/android/i.test(t)}function zc(t=Ie()){return/blackberry/i.test(t)}function Kc(t=Ie()){return/webos/i.test(t)}function Ci(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ip(t=Ie()){return Ci(t)&&!!window.navigator?.standalone}function op(){return bd()&&document.documentMode===10}function Gc(t=Ie()){return Ci(t)||qc(t)||Kc(t)||zc(t)||/windows phone/i.test(t)||Wc(t)}/**
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
 */async function cp(t,e={}){return Vt(t,"GET","/v2/passwordPolicy",Ft(t,e))}/**
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
 */class fp{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new No(this),this.idTokenSubscription=new No(this),this.beforeStateQueue=new ap(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await pn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await js(this,{idToken:e}),s=await Ue._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Me(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ws(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(ht(this));const n=e?bt(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cp(this),n=new up(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await rp(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Vh(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Yt(t){return bt(t)}class No{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ad(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function bp(t,e){const n=Pc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(yn(i,e??{}))return r;He(r,"already-initialized")}return n.initialize({options:e})}function wp(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(ft);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function Ep(t,e,n){const s=Yt(t);V(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Zc(e),{host:o,port:a}=Ip(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){V(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),V(yn(l,s.config.emulator)&&yn(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,ar(o)?(dd(`${i}//${o}${c}`),gd("Auth",!0)):Sp()}function Zc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ip(t){const e=Zc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Lo(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Lo(o)}}}function Lo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Sp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */async function Cp(t,e){return fs(t,"POST","/v1/accounts:signInWithPassword",Ft(t,e))}/**
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
 */async function Ap(t,e){return fs(t,"POST","/v1/accounts:signInWithEmailLink",Ft(t,e))}async function Rp(t,e){return fs(t,"POST","/v1/accounts:signInWithEmailLink",Ft(t,e))}/**
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
 */async function gn(t,e){return fs(t,"POST","/v1/accounts:signInWithIdp",Ft(t,e))}/**
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
 */const Pp="http://localhost";class Kt extends Ai{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):He("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new Kt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gn(e,n)}buildRequest(){const e={requestUri:Pp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cs(n)}return e}}/**
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
 */class kt extends ds{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ot.credential(n,s)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class xt extends ds{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
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
 */class Nt extends ds{constructor(){super("twitter.com")}static credential(e,n){return Kt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Nt.credential(n,s)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
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
 */async function xp(t,e){return fs(t,"POST","/v1/accounts:signUp",Ft(t,e))}/**
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
 */class Gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ue._fromIdTokenResponse(e,s,r),o=Mo(s);return new Gt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Mo(s);return new Gt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Mo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qs extends $t{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,qs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new qs(e,n,s,r)}}function el(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qs._fromErrorAndOperation(t,i,e,s):i})}async function Np(t,e,n=!1){const s=await Zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gt._forOperation(t,"link",s)}/**
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
 */async function Dp(t,e,n=!1){const{auth:s}=t;if(Me(s.app))return Promise.reject(ht(s));const r="reauthenticate";try{const i=await Zn(t,el(s,r,e,t),n);V(i.idToken,s,"internal-error");const o=Ti(i.idToken);V(o,s,"internal-error");const{sub:a}=o;return V(t.uid===a,s,"user-mismatch"),Gt._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&He(s,"user-mismatch"),i}}/**
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
 */async function tl(t,e,n=!1){if(Me(t.app))return Promise.reject(ht(t));const s="signIn",r=await el(t,s,e),i=await Gt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Lp(t,e){return tl(Yt(t),e)}/**
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
 */async function nl(t){const e=Yt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Mp(t,e,n){if(Me(t.app))return Promise.reject(ht(t));const s=Yt(t),o=await Xr(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xp).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&nl(t),c}),a=await Gt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Up(t,e,n){return Me(t.app)?Promise.reject(ht(t)):Lp(bt(t),In.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&nl(t),s})}function $p(t,e,n,s){return bt(t).onIdTokenChanged(e,n,s)}function Fp(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}function Vp(t,e,n,s){return bt(t).onAuthStateChanged(e,n,s)}function Hp(t){return bt(t).signOut()}const zs="__sak";/**
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
 */class sl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zs,"1"),this.storage.removeItem(zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Bp=1e3,jp=10;class rl extends sl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);op()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,jp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Bp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rl.type="LOCAL";const Wp=rl;/**
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
 */function qp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class lr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new lr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await qp(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lr.receivers=[];/**
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
 */class zp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Pi("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function Kp(t){nt().location.href=t}/**
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
 */function al(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function Gp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jp(){return navigator?.serviceWorker?.controller||null}function Yp(){return al()?self:null}/**
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
 */const cl="firebaseLocalStorageDb",Xp=1,Ks="firebaseLocalStorage",ll="fbase_key";class hs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ur(t,e){return t.transaction([Ks],e?"readwrite":"readonly").objectStore(Ks)}function Zp(){const t=indexedDB.deleteDatabase(cl);return new hs(t).toPromise()}function Zr(){const t=indexedDB.open(cl,Xp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ks,{keyPath:ll})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ks)?e(s):(s.close(),await Zp(),e(await Zr()))})})}async function Uo(t,e,n){const s=ur(t,!0).put({[ll]:e,value:n});return new hs(s).toPromise()}async function Qp(t,e){const n=ur(t,!1).get(e),s=await new hs(n).toPromise();return s===void 0?null:s.value}function $o(t,e){const n=ur(t,!0).delete(e);return new hs(n).toPromise()}const eg=800,tg=3;class ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>tg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return al()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lr._getInstance(Yp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Gp(),!this.activeServiceWorker)return;this.sender=new zp(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zr();return await Uo(e,zs,"1"),await $o(e,zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Qp(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$o(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ur(r,!1).getAll();return new hs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ul.type="LOCAL";const ng=ul;new us(3e4,6e4);/**
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
 */const cg="pendingRedirect",As=new Map;class lg extends fl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=As.get(this.auth._key());if(!e){try{const s=await ug(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}As.set(this.auth._key(),e)}return this.bypassAuthState||As.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ug(t,e){const n=hg(e),s=dg(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function fg(t,e){As.set(t._key(),e)}function dg(t){return ft(t._redirectPersistence)}function hg(t){return Cs(cg,t.config.apiKey,t.name)}async function pg(t,e,n=!1){if(Me(t.app))return Promise.reject(ht(t));const s=Yt(t),r=sg(s,e),o=await new lg(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const gg=600*1e3;class mg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_g(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!dl(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(tt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fo(e))}saveEventToCache(e){this.cachedEventUids.add(Fo(e)),this.lastProcessedEventTime=Date.now()}}function Fo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dl({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function _g(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dl(t);default:return!1}}/**
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
 */const Ng={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dg=500,Lg=600,Mg="_blank",Ug="http://localhost";class Ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $g(t,e,n,s=Dg,r=Lg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...Ng,width:s.toString(),height:r.toString(),top:i,left:o},l=Ie().toLowerCase();n&&(a=jc(l)?Mg:n),Hc(l)&&(e=e||Ug,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(ip(l)&&a!=="_self")return Fg(e||"",a),new Ho(null);const f=window.open(e||"",a,u);V(f,t,"popup-blocked");try{f.focus()}catch{}return new Ho(f)}function Fg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Rr="webStorageSupport";class Wg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ol,this._completeRedirectFn=pg,this._overrideRedirectResult=fg}async _openPopup(e,n,s,r){yt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Bo(e,n,s,Jr(),r);return $g(e,i,Pi())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Bo(e,n,s,Jr(),r);return Kp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(yt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xg(e),s=new mg(e);return n.register("authEvent",r=>(V(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rr,{type:Rr},r=>{const i=r?.[0]?.[Rr];i!==void 0&&n(!!i),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gc()||Bc()||Ci()}}const qg=Wg;var jo="@firebase/auth",Wo="1.11.0";/**
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
 */class zg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Kg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gg(t){Yn(new vn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jc(t)},l=new fp(s,r,i,c);return wp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Yn(new vn("auth-internal",e=>{const n=Yt(e.getProvider("auth").getImmediate());return(s=>new zg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(jo,Wo,Kg(t)),dn(jo,Wo,"esm2020")}/**
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
 */const Jg=300,Yg=Tc("authIdTokenMaxAge")||Jg;let qo=null;const Xg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Yg)return;const r=n?.token;qo!==r&&(qo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Zg(t=Rh()){const e=Pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bp(t,{popupRedirectResolver:qg,persistence:[ng,Wp,ol]}),s=Tc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Xg(i.toString());Fp(n,o,()=>o(n.currentUser)),$p(n,a=>o(a))}}const r=ud("auth");return r&&Ep(n,`http://${r}`),n}function Qg(){return document.getElementsByTagName("head")?.[0]??document}dp({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=tt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Qg().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gg("Browser");var em="firebase",tm="12.2.1";/**
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
 */dn(em,tm,"app");const nm={apiKey:"AIzaSyAPw8mtj5DM7z9g5MHOfHhDPuqJl4RmX3k",authDomain:"sdgs-journey.firebaseapp.com",projectId:"sdgs-journey",storageBucket:"sdgs-journey.firebasestorage.app",messagingSenderId:"233910289851",appId:"1:233910289851:web:e2641b83540889819a309e"},sm=kc(nm),Ps=Zg(sm);console.log(!1);const rm="https://api.sdgs-journey.com/api/v1",zo=parseInt("5242880")||5242880,Ko="image/jpeg,image/jpg,image/png,image/gif,image/webp".split(",");class im{constructor(){this.baseURL=rm}async request(e,n={}){if(!this.baseURL||this.baseURL.trim()==="")throw console.warn("API_BASE_URL is empty, skipping API call for:",e),new Error("API_BASE_URL_NOT_CONFIGURED");const s=`${this.baseURL}${e}`,r={headers:{"Content-Type":"application/json",...n.headers},...n},i=localStorage.getItem("auth_token");i&&(r.headers.Authorization=`Bearer ${i}`);try{const o=await fetch(s,r);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const a=o.headers.get("content-type");return a&&a.includes("application/json")?await o.json():o}catch(o){throw console.error("API request failed:",o),o}}validateImageFile(e){const n=[];if(!e)return n.push("No file selected"),n;if(Ko.includes(e.type)||n.push(`Invalid file type. Allowed types: ${Ko.join(", ")}`),e.size>zo){const s=(zo/1024/1024).toFixed(1);n.push(`File size too large. Maximum size: ${s}MB`)}return n}async uploadImage(e,n="/"){const s=this.validateImageFile(e);if(s.length>0)throw new Error(s.join(", "));const r=new FormData;r.append("files",e),r.append("folder",n);const i=localStorage.getItem("auth_token"),o=i;try{const a=await fetch(`${this.baseURL}/media/upload`,{method:"POST",headers:{...o?{Authorization:`Bearer ${i}`}:{}},body:r});if(!a.ok){let l=`Upload failed (${a.status})`;try{const u=await a.text();u&&(l+=`: ${u}`)}catch{}throw new Error(l)}const c=await a.json();if(!c.uploaded_files||!Array.isArray(c.uploaded_files)||c.uploaded_files.length===0)throw new Error("Invalid server response: missing or empty uploaded_files array");return c}catch(a){throw console.error("Image upload failed:",a),a}}async deleteImage(e){if(!e||!Array.isArray(e)&&typeof e!="string")throw new Error("Invalid files parameter: must be an array of file URLs or a single file URL string");const n=Array.isArray(e)?e:[e],s=localStorage.getItem("auth_token"),r=s;try{const i=await fetch(`${this.baseURL}/media/delete`,{method:"DELETE",headers:{"Content-Type":"application/json",...r?{Authorization:`Bearer ${s}`}:{}},body:JSON.stringify({file_urls:n})});if(!i.ok){let o=`Delete failed (${i.status})`;try{const a=await i.text();a&&(o+=`: ${a}`)}catch{}throw new Error(o)}try{return await i.json()}catch{return{success:!0}}}catch(i){throw console.error("Image delete failed:",i),i}}async getArticles(){return this.request("/articles")}async getArticle(e){return this.request(`/articles/${e}`)}async createArticle(e){return this.request("/articles",{method:"POST",body:JSON.stringify(e)})}async updateArticle(e,n){return this.request(`/articles/${e}`,{method:"PUT",body:JSON.stringify(n)})}async deleteArticle(e){return this.request(`/articles/${e}`,{method:"DELETE"})}async login(e){return this.request("/auth/login",{method:"POST",body:JSON.stringify(e)})}async register(e){return console.log(JSON.stringify(e)),this.request("/auth/register",{method:"POST",body:JSON.stringify(e)})}async getInstitutions(){return this.request("/institutions/public")}async getProfile(e){return this.request("/auth/user",{method:"GET",body:JSON.stringify(e)})}async updateProfile(e){return this.request("/users/profile",{method:"PUT",body:JSON.stringify(e)})}async getShowcases(e,n={}){const s=new URLSearchParams;n.page&&s.append("page",n.page),n.limit&&s.append("limit",n.limit),n.order&&s.append("order",n.order),n.title&&s.append("title",n.title),n.startDate&&s.append("startDate",n.startDate),n.endDate&&s.append("endDate",n.endDate);const r=s.toString(),i=`/institutions/${e}/showcase${r?`?${r}`:""}`;return this.request(i)}async createShowcase(e,n){return this.request(`/institutions/${e}/showcase`,{method:"POST",body:JSON.stringify(n)})}async getOwnShowcases(e,n){return this.request(`/institutions/${e}/showcase/own?user_id=${n}`)}async getShowcase(e,n){return this.request(`/institutions/${e}/showcase/${n}`)}async updateShowcase(e,n,s){return this.request(`/institutions/${e}/showcase/${n}`,{method:"PUT",body:JSON.stringify(s)})}async deleteShowcase(e,n){return this.request(`/institutions/${e}/showcase/${n}`,{method:"DELETE"})}async getShowcaseReactionUsers(e,n,s){return this.request(`/institutions/${e}/showcase/${n}/reactions/${s}/users`)}async getShowcaseReactions(e,n){return this.request(`/institutions/${e}/showcase/${n}/reactions`)}async getShowcaseComments(e,n){return this.request(`/institutions/${e}/showcase/${n}/comments`)}async addShowcaseLike(e,n){return this.request(`/institutions/${e}/showcase/${n}/like`,{method:"POST"})}async deleteShowcaseLike(e,n){return this.request(`/institutions/${e}/showcase/${n}/like`,{method:"DELETE"})}async createShowcaseComment(e,n,s){return this.request(`/institutions/${e}/showcase/${n}/comments`,{method:"POST",body:JSON.stringify(s)})}async getActivities(e={}){const n=new URLSearchParams;e.userId&&n.append("userId",e.userId),e.page&&n.append("page",e.page),e.limit&&n.append("limit",e.limit),e.order&&n.append("order",e.order),e.title&&n.append("title",e.title),e.startDate&&n.append("startDate",e.startDate),e.endDate&&n.append("endDate",e.endDate);const s=n.toString(),r=`/activities${s?`?${s}`:""}`;return this.request(r)}async getActivity(e){return this.request(`/activities/${e}`)}async createActivity(e){return this.request("/activities",{method:"POST",body:JSON.stringify(e)})}async updateActivity(e,n){return this.request(`/activities/${e}`,{method:"PUT",body:JSON.stringify(n)})}async removeActivity(e){return this.request(`/activities/${e}`,{method:"DELETE"})}async getOwnActivities(e,n){return this.request(`/activities/${e}/own?userId=${n}`)}async submitJoinRequest(e,n,s){return this.request(`/activities/${e}/join-requests?userId=${n}`,{method:"POST",body:JSON.stringify(s)})}async getJoinRequests(e){return this.request(`/activities/${e}/join-requests`)}async approveJoinRequest(e,n,s){return this.request(`/activities/${e}/join-requests/${n}?approve=${s}`,{method:"POST"})}async getPosts(e,n){return this.request(`/institutions/${e}/posts?related_activity_id=${n}`)}async getPost(e,n){return this.request(`/institutions/${e}/posts/${n}`)}async updatePost(e,n,s){return this.request(`/institutions/${e}/posts/${n}`,{method:"PUT",body:JSON.stringify(s)})}async deletePost(e,n){return this.request(`/institutions/${e}/posts/${n}`,{method:"DELETE"})}async addPostLike(e,n,s){return this.request(`/institutions/${e}/posts/${n}/like?userId=${s}`,{method:"POST"})}async removePostLike(e,n,s){return this.request(`/institutions/${e}/posts/${n}/like?userId=${s}`,{method:"DELETE"})}async createComment(e,n,s){return this.request(`/institutions/${e}/posts/${n}/comments`,{method:"POST",body:JSON.stringify(s)})}async getComments(e,n){return this.request(`/institutions/${e}/posts/${n}/comments`)}}const Pr=new im,W=rs({isAuthenticated:!1,user:null});let ks;const om=new Promise(t=>{ks=t});Vp(Ps,t=>{if(t){W.isAuthenticated=!0;const e=localStorage.getItem("user_data");if(e){const n=JSON.parse(e);W.user=n}else W.user=null;t.getIdToken().then(n=>{localStorage.setItem("auth_token",n)})}else{const e=localStorage.getItem("user_data"),n=localStorage.getItem("auth_token");if(e&&n){const s=JSON.parse(e);["admin_token","teacher_token","student_token","visitor_token"].includes(n)?(W.isAuthenticated=!0,W.user=s):(W.isAuthenticated=!1,W.user=null,localStorage.removeItem("auth_token"),localStorage.removeItem("user_data"))}else W.isAuthenticated=!1,W.user=null,localStorage.removeItem("auth_token"),localStorage.removeItem("user_data")}ks&&(ks(),ks=null)});const Oi=()=>{const t={admin:{account:"admin",password:"admin"},teacher:{account:"tc",password:"tc"}},e=async(g,_,I,M,k)=>{try{const C=await Mp(Ps,_,I),D=await C.user.getIdToken();console.log("Firebase registration successful"),localStorage.setItem("auth_token",D);const S={full_name:g,institution_id:1,role:k,id_token:D};console.log(S);try{const O=await Pr.register(S);console.log("Backend registration successful:",O)}catch(O){console.error("Backend registration failed:",O);const ne=!1,Z=O.message?.includes("ERR_CONNECTION_REFUSED")||O.message?.includes("Failed to fetch")||O.message?.includes("NetworkError")||O.message?.includes("API_BASE_URL_NOT_CONFIGURED");ne&&Z||console.warn("User registered in Firebase but backend registration failed")}return W.user={full_name:g,institution_id:M,role:k,id_token:D,email:C.user.email,uid:C.user.uid,displayName:"老師"},W.isAuthenticated=!0,localStorage.setItem("auth_token",D),localStorage.setItem("user_data",JSON.stringify(W.user)),{success:!0,user:W.user}}catch(C){return console.error("Registration Error:",C),C.code==="auth/email-already-in-use"?{success:!1,message:"此電子郵件已被註冊"}:C.code==="auth/weak-password"?{success:!1,message:"密碼強度不足"}:C.code==="auth/invalid-email"?{success:!1,message:"無效的電子郵件格式"}:{success:!1,message:C.message||"註冊失敗，請稍後再試"}}},n=async g=>{const _={id_token:"eyJhbGciOiJSUzI1NiIsImtpZCI6ImUzZWU3ZTAyOGUzODg1YTM0NWNlMDcwNTVmODQ2ODYyMjU1YTcwNDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2Rncy1qb3VybmV5IiwiYXVkIjoic2Rncy1qb3VybmV5IiwiYXV0aF90aW1lIjoxNzU4MDA1Njc2LCJ1c2VyX2lkIjoiemRwZ1JqY2NlVWVqNzFGSmZFWnIwZk1UdnhsMiIsInN1YiI6InpkcGdSamNjZVVlajcxRkpmRVpyMGZNVHZ4bDIiLCJpYXQiOjE3NTgwMDU2NzYsImV4cCI6MTc1ODAwOTI3NiwiZW1haWwiOiJ0ZXN0OThAc2Rnc2pvdXJuZXkuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3Q5OEBzZGdzam91cm5leS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Z6-8m6VlNV1IZ6fnMCifgP1flT3zZRVxhfovKUyvdZ0nwodxkgfcjlsSavH6tnEaijdOKQYCm5WL016EPpNK5k2nT7OuO269rfAsNOs9JC6VAgHbFVWVyV4WLF6ssVbpEQCEd6z3RTGRX2NJf0BS3dXyozAOMuUbz_wMeNFNe4I_8Os19FAJZFGLjATBkkm1ccqEtKpyYoZBE0loQ6g4VxH-z8xuF7GPimpMnVrB-UYAmyK6NPXJt4AKEMbXkIkTM8kBf3f3dwP5GxoG_WlWpIdVWuVANQwjkbpYi6nLvCFlWFd0eNg_GjhJ9Xl7xc_ecyo0COXIo97587V3RiBoDw",full_name:"Test Teacher User",role:"teacher",institution_id:1};localStorage.setItem("auth_token",_.id_token);try{const I=await Pr.register(_);console.log("Backend registration successful:",I)}catch(I){console.error("Backend registration failed:",I),console.warn("User registered in Firebase but backend registration failed")}},s=async(g,_)=>{try{localStorage.removeItem("user_data"),W.user=null;const M=await(await Up(Ps,g,_)).user.getIdToken();localStorage.setItem("auth_token",M);try{const k=await Pr.login({id_token:M});console.log("Backend login successful:",k),W.user=k.user}catch(k){return console.error("Backend login failed:",k),localStorage.removeItem("auth_token"),{success:!1,message:"後端登入失敗，請稍後再試"}}return W.isAuthenticated=!0,localStorage.setItem("user_data",JSON.stringify(W.user)),{success:!0}}catch(I){return console.error("Login Error:",I),localStorage.removeItem("auth_token"),localStorage.removeItem("user_data"),W.user=null,W.isAuthenticated=!1,{success:!1,message:I.message}}},r=async(g,_)=>await s(g,_),i=(g,_={})=>{switch(W.isAuthenticated=!0,g){case"admin":W.user={account:_.account||"admin",role:"admin",displayName:"管理員",icon:"fa-user-shield",uid:"admin_uid"},localStorage.setItem("auth_token","admin_token"),localStorage.setItem("user_data",JSON.stringify(W.user));break;case"teacher":W.user={account:_.account||"teacher",role:"teacher",displayName:"老師",icon:"fa-user-tie",uid:"teacher_uid"},localStorage.setItem("auth_token","teacher_token"),localStorage.setItem("user_data",JSON.stringify(W.user));break;case"student":W.user={account:_.name||"學生",role:"student",displayName:"學生",icon:"fa-user-graduate",uid:"student_uid"},localStorage.setItem("auth_token","student_token"),localStorage.setItem("user_data",JSON.stringify(W.user));break;case"visitor":W.user={account:"訪客",role:"visitor",displayName:"訪客",icon:"fa-user",uid:"visitor_uid"},localStorage.setItem("auth_token","visitor_token"),localStorage.setItem("user_data",JSON.stringify(W.user));break}return{success:!0}},o=(g,_)=>g===t.admin.account&&_===t.admin.password?i("admin",{account:g}):{success:!1,message:"帳號或密碼錯誤"},a=(g,_)=>g===t.teacher.account&&_===t.teacher.password?i("teacher",{account:g}):{success:!1,message:"帳號或密碼錯誤"},c=async()=>{try{await Hp(Ps)}catch(g){console.error("Sign out error",g)}W.isAuthenticated=!1,W.user=null,localStorage.removeItem("auth_token"),localStorage.removeItem("user_data")},l=Ee(()=>W.user&&W.user.role==="admin"),u=Ee(()=>W.user&&W.user.role==="teacher"),f=Ee(()=>W.user&&W.user.role==="student"),p=Ee(()=>W.user&&W.user.role==="visitor");return{...lu(W),isAdmin:l,isTeacher:u,isStudent:f,isVisitor:p,selectRole:i,adminLogin:o,teacherLogin:a,logout:c,registerWithEmailAndPassword:e,loginWithEmailAndPassword:r,loginWithCredentials:s,test:n}};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const sn=typeof document<"u";function hl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function am(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&hl(t.default)}const G=Object.assign;function kr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Be(r)?r.map(t):t(r)}return n}const Hn=()=>{},Be=Array.isArray,pl=/#/g,cm=/&/g,lm=/\//g,um=/=/g,fm=/\?/g,gl=/\+/g,dm=/%5B/g,hm=/%5D/g,ml=/%5E/g,pm=/%60/g,_l=/%7B/g,gm=/%7C/g,yl=/%7D/g,mm=/%20/g;function xi(t){return encodeURI(""+t).replace(gm,"|").replace(dm,"[").replace(hm,"]")}function _m(t){return xi(t).replace(_l,"{").replace(yl,"}").replace(ml,"^")}function Qr(t){return xi(t).replace(gl,"%2B").replace(mm,"+").replace(pl,"%23").replace(cm,"%26").replace(pm,"`").replace(_l,"{").replace(yl,"}").replace(ml,"^")}function ym(t){return Qr(t).replace(um,"%3D")}function vm(t){return xi(t).replace(pl,"%23").replace(fm,"%3F")}function bm(t){return t==null?"":vm(t).replace(lm,"%2F")}function es(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const wm=/\/$/,Em=t=>t.replace(wm,"");function Or(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Cm(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:es(o)}}function Im(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Go(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sm(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&bn(e.matched[s],n.matched[r])&&vl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Tm(t[n],e[n]))return!1;return!0}function Tm(t,e){return Be(t)?Jo(t,e):Be(e)?Jo(e,t):t===e}function Jo(t,e){return Be(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Cm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ts;(function(t){t.pop="pop",t.push="push"})(ts||(ts={}));var Bn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bn||(Bn={}));function Am(t){if(!t)if(sn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Em(t)}const Rm=/^[^#]+#/;function Pm(t,e){return t.replace(Rm,"#")+e}function km(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const fr=()=>({left:window.scrollX,top:window.scrollY});function Om(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=km(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yo(t,e){return(history.state?history.state.position-e:-1)+t}const ei=new Map;function xm(t,e){ei.set(t,e)}function Nm(t){const e=ei.get(t);return ei.delete(t),e}let Dm=()=>location.protocol+"//"+location.host;function bl(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Go(c,"")}return Go(n,t)+s+r}function Lm(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const g=bl(t,location),_=n.value,I=e.value;let M=0;if(p){if(n.value=g,e.value=p,o&&o===_){o=null;return}M=I?p.position-I.position:0}else s(g);r.forEach(k=>{k(n.value,_,{delta:M,type:ts.pop,direction:M?M>0?Bn.forward:Bn.back:Bn.unknown})})};function c(){o=n.value}function l(p){r.push(p);const g=()=>{const _=r.indexOf(p);_>-1&&r.splice(_,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(G({},p.state,{scroll:fr()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Xo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?fr():null}}function Mm(t){const{history:e,location:n}=window,s={value:bl(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Dm()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=G({},e.state,Xo(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=G({},r.value,e.state,{forward:c,scroll:fr()});i(u.current,u,!0);const f=G({},Xo(s.value,c,null),{position:u.position+1},l);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Um(t){t=Am(t);const e=Mm(t),n=Lm(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=G({location:"",base:t,go:s,createHref:Pm.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function $m(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Um(t)}function Fm(t){return typeof t=="string"||t&&typeof t=="object"}function wl(t){return typeof t=="string"||typeof t=="symbol"}const El=Symbol("");var Zo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zo||(Zo={}));function wn(t,e){return G(new Error,{type:t,[El]:!0},e)}function ot(t,e){return t instanceof Error&&El in t&&(e==null||!!(t.type&e))}const Qo="[^/]+?",Vm={sensitive:!1,strict:!1,start:!0,end:!0},Hm=/[.+*?^${}()[\]/\\]/g;function Bm(t,e){const n=G({},Vm,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(r+="/"),r+=p.value.replace(Hm,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:I,optional:M,regexp:k}=p;i.push({name:_,repeatable:I,optional:M});const C=k||Qo;if(C!==Qo){g+=10;try{new RegExp(`(${C})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${C}): `+S.message)}}let D=I?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;f||(D=M&&l.length<2?`(?:/${D})`:"/"+D),M&&(D+="?"),r+=D,g+=20,M&&(g+=-8),I&&(g+=-20),C===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",_=i[p-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:I,optional:M}=g,k=_ in l?l[_]:"";if(Be(k)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const C=Be(k)?k.join("/"):k;if(!C)if(M)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=C}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function jm(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Il(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=jm(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(ea(s))return 1;if(ea(r))return-1}return r.length-s.length}function ea(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Wm={type:0,value:""},qm=/[a-zA-Z0-9_]/;function zm(t){if(!t)return[[]];if(t==="/")return[[Wm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:qm.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),r}function Km(t,e,n){const s=Bm(zm(t.path),n),r=G(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Gm(t,e){const n=[],s=new Map;e=ra({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,p,g){const _=!g,I=na(f);I.aliasOf=g&&g.record;const M=ra(e,f),k=[I];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const O of S)k.push(na(G({},I,{components:g?g.record.components:I.components,path:O,aliasOf:g?g.record:I})))}let C,D;for(const S of k){const{path:O}=S;if(p&&O[0]!=="/"){const ne=p.record.path,Z=ne[ne.length-1]==="/"?"":"/";S.path=p.record.path+(O&&Z+O)}if(C=Km(S,p,M),g?g.alias.push(C):(D=D||C,D!==C&&D.alias.push(C),_&&f.name&&!sa(C)&&o(f.name)),Sl(C)&&c(C),I.children){const ne=I.children;for(let Z=0;Z<ne.length;Z++)i(ne[Z],C,g&&g.children[Z])}g=g||C}return D?()=>{o(D)}:Hn}function o(f){if(wl(f)){const p=s.get(f);p&&(s.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=Xm(f,n);n.splice(p,0,f),f.record.name&&!sa(f)&&s.set(f.record.name,f)}function l(f,p){let g,_={},I,M;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw wn(1,{location:f});M=g.record.name,_=G(ta(p.params,g.keys.filter(D=>!D.optional).concat(g.parent?g.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),f.params&&ta(f.params,g.keys.map(D=>D.name))),I=g.stringify(_)}else if(f.path!=null)I=f.path,g=n.find(D=>D.re.test(I)),g&&(_=g.parse(I),M=g.record.name);else{if(g=p.name?s.get(p.name):n.find(D=>D.re.test(p.path)),!g)throw wn(1,{location:f,currentLocation:p});M=g.record.name,_=G({},p.params,f.params),I=g.stringify(_)}const k=[];let C=g;for(;C;)k.unshift(C.record),C=C.parent;return{name:M,path:I,params:_,matched:k,meta:Ym(k)}}t.forEach(f=>i(f));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function ta(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function na(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Jm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Jm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function sa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ym(t){return t.reduce((e,n)=>G(e,n.meta),{})}function ra(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Xm(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;Il(t,e[i])<0?s=i:n=i+1}const r=Zm(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function Zm(t){let e=t;for(;e=e.parent;)if(Sl(e)&&Il(t,e)===0)return e}function Sl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Qm(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(gl," "),o=i.indexOf("="),a=es(o<0?i:i.slice(0,o)),c=o<0?null:es(i.slice(o+1));if(a in e){let l=e[a];Be(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ia(t){let e="";for(let n in t){const s=t[n];if(n=ym(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Be(s)?s.map(i=>i&&Qr(i)):[s&&Qr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function e_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Be(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const t_=Symbol(""),oa=Symbol(""),dr=Symbol(""),Ni=Symbol(""),ti=Symbol("");function Rn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rt(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(wn(4,{from:n,to:e})):p instanceof Error?c(p):Fm(p)?c(wn(2,{from:e,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(s&&s.instances[r],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function xr(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(hl(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Rt(u,n,s,o,a,r))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=am(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Rt(g,n,s,o,a,r)()}))}}return i}function aa(t){const e=Fe(dr),n=Fe(Ni),s=Ee(()=>{const c=Re(t.to);return e.resolve(c)}),r=Ee(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(bn.bind(null,u));if(p>-1)return p;const g=ca(c[l-2]);return l>1&&ca(u)===g&&f[f.length-1].path!==g?f.findIndex(bn.bind(null,c[l-2])):p}),i=Ee(()=>r.value>-1&&o_(n.params,s.value.params)),o=Ee(()=>r.value>-1&&r.value===n.matched.length-1&&vl(n.params,s.value.params));function a(c={}){if(i_(c)){const l=e[Re(t.replace)?"replace":"push"](Re(t.to)).catch(Hn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:s,href:Ee(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function n_(t){return t.length===1?t[0]:t}const s_=Wa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:aa,setup(t,{slots:e}){const n=rs(aa(t)),{options:s}=Fe(dr),r=Ee(()=>({[la(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[la(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&n_(e.default(n));return t.custom?i:_c("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),r_=s_;function i_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function o_(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Be(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ca(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const la=(t,e,n)=>t??e??n,a_=Wa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Fe(ti),r=Ee(()=>t.route||s.value),i=Fe(oa,0),o=Ee(()=>{let l=Re(i);const{matched:u}=r.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ee(()=>r.value.matched[o.value]);Un(oa,Ee(()=>o.value+1)),Un(t_,a),Un(ti,r);const c=fe();return ws(()=>[c.value,a.value,t.name],([l,u,f],[p,g,_])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!bn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return ua(n.default,{Component:p,route:l});const g=f.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,M=_c(p,G({},_,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return ua(n.default,{Component:M,route:l})||M}}});function ua(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const c_=a_;function l_(t){const e=Gm(t.routes,t),n=t.parseQuery||Qm,s=t.stringifyQuery||ia,r=t.history,i=Rn(),o=Rn(),a=Rn(),c=iu(Tt);let l=Tt;sn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=kr.bind(null,b=>""+b),f=kr.bind(null,bm),p=kr.bind(null,es);function g(b,N){let P,L;return wl(b)?(P=e.getRecordMatcher(b),L=N):L=b,e.addRoute(L,P)}function _(b){const N=e.getRecordMatcher(b);N&&e.removeRoute(N)}function I(){return e.getRoutes().map(b=>b.record)}function M(b){return!!e.getRecordMatcher(b)}function k(b,N){if(N=G({},N||c.value),typeof b=="string"){const m=Or(n,b,N.path),v=e.resolve({path:m.path},N),w=r.createHref(m.fullPath);return G(m,v,{params:p(v.params),hash:es(m.hash),redirectedFrom:void 0,href:w})}let P;if(b.path!=null)P=G({},b,{path:Or(n,b.path,N.path).path});else{const m=G({},b.params);for(const v in m)m[v]==null&&delete m[v];P=G({},b,{params:f(m)}),N.params=f(N.params)}const L=e.resolve(P,N),Q=b.hash||"";L.params=u(p(L.params));const d=Im(s,G({},b,{hash:_m(Q),path:L.path})),h=r.createHref(d);return G({fullPath:d,hash:Q,query:s===ia?e_(b.query):b.query||{}},L,{redirectedFrom:void 0,href:h})}function C(b){return typeof b=="string"?Or(n,b,c.value.path):G({},b)}function D(b,N){if(l!==b)return wn(8,{from:N,to:b})}function S(b){return Z(b)}function O(b){return S(G(C(b),{replace:!0}))}function ne(b){const N=b.matched[b.matched.length-1];if(N&&N.redirect){const{redirect:P}=N;let L=typeof P=="function"?P(b):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=C(L):{path:L},L.params={}),G({query:b.query,hash:b.hash,params:L.path!=null?{}:b.params},L)}}function Z(b,N){const P=l=k(b),L=c.value,Q=b.state,d=b.force,h=b.replace===!0,m=ne(P);if(m)return Z(G(C(m),{state:typeof m=="object"?G({},Q,m.state):Q,force:d,replace:h}),N||P);const v=P;v.redirectedFrom=N;let w;return!d&&Sm(s,L,P)&&(w=wn(16,{to:v,from:L}),qe(L,L,!0,!1)),(w?Promise.resolve(w):je(v,L)).catch(y=>ot(y)?ot(y,2)?y:It(y):K(y,v,L)).then(y=>{if(y){if(ot(y,2))return Z(G({replace:h},C(y.to),{state:typeof y.to=="object"?G({},Q,y.to.state):Q,force:d}),N||v)}else y=Ht(v,L,!0,h,Q);return Et(v,L,y),y})}function le(b,N){const P=D(b,N);return P?Promise.reject(P):Promise.resolve()}function wt(b){const N=Qt.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(b):b()}function je(b,N){let P;const[L,Q,d]=u_(b,N);P=xr(L.reverse(),"beforeRouteLeave",b,N);for(const m of L)m.leaveGuards.forEach(v=>{P.push(Rt(v,b,N))});const h=le.bind(null,b,N);return P.push(h),Ne(P).then(()=>{P=[];for(const m of i.list())P.push(Rt(m,b,N));return P.push(h),Ne(P)}).then(()=>{P=xr(Q,"beforeRouteUpdate",b,N);for(const m of Q)m.updateGuards.forEach(v=>{P.push(Rt(v,b,N))});return P.push(h),Ne(P)}).then(()=>{P=[];for(const m of d)if(m.beforeEnter)if(Be(m.beforeEnter))for(const v of m.beforeEnter)P.push(Rt(v,b,N));else P.push(Rt(m.beforeEnter,b,N));return P.push(h),Ne(P)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),P=xr(d,"beforeRouteEnter",b,N,wt),P.push(h),Ne(P))).then(()=>{P=[];for(const m of o.list())P.push(Rt(m,b,N));return P.push(h),Ne(P)}).catch(m=>ot(m,8)?m:Promise.reject(m))}function Et(b,N,P){a.list().forEach(L=>wt(()=>L(b,N,P)))}function Ht(b,N,P,L,Q){const d=D(b,N);if(d)return d;const h=N===Tt,m=sn?history.state:{};P&&(L||h?r.replace(b.fullPath,G({scroll:h&&m&&m.scroll},Q)):r.push(b.fullPath,Q)),c.value=b,qe(b,N,P,h),It()}let We;function Sn(){We||(We=r.listen((b,N,P)=>{if(!ps.listening)return;const L=k(b),Q=ne(L);if(Q){Z(G(Q,{replace:!0,force:!0}),L).catch(Hn);return}l=L;const d=c.value;sn&&xm(Yo(d.fullPath,P.delta),fr()),je(L,d).catch(h=>ot(h,12)?h:ot(h,2)?(Z(G(C(h.to),{force:!0}),L).then(m=>{ot(m,20)&&!P.delta&&P.type===ts.pop&&r.go(-1,!1)}).catch(Hn),Promise.reject()):(P.delta&&r.go(-P.delta,!1),K(h,L,d))).then(h=>{h=h||Ht(L,d,!1),h&&(P.delta&&!ot(h,8)?r.go(-P.delta,!1):P.type===ts.pop&&ot(h,20)&&r.go(-1,!1)),Et(L,d,h)}).catch(Hn)}))}let Xt=Rn(),ue=Rn(),X;function K(b,N,P){It(b);const L=ue.list();return L.length?L.forEach(Q=>Q(b,N,P)):console.error(b),Promise.reject(b)}function rt(){return X&&c.value!==Tt?Promise.resolve():new Promise((b,N)=>{Xt.add([b,N])})}function It(b){return X||(X=!b,Sn(),Xt.list().forEach(([N,P])=>b?P(b):N()),Xt.reset()),b}function qe(b,N,P,L){const{scrollBehavior:Q}=t;if(!sn||!Q)return Promise.resolve();const d=!P&&Nm(Yo(b.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return hi().then(()=>Q(b,N,d)).then(h=>h&&Om(h)).catch(h=>K(h,b,N))}const Se=b=>r.go(b);let Zt;const Qt=new Set,ps={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:M,getRoutes:I,resolve:k,options:t,push:S,replace:O,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:rt,install(b){const N=this;b.component("RouterLink",r_),b.component("RouterView",c_),b.config.globalProperties.$router=N,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Re(c)}),sn&&!Zt&&c.value===Tt&&(Zt=!0,S(r.location).catch(Q=>{}));const P={};for(const Q in Tt)Object.defineProperty(P,Q,{get:()=>c.value[Q],enumerable:!0});b.provide(dr,N),b.provide(Ni,La(P)),b.provide(ti,c);const L=b.unmount;Qt.add(b),b.unmount=function(){Qt.delete(b),Qt.size<1&&(l=Tt,We&&We(),We=null,c.value=Tt,Zt=!1,X=!1),L()}}};function Ne(b){return b.reduce((N,P)=>N.then(()=>wt(P)),Promise.resolve())}return ps}function u_(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>bn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>bn(l,c))||r.push(c))}return[n,s,r]}function f_(){return Fe(dr)}function iy(t){return Fe(Ni)}function d_(t,e){const n=s=>{t.value&&!t.value.contains(s.target)&&e()};sr(()=>document.addEventListener("mousedown",n)),mi(()=>document.removeEventListener("mousedown",n))}const h_={key:0,class:"loading-overlay text-pblue-500"},p_={class:"train-track"},g_={key:0,class:"fallback-train"},m_={class:"p-3"},__={key:0},y_={key:1},v_={class:"p-3 md:p-3"},b_={key:0},w_={key:1},E_={class:"p-3"},I_={key:0},S_={key:1},T_={class:"px-4 text-rice-500 text-shadow-3d"},C_={key:0,class:"p-3"},A_={key:0,class:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20 text-gray-800 overflow-hidden"},R_={class:"px-4 py-2"},P_={__name:"App",setup(t){const{isAuthenticated:e,user:n,isAdmin:s,isTeacher:r,isStudent:i,isVisitor:o,logout:a}=Oi(),c=f_(),l=fe(!0),u=fe(!1),f=fe(!1),p=fe(!0),g=fe(0),_=fe(!1),I=fe(null);d_(I,()=>{_.value=!1});const M=()=>{console.log("Train image failed to load"),u.value=!0},k=()=>{console.log("Train image loaded successfully"),u.value=!1},C=S=>{const O=S.target.scrollTop===void 0?window.scrollY:S.target.scrollTop;O<100||f.value?p.value=!0:O>g.value?p.value=!1:p.value=!0,g.value=O<0?0:O},D=()=>{a(),f.value=!1,_.value=!1,c.push("/")};return Un("handleAppScroll",C),sr(()=>{window.addEventListener("scroll",C),setTimeout(()=>{l.value=!1},1e3)}),mi(()=>{window.removeEventListener("scroll",C)}),(S,O)=>{const ne=Mr("router-link"),Z=Mr("router-view");return ce(),ge(Oe,null,[l.value&&S.$route.path!=="/"&&S.$route.path!=="/about"?(ce(),ge("div",h_,[H("div",p_,[H("img",{src:Qf,class:"loader",alt:"Loading...",onError:M,onLoad:k},null,32),u.value?(ce(),ge("div",g_,"🚂")):nn("",!0)]),O[8]||(O[8]=H("p",null,"載入中...",-1))])):nn("",!0),H("nav",{class:be(["fixed top-0 left-0 z-50 w-full p-2 text-rice-500 md:text-4xl flex flex-row justify-between items-center transition-transform duration-300 ease-in-out",[S.$route.path!=="/"?"bg-header":"",p.value||f.value?"translate-y-0":"-translate-y-full",{"pointer-events-none":!p.value&&!f.value}]])},[oe(ne,{to:"/",onClick:O[0]||(O[0]=le=>f.value=!1),class:"flex flex-row items-center gap-2"},{default:Ze(()=>[H("img",{src:ed,alt:"School Logo",class:be([{hidden:S.$route.path==="/"},"relative z-20 inset-0 w-1/11 object-center md:w-1/20"])},null,2),H("div",{class:be([{hidden:S.$route.path==="/"},"relative z-20 my-auto md:text-3xl text-2xl"])}," 彰化市平和國民小學 ",2)]),_:1}),S.$route.path!=="/"?(ce(),ge("button",{key:0,onClick:O[1]||(O[1]=le=>f.value=!f.value),class:"md:hidden z-20"},[...O[9]||(O[9]=[H("i",{class:"fa-solid fa-bars"},null,-1)])])):nn("",!0),S.$route.path!=="/"?(ce(),ge("div",{key:1,class:be([["fixed top-0 left-0 w-full flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out md:relative md:h-[4rem] md:w-auto md:bg-transparent md:flex-row md:gap-3 text-xl md:text-2xl md:whitespace-nowrap",f.value?"h-screen":"h-0",f.value?"translate-x-0":"-translate-x-full md:translate-x-0",f.value?"bg-[url(@/assets/images/Mobile/mobile_Bcakground_2.png)] bg-cover bg-center overflow-hidden":""],"md:text-shadow-none"])},[O[14]||(O[14]=H("div",{class:"absolute z-[-10] inset-0 bg-black/40 md:hidden"},null,-1)),oe(ne,{to:"/",class:be(["px-8 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":S.$route.path==="/"}]),onClick:O[2]||(O[2]=le=>f.value=!1)},{default:Ze(()=>[...O[10]||(O[10]=[H("div",{class:"p-3"},"首頁",-1)])]),_:1},8,["class"]),oe(ne,{to:"/about",class:be(["px-4 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":S.$route.path==="/about"}]),onClick:O[3]||(O[3]=le=>f.value=!1)},{default:Ze(()=>[H("div",m_,[S.$route.path!=="/about"?(ce(),ge("span",__,"校園探索")):(ce(),ge("span",y_,"EXPLORATION"))])]),_:1},8,["class"]),oe(ne,{to:"/actions",class:be(["px-4 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":S.$route.path==="/actions"}]),onClick:O[4]||(O[4]=le=>f.value=!1)},{default:Ze(()=>[H("div",v_,[S.$route.path!=="/actions"?(ce(),ge("span",b_,"SDGs行動")):(ce(),ge("span",w_,"SDGs ACTION"))])]),_:1},8,["class"]),oe(ne,{to:"/sdgs",class:be(["px-4 text-rice-500 text-shadow-3d",{"pointer-events-none text-orange-300":S.$route.path==="/sdgs"||S.$route.path.includes("/story")}]),onClick:O[5]||(O[5]=le=>f.value=!1)},{default:Ze(()=>[H("div",E_,[S.$route.path!=="/sdgs"&&!S.$route.path.includes("/story")?(ce(),ge("span",I_,"SDGs成果")):(ce(),ge("span",S_,"SDGs RESULT"))])]),_:1},8,["class"]),H("div",T_,[Re(e)?(ce(),ge("div",{key:1,class:"relative",ref_key:"profileMenu",ref:I},[H("button",{onClick:O[7]||(O[7]=le=>_.value=!_.value),class:"min-w-10"},[...O[12]||(O[12]=[H("img",{src:td,alt:"User Profile",class:"w-10 h-10 rounded-full object-cover"},null,-1)])]),_.value?(ce(),ge("div",A_,[H("div",R_,[H("p",{class:be(["text-sm font-medium",{"text-red-500":Re(s),"text-blue-500":Re(r),"text-green-500":Re(i),"text-gray-500":Re(o)}])},va(Re(n)?.full_name),3)]),O[13]||(O[13]=H("div",{class:"border-t border-gray-200"},null,-1)),H("button",{onClick:D,class:"w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"}," 登出 ")])):nn("",!0)],512)):(ce(),ge("div",C_,[oe(ne,{to:"/login",onClick:O[6]||(O[6]=le=>f.value=!1),class:"hover:text-orange-300 transition-colors flex items-center gap-2"},{default:Ze(()=>[...O[11]||(O[11]=[H("i",{class:"fas fa-user-plus"},null,-1),pc(" 登入 ",-1)])]),_:1})]))])],2)):nn("",!0)],2),oe(Z)],64)}}},k_="modulepreload",O_=function(t,e){return new URL(t,e).href},fa={},Ye=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");r=l(n.map(u=>{if(u=O_(u,s),u in fa)return;fa[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(!!s)for(let I=o.length-1;I>=0;I--){const M=o[I];if(M.href===u&&(!f||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${p}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":k_,f||(_.as="script"),_.crossOrigin="",_.href=u,c&&_.setAttribute("nonce",c),document.head.appendChild(_),f)return new Promise((I,M)=>{_.addEventListener("load",I),_.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},x_=""+new URL("Title-DP11h-Zm.png",import.meta.url).href,N_=""+new URL("Train_Smoke_W-CTtTvEtc.gif",import.meta.url).href,D_=""+new URL("Train_Smoke_M-CsE4hGUV.gif",import.meta.url).href,L_=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},M_={class:"relative w-screen h-screen flex flex-col gap-12 lg:gap-0 max-[380px]:gap-1 justify-start items-center lg:flex-row text-center bg-[url('@/assets/images/Mobile/Mobile_MainPage_Background2.png')] bg-cover bg-center overflow-hidden lg:bg-[url('@/assets/images/MainPage_Pic.webp'),_url('@/assets/images/MainPage_Background_T.png')] lg:[background-repeat:no-repeat,no-repeat] lg:[background-position:right,center] lg:[background-size:contain,cover]"},U_={class:"order-1 lg:order-2 z-10 lg:w-1/2 flex justify-center items-center pt-25 lg:pt-0 lg:h-full lg:items-start lg:translate-y-18"},$_={class:"order-2 lg:order-1 z-20 lg:w-1/2 flex justify-center items-center lg:h-full lg:items-start lg:translate-66 lg:translate-x-78"},F_={class:"relative group self-stretch"},V_={class:"relative group self-stretch"},H_={class:"relative group self-stretch"},B_={class:"w-full h-full absolute top-0 left-0 pointer-events-none overflow-hidden"},j_=["src"],W_=["src"],q_={key:0,class:"fixed inset-0 bg-black/80 flex items-center justify-center z-50"},z_={__name:"Home",setup(t){const{selectRole:e}=Oi(),n=fe(!1),s=fe(!1),r=fe(!1),i=fe(!1),o=fe(!1);fe(""),fe({username:"",password:""}),fe({username:"",password:""}),fe(!1),fe("");const a=localStorage.getItem("user_data");console.log(JSON.parse(a)),sr(()=>{setTimeout(()=>{n.value=!0},100)});const c=()=>{s.value=!1,r.value=!0},l=()=>{s.value=!1,i.value=!0},u=()=>{s.value=!1,o.value=!0},f=()=>{e("visitor"),s.value=!1};return(p,g)=>{const _=Mr("router-link");return ce(),ge("main",M_,[H("section",U_,[H("div",{class:be([["transition-all duration-3000 ease-out",n.value?"opacity-100":"opacity-0"],"w-full flex justify-center lg:justify-start"])},[...g[0]||(g[0]=[H("picture",null,[H("img",{src:x_,class:"pointer-events-none select-none max-w-77 lg:max-w-150",alt:"Pinghe_Text_H"})],-1)])],2)]),H("section",$_,[H("div",{class:be([["transition-all duration-3000 ease-out",n.value?"opacity-100":"opacity-0"],"inline-flex flex-col gap-4 lg:gap-10 items-start justify-center text-xl lg:text-4xl text-black"])},[H("div",F_,[oe(_,{to:"/about",class:"relative block ml-22 mr-50 lg:ml-10 lg:mr-50 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"},{default:Ze(()=>[...g[1]||(g[1]=[H("span",{class:"block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"},"校園探索",-1),H("span",{class:"absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"},"Explore →",-1)])]),_:1})]),H("div",V_,[oe(_,{to:"/actions",class:"relative block ml-36 mr-36 lg:ml-30 lg:mr-30 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"},{default:Ze(()=>[...g[2]||(g[2]=[H("span",{class:"block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"},"SDGs行動",-1),H("span",{class:"absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"},"Actions →",-1)])]),_:1})]),H("div",H_,[oe(_,{to:"/sdgs",class:"relative block ml-50 mr-22 lg:ml-60 lg:mr-0 rounded-full bg-orange-300 p-2 lg:p-4 overflow-hidden"},{default:Ze(()=>[...g[3]||(g[3]=[H("span",{class:"block whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:-translate-x-full"},"SDGs成果",-1),H("span",{class:"absolute inset-0 rounded-full bg-orange-500 transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0 flex items-center justify-center"},"Results →",-1)])]),_:1})])],2)]),H("div",B_,[H("img",{src:Re(N_),class:"hidden lg:block absolute top-0 left-0 w-full h-full object-cover object-center select-none animate-train-enter",alt:"Pinghe_Train_Smoke"},null,8,j_),H("img",{src:Re(D_),class:"block lg:hidden absolute top-0 left-0 w-full h-full object-cover object-center select-none animate-train-enter",alt:"Pinghe_Train_Smoke"},null,8,W_)]),s.value?(ce(),ge("div",q_,[H("div",{class:"bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"},[g[8]||(g[8]=H("h2",{class:"text-2xl font-bold text-center mb-6 text-gray-800"}," 請選擇您的身分 ",-1)),H("div",{class:"space-y-4"},[H("button",{onClick:c,class:"w-full p-4 border-2 border-red-200 rounded-lg hover:border-red-400 hover:bg-red-50 transition-colors group"},[...g[4]||(g[4]=[ys('<div class="flex items-center gap-4" data-v-0a9e91cc><div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white group-hover:bg-red-600" data-v-0a9e91cc><i class="fas fa-user-shield text-xl" data-v-0a9e91cc></i></div><div class="text-left" data-v-0a9e91cc><h3 class="text-lg font-semibold text-gray-800" data-v-0a9e91cc>管理員</h3><p class="text-sm text-gray-600" data-v-0a9e91cc>系統管理員權限</p></div></div>',1)])]),H("button",{onClick:l,class:"w-full p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors group"},[...g[5]||(g[5]=[ys('<div class="flex items-center gap-4" data-v-0a9e91cc><div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white group-hover:bg-blue-600" data-v-0a9e91cc><i class="fas fa-user-tie text-xl" data-v-0a9e91cc></i></div><div class="text-left" data-v-0a9e91cc><h3 class="text-lg font-semibold text-gray-800" data-v-0a9e91cc>老師</h3><p class="text-sm text-gray-600" data-v-0a9e91cc>具有編輯和管理權限</p></div></div>',1)])]),H("button",{onClick:u,class:"w-full p-4 border-2 border-green-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors group"},[...g[6]||(g[6]=[ys('<div class="flex items-center gap-4" data-v-0a9e91cc><div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:bg-green-600" data-v-0a9e91cc><i class="fas fa-user-graduate text-xl" data-v-0a9e91cc></i></div><div class="text-left" data-v-0a9e91cc><h3 class="text-lg font-semibold text-gray-800" data-v-0a9e91cc>學生</h3><p class="text-sm text-gray-600" data-v-0a9e91cc>瀏覽內容並參與互動</p></div></div>',1)])]),H("button",{onClick:f,class:"w-full p-4 border-2 border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors group"},[...g[7]||(g[7]=[ys('<div class="flex items-center gap-4" data-v-0a9e91cc><div class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white group-hover:bg-gray-600" data-v-0a9e91cc><i class="fas fa-user text-xl" data-v-0a9e91cc></i></div><div class="text-left" data-v-0a9e91cc><h3 class="text-lg font-semibold text-gray-800" data-v-0a9e91cc>訪客</h3><p class="text-sm text-gray-600" data-v-0a9e91cc>瀏覽所有公開內容</p></div></div>',1)])])])])])):nn("",!0)])}}},K_=L_(z_,[["__scopeId","data-v-0a9e91cc"]]),G_=[{path:"/",name:"Home",component:K_},{path:"/login",name:"Login",component:()=>Ye(()=>import("./Login-C4206kUG.js"),[],import.meta.url)},{path:"/register",name:"Register",component:()=>Ye(()=>import("./Register-BLvzTTDB.js"),[],import.meta.url)},{path:"/about",name:"About",component:()=>Ye(()=>import("./About-D66R99en.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{path:"/actions",name:"Actions",component:()=>Ye(()=>import("./Actions-BNOWpPLk.js"),__vite__mapDeps([3,4,5,6,7,8,1,2]),import.meta.url)},{path:"/actions/new",name:"actions-new",component:()=>Ye(()=>import("./ActionNew-CttxPv0A.js"),__vite__mapDeps([9,7,8,10,11,6,12]),import.meta.url)},{path:"/actions/:id",name:"action-detail",component:()=>Ye(()=>import("./ActionDetail-BUtxXSE0.js"),__vite__mapDeps([13,4,7,8,14,15]),import.meta.url),props:!0},{path:"/sdgs",name:"SDGs",component:()=>Ye(()=>import("./SDGs-D6kC9PqJ.js"),__vite__mapDeps([16,14,7,8,1,2]),import.meta.url)},{path:"/story",name:"Story",component:()=>Ye(()=>import("./Story-CO_1KjeG.js"),__vite__mapDeps([17,14,6,7,8,18,5,1,2,19]),import.meta.url)},{path:"/story/new",name:"story-new",component:()=>Ye(()=>import("./StoryNew-Dj2k9RQB.js"),__vite__mapDeps([20,7,8,10,11,6,21]),import.meta.url)},{path:"/story/:id",name:"story-detail",component:()=>Ye(()=>import("./StoryDetail-DXLEN6kA.js"),__vite__mapDeps([22,14,6,7,8,18,10,23]),import.meta.url),props:!0}],Tl=l_({history:$m(),routes:G_});Tl.beforeEach((t,e,n)=>{const{isAuthenticated:s,isTeacher:r,isAdmin:i}=Oi();if(t.meta.requiresAdmin&&!i.value){s.value?(alert("此功能僅限管理員使用"),n(!1)):n({name:"Home"});return}if(t.meta.requiresTeacher&&!r.value){s.value?(alert("此功能僅限老師使用"),n(!1)):n({name:"Home"});return}if(t.meta.requiresAuth&&!s.value){n({name:"Home"});return}n()});om.then(()=>{const t=Yf(P_);t.use(Tl),t.mount("#app")});export{Fe as A,L_ as B,d_ as C,Ga as D,iu as E,Oe as F,ws as G,iy as H,Cu as I,Au as J,mi as K,_c as L,hi as M,Un as N,Tu as O,ny as P,Wa as Q,ey as R,ru as S,Y_ as T,yf as U,Q_ as V,Qf as _,ge as a,H as b,Ee as c,nn as d,X_ as e,oe as f,Ze as g,pc as h,Mr as i,f_ as j,sr as k,Pr as l,sy as m,be as n,ce as o,Z_ as p,Re as q,fe as r,Zs as s,va as t,Oi as u,ty as v,ry as w,J_ as x,hf as y,Hr as z};
