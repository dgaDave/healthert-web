function R7(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function k7(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ov={exports:{}},xc={},bv={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),D7=Symbol.for("react.portal"),N7=Symbol.for("react.fragment"),L7=Symbol.for("react.strict_mode"),M7=Symbol.for("react.profiler"),V7=Symbol.for("react.provider"),O7=Symbol.for("react.context"),b7=Symbol.for("react.forward_ref"),Q7=Symbol.for("react.suspense"),j7=Symbol.for("react.memo"),F7=Symbol.for("react.lazy"),J0=Symbol.iterator;function U7(t){return t===null||typeof t!="object"?null:(t=J0&&t[J0]||t["@@iterator"],typeof t=="function"?t:null)}var Qv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jv=Object.assign,Fv={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=Fv,this.updater=n||Qv}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Uv(){}Uv.prototype=Fs.prototype;function Cp(t,e,n){this.props=t,this.context=e,this.refs=Fv,this.updater=n||Qv}var Sp=Cp.prototype=new Uv;Sp.constructor=Cp;jv(Sp,Fs.prototype);Sp.isPureReactComponent=!0;var Z0=Array.isArray,$v=Object.prototype.hasOwnProperty,Ip={current:null},Bv={key:!0,ref:!0,__self:!0,__source:!0};function zv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$v.call(e,r)&&!Bv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fa,type:t,key:s,ref:o,props:i,_owner:Ip.current}}function $7(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function B7(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var e1=/\/+/g;function Nh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?B7(""+t.key):e.toString(36)}function Jl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case D7:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Nh(o,0):r,Z0(i)?(n="",t!=null&&(n=t.replace(e1,"$&/")+"/"),Jl(i,e,n,"",function(u){return u})):i!=null&&(Pp(i)&&(i=$7(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(e1,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Z0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Nh(s,a);o+=Jl(s,e,n,l,i)}else if(l=U7(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Nh(s,a++),o+=Jl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wl(t,e,n){if(t==null)return t;var r=[],i=0;return Jl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function z7(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},Zl={transition:null},H7={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:Zl,ReactCurrentOwner:Ip};ee.Children={map:wl,forEach:function(t,e,n){wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wl(t,function(){e++}),e},toArray:function(t){return wl(t,function(e){return e})||[]},only:function(t){if(!Pp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Fs;ee.Fragment=N7;ee.Profiler=M7;ee.PureComponent=Cp;ee.StrictMode=L7;ee.Suspense=Q7;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H7;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ip.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$v.call(e,l)&&!Bv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fa,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:O7,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:V7,_context:t},t.Consumer=t};ee.createElement=zv;ee.createFactory=function(t){var e=zv.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:b7,render:t}};ee.isValidElement=Pp;ee.lazy=function(t){return{$$typeof:F7,_payload:{_status:-1,_result:t},_init:z7}};ee.memo=function(t,e){return{$$typeof:j7,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Zl.transition;Zl.transition={};try{t()}finally{Zl.transition=e}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(t,e){return At.current.useCallback(t,e)};ee.useContext=function(t){return At.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return At.current.useDeferredValue(t)};ee.useEffect=function(t,e){return At.current.useEffect(t,e)};ee.useId=function(){return At.current.useId()};ee.useImperativeHandle=function(t,e,n){return At.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return At.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return At.current.useReducer(t,e,n)};ee.useRef=function(t){return At.current.useRef(t)};ee.useState=function(t){return At.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return At.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return At.current.useTransition()};ee.version="18.2.0";bv.exports=ee;var S=bv.exports;const Ap=k7(S),W7=R7({__proto__:null,default:Ap},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K7=S,G7=Symbol.for("react.element"),q7=Symbol.for("react.fragment"),X7=Object.prototype.hasOwnProperty,Y7=K7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,J7={key:!0,ref:!0,__self:!0,__source:!0};function Hv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)X7.call(e,r)&&!J7.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:G7,type:t,key:s,ref:o,props:i,_owner:Y7.current}}xc.Fragment=q7;xc.jsx=Hv;xc.jsxs=Hv;Ov.exports=xc;var m=Ov.exports,Fd={},Wv={exports:{}},zt={},Kv={exports:{}},Gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,U){var W=M.length;M.push(U);e:for(;0<W;){var z=W-1>>>1,me=M[z];if(0<i(me,U))M[z]=U,M[W]=me,W=z;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var U=M[0],W=M.pop();if(W!==U){M[0]=W;e:for(var z=0,me=M.length,Nn=me>>>1;z<Nn;){var ae=2*(z+1)-1,Wt=M[ae],ct=ae+1,Ln=M[ct];if(0>i(Wt,W))ct<me&&0>i(Ln,Wt)?(M[z]=Ln,M[ct]=W,z=ct):(M[z]=Wt,M[ae]=W,z=ae);else if(ct<me&&0>i(Ln,W))M[z]=Ln,M[ct]=W,z=ct;else break e}}return U}function i(M,U){var W=M.sortIndex-U.sortIndex;return W!==0?W:M.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,y=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=M)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function g(M){if(w=!1,v(M),!y)if(n(l)!==null)y=!0,De(x);else{var U=n(u);U!==null&&nt(g,U.startTime-M)}}function x(M,U){y=!1,w&&(w=!1,_(P),P=-1),f=!0;var W=d;try{for(v(U),h=n(l);h!==null&&(!(h.expirationTime>U)||M&&!ce());){var z=h.callback;if(typeof z=="function"){h.callback=null,d=h.priorityLevel;var me=z(h.expirationTime<=U);U=t.unstable_now(),typeof me=="function"?h.callback=me:h===n(l)&&r(l),v(U)}else r(l);h=n(l)}if(h!==null)var Nn=!0;else{var ae=n(u);ae!==null&&nt(g,ae.startTime-U),Nn=!1}return Nn}finally{h=null,d=W,f=!1}}var R=!1,I=null,P=-1,b=5,Q=-1;function ce(){return!(t.unstable_now()-Q<b)}function te(){if(I!==null){var M=t.unstable_now();Q=M;var U=!0;try{U=I(!0,M)}finally{U?Be():(R=!1,I=null)}}else R=!1}var Be;if(typeof p=="function")Be=function(){p(te)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=te,Be=function(){he.postMessage(null)}}else Be=function(){E(te,0)};function De(M){I=M,R||(R=!0,Be())}function nt(M,U){P=E(function(){M(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){y||f||(y=!0,De(x))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var W=d;d=U;try{return M()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,U){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var W=d;d=M;try{return U()}finally{d=W}},t.unstable_scheduleCallback=function(M,U,W){var z=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?z+W:z):W=z,M){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=W+me,M={id:c++,callback:U,priorityLevel:M,startTime:W,expirationTime:me,sortIndex:-1},W>z?(M.sortIndex=W,e(u,M),n(l)===null&&M===n(u)&&(w?(_(P),P=-1):w=!0,nt(g,W-z))):(M.sortIndex=me,e(l,M),y||f||(y=!0,De(x))),M},t.unstable_shouldYield=ce,t.unstable_wrapCallback=function(M){var U=d;return function(){var W=d;d=U;try{return M.apply(this,arguments)}finally{d=W}}}})(Gv);Kv.exports=Gv;var Z7=Kv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=S,Ft=Z7;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xv=new Set,Jo={};function Ni(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(Jo[t]=e,t=0;t<e.length;t++)Xv.add(e[t])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ud=Object.prototype.hasOwnProperty,e_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t1={},n1={};function t_(t){return Ud.call(n1,t)?!0:Ud.call(t1,t)?!1:e_.test(t)?n1[t]=!0:(t1[t]=!0,!1)}function n_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function r_(t,e,n,r){if(e===null||typeof e>"u"||n_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rp=/[\-:]([a-z])/g;function kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rp,kp);ut[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rp,kp);ut[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rp,kp);ut[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dp(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(r_(e,n,i,r)&&(n=null),r||i===null?t_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sr=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,El=Symbol.for("react.element"),Wi=Symbol.for("react.portal"),Ki=Symbol.for("react.fragment"),Np=Symbol.for("react.strict_mode"),$d=Symbol.for("react.profiler"),Yv=Symbol.for("react.provider"),Jv=Symbol.for("react.context"),Lp=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),zd=Symbol.for("react.suspense_list"),Mp=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Zv=Symbol.for("react.offscreen"),r1=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=r1&&t[r1]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Lh;function To(t){if(Lh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lh=e&&e[1]||""}return`
`+Lh+t}var Mh=!1;function Vh(t,e){if(!t||Mh)return"";Mh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Mh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?To(t):""}function i_(t){switch(t.tag){case 5:return To(t.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return t=Vh(t.type,!1),t;case 11:return t=Vh(t.type.render,!1),t;case 1:return t=Vh(t.type,!0),t;default:return""}}function Hd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ki:return"Fragment";case Wi:return"Portal";case $d:return"Profiler";case Np:return"StrictMode";case Bd:return"Suspense";case zd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jv:return(t.displayName||"Context")+".Consumer";case Yv:return(t._context.displayName||"Context")+".Provider";case Lp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mp:return e=t.displayName||null,e!==null?e:Hd(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return Hd(t(e))}catch{}}return null}function s_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hd(e);case 8:return e===Np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e4(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function o_(t){var e=e4(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tl(t){t._valueTracker||(t._valueTracker=o_(t))}function t4(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=e4(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wd(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function i1(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function n4(t,e){e=e.checked,e!=null&&Dp(t,"checked",e,!1)}function Kd(t,e){n4(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gd(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function s1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gd(t,e,n){(e!=="number"||vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xo=Array.isArray;function ds(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function o1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(xo(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function r4(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function a1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i4(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i4(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xl,s4=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xl=xl||document.createElement("div"),xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},a_=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(t){a_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Do[e]=Do[t]})});function o4(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Do.hasOwnProperty(t)&&Do[t]?(""+e).trim():e+"px"}function a4(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=o4(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var l_=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yd(t,e){if(e){if(l_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Jd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=null;function Vp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ef=null,fs=null,ps=null;function l1(t){if(t=Ba(t)){if(typeof ef!="function")throw Error(D(280));var e=t.stateNode;e&&(e=Ac(e),ef(t.stateNode,t.type,e))}}function l4(t){fs?ps?ps.push(t):ps=[t]:fs=t}function u4(){if(fs){var t=fs,e=ps;if(ps=fs=null,l1(t),e)for(t=0;t<e.length;t++)l1(e[t])}}function c4(t,e){return t(e)}function h4(){}var Oh=!1;function d4(t,e,n){if(Oh)return t(e,n);Oh=!0;try{return c4(t,e,n)}finally{Oh=!1,(fs!==null||ps!==null)&&(h4(),u4())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var r=Ac(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var tf=!1;if(Yn)try{var io={};Object.defineProperty(io,"passive",{get:function(){tf=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{tf=!1}function u_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var No=!1,_u=null,wu=!1,nf=null,c_={onError:function(t){No=!0,_u=t}};function h_(t,e,n,r,i,s,o,a,l){No=!1,_u=null,u_.apply(c_,arguments)}function d_(t,e,n,r,i,s,o,a,l){if(h_.apply(this,arguments),No){if(No){var u=_u;No=!1,_u=null}else throw Error(D(198));wu||(wu=!0,nf=u)}}function Li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f4(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function u1(t){if(Li(t)!==t)throw Error(D(188))}function f_(t){var e=t.alternate;if(!e){if(e=Li(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return u1(i),t;if(s===r)return u1(i),e;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function p4(t){return t=f_(t),t!==null?m4(t):null}function m4(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=m4(t);if(e!==null)return e;t=t.sibling}return null}var g4=Ft.unstable_scheduleCallback,c1=Ft.unstable_cancelCallback,p_=Ft.unstable_shouldYield,m_=Ft.unstable_requestPaint,be=Ft.unstable_now,g_=Ft.unstable_getCurrentPriorityLevel,Op=Ft.unstable_ImmediatePriority,y4=Ft.unstable_UserBlockingPriority,Eu=Ft.unstable_NormalPriority,y_=Ft.unstable_LowPriority,v4=Ft.unstable_IdlePriority,Cc=null,Sn=null;function v_(t){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Cc,t,void 0,(t.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:E_,__=Math.log,w_=Math.LN2;function E_(t){return t>>>=0,t===0?32:31-(__(t)/w_|0)|0}var Cl=64,Sl=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Co(a):(s&=o,s!==0&&(r=Co(s)))}else o=n&~i,o!==0?r=Co(o):s!==0&&(r=Co(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-fn(e),i=1<<n,r|=t[n],e&=~i;return r}function T_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=T_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _4(){var t=Cl;return Cl<<=1,!(Cl&4194240)&&(Cl=64),t}function bh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fn(e),t[e]=n}function C_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function w4(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E4,Qp,T4,x4,C4,sf=!1,Il=[],Cr=null,Sr=null,Ir=null,ta=new Map,na=new Map,gr=[],S_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function h1(t,e){switch(t){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function so(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ba(e),e!==null&&Qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function I_(t,e,n,r,i){switch(e){case"focusin":return Cr=so(Cr,t,e,n,r,i),!0;case"dragenter":return Sr=so(Sr,t,e,n,r,i),!0;case"mouseover":return Ir=so(Ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ta.set(s,so(ta.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,na.set(s,so(na.get(s)||null,t,e,n,r,i)),!0}return!1}function S4(t){var e=si(t.target);if(e!==null){var n=Li(e);if(n!==null){if(e=n.tag,e===13){if(e=f4(n),e!==null){t.blockedOn=e,C4(t.priority,function(){T4(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zd=r,n.target.dispatchEvent(r),Zd=null}else return e=Ba(n),e!==null&&Qp(e),t.blockedOn=n,!1;e.shift()}return!0}function d1(t,e,n){eu(t)&&n.delete(e)}function P_(){sf=!1,Cr!==null&&eu(Cr)&&(Cr=null),Sr!==null&&eu(Sr)&&(Sr=null),Ir!==null&&eu(Ir)&&(Ir=null),ta.forEach(d1),na.forEach(d1)}function oo(t,e){t.blockedOn===e&&(t.blockedOn=null,sf||(sf=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,P_)))}function ra(t){function e(i){return oo(i,t)}if(0<Il.length){oo(Il[0],t);for(var n=1;n<Il.length;n++){var r=Il[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Cr!==null&&oo(Cr,t),Sr!==null&&oo(Sr,t),Ir!==null&&oo(Ir,t),ta.forEach(e),na.forEach(e),n=0;n<gr.length;n++)r=gr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)S4(n),n.blockedOn===null&&gr.shift()}var ms=sr.ReactCurrentBatchConfig,xu=!0;function A_(t,e,n,r){var i=le,s=ms.transition;ms.transition=null;try{le=1,jp(t,e,n,r)}finally{le=i,ms.transition=s}}function R_(t,e,n,r){var i=le,s=ms.transition;ms.transition=null;try{le=4,jp(t,e,n,r)}finally{le=i,ms.transition=s}}function jp(t,e,n,r){if(xu){var i=of(t,e,n,r);if(i===null)Kh(t,e,r,Cu,n),h1(t,r);else if(I_(i,t,e,n,r))r.stopPropagation();else if(h1(t,r),e&4&&-1<S_.indexOf(t)){for(;i!==null;){var s=Ba(i);if(s!==null&&E4(s),s=of(t,e,n,r),s===null&&Kh(t,e,r,Cu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kh(t,e,r,null,n)}}var Cu=null;function of(t,e,n,r){if(Cu=null,t=Vp(r),t=si(t),t!==null)if(e=Li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f4(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cu=t,null}function I4(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(g_()){case Op:return 1;case y4:return 4;case Eu:case y_:return 16;case v4:return 536870912;default:return 16}default:return 16}}var Tr=null,Fp=null,tu=null;function P4(){if(tu)return tu;var t,e=Fp,n=e.length,r,i="value"in Tr?Tr.value:Tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return tu=i.slice(t,1<r?1-r:void 0)}function nu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function f1(){return!1}function Ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pl:f1,this.isPropagationStopped=f1,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Up=Ht(Us),$a=ke({},Us,{view:0,detail:0}),k_=Ht($a),Qh,jh,ao,Sc=ke({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$p,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(Qh=t.screenX-ao.screenX,jh=t.screenY-ao.screenY):jh=Qh=0,ao=t),Qh)},movementY:function(t){return"movementY"in t?t.movementY:jh}}),p1=Ht(Sc),D_=ke({},Sc,{dataTransfer:0}),N_=Ht(D_),L_=ke({},$a,{relatedTarget:0}),Fh=Ht(L_),M_=ke({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),V_=Ht(M_),O_=ke({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b_=Ht(O_),Q_=ke({},Us,{data:0}),m1=Ht(Q_),j_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=U_[t])?!!e[t]:!1}function $p(){return $_}var B_=ke({},$a,{key:function(t){if(t.key){var e=j_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$p,charCode:function(t){return t.type==="keypress"?nu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),z_=Ht(B_),H_=ke({},Sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g1=Ht(H_),W_=ke({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$p}),K_=Ht(W_),G_=ke({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),q_=Ht(G_),X_=ke({},Sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y_=Ht(X_),J_=[9,13,27,32],Bp=Yn&&"CompositionEvent"in window,Lo=null;Yn&&"documentMode"in document&&(Lo=document.documentMode);var Z_=Yn&&"TextEvent"in window&&!Lo,A4=Yn&&(!Bp||Lo&&8<Lo&&11>=Lo),y1=String.fromCharCode(32),v1=!1;function R4(t,e){switch(t){case"keyup":return J_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k4(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gi=!1;function ew(t,e){switch(t){case"compositionend":return k4(e);case"keypress":return e.which!==32?null:(v1=!0,y1);case"textInput":return t=e.data,t===y1&&v1?null:t;default:return null}}function tw(t,e){if(Gi)return t==="compositionend"||!Bp&&R4(t,e)?(t=P4(),tu=Fp=Tr=null,Gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A4&&e.locale!=="ko"?null:e.data;default:return null}}var nw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nw[t.type]:e==="textarea"}function D4(t,e,n,r){l4(r),e=Su(e,"onChange"),0<e.length&&(n=new Up("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Mo=null,ia=null;function rw(t){$4(t,0)}function Ic(t){var e=Yi(t);if(t4(e))return t}function iw(t,e){if(t==="change")return e}var N4=!1;if(Yn){var Uh;if(Yn){var $h="oninput"in document;if(!$h){var w1=document.createElement("div");w1.setAttribute("oninput","return;"),$h=typeof w1.oninput=="function"}Uh=$h}else Uh=!1;N4=Uh&&(!document.documentMode||9<document.documentMode)}function E1(){Mo&&(Mo.detachEvent("onpropertychange",L4),ia=Mo=null)}function L4(t){if(t.propertyName==="value"&&Ic(ia)){var e=[];D4(e,ia,t,Vp(t)),d4(rw,e)}}function sw(t,e,n){t==="focusin"?(E1(),Mo=e,ia=n,Mo.attachEvent("onpropertychange",L4)):t==="focusout"&&E1()}function ow(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ic(ia)}function aw(t,e){if(t==="click")return Ic(e)}function lw(t,e){if(t==="input"||t==="change")return Ic(e)}function uw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mn=typeof Object.is=="function"?Object.is:uw;function sa(t,e){if(mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ud.call(e,i)||!mn(t[i],e[i]))return!1}return!0}function T1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function x1(t,e){var n=T1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=T1(n)}}function M4(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?M4(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function V4(){for(var t=window,e=vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vu(t.document)}return e}function zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cw(t){var e=V4(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&M4(n.ownerDocument.documentElement,n)){if(r!==null&&zp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=x1(n,s);var o=x1(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hw=Yn&&"documentMode"in document&&11>=document.documentMode,qi=null,af=null,Vo=null,lf=!1;function C1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lf||qi==null||qi!==vu(r)||(r=qi,"selectionStart"in r&&zp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&sa(Vo,r)||(Vo=r,r=Su(af,"onSelect"),0<r.length&&(e=new Up("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qi)))}function Al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xi={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionend:Al("Transition","TransitionEnd")},Bh={},O4={};Yn&&(O4=document.createElement("div").style,"AnimationEvent"in window||(delete Xi.animationend.animation,delete Xi.animationiteration.animation,delete Xi.animationstart.animation),"TransitionEvent"in window||delete Xi.transitionend.transition);function Pc(t){if(Bh[t])return Bh[t];if(!Xi[t])return t;var e=Xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in O4)return Bh[t]=e[n];return t}var b4=Pc("animationend"),Q4=Pc("animationiteration"),j4=Pc("animationstart"),F4=Pc("transitionend"),U4=new Map,S1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){U4.set(t,e),Ni(e,[t])}for(var zh=0;zh<S1.length;zh++){var Hh=S1[zh],dw=Hh.toLowerCase(),fw=Hh[0].toUpperCase()+Hh.slice(1);zr(dw,"on"+fw)}zr(b4,"onAnimationEnd");zr(Q4,"onAnimationIteration");zr(j4,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(F4,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pw=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function I1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,d_(r,e,void 0,t),t.currentTarget=null}function $4(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;I1(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;I1(i,a,u),s=l}}}if(wu)throw t=nf,wu=!1,nf=null,t}function ve(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var r=t+"__bubble";n.has(r)||(B4(e,t,2,!1),n.add(r))}function Wh(t,e,n){var r=0;e&&(r|=4),B4(n,t,r,e)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[Rl]){t[Rl]=!0,Xv.forEach(function(n){n!=="selectionchange"&&(pw.has(n)||Wh(n,!1,t),Wh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Rl]||(e[Rl]=!0,Wh("selectionchange",!1,e))}}function B4(t,e,n,r){switch(I4(e)){case 1:var i=A_;break;case 4:i=R_;break;default:i=jp}n=i.bind(null,e,n,t),i=void 0,!tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=si(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}d4(function(){var u=s,c=Vp(n),h=[];e:{var d=U4.get(t);if(d!==void 0){var f=Up,y=t;switch(t){case"keypress":if(nu(n)===0)break e;case"keydown":case"keyup":f=z_;break;case"focusin":y="focus",f=Fh;break;case"focusout":y="blur",f=Fh;break;case"beforeblur":case"afterblur":f=Fh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=p1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=N_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=K_;break;case b4:case Q4:case j4:f=V_;break;case F4:f=q_;break;case"scroll":f=k_;break;case"wheel":f=Y_;break;case"copy":case"cut":case"paste":f=b_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=g1}var w=(e&4)!==0,E=!w&&t==="scroll",_=w?d!==null?d+"Capture":null:d;w=[];for(var p=u,v;p!==null;){v=p;var g=v.stateNode;if(v.tag===5&&g!==null&&(v=g,_!==null&&(g=ea(p,_),g!=null&&w.push(aa(p,g,v)))),E)break;p=p.return}0<w.length&&(d=new f(d,y,null,n,c),h.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Zd&&(y=n.relatedTarget||n.fromElement)&&(si(y)||y[Jn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=u,y=y?si(y):null,y!==null&&(E=Li(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(w=p1,g="onMouseLeave",_="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=g1,g="onPointerLeave",_="onPointerEnter",p="pointer"),E=f==null?d:Yi(f),v=y==null?d:Yi(y),d=new w(g,p+"leave",f,n,c),d.target=E,d.relatedTarget=v,g=null,si(c)===u&&(w=new w(_,p+"enter",y,n,c),w.target=v,w.relatedTarget=E,g=w),E=g,f&&y)t:{for(w=f,_=y,p=0,v=w;v;v=$i(v))p++;for(v=0,g=_;g;g=$i(g))v++;for(;0<p-v;)w=$i(w),p--;for(;0<v-p;)_=$i(_),v--;for(;p--;){if(w===_||_!==null&&w===_.alternate)break t;w=$i(w),_=$i(_)}w=null}else w=null;f!==null&&P1(h,d,f,w,!1),y!==null&&E!==null&&P1(h,E,y,w,!0)}}e:{if(d=u?Yi(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var x=iw;else if(_1(d))if(N4)x=lw;else{x=ow;var R=sw}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=aw);if(x&&(x=x(t,u))){D4(h,x,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Gd(d,"number",d.value)}switch(R=u?Yi(u):window,t){case"focusin":(_1(R)||R.contentEditable==="true")&&(qi=R,af=u,Vo=null);break;case"focusout":Vo=af=qi=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,C1(h,n,c);break;case"selectionchange":if(hw)break;case"keydown":case"keyup":C1(h,n,c)}var I;if(Bp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Gi?R4(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(A4&&n.locale!=="ko"&&(Gi||P!=="onCompositionStart"?P==="onCompositionEnd"&&Gi&&(I=P4()):(Tr=c,Fp="value"in Tr?Tr.value:Tr.textContent,Gi=!0)),R=Su(u,P),0<R.length&&(P=new m1(P,t,null,n,c),h.push({event:P,listeners:R}),I?P.data=I:(I=k4(n),I!==null&&(P.data=I)))),(I=Z_?ew(t,n):tw(t,n))&&(u=Su(u,"onBeforeInput"),0<u.length&&(c=new m1("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=I))}$4(h,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Su(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ea(t,n),s!=null&&r.unshift(aa(t,s,i)),s=ea(t,e),s!=null&&r.push(aa(t,s,i))),t=t.return}return r}function $i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function P1(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ea(n,s),l!=null&&o.unshift(aa(n,l,a))):i||(l=ea(n,s),l!=null&&o.push(aa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mw=/\r\n?/g,gw=/\u0000|\uFFFD/g;function A1(t){return(typeof t=="string"?t:""+t).replace(mw,`
`).replace(gw,"")}function kl(t,e,n){if(e=A1(e),A1(t)!==e&&n)throw Error(D(425))}function Iu(){}var uf=null,cf=null;function hf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,yw=typeof clearTimeout=="function"?clearTimeout:void 0,R1=typeof Promise=="function"?Promise:void 0,vw=typeof queueMicrotask=="function"?queueMicrotask:typeof R1<"u"?function(t){return R1.resolve(null).then(t).catch(_w)}:df;function _w(t){setTimeout(function(){throw t})}function Gh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ra(e)}function Pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function k1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),En="__reactFiber$"+$s,la="__reactProps$"+$s,Jn="__reactContainer$"+$s,ff="__reactEvents$"+$s,ww="__reactListeners$"+$s,Ew="__reactHandles$"+$s;function si(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jn]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=k1(t);t!==null;){if(n=t[En])return n;t=k1(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[En]||t[Jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function Ac(t){return t[la]||null}var pf=[],Ji=-1;function Hr(t){return{current:t}}function we(t){0>Ji||(t.current=pf[Ji],pf[Ji]=null,Ji--)}function ye(t,e){Ji++,pf[Ji]=t.current,t.current=e}var Qr={},Et=Hr(Qr),Nt=Hr(!1),_i=Qr;function Cs(t,e){var n=t.type.contextTypes;if(!n)return Qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Lt(t){return t=t.childContextTypes,t!=null}function Pu(){we(Nt),we(Et)}function D1(t,e,n){if(Et.current!==Qr)throw Error(D(168));ye(Et,e),ye(Nt,n)}function z4(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,s_(t)||"Unknown",i));return ke({},n,r)}function Au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qr,_i=Et.current,ye(Et,t),ye(Nt,Nt.current),!0}function N1(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=z4(t,e,_i),r.__reactInternalMemoizedMergedChildContext=t,we(Nt),we(Et),ye(Et,t)):we(Nt),ye(Nt,n)}var Qn=null,Rc=!1,qh=!1;function H4(t){Qn===null?Qn=[t]:Qn.push(t)}function Tw(t){Rc=!0,H4(t)}function Wr(){if(!qh&&Qn!==null){qh=!0;var t=0,e=le;try{var n=Qn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qn=null,Rc=!1}catch(i){throw Qn!==null&&(Qn=Qn.slice(t+1)),g4(Op,Wr),i}finally{le=e,qh=!1}}return null}var Zi=[],es=0,Ru=null,ku=0,qt=[],Xt=0,wi=null,jn=1,Fn="";function ei(t,e){Zi[es++]=ku,Zi[es++]=Ru,Ru=t,ku=e}function W4(t,e,n){qt[Xt++]=jn,qt[Xt++]=Fn,qt[Xt++]=wi,wi=t;var r=jn;t=Fn;var i=32-fn(r)-1;r&=~(1<<i),n+=1;var s=32-fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jn=1<<32-fn(e)+i|n<<i|r,Fn=s+t}else jn=1<<s|n<<i|r,Fn=t}function Hp(t){t.return!==null&&(ei(t,1),W4(t,1,0))}function Wp(t){for(;t===Ru;)Ru=Zi[--es],Zi[es]=null,ku=Zi[--es],Zi[es]=null;for(;t===wi;)wi=qt[--Xt],qt[Xt]=null,Fn=qt[--Xt],qt[Xt]=null,jn=qt[--Xt],qt[Xt]=null}var jt=null,Qt=null,xe=!1,un=null;function K4(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function L1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,Qt=Pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wi!==null?{id:jn,overflow:Fn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jt=t,Qt=null,!0):!1;default:return!1}}function mf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gf(t){if(xe){var e=Qt;if(e){var n=e;if(!L1(t,e)){if(mf(t))throw Error(D(418));e=Pr(n.nextSibling);var r=jt;e&&L1(t,e)?K4(r,n):(t.flags=t.flags&-4097|2,xe=!1,jt=t)}}else{if(mf(t))throw Error(D(418));t.flags=t.flags&-4097|2,xe=!1,jt=t}}}function M1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function Dl(t){if(t!==jt)return!1;if(!xe)return M1(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hf(t.type,t.memoizedProps)),e&&(e=Qt)){if(mf(t))throw G4(),Error(D(418));for(;e;)K4(t,e),e=Pr(e.nextSibling)}if(M1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=Pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=jt?Pr(t.stateNode.nextSibling):null;return!0}function G4(){for(var t=Qt;t;)t=Pr(t.nextSibling)}function Ss(){Qt=jt=null,xe=!1}function Kp(t){un===null?un=[t]:un.push(t)}var xw=sr.ReactCurrentBatchConfig;function on(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Du=Hr(null),Nu=null,ts=null,Gp=null;function qp(){Gp=ts=Nu=null}function Xp(t){var e=Du.current;we(Du),t._currentValue=e}function yf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){Nu=t,Gp=ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(Gp!==t)if(t={context:t,memoizedValue:e,next:null},ts===null){if(Nu===null)throw Error(D(308));ts=t,Nu.dependencies={lanes:0,firstContext:t}}else ts=ts.next=t;return e}var oi=null;function Yp(t){oi===null?oi=[t]:oi.push(t)}function q4(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Yp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zn(t,r)}function Zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function Jp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X4(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zn(t,n)}return i=r.interleaved,i===null?(e.next=e,Yp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zn(t,n)}function ru(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bp(t,n)}}function V1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lu(t,e,n,r){var i=t.updateQueue;pr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(d=e,f=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(f,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,d=typeof y=="function"?y.call(f,h,d):y,d==null)break e;h=ke({},h,d);break e;case 2:pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ti|=o,t.lanes=o,t.memoizedState=h}}function O1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var Y4=new qv.Component().refs;function vf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kc={isMounted:function(t){return(t=t._reactInternals)?Li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=kr(t),s=Hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(pn(e,t,i,r),ru(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=kr(t),s=Hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(pn(e,t,i,r),ru(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=kr(t),i=Hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(pn(e,t,r,n),ru(e,t,r))}};function b1(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(i,s):!0}function J4(t,e,n){var r=!1,i=Qr,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=Lt(e)?_i:Et.current,r=e.contextTypes,s=(r=r!=null)?Cs(t,i):Qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Q1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kc.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Y4,Jp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=Lt(e)?_i:Et.current,i.context=Cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kc.enqueueReplaceState(i,i.state,null),Lu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Y4&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function Nl(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function j1(t){var e=t._init;return e(t._payload)}function Z4(t){function e(_,p){if(t){var v=_.deletions;v===null?(_.deletions=[p],_.flags|=16):v.push(p)}}function n(_,p){if(!t)return null;for(;p!==null;)e(_,p),p=p.sibling;return null}function r(_,p){for(_=new Map;p!==null;)p.key!==null?_.set(p.key,p):_.set(p.index,p),p=p.sibling;return _}function i(_,p){return _=Dr(_,p),_.index=0,_.sibling=null,_}function s(_,p,v){return _.index=v,t?(v=_.alternate,v!==null?(v=v.index,v<p?(_.flags|=2,p):v):(_.flags|=2,p)):(_.flags|=1048576,p)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,p,v,g){return p===null||p.tag!==6?(p=nd(v,_.mode,g),p.return=_,p):(p=i(p,v),p.return=_,p)}function l(_,p,v,g){var x=v.type;return x===Ki?c(_,p,v.props.children,g,v.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===fr&&j1(x)===p.type)?(g=i(p,v.props),g.ref=lo(_,p,v),g.return=_,g):(g=uu(v.type,v.key,v.props,null,_.mode,g),g.ref=lo(_,p,v),g.return=_,g)}function u(_,p,v,g){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=rd(v,_.mode,g),p.return=_,p):(p=i(p,v.children||[]),p.return=_,p)}function c(_,p,v,g,x){return p===null||p.tag!==7?(p=pi(v,_.mode,g,x),p.return=_,p):(p=i(p,v),p.return=_,p)}function h(_,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=nd(""+p,_.mode,v),p.return=_,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case El:return v=uu(p.type,p.key,p.props,null,_.mode,v),v.ref=lo(_,null,p),v.return=_,v;case Wi:return p=rd(p,_.mode,v),p.return=_,p;case fr:var g=p._init;return h(_,g(p._payload),v)}if(xo(p)||ro(p))return p=pi(p,_.mode,v,null),p.return=_,p;Nl(_,p)}return null}function d(_,p,v,g){var x=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return x!==null?null:a(_,p,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case El:return v.key===x?l(_,p,v,g):null;case Wi:return v.key===x?u(_,p,v,g):null;case fr:return x=v._init,d(_,p,x(v._payload),g)}if(xo(v)||ro(v))return x!==null?null:c(_,p,v,g,null);Nl(_,v)}return null}function f(_,p,v,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return _=_.get(v)||null,a(p,_,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case El:return _=_.get(g.key===null?v:g.key)||null,l(p,_,g,x);case Wi:return _=_.get(g.key===null?v:g.key)||null,u(p,_,g,x);case fr:var R=g._init;return f(_,p,v,R(g._payload),x)}if(xo(g)||ro(g))return _=_.get(v)||null,c(p,_,g,x,null);Nl(p,g)}return null}function y(_,p,v,g){for(var x=null,R=null,I=p,P=p=0,b=null;I!==null&&P<v.length;P++){I.index>P?(b=I,I=null):b=I.sibling;var Q=d(_,I,v[P],g);if(Q===null){I===null&&(I=b);break}t&&I&&Q.alternate===null&&e(_,I),p=s(Q,p,P),R===null?x=Q:R.sibling=Q,R=Q,I=b}if(P===v.length)return n(_,I),xe&&ei(_,P),x;if(I===null){for(;P<v.length;P++)I=h(_,v[P],g),I!==null&&(p=s(I,p,P),R===null?x=I:R.sibling=I,R=I);return xe&&ei(_,P),x}for(I=r(_,I);P<v.length;P++)b=f(I,_,P,v[P],g),b!==null&&(t&&b.alternate!==null&&I.delete(b.key===null?P:b.key),p=s(b,p,P),R===null?x=b:R.sibling=b,R=b);return t&&I.forEach(function(ce){return e(_,ce)}),xe&&ei(_,P),x}function w(_,p,v,g){var x=ro(v);if(typeof x!="function")throw Error(D(150));if(v=x.call(v),v==null)throw Error(D(151));for(var R=x=null,I=p,P=p=0,b=null,Q=v.next();I!==null&&!Q.done;P++,Q=v.next()){I.index>P?(b=I,I=null):b=I.sibling;var ce=d(_,I,Q.value,g);if(ce===null){I===null&&(I=b);break}t&&I&&ce.alternate===null&&e(_,I),p=s(ce,p,P),R===null?x=ce:R.sibling=ce,R=ce,I=b}if(Q.done)return n(_,I),xe&&ei(_,P),x;if(I===null){for(;!Q.done;P++,Q=v.next())Q=h(_,Q.value,g),Q!==null&&(p=s(Q,p,P),R===null?x=Q:R.sibling=Q,R=Q);return xe&&ei(_,P),x}for(I=r(_,I);!Q.done;P++,Q=v.next())Q=f(I,_,P,Q.value,g),Q!==null&&(t&&Q.alternate!==null&&I.delete(Q.key===null?P:Q.key),p=s(Q,p,P),R===null?x=Q:R.sibling=Q,R=Q);return t&&I.forEach(function(te){return e(_,te)}),xe&&ei(_,P),x}function E(_,p,v,g){if(typeof v=="object"&&v!==null&&v.type===Ki&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case El:e:{for(var x=v.key,R=p;R!==null;){if(R.key===x){if(x=v.type,x===Ki){if(R.tag===7){n(_,R.sibling),p=i(R,v.props.children),p.return=_,_=p;break e}}else if(R.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===fr&&j1(x)===R.type){n(_,R.sibling),p=i(R,v.props),p.ref=lo(_,R,v),p.return=_,_=p;break e}n(_,R);break}else e(_,R);R=R.sibling}v.type===Ki?(p=pi(v.props.children,_.mode,g,v.key),p.return=_,_=p):(g=uu(v.type,v.key,v.props,null,_.mode,g),g.ref=lo(_,p,v),g.return=_,_=g)}return o(_);case Wi:e:{for(R=v.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(_,p.sibling),p=i(p,v.children||[]),p.return=_,_=p;break e}else{n(_,p);break}else e(_,p);p=p.sibling}p=rd(v,_.mode,g),p.return=_,_=p}return o(_);case fr:return R=v._init,E(_,p,R(v._payload),g)}if(xo(v))return y(_,p,v,g);if(ro(v))return w(_,p,v,g);Nl(_,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(_,p.sibling),p=i(p,v),p.return=_,_=p):(n(_,p),p=nd(v,_.mode,g),p.return=_,_=p),o(_)):n(_,p)}return E}var Is=Z4(!0),e2=Z4(!1),za={},In=Hr(za),ua=Hr(za),ca=Hr(za);function ai(t){if(t===za)throw Error(D(174));return t}function Zp(t,e){switch(ye(ca,e),ye(ua,t),ye(In,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xd(e,t)}we(In),ye(In,e)}function Ps(){we(In),we(ua),we(ca)}function t2(t){ai(ca.current);var e=ai(In.current),n=Xd(e,t.type);e!==n&&(ye(ua,t),ye(In,n))}function em(t){ua.current===t&&(we(In),we(ua))}var Pe=Hr(0);function Mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xh=[];function tm(){for(var t=0;t<Xh.length;t++)Xh[t]._workInProgressVersionPrimary=null;Xh.length=0}var iu=sr.ReactCurrentDispatcher,Yh=sr.ReactCurrentBatchConfig,Ei=0,Re=null,He=null,qe=null,Vu=!1,Oo=!1,ha=0,Cw=0;function dt(){throw Error(D(321))}function nm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mn(t[n],e[n]))return!1;return!0}function rm(t,e,n,r,i,s){if(Ei=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,iu.current=t===null||t.memoizedState===null?Aw:Rw,t=n(r,i),Oo){s=0;do{if(Oo=!1,ha=0,25<=s)throw Error(D(301));s+=1,qe=He=null,e.updateQueue=null,iu.current=kw,t=n(r,i)}while(Oo)}if(iu.current=Ou,e=He!==null&&He.next!==null,Ei=0,qe=He=Re=null,Vu=!1,e)throw Error(D(300));return t}function im(){var t=ha!==0;return ha=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Re.memoizedState=qe=t:qe=qe.next=t,qe}function tn(){if(He===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=qe===null?Re.memoizedState:qe.next;if(e!==null)qe=e,He=t;else{if(t===null)throw Error(D(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},qe===null?Re.memoizedState=qe=t:qe=qe.next=t}return qe}function da(t,e){return typeof e=="function"?e(t):e}function Jh(t){var e=tn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ei&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Re.lanes|=c,Ti|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,mn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Ti|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zh(t){var e=tn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);mn(s,e.memoizedState)||(Dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function n2(){}function r2(t,e){var n=Re,r=tn(),i=e(),s=!mn(r.memoizedState,i);if(s&&(r.memoizedState=i,Dt=!0),r=r.queue,sm(o2.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,fa(9,s2.bind(null,n,r,i,e),void 0,null),Ye===null)throw Error(D(349));Ei&30||i2(n,e,i)}return i}function i2(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function s2(t,e,n,r){e.value=n,e.getSnapshot=r,a2(e)&&l2(t)}function o2(t,e,n){return n(function(){a2(e)&&l2(t)})}function a2(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mn(t,n)}catch{return!0}}function l2(t){var e=Zn(t,1);e!==null&&pn(e,t,1,-1)}function F1(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=Pw.bind(null,Re,t),[e.memoizedState,t]}function fa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function u2(){return tn().memoizedState}function su(t,e,n,r){var i=_n();Re.flags|=t,i.memoizedState=fa(1|e,n,void 0,r===void 0?null:r)}function Dc(t,e,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&nm(r,o.deps)){i.memoizedState=fa(e,n,s,r);return}}Re.flags|=t,i.memoizedState=fa(1|e,n,s,r)}function U1(t,e){return su(8390656,8,t,e)}function sm(t,e){return Dc(2048,8,t,e)}function c2(t,e){return Dc(4,2,t,e)}function h2(t,e){return Dc(4,4,t,e)}function d2(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function f2(t,e,n){return n=n!=null?n.concat([t]):null,Dc(4,4,d2.bind(null,e,t),n)}function om(){}function p2(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function m2(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function g2(t,e,n){return Ei&21?(mn(n,e)||(n=_4(),Re.lanes|=n,Ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function Sw(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=Yh.transition;Yh.transition={};try{t(!1),e()}finally{le=n,Yh.transition=r}}function y2(){return tn().memoizedState}function Iw(t,e,n){var r=kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},v2(t))_2(e,n);else if(n=q4(t,e,n,r),n!==null){var i=It();pn(n,t,r,i),w2(n,e,r)}}function Pw(t,e,n){var r=kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(v2(t))_2(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,mn(a,o)){var l=e.interleaved;l===null?(i.next=i,Yp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=q4(t,e,i,r),n!==null&&(i=It(),pn(n,t,r,i),w2(n,e,r))}}function v2(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function _2(t,e){Oo=Vu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w2(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bp(t,n)}}var Ou={readContext:en,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},Aw={readContext:en,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:U1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,su(4194308,4,d2.bind(null,e,t),n)},useLayoutEffect:function(t,e){return su(4194308,4,t,e)},useInsertionEffect:function(t,e){return su(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Iw.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:F1,useDebugValue:om,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=F1(!1),e=t[0];return t=Sw.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=_n();if(xe){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),Ye===null)throw Error(D(349));Ei&30||i2(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,U1(o2.bind(null,r,s,t),[t]),r.flags|=2048,fa(9,s2.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_n(),e=Ye.identifierPrefix;if(xe){var n=Fn,r=jn;n=(r&~(1<<32-fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Rw={readContext:en,useCallback:p2,useContext:en,useEffect:sm,useImperativeHandle:f2,useInsertionEffect:c2,useLayoutEffect:h2,useMemo:m2,useReducer:Jh,useRef:u2,useState:function(){return Jh(da)},useDebugValue:om,useDeferredValue:function(t){var e=tn();return g2(e,He.memoizedState,t)},useTransition:function(){var t=Jh(da)[0],e=tn().memoizedState;return[t,e]},useMutableSource:n2,useSyncExternalStore:r2,useId:y2,unstable_isNewReconciler:!1},kw={readContext:en,useCallback:p2,useContext:en,useEffect:sm,useImperativeHandle:f2,useInsertionEffect:c2,useLayoutEffect:h2,useMemo:m2,useReducer:Zh,useRef:u2,useState:function(){return Zh(da)},useDebugValue:om,useDeferredValue:function(t){var e=tn();return He===null?e.memoizedState=t:g2(e,He.memoizedState,t)},useTransition:function(){var t=Zh(da)[0],e=tn().memoizedState;return[t,e]},useMutableSource:n2,useSyncExternalStore:r2,useId:y2,unstable_isNewReconciler:!1};function As(t,e){try{var n="",r=e;do n+=i_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ed(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Dw=typeof WeakMap=="function"?WeakMap:Map;function E2(t,e,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Qu||(Qu=!0,kf=r),wf(t,e)},n}function T2(t,e,n){n=Hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wf(t,e),typeof r!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Dw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Hw.bind(null,t,e,n),e.then(t,t))}function B1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function z1(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var Nw=sr.ReactCurrentOwner,Dt=!1;function Ct(t,e,n,r){e.child=t===null?e2(e,null,n,r):Is(e,t.child,n,r)}function H1(t,e,n,r,i){n=n.render;var s=e.ref;return gs(e,i),r=rm(t,e,n,r,s,i),n=im(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(xe&&n&&Hp(e),e.flags|=1,Ct(t,e,r,i),e.child)}function W1(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!pm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,x2(t,e,s,r,i)):(t=uu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,r)&&t.ref===e.ref)return er(t,e,i)}return e.flags|=1,t=Dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function x2(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(sa(s,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,er(t,e,i)}return Ef(t,e,n,r,i)}function C2(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(rs,bt),bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(rs,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(rs,bt),bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(rs,bt),bt|=r;return Ct(t,e,i,n),e.child}function S2(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ef(t,e,n,r,i){var s=Lt(n)?_i:Et.current;return s=Cs(e,s),gs(e,i),n=rm(t,e,n,r,s,i),r=im(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(xe&&r&&Hp(e),e.flags|=1,Ct(t,e,n,i),e.child)}function K1(t,e,n,r,i){if(Lt(n)){var s=!0;Au(e)}else s=!1;if(gs(e,i),e.stateNode===null)ou(t,e),J4(e,n,r),_f(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=en(u):(u=Lt(n)?_i:Et.current,u=Cs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Q1(e,o,r,u),pr=!1;var d=e.memoizedState;o.state=d,Lu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Nt.current||pr?(typeof c=="function"&&(vf(e,n,c,r),l=e.memoizedState),(a=pr||b1(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,X4(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:on(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=en(l):(l=Lt(n)?_i:Et.current,l=Cs(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Q1(e,o,r,l),pr=!1,d=e.memoizedState,o.state=d,Lu(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Nt.current||pr?(typeof f=="function"&&(vf(e,n,f,r),y=e.memoizedState),(u=pr||b1(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Tf(t,e,n,r,s,i)}function Tf(t,e,n,r,i,s){S2(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&N1(e,n,!1),er(t,e,s);r=e.stateNode,Nw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,a,s)):Ct(t,e,a,s),e.memoizedState=r.state,i&&N1(e,n,!0),e.child}function I2(t){var e=t.stateNode;e.pendingContext?D1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&D1(t,e.context,!1),Zp(t,e.containerInfo)}function G1(t,e,n,r,i){return Ss(),Kp(i),e.flags|=256,Ct(t,e,n,r),e.child}var xf={dehydrated:null,treeContext:null,retryLane:0};function Cf(t){return{baseLanes:t,cachePool:null,transitions:null}}function P2(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Pe,i&1),t===null)return gf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mc(o,r,0,null),t=pi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cf(n),e.memoizedState=xf,t):am(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Lw(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Dr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Dr(a,s):(s=pi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Cf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xf,r}return s=t.child,t=s.sibling,r=Dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function am(t,e){return e=Mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ll(t,e,n,r){return r!==null&&Kp(r),Is(e,t.child,null,n),t=am(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Lw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ed(Error(D(422))),Ll(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Mc({mode:"visible",children:r.children},i,0,null),s=pi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Is(e,t.child,null,o),e.child.memoizedState=Cf(o),e.memoizedState=xf,s);if(!(e.mode&1))return Ll(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(D(419)),r=ed(s,r,void 0),Ll(t,e,o,r)}if(a=(o&t.childLanes)!==0,Dt||a){if(r=Ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zn(t,i),pn(r,t,i,-1))}return fm(),r=ed(Error(D(421))),Ll(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ww.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qt=Pr(i.nextSibling),jt=e,xe=!0,un=null,t!==null&&(qt[Xt++]=jn,qt[Xt++]=Fn,qt[Xt++]=wi,jn=t.id,Fn=t.overflow,wi=e),e=am(e,r.children),e.flags|=4096,e)}function q1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yf(t.return,e,n)}function td(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function A2(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ct(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&q1(t,n,e);else if(t.tag===19)q1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Mu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),td(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Mu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}td(e,!0,n,null,s);break;case"together":td(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ou(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Mw(t,e,n){switch(e.tag){case 3:I2(e),Ss();break;case 5:t2(e);break;case 1:Lt(e.type)&&Au(e);break;case 4:Zp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Du,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?P2(t,e,n):(ye(Pe,Pe.current&1),t=er(t,e,n),t!==null?t.sibling:null);ye(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return A2(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,C2(t,e,n)}return er(t,e,n)}var R2,Sf,k2,D2;R2=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sf=function(){};k2=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ai(In.current);var s=null;switch(n){case"input":i=Wd(t,i),r=Wd(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=qd(t,i),r=qd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Iu)}Yd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};D2=function(t,e,n,r){n!==r&&(e.flags|=4)};function uo(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Vw(t,e,n){var r=e.pendingProps;switch(Wp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Lt(e.type)&&Pu(),ft(e),null;case 3:return r=e.stateNode,Ps(),we(Nt),we(Et),tm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,un!==null&&(Lf(un),un=null))),Sf(t,e),ft(e),null;case 5:em(e);var i=ai(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)k2(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return ft(e),null}if(t=ai(In.current),Dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[En]=e,r[la]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<So.length;i++)ve(So[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":i1(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":o1(r,s),ve("invalid",r)}Yd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,a,t),i=["children",""+a]):Jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Tl(r),s1(r,s,!0);break;case"textarea":Tl(r),a1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Iu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i4(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[En]=e,t[la]=r,R2(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jd(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<So.length;i++)ve(So[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":i1(t,r),i=Wd(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",t);break;case"textarea":o1(t,r),i=qd(t,r),ve("invalid",t);break;default:i=r}Yd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?a4(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&s4(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zo(t,l):typeof l=="number"&&Zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ve("scroll",t):l!=null&&Dp(t,s,l,o))}switch(n){case"input":Tl(t),s1(t,r,!1);break;case"textarea":Tl(t),a1(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ds(t,!!r.multiple,s,!1):r.defaultValue!=null&&ds(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Iu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)D2(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=ai(ca.current),ai(In.current),Dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[En]=e,(s=r.nodeValue!==n)&&(t=jt,t!==null))switch(t.tag){case 3:kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&kl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return ft(e),null;case 13:if(we(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Qt!==null&&e.mode&1&&!(e.flags&128))G4(),Ss(),e.flags|=98560,s=!1;else if(s=Dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[En]=e}else Ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else un!==null&&(Lf(un),un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?We===0&&(We=3):fm())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return Ps(),Sf(t,e),t===null&&oa(e.stateNode.containerInfo),ft(e),null;case 10:return Xp(e.type._context),ft(e),null;case 17:return Lt(e.type)&&Pu(),ft(e),null;case 19:if(we(Pe),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)uo(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Mu(t),o!==null){for(e.flags|=128,uo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>Rs&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Mu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return ft(e),null}else 2*be()-s.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=Pe.current,ye(Pe,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return dm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bt&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function Ow(t,e){switch(Wp(e),e.tag){case 1:return Lt(e.type)&&Pu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),we(Nt),we(Et),tm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return em(e),null;case 13:if(we(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));Ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Pe),null;case 4:return Ps(),null;case 10:return Xp(e.type._context),null;case 22:case 23:return dm(),null;case 24:return null;default:return null}}var Ml=!1,gt=!1,bw=typeof WeakSet=="function"?WeakSet:Set,O=null;function ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function If(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var X1=!1;function Qw(t,e){if(uf=xu,t=V4(),zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cf={focusedElem:t,selectionRange:n},xu=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,E=y.memoizedState,_=e.stateNode,p=_.getSnapshotBeforeUpdate(e.elementType===e.type?w:on(e.type,w),E);_.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(g){Ne(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return y=X1,X1=!1,y}function bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&If(e,n,s)}i=i.next}while(i!==r)}}function Nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function N2(t){var e=t.alternate;e!==null&&(t.alternate=null,N2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[En],delete e[la],delete e[ff],delete e[ww],delete e[Ew])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function L2(t){return t.tag===5||t.tag===3||t.tag===4}function Y1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||L2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Iu));else if(r!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}function Rf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}var rt=null,an=!1;function cr(t,e,n){for(n=n.child;n!==null;)M2(t,e,n),n=n.sibling}function M2(t,e,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:gt||ns(n,e);case 6:var r=rt,i=an;rt=null,cr(t,e,n),rt=r,an=i,rt!==null&&(an?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(an?(t=rt,n=n.stateNode,t.nodeType===8?Gh(t.parentNode,n):t.nodeType===1&&Gh(t,n),ra(t)):Gh(rt,n.stateNode));break;case 4:r=rt,i=an,rt=n.stateNode.containerInfo,an=!0,cr(t,e,n),rt=r,an=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&If(n,e,o),i=i.next}while(i!==r)}cr(t,e,n);break;case 1:if(!gt&&(ns(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,cr(t,e,n),gt=r):cr(t,e,n);break;default:cr(t,e,n)}}function J1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bw),e.forEach(function(r){var i=Kw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,an=!1;break e;case 3:rt=a.stateNode.containerInfo,an=!0;break e;case 4:rt=a.stateNode.containerInfo,an=!0;break e}a=a.return}if(rt===null)throw Error(D(160));M2(s,o,i),rt=null,an=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)V2(e,t),e=e.sibling}function V2(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),vn(t),r&4){try{bo(3,t,t.return),Nc(3,t)}catch(w){Ne(t,t.return,w)}try{bo(5,t,t.return)}catch(w){Ne(t,t.return,w)}}break;case 1:rn(e,t),vn(t),r&512&&n!==null&&ns(n,n.return);break;case 5:if(rn(e,t),vn(t),r&512&&n!==null&&ns(n,n.return),t.flags&32){var i=t.stateNode;try{Zo(i,"")}catch(w){Ne(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&n4(i,s),Jd(a,o);var u=Jd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?a4(i,h):c==="dangerouslySetInnerHTML"?s4(i,h):c==="children"?Zo(i,h):Dp(i,c,h,u)}switch(a){case"input":Kd(i,s);break;case"textarea":r4(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?ds(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?ds(i,!!s.multiple,s.defaultValue,!0):ds(i,!!s.multiple,s.multiple?[]:"",!1))}i[la]=s}catch(w){Ne(t,t.return,w)}}break;case 6:if(rn(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ne(t,t.return,w)}}break;case 3:if(rn(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(w){Ne(t,t.return,w)}break;case 4:rn(e,t),vn(t);break;case 13:rn(e,t),vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cm=be())),r&4&&J1(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(u=gt)||c,rn(e,t),gt=u):rn(e,t),vn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(h=O=c;O!==null;){switch(d=O,f=d.child,d.tag){case 0:case 11:case 14:case 15:bo(4,d,d.return);break;case 1:ns(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){Ne(r,n,w)}}break;case 5:ns(d,d.return);break;case 22:if(d.memoizedState!==null){eg(h);continue}}f!==null?(f.return=d,O=f):eg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=o4("display",o))}catch(w){Ne(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){Ne(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:rn(e,t),vn(t),r&4&&J1(t);break;case 21:break;default:rn(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(L2(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var s=Y1(t);Rf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Y1(t);Af(t,a,o);break;default:throw Error(D(161))}}catch(l){Ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jw(t,e,n){O=t,O2(t)}function O2(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ml;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||gt;a=Ml;var u=gt;if(Ml=o,(gt=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?tg(i):l!==null?(l.return=o,O=l):tg(i);for(;s!==null;)O=s,O2(s),s=s.sibling;O=i,Ml=a,gt=u}Z1(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Z1(t)}}function Z1(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||Nc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:on(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&O1(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}O1(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ra(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}gt||e.flags&512&&Pf(e)}catch(d){Ne(e,e.return,d)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function eg(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function tg(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nc(4,e)}catch(l){Ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ne(e,i,l)}}var s=e.return;try{Pf(e)}catch(l){Ne(e,s,l)}break;case 5:var o=e.return;try{Pf(e)}catch(l){Ne(e,o,l)}}}catch(l){Ne(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var Fw=Math.ceil,bu=sr.ReactCurrentDispatcher,lm=sr.ReactCurrentOwner,Zt=sr.ReactCurrentBatchConfig,se=0,Ye=null,$e=null,at=0,bt=0,rs=Hr(0),We=0,pa=null,Ti=0,Lc=0,um=0,Qo=null,kt=null,cm=0,Rs=1/0,bn=null,Qu=!1,kf=null,Rr=null,Vl=!1,xr=null,ju=0,jo=0,Df=null,au=-1,lu=0;function It(){return se&6?be():au!==-1?au:au=be()}function kr(t){return t.mode&1?se&2&&at!==0?at&-at:xw.transition!==null?(lu===0&&(lu=_4()),lu):(t=le,t!==0||(t=window.event,t=t===void 0?16:I4(t.type)),t):1}function pn(t,e,n,r){if(50<jo)throw jo=0,Df=null,Error(D(185));Ua(t,n,r),(!(se&2)||t!==Ye)&&(t===Ye&&(!(se&2)&&(Lc|=n),We===4&&yr(t,at)),Mt(t,r),n===1&&se===0&&!(e.mode&1)&&(Rs=be()+500,Rc&&Wr()))}function Mt(t,e){var n=t.callbackNode;x_(t,e);var r=Tu(t,t===Ye?at:0);if(r===0)n!==null&&c1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&c1(n),e===1)t.tag===0?Tw(ng.bind(null,t)):H4(ng.bind(null,t)),vw(function(){!(se&6)&&Wr()}),n=null;else{switch(w4(r)){case 1:n=Op;break;case 4:n=y4;break;case 16:n=Eu;break;case 536870912:n=v4;break;default:n=Eu}n=z2(n,b2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function b2(t,e){if(au=-1,lu=0,se&6)throw Error(D(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var r=Tu(t,t===Ye?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fu(t,r);else{e=r;var i=se;se|=2;var s=j2();(Ye!==t||at!==e)&&(bn=null,Rs=be()+500,fi(t,e));do try{Bw();break}catch(a){Q2(t,a)}while(1);qp(),bu.current=s,se=i,$e!==null?e=0:(Ye=null,at=0,e=We)}if(e!==0){if(e===2&&(i=rf(t),i!==0&&(r=i,e=Nf(t,i))),e===1)throw n=pa,fi(t,0),yr(t,r),Mt(t,be()),n;if(e===6)yr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Uw(i)&&(e=Fu(t,r),e===2&&(s=rf(t),s!==0&&(r=s,e=Nf(t,s))),e===1))throw n=pa,fi(t,0),yr(t,r),Mt(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:ti(t,kt,bn);break;case 3:if(yr(t,r),(r&130023424)===r&&(e=cm+500-be(),10<e)){if(Tu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=df(ti.bind(null,t,kt,bn),e);break}ti(t,kt,bn);break;case 4:if(yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fw(r/1960))-r,10<r){t.timeoutHandle=df(ti.bind(null,t,kt,bn),r);break}ti(t,kt,bn);break;case 5:ti(t,kt,bn);break;default:throw Error(D(329))}}}return Mt(t,be()),t.callbackNode===n?b2.bind(null,t):null}function Nf(t,e){var n=Qo;return t.current.memoizedState.isDehydrated&&(fi(t,e).flags|=256),t=Fu(t,e),t!==2&&(e=kt,kt=n,e!==null&&Lf(e)),t}function Lf(t){kt===null?kt=t:kt.push.apply(kt,t)}function Uw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~um,e&=~Lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fn(e),r=1<<n;t[n]=-1,e&=~r}}function ng(t){if(se&6)throw Error(D(327));ys();var e=Tu(t,0);if(!(e&1))return Mt(t,be()),null;var n=Fu(t,e);if(t.tag!==0&&n===2){var r=rf(t);r!==0&&(e=r,n=Nf(t,r))}if(n===1)throw n=pa,fi(t,0),yr(t,e),Mt(t,be()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ti(t,kt,bn),Mt(t,be()),null}function hm(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Rs=be()+500,Rc&&Wr())}}function xi(t){xr!==null&&xr.tag===0&&!(se&6)&&ys();var e=se;se|=1;var n=Zt.transition,r=le;try{if(Zt.transition=null,le=1,t)return t()}finally{le=r,Zt.transition=n,se=e,!(se&6)&&Wr()}}function dm(){bt=rs.current,we(rs)}function fi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yw(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Wp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pu();break;case 3:Ps(),we(Nt),we(Et),tm();break;case 5:em(r);break;case 4:Ps();break;case 13:we(Pe);break;case 19:we(Pe);break;case 10:Xp(r.type._context);break;case 22:case 23:dm()}n=n.return}if(Ye=t,$e=t=Dr(t.current,null),at=bt=e,We=0,pa=null,um=Lc=Ti=0,kt=Qo=null,oi!==null){for(e=0;e<oi.length;e++)if(n=oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}oi=null}return t}function Q2(t,e){do{var n=$e;try{if(qp(),iu.current=Ou,Vu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vu=!1}if(Ei=0,qe=He=Re=null,Oo=!1,ha=0,lm.current=null,n===null||n.return===null){We=1,pa=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=at,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=B1(o);if(f!==null){f.flags&=-257,z1(f,o,a,s,e),f.mode&1&&$1(s,u,e),e=f,l=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){$1(s,u,e),fm();break e}l=Error(D(426))}}else if(xe&&a.mode&1){var E=B1(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),z1(E,o,a,s,e),Kp(As(l,a));break e}}s=l=As(l,a),We!==4&&(We=2),Qo===null?Qo=[s]:Qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=E2(s,l,e);V1(s,_);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Rr===null||!Rr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=T2(s,a,e);V1(s,g);break e}}s=s.return}while(s!==null)}U2(n)}catch(x){e=x,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function j2(){var t=bu.current;return bu.current=Ou,t===null?Ou:t}function fm(){(We===0||We===3||We===2)&&(We=4),Ye===null||!(Ti&268435455)&&!(Lc&268435455)||yr(Ye,at)}function Fu(t,e){var n=se;se|=2;var r=j2();(Ye!==t||at!==e)&&(bn=null,fi(t,e));do try{$w();break}catch(i){Q2(t,i)}while(1);if(qp(),se=n,bu.current=r,$e!==null)throw Error(D(261));return Ye=null,at=0,We}function $w(){for(;$e!==null;)F2($e)}function Bw(){for(;$e!==null&&!p_();)F2($e)}function F2(t){var e=B2(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?U2(t):$e=e,lm.current=null}function U2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ow(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,$e=null;return}}else if(n=Vw(n,e,bt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);We===0&&(We=5)}function ti(t,e,n){var r=le,i=Zt.transition;try{Zt.transition=null,le=1,zw(t,e,n,r)}finally{Zt.transition=i,le=r}return null}function zw(t,e,n,r){do ys();while(xr!==null);if(se&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(C_(t,s),t===Ye&&($e=Ye=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vl||(Vl=!0,z2(Eu,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=le;le=1;var a=se;se|=4,lm.current=null,Qw(t,n),V2(n,t),cw(cf),xu=!!uf,cf=uf=null,t.current=n,jw(n),m_(),se=a,le=o,Zt.transition=s}else t.current=n;if(Vl&&(Vl=!1,xr=t,ju=i),s=t.pendingLanes,s===0&&(Rr=null),v_(n.stateNode),Mt(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qu)throw Qu=!1,t=kf,kf=null,t;return ju&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===Df?jo++:(jo=0,Df=t):jo=0,Wr(),null}function ys(){if(xr!==null){var t=w4(ju),e=Zt.transition,n=le;try{if(Zt.transition=null,le=16>t?16:t,xr===null)var r=!1;else{if(t=xr,xr=null,ju=0,se&6)throw Error(D(331));var i=se;for(se|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:bo(8,c,s)}var h=c.child;if(h!==null)h.return=c,O=h;else for(;O!==null;){c=O;var d=c.sibling,f=c.return;if(N2(c),c===u){O=null;break}if(d!==null){d.return=f,O=d;break}O=f}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,O=_;break e}O=s.return}}var p=t.current;for(O=p;O!==null;){o=O;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,O=v;else e:for(o=p;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nc(9,a)}}catch(x){Ne(a,a.return,x)}if(a===o){O=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,O=g;break e}O=a.return}}if(se=i,Wr(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Cc,t)}catch{}r=!0}return r}finally{le=n,Zt.transition=e}}return!1}function rg(t,e,n){e=As(n,e),e=E2(t,e,1),t=Ar(t,e,1),e=It(),t!==null&&(Ua(t,1,e),Mt(t,e))}function Ne(t,e,n){if(t.tag===3)rg(t,t,n);else for(;e!==null;){if(e.tag===3){rg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))){t=As(n,t),t=T2(e,t,1),e=Ar(e,t,1),t=It(),e!==null&&(Ua(e,1,t),Mt(e,t));break}}e=e.return}}function Hw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,Ye===t&&(at&n)===n&&(We===4||We===3&&(at&130023424)===at&&500>be()-cm?fi(t,0):um|=n),Mt(t,e)}function $2(t,e){e===0&&(t.mode&1?(e=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):e=1);var n=It();t=Zn(t,e),t!==null&&(Ua(t,e,n),Mt(t,n))}function Ww(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$2(t,n)}function Kw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),$2(t,n)}var B2;B2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,Mw(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,xe&&e.flags&1048576&&W4(e,ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ou(t,e),t=e.pendingProps;var i=Cs(e,Et.current);gs(e,n),i=rm(null,e,r,t,i,n);var s=im();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(s=!0,Au(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jp(e),i.updater=kc,e.stateNode=i,i._reactInternals=e,_f(e,r,t,n),e=Tf(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&Hp(e),Ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ou(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qw(r),t=on(r,t),i){case 0:e=Ef(null,e,r,t,n);break e;case 1:e=K1(null,e,r,t,n);break e;case 11:e=H1(null,e,r,t,n);break e;case 14:e=W1(null,e,r,on(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),Ef(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),K1(t,e,r,i,n);case 3:e:{if(I2(e),t===null)throw Error(D(387));r=e.pendingProps,s=e.memoizedState,i=s.element,X4(t,e),Lu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=As(Error(D(423)),e),e=G1(t,e,r,n,i);break e}else if(r!==i){i=As(Error(D(424)),e),e=G1(t,e,r,n,i);break e}else for(Qt=Pr(e.stateNode.containerInfo.firstChild),jt=e,xe=!0,un=null,n=e2(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ss(),r===i){e=er(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return t2(e),t===null&&gf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hf(r,i)?o=null:s!==null&&hf(r,s)&&(e.flags|=32),S2(t,e),Ct(t,e,o,n),e.child;case 6:return t===null&&gf(e),null;case 13:return P2(t,e,n);case 4:return Zp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Is(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),H1(t,e,r,i,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Du,r._currentValue),r._currentValue=o,s!==null)if(mn(s.value,o)){if(s.children===i.children&&!Nt.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Hn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(D(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gs(e,n),i=en(i),r=r(i),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,i=on(r,e.pendingProps),i=on(r.type,i),W1(t,e,r,i,n);case 15:return x2(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),ou(t,e),e.tag=1,Lt(r)?(t=!0,Au(e)):t=!1,gs(e,n),J4(e,r,i),_f(e,r,i,n),Tf(null,e,r,!0,t,n);case 19:return A2(t,e,n);case 22:return C2(t,e,n)}throw Error(D(156,e.tag))};function z2(t,e){return g4(t,e)}function Gw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new Gw(t,e,n,r)}function pm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qw(t){if(typeof t=="function")return pm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lp)return 11;if(t===Mp)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")pm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ki:return pi(n.children,i,s,e);case Np:o=8,i|=8;break;case $d:return t=Jt(12,n,e,i|2),t.elementType=$d,t.lanes=s,t;case Bd:return t=Jt(13,n,e,i),t.elementType=Bd,t.lanes=s,t;case zd:return t=Jt(19,n,e,i),t.elementType=zd,t.lanes=s,t;case Zv:return Mc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yv:o=10;break e;case Jv:o=9;break e;case Lp:o=11;break e;case Mp:o=14;break e;case fr:o=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function pi(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function Mc(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=Zv,t.lanes=n,t.stateNode={isHidden:!1},t}function nd(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function rd(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bh(0),this.expirationTimes=bh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mm(t,e,n,r,i,s,o,a,l){return t=new Xw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jp(s),t}function Yw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function H2(t){if(!t)return Qr;t=t._reactInternals;e:{if(Li(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(Lt(n))return z4(t,n,e)}return e}function W2(t,e,n,r,i,s,o,a,l){return t=mm(n,r,!0,t,i,s,o,a,l),t.context=H2(null),n=t.current,r=It(),i=kr(n),s=Hn(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,Ua(t,i,r),Mt(t,r),t}function Vc(t,e,n,r){var i=e.current,s=It(),o=kr(i);return n=H2(n),e.context===null?e.context=n:e.pendingContext=n,e=Hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(pn(t,i,o,s),ru(t,i,o)),o}function Uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ig(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gm(t,e){ig(t,e),(t=t.alternate)&&ig(t,e)}function Jw(){return null}var K2=typeof reportError=="function"?reportError:function(t){console.error(t)};function ym(t){this._internalRoot=t}Oc.prototype.render=ym.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));Vc(t,e,null,null)};Oc.prototype.unmount=ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xi(function(){Vc(null,t,null,null)}),e[Jn]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=x4();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gr.length&&e!==0&&e<gr[n].priority;n++);gr.splice(n,0,t),n===0&&S4(t)}};function vm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sg(){}function Zw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Uu(o);s.call(u)}}var o=W2(e,r,t,0,null,!1,!1,"",sg);return t._reactRootContainer=o,t[Jn]=o.current,oa(t.nodeType===8?t.parentNode:t),xi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Uu(l);a.call(u)}}var l=mm(t,0,!1,null,null,!1,!1,"",sg);return t._reactRootContainer=l,t[Jn]=l.current,oa(t.nodeType===8?t.parentNode:t),xi(function(){Vc(e,l,n,r)}),l}function Qc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Uu(o);a.call(l)}}Vc(e,o,t,i)}else o=Zw(n,e,t,i,r);return Uu(o)}E4=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(bp(e,n|1),Mt(e,be()),!(se&6)&&(Rs=be()+500,Wr()))}break;case 13:xi(function(){var r=Zn(t,1);if(r!==null){var i=It();pn(r,t,1,i)}}),gm(t,1)}};Qp=function(t){if(t.tag===13){var e=Zn(t,134217728);if(e!==null){var n=It();pn(e,t,134217728,n)}gm(t,134217728)}};T4=function(t){if(t.tag===13){var e=kr(t),n=Zn(t,e);if(n!==null){var r=It();pn(n,t,e,r)}gm(t,e)}};x4=function(){return le};C4=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};ef=function(t,e,n){switch(e){case"input":if(Kd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ac(r);if(!i)throw Error(D(90));t4(r),Kd(r,i)}}}break;case"textarea":r4(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};c4=hm;h4=xi;var e8={usingClientEntryPoint:!1,Events:[Ba,Yi,Ac,l4,u4,hm]},co={findFiberByHostInstance:si,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},t8={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=p4(t),t===null?null:t.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||Jw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{Cc=Ol.inject(t8),Sn=Ol}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e8;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vm(e))throw Error(D(200));return Yw(t,e,null,n)};zt.createRoot=function(t,e){if(!vm(t))throw Error(D(299));var n=!1,r="",i=K2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=mm(t,1,!1,null,null,n,!1,r,i),t[Jn]=e.current,oa(t.nodeType===8?t.parentNode:t),new ym(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=p4(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return xi(t)};zt.hydrate=function(t,e,n){if(!bc(e))throw Error(D(200));return Qc(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!vm(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=K2;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=W2(e,null,t,1,n??null,i,!1,s,o),t[Jn]=e.current,oa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Oc(e)};zt.render=function(t,e,n){if(!bc(e))throw Error(D(200));return Qc(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!bc(t))throw Error(D(40));return t._reactRootContainer?(xi(function(){Qc(null,null,t,!1,function(){t._reactRootContainer=null,t[Jn]=null})}),!0):!1};zt.unstable_batchedUpdates=hm;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bc(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return Qc(t,e,n,!1,r)};zt.version="18.2.0-next-9e3b772b8-20220608";function G2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G2)}catch(t){console.error(t)}}G2(),Wv.exports=zt;var n8=Wv.exports,og=n8;Fd.createRoot=og.createRoot,Fd.hydrateRoot=og.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Se(){return Se=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Se.apply(this,arguments)}var Fe;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fe||(Fe={}));const ag="popstate";function r8(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ma("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ci(i)}return s8(e,n,null,t)}function Z(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ks(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function i8(){return Math.random().toString(36).substr(2,8)}function lg(t,e){return{usr:t.state,key:t.key,idx:e}}function ma(t,e,n,r){return n===void 0&&(n=null),Se({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?or(e):e,{state:n,key:e&&e.key||r||i8()})}function Ci(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function or(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function s8(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Fe.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Se({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Fe.Pop;let E=c(),_=E==null?null:E-u;u=E,l&&l({action:a,location:w.location,delta:_})}function d(E,_){a=Fe.Push;let p=ma(w.location,E,_);n&&n(p,E),u=c()+1;let v=lg(p,u),g=w.createHref(p);try{o.pushState(v,"",g)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(g)}s&&l&&l({action:a,location:w.location,delta:1})}function f(E,_){a=Fe.Replace;let p=ma(w.location,E,_);n&&n(p,E),u=c();let v=lg(p,u),g=w.createHref(p);o.replaceState(v,"",g),s&&l&&l({action:a,location:w.location,delta:0})}function y(E){let _=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:Ci(E);return Z(_,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,_)}let w={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ag,h),l=E,()=>{i.removeEventListener(ag,h),l=null}},createHref(E){return e(i,E)},createURL:y,encodeLocation(E){let _=y(E);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:d,replace:f,go(E){return o.go(E)}};return w}var Oe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Oe||(Oe={}));const o8=new Set(["lazy","caseSensitive","path","id","index","children"]);function a8(t){return t.index===!0}function Mf(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(Z(i.index!==!0||!i.children,"Cannot specify children on an index route"),Z(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),a8(i)){let l=Se({},i,e(i),{id:a});return r[a]=l,l}else{let l=Se({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Mf(i.children,e,o,r)),l}})}function is(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?or(e):e,i=Bs(r.pathname||"/",n);if(i==null)return null;let s=q2(t);u8(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=v8(s[a],E8(i));return o}function l8(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function q2(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Z(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Wn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Z(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),q2(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:g8(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of X2(s.path))i(s,o,l)}),e}function X2(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=X2(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function u8(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:y8(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const c8=/^:\w+$/,h8=3,d8=2,f8=1,p8=10,m8=-2,ug=t=>t==="*";function g8(t,e){let n=t.split("/"),r=n.length;return n.some(ug)&&(r+=m8),e&&(r+=d8),n.filter(i=>!ug(i)).reduce((i,s)=>i+(c8.test(s)?h8:s===""?f8:p8),r)}function y8(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function v8(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=_8({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Wn([i,c.pathname]),pathnameBase:S8(Wn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Wn([i,c.pathnameBase]))}return s}function _8(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=w8(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=T8(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function w8(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ks(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function E8(t){try{return decodeURI(t)}catch(e){return ks(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function T8(t,e){try{return decodeURIComponent(t)}catch(n){return ks(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Bs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function x8(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?or(t):t;return{pathname:n?n.startsWith("/")?n:C8(n,e):e,search:I8(r),hash:P8(i)}}function C8(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function id(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ha(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=or(t):(i=Se({},t),Z(!i.pathname||!i.pathname.includes("?"),id("?","pathname","search",i)),Z(!i.pathname||!i.pathname.includes("#"),id("#","pathname","hash",i)),Z(!i.search||!i.search.includes("#"),id("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=x8(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Wn=t=>t.join("/").replace(/\/\/+/g,"/"),S8=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),I8=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,P8=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class _m{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Y2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const J2=["post","put","patch","delete"],A8=new Set(J2),R8=["get",...J2],k8=new Set(R8),D8=new Set([301,302,303,307,308]),N8=new Set([307,308]),sd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},L8={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ho={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Z2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M8=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function V8(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;Z(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let T=t.detectErrorBoundary;i=C=>({hasErrorBoundary:T(C)})}else i=M8;let s={},o=Mf(t.routes,i,void 0,s),a,l=t.basename||"/",u=Se({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,f=null,y=null,w=t.hydrationData!=null,E=is(o,t.history.location,l),_=null;if(E==null){let T=Gt(404,{pathname:t.history.location.pathname}),{matches:C,route:A}=yg(o);E=C,_={[A.id]:T}}let p=!E.some(T=>T.route.lazy)&&(!E.some(T=>T.route.loader)||t.hydrationData!=null),v,g={historyAction:t.history.action,location:t.history.location,matches:E,initialized:p,navigation:sd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||_,fetchers:new Map,blockers:new Map},x=Fe.Pop,R=!1,I,P=!1,b=!1,Q=[],ce=[],te=new Map,Be=0,fe=-1,he=new Map,De=new Set,nt=new Map,M=new Map,U=new Map,W=!1;function z(){return c=t.history.listen(T=>{let{action:C,location:A,delta:V}=T;if(W){W=!1;return}ks(U.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let X=G0({currentLocation:g.location,nextLocation:A,historyAction:C});if(X&&V!=null){W=!0,t.history.go(V*-1),vl(X,{state:"blocked",location:A,proceed(){vl(X,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),t.history.go(V)},reset(){let K=new Map(g.blockers);K.set(X,ho),ae({blockers:K})}});return}return Mn(C,A)}),g.initialized||Mn(Fe.Pop,g.location),v}function me(){c&&c(),h.clear(),I&&I.abort(),g.fetchers.forEach((T,C)=>Sh(C)),g.blockers.forEach((T,C)=>K0(C))}function Nn(T){return h.add(T),()=>h.delete(T)}function ae(T){g=Se({},g,T),h.forEach(C=>C(g))}function Wt(T,C){var A,V;let X=g.actionData!=null&&g.navigation.formMethod!=null&&ln(g.navigation.formMethod)&&g.navigation.state==="loading"&&((A=T.state)==null?void 0:A._isRedirect)!==!0,K;C.actionData?Object.keys(C.actionData).length>0?K=C.actionData:K=null:X?K=g.actionData:K=null;let Y=C.loaderData?gg(g.loaderData,C.loaderData,C.matches||[],C.errors):g.loaderData,$=g.blockers;$.size>0&&($=new Map($),$.forEach((Ce,ht)=>$.set(ht,ho)));let F=R===!0||g.navigation.formMethod!=null&&ln(g.navigation.formMethod)&&((V=T.state)==null?void 0:V._isRedirect)!==!0;a&&(o=a,a=void 0),P||x===Fe.Pop||(x===Fe.Push?t.history.push(T,T.state):x===Fe.Replace&&t.history.replace(T,T.state)),ae(Se({},C,{actionData:K,loaderData:Y,historyAction:x,location:T,initialized:!0,navigation:sd,revalidation:"idle",restoreScrollPosition:X0(T,C.matches||g.matches),preventScrollReset:F,blockers:$})),x=Fe.Pop,R=!1,P=!1,b=!1,Q=[],ce=[]}async function ct(T,C){if(typeof T=="number"){t.history.go(T);return}let A=Vf(g.location,g.matches,l,u.v7_prependBasename,T,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:V,submission:X,error:K}=cg(u.v7_normalizeFormMethod,!1,A,C),Y=g.location,$=ma(g.location,V,C&&C.state);$=Se({},$,t.history.encodeLocation($));let F=C&&C.replace!=null?C.replace:void 0,Ce=Fe.Push;F===!0?Ce=Fe.Replace:F===!1||X!=null&&ln(X.formMethod)&&X.formAction===g.location.pathname+g.location.search&&(Ce=Fe.Replace);let ht=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,oe=G0({currentLocation:Y,nextLocation:$,historyAction:Ce});if(oe){vl(oe,{state:"blocked",location:$,proceed(){vl(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:$}),ct(T,C)},reset(){let pe=new Map(g.blockers);pe.set(oe,ho),ae({blockers:pe})}});return}return await Mn(Ce,$,{submission:X,pendingError:K,preventScrollReset:ht,replace:C&&C.replace})}function Ln(){if(Ch(),ae({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Mn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Mn(x||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Mn(T,C,A){I&&I.abort(),I=null,x=T,P=(A&&A.startUninterruptedRevalidation)===!0,I7(g.location,g.matches),R=(A&&A.preventScrollReset)===!0;let V=a||o,X=A&&A.overrideNavigation,K=is(V,C,l);if(!K){let pe=Gt(404,{pathname:C.pathname}),{matches:Ve,route:Yr}=yg(V);Ih(),Wt(C,{matches:Ve,loaderData:{},errors:{[Yr.id]:pe}});return}if(g.initialized&&!b&&F8(g.location,C)&&!(A&&A.submission&&ln(A.submission.formMethod))){Wt(C,{matches:K});return}I=new AbortController;let Y=po(t.history,C,I.signal,A&&A.submission),$,F;if(A&&A.pendingError)F={[ss(K).route.id]:A.pendingError};else if(A&&A.submission&&ln(A.submission.formMethod)){let pe=await Zs(Y,C,A.submission,K,{replace:A.replace});if(pe.shortCircuited)return;$=pe.pendingActionData,F=pe.pendingActionError,X=od(C,A.submission),Y=new Request(Y.url,{signal:Y.signal})}let{shortCircuited:Ce,loaderData:ht,errors:oe}=await Ui(Y,C,K,X,A&&A.submission,A&&A.fetcherSubmission,A&&A.replace,$,F);Ce||(I=null,Wt(C,Se({matches:K},$?{actionData:$}:{},{loaderData:ht,errors:oe})))}async function Zs(T,C,A,V,X){X===void 0&&(X={}),Ch();let K=z8(C,A);ae({navigation:K});let Y,$=bf(V,C);if(!$.route.action&&!$.route.lazy)Y={type:Oe.error,error:Gt(405,{method:T.method,pathname:C.pathname,routeId:$.route.id})};else if(Y=await fo("action",T,$,V,s,i,l),T.signal.aborted)return{shortCircuited:!0};if(vs(Y)){let F;return X&&X.replace!=null?F=X.replace:F=Y.location===g.location.pathname+g.location.search,await eo(g,Y,{submission:A,replace:F}),{shortCircuited:!0}}if(Fo(Y)){let F=ss(V,$.route.id);return(X&&X.replace)!==!0&&(x=Fe.Push),{pendingActionData:{},pendingActionError:{[F.route.id]:Y.error}}}if(li(Y))throw Gt(400,{type:"defer-action"});return{pendingActionData:{[$.route.id]:Y.data}}}async function Ui(T,C,A,V,X,K,Y,$,F){let Ce=V||od(C,X),ht=X||K||wg(Ce),oe=a||o,[pe,Ve]=hg(t.history,g,A,ht,C,b,Q,ce,nt,De,oe,l,$,F);if(Ih(de=>!(A&&A.some(nn=>nn.route.id===de))||pe&&pe.some(nn=>nn.route.id===de)),fe=++Be,pe.length===0&&Ve.length===0){let de=H0();return Wt(C,Se({matches:A,loaderData:{},errors:F||null},$?{actionData:$}:{},de?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!P){Ve.forEach(nn=>{let ur=g.fetchers.get(nn.key),Dh=mo(void 0,ur?ur.data:void 0);g.fetchers.set(nn.key,Dh)});let de=$||g.actionData;ae(Se({navigation:Ce},de?Object.keys(de).length===0?{actionData:null}:{actionData:de}:{},Ve.length>0?{fetchers:new Map(g.fetchers)}:{}))}Ve.forEach(de=>{te.has(de.key)&&lr(de.key),de.controller&&te.set(de.key,de.controller)});let Yr=()=>Ve.forEach(de=>lr(de.key));I&&I.signal.addEventListener("abort",Yr);let{results:Jr,loaderResults:to,fetcherResults:Ph}=await B0(g.matches,A,pe,Ve,T);if(T.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",Yr),Ve.forEach(de=>te.delete(de.key));let Vn=vg(Jr);if(Vn){if(Vn.idx>=pe.length){let de=Ve[Vn.idx-pe.length].key;De.add(de)}return await eo(g,Vn.result,{replace:Y}),{shortCircuited:!0}}let{loaderData:On,errors:_l}=mg(g,A,pe,to,F,Ve,Ph,M);M.forEach((de,nn)=>{de.subscribe(ur=>{(ur||de.done)&&M.delete(nn)})});let Ah=H0(),Rh=W0(fe),kh=Ah||Rh||Ve.length>0;return Se({loaderData:On,errors:_l},kh?{fetchers:new Map(g.fetchers)}:{})}function yn(T){return g.fetchers.get(T)||L8}function ml(T,C,A,V){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");te.has(T)&&lr(T);let X=a||o,K=Vf(g.location,g.matches,l,u.v7_prependBasename,A,C,V==null?void 0:V.relative),Y=is(X,K,l);if(!Y){yl(T,C,Gt(404,{pathname:K}));return}let{path:$,submission:F,error:Ce}=cg(u.v7_normalizeFormMethod,!0,K,V);if(Ce){yl(T,C,Ce);return}let ht=bf(Y,$);if(R=(V&&V.preventScrollReset)===!0,F&&ln(F.formMethod)){gl(T,C,$,ht,Y,F);return}nt.set(T,{routeId:C,path:$}),x7(T,C,$,ht,Y,F)}async function gl(T,C,A,V,X,K){if(Ch(),nt.delete(T),!V.route.action&&!V.route.lazy){let ze=Gt(405,{method:K.formMethod,pathname:A,routeId:C});yl(T,C,ze);return}let Y=g.fetchers.get(T),$=H8(K,Y);g.fetchers.set(T,$),ae({fetchers:new Map(g.fetchers)});let F=new AbortController,Ce=po(t.history,A,F.signal,K);te.set(T,F);let ht=Be,oe=await fo("action",Ce,V,X,s,i,l);if(Ce.signal.aborted){te.get(T)===F&&te.delete(T);return}if(vs(oe))if(te.delete(T),fe>ht){let ze=zi(void 0);g.fetchers.set(T,ze),ae({fetchers:new Map(g.fetchers)});return}else{De.add(T);let ze=mo(K);return g.fetchers.set(T,ze),ae({fetchers:new Map(g.fetchers)}),eo(g,oe,{fetcherSubmission:K})}if(Fo(oe)){yl(T,C,oe.error);return}if(li(oe))throw Gt(400,{type:"defer-action"});let pe=g.navigation.location||g.location,Ve=po(t.history,pe,F.signal),Yr=a||o,Jr=g.navigation.state!=="idle"?is(Yr,g.navigation.location,l):g.matches;Z(Jr,"Didn't find any matches after fetcher action");let to=++Be;he.set(T,to);let Ph=mo(K,oe.data);g.fetchers.set(T,Ph);let[Vn,On]=hg(t.history,g,Jr,K,pe,b,Q,ce,nt,De,Yr,l,{[V.route.id]:oe.data},void 0);On.filter(ze=>ze.key!==T).forEach(ze=>{let no=ze.key,Y0=g.fetchers.get(no),A7=mo(void 0,Y0?Y0.data:void 0);g.fetchers.set(no,A7),te.has(no)&&lr(no),ze.controller&&te.set(no,ze.controller)}),ae({fetchers:new Map(g.fetchers)});let _l=()=>On.forEach(ze=>lr(ze.key));F.signal.addEventListener("abort",_l);let{results:Ah,loaderResults:Rh,fetcherResults:kh}=await B0(g.matches,Jr,Vn,On,Ve);if(F.signal.aborted)return;F.signal.removeEventListener("abort",_l),he.delete(T),te.delete(T),On.forEach(ze=>te.delete(ze.key));let de=vg(Ah);if(de){if(de.idx>=Vn.length){let ze=On[de.idx-Vn.length].key;De.add(ze)}return eo(g,de.result)}let{loaderData:nn,errors:ur}=mg(g,g.matches,Vn,Rh,void 0,On,kh,M);if(g.fetchers.has(T)){let ze=zi(oe.data);g.fetchers.set(T,ze)}let Dh=W0(to);g.navigation.state==="loading"&&to>fe?(Z(x,"Expected pending action"),I&&I.abort(),Wt(g.navigation.location,{matches:Jr,loaderData:nn,errors:ur,fetchers:new Map(g.fetchers)})):(ae(Se({errors:ur,loaderData:gg(g.loaderData,nn,Jr,ur)},Dh||On.length>0?{fetchers:new Map(g.fetchers)}:{})),b=!1)}async function x7(T,C,A,V,X,K){let Y=g.fetchers.get(T),$=mo(K,Y?Y.data:void 0);g.fetchers.set(T,$),ae({fetchers:new Map(g.fetchers)});let F=new AbortController,Ce=po(t.history,A,F.signal);te.set(T,F);let ht=Be,oe=await fo("loader",Ce,V,X,s,i,l);if(li(oe)&&(oe=await n3(oe,Ce.signal,!0)||oe),te.get(T)===F&&te.delete(T),Ce.signal.aborted)return;if(vs(oe))if(fe>ht){let Ve=zi(void 0);g.fetchers.set(T,Ve),ae({fetchers:new Map(g.fetchers)});return}else{De.add(T),await eo(g,oe);return}if(Fo(oe)){let Ve=ss(g.matches,C);g.fetchers.delete(T),ae({fetchers:new Map(g.fetchers),errors:{[Ve.route.id]:oe.error}});return}Z(!li(oe),"Unhandled fetcher deferred data");let pe=zi(oe.data);g.fetchers.set(T,pe),ae({fetchers:new Map(g.fetchers)})}async function eo(T,C,A){let{submission:V,fetcherSubmission:X,replace:K}=A===void 0?{}:A;C.revalidate&&(b=!0);let Y=ma(T.location,C.location,{_isRedirect:!0});if(Z(Y,"Expected a location on the redirect navigation"),n){let pe=!1;if(C.reloadDocument)pe=!0;else if(Z2.test(C.location)){const Ve=t.history.createURL(C.location);pe=Ve.origin!==e.location.origin||Bs(Ve.pathname,l)==null}if(pe){K?e.location.replace(C.location):e.location.assign(C.location);return}}I=null;let $=K===!0?Fe.Replace:Fe.Push,{formMethod:F,formAction:Ce,formEncType:ht}=T.navigation;!V&&!X&&F&&Ce&&ht&&(V=wg(T.navigation));let oe=V||X;if(N8.has(C.status)&&oe&&ln(oe.formMethod))await Mn($,Y,{submission:Se({},oe,{formAction:C.location}),preventScrollReset:R});else{let pe=od(Y,V);await Mn($,Y,{overrideNavigation:pe,fetcherSubmission:X,preventScrollReset:R})}}async function B0(T,C,A,V,X){let K=await Promise.all([...A.map(F=>fo("loader",X,F,C,s,i,l)),...V.map(F=>F.matches&&F.match&&F.controller?fo("loader",po(t.history,F.path,F.controller.signal),F.match,F.matches,s,i,l):{type:Oe.error,error:Gt(404,{pathname:F.path})})]),Y=K.slice(0,A.length),$=K.slice(A.length);return await Promise.all([_g(T,A,Y,Y.map(()=>X.signal),!1,g.loaderData),_g(T,V.map(F=>F.match),$,V.map(F=>F.controller?F.controller.signal:null),!0)]),{results:K,loaderResults:Y,fetcherResults:$}}function Ch(){b=!0,Q.push(...Ih()),nt.forEach((T,C)=>{te.has(C)&&(ce.push(C),lr(C))})}function yl(T,C,A){let V=ss(g.matches,C);Sh(T),ae({errors:{[V.route.id]:A},fetchers:new Map(g.fetchers)})}function Sh(T){let C=g.fetchers.get(T);te.has(T)&&!(C&&C.state==="loading"&&he.has(T))&&lr(T),nt.delete(T),he.delete(T),De.delete(T),g.fetchers.delete(T)}function lr(T){let C=te.get(T);Z(C,"Expected fetch controller: "+T),C.abort(),te.delete(T)}function z0(T){for(let C of T){let A=yn(C),V=zi(A.data);g.fetchers.set(C,V)}}function H0(){let T=[],C=!1;for(let A of De){let V=g.fetchers.get(A);Z(V,"Expected fetcher: "+A),V.state==="loading"&&(De.delete(A),T.push(A),C=!0)}return z0(T),C}function W0(T){let C=[];for(let[A,V]of he)if(V<T){let X=g.fetchers.get(A);Z(X,"Expected fetcher: "+A),X.state==="loading"&&(lr(A),he.delete(A),C.push(A))}return z0(C),C.length>0}function C7(T,C){let A=g.blockers.get(T)||ho;return U.get(T)!==C&&U.set(T,C),A}function K0(T){g.blockers.delete(T),U.delete(T)}function vl(T,C){let A=g.blockers.get(T)||ho;Z(A.state==="unblocked"&&C.state==="blocked"||A.state==="blocked"&&C.state==="blocked"||A.state==="blocked"&&C.state==="proceeding"||A.state==="blocked"&&C.state==="unblocked"||A.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+A.state+" -> "+C.state);let V=new Map(g.blockers);V.set(T,C),ae({blockers:V})}function G0(T){let{currentLocation:C,nextLocation:A,historyAction:V}=T;if(U.size===0)return;U.size>1&&ks(!1,"A router only supports one blocker at a time");let X=Array.from(U.entries()),[K,Y]=X[X.length-1],$=g.blockers.get(K);if(!($&&$.state==="proceeding")&&Y({currentLocation:C,nextLocation:A,historyAction:V}))return K}function Ih(T){let C=[];return M.forEach((A,V)=>{(!T||T(V))&&(A.cancel(),C.push(V),M.delete(V))}),C}function S7(T,C,A){if(d=T,y=C,f=A||null,!w&&g.navigation===sd){w=!0;let V=X0(g.location,g.matches);V!=null&&ae({restoreScrollPosition:V})}return()=>{d=null,y=null,f=null}}function q0(T,C){return f&&f(T,C.map(V=>l8(V,g.loaderData)))||T.key}function I7(T,C){if(d&&y){let A=q0(T,C);d[A]=y()}}function X0(T,C){if(d){let A=q0(T,C),V=d[A];if(typeof V=="number")return V}return null}function P7(T){s={},a=Mf(T,i,void 0,s)}return v={get basename(){return l},get state(){return g},get routes(){return o},initialize:z,subscribe:Nn,enableScrollRestoration:S7,navigate:ct,fetch:ml,revalidate:Ln,createHref:T=>t.history.createHref(T),encodeLocation:T=>t.history.encodeLocation(T),getFetcher:yn,deleteFetcher:Sh,dispose:me,getBlocker:C7,deleteBlocker:K0,_internalFetchControllers:te,_internalActiveDeferreds:M,_internalSetRoutes:P7},v}function O8(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Vf(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=jc(i||".",Ha(a).map(c=>c.pathnameBase),Bs(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!wm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Wn([n,u.pathname])),Ci(u)}function cg(t,e,n,r){if(!r||!O8(r))return{path:n};if(r.formMethod&&!B8(r.formMethod))return{path:n,error:Gt(405,{method:r.formMethod})};let i=()=>({path:n,error:Gt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=t3(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!ln(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((f,y)=>{let[w,E]=y;return""+f+w+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!ln(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}Z(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Of(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Of(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=pg(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=pg(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(ln(c.formMethod))return{path:n,submission:c};let h=or(n);return e&&h.search&&wm(h.search)&&l.append("index",""),h.search="?"+l,{path:Ci(h),submission:c}}function b8(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function hg(t,e,n,r,i,s,o,a,l,u,c,h,d,f){let y=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,w=t.createURL(e.location),E=t.createURL(i),_=f?Object.keys(f)[0]:void 0,v=b8(n,_).filter((x,R)=>{if(x.route.lazy)return!0;if(x.route.loader==null)return!1;if(Q8(e.loaderData,e.matches[R],x)||o.some(b=>b===x.route.id))return!0;let I=e.matches[R],P=x;return dg(x,Se({currentUrl:w,currentParams:I.params,nextUrl:E,nextParams:P.params},r,{actionResult:y,defaultShouldRevalidate:s||w.pathname+w.search===E.pathname+E.search||w.search!==E.search||e3(I,P)}))}),g=[];return l.forEach((x,R)=>{if(!n.some(ce=>ce.route.id===x.routeId))return;let I=is(c,x.path,h);if(!I){g.push({key:R,routeId:x.routeId,path:x.path,matches:null,match:null,controller:null});return}let P=e.fetchers.get(R),b=bf(I,x.path),Q=!1;u.has(R)?Q=!1:a.includes(R)?Q=!0:P&&P.state!=="idle"&&P.data===void 0?Q=s:Q=dg(b,Se({currentUrl:w,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:s})),Q&&g.push({key:R,routeId:x.routeId,path:x.path,matches:I,match:b,controller:new AbortController})}),[v,g]}function Q8(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function e3(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function dg(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function fg(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];Z(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";ks(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!o8.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Se({},e(i),{lazy:void 0}))}async function fo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=y=>{let w,E=new Promise((_,p)=>w=p);return c=()=>w(),e.signal.addEventListener("abort",c),Promise.race([y({request:e,params:n.params,context:a.requestContext}),E])};try{let y=n.route[t];if(n.route.lazy)if(y){let w,E=await Promise.all([h(y).catch(_=>{w=_}),fg(n.route,s,i)]);if(w)throw w;u=E[0]}else if(await fg(n.route,s,i),y=n.route[t],y)u=await h(y);else if(t==="action"){let w=new URL(e.url),E=w.pathname+w.search;throw Gt(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:Oe.data,data:void 0};else if(y)u=await h(y);else{let w=new URL(e.url),E=w.pathname+w.search;throw Gt(404,{pathname:E})}Z(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){l=Oe.error,u=y}finally{c&&e.signal.removeEventListener("abort",c)}if($8(u)){let y=u.status;if(D8.has(y)){let _=u.headers.get("Location");if(Z(_,"Redirects returned/thrown from loaders/actions must have a Location header"),!Z2.test(_))_=Vf(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,_);else if(!a.isStaticRequest){let p=new URL(e.url),v=_.startsWith("//")?new URL(p.protocol+_):new URL(_),g=Bs(v.pathname,o)!=null;v.origin===p.origin&&g&&(_=v.pathname+v.search+v.hash)}if(a.isStaticRequest)throw u.headers.set("Location",_),u;return{type:Oe.redirect,status:y,location:_,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Oe.error?Oe.error:Oe.data,response:u};let w,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?w=await u.json():w=await u.text(),l===Oe.error?{type:l,error:new _m(y,u.statusText,w),headers:u.headers}:{type:Oe.data,data:w,statusCode:u.status,headers:u.headers}}if(l===Oe.error)return{type:l,error:u};if(U8(u)){var d,f;return{type:Oe.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((f=u.init)==null?void 0:f.headers)&&new Headers(u.init.headers)}}return{type:Oe.data,data:u}}function po(t,e,n,r){let i=t.createURL(t3(e)).toString(),s={signal:n};if(r&&ln(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Of(r.formData):s.body=r.formData}return new Request(i,s)}function Of(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function pg(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function j8(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(Z(!vs(c),"Cannot handle redirect results in processLoaderData"),Fo(c)){let f=ss(t,d),y=c.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[f.route.id]==null&&(o[f.route.id]=y),s[d]=void 0,l||(l=!0,a=Y2(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else li(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function mg(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=j8(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:f}=s[c];Z(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let y=o[c];if(!(f&&f.signal.aborted))if(Fo(y)){let w=ss(t.matches,d==null?void 0:d.route.id);u&&u[w.route.id]||(u=Se({},u,{[w.route.id]:y.error})),t.fetchers.delete(h)}else if(vs(y))Z(!1,"Unhandled fetcher revalidation redirect");else if(li(y))Z(!1,"Unhandled fetcher deferred data");else{let w=zi(y.data);t.fetchers.set(h,w)}}return{loaderData:l,errors:u}}function gg(t,e,n,r){let i=Se({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ss(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function yg(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Gt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new _m(t||500,o,new Error(a),!0)}function vg(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(vs(n))return{result:n,idx:e}}}function t3(t){let e=typeof t=="string"?or(t):t;return Ci(Se({},e,{hash:""}))}function F8(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function li(t){return t.type===Oe.deferred}function Fo(t){return t.type===Oe.error}function vs(t){return(t&&t.type)===Oe.redirect}function U8(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function $8(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function B8(t){return k8.has(t.toLowerCase())}function ln(t){return A8.has(t.toLowerCase())}async function _g(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!e3(u,l)&&(s&&s[l.route.id])!==void 0;if(li(a)&&(i||c)){let h=r[o];Z(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await n3(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function n3(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Oe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Oe.error,error:i}}return{type:Oe.data,data:t.deferredData.data}}}function wm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function bf(t,e){let n=typeof e=="string"?or(e).search:e.search;if(t[t.length-1].route.index&&wm(n||""))return t[t.length-1];let r=Ha(t);return r[r.length-1]}function wg(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function od(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function z8(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function mo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function H8(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function zi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $u(){return $u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$u.apply(this,arguments)}const Fc=S.createContext(null),r3=S.createContext(null),zs=S.createContext(null),Uc=S.createContext(null),Kr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),i3=S.createContext(null);function W8(t,e){let{relative:n}=e===void 0?{}:e;Hs()||Z(!1);let{basename:r,navigator:i}=S.useContext(zs),{hash:s,pathname:o,search:a}=o3(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Wn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Hs(){return S.useContext(Uc)!=null}function Wa(){return Hs()||Z(!1),S.useContext(Uc).location}function s3(t){S.useContext(zs).static||S.useLayoutEffect(t)}function $c(){let{isDataRoute:t}=S.useContext(Kr);return t?rE():K8()}function K8(){Hs()||Z(!1);let t=S.useContext(Fc),{basename:e,navigator:n}=S.useContext(zs),{matches:r}=S.useContext(Kr),{pathname:i}=Wa(),s=JSON.stringify(Ha(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return s3(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=jc(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Wn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function o3(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(Kr),{pathname:i}=Wa(),s=JSON.stringify(Ha(r).map(o=>o.pathnameBase));return S.useMemo(()=>jc(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function G8(t,e,n){Hs()||Z(!1);let{navigator:r}=S.useContext(zs),{matches:i}=S.useContext(Kr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Wa(),u;if(e){var c;let w=typeof e=="string"?or(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||Z(!1),u=w}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",f=is(t,{pathname:d}),y=Z8(f&&f.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Wn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Wn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&y?S.createElement(Uc.Provider,{value:{location:$u({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Fe.Pop}},y):y}function q8(){let t=u3(),e=Y2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const X8=S.createElement(q8,null);class Y8 extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(Kr.Provider,{value:this.props.routeContext},S.createElement(i3.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function J8(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Fc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Kr.Provider,{value:e},r)}function Z8(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Z(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||X8);let d=e.concat(s.slice(0,u+1)),f=()=>{let y;return c?y=h:l.route.Component?y=S.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,S.createElement(J8,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(Y8,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var a3=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(a3||{}),Bu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Bu||{});function eE(t){let e=S.useContext(Fc);return e||Z(!1),e}function tE(t){let e=S.useContext(r3);return e||Z(!1),e}function nE(t){let e=S.useContext(Kr);return e||Z(!1),e}function l3(t){let e=nE(),n=e.matches[e.matches.length-1];return n.route.id||Z(!1),n.route.id}function u3(){var t;let e=S.useContext(i3),n=tE(Bu.UseRouteError),r=l3(Bu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function rE(){let{router:t}=eE(a3.UseNavigateStable),e=l3(Bu.UseNavigateStable),n=S.useRef(!1);return s3(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,$u({fromRouteId:e},s)))},[t,e])}const iE="startTransition",Eg=W7[iE];function sE(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=S.useState(n.state),{v7_startTransition:o}=r||{},a=S.useCallback(h=>{o&&Eg?Eg(()=>s(h)):s(h)},[s,o]);S.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=S.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,d,f)=>n.navigate(h,{state:d,preventScrollReset:f==null?void 0:f.preventScrollReset}),replace:(h,d,f)=>n.navigate(h,{replace:!0,state:d,preventScrollReset:f==null?void 0:f.preventScrollReset})}),[n]),u=n.basename||"/",c=S.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return S.createElement(S.Fragment,null,S.createElement(Fc.Provider,{value:c},S.createElement(r3.Provider,{value:i},S.createElement(aE,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?S.createElement(oE,{routes:n.routes,state:i}):e))),null)}function oE(t){let{routes:e,state:n}=t;return G8(e,void 0,n)}function c3(t){let{to:e,replace:n,state:r,relative:i}=t;Hs()||Z(!1);let{matches:s}=S.useContext(Kr),{pathname:o}=Wa(),a=$c(),l=jc(e,Ha(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function aE(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Fe.Pop,navigator:s,static:o=!1}=t;Hs()&&Z(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=or(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,y=S.useMemo(()=>{let w=Bs(u,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:d,key:f},navigationType:i}},[a,u,c,h,d,f,i]);return y==null?null:S.createElement(zs.Provider,{value:l},S.createElement(Uc.Provider,{children:n,value:y}))}new Promise(()=>{});function lE(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:S.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:S.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ga(){return ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ga.apply(this,arguments)}function uE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function cE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hE(t,e){return t.button===0&&(!e||e==="_self")&&!cE(t)}const dE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function fE(t,e){return V8({basename:e==null?void 0:e.basename,future:ga({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:r8({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||pE(),routes:t,mapRouteProperties:lE}).initialize()}function pE(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=ga({},e,{errors:mE(e.errors)})),e}function mE(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new _m(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const gE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bc=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=uE(e,dE),{basename:d}=S.useContext(zs),f,y=!1;if(typeof u=="string"&&yE.test(u)&&(f=u,gE))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),g=Bs(v.pathname,d);v.origin===p.origin&&g!=null?u=g+v.search+v.hash:y=!0}catch{}let w=W8(u,{relative:i}),E=vE(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function _(p){r&&r(p),p.defaultPrevented||E(p)}return S.createElement("a",ga({},h,{href:f||w,onClick:y||s?r:_,ref:n,target:l}))});var Tg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Tg||(Tg={}));var xg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(xg||(xg={}));function vE(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=$c(),l=Wa(),u=o3(t,{relative:o});return S.useCallback(c=>{if(hE(c,n)){c.preventDefault();let h=r!==void 0?r:Ci(l)===Ci(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const _E="/healthert-web/assets/mcks1-252295cb.png",Em=({text:t,link:e,svg:n})=>m.jsxs(Bc,{to:e,className:"text-white  hover:cursor-pointer bg-verde text-xl py-3 px-6 flex justify-start items-center rounded-full hover:bg-green-700 hover:transition-all duration-300 hover:drop-shadow-xl hover:scale-105",children:[m.jsx("span",{children:n}),m.jsx("span",{children:t})]}),wE=()=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"#fff",className:"w-5 h-5 m-2",children:m.jsx("path",{d:"M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"})}),EE=()=>m.jsx("div",{className:"flex justify-center",children:m.jsx("div",{className:"flex justify-center my-14 max-w-screen-lg",children:m.jsxs("div",{className:"grid grid-cols-1 justify-center items-center lg:grid-cols-2 lg:gap-36",children:[m.jsxs("div",{className:"grid justify-center",children:[m.jsx("div",{className:"text-5xl font-bold text-center text-verde md:text-7xl",children:m.jsx("h2",{children:"HEALTHERT"})}),m.jsx("div",{className:"text-center text-base md:text-xl",children:m.jsx("p",{children:"Aplicación móvil de monitoreo y alerta remota"})}),m.jsx("div",{className:"flex w-full justify-center my-4 font-semibold",children:m.jsx(Em,{link:"",text:"Descargar",svg:m.jsx(wE,{})})})]}),m.jsx("div",{className:"flex items-center content-center",children:m.jsx("img",{alt:"Dispositivos",src:_E,className:"w-[29rem] md:w-[34rem] xl:w-full animate-floating"})})]})})});const Tm=()=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0.00 0.00 1528.00 1371.00",children:[m.jsx("path",{fill:"#6fd81c",d:`M 1296.04 93.04\r
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
        Z`}),m.jsx("path",{fill:"#6fd81c",d:`\r
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
        Z`})]}),xm=({link:t,text:e})=>m.jsxs("nav",{className:"h-20 relative md:h-24 z-10 md:px-6 py-2 px-4 lg:px-8 xl:px-12 bg-white dark:bg-slate-900 shadow-lg flex items-center justify-between",children:[m.jsx(Bc,{to:"/healthert-web/",children:m.jsxs("div",{className:"flex justify-start items-center space-x-2",children:[m.jsx("span",{className:"w-10 h-10 md:w-12 md:h-12",children:m.jsx(Tm,{})}),m.jsx("span",{className:"hidden sm:inline-block text-3xl font-semibold md:text-4xl text-verde",children:"HEALTHERT"})]})}),m.jsx(Em,{text:e,link:t})]});const Cm=()=>m.jsx("footer",{className:"p-4 md:p-8 flex justify-center text-base md:text-xl bg-slate-900 dark:border-t-2 border-verde w-full ",children:m.jsxs("div",{className:"columns-3 w-full md:max-w-screen-lg",children:[m.jsx("div",{className:"",children:m.jsx("a",{href:"#",className:"glow",children:"Tu privacidad"})}),m.jsxs("div",{className:"flex space-x-3 justify-center",children:[m.jsx("a",{href:"#",className:"glow",children:m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"h-6 w-6 md:h-8 md:w-8",viewBox:"0 0 16 16",children:m.jsx("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})})}),m.jsx("a",{href:"#",className:"glow",children:m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"h-6 w-6 md:h-8 md:w-8",viewBox:"0 0 16 16",children:m.jsx("path",{d:"M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"})})}),m.jsx("a",{href:"",className:"glow",children:m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"h-6 w-6 md:h-8 md:w-8",viewBox:"0 0 16 16",children:m.jsx("path",{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"})})})]}),m.jsx("div",{className:"flex justify-end",children:m.jsx("a",{href:"#",className:"glow",children:"4433994806"})})]})}),h3=()=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"w-24 h-24 ",viewBox:"0 0 783 784",children:[m.jsx("path",{stroke:"#5fe013",strokeWidth:"2.00",fill:"none",strokeLinecap:"butt",vectorEffect:"non-scaling-stroke",d:`\r
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
  Q 195.64 402.05 190.57 397.10`}),m.jsx("path",{fill:"#5ddb13",d:`\r
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
  Z`}),m.jsx("path",{fill:"#5ddb13",d:`\r
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
  Z`}),m.jsx("path",{fill:"#61e413",d:`\r
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
  Z`})]}),TE=()=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#5DDB13",className:"w-20 h-20 ",viewBox:"0 0 16 16",children:m.jsx("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})}),xE=()=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#5DDB13",className:"w-20 h-20 ",viewBox:"0 0 16 16",children:m.jsx("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"})}),CE=({svg:t,title:e,text:n})=>m.jsxs("div",{className:"flex flex-col my-2 p-5 border-2 border-gray-200 dark:border-slate-700 rounded-2xl  dark:bg-gray-800  transform  duration-300 hover:scale-105 lg:m-4 shadow-md",children:[m.jsx("div",{className:"flex justify-center m-5",children:t}),m.jsx("div",{className:"flex justify-center place-content-center text-center m-5 font-bold text-3xl text-verde",children:m.jsx("h1",{children:e})}),m.jsx("div",{className:"grid leading-5  justify-center text-center font-normal  m-6",children:m.jsx("p",{children:n})})]}),SE=()=>{let t=[{svg:m.jsx(h3,{}),title:"Medición BPM",text:"En Healthert ofrecemos la posibilidad de cuidar a tu paciente desde la comodidad de la palma de tu mano, podrás saber sus signos vitales en cualquier momento, así como poder generar un resumen de los mismos."},{svg:m.jsx(TE,{}),title:"Ubicación en TR",text:"En Healthert nos preocupamos por el bienestar de nuestros usuarios, por ello brindamos la oportunidad de saber en donde se encuentran, en todo momento, en cualquier lugar. Permite que te facilitemos el mejor cuidado remoto posible y nos esforcemos por cumplir y superar tus expectativas."},{svg:m.jsx(xE,{}),title:"Ver más",text:"Te invitamos a ver aún más de nuestros servicios y funciones dentro de nuestra aplicación móvil."}];const[e,n]=S.useState(t);return m.jsx("div",{className:"flex justify-center dark:bg-slate-900 px-6 md:px-12",children:m.jsx("div",{className:"grid grid-cols-1 gap-1 place-content-center lg:grid-cols-3 max-w-screen-xl",children:e.map(r=>m.jsx(CE,{svg:r.svg,title:r.title,text:r.text},r.title))})})},IE=({item:t,index:e,activeIndex:n,onClick:r})=>m.jsx("h2",{id:`accordion-color-heading-${e}`,className:`${e===n?"text-moradoOscuro dark:text-white":"text-verde"}`,children:m.jsxs("button",{type:"button",className:` transition-all flex items-center justify-between w-full p-5  \r
                    text-3xl text-left font-bold font-roboto\r
                    border border-b border-verde rounded-lg\r
                    \r
                    hover:bg-gray-100 \r
                    dark:bg-gray-800\r
                    dark:border-slate-700\r
                    dark:hover:bg-gray-700 duration-300`,onClick:()=>r(e),children:[m.jsx("span",{children:t.titulo}),m.jsx("svg",{"data-accordion-icon":!0,className:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5 5 1 1 5"})})]})}),PE=({item:t,index:e,activeIndex:n})=>m.jsx("div",{id:`accordion-color-${e}`,"data-accordion":"collapse",className:`overflow-hidden transition-all duration-300 ${e===n?"max-h-[28rem]":"max-h-0"}`,children:m.jsxs("div",{className:`p-5
                    border-verde border-l rounded-lg border-2
                    dark:border-slate-700 
                    dark:bg-slate-900
                    text-morado ${e===n?"opacity-100":"opacity-70"}`,children:[m.jsx("p",{className:"mb-2 text-gray-400 dark:text-white font-roboto",children:t.contenido}),m.jsx("img",{src:t.img,className:"mx-auto max-w-xs h- md:max-w-sm md:h-auto lg:max-w-md lg:h-auto xl:max-w-lg xl:h-auto rounded-lg shadow-xl",alt:`Imagen para ${t.titulo}`})]})},e),AE=({items:t})=>{const[e,n]=S.useState(null),r=i=>{n(i===e?null:i)};return m.jsx("div",{className:"flex flex-col items-center max-w-screen-xl",children:t.map((i,s)=>m.jsxs("div",{className:"w-full",children:[m.jsx(IE,{item:i,index:s,activeIndex:e,onClick:r}),m.jsx(PE,{item:i,index:s,activeIndex:e})]},s))})},RE=({planes:t})=>m.jsx("div",{className:"mx-auto flex flex-col items-center md:items-stretch md:flex-row justify-center lg:space-x-12 md:space-x-9 md:space-y-0 space-y-8",children:m.jsx("div",{className:"mx-auto flex flex-col items-center md:items-stretch md:flex-row justify-center lg:space-x-12 md:space-x-9 md:space-y-0 space-y-8",children:t.map((e,n)=>m.jsxs("div",{className:"w-full max-w-md p-4 g-white border border-gray-200 rounded-2xl bg-white shadow-md md:p-8 dark:bg-gray-800 dark:border-slate-700 transition-transform hover:scale-105 duration-300",children:[m.jsxs("h5",{className:"mb-4 text-xl  font-bold text-center",children:[e.titulo," "]}),m.jsxs("div",{className:"flex items-baseline justify-center",children:[m.jsx("span",{className:"text-3xl font-semibold text-verde dark:text-verde",children:"$"}),m.jsx("span",{className:"text-5xl font-extrabold tracking-tight text-verde dark:text-verde",children:e.precio}),m.jsx("span",{className:"ml-1 text-xl font-bold ",children:e.periodo})]}),m.jsx("ul",{role:"list",className:"space-y-5 my-7",children:e.caracteristicas.map((r,i)=>m.jsxs("li",{className:"flex space-x-3 items-center  font-bold leading-tight text-center",children:[m.jsx("svg",{className:"flex-shrink-0 w-4 h-4 text-verde dark:text-morado","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:m.jsx("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"})}),m.jsx("span",{className:"text-start",children:r})]},i))}),m.jsx("div",{className:"flex justify-center",children:m.jsx(Em,{text:"¡Contrata!",className:"btn-card"})})]},n))})}),kE=()=>m.jsx("div",{id:"detailed-pricing",className:"w-full overflow-x-auto font-roboto inline-block max-w-screen-xl",children:m.jsxs("div",{className:"overflow-hidden min-w-max w-full ",children:[m.jsxs("div",{className:"grid grid-cols-3 p-4 text-sm font-medium bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-900 dark:border-white",children:[m.jsx("div",{className:"text-verde dark:text-gray-100 text-2xl flex items-center justify-center font-roboto font-bold font-m ",children:"Características"}),m.jsx("div",{className:"text-verde dark:text-gray-100  text-2xl flex items-center justify-center font-roboto font-bold font-m ",children:"Plan Personal"}),m.jsx("div",{className:"text-verde dark:text-gray-100 text-2xl flex items-center justify-center font-roboto font-bold font-m ",children:"Plan Institucional"})]}),m.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 dark:bg-gray-800 text-ml  border-b border-gray-200 gap-x-16 dark:border-white",children:[m.jsx("div",{className:"font-bold",children:"Monitoreo en tiempo real"}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),m.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 dark:bg-gray-800 text-ml  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[m.jsx("div",{className:"  font-bold",children:"Estudios del paciente alcance"}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-red-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),m.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 dark:bg-gray-800 text-ml  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[m.jsx("div",{className:"  font-bold",children:"Gestión de pacientes dentro de edificios"}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-red-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),m.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 dark:bg-gray-800 text-ml  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[m.jsx("div",{className:"  font-bold",children:"Reporte del estado del paciente"}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),m.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 text-ml dark:bg-gray-800  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[m.jsx("div",{className:"  font-bold",children:"Multi-usuario por pantalla"}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-red-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})})]}),m.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 text-ml dark:bg-gray-800  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[m.jsx("div",{className:"  font-bold",children:"Soporte para muchos pacientes"}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-red-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),m.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 text-ml dark:bg-gray-800  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[m.jsx("div",{className:"  font-bold",children:"Agenda de medicamentos"}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),m.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 text-ml dark:bg-gray-800  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[m.jsx("div",{className:"  font-bold",children:"Generación de gráficas"}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]}),m.jsxs("div",{className:"grid grid-cols-3 px-2 py-3 text-ml dark:bg-gray-800  border-b border-gray-200 gap-x-16 dark:border-white-700",children:[m.jsx("div",{className:"  font-bold",children:"¡Multi-usuario en una sola pantalla!"}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-red-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})}),m.jsx("div",{children:m.jsx("svg",{className:"mx-auto w-6 h-6 text-verde","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:m.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})})})]})]})}),d3="/healthert-web/assets/logo-205d25d4.png",Qf="/healthert-web/assets/mirando_app-a2ca52cc.png",DE="/healthert-web/assets/medicos_image-a16b376e.png",NE=()=>{const t=[{titulo:"Plan Personal",contenido:"¡Obten la capacidad de monitorear, cuidar y recibir alertas de una persona en tiempo real! . Con este plan podrás acceder a funciones como: Monitoreo de ritmo cardiaco y ubicación geográfica, gráficas sobre el comportamiento del paciente y más! .",img:Qf},{titulo:"Plan Institucional",contenido:"Servicio dirigido a instituciones de salud para aprovecharlo al máximo. Enfocado en las y los enfermeros, brindamos la capacidad de monitorear varios pacientes a la vez, vista por pisos y más datos específicos para apoyar en el cuidado especializado.",img:DE}],e=[{titulo:"Plan Personal",precio:100,periodo:"/mes",caracteristicas:["Cuida a tus seres queridos","Agrega más de un paciente por suscripción","Monitorea de uno en uno","Ideal para un cuidado personal","Cuidado desde la palma de tu mano"]},{titulo:"Plan Institucional",precio:1e3,periodo:"/anual",caracteristicas:["Cuidado más cercano","Enfocado en mejorar labores de cuidado","Ideal para hospitales","Ideal para empresas de enfermería privada","Soporte para monitoreo en simultáneo"]}];return m.jsx(m.Fragment,{children:m.jsxs("div",{className:"px-6 md:px-12",children:[m.jsxs("div",{className:"text-moradoOscuro dark:text-white font-roboto font-bold text-5xl text-center py-5",children:[m.jsx("div",{className:"mx-auto max-w-md p-5",children:m.jsx("img",{src:d3,alt:"Logo corazón",className:"w-20 h-20 mx-auto"})}),m.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-5xl",children:"NUESTROS PLANES"})]}),m.jsx("p",{className:"text-gray-400 dark:text-verde text-xl md:text-1xl sm:text-2xl text-center font-roboto font-bold py-5",children:"Manejamos distintos planes para cada tipo de usuario"}),m.jsx("div",{className:" ",children:m.jsx("div",{className:"flex justify-center ",children:m.jsx(kE,{})})}),m.jsx("h2",{className:"text-moradoOscuro dark:text-white md:text-4xl text-2xl font-roboto font-bold text-center py-5",children:"DESCRIPCIÓN DE LOS PLANES "}),m.jsx("div",{className:"flex justify-center ",children:m.jsx("div",{className:"",children:m.jsx(AE,{items:t})})}),m.jsxs("div",{className:"",children:[m.jsx("h2",{className:"font-roboto font-bold md:text-4xl text-2xl text-center py-5 text-moradoOscuro dark:text-white",children:"PRECIOS "}),m.jsx(RE,{planes:e})]})]})})},LE="/healthert-web/assets/regPac2-0845e096.png",ME="/healthert-web/assets/pulso-09adb9db.png",VE="/healthert-web/assets/recibeAlerta-4a33decc.png",OE="/healthert-web/assets/agendar-596bc736.png",bE="/healthert-web/assets/fichame-515f2594.png",QE="/healthert-web/assets/reporte-d9e21d85.png",jE="/healthert-web/assets/grafica-2e1976b5.png",FE="/healthert-web/assets/QR-eeef2825.png",UE="/healthert-web/assets/gestpaci-3235c12b.png",$E="/healthert-web/assets/multiuser-32cd4174.png",BE="/healthert-web/assets/enfermera-01b35016.png",zE="/healthert-web/assets/aleremota-5bac1c4a.png",HE="/healthert-web/assets/plan-65ac6b49.png",WE=({funcData:t})=>m.jsx("div",{className:"grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-4 place-content-center w-full max-w-screen-xl px-6 md:px-12",children:t.map((e,n)=>m.jsxs("div",{className:`max-w-md bg-white \r
              border border-gray-200 rounded-2xl dark:border-slate-700\r
              shadow-md \r
              dark:bg-gray-800\r
              transform  duration-700\r
              hover:scale-105 lg:m-4`,children:[m.jsx("img",{className:"rounded-t-2xl",src:e.img,alt:""}),m.jsxs("div",{className:"p-4 md:p-5",children:[m.jsx("h5",{className:`mb-2 text-xl \r
            md:text-2xl \r
            lg:text-3xl \r
            font-bold \r
            tracking-tight\r
          text-verde\r
          dark:text-gray-100\r
          dark:hover:text-moradoOscuro\r
          hover:text-moradoOscuro duration-300`,children:e.nombre}),m.jsx("p",{className:`mb-2 \r
            lg:text-lg`,children:e.descripcion})]})]},n))}),KE=[{nombre:"Registro de pacientes",descripcion:"Registra en el sistema a las personas que deseés cuidar, ingresa su ficha médica y tus datos personales.",img:LE},{nombre:"Recibe una alerta",descripcion:"El sistema puede captar alertas manuales o automáticas, al recibirlas y acceder a ellas, podrás ver la ubicación de la persona en riesgo dentro de google maps.",img:VE},{nombre:"Alerta remota",descripcion:"Según el usuario, puede enviar o recibir alertas en tiempo real. El paciente puede generar una alerta manualmente o el sistema generará una según sus signos vitales.",img:zE},{nombre:"Monitoreo de pulsos por minuto",descripcion:"¡Nuestro sistema en conjunto de un SmartWatch es capaz de mostrarte los pulsos por minuto en tiempo real!.",img:ME},{nombre:"Geolocalización",descripcion:"El sistema es capaz de mostrarte la ubicación en tiempo real de tu paciente, en cualquier lugar, en cualquier momento.",img:Qf},{nombre:"Agenda de medicamentos",descripcion:"Puedes programar la toma de medicamentos de tu paciente, es decir, definir el medicamento, cantidad, intervalo de tiempo, inicio y hora de toma.",img:OE},{nombre:"Ficha médica",descripcion:"Ingresa una ficha médica de tu paciente, esta contendrá datos como: Nombre, tipo sanguineo, NSS, CURP, alergias, padecimientos, entre otros datos relevantes.",img:bE},{nombre:"Reportes",descripcion:"El sistema es capaz de generar reportes que recopilan los medicamentos agendados, las alertas y su tipo, adempas del pulso cardiaco, esto durante todo el mes.",img:QE},{nombre:"Gráficas",descripcion:"Además de poder observar el ritmo cardiaco, puedes visualizar una gráfica a base del promedio del pulso cardiaco. ",img:jE},{nombre:"Acceso a la ficha médica",descripcion:"Puedes scannear un código QR que el sistema generará para ti, por medio del mismo podrás descargar la ficha médica de tu paciente.",img:FE},{nombre:"Gestiona pacientes",descripcion:"En caso de ser necesario, podrás editar los datos del paciente, nombre, ficha médica, fotografía. Vincula y desvincula pacientes.",img:UE},{nombre:"Varios a la vez",descripcion:"¡Visualiza la ubicación y el pulso en una sola pantalla!, esta función dependerá del tipo de plan que esté relacionado a tu cuenta.",img:$E},{nombre:"Secciona a tus pacientes",descripcion:"¿Monitorear dentro de un edificio?, puedes hacerlo, el sistema te mostrará en que piso se encuentra tu paciente.",img:Qf},{nombre:"Datos especializados",descripcion:"Carga y visualiza información de tu paciente además de la ficha médica. Estudios, recetas, tratamientos.",img:BE},{nombre:"¿Qué funciones tengo?",descripcion:"Según tu plan, las funciones cambiarán. Visita el apartado de planes.",img:HE}],GE=()=>m.jsx("div",{className:"flex justify-center dark:bg-slate-900 ",children:m.jsxs("div",{className:" text-moradoOscuro dark:text-gray-100",children:[m.jsxs("div",{className:"text-5xl text-center py-5",children:[m.jsx("div",{className:"mx-auto max-w-screen-xl p-5",children:m.jsx("img",{src:d3,alt:"Logo corazón",className:"w-20 h-20 mx-auto"})}),m.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold",children:"FUNCIONES"})]}),m.jsx("p",{className:"text-gray-400 dark:text-verde text-xl md:text-2xl sm:text-2xl text-center font-bold py-5",children:"Aprovecha al máximo las funciones de Healthert "}),m.jsx("div",{className:"my-9",children:m.jsx(WE,{funcData:KE})})]})});/**
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
 *//**
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
 */const f3=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},p3={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(f3(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new XE;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YE=function(t){const e=f3(t);return p3.encodeByteArray(e,!0)},zu=function(t){return YE(t).replace(/\./g,"")},m3=function(t){try{return p3.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function JE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ZE=()=>JE().__FIREBASE_DEFAULTS__,eT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&m3(t[1]);return e&&JSON.parse(e)},Sm=()=>{try{return ZE()||eT()||tT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},g3=t=>{var e,n;return(n=(e=Sm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nT=t=>{const e=g3(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y3=()=>{var t;return(t=Sm())===null||t===void 0?void 0:t.config},v3=t=>{var e;return(e=Sm())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function iT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[zu(JSON.stringify(n)),zu(JSON.stringify(o)),a].join(".")}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function oT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lT(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uT(){try{return typeof indexedDB=="object"}catch{return!1}}function cT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const hT="FirebaseError";class ar extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hT,Object.setPrototypeOf(this,ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ka.prototype.create)}}class Ka{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ar(i,a,r)}}function dT(t,e){return t.replace(fT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fT=/\{\$([^}]+)}/g;function pT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cg(s)&&Cg(o)){if(!Hu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cg(t){return t!==null&&typeof t=="object"}/**
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
 */function Ga(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Po(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mT(t,e){const n=new gT(t,e);return n.subscribe.bind(n)}class gT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ad),i.error===void 0&&(i.error=ad),i.complete===void 0&&(i.complete=ad);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ad(){}/**
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
 */function Ut(t){return t&&t._delegate?t._delegate:t}class Si{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ni="[DEFAULT]";/**
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
 */class vT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wT(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_T(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _T(t){return t===ni?void 0:t}function wT(t){return t.instantiationMode==="EAGER"}/**
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
 */class ET{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const TT={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},xT=ne.INFO,CT={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},ST=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=CT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Im{constructor(e){this.name=e,this._logLevel=xT,this._logHandler=ST,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const IT=(t,e)=>e.some(n=>t instanceof n);let Sg,Ig;function PT(){return Sg||(Sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AT(){return Ig||(Ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _3=new WeakMap,jf=new WeakMap,w3=new WeakMap,ld=new WeakMap,Pm=new WeakMap;function RT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_3.set(n,t)}).catch(()=>{}),Pm.set(e,t),e}function kT(t){if(jf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jf.set(t,e)}let Ff={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||w3.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DT(t){Ff=t(Ff)}function NT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ud(this),e,...n);return w3.set(r,e.sort?e.sort():[e]),Nr(r)}:AT().includes(t)?function(...e){return t.apply(ud(this),e),Nr(_3.get(this))}:function(...e){return Nr(t.apply(ud(this),e))}}function LT(t){return typeof t=="function"?NT(t):(t instanceof IDBTransaction&&kT(t),IT(t,PT())?new Proxy(t,Ff):t)}function Nr(t){if(t instanceof IDBRequest)return RT(t);if(ld.has(t))return ld.get(t);const e=LT(t);return e!==t&&(ld.set(t,e),Pm.set(e,t)),e}const ud=t=>Pm.get(t);function MT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Nr(o.result),l.oldVersion,l.newVersion,Nr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const VT=["get","getKey","getAll","getAllKeys","count"],OT=["put","add","delete","clear"],cd=new Map;function Pg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cd.get(e))return cd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=OT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||VT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return cd.set(e,s),s}DT(t=>({...t,get:(e,n,r)=>Pg(e,n)||t.get(e,n,r),has:(e,n)=>!!Pg(e,n)||t.has(e,n)}));/**
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
 */class bT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uf="@firebase/app",Ag="0.9.19";/**
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
 */const Ii=new Im("@firebase/app"),jT="@firebase/app-compat",FT="@firebase/analytics-compat",UT="@firebase/analytics",$T="@firebase/app-check-compat",BT="@firebase/app-check",zT="@firebase/auth",HT="@firebase/auth-compat",WT="@firebase/database",KT="@firebase/database-compat",GT="@firebase/functions",qT="@firebase/functions-compat",XT="@firebase/installations",YT="@firebase/installations-compat",JT="@firebase/messaging",ZT="@firebase/messaging-compat",ex="@firebase/performance",tx="@firebase/performance-compat",nx="@firebase/remote-config",rx="@firebase/remote-config-compat",ix="@firebase/storage",sx="@firebase/storage-compat",ox="@firebase/firestore",ax="@firebase/firestore-compat",lx="firebase",ux="10.4.0";/**
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
 */const $f="[DEFAULT]",cx={[Uf]:"fire-core",[jT]:"fire-core-compat",[UT]:"fire-analytics",[FT]:"fire-analytics-compat",[BT]:"fire-app-check",[$T]:"fire-app-check-compat",[zT]:"fire-auth",[HT]:"fire-auth-compat",[WT]:"fire-rtdb",[KT]:"fire-rtdb-compat",[GT]:"fire-fn",[qT]:"fire-fn-compat",[XT]:"fire-iid",[YT]:"fire-iid-compat",[JT]:"fire-fcm",[ZT]:"fire-fcm-compat",[ex]:"fire-perf",[tx]:"fire-perf-compat",[nx]:"fire-rc",[rx]:"fire-rc-compat",[ix]:"fire-gcs",[sx]:"fire-gcs-compat",[ox]:"fire-fst",[ax]:"fire-fst-compat","fire-js":"fire-js",[lx]:"fire-js-all"};/**
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
 */const Wu=new Map,Bf=new Map;function hx(t,e){try{t.container.addComponent(e)}catch(n){Ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ds(t){const e=t.name;if(Bf.has(e))return Ii.debug(`There were multiple attempts to register component ${e}.`),!1;Bf.set(e,t);for(const n of Wu.values())hx(n,t);return!0}function Am(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const dx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lr=new Ka("app","Firebase",dx);/**
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
 */class fx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=ux;function E3(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$f,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Lr.create("bad-app-name",{appName:String(i)});if(n||(n=y3()),!n)throw Lr.create("no-options");const s=Wu.get(i);if(s){if(Hu(n,s.options)&&Hu(r,s.config))return s;throw Lr.create("duplicate-app",{appName:i})}const o=new ET(i);for(const l of Bf.values())o.addComponent(l);const a=new fx(n,r,o);return Wu.set(i,a),a}function T3(t=$f){const e=Wu.get(t);if(!e&&t===$f&&y3())return E3();if(!e)throw Lr.create("no-app",{appName:t});return e}function Mr(t,e,n){var r;let i=(r=cx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ii.warn(a.join(" "));return}Ds(new Si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const px="firebase-heartbeat-database",mx=1,ya="firebase-heartbeat-store";let hd=null;function x3(){return hd||(hd=MT(px,mx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ya)}}}).catch(t=>{throw Lr.create("idb-open",{originalErrorMessage:t.message})})),hd}async function gx(t){try{return await(await x3()).transaction(ya).objectStore(ya).get(C3(t))}catch(e){if(e instanceof ar)Ii.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ii.warn(n.message)}}}async function Rg(t,e){try{const r=(await x3()).transaction(ya,"readwrite");await r.objectStore(ya).put(e,C3(t)),await r.done}catch(n){if(n instanceof ar)Ii.warn(n.message);else{const r=Lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ii.warn(r.message)}}}function C3(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yx=1024,vx=30*24*60*60*1e3;class _x{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ex(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=kg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=vx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=kg(),{heartbeatsToSend:n,unsentEntries:r}=wx(this._heartbeatsCache.heartbeats),i=zu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function kg(){return new Date().toISOString().substring(0,10)}function wx(t,e=yx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ex{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uT()?cT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dg(t){return zu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Tx(t){Ds(new Si("platform-logger",e=>new bT(e),"PRIVATE")),Ds(new Si("heartbeat",e=>new _x(e),"PRIVATE")),Mr(Uf,Ag,t),Mr(Uf,Ag,"esm2017"),Mr("fire-js","")}Tx("");function Rm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ng(t){return t!==void 0&&t.enterprise!==void 0}class xx{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function S3(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cx=S3,I3=new Ka("auth","Firebase",S3());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=new Im("@firebase/auth");function Sx(t,...e){Ku.logLevel<=ne.WARN&&Ku.warn(`Auth (${Ws}): ${t}`,...e)}function cu(t,...e){Ku.logLevel<=ne.ERROR&&Ku.error(`Auth (${Ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw km(t,...e)}function Pn(t,...e){return km(t,...e)}function Ix(t,e,n){const r=Object.assign(Object.assign({},Cx()),{[e]:n});return new Ka("auth","Firebase",r).create(e,{appName:t.name})}function km(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return I3.create(t,...e)}function H(t,e,...n){if(!t)throw km(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cu(e),new Error(e)}function tr(t,e){t||Un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Px(){return Lg()==="http:"||Lg()==="https:"}function Lg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Px()||oT()||"connection"in navigator)?navigator.onLine:!0}function Rx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=sT()||aT()}get(){return Ax()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t,e){tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P3{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx=new qa(3e4,6e4);function Mi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vi(t,e,n,r,i={}){return A3(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ga(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),P3.fetch()(R3(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function A3(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kx),e);try{const i=new Nx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw bl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ix(t,c,u);gn(t,c)}}catch(i){if(i instanceof ar)throw i;gn(t,"network-request-failed",{message:String(i)})}}async function Xa(t,e,n,r,i={}){const s=await Vi(t,e,n,r,i);return"mfaPendingCredential"in s&&gn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function R3(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Dm(t.config,i):`${t.config.apiScheme}://${i}`}class Nx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),Dx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(t,e,r);return i.customData._tokenResponse=n,i}async function Lx(t,e){return Vi(t,"GET","/v2/recaptchaConfig",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(t,e){return Vi(t,"POST","/v1/accounts:delete",e)}async function Vx(t,e){return Vi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ox(t,e=!1){const n=Ut(t),r=await n.getIdToken(e),i=Nm(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Uo(dd(i.auth_time)),issuedAtTime:Uo(dd(i.iat)),expirationTime:Uo(dd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function dd(t){return Number(t)*1e3}function Nm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cu("JWT malformed, contained fewer than 3 sections"),null;try{const i=m3(n);return i?JSON.parse(i):(cu("Failed to decode base64 JWT payload"),null)}catch(i){return cu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bx(t){const e=Nm(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ar&&Qx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Qx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Uo(this.lastLoginAt),this.creationTime=Uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await va(t,Vx(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$x(s.providerUserInfo):[],a=Ux(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new k3(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Fx(t){const e=Ut(t);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ux(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $x(t){return t.map(e=>{var{providerId:n}=e,r=Rm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bx(t,e){const n=await A3(t,{},async()=>{const r=Ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=R3(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P3.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Bx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _a;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _a,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new k3(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await va(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ox(this,e)}reload(){return Fx(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await va(this,Mx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:g,isAnonymous:x,providerData:R,stsTokenManager:I}=n;H(v&&I,e,"internal-error");const P=_a.fromJSON(this.name,I);H(typeof v=="string",e,"internal-error"),hr(h,e.name),hr(d,e.name),H(typeof g=="boolean",e,"internal-error"),H(typeof x=="boolean",e,"internal-error"),hr(f,e.name),hr(y,e.name),hr(w,e.name),hr(E,e.name),hr(_,e.name),hr(p,e.name);const b=new mi({uid:v,auth:e,email:d,emailVerified:g,displayName:h,isAnonymous:x,photoURL:y,phoneNumber:f,tenantId:w,stsTokenManager:P,createdAt:_,lastLoginAt:p});return R&&Array.isArray(R)&&(b.providerData=R.map(Q=>Object.assign({},Q))),E&&(b._redirectEventId=E),b}static async _fromIdTokenResponse(e,n,r=!1){const i=new _a;i.updateFromServerResponse(n);const s=new mi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new Map;function $n(t){tr(t instanceof Function,"Expected a class definition");let e=Mg.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mg.set(t,e),e)}/**
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
 */class D3{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}D3.type="NONE";const Vg=D3;/**
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
 */function hu(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hu(this.userKey,i.apiKey,s),this.fullPersistenceKey=hu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _s($n(Vg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||$n(Vg);const o=hu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=mi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new _s(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new _s(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M3(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(N3(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O3(e))return"Blackberry";if(b3(e))return"Webos";if(Lm(e))return"Safari";if((e.includes("chrome/")||L3(e))&&!e.includes("edge/"))return"Chrome";if(V3(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function N3(t=Tt()){return/firefox\//i.test(t)}function Lm(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function L3(t=Tt()){return/crios\//i.test(t)}function M3(t=Tt()){return/iemobile/i.test(t)}function V3(t=Tt()){return/android/i.test(t)}function O3(t=Tt()){return/blackberry/i.test(t)}function b3(t=Tt()){return/webos/i.test(t)}function zc(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zx(t=Tt()){var e;return zc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hx(){return lT()&&document.documentMode===10}function Q3(t=Tt()){return zc(t)||V3(t)||b3(t)||O3(t)||/windows phone/i.test(t)||M3(t)}function Wx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j3(t,e=[]){let n;switch(t){case"Browser":n=Og(Tt());break;case"Worker":n=`${Og(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${r}`}/**
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
 */class Kx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Gx(t,e={}){return Vi(t,"GET","/v2/passwordPolicy",Mi(t,e))}/**
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
 */const qx=6;class Xx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bg(this),this.idTokenSubscription=new bg(this),this.beforeStateQueue=new Kx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=I3,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ut(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gx(this),n=new Xx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ka("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=j3(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Sx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Oi(t){return Ut(t)}class bg{constructor(e){this.auth=e,this.observer=null,this.addObserver=mT(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function F3(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Jx().appendChild(r)})}function Zx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eC="https://www.google.com/recaptcha/enterprise.js?render=",tC="recaptcha-enterprise",nC="NO_RECAPTCHA";class rC{constructor(e){this.type=tC,this.auth=Oi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Lx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new xx(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ng(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(nC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ng(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}F3(eC+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function qu(t,e,n,r=!1){const i=new rC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t,e){const n=Am(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Hu(s,e??{}))return i;gn(i,"already-initialized")}return n.initialize({options:e})}function sC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oC(t,e,n){const r=Oi(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=U3(e),{host:o,port:a}=aC(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lC()}function U3(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aC(t){const e=U3(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qg(o)}}}function Qg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}async function uC(t,e){return Vi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fd(t,e){return Xa(t,"POST","/v1/accounts:signInWithPassword",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e){return Xa(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}async function hC(t,e){return Xa(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends Mm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await qu(e,r,"signInWithPassword");return fd(e,i)}else return fd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await qu(e,r,"signInWithPassword");return fd(e,s)}else return Promise.reject(i)});case"emailLink":return cC(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return uC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hC(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(t,e){return Xa(t,"POST","/v1/accounts:signInWithIdp",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="http://localhost";class Pi extends Mm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Pi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ws(e,n)}buildRequest(){const e={requestUri:dC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ga(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pC(t){const e=Io(Po(t)).link,n=e?Io(Po(e)).deep_link_id:null,r=Io(Po(t)).deep_link_id;return(r?Io(Po(r)).link:null)||r||n||e||t}class Vm{constructor(e){var n,r,i,s,o,a;const l=Io(Po(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=fC((i=l.mode)!==null&&i!==void 0?i:null);H(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=pC(e);try{return new Vm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.providerId=Ks.PROVIDER_ID}static credential(e,n){return wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vm.parseLink(n);return H(r,"argument-error"),wa._fromEmailAndCode(e,r.code,r.tenantId)}}Ks.PROVIDER_ID="password";Ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $3{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ya extends $3{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ya{constructor(){super("facebook.com")}static credential(e){return Pi._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pi._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Ya{constructor(){super("github.com")}static credential(e){return Pi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ya{constructor(){super("twitter.com")}static credential(e,n){return Pi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.TWITTER_SIGN_IN_METHOD="twitter.com";Er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(t,e){return Xa(t,"POST","/v1/accounts:signUp",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mi._fromIdTokenResponse(e,r,i),o=jg(r);return new Ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jg(r);return new Ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends ar{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xu(e,n,r,i)}}function B3(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xu._fromErrorAndOperation(t,s,e,r):s})}async function mC(t,e,n=!1){const r=await va(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ai._forOperation(t,"link",r)}/**
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
 */async function gC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await va(t,B3(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=Nm(s.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z3(t,e,n=!1){const r="signIn",i=await B3(t,r,e),s=await Ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function yC(t,e){return z3(Oi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H3(t){const e=Oi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vC(t,e,n){var r;const i=Oi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await qu(i,s,"signUpPassword");o=pd(i,u)}else o=pd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await qu(i,s,"signUpPassword");return pd(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&H3(t),u}),l=await Ai._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function _C(t,e,n){return yC(Ut(t),Ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&H3(t),r})}function wC(t,e,n,r){return Ut(t).onIdTokenChanged(e,n,r)}function EC(t,e,n){return Ut(t).beforeAuthStateChanged(e,n)}function TC(t,e,n,r){return Ut(t).onAuthStateChanged(e,n,r)}function xC(t){return Ut(t).signOut()}const Yu="__sak";/**
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
 */class W3{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yu,"1"),this.storage.removeItem(Yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(){const t=Tt();return Lm(t)||zc(t)}const SC=1e3,IC=10;class K3 extends W3{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CC()&&Wx(),this.fallbackToPolling=Q3(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Hx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,IC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},SC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}K3.type="LOCAL";const PC=K3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3 extends W3{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}G3.type="SESSION";const q3=G3;/**
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
 */function AC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Hc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await AC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Om("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function kC(t){An().location.href=t}/**
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
 */function X3(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function DC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LC(){return X3()?self:null}/**
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
 */const Y3="firebaseLocalStorageDb",MC=1,Ju="firebaseLocalStorage",J3="fbase_key";class Ja{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wc(t,e){return t.transaction([Ju],e?"readwrite":"readonly").objectStore(Ju)}function VC(){const t=indexedDB.deleteDatabase(Y3);return new Ja(t).toPromise()}function Hf(){const t=indexedDB.open(Y3,MC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ju,{keyPath:J3})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ju)?e(r):(r.close(),await VC(),e(await Hf()))})})}async function Fg(t,e,n){const r=Wc(t,!0).put({[J3]:e,value:n});return new Ja(r).toPromise()}async function OC(t,e){const n=Wc(t,!1).get(e),r=await new Ja(n).toPromise();return r===void 0?null:r.value}function Ug(t,e){const n=Wc(t,!0).delete(e);return new Ja(n).toPromise()}const bC=800,QC=3;class Z3{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return X3()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hc._getInstance(LC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DC(),!this.activeServiceWorker)return;this.sender=new RC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hf();return await Fg(e,Yu,"1"),await Ug(e,Yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ug(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wc(i,!1).getAll();return new Ja(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Z3.type="LOCAL";const jC=Z3;new qa(3e4,6e4);/**
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
 */function FC(t,e){return e?$n(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bm extends Mm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UC(t){return z3(t.auth,new bm(t),t.bypassAuthState)}function $C(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),gC(n,new bm(t),t.bypassAuthState)}async function BC(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),mC(n,new bm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UC;case"linkViaPopup":case"linkViaRedirect":return BC;case"reauthViaPopup":case"reauthViaRedirect":return $C;default:gn(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=new qa(2e3,1e4);class os extends e5{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=Om();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zC.get())};e()}}os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC="pendingRedirect",du=new Map;class WC extends e5{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=du.get(this.auth._key());if(!e){try{const r=await KC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}du.set(this.auth._key(),e)}return this.bypassAuthState||du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KC(t,e){const n=XC(e),r=qC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function GC(t,e){du.set(t._key(),e)}function qC(t){return $n(t._redirectPersistence)}function XC(t){return hu(HC,t.config.apiKey,t.name)}async function YC(t,e,n=!1){const r=Oi(t),i=FC(r,e),o=await new WC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=10*60*1e3;class ZC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!t5(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JC&&this.cachedEventUids.clear(),this.cachedEventUids.has($g(e))}saveEventToCache(e){this.cachedEventUids.add($g(e)),this.lastProcessedEventTime=Date.now()}}function $g(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function t5({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return t5(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(t,e={}){return Vi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rS=/^https?/;async function iS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tS(t);for(const n of e)try{if(sS(n))return}catch{}gn(t,"unauthorized-domain")}function sS(t){const e=zf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rS.test(n))return!1;if(nS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const oS=new qa(3e4,6e4);function Bg(){const t=An().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aS(t){return new Promise((e,n)=>{var r,i,s;function o(){Bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bg(),n(Pn(t,"network-request-failed"))},timeout:oS.get()})}if(!((i=(r=An().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=An().gapi)===null||s===void 0)&&s.load)o();else{const a=Zx("iframefcb");return An()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},F3(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fu=null,e})}let fu=null;function lS(t){return fu=fu||aS(t),fu}/**
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
 */const uS=new qa(5e3,15e3),cS="__/auth/iframe",hS="emulator/auth/iframe",dS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pS(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dm(e,hS):`https://${t.config.authDomain}/${cS}`,r={apiKey:e.apiKey,appName:t.name,v:Ws},i=fS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ga(r).slice(1)}`}async function mS(t){const e=await lS(t),n=An().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:pS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=An().setTimeout(()=>{s(o)},uS.get());function l(){An().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const gS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yS=500,vS=600,_S="_blank",wS="http://localhost";class zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ES(t,e,n,r=yS,i=vS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gS),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Tt().toLowerCase();n&&(a=L3(u)?_S:n),N3(u)&&(e=e||wS,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(zx(u)&&a!=="_self")return TS(e||"",a),new zg(null);const h=window.open(e||"",a,c);H(h,t,"popup-blocked");try{h.focus()}catch{}return new zg(h)}function TS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xS="__/auth/handler",CS="emulator/auth/handler",SS=encodeURIComponent("fac");async function Hg(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ws,eventId:i};if(e instanceof $3){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ya){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${SS}=${encodeURIComponent(l)}`:"";return`${IS(t)}?${Ga(a).slice(1)}${u}`}function IS({config:t}){return t.emulator?Dm(t,CS):`https://${t.authDomain}/${xS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="webStorageSupport";class PS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=q3,this._completeRedirectFn=YC,this._overrideRedirectResult=GC}async _openPopup(e,n,r,i){var s;tr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Hg(e,n,r,zf(),i);return ES(e,o,Om())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Hg(e,n,r,zf(),i);return kC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mS(e),r=new ZC(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(md,{type:md},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[md];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Q3()||Lm()||zc()}}const AS=PS;var Wg="@firebase/auth",Kg="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function DS(t){Ds(new Si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j3(t)},u=new Yx(r,i,s,l);return sC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ds(new Si("auth-internal",e=>{const n=Oi(e.getProvider("auth").getImmediate());return(r=>new RS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mr(Wg,Kg,kS(t)),Mr(Wg,Kg,"esm2017")}/**
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
 */const NS=5*60,LS=v3("authIdTokenMaxAge")||NS;let Gg=null;const MS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LS)return;const i=n==null?void 0:n.token;Gg!==i&&(Gg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VS(t=T3()){const e=Am(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iC(t,{popupRedirectResolver:AS,persistence:[jC,PC,q3]}),r=v3("authTokenSyncURL");if(r){const s=MS(r);EC(n,s,()=>s(n.currentUser)),wC(n,o=>s(o))}const i=g3("auth");return i&&oC(n,`http://${i}`),n}DS("Browser");var OS="firebase",bS="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mr(OS,bS,"app");var QS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Qm=Qm||{},G=QS||self;function Kc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Za(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function jS(t){return Object.prototype.hasOwnProperty.call(t,gd)&&t[gd]||(t[gd]=++FS)}var gd="closure_uid_"+(1e9*Math.random()>>>0),FS=0;function US(t,e,n){return t.call.apply(t.bind,arguments)}function $S(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function _t(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_t=US:_t=$S,_t.apply(null,arguments)}function Ql(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Gr(){this.s=this.s,this.o=this.o}var BS=0;Gr.prototype.s=!1;Gr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),BS!=0)&&jS(this)};Gr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const n5=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function jm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function qg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Kc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function wt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var zS=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",()=>{},e),G.removeEventListener("test",()=>{},e)}catch{}return t}();function Ea(t){return/^[\s\xa0]*$/.test(t)}function Gc(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function Tn(t){return Gc().indexOf(t)!=-1}function Fm(t){return Fm[" "](t),t}Fm[" "]=function(){};function HS(t,e){var n=bI;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var WS=Tn("Opera"),Ns=Tn("Trident")||Tn("MSIE"),r5=Tn("Edge"),Wf=r5||Ns,i5=Tn("Gecko")&&!(Gc().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge"))&&!(Tn("Trident")||Tn("MSIE"))&&!Tn("Edge"),KS=Gc().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge");function s5(){var t=G.document;return t?t.documentMode:void 0}var Kf;e:{var yd="",vd=function(){var t=Gc();if(i5)return/rv:([^\);]+)(\)|;)/.exec(t);if(r5)return/Edge\/([\d\.]+)/.exec(t);if(Ns)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(KS)return/WebKit\/(\S+)/.exec(t);if(WS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(vd&&(yd=vd?vd[1]:""),Ns){var _d=s5();if(_d!=null&&_d>parseFloat(yd)){Kf=String(_d);break e}}Kf=yd}var Gf;if(G.document&&Ns){var Xg=s5();Gf=Xg||parseInt(Kf,10)||void 0}else Gf=void 0;var GS=Gf;function Ta(t,e){if(wt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(i5){e:{try{Fm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:qS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ta.$.h.call(this)}}tt(Ta,wt);var qS={2:"touch",3:"pen",4:"mouse"};Ta.prototype.h=function(){Ta.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var el="closure_listenable_"+(1e6*Math.random()|0),XS=0;function YS(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++XS,this.fa=this.ia=!1}function qc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Um(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function JS(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function o5(t){const e={};for(const n in t)e[n]=t[n];return e}const Yg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function a5(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Yg.length;s++)n=Yg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Xc(t){this.src=t,this.g={},this.h=0}Xc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Xf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new YS(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function qf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=n5(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(qc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var $m="closure_lm_"+(1e6*Math.random()|0),wd={};function l5(t,e,n,r,i){if(r&&r.once)return c5(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)l5(t,e[s],n,r,i);return null}return n=Hm(n),t&&t[el]?t.O(e,n,Za(r)?!!r.capture:!!r,i):u5(t,e,n,!1,r,i)}function u5(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Za(i)?!!i.capture:!!i,a=zm(t);if(a||(t[$m]=a=new Xc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ZS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)zS||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(d5(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ZS(){function t(n){return e.call(t.src,t.listener,n)}const e=eI;return t}function c5(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)c5(t,e[s],n,r,i);return null}return n=Hm(n),t&&t[el]?t.P(e,n,Za(r)?!!r.capture:!!r,i):u5(t,e,n,!0,r,i)}function h5(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)h5(t,e[s],n,r,i);else r=Za(r)?!!r.capture:!!r,n=Hm(n),t&&t[el]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Xf(s,n,r,i),-1<n&&(qc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=zm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xf(e,n,r,i)),(n=-1<t?e[t]:null)&&Bm(n))}function Bm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[el])qf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(d5(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=zm(e))?(qf(n,t),n.h==0&&(n.src=null,e[$m]=null)):qc(t)}}}function d5(t){return t in wd?wd[t]:wd[t]="on"+t}function eI(t,e){if(t.fa)t=!0;else{e=new Ta(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Bm(t),t=n.call(r,e)}return t}function zm(t){return t=t[$m],t instanceof Xc?t:null}var Ed="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hm(t){return typeof t=="function"?t:(t[Ed]||(t[Ed]=function(e){return t.handleEvent(e)}),t[Ed])}function Ze(){Gr.call(this),this.i=new Xc(this),this.S=this,this.J=null}tt(Ze,Gr);Ze.prototype[el]=!0;Ze.prototype.removeEventListener=function(t,e,n,r){h5(this,t,e,n,r)};function lt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new wt(e,t);else if(e instanceof wt)e.target=e.target||t;else{var i=e;e=new wt(r,t),a5(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=jl(o,r,!0,e)&&i}if(o=e.g=t,i=jl(o,r,!0,e)&&i,i=jl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=jl(o,r,!1,e)&&i}Ze.prototype.N=function(){if(Ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)qc(n[r]);delete t.g[e],t.h--}}this.J=null};Ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function jl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&qf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Wm=G.JSON.stringify;class tI{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function nI(){var t=Km;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class rI{constructor(){this.h=this.g=null}add(e,n){const r=f5.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var f5=new tI(()=>new iI,t=>t.reset());class iI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sI(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function oI(t){G.setTimeout(()=>{throw t},0)}let xa,Ca=!1,Km=new rI,p5=()=>{const t=G.Promise.resolve(void 0);xa=()=>{t.then(aI)}};var aI=()=>{for(var t;t=nI();){try{t.h.call(t.g)}catch(n){oI(n)}var e=f5;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ca=!1};function Yc(t,e){Ze.call(this),this.h=t||1,this.g=e||G,this.j=_t(this.qb,this),this.l=Date.now()}tt(Yc,Ze);L=Yc.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),lt(this,"tick"),this.ga&&(Gm(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){Yc.$.N.call(this),Gm(this),delete this.g};function qm(t,e,n){if(typeof t=="function")n&&(t=_t(t,n));else if(t&&typeof t.handleEvent=="function")t=_t(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function m5(t){t.g=qm(()=>{t.g=null,t.i&&(t.i=!1,m5(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lI extends Gr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:m5(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sa(t){Gr.call(this),this.h=t,this.g={}}tt(Sa,Gr);var Jg=[];function g5(t,e,n,r){Array.isArray(n)||(n&&(Jg[0]=n.toString()),n=Jg);for(var i=0;i<n.length;i++){var s=l5(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function y5(t){Um(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bm(e)},t),t.g={}}Sa.prototype.N=function(){Sa.$.N.call(this),y5(this)};Sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Jc(){this.g=!0}Jc.prototype.Ea=function(){this.g=!1};function uI(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function cI(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function as(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dI(t,n)+(r?" "+r:"")})}function hI(t,e){t.info(function(){return"TIMEOUT: "+e})}Jc.prototype.info=function(){};function dI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Wm(n)}catch{return e}}var bi={},Zg=null;function Zc(){return Zg=Zg||new Ze}bi.Ta="serverreachability";function v5(t){wt.call(this,bi.Ta,t)}tt(v5,wt);function Ia(t){const e=Zc();lt(e,new v5(e))}bi.STAT_EVENT="statevent";function _5(t,e){wt.call(this,bi.STAT_EVENT,t),this.stat=e}tt(_5,wt);function St(t){const e=Zc();lt(e,new _5(e,t))}bi.Ua="timingevent";function w5(t,e){wt.call(this,bi.Ua,t),this.size=e}tt(w5,wt);function tl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var eh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},E5={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xm(){}Xm.prototype.h=null;function ey(t){return t.h||(t.h=t.i())}function T5(){}var nl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ym(){wt.call(this,"d")}tt(Ym,wt);function Jm(){wt.call(this,"c")}tt(Jm,wt);var Yf;function th(){}tt(th,Xm);th.prototype.g=function(){return new XMLHttpRequest};th.prototype.i=function(){return{}};Yf=new th;function rl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Sa(this),this.P=fI,t=Wf?125:void 0,this.V=new Yc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new x5}function x5(){this.i=null,this.g="",this.h=!1}var fI=45e3,Jf={},Zu={};L=rl.prototype;L.setTimeout=function(t){this.P=t};function Zf(t,e,n){t.L=1,t.v=rh(nr(e)),t.s=n,t.S=!0,C5(t,null)}function C5(t,e){t.G=Date.now(),il(t),t.A=nr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),N5(n.i,"t",r),t.C=0,n=t.l.J,t.h=new x5,t.g=Z5(t.l,n?e:null,!t.s),0<t.O&&(t.M=new lI(_t(t.Pa,t,t.g),t.O)),g5(t.U,t.g,"readystatechange",t.nb),e=t.I?o5(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ia(),uI(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&xn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const c=xn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Wf||this.g&&(this.h.h||this.g.ja()||iy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ia(3):Ia(2)),nh(this);var n=this.g.da();this.ca=n;t:if(S5(this)){var r=iy(this.g);t="";var i=r.length,s=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ui(this),$o(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,cI(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ea(a)){var u=a;break t}}u=null}if(n=u)as(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ep(this,n);else{this.i=!1,this.o=3,St(12),ui(this),$o(this);break e}}this.S?(I5(this,c,o),Wf&&this.i&&c==3&&(g5(this.U,this.V,"tick",this.mb),this.V.start())):(as(this.j,this.m,o,null),ep(this,o)),c==4&&ui(this),this.i&&!this.J&&(c==4?q5(this.l,this):(this.i=!1,il(this)))}else MI(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,St(12)):(this.o=0,St(13)),ui(this),$o(this)}}}catch{}finally{}};function S5(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function I5(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=pI(t,n),i==Zu){e==4&&(t.o=4,St(14),r=!1),as(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Jf){t.o=4,St(15),as(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else as(t.j,t.m,i,null),ep(t,i);S5(t)&&i!=Zu&&i!=Jf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,St(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),i0(e),e.M=!0,St(11))):(as(t.j,t.m,n,"[Invalid Chunked Response]"),ui(t),$o(t))}L.mb=function(){if(this.g){var t=xn(this.g),e=this.g.ja();this.C<e.length&&(nh(this),I5(this,t,e),this.i&&t!=4&&il(this))}};function pI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Zu:(n=Number(e.substring(n,r)),isNaN(n)?Jf:(r+=1,r+n>e.length?Zu:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,ui(this)};function il(t){t.Y=Date.now()+t.P,P5(t,t.P)}function P5(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=tl(_t(t.lb,t),e)}function nh(t){t.B&&(G.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(hI(this.j,this.A),this.L!=2&&(Ia(),St(17)),ui(this),this.o=2,$o(this)):P5(this,this.Y-t)};function $o(t){t.l.H==0||t.J||q5(t.l,t)}function ui(t){nh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Gm(t.V),y5(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ep(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||tp(n.i,t))){if(!t.K&&tp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)nc(n),ah(n);else break e;r0(n),St(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=tl(_t(n.ib,n),6e3));if(1>=V5(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ci(n,11)}else if((t.K||n.g==t)&&nc(n),!Ea(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Zm(s,s.h),s.h=null))}if(r.F){const w=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,_e(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=J5(r,r.J?r.pa:null,r.Y),o.K){O5(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(nh(a),il(a)),r.g=o}else K5(r);0<n.j.length&&lh(n)}else u[0]!="stop"&&u[0]!="close"||ci(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ci(n,7):n0(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ia(4)}catch{}}function mI(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Kc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function gI(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Kc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function A5(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=gI(t),r=mI(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var R5=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function gi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof gi){this.h=t.h,ec(this,t.j),this.s=t.s,this.g=t.g,tc(this,t.m),this.l=t.l;var e=t.i,n=new Pa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ty(this,n),this.o=t.o}else t&&(e=String(t).match(R5))?(this.h=!1,ec(this,e[1]||"",!0),this.s=Ao(e[2]||""),this.g=Ao(e[3]||"",!0),tc(this,e[4]),this.l=Ao(e[5]||"",!0),ty(this,e[6]||"",!0),this.o=Ao(e[7]||"")):(this.h=!1,this.i=new Pa(null,this.h))}gi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ro(e,ny,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ro(e,ny,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ro(n,n.charAt(0)=="/"?wI:_I,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ro(n,TI)),t.join("")};function nr(t){return new gi(t)}function ec(t,e,n){t.j=n?Ao(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ty(t,e,n){e instanceof Pa?(t.i=e,xI(t.i,t.h)):(n||(e=Ro(e,EI)),t.i=new Pa(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function rh(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ao(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ro(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ny=/[#\/\?@]/g,_I=/[#\?:]/g,wI=/[#\?]/g,EI=/[#\?@]/g,TI=/#/g;function Pa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qr(t){t.g||(t.g=new Map,t.h=0,t.i&&yI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Pa.prototype;L.add=function(t,e){qr(this),this.i=null,t=Gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function k5(t,e){qr(t),e=Gs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function D5(t,e){return qr(t),e=Gs(t,e),t.g.has(e)}L.forEach=function(t,e){qr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){qr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){qr(this);let e=[];if(typeof t=="string")D5(this,t)&&(e=e.concat(this.g.get(Gs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return qr(this),this.i=null,t=Gs(this,t),D5(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function N5(t,e,n){k5(t,e),0<n.length&&(t.i=null,t.g.set(Gs(t,e),jm(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xI(t,e){e&&!t.j&&(qr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(k5(this,r),N5(this,i,n))},t)),t.j=e}var CI=class{constructor(t,e){this.g=t,this.map=e}};function L5(t){this.l=t||SI,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var SI=10;function M5(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function V5(t){return t.h?1:t.g?t.g.size:0}function tp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zm(t,e){t.g?t.g.add(e):t.h=e}function O5(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}L5.prototype.cancel=function(){if(this.i=b5(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function b5(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return jm(t.i)}var II=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function PI(){this.g=new II}function AI(t,e,n){const r=n||"";try{A5(t,function(i,s){let o=i;Za(i)&&(o=Wm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function RI(t,e){const n=new Jc;if(G.Image){const r=new Image;r.onload=Ql(Fl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ql(Fl,n,r,"TestLoadImage: error",!1,e),r.onabort=Ql(Fl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ql(Fl,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Fl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ih(t){this.l=t.ec||null,this.j=t.ob||!1}tt(ih,Xm);ih.prototype.g=function(){return new sh(this.l,this.j)};ih.prototype.i=function(t){return function(){return t}}({});function sh(t,e){Ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=e0,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(sh,Ze);var e0=0;L=sh.prototype;L.open=function(t,e){if(this.readyState!=e0)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Aa(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sl(this)),this.readyState=e0};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Aa(this)),this.g&&(this.readyState=3,Aa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Q5(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Q5(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?sl(this):Aa(this),this.readyState==3&&Q5(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,sl(this))};L.Ya=function(t){this.g&&(this.response=t,sl(this))};L.ka=function(){this.g&&sl(this)};function sl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Aa(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Aa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(sh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var kI=G.JSON.parse;function Me(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=j5,this.L=this.M=!1}tt(Me,Ze);var j5="",DI=/^https?$/i,NI=["POST","PUT"];L=Me.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Yf.g(),this.C=this.u?ey(this.u):ey(Yf),this.g.onreadystatechange=_t(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){ry(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=G.FormData&&t instanceof G.FormData,!(0<=n5(NI,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{$5(this),0<this.B&&((this.L=LI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_t(this.ua,this)):this.A=qm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ry(this,s)}};function LI(t){return Ns&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof Qm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function ry(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,F5(t),oh(t)}function F5(t){t.F||(t.F=!0,lt(t,"complete"),lt(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,lt(this,"complete"),lt(this,"abort"),oh(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oh(this,!0)),Me.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?U5(this):this.kb())};L.kb=function(){U5(this)};function U5(t){if(t.h&&typeof Qm<"u"&&(!t.C[1]||xn(t)!=4||t.da()!=2)){if(t.v&&xn(t)==4)qm(t.La,0,t);else if(lt(t,"readystatechange"),xn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(R5)[1]||null;!i&&G.self&&G.self.location&&(i=G.self.location.protocol.slice(0,-1)),r=!DI.test(i?i.toLowerCase():"")}n=r}if(n)lt(t,"complete"),lt(t,"success");else{t.m=6;try{var s=2<xn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",F5(t)}}finally{oh(t)}}}}function oh(t,e){if(t.g){$5(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||lt(t,"ready");try{n.onreadystatechange=r}catch{}}}function $5(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function xn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),kI(e)}};function iy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case j5:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function MI(t){const e={};t=(t.g&&2<=xn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ea(t[r]))continue;var n=sI(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}JS(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function B5(t){let e="";return Um(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function t0(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=B5(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function go(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function z5(t){this.Ga=0,this.j=[],this.l=new Jc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=go("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=go("baseRetryDelayMs",5e3,t),this.hb=go("retryDelaySeedMs",1e4,t),this.eb=go("forwardChannelMaxRetries",2,t),this.xa=go("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new L5(t&&t.concurrentRequestLimit),this.Ja=new PI,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=z5.prototype;L.ra=8;L.H=1;function n0(t){if(H5(t),t.H==3){var e=t.W++,n=nr(t.I);if(_e(n,"SID",t.K),_e(n,"RID",e),_e(n,"TYPE","terminate"),ol(t,n),e=new rl(t,t.l,e),e.L=2,e.v=rh(nr(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=Z5(e.l,null),e.g.ha(e.v)),e.G=Date.now(),il(e)}Y5(t)}function ah(t){t.g&&(i0(t),t.g.cancel(),t.g=null)}function H5(t){ah(t),t.u&&(G.clearTimeout(t.u),t.u=null),nc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function lh(t){if(!M5(t.i)&&!t.m){t.m=!0;var e=t.Na;xa||p5(),Ca||(xa(),Ca=!0),Km.add(e,t),t.C=0}}function VI(t,e){return V5(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=tl(_t(t.Na,t,e),X5(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new rl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=o5(s),a5(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=W5(this,i,e),n=nr(this.I),_e(n,"RID",t),_e(n,"CVER",22),this.F&&_e(n,"X-HTTP-Session-Id",this.F),ol(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(B5(s)))+"&"+e:this.o&&t0(n,this.o,s)),Zm(this.i,i),this.bb&&_e(n,"TYPE","init"),this.P?(_e(n,"$req",e),_e(n,"SID","null"),i.aa=!0,Zf(i,n,null)):Zf(i,n,e),this.H=2}}else this.H==3&&(t?sy(this,t):this.j.length==0||M5(this.i)||sy(this))};function sy(t,e){var n;e?n=e.m:n=t.W++;const r=nr(t.I);_e(r,"SID",t.K),_e(r,"RID",n),_e(r,"AID",t.V),ol(t,r),t.o&&t.s&&t0(r,t.o,t.s),n=new rl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=W5(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Zm(t.i,n),Zf(n,r,e)}function ol(t,e){t.na&&Um(t.na,function(n,r){_e(e,r,n)}),t.h&&A5({},function(n,r){_e(e,r,n)})}function W5(t,e,n){n=Math.min(t.j.length,n);var r=t.h?_t(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{AI(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function K5(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;xa||p5(),Ca||(xa(),Ca=!0),Km.add(e,t),t.A=0}}function r0(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=tl(_t(t.Ma,t),X5(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,G5(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=tl(_t(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,St(10),ah(this),G5(this))};function i0(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function G5(t){t.g=new rl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=nr(t.wa);_e(e,"RID","rpc"),_e(e,"SID",t.K),_e(e,"AID",t.V),_e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&_e(e,"TO",t.qa),_e(e,"TYPE","xmlhttp"),ol(t,e),t.o&&t.s&&t0(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=rh(nr(e)),n.s=null,n.S=!0,C5(n,t)}L.ib=function(){this.v!=null&&(this.v=null,ah(this),r0(this),St(19))};function nc(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function q5(t,e){var n=null;if(t.g==e){nc(t),i0(t),t.g=null;var r=2}else if(tp(t.i,e))n=e.F,O5(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Zc(),lt(r,new w5(r,n)),lh(t)}else K5(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&VI(t,e)||r==2&&r0(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ci(t,5);break;case 4:ci(t,10);break;case 3:ci(t,6);break;default:ci(t,2)}}}function X5(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ci(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=_t(t.pb,t);n||(n=new gi("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||ec(n,"https"),rh(n)),RI(n.toString(),r)}else St(2);t.H=0,t.h&&t.h.za(e),Y5(t),H5(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),St(2)):(this.l.info("Failed to ping google.com"),St(1))};function Y5(t){if(t.H=0,t.ma=[],t.h){const e=b5(t.i);(e.length!=0||t.j.length!=0)&&(qg(t.ma,e),qg(t.ma,t.j),t.i.i.length=0,jm(t.j),t.j.length=0),t.h.ya()}}function J5(t,e,n){var r=n instanceof gi?nr(n):new gi(n);if(r.g!="")e&&(r.g=e+"."+r.g),tc(r,r.m);else{var i=G.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new gi(null);r&&ec(s,r),e&&(s.g=e),i&&tc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&_e(r,n,e),_e(r,"VER",t.ra),ol(t,r),r}function Z5(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Me(new ih({ob:!0})):new Me(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function e6(){}L=e6.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function rc(){if(Ns&&!(10<=Number(GS)))throw Error("Environmental error: no available transport.")}rc.prototype.g=function(t,e){return new $t(t,e)};function $t(t,e){Ze.call(this),this.g=new z5(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ea(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ea(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qs(this)}tt($t,Ze);$t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;St(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=J5(t,null,t.Y),lh(t)};$t.prototype.close=function(){n0(this.g)};$t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Wm(t),t=n);e.j.push(new CI(e.fb++,t)),e.H==3&&lh(e)};$t.prototype.N=function(){this.g.h=null,delete this.j,n0(this.g),delete this.g,$t.$.N.call(this)};function t6(t){Ym.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(t6,Ym);function n6(){Jm.call(this),this.status=1}tt(n6,Jm);function qs(t){this.g=t}tt(qs,e6);qs.prototype.Ba=function(){lt(this.g,"a")};qs.prototype.Aa=function(t){lt(this.g,new t6(t))};qs.prototype.za=function(t){lt(this.g,new n6)};qs.prototype.ya=function(){lt(this.g,"b")};function OI(){this.blockSize=-1}function kn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}tt(kn,OI);kn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Td(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}kn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Td(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Td(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Td(this,r),i=0;break}}this.h=i,this.i+=e};kn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ue(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var bI={};function s0(t){return-128<=t&&128>t?HS(t,function(e){return new ue([e|0],0>e?-1:0)}):new ue([t|0],0>t?-1:0)}function Cn(t){if(isNaN(t)||!isFinite(t))return Es;if(0>t)return ot(Cn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=np;return new ue(e,0)}function r6(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ot(r6(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Cn(Math.pow(e,8)),r=Es,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Cn(Math.pow(e,s)),r=r.R(s).add(Cn(o))):(r=r.R(n),r=r.add(Cn(o)))}return r}var np=4294967296,Es=s0(0),rp=s0(1),oy=s0(16777216);L=ue.prototype;L.ea=function(){if(Yt(this))return-ot(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:np+r)*e,e*=np}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Bn(this))return"0";if(Yt(this))return"-"+ot(this).toString(t);for(var e=Cn(Math.pow(t,6)),n=this,r="";;){var i=sc(n,e).g;n=ic(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Bn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Bn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Yt(t){return t.h==-1}L.X=function(t){return t=ic(this,t),Yt(t)?-1:Bn(t)?0:1};function ot(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ue(n,~t.h).add(rp)}L.abs=function(){return Yt(this)?ot(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ue(n,n[n.length-1]&-2147483648?-1:0)};function ic(t,e){return t.add(ot(e))}L.R=function(t){if(Bn(this)||Bn(t))return Es;if(Yt(this))return Yt(t)?ot(this).R(ot(t)):ot(ot(this).R(t));if(Yt(t))return ot(this.R(ot(t)));if(0>this.X(oy)&&0>t.X(oy))return Cn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ul(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ul(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ul(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ul(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ue(n,0)};function Ul(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function yo(t,e){this.g=t,this.h=e}function sc(t,e){if(Bn(e))throw Error("division by zero");if(Bn(t))return new yo(Es,Es);if(Yt(t))return e=sc(ot(t),e),new yo(ot(e.g),ot(e.h));if(Yt(e))return e=sc(t,ot(e)),new yo(ot(e.g),e.h);if(30<t.g.length){if(Yt(t)||Yt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=rp,r=e;0>=r.X(t);)n=ay(n),r=ay(r);var i=Bi(n,1),s=Bi(r,1);for(r=Bi(r,2),n=Bi(n,2);!Bn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Bi(r,1),n=Bi(n,1)}return e=ic(t,i.R(e)),new yo(i,e)}for(i=Es;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Cn(n),o=s.R(e);Yt(o)||0<o.X(t);)n-=r,s=Cn(n),o=s.R(e);Bn(s)&&(s=rp),i=i.add(s),t=ic(t,o)}return new yo(i,t)}L.gb=function(t){return sc(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ue(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ue(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ue(n,this.h^t.h)};function ay(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ue(n,t.h)}function Bi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ue(i,t.h)}rc.prototype.createWebChannel=rc.prototype.g;$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;eh.NO_ERROR=0;eh.TIMEOUT=8;eh.HTTP_ERROR=6;E5.COMPLETE="complete";T5.EventType=nl;nl.OPEN="a";nl.CLOSE="b";nl.ERROR="c";nl.MESSAGE="d";Ze.prototype.listen=Ze.prototype.O;Me.prototype.listenOnce=Me.prototype.P;Me.prototype.getLastError=Me.prototype.Sa;Me.prototype.getLastErrorCode=Me.prototype.Ia;Me.prototype.getStatus=Me.prototype.da;Me.prototype.getResponseJson=Me.prototype.Wa;Me.prototype.getResponseText=Me.prototype.ja;Me.prototype.send=Me.prototype.ha;Me.prototype.setWithCredentials=Me.prototype.Oa;kn.prototype.digest=kn.prototype.l;kn.prototype.reset=kn.prototype.reset;kn.prototype.update=kn.prototype.j;ue.prototype.add=ue.prototype.add;ue.prototype.multiply=ue.prototype.R;ue.prototype.modulo=ue.prototype.gb;ue.prototype.compare=ue.prototype.X;ue.prototype.toNumber=ue.prototype.ea;ue.prototype.toString=ue.prototype.toString;ue.prototype.getBits=ue.prototype.D;ue.fromNumber=Cn;ue.fromString=r6;var QI=function(){return new rc},jI=function(){return Zc()},xd=eh,FI=E5,UI=bi,ly={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$l=T5,$I=Me,BI=ue;const uy="@firebase/firestore";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let Xs="10.4.0";/**
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
 */const Ri=new Im("@firebase/firestore");function vo(){return Ri.logLevel}function j(t,...e){if(Ri.logLevel<=ne.DEBUG){const n=e.map(o0);Ri.debug(`Firestore (${Xs}): ${t}`,...n)}}function ki(t,...e){if(Ri.logLevel<=ne.ERROR){const n=e.map(o0);Ri.error(`Firestore (${Xs}): ${t}`,...n)}}function oc(t,...e){if(Ri.logLevel<=ne.WARN){const n=e.map(o0);Ri.warn(`Firestore (${Xs}): ${t}`,...n)}}function o0(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: `+t;throw ki(e),new Error(e)}function et(t,e){t||re()}function Te(t,e){return t}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends ar{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class i6{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class HI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WI{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new yi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(et(typeof r.accessToken=="string"),new i6(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string"),new mt(e)}}class KI{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class GI{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new KI(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(et(typeof n.token=="string"),this.R=n.token,new qI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class s6{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=YI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Ls(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new Je(0,0))}static max(){return new Ie(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ra{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ra.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ra?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends Ra{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const JI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Ra{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return JI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new q(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ue.fromString(e))}static fromName(e){return new J(Ue.fromString(e).popFirst(5))}static empty(){return new J(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ue(e.slice()))}}function ZI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ie.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new jr(i,J.empty(),e)}function eP(t){return new jr(t.readTime,t.key,-1)}class jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jr(Ie.min(),J.empty(),-1)}static max(){return new jr(Ie.max(),J.empty(),-1)}}function tP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function o6(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==nP)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function uh(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}a6.ae=-1;function a0(t){return t==null}function ac(t){return t===0&&1/t==-1/0}function iP(t){return typeof t=="number"&&Number.isInteger(t)&&!ac(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function cy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function al(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function l6(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Vt{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Vt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Vt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bl(this.root,e,this.comparator,!0)}}class Bl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(e){this.comparator=e,this.data=new Vt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hy(this.data.getIterator())}getIteratorFrom(e){return new hy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pt(this.comparator);return n.data=e,n}}class hy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new dn([])}unionWith(e){let n=new Pt(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class sP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sP("Invalid base64 string: "+s):s}}(e);return new rr(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new rr(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rr.EMPTY_BYTE_STRING=new rr("");const oP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Di(t){if(et(!!t),typeof t=="string"){let e=0;const n=oP.exec(t);if(et(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ka(t){return typeof t=="string"?rr.fromBase64String(t):rr.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function u6(t){const e=t.mapValue.fields.__previous_value__;return l0(e)?u6(e):e}function lc(t){const e=Di(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class aP{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class uc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new uc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof uc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?l0(t)?4:lP(t)?9007199254740991:10:re()}function Dn(t,e){if(t===e)return!0;const n=Ms(t);if(n!==Ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return lc(t).isEqual(lc(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Di(i.timestampValue),a=Di(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ka(i.bytesValue).isEqual(ka(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return st(i.geoPointValue.latitude)===st(s.geoPointValue.latitude)&&st(i.geoPointValue.longitude)===st(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return st(i.integerValue)===st(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=st(i.doubleValue),a=st(s.doubleValue);return o===a?ac(o)===ac(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ls(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(cy(o)!==cy(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Dn(o[l],a[l])))return!1;return!0}(t,e);default:return re()}}function Da(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function Vs(t,e){if(t===e)return 0;const n=Ms(t),r=Ms(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=st(s.integerValue||s.doubleValue),l=st(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return dy(t.timestampValue,e.timestampValue);case 4:return dy(lc(t),lc(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ka(s),l=ka(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ge(a[u],l[u]);if(c!==0)return c}return ge(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ge(st(s.latitude),st(o.latitude));return a!==0?a:ge(st(s.longitude),st(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Vs(a[u],l[u]);if(c)return c}return ge(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===zl.mapValue&&o===zl.mapValue)return 0;if(s===zl.mapValue)return 1;if(o===zl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ge(l[h],c[h]);if(d!==0)return d;const f=Vs(a[l[h]],u[c[h]]);if(f!==0)return f}return ge(l.length,c.length)}(t.mapValue,e.mapValue);default:throw re()}}function dy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Di(t),r=Di(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function Os(t){return ip(t)}function ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Di(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ka(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ip(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ip(n.fields[o])}`;return i+"}"}(t.mapValue):re()}function sp(t){return!!t&&"integerValue"in t}function u0(t){return!!t&&"arrayValue"in t}function pu(t){return!!t&&"mapValue"in t}function Bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return al(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class hn{constructor(e){this.value=e}static empty(){return new hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bo(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Bo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){al(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new hn(Bo(this.value))}}function c6(t){const e=[];return al(t.fields,(n,r)=>{const i=new vt([n]);if(pu(r)){const s=c6(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dn(e)}/**
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
 */class cn{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new cn(e,0,Ie.min(),Ie.min(),Ie.min(),hn.empty(),0)}static newFoundDocument(e,n,r,i){return new cn(e,1,n,Ie.min(),r,i,0)}static newNoDocument(e,n){return new cn(e,2,n,Ie.min(),Ie.min(),hn.empty(),0)}static newUnknownDocument(e,n){return new cn(e,3,n,Ie.min(),Ie.min(),hn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=hn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=hn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cc{constructor(e,n){this.position=e,this.inclusive=n}}function fy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Vs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function py(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zo{constructor(e,n="asc"){this.field=e,this.dir=n}}function uP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class h6{}class Xe extends h6{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hP(e,n,r):n==="array-contains"?new pP(e,r):n==="in"?new mP(e,r):n==="not-in"?new gP(e,r):n==="array-contains-any"?new yP(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dP(e,r):new fP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vs(n,this.value)):n!==null&&Ms(this.value)===Ms(n)&&this.matchesComparison(Vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Fr extends h6{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Fr(e,n)}matches(e){return d6(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function d6(t){return t.op==="and"}function f6(t){return cP(t)&&d6(t)}function cP(t){for(const e of t.filters)if(e instanceof Fr)return!1;return!0}function op(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Os(t.value);if(f6(t))return t.filters.map(e=>op(e)).join(",");{const e=t.filters.map(n=>op(n)).join(",");return`${t.op}(${e})`}}function p6(t,e){return t instanceof Xe?function(r,i){return i instanceof Xe&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof Fr?function(r,i){return i instanceof Fr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&p6(o,i.filters[a]),!0):!1}(t,e):void re()}function m6(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Os(n.value)}`}(t):t instanceof Fr?function(n){return n.op.toString()+" {"+n.getFilters().map(m6).join(" ,")+"}"}(t):"Filter"}class hP extends Xe{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class dP extends Xe{constructor(e,n){super(e,"in",n),this.keys=g6("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fP extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=g6("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function g6(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class pP extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return u0(n)&&Da(n.arrayValue,this.value)}}class mP extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Da(this.value.arrayValue,n)}}class gP extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Da(this.value.arrayValue,n)}}class yP extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!u0(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Da(this.value.arrayValue,r))}}/**
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
 */class vP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function my(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vP(t,e,n,r,i,s,o)}function c0(t){const e=Te(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>op(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),a0(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Os(r)).join(",")),e.he=n}return e.he}function h0(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!p6(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!py(t.startAt,e.startAt)&&py(t.endAt,e.endAt)}/**
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
 */class ch{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function _P(t,e,n,r,i,s,o,a){return new ch(t,e,n,r,i,s,o,a)}function wP(t){return new ch(t)}function gy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function EP(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function TP(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function xP(t){return t.collectionGroup!==null}function Ho(t){const e=Te(t);if(e.Pe===null){e.Pe=[];const n=TP(e),r=EP(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new zo(n)),e.Pe.push(new zo(vt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new zo(vt.keyField(),s))}}}return e.Pe}function vi(t){const e=Te(t);return e.Ie||(e.Ie=CP(e,Ho(t))),e.Ie}function CP(t,e){if(t.limitType==="F")return my(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new zo(i.field,s)});const n=t.endAt?new cc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cc(t.startAt.position,t.startAt.inclusive):null;return my(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ap(t,e,n){return new ch(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function y6(t,e){return h0(vi(t),vi(e))&&t.limitType===e.limitType}function v6(t){return`${c0(vi(t))}|lt:${t.limitType}`}function _o(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>m6(i)).join(", ")}]`),a0(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Os(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Os(i)).join(",")),`Target(${r})`}(vi(t))}; limitType=${t.limitType})`}function d0(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ho(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=fy(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ho(r),i)||r.endAt&&!function(o,a,l){const u=fy(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ho(r),i))}(t,e)}function SP(t){return(e,n)=>{let r=!1;for(const i of Ho(t)){const s=IP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function IP(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Vs(l,u):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
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
 */class Ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){al(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return l6(this.inner)}size(){return this.innerSize}}/**
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
 */const PP=new Vt(J.comparator);function hc(){return PP}const _6=new Vt(J.comparator);function Hl(...t){let e=_6;for(const n of t)e=e.insert(n.key,n);return e}function w6(t){let e=_6;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function hi(){return Wo()}function E6(){return Wo()}function Wo(){return new Ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const AP=new Vt(J.comparator),RP=new Pt(J.comparator);function yt(...t){let e=RP;for(const n of t)e=e.add(n);return e}const kP=new Pt(ge);function DP(){return kP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T6(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ac(e)?"-0":e}}function x6(t){return{integerValue:""+t}}function NP(t,e){return iP(e)?x6(e):T6(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this._=void 0}}function LP(t,e,n){return t instanceof dc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&l0(s)&&(s=u6(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Na?S6(t,e):t instanceof La?I6(t,e):function(i,s){const o=C6(i,s),a=yy(o)+yy(i.Te);return sp(o)&&sp(i.Te)?x6(a):T6(i.serializer,a)}(t,e)}function MP(t,e,n){return t instanceof Na?S6(t,e):t instanceof La?I6(t,e):n}function C6(t,e){return t instanceof fc?function(r){return sp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class dc extends hh{}class Na extends hh{constructor(e){super(),this.elements=e}}function S6(t,e){const n=P6(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class La extends hh{constructor(e){super(),this.elements=e}}function I6(t,e){let n=P6(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class fc extends hh{constructor(e,n){super(),this.serializer=e,this.Te=n}}function yy(t){return st(t.integerValue||t.doubleValue)}function P6(t){return u0(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function VP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Na&&i instanceof Na||r instanceof La&&i instanceof La?Ls(r.elements,i.elements,Dn):r instanceof fc&&i instanceof fc?Dn(r.Te,i.Te):r instanceof dc&&i instanceof dc}(t.transform,e.transform)}class OP{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dh{}function A6(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new k6(t.key,Kn.none()):new ll(t.key,t.data,Kn.none());{const n=t.data,r=hn.empty();let i=new Pt(vt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qi(t.key,r,new dn(i.toArray()),Kn.none())}}function bP(t,e,n){t instanceof ll?function(i,s,o){const a=i.value.clone(),l=_y(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Qi?function(i,s,o){if(!mu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=_y(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(R6(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ko(t,e,n,r){return t instanceof ll?function(s,o,a,l){if(!mu(s.precondition,o))return a;const u=s.value.clone(),c=wy(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qi?function(s,o,a,l){if(!mu(s.precondition,o))return a;const u=wy(s.fieldTransforms,l,o),c=o.data;return c.setAll(R6(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return mu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function QP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=C6(r.transform,i||null);s!=null&&(n===null&&(n=hn.empty()),n.set(r.field,s))}return n||null}function vy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ls(r,i,(s,o)=>VP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ll extends dh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qi extends dh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function R6(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _y(t,e,n){const r=new Map;et(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,MP(o,a,n[i]))}return r}function wy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,LP(s,o,e))}return r}class k6 extends dh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jP extends dh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class FP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&bP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=E6();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=A6(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),yt())}isEqual(e){return this.batchId===e.batchId&&Ls(this.mutations,e.mutations,(n,r)=>vy(n,r))&&Ls(this.baseMutations,e.baseMutations,(n,r)=>vy(n,r))}}class f0{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){et(e.mutations.length===r.length);let i=function(){return AP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new f0(e,n,r,i)}}/**
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
 */class UP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var Qe,ie;function $P(t){switch(t){default:return re();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function BP(t){if(t===void 0)return ki("GRPC error has no .code"),N.UNKNOWN;switch(t){case Qe.OK:return N.OK;case Qe.CANCELLED:return N.CANCELLED;case Qe.UNKNOWN:return N.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return N.INTERNAL;case Qe.UNAVAILABLE:return N.UNAVAILABLE;case Qe.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Qe.NOT_FOUND:return N.NOT_FOUND;case Qe.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Qe.ABORTED:return N.ABORTED;case Qe.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Qe.DATA_LOSS:return N.DATA_LOSS;default:return re()}}(ie=Qe||(Qe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new BI([4294967295,4294967295],0);class zP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lp(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WP(t,e){return lp(t,e.toTimestamp())}function Ts(t){return et(!!t),Ie.fromTimestamp(function(n){const r=Di(n);return new Je(r.seconds,r.nanos)}(t))}function D6(t,e){return function(r){return new Ue(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function KP(t){const e=Ue.fromString(t);return et(tA(e)),e}function up(t,e){return D6(t.databaseId,e.path)}function GP(t){const e=KP(t);return e.length===4?Ue.emptyPath():XP(e)}function qP(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function XP(t){return et(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ey(t,e,n){return{name:up(t,e),fields:n.value.mapValue.fields}}function YP(t,e){let n;if(e instanceof ll)n={update:Ey(t,e.key,e.value)};else if(e instanceof k6)n={delete:up(t,e.key)};else if(e instanceof Qi)n={update:Ey(t,e.key,e.data),updateMask:eA(e.fieldMask)};else{if(!(e instanceof jP))return re();n={verify:up(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof dc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Na)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof La)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:WP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re()}(t,e.precondition)),n}function JP(t,e){return t&&t.length>0?(et(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ts(i.updateTime):Ts(s);return o.isEqual(Ie.min())&&(o=Ts(s)),new OP(o,i.transformResults||[])}(n,e))):[]}function ZP(t){let e=GP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){et(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=N6(h);return d instanceof Fr&&f6(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new zo(Hi(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,a0(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new cc(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new cc(f,d)}(n.endAt)),_P(e,i,o,s,a,"F",l,u)}function N6(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hi(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Hi(n.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Hi(n.unaryFilter.field);return Xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hi(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(Hi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Fr.create(n.compositeFilter.filters.map(r=>N6(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function Hi(t){return vt.fromServerFormat(t.fieldPath)}function eA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class nA{constructor(e){this.ht=e}}function rA(t){const e=ZP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ap(e,e.limit,"L"):e}/**
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
 */class iA{constructor(){this.an=new sA}addToCollectionParentIndex(e,n){return this.an.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(jr.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(jr.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class sA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Pt(Ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pt(Ue.comparator)).toArray()}}/**
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
 */class bs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new bs(0)}static Ln(){return new bs(-1)}}/**
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
 */class oA{constructor(){this.changes=new Ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,cn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class aA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ko(r.mutation,i,dn.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,yt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=yt()){const i=hi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Hl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=hi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,yt()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=hc();const o=Wo(),a=function(){return Wo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Qi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ko(c.mutation,u,c.mutation.getFieldMask(),Je.now())):o.set(u.key,dn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new aA(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Wo();let i=new Vt((o,a)=>o-a),s=yt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||dn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||yt()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=E6();c.forEach(d=>{if(!s.has(d)){const f=A6(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(hi());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,yt())).next(c=>({batchId:a,changes:w6(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Hl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Hl();return this.indexManager.getCollectionParents(e,s).next(a=>k.forEach(a,l=>{const u=function(h,d){return new ch(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,cn.newInvalidDocument(c)))});let a=Hl();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Ko(c.mutation,u,dn.empty(),Je.now()),d0(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return k.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ts(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:rA(i.bundledQuery),readTime:Ts(i.readTime)}}(n)),k.resolve()}}/**
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
 */class cA{constructor(){this.overlays=new Vt(J.comparator),this.Pr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hi();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=hi(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Vt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=hi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=hi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UP(n,r));let s=this.Pr.get(n);s===void 0&&(s=yt(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class p0{constructor(){this.Ir=new Pt(Ge.dr),this.Tr=new Pt(Ge.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Ge(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new J(new Ue([])),r=new Ge(n,e),i=new Ge(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new J(new Ue([])),r=new Ge(n,e),i=new Ge(n,e+1);let s=yt();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ge(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return J.comparator(e.key,n.key)||ge(e.yr,n.yr)}static Er(e,n){return ge(e.yr,n.yr)||J.comparator(e.key,n.key)}}/**
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
 */class hA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new Pt(Ge.dr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FP(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new Ge(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),i=new Ge(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pt(ge);return n.forEach(i=>{const s=new Ge(i,0),o=new Ge(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new Ge(new J(s),0);let a=new Pt(ge);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.yr)),!0)},o),k.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){et(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return k.forEach(n.mutations,i=>{const s=new Ge(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Ge(n,0),i=this.Sr.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class dA{constructor(e){this.Fr=e,this.docs=function(){return new Vt(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():cn.newInvalidDocument(n))}getEntries(e,n){let r=hc();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():cn.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=hc();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||tP(eP(c),r)<=0||(i.has(c.key)||d0(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Mr(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fA(this)}getSize(e){return k.resolve(this.size)}}class fA extends oA{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class pA{constructor(e){this.persistence=e,this.Or=new Ys(n=>c0(n),h0),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.Nr=0,this.Br=new p0,this.targetCount=0,this.Lr=bs.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),k.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Qn(n),k.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Br.containsKey(n))}}/**
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
 */class mA{constructor(e,n){this.kr={},this.overlays={},this.qr=new a6(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new pA(this),this.indexManager=new iA,this.remoteDocumentCache=function(i){return new dA(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new nA(n),this.Ur=new uA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new hA(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new gA(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return k.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class gA extends rP{constructor(e){super(),this.currentSequenceNumber=e}}class m0{constructor(e){this.persistence=e,this.jr=new p0,this.Hr=null}static Jr(e){return new m0(e)}get Yr(){if(this.Hr)return this.Hr;throw re()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),k.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Yr,r=>{const i=J.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,Ie.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return k.or([()=>k.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class g0{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=yt(),i=yt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new g0(e,n.fromCache,r,i)}}/**
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
 */class yA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class vA{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new yA;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(vo()<=ne.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",_o(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),k.resolve()):(vo()<=ne.DEBUG&&j("QueryEngine","Query:",_o(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(vo()<=ne.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",_o(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vi(n))):k.resolve())}Hi(e,n){if(gy(n))return k.resolve(null);let r=vi(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ap(n,null,"F"),r=vi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=yt(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(e,ap(n,null,"F")):this.ts(e,u,n,l)}))})))}Ji(e,n,r,i){return gy(n)||i.isEqual(Ie.min())?k.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?k.resolve(null):(vo()<=ne.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_o(n)),this.ts(e,o,n,ZI(i,-1)).next(a=>a))})}Xi(e,n){let r=new Pt(SP(e));return n.forEach((i,s)=>{d0(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return vo()<=ne.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",_o(n)),this.ji.getDocumentsMatchingQuery(e,n,jr.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new Vt(ge),this.ss=new Ys(s=>c0(s),h0),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lA(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function wA(t,e,n,r){return new _A(t,e,n,r)}async function L6(t,e){const n=Te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=yt();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function EA(t,e){const n=Te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=k.resolve();return d.forEach(y=>{f=f.next(()=>c.getEntry(l,y)).next(w=>{const E=u.docVersions.get(y);et(E!==null),w.version.compareTo(E)<0&&(h.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=yt();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function TA(t){const e=Te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function xA(t,e){const n=Te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Ty{constructor(){this.activeTargetIds=DP()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CA{constructor(){this.ro=new Ty,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new Ty,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class SA{so(e){}shutdown(){}}/**
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
 */class xy{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wl=null;function Cd(){return Wl===null?Wl=function(){return 268435456+Math.round(2147483648*Math.random())}():Wl++,"0x"+Wl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class PA{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const pt="WebChannelConnection";class AA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=Cd(),l=this.Do(n,r);j("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,i).then(c=>(j("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw oc("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=IA[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Cd();return new Promise((o,a)=>{const l=new $I;l.setWithCredentials(!0),l.listenOnce(FI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case xd.NO_ERROR:const c=l.getResponseJson();j(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case xd.TIMEOUT:j(pt,`RPC '${e}' ${s} timed out`),a(new q(N.DEADLINE_EXCEEDED,"Request time out"));break;case xd.HTTP_ERROR:const h=l.getStatus();if(j(pt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(E){const _=E.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(_)>=0?_:N.UNKNOWN}(f.status);a(new q(y,f.message))}else a(new q(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(N.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{j(pt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);j(pt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Mo(e,n,r){const i=Cd(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=QI(),a=jI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");j(pt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const y=new PA({ho:E=>{f?j(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(j(pt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),j(pt,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},Po:()=>h.close()}),w=(E,_,p)=>{E.listen(_,v=>{try{p(v)}catch(g){setTimeout(()=>{throw g},0)}})};return w(h,$l.EventType.OPEN,()=>{f||j(pt,`RPC '${e}' stream ${i} transport opened.`)}),w(h,$l.EventType.CLOSE,()=>{f||(f=!0,j(pt,`RPC '${e}' stream ${i} transport closed`),y.mo())}),w(h,$l.EventType.ERROR,E=>{f||(f=!0,oc(pt,`RPC '${e}' stream ${i} transport errored:`,E),y.mo(new q(N.UNAVAILABLE,"The operation could not be completed")))}),w(h,$l.EventType.MESSAGE,E=>{var _;if(!f){const p=E.data[0];et(!!p);const v=p,g=v.error||((_=v[0])===null||_===void 0?void 0:_.error);if(g){j(pt,`RPC '${e}' stream ${i} received error:`,g);const x=g.status;let R=function(b){const Q=Qe[b];if(Q!==void 0)return BP(Q)}(x),I=g.message;R===void 0&&(R=N.INTERNAL,I="Unknown error status: "+x+" with message "+g.message),f=!0,y.mo(new q(R,I)),h.close()}else j(pt,`RPC '${e}' stream ${i} received:`,p),y.fo(p)}}),w(a,UI.STAT_EVENT,E=>{E.stat===ly.PROXY?j(pt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===ly.NOPROXY&&j(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}function Sd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t){return new zP(t,!0)}/**
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
 */class M6{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class RA{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new M6(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(ki(n.toString()),ki("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new q(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kA extends RA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(et(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=JP(e.writeResults,e.commitTime),r=Ts(e.commitTime);return this.listener.T_(r,n)}return et(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=qP(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YP(this.serializer,r))};this.n_(n)}}/**
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
 */class DA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new q(N.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(N.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(N.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class NA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(ki(n),this.p_=!1):j("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class LA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{cl(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Te(l);u.F_.add(4),await ul(u),u.O_.set("Unknown"),u.F_.delete(4),await ph(u)}(this))})}),this.O_=new NA(r,i)}}async function ph(t){if(cl(t))for(const e of t.M_)await e(!0)}async function ul(t){for(const e of t.M_)await e(!1)}function cl(t){return Te(t).F_.size===0}async function V6(t,e,n){if(!uh(e))throw e;t.F_.add(1),await ul(t),t.O_.set("Offline"),n||(n=()=>TA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await ph(t)})}function O6(t,e){return e().catch(n=>V6(t,n,e))}async function mh(t){const e=Te(t),n=Ur(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;MA(e);)try{const i=await xA(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,VA(e,i)}catch(i){await V6(e,i)}b6(e)&&Q6(e)}function MA(t){return cl(t)&&t.C_.length<10}function VA(t,e){t.C_.push(e);const n=Ur(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function b6(t){return cl(t)&&!Ur(t).Jo()&&t.C_.length>0}function Q6(t){Ur(t).start()}async function OA(t){Ur(t).A_()}async function bA(t){const e=Ur(t);for(const n of t.C_)e.d_(n.mutations)}async function QA(t,e,n){const r=t.C_.shift(),i=f0.from(r,e,n);await O6(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mh(t)}async function jA(t,e){e&&Ur(t).I_&&await async function(r,i){if(function(o){return $P(o)&&o!==N.ABORTED}(i.code)){const s=r.C_.shift();Ur(r).Xo(),await O6(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mh(r)}}(t,e),b6(t)&&Q6(t)}async function Cy(t,e){const n=Te(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=cl(n);n.F_.add(3),await ul(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await ph(n)}async function FA(t,e){const n=Te(t);e?(n.F_.delete(2),await ph(n)):e||(n.F_.add(2),await ul(n),n.O_.set("Unknown"))}function Ur(t){return t.L_||(t.L_=function(n,r,i){const s=Te(n);return s.V_(),new kA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:OA.bind(null,t),Eo:jA.bind(null,t),E_:bA.bind(null,t),T_:QA.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await mh(t)):(await t.L_.stop(),t.C_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class y0{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new y0(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function j6(t,e){if(ki("AsyncQueue",`${e}: ${t}`),uh(t))return new q(N.UNAVAILABLE,`${e}: ${t}`);throw t}class UA{constructor(){this.queries=new Ys(e=>v6(e),y6),this.onlineState="Unknown",this.K_=new Set}}function $A(t){t.K_.forEach(e=>{e.next()})}class BA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ys(a=>v6(a),y6),this.pa=new Map,this.ya=new Set,this.wa=new Vt(J.comparator),this.Sa=new Map,this.ba=new p0,this.Da={},this.Ca=new Map,this.va=bs.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function zA(t,e,n){const r=GA(t);try{const i=await function(o,a){const l=Te(o),u=Je.now(),c=a.reduce((f,y)=>f.add(y.key),yt());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=hc(),w=yt();return l._s.getEntries(f,c).next(E=>{y=E,y.forEach((_,p)=>{p.isValidDocument()||(w=w.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(E=>{h=E;const _=[];for(const p of a){const v=QP(p,h.get(p.key).overlayedDocument);v!=null&&_.push(new Qi(p.key,v,c6(v.value.mapValue),Kn.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,_,a)}).next(E=>{d=E;const _=E.applyToLocalDocumentSet(h,w);return l.documentOverlayCache.saveOverlays(f,E.batchId,_)})}).then(()=>({batchId:d.batchId,changes:w6(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new Vt(ge)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await gh(r,i.changes),await mh(r.remoteStore)}catch(i){const s=j6(i,"Failed to persist write");n.reject(s)}}function Sy(t,e,n){const r=Te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Te(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.U_(a)&&(u=!0)}),u&&$A(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HA(t,e){const n=Te(t),r=e.batch.batchId;try{const i=await EA(n.localStore,e);U6(n,r,null),F6(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gh(n,i)}catch(i){await o6(i)}}async function WA(t,e,n){const r=Te(t);try{const i=await function(o,a){const l=Te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(et(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);U6(r,e,n),F6(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await gh(r,i)}catch(i){await o6(i)}}function F6(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function U6(t,e,n){const r=Te(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}async function gh(t,e,n){const r=Te(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=g0.$i(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,u){const c=Te(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(u,d=>k.forEach(d.Qi,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>k.forEach(d.Ki,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!uh(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.rs.get(d),y=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(y);c.rs=c.rs.insert(d,w)}}}(r.localStore,s))}async function KA(t,e){const n=Te(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await L6(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new q(N.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gh(n,r.cs)}}function GA(t){const e=Te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WA.bind(null,e),e}class Iy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=fh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return wA(this.persistence,new vA,e.initialUser,this.serializer)}createPersistence(e){return new mA(m0.Jr,this.serializer)}createSharedClientState(e){return new CA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KA.bind(null,this.syncEngine),await FA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UA}()}createDatastore(e){const n=fh(e.databaseInfo.databaseId),r=function(s){return new AA(s)}(e.databaseInfo);return function(s,o,a,l){return new DA(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new LA(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Sy(this.syncEngine,n,0),function(){return xy.C()?new xy:new SA}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new BA(i,s,o,a,l,u);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Te(n);j("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await ul(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class XA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=s6.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{j("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(j("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=j6(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Id(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await L6(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Py(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JA(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Cy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Cy(e.remoteStore,s)),t._onlineComponents=e}function YA(t){return t.name==="FirebaseError"?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function JA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Id(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!YA(n))throw n;oc("Error using user provided cache. Falling back to memory cache: "+n),await Id(t,new Iy)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Id(t,new Iy);return t._offlineComponents}async function ZA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Py(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Py(t,new qA))),t._onlineComponents}function eR(t){return ZA(t).then(e=>e.syncEngine)}/**
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
 */function $6(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new Map;/**
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
 */function tR(t,e,n){if(!n)throw new q(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nR(t,e,n,r){if(e===!0&&r===!0)throw new q(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ry(t){if(!J.isDocumentKey(t))throw new q(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function v0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function cp(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=v0(t);throw new q(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$6((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _0{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ky({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ky(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zI;switch(r.type){case"firstParty":return new GI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ay.get(n);r&&(j("ComponentProvider","Removing Datastore"),Ay.delete(n),r.terminate())}(this),Promise.resolve()}}function rR(t,e,n,r={}){var i;const s=(t=cp(t,_0))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&oc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=mt.MOCK_USER;else{a=iT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new q(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(u)}t._authCredentials=new HI(new i6(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new w0(this.firestore,e,this._query)}}class Gn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ma(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gn(this.firestore,e,this._key)}}class Ma extends w0{constructor(e,n,r){super(e,n,wP(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gn(this.firestore,null,new J(e))}withConverter(e){return new Ma(this.firestore,e,this._path)}}function iR(t,e,...n){if(t=Ut(t),arguments.length===1&&(e=s6.V()),tR("doc","path",e),t instanceof _0){const r=Ue.fromString(e,...n);return Ry(r),new Gn(t,null,new J(r))}{if(!(t instanceof Gn||t instanceof Ma))throw new q(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Ry(r),new Gn(t.firestore,t instanceof Ma?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new M6(this,"async_queue_retry"),this.ou=()=>{const n=Sd();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Sd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Sd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new yi;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!uh(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ki("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=y0.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&re()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class B6 extends _0{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new sR}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||z6(this),this._firestoreClient.terminate()}}function oR(t,e){const n=typeof t=="object"?t:T3(),r=typeof t=="string"?t:e||"(default)",i=Am(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nT("firestore");s&&rR(i,...s)}return i}function aR(t){return t._firestoreClient||z6(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function z6(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new aP(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,$6(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new XA(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Va(rr.fromBase64String(e))}catch(n){throw new q(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Va(rr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H6{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W6{constructor(e){this._methodName=e}}/**
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
 */class K6{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const lR=/^__.*__$/;class uR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ll(e,this.data,n,this.fieldTransforms)}}function G6(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class E0{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new E0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return pc(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(G6(this.Tu)&&lR.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class cR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fh(e)}wu(e,n,r,i=!1){return new E0({Tu:e,methodName:n,yu:r,path:vt.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hR(t){const e=t._freezeSettings(),n=fh(t._databaseId);return new cR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dR(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);J6("Data must be an object, but it was:",o,r);const a=X6(r,o);let l,u;if(s.merge)l=new dn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=fR(e,h,n);if(!o.contains(d))throw new q(N.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);gR(c,d)||c.push(d)}l=new dn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new uR(new hn(a),l,u)}function q6(t,e){if(Y6(t=Ut(t)))return J6("Unsupported field value:",e,t),X6(t,e);if(t instanceof W6)return function(r,i){if(!G6(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=q6(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Je.fromDate(r);return{timestampValue:lp(i.serializer,s)}}if(r instanceof Je){const s=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lp(i.serializer,s)}}if(r instanceof K6)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Va)return{bytesValue:HP(i.serializer,r._byteString)};if(r instanceof Gn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:D6(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${v0(r)}`)}(t,e)}function X6(t,e){const n={};return l6(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):al(t,(r,i)=>{const s=q6(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Y6(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof K6||t instanceof Va||t instanceof Gn||t instanceof W6)}function J6(t,e,n){if(!Y6(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=v0(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function fR(t,e,n){if((e=Ut(e))instanceof H6)return e._internalPath;if(typeof e=="string")return mR(t,e);throw pc("Field path arguments must be of type string or ",t,!1,void 0,n)}const pR=new RegExp("[~\\*/\\[\\]]");function mR(t,e,n){if(e.search(pR)>=0)throw pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new H6(...e.split("."))._internalPath}catch{throw pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new q(N.INVALID_ARGUMENT,a+t+l)}function gR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function vR(t,e,n){t=cp(t,Gn);const r=cp(t.firestore,B6),i=yR(t.converter,e,n);return _R(r,[dR(hR(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Kn.none())])}function _R(t,e){return function(r,i){const s=new yi;return r.asyncQueue.enqueueAndForget(async()=>zA(await eR(r),i,s)),s.promise}(aR(t),e)}(function(e,n=!0){(function(i){Xs=i})(Ws),Ds(new Si("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new B6(new WI(r.getProvider("auth-internal")),new XI(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new q(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uc(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Mr(uy,"4.2.0",e),Mr(uy,"4.2.0","esm2017")})();const wR={apiKey:"AIzaSyCM8dFfWTqqiZ7BAI9VnU-RBZ3mC15a-z4",authDomain:"healthert-b89e0.firebaseapp.com",databaseURL:"https://healthert-b89e0-default-rtdb.firebaseio.com",projectId:"healthert-b89e0",storageBucket:"healthert-b89e0.appspot.com",messagingSenderId:"191565912077",appId:"1:191565912077:web:5bca1c3d75069eb2239d44",measurementId:"G-BXJ63W1VPW"},Z6=E3(wR),Kl=VS(Z6),ER=oR(Z6),TR=t=>{if(t.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"))return!0;throw new Error("Email invalido")},xR=t=>{if(t.match("((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9])+"))return!0;throw new Error("Contrasena invalida")},CR=(t,e)=>TR(t)&&xR(e),e9=S.createContext(),Js=()=>{const t=S.useContext(e9);if(!t)throw new Error("No existe el proveedor de autenticacion");return t};function SR({children:t}){const[e,n]=S.useState(null),[r,i]=S.useState(!0),s=async(l,u,c,h,d,f,y,w)=>{try{CR(l,u)&&await vC(Kl,l,u).then(async E=>{const _=E.user.uid;await vR(iR(ER,"users",_),{nombrec:c,telefono:h,nombreHospital:d,rfc:f,licencia:y,type:w})})}catch(E){throw new Error(E)}},o=(l,u)=>_C(Kl,l,u),a=()=>xC(Kl);return S.useEffect(()=>{const l=TC(Kl,u=>{n(u),i(!1)});return()=>{l()}},[]),m.jsx(e9.Provider,{value:{user:e,logIn:o,signUp:s,logOut:a,loading:r},children:t})}const IR=()=>{const{user:t}=Js();return console.log(t),m.jsxs(m.Fragment,{children:[m.jsx(xm,{link:"login",text:"Iniciar sesion"}),m.jsx(EE,{}),m.jsx(SE,{}),m.jsx(NE,{}),m.jsx(GE,{}),m.jsx(Cm,{})]})},Dy=()=>{const t=u3();return console.log(t.statusText),m.jsxs("div",{className:"flex flex-col mt-52 lg:mt-0 xl:mt-0 md:mt-10 xl:gap-y-0 lg:gap-y-0 md:gap-y-0  items-center justify-center md:min-h-screen lg:min-h-screen xl:min-h-screen",children:[m.jsx("h1",{className:"xl:mt-14 md:mt-32 lg:mt-32 text-3xl ml-4 md:text-5xl sm:text-4xl lg:text-6xl mb-3 dark:text-red-500 text-moradoOscuro font-bold sm:text-center",children:"HA OCURRIDO UN ERROR..."}),m.jsx("p",{className:"text-xl ml-0 mb-3 mt-6 md:mt-3 xl:mt-4 md:text-2xl sm:text-2xl lg:text-2xl xl:text-3xl  dark:text-white text-gray-500  sm:text-center",children:t.statusText||t.message}),m.jsx("div",{className:"my-12  animate-heartBeat items-center",children:m.jsx(h3,{})})]})},T0=({text:t,onClick:e})=>m.jsx("button",{type:"submit",className:"text-white hover:cursor-pointer bg-verde text-xl py-3 px-6 flex justify-start items-center rounded-full hover:bg-green-700 hover:transition-all duration-300 hover:drop-shadow-xl hover:scale-105",onClick:e,children:t}),t9=S.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),yh=S.createContext({}),x0=S.createContext(null),vh=typeof document<"u",PR=vh?S.useLayoutEffect:S.useEffect,n9=S.createContext({strict:!1});function AR(t,e,n,r){const{visualElement:i}=S.useContext(yh),s=S.useContext(n9),o=S.useContext(x0),a=S.useContext(t9).reducedMotion,l=S.useRef();r=r||s.renderer,!l.current&&r&&(l.current=r(t,{visualState:e,parent:i,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;S.useInsertionEffect(()=>{u&&u.update(n,o)});const c=S.useRef(!!window.HandoffAppearAnimations);return PR(()=>{u&&(u.render(),c.current&&u.animationState&&u.animationState.animateChanges())}),S.useEffect(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),window.HandoffAppearAnimations=void 0,c.current=!1)}),u}function ls(t){return typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function RR(t,e,n){return S.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):ls(n)&&(n.current=r))},[e])}function Oa(t){return typeof t=="string"||Array.isArray(t)}function _h(t){return typeof t=="object"&&typeof t.start=="function"}const C0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],S0=["initial",...C0];function wh(t){return _h(t.animate)||S0.some(e=>Oa(t[e]))}function r9(t){return!!(wh(t)||t.variants)}function kR(t,e){if(wh(t)){const{initial:n,animate:r}=t;return{initial:n===!1||Oa(n)?n:void 0,animate:Oa(r)?r:void 0}}return t.inherit!==!1?e:{}}function DR(t){const{initial:e,animate:n}=kR(t,S.useContext(yh));return S.useMemo(()=>({initial:e,animate:n}),[Ny(e),Ny(n)])}function Ny(t){return Array.isArray(t)?t.join(" "):t}const Ly={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ba={};for(const t in Ly)ba[t]={isEnabled:e=>Ly[t].some(n=>!!e[n])};function NR(t){for(const e in t)ba[e]={...ba[e],...t[e]}}const i9=S.createContext({}),s9=S.createContext({}),LR=Symbol.for("motionComponentSymbol");function MR({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){t&&NR(t);function s(a,l){let u;const c={...S.useContext(t9),...a,layoutId:VR(a)},{isStatic:h}=c,d=DR(a),f=r(a,h);if(!h&&vh){d.visualElement=AR(i,f,c,e);const y=S.useContext(s9),w=S.useContext(n9).strict;d.visualElement&&(u=d.visualElement.loadFeatures(c,w,t,y))}return S.createElement(yh.Provider,{value:d},u&&d.visualElement?S.createElement(u,{visualElement:d.visualElement,...c}):null,n(i,a,RR(f,d.visualElement,l),f,h,d.visualElement))}const o=S.forwardRef(s);return o[LR]=i,o}function VR({layoutId:t}){const e=S.useContext(i9).id;return e&&t!==void 0?e+"-"+t:t}function OR(t){function e(r,i={}){return MR(t(r,i))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(r,i)=>(n.has(i)||n.set(i,e(i)),n.get(i))})}const bR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function I0(t){return typeof t!="string"||t.includes("-")?!1:!!(bR.indexOf(t)>-1||/[A-Z]/.test(t))}const mc={};function QR(t){Object.assign(mc,t)}const hl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ji=new Set(hl);function o9(t,{layout:e,layoutId:n}){return ji.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!mc[t]||t==="opacity")}const Ot=t=>!!(t&&t.getVelocity),jR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},FR=hl.length;function UR(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,i){let s="";for(let o=0;o<FR;o++){const a=hl[o];if(t[a]!==void 0){const l=jR[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(t,r?"":s):n&&r&&(s="none"),s}const a9=t=>e=>typeof e=="string"&&e.startsWith(t),l9=a9("--"),hp=a9("var(--"),$R=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,BR=(t,e)=>e&&typeof t=="number"?e.transform(t):t,$r=(t,e,n)=>Math.min(Math.max(n,t),e),Fi={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Go={...Fi,transform:t=>$r(0,1,t)},Gl={...Fi,default:1},qo=t=>Math.round(t*1e5)/1e5,Eh=/(-)?([\d]*\.?[\d])+/g,u9=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,zR=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function dl(t){return typeof t=="string"}const fl=t=>({test:e=>dl(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),dr=fl("deg"),Rn=fl("%"),B=fl("px"),HR=fl("vh"),WR=fl("vw"),My={...Rn,parse:t=>Rn.parse(t)/100,transform:t=>Rn.transform(t*100)},Vy={...Fi,transform:Math.round},c9={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,radius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,size:B,top:B,right:B,bottom:B,left:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,rotate:dr,rotateX:dr,rotateY:dr,rotateZ:dr,scale:Gl,scaleX:Gl,scaleY:Gl,scaleZ:Gl,skew:dr,skewX:dr,skewY:dr,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:Go,originX:My,originY:My,originZ:B,zIndex:Vy,fillOpacity:Go,strokeOpacity:Go,numOctaves:Vy};function P0(t,e,n,r){const{style:i,vars:s,transform:o,transformOrigin:a}=t;let l=!1,u=!1,c=!0;for(const h in e){const d=e[h];if(l9(h)){s[h]=d;continue}const f=c9[h],y=BR(d,f);if(ji.has(h)){if(l=!0,o[h]=y,!c)continue;d!==(f.default||0)&&(c=!1)}else h.startsWith("origin")?(u=!0,a[h]=y):i[h]=y}if(e.transform||(l||r?i.transform=UR(t.transform,n,c,r):i.transform&&(i.transform="none")),u){const{originX:h="50%",originY:d="50%",originZ:f=0}=a;i.transformOrigin=`${h} ${d} ${f}`}}const A0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function h9(t,e,n){for(const r in e)!Ot(e[r])&&!o9(r,n)&&(t[r]=e[r])}function KR({transformTemplate:t},e,n){return S.useMemo(()=>{const r=A0();return P0(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}function GR(t,e,n){const r=t.style||{},i={};return h9(i,r,t),Object.assign(i,KR(t,e,n)),t.transformValues?t.transformValues(i):i}function qR(t,e,n){const r={},i=GR(t,e,n);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=i,r}const XR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function gc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||XR.has(t)}let d9=t=>!gc(t);function YR(t){t&&(d9=e=>e.startsWith("on")?!gc(e):t(e))}try{YR(require("@emotion/is-prop-valid").default)}catch{}function JR(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(d9(i)||n===!0&&gc(i)||!e&&!gc(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function Oy(t,e,n){return typeof t=="string"?t:B.transform(e+n*t)}function ZR(t,e,n){const r=Oy(e,t.x,t.width),i=Oy(n,t.y,t.height);return`${r} ${i}`}const ek={offset:"stroke-dashoffset",array:"stroke-dasharray"},tk={offset:"strokeDashoffset",array:"strokeDasharray"};function nk(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?ek:tk;t[s.offset]=B.transform(-r);const o=B.transform(e),a=B.transform(n);t[s.array]=`${o} ${a}`}function R0(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,h,d){if(P0(t,u,c,d),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:y,dimensions:w}=t;f.transform&&(w&&(y.transform=f.transform),delete f.transform),w&&(i!==void 0||s!==void 0||y.transform)&&(y.transformOrigin=ZR(w,i!==void 0?i:.5,s!==void 0?s:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),o!==void 0&&nk(f,o,a,l,!1)}const f9=()=>({...A0(),attrs:{}}),k0=t=>typeof t=="string"&&t.toLowerCase()==="svg";function rk(t,e,n,r){const i=S.useMemo(()=>{const s=f9();return R0(s,e,{enableHardwareAcceleration:!1},k0(r),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};h9(s,t.style,t),i.style={...s,...i.style}}return i}function ik(t=!1){return(n,r,i,{latestValues:s},o)=>{const l=(I0(n)?rk:qR)(r,s,o,n),c={...JR(r,typeof n=="string",t),...l,ref:i},{children:h}=r,d=S.useMemo(()=>Ot(h)?h.get():h,[h]);return S.createElement(n,{...c,children:d})}}const D0=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function p9(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}const m9=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function g9(t,e,n,r){p9(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(m9.has(i)?i:D0(i),e.attrs[i])}function N0(t,e){const{style:n}=t,r={};for(const i in n)(Ot(n[i])||e.style&&Ot(e.style[i])||o9(i,t))&&(r[i]=n[i]);return r}function y9(t,e){const n=N0(t,e);for(const r in t)if(Ot(t[r])||Ot(e[r])){const i=hl.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=t[r]}return n}function L0(t,e,n,r={},i={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,i)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,i)),e}function sk(t){const e=S.useRef(null);return e.current===null&&(e.current=t()),e.current}const yc=t=>Array.isArray(t),ok=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),ak=t=>yc(t)?t[t.length-1]||0:t;function gu(t){const e=Ot(t)?t.get():t;return ok(e)?e.toValue():e}function lk({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,i,s){const o={latestValues:uk(r,i,s,t),renderState:e()};return n&&(o.mount=a=>n(r,a,o)),o}const v9=t=>(e,n)=>{const r=S.useContext(yh),i=S.useContext(x0),s=()=>lk(t,e,r,i);return n?s():sk(s)};function uk(t,e,n,r){const i={},s=r(t,{});for(const d in s)i[d]=gu(s[d]);let{initial:o,animate:a}=t;const l=wh(t),u=r9(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const h=c?a:o;return h&&typeof h!="boolean"&&!_h(h)&&(Array.isArray(h)?h:[h]).forEach(f=>{const y=L0(t,f);if(!y)return;const{transitionEnd:w,transition:E,..._}=y;for(const p in _){let v=_[p];if(Array.isArray(v)){const g=c?v.length-1:0;v=v[g]}v!==null&&(i[p]=v)}for(const p in w)i[p]=w[p]}),i}const Le=t=>t;class by{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function ck(t){let e=new by,n=new by,r=0,i=!1,s=!1;const o=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const h=c&&i,d=h?e:n;return u&&o.add(l),d.add(l)&&h&&i&&(r=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(i){s=!0;return}if(i=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let u=0;u<r;u++){const c=e.order[u];c(l),o.has(c)&&(a.schedule(c),t())}i=!1,s&&(s=!1,a.process(l))}};return a}const ql=["prepare","read","update","preRender","render","postRender"],hk=40;function dk(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=ql.reduce((h,d)=>(h[d]=ck(()=>n=!0),h),{}),o=h=>s[h].process(i),a=()=>{const h=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(h-i.timestamp,hk),1),i.timestamp=h,i.isProcessing=!0,ql.forEach(o),i.isProcessing=!1,n&&e&&(r=!1,t(a))},l=()=>{n=!0,r=!0,i.isProcessing||t(a)};return{schedule:ql.reduce((h,d)=>{const f=s[d];return h[d]=(y,w=!1,E=!1)=>(n||l(),f.schedule(y,w,E)),h},{}),cancel:h=>ql.forEach(d=>s[d].cancel(h)),state:i,steps:s}}const{schedule:Ee,cancel:ir,state:Ke,steps:Pd}=dk(typeof requestAnimationFrame<"u"?requestAnimationFrame:Le,!0),fk={useVisualState:v9({scrapeMotionValuesFromProps:y9,createRenderState:f9,onMount:(t,e,{renderState:n,latestValues:r})=>{Ee.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Ee.render(()=>{R0(n,r,{enableHardwareAcceleration:!1},k0(e.tagName),t.transformTemplate),g9(e,n)})}})},pk={useVisualState:v9({scrapeMotionValuesFromProps:N0,createRenderState:A0})};function mk(t,{forwardMotionProps:e=!1},n,r){return{...I0(t)?fk:pk,preloadedFeatures:n,useRender:ik(e),createVisualElement:r,Component:t}}function zn(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}const _9=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Th(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const gk=t=>e=>_9(e)&&t(e,Th(e));function qn(t,e,n,r){return zn(t,e,gk(n),r)}const yk=(t,e)=>n=>e(t(n)),Vr=(...t)=>t.reduce(yk);function w9(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Qy=w9("dragHorizontal"),jy=w9("dragVertical");function E9(t){let e=!1;if(t==="y")e=jy();else if(t==="x")e=Qy();else{const n=Qy(),r=jy();n&&r?e=()=>{n(),r()}:(n&&n(),r&&r())}return e}function T9(){const t=E9(!0);return t?(t(),!1):!0}class Xr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Fy(t,e){const n="pointer"+(e?"enter":"leave"),r="onHover"+(e?"Start":"End"),i=(s,o)=>{if(s.type==="touch"||T9())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[r]&&Ee.update(()=>a[r](s,o))};return qn(t.current,n,i,{passive:!t.getProps()[r]})}class vk extends Xr{mount(){this.unmount=Vr(Fy(this.node,!0),Fy(this.node,!1))}unmount(){}}class _k extends Xr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vr(zn(this.node.current,"focus",()=>this.onFocus()),zn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const x9=(t,e)=>e?t===e?!0:x9(t,e.parentElement):!1;function Ad(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Th(n))}class wk extends Xr{constructor(){super(...arguments),this.removeStartListeners=Le,this.removeEndListeners=Le,this.removeAccessibleListeners=Le,this.startPointerPress=(e,n)=>{if(this.removeEndListeners(),this.isPressing)return;const r=this.node.getProps(),s=qn(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c}=this.node.getProps();Ee.update(()=>{x9(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),o=qn(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Vr(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Ad("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&Ee.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=zn(this.node.current,"keyup",o),Ad("down",(a,l)=>{this.startPress(a,l)})},n=zn(this.node.current,"keydown",e),r=()=>{this.isPressing&&Ad("cancel",(s,o)=>this.cancelPress(s,o))},i=zn(this.node.current,"blur",r);this.removeAccessibleListeners=Vr(n,i)}}startPress(e,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Ee.update(()=>r(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!T9()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Ee.update(()=>r(e,n))}mount(){const e=this.node.getProps(),n=qn(this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=zn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Vr(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const dp=new WeakMap,Rd=new WeakMap,Ek=t=>{const e=dp.get(t.target);e&&e(t)},Tk=t=>{t.forEach(Ek)};function xk({root:t,...e}){const n=t||document;Rd.has(n)||Rd.set(n,{});const r=Rd.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(Tk,{root:t,...e})),r[i]}function Ck(t,e,n){const r=xk(e);return dp.set(t,n),r.observe(t),()=>{dp.delete(t),r.unobserve(t)}}const Sk={some:0,all:1};class Ik extends Xr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Sk[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:h}=this.node.getProps(),d=u?c:h;d&&d(l)};return Ck(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Pk(e,n))&&this.startObserver()}unmount(){}}function Pk({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const Ak={inView:{Feature:Ik},tap:{Feature:wk},focus:{Feature:_k},hover:{Feature:vk}};function C9(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Rk(t){const e={};return t.values.forEach((n,r)=>e[r]=n.get()),e}function kk(t){const e={};return t.values.forEach((n,r)=>e[r]=n.getVelocity()),e}function xh(t,e,n){const r=t.getProps();return L0(r,e,n!==void 0?n:r.custom,Rk(t),kk(t))}const Dk="framerAppearId",Nk="data-"+D0(Dk);let Lk=Le,M0=Le;const Or=t=>t*1e3,Xn=t=>t/1e3,Mk={current:!1},S9=t=>Array.isArray(t)&&typeof t[0]=="number";function I9(t){return!!(!t||typeof t=="string"&&P9[t]||S9(t)||Array.isArray(t)&&t.every(I9))}const ko=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,P9={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ko([0,.65,.55,1]),circOut:ko([.55,0,1,.45]),backIn:ko([.31,.01,.66,-.59]),backOut:ko([.33,1.53,.69,.99])};function A9(t){if(t)return S9(t)?ko(t):Array.isArray(t)?t.map(A9):P9[t]}function Vk(t,e,n,{delay:r=0,duration:i,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=A9(a);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function Ok(t,{repeat:e,repeatType:n="loop"}){const r=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[r]}const R9=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,bk=1e-7,Qk=12;function jk(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=R9(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>bk&&++a<Qk);return o}function pl(t,e,n,r){if(t===e&&n===r)return Le;const i=s=>jk(s,0,1,t,n);return s=>s===0||s===1?s:R9(i(s),e,r)}const Fk=pl(.42,0,1,1),Uk=pl(0,0,.58,1),k9=pl(.42,0,.58,1),$k=t=>Array.isArray(t)&&typeof t[0]!="number",D9=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,N9=t=>e=>1-t(1-e),L9=t=>1-Math.sin(Math.acos(t)),V0=N9(L9),Bk=D9(V0),M9=pl(.33,1.53,.69,.99),O0=N9(M9),zk=D9(O0),Hk=t=>(t*=2)<1?.5*O0(t):.5*(2-Math.pow(2,-10*(t-1))),Wk={linear:Le,easeIn:Fk,easeInOut:k9,easeOut:Uk,circIn:L9,circInOut:Bk,circOut:V0,backIn:O0,backInOut:zk,backOut:M9,anticipate:Hk},Uy=t=>{if(Array.isArray(t)){M0(t.length===4);const[e,n,r,i]=t;return pl(e,n,r,i)}else if(typeof t=="string")return Wk[t];return t},b0=(t,e)=>n=>!!(dl(n)&&zR.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),V9=(t,e,n)=>r=>{if(!dl(r))return r;const[i,s,o,a]=r.match(Eh);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Kk=t=>$r(0,255,t),kd={...Fi,transform:t=>Math.round(Kk(t))},di={test:b0("rgb","red"),parse:V9("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+kd.transform(t)+", "+kd.transform(e)+", "+kd.transform(n)+", "+qo(Go.transform(r))+")"};function Gk(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const fp={test:b0("#"),parse:Gk,transform:di.transform},us={test:b0("hsl","hue"),parse:V9("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+Rn.transform(qo(e))+", "+Rn.transform(qo(n))+", "+qo(Go.transform(r))+")"},xt={test:t=>di.test(t)||fp.test(t)||us.test(t),parse:t=>di.test(t)?di.parse(t):us.test(t)?us.parse(t):fp.parse(t),transform:t=>dl(t)?t:t.hasOwnProperty("red")?di.transform(t):us.transform(t)},Ae=(t,e,n)=>-n*t+n*e+t;function Dd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function qk({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=Dd(l,a,t+1/3),s=Dd(l,a,t),o=Dd(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const Nd=(t,e,n)=>{const r=t*t;return Math.sqrt(Math.max(0,n*(e*e-r)+r))},Xk=[fp,di,us],Yk=t=>Xk.find(e=>e.test(t));function $y(t){const e=Yk(t);let n=e.parse(t);return e===us&&(n=qk(n)),n}const O9=(t,e)=>{const n=$y(t),r=$y(e),i={...n};return s=>(i.red=Nd(n.red,r.red,s),i.green=Nd(n.green,r.green,s),i.blue=Nd(n.blue,r.blue,s),i.alpha=Ae(n.alpha,r.alpha,s),di.transform(i))};function Jk(t){var e,n;return isNaN(t)&&dl(t)&&(((e=t.match(Eh))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(u9))===null||n===void 0?void 0:n.length)||0)>0}const b9={regex:$R,countKey:"Vars",token:"${v}",parse:Le},Q9={regex:u9,countKey:"Colors",token:"${c}",parse:xt.parse},j9={regex:Eh,countKey:"Numbers",token:"${n}",parse:Fi.parse};function Ld(t,{regex:e,countKey:n,token:r,parse:i}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,r),t.values.push(...s.map(i)))}function vc(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Ld(n,b9),Ld(n,Q9),Ld(n,j9),n}function F9(t){return vc(t).values}function U9(t){const{values:e,numColors:n,numVars:r,tokenised:i}=vc(t),s=e.length;return o=>{let a=i;for(let l=0;l<s;l++)l<r?a=a.replace(b9.token,o[l]):l<r+n?a=a.replace(Q9.token,xt.transform(o[l])):a=a.replace(j9.token,qo(o[l]));return a}}const Zk=t=>typeof t=="number"?0:t;function eD(t){const e=F9(t);return U9(t)(e.map(Zk))}const Br={test:Jk,parse:F9,createTransformer:U9,getAnimatableNone:eD},$9=(t,e)=>n=>`${n>0?e:t}`;function B9(t,e){return typeof t=="number"?n=>Ae(t,e,n):xt.test(t)?O9(t,e):t.startsWith("var(")?$9(t,e):H9(t,e)}const z9=(t,e)=>{const n=[...t],r=n.length,i=t.map((s,o)=>B9(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}},tD=(t,e)=>{const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=B9(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},H9=(t,e)=>{const n=Br.createTransformer(e),r=vc(t),i=vc(e);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Vr(z9(r.values,i.values),n):$9(t,e)},Qa=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},By=(t,e)=>n=>Ae(t,e,n);function nD(t){return typeof t=="number"?By:typeof t=="string"?xt.test(t)?O9:H9:Array.isArray(t)?z9:typeof t=="object"?tD:By}function rD(t,e,n){const r=[],i=n||nD(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Le:e;a=Vr(l,a)}r.push(a)}return r}function W9(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(M0(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=rD(e,r,i),a=o.length,l=u=>{let c=0;if(a>1)for(;c<t.length-2&&!(u<t[c+1]);c++);const h=Qa(t[c],t[c+1],u);return o[c](h)};return n?u=>l($r(t[0],t[s-1],u)):l}function iD(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=Qa(0,e,r);t.push(Ae(n,1,i))}}function sD(t){const e=[0];return iD(e,t.length-1),e}function oD(t,e){return t.map(n=>n*e)}function aD(t,e){return t.map(()=>e||k9).splice(0,t.length-1)}function _c({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=$k(r)?r.map(Uy):Uy(r),s={done:!1,value:e[0]},o=oD(n&&n.length===e.length?n:sD(e),t),a=W9(o,e,{ease:Array.isArray(i)?i:aD(e,i)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}function K9(t,e){return e?t*(1e3/e):0}const lD=5;function G9(t,e,n){const r=Math.max(e-lD,0);return K9(n-t(r),e-r)}const Md=.001,uD=.01,zy=10,cD=.05,hD=1;function dD({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let i,s;Lk(t<=Or(zy));let o=1-e;o=$r(cD,hD,o),t=$r(uD,zy,Xn(t)),o<1?(i=u=>{const c=u*o,h=c*t,d=c-n,f=pp(u,o),y=Math.exp(-h);return Md-d/f*y},s=u=>{const h=u*o*t,d=h*n+n,f=Math.pow(o,2)*Math.pow(u,2)*t,y=Math.exp(-h),w=pp(Math.pow(u,2),o);return(-i(u)+Md>0?-1:1)*((d-f)*y)/w}):(i=u=>{const c=Math.exp(-u*t),h=(u-n)*t+1;return-Md+c*h},s=u=>{const c=Math.exp(-u*t),h=(n-u)*(t*t);return c*h});const a=5/t,l=pD(i,s,a);if(t=Or(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:t}}}const fD=12;function pD(t,e,n){let r=n;for(let i=1;i<fD;i++)r=r-t(r)/e(r);return r}function pp(t,e){return t*Math.sqrt(1-e*e)}const mD=["duration","bounce"],gD=["stiffness","damping","mass"];function Hy(t,e){return e.some(n=>t[n]!==void 0)}function yD(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Hy(t,gD)&&Hy(t,mD)){const n=dD(t);e={...e,...n,velocity:0,mass:1},e.isResolvedFromDuration=!0}return e}function q9({keyframes:t,restDelta:e,restSpeed:n,...r}){const i=t[0],s=t[t.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:u,velocity:c,duration:h,isResolvedFromDuration:d}=yD(r),f=c?-Xn(c):0,y=l/(2*Math.sqrt(a*u)),w=s-i,E=Xn(Math.sqrt(a/u)),_=Math.abs(w)<5;n||(n=_?.01:2),e||(e=_?.005:.5);let p;if(y<1){const v=pp(E,y);p=g=>{const x=Math.exp(-y*E*g);return s-x*((f+y*E*w)/v*Math.sin(v*g)+w*Math.cos(v*g))}}else if(y===1)p=v=>s-Math.exp(-E*v)*(w+(f+E*w)*v);else{const v=E*Math.sqrt(y*y-1);p=g=>{const x=Math.exp(-y*E*g),R=Math.min(v*g,300);return s-x*((f+y*E*w)*Math.sinh(R)+v*w*Math.cosh(R))/v}}return{calculatedDuration:d&&h||null,next:v=>{const g=p(v);if(d)o.done=v>=h;else{let x=f;v!==0&&(y<1?x=G9(p,v,g):x=0);const R=Math.abs(x)<=n,I=Math.abs(s-g)<=e;o.done=R&&I}return o.value=o.done?s:g,o}}}function Wy({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const h=t[0],d={done:!1,value:h},f=P=>a!==void 0&&P<a||l!==void 0&&P>l,y=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let w=n*e;const E=h+w,_=o===void 0?E:o(E);_!==E&&(w=_-h);const p=P=>-w*Math.exp(-P/r),v=P=>_+p(P),g=P=>{const b=p(P),Q=v(P);d.done=Math.abs(b)<=u,d.value=d.done?_:Q};let x,R;const I=P=>{f(d.value)&&(x=P,R=q9({keyframes:[d.value,y(d.value)],velocity:G9(v,P,d.value),damping:i,stiffness:s,restDelta:u,restSpeed:c}))};return I(0),{calculatedDuration:null,next:P=>{let b=!1;return!R&&x===void 0&&(b=!0,g(P),I(P)),x!==void 0&&P>x?R.next(P-x):(!b&&g(P),d)}}}const vD=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Ee.update(e,!0),stop:()=>ir(e),now:()=>Ke.isProcessing?Ke.timestamp:performance.now()}},Ky=2e4;function Gy(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<Ky;)e+=n,r=t.next(e);return e>=Ky?1/0:e}const _D={decay:Wy,inertia:Wy,tween:_c,keyframes:_c,spring:q9};function wc({autoplay:t=!0,delay:e=0,driver:n=vD,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:h,...d}){let f=1,y=!1,w,E;const _=()=>{E=new Promise(z=>{w=z})};_();let p;const v=_D[i]||_c;let g;v!==_c&&typeof r[0]!="number"&&(g=W9([0,100],r,{clamp:!1}),r=[0,100]);const x=v({...d,keyframes:r});let R;a==="mirror"&&(R=v({...d,keyframes:[...r].reverse(),velocity:-(d.velocity||0)}));let I="idle",P=null,b=null,Q=null;x.calculatedDuration===null&&s&&(x.calculatedDuration=Gy(x));const{calculatedDuration:ce}=x;let te=1/0,Be=1/0;ce!==null&&(te=ce+o,Be=te*(s+1)-o);let fe=0;const he=z=>{if(b===null)return;f>0&&(b=Math.min(b,z)),f<0&&(b=Math.min(z-Be/f,b)),P!==null?fe=P:fe=Math.round(z-b)*f;const me=fe-e*(f>=0?1:-1),Nn=f>=0?me<0:me>Be;fe=Math.max(me,0),I==="finished"&&P===null&&(fe=Be);let ae=fe,Wt=x;if(s){const Zs=fe/te;let Ui=Math.floor(Zs),yn=Zs%1;!yn&&Zs>=1&&(yn=1),yn===1&&Ui--,Ui=Math.min(Ui,s+1);const ml=!!(Ui%2);ml&&(a==="reverse"?(yn=1-yn,o&&(yn-=o/te)):a==="mirror"&&(Wt=R));let gl=$r(0,1,yn);fe>Be&&(gl=a==="reverse"&&ml?1:0),ae=gl*te}const ct=Nn?{done:!1,value:r[0]}:Wt.next(ae);g&&(ct.value=g(ct.value));let{done:Ln}=ct;!Nn&&ce!==null&&(Ln=f>=0?fe>=Be:fe<=0);const Mn=P===null&&(I==="finished"||I==="running"&&Ln);return h&&h(ct.value),Mn&&M(),ct},De=()=>{p&&p.stop(),p=void 0},nt=()=>{I="idle",De(),w(),_(),b=Q=null},M=()=>{I="finished",c&&c(),De(),w()},U=()=>{if(y)return;p||(p=n(he));const z=p.now();l&&l(),P!==null?b=z-P:(!b||I==="finished")&&(b=z),I==="finished"&&_(),Q=b,P=null,I="running",p.start()};t&&U();const W={then(z,me){return E.then(z,me)},get time(){return Xn(fe)},set time(z){z=Or(z),fe=z,P!==null||!p||f===0?P=z:b=p.now()-z/f},get duration(){const z=x.calculatedDuration===null?Gy(x):x.calculatedDuration;return Xn(z)},get speed(){return f},set speed(z){z===f||!p||(f=z,W.time=Xn(fe))},get state(){return I},play:U,pause:()=>{I="paused",P=fe},stop:()=>{y=!0,I!=="idle"&&(I="idle",u&&u(),nt())},cancel:()=>{Q!==null&&he(Q),nt()},complete:()=>{I="finished"},sample:z=>(b=0,he(z))};return W}function wD(t){let e;return()=>(e===void 0&&(e=t()),e)}const ED=wD(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),TD=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Xl=10,xD=2e4,CD=(t,e)=>e.type==="spring"||t==="backgroundColor"||!I9(e.ease);function SD(t,e,{onUpdate:n,onComplete:r,...i}){if(!(ED()&&TD.has(e)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,a,l;const u=()=>{l=new Promise(p=>{a=p})};u();let{keyframes:c,duration:h=300,ease:d,times:f}=i;if(CD(e,i)){const p=wc({...i,repeat:0,delay:0});let v={done:!1,value:c[0]};const g=[];let x=0;for(;!v.done&&x<xD;)v=p.sample(x),g.push(v.value),x+=Xl;f=void 0,c=g,h=x-Xl,d="linear"}const y=Vk(t.owner.current,e,c,{...i,duration:h,ease:d,times:f});i.syncStart&&(y.startTime=Ke.isProcessing?Ke.timestamp:document.timeline?document.timeline.currentTime:performance.now());const w=()=>y.cancel(),E=()=>{Ee.update(w),a(),u()};return y.onfinish=()=>{t.set(Ok(c,i)),r&&r(),E()},{then(p,v){return l.then(p,v)},attachTimeline(p){return y.timeline=p,y.onfinish=null,Le},get time(){return Xn(y.currentTime||0)},set time(p){y.currentTime=Or(p)},get speed(){return y.playbackRate},set speed(p){y.playbackRate=p},get duration(){return Xn(h)},play:()=>{o||(y.play(),ir(w))},pause:()=>y.pause(),stop:()=>{if(o=!0,y.playState==="idle")return;const{currentTime:p}=y;if(p){const v=wc({...i,autoplay:!1});t.setWithVelocity(v.sample(p-Xl).value,v.sample(p).value,Xl)}E()},complete:()=>y.finish(),cancel:E}}function ID({keyframes:t,delay:e,onUpdate:n,onComplete:r}){const i=()=>(n&&n(t[t.length-1]),r&&r(),{time:0,speed:1,duration:0,play:Le,pause:Le,stop:Le,then:s=>(s(),Promise.resolve()),cancel:Le,complete:Le});return e?wc({keyframes:[0,1],duration:0,delay:e,onComplete:i}):i()}const PD={type:"spring",stiffness:500,damping:25,restSpeed:10},AD=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),RD={type:"keyframes",duration:.8},kD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},DD=(t,{keyframes:e})=>e.length>2?RD:ji.has(t)?t.startsWith("scale")?AD(e[1]):PD:kD,mp=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Br.test(e)||e==="0")&&!e.startsWith("url(")),ND=new Set(["brightness","contrast","saturate","opacity"]);function LD(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Eh)||[];if(!r)return t;const i=n.replace(r,"");let s=ND.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const MD=/([a-z-]*)\(.*?\)/g,gp={...Br,getAnimatableNone:t=>{const e=t.match(MD);return e?e.map(LD).join(" "):t}},VD={...c9,color:xt,backgroundColor:xt,outlineColor:xt,fill:xt,stroke:xt,borderColor:xt,borderTopColor:xt,borderRightColor:xt,borderBottomColor:xt,borderLeftColor:xt,filter:gp,WebkitFilter:gp},Q0=t=>VD[t];function X9(t,e){let n=Q0(t);return n!==gp&&(n=Br),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Y9=t=>/^0[^.\s]+$/.test(t);function OD(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||Y9(t)}function bD(t,e,n,r){const i=mp(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=r.from!==void 0?r.from:t.get();let a;const l=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?o:s[u-1]),OD(s[u])&&l.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(a=s[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const c=l[u];s[c]=X9(e,a)}return s}function QD({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function J9(t,e){return t[e]||t.default||t}const j0=(t,e,n,r={})=>i=>{const s=J9(r,t)||{},o=s.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Or(o);const l=bD(e,t,n,s),u=l[0],c=l[l.length-1],h=mp(t,u),d=mp(t,c);let f={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:y=>{e.set(y),s.onUpdate&&s.onUpdate(y)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(QD(s)||(f={...f,...DD(t,f)}),f.duration&&(f.duration=Or(f.duration)),f.repeatDelay&&(f.repeatDelay=Or(f.repeatDelay)),!h||!d||Mk.current||s.type===!1)return ID(f);if(e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const y=SD(e,t,f);if(y)return y}return wc(f)};function Ec(t){return!!(Ot(t)&&t.add)}const Z9=t=>/^\-?\d*\.?\d+$/.test(t);function F0(t,e){t.indexOf(e)===-1&&t.push(e)}function U0(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class $0{constructor(){this.subscriptions=[]}add(e){return F0(this.subscriptions,e),()=>U0(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jD=t=>!isNaN(parseFloat(t));class FD{constructor(e,n={}){this.version="10.16.4",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:o}=Ke;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,Ee.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Ee.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=jD(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new $0);const r=this.events[e].add(n);return e==="change"?()=>{r(),Ee.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=e,this.timeDelta=r}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?K9(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qs(t,e){return new FD(t,e)}const e7=t=>e=>e.test(t),UD={test:t=>t==="auto",parse:t=>t},t7=[Fi,B,Rn,dr,WR,HR,UD],wo=t=>t7.find(e7(t)),$D=[...t7,xt,Br],BD=t=>$D.find(e7(t));function zD(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Qs(n))}function HD(t,e){const n=xh(t,e);let{transitionEnd:r={},transition:i={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const a=ak(s[o]);zD(t,o,a)}}function WD(t,e,n){var r,i;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],u=e[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(i=(r=n[l])!==null&&r!==void 0?r:t.readValue(l))!==null&&i!==void 0?i:e[l]),c!=null&&(typeof c=="string"&&(Z9(c)||Y9(c))?c=parseFloat(c):!BD(c)&&Br.test(u)&&(c=X9(l,u)),t.addValue(l,Qs(c,{owner:t})),n[l]===void 0&&(n[l]=c),c!==null&&t.setBaseTarget(l,c))}}function KD(t,e){return e?(e[t]||e.default||e).from:void 0}function GD(t,e,n){const r={};for(const i in t){const s=KD(i,e);if(s!==void 0)r[i]=s;else{const o=n.getValue(i);o&&(r[i]=o.get())}}return r}function qD({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function n7(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");r&&(s=r);const u=[],c=i&&t.animationState&&t.animationState.getState()[i];for(const h in a){const d=t.getValue(h),f=a[h];if(!d||f===void 0||c&&qD(c,h))continue;const y={delay:n,elapsed:0,...s};if(window.HandoffAppearAnimations&&!d.hasAnimated){const E=t.getProps()[Nk];E&&(y.elapsed=window.HandoffAppearAnimations(E,h,d,Ee),y.syncStart=!0)}d.start(j0(h,d,f,t.shouldReduceMotion&&ji.has(h)?{type:!1}:y));const w=d.animation;Ec(l)&&(l.add(h),w.then(()=>l.remove(h))),u.push(w)}return o&&Promise.all(u).then(()=>{o&&HD(t,o)}),u}function yp(t,e,n={}){const r=xh(t,e,n.custom);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(n7(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:h}=i;return XD(t,e,u+l,c,h,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function XD(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(t.variantChildren).sort(YD).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(yp(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function YD(t,e){return t.sortNodePosition(e)}function JD(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>yp(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=yp(t,e,n);else{const i=typeof e=="function"?xh(t,e,n.custom):e;r=Promise.all(n7(t,i,n))}return r.then(()=>t.notify("AnimationComplete",e))}const ZD=[...C0].reverse(),eN=C0.length;function tN(t){return e=>Promise.all(e.map(({animation:n,options:r})=>JD(t,n,r)))}function nN(t){let e=tN(t);const n=iN();let r=!0;const i=(l,u)=>{const c=xh(t,u);if(c){const{transition:h,transitionEnd:d,...f}=c;l={...l,...f,...d}}return l};function s(l){e=l(t)}function o(l,u){const c=t.getProps(),h=t.getVariantContext(!0)||{},d=[],f=new Set;let y={},w=1/0;for(let _=0;_<eN;_++){const p=ZD[_],v=n[p],g=c[p]!==void 0?c[p]:h[p],x=Oa(g),R=p===u?v.isActive:null;R===!1&&(w=_);let I=g===h[p]&&g!==c[p]&&x;if(I&&r&&t.manuallyAnimateOnMount&&(I=!1),v.protectedKeys={...y},!v.isActive&&R===null||!g&&!v.prevProp||_h(g)||typeof g=="boolean")continue;const P=rN(v.prevProp,g);let b=P||p===u&&v.isActive&&!I&&x||_>w&&x;const Q=Array.isArray(g)?g:[g];let ce=Q.reduce(i,{});R===!1&&(ce={});const{prevResolvedValues:te={}}=v,Be={...te,...ce},fe=he=>{b=!0,f.delete(he),v.needsAnimating[he]=!0};for(const he in Be){const De=ce[he],nt=te[he];y.hasOwnProperty(he)||(De!==nt?yc(De)&&yc(nt)?!C9(De,nt)||P?fe(he):v.protectedKeys[he]=!0:De!==void 0?fe(he):f.add(he):De!==void 0&&f.has(he)?fe(he):v.protectedKeys[he]=!0)}v.prevProp=g,v.prevResolvedValues=ce,v.isActive&&(y={...y,...ce}),r&&t.blockInitialAnimation&&(b=!1),b&&!I&&d.push(...Q.map(he=>({animation:he,options:{type:p,...l}})))}if(f.size){const _={};f.forEach(p=>{const v=t.getBaseTarget(p);v!==void 0&&(_[p]=v)}),d.push({animation:_})}let E=!!d.length;return r&&c.initial===!1&&!t.manuallyAnimateOnMount&&(E=!1),r=!1,E?e(d):Promise.resolve()}function a(l,u,c){var h;if(n[l].isActive===u)return Promise.resolve();(h=t.variantChildren)===null||h===void 0||h.forEach(f=>{var y;return(y=f.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const d=o(c,l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function rN(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!C9(e,t):!1}function Zr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function iN(){return{animate:Zr(!0),whileInView:Zr(),whileHover:Zr(),whileTap:Zr(),whileDrag:Zr(),whileFocus:Zr(),exit:Zr()}}class sN extends Xr{constructor(e){super(e),e.animationState||(e.animationState=nN(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),_h(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let oN=0;class aN extends Xr{constructor(){super(...arguments),this.id=oN++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e,{custom:r??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const lN={animation:{Feature:sN},exit:{Feature:aN}},qy=(t,e)=>Math.abs(t-e);function uN(t,e){const n=qy(t.x,e.x),r=qy(t.y,e.y);return Math.sqrt(n**2+r**2)}class r7{constructor(e,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=Od(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,h=uN(u.offset,{x:0,y:0})>=3;if(!c&&!h)return;const{point:d}=u,{timestamp:f}=Ke;this.history.push({...d,timestamp:f});const{onStart:y,onMove:w}=this.handlers;c||(y&&y(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{this.lastMoveEvent=u,this.lastMoveEventInfo=Vd(c,this.transformPagePoint),Ee.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const{onEnd:h,onSessionEnd:d}=this.handlers,f=Od(u.type==="pointercancel"?this.lastMoveEventInfo:Vd(c,this.transformPagePoint),this.history);this.startEvent&&h&&h(u,f),d&&d(u,f)},!_9(e))return;this.handlers=n,this.transformPagePoint=r;const i=Th(e),s=Vd(i,this.transformPagePoint),{point:o}=s,{timestamp:a}=Ke;this.history=[{...o,timestamp:a}];const{onSessionStart:l}=n;l&&l(e,Od(s,this.history)),this.removeListeners=Vr(qn(window,"pointermove",this.handlePointerMove),qn(window,"pointerup",this.handlePointerUp),qn(window,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ir(this.updatePoint)}}function Vd(t,e){return e?{point:e(t.point)}:t}function Xy(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Od({point:t},e){return{point:t,delta:Xy(t,i7(e)),offset:Xy(t,cN(e)),velocity:hN(e,.1)}}function cN(t){return t[0]}function i7(t){return t[t.length-1]}function hN(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=i7(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>Or(e)));)n--;if(!r)return{x:0,y:0};const s=Xn(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Bt(t){return t.max-t.min}function vp(t,e=0,n=.01){return Math.abs(t-e)<=n}function Yy(t,e,n,r=.5){t.origin=r,t.originPoint=Ae(e.min,e.max,t.origin),t.scale=Bt(n)/Bt(e),(vp(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Ae(n.min,n.max,t.origin)-t.originPoint,(vp(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Xo(t,e,n,r){Yy(t.x,e.x,n.x,r?r.originX:void 0),Yy(t.y,e.y,n.y,r?r.originY:void 0)}function Jy(t,e,n){t.min=n.min+e.min,t.max=t.min+Bt(e)}function dN(t,e,n){Jy(t.x,e.x,n.x),Jy(t.y,e.y,n.y)}function Zy(t,e,n){t.min=e.min-n.min,t.max=t.min+Bt(e)}function Yo(t,e,n){Zy(t.x,e.x,n.x),Zy(t.y,e.y,n.y)}function fN(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Ae(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Ae(n,t,r.max):Math.min(t,n)),t}function ev(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function pN(t,{top:e,left:n,bottom:r,right:i}){return{x:ev(t.x,n,i),y:ev(t.y,e,r)}}function tv(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function mN(t,e){return{x:tv(t.x,e.x),y:tv(t.y,e.y)}}function gN(t,e){let n=.5;const r=Bt(t),i=Bt(e);return i>r?n=Qa(e.min,e.max-r,t.min):r>i&&(n=Qa(t.min,t.max-i,e.min)),$r(0,1,n)}function yN(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const _p=.35;function vN(t=_p){return t===!1?t=0:t===!0&&(t=_p),{x:nv(t,"left","right"),y:nv(t,"top","bottom")}}function nv(t,e,n){return{min:rv(t,e),max:rv(t,n)}}function rv(t,e){return typeof t=="number"?t:t[e]||0}const iv=()=>({translate:0,scale:1,origin:0,originPoint:0}),cs=()=>({x:iv(),y:iv()}),sv=()=>({min:0,max:0}),je=()=>({x:sv(),y:sv()});function wn(t){return[t("x"),t("y")]}function s7({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function _N({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function wN(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function bd(t){return t===void 0||t===1}function wp({scale:t,scaleX:e,scaleY:n}){return!bd(t)||!bd(e)||!bd(n)}function ri(t){return wp(t)||o7(t)||t.z||t.rotate||t.rotateX||t.rotateY}function o7(t){return ov(t.x)||ov(t.y)}function ov(t){return t&&t!=="0%"}function Tc(t,e,n){const r=t-n,i=e*r;return n+i}function av(t,e,n,r,i){return i!==void 0&&(t=Tc(t,i,r)),Tc(t,n,r)+e}function Ep(t,e=0,n=1,r,i){t.min=av(t.min,e,n,r,i),t.max=av(t.max,e,n,r,i)}function a7(t,{x:e,y:n}){Ep(t.x,e.translate,e.scale,e.originPoint),Ep(t.y,n.translate,n.scale,n.originPoint)}function EN(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&hs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,a7(t,o)),r&&ri(s.latestValues)&&hs(t,s.latestValues))}e.x=lv(e.x),e.y=lv(e.y)}function lv(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function mr(t,e){t.min=t.min+e,t.max=t.max+e}function uv(t,e,[n,r,i]){const s=e[i]!==void 0?e[i]:.5,o=Ae(t.min,t.max,s);Ep(t,e[n],e[r],o,e.scale)}const TN=["x","scaleX","originX"],xN=["y","scaleY","originY"];function hs(t,e){uv(t.x,e,TN),uv(t.y,e,xN)}function l7(t,e){return s7(wN(t.getBoundingClientRect(),e))}function CN(t,e,n){const r=l7(t,n),{scroll:i}=e;return i&&(mr(r.x,i.offset.x),mr(r.y,i.offset.y)),r}const SN=new WeakMap;class IN{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=je(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=l=>{this.stopAnimation(),n&&this.snapToCursor(Th(l,"page").point)},s=(l,u)=>{const{drag:c,dragPropagation:h,onDragStart:d}=this.getProps();if(c&&!h&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=E9(c),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),wn(y=>{let w=this.getAxisMotionValue(y).get()||0;if(Rn.test(w)){const{projection:E}=this.visualElement;if(E&&E.layout){const _=E.layout.layoutBox[y];_&&(w=Bt(_)*(parseFloat(w)/100))}}this.originPoint[y]=w}),d&&Ee.update(()=>d(l,u),!1,!0);const{animationState:f}=this.visualElement;f&&f.setActive("whileDrag",!0)},o=(l,u)=>{const{dragPropagation:c,dragDirectionLock:h,onDirectionLock:d,onDrag:f}=this.getProps();if(!c&&!this.openGlobalLock)return;const{offset:y}=u;if(h&&this.currentDirection===null){this.currentDirection=PN(y),this.currentDirection!==null&&d&&d(this.currentDirection);return}this.updateAxis("x",u.point,y),this.updateAxis("y",u.point,y),this.visualElement.render(),f&&f(l,u)},a=(l,u)=>this.stop(l,u);this.panSession=new r7(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&Ee.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!Yl(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=fN(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){const{dragConstraints:e,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},i=this.constraints;e&&ls(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=pN(r.layoutBox,e):this.constraints=!1,this.elastic=vN(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&wn(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=yN(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!ls(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=CN(r,i.root,this.visualElement.getTransformPagePoint());let o=mN(i.layout.layoutBox,s);if(n){const a=n(_N(o));this.hasMutatedConstraints=!!a,a&&(o=s7(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=wn(c=>{if(!Yl(c,n,this.currentDirection))return;let h=l&&l[c]||{};o&&(h={min:0,max:0});const d=i?200:1e6,f=i?40:1e7,y={type:"inertia",velocity:r?e[c]:0,bounceStiffness:d,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return r.start(j0(e,r,0,n))}stopAnimation(){wn(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){wn(n=>{const{drag:r}=this.getProps();if(!Yl(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-Ae(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ls(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};wn(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();i[o]=gN({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),wn(o=>{if(!Yl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(Ae(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;SN.set(this.visualElement,this);const e=this.visualElement.current,n=qn(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();ls(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const o=zn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(wn(c=>{const h=this.getAxisMotionValue(c);h&&(this.originPoint[c]+=l[c].translate,h.set(h.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=_p,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Yl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function PN(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class AN extends Xr{constructor(e){super(e),this.removeGroupControls=Le,this.removeListeners=Le,this.controls=new IN(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Le}unmount(){this.removeGroupControls(),this.removeListeners()}}const cv=t=>(e,n)=>{t&&Ee.update(()=>t(e,n))};class RN extends Xr{constructor(){super(...arguments),this.removePointerDownListener=Le}onPointerDown(e){this.session=new r7(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:cv(e),onStart:cv(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&Ee.update(()=>i(s,o))}}}mount(){this.removePointerDownListener=qn(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function kN(){const t=S.useContext(x0);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,i=S.useId();return S.useEffect(()=>r(i),[]),!e&&n?[!1,()=>n&&n(i)]:[!0]}const yu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function hv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Eo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(B.test(t))t=parseFloat(t);else return t;const n=hv(t,e.target.x),r=hv(t,e.target.y);return`${n}% ${r}%`}},DN={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Br.parse(t);if(i.length>5)return r;const s=Br.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const u=Ae(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}};class NN extends Ap.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;QR(LN),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),yu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Ee.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function u7(t){const[e,n]=kN(),r=S.useContext(i9);return Ap.createElement(NN,{...t,layoutGroup:r,switchLayoutGroup:S.useContext(s9),isPresent:e,safeToRemove:n})}const LN={borderRadius:{...Eo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Eo,borderTopRightRadius:Eo,borderBottomLeftRadius:Eo,borderBottomRightRadius:Eo,boxShadow:DN},c7=["TopLeft","TopRight","BottomLeft","BottomRight"],MN=c7.length,dv=t=>typeof t=="string"?parseFloat(t):t,fv=t=>typeof t=="number"||B.test(t);function VN(t,e,n,r,i,s){i?(t.opacity=Ae(0,n.opacity!==void 0?n.opacity:1,ON(r)),t.opacityExit=Ae(e.opacity!==void 0?e.opacity:1,0,bN(r))):s&&(t.opacity=Ae(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<MN;o++){const a=`border${c7[o]}Radius`;let l=pv(e,a),u=pv(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||fv(l)===fv(u)?(t[a]=Math.max(Ae(dv(l),dv(u),r),0),(Rn.test(u)||Rn.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=Ae(e.rotate||0,n.rotate||0,r))}function pv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const ON=h7(0,.5,V0),bN=h7(.5,.95,Le);function h7(t,e,n){return r=>r<t?0:r>e?1:n(Qa(t,e,r))}function mv(t,e){t.min=e.min,t.max=e.max}function Kt(t,e){mv(t.x,e.x),mv(t.y,e.y)}function gv(t,e,n,r,i){return t-=e,t=Tc(t,1/n,r),i!==void 0&&(t=Tc(t,1/i,r)),t}function QN(t,e=0,n=1,r=.5,i,s=t,o=t){if(Rn.test(e)&&(e=parseFloat(e),e=Ae(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Ae(s.min,s.max,r);t===s&&(a-=e),t.min=gv(t.min,e,n,a,i),t.max=gv(t.max,e,n,a,i)}function yv(t,e,[n,r,i],s,o){QN(t,e[n],e[r],e[i],e.scale,s,o)}const jN=["x","scaleX","originX"],FN=["y","scaleY","originY"];function vv(t,e,n,r){yv(t.x,e,jN,n?n.x:void 0,r?r.x:void 0),yv(t.y,e,FN,n?n.y:void 0,r?r.y:void 0)}function _v(t){return t.translate===0&&t.scale===1}function d7(t){return _v(t.x)&&_v(t.y)}function UN(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function f7(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function wv(t){return Bt(t.x)/Bt(t.y)}class $N{constructor(){this.members=[]}add(e){F0(this.members,e),e.scheduleRender()}remove(e){if(U0(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ev(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(r+=`scale(${o}, ${a})`),r||"none"}const BN=(t,e)=>t.depth-e.depth;class zN{constructor(){this.children=[],this.isDirty=!1}add(e){F0(this.children,e),this.isDirty=!0}remove(e){U0(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(BN),this.isDirty=!1,this.children.forEach(e)}}function HN(t,e){const n=performance.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(ir(r),t(s-e))};return Ee.read(r,!0),()=>ir(r)}function WN(t){window.MotionDebug&&window.MotionDebug.record(t)}function KN(t){return t instanceof SVGElement&&t.tagName!=="svg"}function GN(t,e,n){const r=Ot(t)?t:Qs(t);return r.start(j0("",r,e,n)),r.animation}const Tv=["","X","Y","Z"],xv=1e3;let qN=0;const ii={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function p7({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=qN++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{ii.totalNodes=ii.resolvedTargetDeltas=ii.recalculatedProjection=0,this.nodes.forEach(JN),this.nodes.forEach(rL),this.nodes.forEach(iL),this.nodes.forEach(ZN),WN(ii)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new zN)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new $0),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=KN(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let h;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=HN(d,250),yu.hasAnimatedSinceResize&&(yu.hasAnimatedSinceResize=!1,this.nodes.forEach(Sv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d,hasRelativeTargetChanged:f,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||c.getDefaultTransition()||uL,{onLayoutAnimationStart:E,onLayoutAnimationComplete:_}=c.getProps(),p=!this.targetLayout||!f7(this.targetLayout,y)||f,v=!d&&f;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||d&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,v);const g={...J9(w,"layout"),onPlay:E,onComplete:_};(c.shouldReduceMotion||this.options.layoutRoot)&&(g.delay=0,g.type=!1),this.startAnimation(g)}else d||Sv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ir(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(sL),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const h=this.path[c];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Cv);return}this.isUpdating||this.nodes.forEach(tL),this.isUpdating=!1,this.nodes.forEach(nL),this.nodes.forEach(XN),this.nodes.forEach(YN),this.clearAllSnapshots();const a=performance.now();Ke.delta=$r(0,1e3/60,a-Ke.timestamp),Ke.timestamp=a,Ke.isProcessing=!0,Pd.update.process(Ke),Pd.preRender.process(Ke),Pd.render.process(Ke),Ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(eL),this.sharedNodes.forEach(oL)}scheduleUpdateProjection(){Ee.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){Ee.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=je(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!d7(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||ri(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),cL(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return je();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(mr(a.x,l.offset.x),mr(a.y,l.offset.y)),a}removeElementScroll(o){const a=je();Kt(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:h}=u;if(u!==this.root&&c&&h.layoutScroll){if(c.isRoot){Kt(a,o);const{scroll:d}=this.root;d&&(mr(a.x,-d.offset.x),mr(a.y,-d.offset.y))}mr(a.x,c.offset.x),mr(a.y,c.offset.y)}}return a}applyTransform(o,a=!1){const l=je();Kt(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&hs(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),ri(c.latestValues)&&hs(l,c.latestValues)}return ri(this.latestValues)&&hs(l,this.latestValues),l}removeTransform(o){const a=je();Kt(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!ri(u.latestValues))continue;wp(u.latestValues)&&u.updateSnapshot();const c=je(),h=u.measurePageBox();Kt(c,h),vv(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return ri(this.latestValues)&&vv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:d}=this.options;if(!(!this.layout||!(h||d))){if(this.resolvedRelativeTargetAt=Ke.timestamp,!this.targetDelta&&!this.relativeTarget){const f=this.getClosestProjectingParent();f&&f.layout&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=je(),this.relativeTargetOrigin=je(),Yo(this.relativeTargetOrigin,this.layout.layoutBox,f.layout.layoutBox),Kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=je(),this.targetWithTransforms=je()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),dN(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Kt(this.target,this.layout.layoutBox),a7(this.target,this.targetDelta)):Kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const f=this.getClosestProjectingParent();f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=je(),this.relativeTargetOrigin=je(),Yo(this.relativeTargetOrigin,this.target,f.target),Kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ii.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||wp(this.parent.latestValues)||o7(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Ke.timestamp&&(u=!1),u)return;const{layout:c,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||h))return;Kt(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;EN(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:y}=a;if(!y){this.projectionTransform&&(this.projectionDelta=cs(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=cs(),this.projectionDeltaWithTransform=cs());const w=this.projectionTransform;Xo(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=Ev(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==d||this.treeScale.y!==f)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),ii.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},h=cs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=je(),f=l?l.source:void 0,y=this.layout?this.layout.source:void 0,w=f!==y,E=this.getStack(),_=!E||E.members.length<=1,p=!!(w&&!_&&this.options.crossfade===!0&&!this.path.some(lL));this.animationProgress=0;let v;this.mixTargetDelta=g=>{const x=g/1e3;Iv(h.x,o.x,x),Iv(h.y,o.y,x),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Yo(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),aL(this.relativeTarget,this.relativeTargetOrigin,d,x),v&&UN(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=je()),Kt(v,this.relativeTarget)),w&&(this.animationValues=c,VN(c,u,this.latestValues,x,p,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=x},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ir(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ee.update(()=>{yu.hasAnimatedSinceResize=!0,this.currentAnimation=GN(0,xv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(xv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&m7(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||je();const h=Bt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const d=Bt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Kt(a,l),hs(a,c),Xo(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new $N),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<Tv.length;c++){const h="rotate"+Tv[c];l[h]&&(u[h]=l[h],o.setStaticValue(h,0))}o.render();for(const c in u)o.setStaticValue(c,u[c]);o.scheduleRender()}getProjectionStyles(o={}){var a,l;const u={};if(!this.instance||this.isSVG)return u;if(this.isVisible)u.visibility="";else return{visibility:"hidden"};const c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=gu(o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=gu(o.pointerEvents)||""),this.hasProjected&&!ri(this.latestValues)&&(w.transform=c?c({},""):"none",this.hasProjected=!1),w}const d=h.animationValues||h.latestValues;this.applyTransformsToTarget(),u.transform=Ev(this.projectionDeltaWithTransform,this.treeScale,d),c&&(u.transform=c(d,u.transform));const{x:f,y}=this.projectionDelta;u.transformOrigin=`${f.origin*100}% ${y.origin*100}% 0`,h.animationValues?u.opacity=h===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:u.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const w in mc){if(d[w]===void 0)continue;const{correct:E,applyTo:_}=mc[w],p=u.transform==="none"?d[w]:E(d[w],h);if(_){const v=_.length;for(let g=0;g<v;g++)u[_[g]]=p}else u[w]=p}return this.options.layoutId&&(u.pointerEvents=h===this?gu(o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Cv),this.root.sharedNodes.clear()}}}function XN(t){t.updateLayout()}function YN(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?wn(h=>{const d=o?n.measuredBox[h]:n.layoutBox[h],f=Bt(d);d.min=r[h].min,d.max=d.min+f}):m7(s,n.layoutBox,r)&&wn(h=>{const d=o?n.measuredBox[h]:n.layoutBox[h],f=Bt(r[h]);d.max=d.min+f,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+f)});const a=cs();Xo(a,r,n.layoutBox);const l=cs();o?Xo(l,t.applyTransform(i,!0),n.measuredBox):Xo(l,r,n.layoutBox);const u=!d7(a);let c=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:f}=h;if(d&&f){const y=je();Yo(y,n.layoutBox,d.layoutBox);const w=je();Yo(w,r,f.layoutBox),f7(y,w)||(c=!0),h.options.layoutRoot&&(t.relativeTarget=w,t.relativeTargetOrigin=y,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function JN(t){ii.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function ZN(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function eL(t){t.clearSnapshot()}function Cv(t){t.clearMeasurements()}function tL(t){t.isLayoutDirty=!1}function nL(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Sv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function rL(t){t.resolveTargetDelta()}function iL(t){t.calcProjection()}function sL(t){t.resetRotation()}function oL(t){t.removeLeadSnapshot()}function Iv(t,e,n){t.translate=Ae(e.translate,0,n),t.scale=Ae(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Pv(t,e,n,r){t.min=Ae(e.min,n.min,r),t.max=Ae(e.max,n.max,r)}function aL(t,e,n,r){Pv(t.x,e.x,n.x,r),Pv(t.y,e.y,n.y,r)}function lL(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const uL={duration:.45,ease:[.4,0,.1,1]},Av=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),Rv=Av("applewebkit/")&&!Av("chrome/")?Math.round:Le;function kv(t){t.min=Rv(t.min),t.max=Rv(t.max)}function cL(t){kv(t.x),kv(t.y)}function m7(t,e,n){return t==="position"||t==="preserve-aspect"&&!vp(wv(e),wv(n),.2)}const hL=p7({attachResizeListener:(t,e)=>zn(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Qd={current:void 0},g7=p7({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Qd.current){const t=new hL({});t.mount(window),t.setOptions({layoutScroll:!0}),Qd.current=t}return Qd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),dL={pan:{Feature:RN},drag:{Feature:AN,ProjectionNode:g7,MeasureLayout:u7}},fL=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function pL(t){const e=fL.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]}function Tp(t,e,n=1){const[r,i]=pL(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return Z9(o)?parseFloat(o):o}else return hp(i)?Tp(i,e,n+1):i}function mL(t,{...e},n){const r=t.current;if(!(r instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(i=>{const s=i.get();if(!hp(s))return;const o=Tp(s,r);o&&i.set(o)});for(const i in e){const s=e[i];if(!hp(s))continue;const o=Tp(s,r);o&&(e[i]=o,n||(n={}),n[i]===void 0&&(n[i]=s))}return{target:e,transitionEnd:n}}const gL=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),y7=t=>gL.has(t),yL=t=>Object.keys(t).some(y7),Dv=t=>t===Fi||t===B,Nv=(t,e)=>parseFloat(t.split(", ")[e]),Lv=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return Nv(i[1],e);{const s=r.match(/^matrix\((.+)\)$/);return s?Nv(s[1],t):0}},vL=new Set(["x","y","z"]),_L=hl.filter(t=>!vL.has(t));function wL(t){const e=[];return _L.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const js={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Lv(4,13),y:Lv(5,14)};js.translateX=js.x;js.translateY=js.y;const EL=(t,e,n)=>{const r=e.measureViewportBox(),i=e.current,s=getComputedStyle(i),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(u=>{a[u]=js[u](r,s)}),e.render();const l=e.measureViewportBox();return n.forEach(u=>{const c=e.getValue(u);c&&c.jump(a[u]),t[u]=js[u](l,s)}),t},TL=(t,e,n={},r={})=>{e={...e},r={...r};const i=Object.keys(e).filter(y7);let s=[],o=!1;const a=[];if(i.forEach(l=>{const u=t.getValue(l);if(!t.hasValue(l))return;let c=n[l],h=wo(c);const d=e[l];let f;if(yc(d)){const y=d.length,w=d[0]===null?1:0;c=d[w],h=wo(c);for(let E=w;E<y&&d[E]!==null;E++)f?M0(wo(d[E])===f):f=wo(d[E])}else f=wo(d);if(h!==f)if(Dv(h)&&Dv(f)){const y=u.get();typeof y=="string"&&u.set(parseFloat(y)),typeof d=="string"?e[l]=parseFloat(d):Array.isArray(d)&&f===B&&(e[l]=d.map(parseFloat))}else h!=null&&h.transform&&(f!=null&&f.transform)&&(c===0||d===0)?c===0?u.set(f.transform(c)):e[l]=h.transform(d):(o||(s=wL(t),o=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:e[l],u.jump(d))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=EL(e,t,a);return s.length&&s.forEach(([c,h])=>{t.getValue(c).set(h)}),t.render(),vh&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:e,transitionEnd:r}};function xL(t,e,n,r){return yL(e)?TL(t,e,n,r):{target:e,transitionEnd:r}}const CL=(t,e,n,r)=>{const i=mL(t,e,r);return e=i.target,r=i.transitionEnd,xL(t,e,n,r)},xp={current:null},v7={current:!1};function SL(){if(v7.current=!0,!!vh)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>xp.current=t.matches;t.addListener(e),e()}else xp.current=!1}function IL(t,e,n){const{willChange:r}=e;for(const i in e){const s=e[i],o=n[i];if(Ot(s))t.addValue(i,s),Ec(r)&&r.add(i);else if(Ot(o))t.addValue(i,Qs(s,{owner:t})),Ec(r)&&r.remove(i);else if(o!==s)if(t.hasValue(i)){const a=t.getValue(i);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(i);t.addValue(i,Qs(a!==void 0?a:s,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Mv=new WeakMap,_7=Object.keys(ba),PL=_7.length,Vv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],AL=S0.length;class RL{constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Ee.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=wh(n),this.isVariantNode=r9(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const h in c){const d=c[h];a[h]!==void 0&&Ot(d)&&(d.set(a[h],!1),Ec(u)&&u.add(h))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,Mv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),v7.current||SL(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:xp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Mv.delete(this.current),this.projection&&this.projection.unmount(),ir(this.notifyUpdate),ir(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const r=ji.has(e),i=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&Ee.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{i(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},r,i,s){let o,a;for(let l=0;l<PL;l++){const u=_7[l],{isEnabled:c,Feature:h,ProjectionNode:d,MeasureLayout:f}=ba[u];d&&(o=d),c(n)&&(!this.features[u]&&h&&(this.features[u]=new h(this)),f&&(a=f))}if(!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:h,layoutScroll:d,layoutRoot:f}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||h&&ls(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:d,layoutRoot:f})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):je()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Vv.length;r++){const i=Vv[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=e["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=IL(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<AL;r++){const i=S0[r],s=this.props[i];(Oa(s)||s===!1)&&(n[i]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Qs(n,{owner:this}),this.addValue(e,r)),r}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=L0(this.props,r))===null||n===void 0?void 0:n[e]:void 0;if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Ot(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new $0),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class w7 extends RL{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...r},{transformValues:i},s){let o=GD(r,e||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),o&&(o=i(o))),s){WD(this,r,o);const a=CL(this,r,o,n);n=a.transitionEnd,r=a.target}return{transition:e,transitionEnd:n,...r}}}function kL(t){return window.getComputedStyle(t)}class DL extends w7{readValueFromInstance(e,n){if(ji.has(n)){const r=Q0(n);return r&&r.default||0}else{const r=kL(e),i=(l9(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return l7(e,n)}build(e,n,r,i){P0(e,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(e,n){return N0(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ot(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,r,i){p9(e,n,r,i)}}class NL extends w7{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ji.has(n)){const r=Q0(n);return r&&r.default||0}return n=m9.has(n)?n:D0(n),e.getAttribute(n)}measureInstanceViewportBox(){return je()}scrapeMotionValuesFromProps(e,n){return y9(e,n)}build(e,n,r,i){R0(e,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,r,i){g9(e,n,r,i)}mount(e){this.isSVGTag=k0(e.tagName),super.mount(e)}}const LL=(t,e)=>I0(t)?new NL(e,{enableHardwareAcceleration:!1}):new DL(e,{enableHardwareAcceleration:!0}),ML={layout:{ProjectionNode:g7,MeasureLayout:u7}},VL={...lN,...Ak,...dL,...ML},ja=OR((t,e)=>mk(t,e,VL,LL)),sn=({name:t,placeholder:e,onChange:n,type:r,text:i})=>m.jsxs(m.Fragment,{children:[m.jsx(ja.label,{layout:!0,htmlFor:t,className:"mt-4 mb-2 text-lg",children:i}),m.jsx(ja.input,{layout:!0,type:r,placeholder:e,name:t,id:t,autoComplete:"on",onChange:n,className:"bg-white dark:bg-slate-900 border-[1px] border-gray-200 transition-all duration-200 focus:ring-2 focus:ring-verde dark:border-slate-700 rounded-xl px-4 py-4 outline-none"})]}),E7=()=>{const[t,e]=S.useState(null);return{formData:t,handleFormDataChange:({target:{name:r,value:i}})=>{e({...t,[r]:i}),console.log(t)}}},T7=({children:t,onSubmit:e})=>m.jsx(ja.form,{onSubmit:e,layout:!0,className:"flex justify-center max-w-md w-full flex-col p-6 border-2 border-gray-200 dark:border-slate-700 rounded-2xl dark:bg-gray-800",children:t}),OL=()=>{const{logIn:t}=Js(),e=$c(),{formData:n,handleFormDataChange:r}=E7(),i=async s=>{s.preventDefault();try{await t(n.email,n.password),e("/healthert-web/app")}catch(o){throw new Error(o)}};return m.jsxs(T7,{onSubmit:i,children:[m.jsx("h1",{className:"text-5xl font-semibold",children:"Bienvenido de nuevo."}),m.jsx("h3",{className:"mb-3 mt-2",children:"Ingresa tus datos para iniciar sesion."}),m.jsx(sn,{name:"email",onChange:r,placeholder:"Correo electronico",text:"Correo electronico",type:"email"}),m.jsx(sn,{name:"password",onChange:r,placeholder:"Contrasena",text:"Contrasena",type:"password"}),m.jsx("div",{className:"flex justify-center mt-6 ",children:m.jsx(T0,{text:"Iniciar sesion"})}),m.jsxs("div",{className:"mt-4",children:[m.jsxs(Bc,{className:"hover:text-verde hover:underline transition-all duration-200",to:"/healthert-web/signup",children:["No tienes una cuenta?, ",m.jsx("span",{className:"text-verde",children:"Unete"})]})," "]})]})},bL=()=>m.jsxs("div",{className:"flex flex-col h-screen justify-between",children:[m.jsx(xm,{link:"/healthert-web/",text:"Regresar"}),m.jsxs("div",{className:"flex items-center p-6  justify-center md:space-x-10",children:[m.jsx("div",{className:"w-full max-w-lg hidden md:inline-block animate-floating ",children:m.jsx(Tm,{})}),m.jsx(OL,{})]}),m.jsx(Cm,{})]}),QL=()=>{const t=$c(),{logOut:e,user:n}=Js(),r=async()=>{await e(),t("/healthert-web/")};return m.jsxs("div",{children:[m.jsx("p",{children:n.email}),m.jsx(T0,{text:"Salir de la sesion",onClick:r})]})},jL=({children:t})=>{const{user:e}=Js();return e?m.jsx("div",{children:t}):m.jsx(c3,{to:"/healthert-web/"})},jd=({children:t})=>{const{user:e}=Js();return e?m.jsx(c3,{to:"/healthert-web/app"}):m.jsx("div",{children:t})},FL=()=>{const{signUp:t}=Js(),[e,n]=S.useState(1),{formData:r,handleFormDataChange:i}=E7(),s=async a=>{a.preventDefault();try{await t(r.email,r.password,{nombres:r.nombres,apellidoP:r.apellidoP,apellidoM:r.apellidoM},r.telefono,r.nombreHospital,r.rfc,r.licencia,"admin")}catch(l){throw new Error(l)}},o=a=>{a.preventDefault(),n(e+1)};return m.jsxs(T7,{onSubmit:e!=3?o:s,children:[m.jsx(ja.h1,{layout:!0,className:"text-5xl font-semibold",children:"Unete a nuestro servicio."}),m.jsx(ja.h3,{layout:!0,className:"mb-3 mt-2",children:"Ingresa tus datos para registrarte."}),e==1?m.jsxs(m.Fragment,{children:[m.jsx(sn,{name:"email",onChange:i,placeholder:"Correo electronico",text:"Correo electronico",type:"email"},"email"),m.jsx(sn,{name:"password",onChange:i,placeholder:"Contrasena",text:"Contrasena",type:"password"},"password")]}):e==2?m.jsxs(m.Fragment,{children:[m.jsx(sn,{name:"nombres",onChange:i,placeholder:"Nombre(s)",text:"Nombre(s)",type:"text"},"nombres"),m.jsx(sn,{name:"apellidoP",onChange:i,placeholder:"Apellido Paterno",text:"Apellido Paterno",type:"text"},"apellidoP"),m.jsx(sn,{name:"apellidoM",onChange:i,placeholder:"Apellido Materno",text:"Apellido Materno",type:"text"},"apellidoM"),m.jsx(sn,{name:"telefono",onChange:i,placeholder:"Telefono",text:"Telefono",type:"tel"},"telefono")]}):m.jsxs(m.Fragment,{children:[m.jsx(sn,{name:"nombreHospital",onChange:i,placeholder:"Nombre del hospital",text:"Nombre del hospital",type:"text"},"nombreHospital"),m.jsx(sn,{name:"rfc",onChange:i,placeholder:"RFC",text:"RFC",type:"text"},"rfc"),m.jsx(sn,{name:"licencia",onChange:i,placeholder:"Licencia",text:"Licencia",type:"text"},"licencia")]}),m.jsx("div",{className:"flex justify-center mt-6 ",children:m.jsx(T0,{text:e!=3?"Continuar":"Registrarse"})}),m.jsxs("div",{className:"mt-4",children:[m.jsxs(Bc,{className:"hover:text-verde hover:underline transition-all duration-200",to:"/healthert-web/login",children:["Tienes una cuenta?, ",m.jsx("span",{className:"text-verde",children:"Inicia sesion"})]})," "]})]})},UL=()=>m.jsxs("div",{className:"flex flex-col h-screen justify-between",children:[m.jsx(xm,{link:"/healthert-web/",text:"Regresar"}),m.jsxs("div",{className:"flex items-center p-6  justify-center md:space-x-10",children:[m.jsx(FL,{}),m.jsx("div",{className:"w-full max-w-lg hidden md:inline-block animate-floating ",children:m.jsx(Tm,{})})]}),m.jsx(Cm,{})]}),$L=fE([{path:"/healthert-web/",element:m.jsx(jd,{children:m.jsx(IR,{})}),errorElement:m.jsx(Dy,{})},{path:"healthert-web/login",element:m.jsx(jd,{children:m.jsx(bL,{})}),errorElement:m.jsx(Dy,{})},{path:"healthert-web/signup",element:m.jsx(jd,{children:m.jsx(UL,{})})},{path:"healthert-web/app",element:m.jsx(jL,{children:m.jsx(QL,{})})}]);function BL(){return m.jsx(SR,{children:m.jsx(sE,{router:$L})})}Fd.createRoot(document.getElementById("root")).render(m.jsx(BL,{}));
