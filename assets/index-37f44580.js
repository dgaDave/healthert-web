function zv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Bv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bm={exports:{}},su={},Vm={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),Vv=Symbol.for("react.portal"),Wv=Symbol.for("react.fragment"),Hv=Symbol.for("react.strict_mode"),Gv=Symbol.for("react.profiler"),Kv=Symbol.for("react.provider"),qv=Symbol.for("react.context"),Yv=Symbol.for("react.forward_ref"),Xv=Symbol.for("react.suspense"),Jv=Symbol.for("react.memo"),Zv=Symbol.for("react.lazy"),Kp=Symbol.iterator;function ey(t){return t===null||typeof t!="object"?null:(t=Kp&&t[Kp]||t["@@iterator"],typeof t=="function"?t:null)}var Wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hm=Object.assign,Gm={};function ls(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Wm}ls.prototype.isReactComponent={};ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Km(){}Km.prototype=ls.prototype;function Rd(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Wm}var Nd=Rd.prototype=new Km;Nd.constructor=Rd;Hm(Nd,ls.prototype);Nd.isPureReactComponent=!0;var qp=Array.isArray,qm=Object.prototype.hasOwnProperty,Ad={current:null},Ym={key:!0,ref:!0,__self:!0,__source:!0};function Xm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qm.call(e,r)&&!Ym.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Go,type:t,key:s,ref:o,props:i,_owner:Ad.current}}function ty(t,e){return{$$typeof:Go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Go}function ny(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yp=/\/+/g;function rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ny(""+t.key):e.toString(36)}function Wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Go:case Vv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+rc(o,0):r,qp(i)?(n="",t!=null&&(n=t.replace(Yp,"$&/")+"/"),Wl(i,e,n,"",function(u){return u})):i!=null&&(Pd(i)&&(i=ty(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qp(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+rc(s,l);o+=Wl(s,e,n,a,i)}else if(a=ey(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+rc(s,l++),o+=Wl(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function El(t,e,n){if(t==null)return t;var r=[],i=0;return Wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ry(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},Hl={transition:null},iy={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Ad};K.Children={map:El,forEach:function(t,e,n){El(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return El(t,function(){e++}),e},toArray:function(t){return El(t,function(e){return e})||[]},only:function(t){if(!Pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=ls;K.Fragment=Wv;K.Profiler=Gv;K.PureComponent=Rd;K.StrictMode=Hv;K.Suspense=Xv;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Hm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ad.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)qm.call(e,a)&&!Ym.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Go,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:qv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Kv,_context:t},t.Consumer=t};K.createElement=Xm;K.createFactory=function(t){var e=Xm.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:Yv,render:t}};K.isValidElement=Pd;K.lazy=function(t){return{$$typeof:Zv,_payload:{_status:-1,_result:t},_init:ry}};K.memo=function(t,e){return{$$typeof:Jv,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Hl.transition;Hl.transition={};try{t()}finally{Hl.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return pt.current.useCallback(t,e)};K.useContext=function(t){return pt.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};K.useEffect=function(t,e){return pt.current.useEffect(t,e)};K.useId=function(){return pt.current.useId()};K.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return pt.current.useMemo(t,e)};K.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};K.useRef=function(t){return pt.current.useRef(t)};K.useState=function(t){return pt.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return pt.current.useTransition()};K.version="18.2.0";Vm.exports=K;var R=Vm.exports;const Jm=Bv(R),sy=zv({__proto__:null,default:Jm},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy=R,ly=Symbol.for("react.element"),ay=Symbol.for("react.fragment"),uy=Object.prototype.hasOwnProperty,cy=oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hy={key:!0,ref:!0,__self:!0,__source:!0};function Zm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uy.call(e,r)&&!hy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ly,type:t,key:s,ref:o,props:i,_owner:cy.current}}su.Fragment=ay;su.jsx=Zm;su.jsxs=Zm;Bm.exports=su;var g=Bm.exports,Jc={},eg={exports:{}},Rt={},tg={exports:{}},ng={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,F){var B=D.length;D.push(F);e:for(;0<B;){var le=B-1>>>1,ce=D[le];if(0<i(ce,F))D[le]=F,D[B]=ce,B=le;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var F=D[0],B=D.pop();if(B!==F){D[0]=B;e:for(var le=0,ce=D.length,At=ce>>>1;le<At;){var ct=2*(le+1)-1,kr=D[ct],vn=ct+1,fi=D[vn];if(0>i(kr,B))vn<ce&&0>i(fi,kr)?(D[le]=fi,D[vn]=B,le=vn):(D[le]=kr,D[ct]=B,le=ct);else if(vn<ce&&0>i(fi,B))D[le]=fi,D[vn]=B,le=vn;else break e}}return F}function i(D,F){var B=D.sortIndex-F.sortIndex;return B!==0?B:D.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,h=null,d=3,_=!1,y=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=D)r(u),F.sortIndex=F.expirationTime,e(a,F);else break;F=n(u)}}function f(D){if(E=!1,v(D),!y)if(n(a)!==null)y=!0,Bn(S);else{var F=n(u);F!==null&&gn(f,F.startTime-D)}}function S(D,F){y=!1,E&&(E=!1,m(L),L=-1),_=!0;var B=d;try{for(v(F),h=n(a);h!==null&&(!(h.expirationTime>F)||D&&!_e());){var le=h.callback;if(typeof le=="function"){h.callback=null,d=h.priorityLevel;var ce=le(h.expirationTime<=F);F=t.unstable_now(),typeof ce=="function"?h.callback=ce:h===n(a)&&r(a),v(F)}else r(a);h=n(a)}if(h!==null)var At=!0;else{var ct=n(u);ct!==null&&gn(f,ct.startTime-F),At=!1}return At}finally{h=null,d=B,_=!1}}var N=!1,I=null,L=-1,z=5,Q=-1;function _e(){return!(t.unstable_now()-Q<z)}function ut(){if(I!==null){var D=t.unstable_now();Q=D;var F=!0;try{F=I(!0,D)}finally{F?tn():(N=!1,I=null)}}else N=!1}var tn;if(typeof p=="function")tn=function(){p(ut)};else if(typeof MessageChannel<"u"){var xr=new MessageChannel,Te=xr.port2;xr.port1.onmessage=ut,tn=function(){Te.postMessage(null)}}else tn=function(){x(ut,0)};function Bn(D){I=D,N||(N=!0,tn())}function gn(D,F){L=x(function(){D(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||_||(y=!0,Bn(S))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var B=d;d=F;try{return D()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=d;d=D;try{return F()}finally{d=B}},t.unstable_scheduleCallback=function(D,F,B){var le=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?le+B:le):B=le,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=B+ce,D={id:c++,callback:F,priorityLevel:D,startTime:B,expirationTime:ce,sortIndex:-1},B>le?(D.sortIndex=B,e(u,D),n(a)===null&&D===n(u)&&(E?(m(L),L=-1):E=!0,gn(f,B-le))):(D.sortIndex=ce,e(a,D),y||_||(y=!0,Bn(S))),D},t.unstable_shouldYield=_e,t.unstable_wrapCallback=function(D){var F=d;return function(){var B=d;d=F;try{return D.apply(this,arguments)}finally{d=B}}}})(ng);tg.exports=ng;var dy=tg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg=R,kt=dy;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ig=new Set,ho={};function li(t,e){qi(t,e),qi(t+"Capture",e)}function qi(t,e){for(ho[t]=e,t=0;t<e.length;t++)ig.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=Object.prototype.hasOwnProperty,fy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xp={},Jp={};function py(t){return Zc.call(Jp,t)?!0:Zc.call(Xp,t)?!1:fy.test(t)?Jp[t]=!0:(Xp[t]=!0,!1)}function my(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gy(t,e,n,r){if(e===null||typeof e>"u"||my(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ld=/[\-:]([a-z])/g;function Dd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ld,Dd);Xe[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ld,Dd);Xe[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ld,Dd);Xe[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Od(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gy(e,n,i,r)&&(n=null),r||i===null?py(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jn=rg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cl=Symbol.for("react.element"),vi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),sg=Symbol.for("react.provider"),og=Symbol.for("react.context"),Qd=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),bd=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),lg=Symbol.for("react.offscreen"),Zp=Symbol.iterator;function Is(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,ic;function Bs(t){if(ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ic=e&&e[1]||""}return`
`+ic+t}var sc=!1;function oc(t,e){if(!t||sc)return"";sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bs(t):""}function vy(t){switch(t.tag){case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return t=oc(t.type,!1),t;case 11:return t=oc(t.type.render,!1),t;case 1:return t=oc(t.type,!0),t;default:return""}}function rh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yi:return"Fragment";case vi:return"Portal";case eh:return"Profiler";case Md:return"StrictMode";case th:return"Suspense";case nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case og:return(t.displayName||"Context")+".Consumer";case sg:return(t._context.displayName||"Context")+".Provider";case Qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bd:return e=t.displayName||null,e!==null?e:rh(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return rh(t(e))}catch{}}return null}function yy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rh(e);case 8:return e===Md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _y(t){var e=ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sl(t){t._valueTracker||(t._valueTracker=_y(t))}function ug(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ag(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function la(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ih(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function e1(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cg(t,e){e=e.checked,e!=null&&Od(t,"checked",e,!1)}function sh(t,e){cg(t,e);var n=vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&oh(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function t1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oh(t,e,n){(e!=="number"||la(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vs=Array.isArray;function Oi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function n1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Vs(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function hg(t,e){var n=vr(e.value),r=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function r1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tl,fg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wy=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(t){wy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qs[e]=qs[t]})});function pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qs.hasOwnProperty(t)&&qs[t]?(""+e).trim():e+"px"}function mg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Ey=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uh(t,e){if(e){if(Ey[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function ch(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=null;function jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dh=null,Mi=null,Qi=null;function i1(t){if(t=Yo(t)){if(typeof dh!="function")throw Error(k(280));var e=t.stateNode;e&&(e=cu(e),dh(t.stateNode,t.type,e))}}function gg(t){Mi?Qi?Qi.push(t):Qi=[t]:Mi=t}function vg(){if(Mi){var t=Mi,e=Qi;if(Qi=Mi=null,i1(t),e)for(t=0;t<e.length;t++)i1(e[t])}}function yg(t,e){return t(e)}function _g(){}var lc=!1;function wg(t,e,n){if(lc)return t(e,n);lc=!0;try{return yg(t,e,n)}finally{lc=!1,(Mi!==null||Qi!==null)&&(_g(),vg())}}function po(t,e){var n=t.stateNode;if(n===null)return null;var r=cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var fh=!1;if(An)try{var xs={};Object.defineProperty(xs,"passive",{get:function(){fh=!0}}),window.addEventListener("test",xs,xs),window.removeEventListener("test",xs,xs)}catch{fh=!1}function Cy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ys=!1,aa=null,ua=!1,ph=null,Sy={onError:function(t){Ys=!0,aa=t}};function Ty(t,e,n,r,i,s,o,l,a){Ys=!1,aa=null,Cy.apply(Sy,arguments)}function Iy(t,e,n,r,i,s,o,l,a){if(Ty.apply(this,arguments),Ys){if(Ys){var u=aa;Ys=!1,aa=null}else throw Error(k(198));ua||(ua=!0,ph=u)}}function ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Eg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function s1(t){if(ai(t)!==t)throw Error(k(188))}function xy(t){var e=t.alternate;if(!e){if(e=ai(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return s1(i),t;if(s===r)return s1(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Cg(t){return t=xy(t),t!==null?Sg(t):null}function Sg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sg(t);if(e!==null)return e;t=t.sibling}return null}var Tg=kt.unstable_scheduleCallback,o1=kt.unstable_cancelCallback,ky=kt.unstable_shouldYield,Ry=kt.unstable_requestPaint,Ae=kt.unstable_now,Ny=kt.unstable_getCurrentPriorityLevel,Fd=kt.unstable_ImmediatePriority,Ig=kt.unstable_UserBlockingPriority,ca=kt.unstable_NormalPriority,Ay=kt.unstable_LowPriority,xg=kt.unstable_IdlePriority,ou=null,cn=null;function Py(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(ou,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:Oy,Ly=Math.log,Dy=Math.LN2;function Oy(t){return t>>>=0,t===0?32:31-(Ly(t)/Dy|0)|0}var Il=64,xl=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ha(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ws(l):(s&=o,s!==0&&(r=Ws(s)))}else o=n&~i,o!==0?r=Ws(o):s!==0&&(r=Ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function My(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=My(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kg(){var t=Il;return Il<<=1,!(Il&4194240)&&(Il=64),t}function ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function by(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function Rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ng,$d,Ag,Pg,Lg,gh=!1,kl=[],or=null,lr=null,ar=null,mo=new Map,go=new Map,Jn=[],jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function l1(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function ks(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Yo(e),e!==null&&$d(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Fy(t,e,n,r,i){switch(e){case"focusin":return or=ks(or,t,e,n,r,i),!0;case"dragenter":return lr=ks(lr,t,e,n,r,i),!0;case"mouseover":return ar=ks(ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return mo.set(s,ks(mo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,go.set(s,ks(go.get(s)||null,t,e,n,r,i)),!0}return!1}function Dg(t){var e=Mr(t.target);if(e!==null){var n=ai(e);if(n!==null){if(e=n.tag,e===13){if(e=Eg(n),e!==null){t.blockedOn=e,Lg(t.priority,function(){Ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hh=r,n.target.dispatchEvent(r),hh=null}else return e=Yo(n),e!==null&&$d(e),t.blockedOn=n,!1;e.shift()}return!0}function a1(t,e,n){Gl(t)&&n.delete(e)}function Uy(){gh=!1,or!==null&&Gl(or)&&(or=null),lr!==null&&Gl(lr)&&(lr=null),ar!==null&&Gl(ar)&&(ar=null),mo.forEach(a1),go.forEach(a1)}function Rs(t,e){t.blockedOn===e&&(t.blockedOn=null,gh||(gh=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,Uy)))}function vo(t){function e(i){return Rs(i,t)}if(0<kl.length){Rs(kl[0],t);for(var n=1;n<kl.length;n++){var r=kl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&Rs(or,t),lr!==null&&Rs(lr,t),ar!==null&&Rs(ar,t),mo.forEach(e),go.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)Dg(n),n.blockedOn===null&&Jn.shift()}var bi=jn.ReactCurrentBatchConfig,da=!0;function $y(t,e,n,r){var i=re,s=bi.transition;bi.transition=null;try{re=1,zd(t,e,n,r)}finally{re=i,bi.transition=s}}function zy(t,e,n,r){var i=re,s=bi.transition;bi.transition=null;try{re=4,zd(t,e,n,r)}finally{re=i,bi.transition=s}}function zd(t,e,n,r){if(da){var i=vh(t,e,n,r);if(i===null)yc(t,e,r,fa,n),l1(t,r);else if(Fy(i,t,e,n,r))r.stopPropagation();else if(l1(t,r),e&4&&-1<jy.indexOf(t)){for(;i!==null;){var s=Yo(i);if(s!==null&&Ng(s),s=vh(t,e,n,r),s===null&&yc(t,e,r,fa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yc(t,e,r,null,n)}}var fa=null;function vh(t,e,n,r){if(fa=null,t=jd(r),t=Mr(t),t!==null)if(e=ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Eg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fa=t,null}function Og(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ny()){case Fd:return 1;case Ig:return 4;case ca:case Ay:return 16;case xg:return 536870912;default:return 16}default:return 16}}var ir=null,Bd=null,Kl=null;function Mg(){if(Kl)return Kl;var t,e=Bd,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Kl=i.slice(t,1<r?1-r:void 0)}function ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function u1(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rl:u1,this.isPropagationStopped=u1,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=Nt(as),qo=Se({},as,{view:0,detail:0}),By=Nt(qo),uc,cc,Ns,lu=Se({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(uc=t.screenX-Ns.screenX,cc=t.screenY-Ns.screenY):cc=uc=0,Ns=t),uc)},movementY:function(t){return"movementY"in t?t.movementY:cc}}),c1=Nt(lu),Vy=Se({},lu,{dataTransfer:0}),Wy=Nt(Vy),Hy=Se({},qo,{relatedTarget:0}),hc=Nt(Hy),Gy=Se({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Ky=Nt(Gy),qy=Se({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yy=Nt(qy),Xy=Se({},as,{data:0}),h1=Nt(Xy),Jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=e_[t])?!!e[t]:!1}function Wd(){return t_}var n_=Se({},qo,{key:function(t){if(t.key){var e=Jy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(t){return t.type==="keypress"?ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r_=Nt(n_),i_=Se({},lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),d1=Nt(i_),s_=Se({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),o_=Nt(s_),l_=Se({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),a_=Nt(l_),u_=Se({},lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),c_=Nt(u_),h_=[9,13,27,32],Hd=An&&"CompositionEvent"in window,Xs=null;An&&"documentMode"in document&&(Xs=document.documentMode);var d_=An&&"TextEvent"in window&&!Xs,Qg=An&&(!Hd||Xs&&8<Xs&&11>=Xs),f1=String.fromCharCode(32),p1=!1;function bg(t,e){switch(t){case"keyup":return h_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _i=!1;function f_(t,e){switch(t){case"compositionend":return jg(e);case"keypress":return e.which!==32?null:(p1=!0,f1);case"textInput":return t=e.data,t===f1&&p1?null:t;default:return null}}function p_(t,e){if(_i)return t==="compositionend"||!Hd&&bg(t,e)?(t=Mg(),Kl=Bd=ir=null,_i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qg&&e.locale!=="ko"?null:e.data;default:return null}}var m_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function m1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!m_[t.type]:e==="textarea"}function Fg(t,e,n,r){gg(r),e=pa(e,"onChange"),0<e.length&&(n=new Vd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Js=null,yo=null;function g_(t){Yg(t,0)}function au(t){var e=Ci(t);if(ug(e))return t}function v_(t,e){if(t==="change")return e}var Ug=!1;if(An){var dc;if(An){var fc="oninput"in document;if(!fc){var g1=document.createElement("div");g1.setAttribute("oninput","return;"),fc=typeof g1.oninput=="function"}dc=fc}else dc=!1;Ug=dc&&(!document.documentMode||9<document.documentMode)}function v1(){Js&&(Js.detachEvent("onpropertychange",$g),yo=Js=null)}function $g(t){if(t.propertyName==="value"&&au(yo)){var e=[];Fg(e,yo,t,jd(t)),wg(g_,e)}}function y_(t,e,n){t==="focusin"?(v1(),Js=e,yo=n,Js.attachEvent("onpropertychange",$g)):t==="focusout"&&v1()}function __(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(yo)}function w_(t,e){if(t==="click")return au(e)}function E_(t,e){if(t==="input"||t==="change")return au(e)}function C_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:C_;function _o(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zc.call(e,i)||!en(t[i],e[i]))return!1}return!0}function y1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _1(t,e){var n=y1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=y1(n)}}function zg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bg(){for(var t=window,e=la();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=la(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function S_(t){var e=Bg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zg(n.ownerDocument.documentElement,n)){if(r!==null&&Gd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_1(n,s);var o=_1(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var T_=An&&"documentMode"in document&&11>=document.documentMode,wi=null,yh=null,Zs=null,_h=!1;function w1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_h||wi==null||wi!==la(r)||(r=wi,"selectionStart"in r&&Gd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zs&&_o(Zs,r)||(Zs=r,r=pa(yh,"onSelect"),0<r.length&&(e=new Vd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wi)))}function Nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ei={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},pc={},Vg={};An&&(Vg=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function uu(t){if(pc[t])return pc[t];if(!Ei[t])return t;var e=Ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vg)return pc[t]=e[n];return t}var Wg=uu("animationend"),Hg=uu("animationiteration"),Gg=uu("animationstart"),Kg=uu("transitionend"),qg=new Map,E1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){qg.set(t,e),li(e,[t])}for(var mc=0;mc<E1.length;mc++){var gc=E1[mc],I_=gc.toLowerCase(),x_=gc[0].toUpperCase()+gc.slice(1);Er(I_,"on"+x_)}Er(Wg,"onAnimationEnd");Er(Hg,"onAnimationIteration");Er(Gg,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(Kg,"onTransitionEnd");qi("onMouseEnter",["mouseout","mouseover"]);qi("onMouseLeave",["mouseout","mouseover"]);qi("onPointerEnter",["pointerout","pointerover"]);qi("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function C1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Iy(r,e,void 0,t),t.currentTarget=null}function Yg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;C1(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;C1(i,l,u),s=a}}}if(ua)throw t=ph,ua=!1,ph=null,t}function de(t,e){var n=e[Th];n===void 0&&(n=e[Th]=new Set);var r=t+"__bubble";n.has(r)||(Xg(e,t,2,!1),n.add(r))}function vc(t,e,n){var r=0;e&&(r|=4),Xg(n,t,r,e)}var Al="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[Al]){t[Al]=!0,ig.forEach(function(n){n!=="selectionchange"&&(k_.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Al]||(e[Al]=!0,vc("selectionchange",!1,e))}}function Xg(t,e,n,r){switch(Og(e)){case 1:var i=$y;break;case 4:i=zy;break;default:i=zd}n=i.bind(null,e,n,t),i=void 0,!fh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function yc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mr(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}wg(function(){var u=s,c=jd(n),h=[];e:{var d=qg.get(t);if(d!==void 0){var _=Vd,y=t;switch(t){case"keypress":if(ql(n)===0)break e;case"keydown":case"keyup":_=r_;break;case"focusin":y="focus",_=hc;break;case"focusout":y="blur",_=hc;break;case"beforeblur":case"afterblur":_=hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=c1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=o_;break;case Wg:case Hg:case Gg:_=Ky;break;case Kg:_=a_;break;case"scroll":_=By;break;case"wheel":_=c_;break;case"copy":case"cut":case"paste":_=Yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=d1}var E=(e&4)!==0,x=!E&&t==="scroll",m=E?d!==null?d+"Capture":null:d;E=[];for(var p=u,v;p!==null;){v=p;var f=v.stateNode;if(v.tag===5&&f!==null&&(v=f,m!==null&&(f=po(p,m),f!=null&&E.push(Eo(p,f,v)))),x)break;p=p.return}0<E.length&&(d=new _(d,y,null,n,c),h.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",d&&n!==hh&&(y=n.relatedTarget||n.fromElement)&&(Mr(y)||y[Pn]))break e;if((_||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,_?(y=n.relatedTarget||n.toElement,_=u,y=y?Mr(y):null,y!==null&&(x=ai(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(_=null,y=u),_!==y)){if(E=c1,f="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=d1,f="onPointerLeave",m="onPointerEnter",p="pointer"),x=_==null?d:Ci(_),v=y==null?d:Ci(y),d=new E(f,p+"leave",_,n,c),d.target=x,d.relatedTarget=v,f=null,Mr(c)===u&&(E=new E(m,p+"enter",y,n,c),E.target=v,E.relatedTarget=x,f=E),x=f,_&&y)t:{for(E=_,m=y,p=0,v=E;v;v=pi(v))p++;for(v=0,f=m;f;f=pi(f))v++;for(;0<p-v;)E=pi(E),p--;for(;0<v-p;)m=pi(m),v--;for(;p--;){if(E===m||m!==null&&E===m.alternate)break t;E=pi(E),m=pi(m)}E=null}else E=null;_!==null&&S1(h,d,_,E,!1),y!==null&&x!==null&&S1(h,x,y,E,!0)}}e:{if(d=u?Ci(u):window,_=d.nodeName&&d.nodeName.toLowerCase(),_==="select"||_==="input"&&d.type==="file")var S=v_;else if(m1(d))if(Ug)S=E_;else{S=__;var N=y_}else(_=d.nodeName)&&_.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=w_);if(S&&(S=S(t,u))){Fg(h,S,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&oh(d,"number",d.value)}switch(N=u?Ci(u):window,t){case"focusin":(m1(N)||N.contentEditable==="true")&&(wi=N,yh=u,Zs=null);break;case"focusout":Zs=yh=wi=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,w1(h,n,c);break;case"selectionchange":if(T_)break;case"keydown":case"keyup":w1(h,n,c)}var I;if(Hd)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else _i?bg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Qg&&n.locale!=="ko"&&(_i||L!=="onCompositionStart"?L==="onCompositionEnd"&&_i&&(I=Mg()):(ir=c,Bd="value"in ir?ir.value:ir.textContent,_i=!0)),N=pa(u,L),0<N.length&&(L=new h1(L,t,null,n,c),h.push({event:L,listeners:N}),I?L.data=I:(I=jg(n),I!==null&&(L.data=I)))),(I=d_?f_(t,n):p_(t,n))&&(u=pa(u,"onBeforeInput"),0<u.length&&(c=new h1("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=I))}Yg(h,e)})}function Eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=po(t,n),s!=null&&r.unshift(Eo(t,s,i)),s=po(t,e),s!=null&&r.push(Eo(t,s,i))),t=t.return}return r}function pi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function S1(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=po(n,s),a!=null&&o.unshift(Eo(n,a,l))):i||(a=po(n,s),a!=null&&o.push(Eo(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var R_=/\r\n?/g,N_=/\u0000|\uFFFD/g;function T1(t){return(typeof t=="string"?t:""+t).replace(R_,`
`).replace(N_,"")}function Pl(t,e,n){if(e=T1(e),T1(t)!==e&&n)throw Error(k(425))}function ma(){}var wh=null,Eh=null;function Ch(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sh=typeof setTimeout=="function"?setTimeout:void 0,A_=typeof clearTimeout=="function"?clearTimeout:void 0,I1=typeof Promise=="function"?Promise:void 0,P_=typeof queueMicrotask=="function"?queueMicrotask:typeof I1<"u"?function(t){return I1.resolve(null).then(t).catch(L_)}:Sh;function L_(t){setTimeout(function(){throw t})}function _c(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vo(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function x1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),sn="__reactFiber$"+us,Co="__reactProps$"+us,Pn="__reactContainer$"+us,Th="__reactEvents$"+us,D_="__reactListeners$"+us,O_="__reactHandles$"+us;function Mr(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=x1(t);t!==null;){if(n=t[sn])return n;t=x1(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[sn]||t[Pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function cu(t){return t[Co]||null}var Ih=[],Si=-1;function Cr(t){return{current:t}}function ge(t){0>Si||(t.current=Ih[Si],Ih[Si]=null,Si--)}function he(t,e){Si++,Ih[Si]=t.current,t.current=e}var yr={},lt=Cr(yr),_t=Cr(!1),Kr=yr;function Yi(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function ga(){ge(_t),ge(lt)}function k1(t,e,n){if(lt.current!==yr)throw Error(k(168));he(lt,e),he(_t,n)}function Jg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,yy(t)||"Unknown",i));return Se({},n,r)}function va(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Kr=lt.current,he(lt,t),he(_t,_t.current),!0}function R1(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=Jg(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,ge(_t),ge(lt),he(lt,t)):ge(_t),he(_t,n)}var wn=null,hu=!1,wc=!1;function Zg(t){wn===null?wn=[t]:wn.push(t)}function M_(t){hu=!0,Zg(t)}function Sr(){if(!wc&&wn!==null){wc=!0;var t=0,e=re;try{var n=wn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wn=null,hu=!1}catch(i){throw wn!==null&&(wn=wn.slice(t+1)),Tg(Fd,Sr),i}finally{re=e,wc=!1}}return null}var Ti=[],Ii=0,ya=null,_a=0,Lt=[],Dt=0,qr=null,En=1,Cn="";function Pr(t,e){Ti[Ii++]=_a,Ti[Ii++]=ya,ya=t,_a=e}function e4(t,e,n){Lt[Dt++]=En,Lt[Dt++]=Cn,Lt[Dt++]=qr,qr=t;var r=En;t=Cn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-Xt(e)+i|n<<i|r,Cn=s+t}else En=1<<s|n<<i|r,Cn=t}function Kd(t){t.return!==null&&(Pr(t,1),e4(t,1,0))}function qd(t){for(;t===ya;)ya=Ti[--Ii],Ti[Ii]=null,_a=Ti[--Ii],Ti[Ii]=null;for(;t===qr;)qr=Lt[--Dt],Lt[Dt]=null,Cn=Lt[--Dt],Lt[Dt]=null,En=Lt[--Dt],Lt[Dt]=null}var It=null,St=null,ye=!1,Kt=null;function t4(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function N1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,It=t,St=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,It=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:En,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,It=t,St=null,!0):!1;default:return!1}}function xh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kh(t){if(ye){var e=St;if(e){var n=e;if(!N1(t,e)){if(xh(t))throw Error(k(418));e=ur(n.nextSibling);var r=It;e&&N1(t,e)?t4(r,n):(t.flags=t.flags&-4097|2,ye=!1,It=t)}}else{if(xh(t))throw Error(k(418));t.flags=t.flags&-4097|2,ye=!1,It=t}}}function A1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function Ll(t){if(t!==It)return!1;if(!ye)return A1(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ch(t.type,t.memoizedProps)),e&&(e=St)){if(xh(t))throw n4(),Error(k(418));for(;e;)t4(t,e),e=ur(e.nextSibling)}if(A1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=It?ur(t.stateNode.nextSibling):null;return!0}function n4(){for(var t=St;t;)t=ur(t.nextSibling)}function Xi(){St=It=null,ye=!1}function Yd(t){Kt===null?Kt=[t]:Kt.push(t)}var Q_=jn.ReactCurrentBatchConfig;function Wt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wa=Cr(null),Ea=null,xi=null,Xd=null;function Jd(){Xd=xi=Ea=null}function Zd(t){var e=wa.current;ge(wa),t._currentValue=e}function Rh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ji(t,e){Ea=t,Xd=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if(Ea===null)throw Error(k(308));xi=t,Ea.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var Qr=null;function ef(t){Qr===null?Qr=[t]:Qr.push(t)}function r4(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ef(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i4(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ln(t,n)}return i=r.interleaved,i===null?(e.next=e,ef(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ln(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ud(t,n)}}function P1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ca(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var h=i.baseState;o=0,c=u=a=null,l=s;do{var d=l.lane,_=l.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,E=l;switch(d=e,_=n,E.tag){case 1:if(y=E.payload,typeof y=="function"){h=y.call(_,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=E.payload,d=typeof y=="function"?y.call(_,h,d):y,d==null)break e;h=Se({},h,d);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else _={eventTime:_,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=_,a=h):c=c.next=_,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=h}}function L1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var s4=new rg.Component().refs;function Nh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=dr(t),s=kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(Jt(e,t,i,r),Yl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=dr(t),s=kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(Jt(e,t,i,r),Yl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=dr(t),i=kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=cr(t,i,r),e!==null&&(Jt(e,t,r,n),Yl(e,t,r))}};function D1(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!_o(n,r)||!_o(i,s):!0}function o4(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=wt(e)?Kr:lt.current,r=e.contextTypes,s=(r=r!=null)?Yi(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function O1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function Ah(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=s4,tf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=wt(e)?Kr:lt.current,i.context=Yi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&du.enqueueReplaceState(i,i.state,null),Ca(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===s4&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Dl(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function M1(t){var e=t._init;return e(t._payload)}function l4(t){function e(m,p){if(t){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=fr(m,p),m.index=0,m.sibling=null,m}function s(m,p,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,v,f){return p===null||p.tag!==6?(p=kc(v,m.mode,f),p.return=m,p):(p=i(p,v),p.return=m,p)}function a(m,p,v,f){var S=v.type;return S===yi?c(m,p,v.props.children,f,v.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yn&&M1(S)===p.type)?(f=i(p,v.props),f.ref=As(m,p,v),f.return=m,f):(f=na(v.type,v.key,v.props,null,m.mode,f),f.ref=As(m,p,v),f.return=m,f)}function u(m,p,v,f){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Rc(v,m.mode,f),p.return=m,p):(p=i(p,v.children||[]),p.return=m,p)}function c(m,p,v,f,S){return p===null||p.tag!==7?(p=Vr(v,m.mode,f,S),p.return=m,p):(p=i(p,v),p.return=m,p)}function h(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=kc(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Cl:return v=na(p.type,p.key,p.props,null,m.mode,v),v.ref=As(m,null,p),v.return=m,v;case vi:return p=Rc(p,m.mode,v),p.return=m,p;case Yn:var f=p._init;return h(m,f(p._payload),v)}if(Vs(p)||Is(p))return p=Vr(p,m.mode,v,null),p.return=m,p;Dl(m,p)}return null}function d(m,p,v,f){var S=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:l(m,p,""+v,f);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cl:return v.key===S?a(m,p,v,f):null;case vi:return v.key===S?u(m,p,v,f):null;case Yn:return S=v._init,d(m,p,S(v._payload),f)}if(Vs(v)||Is(v))return S!==null?null:c(m,p,v,f,null);Dl(m,v)}return null}function _(m,p,v,f,S){if(typeof f=="string"&&f!==""||typeof f=="number")return m=m.get(v)||null,l(p,m,""+f,S);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Cl:return m=m.get(f.key===null?v:f.key)||null,a(p,m,f,S);case vi:return m=m.get(f.key===null?v:f.key)||null,u(p,m,f,S);case Yn:var N=f._init;return _(m,p,v,N(f._payload),S)}if(Vs(f)||Is(f))return m=m.get(v)||null,c(p,m,f,S,null);Dl(p,f)}return null}function y(m,p,v,f){for(var S=null,N=null,I=p,L=p=0,z=null;I!==null&&L<v.length;L++){I.index>L?(z=I,I=null):z=I.sibling;var Q=d(m,I,v[L],f);if(Q===null){I===null&&(I=z);break}t&&I&&Q.alternate===null&&e(m,I),p=s(Q,p,L),N===null?S=Q:N.sibling=Q,N=Q,I=z}if(L===v.length)return n(m,I),ye&&Pr(m,L),S;if(I===null){for(;L<v.length;L++)I=h(m,v[L],f),I!==null&&(p=s(I,p,L),N===null?S=I:N.sibling=I,N=I);return ye&&Pr(m,L),S}for(I=r(m,I);L<v.length;L++)z=_(I,m,L,v[L],f),z!==null&&(t&&z.alternate!==null&&I.delete(z.key===null?L:z.key),p=s(z,p,L),N===null?S=z:N.sibling=z,N=z);return t&&I.forEach(function(_e){return e(m,_e)}),ye&&Pr(m,L),S}function E(m,p,v,f){var S=Is(v);if(typeof S!="function")throw Error(k(150));if(v=S.call(v),v==null)throw Error(k(151));for(var N=S=null,I=p,L=p=0,z=null,Q=v.next();I!==null&&!Q.done;L++,Q=v.next()){I.index>L?(z=I,I=null):z=I.sibling;var _e=d(m,I,Q.value,f);if(_e===null){I===null&&(I=z);break}t&&I&&_e.alternate===null&&e(m,I),p=s(_e,p,L),N===null?S=_e:N.sibling=_e,N=_e,I=z}if(Q.done)return n(m,I),ye&&Pr(m,L),S;if(I===null){for(;!Q.done;L++,Q=v.next())Q=h(m,Q.value,f),Q!==null&&(p=s(Q,p,L),N===null?S=Q:N.sibling=Q,N=Q);return ye&&Pr(m,L),S}for(I=r(m,I);!Q.done;L++,Q=v.next())Q=_(I,m,L,Q.value,f),Q!==null&&(t&&Q.alternate!==null&&I.delete(Q.key===null?L:Q.key),p=s(Q,p,L),N===null?S=Q:N.sibling=Q,N=Q);return t&&I.forEach(function(ut){return e(m,ut)}),ye&&Pr(m,L),S}function x(m,p,v,f){if(typeof v=="object"&&v!==null&&v.type===yi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Cl:e:{for(var S=v.key,N=p;N!==null;){if(N.key===S){if(S=v.type,S===yi){if(N.tag===7){n(m,N.sibling),p=i(N,v.props.children),p.return=m,m=p;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yn&&M1(S)===N.type){n(m,N.sibling),p=i(N,v.props),p.ref=As(m,N,v),p.return=m,m=p;break e}n(m,N);break}else e(m,N);N=N.sibling}v.type===yi?(p=Vr(v.props.children,m.mode,f,v.key),p.return=m,m=p):(f=na(v.type,v.key,v.props,null,m.mode,f),f.ref=As(m,p,v),f.return=m,m=f)}return o(m);case vi:e:{for(N=v.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=i(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Rc(v,m.mode,f),p.return=m,m=p}return o(m);case Yn:return N=v._init,x(m,p,N(v._payload),f)}if(Vs(v))return y(m,p,v,f);if(Is(v))return E(m,p,v,f);Dl(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,v),p.return=m,m=p):(n(m,p),p=kc(v,m.mode,f),p.return=m,m=p),o(m)):n(m,p)}return x}var Ji=l4(!0),a4=l4(!1),Xo={},hn=Cr(Xo),So=Cr(Xo),To=Cr(Xo);function br(t){if(t===Xo)throw Error(k(174));return t}function nf(t,e){switch(he(To,e),he(So,t),he(hn,Xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ah(e,t)}ge(hn),he(hn,e)}function Zi(){ge(hn),ge(So),ge(To)}function u4(t){br(To.current);var e=br(hn.current),n=ah(e,t.type);e!==n&&(he(So,t),he(hn,n))}function rf(t){So.current===t&&(ge(hn),ge(So))}var Ee=Cr(0);function Sa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ec=[];function sf(){for(var t=0;t<Ec.length;t++)Ec[t]._workInProgressVersionPrimary=null;Ec.length=0}var Xl=jn.ReactCurrentDispatcher,Cc=jn.ReactCurrentBatchConfig,Yr=0,Ce=null,be=null,Ue=null,Ta=!1,eo=!1,Io=0,b_=0;function Je(){throw Error(k(321))}function of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function lf(t,e,n,r,i,s){if(Yr=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?$_:z_,t=n(r,i),eo){s=0;do{if(eo=!1,Io=0,25<=s)throw Error(k(301));s+=1,Ue=be=null,e.updateQueue=null,Xl.current=B_,t=n(r,i)}while(eo)}if(Xl.current=Ia,e=be!==null&&be.next!==null,Yr=0,Ue=be=Ce=null,Ta=!1,e)throw Error(k(300));return t}function af(){var t=Io!==0;return Io=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ce.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Ut(){if(be===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Ue===null?Ce.memoizedState:Ue.next;if(e!==null)Ue=e,be=t;else{if(t===null)throw Error(k(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ue===null?Ce.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function xo(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Yr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,Ce.lanes|=c,Xr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,en(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,Xr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function c4(){}function h4(t,e){var n=Ce,r=Ut(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,uf(p4.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,ko(9,f4.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(k(349));Yr&30||d4(n,e,i)}return i}function d4(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f4(t,e,n,r){e.value=n,e.getSnapshot=r,m4(e)&&g4(t)}function p4(t,e,n){return n(function(){m4(e)&&g4(t)})}function m4(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function g4(t){var e=Ln(t,1);e!==null&&Jt(e,t,1,-1)}function Q1(t){var e=rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},e.queue=t,t=t.dispatch=U_.bind(null,Ce,t),[e.memoizedState,t]}function ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function v4(){return Ut().memoizedState}function Jl(t,e,n,r){var i=rn();Ce.flags|=t,i.memoizedState=ko(1|e,n,void 0,r===void 0?null:r)}function fu(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&of(r,o.deps)){i.memoizedState=ko(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=ko(1|e,n,s,r)}function b1(t,e){return Jl(8390656,8,t,e)}function uf(t,e){return fu(2048,8,t,e)}function y4(t,e){return fu(4,2,t,e)}function _4(t,e){return fu(4,4,t,e)}function w4(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function E4(t,e,n){return n=n!=null?n.concat([t]):null,fu(4,4,w4.bind(null,e,t),n)}function cf(){}function C4(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function S4(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function T4(t,e,n){return Yr&21?(en(n,e)||(n=kg(),Ce.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function j_(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=Cc.transition;Cc.transition={};try{t(!1),e()}finally{re=n,Cc.transition=r}}function I4(){return Ut().memoizedState}function F_(t,e,n){var r=dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},x4(t))k4(e,n);else if(n=r4(t,e,n,r),n!==null){var i=ft();Jt(n,t,r,i),R4(n,e,r)}}function U_(t,e,n){var r=dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(x4(t))k4(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,en(l,o)){var a=e.interleaved;a===null?(i.next=i,ef(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=r4(t,e,i,r),n!==null&&(i=ft(),Jt(n,t,r,i),R4(n,e,r))}}function x4(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function k4(t,e){eo=Ta=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function R4(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ud(t,n)}}var Ia={readContext:Ft,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},$_={readContext:Ft,useCallback:function(t,e){return rn().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:b1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,w4.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=F_.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=rn();return t={current:t},e.memoizedState=t},useState:Q1,useDebugValue:cf,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=Q1(!1),e=t[0];return t=j_.bind(null,t[1]),rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=rn();if(ye){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Be===null)throw Error(k(349));Yr&30||d4(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,b1(p4.bind(null,r,s,t),[t]),r.flags|=2048,ko(9,f4.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=rn(),e=Be.identifierPrefix;if(ye){var n=Cn,r=En;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=b_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},z_={readContext:Ft,useCallback:C4,useContext:Ft,useEffect:uf,useImperativeHandle:E4,useInsertionEffect:y4,useLayoutEffect:_4,useMemo:S4,useReducer:Sc,useRef:v4,useState:function(){return Sc(xo)},useDebugValue:cf,useDeferredValue:function(t){var e=Ut();return T4(e,be.memoizedState,t)},useTransition:function(){var t=Sc(xo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:c4,useSyncExternalStore:h4,useId:I4,unstable_isNewReconciler:!1},B_={readContext:Ft,useCallback:C4,useContext:Ft,useEffect:uf,useImperativeHandle:E4,useInsertionEffect:y4,useLayoutEffect:_4,useMemo:S4,useReducer:Tc,useRef:v4,useState:function(){return Tc(xo)},useDebugValue:cf,useDeferredValue:function(t){var e=Ut();return be===null?e.memoizedState=t:T4(e,be.memoizedState,t)},useTransition:function(){var t=Tc(xo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:c4,useSyncExternalStore:h4,useId:I4,unstable_isNewReconciler:!1};function es(t,e){try{var n="",r=e;do n+=vy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ic(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var V_=typeof WeakMap=="function"?WeakMap:Map;function N4(t,e,n){n=kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ka||(ka=!0,$h=r),Ph(t,e)},n}function A4(t,e,n){n=kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ph(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function j1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new V_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=i6.bind(null,t,e,n),e.then(t,t))}function F1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function U1(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var W_=jn.ReactCurrentOwner,vt=!1;function ht(t,e,n,r){e.child=t===null?a4(e,null,n,r):Ji(e,t.child,n,r)}function $1(t,e,n,r,i){n=n.render;var s=e.ref;return ji(e,i),r=lf(t,e,n,r,s,i),n=af(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(ye&&n&&Kd(e),e.flags|=1,ht(t,e,r,i),e.child)}function z1(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,P4(t,e,s,r,i)):(t=na(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_o,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function P4(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(_o(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return Lh(t,e,n,r,i)}function L4(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ri,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Ri,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Ri,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(Ri,Ct),Ct|=r;return ht(t,e,i,n),e.child}function D4(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lh(t,e,n,r,i){var s=wt(n)?Kr:lt.current;return s=Yi(e,s),ji(e,i),n=lf(t,e,n,r,s,i),r=af(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(ye&&r&&Kd(e),e.flags|=1,ht(t,e,n,i),e.child)}function B1(t,e,n,r,i){if(wt(n)){var s=!0;va(e)}else s=!1;if(ji(e,i),e.stateNode===null)Zl(t,e),o4(e,n,r),Ah(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=wt(n)?Kr:lt.current,u=Yi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&O1(e,o,r,u),Xn=!1;var d=e.memoizedState;o.state=d,Ca(e,r,o,i),a=e.memoizedState,l!==r||d!==a||_t.current||Xn?(typeof c=="function"&&(Nh(e,n,c,r),a=e.memoizedState),(l=Xn||D1(e,n,l,r,d,a,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,i4(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Wt(e.type,l),o.props=u,h=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ft(a):(a=wt(n)?Kr:lt.current,a=Yi(e,a));var _=n.getDerivedStateFromProps;(c=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||d!==a)&&O1(e,o,r,a),Xn=!1,d=e.memoizedState,o.state=d,Ca(e,r,o,i);var y=e.memoizedState;l!==h||d!==y||_t.current||Xn?(typeof _=="function"&&(Nh(e,n,_,r),y=e.memoizedState),(u=Xn||D1(e,n,u,r,d,y,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Dh(t,e,n,r,s,i)}function Dh(t,e,n,r,i,s){D4(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&R1(e,n,!1),Dn(t,e,s);r=e.stateNode,W_.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ji(e,t.child,null,s),e.child=Ji(e,null,l,s)):ht(t,e,l,s),e.memoizedState=r.state,i&&R1(e,n,!0),e.child}function O4(t){var e=t.stateNode;e.pendingContext?k1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&k1(t,e.context,!1),nf(t,e.containerInfo)}function V1(t,e,n,r,i){return Xi(),Yd(i),e.flags|=256,ht(t,e,n,r),e.child}var Oh={dehydrated:null,treeContext:null,retryLane:0};function Mh(t){return{baseLanes:t,cachePool:null,transitions:null}}function M4(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(Ee,i&1),t===null)return kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gu(o,r,0,null),t=Vr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mh(n),e.memoizedState=Oh,t):hf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return H_(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=fr(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fr(l,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Oh,r}return s=t.child,t=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hf(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ol(t,e,n,r){return r!==null&&Yd(r),Ji(e,t.child,null,n),t=hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function H_(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ic(Error(k(422))),Ol(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gu({mode:"visible",children:r.children},i,0,null),s=Vr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ji(e,t.child,null,o),e.child.memoizedState=Mh(o),e.memoizedState=Oh,s);if(!(e.mode&1))return Ol(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=Ic(s,r,void 0),Ol(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ln(t,i),Jt(r,t,i,-1))}return vf(),r=Ic(Error(k(421))),Ol(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=s6.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=ur(i.nextSibling),It=e,ye=!0,Kt=null,t!==null&&(Lt[Dt++]=En,Lt[Dt++]=Cn,Lt[Dt++]=qr,En=t.id,Cn=t.overflow,qr=e),e=hf(e,r.children),e.flags|=4096,e)}function W1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rh(t.return,e,n)}function xc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Q4(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&W1(t,n,e);else if(t.tag===19)W1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Sa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xc(e,!0,n,null,s);break;case"together":xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function G_(t,e,n){switch(e.tag){case 3:O4(e),Xi();break;case 5:u4(e);break;case 1:wt(e.type)&&va(e);break;case 4:nf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(wa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?M4(t,e,n):(he(Ee,Ee.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);he(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Q4(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,L4(t,e,n)}return Dn(t,e,n)}var b4,Qh,j4,F4;b4=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qh=function(){};j4=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,br(hn.current);var s=null;switch(n){case"input":i=ih(t,i),r=ih(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=lh(t,i),r=lh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ma)}uh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ho.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ho.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&de("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};F4=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ps(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function K_(t,e,n){var r=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return wt(e.type)&&ga(),Ze(e),null;case 3:return r=e.stateNode,Zi(),ge(_t),ge(lt),sf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(Vh(Kt),Kt=null))),Qh(t,e),Ze(e),null;case 5:rf(e);var i=br(To.current);if(n=e.type,t!==null&&e.stateNode!=null)j4(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Ze(e),null}if(t=br(hn.current),Ll(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[sn]=e,r[Co]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Hs.length;i++)de(Hs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":e1(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":n1(r,s),de("invalid",r)}uh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Pl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Pl(r.textContent,l,t),i=["children",""+l]):ho.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Sl(r),t1(r,s,!0);break;case"textarea":Sl(r),r1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ma)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sn]=e,t[Co]=r,b4(t,e,!1,!1),e.stateNode=t;e:{switch(o=ch(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Hs.length;i++)de(Hs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":e1(t,r),i=ih(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),de("invalid",t);break;case"textarea":n1(t,r),i=lh(t,r),de("invalid",t);break;default:i=r}uh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?mg(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fg(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&fo(t,a):typeof a=="number"&&fo(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ho.hasOwnProperty(s)?a!=null&&s==="onScroll"&&de("scroll",t):a!=null&&Od(t,s,a,o))}switch(n){case"input":Sl(t),t1(t,r,!1);break;case"textarea":Sl(t),r1(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Oi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Oi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ma)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)F4(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=br(To.current),br(hn.current),Ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[sn]=e,(s=r.nodeValue!==n)&&(t=It,t!==null))switch(t.tag){case 3:Pl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=e,e.stateNode=r}return Ze(e),null;case 13:if(ge(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&St!==null&&e.mode&1&&!(e.flags&128))n4(),Xi(),e.flags|=98560,s=!1;else if(s=Ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[sn]=e}else Xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else Kt!==null&&(Vh(Kt),Kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?je===0&&(je=3):vf())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return Zi(),Qh(t,e),t===null&&wo(e.stateNode.containerInfo),Ze(e),null;case 10:return Zd(e.type._context),Ze(e),null;case 17:return wt(e.type)&&ga(),Ze(e),null;case 19:if(ge(Ee),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ps(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sa(t),o!==null){for(e.flags|=128,Ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>ts&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=Sa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Ze(e),null}else 2*Ae()-s.renderingStartTime>ts&&n!==1073741824&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=Ee.current,he(Ee,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return gf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function q_(t,e){switch(qd(e),e.tag){case 1:return wt(e.type)&&ga(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zi(),ge(_t),ge(lt),sf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rf(e),null;case 13:if(ge(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(Ee),null;case 4:return Zi(),null;case 10:return Zd(e.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var Ml=!1,tt=!1,Y_=typeof WeakSet=="function"?WeakSet:Set,M=null;function ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function bh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var H1=!1;function X_(t,e){if(wh=da,t=Bg(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var _;h!==n||i!==0&&h.nodeType!==3||(l=o+i),h!==s||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)d=h,h=_;for(;;){if(h===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++c===r&&(a=o),(_=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eh={focusedElem:t,selectionRange:n},da=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var E=y.memoizedProps,x=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?E:Wt(e.type,E),x);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(f){Ie(e,e.return,f)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return y=H1,H1=!1,y}function to(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&bh(e,n,s)}i=i.next}while(i!==r)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function U4(t){var e=t.alternate;e!==null&&(t.alternate=null,U4(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[Co],delete e[Th],delete e[D_],delete e[O_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $4(t){return t.tag===5||t.tag===3||t.tag===4}function G1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$4(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ma));else if(r!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}function Uh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Uh(t,e,n),t=t.sibling;t!==null;)Uh(t,e,n),t=t.sibling}var He=null,Ht=!1;function Gn(t,e,n){for(n=n.child;n!==null;)z4(t,e,n),n=n.sibling}function z4(t,e,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(ou,n)}catch{}switch(n.tag){case 5:tt||ki(n,e);case 6:var r=He,i=Ht;He=null,Gn(t,e,n),He=r,Ht=i,He!==null&&(Ht?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Ht?(t=He,n=n.stateNode,t.nodeType===8?_c(t.parentNode,n):t.nodeType===1&&_c(t,n),vo(t)):_c(He,n.stateNode));break;case 4:r=He,i=Ht,He=n.stateNode.containerInfo,Ht=!0,Gn(t,e,n),He=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bh(n,e,o),i=i.next}while(i!==r)}Gn(t,e,n);break;case 1:if(!tt&&(ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Gn(t,e,n);break;case 21:Gn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Gn(t,e,n),tt=r):Gn(t,e,n);break;default:Gn(t,e,n)}}function K1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Y_),e.forEach(function(r){var i=o6.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,Ht=!1;break e;case 3:He=l.stateNode.containerInfo,Ht=!0;break e;case 4:He=l.stateNode.containerInfo,Ht=!0;break e}l=l.return}if(He===null)throw Error(k(160));z4(s,o,i),He=null,Ht=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)B4(e,t),e=e.sibling}function B4(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),nn(t),r&4){try{to(3,t,t.return),pu(3,t)}catch(E){Ie(t,t.return,E)}try{to(5,t,t.return)}catch(E){Ie(t,t.return,E)}}break;case 1:Vt(e,t),nn(t),r&512&&n!==null&&ki(n,n.return);break;case 5:if(Vt(e,t),nn(t),r&512&&n!==null&&ki(n,n.return),t.flags&32){var i=t.stateNode;try{fo(i,"")}catch(E){Ie(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&cg(i,s),ch(l,o);var u=ch(l,s);for(o=0;o<a.length;o+=2){var c=a[o],h=a[o+1];c==="style"?mg(i,h):c==="dangerouslySetInnerHTML"?fg(i,h):c==="children"?fo(i,h):Od(i,c,h,u)}switch(l){case"input":sh(i,s);break;case"textarea":hg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Oi(i,!!s.multiple,_,!1):d!==!!s.multiple&&(s.defaultValue!=null?Oi(i,!!s.multiple,s.defaultValue,!0):Oi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Co]=s}catch(E){Ie(t,t.return,E)}}break;case 6:if(Vt(e,t),nn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){Ie(t,t.return,E)}}break;case 3:if(Vt(e,t),nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(E){Ie(t,t.return,E)}break;case 4:Vt(e,t),nn(t);break;case 13:Vt(e,t),nn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pf=Ae())),r&4&&K1(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(u=tt)||c,Vt(e,t),tt=u):Vt(e,t),nn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,_=d.child,d.tag){case 0:case 11:case 14:case 15:to(4,d,d.return);break;case 1:ki(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(E){Ie(r,n,E)}}break;case 5:ki(d,d.return);break;case 22:if(d.memoizedState!==null){Y1(h);continue}}_!==null?(_.return=d,M=_):Y1(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=pg("display",o))}catch(E){Ie(t,t.return,E)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(E){Ie(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vt(e,t),nn(t),r&4&&K1(t);break;case 21:break;default:Vt(e,t),nn(t)}}function nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($4(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fo(i,""),r.flags&=-33);var s=G1(t);Uh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=G1(t);Fh(t,l,o);break;default:throw Error(k(161))}}catch(a){Ie(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function J_(t,e,n){M=t,V4(t)}function V4(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ml;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||tt;l=Ml;var u=tt;if(Ml=o,(tt=a)&&!u)for(M=i;M!==null;)o=M,a=o.child,o.tag===22&&o.memoizedState!==null?X1(i):a!==null?(a.return=o,M=a):X1(i);for(;s!==null;)M=s,V4(s),s=s.sibling;M=i,Ml=l,tt=u}q1(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):q1(t)}}function q1(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&L1(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}L1(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&vo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}tt||e.flags&512&&jh(e)}catch(d){Ie(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Y1(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function X1(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pu(4,e)}catch(a){Ie(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){Ie(e,i,a)}}var s=e.return;try{jh(e)}catch(a){Ie(e,s,a)}break;case 5:var o=e.return;try{jh(e)}catch(a){Ie(e,o,a)}}}catch(a){Ie(e,e.return,a)}if(e===t){M=null;break}var l=e.sibling;if(l!==null){l.return=e.return,M=l;break}M=e.return}}var Z_=Math.ceil,xa=jn.ReactCurrentDispatcher,df=jn.ReactCurrentOwner,jt=jn.ReactCurrentBatchConfig,ee=0,Be=null,De=null,qe=0,Ct=0,Ri=Cr(0),je=0,Ro=null,Xr=0,mu=0,ff=0,no=null,gt=null,pf=0,ts=1/0,_n=null,ka=!1,$h=null,hr=null,Ql=!1,sr=null,Ra=0,ro=0,zh=null,ea=-1,ta=0;function ft(){return ee&6?Ae():ea!==-1?ea:ea=Ae()}function dr(t){return t.mode&1?ee&2&&qe!==0?qe&-qe:Q_.transition!==null?(ta===0&&(ta=kg()),ta):(t=re,t!==0||(t=window.event,t=t===void 0?16:Og(t.type)),t):1}function Jt(t,e,n,r){if(50<ro)throw ro=0,zh=null,Error(k(185));Ko(t,n,r),(!(ee&2)||t!==Be)&&(t===Be&&(!(ee&2)&&(mu|=n),je===4&&Zn(t,qe)),Et(t,r),n===1&&ee===0&&!(e.mode&1)&&(ts=Ae()+500,hu&&Sr()))}function Et(t,e){var n=t.callbackNode;Qy(t,e);var r=ha(t,t===Be?qe:0);if(r===0)n!==null&&o1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&o1(n),e===1)t.tag===0?M_(J1.bind(null,t)):Zg(J1.bind(null,t)),P_(function(){!(ee&6)&&Sr()}),n=null;else{switch(Rg(r)){case 1:n=Fd;break;case 4:n=Ig;break;case 16:n=ca;break;case 536870912:n=xg;break;default:n=ca}n=J4(n,W4.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function W4(t,e){if(ea=-1,ta=0,ee&6)throw Error(k(327));var n=t.callbackNode;if(Fi()&&t.callbackNode!==n)return null;var r=ha(t,t===Be?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Na(t,r);else{e=r;var i=ee;ee|=2;var s=G4();(Be!==t||qe!==e)&&(_n=null,ts=Ae()+500,Br(t,e));do try{n6();break}catch(l){H4(t,l)}while(1);Jd(),xa.current=s,ee=i,De!==null?e=0:(Be=null,qe=0,e=je)}if(e!==0){if(e===2&&(i=mh(t),i!==0&&(r=i,e=Bh(t,i))),e===1)throw n=Ro,Br(t,0),Zn(t,r),Et(t,Ae()),n;if(e===6)Zn(t,r);else{if(i=t.current.alternate,!(r&30)&&!e6(i)&&(e=Na(t,r),e===2&&(s=mh(t),s!==0&&(r=s,e=Bh(t,s))),e===1))throw n=Ro,Br(t,0),Zn(t,r),Et(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Lr(t,gt,_n);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=pf+500-Ae(),10<e)){if(ha(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sh(Lr.bind(null,t,gt,_n),e);break}Lr(t,gt,_n);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z_(r/1960))-r,10<r){t.timeoutHandle=Sh(Lr.bind(null,t,gt,_n),r);break}Lr(t,gt,_n);break;case 5:Lr(t,gt,_n);break;default:throw Error(k(329))}}}return Et(t,Ae()),t.callbackNode===n?W4.bind(null,t):null}function Bh(t,e){var n=no;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Na(t,e),t!==2&&(e=gt,gt=n,e!==null&&Vh(e)),t}function Vh(t){gt===null?gt=t:gt.push.apply(gt,t)}function e6(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~ff,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function J1(t){if(ee&6)throw Error(k(327));Fi();var e=ha(t,0);if(!(e&1))return Et(t,Ae()),null;var n=Na(t,e);if(t.tag!==0&&n===2){var r=mh(t);r!==0&&(e=r,n=Bh(t,r))}if(n===1)throw n=Ro,Br(t,0),Zn(t,e),Et(t,Ae()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,gt,_n),Et(t,Ae()),null}function mf(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(ts=Ae()+500,hu&&Sr())}}function Jr(t){sr!==null&&sr.tag===0&&!(ee&6)&&Fi();var e=ee;ee|=1;var n=jt.transition,r=re;try{if(jt.transition=null,re=1,t)return t()}finally{re=r,jt.transition=n,ee=e,!(ee&6)&&Sr()}}function gf(){Ct=Ri.current,ge(Ri)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,A_(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ga();break;case 3:Zi(),ge(_t),ge(lt),sf();break;case 5:rf(r);break;case 4:Zi();break;case 13:ge(Ee);break;case 19:ge(Ee);break;case 10:Zd(r.type._context);break;case 22:case 23:gf()}n=n.return}if(Be=t,De=t=fr(t.current,null),qe=Ct=e,je=0,Ro=null,ff=mu=Xr=0,gt=no=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qr=null}return t}function H4(t,e){do{var n=De;try{if(Jd(),Xl.current=Ia,Ta){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ta=!1}if(Yr=0,Ue=be=Ce=null,eo=!1,Io=0,df.current=null,n===null||n.return===null){je=1,Ro=e,De=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=qe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var _=F1(o);if(_!==null){_.flags&=-257,U1(_,o,l,s,e),_.mode&1&&j1(s,u,e),e=_,a=u;var y=e.updateQueue;if(y===null){var E=new Set;E.add(a),e.updateQueue=E}else y.add(a);break e}else{if(!(e&1)){j1(s,u,e),vf();break e}a=Error(k(426))}}else if(ye&&l.mode&1){var x=F1(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),U1(x,o,l,s,e),Yd(es(a,l));break e}}s=a=es(a,l),je!==4&&(je=2),no===null?no=[s]:no.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=N4(s,a,e);P1(s,m);break e;case 1:l=a;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(hr===null||!hr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var f=A4(s,l,e);P1(s,f);break e}}s=s.return}while(s!==null)}q4(n)}catch(S){e=S,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function G4(){var t=xa.current;return xa.current=Ia,t===null?Ia:t}function vf(){(je===0||je===3||je===2)&&(je=4),Be===null||!(Xr&268435455)&&!(mu&268435455)||Zn(Be,qe)}function Na(t,e){var n=ee;ee|=2;var r=G4();(Be!==t||qe!==e)&&(_n=null,Br(t,e));do try{t6();break}catch(i){H4(t,i)}while(1);if(Jd(),ee=n,xa.current=r,De!==null)throw Error(k(261));return Be=null,qe=0,je}function t6(){for(;De!==null;)K4(De)}function n6(){for(;De!==null&&!ky();)K4(De)}function K4(t){var e=X4(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?q4(t):De=e,df.current=null}function q4(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=q_(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,De=null;return}}else if(n=K_(n,e,Ct),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);je===0&&(je=5)}function Lr(t,e,n){var r=re,i=jt.transition;try{jt.transition=null,re=1,r6(t,e,n,r)}finally{jt.transition=i,re=r}return null}function r6(t,e,n,r){do Fi();while(sr!==null);if(ee&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(by(t,s),t===Be&&(De=Be=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ql||(Ql=!0,J4(ca,function(){return Fi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=re;re=1;var l=ee;ee|=4,df.current=null,X_(t,n),B4(n,t),S_(Eh),da=!!wh,Eh=wh=null,t.current=n,J_(n),Ry(),ee=l,re=o,jt.transition=s}else t.current=n;if(Ql&&(Ql=!1,sr=t,Ra=i),s=t.pendingLanes,s===0&&(hr=null),Py(n.stateNode),Et(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ka)throw ka=!1,t=$h,$h=null,t;return Ra&1&&t.tag!==0&&Fi(),s=t.pendingLanes,s&1?t===zh?ro++:(ro=0,zh=t):ro=0,Sr(),null}function Fi(){if(sr!==null){var t=Rg(Ra),e=jt.transition,n=re;try{if(jt.transition=null,re=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,Ra=0,ee&6)throw Error(k(331));var i=ee;for(ee|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:to(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,_=c.return;if(U4(c),c===u){M=null;break}if(d!==null){d.return=_,M=d;break}M=_}}}var y=s.alternate;if(y!==null){var E=y.child;if(E!==null){y.child=null;do{var x=E.sibling;E.sibling=null,E=x}while(E!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:to(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,M=m;break e}M=s.return}}var p=t.current;for(M=p;M!==null;){o=M;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,M=v;else e:for(o=p;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pu(9,l)}}catch(S){Ie(l,l.return,S)}if(l===o){M=null;break e}var f=l.sibling;if(f!==null){f.return=l.return,M=f;break e}M=l.return}}if(ee=i,Sr(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(ou,t)}catch{}r=!0}return r}finally{re=n,jt.transition=e}}return!1}function Z1(t,e,n){e=es(n,e),e=N4(t,e,1),t=cr(t,e,1),e=ft(),t!==null&&(Ko(t,1,e),Et(t,e))}function Ie(t,e,n){if(t.tag===3)Z1(t,t,n);else for(;e!==null;){if(e.tag===3){Z1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=es(n,t),t=A4(e,t,1),e=cr(e,t,1),t=ft(),e!==null&&(Ko(e,1,t),Et(e,t));break}}e=e.return}}function i6(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(qe&n)===n&&(je===4||je===3&&(qe&130023424)===qe&&500>Ae()-pf?Br(t,0):ff|=n),Et(t,e)}function Y4(t,e){e===0&&(t.mode&1?(e=xl,xl<<=1,!(xl&130023424)&&(xl=4194304)):e=1);var n=ft();t=Ln(t,e),t!==null&&(Ko(t,e,n),Et(t,n))}function s6(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y4(t,n)}function o6(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),Y4(t,n)}var X4;X4=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,G_(t,e,n);vt=!!(t.flags&131072)}else vt=!1,ye&&e.flags&1048576&&e4(e,_a,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zl(t,e),t=e.pendingProps;var i=Yi(e,lt.current);ji(e,n),i=lf(null,e,r,t,i,n);var s=af();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,va(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tf(e),i.updater=du,e.stateNode=i,i._reactInternals=e,Ah(e,r,t,n),e=Dh(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&Kd(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=a6(r),t=Wt(r,t),i){case 0:e=Lh(null,e,r,t,n);break e;case 1:e=B1(null,e,r,t,n);break e;case 11:e=$1(null,e,r,t,n);break e;case 14:e=z1(null,e,r,Wt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Lh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),B1(t,e,r,i,n);case 3:e:{if(O4(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,i4(t,e),Ca(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=es(Error(k(423)),e),e=V1(t,e,r,n,i);break e}else if(r!==i){i=es(Error(k(424)),e),e=V1(t,e,r,n,i);break e}else for(St=ur(e.stateNode.containerInfo.firstChild),It=e,ye=!0,Kt=null,n=a4(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xi(),r===i){e=Dn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return u4(e),t===null&&kh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ch(r,i)?o=null:s!==null&&Ch(r,s)&&(e.flags|=32),D4(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&kh(e),null;case 13:return M4(t,e,n);case 4:return nf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ji(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),$1(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(wa,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!_t.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=kn(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Rh(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Rh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ji(e,n),i=Ft(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),z1(t,e,r,i,n);case 15:return P4(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Zl(t,e),e.tag=1,wt(r)?(t=!0,va(e)):t=!1,ji(e,n),o4(e,r,i),Ah(e,r,i,n),Dh(null,e,r,!0,t,n);case 19:return Q4(t,e,n);case 22:return L4(t,e,n)}throw Error(k(156,e.tag))};function J4(t,e){return Tg(t,e)}function l6(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new l6(t,e,n,r)}function yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function a6(t){if(typeof t=="function")return yf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qd)return 11;if(t===bd)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function na(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yi:return Vr(n.children,i,s,e);case Md:o=8,i|=8;break;case eh:return t=Qt(12,n,e,i|2),t.elementType=eh,t.lanes=s,t;case th:return t=Qt(13,n,e,i),t.elementType=th,t.lanes=s,t;case nh:return t=Qt(19,n,e,i),t.elementType=nh,t.lanes=s,t;case lg:return gu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sg:o=10;break e;case og:o=9;break e;case Qd:o=11;break e;case bd:o=14;break e;case Yn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vr(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function gu(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=lg,t.lanes=n,t.stateNode={isHidden:!1},t}function kc(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function Rc(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function u6(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ac(0),this.expirationTimes=ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _f(t,e,n,r,i,s,o,l,a){return t=new u6(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tf(s),t}function c6(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Z4(t){if(!t)return yr;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(wt(n))return Jg(t,n,e)}return e}function e2(t,e,n,r,i,s,o,l,a){return t=_f(n,r,!0,t,i,s,o,l,a),t.context=Z4(null),n=t.current,r=ft(),i=dr(n),s=kn(r,i),s.callback=e??null,cr(n,s,i),t.current.lanes=i,Ko(t,i,r),Et(t,r),t}function vu(t,e,n,r){var i=e.current,s=ft(),o=dr(i);return n=Z4(n),e.context===null?e.context=n:e.pendingContext=n,e=kn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(i,e,o),t!==null&&(Jt(t,i,o,s),Yl(t,i,o)),o}function Aa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function e0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wf(t,e){e0(t,e),(t=t.alternate)&&e0(t,e)}function h6(){return null}var t2=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ef(t){this._internalRoot=t}yu.prototype.render=Ef.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));vu(t,e,null,null)};yu.prototype.unmount=Ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){vu(null,t,null,null)}),e[Pn]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&Dg(t)}};function Cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function t0(){}function d6(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Aa(o);s.call(u)}}var o=e2(e,r,t,0,null,!1,!1,"",t0);return t._reactRootContainer=o,t[Pn]=o.current,wo(t.nodeType===8?t.parentNode:t),Jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Aa(a);l.call(u)}}var a=_f(t,0,!1,null,null,!1,!1,"",t0);return t._reactRootContainer=a,t[Pn]=a.current,wo(t.nodeType===8?t.parentNode:t),Jr(function(){vu(e,a,n,r)}),a}function wu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Aa(o);l.call(a)}}vu(e,o,t,i)}else o=d6(n,e,t,i,r);return Aa(o)}Ng=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(Ud(e,n|1),Et(e,Ae()),!(ee&6)&&(ts=Ae()+500,Sr()))}break;case 13:Jr(function(){var r=Ln(t,1);if(r!==null){var i=ft();Jt(r,t,1,i)}}),wf(t,1)}};$d=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=ft();Jt(e,t,134217728,n)}wf(t,134217728)}};Ag=function(t){if(t.tag===13){var e=dr(t),n=Ln(t,e);if(n!==null){var r=ft();Jt(n,t,e,r)}wf(t,e)}};Pg=function(){return re};Lg=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};dh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cu(r);if(!i)throw Error(k(90));ug(r),sh(r,i)}}}break;case"textarea":hg(t,n);break;case"select":e=n.value,e!=null&&Oi(t,!!n.multiple,e,!1)}};yg=mf;_g=Jr;var f6={usingClientEntryPoint:!1,Events:[Yo,Ci,cu,gg,vg,mf]},Ls={findFiberByHostInstance:Mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},p6={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||h6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{ou=bl.inject(p6),cn=bl}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f6;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cf(e))throw Error(k(200));return c6(t,e,null,n)};Rt.createRoot=function(t,e){if(!Cf(t))throw Error(k(299));var n=!1,r="",i=t2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_f(t,1,!1,null,null,n,!1,r,i),t[Pn]=e.current,wo(t.nodeType===8?t.parentNode:t),new Ef(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Cg(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Jr(t)};Rt.hydrate=function(t,e,n){if(!_u(e))throw Error(k(200));return wu(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Cf(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=t2;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=e2(e,null,t,1,n??null,i,!1,s,o),t[Pn]=e.current,wo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yu(e)};Rt.render=function(t,e,n){if(!_u(e))throw Error(k(200));return wu(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!_u(t))throw Error(k(40));return t._reactRootContainer?(Jr(function(){wu(null,null,t,!1,function(){t._reactRootContainer=null,t[Pn]=null})}),!0):!1};Rt.unstable_batchedUpdates=mf;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_u(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return wu(t,e,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";function n2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2)}catch(t){console.error(t)}}n2(),eg.exports=Rt;var m6=eg.exports,n0=m6;Jc.createRoot=n0.createRoot,Jc.hydrateRoot=n0.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xe(){return xe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xe.apply(this,arguments)}var Re;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Re||(Re={}));const r0="popstate";function g6(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return No("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ei(i)}return y6(e,n,null,t)}function G(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Zr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function v6(){return Math.random().toString(36).substr(2,8)}function i0(t,e){return{usr:t.state,key:t.key,idx:e}}function No(t,e,n,r){return n===void 0&&(n=null),xe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fn(e):e,{state:n,key:e&&e.key||r||v6()})}function ei(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Fn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function y6(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Re.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(xe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){l=Re.Pop;let x=c(),m=x==null?null:x-u;u=x,a&&a({action:l,location:E.location,delta:m})}function d(x,m){l=Re.Push;let p=No(E.location,x,m);n&&n(p,x),u=c()+1;let v=i0(p,u),f=E.createHref(p);try{o.pushState(v,"",f)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(f)}s&&a&&a({action:l,location:E.location,delta:1})}function _(x,m){l=Re.Replace;let p=No(E.location,x,m);n&&n(p,x),u=c();let v=i0(p,u),f=E.createHref(p);o.replaceState(v,"",f),s&&a&&a({action:l,location:E.location,delta:0})}function y(x){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof x=="string"?x:ei(x);return G(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let E={get action(){return l},get location(){return t(i,o)},listen(x){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(r0,h),a=x,()=>{i.removeEventListener(r0,h),a=null}},createHref(x){return e(i,x)},createURL:y,encodeLocation(x){let m=y(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:_,go(x){return o.go(x)}};return E}var Ne;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ne||(Ne={}));const _6=new Set(["lazy","caseSensitive","path","id","index","children"]);function w6(t){return t.index===!0}function Wh(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],l=typeof i.id=="string"?i.id:o.join("-");if(G(i.index!==!0||!i.children,"Cannot specify children on an index route"),G(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),w6(i)){let a=xe({},i,e(i),{id:l});return r[l]=a,a}else{let a=xe({},i,e(i),{id:l,children:void 0});return r[l]=a,i.children&&(a.children=Wh(i.children,e,o,r)),a}})}function Ni(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Fn(e):e,i=cs(r.pathname||"/",n);if(i==null)return null;let s=r2(t);C6(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=P6(s[l],O6(i));return o}function E6(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function r2(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(G(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Rn([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(G(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),r2(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:N6(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of i2(s.path))i(s,o,a)}),e}function i2(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=i2(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function C6(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:A6(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const S6=/^:\w+$/,T6=3,I6=2,x6=1,k6=10,R6=-2,s0=t=>t==="*";function N6(t,e){let n=t.split("/"),r=n.length;return n.some(s0)&&(r+=R6),e&&(r+=I6),n.filter(i=>!s0(i)).reduce((i,s)=>i+(S6.test(s)?T6:s===""?x6:k6),r)}function A6(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function P6(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=L6({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let h=l.route;s.push({params:r,pathname:Rn([i,c.pathname]),pathnameBase:j6(Rn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Rn([i,c.pathnameBase]))}return s}function L6(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=D6(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:_}=c;if(d==="*"){let E=l[h]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const y=l[h];return _&&!y?u[d]=void 0:u[d]=M6(y||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function D6(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Zr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function O6(t){try{return decodeURI(t)}catch(e){return Zr(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function M6(t,e){try{return decodeURIComponent(t)}catch(n){return Zr(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function cs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Q6(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Fn(t):t;return{pathname:n?n.startsWith("/")?n:b6(n,e):e,search:F6(r),hash:U6(i)}}function b6(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Nc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Eu(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Sf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Fn(t):(i=xe({},t),G(!i.pathname||!i.pathname.includes("?"),Nc("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),Nc("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),Nc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}l=h>=0?e[h]:"/"}let a=Q6(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const Rn=t=>t.join("/").replace(/\/\/+/g,"/"),j6=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),F6=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,U6=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Tf{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function s2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const o2=["post","put","patch","delete"],$6=new Set(o2),z6=["get",...o2],B6=new Set(z6),V6=new Set([301,302,303,307,308]),W6=new Set([307,308]),Ac={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},H6={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ds={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},l2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G6=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),a2="remix-router-transitions";function K6(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;G(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let w=t.detectErrorBoundary;i=C=>({hasErrorBoundary:w(C)})}else i=G6;let s={},o=Wh(t.routes,i,void 0,s),l,a=t.basename||"/",u=xe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,_=null,y=null,E=t.hydrationData!=null,x=Ni(o,t.history.location,a),m=null;if(x==null){let w=Pt(404,{pathname:t.history.location.pathname}),{matches:C,route:T}=f0(o);x=C,m={[T.id]:w}}let p=!x.some(w=>w.route.lazy)&&(!x.some(w=>w.route.loader)||t.hydrationData!=null),v,f={historyAction:t.history.action,location:t.history.location,matches:x,initialized:p,navigation:Ac,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},S=Re.Pop,N=!1,I,L=!1,z=new Map,Q=null,_e=!1,ut=!1,tn=[],xr=[],Te=new Map,Bn=0,gn=-1,D=new Map,F=new Set,B=new Map,le=new Map,ce=new Set,At=new Map,ct=new Map,kr=!1;function vn(){if(c=t.history.listen(w=>{let{action:C,location:T,delta:O}=w;if(kr){kr=!1;return}Zr(ct.size===0||O!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let j=Vp({currentLocation:f.location,nextLocation:T,historyAction:C});if(j&&O!=null){kr=!0,t.history.go(O*-1),_l(j,{state:"blocked",location:T,proceed(){_l(j,{state:"proceeding",proceed:void 0,reset:void 0,location:T}),t.history.go(O)},reset(){let U=new Map(f.blockers);U.set(j,Ds),Le({blockers:U})}});return}return Rr(C,T)}),n){s9(e,z);let w=()=>o9(e,z);e.addEventListener("pagehide",w),Q=()=>e.removeEventListener("pagehide",w)}return f.initialized||Rr(Re.Pop,f.location),v}function fi(){c&&c(),Q&&Q(),h.clear(),I&&I.abort(),f.fetchers.forEach((w,C)=>yl(C)),f.blockers.forEach((w,C)=>Bp(C))}function Nv(w){return h.add(w),()=>h.delete(w)}function Le(w,C){f=xe({},f,w);let T=[],O=[];u.v7_fetcherPersist&&f.fetchers.forEach((j,U)=>{j.state==="idle"&&(ce.has(U)?O.push(U):T.push(U))}),h.forEach(j=>j(f,{deletedFetchers:O,unstable_viewTransitionOpts:C})),u.v7_fetcherPersist&&(T.forEach(j=>f.fetchers.delete(j)),O.forEach(j=>yl(j)))}function ws(w,C){var T,O;let j=f.actionData!=null&&f.navigation.formMethod!=null&&Gt(f.navigation.formMethod)&&f.navigation.state==="loading"&&((T=w.state)==null?void 0:T._isRedirect)!==!0,U;C.actionData?Object.keys(C.actionData).length>0?U=C.actionData:U=null:j?U=f.actionData:U=null;let H=C.loaderData?d0(f.loaderData,C.loaderData,C.matches||[],C.errors):f.loaderData,$=f.blockers;$.size>0&&($=new Map($),$.forEach((we,Y)=>$.set(Y,Ds)));let b=N===!0||f.navigation.formMethod!=null&&Gt(f.navigation.formMethod)&&((O=w.state)==null?void 0:O._isRedirect)!==!0;l&&(o=l,l=void 0),_e||S===Re.Pop||(S===Re.Push?t.history.push(w,w.state):S===Re.Replace&&t.history.replace(w,w.state));let ae;if(S===Re.Pop){let we=z.get(f.location.pathname);we&&we.has(w.pathname)?ae={currentLocation:f.location,nextLocation:w}:z.has(w.pathname)&&(ae={currentLocation:w,nextLocation:f.location})}else if(L){let we=z.get(f.location.pathname);we?we.add(w.pathname):(we=new Set([w.pathname]),z.set(f.location.pathname,we)),ae={currentLocation:f.location,nextLocation:w}}Le(xe({},C,{actionData:U,loaderData:H,historyAction:S,location:w,initialized:!0,navigation:Ac,revalidation:"idle",restoreScrollPosition:Hp(w,C.matches||f.matches),preventScrollReset:b,blockers:$}),ae),S=Re.Pop,N=!1,L=!1,_e=!1,ut=!1,tn=[],xr=[]}async function bp(w,C){if(typeof w=="number"){t.history.go(w);return}let T=Hh(f.location,f.matches,a,u.v7_prependBasename,w,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:O,submission:j,error:U}=o0(u.v7_normalizeFormMethod,!1,T,C),H=f.location,$=No(f.location,O,C&&C.state);$=xe({},$,t.history.encodeLocation($));let b=C&&C.replace!=null?C.replace:void 0,ae=Re.Push;b===!0?ae=Re.Replace:b===!1||j!=null&&Gt(j.formMethod)&&j.formAction===f.location.pathname+f.location.search&&(ae=Re.Replace);let we=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,Y=Vp({currentLocation:H,nextLocation:$,historyAction:ae});if(Y){_l(Y,{state:"blocked",location:$,proceed(){_l(Y,{state:"proceeding",proceed:void 0,reset:void 0,location:$}),bp(w,C)},reset(){let ue=new Map(f.blockers);ue.set(Y,Ds),Le({blockers:ue})}});return}return await Rr(ae,$,{submission:j,pendingError:U,preventScrollReset:we,replace:C&&C.replace,enableViewTransition:C&&C.unstable_viewTransition})}function Av(){if(Xu(),Le({revalidation:"loading"}),f.navigation.state!=="submitting"){if(f.navigation.state==="idle"){Rr(f.historyAction,f.location,{startUninterruptedRevalidation:!0});return}Rr(S||f.historyAction,f.navigation.location,{overrideNavigation:f.navigation})}}async function Rr(w,C,T){I&&I.abort(),I=null,S=w,_e=(T&&T.startUninterruptedRevalidation)===!0,Fv(f.location,f.matches),N=(T&&T.preventScrollReset)===!0,L=(T&&T.enableViewTransition)===!0;let O=l||o,j=T&&T.overrideNavigation,U=Ni(O,C,a);if(!U){let ue=Pt(404,{pathname:C.pathname}),{matches:Qe,route:Nr}=f0(O);Ju(),ws(C,{matches:Qe,loaderData:{},errors:{[Nr.id]:ue}});return}if(f.initialized&&!ut&&Z6(f.location,C)&&!(T&&T.submission&&Gt(T.submission.formMethod))){ws(C,{matches:U});return}I=new AbortController;let H=Ms(t.history,C,I.signal,T&&T.submission),$,b;if(T&&T.pendingError)b={[io(U).route.id]:T.pendingError};else if(T&&T.submission&&Gt(T.submission.formMethod)){let ue=await Pv(H,C,T.submission,U,{replace:T.replace});if(ue.shortCircuited)return;$=ue.pendingActionData,b=ue.pendingActionError,j=Pc(C,T.submission),H=new Request(H.url,{signal:H.signal})}let{shortCircuited:ae,loaderData:we,errors:Y}=await Lv(H,C,U,j,T&&T.submission,T&&T.fetcherSubmission,T&&T.replace,$,b);ae||(I=null,ws(C,xe({matches:U},$?{actionData:$}:{},{loaderData:we,errors:Y})))}async function Pv(w,C,T,O,j){j===void 0&&(j={}),Xu();let U=r9(C,T);Le({navigation:U});let H,$=Kh(O,C);if(!$.route.action&&!$.route.lazy)H={type:Ne.error,error:Pt(405,{method:w.method,pathname:C.pathname,routeId:$.route.id})};else if(H=await Os("action",w,$,O,s,i,a),w.signal.aborted)return{shortCircuited:!0};if(Ui(H)){let b;return j&&j.replace!=null?b=j.replace:b=H.location===f.location.pathname+f.location.search,await Es(f,H,{submission:T,replace:b}),{shortCircuited:!0}}if(so(H)){let b=io(O,$.route.id);return(j&&j.replace)!==!0&&(S=Re.Push),{pendingActionData:{},pendingActionError:{[b.route.id]:H.error}}}if(jr(H))throw Pt(400,{type:"defer-action"});return{pendingActionData:{[$.route.id]:H.data}}}async function Lv(w,C,T,O,j,U,H,$,b){let ae=O||Pc(C,j),we=j||U||g0(ae),Y=l||o,[ue,Qe]=l0(t.history,f,T,we,C,ut,tn,xr,B,F,Y,a,$,b);if(Ju(se=>!(T&&T.some(Bt=>Bt.route.id===se))||ue&&ue.some(Bt=>Bt.route.id===se)),gn=++Bn,ue.length===0&&Qe.length===0){let se=$p();return ws(C,xe({matches:T,loaderData:{},errors:b||null},$?{actionData:$}:{},se?{fetchers:new Map(f.fetchers)}:{})),{shortCircuited:!0}}if(!_e){Qe.forEach(Bt=>{let Hn=f.fetchers.get(Bt.key),ke=Qs(void 0,Hn?Hn.data:void 0);f.fetchers.set(Bt.key,ke)});let se=$||f.actionData;Le(xe({navigation:ae},se?Object.keys(se).length===0?{actionData:null}:{actionData:se}:{},Qe.length>0?{fetchers:new Map(f.fetchers)}:{}))}Qe.forEach(se=>{Te.has(se.key)&&Vn(se.key),se.controller&&Te.set(se.key,se.controller)});let Nr=()=>Qe.forEach(se=>Vn(se.key));I&&I.signal.addEventListener("abort",Nr);let{results:Ar,loaderResults:Ss,fetcherResults:Zu}=await Fp(f.matches,T,ue,Qe,w);if(w.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",Nr),Qe.forEach(se=>Te.delete(se.key));let yn=p0(Ar);if(yn){if(yn.idx>=ue.length){let se=Qe[yn.idx-ue.length].key;F.add(se)}return await Es(f,yn.result,{replace:H}),{shortCircuited:!0}}let{loaderData:Wn,errors:wl}=h0(f,T,ue,Ss,b,Qe,Zu,At);At.forEach((se,Bt)=>{se.subscribe(Hn=>{(Hn||se.done)&&At.delete(Bt)})});let ec=$p(),tc=zp(gn),nc=ec||tc||Qe.length>0;return xe({loaderData:Wn,errors:wl},nc?{fetchers:new Map(f.fetchers)}:{})}function jp(w){return u.v7_fetcherPersist&&(le.set(w,(le.get(w)||0)+1),ce.has(w)&&ce.delete(w)),f.fetchers.get(w)||H6}function Dv(w,C,T,O){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Te.has(w)&&Vn(w);let j=l||o,U=Hh(f.location,f.matches,a,u.v7_prependBasename,T,C,O==null?void 0:O.relative),H=Ni(j,U,a);if(!H){Cs(w,C,Pt(404,{pathname:U}));return}let{path:$,submission:b,error:ae}=o0(u.v7_normalizeFormMethod,!0,U,O);if(ae){Cs(w,C,ae);return}let we=Kh(H,$);if(N=(O&&O.preventScrollReset)===!0,b&&Gt(b.formMethod)){Ov(w,C,$,we,H,b);return}B.set(w,{routeId:C,path:$}),Mv(w,C,$,we,H,b)}async function Ov(w,C,T,O,j,U){if(Xu(),B.delete(w),!O.route.action&&!O.route.lazy){let ke=Pt(405,{method:U.formMethod,pathname:T,routeId:C});Cs(w,C,ke);return}let H=f.fetchers.get(w),$=i9(U,H);f.fetchers.set(w,$),Le({fetchers:new Map(f.fetchers)});let b=new AbortController,ae=Ms(t.history,T,b.signal,U);Te.set(w,b);let we=Bn,Y=await Os("action",ae,O,j,s,i,a);if(ae.signal.aborted){Te.get(w)===b&&Te.delete(w);return}if(ce.has(w)){f.fetchers.set(w,qn(void 0)),Le({fetchers:new Map(f.fetchers)});return}if(Ui(Y))if(Te.delete(w),gn>we){let ke=qn(void 0);f.fetchers.set(w,ke),Le({fetchers:new Map(f.fetchers)});return}else{F.add(w);let ke=Qs(U);return f.fetchers.set(w,ke),Le({fetchers:new Map(f.fetchers)}),Es(f,Y,{fetcherSubmission:U})}if(so(Y)){Cs(w,C,Y.error);return}if(jr(Y))throw Pt(400,{type:"defer-action"});let ue=f.navigation.location||f.location,Qe=Ms(t.history,ue,b.signal),Nr=l||o,Ar=f.navigation.state!=="idle"?Ni(Nr,f.navigation.location,a):f.matches;G(Ar,"Didn't find any matches after fetcher action");let Ss=++Bn;D.set(w,Ss);let Zu=Qs(U,Y.data);f.fetchers.set(w,Zu);let[yn,Wn]=l0(t.history,f,Ar,U,ue,ut,tn,xr,B,F,Nr,a,{[O.route.id]:Y.data},void 0);Wn.filter(ke=>ke.key!==w).forEach(ke=>{let Ts=ke.key,Gp=f.fetchers.get(Ts),$v=Qs(void 0,Gp?Gp.data:void 0);f.fetchers.set(Ts,$v),Te.has(Ts)&&Vn(Ts),ke.controller&&Te.set(Ts,ke.controller)}),Le({fetchers:new Map(f.fetchers)});let wl=()=>Wn.forEach(ke=>Vn(ke.key));b.signal.addEventListener("abort",wl);let{results:ec,loaderResults:tc,fetcherResults:nc}=await Fp(f.matches,Ar,yn,Wn,Qe);if(b.signal.aborted)return;b.signal.removeEventListener("abort",wl),D.delete(w),Te.delete(w),Wn.forEach(ke=>Te.delete(ke.key));let se=p0(ec);if(se){if(se.idx>=yn.length){let ke=Wn[se.idx-yn.length].key;F.add(ke)}return Es(f,se.result)}let{loaderData:Bt,errors:Hn}=h0(f,f.matches,yn,tc,void 0,Wn,nc,At);if(f.fetchers.has(w)){let ke=qn(Y.data);f.fetchers.set(w,ke)}zp(Ss),f.navigation.state==="loading"&&Ss>gn?(G(S,"Expected pending action"),I&&I.abort(),ws(f.navigation.location,{matches:Ar,loaderData:Bt,errors:Hn,fetchers:new Map(f.fetchers)})):(Le({errors:Hn,loaderData:d0(f.loaderData,Bt,Ar,Hn),fetchers:new Map(f.fetchers)}),ut=!1)}async function Mv(w,C,T,O,j,U){let H=f.fetchers.get(w),$=Qs(U,H?H.data:void 0);f.fetchers.set(w,$),Le({fetchers:new Map(f.fetchers)});let b=new AbortController,ae=Ms(t.history,T,b.signal);Te.set(w,b);let we=Bn,Y=await Os("loader",ae,O,j,s,i,a);if(jr(Y)&&(Y=await h2(Y,ae.signal,!0)||Y),Te.get(w)===b&&Te.delete(w),ae.signal.aborted)return;if(ce.has(w)){f.fetchers.set(w,qn(void 0)),Le({fetchers:new Map(f.fetchers)});return}if(Ui(Y))if(gn>we){let Qe=qn(void 0);f.fetchers.set(w,Qe),Le({fetchers:new Map(f.fetchers)});return}else{F.add(w),await Es(f,Y);return}if(so(Y)){Cs(w,C,Y.error);return}G(!jr(Y),"Unhandled fetcher deferred data");let ue=qn(Y.data);f.fetchers.set(w,ue),Le({fetchers:new Map(f.fetchers)})}async function Es(w,C,T){let{submission:O,fetcherSubmission:j,replace:U}=T===void 0?{}:T;C.revalidate&&(ut=!0);let H=No(w.location,C.location,{_isRedirect:!0});if(G(H,"Expected a location on the redirect navigation"),n){let ue=!1;if(C.reloadDocument)ue=!0;else if(l2.test(C.location)){const Qe=t.history.createURL(C.location);ue=Qe.origin!==e.location.origin||cs(Qe.pathname,a)==null}if(ue){U?e.location.replace(C.location):e.location.assign(C.location);return}}I=null;let $=U===!0?Re.Replace:Re.Push,{formMethod:b,formAction:ae,formEncType:we}=w.navigation;!O&&!j&&b&&ae&&we&&(O=g0(w.navigation));let Y=O||j;if(W6.has(C.status)&&Y&&Gt(Y.formMethod))await Rr($,H,{submission:xe({},Y,{formAction:C.location}),preventScrollReset:N});else{let ue=Pc(H,O);await Rr($,H,{overrideNavigation:ue,fetcherSubmission:j,preventScrollReset:N})}}async function Fp(w,C,T,O,j){let U=await Promise.all([...T.map(b=>Os("loader",j,b,C,s,i,a)),...O.map(b=>b.matches&&b.match&&b.controller?Os("loader",Ms(t.history,b.path,b.controller.signal),b.match,b.matches,s,i,a):{type:Ne.error,error:Pt(404,{pathname:b.path})})]),H=U.slice(0,T.length),$=U.slice(T.length);return await Promise.all([m0(w,T,H,H.map(()=>j.signal),!1,f.loaderData),m0(w,O.map(b=>b.match),$,O.map(b=>b.controller?b.controller.signal:null),!0)]),{results:U,loaderResults:H,fetcherResults:$}}function Xu(){ut=!0,tn.push(...Ju()),B.forEach((w,C)=>{Te.has(C)&&(xr.push(C),Vn(C))})}function Cs(w,C,T){let O=io(f.matches,C);yl(w),Le({errors:{[O.route.id]:T},fetchers:new Map(f.fetchers)})}function yl(w){let C=f.fetchers.get(w);Te.has(w)&&!(C&&C.state==="loading"&&D.has(w))&&Vn(w),B.delete(w),D.delete(w),F.delete(w),ce.delete(w),f.fetchers.delete(w)}function Qv(w){if(u.v7_fetcherPersist){let C=(le.get(w)||0)-1;C<=0?(le.delete(w),ce.add(w)):le.set(w,C)}else yl(w);Le({fetchers:new Map(f.fetchers)})}function Vn(w){let C=Te.get(w);G(C,"Expected fetch controller: "+w),C.abort(),Te.delete(w)}function Up(w){for(let C of w){let T=jp(C),O=qn(T.data);f.fetchers.set(C,O)}}function $p(){let w=[],C=!1;for(let T of F){let O=f.fetchers.get(T);G(O,"Expected fetcher: "+T),O.state==="loading"&&(F.delete(T),w.push(T),C=!0)}return Up(w),C}function zp(w){let C=[];for(let[T,O]of D)if(O<w){let j=f.fetchers.get(T);G(j,"Expected fetcher: "+T),j.state==="loading"&&(Vn(T),D.delete(T),C.push(T))}return Up(C),C.length>0}function bv(w,C){let T=f.blockers.get(w)||Ds;return ct.get(w)!==C&&ct.set(w,C),T}function Bp(w){f.blockers.delete(w),ct.delete(w)}function _l(w,C){let T=f.blockers.get(w)||Ds;G(T.state==="unblocked"&&C.state==="blocked"||T.state==="blocked"&&C.state==="blocked"||T.state==="blocked"&&C.state==="proceeding"||T.state==="blocked"&&C.state==="unblocked"||T.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+T.state+" -> "+C.state);let O=new Map(f.blockers);O.set(w,C),Le({blockers:O})}function Vp(w){let{currentLocation:C,nextLocation:T,historyAction:O}=w;if(ct.size===0)return;ct.size>1&&Zr(!1,"A router only supports one blocker at a time");let j=Array.from(ct.entries()),[U,H]=j[j.length-1],$=f.blockers.get(U);if(!($&&$.state==="proceeding")&&H({currentLocation:C,nextLocation:T,historyAction:O}))return U}function Ju(w){let C=[];return At.forEach((T,O)=>{(!w||w(O))&&(T.cancel(),C.push(O),At.delete(O))}),C}function jv(w,C,T){if(d=w,y=C,_=T||null,!E&&f.navigation===Ac){E=!0;let O=Hp(f.location,f.matches);O!=null&&Le({restoreScrollPosition:O})}return()=>{d=null,y=null,_=null}}function Wp(w,C){return _&&_(w,C.map(O=>E6(O,f.loaderData)))||w.key}function Fv(w,C){if(d&&y){let T=Wp(w,C);d[T]=y()}}function Hp(w,C){if(d){let T=Wp(w,C),O=d[T];if(typeof O=="number")return O}return null}function Uv(w){s={},l=Wh(w,i,void 0,s)}return v={get basename(){return a},get state(){return f},get routes(){return o},get window(){return e},initialize:vn,subscribe:Nv,enableScrollRestoration:jv,navigate:bp,fetch:Dv,revalidate:Av,createHref:w=>t.history.createHref(w),encodeLocation:w=>t.history.encodeLocation(w),getFetcher:jp,deleteFetcher:Qv,dispose:fi,getBlocker:bv,deleteBlocker:Bp,_internalFetchControllers:Te,_internalActiveDeferreds:At,_internalSetRoutes:Uv},v}function q6(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Hh(t,e,n,r,i,s,o){let l,a;if(s!=null&&o!=="path"){l=[];for(let c of e)if(l.push(c),c.route.id===s){a=c;break}}else l=e,a=e[e.length-1];let u=Sf(i||".",Eu(l).map(c=>c.pathnameBase),cs(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&a&&a.route.index&&!If(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Rn([n,u.pathname])),ei(u)}function o0(t,e,n,r){if(!r||!q6(r))return{path:n};if(r.formMethod&&!n9(r.formMethod))return{path:n,error:Pt(405,{method:r.formMethod})};let i=()=>({path:n,error:Pt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=c2(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Gt(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((_,y)=>{let[E,x]=y;return""+_+E+"="+x+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!Gt(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}G(typeof FormData=="function","FormData is not available in this environment");let a,u;if(r.formData)a=Gh(r.formData),u=r.formData;else if(r.body instanceof FormData)a=Gh(r.body),u=r.body;else if(r.body instanceof URLSearchParams)a=r.body,u=c0(a);else if(r.body==null)a=new URLSearchParams,u=new FormData;else try{a=new URLSearchParams(r.body),u=c0(a)}catch{return i()}let c={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Gt(c.formMethod))return{path:n,submission:c};let h=Fn(n);return e&&h.search&&If(h.search)&&a.append("index",""),h.search="?"+a,{path:ei(h),submission:c}}function Y6(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function l0(t,e,n,r,i,s,o,l,a,u,c,h,d,_){let y=_?Object.values(_)[0]:d?Object.values(d)[0]:void 0,E=t.createURL(e.location),x=t.createURL(i),m=_?Object.keys(_)[0]:void 0,v=Y6(n,m).filter((S,N)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(X6(e.loaderData,e.matches[N],S)||o.some(z=>z===S.route.id))return!0;let I=e.matches[N],L=S;return a0(S,xe({currentUrl:E,currentParams:I.params,nextUrl:x,nextParams:L.params},r,{actionResult:y,defaultShouldRevalidate:s||E.pathname+E.search===x.pathname+x.search||E.search!==x.search||u2(I,L)}))}),f=[];return a.forEach((S,N)=>{if(!n.some(_e=>_e.route.id===S.routeId))return;let I=Ni(c,S.path,h);if(!I){f.push({key:N,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let L=e.fetchers.get(N),z=Kh(I,S.path),Q=!1;u.has(N)?Q=!1:l.includes(N)?Q=!0:L&&L.state!=="idle"&&L.data===void 0?Q=s:Q=a0(z,xe({currentUrl:E,currentParams:e.matches[e.matches.length-1].params,nextUrl:x,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:s})),Q&&f.push({key:N,routeId:S.routeId,path:S.path,matches:I,match:z,controller:new AbortController})}),[v,f]}function X6(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function u2(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function a0(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function u0(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];G(i,"No route found in manifest");let s={};for(let o in r){let a=i[o]!==void 0&&o!=="hasErrorBoundary";Zr(!a,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!a&&!_6.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,xe({},e(i),{lazy:void 0}))}async function Os(t,e,n,r,i,s,o,l){l===void 0&&(l={});let a,u,c,h=y=>{let E,x=new Promise((m,p)=>E=p);return c=()=>E(),e.signal.addEventListener("abort",c),Promise.race([y({request:e,params:n.params,context:l.requestContext}),x])};try{let y=n.route[t];if(n.route.lazy)if(y){let E,x=await Promise.all([h(y).catch(m=>{E=m}),u0(n.route,s,i)]);if(E)throw E;u=x[0]}else if(await u0(n.route,s,i),y=n.route[t],y)u=await h(y);else if(t==="action"){let E=new URL(e.url),x=E.pathname+E.search;throw Pt(405,{method:e.method,pathname:x,routeId:n.route.id})}else return{type:Ne.data,data:void 0};else if(y)u=await h(y);else{let E=new URL(e.url),x=E.pathname+E.search;throw Pt(404,{pathname:x})}G(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){a=Ne.error,u=y}finally{c&&e.signal.removeEventListener("abort",c)}if(t9(u)){let y=u.status;if(V6.has(y)){let m=u.headers.get("Location");if(G(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!l2.test(m))m=Hh(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!l.isStaticRequest){let p=new URL(e.url),v=m.startsWith("//")?new URL(p.protocol+m):new URL(m),f=cs(v.pathname,o)!=null;v.origin===p.origin&&f&&(m=v.pathname+v.search+v.hash)}if(l.isStaticRequest)throw u.headers.set("Location",m),u;return{type:Ne.redirect,status:y,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:a===Ne.error?Ne.error:Ne.data,response:u};let E,x=u.headers.get("Content-Type");return x&&/\bapplication\/json\b/.test(x)?E=await u.json():E=await u.text(),a===Ne.error?{type:a,error:new Tf(y,u.statusText,E),headers:u.headers}:{type:Ne.data,data:E,statusCode:u.status,headers:u.headers}}if(a===Ne.error)return{type:a,error:u};if(e9(u)){var d,_;return{type:Ne.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((_=u.init)==null?void 0:_.headers)&&new Headers(u.init.headers)}}return{type:Ne.data,data:u}}function Ms(t,e,n,r){let i=t.createURL(c2(e)).toString(),s={signal:n};if(r&&Gt(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=Gh(r.formData):s.body=r.formData}return new Request(i,s)}function Gh(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function c0(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function J6(t,e,n,r,i){let s={},o=null,l,a=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(G(!Ui(c),"Cannot handle redirect results in processLoaderData"),so(c)){let _=io(t,d),y=c.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[_.route.id]==null&&(o[_.route.id]=y),s[d]=void 0,a||(a=!0,l=s2(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else jr(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!a&&(l=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:u}}function h0(t,e,n,r,i,s,o,l){let{loaderData:a,errors:u}=J6(e,n,r,i,l);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:_}=s[c];G(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let y=o[c];if(!(_&&_.signal.aborted))if(so(y)){let E=io(t.matches,d==null?void 0:d.route.id);u&&u[E.route.id]||(u=xe({},u,{[E.route.id]:y.error})),t.fetchers.delete(h)}else if(Ui(y))G(!1,"Unhandled fetcher revalidation redirect");else if(jr(y))G(!1,"Unhandled fetcher deferred data");else{let E=qn(y.data);t.fetchers.set(h,E)}}return{loaderData:a,errors:u}}function d0(t,e,n,r){let i=xe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function io(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function f0(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Pt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?l="defer() is not supported in actions":s==="invalid-body"&&(l="Unable to encode submission body")):t===403?(o="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",l='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Tf(t||500,o,new Error(l),!0)}function p0(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Ui(n))return{result:n,idx:e}}}function c2(t){let e=typeof t=="string"?Fn(t):t;return ei(xe({},e,{hash:""}))}function Z6(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function jr(t){return t.type===Ne.deferred}function so(t){return t.type===Ne.error}function Ui(t){return(t&&t.type)===Ne.redirect}function e9(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function t9(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function n9(t){return B6.has(t.toLowerCase())}function Gt(t){return $6.has(t.toLowerCase())}async function m0(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],a=e[o];if(!a)continue;let u=t.find(h=>h.route.id===a.route.id),c=u!=null&&!u2(u,a)&&(s&&s[a.route.id])!==void 0;if(jr(l)&&(i||c)){let h=r[o];G(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await h2(l,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function h2(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ne.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ne.error,error:i}}return{type:Ne.data,data:t.deferredData.data}}}function If(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Kh(t,e){let n=typeof e=="string"?Fn(e).search:e.search;if(t[t.length-1].route.index&&If(n||""))return t[t.length-1];let r=Eu(t);return r[r.length-1]}function g0(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Pc(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function r9(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Qs(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function i9(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function qn(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function s9(t,e){try{let n=t.sessionStorage.getItem(a2);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function o9(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(a2,JSON.stringify(n))}catch(r){Zr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pa.apply(this,arguments)}const Cu=R.createContext(null),d2=R.createContext(null),hs=R.createContext(null),Su=R.createContext(null),ui=R.createContext({outlet:null,matches:[],isDataRoute:!1}),f2=R.createContext(null);function l9(t,e){let{relative:n}=e===void 0?{}:e;Jo()||G(!1);let{basename:r,navigator:i}=R.useContext(hs),{hash:s,pathname:o,search:l}=m2(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:Rn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Jo(){return R.useContext(Su)!=null}function Tu(){return Jo()||G(!1),R.useContext(Su).location}function p2(t){R.useContext(hs).static||R.useLayoutEffect(t)}function a9(){let{isDataRoute:t}=R.useContext(ui);return t?_9():u9()}function u9(){Jo()||G(!1);let t=R.useContext(Cu),{basename:e,navigator:n}=R.useContext(hs),{matches:r}=R.useContext(ui),{pathname:i}=Tu(),s=JSON.stringify(Eu(r).map(a=>a.pathnameBase)),o=R.useRef(!1);return p2(()=>{o.current=!0}),R.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let c=Sf(a,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Rn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function m2(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=R.useContext(ui),{pathname:i}=Tu(),s=JSON.stringify(Eu(r).map(o=>o.pathnameBase));return R.useMemo(()=>Sf(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function c9(t,e,n){Jo()||G(!1);let{navigator:r}=R.useContext(hs),{matches:i}=R.useContext(ui),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=Tu(),u;if(e){var c;let E=typeof e=="string"?Fn(e):e;l==="/"||(c=E.pathname)!=null&&c.startsWith(l)||G(!1),u=E}else u=a;let h=u.pathname||"/",d=l==="/"?h:h.slice(l.length)||"/",_=Ni(t,{pathname:d}),y=m9(_&&_.map(E=>Object.assign({},E,{params:Object.assign({},o,E.params),pathname:Rn([l,r.encodeLocation?r.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Rn([l,r.encodeLocation?r.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,n);return e&&y?R.createElement(Su.Provider,{value:{location:Pa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Re.Pop}},y):y}function h9(){let t=y2(),e=s2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:i},n):null,s)}const d9=R.createElement(h9,null);class f9 extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?R.createElement(ui.Provider,{value:this.props.routeContext},R.createElement(f2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p9(t){let{routeContext:e,match:n,children:r}=t,i=R.useContext(Cu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(ui.Provider,{value:e},r)}function m9(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||G(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let c=a.route.id?o==null?void 0:o[a.route.id]:null,h=null;n&&(h=a.route.errorElement||d9);let d=e.concat(s.slice(0,u+1)),_=()=>{let y;return c?y=h:a.route.Component?y=R.createElement(a.route.Component,null):a.route.element?y=a.route.element:y=l,R.createElement(p9,{match:a,routeContext:{outlet:l,matches:d,isDataRoute:n!=null},children:y})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?R.createElement(f9,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:_(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):_()},null)}var g2=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(g2||{}),La=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(La||{});function g9(t){let e=R.useContext(Cu);return e||G(!1),e}function v9(t){let e=R.useContext(d2);return e||G(!1),e}function y9(t){let e=R.useContext(ui);return e||G(!1),e}function v2(t){let e=y9(),n=e.matches[e.matches.length-1];return n.route.id||G(!1),n.route.id}function y2(){var t;let e=R.useContext(f2),n=v9(La.UseRouteError),r=v2(La.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function _9(){let{router:t}=g9(g2.UseNavigateStable),e=v2(La.UseNavigateStable),n=R.useRef(!1);return p2(()=>{n.current=!0}),R.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Pa({fromRouteId:e},s)))},[t,e])}function w9(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Re.Pop,navigator:s,static:o=!1}=t;Jo()&&G(!1);let l=e.replace(/^\/*/,"/"),a=R.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Fn(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:_="default"}=r,y=R.useMemo(()=>{let E=cs(u,l);return E==null?null:{location:{pathname:E,search:c,hash:h,state:d,key:_},navigationType:i}},[l,u,c,h,d,_,i]);return y==null?null:R.createElement(hs.Provider,{value:a},R.createElement(Su.Provider,{children:n,value:y}))}new Promise(()=>{});function E9(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:R.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:R.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ao.apply(this,arguments)}function C9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function S9(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function T9(t,e){return t.button===0&&(!e||e==="_self")&&!S9(t)}const I9=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function x9(t,e){return K6({basename:e==null?void 0:e.basename,future:Ao({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:g6({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||k9(),routes:t,mapRouteProperties:E9,window:e==null?void 0:e.window}).initialize()}function k9(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Ao({},e,{errors:R9(e.errors)})),e}function R9(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Tf(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const N9=R.createContext({isTransitioning:!1}),A9=R.createContext(new Map),P9="startTransition",v0=sy[P9];function L9(t){v0?v0(t):t()}let D9=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function O9(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=R.useState(n.state),[o,l]=R.useState(),[a,u]=R.useState({isTransitioning:!1}),[c,h]=R.useState(),[d,_]=R.useState(),[y,E]=R.useState(),x=R.useRef(new Map),{v7_startTransition:m}=r||{},p=R.useCallback(I=>{m?L9(I):I()},[m]),v=R.useCallback((I,L)=>{let{deletedFetchers:z,unstable_viewTransitionOpts:Q}=L;z.forEach(_e=>x.current.delete(_e)),I.fetchers.forEach((_e,ut)=>{_e.data!==void 0&&x.current.set(ut,_e.data)}),!Q||n.window==null||typeof n.window.document.startViewTransition!="function"?p(()=>s(I)):d&&c?(c.resolve(),d.skipTransition(),E({state:I,currentLocation:Q.currentLocation,nextLocation:Q.nextLocation})):(l(I),u({isTransitioning:!0,currentLocation:Q.currentLocation,nextLocation:Q.nextLocation}))},[n.window,d,c,x,p]);R.useLayoutEffect(()=>n.subscribe(v),[n,v]),R.useEffect(()=>{a.isTransitioning&&h(new D9)},[a.isTransitioning]),R.useEffect(()=>{if(c&&o&&n.window){let I=o,L=c.promise,z=n.window.document.startViewTransition(async()=>{p(()=>s(I)),await L});z.finished.finally(()=>{h(void 0),_(void 0),l(void 0),u({isTransitioning:!1})}),_(z)}},[p,o,c,n.window]),R.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,d,i.location,o]),R.useEffect(()=>{!a.isTransitioning&&y&&(l(y.state),u({isTransitioning:!0,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),E(void 0))},[a.isTransitioning,y]);let f=R.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:I=>n.navigate(I),push:(I,L,z)=>n.navigate(I,{state:L,preventScrollReset:z==null?void 0:z.preventScrollReset}),replace:(I,L,z)=>n.navigate(I,{replace:!0,state:L,preventScrollReset:z==null?void 0:z.preventScrollReset})}),[n]),S=n.basename||"/",N=R.useMemo(()=>({router:n,navigator:f,static:!1,basename:S}),[n,f,S]);return R.createElement(R.Fragment,null,R.createElement(Cu.Provider,{value:N},R.createElement(d2.Provider,{value:i},R.createElement(A9.Provider,{value:x.current},R.createElement(N9.Provider,{value:a},R.createElement(w9,{basename:S,location:i.location,navigationType:i.historyAction,navigator:f},i.initialized?R.createElement(M9,{routes:n.routes,state:i}):e))))),null)}function M9(t){let{routes:e,state:n}=t;return c9(e,void 0,n)}const Q9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",b9=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,j9=R.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=C9(e,I9),{basename:_}=R.useContext(hs),y,E=!1;if(typeof u=="string"&&b9.test(u)&&(y=u,Q9))try{let v=new URL(window.location.href),f=u.startsWith("//")?new URL(v.protocol+u):new URL(u),S=cs(f.pathname,_);f.origin===v.origin&&S!=null?u=S+f.search+f.hash:E=!0}catch{}let x=l9(u,{relative:i}),m=F9(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i,unstable_viewTransition:h});function p(v){r&&r(v),v.defaultPrevented||m(v)}return R.createElement("a",Ao({},d,{href:y||x,onClick:E||s?r:p,ref:n,target:a}))});var y0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(y0||(y0={}));var _0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_0||(_0={}));function F9(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=a9(),u=Tu(),c=m2(t,{relative:o});return R.useCallback(h=>{if(T9(h,n)){h.preventDefault();let d=r!==void 0?r:ei(u)===ei(c);a(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,a,c,r,i,n,t,s,o,l])}const U9="/healthert-web/assets/mcks1-252295cb.png",$9=()=>g.jsx("div",{className:"flex justify-center",children:g.jsx("div",{className:"flex justify-center my-14 max-w-screen-lg",children:g.jsxs("div",{className:"grid grid-cols-1 justify-center items-center lg:grid-cols-2 lg:gap-36",children:[g.jsxs("div",{className:"grid justify-center",children:[g.jsx("div",{className:"text-5xl font-bold text-center text-verde md:text-7xl",children:g.jsx("h2",{children:"HEALTHERT"})}),g.jsx("div",{className:"text-center text-base md:text-xl",children:g.jsx("p",{children:"Aplicación móvil de monitoreo y alerta remota"})}),g.jsx("div",{className:"flex w-full justify-center my-4 font-semibold"})]}),g.jsx("div",{className:"flex items-center content-center",children:g.jsx("img",{alt:"Dispositivos",src:U9,className:"w-[29rem] md:w-[34rem] xl:w-full animate-floating"})})]})})});const z9=()=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0.00 0.00 1528.00 1371.00",children:[g.jsx("path",{fill:"#6fd81c",d:`M 1296.04 93.04\r
        C 1365.59 140.54 1423.18 204.45 1462.03 278.62\r
        C 1464.94 284.18 1469.57 294.92 1473.85 302.81\r
        Q 1476.76 308.18 1478.49 312.49\r
        Q 1488.48 337.43 1497.88 362.58\r
        Q 1500.61 369.88 1502.78 377.36\r
        C 1515.03 419.55 1522.15 462.39 1524.49 506.25\r
        C 1525.67 528.49 1526.62 546.75 1525.39 567.82\r
        C 1523.84 594.32 1522.80 614.79 1519.20 634.62\r
        C 1517.77 642.53 1517.40 652.46 1515.34 660.32\r
        C 1505.70 697.05 1492.78 733.54 1478.95 767.98\r
        C 1464.25 804.62 1443.28 839.46 1421.50 872.27\r
        C 1401.79 901.98 1382.63 928.65 1360.00 955.48\r
        C 1301.56 1024.77 1238.41 1088.11 1167.19 1142.94\r
        Q 1119.53 1179.63 1064.02 1218.33\r
        Q 1055.44 1224.32 1047.43 1229.51\r
        Q 953.82 1290.18 852.73 1337.43\r
        C 850.07 1338.67 847.42 1340.73 844.59 1342.13\r
        A 1.81 1.79 -54.8 0 1 843.58 1342.31\r
        Q 835.26 1341.40 829.54 1347.32\r
        Q 829.16 1347.70 828.63 1347.76\r
        C 821.17 1348.56 815.61 1352.09 809.27 1353.96\r
        Q 787.46 1360.41 764.81 1360.99\r
        C 742.16 1361.57 718.85 1354.93 698.33 1345.76\r
        C 664.02 1330.43 629.03 1314.37 596.35 1295.78\r
        C 570.33 1280.99 543.75 1266.32 518.70 1249.96\r
        Q 499.95 1237.72 480.73 1226.25\r
        C 468.60 1219.02 458.44 1209.42 446.46 1201.92\r
        C 409.99 1179.12 381.62 1154.44 345.25 1124.85\r
        C 295.55 1084.42 249.47 1038.85 205.82 991.93\r
        C 162.46 945.32 120.06 893.89 86.76 838.98\r
        C 83.75 834.01 79.76 829.20 77.18 823.53\r
        C 67.37 801.97 55.58 782.49 47.26 761.52\r
        C 35.95 732.98 28.34 712.30 20.27 684.61\r
        Q 17.45 674.93 15.43 665.22\r
        C 9.95 638.88 5.53 615.29 3.75 590.00\r
        Q -0.53 529.15 5.73 467.50\r
        C 7.80 447.13 11.62 427.87 17.18 408.37\r
        Q 28.60 368.30 40.96 337.45\r
        C 59.38 291.45 83.84 250.17 113.18 210.43\r
        Q 119.31 202.14 125.45 194.65\r
        C 156.90 156.29 191.95 122.19 233.83 96.59\r
        C 261.30 79.80 287.22 64.97 316.28 52.83\r
        Q 353.51 37.30 371.74 30.74\r
        C 384.85 26.02 398.65 21.59 412.41 19.38\r
        C 419.33 18.27 425.52 15.59 432.34 14.85\r
        C 450.12 12.90 466.81 9.40 484.60 9.14\r
        Q 484.83 9.14 485.00 9.04\r
        Q 485.12 8.97 485.21 8.89\r
        A 0.38 0.36 -66.5 0 1 485.47 8.78\r
        C 515.90 8.65 537.14 8.56 563.84 12.21\r
        C 577.97 14.15 591.61 18.55 605.88 19.79\r
        Q 609.00 20.07 611.84 21.17\r
        C 620.98 24.73 631.57 27.35 639.61 30.23\r
        C 655.94 36.11 673.09 41.79 688.46 49.35\r
        Q 721.98 65.83 751.67 88.58\r
        C 755.02 91.15 758.25 97.26 762.89 93.87\r
        C 765.83 91.72 768.49 88.96 771.34 87.08\r
        Q 847.98 36.32 937.78 17.09\r
        Q 946.69 15.18 957.50 13.93\r
        Q 978.44 11.51 991.06 10.35\r
        Q 1011.80 8.43 1035.58 8.76\r
        C 1036.66 8.78 1037.73 9.25 1039.25 9.23\r
        C 1052.07 9.08 1067.01 9.39 1080.65 11.44\r
        C 1137.81 20.01 1190.94 35.08 1241.02 61.46\r
        C 1259.54 71.22 1278.75 81.22 1296.04 93.04\r
        Z\r
        M 1146.30 622.49\r
        Q 1148.49 628.01 1150.25 634.09\r
        Q 1158.93 664.14 1167.90 693.97\r
        Q 1168.06 694.50 1168.61 694.50\r
        L 1449.26 694.50\r
        Q 1449.82 694.50 1449.84 693.94\r
        Q 1450.60 662.76 1451.90 631.60\r
        Q 1451.94 630.77 1452.32 628.84\r
        C 1452.91 625.88 1452.30 622.52 1452.60 619.48\r
        Q 1452.91 616.39 1452.95 613.00\r
        C 1452.99 609.89 1453.67 606.84 1453.75 604.00\r
        C 1454.29 585.12 1455.35 569.07 1454.95 551.56\r
        C 1454.88 548.79 1454.23 545.68 1454.19 542.61\r
        C 1454.13 536.85 1454.05 530.66 1453.37 525.06\r
        C 1452.95 521.62 1453.24 517.74 1452.32 514.03\r
        C 1450.69 507.42 1452.04 499.20 1451.07 492.29\r
        C 1450.08 485.25 1449.73 478.40 1448.08 471.43\r
        C 1446.82 466.12 1447.74 460.08 1446.31 454.72\r
        C 1444.29 447.17 1441.87 440.15 1440.76 432.45\r
        C 1440.20 428.62 1440.78 425.41 1438.40 421.38\r
        C 1437.04 419.07 1436.98 417.56 1436.74 415.00\r
        C 1435.91 406.38 1431.33 396.76 1429.02 387.48\r
        Q 1428.46 385.21 1427.24 382.01\r
        C 1421.45 366.80 1415.66 350.86 1409.25 336.59\r
        C 1389.99 293.68 1363.40 253.80 1330.50 220.11\r
        Q 1311.69 200.86 1287.67 179.32\r
        Q 1279.52 172.01 1272.51 167.30\r
        C 1268.58 164.65 1265.87 160.99 1261.71 158.31\r
        Q 1241.57 145.29 1220.89 133.14\r
        Q 1214.54 129.41 1207.59 126.95\r
        Q 1205.26 126.13 1202.70 124.46\r
        Q 1197.16 120.85 1190.49 119.84\r
        Q 1188.96 119.61 1185.74 116.92\r
        C 1181.38 113.26 1175.63 111.56 1170.20 110.24\r
        C 1169.01 109.95 1168.64 109.39 1168.28 108.33\r
        Q 1168.12 107.82 1167.62 107.63\r
        C 1163.16 105.87 1158.10 105.11 1153.98 103.54\r
        C 1122.59 91.59 1091.52 85.31 1058.04 82.25\r
        Q 1048.18 81.34 1038.07 81.14\r
        C 1011.22 80.61 983.73 81.30 957.24 86.23\r
        Q 947.49 88.05 926.53 92.32\r
        C 914.29 94.81 902.49 100.21 890.98 104.92\r
        C 883.00 108.18 875.19 112.28 867.31 116.17\r
        C 835.70 131.74 809.32 153.29 781.61 174.13\r
        C 774.78 179.27 769.95 188.06 759.88 185.60\r
        C 756.50 184.77 752.55 181.47 750.27 179.26\r
        Q 713.15 143.26 667.23 119.49\r
        C 656.77 114.08 646.33 108.56 635.04 105.10\r
        Q 631.62 104.05 628.02 102.53\r
        Q 607.62 93.89 586.24 88.04\r
        Q 580.20 86.38 573.98 86.19\r
        Q 571.10 86.11 568.29 85.33\r
        Q 561.74 83.52 552.50 82.77\r
        C 510.36 79.36 468.35 79.41 428.72 88.68\r
        C 420.42 90.62 408.19 92.19 398.76 95.51\r
        Q 355.53 110.69 311.91 133.64\r
        Q 266.12 157.73 228.58 193.34\r
        C 220.45 201.05 213.92 207.34 206.27 215.01\r
        C 129.69 291.90 83.68 392.89 73.92 500.86\r
        C 70.38 539.97 72.93 580.30 75.43 619.42\r
        C 75.58 621.79 75.29 624.99 75.66 627.71\r
        Q 76.23 632.07 76.27 633.84\r
        C 76.41 641.50 77.37 649.30 77.61 656.73\r
        Q 78.23 675.58 81.92 694.54\r
        A 0.37 0.36 -21.1 0 0 82.47 694.78\r
        L 82.76 694.61\r
        Q 82.95 694.50 83.17 694.50\r
        L 364.52 694.50\r
        A 0.77 0.77 0.0 0 0 365.27 693.91\r
        C 367.30 685.02 370.21 676.56 372.04 667.62\r
        Q374.88 653.77 379.28 638.51\r
        C381.11 632.13 380.99 625.23 383.19 618.77\r
        A1.47 1.47 0.0 0 1 385.76 618.37\r
        C387.69 620.96 388.05 625.42 388.38 628.70\r
        C 388.82 633.21 390.33 637.70 391.26 642.15\r
        C 392.39 647.50 392.34 653.68 393.23 659.50\r
        C 395.71 675.60 397.85 692.22 398.50 708.50\r
        Q 399.03 721.88 401.20 737.31\r
        C 402.35 745.45 402.66 755.19 403.49 762.88\r
        C 405.49 781.56 407.37 800.20 409.85 818.91\r
        Q 414.17 851.55 417.96 884.25\r
        C 419.75 899.76 422.69 912.34 428.07 925.86\r
        C 430.81 932.78 434.76 937.63 438.87 943.20\r
        C 441.48 946.75 445.27 949.37 447.80 953.58\r
        A 1.76 1.71 -0.9 0 0 448.49 954.23\r
        C 454.92 957.49 463.53 962.01 468.42 963.83\r
        C 478.17 967.46 486.58 965.79 496.18 961.05\r
        C 504.97 956.71 513.73 951.27 516.96 941.65\r
        C 518.51 937.04 525.81 939.73 524.44 931.25\r
        A 1.72 1.71 53.2 0 1 524.57 930.31\r
        C 527.19 924.59 530.46 918.53 532.48 913.19\r
        Q 536.61 902.29 539.68 887.18\r
        C 540.18 884.73 542.38 881.62 543.08 878.48\r
        C 545.68 866.81 548.76 856.66 550.72 843.62\r
        C 551.46 838.72 553.27 834.33 554.71 829.59\r
        C 556.22 824.59 555.75 819.74 555.75 814.56\r
        Q 555.75 814.02 556.04 813.57\r
        Q 557.80 810.78 557.68 807.58\r
        Q 557.66 807.04 558.07 806.70\r
        C 564.03 801.59 563.01 794.65 564.75 787.53\r
        Q 564.90 786.91 565.03 785.03\r
        C 565.17 782.99 566.69 781.08 567.12 779.85\r
        C 568.68 775.39 568.54 770.49 569.75 766.39\r
        Q 571.66 759.97 573.74 753.60\r
        C 575.04 749.61 574.35 745.53 575.97 741.58\r
        Q 577.86 736.97 579.10 730.33\r
        C 579.97 725.66 582.18 719.83 583.13 714.11\r
        Q 584.31 706.92 586.18 699.88\r
        C 587.81 693.73 588.46 686.56 591.28 680.03\r
        Q 592.26 677.74 592.49 671.24\r
        Q 592.59 668.36 595.71 659.77\r
        C 597.00 656.20 597.34 652.58 598.84 648.93\r
        C 602.52 639.95 605.15 627.68 606.97 621.35\r
        Q 614.18 596.32 619.26 569.50\r
        C 619.53 568.03 619.41 566.58 619.88 565.30\r
        C 624.39 553.12 626.87 539.71 628.98 526.54\r
        C 629.84 521.17 631.63 516.30 633.04 511.04\r
        C 633.92 507.78 633.89 502.67 636.85 499.06\r
        A 1.22 1.21 55.2 0 1 638.94 499.44\r
        C 640.90 505.18 641.16 510.83 641.92 515.78\r
        Q 649.48 565.04 651.76 584.25\r
        Q 654.35 606.03 662.84 689.80\r
        C 663.35 694.75 664.69 700.59 665.00 705.50\r
        Q 667.32 741.96 671.75 775.50\r
        C 672.54 781.45 672.56 787.59 673.21 792.89\r
        C 674.59 804.02 675.03 815.12 676.77 826.19\r
        Q 678.84 839.35 680.90 857.82\r
        C 682.94 876.11 687.19 906.08 690.21 934.20\r
        Q 691.42 945.52 692.99 956.79\r
        C 694.47 967.32 695.39 979.64 697.27 990.75\r
        Q 699.34 1003.00 700.67 1012.12\r
        Q 701.25 1016.11 702.76 1020.11\r
        C 705.25 1026.73 707.11 1034.05 710.24 1039.70\r
        Q 713.92 1046.36 718.67 1052.38\r
        C 724.58 1059.88 737.55 1059.97 745.83 1057.11\r
        C 753.12 1054.60 761.35 1044.86 764.04 1037.81\r
        C 766.92 1030.28 769.76 1021.20 771.23 1012.72\r
        C 772.40 1005.91 773.35 999.99 775.60 993.00\r
        C 777.85 985.99 779.34 979.50 780.51 972.25\r
        Q 783.75 952.05 790.53 932.77\r
        C 791.69 929.45 791.60 923.41 792.68 919.25\r
        Q 797.06 902.31 801.05 885.28\r
        C 803.64 874.23 806.85 863.93 810.07 853.32\r
        C 811.39 849.00 811.55 844.30 812.70 840.31\r
        C 816.99 825.39 819.92 809.04 823.50 795.31\r
        C 825.98 785.83 829.60 775.78 830.67 766.08\r
        C 831.30 760.32 833.81 754.70 834.99 749.19\r
        C 836.98 739.92 840.38 730.33 841.43 721.00\r
        C 841.94 716.48 843.14 710.52 844.92 707.41\r
        Q 846.25 705.09 846.04 703.18\r
        A 1.52 1.49 58.0 0 1 846.25 702.22\r
        Q 849.55 696.81 849.88 690.51\r
        Q 849.92 689.68 850.30 688.44\r
        C 850.80 686.78 850.41 684.83 850.90 683.22\r
        C 856.23 665.72 858.98 647.44 862.53 629.50\r
        C 863.97 622.29 867.11 617.43 868.06 609.88\r
        Q 868.61 605.50 869.60 601.74\r
        C 873.09 588.36 875.16 573.78 877.95 561.32\r
        Q 881.56 545.18 883.90 530.93\r
        Q 885.10 523.69 887.38 517.55\r
        C 889.41 512.08 889.90 506.83 892.22 501.12\r
        C 895.10 494.05 895.18 486.38 896.37 480.16\r
        C 898.60 468.48 899.86 455.02 904.77 444.22\r
        Q 905.56 442.48 906.43 444.19\r
        C 907.81 446.88 909.15 449.39 909.59 452.47\r
        C 910.46 458.62 910.94 466.36 911.36 470.94\r
        Q 913.43 493.57 916.64 532.26\r
        C 917.79 546.11 918.20 557.88 920.07 574.52\r
        Q 922.27 594.00 924.44 613.48\r
        C 927.18 638.10 928.35 657.23 929.60 679.09\r
        C 930.20 689.64 931.42 701.69 932.08 710.65\r
        Q 932.81 720.72 933.59 730.79\r
        C 934.45 741.77 936.09 753.91 937.20 765.50\r
        Q 942.66 822.90 948.49 880.25\r
        C 950.10 896.09 950.93 911.00 956.10 924.49\r
        C 964.31 945.92 981.15 968.18 1006.37 968.02\r
        C 1018.77 967.94 1035.87 960.78 1043.81 950.80\r
        C 1058.02 932.97 1065.80 908.98 1071.35 887.23\r
        Q 1078.11 860.72 1086.04 834.55\r
        Q 1087.04 831.24 1088.43 824.92\r
        C 1089.63 819.48 1091.93 814.44 1092.38 808.89\r
        Q 1093.07 800.19 1095.23 794.99\r
        C 1097.96 788.45 1098.46 783.08 1100.25 777.00\r
        Q 1102.20 770.41 1103.52 763.67\r
        C 1104.23 760.00 1105.87 756.23 1106.53 753.26\r
        Q 1113.03 724.30 1122.70 696.26\r
        C 1123.19 694.83 1122.79 693.39 1122.72 691.91\r
        Q 1122.69 691.39 1122.95 690.95\r
        Q 1126.55 684.76 1127.52 680.76\r
        Q 1134.00 653.98 1141.98 627.61\r
        C 1142.52 625.82 1143.73 624.13 1144.53 622.44\r
        A 0.97 0.96 -43.3 0 1 1146.30 622.49\r
        Z`}),g.jsx("path",{fill:"#6fd81c",d:`\r
        M 719.81 219.69\r
        Q 739.93 238.72 752.19 251.02\r
        C 755.83 254.67 760.13 257.75 764.15 261.07\r
        A 2.52 2.51 50.0 0 0 767.00 261.32\r
        C 769.48 259.93 772.06 258.18 774.11 255.96\r
        C 796.75 231.44 819.82 206.66 845.55 186.56\r
        C 855.47 178.82 865.97 172.84 878.51 166.50\r
        C 901.08 155.10 916.31 146.84 937.35 141.46\r
        Q 959.03 135.93 981.07 132.07\r
        C 1027.67 123.92 1076.55 131.03 1121.76 144.22\r
        C 1137.20 148.72 1151.87 155.48 1166.56 161.95\r
        Q 1217.07 184.21 1255.30 218.20\r
        C 1282.33 242.22 1302.82 266.50 1323.32 293.68\r
        C 1333.25 306.85 1341.37 321.78 1349.78 335.95\r
        C 1352.23 340.08 1356.59 346.03 1358.75 351.00\r
        C 1372.12 381.88 1384.24 412.32 1390.72 445.05\r
        Q 1397.37 478.69 1401.45 512.76\r
        Q 1403.01 525.87 1403.04 529.24\r
        C 1403.08 533.91 1403.79 538.61 1403.78 542.27\r
        Q 1403.63 571.93 1402.43 591.19\r
        C 1401.61 604.31 1398.79 621.84 1397.82 638.06\r
        C 1397.36 645.71 1389.72 643.12 1384.85 644.51\r
        Q 1382.19 645.27 1380.53 645.27\r
        C 1343.76 645.33 1306.92 643.43 1270.17 644.10\r
        C 1258.11 644.32 1249.56 645.33 1239.80 645.27\r
        C 1234.89 645.25 1232.04 647.58 1226.72 646.06\r
        C 1221.18 644.49 1217.25 645.74 1214.82 638.92\r
        C 1212.51 632.44 1212.04 625.78 1209.80 619.32\r
        Q 1202.90 599.45 1195.98 579.58\r
        C 1195.36 577.81 1194.14 576.95 1192.66 576.03\r
        Q 1192.24 575.78 1192.14 575.30\r
        Q 1190.23 566.40 1185.41 558.88\r
        C 1182.50 554.35 1177.65 549.66 1173.71 545.21\r
        C 1170.82 541.95 1167.04 541.14 1162.98 541.50\r
        Q 1161.09 541.67 1160.45 540.19\r
        Q 1160.24 539.69 1159.74 539.45\r
        L 1156.58 537.93\r
        A 2.12 2.06 -32.3 0 0 1155.58 537.72\r
        C 1150.19 537.92 1144.64 537.03 1139.69 537.44\r
        Q 1134.07 537.91 1128.50 538.81\r
        C 1113.74 541.20 1104.44 558.29 1098.29 570.43\r
        C 1096.89 573.20 1096.68 576.36 1095.40 579.17\r
        C 1092.69 585.17 1091.53 592.51 1090.12 597.11\r
        C 1078.79 634.27 1070.02 667.80 1060.39 707.60\r
        C 1057.97 717.61 1054.84 727.56 1052.66 737.66\r
        Q 1049.39 752.78 1046.18 767.92\r
        C 1044.78 774.52 1042.03 781.11 1041.24 787.95\r
        C 1040.40 795.13 1038.42 801.87 1037.20 808.95\r
        C 1036.02 815.75 1033.20 822.04 1031.94 829.94\r
        Q 1028.21 853.29 1019.36 883.40\r
        C 1018.23 887.26 1017.65 891.10 1016.96 895.01\r
        C 1015.95 900.75 1009.20 899.70 1008.31 895.79\r
        C 1005.57 883.74 1004.10 875.06 1004.76 865.75\r
        C 1004.92 863.48 1004.38 862.05 1004.09 860.20\r
        Q 1002.43 849.45 1000.83 838.69\r
        Q 1000.04 833.35 999.83 829.10\r
        C 999.34 819.31 998.45 809.65 997.50 799.90\r
        C 997.00 794.70 995.22 788.90 994.74 783.19\r
        C 994.55 780.84 995.56 778.15 995.31 775.49\r
        C 994.35 765.07 993.74 754.97 992.52 744.21\r
        Q 989.98 721.94 989.65 699.50\r
        Q 989.58 694.21 987.27 674.69\r
        C 987.08 673.09 987.66 670.50 986.70 668.38\r
        Q 986.50 667.92 986.51 667.42\r
        C 986.67 662.72 984.77 658.93 984.75 654.58\r
        C 984.74 649.95 985.16 645.90 983.89 641.22\r
        C 982.38 635.69 983.29 630.67 982.24 625.21\r
        Q 981.20 619.85 981.01 612.50\r
        C 980.72 601.91 978.00 586.67 977.00 571.51\r
        C 976.39 562.41 974.93 552.77 974.59 545.01\r
        Q 974.09 533.44 972.33 521.99\r
        Q 971.45 516.27 971.21 510.49\r
        C 970.97 504.69 969.84 498.05 969.41 493.15\r
        Q 967.03 465.79 962.01 418.50\r
        C 958.98 390.02 949.79 359.53 918.48 351.03\r
        C 916.00 350.35 913.19 350.67 910.44 349.77\r
        Q 909.95 349.61 909.48 349.80\r
        C 907.08 350.74 904.56 350.41 902.51 350.79\r
        C 898.09 351.62 891.77 352.51 886.90 354.53\r
        C 882.12 356.51 873.28 365.85 870.63 370.33\r
        C 869.14 372.83 867.89 375.26 866.19 377.70\r
        C 859.97 386.59 858.42 394.89 855.53 408.26\r
        Q 847.17 447.00 837.85 485.53\r
        C 834.03 501.33 831.18 518.26 826.97 534.52\r
        C 824.09 545.60 823.14 556.89 819.35 567.74\r
        Q 817.23 573.83 816.44 577.98\r
        C 811.45 603.98 804.90 629.61 799.61 655.56\r
        C 798.89 659.08 796.59 661.78 796.17 665.29\r
        C 795.71 669.22 795.21 673.17 794.25 677.11\r
        C 788.11 702.35 781.82 727.72 777.25 753.30\r
        Q 772.59 779.34 765.73 804.90\r
        C 762.21 817.98 760.18 832.02 756.48 844.99\r
        Q 751.11 863.82 747.80 879.53\r
        C 747.54 880.76 746.65 881.98 746.29 883.19\r
        A 1.15 1.15 0.0 0 1 744.16 883.39\r
        C 740.71 876.60 741.74 869.37 737.64 862.46\r
        Q 737.38 862.02 737.45 861.50\r
        C 738.28 855.31 737.06 851.04 736.77 845.41\r
        C 736.52 840.32 735.63 836.18 734.56 831.48\r
        C 733.05 824.87 732.75 818.09 732.49 811.15\r
        C 732.38 807.96 731.84 804.34 731.64 801.62\r
        C 729.28 770.00 724.74 738.57 721.52 707.03\r
        Q 719.26 684.91 717.50 662.75\r
        C 716.41 649.09 713.99 634.86 713.02 622.04\r
        Q 711.23 598.49 709.99 587.00\r
        Q 704.68 537.63 699.74 488.21\r
        C 697.67 467.38 695.17 446.63 693.50 425.75\r
        C 692.61 414.63 688.18 400.64 685.13 388.83\r
        C 683.25 381.58 678.37 376.08 674.32 370.01\r
        C 666.85 358.80 658.08 352.36 644.47 350.90\r
        Q 641.07 350.53 637.51 351.62\r
        C 628.80 354.29 618.66 357.86 611.85 364.62\r
        Q 608.12 368.31 604.57 375.84\r
        C 601.41 382.52 598.82 388.61 597.18 396.10\r
        Q 591.14 423.49 585.44 450.94\r
        C 584.08 457.52 581.70 464.08 580.55 470.92\r
        Q 579.65 476.32 577.27 488.25\r
        Q 568.46 532.50 558.93 576.59\r
        Q 558.91 576.71 557.15 582.78\r
        C 556.12 586.34 556.34 589.99 555.79 593.04\r
        Q 552.63 610.36 547.09 627.07\r
        C 546.10 630.05 546.87 633.92 545.66 637.33\r
        Q 541.80 648.16 538.82 659.26\r
        C 536.76 666.93 535.55 677.03 533.18 685.80\r
        C 528.87 701.80 525.65 718.03 521.35 734.03\r
        Q 519.52 740.84 517.41 751.15\r
        C 515.83 758.84 513.56 766.66 512.18 774.01\r
        Q 504.00 817.34 491.77 859.71\r
        C 491.18 861.73 490.14 865.12 488.88 866.90\r
        Q 479.93 879.53 479.36 895.20\r
        A 1.54 1.47 -33.3 0 1 479.23 895.76\r
        Q 478.39 897.63 477.31 896.79\r
        Q 476.99 896.54 476.82 896.00\r
        Q 475.60 892.08 475.21 888.00\r
        C 474.67 882.43 473.95 876.86 473.35 871.29\r
        C 471.41 853.37 467.79 834.91 466.75 824.00\r
        Q 464.79 803.52 461.97 752.24\r
        C 461.03 735.17 459.16 718.92 456.86 701.22\r
        C 455.81 693.15 455.69 685.07 454.72 677.02\r
        C 454.39 674.33 454.56 671.51 454.24 669.01\r
        C 451.04 643.95 447.58 618.39 444.40 593.05\r
        C 442.33 576.55 434.54 560.98 424.57 547.69\r
        C 417.29 538.00 397.70 533.29 386.36 532.77\r
        C 384.14 532.67 381.88 533.60 379.37 533.52\r
        C 372.57 533.33 369.27 536.61 364.18 540.11\r
        C 361.96 541.64 357.23 542.73 355.74 544.50\r
        C 351.85 549.09 347.27 553.90 344.29 558.59\r
        C 336.74 570.47 334.33 583.43 330.19 598.98\r
        Q 328.94 603.69 327.77 611.30\r
        Q 326.65 618.62 324.73 625.77\r
        C 322.64 633.52 323.29 645.27 313.31 646.87\r
        C 308.95 647.57 303.96 645.20 299.21 645.24\r
        C 272.89 645.46 246.51 644.36 216.07 644.57\r
        Q 216.00 644.57 213.31 644.43\r
        C 210.96 644.32 208.87 645.18 206.79 645.18\r
        Q 186.57 645.17 166.34 645.33\r
        C 156.95 645.40 143.96 646.17 132.50 645.06\r
        Q 132.04 645.02 131.71 644.70\r
        Q 128.17 641.41 128.13 638.30\r
        Q 127.95 623.43 125.98 609.75\r
        C 124.88 602.07 122.57 591.02 122.51 581.48\r
        C 122.43 566.71 121.43 551.54 121.99 537.00\r
        C 122.48 524.10 121.79 511.50 123.43 499.28\r
        Q 124.85 488.73 126.48 478.21\r
        C 127.25 473.28 127.44 468.29 129.26 463.53\r
        Q 131.66 457.25 132.62 450.60\r
        Q 133.53 444.23 134.33 441.20\r
        Q 140.66 417.25 143.78 407.76\r
        C 160.05 358.29 184.93 309.01 219.81 269.80\r
        C 239.89 247.23 263.63 225.70 288.47 206.15\r
        Q 326.61 176.14 371.77 157.79\r
        C 392.87 149.23 413.86 140.82 436.74 137.23\r
        C 443.53 136.16 451.00 133.95 457.48 132.92\r
        Q 477.40 129.77 490.50 128.99\r
        Q 508.30 127.93 530.45 129.35\r
        C 559.94 131.24 590.10 139.57 616.80 151.48\r
        C 632.30 158.39 650.31 166.45 665.12 176.19\r
        Q 693.69 194.97 719.81 219.69\r
        Z`})]}),B9=({link:t,text:e})=>g.jsx("nav",{className:"h-20 relative md:h-24 z-10 md:px-6 py-2 px-4 lg:px-8 xl:px-12 bg-white dark:bg-slate-900 shadow-lg flex items-center justify-between",children:g.jsx(j9,{to:"/healthert-web/",children:g.jsxs("div",{className:"flex justify-start items-center space-x-2",children:[g.jsx("span",{className:"w-10 h-10 md:w-12 md:h-12",children:g.jsx(z9,{})}),g.jsx("span",{className:"hidden sm:inline-block text-3xl font-semibold md:text-4xl text-verde",children:"HEALTHERT"})]})})});const V9=()=>g.jsx("footer",{className:"p-4 md:p-8 flex justify-center text-base md:text-xl bg-slate-900 dark:border-t-2 border-verde w-full ",children:g.jsxs("div",{className:"columns-3 w-full md:max-w-screen-lg",children:[g.jsx("div",{className:"",children:g.jsx("a",{href:"#",className:"glow",children:"Tu privacidad"})}),g.jsxs("div",{className:"flex space-x-3 justify-center",children:[g.jsx("a",{href:"https://www.facebook.com/profile.php?id=61550919815479&mibextid=ZbWKwL",target:"_blank",className:"glow",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"h-6 w-6 md:h-8 md:w-8",viewBox:"0 0 16 16",children:g.jsx("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})})}),g.jsx("a",{href:"#",target:"_blank",className:"glow",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"h-6 w-6 md:h-8 md:w-8",viewBox:"0 0 16 16",children:g.jsx("path",{d:"M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"})})}),g.jsx("a",{href:"https://wa.me/524433994806/?text=Estoy+interesado+en+Healthert",target:"_blank",className:"glow",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"h-6 w-6 md:h-8 md:w-8",viewBox:"0 0 16 16",children:g.jsx("path",{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"})})})]}),g.jsx("div",{className:"flex cursor-default justify-end",children:g.jsx("p",{href:"#",className:"glow",children:"4433994806"})})]})}),_2=()=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"w-24 h-24 ",viewBox:"0 0 783 784",children:[g.jsx("path",{stroke:"#5fe013",strokeWidth:"2.00",fill:"none",strokeLinecap:"butt",vectorEffect:"non-scaling-stroke",d:`\r
  M 145.25 410.54\r
  L 135.05 410.71\r
  Q 134.23 410.72 135.00 410.99\r
  Q 136.87 411.63 136.00 412.25\r
  A 1.45 1.10 79.3 0 0 135.50 413.25\r
  Q 135.12 418.47 137.23 423.23\r
  Q 139.25 427.79 142.51 431.43\r
  Q 145.60 434.86 150.28 436.98\r
  Q 157.74 440.36 166.08 440.71\r
  Q 166.51 440.73 168.90 441.06\r
  Q 170.35 441.25 171.78 440.95\r
  Q 174.50 440.37 174.78 440.32\r
  Q 180.46 439.33 183.04 433.96\r
  Q 183.11 433.80 183.65 433.21\r
  L 185.40 431.27\r
  Q 186.33 430.25 185.24 431.11\r
  Q 183.88 432.18 183.05 432.32\r
  Q 182.43 432.43 182.94 432.00\r
  Q 190.38 425.62 194.50 415.75\r
  Q 195.32 413.79 195.28 412.04\r
  Q 195.23 408.97 195.23 408.82\r
  Q 195.64 402.05 190.57 397.10`}),g.jsx("path",{fill:"#5ddb13",d:`\r
  M 115.84 572.72\r
  Q 96.33 552.82 75.56 527.19\r
  Q 56.78 504.00 44.31 482.94\r
  Q 43.48 481.54 42.01 479.60\r
  Q 40.73 477.93 39.95 476.13\r
  Q 36.39 467.99 31.44 459.06\r
  Q 29.01 454.69 26.19 448.31\r
  Q 24.24 443.92 15.97 421.82\r
  Q 14.70 418.44 12.95 412.14\r
  Q 12.04 408.87 10.92 405.67\r
  Q 9.65 402.03 9.04 399.18\r
  Q 3.54 373.22 2.50 361.50\r
  Q 0.33 337.08 1.75 310.00\r
  Q 2.45 296.70 4.13 284.87\r
  Q 5.48 275.38 8.29 265.32\r
  Q 12.33 250.86 18.56 233.56\r
  Q 29.44 203.35 49.25 174.25\r
  Q 59.67 158.94 67.10 150.34\r
  Q 83.55 131.30 98.19 118.94\r
  Q 108.66 110.09 122.77 101.65\r
  Q 131.83 96.23 140.08 91.66\r
  Q 152.91 84.55 166.57 79.09\r
  Q 174.15 76.05 181.74 73.04\r
  Q 190.05 69.73 195.90 67.83\r
  Q 205.90 64.58 210.50 64.00\r
  Q 214.18 63.54 216.67 62.66\r
  Q 219.26 61.75 221.01 61.60\r
  Q 225.67 61.18 234.25 59.75\r
  Q 240.78 58.66 251.45 58.46\r
  Q 261.55 58.27 268.69 58.47\r
  Q 281.46 58.82 294.07 60.98\r
  Q 294.42 61.04 302.35 62.86\r
  Q 306.50 63.82 310.75 64.09\r
  Q 312.66 64.22 314.62 65.17\r
  Q 316.87 66.26 319.31 66.82\r
  Q 322.72 67.61 324.08 68.11\r
  Q 331.18 70.74 338.31 73.28\r
  Q 347.25 76.48 352.32 78.96\r
  Q 361.71 83.57 372.56 90.44\r
  Q 382.45 96.69 388.45 102.35\r
  A 1.15 0.99 60.0 0 0 389.31 102.65\r
  Q 390.85 102.45 391.93 101.41\r
  Q 393.76 99.66 393.96 99.52\r
  Q 427.08 76.86 468.31 65.56\r
  Q 472.09 64.53 474.57 64.01\r
  Q 479.87 62.89 480.85 62.65\r
  Q 485.57 61.48 490.41 61.03\r
  Q 498.46 60.27 500.04 60.06\r
  Q 515.48 58.04 531.06 58.54\r
  Q 536.69 58.72 540.43 58.76\r
  Q 546.94 58.83 549.81 59.19\r
  Q 558.21 60.24 576.50 64.00\r
  Q 579.91 64.70 582.09 65.30\r
  Q 586.92 66.61 587.61 66.77\r
  Q 592.50 67.85 597.25 69.40\r
  Q 599.23 70.05 606.69 72.60\r
  Q 620.64 77.38 636.00 85.50\r
  Q 646.50 91.05 654.14 95.41\r
  Q 662.85 100.38 670.88 106.34\r
  Q 700.42 128.29 721.69 154.81\r
  Q 742.10 180.28 754.00 207.00\r
  Q 754.85 208.92 755.57 209.72\r
  Q 755.99 210.19 756.12 210.53\r
  Q 767.88 240.04 769.50 245.50\r
  Q 778.53 276.00 780.75 307.75\r
  Q 781.15 313.50 781.65 325.91\r
  Q 782.03 335.34 781.54 344.08\r
  Q 780.80 357.20 779.64 370.30\r
  Q 779.38 373.19 778.35 378.61\r
  Q 777.57 382.77 777.25 387.00\r
  Q 776.94 391.08 772.43 405.98\r
  Q 768.71 418.26 764.20 430.26\r
  Q 758.91 444.32 757.01 448.91\r
  Q 751.36 462.56 742.56 477.56\r
  Q 734.47 491.36 727.78 501.36\r
  Q 723.30 508.06 716.42 517.82\r
  Q 707.99 529.78 698.59 541.00\r
  Q 694.76 545.57 685.57 556.18\r
  Q 643.78 604.47 594.00 642.25\r
  Q 576.75 655.34 551.84 673.13\r
  Q 543.04 679.42 535.30 684.39\r
  Q 487.42 715.19 438.69 737.94\r
  Q 434.99 739.66 433.56 740.81\r
  Q 432.84 741.40 431.20 741.35\r
  Q 429.55 741.30 428.83 741.52\r
  Q 426.73 742.14 425.16 743.70\r
  A 1.45 1.33 -68.6 0 1 424.32 744.11\r
  Q 420.97 744.49 418.31 745.81\r
  Q 415.14 747.39 412.07 748.04\r
  Q 409.16 748.67 409.07 748.69\r
  Q 396.41 751.75 383.54 750.53\r
  Q 379.74 750.17 374.21 748.67\r
  Q 371.15 747.84 368.08 747.04\r
  Q 364.93 746.22 362.10 744.96\r
  Q 341.96 735.98 322.19 726.22\r
  Q 313.53 721.94 304.55 716.83\r
  Q 288.46 707.68 272.54 698.23\r
  Q 267.79 695.42 263.24 692.30\r
  Q 255.67 687.14 247.69 682.64\r
  Q 243.37 680.21 239.69 677.23\r
  Q 233.40 672.11 230.44 670.31\r
  Q 215.57 661.27 202.11 650.29\r
  Q 193.77 643.49 193.69 643.42\r
  Q 175.25 628.68 163.19 618.31\r
  Q 146.01 603.55 128.41 585.52\r
  Q 128.19 585.30 115.84 572.72\r
  Z\r
  M 145.25 410.54\r
  L 135.05 410.71\r
  Q 134.23 410.72 135.00 410.99\r
  Q 136.87 411.63 136.00 412.25\r
  A 1.45 1.10 79.3 0 0 135.50 413.25\r
  Q 135.12 418.47 137.23 423.23\r
  Q 139.25 427.79 142.51 431.43\r
  Q 145.60 434.86 150.28 436.98\r
  Q 157.74 440.36 166.08 440.71\r
  Q 166.51 440.73 168.90 441.06\r
  Q 170.35 441.25 171.78 440.95\r
  Q 174.50 440.37 174.78 440.32\r
  Q 180.46 439.33 183.04 433.96\r
  Q 183.11 433.80 183.65 433.21\r
  L 185.40 431.27\r
  Q 186.33 430.25 185.24 431.11\r
  Q 183.88 432.18 183.05 432.32\r
  Q 182.43 432.43 182.94 432.00\r
  Q 190.38 425.62 194.50 415.75\r
  Q 195.32 413.79 195.28 412.04\r
  Q 195.23 408.97 195.23 408.82\r
  Q 195.64 402.05 190.57 397.10\r
  Q 191.39 393.59 192.09 389.88\r
  Q 192.56 387.41 194.02 382.79\r
  Q 195.29 378.73 195.68 374.45\r
  Q 195.78 373.30 195.97 372.57\r
  Q 197.06 368.35 198.25 372.11\r
  Q 198.47 372.82 198.57 373.93\r
  Q 198.88 377.27 199.81 380.45\r
  Q 200.61 383.20 200.74 385.82\r
  Q 200.96 390.30 202.00 396.25\r
  Q 202.82 400.93 203.63 410.58\r
  Q 203.63 410.63 204.19 419.93\r
  Q 204.49 424.90 205.19 429.83\r
  Q 205.91 434.87 206.18 439.72\r
  Q 206.50 445.40 207.29 451.03\r
  Q 207.94 455.66 208.28 460.02\r
  Q 208.64 464.53 209.26 469.01\r
  Q 210.97 481.41 210.98 481.52\r
  Q 212.74 496.53 214.57 511.52\r
  Q 215.36 518.03 219.06 527.69\r
  Q 220.69 531.95 222.65 534.33\r
  Q 223.57 535.45 224.54 536.91\r
  Q 225.44 538.27 226.74 539.30\r
  Q 227.49 539.90 227.95 540.53\r
  Q 228.46 541.23 228.99 541.91\r
  Q 229.78 542.92 231.01 543.50\r
  Q 236.67 546.19 237.75 546.75\r
  Q 243.50 549.76 249.50 548.25\r
  Q 253.71 547.19 260.35 542.65\r
  Q 263.80 540.30 265.07 536.30\r
  A 1.87 1.85 -0.1 0 1 266.31 535.07\r
  Q 268.86 534.27 268.83 532.49\r
  Q 268.79 530.40 269.80 528.58\r
  Q 274.93 519.34 276.60 508.95\r
  Q 276.79 507.81 277.57 506.38\r
  Q 278.27 505.11 278.55 503.71\r
  Q 279.32 499.96 279.34 499.87\r
  Q 281.49 492.78 282.46 485.45\r
  Q 282.72 483.47 283.82 480.79\r
  Q 285.40 476.91 285.00 473.00\r
  Q 284.78 470.89 285.63 469.59\r
  A 1.54 1.42 61.7 0 0 285.86 468.69\r
  L 285.80 467.81\r
  A 1.09 0.79 -26.4 0 1 286.22 467.01\r
  Q 288.37 465.31 288.69 462.59\r
  Q 288.94 460.53 288.96 460.43\r
  Q 289.44 457.93 289.86 455.42\r
  Q 289.93 454.99 290.23 454.54\r
  Q 291.43 452.81 291.50 450.00\r
  Q 291.57 447.29 293.37 442.58\r
  Q 294.66 439.19 294.81 435.56\r
  Q 294.86 434.49 295.82 432.50\r
  Q 296.52 431.05 296.72 429.47\r
  Q 297.08 426.70 297.98 424.08\r
  Q 298.83 421.62 299.11 419.11\r
  Q 299.42 416.36 300.24 413.70\r
  Q 301.20 410.58 301.60 407.35\r
  Q 301.78 405.97 302.24 404.74\r
  Q 302.73 403.47 303.15 402.18\r
  Q 303.56 400.93 303.79 398.21\r
  Q 303.96 396.11 304.70 394.17\r
  Q 305.53 391.99 305.87 390.29\r
  Q 306.33 387.92 307.27 385.71\r
  Q 308.48 382.86 308.86 381.24\r
  Q 309.43 378.85 310.00 376.45\r
  Q 310.42 374.67 311.33 371.73\r
  Q 313.08 366.04 315.50 355.50\r
  Q 317.09 348.58 317.57 344.76\r
  Q 317.78 343.14 318.51 341.41\r
  Q 319.20 339.77 319.57 338.03\r
  Q 320.64 332.99 320.66 332.92\r
  Q 321.93 328.16 322.50 323.26\r
  Q 322.74 321.19 323.77 318.45\r
  Q 324.71 315.96 324.99 313.28\r
  Q 325.19 311.47 326.52 309.44\r
  A 0.32 0.32 48.0 0 1 327.07 309.47\r
  Q 328.09 311.47 328.24 313.36\r
  Q 328.41 315.57 328.42 315.63\r
  Q 333.71 349.92 335.25 365.75\r
  Q 337.42 388.03 339.86 410.27\r
  Q 339.87 410.34 340.31 412.68\r
  Q 340.61 414.28 340.75 417.25\r
  Q 341.06 424.00 343.30 445.60\r
  Q 343.40 446.58 343.91 449.37\r
  Q 344.26 451.25 344.32 453.16\r
  Q 344.44 457.22 344.66 458.82\r
  Q 345.49 464.86 345.84 470.95\r
  Q 346.03 474.22 346.69 477.49\r
  Q 347.47 481.35 347.75 484.00\r
  Q 349.94 504.60 352.78 525.12\r
  Q 353.09 527.38 353.44 531.91\r
  Q 353.70 535.34 354.25 538.72\r
  Q 355.26 544.84 355.59 548.87\r
  Q 356.38 558.38 358.25 567.75\r
  Q 358.42 568.61 358.78 572.08\r
  Q 358.98 574.02 359.89 576.24\r
  Q 360.89 578.69 361.81 581.94\r
  Q 363.12 586.55 366.38 590.59\r
  Q 366.41 590.63 368.02 592.95\r
  Q 369.25 594.72 371.31 595.44\r
  Q 377.25 597.51 383.03 595.27\r
  Q 384.63 594.64 386.07 593.17\r
  Q 387.39 591.81 388.67 590.42\r
  Q 390.62 588.30 391.63 585.69\r
  Q 393.93 579.75 395.29 573.53\r
  Q 395.29 573.50 395.99 568.94\r
  Q 396.55 565.28 398.31 560.31\r
  Q 399.53 556.88 400.36 550.78\r
  Q 400.83 547.29 401.62 544.31\r
  Q 402.47 541.12 403.24 537.92\r
  Q 403.52 536.75 404.62 533.71\r
  Q 405.38 531.60 405.63 529.37\r
  Q 406.09 525.37 406.55 523.73\r
  Q 409.36 513.91 411.42 503.90\r
  Q 411.69 502.58 412.38 500.69\r
  Q 412.96 499.11 413.33 497.47\r
  Q 413.81 495.32 414.79 492.72\r
  Q 415.57 490.64 415.85 488.44\r
  Q 416.20 485.67 416.66 484.15\r
  Q 419.08 476.29 420.49 468.19\r
  Q 421.00 465.25 421.99 461.93\r
  Q 422.92 458.82 423.58 455.65\r
  Q 423.87 454.26 424.83 451.48\r
  Q 425.55 449.38 425.75 447.17\r
  Q 425.98 444.55 426.67 442.63\r
  Q 427.76 439.59 428.32 436.43\r
  Q 428.89 433.22 429.83 430.23\r
  Q 431.08 426.23 431.50 422.00\r
  Q 431.67 420.26 432.96 416.58\r
  Q 432.97 416.56 433.58 415.38\r
  Q 433.90 414.76 433.83 414.00\r
  A 1.62 1.16 66.8 0 1 434.03 413.09\r
  Q 435.59 410.66 435.75 407.50\r
  Q 435.89 404.71 436.76 401.90\r
  Q 437.97 398.02 438.26 396.47\r
  Q 440.30 385.33 442.61 374.24\r
  Q 442.84 373.17 443.72 371.31\r
  Q 444.41 369.86 444.64 368.26\r
  Q 445.12 364.87 445.15 364.77\r
  Q 446.22 360.09 447.38 355.43\r
  Q 447.93 353.22 448.61 348.46\r
  Q 449.05 345.29 450.00 341.50\r
  Q 451.79 334.35 453.34 324.46\r
  Q 453.67 322.31 454.83 319.22\r
  Q 455.79 316.64 456.27 313.91\r
  Q 456.57 312.19 457.61 309.96\r
  Q 458.56 307.90 458.76 305.63\r
  Q 459.17 301.06 459.31 300.41\r
  Q 460.86 293.17 461.19 290.69\r
  Q 461.82 285.90 463.79 281.41\r
  Q 463.97 280.99 464.23 281.37\r
  Q 465.59 283.38 466.03 285.70\r
  Q 466.05 285.81 466.46 290.30\r
  Q 469.50 324.15 470.00 332.75\r
  Q 470.44 340.22 471.13 346.24\r
  Q 472.34 356.62 472.61 359.68\r
  Q 473.18 366.06 473.94 372.41\r
  Q 474.81 379.63 475.15 385.14\r
  Q 475.82 395.75 476.49 406.36\r
  Q 476.66 409.04 477.23 414.61\r
  Q 477.66 418.74 477.85 422.88\r
  Q 478.15 429.37 478.90 435.06\r
  Q 479.63 440.55 480.25 447.25\r
  Q 482.20 468.46 486.51 511.37\r
  Q 487.48 521.05 489.17 525.91\r
  Q 491.65 533.08 496.21 539.13\r
  Q 500.99 545.49 506.46 547.98\r
  Q 513.10 551.00 520.66 549.30\r
  Q 523.48 548.67 527.26 546.78\r
  Q 532.07 544.39 533.31 543.06\r
  Q 538.99 537.02 543.06 527.06\r
  Q 547.06 517.30 548.84 509.91\r
  Q 550.44 503.32 550.45 503.25\r
  Q 554.88 486.90 556.75 481.25\r
  Q 557.69 478.40 557.96 476.44\r
  Q 558.23 474.44 558.69 473.30\r
  Q 559.61 470.98 559.69 470.19\r
  Q 560.29 463.76 561.75 460.25\r
  Q 562.60 458.21 562.90 456.50\r
  Q 563.39 453.72 563.72 452.73\r
  Q 564.83 449.41 565.44 445.96\r
  Q 565.77 444.11 566.45 442.14\r
  Q 567.10 440.26 567.53 438.31\r
  Q 570.50 424.83 575.47 410.64\r
  A 3.43 3.39 48.9 0 0 575.59 408.76\r
  Q 575.43 407.99 576.00 407.13\r
  Q 576.65 406.15 576.80 405.74\r
  Q 578.13 402.30 579.25 397.50\r
  Q 581.17 389.28 584.74 377.25\r
  Q 585.46 374.83 586.74 372.67\r
  Q 587.00 372.24 587.20 372.71\r
  Q 588.63 376.04 589.25 378.25\r
  Q 598.81 412.47 603.19 424.06\r
  Q 607.95 436.68 609.31 438.69\r
  Q 613.20 444.41 620.22 443.33\r
  Q 626.31 442.40 627.31 441.56\r
  Q 631.50 438.09 634.01 433.38\r
  Q 635.56 430.47 635.77 427.50\r
  Q 635.99 424.37 635.22 421.26\r
  Q 634.21 417.19 633.97 412.44\r
  Q 633.85 410.06 636.26 410.08\r
  L 700.07 410.49\r
  Q 701.37 410.50 702.66 410.01\r
  Q 703.90 409.54 705.16 410.39\r
  A 1.89 1.40 55.4 0 0 706.07 410.70\r
  Q 707.69 410.74 709.32 410.77\r
  Q 711.26 410.82 712.31 411.67\r
  Q 713.63 412.75 714.44 414.56\r
  Q 715.73 417.46 718.32 419.14\r
  Q 719.57 419.95 722.79 421.90\r
  Q 727.37 424.67 733.44 422.94\r
  Q 737.45 421.79 739.76 419.47\r
  Q 740.61 418.61 740.83 417.39\r
  Q 741.04 416.21 741.02 415.00\r
  A 1.25 1.18 -25.0 0 1 741.36 414.14\r
  Q 742.96 412.50 743.00 411.00\r
  Q 743.86 382.04 744.50 372.25\r
  Q 746.29 345.01 745.50 333.00\r
  Q 744.86 323.30 744.76 319.52\r
  Q 744.74 318.70 744.26 316.57\r
  Q 743.97 315.27 744.00 313.50\r
  Q 744.12 306.83 742.78 297.83\r
  Q 742.77 297.76 742.17 295.10\r
  Q 741.74 293.22 741.75 290.50\r
  Q 741.76 287.35 740.25 282.84\r
  Q 739.40 280.31 739.10 278.99\r
  Q 738.45 276.05 738.50 275.00\r
  Q 738.66 271.82 736.97 269.22\r
  Q 736.69 268.79 736.64 268.30\r
  Q 736.02 261.79 733.46 255.83\r
  Q 732.88 254.47 732.53 252.53\r
  Q 732.22 250.80 731.54 249.20\r
  Q 729.70 244.87 729.67 244.77\r
  Q 713.30 196.74 676.99 161.26\r
  Q 667.36 151.86 657.23 143.01\r
  Q 654.22 140.39 650.75 138.43\r
  A 1.92 1.23 79.4 0 1 650.10 137.74\r
  Q 649.41 136.52 647.50 135.25\r
  Q 639.71 130.06 631.63 125.33\r
  Q 631.57 125.30 627.32 122.67\r
  Q 623.04 120.01 618.23 118.40\r
  Q 617.27 118.07 616.33 117.38\r
  Q 615.45 116.73 614.48 116.21\r
  Q 613.78 115.83 611.38 115.29\r
  Q 609.04 114.77 607.25 113.00\r
  Q 606.08 111.84 599.80 110.08\r
  A 1.56 1.28 75.7 0 1 599.04 109.52\r
  Q 598.29 108.48 597.25 108.25\r
  Q 592.52 107.19 590.35 106.34\r
  Q 580.55 102.46 570.32 100.12\r
  Q 561.49 98.11 550.62 96.65\r
  Q 538.76 95.06 526.75 95.04\r
  L 518.00 95.29\r
  Q 500.36 95.29 483.24 99.22\r
  Q 483.16 99.23 474.68 100.87\r
  Q 469.57 101.85 464.78 104.00\r
  Q 461.00 105.70 457.11 107.11\r
  Q 453.09 108.56 449.57 110.44\r
  Q 446.46 112.09 443.28 113.59\r
  Q 439.47 115.39 437.04 116.85\r
  Q 419.52 127.33 403.78 140.36\r
  Q 403.05 140.96 400.43 142.78\r
  Q 398.59 144.05 397.31 145.56\r
  Q 394.14 149.30 389.96 148.79\r
  Q 387.96 148.55 385.79 146.47\r
  Q 366.21 127.74 345.56 116.69\r
  Q 343.23 115.44 330.95 109.34\r
  Q 329.18 108.46 326.36 107.70\r
  Q 323.99 107.07 321.72 106.06\r
  Q 313.84 102.57 305.56 100.23\r
  Q 305.42 100.19 301.63 98.97\r
  Q 298.27 97.89 294.75 97.86\r
  Q 292.79 97.85 290.77 97.17\r
  Q 288.82 96.52 286.74 96.31\r
  Q 260.75 93.71 234.75 96.25\r
  Q 231.95 96.52 229.92 96.94\r
  Q 225.92 97.77 225.14 97.89\r
  Q 221.78 98.41 218.49 99.29\r
  Q 215.72 100.03 211.89 100.60\r
  Q 207.73 101.21 203.50 102.75\r
  Q 184.53 109.65 167.61 118.02\r
  Q 149.53 126.98 137.31 135.81\r
  Q 120.95 147.65 103.39 165.89\r
  Q 59.68 211.29 44.12 272.53\r
  Q 37.71 297.75 37.00 322.50\r
  Q 36.50 339.85 37.77 358.98\r
  Q 38.19 365.24 38.50 372.03\r
  Q 38.80 378.56 39.31 385.09\r
  Q 39.33 385.27 39.91 395.42\r
  Q 40.35 402.96 41.93 410.19\r
  A 1.03 1.02 83.9 0 0 42.91 410.99\r
  Q 62.50 411.18 81.00 410.85\r
  Q 113.12 410.29 145.25 410.54\r
  Z`}),g.jsx("path",{fill:"#5ddb13",d:`\r
  M 383.31 180.69\r
  Q 385.98 183.46 391.86 187.95\r
  A 0.82 0.79 50.6 0 0 392.70 188.05\r
  Q 395.34 186.80 397.69 184.19\r
  Q 415.33 164.51 428.06 153.81\r
  Q 438.40 145.13 447.25 140.75\r
  Q 456.53 136.16 465.81 131.56\r
  Q 471.99 128.51 480.77 126.24\r
  Q 487.18 124.59 496.23 122.76\r
  Q 515.69 118.83 532.75 120.00\r
  Q 552.46 121.35 575.60 128.05\r
  Q 580.88 129.58 586.67 132.09\r
  Q 592.10 134.43 597.51 136.82\r
  Q 623.90 148.45 644.69 167.06\r
  Q 661.25 181.89 675.16 200.76\r
  Q 675.20 200.82 678.10 204.50\r
  Q 680.65 207.73 684.06 213.44\r
  Q 687.75 219.60 691.34 225.82\r
  Q 691.40 225.92 693.99 229.92\r
  Q 695.55 232.31 696.94 235.56\r
  Q 703.12 250.04 707.00 261.25\r
  Q 710.75 272.07 713.16 285.02\r
  Q 715.88 299.57 717.77 314.25\r
  Q 719.51 327.68 719.04 341.20\r
  Q 719.02 341.62 718.72 352.30\r
  Q 718.55 358.54 717.73 364.75\r
  Q 716.88 371.10 716.34 377.48\r
  Q 716.33 377.60 716.28 379.52\r
  Q 716.18 384.20 711.00 383.57\r
  Q 710.51 383.51 710.03 383.68\r
  Q 708.37 384.27 706.63 384.18\r
  Q 703.95 384.03 703.86 384.04\r
  Q 698.30 384.17 692.75 384.07\r
  Q 673.44 383.72 654.14 383.54\r
  Q 649.79 383.50 644.37 383.80\r
  Q 639.50 384.07 634.62 384.21\r
  Q 634.22 384.22 631.52 384.86\r
  Q 629.98 385.23 628.44 384.49\r
  Q 627.99 384.27 627.50 384.28\r
  Q 623.86 384.40 622.60 380.92\r
  Q 621.68 378.36 621.27 375.69\r
  Q 620.77 372.38 620.08 370.47\r
  Q 616.51 360.60 613.06 350.69\r
  Q 612.58 349.30 611.68 348.93\r
  A 1.02 0.72 9.8 0 1 611.08 348.33\r
  Q 609.37 340.92 604.56 336.19\r
  Q 602.17 333.84 601.21 332.48\r
  Q 600.89 332.03 600.50 331.84\r
  Q 598.26 330.80 595.80 331.11\r
  A 0.84 0.80 67.7 0 1 595.04 330.77\r
  Q 593.90 329.17 591.97 329.13\r
  Q 589.61 329.09 589.52 329.08\r
  Q 585.02 328.56 578.94 329.44\r
  Q 575.64 329.91 573.33 331.49\r
  Q 571.84 332.51 569.16 335.51\r
  Q 566.48 338.51 564.67 342.13\r
  Q 564.63 342.20 563.00 345.13\r
  Q 561.88 347.15 561.56 349.51\r
  Q 561.49 349.97 561.21 350.41\r
  Q 560.15 352.03 559.69 354.69\r
  Q 559.16 357.73 556.05 367.62\r
  Q 553.87 374.54 552.32 380.50\r
  Q 549.77 390.31 547.16 400.10\r
  Q 546.41 402.91 543.68 414.48\r
  Q 542.54 419.28 541.17 424.03\r
  Q 539.64 429.36 538.78 433.58\r
  Q 537.23 441.22 535.58 448.84\r
  Q 535.55 448.97 534.05 454.05\r
  Q 533.52 455.82 533.34 457.67\r
  Q 533.11 460.10 532.83 461.29\r
  Q 532.24 463.78 531.66 466.26\r
  Q 531.65 466.31 531.05 469.79\r
  Q 530.72 471.67 529.94 473.41\r
  Q 529.10 475.25 528.91 476.93\r
  Q 528.53 480.30 527.25 486.25\r
  Q 524.75 497.84 522.06 506.81\r
  Q 521.43 508.93 521.25 510.78\r
  Q 521.07 512.74 520.55 513.45\r
  Q 519.39 515.03 517.45 513.51\r
  A 1.50 1.27 -81.6 0 1 516.95 512.70\r
  Q 514.87 503.84 515.06 500.94\r
  Q 515.35 496.72 514.42 492.68\r
  Q 513.90 490.41 513.69 487.72\r
  Q 513.56 486.03 513.19 484.38\r
  Q 512.74 482.43 512.68 481.06\r
  Q 512.22 470.92 510.98 460.84\r
  Q 510.97 460.73 510.16 457.25\r
  Q 509.81 455.76 509.98 454.22\r
  Q 510.21 452.10 510.15 451.25\r
  Q 509.43 440.64 508.75 434.75\r
  Q 507.59 424.66 507.44 417.00\r
  Q 507.27 408.54 506.11 400.16\r
  Q 506.05 399.76 505.82 395.30\r
  Q 505.73 393.65 505.28 392.05\r
  Q 504.75 390.18 504.75 388.86\r
  Q 504.75 386.18 504.75 383.50\r
  Q 504.75 383.04 504.50 382.56\r
  Q 503.47 380.58 503.75 377.75\r
  Q 503.92 376.01 503.48 373.88\r
  Q 502.99 371.50 502.93 370.07\r
  Q 502.57 360.86 501.28 351.73\r
  Q 500.96 349.48 500.70 344.74\r
  Q 500.58 342.38 500.19 340.06\r
  Q 499.77 337.46 499.71 335.40\r
  Q 499.49 327.46 498.18 319.63\r
  Q 497.87 317.84 497.81 314.82\r
  Q 497.77 313.20 497.53 311.59\r
  Q 497.18 309.15 497.11 308.39\r
  Q 494.60 279.99 492.81 265.19\r
  Q 492.01 258.48 488.94 250.27\r
  Q 484.19 237.59 471.93 233.76\r
  Q 468.04 232.54 463.47 233.15\r
  Q 459.20 233.71 455.05 234.93\r
  Q 453.12 235.50 451.66 237.09\r
  Q 449.28 239.67 448.69 240.19\r
  Q 446.31 242.27 445.50 244.25\r
  Q 445.03 245.40 442.88 248.44\r
  Q 441.38 250.56 440.73 252.80\r
  Q 439.09 258.48 437.89 264.26\r
  Q 435.99 273.46 435.43 275.80\r
  Q 433.37 284.48 431.39 293.18\r
  Q 431.36 293.33 428.93 303.28\r
  Q 427.67 308.43 426.78 313.65\r
  Q 425.87 318.99 424.56 323.70\r
  Q 422.81 330.01 422.25 333.75\r
  Q 421.14 341.14 419.25 345.75\r
  Q 418.51 347.56 417.74 352.39\r
  Q 417.14 356.15 416.42 359.05\r
  Q 412.46 374.91 409.29 390.95\r
  Q 409.19 391.41 408.87 391.82\r
  Q 408.07 392.81 408.00 393.50\r
  Q 407.49 398.42 406.00 404.25\r
  Q 403.01 415.96 399.63 431.66\r
  Q 399.62 431.69 399.32 432.84\r
  Q 398.91 434.43 398.25 438.75\r
  Q 396.42 450.72 391.31 469.56\r
  Q 390.67 471.91 389.68 477.67\r
  Q 389.01 481.55 387.75 485.68\r
  Q 385.30 493.65 383.62 501.83\r
  Q 381.65 511.39 380.08 500.99\r
  Q 379.56 497.57 378.44 496.06\r
  Q 377.52 494.84 378.17 493.88\r
  A 1.38 0.94 -40.4 0 0 378.41 493.00\r
  Q 377.95 490.42 377.75 486.50\r
  Q 377.61 483.82 376.82 480.77\r
  Q 375.98 477.51 375.85 475.11\r
  Q 374.88 457.57 372.63 440.15\r
  Q 371.18 428.88 370.39 420.29\r
  Q 369.48 410.25 368.35 400.24\r
  Q 368.28 399.59 367.54 389.73\r
  Q 367.28 386.20 366.68 382.71\r
  Q 365.96 378.51 365.76 375.72\r
  Q 364.68 360.04 362.93 344.42\r
  Q 361.50 331.64 360.82 324.54\r
  Q 358.81 303.59 356.44 282.67\r
  Q 356.42 282.56 355.72 273.94\r
  Q 355.08 266.14 352.68 258.69\r
  Q 352.47 258.03 351.37 253.19\r
  Q 350.65 250.01 348.66 247.44\r
  Q 346.77 245.01 345.79 243.31\r
  Q 340.45 234.03 329.00 233.25\r
  Q 326.99 233.11 319.24 236.48\r
  Q 315.48 238.12 312.76 241.00\r
  Q 311.14 242.71 309.52 246.48\r
  Q 308.68 248.45 307.75 250.39\r
  Q 306.79 252.41 306.34 254.40\r
  Q 302.75 270.45 299.47 286.57\r
  Q 299.37 287.03 297.99 291.68\r
  Q 297.48 293.40 297.32 295.21\r
  Q 297.13 297.41 296.79 298.73\r
  Q 295.84 302.39 295.17 306.10\r
  Q 294.06 312.18 293.78 313.51\r
  Q 290.10 330.96 286.03 350.22\r
  Q 285.88 350.95 285.59 351.64\r
  Q 285.00 353.02 284.94 354.69\r
  Q 284.87 356.82 284.66 357.76\r
  Q 283.51 362.91 282.35 368.06\r
  Q 282.19 368.77 280.69 373.28\r
  Q 279.81 375.90 279.75 378.75\r
  Q 279.72 380.05 277.89 384.58\r
  Q 277.39 385.80 276.76 388.67\r
  Q 276.39 390.37 275.56 392.81\r
  Q 275.15 394.02 274.60 397.92\r
  Q 274.24 400.44 273.51 403.00\r
  Q 271.89 408.71 270.25 416.50\r
  Q 268.92 422.81 266.12 433.02\r
  Q 265.50 435.25 265.11 437.51\r
  Q 264.85 439.04 264.58 440.55\r
  Q 264.36 441.78 263.85 443.53\r
  Q 262.79 447.19 261.69 453.19\r
  Q 258.20 472.23 251.65 494.77\r
  Q 251.07 496.75 249.45 499.22\r
  Q 246.05 504.39 245.62 510.76\r
  Q 245.32 515.22 244.17 511.78\r
  Q 244.00 511.29 243.94 510.69\r
  Q 243.19 503.78 242.36 496.88\r
  Q 242.06 494.40 240.30 483.16\r
  Q 238.98 474.70 238.75 467.75\r
  Q 238.62 463.80 238.28 460.89\r
  Q 237.73 456.07 237.67 454.06\r
  Q 237.22 438.53 235.25 420.00\r
  Q 234.91 416.78 234.51 414.44\r
  Q 233.90 410.91 233.79 408.89\r
  Q 233.02 395.34 232.25 391.00\r
  Q 231.07 384.35 230.44 377.63\r
  Q 229.85 371.28 229.01 365.94\r
  Q 228.41 362.06 227.94 358.17\r
  Q 227.37 353.44 226.38 350.49\r
  Q 223.48 341.87 217.98 334.53\r
  Q 216.60 332.69 214.71 331.50\r
  Q 213.67 330.85 210.78 329.51\r
  Q 201.52 325.25 191.41 327.37\r
  Q 189.74 327.72 188.16 329.10\r
  Q 186.03 330.94 184.94 331.19\r
  Q 182.86 331.65 181.59 333.22\r
  Q 180.21 334.93 180.12 335.01\r
  Q 176.76 338.51 175.06 341.81\r
  Q 172.58 346.63 171.17 352.74\r
  Q 170.54 355.51 169.18 359.99\r
  Q 168.09 363.61 167.70 367.40\r
  Q 167.41 370.19 166.57 372.96\r
  Q 165.74 375.70 165.34 378.55\r
  Q 164.86 381.86 163.71 383.19\r
  Q 161.56 385.68 158.19 384.91\r
  Q 155.28 384.25 154.19 384.25\r
  Q 142.58 384.26 130.98 383.95\r
  Q 122.81 383.73 114.41 383.90\r
  Q 106.12 384.07 97.83 384.05\r
  Q 92.85 384.04 83.18 384.30\r
  Q 75.84 384.49 68.51 384.27\r
  A 1.67 1.25 -18.0 0 1 67.60 383.96\r
  Q 65.78 382.45 65.75 379.25\r
  Q 65.66 370.14 63.45 358.12\r
  Q 62.86 354.90 62.92 350.81\r
  Q 62.97 347.47 62.75 342.75\r
  Q 62.51 337.53 62.91 315.31\r
  Q 62.99 311.09 63.98 305.78\r
  Q 65.04 300.15 65.57 294.45\r
  Q 65.73 292.67 66.75 290.29\r
  Q 67.67 288.13 67.92 285.79\r
  Q 68.26 282.57 68.61 281.28\r
  Q 70.01 276.19 71.39 271.09\r
  Q 73.00 265.11 74.40 260.99\r
  Q 84.18 232.25 99.56 209.06\r
  Q 107.54 197.03 120.81 183.56\r
  Q 131.52 172.69 146.60 160.58\r
  Q 166.94 144.26 190.97 134.58\r
  Q 198.19 131.68 205.63 128.98\r
  Q 214.72 125.67 220.75 124.75\r
  Q 227.40 123.73 229.75 123.00\r
  Q 234.33 121.58 251.25 120.00\r
  Q 254.84 119.67 267.12 119.96\r
  Q 275.93 120.17 282.89 121.45\r
  Q 302.02 124.95 317.19 132.06\r
  Q 333.32 139.62 336.06 141.19\r
  Q 338.21 142.42 346.86 148.37\r
  Q 352.57 152.31 357.19 156.20\r
  Q 370.88 167.76 383.31 180.69\r
  Z`}),g.jsx("path",{fill:"#61e413",d:`\r
  M 190.57 397.10\r
  Q 195.64 402.05 195.23 408.82\r
  Q 195.23 408.97 195.28 412.04\r
  Q 195.32 413.79 194.50 415.75\r
  Q 190.38 425.62 182.94 432.00\r
  Q 182.43 432.43 183.05 432.32\r
  Q 183.88 432.18 185.24 431.11\r
  Q 186.33 430.25 185.40 431.27\r
  L 183.65 433.21\r
  Q 183.11 433.80 183.04 433.96\r
  Q 180.46 439.33 174.78 440.32\r
  Q 174.50 440.37 171.78 440.95\r
  Q 170.35 441.25 168.90 441.06\r
  Q 166.51 440.73 166.08 440.71\r
  Q 157.74 440.36 150.28 436.98\r
  Q 145.60 434.86 142.51 431.43\r
  Q 139.25 427.79 137.23 423.23\r
  Q 135.12 418.47 135.50 413.25\r
  A 1.45 1.10 79.3 0 1 136.00 412.25\r
  Q 136.87 411.63 135.00 410.99\r
  Q 134.23 410.72 135.05 410.71\r
  L 145.25 410.54\r
  Q 146.98 410.90 148.75 410.71\r
  Q 151.27 410.45 153.51 411.30\r
  Q 155.08 411.89 156.50 413.82\r
  Q 157.30 414.91 158.12 415.99\r
  Q 158.48 416.47 159.58 418.25\r
  Q 161.26 420.99 164.56 423.19\r
  Q 169.08 426.20 173.87 426.09\r
  Q 176.61 426.03 179.13 424.07\r
  Q 181.42 422.28 183.36 420.07\r
  A 1.30 1.14 66.4 0 0 183.64 419.19\r
  Q 183.53 417.53 184.12 416.02\r
  A 1.31 1.00 -6.8 0 1 184.78 415.38\r
  Q 186.27 414.73 186.69 413.44\r
  Q 187.08 412.23 187.53 408.69\r
  Q 187.80 406.54 188.69 404.07\r
  Q 189.88 400.78 190.57 397.10\r
  Z`})]}),W9=()=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#5DDB13",className:"w-20 h-20 ",viewBox:"0 0 16 16",children:g.jsx("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})}),H9=()=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#5DDB13",className:"w-20 h-20 ",viewBox:"0 0 16 16",children:g.jsx("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"})}),G9=({svg:t,title:e,text:n})=>g.jsxs("div",{className:"flex flex-col my-2 p-5 border-2 border-gray-200 dark:border-slate-700 rounded-2xl  dark:bg-gray-800  transform  duration-300 hover:scale-105 lg:m-4 shadow-md",children:[g.jsx("div",{className:"flex justify-center m-5",children:t}),g.jsx("div",{className:"flex justify-center place-content-center text-center m-5 font-bold text-3xl text-verde",children:g.jsx("h1",{children:e})}),g.jsx("div",{className:"grid leading-5  justify-center text-center font-normal  m-6",children:g.jsx("p",{children:n})})]}),K9=()=>{let t=[{svg:g.jsx(_2,{}),title:"Medición BPM",text:"En Healthert ofrecemos la posibilidad de cuidar a tu paciente desde la comodidad de la palma de tu mano, podrás saber sus signos vitales en cualquier momento, así como poder generar un resumen de los mismos."},{svg:g.jsx(W9,{}),title:"Ubicación en TR",text:"En Healthert nos preocupamos por el bienestar de nuestros usuarios, por ello brindamos la oportunidad de saber en donde se encuentran, en todo momento, en cualquier lugar. Permite que te facilitemos el mejor cuidado remoto posible y nos esforcemos por cumplir y superar tus expectativas."},{svg:g.jsx(H9,{}),title:"Ver más",text:"Te invitamos a ver aún más de nuestros servicios y funciones dentro de nuestra aplicación móvil."}];const[e,n]=R.useState(t);return g.jsx("div",{className:"flex justify-center dark:bg-slate-900 px-6 md:px-12",children:g.jsx("div",{className:"grid grid-cols-1 gap-1 place-content-center lg:grid-cols-3 max-w-screen-xl",children:e.map(r=>g.jsx(G9,{svg:r.svg,title:r.title,text:r.text},r.title))})})},q9=({item:t,index:e,activeIndex:n,onClick:r})=>g.jsx("h2",{id:`accordion-color-heading-${e}`,className:`${e===n?"text-moradoOscuro dark:text-white":"text-verde"}`,children:g.jsxs("button",{type:"button",className:` transition-all flex items-center justify-between w-full p-5  \r
                    text-3xl text-left font-bold font-roboto\r
                    border border-b border-verde rounded-lg\r
                    \r
                    hover:bg-gray-100 \r
                    dark:bg-gray-800\r
                    dark:border-slate-700\r
                    dark:hover:bg-gray-700 duration-300`,onClick:()=>r(e),children:[g.jsx("span",{children:t.titulo}),g.jsx("svg",{"data-accordion-icon":!0,className:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5 5 1 1 5"})})]})}),Y9=({item:t,index:e,activeIndex:n})=>g.jsx("div",{id:`accordion-color-${e}`,"data-accordion":"collapse",className:`overflow-hidden transition-all duration-300 ${e===n?"max-h-[28rem]":"max-h-0"}`,children:g.jsxs("div",{className:`p-5
                    border-verde border-l rounded-lg border-2
                    dark:border-slate-700 
                    dark:bg-slate-900
                    text-morado ${e===n?"opacity-100":"opacity-70"}`,children:[g.jsx("p",{className:"mb-2 text-gray-400 dark:text-white font-roboto",children:t.contenido}),g.jsx("img",{src:t.img,className:"mx-auto max-w-xs h- md:max-w-sm md:h-auto lg:max-w-md lg:h-auto xl:max-w-lg xl:h-auto rounded-lg shadow-xl",alt:`Imagen para ${t.titulo}`})]})},e),X9=({items:t})=>{const[e,n]=R.useState(null),r=i=>{n(i===e?null:i)};return g.jsx("div",{className:"flex flex-col items-center max-w-screen-xl",children:t.map((i,s)=>g.jsxs("div",{className:"w-full",children:[g.jsx(q9,{item:i,index:s,activeIndex:e,onClick:r}),g.jsx(Y9,{item:i,index:s,activeIndex:e})]},s))})},J9=({planes:t})=>g.jsx("div",{className:"mx-auto flex flex-col items-center md:items-stretch md:flex-row justify-center lg:space-x-12 md:space-x-9 md:space-y-0 space-y-8",children:g.jsx("div",{className:"mx-auto flex flex-col items-center md:items-stretch md:flex-row justify-center lg:space-x-12 md:space-x-9 md:space-y-0 space-y-8",children:t.map((e,n)=>g.jsxs("div",{className:"w-full max-w-md p-4 g-white border border-gray-200 rounded-2xl bg-white shadow-md md:p-8 dark:bg-gray-800 dark:border-slate-700 transition-transform hover:scale-105 duration-300",children:[g.jsxs("h5",{className:"mb-4 text-xl  font-bold text-center",children:[e.titulo," "]}),g.jsxs("div",{className:"flex items-baseline justify-center",children:[g.jsx("span",{className:"text-3xl font-semibold text-verde dark:text-verde",children:"$"}),g.jsx("span",{className:"text-5xl font-extrabold tracking-tight text-verde dark:text-verde",children:e.precio}),g.jsx("span",{className:"ml-1 text-xl font-bold ",children:e.periodo})]}),g.jsx("ul",{role:"list",className:"space-y-5 my-7",children:e.caracteristicas.map((r,i)=>g.jsxs("li",{className:"flex space-x-3 items-center  font-bold leading-tight text-center",children:[g.jsx("svg",{className:"flex-shrink-0 w-4 h-4 text-verde dark:text-morado","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:g.jsx("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"})}),g.jsx("span",{className:"text-start",children:r})]},i))}),g.jsx("div",{className:"flex justify-center"})]},n))})}),Z9=()=>g.jsx("div",{id:"detailed-pricing",className:"w-full overflow-x-auto font-roboto inline-block max-w-screen-xl",children:g.jsxs("div",{className:"overflow-hidden min-w-max w-full ",children:[g.jsxs("div",{className:"grid grid-cols-3 p-4 text-sm font-medium bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-900 dark:border-white",children:[g.jsx("div",{className:"text-verde dark:text-gray-100 text-2xl flex items-center justify-center font-roboto font-bold font-m ",children:"Características"}),g.jsx("div",{className:"text-verde dark:text-gray-100  text-2xl flex items-center justify-center font-roboto font-bold font-m ",children:"Plan Personal"}),g.jsx("div",{className:"text-verde dark:text-gray-100 text-2xl flex items-center justify-center font-roboto font-bold font-m ",children:"Plan Institucional"})]}),g.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 dark:bg-gray-800 text-ml  border-b border-gray-200 gap-x-16 dark:border-white",children:[g.jsx("div",{className:"font-bold",children:"Monitoreo en tiempo real"}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),g.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 dark:bg-gray-800 text-ml  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[g.jsx("div",{className:"  font-bold",children:"Estudios del paciente alcance"}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-red-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),g.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 dark:bg-gray-800 text-ml  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[g.jsx("div",{className:"  font-bold",children:"Gestión de pacientes dentro de edificios"}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-red-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),g.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 dark:bg-gray-800 text-ml  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[g.jsx("div",{className:"  font-bold",children:"Reporte del estado del paciente"}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),g.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 text-ml dark:bg-gray-800  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[g.jsx("div",{className:"  font-bold",children:"Multi-usuario por pantalla"}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-red-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})})]}),g.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 text-ml dark:bg-gray-800  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[g.jsx("div",{className:"  font-bold",children:"Soporte para muchos pacientes"}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-red-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),g.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 text-ml dark:bg-gray-800  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[g.jsx("div",{className:"  font-bold",children:"Agenda de medicamentos"}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),g.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 text-ml dark:bg-gray-800  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[g.jsx("div",{className:"  font-bold",children:"Generación de gráficas"}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),g.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 text-ml dark:bg-gray-800  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[g.jsx("div",{className:"  font-bold",children:"¡Multi-usuario en una sola pantalla!"}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-red-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})}),g.jsx("div",{children:g.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:g.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]})]})}),w2="/healthert-web/assets/logo-205d25d4.png",qh="/healthert-web/assets/mirando_app-a2ca52cc.png",e7="/healthert-web/assets/medicos_image-a16b376e.png",t7=()=>{const t=[{titulo:"Plan Público",contenido:"¡Obten la capacidad de monitorear, cuidar y recibir alertas de una persona en tiempo real! . Con este plan podrás acceder a funciones como: Monitoreo de ritmo cardiaco y ubicación geográfica, gráficas sobre el comportamiento del paciente y más! .",img:qh},{titulo:"Plan Privado",contenido:"Servicio dirigido a instituciones de salud para aprovecharlo al máximo. Enfocado en las y los enfermeros, brindamos la capacidad de monitorear varios pacientes a la vez, vista por pisos y más datos específicos para apoyar en el cuidado especializado.",img:e7}],e=[{titulo:"Plan Público",precio:100,periodo:"/mes",caracteristicas:["Cuida a tus seres queridos","Agrega más de un paciente por suscripción","Monitorea de uno en uno","Ideal para un cuidado personal","Cuidado desde la palma de tu mano"]},{titulo:"Plan Privado",precio:[1e3],periodo:"/anual",caracteristicas:["Cuidado más cercano","Enfocado en mejorar labores de cuidado","Ideal para hospitales","Ideal para empresas de enfermería privada","Soporte para monitoreo en simultáneo"]}];return g.jsx(g.Fragment,{children:g.jsxs("div",{className:"px-6 md:px-12",children:[g.jsxs("div",{className:"text-moradoOscuro dark:text-white font-roboto font-bold text-5xl text-center py-5",children:[g.jsx("div",{className:"mx-auto max-w-md p-5",children:g.jsx("img",{src:w2,alt:"Logo corazón",className:"w-20 h-20 mx-auto"})}),g.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-5xl",children:"NUESTROS PLANES"})]}),g.jsx("p",{className:"text-gray-400 dark:text-verde text-xl md:text-1xl sm:text-2xl text-center font-roboto font-bold py-5",children:"Manejamos distintos planes para cada tipo de usuario"}),g.jsx("div",{className:" ",children:g.jsx("div",{className:"flex justify-center ",children:g.jsx(Z9,{})})}),g.jsx("h2",{className:"text-moradoOscuro dark:text-white md:text-4xl text-2xl font-roboto font-bold text-center py-5",children:"DESCRIPCIÓN DE LOS PLANES "}),g.jsx("div",{className:"flex justify-center ",children:g.jsx("div",{className:"",children:g.jsx(X9,{items:t})})}),g.jsxs("div",{className:"",children:[g.jsx("h2",{className:"font-roboto font-bold md:text-4xl text-2xl text-center py-5 text-moradoOscuro dark:text-white",children:"PRECIOS "}),g.jsx(J9,{planes:e})]})]})})},n7="/healthert-web/assets/regPac2-0845e096.png",r7="/healthert-web/assets/pulso-09adb9db.png",i7="/healthert-web/assets/recibeAlerta-4a33decc.png",s7="/healthert-web/assets/agendar-596bc736.png",o7="/healthert-web/assets/fichame-515f2594.png",l7="/healthert-web/assets/reporte-d9e21d85.png",a7="/healthert-web/assets/grafica-2e1976b5.png",u7="/healthert-web/assets/QR-eeef2825.png",c7="/healthert-web/assets/gestpaci-3235c12b.png",h7="/healthert-web/assets/multiuser-32cd4174.png",d7="/healthert-web/assets/enfermera-01b35016.png",f7="/healthert-web/assets/aleremota-5bac1c4a.png",p7="/healthert-web/assets/plan-65ac6b49.png",m7=({funcData:t})=>g.jsx("div",{className:"grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-4 place-content-center w-full max-w-screen-xl px-6 md:px-12",children:t.map((e,n)=>g.jsxs("div",{className:`max-w-md bg-white \r
              border border-gray-200 rounded-2xl dark:border-slate-700\r
              shadow-md \r
              dark:bg-gray-800\r
              transform  duration-700\r
              hover:scale-105 lg:m-4`,children:[g.jsx("img",{className:"rounded-t-2xl",src:e.img,alt:""}),g.jsxs("div",{className:"p-4 md:p-5",children:[g.jsx("h5",{className:`mb-2 text-xl \r
            md:text-2xl \r
            lg:text-3xl \r
            font-bold \r
            tracking-tight\r
          text-verde\r
          dark:text-gray-100\r
          dark:hover:text-moradoOscuro\r
          hover:text-moradoOscuro duration-300`,children:e.nombre}),g.jsx("p",{className:`mb-2 \r
            lg:text-lg`,children:e.descripcion})]})]},n))}),g7=[{nombre:"Registro de pacientes",descripcion:"Registra en el sistema a las personas que deseés cuidar, ingresa su ficha médica y tus datos personales.",img:n7},{nombre:"Recibe una alerta",descripcion:"El sistema puede captar alertas manuales o automáticas, al recibirlas y acceder a ellas, podrás ver la ubicación de la persona en riesgo dentro de google maps.",img:i7},{nombre:"Alerta remota",descripcion:"Según el usuario, puede enviar o recibir alertas en tiempo real. El paciente puede generar una alerta manualmente o el sistema generará una según sus signos vitales.",img:f7},{nombre:"Monitoreo de pulsos por minuto",descripcion:"¡Nuestro sistema en conjunto de un SmartWatch es capaz de mostrarte los pulsos por minuto en tiempo real!.",img:r7},{nombre:"Geolocalización",descripcion:"El sistema es capaz de mostrarte la ubicación en tiempo real de tu paciente, en cualquier lugar, en cualquier momento.",img:qh},{nombre:"Agenda de medicamentos",descripcion:"Puedes programar la toma de medicamentos de tu paciente, es decir, definir el medicamento, cantidad, intervalo de tiempo, inicio y hora de toma.",img:s7},{nombre:"Ficha médica",descripcion:"Ingresa una ficha médica de tu paciente, esta contendrá datos como: Nombre, tipo sanguineo, NSS, CURP, alergias, padecimientos, entre otros datos relevantes.",img:o7},{nombre:"Reportes",descripcion:"El sistema es capaz de generar reportes que recopilan los medicamentos agendados, las alertas y su tipo, adempas del pulso cardiaco, esto durante todo el mes.",img:l7},{nombre:"Gráficas",descripcion:"Además de poder observar el ritmo cardiaco, puedes visualizar una gráfica a base del promedio del pulso cardiaco. ",img:a7},{nombre:"Acceso a la ficha médica",descripcion:"Puedes scannear un código QR que el sistema generará para ti, por medio del mismo podrás descargar la ficha médica de tu paciente.",img:u7},{nombre:"Gestiona pacientes",descripcion:"En caso de ser necesario, podrás editar los datos del paciente, nombre, ficha médica, fotografía. Vincula y desvincula pacientes.",img:c7},{nombre:"Varios a la vez",descripcion:"¡Visualiza la ubicación y el pulso en una sola pantalla!, esta función dependerá del tipo de plan que esté relacionado a tu cuenta.",img:h7},{nombre:"Secciona a tus pacientes",descripcion:"¿Monitorear dentro de un edificio?, puedes hacerlo, el sistema te mostrará en que piso se encuentra tu paciente.",img:qh},{nombre:"Datos especializados",descripcion:"Carga y visualiza información de tu paciente además de la ficha médica. Estudios, recetas, tratamientos.",img:d7},{nombre:"¿Qué funciones tengo?",descripcion:"Según tu plan, las funciones cambiarán. Visita el apartado de planes.",img:p7}],v7=()=>g.jsx("div",{className:"flex justify-center dark:bg-slate-900 ",children:g.jsxs("div",{className:" text-moradoOscuro dark:text-gray-100",children:[g.jsxs("div",{className:"text-5xl text-center py-5",children:[g.jsx("div",{className:"mx-auto max-w-screen-xl p-5",children:g.jsx("img",{src:w2,alt:"Logo corazón",className:"w-20 h-20 mx-auto"})}),g.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold",children:"FUNCIONES"})]}),g.jsx("p",{className:"text-gray-400 dark:text-verde text-xl md:text-2xl sm:text-2xl text-center font-bold py-5",children:"Aprovecha al máximo las funciones de Healthert "}),g.jsx("div",{className:"my-9",children:g.jsx(m7,{funcData:g7})})]})});/**
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
 */const E2={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const A=function(t,e){if(!t)throw ds(e)},ds=function(t){return new Error("Firebase Database ("+E2.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const C2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},y7=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,h=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(d=64)),r.push(n[c],n[h],n[d],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(C2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):y7(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||h==null)throw new _7;const d=s<<2|l>>4;if(r.push(d),u!==64){const _=l<<4&240|u>>2;if(r.push(_),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _7 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const S2=function(t){const e=C2(t);return xf.encodeByteArray(e,!0)},Da=function(t){return S2(t).replace(/\./g,"")},Oa=function(t){try{return xf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function w7(t){return T2(void 0,t)}function T2(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!E7(n)||(t[n]=T2(t[n],e[n]));return t}function E7(t){return t!=="__proto__"}/**
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
 */function C7(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const S7=()=>C7().__FIREBASE_DEFAULTS__,T7=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},I7=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oa(t[1]);return e&&JSON.parse(e)},kf=()=>{try{return S7()||T7()||I7()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},I2=t=>{var e,n;return(n=(e=kf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},x2=t=>{const e=I2(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},k2=()=>{var t;return(t=kf())===null||t===void 0?void 0:t.config},R2=t=>{var e;return(e=kf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Rf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function N2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Da(JSON.stringify(n)),Da(JSON.stringify(o)),l].join(".")}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function x7(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function A2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function k7(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function P2(){return E2.NODE_ADMIN===!0}function R7(){try{return typeof indexedDB=="object"}catch{return!1}}function N7(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const A7="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=A7,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?P7(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Un(i,l,r)}}function P7(t,e){return t.replace(L7,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const L7=/\{\$([^}]+)}/g;/**
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
 */function Po(t){return JSON.parse(t)}function Ke(t){return JSON.stringify(t)}/**
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
 */const L2=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Po(Oa(s[0])||""),n=Po(Oa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},D7=function(t){const e=L2(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},O7=function(t){const e=L2(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function $n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ns(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Yh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ma(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Qa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(w0(s)&&w0(o)){if(!Qa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function w0(t){return t!==null&&typeof t=="object"}/**
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
 */function fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class M7{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):h<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const d=(i<<5|i>>>27)+u+a+c+r[h]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Q7(t,e){const n=new b7(t,e);return n.subscribe.bind(n)}class b7{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");j7(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Lc),i.error===void 0&&(i.error=Lc),i.complete===void 0&&(i.complete=Lc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j7(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lc(){}function F7(t,e){return`${t} failed: ${e} argument `}/**
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
 */const U7=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,A(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Iu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function zn(t){return t&&t._delegate?t._delegate:t}class _r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dr="[DEFAULT]";/**
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
 */class $7{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Rf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(B7(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:z7(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function z7(t){return t===Dr?void 0:t}function B7(t){return t.instantiationMode==="EAGER"}/**
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
 */class V7{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $7(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const W7={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},H7=te.INFO,G7={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},K7=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=G7[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xu{constructor(e){this.name=e,this._logLevel=H7,this._logHandler=K7,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?W7[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const q7=(t,e)=>e.some(n=>t instanceof n);let E0,C0;function Y7(){return E0||(E0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function X7(){return C0||(C0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D2=new WeakMap,Xh=new WeakMap,O2=new WeakMap,Dc=new WeakMap,Af=new WeakMap;function J7(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&D2.set(n,t)}).catch(()=>{}),Af.set(e,t),e}function Z7(t){if(Xh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xh.set(t,e)}let Jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||O2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function e8(t){Jh=t(Jh)}function t8(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oc(this),e,...n);return O2.set(r,e.sort?e.sort():[e]),pr(r)}:X7().includes(t)?function(...e){return t.apply(Oc(this),e),pr(D2.get(this))}:function(...e){return pr(t.apply(Oc(this),e))}}function n8(t){return typeof t=="function"?t8(t):(t instanceof IDBTransaction&&Z7(t),q7(t,Y7())?new Proxy(t,Jh):t)}function pr(t){if(t instanceof IDBRequest)return J7(t);if(Dc.has(t))return Dc.get(t);const e=n8(t);return e!==t&&(Dc.set(t,e),Af.set(e,t)),e}const Oc=t=>Af.get(t);function r8(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(pr(o.result),a.oldVersion,a.newVersion,pr(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const i8=["get","getKey","getAll","getAllKeys","count"],s8=["put","add","delete","clear"],Mc=new Map;function S0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=s8.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||i8.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Mc.set(e,s),s}e8(t=>({...t,get:(e,n,r)=>S0(e,n)||t.get(e,n,r),has:(e,n)=>!!S0(e,n)||t.has(e,n)}));/**
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
 */class o8{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(l8(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function l8(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zh="@firebase/app",T0="0.9.19";/**
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
 */const ti=new xu("@firebase/app"),a8="@firebase/app-compat",u8="@firebase/analytics-compat",c8="@firebase/analytics",h8="@firebase/app-check-compat",d8="@firebase/app-check",f8="@firebase/auth",p8="@firebase/auth-compat",m8="@firebase/database",g8="@firebase/database-compat",v8="@firebase/functions",y8="@firebase/functions-compat",_8="@firebase/installations",w8="@firebase/installations-compat",E8="@firebase/messaging",C8="@firebase/messaging-compat",S8="@firebase/performance",T8="@firebase/performance-compat",I8="@firebase/remote-config",x8="@firebase/remote-config-compat",k8="@firebase/storage",R8="@firebase/storage-compat",N8="@firebase/firestore",A8="@firebase/firestore-compat",P8="firebase",L8="10.4.0";/**
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
 */const ed="[DEFAULT]",D8={[Zh]:"fire-core",[a8]:"fire-core-compat",[c8]:"fire-analytics",[u8]:"fire-analytics-compat",[d8]:"fire-app-check",[h8]:"fire-app-check-compat",[f8]:"fire-auth",[p8]:"fire-auth-compat",[m8]:"fire-rtdb",[g8]:"fire-rtdb-compat",[v8]:"fire-fn",[y8]:"fire-fn-compat",[_8]:"fire-iid",[w8]:"fire-iid-compat",[E8]:"fire-fcm",[C8]:"fire-fcm-compat",[S8]:"fire-perf",[T8]:"fire-perf-compat",[I8]:"fire-rc",[x8]:"fire-rc-compat",[k8]:"fire-gcs",[R8]:"fire-gcs-compat",[N8]:"fire-fst",[A8]:"fire-fst-compat","fire-js":"fire-js",[P8]:"fire-js-all"};/**
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
 */const ba=new Map,td=new Map;function O8(t,e){try{t.container.addComponent(e)}catch(n){ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(td.has(e))return ti.debug(`There were multiple attempts to register component ${e}.`),!1;td.set(e,t);for(const n of ba.values())O8(n,t);return!0}function ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const M8={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mr=new Zo("app","Firebase",M8);/**
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
 */class Q8{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
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
 */const ci=L8;function M2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ed,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mr.create("bad-app-name",{appName:String(i)});if(n||(n=k2()),!n)throw mr.create("no-options");const s=ba.get(i);if(s){if(Qa(n,s.options)&&Qa(r,s.config))return s;throw mr.create("duplicate-app",{appName:i})}const o=new V7(i);for(const a of td.values())o.addComponent(a);const l=new Q8(n,r,o);return ba.set(i,l),l}function Pf(t=ed){const e=ba.get(t);if(!e&&t===ed&&k2())return M2();if(!e)throw mr.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let i=(r=D8[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ti.warn(l.join(" "));return}ni(new _r(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const b8="firebase-heartbeat-database",j8=1,Lo="firebase-heartbeat-store";let Qc=null;function Q2(){return Qc||(Qc=r8(b8,j8,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Lo)}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),Qc}async function F8(t){try{return await(await Q2()).transaction(Lo).objectStore(Lo).get(b2(t))}catch(e){if(e instanceof Un)ti.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ti.warn(n.message)}}}async function I0(t,e){try{const r=(await Q2()).transaction(Lo,"readwrite");await r.objectStore(Lo).put(e,b2(t)),await r.done}catch(n){if(n instanceof Un)ti.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ti.warn(r.message)}}}function b2(t){return`${t.name}!${t.options.appId}`}/**
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
 */const U8=1024,$8=30*24*60*60*1e3;class z8{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new V8(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=x0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=$8}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=x0(),{heartbeatsToSend:n,unsentEntries:r}=B8(this._heartbeatsCache.heartbeats),i=Da(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function x0(){return new Date().toISOString().substring(0,10)}function B8(t,e=U8){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),k0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),k0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class V8{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return R7()?N7().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await F8(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return I0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return I0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function k0(t){return Da(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function W8(t){ni(new _r("platform-logger",e=>new o8(e),"PRIVATE")),ni(new _r("heartbeat",e=>new z8(e),"PRIVATE")),dn(Zh,T0,t),dn(Zh,T0,"esm2017"),dn("fire-js","")}W8("");function Lf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function j2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const H8=j2,F2=new Zo("auth","Firebase",j2());/**
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
 */const ja=new xu("@firebase/auth");function G8(t,...e){ja.logLevel<=te.WARN&&ja.warn(`Auth (${ci}): ${t}`,...e)}function ra(t,...e){ja.logLevel<=te.ERROR&&ja.error(`Auth (${ci}): ${t}`,...e)}/**
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
 */function On(t,...e){throw Df(t,...e)}function fn(t,...e){return Df(t,...e)}function K8(t,e,n){const r=Object.assign(Object.assign({},H8()),{[e]:n});return new Zo("auth","Firebase",r).create(e,{appName:t.name})}function Df(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return F2.create(t,...e)}function W(t,e,...n){if(!t)throw Df(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ra(e),new Error(e)}function Mn(t,e){t||Sn(e)}/**
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
 */function nd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function q8(){return R0()==="http:"||R0()==="https:"}function R0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Y8(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q8()||x7()||"connection"in navigator)?navigator.onLine:!0}function X8(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class el{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=Nf()||A2()}get(){return Y8()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Of(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class U2{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const J8={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Z8=new el(3e4,6e4);function $2(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tl(t,e,n,r,i={}){return z2(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=fs(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),U2.fetch()(B2(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function z2(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},J8),e);try{const i=new tw(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw jl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw jl(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw jl(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw jl(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw K8(t,c,u);On(t,c)}}catch(i){if(i instanceof Un)throw i;On(t,"network-request-failed",{message:String(i)})}}async function ew(t,e,n,r,i={}){const s=await tl(t,e,n,r,i);return"mfaPendingCredential"in s&&On(t,"multi-factor-auth-required",{_serverResponse:s}),s}function B2(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Of(t.config,i):`${t.config.apiScheme}://${i}`}class tw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),Z8.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function nw(t,e){return tl(t,"POST","/v1/accounts:delete",e)}async function rw(t,e){return tl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iw(t,e=!1){const n=zn(t),r=await n.getIdToken(e),i=Mf(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:oo(bc(i.auth_time)),issuedAtTime:oo(bc(i.iat)),expirationTime:oo(bc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bc(t){return Number(t)*1e3}function Mf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ra("JWT malformed, contained fewer than 3 sections"),null;try{const i=Oa(n);return i?JSON.parse(i):(ra("Failed to decode base64 JWT payload"),null)}catch(i){return ra("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sw(t){const e=Mf(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Do(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&ow(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ow({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class V2{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oo(this.lastLoginAt),this.creationTime=oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Do(t,rw(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cw(s.providerUserInfo):[],l=uw(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new V2(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function aw(t){const e=zn(t);await Fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uw(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cw(t){return t.map(e=>{var{providerId:n}=e,r=Lf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hw(t,e){const n=await z2(t,{},async()=>{const r=fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=B2(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",U2.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hw(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Oo;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oo,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function Kn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new V2(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Do(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iw(this,e)}reload(){return aw(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Do(this,nw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:f,isAnonymous:S,providerData:N,stsTokenManager:I}=n;W(v&&I,e,"internal-error");const L=Oo.fromJSON(this.name,I);W(typeof v=="string",e,"internal-error"),Kn(h,e.name),Kn(d,e.name),W(typeof f=="boolean",e,"internal-error"),W(typeof S=="boolean",e,"internal-error"),Kn(_,e.name),Kn(y,e.name),Kn(E,e.name),Kn(x,e.name),Kn(m,e.name),Kn(p,e.name);const z=new Wr({uid:v,auth:e,email:d,emailVerified:f,displayName:h,isAnonymous:S,photoURL:y,phoneNumber:_,tenantId:E,stsTokenManager:L,createdAt:m,lastLoginAt:p});return N&&Array.isArray(N)&&(z.providerData=N.map(Q=>Object.assign({},Q))),x&&(z._redirectEventId=x),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Oo;i.updateFromServerResponse(n);const s=new Wr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fa(s),s}}/**
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
 */const N0=new Map;function Tn(t){Mn(t instanceof Function,"Expected a class definition");let e=N0.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,N0.set(t,e),e)}/**
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
 */class W2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}W2.type="NONE";const A0=W2;/**
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
 */function ia(t,e,n){return`firebase:${t}:${e}:${n}`}class $i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ia(this.userKey,i.apiKey,s),this.fullPersistenceKey=ia("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $i(Tn(A0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Tn(A0);const o=ia(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Wr._fromJSON(e,c);u!==s&&(l=h),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new $i(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new $i(s,e,r))}}/**
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
 */function P0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Y2(e))return"Blackberry";if(X2(e))return"Webos";if(Qf(e))return"Safari";if((e.includes("chrome/")||G2(e))&&!e.includes("edge/"))return"Chrome";if(q2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function H2(t=at()){return/firefox\//i.test(t)}function Qf(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G2(t=at()){return/crios\//i.test(t)}function K2(t=at()){return/iemobile/i.test(t)}function q2(t=at()){return/android/i.test(t)}function Y2(t=at()){return/blackberry/i.test(t)}function X2(t=at()){return/webos/i.test(t)}function Ru(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dw(t=at()){var e;return Ru(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fw(){return k7()&&document.documentMode===10}function J2(t=at()){return Ru(t)||q2(t)||X2(t)||Y2(t)||/windows phone/i.test(t)||K2(t)}function pw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Z2(t,e=[]){let n;switch(t){case"Browser":n=P0(at());break;case"Worker":n=`${P0(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${r}`}/**
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
 */class mw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gw(t,e={}){return tl(t,"GET","/v2/passwordPolicy",$2(t,e))}/**
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
 */const vw=6;class yw{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class _w{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new L0(this),this.idTokenSubscription=new L0(this),this.beforeStateQueue=new mw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=F2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $i.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X8()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?zn(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gw(this),n=new yw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await $i.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&G8(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bf(t){return zn(t)}class L0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Q7(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function ww(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ew(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ww().appendChild(r)})}function Cw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Sw(t,e){const n=ku(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qa(s,e??{}))return i;On(i,"already-initialized")}return n.initialize({options:e})}function Tw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Iw(t,e,n){const r=bf(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=e3(e),{host:o,port:l}=xw(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||kw()}function e3(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xw(t){const e=e3(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:D0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:D0(o)}}}function D0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class t3{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
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
 */async function zi(t,e){return ew(t,"POST","/v1/accounts:signInWithIdp",$2(t,e))}/**
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
 */const Rw="http://localhost";class ri extends t3{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Lf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ri(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:Rw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fs(n)}return e}}/**
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
 */class n3{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nl extends n3{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class er extends nl{constructor(){super("facebook.com")}static credential(e){return ri._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class tr extends nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ri._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
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
 */class nr extends nl{constructor(){super("github.com")}static credential(e){return ri._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */class rr extends nl{constructor(){super("twitter.com")}static credential(e,n){return ri._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Wr._fromIdTokenResponse(e,r,i),o=O0(r);return new rs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=O0(r);return new rs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function O0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ua extends Un{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ua.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ua(e,n,r,i)}}function r3(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ua._fromErrorAndOperation(t,s,e,r):s})}async function Nw(t,e,n=!1){const r=await Do(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rs._forOperation(t,"link",r)}/**
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
 */async function Aw(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Do(t,r3(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=Mf(s.idToken);W(o,r,"internal-error");const{sub:l}=o;return W(t.uid===l,r,"user-mismatch"),rs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&On(r,"user-mismatch"),s}}/**
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
 */async function Pw(t,e,n=!1){const r="signIn",i=await r3(t,r,e),s=await rs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Lw(t,e,n,r){return zn(t).onIdTokenChanged(e,n,r)}function Dw(t,e,n){return zn(t).beforeAuthStateChanged(e,n)}const $a="__sak";/**
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
 */class i3{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($a,"1"),this.storage.removeItem($a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ow(){const t=at();return Qf(t)||Ru(t)}const Mw=1e3,Qw=10;class s3 extends i3{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ow()&&pw(),this.fallbackToPolling=J2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Qw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}s3.type="LOCAL";const bw=s3;/**
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
 */class o3 extends i3{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}o3.type="SESSION";const l3=o3;/**
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
 */function jw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Nu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Nu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await jw(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nu.receivers=[];/**
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
 */function jf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Fw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=jf("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function Uw(t){pn().location.href=t}/**
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
 */function a3(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function $w(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bw(){return a3()?self:null}/**
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
 */const u3="firebaseLocalStorageDb",Vw=1,za="firebaseLocalStorage",c3="fbase_key";class rl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Au(t,e){return t.transaction([za],e?"readwrite":"readonly").objectStore(za)}function Ww(){const t=indexedDB.deleteDatabase(u3);return new rl(t).toPromise()}function rd(){const t=indexedDB.open(u3,Vw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(za,{keyPath:c3})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(za)?e(r):(r.close(),await Ww(),e(await rd()))})})}async function M0(t,e,n){const r=Au(t,!0).put({[c3]:e,value:n});return new rl(r).toPromise()}async function Hw(t,e){const n=Au(t,!1).get(e),r=await new rl(n).toPromise();return r===void 0?null:r.value}function Q0(t,e){const n=Au(t,!0).delete(e);return new rl(n).toPromise()}const Gw=800,Kw=3;class h3{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Kw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return a3()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nu._getInstance(Bw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $w(),!this.activeServiceWorker)return;this.sender=new Fw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rd();return await M0(e,$a,"1"),await Q0(e,$a),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>M0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Q0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Au(i,!1).getAll();return new rl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h3.type="LOCAL";const qw=h3;new el(3e4,6e4);/**
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
 */function Yw(t,e){return e?Tn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ff extends t3{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xw(t){return Pw(t.auth,new Ff(t),t.bypassAuthState)}function Jw(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Aw(n,new Ff(t),t.bypassAuthState)}async function Zw(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Nw(n,new Ff(t),t.bypassAuthState)}/**
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
 */class d3{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xw;case"linkViaPopup":case"linkViaRedirect":return Zw;case"reauthViaPopup":case"reauthViaRedirect":return Jw;default:On(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eE=new el(2e3,1e4);class Ai extends d3{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ai.currentPopupAction&&Ai.currentPopupAction.cancel(),Ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eE.get())};e()}}Ai.currentPopupAction=null;/**
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
 */const tE="pendingRedirect",sa=new Map;class nE extends d3{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sa.get(this.auth._key());if(!e){try{const r=await rE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sa.set(this.auth._key(),e)}return this.bypassAuthState||sa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rE(t,e){const n=oE(e),r=sE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iE(t,e){sa.set(t._key(),e)}function sE(t){return Tn(t._redirectPersistence)}function oE(t){return ia(tE,t.config.apiKey,t.name)}async function lE(t,e,n=!1){const r=bf(t),i=Yw(r,e),o=await new nE(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const aE=10*60*1e3;class uE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!f3(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aE&&this.cachedEventUids.clear(),this.cachedEventUids.has(b0(e))}saveEventToCache(e){this.cachedEventUids.add(b0(e)),this.lastProcessedEventTime=Date.now()}}function b0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function f3({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return f3(t);default:return!1}}/**
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
 */async function hE(t,e={}){return tl(t,"GET","/v1/projects",e)}/**
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
 */const dE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fE=/^https?/;async function pE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hE(t);for(const n of e)try{if(mE(n))return}catch{}On(t,"unauthorized-domain")}function mE(t){const e=nd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fE.test(n))return!1;if(dE.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gE=new el(3e4,6e4);function j0(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vE(t){return new Promise((e,n)=>{var r,i,s;function o(){j0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{j0(),n(fn(t,"network-request-failed"))},timeout:gE.get()})}if(!((i=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=pn().gapi)===null||s===void 0)&&s.load)o();else{const l=Cw("iframefcb");return pn()[l]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},Ew(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw oa=null,e})}let oa=null;function yE(t){return oa=oa||vE(t),oa}/**
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
 */const _E=new el(5e3,15e3),wE="__/auth/iframe",EE="emulator/auth/iframe",CE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TE(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Of(e,EE):`https://${t.config.authDomain}/${wE}`,r={apiKey:e.apiKey,appName:t.name,v:ci},i=SE.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fs(r).slice(1)}`}async function IE(t){const e=await yE(t),n=pn().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:TE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),l=pn().setTimeout(()=>{s(o)},_E.get());function a(){pn().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const xE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kE=500,RE=600,NE="_blank",AE="http://localhost";class F0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PE(t,e,n,r=kE,i=RE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},xE),{width:r.toString(),height:i.toString(),top:s,left:o}),u=at().toLowerCase();n&&(l=G2(u)?NE:n),H2(u)&&(e=e||AE,a.scrollbars="yes");const c=Object.entries(a).reduce((d,[_,y])=>`${d}${_}=${y},`,"");if(dw(u)&&l!=="_self")return LE(e||"",l),new F0(null);const h=window.open(e||"",l,c);W(h,t,"popup-blocked");try{h.focus()}catch{}return new F0(h)}function LE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DE="__/auth/handler",OE="emulator/auth/handler",ME=encodeURIComponent("fac");async function U0(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ci,eventId:i};if(e instanceof n3){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof nl){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${ME}=${encodeURIComponent(a)}`:"";return`${QE(t)}?${fs(l).slice(1)}${u}`}function QE({config:t}){return t.emulator?Of(t,OE):`https://${t.authDomain}/${DE}`}/**
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
 */const jc="webStorageSupport";class bE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=l3,this._completeRedirectFn=lE,this._overrideRedirectResult=iE}async _openPopup(e,n,r,i){var s;Mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await U0(e,n,r,nd(),i);return PE(e,o,jf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await U0(e,n,r,nd(),i);return Uw(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IE(e),r=new uE(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jc];o!==void 0&&n(!!o),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return J2()||Qf()||Ru()}}const jE=bE;var $0="@firebase/auth",z0="1.3.0";/**
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
 */class FE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $E(t){ni(new _r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z2(t)},u=new _w(r,i,s,a);return Tw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new _r("auth-internal",e=>{const n=bf(e.getProvider("auth").getImmediate());return(r=>new FE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn($0,z0,UE(t)),dn($0,z0,"esm2017")}/**
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
 */const zE=5*60,BE=R2("authIdTokenMaxAge")||zE;let B0=null;const VE=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BE)return;const i=n==null?void 0:n.token;B0!==i&&(B0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WE(t=Pf()){const e=ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Sw(t,{popupRedirectResolver:jE,persistence:[qw,bw,l3]}),r=R2("authTokenSyncURL");if(r){const s=VE(r);Dw(n,s,()=>s(n.currentUser)),Lw(n,o=>s(o))}const i=I2("auth");return i&&Iw(n,`http://${i}`),n}$E("Browser");var HE="firebase",GE="10.4.0";/**
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
 */dn(HE,GE,"app");var KE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Uf=Uf||{},V=KE||self;function Pu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function il(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function qE(t){return Object.prototype.hasOwnProperty.call(t,Fc)&&t[Fc]||(t[Fc]=++YE)}var Fc="closure_uid_"+(1e9*Math.random()>>>0),YE=0;function XE(t,e,n){return t.call.apply(t.bind,arguments)}function JE(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=XE:st=JE,st.apply(null,arguments)}function Fl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function We(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[i].apply(r,o)}}function Tr(){this.s=this.s,this.o=this.o}var ZE=0;Tr.prototype.s=!1;Tr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ZE!=0)&&qE(this)};Tr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const p3=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $f(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function V0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Pu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var eC=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",()=>{},e),V.removeEventListener("test",()=>{},e)}catch{}return t}();function Mo(t){return/^[\s\xa0]*$/.test(t)}function Lu(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function on(t){return Lu().indexOf(t)!=-1}function zf(t){return zf[" "](t),t}zf[" "]=function(){};function tC(t,e){var n=KC;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var nC=on("Opera"),Qo=on("Trident")||on("MSIE"),m3=on("Edge"),id=m3||Qo,g3=on("Gecko")&&!(Lu().toLowerCase().indexOf("webkit")!=-1&&!on("Edge"))&&!(on("Trident")||on("MSIE"))&&!on("Edge"),rC=Lu().toLowerCase().indexOf("webkit")!=-1&&!on("Edge");function v3(){var t=V.document;return t?t.documentMode:void 0}e:{var W0="",Uc=function(){var t=Lu();if(g3)return/rv:([^\);]+)(\)|;)/.exec(t);if(m3)return/Edge\/([\d\.]+)/.exec(t);if(Qo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(rC)return/WebKit\/(\S+)/.exec(t);if(nC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Uc&&(W0=Uc?Uc[1]:""),Qo){var H0=v3();if(H0!=null&&H0>parseFloat(W0))break e}}V.document&&Qo&&v3();function bo(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(g3){e:{try{zf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&bo.$.h.call(this)}}We(bo,ot);var iC={2:"touch",3:"pen",4:"mouse"};bo.prototype.h=function(){bo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var sl="closure_listenable_"+(1e6*Math.random()|0),sC=0;function oC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++sC,this.fa=this.ia=!1}function Du(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Bf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function lC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function y3(t){const e={};for(const n in t)e[n]=t[n];return e}const G0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _3(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<G0.length;s++)n=G0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ou(t){this.src=t,this.g={},this.h=0}Ou.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=od(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new oC(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function sd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=p3(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Du(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function od(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Vf="closure_lm_"+(1e6*Math.random()|0),$c={};function w3(t,e,n,r,i){if(r&&r.once)return C3(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)w3(t,e[s],n,r,i);return null}return n=Gf(n),t&&t[sl]?t.O(e,n,il(r)?!!r.capture:!!r,i):E3(t,e,n,!1,r,i)}function E3(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=il(i)?!!i.capture:!!i,l=Hf(t);if(l||(t[Vf]=l=new Ou(t)),n=l.add(e,n,r,o,s),n.proxy)return n;if(r=aC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)eC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(T3(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function aC(){function t(n){return e.call(t.src,t.listener,n)}const e=uC;return t}function C3(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)C3(t,e[s],n,r,i);return null}return n=Gf(n),t&&t[sl]?t.P(e,n,il(r)?!!r.capture:!!r,i):E3(t,e,n,!0,r,i)}function S3(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)S3(t,e[s],n,r,i);else r=il(r)?!!r.capture:!!r,n=Gf(n),t&&t[sl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=od(s,n,r,i),-1<n&&(Du(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=od(e,n,r,i)),(n=-1<t?e[t]:null)&&Wf(n))}function Wf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[sl])sd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(T3(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Hf(e))?(sd(n,t),n.h==0&&(n.src=null,e[Vf]=null)):Du(t)}}}function T3(t){return t in $c?$c[t]:$c[t]="on"+t}function uC(t,e){if(t.fa)t=!0;else{e=new bo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Wf(t),t=n.call(r,e)}return t}function Hf(t){return t=t[Vf],t instanceof Ou?t:null}var zc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gf(t){return typeof t=="function"?t:(t[zc]||(t[zc]=function(e){return t.handleEvent(e)}),t[zc])}function Ve(){Tr.call(this),this.i=new Ou(this),this.S=this,this.J=null}We(Ve,Tr);Ve.prototype[sl]=!0;Ve.prototype.removeEventListener=function(t,e,n,r){S3(this,t,e,n,r)};function Ye(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var i=e;e=new ot(r,t),_3(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ul(o,r,!0,e)&&i}if(o=e.g=t,i=Ul(o,r,!0,e)&&i,i=Ul(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ul(o,r,!1,e)&&i}Ve.prototype.N=function(){if(Ve.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Du(n[r]);delete t.g[e],t.h--}}this.J=null};Ve.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ve.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ul(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&sd(t.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var Kf=V.JSON.stringify;class cC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function hC(){var t=qf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class dC{constructor(){this.h=this.g=null}add(e,n){const r=I3.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var I3=new cC(()=>new fC,t=>t.reset());class fC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pC(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function mC(t){V.setTimeout(()=>{throw t},0)}let jo,Fo=!1,qf=new dC,x3=()=>{const t=V.Promise.resolve(void 0);jo=()=>{t.then(gC)}};var gC=()=>{for(var t;t=hC();){try{t.h.call(t.g)}catch(n){mC(n)}var e=I3;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fo=!1};function Mu(t,e){Ve.call(this),this.h=t||1,this.g=e||V,this.j=st(this.qb,this),this.l=Date.now()}We(Mu,Ve);P=Mu.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ye(this,"tick"),this.ga&&(Yf(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Mu.$.N.call(this),Yf(this),delete this.g};function Xf(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function k3(t){t.g=Xf(()=>{t.g=null,t.i&&(t.i=!1,k3(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class vC extends Tr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:k3(this)}N(){super.N(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Uo(t){Tr.call(this),this.h=t,this.g={}}We(Uo,Tr);var K0=[];function R3(t,e,n,r){Array.isArray(n)||(n&&(K0[0]=n.toString()),n=K0);for(var i=0;i<n.length;i++){var s=w3(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function N3(t){Bf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wf(e)},t),t.g={}}Uo.prototype.N=function(){Uo.$.N.call(this),N3(this)};Uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qu(){this.g=!0}Qu.prototype.Ea=function(){this.g=!1};function yC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function _C(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Pi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+EC(t,n)+(r?" "+r:"")})}function wC(t,e){t.info(function(){return"TIMEOUT: "+e})}Qu.prototype.info=function(){};function EC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kf(n)}catch{return e}}var ps={},q0=null;function Jf(){return q0=q0||new Ve}ps.Ta="serverreachability";function A3(t){ot.call(this,ps.Ta,t)}We(A3,ot);function $o(t){const e=Jf();Ye(e,new A3(e))}ps.STAT_EVENT="statevent";function P3(t,e){ot.call(this,ps.STAT_EVENT,t),this.stat=e}We(P3,ot);function dt(t){const e=Jf();Ye(e,new P3(e,t))}ps.Ua="timingevent";function L3(t,e){ot.call(this,ps.Ua,t),this.size=e}We(L3,ot);function ol(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var Zf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},CC={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ep(){}ep.prototype.h=null;function Y0(t){return t.h||(t.h=t.i())}function SC(){}var ll={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function tp(){ot.call(this,"d")}We(tp,ot);function np(){ot.call(this,"c")}We(np,ot);var ld;function bu(){}We(bu,ep);bu.prototype.g=function(){return new XMLHttpRequest};bu.prototype.i=function(){return{}};ld=new bu;function al(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Uo(this),this.P=TC,t=id?125:void 0,this.V=new Mu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new D3}function D3(){this.i=null,this.g="",this.h=!1}var TC=45e3,ad={},Ba={};P=al.prototype;P.setTimeout=function(t){this.P=t};function ud(t,e,n){t.L=1,t.v=Fu(Qn(e)),t.s=n,t.S=!0,O3(t,null)}function O3(t,e){t.G=Date.now(),ul(t),t.A=Qn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),z3(n.i,"t",r),t.C=0,n=t.l.J,t.h=new D3,t.g=u5(t.l,n?e:null,!t.s),0<t.O&&(t.M=new vC(st(t.Pa,t,t.g),t.O)),R3(t.U,t.g,"readystatechange",t.nb),e=t.I?y3(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),$o(),yC(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&ln(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const c=ln(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||id||this.g&&(this.h.h||this.g.ja()||em(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?$o(3):$o(2)),ju(this);var n=this.g.da();this.ca=n;t:if(M3(this)){var r=em(this.g);t="";var i=r.length,s=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),lo(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,_C(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mo(l)){var u=l;break t}}u=null}if(n=u)Pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cd(this,n);else{this.i=!1,this.o=3,dt(12),Fr(this),lo(this);break e}}this.S?(Q3(this,c,o),id&&this.i&&c==3&&(R3(this.U,this.V,"tick",this.mb),this.V.start())):(Pi(this.j,this.m,o,null),cd(this,o)),c==4&&Fr(this),this.i&&!this.J&&(c==4?s5(this.l,this):(this.i=!1,ul(this)))}else WC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),Fr(this),lo(this)}}}catch{}finally{}};function M3(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Q3(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=IC(t,n),i==Ba){e==4&&(t.o=4,dt(14),r=!1),Pi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ad){t.o=4,dt(15),Pi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Pi(t.j,t.m,i,null),cd(t,i);M3(t)&&i!=Ba&&i!=ad&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ap(e),e.M=!0,dt(11))):(Pi(t.j,t.m,n,"[Invalid Chunked Response]"),Fr(t),lo(t))}P.mb=function(){if(this.g){var t=ln(this.g),e=this.g.ja();this.C<e.length&&(ju(this),Q3(this,t,e),this.i&&t!=4&&ul(this))}};function IC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ba:(n=Number(e.substring(n,r)),isNaN(n)?ad:(r+=1,r+n>e.length?Ba:(e=e.slice(r,r+n),t.C=r+n,e)))}P.cancel=function(){this.J=!0,Fr(this)};function ul(t){t.Y=Date.now()+t.P,b3(t,t.P)}function b3(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ol(st(t.lb,t),e)}function ju(t){t.B&&(V.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(wC(this.j,this.A),this.L!=2&&($o(),dt(17)),Fr(this),this.o=2,lo(this)):b3(this,this.Y-t)};function lo(t){t.l.H==0||t.J||s5(t.l,t)}function Fr(t){ju(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Yf(t.V),N3(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function cd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||hd(n.i,t))){if(!t.K&&hd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ha(n),Bu(n);else break e;lp(n),dt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ol(st(n.ib,n),6e3));if(1>=W3(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ur(n,11)}else if((t.K||n.g==t)&&Ha(n),!Mo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const _=t.g;if(_){const y=_.g?_.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(rp(s,s.h),s.h=null))}if(r.F){const E=_.g?_.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,me(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=a5(r,r.J?r.pa:null,r.Y),o.K){H3(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.B&&(ju(l),ul(l)),r.g=o}else r5(r);0<n.j.length&&Vu(n)}else u[0]!="stop"&&u[0]!="close"||Ur(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ur(n,7):op(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}$o(4)}catch{}}function xC(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Pu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function kC(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Pu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function j3(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Pu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kC(t),r=xC(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var F3=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Hr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hr){this.h=t.h,Va(this,t.j),this.s=t.s,this.g=t.g,Wa(this,t.m),this.l=t.l;var e=t.i,n=new zo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),X0(this,n),this.o=t.o}else t&&(e=String(t).match(F3))?(this.h=!1,Va(this,e[1]||"",!0),this.s=Gs(e[2]||""),this.g=Gs(e[3]||"",!0),Wa(this,e[4]),this.l=Gs(e[5]||"",!0),X0(this,e[6]||"",!0),this.o=Gs(e[7]||"")):(this.h=!1,this.i=new zo(null,this.h))}Hr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ks(e,J0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ks(e,J0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ks(n,n.charAt(0)=="/"?PC:AC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ks(n,DC)),t.join("")};function Qn(t){return new Hr(t)}function Va(t,e,n){t.j=n?Gs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function X0(t,e,n){e instanceof zo?(t.i=e,OC(t.i,t.h)):(n||(e=Ks(e,LC)),t.i=new zo(e,t.h))}function me(t,e,n){t.i.set(e,n)}function Fu(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Gs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,NC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function NC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var J0=/[#\/\?@]/g,AC=/[#\?:]/g,PC=/[#\?]/g,LC=/[#\?@]/g,DC=/#/g;function zo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ir(t){t.g||(t.g=new Map,t.h=0,t.i&&RC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=zo.prototype;P.add=function(t,e){Ir(this),this.i=null,t=ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function U3(t,e){Ir(t),e=ms(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $3(t,e){return Ir(t),e=ms(t,e),t.g.has(e)}P.forEach=function(t,e){Ir(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.ta=function(){Ir(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.Z=function(t){Ir(this);let e=[];if(typeof t=="string")$3(this,t)&&(e=e.concat(this.g.get(ms(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Ir(this),this.i=null,t=ms(this,t),$3(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function z3(t,e,n){U3(t,e),0<n.length&&(t.i=null,t.g.set(ms(t,e),$f(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function OC(t,e){e&&!t.j&&(Ir(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(U3(this,r),z3(this,i,n))},t)),t.j=e}var MC=class{constructor(t,e){this.g=t,this.map=e}};function B3(t){this.l=t||QC,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ka&&V.g.Ka()&&V.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QC=10;function V3(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function W3(t){return t.h?1:t.g?t.g.size:0}function hd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rp(t,e){t.g?t.g.add(e):t.h=e}function H3(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}B3.prototype.cancel=function(){if(this.i=G3(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function G3(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $f(t.i)}var bC=class{stringify(t){return V.JSON.stringify(t,void 0)}parse(t){return V.JSON.parse(t,void 0)}};function jC(){this.g=new bC}function FC(t,e,n){const r=n||"";try{j3(t,function(i,s){let o=i;il(i)&&(o=Kf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function UC(t,e){const n=new Qu;if(V.Image){const r=new Image;r.onload=Fl($l,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Fl($l,n,r,"TestLoadImage: error",!1,e),r.onabort=Fl($l,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Fl($l,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function $l(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Uu(t){this.l=t.ec||null,this.j=t.ob||!1}We(Uu,ep);Uu.prototype.g=function(){return new $u(this.l,this.j)};Uu.prototype.i=function(t){return function(){return t}}({});function $u(t,e){Ve.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ip,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We($u,Ve);var ip=0;P=$u.prototype;P.open=function(t,e){if(this.readyState!=ip)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bo(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||V).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cl(this)),this.readyState=ip};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bo(this)),this.g&&(this.readyState=3,Bo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;K3(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function K3(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cl(this):Bo(this),this.readyState==3&&K3(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,cl(this))};P.Ya=function(t){this.g&&(this.response=t,cl(this))};P.ka=function(){this.g&&cl(this)};function cl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bo(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Bo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($u.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $C=V.JSON.parse;function Pe(t){Ve.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=q3,this.L=this.M=!1}We(Pe,Ve);var q3="",zC=/^https?$/i,BC=["POST","PUT"];P=Pe.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ld.g(),this.C=this.u?Y0(this.u):Y0(ld),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Z0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=V.FormData&&t instanceof V.FormData,!(0<=p3(BC,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{J3(this),0<this.B&&((this.L=VC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=Xf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Z0(this,s)}};function VC(t){return Qo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof Uf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function Z0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Y3(t),zu(t)}function Y3(t){t.F||(t.F=!0,Ye(t,"complete"),Ye(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ye(this,"complete"),Ye(this,"abort"),zu(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zu(this,!0)),Pe.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?X3(this):this.kb())};P.kb=function(){X3(this)};function X3(t){if(t.h&&typeof Uf<"u"&&(!t.C[1]||ln(t)!=4||t.da()!=2)){if(t.v&&ln(t)==4)Xf(t.La,0,t);else if(Ye(t,"readystatechange"),ln(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(F3)[1]||null;!i&&V.self&&V.self.location&&(i=V.self.location.protocol.slice(0,-1)),r=!zC.test(i?i.toLowerCase():"")}n=r}if(n)Ye(t,"complete"),Ye(t,"success");else{t.m=6;try{var s=2<ln(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Y3(t)}}finally{zu(t)}}}}function zu(t,e){if(t.g){J3(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ye(t,"ready");try{n.onreadystatechange=r}catch{}}}function J3(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function ln(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$C(e)}};function em(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case q3:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function WC(t){const e={};t=(t.g&&2<=ln(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Mo(t[r]))continue;var n=pC(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}lC(e,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Z3(t){let e="";return Bf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Z3(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function bs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function e5(t){this.Ga=0,this.j=[],this.l=new Qu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bs("baseRetryDelayMs",5e3,t),this.hb=bs("retryDelaySeedMs",1e4,t),this.eb=bs("forwardChannelMaxRetries",2,t),this.xa=bs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new B3(t&&t.concurrentRequestLimit),this.Ja=new jC,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=e5.prototype;P.ra=8;P.H=1;function op(t){if(t5(t),t.H==3){var e=t.W++,n=Qn(t.I);if(me(n,"SID",t.K),me(n,"RID",e),me(n,"TYPE","terminate"),hl(t,n),e=new al(t,t.l,e),e.L=2,e.v=Fu(Qn(n)),n=!1,V.navigator&&V.navigator.sendBeacon)try{n=V.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=u5(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ul(e)}l5(t)}function Bu(t){t.g&&(ap(t),t.g.cancel(),t.g=null)}function t5(t){Bu(t),t.u&&(V.clearTimeout(t.u),t.u=null),Ha(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function Vu(t){if(!V3(t.i)&&!t.m){t.m=!0;var e=t.Na;jo||x3(),Fo||(jo(),Fo=!0),qf.add(e,t),t.C=0}}function HC(t,e){return W3(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ol(st(t.Na,t,e),o5(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new al(this,this.l,t);let s=this.s;if(this.U&&(s?(s=y3(s),_3(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=n5(this,i,e),n=Qn(this.I),me(n,"RID",t),me(n,"CVER",22),this.F&&me(n,"X-HTTP-Session-Id",this.F),hl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Z3(s)))+"&"+e:this.o&&sp(n,this.o,s)),rp(this.i,i),this.bb&&me(n,"TYPE","init"),this.P?(me(n,"$req",e),me(n,"SID","null"),i.aa=!0,ud(i,n,null)):ud(i,n,e),this.H=2}}else this.H==3&&(t?tm(this,t):this.j.length==0||V3(this.i)||tm(this))};function tm(t,e){var n;e?n=e.m:n=t.W++;const r=Qn(t.I);me(r,"SID",t.K),me(r,"RID",n),me(r,"AID",t.V),hl(t,r),t.o&&t.s&&sp(r,t.o,t.s),n=new al(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=n5(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),rp(t.i,n),ud(n,r,e)}function hl(t,e){t.na&&Bf(t.na,function(n,r){me(e,r,n)}),t.h&&j3({},function(n,r){me(e,r,n)})}function n5(t,e,n){n=Math.min(t.j.length,n);var r=t.h?st(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].g;const c=i[a].map;if(u-=s,0>u)s=Math.max(0,i[a].g-100),l=!1;else try{FC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(l){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function r5(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;jo||x3(),Fo||(jo(),Fo=!0),qf.add(e,t),t.A=0}}function lp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ol(st(t.Ma,t),o5(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,i5(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ol(st(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,dt(10),Bu(this),i5(this))};function ap(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function i5(t){t.g=new al(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qn(t.wa);me(e,"RID","rpc"),me(e,"SID",t.K),me(e,"AID",t.V),me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&me(e,"TO",t.qa),me(e,"TYPE","xmlhttp"),hl(t,e),t.o&&t.s&&sp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Fu(Qn(e)),n.s=null,n.S=!0,O3(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Bu(this),lp(this),dt(19))};function Ha(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function s5(t,e){var n=null;if(t.g==e){Ha(t),ap(t),t.g=null;var r=2}else if(hd(t.i,e))n=e.F,H3(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Jf(),Ye(r,new L3(r,n)),Vu(t)}else r5(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&HC(t,e)||r==2&&lp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ur(t,5);break;case 4:Ur(t,10);break;case 3:Ur(t,6);break;default:Ur(t,2)}}}function o5(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ur(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=st(t.pb,t);n||(n=new Hr("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||Va(n,"https"),Fu(n)),UC(n.toString(),r)}else dt(2);t.H=0,t.h&&t.h.za(e),l5(t),t5(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),dt(2)):(this.l.info("Failed to ping google.com"),dt(1))};function l5(t){if(t.H=0,t.ma=[],t.h){const e=G3(t.i);(e.length!=0||t.j.length!=0)&&(V0(t.ma,e),V0(t.ma,t.j),t.i.i.length=0,$f(t.j),t.j.length=0),t.h.ya()}}function a5(t,e,n){var r=n instanceof Hr?Qn(n):new Hr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Wa(r,r.m);else{var i=V.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Hr(null);r&&Va(s,r),e&&(s.g=e),i&&Wa(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&me(r,n,e),me(r,"VER",t.ra),hl(t,r),r}function u5(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Pe(new Uu({ob:!0})):new Pe(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function c5(){}P=c5.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function $t(t,e){Ve.call(this),this.g=new e5(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Mo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Mo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gs(this)}We($t,Ve);$t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=a5(t,null,t.Y),Vu(t)};$t.prototype.close=function(){op(this.g)};$t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kf(t),t=n);e.j.push(new MC(e.fb++,t)),e.H==3&&Vu(e)};$t.prototype.N=function(){this.g.h=null,delete this.j,op(this.g),delete this.g,$t.$.N.call(this)};function h5(t){tp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(h5,tp);function d5(){np.call(this),this.status=1}We(d5,np);function gs(t){this.g=t}We(gs,c5);gs.prototype.Ba=function(){Ye(this.g,"a")};gs.prototype.Aa=function(t){Ye(this.g,new h5(t))};gs.prototype.za=function(t){Ye(this.g,new d5)};gs.prototype.ya=function(){Ye(this.g,"b")};function GC(){this.blockSize=-1}function mn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}We(mn,GC);mn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Bc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}mn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Bc(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Bc(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Bc(this,r),i=0;break}}this.h=i,this.i+=e};mn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var KC={};function up(t){return-128<=t&&128>t?tC(t,function(e){return new ie([e|0],0>e?-1:0)}):new ie([t|0],0>t?-1:0)}function an(t){if(isNaN(t)||!isFinite(t))return Bi;if(0>t)return Ge(an(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=dd;return new ie(e,0)}function f5(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ge(f5(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=an(Math.pow(e,8)),r=Bi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=an(Math.pow(e,s)),r=r.R(s).add(an(o))):(r=r.R(n),r=r.add(an(o)))}return r}var dd=4294967296,Bi=up(0),fd=up(1),nm=up(16777216);P=ie.prototype;P.ea=function(){if(Mt(this))return-Ge(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:dd+r)*e,e*=dd}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(In(this))return"0";if(Mt(this))return"-"+Ge(this).toString(t);for(var e=an(Math.pow(t,6)),n=this,r="";;){var i=Ka(n,e).g;n=Ga(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,In(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function In(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Mt(t){return t.h==-1}P.X=function(t){return t=Ga(this,t),Mt(t)?-1:In(t)?0:1};function Ge(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ie(n,~t.h).add(fd)}P.abs=function(){return Mt(this)?Ge(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ie(n,n[n.length-1]&-2147483648?-1:0)};function Ga(t,e){return t.add(Ge(e))}P.R=function(t){if(In(this)||In(t))return Bi;if(Mt(this))return Mt(t)?Ge(this).R(Ge(t)):Ge(Ge(this).R(t));if(Mt(t))return Ge(this.R(Ge(t)));if(0>this.X(nm)&&0>t.X(nm))return an(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,l=t.D(i)>>>16,a=t.D(i)&65535;n[2*r+2*i]+=o*a,zl(n,2*r+2*i),n[2*r+2*i+1]+=s*a,zl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*l,zl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*l,zl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ie(n,0)};function zl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function js(t,e){this.g=t,this.h=e}function Ka(t,e){if(In(e))throw Error("division by zero");if(In(t))return new js(Bi,Bi);if(Mt(t))return e=Ka(Ge(t),e),new js(Ge(e.g),Ge(e.h));if(Mt(e))return e=Ka(t,Ge(e)),new js(Ge(e.g),e.h);if(30<t.g.length){if(Mt(t)||Mt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=fd,r=e;0>=r.X(t);)n=rm(n),r=rm(r);var i=mi(n,1),s=mi(r,1);for(r=mi(r,2),n=mi(n,2);!In(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=mi(r,1),n=mi(n,1)}return e=Ga(t,i.R(e)),new js(i,e)}for(i=Bi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=an(n),o=s.R(e);Mt(o)||0<o.X(t);)n-=r,s=an(n),o=s.R(e);In(s)&&(s=fd),i=i.add(s),t=Ga(t,o)}return new js(i,t)}P.gb=function(t){return Ka(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ie(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ie(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ie(n,this.h^t.h)};function rm(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ie(n,t.h)}function mi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ie(i,t.h)}$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;Zf.NO_ERROR=0;Zf.TIMEOUT=8;Zf.HTTP_ERROR=6;CC.COMPLETE="complete";SC.EventType=ll;ll.OPEN="a";ll.CLOSE="b";ll.ERROR="c";ll.MESSAGE="d";Ve.prototype.listen=Ve.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;mn.prototype.digest=mn.prototype.l;mn.prototype.reset=mn.prototype.reset;mn.prototype.update=mn.prototype.j;ie.prototype.add=ie.prototype.add;ie.prototype.multiply=ie.prototype.R;ie.prototype.modulo=ie.prototype.gb;ie.prototype.compare=ie.prototype.X;ie.prototype.toNumber=ie.prototype.ea;ie.prototype.toString=ie.prototype.toString;ie.prototype.getBits=ie.prototype.D;ie.fromNumber=an;ie.fromString=f5;var qC=ie;const im="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let dl="10.4.0";/**
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
 */const is=new xu("@firebase/firestore");function Tt(t,...e){if(is.logLevel<=te.DEBUG){const n=e.map(hp);is.debug(`Firestore (${dl}): ${t}`,...n)}}function cp(t,...e){if(is.logLevel<=te.ERROR){const n=e.map(hp);is.error(`Firestore (${dl}): ${t}`,...n)}}function YC(t,...e){if(is.logLevel<=te.WARN){const n=e.map(hp);is.warn(`Firestore (${dl}): ${t}`,...n)}}function hp(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Vo(t="Unexpected state"){const e=`FIRESTORE (${dl}) INTERNAL ASSERTION FAILED: `+t;throw cp(e),new Error(e)}function pd(t,e){t||Vo()}/**
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
 */const Oe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Me extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class p5{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class JC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ZC{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new Vi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;e.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{Tt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(Tt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Tt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pd(typeof r.accessToken=="string"),new p5(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pd(e===null||typeof e=="string"),new et(e)}}class eS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new eS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Tt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Tt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Tt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Tt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pd(typeof n.token=="string"),this.R=n.token,new nS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function iS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class sS{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=iS(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}/**
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
 */class qa{constructor(e,n,r){n===void 0?n=0:n>e.length&&Vo(),r===void 0?r=e.length-n:r>e.length-n&&Vo(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ot extends qa{construct(e,n,r){return new Ot(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Me(Oe.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ot(n)}static emptyPath(){return new Ot([])}}/**
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
 */class $r{constructor(e){this.path=e}static fromPath(e){return new $r(Ot.fromString(e))}static fromName(e){return new $r(Ot.fromString(e).popFirst(5))}static empty(){return new $r(Ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ot.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $r(new Ot(e.slice()))}}function m5(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class oS{constructor(e,n,r,i,s,o,l,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=u}}class Ya{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ya("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ya&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class lS{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,a=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=a,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function aS(t){return new lS(t)}/**
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
 */var sm,X;(X=sm||(sm={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new qC([4294967295,4294967295],0);function Vc(){return typeof document<"u"?document:null}/**
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
 */class uS{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&Tt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class dp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new dp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Me(Oe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cS(t,e){if(cp("AsyncQueue",`${e}: ${t}`),m5(t))return new Me(Oe.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class hS{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=sS.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Tt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Tt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Me(Oe.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cS(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function g5(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const om=new Map;/**
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
 */function dS(t,e,n){if(!n)throw new Me(Oe.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fS(t,e,n,r){if(e===!0&&r===!0)throw new Me(Oe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lm(t){if($r.isDocumentKey(t))throw new Me(Oe.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pS(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Vo()}function mS(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Me(Oe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pS(t);throw new Me(Oe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class am{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Me(Oe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Me(Oe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=g5((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Me(Oe.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Me(Oe.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Me(Oe.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new am({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Me(Oe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Me(Oe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new am(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XC;switch(r.type){case"firstParty":return new tS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Me(Oe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=om.get(n);r&&(Tt("ComponentProvider","Removing Datastore"),om.delete(n),r.terminate())}(this),Promise.resolve()}}function gS(t,e,n,r={}){var i;const s=(t=mS(t,fp))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&YC("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,a;if(typeof r.mockUserToken=="string")l=r.mockUserToken,a=et.MOCK_USER;else{l=N2(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Me(Oe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(u)}t._authCredentials=new JC(new p5(l,a))}}/**
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
 */class pp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pp(this.firestore,e,this._query)}}class Wu{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wu(this.firestore,e,this._key)}}class Wi extends pp{constructor(e,n,r){super(e,n,aS(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wu(this.firestore,null,new $r(e))}withConverter(e){return new Wi(this.firestore,e,this._path)}}function vS(t,e,...n){if(t=zn(t),dS("collection","path",e),t instanceof fp){const r=Ot.fromString(e,...n);return lm(r),new Wi(t,null,r)}{if(!(t instanceof Wu||t instanceof Wi))throw new Me(Oe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ot.fromString(e,...n));return lm(r),new Wi(t.firestore,null,r)}}/**
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
 */class yS{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new uS(this,"async_queue_retry"),this.ou=()=>{const n=Vc();n&&Tt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Vc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new Vi;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!m5(e))throw e;Tt("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw cp("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=dp.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&Vo()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class _S extends fp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new yS}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ES(this),this._firestoreClient.terminate()}}function wS(t,e){const n=typeof t=="object"?t:Pf(),r=typeof t=="string"?t:e||"(default)",i=ku(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=x2("firestore");s&&gS(i,...s)}return i}function ES(t){var e,n,r;const i=t._freezeSettings(),s=function(l,a,u,c){return new oS(l,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,g5(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new hS(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(e,n=!0){(function(i){dl=i})(ci),ni(new _r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new _S(new ZC(r.getProvider("auth-internal")),new rS(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Me(Oe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ya(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),dn(im,"4.2.0",e),dn(im,"4.2.0","esm2017")})();const um="@firebase/database",cm="1.0.1";/**
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
 */let v5="";function CS(t){v5=t}/**
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
 */class SS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Po(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class TS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const y5=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SS(e)}}catch{}return new TS},zr=y5("localStorage"),md=y5("sessionStorage");/**
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
 */const Hi=new xu("@firebase/database"),IS=function(){let t=1;return function(){return t++}}(),_5=function(t){const e=U7(t),n=new M7;n.update(e);const r=n.digest();return xf.encodeByteArray(r)},fl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=fl.apply(null,r):typeof r=="object"?e+=Ke(r):e+=r,e+=" "}return e};let Gr=null,hm=!0;const xS=function(t,e){A(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Hi.logLevel=te.VERBOSE,Gr=Hi.log.bind(Hi),e&&md.set("logging_enabled",!0)):typeof t=="function"?Gr=t:(Gr=null,md.remove("logging_enabled"))},nt=function(...t){if(hm===!0&&(hm=!1,Gr===null&&md.get("logging_enabled")===!0&&xS(!0)),Gr){const e=fl.apply(null,t);Gr(e)}},pl=function(t){return function(...e){nt(t,...e)}},gd=function(...t){const e="FIREBASE INTERNAL ERROR: "+fl(...t);Hi.error(e)},bn=function(...t){const e=`FIREBASE FATAL ERROR: ${fl(...t)}`;throw Hi.error(e),new Error(e)},xt=function(...t){const e="FIREBASE WARNING: "+fl(...t);Hi.warn(e)},kS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},w5=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},RS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ss="[MIN_NAME]",ii="[MAX_NAME]",vs=function(t,e){if(t===e)return 0;if(t===ss||e===ii)return-1;if(e===ss||t===ii)return 1;{const n=dm(t),r=dm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},NS=function(t,e){return t===e?0:t<e?-1:1},Fs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ke(e))},mp=function(t){if(typeof t!="object"||t===null)return Ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ke(e[r]),n+=":",n+=mp(t[e[r]]);return n+="}",n},E5=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function zt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const C5=function(t){A(!w5(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(c.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},AS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},LS=new RegExp("^-?(0*)\\d{1,10}$"),DS=-2147483648,OS=2147483647,dm=function(t){if(LS.test(t)){const e=Number(t);if(e>=DS&&e<=OS)return e}return null},ml=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xt("Exception was thrown by user callback.",n),e},Math.floor(0))}},MS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ao=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class QS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){xt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class bS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xt(e)}}class Gi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gi.OWNER="owner";/**
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
 */const gp="5",S5="v",T5="s",I5="r",x5="f",k5=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,R5="ls",N5="p",vd="ac",A5="websocket",P5="long_polling";/**
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
 */class L5{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function jS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function D5(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let r;if(e===A5)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===P5)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jS(t)&&(n.ns=t.namespace);const i=[];return zt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class FS{constructor(){this.counters_={}}incrementCounter(e,n=1){$n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return w7(this.counters_)}}/**
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
 */const Wc={},Hc={};function vp(t){const e=t.toString();return Wc[e]||(Wc[e]=new FS),Wc[e]}function US(t,e){const n=t.toString();return Hc[n]||(Hc[n]=e()),Hc[n]}/**
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
 */class $S{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ml(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const fm="start",zS="close",BS="pLPCommand",VS="pRTLPCB",O5="id",M5="pw",Q5="ser",WS="cb",HS="seg",GS="ts",KS="d",qS="dframe",b5=1870,j5=30,YS=b5-j5,XS=25e3,JS=3e4;class Li{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pl(e),this.stats_=vp(n),this.urlFn=a=>(this.appCheckToken&&(a[vd]=this.appCheckToken),D5(n,P5,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $S(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(JS)),RS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yp((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fm)this.id=l,this.password=a;else if(o===zS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[fm]="t",r[Q5]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[WS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[S5]=gp,this.transportSessionId&&(r[T5]=this.transportSessionId),this.lastSessionId&&(r[R5]=this.lastSessionId),this.applicationId&&(r[N5]=this.applicationId),this.appCheckToken&&(r[vd]=this.appCheckToken),typeof location<"u"&&location.hostname&&k5.test(location.hostname)&&(r[I5]=x5);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Li.forceAllow_=!0}static forceDisallow(){Li.forceDisallow_=!0}static isAvailable(){return Li.forceAllow_?!0:!Li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!AS()&&!PS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=S2(n),i=E5(r,YS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[qS]="t",r[O5]=e,r[M5]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class yp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=IS(),window[BS+this.uniqueCallbackIdentifier]=e,window[VS+this.uniqueCallbackIdentifier]=n,this.myIFrame=yp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){nt("frame writing exception"),l.stack&&nt(l.stack),nt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[O5]=this.myID,e[M5]=this.myPW,e[Q5]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+j5+r.length<=b5;){const o=this.pendingSegs.shift();r=r+"&"+HS+i+"="+o.seg+"&"+GS+i+"="+o.ts+"&"+KS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(XS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const ZS=16384,eT=45e3;let Xa=null;typeof MozWebSocket<"u"?Xa=MozWebSocket:typeof WebSocket<"u"&&(Xa=WebSocket);class qt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pl(this.connId),this.stats_=vp(n),this.connURL=qt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[S5]=gp,typeof location<"u"&&location.hostname&&k5.test(location.hostname)&&(o[I5]=x5),n&&(o[T5]=n),r&&(o[R5]=r),i&&(o[vd]=i),s&&(o[N5]=s),D5(e,A5,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zr.set("previous_websocket_failure",!0);try{let r;P2(),this.mySock=new Xa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Xa!==null&&!qt.forceDisallow_}static previouslyFailed(){return zr.isInMemoryStorage||zr.get("previous_websocket_failure")===!0}markConnectionHealthy(){zr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Po(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=E5(n,ZS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2;qt.healthyTimeout=3e4;/**
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
 */class Wo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Li,qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=qt&&qt.isAvailable();let r=n&&!qt.previouslyFailed();if(e.webSocketOnly&&(n||xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[qt];else{const i=this.transports_=[];for(const s of Wo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Wo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wo.globalTransportInitialized_=!1;/**
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
 */const tT=6e4,nT=5e3,rT=10*1024,iT=100*1024,Gc="t",pm="d",sT="s",mm="r",oT="e",gm="o",vm="a",ym="n",_m="p",lT="h";class aT{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pl("c:"+this.id+":"),this.transportManager_=new Wo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ao(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gc in e){const n=e[Gc];n===vm?this.upgradeIfSecondaryHealthy_():n===mm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===gm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fs("t",e),r=Fs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_m,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ym,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fs("t",e),r=Fs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fs(Gc,e);if(pm in e){const r=e[pm];if(n===lT){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ym){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sT?this.onConnectionShutdown_(r):n===mm?this.onReset_(r):n===oT?gd("Server Error: "+r):n===gm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gp!==r&&xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ao(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ao(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_m,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class F5{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class U5{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ja extends U5{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Nf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ja}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const wm=32,Em=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new ve("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wr(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function $5(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function z5(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function B5(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function ze(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ve(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function bt(t,e){const n=J(t),r=J(e);if(n===null)return e;if(n===r)return bt(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function V5(t,e){if(wr(t)!==wr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Yt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(wr(t)>wr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class cT{constructor(e,n){this.errorPrefix_=n,this.parts_=z5(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Iu(this.parts_[r]);W5(this)}}function hT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Iu(e),W5(t)}function dT(t){const e=t.parts_.pop();t.byteLength_-=Iu(e),t.parts_.length>0&&(t.byteLength_-=1)}function W5(t){if(t.byteLength_>Em)throw new Error(t.errorPrefix_+"has a key path longer than "+Em+" bytes ("+t.byteLength_+").");if(t.parts_.length>wm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+wm+") or object contains a cycle "+Or(t))}function Or(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class _p extends U5{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new _p}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Us=1e3,fT=60*5*1e3,Cm=30*1e3,pT=1.3,mT=3e4,gT="server_kill",Sm=3;class Nn extends F5{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Nn.nextPersistentConnectionId_++,this.log_=pl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Us,this.maxReconnectDelay_=fT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!P2())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_p.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ja.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ke(s)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Rf,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Nn.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$n(e,"w")){const r=ns(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||O7(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=D7(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):gd("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mT&&(this.reconnectDelay_=Us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Nn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(h){A(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?nt("getToken() completed but was canceled"):(nt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new aT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{xt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(gT)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&xt(h),a())}}}interrupt(e){nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yh(this.interruptReasons_)&&(this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>mp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sm&&(this.reconnectDelay_=Cm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+v5.replace(/\./g,"-")]=1,Nf()?e["framework.cordova"]=1:A2()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ja.getInstance().currentlyOnline();return Yh(this.interruptReasons_)&&e}}Nn.nextPersistentConnectionId_=0;Nn.nextConnectionId_=0;/**
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
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
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
 */class Hu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Z(ss,e),i=new Z(ss,n);return this.compare(r,i)!==0}minPost(){return Z.MIN}}/**
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
 */let Bl;class H5 extends Hu{static get __EMPTY_NODE(){return Bl}static set __EMPTY_NODE(e){Bl=e}compare(e,n){return vs(e.name,n.name)}isDefinedOn(e){throw ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(ii,Bl)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,Bl)}toString(){return".key"}}const Ki=new H5;/**
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
 */class Vl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??yt.EMPTY_NODE,this.right=s??yt.EMPTY_NODE}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return yt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class vT{copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yt{constructor(e,n=yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vl(this.root_,null,this.comparator_,!0,e)}}yt.EMPTY_NODE=new vT;/**
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
 */function yT(t,e){return vs(t.name,e.name)}function wp(t,e){return vs(t,e)}/**
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
 */let yd;function _T(t){yd=t}const G5=function(t){return typeof t=="number"?"number:"+C5(t):"string:"+t},K5=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$n(e,".sv"),"Priority must be a string or number.")}else A(t===yd||t.isEmpty(),"priority of unexpected type.");A(t===yd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Tm;class Fe{constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),K5(this.priorityNode_)}static set __childrenNodeConstructor(e){Tm=e}static get __childrenNodeConstructor(){return Tm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:J(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=J(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(A(r!==".priority"||wr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+G5(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=C5(this.value_):e+=this.value_,this.lazyHash_=_5(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),s=Fe.VALUE_TYPE_ORDER.indexOf(r);return A(i>=0,"Unknown leaf type: "+n),A(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let q5,Y5;function wT(t){q5=t}function ET(t){Y5=t}class CT extends Hu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?vs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(ii,new Fe("[PRIORITY-POST]",Y5))}makePost(e,n){const r=q5(e);return new Z(n,new Fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const it=new CT;/**
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
 */const ST=Math.log(2);class TT{constructor(e){const n=s=>parseInt(Math.log(s)/ST,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Za=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let h,d;if(c===0)return null;if(c===1)return h=t[a],d=n?n(h):h,new $e(d,h.node,$e.BLACK,null,null);{const _=parseInt(c/2,10)+a,y=i(a,_),E=i(_+1,u);return h=t[_],d=n?n(h):h,new $e(d,h.node,$e.BLACK,y,E)}},s=function(a){let u=null,c=null,h=t.length;const d=function(y,E){const x=h-y,m=h;h-=y;const p=i(x+1,m),v=t[x],f=n?n(v):v;_(new $e(f,v.node,E,null,p))},_=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<a.count;++y){const E=a.nextBitIsOne(),x=Math.pow(2,a.count-(y+1));E?d(x,$e.BLACK):(d(x,$e.BLACK),d(x,$e.RED))}return c},o=new TT(t.length),l=s(o);return new yt(r||e,l)};/**
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
 */let Kc;const gi={};class xn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(gi&&it,"ChildrenNode.ts has not been loaded"),Kc=Kc||new xn({".priority":gi},{".priority":it}),Kc}get(e){const n=ns(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yt?n:null}hasIndex(e){return $n(this.indexSet_,e.toString())}addIndex(e,n){A(e!==Ki,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Za(r,e.getCompare()):l=gi;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new xn(c,u)}addToIndexes(e,n){const r=Ma(this.indexes_,(i,s)=>{const o=ns(this.indexSet_,s);if(A(o,"Missing index implementation for "+s),i===gi)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(Z.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Za(l,o.getCompare())}else return gi;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new Z(e.name,l))),a.insert(e,e.node)}});return new xn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ma(this.indexes_,i=>{if(i===gi)return i;{const s=n.get(e.name);return s?i.remove(new Z(e.name,s)):i}});return new xn(r,this.indexSet_)}}/**
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
 */let $s;class ne{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&K5(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $s||($s=new ne(new yt(wp),null,xn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$s}updatePriority(e){return this.children_.isEmpty()?this:new ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$s:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?$s:this.priorityNode_;return new ne(i,o,s)}}updateChild(e,n){const r=J(e);if(r===null)return n;{A(J(e)!==".priority"||wr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(pe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(it,(o,l)=>{n[o]=l.val(e),r++,s&&ne.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+G5(this.getPriority().val())+":"),this.forEachChild(it,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":_5(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gl?-1:0}withIndex(e){if(e===Ki||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ne(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ki||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(it),i=n.getIterator(it);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ki?null:this.indexMap_.get(e.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class IT extends ne{constructor(){super(new yt(wp),ne.EMPTY_NODE,xn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ne.EMPTY_NODE}isEmpty(){return!1}}const gl=new IT;Object.defineProperties(Z,{MIN:{value:new Z(ss,ne.EMPTY_NODE)},MAX:{value:new Z(ii,gl)}});H5.__EMPTY_NODE=ne.EMPTY_NODE;Fe.__childrenNodeConstructor=ne;_T(gl);ET(gl);/**
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
 */const xT=!0;function rt(t,e=null){if(t===null)return ne.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,rt(e))}if(!(t instanceof Array)&&xT){const n=[];let r=!1;if(zt(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=rt(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new Z(o,a)))}}),n.length===0)return ne.EMPTY_NODE;const s=Za(n,yT,o=>o.name,wp);if(r){const o=Za(n,it.getCompare());return new ne(s,rt(e),new xn({".priority":o},{".priority":it}))}else return new ne(s,rt(e),xn.Default)}else{let n=ne.EMPTY_NODE;return zt(t,(r,i)=>{if($n(t,r)&&r.substring(0,1)!=="."){const s=rt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(rt(e))}}wT(rt);/**
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
 */class kT extends Hu{constructor(e){super(),this.indexPath_=e,A(!q(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?vs(e.name,n.name):s}makePost(e,n){const r=rt(e),i=ne.EMPTY_NODE.updateChild(this.indexPath_,r);return new Z(n,i)}maxPost(){const e=ne.EMPTY_NODE.updateChild(this.indexPath_,gl);return new Z(ii,e)}toString(){return z5(this.indexPath_,0).join("/")}}/**
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
 */class RT extends Hu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?vs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const r=rt(e);return new Z(n,r)}toString(){return".value"}}const NT=new RT;/**
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
 */function AT(t){return{type:"value",snapshotNode:t}}function PT(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function LT(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Im(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function DT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ep{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=it}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ss}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ii}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===it}copy(){const e=new Ep;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===it?n="$priority":t.index_===NT?n="$value":t.index_===Ki?n="$key":(A(t.index_ instanceof kT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function km(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==it&&(e.i=t.index_.toString()),e}/**
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
 */class eu extends F5{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=pl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=eu.getListenId_(e,r),l={};this.listens_[o]=l;const a=xm(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),ns(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=eu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=xm(e._queryParams),r=e._path.toString(),i=new Rf;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fs(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Po(l.responseText)}catch{xt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&xt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class OT{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function tu(){return{value:null,children:new Map}}function X5(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=J(e);t.children.has(r)||t.children.set(r,tu());const i=t.children.get(r);e=pe(e),X5(i,e,n)}}function _d(t,e,n){t.value!==null?n(e,t.value):MT(t,(r,i)=>{const s=new ve(e.toString()+"/"+r);_d(i,s,n)})}function MT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class QT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&zt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Rm=10*1e3,bT=30*1e3,jT=5*60*1e3;class FT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new QT(e);const r=Rm+(bT-Rm)*Math.random();ao(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;zt(e,(i,s)=>{s>0&&$n(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ao(this.reportStats_.bind(this),Math.floor(Math.random()*2*jT))}}/**
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
 */var un;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(un||(un={}));function J5(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Z5(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ev(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class nu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=un.ACK_USER_WRITE,this.source=J5()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new nu(oe(),n,this.revert)}}else return A(J(this.path)===e,"operationForChild called for unrelated child."),new nu(pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class si{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=un.OVERWRITE}operationForChild(e){return q(this.path)?new si(this.source,oe(),this.snap.getImmediateChild(e)):new si(this.source,pe(this.path),this.snap)}}/**
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
 */class Ho{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=un.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new si(this.source,oe(),n.value):new Ho(this.source,oe(),n)}else return A(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ho(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Cp{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function UT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(DT(o.childName,o.snapshotNode))}),zs(t,i,"child_removed",e,r,n),zs(t,i,"child_added",e,r,n),zs(t,i,"child_moved",s,r,n),zs(t,i,"child_changed",e,r,n),zs(t,i,"value",e,r,n),i}function zs(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>zT(t,l,a)),o.forEach(l=>{const a=$T(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function $T(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zT(t,e,n){if(e.childName==null||n.childName==null)throw ds("Should only compare child_ events.");const r=new Z(e.childName,e.snapshotNode),i=new Z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function tv(t,e){return{eventCache:t,serverCache:e}}function uo(t,e,n,r){return tv(new Cp(e,n,r),t.serverCache)}function nv(t,e,n,r){return tv(t.eventCache,new Cp(e,n,r))}function wd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function oi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let qc;const BT=()=>(qc||(qc=new yt(NS)),qc);class fe{constructor(e,n=BT()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return zt(e,(r,i)=>{n=n.set(new ve(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(q(e))return null;{const r=J(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(pe(e),n);return s!=null?{path:ze(new ve(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=J(e),r=this.children.get(n);return r!==null?r.subtree(pe(e)):new fe(null)}}set(e,n){if(q(e))return new fe(n,this.children);{const r=J(e),s=(this.children.get(r)||new fe(null)).set(pe(e),n),o=this.children.insert(r,s);return new fe(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=J(e),r=this.children.get(n);if(r){const i=r.remove(pe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new fe(null):new fe(this.value,s)}else return this}}get(e){if(q(e))return this.value;{const n=J(e),r=this.children.get(n);return r?r.get(pe(e)):null}}setTree(e,n){if(q(e))return n;{const r=J(e),s=(this.children.get(r)||new fe(null)).setTree(pe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new fe(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ze(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(q(e))return null;{const s=J(e),o=this.children.get(s);return o?o.findOnPath_(pe(e),ze(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,r){if(q(e))return this;{this.value&&r(n,this.value);const i=J(e),s=this.children.get(i);return s?s.foreachOnPath_(pe(e),ze(n,i),r):new fe(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ze(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new fe(null))}}function co(t,e,n){if(q(e))return new Zt(new fe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=bt(i,e);return s=s.updateChild(o,n),new Zt(t.writeTree_.set(i,s))}else{const i=new fe(n),s=t.writeTree_.setTree(e,i);return new Zt(s)}}}function Nm(t,e,n){let r=t;return zt(n,(i,s)=>{r=co(r,ze(e,i),s)}),r}function Am(t,e){if(q(e))return Zt.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new Zt(n)}}function Ed(t,e){return hi(t,e)!=null}function hi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function Pm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(it,(r,i)=>{e.push(new Z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Z(r,i.value))}),e}function gr(t,e){if(q(e))return t;{const n=hi(t,e);return n!=null?new Zt(new fe(n)):new Zt(t.writeTree_.subtree(e))}}function Cd(t){return t.writeTree_.isEmpty()}function os(t,e){return rv(oe(),t.writeTree_,e)}function rv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(A(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=rv(ze(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ze(t,".priority"),r)),n}}/**
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
 */function iv(t,e){return uv(e,t)}function VT(t,e,n,r,i){A(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=co(t.visibleWrites,e,n)),t.lastWriteId=r}function WT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function HT(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&GT(l,r.path)?i=!1:Yt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return KT(t),!0;if(r.snap)t.visibleWrites=Am(t.visibleWrites,r.path);else{const l=r.children;zt(l,a=>{t.visibleWrites=Am(t.visibleWrites,ze(r.path,a))})}return!0}else return!1}function GT(t,e){if(t.snap)return Yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Yt(ze(t.path,n),e))return!0;return!1}function KT(t){t.visibleWrites=sv(t.allWrites,qT,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qT(t){return t.visible}function sv(t,e,n){let r=Zt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Yt(n,o)?(l=bt(n,o),r=co(r,l,s.snap)):Yt(o,n)&&(l=bt(o,n),r=co(r,oe(),s.snap.getChild(l)));else if(s.children){if(Yt(n,o))l=bt(n,o),r=Nm(r,l,s.children);else if(Yt(o,n))if(l=bt(o,n),q(l))r=Nm(r,oe(),s.children);else{const a=ns(s.children,J(l));if(a){const u=a.getChild(pe(l));r=co(r,oe(),u)}}}else throw ds("WriteRecord should have .snap or .children")}}return r}function ov(t,e,n,r,i){if(!r&&!i){const s=hi(t.visibleWrites,e);if(s!=null)return s;{const o=gr(t.visibleWrites,e);if(Cd(o))return n;if(n==null&&!Ed(o,oe()))return null;{const l=n||ne.EMPTY_NODE;return os(o,l)}}}else{const s=gr(t.visibleWrites,e);if(!i&&Cd(s))return n;if(!i&&n==null&&!Ed(s,oe()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Yt(u.path,e)||Yt(e,u.path))},l=sv(t.allWrites,o,e),a=n||ne.EMPTY_NODE;return os(l,a)}}}function YT(t,e,n){let r=ne.EMPTY_NODE;const i=hi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(it,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=gr(t.visibleWrites,e);return n.forEachChild(it,(o,l)=>{const a=os(gr(s,new ve(o)),l);r=r.updateImmediateChild(o,a)}),Pm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=gr(t.visibleWrites,e);return Pm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function XT(t,e,n,r,i){A(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ze(e,n);if(Ed(t.visibleWrites,s))return null;{const o=gr(t.visibleWrites,s);return Cd(o)?i.getChild(n):os(o,i.getChild(n))}}function JT(t,e,n,r){const i=ze(e,n),s=hi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=gr(t.visibleWrites,i);return os(o,r.getNode().getImmediateChild(n))}else return null}function ZT(t,e){return hi(t.visibleWrites,e)}function eI(t,e,n,r,i,s,o){let l;const a=gr(t.visibleWrites,e),u=hi(a,oe());if(u!=null)l=u;else if(n!=null)l=os(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],h=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=d.getNext();for(;_&&c.length<i;)h(_,r)!==0&&c.push(_),_=d.getNext();return c}else return[]}function tI(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function Sd(t,e,n,r){return ov(t.writeTree,t.treePath,e,n,r)}function lv(t,e){return YT(t.writeTree,t.treePath,e)}function Lm(t,e,n,r){return XT(t.writeTree,t.treePath,e,n,r)}function ru(t,e){return ZT(t.writeTree,ze(t.treePath,e))}function nI(t,e,n,r,i,s){return eI(t.writeTree,t.treePath,e,n,r,i,s)}function Sp(t,e,n){return JT(t.writeTree,t.treePath,e,n)}function av(t,e){return uv(ze(t.treePath,e),t.writeTree)}function uv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class rI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Im(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,LT(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,PT(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Im(r,e.snapshotNode,i.oldSnap));else throw ds("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class iI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const cv=new iI;class Tp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Cp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:oi(this.viewCache_),s=nI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function sI(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function oI(t,e,n,r,i){const s=new rI;let o,l;if(n.type===un.OVERWRITE){const u=n;u.source.fromUser?o=Td(t,e,u.path,u.snap,r,i,s):(A(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!q(u.path),o=iu(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===un.MERGE){const u=n;u.source.fromUser?o=aI(t,e,u.path,u.children,r,i,s):(A(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Id(t,e,u.path,u.children,r,i,l,s))}else if(n.type===un.ACK_USER_WRITE){const u=n;u.revert?o=hI(t,e,u.path,r,i,s):o=uI(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===un.LISTEN_COMPLETE)o=cI(t,e,n.path,r,s);else throw ds("Unknown operation type: "+n.type);const a=s.getChanges();return lI(e,o,a),{viewCache:o,changes:a}}function lI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=wd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(AT(wd(e)))}}function hv(t,e,n,r,i,s){const o=e.eventCache;if(ru(r,n)!=null)return e;{let l,a;if(q(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=oi(e),c=u instanceof ne?u:ne.EMPTY_NODE,h=lv(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Sd(r,oi(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=J(n);if(u===".priority"){A(wr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const h=Lm(r,n,c,a);h!=null?l=t.filter.updatePriority(c,h):l=o.getNode()}else{const c=pe(n);let h;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=Lm(r,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=Sp(r,u,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),u,h,c,i,s):l=o.getNode()}}return uo(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function iu(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(q(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),_,null)}else{const _=J(n);if(!a.isCompleteForPath(n)&&wr(n)>1)return e;const y=pe(n),x=a.getNode().getImmediateChild(_).updateChild(y,r);_===".priority"?u=c.updatePriority(a.getNode(),x):u=c.updateChild(a.getNode(),_,x,y,cv,null)}const h=nv(e,u,a.isFullyInitialized()||q(n),c.filtersNodes()),d=new Tp(i,h,s);return hv(t,h,n,i,d,l)}function Td(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Tp(i,e,s);if(q(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=uo(e,u,!0,t.filter.filtersNodes());else{const h=J(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=uo(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=pe(n),_=l.getNode().getImmediateChild(h);let y;if(q(d))y=r;else{const E=c.getCompleteChild(h);E!=null?$5(d)===".priority"&&E.getChild(B5(d)).isEmpty()?y=E:y=E.updateChild(d,r):y=ne.EMPTY_NODE}if(_.equals(y))a=e;else{const E=t.filter.updateChild(l.getNode(),h,y,d,c,o);a=uo(e,E,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Dm(t,e){return t.eventCache.isCompleteForChild(e)}function aI(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=ze(n,a);Dm(e,J(c))&&(l=Td(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=ze(n,a);Dm(e,J(c))||(l=Td(t,l,c,u,i,s,o))}),l}function Om(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Id(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;q(n)?u=r:u=new fe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),y=Om(t,_,d);a=iu(t,a,new ve(h),y,i,s,o,l)}}),u.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!_){const y=e.serverCache.getNode().getImmediateChild(h),E=Om(t,y,d);a=iu(t,a,new ve(h),E,i,s,o,l)}}),a}function uI(t,e,n,r,i,s,o){if(ru(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return iu(t,e,n,a.getNode().getChild(n),i,s,l,o);if(q(n)){let u=new fe(null);return a.getNode().forEachChild(Ki,(c,h)=>{u=u.set(new ve(c),h)}),Id(t,e,n,u,i,s,l,o)}else return e}else{let u=new fe(null);return r.foreach((c,h)=>{const d=ze(n,c);a.isCompleteForPath(d)&&(u=u.set(c,a.getNode().getChild(d)))}),Id(t,e,n,u,i,s,l,o)}}function cI(t,e,n,r,i){const s=e.serverCache,o=nv(e,s.getNode(),s.isFullyInitialized()||q(n),s.isFiltered());return hv(t,o,n,r,cv,i)}function hI(t,e,n,r,i,s){let o;if(ru(r,n)!=null)return e;{const l=new Tp(r,e,i),a=e.eventCache.getNode();let u;if(q(n)||J(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Sd(r,oi(e));else{const h=e.serverCache.getNode();A(h instanceof ne,"serverChildren would be complete if leaf node"),c=lv(r,h)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=J(n);let h=Sp(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=a.getImmediateChild(c)),h!=null?u=t.filter.updateChild(a,c,h,pe(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,ne.EMPTY_NODE,pe(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sd(r,oi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ru(r,oe())!=null,uo(e,u,o,t.filter.filtersNodes())}}function dI(t,e){const n=oi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function Mm(t,e,n,r){e.type===un.MERGE&&e.source.queryId!==null&&(A(oi(t.viewCache_),"We should always have a full cache before handling merges"),A(wd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=oI(t.processor_,i,e,n,r);return sI(t.processor_,s.viewCache),A(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,fI(t,s.changes,s.viewCache.eventCache.getNode(),null)}function fI(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return UT(t.eventGenerator_,e,n,i)}/**
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
 */let Qm;function pI(t){A(!Qm,"__referenceConstructor has already been defined"),Qm=t}function Ip(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return A(s!=null,"SyncTree gave us an op for an invalid query."),Mm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Mm(o,e,n,r));return s}}function xp(t,e){let n=null;for(const r of t.views.values())n=n||dI(r,e);return n}/**
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
 */let bm;function mI(t){A(!bm,"__referenceConstructor has already been defined"),bm=t}class jm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=tI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gI(t,e,n,r,i){return VT(t.pendingWriteTree_,e,n,r,i),i?Ku(t,new si(J5(),e,n)):[]}function Di(t,e,n=!1){const r=WT(t.pendingWriteTree_,e);if(HT(t.pendingWriteTree_,e)){let s=new fe(null);return r.snap!=null?s=s.set(oe(),!0):zt(r.children,o=>{s=s.set(new ve(o),!0)}),Ku(t,new nu(r.path,s,n))}else return[]}function Gu(t,e,n){return Ku(t,new si(Z5(),e,n))}function vI(t,e,n){const r=fe.fromObject(n);return Ku(t,new Ho(Z5(),e,r))}function yI(t,e,n,r){const i=mv(t,r);if(i!=null){const s=gv(i),o=s.path,l=s.queryId,a=bt(o,e),u=new si(ev(l),a,n);return vv(t,o,u)}else return[]}function _I(t,e,n,r){const i=mv(t,r);if(i){const s=gv(i),o=s.path,l=s.queryId,a=bt(o,e),u=fe.fromObject(n),c=new Ho(ev(l),a,u);return vv(t,o,c)}else return[]}function dv(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=bt(o,e),u=xp(l,a);if(u)return u});return ov(i,e,s,n,!0)}function Ku(t,e){return fv(e,t.syncPointTree_,null,iv(t.pendingWriteTree_,oe()))}function fv(t,e,n,r){if(q(t.path))return pv(t,e,n,r);{const i=e.get(oe());n==null&&i!=null&&(n=xp(i,oe()));let s=[];const o=J(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=av(r,o);s=s.concat(fv(l,a,u,c))}return i&&(s=s.concat(Ip(i,t,r,n))),s}}function pv(t,e,n,r){const i=e.get(oe());n==null&&i!=null&&(n=xp(i,oe()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=av(r,o),c=t.operationForChild(o);c&&(s=s.concat(pv(c,l,a,u)))}),i&&(s=s.concat(Ip(i,t,r,n))),s}function mv(t,e){return t.tagToQueryMap.get(e)}function gv(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function vv(t,e,n){const r=t.syncPointTree_.get(e);A(r,"Missing sync point for query tag that we're tracking");const i=iv(t.pendingWriteTree_,e);return Ip(r,n,i,null)}/**
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
 */class kp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kp(n)}node(){return this.node_}}class Rp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ze(this.path_,e);return new Rp(this.syncTree_,n)}node(){return dv(this.syncTree_,this.path_)}}const wI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fm=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return EI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return CI(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},EI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},CI=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&A(!1,"Unexpected increment value: "+r);const i=e.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},SI=function(t,e,n,r){return Np(e,new Rp(n,t),r)},TI=function(t,e,n){return Np(t,new kp(e),n)};function Np(t,e,n){const r=t.getPriority().val(),i=Fm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Fm(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Fe(l,rt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Fe(i))),o.forEachChild(it,(l,a)=>{const u=Np(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Ap{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Pp(t,e){let n=e instanceof ve?e:new ve(e),r=t,i=J(n);for(;i!==null;){const s=ns(r.node.children,i)||{children:{},childCount:0};r=new Ap(i,r,s),n=pe(n),i=J(n)}return r}function ys(t){return t.node.value}function yv(t,e){t.node.value=e,xd(t)}function _v(t){return t.node.childCount>0}function II(t){return ys(t)===void 0&&!_v(t)}function qu(t,e){zt(t.node.children,(n,r)=>{e(new Ap(n,t,r))})}function wv(t,e,n,r){n&&!r&&e(t),qu(t,i=>{wv(i,e,!0,r)}),n&&r&&e(t)}function xI(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function vl(t){return new ve(t.parent===null?t.name:vl(t.parent)+"/"+t.name)}function xd(t){t.parent!==null&&kI(t.parent,t.name,t)}function kI(t,e,n){const r=II(n),i=$n(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,xd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xd(t))}/**
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
 */const RI=/[\[\].#$\/\u0000-\u001F\u007F]/,NI=/[\[\].#$\u0000-\u001F\u007F]/,Yc=10*1024*1024,Ev=function(t){return typeof t=="string"&&t.length!==0&&!RI.test(t)},AI=function(t){return typeof t=="string"&&t.length!==0&&!NI.test(t)},PI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),AI(t)},Cv=function(t,e,n){const r=n instanceof ve?new cT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Or(r));if(typeof e=="function")throw new Error(t+"contains a function "+Or(r)+" with contents = "+e.toString());if(w5(e))throw new Error(t+"contains "+e.toString()+" "+Or(r));if(typeof e=="string"&&e.length>Yc/3&&Iu(e)>Yc)throw new Error(t+"contains a string greater than "+Yc+" utf8 bytes "+Or(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(zt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ev(o)))throw new Error(t+" contains an invalid key ("+o+") "+Or(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hT(r,o),Cv(t,l,r),dT(r)}),i&&s)throw new Error(t+' contains ".value" child '+Or(r)+" in addition to actual children.")}},LI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ev(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!PI(n))throw new Error(F7(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class DI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function OI(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!V5(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function di(t,e,n){OI(t,n),MI(t,r=>Yt(r,e)||Yt(e,r))}function MI(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(QI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function QI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Gr&&nt("event: "+n.toString()),ml(r)}}}/**
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
 */const bI="repo_interrupt",jI=25;class FI{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new DI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tu(),this.transactionQueueTree_=new Ap,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function UI(t,e,n){if(t.stats_=vp(t.repoInfo_),t.forceRestClient_||MS())t.server_=new eu(t.repoInfo_,(r,i,s,o)=>{Um(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$m(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Nn(t.repoInfo_,e,(r,i,s,o)=>{Um(t,r,i,s,o)},r=>{$m(t,r)},r=>{zI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=US(t.repoInfo_,()=>new FT(t.stats_,t.server_)),t.infoData_=new OT,t.infoSyncTree_=new jm({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Gu(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Lp(t,"connected",!1),t.serverSyncTree_=new jm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);di(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function $I(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sv(t){return wI({timestamp:$I(t)})}function Um(t,e,n,r,i){t.dataUpdateCount++;const s=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Ma(n,u=>rt(u));o=_I(t.serverSyncTree_,s,a,i)}else{const a=rt(n);o=yI(t.serverSyncTree_,s,a,i)}else if(r){const a=Ma(n,u=>rt(u));o=vI(t.serverSyncTree_,s,a)}else{const a=rt(n);o=Gu(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Op(t,s)),di(t.eventQueue_,l,o)}function $m(t,e){Lp(t,"connected",e),e===!1&&VI(t)}function zI(t,e){zt(e,(n,r)=>{Lp(t,n,r)})}function Lp(t,e,n){const r=new ve("/.info/"+e),i=rt(n);t.infoData_.updateSnapshot(r,i);const s=Gu(t.infoSyncTree_,r,i);di(t.eventQueue_,r,s)}function BI(t){return t.nextWriteId_++}function VI(t){Tv(t,"onDisconnectEvents");const e=Sv(t),n=tu();_d(t.onDisconnect_,oe(),(i,s)=>{const o=SI(i,s,t.serverSyncTree_,e);X5(n,i,o)});let r=[];_d(n,oe(),(i,s)=>{r=r.concat(Gu(t.serverSyncTree_,i,s));const o=KI(t,i);Op(t,o)}),t.onDisconnect_=tu(),di(t.eventQueue_,oe(),r)}function WI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(bI)}function Tv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),nt(n,...e)}function Iv(t,e,n){return dv(t.serverSyncTree_,e,n)||ne.EMPTY_NODE}function Dp(t,e=t.transactionQueueTree_){if(e||Yu(t,e),ys(e)){const n=kv(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&HI(t,vl(e),n)}else _v(e)&&qu(e,n=>{Dp(t,n)})}function HI(t,e,n){const r=n.map(u=>u.currentWriteId),i=Iv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];A(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=bt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Tv(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Di(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Yu(t,Pp(t.transactionQueueTree_,e)),Dp(t,t.transactionQueueTree_),di(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)ml(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{xt("transaction at "+a.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Op(t,e)}},o)}function Op(t,e){const n=xv(t,e),r=vl(n),i=kv(t,n);return GI(t,i,r),r}function GI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=bt(n,a.path);let c=!1,h;if(A(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,h=a.abortReason,i=i.concat(Di(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=jI)c=!0,h="maxretry",i=i.concat(Di(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Iv(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){Cv("transaction failed: Data returned ",_,a.path);let y=rt(_);typeof _=="object"&&_!=null&&$n(_,".priority")||(y=y.updatePriority(d.getPriority()));const x=a.currentWriteId,m=Sv(t),p=TI(y,d,m);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=p,a.currentWriteId=BI(t),o.splice(o.indexOf(x),1),i=i.concat(gI(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Di(t.serverSyncTree_,x,!0))}else c=!0,h="nodata",i=i.concat(Di(t.serverSyncTree_,a.currentWriteId,!0))}di(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(h),!1,null))))}Yu(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ml(r[l]);Dp(t,t.transactionQueueTree_)}function xv(t,e){let n,r=t.transactionQueueTree_;for(n=J(e);n!==null&&ys(r)===void 0;)r=Pp(r,n),e=pe(e),n=J(e);return r}function kv(t,e){const n=[];return Rv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Rv(t,e,n){const r=ys(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);qu(e,i=>{Rv(t,i,n)})}function Yu(t,e){const n=ys(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,yv(e,n.length>0?n:void 0)}qu(e,r=>{Yu(t,r)})}function KI(t,e){const n=vl(xv(t,e)),r=Pp(t.transactionQueueTree_,e);return xI(r,i=>{Xc(t,i)}),Xc(t,r),wv(r,i=>{Xc(t,i)}),n}function Xc(t,e){const n=ys(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Di(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?yv(e,void 0):n.length=s+1,di(t.eventQueue_,vl(e),i);for(let o=0;o<r.length;o++)ml(r[o])}}/**
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
 */function qI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function YI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):xt(`Invalid query segment '${n}' in query '${t}'`)}return e}const zm=function(t,e){const n=XI(t),r=n.namespace;n.domain==="firebase.com"&&bn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new L5(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ve(n.pathString)}},XI=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=qI(t.substring(c,h)));const d=YI(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class Mp{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return q(this._path)?null:$5(this._path)}get ref(){return new _s(this._repo,this._path)}get _queryIdentifier(){const e=km(this._queryParams),n=mp(e);return n==="{}"?"default":n}get _queryObject(){return km(this._queryParams)}isEqual(e){if(e=zn(e),!(e instanceof Mp))return!1;const n=this._repo===e._repo,r=V5(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+uT(this._path)}}class _s extends Mp{constructor(e,n){super(e,n,new Ep,!1)}get parent(){const e=B5(this._path);return e===null?null:new _s(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}pI(_s);mI(_s);/**
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
 */const JI="FIREBASE_DATABASE_EMULATOR_HOST",kd={};let ZI=!1;function ex(t,e,n,r){t.repoInfo_=new L5(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function tx(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zm(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[JI]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=zm(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Gi(Gi.OWNER):new bS(t.name,t.options,e);LI("Invalid Firebase Database URL",o),q(o.path)||bn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=rx(l,t,c,new QS(t.name,n));return new ix(h,t)}function nx(t,e){const n=kd[e];(!n||n[t.key]!==t)&&bn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),WI(t),delete n[t.key]}function rx(t,e,n,r){let i=kd[e.name];i||(i={},kd[e.name]=i);let s=i[t.toURLString()];return s&&bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new FI(t,ZI,n,r),i[t.toURLString()]=s,s}class ix{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(UI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _s(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(nx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bn("Cannot call "+e+" on a deleted database.")}}function sx(t=Pf(),e){const n=ku(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=x2("database");r&&ox(n,...r)}return n}function ox(t,e,n,r={}){t=zn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&bn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Gi(Gi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:N2(r.mockUserToken,t.app.options.projectId);s=new Gi(o)}ex(i,e,n,s)}/**
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
 */function lx(t){CS(ci),ni(new _r("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return tx(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),dn(um,cm,t),dn(um,cm,"esm2017")}Nn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};lx();const ax={apiKey:"AIzaSyC1EhtRsUU94lkaMMSml8Ie11TYCugZ7T0",authDomain:"healthert-web.firebaseapp.com",projectId:"healthert-web",storageBucket:"healthert-web.appspot.com",messagingSenderId:"1058865752969",appId:"1:1058865752969:web:20e793f6f8fe243ad54f58"},Qp=M2(ax);WE(Qp);const ux=wS(Qp);sx(Qp);R.createContext();const cx=()=>g.jsxs(g.Fragment,{children:[g.jsx(B9,{link:"login",text:"Iniciar sesion"}),g.jsx($9,{}),g.jsx(K9,{}),g.jsx(t7,{}),g.jsx(v7,{}),g.jsx(V9,{})]}),hx=()=>{const t=y2();return console.log(t.statusText),g.jsxs("div",{className:"flex flex-col mt-52 lg:mt-0 xl:mt-0 md:mt-10 xl:gap-y-0 lg:gap-y-0 md:gap-y-0  items-center justify-center md:min-h-screen lg:min-h-screen xl:min-h-screen",children:[g.jsx("h1",{className:"xl:mt-14 md:mt-32 lg:mt-32 text-3xl ml-4 md:text-5xl sm:text-4xl lg:text-6xl mb-3 dark:text-red-500 text-moradoOscuro font-bold sm:text-center",children:"HA OCURRIDO UN ERROR..."}),g.jsx("p",{className:"text-xl ml-0 mb-3 mt-6 md:mt-3 xl:mt-4 md:text-2xl sm:text-2xl lg:text-2xl xl:text-3xl  dark:text-white text-gray-500  sm:text-center",children:t.statusText||t.message}),g.jsx("div",{className:"my-12  animate-heartBeat items-center",children:g.jsx(_2,{})})]})};vS(ux,"users");Jm.createContext({googleMapsAPIIsLoaded:!1});const dx=x9([{path:"/healthert-web/",element:g.jsx(cx,{}),errorElement:g.jsx(hx,{})}]);function fx(){return g.jsx(O9,{router:dx})}Jc.createRoot(document.getElementById("root")).render(g.jsx(fx,{}));
