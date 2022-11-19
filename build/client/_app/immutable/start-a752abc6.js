import{S as tt,i as rt,s as nt,a as at,e as D,c as ot,b as K,g as x,t as V,d as ee,f as C,h as z,j as st,o as Ie,k as it,l as lt,m as ct,n as Re,p as X,q as ft,r as ut,u as pt,v as W,w as M,x as ce,y as H,z as Y,A as he}from"./chunks/index-25fdf90a.js";import{g as We,f as Me,s as Q,a as Ae,i as dt}from"./chunks/singletons-f3864333.js";import{s as ht}from"./chunks/paths-6cd3a76e.js";function mt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function _t(n){return n.split("%25").map(decodeURI).join("%25")}function gt(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const wt=["href","pathname","search","searchParams","toString","toJSON"];function yt(n,e){const r=new URL(n);for(const o of wt){let a=r[o];Object.defineProperty(r,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return bt(r),r}function bt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const vt="/__data.json";function Et(n){return n.replace(/\/$/,"")+vt}function kt(n){let e=5381;if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=r.length;for(;o;)e=e*33^r[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const we=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;ie.delete(o)}return we(n,e)};const ie=new Map;function $t(n,e){const r=xe(n,e),o=document.querySelector(r);if(o!=null&&o.textContent){const{body:a,...h}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&ie.set(r,{body:a,init:h,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,h))}return we(n,e)}function Rt(n,e,r){if(ie.size>0){const o=xe(n,r),a=ie.get(o);if(a){if(performance.now()<a.ttl)return new Response(a.body,a.init);ie.delete(o)}}return we(e,r)}function xe(n,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${kt(e.body)}"]`),o}const St=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(n){const e=[],r=[],o=[];let a=!0;return{pattern:n==="/"?/^\/$/:new RegExp(`^${It(n).map((t,l,f)=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(u)return e.push(u[1]),r.push(u[2]),o.push(!1),"(?:/(.*))?";const g=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(g)return e.push(g[1]),r.push(g[2]),o.push(!0),"(?:/([^/]+))?";const w=l===f.length-1;return t?"/"+t.split(/\[(.+?)\](?!\])/).map((j,A)=>{if(A%2){if(j.startsWith("x+"))return Se(String.fromCharCode(parseInt(j.slice(2),16)));if(j.startsWith("u+"))return Se(String.fromCharCode(...j.slice(2).split("-").map(ne=>parseInt(ne,16))));const G=St.exec(j);if(!G)throw new Error(`Invalid param: ${j}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,B,fe,te,ue]=G;return e.push(te),r.push(ue),o.push(!!B),fe?"(.*?)":B?"([^/]*)?":"([^/]+?)"}return w&&j.includes(".")&&(a=!1),Se(j)}).join(""):void 0}).join("")}${a?"/?":""}$`),names:e,types:r,optional:o}}function Lt(n){return!/^\([^)]+\)$/.test(n)}function It(n){return n.slice(1).split("/").filter(Lt)}function At(n,{names:e,types:r,optional:o},a){const h={};for(let t=0;t<e.length;t+=1){const l=e[t],f=r[t];let u=n[t+1];if(u||!o[t]){if(f){const g=a[f];if(!g)throw new Error(`Missing "${f}" param matcher`);if(!g(u))return}h[l]=u!=null?u:""}}return h}function Se(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Pt(n,e,r,o){const a=new Set(e);return Object.entries(r).map(([l,[f,u,g]])=>{const{pattern:w,names:q,types:R,optional:j}=Ot(l),A={id:l,exec:G=>{const B=w.exec(G);if(B)return At(B,{names:q,types:R,optional:j},o)},errors:[1,...g||[]].map(G=>n[G]),layouts:[0,...u||[]].map(t),leaf:h(f)};return A.errors.length=A.layouts.length=Math.max(A.errors.length,A.layouts.length),A});function h(l){const f=l<0;return f&&(l=~l),[f,n[l]]}function t(l){return l===void 0?l:[a.has(l),n[l]]}}function jt(n){let e,r,o;var a=n[0][0];function h(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=W(a,h(n))),{c(){e&&M(e.$$.fragment),r=D()},l(t){e&&ce(e.$$.fragment,t),r=D()},m(t,l){e&&H(e,t,l),K(t,r,l),o=!0},p(t,l){const f={};if(l&4&&(f.data=t[2]),l&2&&(f.form=t[1]),a!==(a=t[0][0])){if(e){x();const u=e;V(u.$$.fragment,1,0,()=>{Y(u,1)}),ee()}a?(e=W(a,h(t)),M(e.$$.fragment),C(e.$$.fragment,1),H(e,r.parentNode,r)):e=null}else a&&e.$set(f)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&z(r),e&&Y(e,t)}}}function Nt(n){let e,r,o;var a=n[0][0];function h(t){return{props:{data:t[2],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return a&&(e=W(a,h(n))),{c(){e&&M(e.$$.fragment),r=D()},l(t){e&&ce(e.$$.fragment,t),r=D()},m(t,l){e&&H(e,t,l),K(t,r,l),o=!0},p(t,l){const f={};if(l&4&&(f.data=t[2]),l&1051&&(f.$$scope={dirty:l,ctx:t}),a!==(a=t[0][0])){if(e){x();const u=e;V(u.$$.fragment,1,0,()=>{Y(u,1)}),ee()}a?(e=W(a,h(t)),M(e.$$.fragment),C(e.$$.fragment,1),H(e,r.parentNode,r)):e=null}else a&&e.$set(f)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&z(r),e&&Y(e,t)}}}function Tt(n){let e,r,o;var a=n[0][1];function h(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=W(a,h(n))),{c(){e&&M(e.$$.fragment),r=D()},l(t){e&&ce(e.$$.fragment,t),r=D()},m(t,l){e&&H(e,t,l),K(t,r,l),o=!0},p(t,l){const f={};if(l&8&&(f.data=t[3]),l&2&&(f.form=t[1]),a!==(a=t[0][1])){if(e){x();const u=e;V(u.$$.fragment,1,0,()=>{Y(u,1)}),ee()}a?(e=W(a,h(t)),M(e.$$.fragment),C(e.$$.fragment,1),H(e,r.parentNode,r)):e=null}else a&&e.$set(f)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&z(r),e&&Y(e,t)}}}function Ut(n){let e,r,o;var a=n[0][1];function h(t){return{props:{data:t[3],$$slots:{default:[Dt]},$$scope:{ctx:t}}}}return a&&(e=W(a,h(n))),{c(){e&&M(e.$$.fragment),r=D()},l(t){e&&ce(e.$$.fragment,t),r=D()},m(t,l){e&&H(e,t,l),K(t,r,l),o=!0},p(t,l){const f={};if(l&8&&(f.data=t[3]),l&1043&&(f.$$scope={dirty:l,ctx:t}),a!==(a=t[0][1])){if(e){x();const u=e;V(u.$$.fragment,1,0,()=>{Y(u,1)}),ee()}a?(e=W(a,h(t)),M(e.$$.fragment),C(e.$$.fragment,1),H(e,r.parentNode,r)):e=null}else a&&e.$set(f)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&z(r),e&&Y(e,t)}}}function Dt(n){let e,r,o;var a=n[0][2];function h(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=W(a,h(n))),{c(){e&&M(e.$$.fragment),r=D()},l(t){e&&ce(e.$$.fragment,t),r=D()},m(t,l){e&&H(e,t,l),K(t,r,l),o=!0},p(t,l){const f={};if(l&16&&(f.data=t[4]),l&2&&(f.form=t[1]),a!==(a=t[0][2])){if(e){x();const u=e;V(u.$$.fragment,1,0,()=>{Y(u,1)}),ee()}a?(e=W(a,h(t)),M(e.$$.fragment),C(e.$$.fragment,1),H(e,r.parentNode,r)):e=null}else a&&e.$set(f)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&z(r),e&&Y(e,t)}}}function Vt(n){let e,r,o,a;const h=[Ut,Tt],t=[];function l(f,u){return f[0][2]?0:1}return e=l(n),r=t[e]=h[e](n),{c(){r.c(),o=D()},l(f){r.l(f),o=D()},m(f,u){t[e].m(f,u),K(f,o,u),a=!0},p(f,u){let g=e;e=l(f),e===g?t[e].p(f,u):(x(),V(t[g],1,1,()=>{t[g]=null}),ee(),r=t[e],r?r.p(f,u):(r=t[e]=h[e](f),r.c()),C(r,1),r.m(o.parentNode,o))},i(f){a||(C(r),a=!0)},o(f){V(r),a=!1},d(f){t[e].d(f),f&&z(o)}}}function He(n){let e,r=n[6]&&Ye(n);return{c(){e=it("div"),r&&r.c(),this.h()},l(o){e=lt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=ct(e);r&&r.l(a),a.forEach(z),this.h()},h(){Re(e,"id","svelte-announcer"),Re(e,"aria-live","assertive"),Re(e,"aria-atomic","true"),X(e,"position","absolute"),X(e,"left","0"),X(e,"top","0"),X(e,"clip","rect(0 0 0 0)"),X(e,"clip-path","inset(50%)"),X(e,"overflow","hidden"),X(e,"white-space","nowrap"),X(e,"width","1px"),X(e,"height","1px")},m(o,a){K(o,e,a),r&&r.m(e,null)},p(o,a){o[6]?r?r.p(o,a):(r=Ye(o),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&z(e),r&&r.d()}}}function Ye(n){let e;return{c(){e=ft(n[7])},l(r){e=ut(r,n[7])},m(r,o){K(r,e,o)},p(r,o){o&128&&pt(e,r[7])},d(r){r&&z(e)}}}function Ct(n){let e,r,o,a,h;const t=[Nt,jt],l=[];function f(g,w){return g[0][1]?0:1}e=f(n),r=l[e]=t[e](n);let u=n[5]&&He(n);return{c(){r.c(),o=at(),u&&u.c(),a=D()},l(g){r.l(g),o=ot(g),u&&u.l(g),a=D()},m(g,w){l[e].m(g,w),K(g,o,w),u&&u.m(g,w),K(g,a,w),h=!0},p(g,[w]){let q=e;e=f(g),e===q?l[e].p(g,w):(x(),V(l[q],1,1,()=>{l[q]=null}),ee(),r=l[e],r?r.p(g,w):(r=l[e]=t[e](g),r.c()),C(r,1),r.m(o.parentNode,o)),g[5]?u?u.p(g,w):(u=He(g),u.c(),u.m(a.parentNode,a)):u&&(u.d(1),u=null)},i(g){h||(C(r),h=!0)},o(g){V(r),h=!1},d(g){l[e].d(g),g&&z(o),u&&u.d(g),g&&z(a)}}}function qt(n,e,r){let{stores:o}=e,{page:a}=e,{components:h}=e,{form:t}=e,{data_0:l=null}=e,{data_1:f=null}=e,{data_2:u=null}=e;st(o.page.notify);let g=!1,w=!1,q=null;return Ie(()=>{const R=o.page.subscribe(()=>{g&&(r(6,w=!0),r(7,q=document.title||"untitled page"))});return r(5,g=!0),R}),n.$$set=R=>{"stores"in R&&r(8,o=R.stores),"page"in R&&r(9,a=R.page),"components"in R&&r(0,h=R.components),"form"in R&&r(1,t=R.form),"data_0"in R&&r(2,l=R.data_0),"data_1"in R&&r(3,f=R.data_1),"data_2"in R&&r(4,u=R.data_2)},n.$$.update=()=>{n.$$.dirty&768&&o.page.set(a)},[h,t,l,f,u,g,w,q,o,a]}class Bt extends tt{constructor(e){super(),rt(this,e,qt,Ct,nt,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Ft=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Jt=function(n,e){return new URL(n,e).href},Xe={},J=function(e,r,o){if(!r||r.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(r.map(h=>{if(h=Jt(h,o),h in Xe)return;Xe[h]=!0;const t=h.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(!!o)for(let g=a.length-1;g>=0;g--){const w=a[g];if(w.href===h&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${l}`))return;const u=document.createElement("link");if(u.rel=t?"stylesheet":Ft,t||(u.as="script",u.crossOrigin=""),u.href=h,document.head.appendChild(u),t)return new Promise((g,w)=>{u.addEventListener("load",g),u.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})})).then(()=>e())},zt={},ye=[()=>J(()=>import("./chunks/0-50d17fbe.js"),["./chunks/0-50d17fbe.js","./components/pages/_layout.svelte-287a228c.js","./chunks/index-25fdf90a.js","./chunks/paths-6cd3a76e.js","./assets/_layout-5c339122.css"],import.meta.url),()=>J(()=>import("./chunks/1-ff17f280.js"),["./chunks/1-ff17f280.js","./components/error.svelte-b8b3caba.js","./chunks/index-25fdf90a.js","./chunks/singletons-f3864333.js","./chunks/index-0f07bc57.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>J(()=>import("./chunks/2-feee940f.js"),["./chunks/2-feee940f.js","./components/layout.svelte-829d2782.js","./chunks/index-25fdf90a.js"],import.meta.url),()=>J(()=>import("./chunks/3-5c96957f.js"),["./chunks/3-5c96957f.js","./components/pages/_page.svelte-abd2d041.js","./chunks/index-25fdf90a.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>J(()=>import("./chunks/4-122cb010.js"),["./chunks/4-122cb010.js","./components/pages/login/_page.svelte-1adb5b15.js","./chunks/index-25fdf90a.js"],import.meta.url),()=>J(()=>import("./chunks/5-0076a69c.js"),["./chunks/5-0076a69c.js","./components/pages/partidos/cuartos-de-final/_page.svelte-459258cb.js","./chunks/index-25fdf90a.js","./chunks/stores-b127964f.js","./chunks/index-0f07bc57.js","./chunks/Match-bbdbc4d2.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>J(()=>import("./chunks/6-9864b03b.js"),["./chunks/6-9864b03b.js","./components/pages/partidos/final/_page.svelte-89dea8a7.js","./chunks/index-25fdf90a.js","./chunks/stores-b127964f.js","./chunks/index-0f07bc57.js","./chunks/Match-bbdbc4d2.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>J(()=>import("./chunks/7-0310d7ab.js"),["./chunks/7-0310d7ab.js","./components/pages/partidos/primera-fase/_page.svelte-ea26346c.js","./chunks/index-25fdf90a.js","./chunks/stores-b127964f.js","./chunks/index-0f07bc57.js","./chunks/Match-bbdbc4d2.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>J(()=>import("./chunks/8-3977d88a.js"),["./chunks/8-3977d88a.js","./components/pages/partidos/ronda-de-16/_page.svelte-3f806d50.js","./chunks/index-25fdf90a.js","./chunks/stores-b127964f.js","./chunks/index-0f07bc57.js","./chunks/Match-bbdbc4d2.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>J(()=>import("./chunks/9-74872ad6.js"),["./chunks/9-74872ad6.js","./components/pages/partidos/semifinal/_page.svelte-140ac4cf.js","./chunks/index-25fdf90a.js","./chunks/stores-b127964f.js","./chunks/index-0f07bc57.js","./chunks/Match-bbdbc4d2.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>J(()=>import("./chunks/10-20eb1b70.js"),["./chunks/10-20eb1b70.js","./components/pages/tabla/_page.svelte-4ae5b274.js","./chunks/index-25fdf90a.js","./chunks/stores-b127964f.js","./chunks/index-0f07bc57.js"],import.meta.url)],Gt=[0,2],Kt={"/":[3],"/login":[-5],"/partidos/cuartos-de-final":[5,[2]],"/partidos/final":[6,[2]],"/partidos/primera-fase":[7,[2]],"/partidos/ronda-de-16":[8,[2]],"/partidos/semifinal":[9,[2]],"/tabla":[-11]},Wt={handleError:({error:n})=>{console.error(n)}};class Pe{constructor(e,r){this.status=e,typeof r=="string"?this.body={message:r}:r?this.body=r:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ze{constructor(e,r){this.status=e,this.location=r}}async function Mt(n){var e;for(const r in n)if(typeof((e=n[r])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([o,a])=>[o,await a])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ht=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function er(n){if(typeof n=="number")return o(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,r=Array(e.length);function o(a,h=!1){if(a===Ht)return;if(a===Xt)return NaN;if(a===Zt)return 1/0;if(a===Qt)return-1/0;if(a===xt)return-0;if(h)throw new Error("Invalid input");if(a in r)return r[a];const t=e[a];if(!t||typeof t!="object")r[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":r[a]=new Date(t[1]);break;case"Set":const f=new Set;r[a]=f;for(let w=1;w<t.length;w+=1)f.add(o(t[w]));break;case"Map":const u=new Map;r[a]=u;for(let w=1;w<t.length;w+=2)u.set(o(t[w]),o(t[w+1]));break;case"RegExp":r[a]=new RegExp(t[1],t[2]);break;case"Object":r[a]=Object(t[1]);break;case"BigInt":r[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);r[a]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=o(t[w+1]);break}else{const l=new Array(t.length);r[a]=l;for(let f=0;f<t.length;f+=1){const u=t[f];u!==Yt&&(l[f]=o(u))}}else{const l={};r[a]=l;for(const f in t){const u=t[f];l[f]=o(u)}}return r[a]}return o(0)}const et="sveltekit:scroll",Z="sveltekit:index",me=Pt(ye,Gt,Kt,zt),je=ye[0],Ne=ye[1];je();Ne();let le={};try{le=JSON.parse(sessionStorage[et])}catch{}function Oe(n){le[n]=Ae()}function tr({target:n,base:e,trailing_slash:r}){var ze;const o=[];let a=null;const h={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,f=!1,u=!0,g=!1,w=!1,q=!1,R=!1,j,A=(ze=history.state)==null?void 0:ze[Z];A||(A=Date.now(),history.replaceState({...history.state,[Z]:A},"",location.href));const G=le[A];G&&(history.scrollRestoration="manual",scrollTo(G.x,G.y));let B,fe,te;async function ue(){te=te||Promise.resolve(),await te,te=null;const s=new URL(location.href),c=Ee(s,!0);a=null,await Ue(c,s,[])}async function ne(s,{noScroll:c=!1,replaceState:p=!1,keepFocus:i=!1,state:d={},invalidateAll:m=!1},_,v){return typeof s=="string"&&(s=new URL(s,We(document))),ke({url:s,scroll:c?Ae():null,keepfocus:i,redirect_chain:_,details:{state:d,replaceState:p},nav_token:v,accepted:()=>{m&&(R=!0)},blocked:()=>{},type:"goto"})}async function Te(s){const c=Ee(s,!1);if(!c)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${s}`);return a={id:c.id,promise:Ce(c).then(p=>(p.type==="loaded"&&p.state.error&&(a=null),p))},a.promise}async function Ue(s,c,p,i,d={},m){var v,E;fe=d;let _=s&&await Ce(s);if(_||(_=await Je(c,{id:null},se(new Error(`Not found: ${c.pathname}`),{url:c,params:{},route:{id:null}}),404)),c=(s==null?void 0:s.url)||c,fe!==d)return!1;if(_.type==="redirect")if(p.length>10||p.includes(c.pathname))_=await pe({status:500,error:se(new Error("Redirect loop"),{url:c,params:{},route:{id:null}}),url:c,route:{id:null}});else return ne(new URL(_.location,c).href,{},[...p,c.pathname],d),!1;else((E=(v=_.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await Q.updated.check()&&await de(c);if(o.length=0,R=!1,g=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[Z]=A+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",c)}if(a=null,f){t=_.state,_.props.page&&(_.props.page.url=c);const y=ge();j.$set(_.props),y()}else De(_);if(i){const{scroll:y,keepfocus:b}=i;if(b||Le(),await he(),u){const O=c.hash&&document.getElementById(c.hash.slice(1));y?scrollTo(y.x,y.y):O?O.scrollIntoView():scrollTo(0,0)}}else await he();u=!0,_.props.page&&(B=_.props.page),m&&m(),g=!1}function De(s){var d,m;t=s.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),B=s.props.page;const p=ge();j=new Bt({target:n,props:{...s.props,stores:Q},hydrate:!0}),p();const i={from:null,to:_e("to",{params:t.params,route:{id:(m=(d=t.route)==null?void 0:d.id)!=null?m:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};h.after_navigate.forEach(_=>_(i)),f=!0}async function ae({url:s,params:c,branch:p,status:i,error:d,route:m,form:_}){var N;const v=p.filter(Boolean),E={type:"loaded",state:{url:s,params:c,branch:p,error:d,route:m},props:{components:v.map(S=>S.node.component)}};_!==void 0&&(E.props.form=_);let y={},b=!B;for(let S=0;S<v.length;S+=1){const T=v[S];y={...y,...T.data},(b||!t.branch.some(U=>U===T))&&(E.props[`data_${S}`]=y,b=b||Object.keys((N=T.data)!=null?N:{}).length>0)}if(b||(b=Object.keys(B.data).length!==Object.keys(y).length),!t.url||s.href!==t.url.href||t.error!==d||_!==void 0||b){E.props.page={error:d,params:c,route:m,status:i,url:s,form:_,data:b?y:B.data},Object.defineProperty(E.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const S=(T,U)=>{Object.defineProperty(E.props.page,T,{get:()=>{throw new Error(`$page.${T} has been replaced by $page.url.${U}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return E}async function be({loader:s,parent:c,url:p,params:i,route:d,server_data_node:m}){var y,b,O,N,S;let _=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await s();if((y=E.shared)!=null&&y.load){let T=function(...$){for(const F of $){const{href:k}=new URL(F,p);v.dependencies.add(k)}};const U={route:{get id(){return v.route=!0,d.id}},params:new Proxy(i,{get:($,F)=>(v.params.add(F),$[F])}),data:(b=m==null?void 0:m.data)!=null?b:null,url:yt(p,()=>{v.url=!0}),async fetch($,F){let k;$ instanceof Request?(k=$.url,F={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,...F}):k=$;const L=new URL(k,p).href;return T(L),f?Rt(k,L,F):$t(k,F)},setHeaders:()=>{},depends:T,parent(){return v.parent=!0,c()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),_=(O=await E.shared.load.call(null,U))!=null?O:null,_=_?await Mt(_):null}return{node:E,loader:s,server:m,shared:(N=E.shared)!=null&&N.load?{type:"data",data:_,uses:v}:null,data:(S=_!=null?_:m==null?void 0:m.data)!=null?S:null}}function Ve(s,c,p,i,d){if(R)return!0;if(!i)return!1;if(i.parent&&s||i.route&&c||i.url&&p)return!0;for(const m of i.params)if(d[m]!==t.params[m])return!0;for(const m of i.dependencies)if(o.some(_=>_(new URL(m))))return!0;return!1}function ve(s,c){var p,i;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((p=s.uses.dependencies)!=null?p:[]),params:new Set((i=s.uses.params)!=null?i:[]),parent:!!s.uses.parent,route:!!s.uses.route,url:!!s.uses.url}}:(s==null?void 0:s.type)==="skip"&&c!=null?c:null}async function Ce({id:s,invalidating:c,url:p,params:i,route:d}){var F;if((a==null?void 0:a.id)===s)return a.promise;const{errors:m,layouts:_,leaf:v}=d,E=[..._,v];m.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const b=t.url?s!==t.url.pathname+t.url.search:!1,O=t.route?s!==t.route.id:!1,N=E.reduce((k,L,P)=>{var oe;const I=t.branch[P],re=!!(L!=null&&L[0])&&((I==null?void 0:I.loader)!==L[1]||Ve(k.some(Boolean),O,b,(oe=I.server)==null?void 0:oe.uses,i));return k.push(re),k},[]);if(N.some(Boolean)){try{y=await Qe(p,N)}catch(k){return pe({status:500,error:se(k,{url:p,params:i,route:{id:d.id}}),url:p,route:d})}if(y.type==="redirect")return y}const S=y==null?void 0:y.nodes;let T=!1;const U=E.map(async(k,L)=>{var oe;if(!k)return;const P=t.branch[L],I=S==null?void 0:S[L];if((!I||I.type==="skip")&&k[1]===(P==null?void 0:P.loader)&&!Ve(T,O,b,(oe=P.shared)==null?void 0:oe.uses,i))return P;if(T=!0,(I==null?void 0:I.type)==="error")throw I;return be({loader:k[1],url:p,params:i,route:d,parent:async()=>{var Ke;const Ge={};for(let $e=0;$e<L;$e+=1)Object.assign(Ge,(Ke=await U[$e])==null?void 0:Ke.data);return Ge},server_data_node:ve(I===void 0&&k[0]?{type:"skip"}:I!=null?I:null,P==null?void 0:P.server)})});for(const k of U)k.catch(()=>{});const $=[];for(let k=0;k<E.length;k+=1)if(E[k])try{$.push(await U[k])}catch(L){if(L instanceof Ze)return{type:"redirect",location:L.location};let P=500,I;S!=null&&S.includes(L)?(P=(F=L.status)!=null?F:P,I=L.error):L instanceof Pe?(P=L.status,I=L.body):I=se(L,{params:i,url:p,route:{id:d.id}});const re=await qe(k,$,m);return re?await ae({url:p,params:i,branch:$.slice(0,re.idx).concat(re.node),status:P,error:I,route:d}):await Je(p,{id:d.id},I,P)}else $.push(void 0);return await ae({url:p,params:i,branch:$,status:200,error:null,route:d,form:c?void 0:null})}async function qe(s,c,p){for(;s--;)if(p[s]){let i=s;for(;!c[i];)i-=1;try{return{idx:i+1,node:{node:await p[s](),loader:p[s],data:{},server:null,shared:null}}}catch{continue}}}async function pe({status:s,error:c,url:p,route:i}){var y;const d={},m=await je();let _=null;if(m.server)try{const b=await Qe(p,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;_=(y=b.nodes[0])!=null?y:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||l)&&await de(p)}const v=await be({loader:je,url:p,params:d,route:i,parent:()=>Promise.resolve({}),server_data_node:ve(_)}),E={node:await Ne(),loader:Ne,shared:null,server:null,data:null};return await ae({url:p,params:d,branch:[v,E],status:s,error:c,route:null})}function Ee(s,c){if(Be(s))return;const p=_t(s.pathname.slice(e.length)||"/");for(const i of me){const d=i.exec(p);if(d){const m=new URL(s.origin+mt(s.pathname,r)+s.search+s.hash);return{id:m.pathname+m.search,invalidating:c,route:i,params:gt(d),url:m}}}}function Be(s){return s.origin!==location.origin||!s.pathname.startsWith(e)}function Fe({url:s,type:c,intent:p,delta:i}){var v,E,y,b,O;let d=!1;const m={from:_e("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:_e("to",{params:(y=p==null?void 0:p.params)!=null?y:null,route:{id:(O=(b=p==null?void 0:p.route)==null?void 0:b.id)!=null?O:null},url:s}),willUnload:!p,type:c};i!==void 0&&(m.delta=i);const _={...m,cancel:()=>{d=!0}};return w||h.before_navigate.forEach(N=>N(_)),d?null:m}async function ke({url:s,scroll:c,keepfocus:p,redirect_chain:i,details:d,type:m,delta:_,nav_token:v,accepted:E,blocked:y}){const b=Ee(s,!1),O=Fe({url:s,type:m,delta:_,intent:b});if(!O){y();return}Oe(A),E(),w=!0,f&&Q.navigating.set(O),await Ue(b,s,i,{scroll:c,keepfocus:p,details:d},v,()=>{w=!1,h.after_navigate.forEach(N=>N(O)),Q.navigating.set(null)})}async function Je(s,c,p,i){return s.origin===location.origin&&s.pathname===location.pathname&&!l?await pe({status:i,error:p,url:s,route:c}):await de(s)}function de(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{Ie(()=>(h.after_navigate.push(s),()=>{const c=h.after_navigate.indexOf(s);h.after_navigate.splice(c,1)}))},before_navigate:s=>{Ie(()=>(h.before_navigate.push(s),()=>{const c=h.before_navigate.indexOf(s);h.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(g||!f)&&(u=!1)},goto:(s,c={})=>{if("keepfocus"in c&&!("keepFocus"in c))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in c&&!("noScroll"in c))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ne(s,c,[])},invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")o.push(s);else{const{href:c}=new URL(s,location.href);o.push(p=>p.href===c)}return ue()},invalidateAll:()=>(R=!0,ue()),prefetch:async s=>{const c=new URL(s,We(document));await Te(c)},prefetch_routes:async s=>{const p=(s?me.filter(i=>s.some(d=>i.exec(d))):me).map(i=>Promise.all([...i.layouts,i.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(p)},apply_action:async s=>{if(s.type==="error"){const c=new URL(location.href),{branch:p,route:i}=t;if(!i)return;const d=await qe(t.branch.length,p,i.errors);if(d){const m=await ae({url:c,params:t.params,branch:p.slice(0,d.idx).concat(d.node),status:500,error:s.error,route:i});t=m.state;const _=ge();j.$set(m.props),_(),he().then(Le)}}else if(s.type==="redirect")ne(s.location,{invalidateAll:!0},[]);else{const c={form:s.data,page:{...B,form:s.data,status:s.status}},p=ge();j.$set(c),p(),s.type==="success"&&he().then(Le)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var m,_;let d=!1;if(!w){const v={from:_e("from",{params:t.params,route:{id:(_=(m=t.route)==null?void 0:m.id)!=null?_:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>d=!0};h.before_navigate.forEach(E=>E(v))}d?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Oe(A);try{sessionStorage[et]=JSON.stringify(le)}catch{}}});const s=i=>{const{url:d,options:m,has:_}=Me(i);if(d&&m.prefetch&&!Be(d)){if(m.reload||_.rel_external||_.target||_.download)return;Te(d)}};let c;const p=i=>{clearTimeout(c),c=setTimeout(()=>{var d;(d=i.target)==null||d.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:d,url:m,options:_,has:v}=Me(i);if(!d||!m||!(d instanceof SVGAElement)&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:")||v.download)return;if(_.reload||v.rel_external||v.target){Fe({url:m,type:"link"})||i.preventDefault(),w=!0;return}const[y,b]=m.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){q=!0,Oe(A),t.url=m,Q.page.set({...B,url:m}),Q.page.notify();return}ke({url:m,scroll:_.noscroll?Ae():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[Z]===A)return;const d=i.state[Z]-A;ke({url:new URL(location.href),scroll:le[i.state[Z]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=i.state[Z]},blocked:()=>{history.go(-d)},type:"popstate",delta:d})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[Z]:++A},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&Q.navigating.set(null)})},_hydrate:async({status:s,error:c,node_ids:p,params:i,route:d,data:m,form:_})=>{var y;l=!0;const v=new URL(location.href);let E;try{const b=p.map(async(O,N)=>{const S=m[N];return be({loader:ye[O],url:v,params:i,route:d,parent:async()=>{const T={};for(let U=0;U<N;U+=1)Object.assign(T,(await b[U]).data);return T},server_data_node:ve(S)})});E=await ae({url:v,params:i,branch:await Promise.all(b),status:s,error:c,form:_,route:(y=me.find(({id:O})=>O===d.id))!=null?y:null})}catch(b){if(b instanceof Ze){await de(new URL(b.location,location.href));return}E=await pe({status:b instanceof Pe?b.status:500,error:se(b,{url:v,params:i,route:d}),url:v,route:d})}De(E)}}}async function Qe(n,e){var h;const r=new URL(n);r.pathname=Et(n.pathname);const o=await we(r.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),a=await o.json();if(!o.ok)throw new Error(a);return(h=a.nodes)==null||h.forEach(t=>{var l,f;(t==null?void 0:t.type)==="data"&&(t.data=er(t.data),t.uses={dependencies:new Set((l=t.uses.dependencies)!=null?l:[]),params:new Set((f=t.uses.params)!=null?f:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function se(n,e){var r;return n instanceof Pe?n.body:(r=Wt.handleError({error:n,event:e}))!=null?r:{message:e.route.id!=null?"Internal Error":"Not Found"}}const rr=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function _e(n,e){for(const r of rr)Object.defineProperty(e,r,{get(){throw new Error(`The navigation shape changed - ${n}.${r} should now be ${n}.url.${r}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function ge(){return()=>{}}function Le(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,r=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),r!==null?e.setAttribute("tabindex",r):e.removeAttribute("tabindex")}}async function sr({env:n,hydrate:e,paths:r,target:o,trailing_slash:a}){ht(r);const h=tr({target:o,base:r.base,trailing_slash:a});dt({client:h}),e?await h._hydrate(e):h.goto(location.href,{replaceState:!0}),h._start_router()}export{sr as start};
