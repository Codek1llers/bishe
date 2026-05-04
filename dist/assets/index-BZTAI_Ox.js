var Ex=Object.defineProperty;var Tx=(t,e,n)=>e in t?Ex(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Oe=(t,e,n)=>Tx(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function bx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var t0={exports:{}},Mc={},n0={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),Ax=Symbol.for("react.portal"),Cx=Symbol.for("react.fragment"),Rx=Symbol.for("react.strict_mode"),Px=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Lx=Symbol.for("react.context"),Dx=Symbol.for("react.forward_ref"),Ix=Symbol.for("react.suspense"),Ux=Symbol.for("react.memo"),Fx=Symbol.for("react.lazy"),yp=Symbol.iterator;function kx(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var i0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r0=Object.assign,s0={};function lo(t,e,n){this.props=t,this.context=e,this.refs=s0,this.updater=n||i0}lo.prototype.isReactComponent={};lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o0(){}o0.prototype=lo.prototype;function $h(t,e,n){this.props=t,this.context=e,this.refs=s0,this.updater=n||i0}var Kh=$h.prototype=new o0;Kh.constructor=$h;r0(Kh,lo.prototype);Kh.isPureReactComponent=!0;var Sp=Array.isArray,a0=Object.prototype.hasOwnProperty,Zh={current:null},l0={key:!0,ref:!0,__self:!0,__source:!0};function c0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)a0.call(e,i)&&!l0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ra,type:t,key:s,ref:o,props:r,_owner:Zh.current}}function Ox(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function zx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mp=/\/+/g;function Xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zx(""+t.key):e.toString(36)}function Al(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ra:case Ax:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Xc(o,0):i,Sp(r)?(n="",t!=null&&(n=t.replace(Mp,"$&/")+"/"),Al(r,e,n,"",function(c){return c})):r!=null&&(Jh(r)&&(r=Ox(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Mp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Sp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Xc(s,a);o+=Al(s,e,n,l,r)}else if(l=kx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Xc(s,a++),o+=Al(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ka(t,e,n){if(t==null)return t;var i=[],r=0;return Al(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Bx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vn={current:null},Cl={transition:null},Vx={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:Zh};function u0(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:ka,forEach:function(t,e,n){ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ka(t,function(){e++}),e},toArray:function(t){return ka(t,function(e){return e})||[]},only:function(t){if(!Jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=lo;Qe.Fragment=Cx;Qe.Profiler=Px;Qe.PureComponent=$h;Qe.StrictMode=Rx;Qe.Suspense=Ix;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vx;Qe.act=u0;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=r0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)a0.call(e,l)&&!l0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ra,type:t.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(t){return t={$$typeof:Lx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nx,_context:t},t.Consumer=t};Qe.createElement=c0;Qe.createFactory=function(t){var e=c0.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:Dx,render:t}};Qe.isValidElement=Jh;Qe.lazy=function(t){return{$$typeof:Fx,_payload:{_status:-1,_result:t},_init:Bx}};Qe.memo=function(t,e){return{$$typeof:Ux,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};Qe.unstable_act=u0;Qe.useCallback=function(t,e){return vn.current.useCallback(t,e)};Qe.useContext=function(t){return vn.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return vn.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return vn.current.useEffect(t,e)};Qe.useId=function(){return vn.current.useId()};Qe.useImperativeHandle=function(t,e,n){return vn.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return vn.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return vn.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return vn.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return vn.current.useReducer(t,e,n)};Qe.useRef=function(t){return vn.current.useRef(t)};Qe.useState=function(t){return vn.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return vn.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return vn.current.useTransition()};Qe.version="18.3.1";n0.exports=Qe;var oe=n0.exports;const Gx=bx(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hx=oe,Wx=Symbol.for("react.element"),jx=Symbol.for("react.fragment"),Xx=Object.prototype.hasOwnProperty,Yx=Hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qx={key:!0,ref:!0,__self:!0,__source:!0};function d0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Xx.call(e,i)&&!qx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Wx,type:t,key:s,ref:o,props:r,_owner:Yx.current}}Mc.Fragment=jx;Mc.jsx=d0;Mc.jsxs=d0;t0.exports=Mc;var M=t0.exports,od={},h0={exports:{}},zn={},f0={exports:{}},p0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Z){var H=z.length;z.push(Z);e:for(;0<H;){var ee=H-1>>>1,Ce=z[ee];if(0<r(Ce,Z))z[ee]=Z,z[H]=Ce,H=ee;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var Z=z[0],H=z.pop();if(H!==Z){z[0]=H;e:for(var ee=0,Ce=z.length,Le=Ce>>>1;ee<Le;){var Be=2*(ee+1)-1,nt=z[Be],J=Be+1,ne=z[J];if(0>r(nt,H))J<Ce&&0>r(ne,nt)?(z[ee]=ne,z[J]=H,ee=J):(z[ee]=nt,z[Be]=H,ee=Be);else if(J<Ce&&0>r(ne,H))z[ee]=ne,z[J]=H,ee=J;else break e}}return Z}function r(z,Z){var H=z.sortIndex-Z.sortIndex;return H!==0?H:z.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=z)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function S(z){if(v=!1,x(z),!g)if(n(l)!==null)g=!0,X(w);else{var Z=n(c);Z!==null&&G(S,Z.startTime-z)}}function w(z,Z){g=!1,v&&(v=!1,d(N),N=-1),p=!0;var H=f;try{for(x(Z),h=n(l);h!==null&&(!(h.expirationTime>Z)||z&&!D());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,f=h.priorityLevel;var Ce=ee(h.expirationTime<=Z);Z=t.unstable_now(),typeof Ce=="function"?h.callback=Ce:h===n(l)&&i(l),x(Z)}else i(l);h=n(l)}if(h!==null)var Le=!0;else{var Be=n(c);Be!==null&&G(S,Be.startTime-Z),Le=!1}return Le}finally{h=null,f=H,p=!1}}var A=!1,C=null,N=-1,E=5,T=-1;function D(){return!(t.unstable_now()-T<E)}function F(){if(C!==null){var z=t.unstable_now();T=z;var Z=!0;try{Z=C(!0,z)}finally{Z?B():(A=!1,C=null)}}else A=!1}var B;if(typeof _=="function")B=function(){_(F)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,q=$.port2;$.port1.onmessage=F,B=function(){q.postMessage(null)}}else B=function(){m(F,0)};function X(z){C=z,A||(A=!0,B())}function G(z,Z){N=m(function(){z(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,X(w))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(f){case 1:case 2:case 3:var Z=3;break;default:Z=f}var H=f;f=Z;try{return z()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var H=f;f=z;try{return Z()}finally{f=H}},t.unstable_scheduleCallback=function(z,Z,H){var ee=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ee+H:ee):H=ee,z){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=H+Ce,z={id:u++,callback:Z,priorityLevel:z,startTime:H,expirationTime:Ce,sortIndex:-1},H>ee?(z.sortIndex=H,e(c,z),n(l)===null&&z===n(c)&&(v?(d(N),N=-1):v=!0,G(S,H-ee))):(z.sortIndex=Ce,e(l,z),g||p||(g=!0,X(w))),z},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(z){var Z=f;return function(){var H=f;f=Z;try{return z.apply(this,arguments)}finally{f=H}}}})(p0);f0.exports=p0;var $x=f0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kx=oe,On=$x;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m0=new Set,sa={};function rs(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for(sa[t]=e,t=0;t<e.length;t++)m0.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ad=Object.prototype.hasOwnProperty,Zx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wp={},Ep={};function Jx(t){return ad.call(Ep,t)?!0:ad.call(wp,t)?!1:Zx.test(t)?Ep[t]=!0:(wp[t]=!0,!1)}function Qx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ey(t,e,n,i){if(e===null||typeof e>"u"||Qx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rn[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rn[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rn[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rn[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rn[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rn[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rn[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rn[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rn[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qh=/[\-:]([a-z])/g;function ef(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qh,ef);rn[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qh,ef);rn[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qh,ef);rn[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rn[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});rn.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rn[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function tf(t,e,n,i){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ey(e,n,r,i)&&(n=null),i||r===null?Jx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ki=Kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),As=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),nf=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),g0=Symbol.for("react.provider"),_0=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),ud=Symbol.for("react.suspense_list"),sf=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),v0=Symbol.for("react.offscreen"),Tp=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=Tp&&t[Tp]||t["@@iterator"],typeof t=="function"?t:null)}var Nt=Object.assign,Yc;function Oo(t){if(Yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yc=e&&e[1]||""}return`
`+Yc+t}var qc=!1;function $c(t,e){if(!t||qc)return"";qc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{qc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function ty(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=$c(t.type,!1),t;case 11:return t=$c(t.type.render,!1),t;case 1:return t=$c(t.type,!0),t;default:return""}}function dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cs:return"Fragment";case As:return"Portal";case ld:return"Profiler";case nf:return"StrictMode";case cd:return"Suspense";case ud:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _0:return(t.displayName||"Context")+".Consumer";case g0:return(t._context.displayName||"Context")+".Provider";case rf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sf:return e=t.displayName||null,e!==null?e:dd(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return dd(t(e))}catch{}}return null}function ny(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dd(e);case 8:return e===nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iy(t){var e=x0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=iy(t))}function y0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=x0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hd(t,e){var n=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function S0(t,e){e=e.checked,e!=null&&tf(t,"checked",e,!1)}function fd(t,e){S0(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pd(t,e.type,n):e.hasOwnProperty("defaultValue")&&pd(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ap(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pd(t,e,n){(e!=="number"||jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zo=Array.isArray;function Bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(zo(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function M0(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Rp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function w0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?w0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,E0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ry=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){ry.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function T0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function b0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=T0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var sy=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _d(t,e){if(e){if(sy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function vd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xd=null;function of(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yd=null,Vs=null,Gs=null;function Pp(t){if(t=La(t)){if(typeof yd!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Ac(e),yd(t.stateNode,t.type,e))}}function A0(t){Vs?Gs?Gs.push(t):Gs=[t]:Vs=t}function C0(){if(Vs){var t=Vs,e=Gs;if(Gs=Vs=null,Pp(t),e)for(t=0;t<e.length;t++)Pp(e[t])}}function R0(t,e){return t(e)}function P0(){}var Kc=!1;function N0(t,e,n){if(Kc)return t(e,n);Kc=!0;try{return R0(t,e,n)}finally{Kc=!1,(Vs!==null||Gs!==null)&&(P0(),C0())}}function aa(t,e){var n=t.stateNode;if(n===null)return null;var i=Ac(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Sd=!1;if(Wi)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Sd=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Sd=!1}function oy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Xo=!1,Xl=null,Yl=!1,Md=null,ay={onError:function(t){Xo=!0,Xl=t}};function ly(t,e,n,i,r,s,o,a,l){Xo=!1,Xl=null,oy.apply(ay,arguments)}function cy(t,e,n,i,r,s,o,a,l){if(ly.apply(this,arguments),Xo){if(Xo){var c=Xl;Xo=!1,Xl=null}else throw Error(ae(198));Yl||(Yl=!0,Md=c)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function L0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Np(t){if(ss(t)!==t)throw Error(ae(188))}function uy(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Np(r),t;if(s===i)return Np(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function D0(t){return t=uy(t),t!==null?I0(t):null}function I0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=I0(t);if(e!==null)return e;t=t.sibling}return null}var U0=On.unstable_scheduleCallback,Lp=On.unstable_cancelCallback,dy=On.unstable_shouldYield,hy=On.unstable_requestPaint,Ot=On.unstable_now,fy=On.unstable_getCurrentPriorityLevel,af=On.unstable_ImmediatePriority,F0=On.unstable_UserBlockingPriority,ql=On.unstable_NormalPriority,py=On.unstable_LowPriority,k0=On.unstable_IdlePriority,wc=null,xi=null;function my(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(wc,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:vy,gy=Math.log,_y=Math.LN2;function vy(t){return t>>>=0,t===0?32:31-(gy(t)/_y|0)|0}var Va=64,Ga=4194304;function Bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $l(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bo(a):(s&=o,s!==0&&(i=Bo(s)))}else o=n&~r,o!==0?i=Bo(o):s!==0&&(i=Bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function xy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-oi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=xy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function O0(){var t=Va;return Va<<=1,!(Va&4194240)&&(Va=64),t}function Zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function Sy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function lf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ht=0;function z0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var B0,cf,V0,G0,H0,Ed=!1,Ha=[],gr=null,_r=null,vr=null,la=new Map,ca=new Map,ur=[],My="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dp(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":la.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(e.pointerId)}}function wo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=La(e),e!==null&&cf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function wy(t,e,n,i,r){switch(e){case"focusin":return gr=wo(gr,t,e,n,i,r),!0;case"dragenter":return _r=wo(_r,t,e,n,i,r),!0;case"mouseover":return vr=wo(vr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return la.set(s,wo(la.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ca.set(s,wo(ca.get(s)||null,t,e,n,i,r)),!0}return!1}function W0(t){var e=jr(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=L0(n),e!==null){t.blockedOn=e,H0(t.priority,function(){V0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xd=i,n.target.dispatchEvent(i),xd=null}else return e=La(n),e!==null&&cf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ip(t,e,n){Rl(t)&&n.delete(e)}function Ey(){Ed=!1,gr!==null&&Rl(gr)&&(gr=null),_r!==null&&Rl(_r)&&(_r=null),vr!==null&&Rl(vr)&&(vr=null),la.forEach(Ip),ca.forEach(Ip)}function Eo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ed||(Ed=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,Ey)))}function ua(t){function e(r){return Eo(r,t)}if(0<Ha.length){Eo(Ha[0],t);for(var n=1;n<Ha.length;n++){var i=Ha[n];i.blockedOn===t&&(i.blockedOn=null)}}for(gr!==null&&Eo(gr,t),_r!==null&&Eo(_r,t),vr!==null&&Eo(vr,t),la.forEach(e),ca.forEach(e),n=0;n<ur.length;n++)i=ur[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)W0(n),n.blockedOn===null&&ur.shift()}var Hs=Ki.ReactCurrentBatchConfig,Kl=!0;function Ty(t,e,n,i){var r=ht,s=Hs.transition;Hs.transition=null;try{ht=1,uf(t,e,n,i)}finally{ht=r,Hs.transition=s}}function by(t,e,n,i){var r=ht,s=Hs.transition;Hs.transition=null;try{ht=4,uf(t,e,n,i)}finally{ht=r,Hs.transition=s}}function uf(t,e,n,i){if(Kl){var r=Td(t,e,n,i);if(r===null)au(t,e,i,Zl,n),Dp(t,i);else if(wy(r,t,e,n,i))i.stopPropagation();else if(Dp(t,i),e&4&&-1<My.indexOf(t)){for(;r!==null;){var s=La(r);if(s!==null&&B0(s),s=Td(t,e,n,i),s===null&&au(t,e,i,Zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else au(t,e,i,null,n)}}var Zl=null;function Td(t,e,n,i){if(Zl=null,t=of(i),t=jr(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=L0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function j0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fy()){case af:return 1;case F0:return 4;case ql:case py:return 16;case k0:return 536870912;default:return 16}default:return 16}}var fr=null,df=null,Pl=null;function X0(){if(Pl)return Pl;var t,e=df,n=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pl=r.slice(t,1<i?1-i:void 0)}function Nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function Up(){return!1}function Bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:Up,this.isPropagationStopped=Up,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=Bn(co),Na=Nt({},co,{view:0,detail:0}),Ay=Bn(Na),Jc,Qc,To,Ec=Nt({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(Jc=t.screenX-To.screenX,Qc=t.screenY-To.screenY):Qc=Jc=0,To=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),Fp=Bn(Ec),Cy=Nt({},Ec,{dataTransfer:0}),Ry=Bn(Cy),Py=Nt({},Na,{relatedTarget:0}),eu=Bn(Py),Ny=Nt({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=Bn(Ny),Dy=Nt({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Iy=Bn(Dy),Uy=Nt({},co,{data:0}),kp=Bn(Uy),Fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Oy[t])?!!e[t]:!1}function ff(){return zy}var By=Nt({},Na,{key:function(t){if(t.key){var e=Fy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ky[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vy=Bn(By),Gy=Nt({},Ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=Bn(Gy),Hy=Nt({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),Wy=Bn(Hy),jy=Nt({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xy=Bn(jy),Yy=Nt({},Ec,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qy=Bn(Yy),$y=[9,13,27,32],pf=Wi&&"CompositionEvent"in window,Yo=null;Wi&&"documentMode"in document&&(Yo=document.documentMode);var Ky=Wi&&"TextEvent"in window&&!Yo,Y0=Wi&&(!pf||Yo&&8<Yo&&11>=Yo),zp=" ",Bp=!1;function q0(t,e){switch(t){case"keyup":return $y.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rs=!1;function Zy(t,e){switch(t){case"compositionend":return $0(e);case"keypress":return e.which!==32?null:(Bp=!0,zp);case"textInput":return t=e.data,t===zp&&Bp?null:t;default:return null}}function Jy(t,e){if(Rs)return t==="compositionend"||!pf&&q0(t,e)?(t=X0(),Pl=df=fr=null,Rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y0&&e.locale!=="ko"?null:e.data;default:return null}}var Qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qy[t.type]:e==="textarea"}function K0(t,e,n,i){A0(i),e=Jl(e,"onChange"),0<e.length&&(n=new hf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qo=null,da=null;function e1(t){a_(t,0)}function Tc(t){var e=Ls(t);if(y0(e))return t}function t1(t,e){if(t==="change")return e}var Z0=!1;if(Wi){var tu;if(Wi){var nu="oninput"in document;if(!nu){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),nu=typeof Gp.oninput=="function"}tu=nu}else tu=!1;Z0=tu&&(!document.documentMode||9<document.documentMode)}function Hp(){qo&&(qo.detachEvent("onpropertychange",J0),da=qo=null)}function J0(t){if(t.propertyName==="value"&&Tc(da)){var e=[];K0(e,da,t,of(t)),N0(e1,e)}}function n1(t,e,n){t==="focusin"?(Hp(),qo=e,da=n,qo.attachEvent("onpropertychange",J0)):t==="focusout"&&Hp()}function i1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tc(da)}function r1(t,e){if(t==="click")return Tc(e)}function s1(t,e){if(t==="input"||t==="change")return Tc(e)}function o1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:o1;function ha(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ad.call(e,r)||!li(t[r],e[r]))return!1}return!0}function Wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jp(t,e){var n=Wp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wp(n)}}function Q0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Q0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e_(){for(var t=window,e=jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jl(t.document)}return e}function mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function a1(t){var e=e_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Q0(n.ownerDocument.documentElement,n)){if(i!==null&&mf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=jp(n,s);var o=jp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l1=Wi&&"documentMode"in document&&11>=document.documentMode,Ps=null,bd=null,$o=null,Ad=!1;function Xp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ad||Ps==null||Ps!==jl(i)||(i=Ps,"selectionStart"in i&&mf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$o&&ha($o,i)||($o=i,i=Jl(bd,"onSelect"),0<i.length&&(e=new hf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ps)))}function ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ns={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},iu={},t_={};Wi&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function bc(t){if(iu[t])return iu[t];if(!Ns[t])return t;var e=Ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t_)return iu[t]=e[n];return t}var n_=bc("animationend"),i_=bc("animationiteration"),r_=bc("animationstart"),s_=bc("transitionend"),o_=new Map,Yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){o_.set(t,e),rs(e,[t])}for(var ru=0;ru<Yp.length;ru++){var su=Yp[ru],c1=su.toLowerCase(),u1=su[0].toUpperCase()+su.slice(1);Ar(c1,"on"+u1)}Ar(n_,"onAnimationEnd");Ar(i_,"onAnimationIteration");Ar(r_,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(s_,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function qp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,cy(i,e,void 0,t),t.currentTarget=null}function a_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;qp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;qp(r,a,c),s=l}}}if(Yl)throw t=Md,Yl=!1,Md=null,t}function St(t,e){var n=e[Ld];n===void 0&&(n=e[Ld]=new Set);var i=t+"__bubble";n.has(i)||(l_(e,t,2,!1),n.add(i))}function ou(t,e,n){var i=0;e&&(i|=4),l_(n,t,i,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function fa(t){if(!t[Xa]){t[Xa]=!0,m0.forEach(function(n){n!=="selectionchange"&&(d1.has(n)||ou(n,!1,t),ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,ou("selectionchange",!1,e))}}function l_(t,e,n,i){switch(j0(e)){case 1:var r=Ty;break;case 4:r=by;break;default:r=uf}n=r.bind(null,e,n,t),r=void 0,!Sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function au(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=jr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}N0(function(){var c=s,u=of(n),h=[];e:{var f=o_.get(t);if(f!==void 0){var p=hf,g=t;switch(t){case"keypress":if(Nl(n)===0)break e;case"keydown":case"keyup":p=Vy;break;case"focusin":g="focus",p=eu;break;case"focusout":g="blur",p=eu;break;case"beforeblur":case"afterblur":p=eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Wy;break;case n_:case i_:case r_:p=Ly;break;case s_:p=Xy;break;case"scroll":p=Ay;break;case"wheel":p=qy;break;case"copy":case"cut":case"paste":p=Iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Op}var v=(e&4)!==0,m=!v&&t==="scroll",d=v?f!==null?f+"Capture":null:f;v=[];for(var _=c,x;_!==null;){x=_;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=aa(_,d),S!=null&&v.push(pa(_,S,x)))),m)break;_=_.return}0<v.length&&(f=new p(f,g,null,n,u),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==xd&&(g=n.relatedTarget||n.fromElement)&&(jr(g)||g[ji]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?jr(g):null,g!==null&&(m=ss(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=Fp,S="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=Op,S="onPointerLeave",d="onPointerEnter",_="pointer"),m=p==null?f:Ls(p),x=g==null?f:Ls(g),f=new v(S,_+"leave",p,n,u),f.target=m,f.relatedTarget=x,S=null,jr(u)===c&&(v=new v(d,_+"enter",g,n,u),v.target=x,v.relatedTarget=m,S=v),m=S,p&&g)t:{for(v=p,d=g,_=0,x=v;x;x=ls(x))_++;for(x=0,S=d;S;S=ls(S))x++;for(;0<_-x;)v=ls(v),_--;for(;0<x-_;)d=ls(d),x--;for(;_--;){if(v===d||d!==null&&v===d.alternate)break t;v=ls(v),d=ls(d)}v=null}else v=null;p!==null&&$p(h,f,p,v,!1),g!==null&&m!==null&&$p(h,m,g,v,!0)}}e:{if(f=c?Ls(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=t1;else if(Vp(f))if(Z0)w=s1;else{w=i1;var A=n1}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=r1);if(w&&(w=w(t,c))){K0(h,w,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&pd(f,"number",f.value)}switch(A=c?Ls(c):window,t){case"focusin":(Vp(A)||A.contentEditable==="true")&&(Ps=A,bd=c,$o=null);break;case"focusout":$o=bd=Ps=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,Xp(h,n,u);break;case"selectionchange":if(l1)break;case"keydown":case"keyup":Xp(h,n,u)}var C;if(pf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Rs?q0(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Y0&&n.locale!=="ko"&&(Rs||N!=="onCompositionStart"?N==="onCompositionEnd"&&Rs&&(C=X0()):(fr=u,df="value"in fr?fr.value:fr.textContent,Rs=!0)),A=Jl(c,N),0<A.length&&(N=new kp(N,t,null,n,u),h.push({event:N,listeners:A}),C?N.data=C:(C=$0(n),C!==null&&(N.data=C)))),(C=Ky?Zy(t,n):Jy(t,n))&&(c=Jl(c,"onBeforeInput"),0<c.length&&(u=new kp("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=C))}a_(h,e)})}function pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=aa(t,n),s!=null&&i.unshift(pa(t,s,r)),s=aa(t,e),s!=null&&i.push(pa(t,s,r))),t=t.return}return i}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $p(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=aa(n,s),l!=null&&o.unshift(pa(n,l,a))):r||(l=aa(n,s),l!=null&&o.push(pa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var h1=/\r\n?/g,f1=/\u0000|\uFFFD/g;function Kp(t){return(typeof t=="string"?t:""+t).replace(h1,`
`).replace(f1,"")}function Ya(t,e,n){if(e=Kp(e),Kp(t)!==e&&n)throw Error(ae(425))}function Ql(){}var Cd=null,Rd=null;function Pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nd=typeof setTimeout=="function"?setTimeout:void 0,p1=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,m1=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(t){return Zp.resolve(null).then(t).catch(g1)}:Nd;function g1(t){setTimeout(function(){throw t})}function lu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ua(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ua(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),mi="__reactFiber$"+uo,ma="__reactProps$"+uo,ji="__reactContainer$"+uo,Ld="__reactEvents$"+uo,_1="__reactListeners$"+uo,v1="__reactHandles$"+uo;function jr(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jp(t);t!==null;){if(n=t[mi])return n;t=Jp(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[mi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Ac(t){return t[ma]||null}var Dd=[],Ds=-1;function Cr(t){return{current:t}}function wt(t){0>Ds||(t.current=Dd[Ds],Dd[Ds]=null,Ds--)}function vt(t,e){Ds++,Dd[Ds]=t.current,t.current=e}var Tr={},dn=Cr(Tr),Tn=Cr(!1),Jr=Tr;function Ks(t,e){var n=t.type.contextTypes;if(!n)return Tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function ec(){wt(Tn),wt(dn)}function Qp(t,e,n){if(dn.current!==Tr)throw Error(ae(168));vt(dn,e),vt(Tn,n)}function c_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,ny(t)||"Unknown",r));return Nt({},n,i)}function tc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,Jr=dn.current,vt(dn,t),vt(Tn,Tn.current),!0}function em(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=c_(t,e,Jr),i.__reactInternalMemoizedMergedChildContext=t,wt(Tn),wt(dn),vt(dn,t)):wt(Tn),vt(Tn,n)}var Ui=null,Cc=!1,cu=!1;function u_(t){Ui===null?Ui=[t]:Ui.push(t)}function x1(t){Cc=!0,u_(t)}function Rr(){if(!cu&&Ui!==null){cu=!0;var t=0,e=ht;try{var n=Ui;for(ht=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,Cc=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),U0(af,Rr),r}finally{ht=e,cu=!1}}return null}var Is=[],Us=0,nc=null,ic=0,jn=[],Xn=0,Qr=null,Fi=1,ki="";function Vr(t,e){Is[Us++]=ic,Is[Us++]=nc,nc=t,ic=e}function d_(t,e,n){jn[Xn++]=Fi,jn[Xn++]=ki,jn[Xn++]=Qr,Qr=t;var i=Fi;t=ki;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var s=32-oi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fi=1<<32-oi(e)+r|n<<r|i,ki=s+t}else Fi=1<<s|n<<r|i,ki=t}function gf(t){t.return!==null&&(Vr(t,1),d_(t,1,0))}function _f(t){for(;t===nc;)nc=Is[--Us],Is[Us]=null,ic=Is[--Us],Is[Us]=null;for(;t===Qr;)Qr=jn[--Xn],jn[Xn]=null,ki=jn[--Xn],jn[Xn]=null,Fi=jn[--Xn],jn[Xn]=null}var kn=null,Fn=null,At=!1,ii=null;function h_(t,e){var n=Yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kn=t,Fn=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kn=t,Fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:Fi,overflow:ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kn=t,Fn=null,!0):!1;default:return!1}}function Id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ud(t){if(At){var e=Fn;if(e){var n=e;if(!tm(t,e)){if(Id(t))throw Error(ae(418));e=xr(n.nextSibling);var i=kn;e&&tm(t,e)?h_(i,n):(t.flags=t.flags&-4097|2,At=!1,kn=t)}}else{if(Id(t))throw Error(ae(418));t.flags=t.flags&-4097|2,At=!1,kn=t}}}function nm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function qa(t){if(t!==kn)return!1;if(!At)return nm(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pd(t.type,t.memoizedProps)),e&&(e=Fn)){if(Id(t))throw f_(),Error(ae(418));for(;e;)h_(t,e),e=xr(e.nextSibling)}if(nm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fn=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fn=null}}else Fn=kn?xr(t.stateNode.nextSibling):null;return!0}function f_(){for(var t=Fn;t;)t=xr(t.nextSibling)}function Zs(){Fn=kn=null,At=!1}function vf(t){ii===null?ii=[t]:ii.push(t)}var y1=Ki.ReactCurrentBatchConfig;function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function im(t){var e=t._init;return e(t._payload)}function p_(t){function e(d,_){if(t){var x=d.deletions;x===null?(d.deletions=[_],d.flags|=16):x.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=wr(d,_),d.index=0,d.sibling=null,d}function s(d,_,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<_?(d.flags|=2,_):x):(d.flags|=2,_)):(d.flags|=1048576,_)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,_,x,S){return _===null||_.tag!==6?(_=gu(x,d.mode,S),_.return=d,_):(_=r(_,x),_.return=d,_)}function l(d,_,x,S){var w=x.type;return w===Cs?u(d,_,x.props.children,S,x.key):_!==null&&(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ar&&im(w)===_.type)?(S=r(_,x.props),S.ref=bo(d,_,x),S.return=d,S):(S=Ol(x.type,x.key,x.props,null,d.mode,S),S.ref=bo(d,_,x),S.return=d,S)}function c(d,_,x,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=_u(x,d.mode,S),_.return=d,_):(_=r(_,x.children||[]),_.return=d,_)}function u(d,_,x,S,w){return _===null||_.tag!==7?(_=Zr(x,d.mode,S,w),_.return=d,_):(_=r(_,x),_.return=d,_)}function h(d,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=gu(""+_,d.mode,x),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Oa:return x=Ol(_.type,_.key,_.props,null,d.mode,x),x.ref=bo(d,null,_),x.return=d,x;case As:return _=_u(_,d.mode,x),_.return=d,_;case ar:var S=_._init;return h(d,S(_._payload),x)}if(zo(_)||So(_))return _=Zr(_,d.mode,x,null),_.return=d,_;$a(d,_)}return null}function f(d,_,x,S){var w=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(d,_,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Oa:return x.key===w?l(d,_,x,S):null;case As:return x.key===w?c(d,_,x,S):null;case ar:return w=x._init,f(d,_,w(x._payload),S)}if(zo(x)||So(x))return w!==null?null:u(d,_,x,S,null);$a(d,x)}return null}function p(d,_,x,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,a(_,d,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Oa:return d=d.get(S.key===null?x:S.key)||null,l(_,d,S,w);case As:return d=d.get(S.key===null?x:S.key)||null,c(_,d,S,w);case ar:var A=S._init;return p(d,_,x,A(S._payload),w)}if(zo(S)||So(S))return d=d.get(x)||null,u(_,d,S,w,null);$a(_,S)}return null}function g(d,_,x,S){for(var w=null,A=null,C=_,N=_=0,E=null;C!==null&&N<x.length;N++){C.index>N?(E=C,C=null):E=C.sibling;var T=f(d,C,x[N],S);if(T===null){C===null&&(C=E);break}t&&C&&T.alternate===null&&e(d,C),_=s(T,_,N),A===null?w=T:A.sibling=T,A=T,C=E}if(N===x.length)return n(d,C),At&&Vr(d,N),w;if(C===null){for(;N<x.length;N++)C=h(d,x[N],S),C!==null&&(_=s(C,_,N),A===null?w=C:A.sibling=C,A=C);return At&&Vr(d,N),w}for(C=i(d,C);N<x.length;N++)E=p(C,d,N,x[N],S),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?N:E.key),_=s(E,_,N),A===null?w=E:A.sibling=E,A=E);return t&&C.forEach(function(D){return e(d,D)}),At&&Vr(d,N),w}function v(d,_,x,S){var w=So(x);if(typeof w!="function")throw Error(ae(150));if(x=w.call(x),x==null)throw Error(ae(151));for(var A=w=null,C=_,N=_=0,E=null,T=x.next();C!==null&&!T.done;N++,T=x.next()){C.index>N?(E=C,C=null):E=C.sibling;var D=f(d,C,T.value,S);if(D===null){C===null&&(C=E);break}t&&C&&D.alternate===null&&e(d,C),_=s(D,_,N),A===null?w=D:A.sibling=D,A=D,C=E}if(T.done)return n(d,C),At&&Vr(d,N),w;if(C===null){for(;!T.done;N++,T=x.next())T=h(d,T.value,S),T!==null&&(_=s(T,_,N),A===null?w=T:A.sibling=T,A=T);return At&&Vr(d,N),w}for(C=i(d,C);!T.done;N++,T=x.next())T=p(C,d,N,T.value,S),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?N:T.key),_=s(T,_,N),A===null?w=T:A.sibling=T,A=T);return t&&C.forEach(function(F){return e(d,F)}),At&&Vr(d,N),w}function m(d,_,x,S){if(typeof x=="object"&&x!==null&&x.type===Cs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Oa:e:{for(var w=x.key,A=_;A!==null;){if(A.key===w){if(w=x.type,w===Cs){if(A.tag===7){n(d,A.sibling),_=r(A,x.props.children),_.return=d,d=_;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ar&&im(w)===A.type){n(d,A.sibling),_=r(A,x.props),_.ref=bo(d,A,x),_.return=d,d=_;break e}n(d,A);break}else e(d,A);A=A.sibling}x.type===Cs?(_=Zr(x.props.children,d.mode,S,x.key),_.return=d,d=_):(S=Ol(x.type,x.key,x.props,null,d.mode,S),S.ref=bo(d,_,x),S.return=d,d=S)}return o(d);case As:e:{for(A=x.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(d,_.sibling),_=r(_,x.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=_u(x,d.mode,S),_.return=d,d=_}return o(d);case ar:return A=x._init,m(d,_,A(x._payload),S)}if(zo(x))return g(d,_,x,S);if(So(x))return v(d,_,x,S);$a(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,x),_.return=d,d=_):(n(d,_),_=gu(x,d.mode,S),_.return=d,d=_),o(d)):n(d,_)}return m}var Js=p_(!0),m_=p_(!1),rc=Cr(null),sc=null,Fs=null,xf=null;function yf(){xf=Fs=sc=null}function Sf(t){var e=rc.current;wt(rc),t._currentValue=e}function Fd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){sc=t,xf=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(xf!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(sc===null)throw Error(ae(308));Fs=t,sc.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Xr=null;function Mf(t){Xr===null?Xr=[t]:Xr.push(t)}function g_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Mf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function __(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ot&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,Mf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function Ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lf(t,n)}}function rm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function oc(t,e,n,i){var r=t.updateQueue;lr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(f=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=Nt({},h,f);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=h}}function sm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Da={},yi=Cr(Da),ga=Cr(Da),_a=Cr(Da);function Yr(t){if(t===Da)throw Error(ae(174));return t}function Ef(t,e){switch(vt(_a,e),vt(ga,t),vt(yi,Da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gd(e,t)}wt(yi),vt(yi,e)}function Qs(){wt(yi),wt(ga),wt(_a)}function v_(t){Yr(_a.current);var e=Yr(yi.current),n=gd(e,t.type);e!==n&&(vt(ga,t),vt(yi,n))}function Tf(t){ga.current===t&&(wt(yi),wt(ga))}var Rt=Cr(0);function ac(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uu=[];function bf(){for(var t=0;t<uu.length;t++)uu[t]._workInProgressVersionPrimary=null;uu.length=0}var Dl=Ki.ReactCurrentDispatcher,du=Ki.ReactCurrentBatchConfig,es=0,Pt=null,Vt=null,Xt=null,lc=!1,Ko=!1,va=0,S1=0;function sn(){throw Error(ae(321))}function Af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function Cf(t,e,n,i,r,s){if(es=s,Pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?T1:b1,t=n(i,r),Ko){s=0;do{if(Ko=!1,va=0,25<=s)throw Error(ae(301));s+=1,Xt=Vt=null,e.updateQueue=null,Dl.current=A1,t=n(i,r)}while(Ko)}if(Dl.current=cc,e=Vt!==null&&Vt.next!==null,es=0,Xt=Vt=Pt=null,lc=!1,e)throw Error(ae(300));return t}function Rf(){var t=va!==0;return va=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Pt.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Kn(){if(Vt===null){var t=Pt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=Xt===null?Pt.memoizedState:Xt.next;if(e!==null)Xt=e,Vt=t;else{if(t===null)throw Error(ae(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Xt===null?Pt.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function xa(t,e){return typeof e=="function"?e(t):e}function hu(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((es&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Pt.lanes|=u,ts|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,li(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Pt.lanes|=s,ts|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fu(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);li(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function x_(){}function y_(t,e){var n=Pt,i=Kn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,Pf(w_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,ya(9,M_.bind(null,n,i,r,e),void 0,null),$t===null)throw Error(ae(349));es&30||S_(n,e,r)}return r}function S_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function M_(t,e,n,i){e.value=n,e.getSnapshot=i,E_(e)&&T_(t)}function w_(t,e,n){return n(function(){E_(e)&&T_(t)})}function E_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function T_(t){var e=Xi(t,1);e!==null&&ai(e,t,1,-1)}function om(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e.queue=t,t=t.dispatch=E1.bind(null,Pt,t),[e.memoizedState,t]}function ya(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function b_(){return Kn().memoizedState}function Il(t,e,n,i){var r=hi();Pt.flags|=t,r.memoizedState=ya(1|e,n,void 0,i===void 0?null:i)}function Rc(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,i!==null&&Af(i,o.deps)){r.memoizedState=ya(e,n,s,i);return}}Pt.flags|=t,r.memoizedState=ya(1|e,n,s,i)}function am(t,e){return Il(8390656,8,t,e)}function Pf(t,e){return Rc(2048,8,t,e)}function A_(t,e){return Rc(4,2,t,e)}function C_(t,e){return Rc(4,4,t,e)}function R_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P_(t,e,n){return n=n!=null?n.concat([t]):null,Rc(4,4,R_.bind(null,e,t),n)}function Nf(){}function N_(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function L_(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function D_(t,e,n){return es&21?(li(n,e)||(n=O0(),Pt.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function M1(t,e){var n=ht;ht=n!==0&&4>n?n:4,t(!0);var i=du.transition;du.transition={};try{t(!1),e()}finally{ht=n,du.transition=i}}function I_(){return Kn().memoizedState}function w1(t,e,n){var i=Mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},U_(t))F_(e,n);else if(n=g_(t,e,n,i),n!==null){var r=gn();ai(n,t,i,r),k_(n,e,i)}}function E1(t,e,n){var i=Mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(U_(t))F_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,li(a,o)){var l=e.interleaved;l===null?(r.next=r,Mf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=g_(t,e,r,i),n!==null&&(r=gn(),ai(n,t,i,r),k_(n,e,i))}}function U_(t){var e=t.alternate;return t===Pt||e!==null&&e===Pt}function F_(t,e){Ko=lc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function k_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lf(t,n)}}var cc={readContext:$n,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},T1={readContext:$n,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,R_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=w1.bind(null,Pt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:om,useDebugValue:Nf,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=om(!1),e=t[0];return t=M1.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Pt,r=hi();if(At){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),$t===null)throw Error(ae(349));es&30||S_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,am(w_.bind(null,i,s,t),[t]),i.flags|=2048,ya(9,M_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=$t.identifierPrefix;if(At){var n=ki,i=Fi;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=S1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},b1={readContext:$n,useCallback:N_,useContext:$n,useEffect:Pf,useImperativeHandle:P_,useInsertionEffect:A_,useLayoutEffect:C_,useMemo:L_,useReducer:hu,useRef:b_,useState:function(){return hu(xa)},useDebugValue:Nf,useDeferredValue:function(t){var e=Kn();return D_(e,Vt.memoizedState,t)},useTransition:function(){var t=hu(xa)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:I_,unstable_isNewReconciler:!1},A1={readContext:$n,useCallback:N_,useContext:$n,useEffect:Pf,useImperativeHandle:P_,useInsertionEffect:A_,useLayoutEffect:C_,useMemo:L_,useReducer:fu,useRef:b_,useState:function(){return fu(xa)},useDebugValue:Nf,useDeferredValue:function(t){var e=Kn();return Vt===null?e.memoizedState=t:D_(e,Vt.memoizedState,t)},useTransition:function(){var t=fu(xa)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:I_,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=Nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pc={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Mr(t),s=Vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ai(e,t,r,i),Ll(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Mr(t),s=Vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ai(e,t,r,i),Ll(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=Mr(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=yr(t,r,i),e!==null&&(ai(e,t,i,n),Ll(e,t,i))}};function lm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ha(n,i)||!ha(r,s):!0}function O_(t,e,n){var i=!1,r=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=bn(e)?Jr:dn.current,i=e.contextTypes,s=(i=i!=null)?Ks(t,r):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function cm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pc.enqueueReplaceState(e,e.state,null)}function Od(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=bn(e)?Jr:dn.current,r.context=Ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pc.enqueueReplaceState(r,r.state,null),oc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function eo(t,e){try{var n="",i=e;do n+=ty(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function pu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var C1=typeof WeakMap=="function"?WeakMap:Map;function z_(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){dc||(dc=!0,$d=i),zd(t,e)},n}function B_(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){zd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zd(t,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function um(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new C1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=G1.bind(null,t,e,n),e.then(t,t))}function dm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var R1=Ki.ReactCurrentOwner,En=!1;function mn(t,e,n,i){e.child=t===null?m_(e,null,n,i):Js(e,t.child,n,i)}function fm(t,e,n,i,r){n=n.render;var s=e.ref;return Ws(e,r),i=Cf(t,e,n,i,s,r),n=Rf(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(At&&n&&gf(e),e.flags|=1,mn(t,e,i,r),e.child)}function pm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,V_(t,e,s,i,r)):(t=Ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(o,i)&&t.ref===e.ref)return Yi(t,e,r)}return e.flags|=1,t=wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function V_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ha(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,Yi(t,e,r)}return Bd(t,e,n,i,r)}function G_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Os,Dn),Dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Os,Dn),Dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(Os,Dn),Dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(Os,Dn),Dn|=i;return mn(t,e,r,n),e.child}function H_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bd(t,e,n,i,r){var s=bn(n)?Jr:dn.current;return s=Ks(e,s),Ws(e,r),n=Cf(t,e,n,i,s,r),i=Rf(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(At&&i&&gf(e),e.flags|=1,mn(t,e,n,r),e.child)}function mm(t,e,n,i,r){if(bn(n)){var s=!0;tc(e)}else s=!1;if(Ws(e,r),e.stateNode===null)Ul(t,e),O_(e,n,i),Od(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=bn(n)?Jr:dn.current,c=Ks(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&cm(e,o,i,c),lr=!1;var f=e.memoizedState;o.state=f,oc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Tn.current||lr?(typeof u=="function"&&(kd(e,n,u,i),l=e.memoizedState),(a=lr||lm(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,__(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=bn(n)?Jr:dn.current,l=Ks(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&cm(e,o,i,l),lr=!1,f=e.memoizedState,o.state=f,oc(e,i,o,r);var g=e.memoizedState;a!==h||f!==g||Tn.current||lr?(typeof p=="function"&&(kd(e,n,p,i),g=e.memoizedState),(c=lr||lm(e,n,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Vd(t,e,n,i,s,r)}function Vd(t,e,n,i,r,s){H_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&em(e,n,!1),Yi(t,e,s);i=e.stateNode,R1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Js(e,t.child,null,s),e.child=Js(e,null,a,s)):mn(t,e,a,s),e.memoizedState=i.state,r&&em(e,n,!0),e.child}function W_(t){var e=t.stateNode;e.pendingContext?Qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qp(t,e.context,!1),Ef(t,e.containerInfo)}function gm(t,e,n,i,r){return Zs(),vf(r),e.flags|=256,mn(t,e,n,i),e.child}var Gd={dehydrated:null,treeContext:null,retryLane:0};function Hd(t){return{baseLanes:t,cachePool:null,transitions:null}}function j_(t,e,n){var i=e.pendingProps,r=Rt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(Rt,r&1),t===null)return Ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dc(o,i,0,null),t=Zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hd(n),e.memoizedState=Gd,t):Lf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return P1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=Zr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Hd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gd,i}return s=t.child,t=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lf(t,e){return e=Dc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ka(t,e,n,i){return i!==null&&vf(i),Js(e,t.child,null,n),t=Lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function P1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=pu(Error(ae(422))),Ka(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dc({mode:"visible",children:i.children},r,0,null),s=Zr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Js(e,t.child,null,o),e.child.memoizedState=Hd(o),e.memoizedState=Gd,s);if(!(e.mode&1))return Ka(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=pu(s,i,void 0),Ka(t,e,o,i)}if(a=(o&t.childLanes)!==0,En||a){if(i=$t,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(t,r),ai(i,t,r,-1))}return Of(),i=pu(Error(ae(421))),Ka(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=H1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Fn=xr(r.nextSibling),kn=e,At=!0,ii=null,t!==null&&(jn[Xn++]=Fi,jn[Xn++]=ki,jn[Xn++]=Qr,Fi=t.id,ki=t.overflow,Qr=e),e=Lf(e,i.children),e.flags|=4096,e)}function _m(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Fd(t.return,e,n)}function mu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function X_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(mn(t,e,i.children,n),i=Rt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_m(t,n,e);else if(t.tag===19)_m(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(Rt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ac(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),mu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ac(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}mu(e,!0,n,null,s);break;case"together":mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function N1(t,e,n){switch(e.tag){case 3:W_(e),Zs();break;case 5:v_(e);break;case 1:bn(e.type)&&tc(e);break;case 4:Ef(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(rc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(Rt,Rt.current&1),e.flags|=128,null):n&e.child.childLanes?j_(t,e,n):(vt(Rt,Rt.current&1),t=Yi(t,e,n),t!==null?t.sibling:null);vt(Rt,Rt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return X_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(Rt,Rt.current),i)break;return null;case 22:case 23:return e.lanes=0,G_(t,e,n)}return Yi(t,e,n)}var Y_,Wd,q_,$_;Y_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wd=function(){};q_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Yr(yi.current);var s=null;switch(n){case"input":r=hd(t,r),i=hd(t,i),s=[];break;case"select":r=Nt({},r,{value:void 0}),i=Nt({},i,{value:void 0}),s=[];break;case"textarea":r=md(t,r),i=md(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ql)}_d(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&St("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ao(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function on(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function L1(t,e,n){var i=e.pendingProps;switch(_f(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return bn(e.type)&&ec(),on(e),null;case 3:return i=e.stateNode,Qs(),wt(Tn),wt(dn),bf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Jd(ii),ii=null))),Wd(t,e),on(e),null;case 5:Tf(e);var r=Yr(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)q_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return on(e),null}if(t=Yr(yi.current),qa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[ma]=s,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(r=0;r<Vo.length;r++)St(Vo[r],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":bp(i,s),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},St("invalid",i);break;case"textarea":Cp(i,s),St("invalid",i)}_d(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ya(i.textContent,a,t),r=["children",""+a]):sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&St("scroll",i)}switch(n){case"input":za(i),Ap(i,s,!0);break;case"textarea":za(i),Rp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=w0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[mi]=e,t[ma]=i,Y_(t,e,!1,!1),e.stateNode=t;e:{switch(o=vd(n,i),n){case"dialog":St("cancel",t),St("close",t),r=i;break;case"iframe":case"object":case"embed":St("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vo.length;r++)St(Vo[r],t);r=i;break;case"source":St("error",t),r=i;break;case"img":case"image":case"link":St("error",t),St("load",t),r=i;break;case"details":St("toggle",t),r=i;break;case"input":bp(t,i),r=hd(t,i),St("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Nt({},i,{value:void 0}),St("invalid",t);break;case"textarea":Cp(t,i),r=md(t,i),St("invalid",t);break;default:r=i}_d(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?b0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&E0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oa(t,l):typeof l=="number"&&oa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&St("scroll",t):l!=null&&tf(t,s,l,o))}switch(n){case"input":za(t),Ap(t,i,!1);break;case"textarea":za(t),Rp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(t&&e.stateNode!=null)$_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Yr(_a.current),Yr(yi.current),qa(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=kn,t!==null))switch(t.tag){case 3:Ya(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return on(e),null;case 13:if(wt(Rt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&Fn!==null&&e.mode&1&&!(e.flags&128))f_(),Zs(),e.flags|=98560,s=!1;else if(s=qa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[mi]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),s=!1}else ii!==null&&(Jd(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Rt.current&1?Gt===0&&(Gt=3):Of())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return Qs(),Wd(t,e),t===null&&fa(e.stateNode.containerInfo),on(e),null;case 10:return Sf(e.type._context),on(e),null;case 17:return bn(e.type)&&ec(),on(e),null;case 19:if(wt(Rt),s=e.memoizedState,s===null)return on(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ao(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ac(t),o!==null){for(e.flags|=128,Ao(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(Rt,Rt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ot()>to&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=ac(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!At)return on(e),null}else 2*Ot()-s.renderingStartTime>to&&n!==1073741824&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ot(),e.sibling=null,n=Rt.current,vt(Rt,i?n&1|2:n&1),e):(on(e),null);case 22:case 23:return kf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function D1(t,e){switch(_f(e),e.tag){case 1:return bn(e.type)&&ec(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),wt(Tn),wt(dn),bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tf(e),null;case 13:if(wt(Rt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return wt(Rt),null;case 4:return Qs(),null;case 10:return Sf(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var Za=!1,cn=!1,I1=typeof WeakSet=="function"?WeakSet:Set,ye=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){It(t,e,i)}else n.current=null}function jd(t,e,n){try{n()}catch(i){It(t,e,i)}}var vm=!1;function U1(t,e){if(Cd=Kl,t=e_(),mf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rd={focusedElem:t,selectionRange:n},Kl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:ti(e.type,v),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){It(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return g=vm,vm=!1,g}function Zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&jd(e,n,s)}r=r.next}while(r!==i)}}function Nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K_(t){var e=t.alternate;e!==null&&(t.alternate=null,K_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[ma],delete e[Ld],delete e[_1],delete e[v1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z_(t){return t.tag===5||t.tag===3||t.tag===4}function xm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(i!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}function qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qd(t,e,n),t=t.sibling;t!==null;)qd(t,e,n),t=t.sibling}var Zt=null,ni=!1;function Ji(t,e,n){for(n=n.child;n!==null;)J_(t,e,n),n=n.sibling}function J_(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(wc,n)}catch{}switch(n.tag){case 5:cn||ks(n,e);case 6:var i=Zt,r=ni;Zt=null,Ji(t,e,n),Zt=i,ni=r,Zt!==null&&(ni?(t=Zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Zt.removeChild(n.stateNode));break;case 18:Zt!==null&&(ni?(t=Zt,n=n.stateNode,t.nodeType===8?lu(t.parentNode,n):t.nodeType===1&&lu(t,n),ua(t)):lu(Zt,n.stateNode));break;case 4:i=Zt,r=ni,Zt=n.stateNode.containerInfo,ni=!0,Ji(t,e,n),Zt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jd(n,e,o),r=r.next}while(r!==i)}Ji(t,e,n);break;case 1:if(!cn&&(ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){It(n,e,a)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,Ji(t,e,n),cn=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function ym(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new I1),e.forEach(function(i){var r=W1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Zt=a.stateNode,ni=!1;break e;case 3:Zt=a.stateNode.containerInfo,ni=!0;break e;case 4:Zt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Zt===null)throw Error(ae(160));J_(s,o,r),Zt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){It(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q_(e,t),e=e.sibling}function Q_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),ui(t),i&4){try{Zo(3,t,t.return),Nc(3,t)}catch(v){It(t,t.return,v)}try{Zo(5,t,t.return)}catch(v){It(t,t.return,v)}}break;case 1:Zn(e,t),ui(t),i&512&&n!==null&&ks(n,n.return);break;case 5:if(Zn(e,t),ui(t),i&512&&n!==null&&ks(n,n.return),t.flags&32){var r=t.stateNode;try{oa(r,"")}catch(v){It(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&S0(r,s),vd(a,o);var c=vd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?b0(r,h):u==="dangerouslySetInnerHTML"?E0(r,h):u==="children"?oa(r,h):tf(r,u,h,c)}switch(a){case"input":fd(r,s);break;case"textarea":M0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Bs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Bs(r,!!s.multiple,s.defaultValue,!0):Bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ma]=s}catch(v){It(t,t.return,v)}}break;case 6:if(Zn(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){It(t,t.return,v)}}break;case 3:if(Zn(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ua(e.containerInfo)}catch(v){It(t,t.return,v)}break;case 4:Zn(e,t),ui(t);break;case 13:Zn(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Uf=Ot())),i&4&&ym(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(c=cn)||u,Zn(e,t),cn=c):Zn(e,t),ui(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ye=t,u=t.child;u!==null;){for(h=ye=u;ye!==null;){switch(f=ye,p=f.child,f.tag){case 0:case 11:case 14:case 15:Zo(4,f,f.return);break;case 1:ks(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){It(i,n,v)}}break;case 5:ks(f,f.return);break;case 22:if(f.memoizedState!==null){Mm(h);continue}}p!==null?(p.return=f,ye=p):Mm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=T0("display",o))}catch(v){It(t,t.return,v)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){It(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Zn(e,t),ui(t),i&4&&ym(t);break;case 21:break;default:Zn(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z_(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(oa(r,""),i.flags&=-33);var s=xm(t);qd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=xm(t);Yd(t,a,o);break;default:throw Error(ae(161))}}catch(l){It(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function F1(t,e,n){ye=t,ev(t)}function ev(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||cn;a=Za;var c=cn;if(Za=o,(cn=l)&&!c)for(ye=r;ye!==null;)o=ye,l=o.child,o.tag===22&&o.memoizedState!==null?wm(r):l!==null?(l.return=o,ye=l):wm(r);for(;s!==null;)ye=s,ev(s),s=s.sibling;ye=r,Za=a,cn=c}Sm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):Sm(t)}}function Sm(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||Nc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&ua(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}cn||e.flags&512&&Xd(e)}catch(f){It(e,e.return,f)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Mm(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function wm(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nc(4,e)}catch(l){It(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){It(e,r,l)}}var s=e.return;try{Xd(e)}catch(l){It(e,s,l)}break;case 5:var o=e.return;try{Xd(e)}catch(l){It(e,o,l)}}}catch(l){It(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var k1=Math.ceil,uc=Ki.ReactCurrentDispatcher,Df=Ki.ReactCurrentOwner,qn=Ki.ReactCurrentBatchConfig,ot=0,$t=null,Bt=null,tn=0,Dn=0,Os=Cr(0),Gt=0,Sa=null,ts=0,Lc=0,If=0,Jo=null,Mn=null,Uf=0,to=1/0,Ii=null,dc=!1,$d=null,Sr=null,Ja=!1,pr=null,hc=0,Qo=0,Kd=null,Fl=-1,kl=0;function gn(){return ot&6?Ot():Fl!==-1?Fl:Fl=Ot()}function Mr(t){return t.mode&1?ot&2&&tn!==0?tn&-tn:y1.transition!==null?(kl===0&&(kl=O0()),kl):(t=ht,t!==0||(t=window.event,t=t===void 0?16:j0(t.type)),t):1}function ai(t,e,n,i){if(50<Qo)throw Qo=0,Kd=null,Error(ae(185));Pa(t,n,i),(!(ot&2)||t!==$t)&&(t===$t&&(!(ot&2)&&(Lc|=n),Gt===4&&dr(t,tn)),An(t,i),n===1&&ot===0&&!(e.mode&1)&&(to=Ot()+500,Cc&&Rr()))}function An(t,e){var n=t.callbackNode;yy(t,e);var i=$l(t,t===$t?tn:0);if(i===0)n!==null&&Lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Lp(n),e===1)t.tag===0?x1(Em.bind(null,t)):u_(Em.bind(null,t)),m1(function(){!(ot&6)&&Rr()}),n=null;else{switch(z0(i)){case 1:n=af;break;case 4:n=F0;break;case 16:n=ql;break;case 536870912:n=k0;break;default:n=ql}n=lv(n,tv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tv(t,e){if(Fl=-1,kl=0,ot&6)throw Error(ae(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var i=$l(t,t===$t?tn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=fc(t,i);else{e=i;var r=ot;ot|=2;var s=iv();($t!==t||tn!==e)&&(Ii=null,to=Ot()+500,Kr(t,e));do try{B1();break}catch(a){nv(t,a)}while(!0);yf(),uc.current=s,ot=r,Bt!==null?e=0:($t=null,tn=0,e=Gt)}if(e!==0){if(e===2&&(r=wd(t),r!==0&&(i=r,e=Zd(t,r))),e===1)throw n=Sa,Kr(t,0),dr(t,i),An(t,Ot()),n;if(e===6)dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!O1(r)&&(e=fc(t,i),e===2&&(s=wd(t),s!==0&&(i=s,e=Zd(t,s))),e===1))throw n=Sa,Kr(t,0),dr(t,i),An(t,Ot()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Gr(t,Mn,Ii);break;case 3:if(dr(t,i),(i&130023424)===i&&(e=Uf+500-Ot(),10<e)){if($l(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Nd(Gr.bind(null,t,Mn,Ii),e);break}Gr(t,Mn,Ii);break;case 4:if(dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-oi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*k1(i/1960))-i,10<i){t.timeoutHandle=Nd(Gr.bind(null,t,Mn,Ii),i);break}Gr(t,Mn,Ii);break;case 5:Gr(t,Mn,Ii);break;default:throw Error(ae(329))}}}return An(t,Ot()),t.callbackNode===n?tv.bind(null,t):null}function Zd(t,e){var n=Jo;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=fc(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&Jd(e)),t}function Jd(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function O1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~If,e&=~Lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function Em(t){if(ot&6)throw Error(ae(327));js();var e=$l(t,0);if(!(e&1))return An(t,Ot()),null;var n=fc(t,e);if(t.tag!==0&&n===2){var i=wd(t);i!==0&&(e=i,n=Zd(t,i))}if(n===1)throw n=Sa,Kr(t,0),dr(t,e),An(t,Ot()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,Mn,Ii),An(t,Ot()),null}function Ff(t,e){var n=ot;ot|=1;try{return t(e)}finally{ot=n,ot===0&&(to=Ot()+500,Cc&&Rr())}}function ns(t){pr!==null&&pr.tag===0&&!(ot&6)&&js();var e=ot;ot|=1;var n=qn.transition,i=ht;try{if(qn.transition=null,ht=1,t)return t()}finally{ht=i,qn.transition=n,ot=e,!(ot&6)&&Rr()}}function kf(){Dn=Os.current,wt(Os)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,p1(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(_f(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ec();break;case 3:Qs(),wt(Tn),wt(dn),bf();break;case 5:Tf(i);break;case 4:Qs();break;case 13:wt(Rt);break;case 19:wt(Rt);break;case 10:Sf(i.type._context);break;case 22:case 23:kf()}n=n.return}if($t=t,Bt=t=wr(t.current,null),tn=Dn=e,Gt=0,Sa=null,If=Lc=ts=0,Mn=Jo=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Xr=null}return t}function nv(t,e){do{var n=Bt;try{if(yf(),Dl.current=cc,lc){for(var i=Pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}lc=!1}if(es=0,Xt=Vt=Pt=null,Ko=!1,va=0,Df.current=null,n===null||n.return===null){Gt=1,Sa=e,Bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=dm(o);if(p!==null){p.flags&=-257,hm(p,o,a,s,e),p.mode&1&&um(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){um(s,c,e),Of();break e}l=Error(ae(426))}}else if(At&&a.mode&1){var m=dm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),hm(m,o,a,s,e),vf(eo(l,a));break e}}s=l=eo(l,a),Gt!==4&&(Gt=2),Jo===null?Jo=[s]:Jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=z_(s,l,e);rm(s,d);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Sr===null||!Sr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=B_(s,a,e);rm(s,S);break e}}s=s.return}while(s!==null)}sv(n)}catch(w){e=w,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function iv(){var t=uc.current;return uc.current=cc,t===null?cc:t}function Of(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),$t===null||!(ts&268435455)&&!(Lc&268435455)||dr($t,tn)}function fc(t,e){var n=ot;ot|=2;var i=iv();($t!==t||tn!==e)&&(Ii=null,Kr(t,e));do try{z1();break}catch(r){nv(t,r)}while(!0);if(yf(),ot=n,uc.current=i,Bt!==null)throw Error(ae(261));return $t=null,tn=0,Gt}function z1(){for(;Bt!==null;)rv(Bt)}function B1(){for(;Bt!==null&&!dy();)rv(Bt)}function rv(t){var e=av(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,e===null?sv(t):Bt=e,Df.current=null}function sv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=D1(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,Bt=null;return}}else if(n=L1(n,e,Dn),n!==null){Bt=n;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Gt===0&&(Gt=5)}function Gr(t,e,n){var i=ht,r=qn.transition;try{qn.transition=null,ht=1,V1(t,e,n,i)}finally{qn.transition=r,ht=i}return null}function V1(t,e,n,i){do js();while(pr!==null);if(ot&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Sy(t,s),t===$t&&(Bt=$t=null,tn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ja||(Ja=!0,lv(ql,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=ht;ht=1;var a=ot;ot|=4,Df.current=null,U1(t,n),Q_(n,t),a1(Rd),Kl=!!Cd,Rd=Cd=null,t.current=n,F1(n),hy(),ot=a,ht=o,qn.transition=s}else t.current=n;if(Ja&&(Ja=!1,pr=t,hc=r),s=t.pendingLanes,s===0&&(Sr=null),my(n.stateNode),An(t,Ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(dc)throw dc=!1,t=$d,$d=null,t;return hc&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===Kd?Qo++:(Qo=0,Kd=t):Qo=0,Rr(),null}function js(){if(pr!==null){var t=z0(hc),e=qn.transition,n=ht;try{if(qn.transition=null,ht=16>t?16:t,pr===null)var i=!1;else{if(t=pr,pr=null,hc=0,ot&6)throw Error(ae(331));var r=ot;for(ot|=4,ye=t.current;ye!==null;){var s=ye,o=s.child;if(ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ye=c;ye!==null;){var u=ye;switch(u.tag){case 0:case 11:case 15:Zo(8,u,s)}var h=u.child;if(h!==null)h.return=u,ye=h;else for(;ye!==null;){u=ye;var f=u.sibling,p=u.return;if(K_(u),u===c){ye=null;break}if(f!==null){f.return=p,ye=f;break}ye=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ye=o;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ye=d;break e}ye=s.return}}var _=t.current;for(ye=_;ye!==null;){o=ye;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ye=x;else e:for(o=_;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nc(9,a)}}catch(w){It(a,a.return,w)}if(a===o){ye=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ye=S;break e}ye=a.return}}if(ot=r,Rr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(wc,t)}catch{}i=!0}return i}finally{ht=n,qn.transition=e}}return!1}function Tm(t,e,n){e=eo(n,e),e=z_(t,e,1),t=yr(t,e,1),e=gn(),t!==null&&(Pa(t,1,e),An(t,e))}function It(t,e,n){if(t.tag===3)Tm(t,t,n);else for(;e!==null;){if(e.tag===3){Tm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){t=eo(n,t),t=B_(e,t,1),e=yr(e,t,1),t=gn(),e!==null&&(Pa(e,1,t),An(e,t));break}}e=e.return}}function G1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,$t===t&&(tn&n)===n&&(Gt===4||Gt===3&&(tn&130023424)===tn&&500>Ot()-Uf?Kr(t,0):If|=n),An(t,e)}function ov(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=gn();t=Xi(t,e),t!==null&&(Pa(t,e,n),An(t,n))}function H1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ov(t,n)}function W1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),ov(t,n)}var av;av=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,N1(t,e,n);En=!!(t.flags&131072)}else En=!1,At&&e.flags&1048576&&d_(e,ic,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=Ks(e,dn.current);Ws(e,n),r=Cf(null,e,i,t,r,n);var s=Rf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,tc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wf(e),r.updater=Pc,e.stateNode=r,r._reactInternals=e,Od(e,i,t,n),e=Vd(null,e,i,!0,s,n)):(e.tag=0,At&&s&&gf(e),mn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=X1(i),t=ti(i,t),r){case 0:e=Bd(null,e,i,t,n);break e;case 1:e=mm(null,e,i,t,n);break e;case 11:e=fm(null,e,i,t,n);break e;case 14:e=pm(null,e,i,ti(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Bd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),mm(t,e,i,r,n);case 3:e:{if(W_(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,__(t,e),oc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=eo(Error(ae(423)),e),e=gm(t,e,i,n,r);break e}else if(i!==r){r=eo(Error(ae(424)),e),e=gm(t,e,i,n,r);break e}else for(Fn=xr(e.stateNode.containerInfo.firstChild),kn=e,At=!0,ii=null,n=m_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zs(),i===r){e=Yi(t,e,n);break e}mn(t,e,i,n)}e=e.child}return e;case 5:return v_(e),t===null&&Ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Pd(i,r)?o=null:s!==null&&Pd(i,s)&&(e.flags|=32),H_(t,e),mn(t,e,o,n),e.child;case 6:return t===null&&Ud(e),null;case 13:return j_(t,e,n);case 4:return Ef(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Js(e,null,i,n):mn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),fm(t,e,i,r,n);case 7:return mn(t,e,e.pendingProps,n),e.child;case 8:return mn(t,e,e.pendingProps.children,n),e.child;case 12:return mn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,vt(rc,i._currentValue),i._currentValue=o,s!==null)if(li(s.value,o)){if(s.children===r.children&&!Tn.current){e=Yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ws(e,n),r=$n(r),i=i(r),e.flags|=1,mn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),pm(t,e,i,r,n);case 15:return V_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Ul(t,e),e.tag=1,bn(i)?(t=!0,tc(e)):t=!1,Ws(e,n),O_(e,i,r),Od(e,i,r,n),Vd(null,e,i,!0,t,n);case 19:return X_(t,e,n);case 22:return G_(t,e,n)}throw Error(ae(156,e.tag))};function lv(t,e){return U0(t,e)}function j1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,e,n,i){return new j1(t,e,n,i)}function zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X1(t){if(typeof t=="function")return zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rf)return 11;if(t===sf)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")zf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cs:return Zr(n.children,r,s,e);case nf:o=8,r|=8;break;case ld:return t=Yn(12,n,e,r|2),t.elementType=ld,t.lanes=s,t;case cd:return t=Yn(13,n,e,r),t.elementType=cd,t.lanes=s,t;case ud:return t=Yn(19,n,e,r),t.elementType=ud,t.lanes=s,t;case v0:return Dc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g0:o=10;break e;case _0:o=9;break e;case rf:o=11;break e;case sf:o=14;break e;case ar:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Yn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Zr(t,e,n,i){return t=Yn(7,t,i,e),t.lanes=n,t}function Dc(t,e,n,i){return t=Yn(22,t,i,e),t.elementType=v0,t.lanes=n,t.stateNode={isHidden:!1},t}function gu(t,e,n){return t=Yn(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=Yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Y1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zc(0),this.expirationTimes=Zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bf(t,e,n,i,r,s,o,a,l){return t=new Y1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wf(s),t}function q1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function cv(t){if(!t)return Tr;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(bn(n))return c_(t,n,e)}return e}function uv(t,e,n,i,r,s,o,a,l){return t=Bf(n,i,!0,t,r,s,o,a,l),t.context=cv(null),n=t.current,i=gn(),r=Mr(n),s=Vi(i,r),s.callback=e??null,yr(n,s,r),t.current.lanes=r,Pa(t,r,i),An(t,i),t}function Ic(t,e,n,i){var r=e.current,s=gn(),o=Mr(r);return n=cv(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yr(r,e,o),t!==null&&(ai(t,r,o,s),Ll(t,r,o)),o}function pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vf(t,e){bm(t,e),(t=t.alternate)&&bm(t,e)}function $1(){return null}var dv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gf(t){this._internalRoot=t}Uc.prototype.render=Gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Ic(t,e,null,null)};Uc.prototype.unmount=Gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){Ic(null,t,null,null)}),e[ji]=null}};function Uc(t){this._internalRoot=t}Uc.prototype.unstable_scheduleHydration=function(t){if(t){var e=G0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&W0(t)}};function Hf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Am(){}function K1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=pc(o);s.call(c)}}var o=uv(e,i,t,0,null,!1,!1,"",Am);return t._reactRootContainer=o,t[ji]=o.current,fa(t.nodeType===8?t.parentNode:t),ns(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=pc(l);a.call(c)}}var l=Bf(t,0,!1,null,null,!1,!1,"",Am);return t._reactRootContainer=l,t[ji]=l.current,fa(t.nodeType===8?t.parentNode:t),ns(function(){Ic(e,l,n,i)}),l}function kc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=pc(o);a.call(l)}}Ic(e,o,t,r)}else o=K1(n,e,t,r,i);return pc(o)}B0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bo(e.pendingLanes);n!==0&&(lf(e,n|1),An(e,Ot()),!(ot&6)&&(to=Ot()+500,Rr()))}break;case 13:ns(function(){var i=Xi(t,1);if(i!==null){var r=gn();ai(i,t,1,r)}}),Vf(t,1)}};cf=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=gn();ai(e,t,134217728,n)}Vf(t,134217728)}};V0=function(t){if(t.tag===13){var e=Mr(t),n=Xi(t,e);if(n!==null){var i=gn();ai(n,t,e,i)}Vf(t,e)}};G0=function(){return ht};H0=function(t,e){var n=ht;try{return ht=t,e()}finally{ht=n}};yd=function(t,e,n){switch(e){case"input":if(fd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ac(i);if(!r)throw Error(ae(90));y0(i),fd(i,r)}}}break;case"textarea":M0(t,n);break;case"select":e=n.value,e!=null&&Bs(t,!!n.multiple,e,!1)}};R0=Ff;P0=ns;var Z1={usingClientEntryPoint:!1,Events:[La,Ls,Ac,A0,C0,Ff]},Co={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J1={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=D0(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||$1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{wc=Qa.inject(J1),xi=Qa}catch{}}zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z1;zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(e))throw Error(ae(200));return q1(t,e,null,n)};zn.createRoot=function(t,e){if(!Hf(t))throw Error(ae(299));var n=!1,i="",r=dv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bf(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,fa(t.nodeType===8?t.parentNode:t),new Gf(e)};zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=D0(e),t=t===null?null:t.stateNode,t};zn.flushSync=function(t){return ns(t)};zn.hydrate=function(t,e,n){if(!Fc(e))throw Error(ae(200));return kc(null,t,e,!0,n)};zn.hydrateRoot=function(t,e,n){if(!Hf(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=dv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=uv(e,null,t,1,n??null,r,!1,s,o),t[ji]=e.current,fa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Uc(e)};zn.render=function(t,e,n){if(!Fc(e))throw Error(ae(200));return kc(null,t,e,!1,n)};zn.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(ae(40));return t._reactRootContainer?(ns(function(){kc(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};zn.unstable_batchedUpdates=Ff;zn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return kc(t,e,n,!1,i)};zn.version="18.3.1-next-f1338f8080-20240426";function hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hv)}catch(t){console.error(t)}}hv(),h0.exports=zn;var Q1=h0.exports,Cm=Q1;od.createRoot=Cm.createRoot,od.hydrateRoot=Cm.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wf="182",eS=0,Rm=1,tS=2,zl=1,fv=2,Go=3,br=0,Cn=1,wn=2,Gi=0,Xs=1,Pm=2,Nm=3,Lm=4,nS=5,Hr=100,iS=101,rS=102,sS=103,oS=104,aS=200,lS=201,cS=202,uS=203,Qd=204,eh=205,dS=206,hS=207,fS=208,pS=209,mS=210,gS=211,_S=212,vS=213,xS=214,th=0,nh=1,ih=2,no=3,rh=4,sh=5,oh=6,ah=7,pv=0,yS=1,SS=2,Si=0,mv=1,gv=2,_v=3,vv=4,xv=5,yv=6,Sv=7,Mv=300,is=301,io=302,lh=303,ch=304,Oc=306,uh=1e3,Oi=1001,dh=1002,en=1003,MS=1004,el=1005,un=1006,vu=1007,qr=1008,Un=1009,wv=1010,Ev=1011,Ma=1012,jf=1013,Ei=1014,gi=1015,qi=1016,Xf=1017,Yf=1018,wa=1020,Tv=35902,bv=35899,Av=1021,Cv=1022,si=1023,$i=1026,$r=1027,Rv=1028,qf=1029,ro=1030,$f=1031,Kf=1033,Bl=33776,Vl=33777,Gl=33778,Hl=33779,hh=35840,fh=35841,ph=35842,mh=35843,gh=36196,_h=37492,vh=37496,xh=37488,yh=37489,Sh=37490,Mh=37491,wh=37808,Eh=37809,Th=37810,bh=37811,Ah=37812,Ch=37813,Rh=37814,Ph=37815,Nh=37816,Lh=37817,Dh=37818,Ih=37819,Uh=37820,Fh=37821,kh=36492,Oh=36494,zh=36495,Bh=36283,Vh=36284,Gh=36285,Hh=36286,wS=3200,Pv=0,ES=1,hr="",Wn="srgb",so="srgb-linear",mc="linear",dt="srgb",cs=7680,Dm=519,TS=512,bS=513,AS=514,Zf=515,CS=516,RS=517,Jf=518,PS=519,Im=35044,Um="300 es",_i=2e3,gc=2001;function Nv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _c(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function NS(){const t=_c("canvas");return t.style.display="block",t}const Fm={};function km(...t){const e="THREE."+t.shift();console.log(e,...t)}function ke(...t){const e="THREE."+t.shift();console.warn(e,...t)}function rt(...t){const e="THREE."+t.shift();console.error(e,...t)}function Ea(...t){const e=t.join(" ");e in Fm||(Fm[e]=!0,ke(...t))}function LS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Om=1234567;const ea=Math.PI/180,Ta=180/Math.PI;function fo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function Qf(t,e){return(t%e+e)%e}function DS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function IS(t,e,n){return t!==e?(n-t)/(e-t):0}function ta(t,e,n){return(1-n)*t+n*e}function US(t,e,n,i){return ta(t,e,1-Math.exp(-n*i))}function FS(t,e=1){return e-Math.abs(Qf(t,e*2)-e)}function kS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function OS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function zS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function BS(t,e){return t+Math.random()*(e-t)}function VS(t){return t*(.5-Math.random())}function GS(t){t!==void 0&&(Om=t);let e=Om+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function HS(t){return t*ea}function WS(t){return t*Ta}function jS(t){return(t&t-1)===0&&t!==0}function XS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function YS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function qS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const xu={DEG2RAD:ea,RAD2DEG:Ta,generateUUID:fo,clamp:Ke,euclideanModulo:Qf,mapLinear:DS,inverseLerp:IS,lerp:ta,damp:US,pingpong:FS,smoothstep:kS,smootherstep:OS,randInt:zS,randFloat:BS,randFloatSpread:VS,seededRandom:GS,degToRad:HS,radToDeg:WS,isPowerOfTwo:jS,ceilPowerOfTwo:XS,floorPowerOfTwo:YS,setQuaternionFromProperEuler:qS,normalize:fn,denormalize:bs};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class po{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a>=1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=l*f+c*p+u*g+h*v;m<0&&(f=-f,p=-p,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){const _=Math.acos(m),x=Math.sin(_);d=Math.sin(d*_)/x,a=Math.sin(a*_)/x,l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+v*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+v*a;const _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*h+l*p-c*f,e[n+1]=l*g+u*f+c*h-a*p,e[n+2]=c*g+u*p+a*f-l*h,e[n+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,n=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yu.copy(this).projectOnVector(e),this.sub(yu)}reflect(e){return this.sub(yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yu=new R,zm=new po;class Xe{constructor(e,n,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],_=r[1],x=r[4],S=r[7],w=r[2],A=r[5],C=r[8];return s[0]=o*v+a*_+l*w,s[3]=o*m+a*x+l*A,s[6]=o*d+a*S+l*C,s[1]=c*v+u*_+h*w,s[4]=c*m+u*x+h*A,s[7]=c*d+u*S+h*C,s[2]=f*v+p*_+g*w,s[5]=f*m+p*x+g*A,s[8]=f*d+p*S+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Su.makeScale(e,n)),this}rotate(e){return this.premultiply(Su.makeRotation(-e)),this}translate(e,n){return this.premultiply(Su.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Su=new Xe,Bm=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vm=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $S(){const t={enabled:!0,workingColorSpace:so,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=Ys(r.r),r.g=Ys(r.g),r.b=Ys(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?mc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ea("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ea("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[so]:{primaries:e,whitePoint:i,transfer:mc,toXYZ:Bm,fromXYZ:Vm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Bm,fromXYZ:Vm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),t}const st=$S();function Hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ys(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let us;class KS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=_c("canvas")),us.width=e.width,us.height=e.height;const r=us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_c("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hi(n[i]/255)*255):n[i]=Hi(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZS=0;class ep{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mu(r[o].image)):s.push(Mu(r[o]))}else s=Mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?KS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let JS=0;const wu=new R;class _n extends ho{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,i=Oi,r=Oi,s=un,o=qr,a=si,l=Un,c=_n.DEFAULT_ANISOTROPY,u=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=fo(),this.name="",this.source=new ep(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wu).x}get height(){return this.source.getSize(wu).y}get depth(){return this.source.getSize(wu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uh:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uh:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Mv;_n.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,w=(d+1)/2,A=(u+f)/4,C=(h+v)/4,N=(g+m)/4;return x>S&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=C/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=N/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=N/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-v)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QS extends ho{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new _n(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ep(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends QS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Lv extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eM extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=new R(1/0,1/0,1/0),n=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),nl.subVectors(this.max,Ro),ds.subVectors(e.a,Ro),hs.subVectors(e.b,Ro),fs.subVectors(e.c,Ro),Qi.subVectors(hs,ds),er.subVectors(fs,hs),Ir.subVectors(ds,fs);let n=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-Ir.z,Ir.y,Qi.z,0,-Qi.x,er.z,0,-er.x,Ir.z,0,-Ir.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-Ir.y,Ir.x,0];return!Eu(n,ds,hs,fs,nl)||(n=[1,0,0,0,1,0,0,0,1],!Eu(n,ds,hs,fs,nl))?!1:(il.crossVectors(Qi,er),n=[il.x,il.y,il.z],Eu(n,ds,hs,fs,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new R,new R,new R,new R,new R,new R,new R,new R],Jn=new R,tl=new Ia,ds=new R,hs=new R,fs=new R,Qi=new R,er=new R,Ir=new R,Ro=new R,nl=new R,il=new R,Ur=new R;function Eu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ur.fromArray(t,s);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),c=n.dot(Ur),u=i.dot(Ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tM=new Ia,Po=new R,Tu=new R;class zc{constructor(e=new R,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):tM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Tu)),this.expandByPoint(Po.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ci=new R,bu=new R,rl=new R,tr=new R,Au=new R,sl=new R,Cu=new R;class tp{constructor(e=new R,n=new R(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){bu.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),tr.copy(this.origin).sub(bu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(rl),a=tr.dot(this.direction),l=-tr.dot(rl),c=tr.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(bu).addScaledVector(rl,f),p}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){Au.subVectors(n,e),sl.subVectors(i,e),Cu.crossVectors(Au,sl);let o=this.direction.dot(Cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,e);const l=a*this.direction.dot(sl.crossVectors(tr,sl));if(l<0)return null;const c=a*this.direction.dot(Au.cross(tr));if(c<0||l+c>o)return null;const u=-a*tr.dot(Cu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,o,a,l,c,u,h,f,p,g,v,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,f,p,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,h,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,v=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,v=c*h;n[0]=f+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,v=c*h;n[0]=f-v*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,v=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+v,n[1]=l*h,n[5]=v*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-f*h,n[8]=g*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+v,n[5]=o*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nM,e,iM)}lookAt(e,n,i){const r=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),nr.crossVectors(i,Nn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),nr.crossVectors(i,Nn)),nr.normalize(),ol.crossVectors(Nn,nr),r[0]=nr.x,r[4]=ol.x,r[8]=Nn.x,r[1]=nr.y,r[5]=ol.y,r[9]=Nn.y,r[2]=nr.z,r[6]=ol.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],_=i[3],x=i[7],S=i[11],w=i[15],A=r[0],C=r[4],N=r[8],E=r[12],T=r[1],D=r[5],F=r[9],B=r[13],$=r[2],q=r[6],X=r[10],G=r[14],z=r[3],Z=r[7],H=r[11],ee=r[15];return s[0]=o*A+a*T+l*$+c*z,s[4]=o*C+a*D+l*q+c*Z,s[8]=o*N+a*F+l*X+c*H,s[12]=o*E+a*B+l*G+c*ee,s[1]=u*A+h*T+f*$+p*z,s[5]=u*C+h*D+f*q+p*Z,s[9]=u*N+h*F+f*X+p*H,s[13]=u*E+h*B+f*G+p*ee,s[2]=g*A+v*T+m*$+d*z,s[6]=g*C+v*D+m*q+d*Z,s[10]=g*N+v*F+m*X+d*H,s[14]=g*E+v*B+m*G+d*ee,s[3]=_*A+x*T+S*$+w*z,s[7]=_*C+x*D+S*q+w*Z,s[11]=_*N+x*F+S*X+w*H,s[15]=_*E+x*B+S*G+w*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15],_=l*p-c*f,x=a*p-c*h,S=a*f-l*h,w=o*p-c*u,A=o*f-l*u,C=o*h-a*u;return n*(v*_-m*x+d*S)-i*(g*_-m*w+d*A)+r*(g*x-v*w+d*C)-s*(g*S-v*A+m*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],_=h*m*c-v*f*c+v*l*p-a*m*p-h*l*d+a*f*d,x=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,S=u*v*c-g*h*c+g*a*p-o*v*p-u*a*d+o*h*d,w=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,A=n*_+i*x+r*S+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=_*C,e[1]=(v*f*s-h*m*s-v*r*p+i*m*p+h*r*d-i*f*d)*C,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*C,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*C,e[4]=x*C,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*d+n*f*d)*C,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*d-n*l*d)*C,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*C,e[8]=S*C,e[9]=(g*h*s-u*v*s-g*i*p+n*v*p+u*i*d-n*h*d)*C,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*d+n*a*d)*C,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*C,e[12]=w*C,e[13]=(u*v*r-g*h*r+g*i*f-n*v*f-u*i*m+n*h*m)*C,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*C,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*f+n*a*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,v=o*u,m=o*h,d=a*h,_=l*c,x=l*u,S=l*h,w=i.x,A=i.y,C=i.z;return r[0]=(1-(v+d))*w,r[1]=(p+S)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+d))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+x)*C,r[9]=(m-_)*C,r[10]=(1-(f+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Qn.copy(this);const c=1/s,u=1/o,h=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,n.setFromRotationMatrix(Qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=_i,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===_i)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===gc)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_i,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===_i)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===gc)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ps=new R,Qn=new Et,nM=new R(0,0,0),iM=new R(1,1,1),nr=new R,ol=new R,Nn=new R,Gm=new Et,Hm=new po;class Ti{constructor(e=0,n=0,i=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";let np=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rM=0;const Wm=new R,ms=new po,Ri=new Et,al=new R,No=new R,sM=new R,oM=new po,jm=new R(1,0,0),Xm=new R(0,1,0),Ym=new R(0,0,1),qm={type:"added"},aM={type:"removed"},gs={type:"childadded",child:null},Ru={type:"childremoved",child:null};class nn extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new R,n=new Ti,i=new po,r=new R(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Xe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(jm,e)}rotateY(e){return this.rotateOnAxis(Xm,e)}rotateZ(e){return this.rotateOnAxis(Ym,e)}translateOnAxis(e,n){return Wm.copy(e).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jm,e)}translateY(e){return this.translateOnAxis(Xm,e)}translateZ(e){return this.translateOnAxis(Ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?al.copy(e):al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(No,al,this.up):Ri.lookAt(al,No,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Ri),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qm),gs.child=e,this.dispatchEvent(gs),gs.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(aM),Ru.child=e,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qm),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,sM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,oM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new R(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new R,Pi=new R,Pu=new R,Ni=new R,_s=new R,vs=new R,$m=new R,Nu=new R,Lu=new R,Du=new R,Iu=new Ut,Uu=new Ut,Fu=new Ut;class ri{constructor(e=new R,n=new R,i=new R){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),Pi.subVectors(i,n),Pu.subVectors(e,n);const o=ei.dot(ei),a=ei.dot(Pi),l=ei.dot(Pu),c=Pi.dot(Pi),u=Pi.dot(Pu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Iu.setScalar(0),Uu.setScalar(0),Fu.setScalar(0),Iu.fromBufferAttribute(e,n),Uu.fromBufferAttribute(e,i),Fu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Iu,s.x),o.addScaledVector(Uu,s.y),o.addScaledVector(Fu,s.z),o}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Pi.subVectors(e,n),ei.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ei.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),vs.subVectors(s,i),Nu.subVectors(e,i);const l=_s.dot(Nu),c=vs.dot(Nu);if(l<=0&&c<=0)return n.copy(i);Lu.subVectors(e,r);const u=_s.dot(Lu),h=vs.dot(Lu);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(_s,o);Du.subVectors(e,s);const p=_s.dot(Du),g=vs.dot(Du);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(vs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return $m.subVectors(s,r),a=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector($m,a);const d=1/(m+v+f);return o=v*d,a=f*d,n.copy(i).addScaledVector(_s,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},ll={h:0,s:0,l:0};function ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=Qf(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ku(o,s,e+1/3),this.g=ku(o,s,e),this.b=ku(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=Dv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return st.workingToColorSpace(ln.copy(this),e),Math.round(Ke(ln.r*255,0,255))*65536+Math.round(Ke(ln.g*255,0,255))*256+Math.round(Ke(ln.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(ln.copy(this),n);const i=ln.r,r=ln.g,s=ln.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Wn){st.workingToColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(ll);const i=ta(ir.h,ll.h,n),r=ta(ir.s,ll.s,n),s=ta(ir.l,ll.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Je;Je.NAMES=Dv;let lM=0;class mo extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=Xs,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=eh,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qd&&(i.blendSrc=this.blendSrc),this.blendDst!==eh&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class na extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new R,cl=new Ne;let cM=0;class wi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Im,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bs(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bs(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bs(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Im&&(e.usage=this.usage),e}}class Iv extends wi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Uv extends wi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xt extends wi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let uM=0;const Gn=new Et,Ou=new nn,xs=new R,Ln=new Ia,Lo=new Ia,jt=new R;class Kt extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nv(e)?Uv:Iv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,i){return Gn.makeTranslation(e,n,i),this.applyMatrix4(Gn),this}scale(e,n,i){return Gn.makeScale(e,n,i),this.applyMatrix4(Gn),this}lookAt(e){return Ou.lookAt(e),Ou.updateMatrix(),this.applyMatrix4(Ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ia);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Ln.min,Lo.min),Ln.expandByPoint(jt),jt.addVectors(Ln.max,Lo.max),Ln.expandByPoint(jt)):(Ln.expandByPoint(Lo.min),Ln.expandByPoint(Lo.max))}Ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),jt.add(xs)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new R,l[N]=new R;const c=new R,u=new R,h=new R,f=new Ne,p=new Ne,g=new Ne,v=new R,m=new R;function d(N,E,T){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,T),f.fromBufferAttribute(s,N),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,T),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[N].add(v),a[E].add(v),a[T].add(v),l[N].add(m),l[E].add(m),l[T].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let N=0,E=_.length;N<E;++N){const T=_[N],D=T.start,F=T.count;for(let B=D,$=D+F;B<$;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new R,S=new R,w=new R,A=new R;function C(N){w.fromBufferAttribute(r,N),A.copy(w);const E=a[N];x.copy(E),x.sub(w.multiplyScalar(w.dot(E))).normalize(),S.crossVectors(A,E);const D=S.dot(l[N])<0?-1:1;o.setXYZW(N,x.x,x.y,x.z,D)}for(let N=0,E=_.length;N<E;++N){const T=_[N],D=T.start,F=T.count;for(let B=D,$=D+F;B<$;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new wi(f,u,h)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Km=new Et,Fr=new tp,ul=new zc,Zm=new R,dl=new R,hl=new R,fl=new R,zu=new R,pl=new R,Jm=new R,ml=new R;class Mt extends nn{constructor(e=new Kt,n=new na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(zu.fromBufferAttribute(h,e),o?pl.addScaledVector(zu,u):pl.addScaledVector(zu.sub(n),u))}n.add(pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(ul.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(ul,Zm)===null||Fr.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&(Km.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(Km),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,w=x;S<w;S+=3){const A=a.getX(S),C=a.getX(S+1),N=a.getX(S+2);r=gl(this,d,e,i,c,u,h,A,C,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=gl(this,o,e,i,c,u,h,_,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,w=x;S<w;S+=3){const A=S,C=S+1,N=S+2;r=gl(this,d,e,i,c,u,h,A,C,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=m,x=m+1,S=m+2;r=gl(this,o,e,i,c,u,h,_,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function dM(t,e,n,i,r,s,o,a){let l;if(e.side===Cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===br,a),l===null)return null;ml.copy(a),ml.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ml);return c<n.near||c>n.far?null:{distance:c,point:ml.clone(),object:t}}function gl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,dl),t.getVertexPosition(l,hl),t.getVertexPosition(c,fl);const u=dM(t,e,n,i,dl,hl,fl,Jm);if(u){const h=new R;ri.getBarycoord(Jm,dl,hl,fl,h),r&&(u.uv=ri.getInterpolatedAttribute(r,a,l,c,h,new Ne)),s&&(u.uv1=ri.getInterpolatedAttribute(s,a,l,c,h,new Ne)),o&&(u.normal=ri.getInterpolatedAttribute(o,a,l,c,h,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new R,materialIndex:0};ri.getNormal(dl,hl,fl,f.normal),u.face=f,u.barycoord=h}return u}class vi extends Kt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2));function g(v,m,d,_,x,S,w,A,C,N,E){const T=S/C,D=w/N,F=S/2,B=w/2,$=A/2,q=C+1,X=N+1;let G=0,z=0;const Z=new R;for(let H=0;H<X;H++){const ee=H*D-B;for(let Ce=0;Ce<q;Ce++){const Le=Ce*T-F;Z[v]=Le*_,Z[m]=ee*x,Z[d]=$,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[d]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(Ce/C),h.push(1-H/N),G+=1}}for(let H=0;H<N;H++)for(let ee=0;ee<C;ee++){const Ce=f+ee+q*H,Le=f+ee+q*(H+1),Be=f+(ee+1)+q*(H+1),nt=f+(ee+1)+q*H;l.push(Ce,Le,nt),l.push(Le,Be,nt),z+=6}a.addGroup(p,z,E),p+=z,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=oo(t[n]);for(const r in i)e[r]=i[r]}return e}function hM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Fv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const fM={clone:oo,merge:pn};var pM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pM,this.fragmentShader=mM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=hM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class kv extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new R,Qm=new Ne,eg=new Ne;class In extends kv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,Qm,eg),n.subVectors(eg,Qm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,Ss=1;class gM extends nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(ys,Ss,e,n);r.layers=this.layers,this.add(r);const s=new In(ys,Ss,e,n);s.layers=this.layers,this.add(s);const o=new In(ys,Ss,e,n);o.layers=this.layers,this.add(o);const a=new In(ys,Ss,e,n);a.layers=this.layers,this.add(a);const l=new In(ys,Ss,e,n);l.layers=this.layers,this.add(l);const c=new In(ys,Ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ov extends _n{constructor(e=[],n=is,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zv extends Mi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ov(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vi(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Gi});s.uniforms.tEquirect.value=n;const o=new Mt(r,s),a=n.minFilter;return n.minFilter===qr&&(n.minFilter=un),new gM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class zi extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _M={type:"move"};class Bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_M)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ip{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=n,this.far=i}clone(){return new ip(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vM extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class xM extends _n{constructor(e=null,n=1,i=1,r,s,o,a,l,c=en,u=en,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vu=new R,yM=new R,SM=new Xe;class cr{constructor(e=new R(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Vu.subVectors(i,n).cross(yM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||SM.getNormalMatrix(e),r=this.coplanarPoint(Vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new zc,MM=new Ne(.5,.5),_l=new R;class rp{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,o=new cr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],v=s[9],m=s[10],d=s[11],_=s[12],x=s[13],S=s[14],w=s[15];if(r[0].setComponents(c-o,p-u,d-g,w-_).normalize(),r[1].setComponents(c+o,p+u,d+g,w+_).normalize(),r[2].setComponents(c+a,p+h,d+v,w+x).normalize(),r[3].setComponents(c-a,p-h,d-v,w-x).normalize(),i)r[4].setComponents(l,f,m,S).normalize(),r[5].setComponents(c-l,p-f,d-m,w-S).normalize();else if(r[4].setComponents(c-l,p-f,d-m,w-S).normalize(),n===_i)r[5].setComponents(c+l,p+f,d+m,w+S).normalize();else if(n===gc)r[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const n=MM.distanceTo(e.center);return kr.radius=.7071067811865476+n,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_l.x=r.normal.x>0?e.max.x:e.min.x,_l.y=r.normal.y>0?e.max.y:e.min.y,_l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sp extends mo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vc=new R,xc=new R,tg=new Et,Do=new tp,vl=new zc,Gu=new R,ng=new R;class op extends nn{constructor(e=new Kt,n=new sp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)vc.fromBufferAttribute(n,r-1),xc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=vc.distanceTo(xc);e.setAttribute("lineDistance",new xt(i,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(r),vl.radius+=s,e.ray.intersectsSphere(vl)===!1)return;tg.copy(r).invert(),Do.copy(e.ray).applyMatrix4(tg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=u.getX(v),_=u.getX(v+1),x=xl(this,e,Do,l,d,_,v);x&&n.push(x)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),d=xl(this,e,Do,l,v,m,g-1);d&&n.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=xl(this,e,Do,l,v,v+1,v);d&&n.push(d)}if(this.isLineLoop){const v=xl(this,e,Do,l,g-1,p,g-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(vc.fromBufferAttribute(a,r),xc.fromBufferAttribute(a,s),n.distanceSqToSegment(vc,xc,Gu,ng)>i)return;Gu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Gu);if(!(c<e.near||c>e.far))return{distance:c,point:ng.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const ig=new R,rg=new R;class wM extends op{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)ig.fromBufferAttribute(n,r),rg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ig.distanceTo(rg);e.setAttribute("lineDistance",new xt(i,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ba extends _n{constructor(e,n,i=Ei,r,s,o,a=en,l=en,c,u=$i,h=1){if(u!==$i&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ep(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class EM extends ba{constructor(e,n=Ei,i=is,r,s,o=en,a=en,l,c=$i){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bv extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bc extends Kt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const v=[],m=i/2;let d=0;_(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(p,2));function _(){const S=new R,w=new R;let A=0;const C=(n-e)/i;for(let N=0;N<=s;N++){const E=[],T=N/s,D=T*(n-e)+e;for(let F=0;F<=r;F++){const B=F/r,$=B*l+a,q=Math.sin($),X=Math.cos($);w.x=D*q,w.y=-T*i+m,w.z=D*X,h.push(w.x,w.y,w.z),S.set(q,C,X).normalize(),f.push(S.x,S.y,S.z),p.push(B,1-T),E.push(g++)}v.push(E)}for(let N=0;N<r;N++)for(let E=0;E<s;E++){const T=v[E][N],D=v[E+1][N],F=v[E+1][N+1],B=v[E][N+1];(e>0||E!==0)&&(u.push(T,D,B),A+=3),(n>0||E!==s-1)&&(u.push(D,F,B),A+=3)}c.addGroup(d,A,0),d+=A}function x(S){const w=g,A=new Ne,C=new R;let N=0;const E=S===!0?e:n,T=S===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,m*T,0),f.push(0,T,0),p.push(.5,.5),g++;const D=g;for(let F=0;F<=r;F++){const $=F/r*l+a,q=Math.cos($),X=Math.sin($);C.x=E*X,C.y=m*T,C.z=E*q,h.push(C.x,C.y,C.z),f.push(0,T,0),A.x=q*.5+.5,A.y=X*.5*T+.5,p.push(A.x,A.y),g++}for(let F=0;F<r;F++){const B=w+F,$=D+F;S===!0?u.push($,$+1,B):u.push($+1,$,B),N+=3}c.addGroup(d,N,S===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ap extends Bc{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ap(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ne:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new R,r=[],s=[],o=[],a=new R,l=new Et;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ke(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ke(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vv extends Zi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ne){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class TM extends Vv{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function lp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const yl=new R,Hu=new lp,Wu=new lp,ju=new lp;class Bi extends Zi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new R){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(yl.subVectors(r[0],r[1]).add(r[0]),c=yl);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(yl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=yl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Hu.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,m),Wu.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,m),ju.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Hu.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Wu.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ju.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Hu.calc(l),Wu.calc(l),ju.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function bM(t,e){const n=1-t;return n*n*e}function AM(t,e){return 2*(1-t)*t*e}function CM(t,e){return t*t*e}function ia(t,e,n,i){return bM(t,e)+AM(t,n)+CM(t,i)}function RM(t,e){const n=1-t;return n*n*n*e}function PM(t,e){const n=1-t;return 3*n*n*t*e}function NM(t,e){return 3*(1-t)*t*t*e}function LM(t,e){return t*t*t*e}function ra(t,e,n,i,r){return RM(t,e)+PM(t,n)+NM(t,i)+LM(t,r)}class DM extends Zi{constructor(e=new Ne,n=new Ne,i=new Ne,r=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ne){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ra(e,r.x,s.x,o.x,a.x),ra(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class IM extends Zi{constructor(e=new R,n=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new R){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ra(e,r.x,s.x,o.x,a.x),ra(e,r.y,s.y,o.y,a.y),ra(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class UM extends Zi{constructor(e=new Ne,n=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ne){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ne){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class FM extends Zi{constructor(e=new R,n=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new R){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new R){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kM extends Zi{constructor(e=new Ne,n=new Ne,i=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ne){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ia(e,r.x,s.x,o.x),ia(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gv extends Zi{constructor(e=new R,n=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new R){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ia(e,r.x,s.x,o.x),ia(e,r.y,s.y,o.y),ia(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class OM extends Zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ne){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(sg(a,l.x,c.x,u.x,h.x),sg(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ne().fromArray(r))}return this}}var zM=Object.freeze({__proto__:null,ArcCurve:TM,CatmullRomCurve3:Bi,CubicBezierCurve:DM,CubicBezierCurve3:IM,EllipseCurve:Vv,LineCurve:UM,LineCurve3:FM,QuadraticBezierCurve:kM,QuadraticBezierCurve3:Gv,SplineCurve:OM});class ao extends Kt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=n/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const _=d*f-o;for(let x=0;x<c;x++){const S=x*h-s;g.push(S,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const x=_+c*d,S=_+c*(d+1),w=_+1+c*(d+1),A=_+1+c*d;p.push(x,S,A),p.push(S,w,A)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.widthSegments,e.heightSegments)}}class Aa extends Kt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new R,f=new R,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const _=[],x=d/i;let S=0;d===0&&o===0?S=.5/n:d===i&&l===Math.PI&&(S=-.5/n);for(let w=0;w<=n;w++){const A=w/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(A+S,1-x),_.push(c++)}u.push(_)}for(let d=0;d<i;d++)for(let _=0;_<n;_++){const x=u[d][_+1],S=u[d][_],w=u[d+1][_],A=u[d+1][_+1];(d!==0||o>0)&&p.push(x,S,A),(d!==i-1||l<Math.PI)&&p.push(S,w,A)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cp extends Kt{constructor(e=new Gv(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new Ne;let u=new R;const h=[],f=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(p,2));function v(){for(let x=0;x<n;x++)m(x);m(s===!1?n:0),_(),d()}function m(x){u=e.getPointAt(x/n,u);const S=o.normals[x],w=o.binormals[x];for(let A=0;A<=r;A++){const C=A/r*Math.PI*2,N=Math.sin(C),E=-Math.cos(C);l.x=E*S.x+N*w.x,l.y=E*S.y+N*w.y,l.z=E*S.z+N*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function d(){for(let x=1;x<=n;x++)for(let S=1;S<=r;S++){const w=(r+1)*(x-1)+(S-1),A=(r+1)*x+(S-1),C=(r+1)*x+S,N=(r+1)*(x-1)+S;g.push(w,A,N),g.push(A,C,N)}}function _(){for(let x=0;x<=n;x++)for(let S=0;S<=r;S++)c.x=x/n,c.y=S/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new cp(new zM[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class BM extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fi extends mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pv,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VM extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GM extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hv extends sp{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class up extends nn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Xu=new Et,og=new R,ag=new R;class Wv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;og.setFromMatrixPosition(e.matrixWorld),n.position.copy(og),ag.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ag),n.updateMatrixWorld(),Xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class HM extends Wv{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0}}class WM extends up{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new HM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class dp extends kv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class jM extends Wv{constructor(){super(new dp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lg extends up{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new jM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class XM extends up{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class YM extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const cg=new Et;class Sl{constructor(e,n,i=0,r=1/0){this.ray=new tp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new np,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):rt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return cg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cg),this}intersectObject(e,n=!0,i=[]){return Wh(e,this,i,n),i.sort(ug),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Wh(e[r],this,i,n);return i.sort(ug),i}}function ug(t,e){return t.distance-e.distance}function Wh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Wh(s[o],e,n,!0)}}class qM extends wM{constructor(e=10,n=10,i=4473924,r=8947848){i=new Je(i),r=new Je(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let f=0,p=0,g=-a;f<=n;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=f===s?i:r;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new Kt;u.setAttribute("position",new xt(l,3)),u.setAttribute("color",new xt(c,3));const h=new sp({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function dg(t,e,n,i){const r=$M(i);switch(n){case Av:return t*e;case Rv:return t*e/r.components*r.byteLength;case qf:return t*e/r.components*r.byteLength;case ro:return t*e*2/r.components*r.byteLength;case $f:return t*e*2/r.components*r.byteLength;case Cv:return t*e*3/r.components*r.byteLength;case si:return t*e*4/r.components*r.byteLength;case Kf:return t*e*4/r.components*r.byteLength;case Bl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fh:case mh:return Math.max(t,16)*Math.max(e,8)/4;case hh:case ph:return Math.max(t,8)*Math.max(e,8)/2;case gh:case _h:case xh:case yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vh:case Sh:case Mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case kh:case Oh:case zh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Bh:case Vh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Gh:case Hh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $M(t){switch(t){case Un:case wv:return{byteLength:1,components:1};case Ma:case Ev:case qi:return{byteLength:2,components:1};case Xf:case Yf:return{byteLength:2,components:4};case Ei:case jf:case gi:return{byteLength:4,components:1};case Tv:case bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wf}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ew=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ow=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_w=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ww=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ew=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Aw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Iw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ow=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ww=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$w=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ME=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_T=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ST=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:ZM,alphahash_pars_fragment:JM,alphamap_fragment:QM,alphamap_pars_fragment:ew,alphatest_fragment:tw,alphatest_pars_fragment:nw,aomap_fragment:iw,aomap_pars_fragment:rw,batching_pars_vertex:sw,batching_vertex:ow,begin_vertex:aw,beginnormal_vertex:lw,bsdfs:cw,iridescence_fragment:uw,bumpmap_pars_fragment:dw,clipping_planes_fragment:hw,clipping_planes_pars_fragment:fw,clipping_planes_pars_vertex:pw,clipping_planes_vertex:mw,color_fragment:gw,color_pars_fragment:_w,color_pars_vertex:vw,color_vertex:xw,common:yw,cube_uv_reflection_fragment:Sw,defaultnormal_vertex:Mw,displacementmap_pars_vertex:ww,displacementmap_vertex:Ew,emissivemap_fragment:Tw,emissivemap_pars_fragment:bw,colorspace_fragment:Aw,colorspace_pars_fragment:Cw,envmap_fragment:Rw,envmap_common_pars_fragment:Pw,envmap_pars_fragment:Nw,envmap_pars_vertex:Lw,envmap_physical_pars_fragment:Hw,envmap_vertex:Dw,fog_vertex:Iw,fog_pars_vertex:Uw,fog_fragment:Fw,fog_pars_fragment:kw,gradientmap_pars_fragment:Ow,lightmap_pars_fragment:zw,lights_lambert_fragment:Bw,lights_lambert_pars_fragment:Vw,lights_pars_begin:Gw,lights_toon_fragment:Ww,lights_toon_pars_fragment:jw,lights_phong_fragment:Xw,lights_phong_pars_fragment:Yw,lights_physical_fragment:qw,lights_physical_pars_fragment:$w,lights_fragment_begin:Kw,lights_fragment_maps:Zw,lights_fragment_end:Jw,logdepthbuf_fragment:Qw,logdepthbuf_pars_fragment:eE,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:rE,map_particle_fragment:sE,map_particle_pars_fragment:oE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:lE,morphinstance_vertex:cE,morphcolor_vertex:uE,morphnormal_vertex:dE,morphtarget_pars_vertex:hE,morphtarget_vertex:fE,normal_fragment_begin:pE,normal_fragment_maps:mE,normal_pars_fragment:gE,normal_pars_vertex:_E,normal_vertex:vE,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:yE,clearcoat_normal_fragment_maps:SE,clearcoat_pars_fragment:ME,iridescence_pars_fragment:wE,opaque_fragment:EE,packing:TE,premultiplied_alpha_fragment:bE,project_vertex:AE,dithering_fragment:CE,dithering_pars_fragment:RE,roughnessmap_fragment:PE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:DE,shadowmap_vertex:IE,shadowmask_pars_fragment:UE,skinbase_vertex:FE,skinning_pars_vertex:kE,skinning_vertex:OE,skinnormal_vertex:zE,specularmap_fragment:BE,specularmap_pars_fragment:VE,tonemapping_fragment:GE,tonemapping_pars_fragment:HE,transmission_fragment:WE,transmission_pars_fragment:jE,uv_pars_fragment:XE,uv_pars_vertex:YE,uv_vertex:qE,worldpos_vertex:$E,background_vert:KE,background_frag:ZE,backgroundCube_vert:JE,backgroundCube_frag:QE,cube_vert:eT,cube_frag:tT,depth_vert:nT,depth_frag:iT,distance_vert:rT,distance_frag:sT,equirect_vert:oT,equirect_frag:aT,linedashed_vert:lT,linedashed_frag:cT,meshbasic_vert:uT,meshbasic_frag:dT,meshlambert_vert:hT,meshlambert_frag:fT,meshmatcap_vert:pT,meshmatcap_frag:mT,meshnormal_vert:gT,meshnormal_frag:_T,meshphong_vert:vT,meshphong_frag:xT,meshphysical_vert:yT,meshphysical_frag:ST,meshtoon_vert:MT,meshtoon_frag:wT,points_vert:ET,points_frag:TT,shadow_vert:bT,shadow_frag:AT,sprite_vert:CT,sprite_frag:RT},me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},pi={basic:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:pn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:pn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:pn([me.points,me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:pn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:pn([me.common,me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:pn([me.sprite,me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:pn([me.common,me.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:pn([me.lights,me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};pi.physical={uniforms:pn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Ml={r:0,b:0,g:0},Or=new Ti,PT=new Et;function NT(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?n:e).get(S)),S}function v(x){let S=!1;const w=g(x);w===null?d(a,l):w&&w.isColor&&(d(w,1),S=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,S){const w=g(S);w&&(w.isCubeTexture||w.mapping===Oc)?(u===void 0&&(u=new Mt(new vi(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:oo(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Or.copy(S.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(PT.makeRotationFromEuler(Or)),u.material.toneMapped=st.getTransfer(w.colorSpace)!==dt,(h!==w||f!==w.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Mt(new ao(2,2),new bi({name:"BackgroundMaterial",uniforms:oo(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=st.getTransfer(w.colorSpace)!==dt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,S){x.getRGB(Ml,Fv(t)),i.buffers.color.setClear(Ml.r,Ml.g,Ml.b,S,o)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),l=S,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(a,l)},render:v,addToRenderList:m,dispose:_}}function LT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(T,D,F,B,$){let q=!1;const X=h(B,F,D);s!==X&&(s=X,c(s.object)),q=p(T,B,F,$),q&&g(T,B,F,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(T,D,F,B),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(T){return t.bindVertexArray(T)}function u(T){return t.deleteVertexArray(T)}function h(T,D,F){const B=F.wireframe===!0;let $=i[T.id];$===void 0&&($={},i[T.id]=$);let q=$[D.id];q===void 0&&(q={},$[D.id]=q);let X=q[B];return X===void 0&&(X=f(l()),q[B]=X),X}function f(T){const D=[],F=[],B=[];for(let $=0;$<n;$++)D[$]=0,F[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:B,object:T,attributes:{},index:null}}function p(T,D,F,B){const $=s.attributes,q=D.attributes;let X=0;const G=F.getAttributes();for(const z in G)if(G[z].location>=0){const H=$[z];let ee=q[z];if(ee===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor)),H===void 0||H.attribute!==ee||ee&&H.data!==ee.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function g(T,D,F,B){const $={},q=D.attributes;let X=0;const G=F.getAttributes();for(const z in G)if(G[z].location>=0){let H=q[z];H===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(H=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(H=T.instanceColor));const ee={};ee.attribute=H,H&&H.data&&(ee.data=H.data),$[z]=ee,X++}s.attributes=$,s.attributesNum=X,s.index=B}function v(){const T=s.newAttributes;for(let D=0,F=T.length;D<F;D++)T[D]=0}function m(T){d(T,0)}function d(T,D){const F=s.newAttributes,B=s.enabledAttributes,$=s.attributeDivisors;F[T]=1,B[T]===0&&(t.enableVertexAttribArray(T),B[T]=1),$[T]!==D&&(t.vertexAttribDivisor(T,D),$[T]=D)}function _(){const T=s.newAttributes,D=s.enabledAttributes;for(let F=0,B=D.length;F<B;F++)D[F]!==T[F]&&(t.disableVertexAttribArray(F),D[F]=0)}function x(T,D,F,B,$,q,X){X===!0?t.vertexAttribIPointer(T,D,F,$,q):t.vertexAttribPointer(T,D,F,B,$,q)}function S(T,D,F,B){v();const $=B.attributes,q=F.getAttributes(),X=D.defaultAttributeValues;for(const G in q){const z=q[G];if(z.location>=0){let Z=$[G];if(Z===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(Z=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(Z=T.instanceColor)),Z!==void 0){const H=Z.normalized,ee=Z.itemSize,Ce=e.get(Z);if(Ce===void 0)continue;const Le=Ce.buffer,Be=Ce.type,nt=Ce.bytesPerElement,J=Be===t.INT||Be===t.UNSIGNED_INT||Z.gpuType===jf;if(Z.isInterleavedBufferAttribute){const ne=Z.data,ve=ne.stride,Ve=Z.offset;if(ne.isInstancedInterleavedBuffer){for(let we=0;we<z.locationSize;we++)d(z.location+we,ne.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let we=0;we<z.locationSize;we++)m(z.location+we);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let we=0;we<z.locationSize;we++)x(z.location+we,ee/z.locationSize,Be,H,ve*nt,(Ve+ee/z.locationSize*we)*nt,J)}else{if(Z.isInstancedBufferAttribute){for(let ne=0;ne<z.locationSize;ne++)d(z.location+ne,Z.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ne=0;ne<z.locationSize;ne++)m(z.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let ne=0;ne<z.locationSize;ne++)x(z.location+ne,ee/z.locationSize,Be,H,ee*nt,ee/z.locationSize*ne*nt,J)}}else if(X!==void 0){const H=X[G];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(z.location,H);break;case 3:t.vertexAttrib3fv(z.location,H);break;case 4:t.vertexAttrib4fv(z.location,H);break;default:t.vertexAttrib1fv(z.location,H)}}}}_()}function w(){N();for(const T in i){const D=i[T];for(const F in D){const B=D[F];for(const $ in B)u(B[$].object),delete B[$];delete D[F]}delete i[T]}}function A(T){if(i[T.id]===void 0)return;const D=i[T.id];for(const F in D){const B=D[F];for(const $ in B)u(B[$].object),delete B[$];delete D[F]}delete i[T.id]}function C(T){for(const D in i){const F=i[D];if(F[T.id]===void 0)continue;const B=F[T.id];for(const $ in B)u(B[$].object),delete B[$];delete F[T.id]}}function N(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function DT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];n.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function IT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==si&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Un&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gi&&!N)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:S,maxSamples:w,samples:A}}function UT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new cr,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,x=_*4;let S=d.clippingState||null;l.value=S,S=u(g,f,x,p);for(let w=0;w!==x;++w)S[w]=n[w];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,S=p;x!==v;++x,S+=4)o.copy(h[x]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function FT(t){let e=new WeakMap;function n(o,a){return a===lh?o.mapping=is:a===ch&&(o.mapping=io),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lh||a===ch)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zv(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const mr=4,hg=[.125,.215,.35,.446,.526,.582],Wr=20,kT=256,Io=new dp,fg=new Je;let Yu=null,qu=0,$u=0,Ku=!1;const OT=new R;class pg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=OT}=s;Yu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,qu,$u),this._renderer.xr.enabled=Ku,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:qi,format:si,colorSpace:so,depthBuffer:!1},r=mg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zT(s)),this._blurMaterial=VT(s,e,n),this._ggxMaterial=BT(s,e,n)}return r}_compileMaterial(e){const n=new Mt(new Kt,e);this._renderer.compile(n,Io)}_sceneToCubeUV(e,n,i,r,s){const l=new In(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(fg),h.toneMapping=Si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new vi,new na({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,d=!0):(m.color.copy(fg),d=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const w=this._cubeSize;Ms(r,S*w,x>2?w:0,w,w),h.setRenderTarget(r),d&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===is||e.mapping===io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ms(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Io)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-mr?i-g+mr:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Ms(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(a,Io),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ms(e,m,d,3*v,2*v),r.setRenderTarget(e),r.render(a,Io)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Wr;m>Wr&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wr}`);const d=[];let _=0;for(let C=0;C<Wr;++C){const N=C/v,E=Math.exp(-N*N/2);d.push(E),C===0?_+=E:C<m&&(_+=2*E)}for(let C=0;C<d.length;C++)d[C]=d[C]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const S=this._sizeLods[r],w=3*S*(r>x-mr?r-x+mr:0),A=4*(this._cubeSize-S);Ms(n,w,A,3*S,2*S),l.setRenderTarget(n),l.render(h,Io)}}function zT(t){const e=[],n=[],i=[];let r=t;const s=t-mr+1+hg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-mr?l=hg[o-t+mr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,N=A>2?0:-1,E=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];_.set(E,v*g*A),x.set(f,m*g*A);const T=[A,A,A,A,A,A];S.set(T,d*g*A)}const w=new Kt;w.setAttribute("position",new wi(_,v)),w.setAttribute("uv",new wi(x,m)),w.setAttribute("faceIndex",new wi(S,d)),i.push(new Mt(w,null)),r>mr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function mg(t,e,n){const i=new Mi(t,e,n);return i.texture.mapping=Oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function BT(t,e,n){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function VT(t,e,n){const i=new Float32Array(Wr),r=new R(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function gg(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function _g(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===lh||l===ch,u=l===is||l===io;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new pg(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new pg(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function HT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ea("WebGLRenderer: "+i+" extension not supported."),r}}}function WT(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,S=_.length;x<S;x+=3){const w=_[x+0],A=_[x+1],C=_[x+2];f.push(w,A,A,C,C,w)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const w=x+0,A=x+1,C=x+2;f.push(w,A,A,C,C,w)}}else return;const m=new(Nv(f)?Uv:Iv)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function jT(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function h(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*v[_];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function XT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function YT(t,e,n){const i=new WeakMap,r=new Ut;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let T=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let w=a.attributes.position.count*S,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*A*4*h),N=new Lv(C,w,A,h);N.type=gi,N.needsUpdate=!0;const E=S*4;for(let D=0;D<h;D++){const F=d[D],B=_[D],$=x[D],q=w*A*4*D;for(let X=0;X<F.count;X++){const G=X*E;g===!0&&(r.fromBufferAttribute(F,X),C[q+G+0]=r.x,C[q+G+1]=r.y,C[q+G+2]=r.z,C[q+G+3]=0),v===!0&&(r.fromBufferAttribute(B,X),C[q+G+4]=r.x,C[q+G+5]=r.y,C[q+G+6]=r.z,C[q+G+7]=0),m===!0&&(r.fromBufferAttribute($,X),C[q+G+8]=r.x,C[q+G+9]=r.y,C[q+G+10]=r.z,C[q+G+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:N,size:new Ne(w,A)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function qT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const $T={[mv]:"LINEAR_TONE_MAPPING",[gv]:"REINHARD_TONE_MAPPING",[_v]:"CINEON_TONE_MAPPING",[vv]:"ACES_FILMIC_TONE_MAPPING",[yv]:"AGX_TONE_MAPPING",[Sv]:"NEUTRAL_TONE_MAPPING",[xv]:"CUSTOM_TONE_MAPPING"};function KT(t,e,n,i,r){const s=new Mi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new Mi(e,n,{type:qi,depthBuffer:!1,stencilBuffer:!1}),a=new Kt;a.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new xt([0,2,0,0,2,0],2));const l=new BM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Mt(a,l),u=new dp(-1,1,1,-1,0,1);let h=null,f=null,p=!1,g,v=null,m=[],d=!1;this.setSize=function(_,x){s.setSize(_,x),o.setSize(_,x);for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(_,x)}},this.setEffects=function(_){m=_,d=m.length>0&&m[0].isRenderPass===!0;const x=s.width,S=s.height;for(let w=0;w<m.length;w++){const A=m[w];A.setSize&&A.setSize(x,S)}},this.begin=function(_,x){if(p||_.toneMapping===Si&&m.length===0)return!1;if(v=x,x!==null){const S=x.width,w=x.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return d===!1&&_.setRenderTarget(s),g=_.toneMapping,_.toneMapping=Si,!0},this.hasRenderPass=function(){return d},this.end=function(_,x){_.toneMapping=g,p=!0;let S=s,w=o;for(let A=0;A<m.length;A++){const C=m[A];if(C.enabled!==!1&&(C.render(_,w,S,x),C.needsSwap!==!1)){const N=S;S=w,w=N}}if(h!==_.outputColorSpace||f!==_.toneMapping){h=_.outputColorSpace,f=_.toneMapping,l.defines={},st.getTransfer(h)===dt&&(l.defines.SRGB_TRANSFER="");const A=$T[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(v),_.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Xv=new _n,jh=new ba(1,1),Yv=new Lv,qv=new eM,$v=new Ov,vg=[],xg=[],yg=new Float32Array(16),Sg=new Float32Array(9),Mg=new Float32Array(4);function go(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=vg[r];if(s===void 0&&(s=new Float32Array(r),vg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gc(t,e){let n=xg[e];n===void 0&&(n=new Int32Array(e),xg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ZT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function e2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function t2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Ht(n,i))return;Mg.set(i),t.uniformMatrix2fv(this.addr,!1,Mg),Wt(n,i)}}function n2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Ht(n,i))return;Sg.set(i),t.uniformMatrix3fv(this.addr,!1,Sg),Wt(n,i)}}function i2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Ht(n,i))return;yg.set(i),t.uniformMatrix4fv(this.addr,!1,yg),Wt(n,i)}}function r2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function l2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function c2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function u2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function d2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function h2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(jh.compareFunction=n.isReversedDepthBuffer()?Jf:Zf,s=jh):s=Xv,n.setTexture2D(e||s,r)}function f2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||qv,r)}function p2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$v,r)}function m2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Yv,r)}function g2(t){switch(t){case 5126:return ZT;case 35664:return JT;case 35665:return QT;case 35666:return e2;case 35674:return t2;case 35675:return n2;case 35676:return i2;case 5124:case 35670:return r2;case 35667:case 35671:return s2;case 35668:case 35672:return o2;case 35669:case 35673:return a2;case 5125:return l2;case 36294:return c2;case 36295:return u2;case 36296:return d2;case 35678:case 36198:case 36298:case 36306:case 35682:return h2;case 35679:case 36299:case 36307:return f2;case 35680:case 36300:case 36308:case 36293:return p2;case 36289:case 36303:case 36311:case 36292:return m2}}function _2(t,e){t.uniform1fv(this.addr,e)}function v2(t,e){const n=go(e,this.size,2);t.uniform2fv(this.addr,n)}function x2(t,e){const n=go(e,this.size,3);t.uniform3fv(this.addr,n)}function y2(t,e){const n=go(e,this.size,4);t.uniform4fv(this.addr,n)}function S2(t,e){const n=go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function M2(t,e){const n=go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function w2(t,e){const n=go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function E2(t,e){t.uniform1iv(this.addr,e)}function T2(t,e){t.uniform2iv(this.addr,e)}function b2(t,e){t.uniform3iv(this.addr,e)}function A2(t,e){t.uniform4iv(this.addr,e)}function C2(t,e){t.uniform1uiv(this.addr,e)}function R2(t,e){t.uniform2uiv(this.addr,e)}function P2(t,e){t.uniform3uiv(this.addr,e)}function N2(t,e){t.uniform4uiv(this.addr,e)}function L2(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=jh:o=Xv;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function D2(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||qv,s[o])}function I2(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||$v,s[o])}function U2(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Yv,s[o])}function F2(t){switch(t){case 5126:return _2;case 35664:return v2;case 35665:return x2;case 35666:return y2;case 35674:return S2;case 35675:return M2;case 35676:return w2;case 5124:case 35670:return E2;case 35667:case 35671:return T2;case 35668:case 35672:return b2;case 35669:case 35673:return A2;case 5125:return C2;case 36294:return R2;case 36295:return P2;case 36296:return N2;case 35678:case 36198:case 36298:case 36306:case 35682:return L2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return I2;case 36289:case 36303:case 36311:case 36292:return U2}}class k2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=g2(n.type)}}class O2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=F2(n.type)}}class z2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Zu=/(\w+)(\])?(\[|\.)?/g;function wg(t,e){t.seq.push(e),t.map[e.id]=e}function B2(t,e,n){const i=t.name,r=i.length;for(Zu.lastIndex=0;;){const s=Zu.exec(i),o=Zu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wg(n,c===void 0?new k2(a,t,e):new O2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new z2(a),wg(n,h)),n=h}}}class Wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);B2(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Eg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const V2=37297;let G2=0;function H2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Tg=new Xe;function W2(t){st._getMatrix(Tg,st.workingColorSpace,t);const e=`mat3( ${Tg.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case mc:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function bg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+H2(t.getShaderSource(e),a)}else return s}function j2(t,e){const n=W2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const X2={[mv]:"Linear",[gv]:"Reinhard",[_v]:"Cineon",[vv]:"ACESFilmic",[yv]:"AgX",[Sv]:"Neutral",[xv]:"Custom"};function Y2(t,e){const n=X2[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wl=new R;function q2(){st.getLuminanceCoefficients(wl);const t=wl.x.toFixed(4),e=wl.y.toFixed(4),n=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function K2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Z2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ho(t){return t!==""}function Ag(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(t){return t.replace(J2,eb)}const Q2=new Map;function eb(t,e){let n=qe[e];if(n===void 0){const i=Q2.get(e);if(i!==void 0)n=qe[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xh(n)}const tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rg(t){return t.replace(tb,nb)}function nb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ib={[zl]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function rb(t){return ib[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sb={[is]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[Oc]:"ENVMAP_TYPE_CUBE_UV"};function ob(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":sb[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const ab={[io]:"ENVMAP_MODE_REFRACTION"};function lb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":ab[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cb={[pv]:"ENVMAP_BLENDING_MULTIPLY",[yS]:"ENVMAP_BLENDING_MIX",[SS]:"ENVMAP_BLENDING_ADD"};function ub(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":cb[t.combine]||"ENVMAP_BLENDING_NONE"}function db(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=rb(n),c=ob(n),u=lb(n),h=ub(n),f=db(n),p=$2(n),g=K2(s),v=r.createProgram();let m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ho).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ho).join(`
`),d.length>0&&(d+=`
`)):(m=[Pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),d=[Pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?qe.tonemapping_pars_fragment:"",n.toneMapping!==Si?Y2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,j2("linearToOutputTexel",n.outputColorSpace),q2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),o=Xh(o),o=Ag(o,n),o=Cg(o,n),a=Xh(a),a=Ag(a,n),a=Cg(a,n),o=Rg(o),a=Rg(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Um?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=_+m+o,S=_+d+a,w=Eg(r,r.VERTEX_SHADER,x),A=Eg(r,r.FRAGMENT_SHADER,S);r.attachShader(v,w),r.attachShader(v,A),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(D){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",B=r.getShaderInfoLog(w)||"",$=r.getShaderInfoLog(A)||"",q=F.trim(),X=B.trim(),G=$.trim();let z=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,w,A);else{const H=bg(r,w,"vertex"),ee=bg(r,A,"fragment");rt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+H+`
`+ee)}else q!==""?ke("WebGLProgram: Program Info Log:",q):(X===""||G==="")&&(Z=!1);Z&&(D.diagnostics={runnable:z,programLog:q,vertexShader:{log:X,prefix:m},fragmentShader:{log:G,prefix:d}})}r.deleteShader(w),r.deleteShader(A),N=new Wl(r,v),E=Z2(r,v)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,V2)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=G2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=A,this}let fb=0;class pb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new mb(e),n.set(e,i)),i}}class mb{constructor(e){this.id=fb++,this.code=e,this.usedTimes=0}}function gb(t,e,n,i,r,s,o){const a=new np,l=new pb,c=new Set,u=[],h=new Map,f=r.logarithmicDepthBuffer;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,T,D,F,B){const $=F.fog,q=B.geometry,X=E.isMeshStandardMaterial?F.environment:null,G=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),z=G&&G.mapping===Oc?G.image.height:null,Z=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&ke("WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const H=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ee=H!==void 0?H.length:0;let Ce=0;q.morphAttributes.position!==void 0&&(Ce=1),q.morphAttributes.normal!==void 0&&(Ce=2),q.morphAttributes.color!==void 0&&(Ce=3);let Le,Be,nt,J;if(Z){const Re=pi[Z];Le=Re.vertexShader,Be=Re.fragmentShader}else Le=E.vertexShader,Be=E.fragmentShader,l.update(E),nt=l.getVertexShaderID(E),J=l.getFragmentShaderID(E);const ne=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),Ve=B.isInstancedMesh===!0,we=B.isBatchedMesh===!0,Ye=!!E.map,Ft=!!E.matcap,et=!!G,it=!!E.aoMap,ct=!!E.lightMap,Ge=!!E.bumpMap,Tt=!!E.normalMap,I=!!E.displacementMap,bt=!!E.emissiveMap,tt=!!E.metalnessMap,ft=!!E.roughnessMap,be=E.anisotropy>0,P=E.clearcoat>0,y=E.dispersion>0,k=E.iridescence>0,Q=E.sheen>0,te=E.transmission>0,K=be&&!!E.anisotropyMap,Ee=P&&!!E.clearcoatMap,de=P&&!!E.clearcoatNormalMap,Te=P&&!!E.clearcoatRoughnessMap,Ue=k&&!!E.iridescenceMap,se=k&&!!E.iridescenceThicknessMap,he=Q&&!!E.sheenColorMap,Se=Q&&!!E.sheenRoughnessMap,Ae=!!E.specularMap,ue=!!E.specularColorMap,ze=!!E.specularIntensityMap,U=te&&!!E.transmissionMap,ge=te&&!!E.thicknessMap,le=!!E.gradientMap,fe=!!E.alphaMap,ie=E.alphaTest>0,L=!!E.alphaHash,W=!!E.extensions;let re=Si;E.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(re=t.toneMapping);const ce={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:Le,fragmentShader:Be,defines:E.defines,customVertexShaderID:nt,customFragmentShaderID:J,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:we,batchingColor:we&&B._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&B.instanceColor!==null,instancingMorph:Ve&&B.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:so,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:Ft,envMap:et,envMapMode:et&&G.mapping,envMapCubeUVHeight:z,aoMap:it,lightMap:ct,bumpMap:Ge,normalMap:Tt,displacementMap:I,emissiveMap:bt,normalMapObjectSpace:Tt&&E.normalMapType===ES,normalMapTangentSpace:Tt&&E.normalMapType===Pv,metalnessMap:tt,roughnessMap:ft,anisotropy:be,anisotropyMap:K,clearcoat:P,clearcoatMap:Ee,clearcoatNormalMap:de,clearcoatRoughnessMap:Te,dispersion:y,iridescence:k,iridescenceMap:Ue,iridescenceThicknessMap:se,sheen:Q,sheenColorMap:he,sheenRoughnessMap:Se,specularMap:Ae,specularColorMap:ue,specularIntensityMap:ze,transmission:te,transmissionMap:U,thicknessMap:ge,gradientMap:le,opaque:E.transparent===!1&&E.blending===Xs&&E.alphaToCoverage===!1,alphaMap:fe,alphaTest:ie,alphaHash:L,combine:E.combine,mapUv:Ye&&v(E.map.channel),aoMapUv:it&&v(E.aoMap.channel),lightMapUv:ct&&v(E.lightMap.channel),bumpMapUv:Ge&&v(E.bumpMap.channel),normalMapUv:Tt&&v(E.normalMap.channel),displacementMapUv:I&&v(E.displacementMap.channel),emissiveMapUv:bt&&v(E.emissiveMap.channel),metalnessMapUv:tt&&v(E.metalnessMap.channel),roughnessMapUv:ft&&v(E.roughnessMap.channel),anisotropyMapUv:K&&v(E.anisotropyMap.channel),clearcoatMapUv:Ee&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(E.sheenRoughnessMap.channel),specularMapUv:Ae&&v(E.specularMap.channel),specularColorMapUv:ue&&v(E.specularColorMap.channel),specularIntensityMapUv:ze&&v(E.specularIntensityMap.channel),transmissionMapUv:U&&v(E.transmissionMap.channel),thicknessMapUv:ge&&v(E.thicknessMap.channel),alphaMapUv:fe&&v(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Tt||be),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(Ye||fe),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:re,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&st.getTransfer(E.map.colorSpace)===dt,decodeVideoTextureEmissive:bt&&E.emissiveMap.isVideoTexture===!0&&st.getTransfer(E.emissiveMap.colorSpace)===dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===Cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:W&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(W&&E.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function d(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)T.push(D),T.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(_(T,E),x(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function _(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function x(E,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const T=g[E.type];let D;if(T){const F=pi[T];D=fM.clone(F.uniforms)}else D=E.uniforms;return D}function w(E,T){let D=h.get(T);return D!==void 0?++D.usedTimes:(D=new hb(t,T,E,s),u.push(D),h.set(T,D)),D}function A(E){if(--E.usedTimes===0){const T=u.indexOf(E);u[T]=u[u.length-1],u.pop(),h.delete(E.cacheKey),E.destroy()}}function C(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:w,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:N}}function _b(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function vb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ng(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Lg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,g,v,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function a(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||vb),i.length>1&&i.sort(f||Ng),r.length>1&&r.sort(f||Ng)}function u(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function xb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Lg,t.set(i,[o])):r>=s.length?(o=new Lg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function yb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new R,color:new Je};break;case"SpotLight":n={position:new R,direction:new R,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new R,halfWidth:new R,halfHeight:new R};break}return t[e.id]=n,n}}}function Sb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Mb=0;function wb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Eb(t){const e=new yb,n=Sb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const r=new R,s=new Et,o=new Et;function a(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,_=0,x=0,S=0,w=0,A=0,C=0;c.sort(wb);for(let E=0,T=c.length;E<T;E++){const D=c[E],F=D.color,B=D.intensity,$=D.distance;let q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ro?q=D.shadow.map.texture:q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=F.r*B,h+=F.g*B,f+=F.b*B;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],B);C++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,z=n.get(D);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=D.shadow.matrix,_++}i.directional[p]=X,p++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(F).multiplyScalar(B),X.distance=$,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[v]=X;const G=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,G.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[v]=G.matrix,D.castShadow){const z=n.get(D);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=q,S++}v++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(F).multiplyScalar(B),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const G=D.shadow,z=n.get(D);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=X,g++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(B),X.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[d]=X,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==_||N.numPointShadows!==x||N.numSpotShadows!==S||N.numSpotMaps!==w||N.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=_,N.numPointShadows=x,N.numSpotShadows=S,N.numSpotMaps=w,N.numLightProbes=C,i.version=Mb++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const x=c[d];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Dg(t){const e=new Eb(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Tb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Dg(t),e.set(r,[a])):s>=o.length?(a=new Dg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ab=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cb=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Rb=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Ig=new Et,Uo=new R,Ju=new R;function Pb(t,e,n){let i=new rp;const r=new Ne,s=new Ne,o=new Ut,a=new VM,l=new GM,c={},u=n.maxTextureSize,h={[br]:Cn,[Cn]:br,[wn]:wn},f=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:bb,fragmentShader:Ab}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let d=this.type;this.render=function(A,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===fv&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=zl);const E=t.getRenderTarget(),T=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Gi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=d!==this.type;B&&C.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(q=>q.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,q=A.length;$<q;$++){const X=A[$],G=X.shadow;if(G===void 0){ke("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const z=G.getFrameExtents();if(r.multiply(z),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,G.mapSize.y=s.y)),G.map===null||B===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Go){if(X.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Mi(r.x,r.y,{format:ro,type:qi,minFilter:un,magFilter:un,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new ba(r.x,r.y,gi),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=$i,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en}else{X.isPointLight?(G.map=new zv(r.x),G.map.depthTexture=new EM(r.x,Ei)):(G.map=new Mi(r.x,r.y),G.map.depthTexture=new ba(r.x,r.y,Ei)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=$i;const H=t.state.buffers.depth.getReversed();this.type===zl?(G.map.depthTexture.compareFunction=H?Jf:Zf,G.map.depthTexture.minFilter=un,G.map.depthTexture.magFilter=un):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en)}G.camera.updateProjectionMatrix()}const Z=G.map.isWebGLCubeRenderTarget?6:1;for(let H=0;H<Z;H++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,H),t.clear();else{H===0&&(t.setRenderTarget(G.map),t.clear());const ee=G.getViewport(H);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),F.viewport(o)}if(X.isPointLight){const ee=G.camera,Ce=G.matrix,Le=X.distance||ee.far;Le!==ee.far&&(ee.far=Le,ee.updateProjectionMatrix()),Uo.setFromMatrixPosition(X.matrixWorld),ee.position.copy(Uo),Ju.copy(ee.position),Ju.add(Cb[H]),ee.up.copy(Rb[H]),ee.lookAt(Ju),ee.updateMatrixWorld(),Ce.makeTranslation(-Uo.x,-Uo.y,-Uo.z),Ig.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ig,ee.coordinateSystem,ee.reversedDepth)}else G.updateMatrices(X);i=G.getFrustum(),S(C,N,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Go&&_(G,N),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(E,T,D)};function _(A,C){const N=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Mi(r.x,r.y,{format:ro,type:qi})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,N,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,N,p,v,null)}function x(A,C,N,E){let T=null;const D=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)T=D;else if(T=N.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=T.uuid,B=C.uuid;let $=c[F];$===void 0&&($={},c[F]=$);let q=$[B];q===void 0&&(q=T.clone(),$[B]=q,C.addEventListener("dispose",w)),T=q}if(T.visible=C.visible,T.wireframe=C.wireframe,E===Go?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:h[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const F=t.properties.get(T);F.light=N}return T}function S(A,C,N,E,T){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Go)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const B=e.update(A),$=A.material;if(Array.isArray($)){const q=B.groups;for(let X=0,G=q.length;X<G;X++){const z=q[X],Z=$[z.materialIndex];if(Z&&Z.visible){const H=x(A,Z,E,T);A.onBeforeShadow(t,A,C,N,B,H,z),t.renderBufferDirect(N,null,B,H,A,z),A.onAfterShadow(t,A,C,N,B,H,z)}}}else if($.visible){const q=x(A,$,E,T);A.onBeforeShadow(t,A,C,N,B,q,null),t.renderBufferDirect(N,null,B,q,A,null),A.onAfterShadow(t,A,C,N,B,q,null)}}const F=A.children;for(let B=0,$=F.length;B<$;B++)S(F[B],C,N,E,T)}function w(A){A.target.removeEventListener("dispose",w);for(const N in c){const E=c[N],T=A.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}const Nb={[th]:nh,[ih]:oh,[rh]:ah,[no]:sh,[nh]:th,[oh]:ih,[ah]:rh,[sh]:no};function Lb(t,e){function n(){let U=!1;const ge=new Ut;let le=null;const fe=new Ut(0,0,0,0);return{setMask:function(ie){le!==ie&&!U&&(t.colorMask(ie,ie,ie,ie),le=ie)},setLocked:function(ie){U=ie},setClear:function(ie,L,W,re,ce){ce===!0&&(ie*=re,L*=re,W*=re),ge.set(ie,L,W,re),fe.equals(ge)===!1&&(t.clearColor(ie,L,W,re),fe.copy(ge))},reset:function(){U=!1,le=null,fe.set(-1,0,0,0)}}}function i(){let U=!1,ge=!1,le=null,fe=null,ie=null;return{setReversed:function(L){if(ge!==L){const W=e.get("EXT_clip_control");L?W.clipControlEXT(W.LOWER_LEFT_EXT,W.ZERO_TO_ONE_EXT):W.clipControlEXT(W.LOWER_LEFT_EXT,W.NEGATIVE_ONE_TO_ONE_EXT),ge=L;const re=ie;ie=null,this.setClear(re)}},getReversed:function(){return ge},setTest:function(L){L?ne(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(L){le!==L&&!U&&(t.depthMask(L),le=L)},setFunc:function(L){if(ge&&(L=Nb[L]),fe!==L){switch(L){case th:t.depthFunc(t.NEVER);break;case nh:t.depthFunc(t.ALWAYS);break;case ih:t.depthFunc(t.LESS);break;case no:t.depthFunc(t.LEQUAL);break;case rh:t.depthFunc(t.EQUAL);break;case sh:t.depthFunc(t.GEQUAL);break;case oh:t.depthFunc(t.GREATER);break;case ah:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=L}},setLocked:function(L){U=L},setClear:function(L){ie!==L&&(ge&&(L=1-L),t.clearDepth(L),ie=L)},reset:function(){U=!1,le=null,fe=null,ie=null,ge=!1}}}function r(){let U=!1,ge=null,le=null,fe=null,ie=null,L=null,W=null,re=null,ce=null;return{setTest:function(Re){U||(Re?ne(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(Re){ge!==Re&&!U&&(t.stencilMask(Re),ge=Re)},setFunc:function(Re,gt,kt){(le!==Re||fe!==gt||ie!==kt)&&(t.stencilFunc(Re,gt,kt),le=Re,fe=gt,ie=kt)},setOp:function(Re,gt,kt){(L!==Re||W!==gt||re!==kt)&&(t.stencilOp(Re,gt,kt),L=Re,W=gt,re=kt)},setLocked:function(Re){U=Re},setClear:function(Re){ce!==Re&&(t.clearStencil(Re),ce=Re)},reset:function(){U=!1,ge=null,le=null,fe=null,ie=null,L=null,W=null,re=null,ce=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,_=null,x=null,S=null,w=null,A=null,C=new Je(0,0,0),N=0,E=!1,T=null,D=null,F=null,B=null,$=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=G>=2);let Z=null,H={};const ee=t.getParameter(t.SCISSOR_BOX),Ce=t.getParameter(t.VIEWPORT),Le=new Ut().fromArray(ee),Be=new Ut().fromArray(Ce);function nt(U,ge,le,fe){const ie=new Uint8Array(4),L=t.createTexture();t.bindTexture(U,L),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let W=0;W<le;W++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(ge+W,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return L}const J={};J[t.TEXTURE_2D]=nt(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=nt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=nt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=nt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(no),Ge(!1),Tt(Rm),ne(t.CULL_FACE),it(Gi);function ne(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function ve(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function Ve(U,ge){return h[U]!==ge?(t.bindFramebuffer(U,ge),h[U]=ge,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ge),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function we(U,ge){let le=p,fe=!1;if(U){le=f.get(ge),le===void 0&&(le=[],f.set(ge,le));const ie=U.textures;if(le.length!==ie.length||le[0]!==t.COLOR_ATTACHMENT0){for(let L=0,W=ie.length;L<W;L++)le[L]=t.COLOR_ATTACHMENT0+L;le.length=ie.length,fe=!0}}else le[0]!==t.BACK&&(le[0]=t.BACK,fe=!0);fe&&t.drawBuffers(le)}function Ye(U){return g!==U?(t.useProgram(U),g=U,!0):!1}const Ft={[Hr]:t.FUNC_ADD,[iS]:t.FUNC_SUBTRACT,[rS]:t.FUNC_REVERSE_SUBTRACT};Ft[sS]=t.MIN,Ft[oS]=t.MAX;const et={[aS]:t.ZERO,[lS]:t.ONE,[cS]:t.SRC_COLOR,[Qd]:t.SRC_ALPHA,[mS]:t.SRC_ALPHA_SATURATE,[fS]:t.DST_COLOR,[dS]:t.DST_ALPHA,[uS]:t.ONE_MINUS_SRC_COLOR,[eh]:t.ONE_MINUS_SRC_ALPHA,[pS]:t.ONE_MINUS_DST_COLOR,[hS]:t.ONE_MINUS_DST_ALPHA,[gS]:t.CONSTANT_COLOR,[_S]:t.ONE_MINUS_CONSTANT_COLOR,[vS]:t.CONSTANT_ALPHA,[xS]:t.ONE_MINUS_CONSTANT_ALPHA};function it(U,ge,le,fe,ie,L,W,re,ce,Re){if(U===Gi){v===!0&&(ve(t.BLEND),v=!1);return}if(v===!1&&(ne(t.BLEND),v=!0),U!==nS){if(U!==m||Re!==E){if((d!==Hr||S!==Hr)&&(t.blendEquation(t.FUNC_ADD),d=Hr,S=Hr),Re)switch(U){case Xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pm:t.blendFunc(t.ONE,t.ONE);break;case Nm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:rt("WebGLState: Invalid blending: ",U);break}else switch(U){case Xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Nm:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lm:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",U);break}_=null,x=null,w=null,A=null,C.set(0,0,0),N=0,m=U,E=Re}return}ie=ie||ge,L=L||le,W=W||fe,(ge!==d||ie!==S)&&(t.blendEquationSeparate(Ft[ge],Ft[ie]),d=ge,S=ie),(le!==_||fe!==x||L!==w||W!==A)&&(t.blendFuncSeparate(et[le],et[fe],et[L],et[W]),_=le,x=fe,w=L,A=W),(re.equals(C)===!1||ce!==N)&&(t.blendColor(re.r,re.g,re.b,ce),C.copy(re),N=ce),m=U,E=!1}function ct(U,ge){U.side===wn?ve(t.CULL_FACE):ne(t.CULL_FACE);let le=U.side===Cn;ge&&(le=!le),Ge(le),U.blending===Xs&&U.transparent===!1?it(Gi):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const fe=U.stencilWrite;a.setTest(fe),fe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){T!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),T=U)}function Tt(U){U!==eS?(ne(t.CULL_FACE),U!==D&&(U===Rm?t.cullFace(t.BACK):U===tS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),D=U}function I(U){U!==F&&(X&&t.lineWidth(U),F=U)}function bt(U,ge,le){U?(ne(t.POLYGON_OFFSET_FILL),(B!==ge||$!==le)&&(t.polygonOffset(ge,le),B=ge,$=le)):ve(t.POLYGON_OFFSET_FILL)}function tt(U){U?ne(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function ft(U){U===void 0&&(U=t.TEXTURE0+q-1),Z!==U&&(t.activeTexture(U),Z=U)}function be(U,ge,le){le===void 0&&(Z===null?le=t.TEXTURE0+q-1:le=Z);let fe=H[le];fe===void 0&&(fe={type:void 0,texture:void 0},H[le]=fe),(fe.type!==U||fe.texture!==ge)&&(Z!==le&&(t.activeTexture(le),Z=le),t.bindTexture(U,ge||J[U]),fe.type=U,fe.texture=ge)}function P(){const U=H[Z];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{t.compressedTexImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function k(){try{t.compressedTexImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function Q(){try{t.texSubImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function te(){try{t.texSubImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function de(){try{t.texStorage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function Te(){try{t.texStorage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function Ue(){try{t.texImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function se(){try{t.texImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function he(U){Le.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Le.copy(U))}function Se(U){Be.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Be.copy(U))}function Ae(U,ge){let le=c.get(ge);le===void 0&&(le=new WeakMap,c.set(ge,le));let fe=le.get(U);fe===void 0&&(fe=t.getUniformBlockIndex(ge,U.name),le.set(U,fe))}function ue(U,ge){const fe=c.get(ge).get(U);l.get(ge)!==fe&&(t.uniformBlockBinding(ge,fe,U.__bindingPointIndex),l.set(ge,fe))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},Z=null,H={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,_=null,x=null,S=null,w=null,A=null,C=new Je(0,0,0),N=0,E=!1,T=null,D=null,F=null,B=null,$=null,Le.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ve,bindFramebuffer:Ve,drawBuffers:we,useProgram:Ye,setBlending:it,setMaterial:ct,setFlipSided:Ge,setCullFace:Tt,setLineWidth:I,setPolygonOffset:bt,setScissorTest:tt,activeTexture:ft,bindTexture:be,unbindTexture:P,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:Ue,texImage3D:se,updateUBOMapping:Ae,uniformBlockBinding:ue,texStorage2D:de,texStorage3D:Te,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:K,compressedTexSubImage3D:Ee,scissor:he,viewport:Se,reset:ze}}function Db(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,y){return p?new OffscreenCanvas(P,y):_c("canvas")}function v(P,y,k){let Q=1;const te=be(P);if((te.width>k||te.height>k)&&(Q=k/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(Q*te.width),Ee=Math.floor(Q*te.height);h===void 0&&(h=g(K,Ee));const de=y?g(K,Ee):h;return de.width=K,de.height=Ee,de.getContext("2d").drawImage(P,0,0,K,Ee),ke("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Ee+")."),de}else return"data"in P&&ke("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){t.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(P,y,k,Q,te=!1){if(P!==null){if(t[P]!==void 0)return t[P];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=y;if(y===t.RED&&(k===t.FLOAT&&(K=t.R32F),k===t.HALF_FLOAT&&(K=t.R16F),k===t.UNSIGNED_BYTE&&(K=t.R8)),y===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.R8UI),k===t.UNSIGNED_SHORT&&(K=t.R16UI),k===t.UNSIGNED_INT&&(K=t.R32UI),k===t.BYTE&&(K=t.R8I),k===t.SHORT&&(K=t.R16I),k===t.INT&&(K=t.R32I)),y===t.RG&&(k===t.FLOAT&&(K=t.RG32F),k===t.HALF_FLOAT&&(K=t.RG16F),k===t.UNSIGNED_BYTE&&(K=t.RG8)),y===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RG8UI),k===t.UNSIGNED_SHORT&&(K=t.RG16UI),k===t.UNSIGNED_INT&&(K=t.RG32UI),k===t.BYTE&&(K=t.RG8I),k===t.SHORT&&(K=t.RG16I),k===t.INT&&(K=t.RG32I)),y===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGB8UI),k===t.UNSIGNED_SHORT&&(K=t.RGB16UI),k===t.UNSIGNED_INT&&(K=t.RGB32UI),k===t.BYTE&&(K=t.RGB8I),k===t.SHORT&&(K=t.RGB16I),k===t.INT&&(K=t.RGB32I)),y===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),k===t.UNSIGNED_INT&&(K=t.RGBA32UI),k===t.BYTE&&(K=t.RGBA8I),k===t.SHORT&&(K=t.RGBA16I),k===t.INT&&(K=t.RGBA32I)),y===t.RGB&&(k===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),y===t.RGBA){const Ee=te?mc:st.getTransfer(Q);k===t.FLOAT&&(K=t.RGBA32F),k===t.HALF_FLOAT&&(K=t.RGBA16F),k===t.UNSIGNED_BYTE&&(K=Ee===dt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(P,y){let k;return P?y===null||y===Ei||y===wa?k=t.DEPTH24_STENCIL8:y===gi?k=t.DEPTH32F_STENCIL8:y===Ma&&(k=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ei||y===wa?k=t.DEPTH_COMPONENT24:y===gi?k=t.DEPTH_COMPONENT32F:y===Ma&&(k=t.DEPTH_COMPONENT16),k}function w(P,y){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==un?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function A(P){const y=P.target;y.removeEventListener("dispose",A),N(y),y.isVideoTexture&&u.delete(y)}function C(P){const y=P.target;y.removeEventListener("dispose",C),T(y)}function N(P){const y=i.get(P);if(y.__webglInit===void 0)return;const k=P.source,Q=f.get(k);if(Q){const te=Q[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(P),Object.keys(Q).length===0&&f.delete(k)}i.remove(P)}function E(P){const y=i.get(P);t.deleteTexture(y.__webglTexture);const k=P.source,Q=f.get(k);delete Q[y.__cacheKey],o.memory.textures--}function T(P){const y=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let te=0;te<y.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(y.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)t.deleteFramebuffer(y.__webglFramebuffer[Q]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=P.textures;for(let Q=0,te=k.length;Q<te;Q++){const K=i.get(k[Q]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(P)}let D=0;function F(){D=0}function B(){const P=D;return P>=r.maxTextures&&ke("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function $(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function q(P,y){const k=i.get(P);if(P.isVideoTexture&&tt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const Q=P.image;if(Q===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{J(k,P,y);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+y)}function X(P,y){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){J(k,P,y);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+y)}function G(P,y){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){J(k,P,y);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+y)}function z(P,y){const k=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){ne(k,P,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+y)}const Z={[uh]:t.REPEAT,[Oi]:t.CLAMP_TO_EDGE,[dh]:t.MIRRORED_REPEAT},H={[en]:t.NEAREST,[MS]:t.NEAREST_MIPMAP_NEAREST,[el]:t.NEAREST_MIPMAP_LINEAR,[un]:t.LINEAR,[vu]:t.LINEAR_MIPMAP_NEAREST,[qr]:t.LINEAR_MIPMAP_LINEAR},ee={[TS]:t.NEVER,[PS]:t.ALWAYS,[bS]:t.LESS,[Zf]:t.LEQUAL,[AS]:t.EQUAL,[Jf]:t.GEQUAL,[CS]:t.GREATER,[RS]:t.NOTEQUAL};function Ce(P,y){if(y.type===gi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===un||y.magFilter===vu||y.magFilter===el||y.magFilter===qr||y.minFilter===un||y.minFilter===vu||y.minFilter===el||y.minFilter===qr)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,Z[y.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,Z[y.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,Z[y.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,H[y.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,H[y.minFilter]),y.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===en||y.minFilter!==el&&y.minFilter!==qr||y.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Le(P,y){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",A));const Q=y.source;let te=f.get(Q);te===void 0&&(te={},f.set(Q,te));const K=$(y);if(K!==P.__cacheKey){te[K]===void 0&&(te[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[K].usedTimes++;const Ee=te[P.__cacheKey];Ee!==void 0&&(te[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(y)),P.__cacheKey=K,P.__webglTexture=te[K].texture}return k}function Be(P,y,k){return Math.floor(Math.floor(P/k)/y)}function nt(P,y,k,Q){const K=P.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,k,Q,y.data);else{K.sort((se,he)=>se.start-he.start);let Ee=0;for(let se=1;se<K.length;se++){const he=K[Ee],Se=K[se],Ae=he.start+he.count,ue=Be(Se.start,y.width,4),ze=Be(he.start,y.width,4);Se.start<=Ae+1&&ue===ze&&Be(Se.start+Se.count-1,y.width,4)===ue?he.count=Math.max(he.count,Se.start+Se.count-he.start):(++Ee,K[Ee]=Se)}K.length=Ee+1;const de=t.getParameter(t.UNPACK_ROW_LENGTH),Te=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let se=0,he=K.length;se<he;se++){const Se=K[se],Ae=Math.floor(Se.start/4),ue=Math.ceil(Se.count/4),ze=Ae%y.width,U=Math.floor(Ae/y.width),ge=ue,le=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,ze,U,ge,le,k,Q,y.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,de),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function J(P,y,k){let Q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=t.TEXTURE_3D);const te=Le(P,y),K=y.source;n.bindTexture(Q,P.__webglTexture,t.TEXTURE0+k);const Ee=i.get(K);if(K.version!==Ee.__version||te===!0){n.activeTexture(t.TEXTURE0+k);const de=st.getPrimaries(st.workingColorSpace),Te=y.colorSpace===hr?null:st.getPrimaries(y.colorSpace),Ue=y.colorSpace===hr||de===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let se=v(y.image,!1,r.maxTextureSize);se=ft(y,se);const he=s.convert(y.format,y.colorSpace),Se=s.convert(y.type);let Ae=x(y.internalFormat,he,Se,y.colorSpace,y.isVideoTexture);Ce(Q,y);let ue;const ze=y.mipmaps,U=y.isVideoTexture!==!0,ge=Ee.__version===void 0||te===!0,le=K.dataReady,fe=w(y,se);if(y.isDepthTexture)Ae=S(y.format===$r,y.type),ge&&(U?n.texStorage2D(t.TEXTURE_2D,1,Ae,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ae,se.width,se.height,0,he,Se,null));else if(y.isDataTexture)if(ze.length>0){U&&ge&&n.texStorage2D(t.TEXTURE_2D,fe,Ae,ze[0].width,ze[0].height);for(let ie=0,L=ze.length;ie<L;ie++)ue=ze[ie],U?le&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ue.width,ue.height,he,Se,ue.data):n.texImage2D(t.TEXTURE_2D,ie,Ae,ue.width,ue.height,0,he,Se,ue.data);y.generateMipmaps=!1}else U?(ge&&n.texStorage2D(t.TEXTURE_2D,fe,Ae,se.width,se.height),le&&nt(y,se,he,Se)):n.texImage2D(t.TEXTURE_2D,0,Ae,se.width,se.height,0,he,Se,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ae,ze[0].width,ze[0].height,se.depth);for(let ie=0,L=ze.length;ie<L;ie++)if(ue=ze[ie],y.format!==si)if(he!==null)if(U){if(le)if(y.layerUpdates.size>0){const W=dg(ue.width,ue.height,y.format,y.type);for(const re of y.layerUpdates){const ce=ue.data.subarray(re*W/ue.data.BYTES_PER_ELEMENT,(re+1)*W/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,re,ue.width,ue.height,1,he,ce)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,se.depth,he,ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Ae,ue.width,ue.height,se.depth,0,ue.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,se.depth,he,Se,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Ae,ue.width,ue.height,se.depth,0,he,Se,ue.data)}else{U&&ge&&n.texStorage2D(t.TEXTURE_2D,fe,Ae,ze[0].width,ze[0].height);for(let ie=0,L=ze.length;ie<L;ie++)ue=ze[ie],y.format!==si?he!==null?U?le&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,ue.width,ue.height,he,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Ae,ue.width,ue.height,0,ue.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?le&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ue.width,ue.height,he,Se,ue.data):n.texImage2D(t.TEXTURE_2D,ie,Ae,ue.width,ue.height,0,he,Se,ue.data)}else if(y.isDataArrayTexture)if(U){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ae,se.width,se.height,se.depth),le)if(y.layerUpdates.size>0){const ie=dg(se.width,se.height,y.format,y.type);for(const L of y.layerUpdates){const W=se.data.subarray(L*ie/se.data.BYTES_PER_ELEMENT,(L+1)*ie/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,L,se.width,se.height,1,he,Se,W)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,he,Se,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,se.width,se.height,se.depth,0,he,Se,se.data);else if(y.isData3DTexture)U?(ge&&n.texStorage3D(t.TEXTURE_3D,fe,Ae,se.width,se.height,se.depth),le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,he,Se,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,se.width,se.height,se.depth,0,he,Se,se.data);else if(y.isFramebufferTexture){if(ge)if(U)n.texStorage2D(t.TEXTURE_2D,fe,Ae,se.width,se.height);else{let ie=se.width,L=se.height;for(let W=0;W<fe;W++)n.texImage2D(t.TEXTURE_2D,W,Ae,ie,L,0,he,Se,null),ie>>=1,L>>=1}}else if(ze.length>0){if(U&&ge){const ie=be(ze[0]);n.texStorage2D(t.TEXTURE_2D,fe,Ae,ie.width,ie.height)}for(let ie=0,L=ze.length;ie<L;ie++)ue=ze[ie],U?le&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he,Se,ue):n.texImage2D(t.TEXTURE_2D,ie,Ae,he,Se,ue);y.generateMipmaps=!1}else if(U){if(ge){const ie=be(se);n.texStorage2D(t.TEXTURE_2D,fe,Ae,ie.width,ie.height)}le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Se,se)}else n.texImage2D(t.TEXTURE_2D,0,Ae,he,Se,se);m(y)&&d(Q),Ee.__version=K.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ne(P,y,k){if(y.image.length!==6)return;const Q=Le(P,y),te=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+k);const K=i.get(te);if(te.version!==K.__version||Q===!0){n.activeTexture(t.TEXTURE0+k);const Ee=st.getPrimaries(st.workingColorSpace),de=y.colorSpace===hr?null:st.getPrimaries(y.colorSpace),Te=y.colorSpace===hr||Ee===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ue=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,he=[];for(let L=0;L<6;L++)!Ue&&!se?he[L]=v(y.image[L],!0,r.maxCubemapSize):he[L]=se?y.image[L].image:y.image[L],he[L]=ft(y,he[L]);const Se=he[0],Ae=s.convert(y.format,y.colorSpace),ue=s.convert(y.type),ze=x(y.internalFormat,Ae,ue,y.colorSpace),U=y.isVideoTexture!==!0,ge=K.__version===void 0||Q===!0,le=te.dataReady;let fe=w(y,Se);Ce(t.TEXTURE_CUBE_MAP,y);let ie;if(Ue){U&&ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ze,Se.width,Se.height);for(let L=0;L<6;L++){ie=he[L].mipmaps;for(let W=0;W<ie.length;W++){const re=ie[W];y.format!==si?Ae!==null?U?le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,W,0,0,re.width,re.height,Ae,re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,W,ze,re.width,re.height,0,re.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,W,0,0,re.width,re.height,Ae,ue,re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,W,ze,re.width,re.height,0,Ae,ue,re.data)}}}else{if(ie=y.mipmaps,U&&ge){ie.length>0&&fe++;const L=be(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ze,L.width,L.height)}for(let L=0;L<6;L++)if(se){U?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,he[L].width,he[L].height,Ae,ue,he[L].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,ze,he[L].width,he[L].height,0,Ae,ue,he[L].data);for(let W=0;W<ie.length;W++){const ce=ie[W].image[L].image;U?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,W+1,0,0,ce.width,ce.height,Ae,ue,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,W+1,ze,ce.width,ce.height,0,Ae,ue,ce.data)}}else{U?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Ae,ue,he[L]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,ze,Ae,ue,he[L]);for(let W=0;W<ie.length;W++){const re=ie[W];U?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,W+1,0,0,Ae,ue,re.image[L]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,W+1,ze,Ae,ue,re.image[L])}}}m(y)&&d(t.TEXTURE_CUBE_MAP),K.__version=te.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ve(P,y,k,Q,te,K){const Ee=s.convert(k.format,k.colorSpace),de=s.convert(k.type),Te=x(k.internalFormat,Ee,de,k.colorSpace),Ue=i.get(y),se=i.get(k);if(se.__renderTarget=y,!Ue.__hasExternalTextures){const he=Math.max(1,y.width>>K),Se=Math.max(1,y.height>>K);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,K,Te,he,Se,y.depth,0,Ee,de,null):n.texImage2D(te,K,Te,he,Se,0,Ee,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),bt(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,te,se.__webglTexture,0,I(y)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,te,se.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(P,y,k){if(t.bindRenderbuffer(t.RENDERBUFFER,P),y.depthBuffer){const Q=y.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,K=S(y.stencilBuffer,te),Ee=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;bt(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(y),K,y.width,y.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(y),K,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,K,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,P)}else{const Q=y.textures;for(let te=0;te<Q.length;te++){const K=Q[te],Ee=s.convert(K.format,K.colorSpace),de=s.convert(K.type),Te=x(K.internalFormat,Ee,de,K.colorSpace);bt(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(y),Te,y.width,y.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(y),Te,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Te,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(P,y,k){const Q=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(y.depthTexture);if(te.__renderTarget=y,(!te.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q){if(te.__webglInit===void 0&&(te.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,y.depthTexture);const Ue=s.convert(y.depthTexture.format),se=s.convert(y.depthTexture.type);let he;y.depthTexture.format===$i?he=t.DEPTH_COMPONENT24:y.depthTexture.format===$r&&(he=t.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,he,y.width,y.height,0,Ue,se,null)}}else q(y.depthTexture,0);const K=te.__webglTexture,Ee=I(y),de=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,Te=y.depthTexture.format===$r?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===$i)bt(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Te,de,K,0,Ee):t.framebufferTexture2D(t.FRAMEBUFFER,Te,de,K,0);else if(y.depthTexture.format===$r)bt(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Te,de,K,0,Ee):t.framebufferTexture2D(t.FRAMEBUFFER,Te,de,K,0);else throw new Error("Unknown depthTexture format")}function Ye(P){const y=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=Q}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let Q=0;Q<6;Q++)we(y.__webglFramebuffer[Q],P,Q);else{const Q=P.texture.mipmaps;Q&&Q.length>0?we(y.__webglFramebuffer[0],P,0):we(y.__webglFramebuffer,P,0)}else if(k){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=t.createRenderbuffer(),Ve(y.__webglDepthbuffer[Q],P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,K)}}else{const Q=P.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Ve(y.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ft(P,y,k){const Q=i.get(P);y!==void 0&&ve(Q.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Ye(P)}function et(P){const y=P.texture,k=i.get(P),Q=i.get(y);P.addEventListener("dispose",C);const te=P.textures,K=P.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=y.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let Te=0;Te<y.mipmaps.length;Te++)k.__webglFramebuffer[de][Te]=t.createFramebuffer()}else k.__webglFramebuffer[de]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)k.__webglFramebuffer[de]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let de=0,Te=te.length;de<Te;de++){const Ue=i.get(te[de]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&bt(P)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const Te=te[de];k.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[de]);const Ue=s.convert(Te.format,Te.colorSpace),se=s.convert(Te.type),he=x(Te.internalFormat,Ue,se,Te.colorSpace,P.isXRRenderTarget===!0),Se=I(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,he,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,k.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),Ve(k.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let Te=0;Te<y.mipmaps.length;Te++)ve(k.__webglFramebuffer[de][Te],P,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Te);else ve(k.__webglFramebuffer[de],P,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(y)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let de=0,Te=te.length;de<Te;de++){const Ue=te[de],se=i.get(Ue);let he=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,se.__webglTexture),Ce(he,Ue),ve(k.__webglFramebuffer,P,Ue,t.COLOR_ATTACHMENT0+de,he,0),m(Ue)&&d(he)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,Q.__webglTexture),Ce(de,y),y.mipmaps&&y.mipmaps.length>0)for(let Te=0;Te<y.mipmaps.length;Te++)ve(k.__webglFramebuffer[Te],P,y,t.COLOR_ATTACHMENT0,de,Te);else ve(k.__webglFramebuffer,P,y,t.COLOR_ATTACHMENT0,de,0);m(y)&&d(de),n.unbindTexture()}P.depthBuffer&&Ye(P)}function it(P){const y=P.textures;for(let k=0,Q=y.length;k<Q;k++){const te=y[k];if(m(te)){const K=_(P),Ee=i.get(te).__webglTexture;n.bindTexture(K,Ee),d(K),n.unbindTexture()}}}const ct=[],Ge=[];function Tt(P){if(P.samples>0){if(bt(P)===!1){const y=P.textures,k=P.width,Q=P.height;let te=t.COLOR_BUFFER_BIT;const K=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(P),de=y.length>1;if(de)for(let Ue=0;Ue<y.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Te=P.texture.mipmaps;Te&&Te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ue=0;Ue<y.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ue]);const se=i.get(y[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,k,Q,0,0,k,Q,te,t.NEAREST),l===!0&&(ct.length=0,Ge.length=0,ct.push(t.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ct.push(K),Ge.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Ue=0;Ue<y.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ue]);const se=i.get(y[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const y=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function I(P){return Math.min(r.maxSamples,P.samples)}function bt(P){const y=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function tt(P){const y=o.render.frame;u.get(P)!==y&&(u.set(P,y),P.update())}function ft(P,y){const k=P.colorSpace,Q=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==so&&k!==hr&&(st.getTransfer(k)===dt?(Q!==si||te!==Un)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",k)),y}function be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=Ft,this.setupRenderTarget=et,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ib(t,e){function n(i,r=hr){let s;const o=st.getTransfer(r);if(i===Un)return t.UNSIGNED_BYTE;if(i===Xf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Yf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Tv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===bv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===wv)return t.BYTE;if(i===Ev)return t.SHORT;if(i===Ma)return t.UNSIGNED_SHORT;if(i===jf)return t.INT;if(i===Ei)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===qi)return t.HALF_FLOAT;if(i===Av)return t.ALPHA;if(i===Cv)return t.RGB;if(i===si)return t.RGBA;if(i===$i)return t.DEPTH_COMPONENT;if(i===$r)return t.DEPTH_STENCIL;if(i===Rv)return t.RED;if(i===qf)return t.RED_INTEGER;if(i===ro)return t.RG;if(i===$f)return t.RG_INTEGER;if(i===Kf)return t.RGBA_INTEGER;if(i===Bl||i===Vl||i===Gl||i===Hl)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hh||i===fh||i===ph||i===mh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ph)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gh||i===_h||i===vh||i===xh||i===yh||i===Sh||i===Mh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gh||i===_h)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===xh)return s.COMPRESSED_R11_EAC;if(i===yh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Sh)return s.COMPRESSED_RG11_EAC;if(i===Mh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wh||i===Eh||i===Th||i===bh||i===Ah||i===Ch||i===Rh||i===Ph||i===Nh||i===Lh||i===Dh||i===Ih||i===Uh||i===Fh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Th)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ah)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ch)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ph)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ih)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kh||i===Oh||i===zh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===kh)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bh||i===Vh||i===Gh||i===Hh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Bv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new bi({vertexShader:Ub,fragmentShader:Fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mt(new ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ob extends ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new kb,d={},_=n.getContextAttributes();let x=null,S=null;const w=[],A=[],C=new Ne;let N=null;const E=new In;E.viewport=new Ut;const T=new In;T.viewport=new Ut;const D=[E,T],F=new YM;let B=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=w[J];return ne===void 0&&(ne=new Bu,w[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=w[J];return ne===void 0&&(ne=new Bu,w[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=w[J];return ne===void 0&&(ne=new Bu,w[J]=ne),ne.getHandSpace()};function q(J){const ne=A.indexOf(J.inputSource);if(ne===-1)return;const ve=w[ne];ve!==void 0&&(ve.update(J.inputSource,J.frame,c||o),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",G);for(let J=0;J<w.length;J++){const ne=A[J];ne!==null&&(A[J]=null,w[J].disconnect(ne))}B=null,$=null,m.reset();for(const J in d)delete d[J];e.setRenderTarget(x),p=null,f=null,h=null,r=null,S=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",X),r.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ve=null,we=null;_.depth&&(we=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=_.stencil?$r:$i,Ve=_.stencil?wa:Ei);const Ye={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Mi(f.textureWidth,f.textureHeight,{format:si,type:Un,depthTexture:new ba(f.textureWidth,f.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Mi(p.framebufferWidth,p.framebufferHeight,{format:si,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(J){for(let ne=0;ne<J.removed.length;ne++){const ve=J.removed[ne],Ve=A.indexOf(ve);Ve>=0&&(A[Ve]=null,w[Ve].disconnect(ve))}for(let ne=0;ne<J.added.length;ne++){const ve=J.added[ne];let Ve=A.indexOf(ve);if(Ve===-1){for(let Ye=0;Ye<w.length;Ye++)if(Ye>=A.length){A.push(ve),Ve=Ye;break}else if(A[Ye]===null){A[Ye]=ve,Ve=Ye;break}if(Ve===-1)break}const we=w[Ve];we&&we.connect(ve)}}const z=new R,Z=new R;function H(J,ne,ve){z.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);const Ve=z.distanceTo(Z),we=ne.projectionMatrix.elements,Ye=ve.projectionMatrix.elements,Ft=we[14]/(we[10]-1),et=we[14]/(we[10]+1),it=(we[9]+1)/we[5],ct=(we[9]-1)/we[5],Ge=(we[8]-1)/we[0],Tt=(Ye[8]+1)/Ye[0],I=Ft*Ge,bt=Ft*Tt,tt=Ve/(-Ge+Tt),ft=tt*-Ge;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ft),J.translateZ(tt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const be=Ft+tt,P=et+tt,y=I-ft,k=bt+(Ve-ft),Q=it*et/P*be,te=ct*et/P*be;J.projectionMatrix.makePerspective(y,k,Q,te,be,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ee(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ne=J.near,ve=J.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),F.near=T.near=E.near=ne,F.far=T.far=E.far=ve,(B!==F.near||$!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,$=F.far),F.layers.mask=J.layers.mask|6,E.layers.mask=F.layers.mask&3,T.layers.mask=F.layers.mask&5;const Ve=J.parent,we=F.cameras;ee(F,Ve);for(let Ye=0;Ye<we.length;Ye++)ee(we[Ye],Ve);we.length===2?H(F,E,T):F.projectionMatrix.copy(E.projectionMatrix),Ce(J,F,Ve)};function Ce(J,ne,ve){ve===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ta*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(J){return d[J]};let Le=null;function Be(J,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ve=!1;ve.length!==F.cameras.length&&(F.cameras.length=0,Ve=!0);for(let et=0;et<ve.length;et++){const it=ve[et];let ct=null;if(p!==null)ct=p.getViewport(it);else{const Tt=h.getViewSubImage(f,it);ct=Tt.viewport,et===0&&(e.setRenderTargetTextures(S,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(S))}let Ge=D[et];Ge===void 0&&(Ge=new In,Ge.layers.enable(et),Ge.viewport=new Ut,D[et]=Ge),Ge.matrix.fromArray(it.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(it.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ct.x,ct.y,ct.width,ct.height),et===0&&(F.matrix.copy(Ge.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ve===!0&&F.cameras.push(Ge)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const et=h.getDepthInformation(ve[0]);et&&et.isValid&&et.texture&&m.init(et,r.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let et=0;et<ve.length;et++){const it=ve[et].camera;if(it){let ct=d[it];ct||(ct=new Bv,d[it]=ct);const Ge=h.getCameraImage(it);ct.sourceTexture=Ge}}}}for(let ve=0;ve<w.length;ve++){const Ve=A[ve],we=w[ve];Ve!==null&&we!==void 0&&we.update(Ve,ne,c||o)}Le&&Le(J,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const nt=new jv;nt.setAnimationLoop(Be),this.setAnimationLoop=function(J){Le=J},this.dispose=function(){}}}const zr=new Ti,zb=new Et;function Bb(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Fv(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Cn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Cn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),x=_.envMap,S=_.envMapRotation;x&&(m.envMap.value=x,zr.copy(S),zr.x*=-1,zr.y*=-1,zr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),m.envMapRotation.value.setFromMatrix4(zb.makeRotationFromEuler(zr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=x*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Cn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Vb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const S=x.program;i.uniformBlockBinding(_,S)}function c(_,x){let S=r[_.id];S===void 0&&(g(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(_,w);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function u(_){const x=h();_.__bindingPointIndex=x;const S=t.createBuffer(),w=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,w,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=r[_.id],S=_.uniforms,w=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,C=S.length;A<C;A++){const N=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,T=N.length;E<T;E++){const D=N[E];if(p(D,A,E,w)===!0){const F=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let q=0;q<B.length;q++){const X=B[q],G=v(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,F+$,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,$),$+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,x,S,w){const A=_.value,C=x+"_"+S;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const N=w[C];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return w[C]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(_){const x=_.uniforms;let S=0;const w=16;for(let C=0,N=x.length;C<N;C++){const E=Array.isArray(x[C])?x[C]:[x[C]];for(let T=0,D=E.length;T<D;T++){const F=E[T],B=Array.isArray(F.value)?F.value:[F.value];for(let $=0,q=B.length;$<q;$++){const X=B[$],G=v(X),z=S%w,Z=z%G.boundary,H=z+Z;S+=Z,H!==0&&w-H<G.storage&&(S+=w-H),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=G.storage}}}const A=S%w;return A>0&&(S+=w-A),_.__size=S,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const Gb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function Hb(){return di===null&&(di=new xM(Gb,16,16,ro,qi),di.name="DFG_LUT",di.minFilter=un,di.magFilter=un,di.wrapS=Oi,di.wrapT=Oi,di.generateMipmaps=!1,di.needsUpdate=!0),di}class Wb{constructor(e={}){const{canvas:n=NS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Un}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=p,m=new Set([Kf,$f,qf]),d=new Set([Un,Ei,Ma,wa,Xf,Yf]),_=new Uint32Array(4),x=new Int32Array(4);let S=null,w=null;const A=[],C=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let T=!1;this._outputColorSpace=Wn;let D=0,F=0,B=null,$=-1,q=null;const X=new Ut,G=new Ut;let z=null;const Z=new Je(0);let H=0,ee=n.width,Ce=n.height,Le=1,Be=null,nt=null;const J=new Ut(0,0,ee,Ce),ne=new Ut(0,0,ee,Ce);let ve=!1;const Ve=new rp;let we=!1,Ye=!1;const Ft=new Et,et=new R,it=new Ut,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function Tt(){return B===null?Le:1}let I=i;function bt(b,O){return n.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wf}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",Re,!1),I===null){const O="webgl2";if(I=bt(O,b),I===null)throw bt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw rt("WebGLRenderer: "+b.message),b}let tt,ft,be,P,y,k,Q,te,K,Ee,de,Te,Ue,se,he,Se,Ae,ue,ze,U,ge,le,fe,ie;function L(){tt=new HT(I),tt.init(),le=new Ib(I,tt),ft=new IT(I,tt,e,le),be=new Lb(I,tt),ft.reversedDepthBuffer&&f&&be.buffers.depth.setReversed(!0),P=new XT(I),y=new _b,k=new Db(I,tt,be,y,ft,le,P),Q=new FT(E),te=new GT(E),K=new KM(I),fe=new LT(I,K),Ee=new WT(I,K,P,fe),de=new qT(I,Ee,K,P),ze=new YT(I,ft,k),Se=new UT(y),Te=new gb(E,Q,te,tt,ft,fe,Se),Ue=new Bb(E,y),se=new xb,he=new Tb(tt),ue=new NT(E,Q,te,be,de,g,l),Ae=new Pb(E,de,ft),ie=new Vb(I,P,ft,be),U=new DT(I,tt,P),ge=new jT(I,tt,P),P.programs=Te.programs,E.capabilities=ft,E.extensions=tt,E.properties=y,E.renderLists=se,E.shadowMap=Ae,E.state=be,E.info=P}L(),v!==Un&&(N=new KT(v,n.width,n.height,r,s));const W=new Ob(E,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(b){b!==void 0&&(Le=b,this.setSize(ee,Ce,!1))},this.getSize=function(b){return b.set(ee,Ce)},this.setSize=function(b,O,Y=!0){if(W.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=b,Ce=O,n.width=Math.floor(b*Le),n.height=Math.floor(O*Le),Y===!0&&(n.style.width=b+"px",n.style.height=O+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(ee*Le,Ce*Le).floor()},this.setDrawingBufferSize=function(b,O,Y){ee=b,Ce=O,Le=Y,n.width=Math.floor(b*Y),n.height=Math.floor(O*Y),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(v===Un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(X)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,O,Y,j){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,O,Y,j),be.viewport(X.copy(J).multiplyScalar(Le).round())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,O,Y,j){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,O,Y,j),be.scissor(G.copy(ne).multiplyScalar(Le).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(b){be.setScissorTest(ve=b)},this.setOpaqueSort=function(b){Be=b},this.setTransparentSort=function(b){nt=b},this.getClearColor=function(b){return b.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,Y=!0){let j=0;if(b){let V=!1;if(B!==null){const pe=B.texture.format;V=m.has(pe)}if(V){const pe=B.texture.type,xe=d.has(pe),_e=ue.getClearColor(),Me=ue.getClearAlpha(),Pe=_e.r,Fe=_e.g,De=_e.b;xe?(_[0]=Pe,_[1]=Fe,_[2]=De,_[3]=Me,I.clearBufferuiv(I.COLOR,0,_)):(x[0]=Pe,x[1]=Fe,x[2]=De,x[3]=Me,I.clearBufferiv(I.COLOR,0,x))}else j|=I.COLOR_BUFFER_BIT}O&&(j|=I.DEPTH_BUFFER_BIT),Y&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",Re,!1),ue.dispose(),se.dispose(),he.dispose(),y.dispose(),Q.dispose(),te.dispose(),de.dispose(),fe.dispose(),ie.dispose(),Te.dispose(),W.dispose(),W.removeEventListener("sessionstart",fp),W.removeEventListener("sessionend",pp),Lr.stop()};function re(b){b.preventDefault(),km("WebGLRenderer: Context Lost."),T=!0}function ce(){km("WebGLRenderer: Context Restored."),T=!1;const b=P.autoReset,O=Ae.enabled,Y=Ae.autoUpdate,j=Ae.needsUpdate,V=Ae.type;L(),P.autoReset=b,Ae.enabled=O,Ae.autoUpdate=Y,Ae.needsUpdate=j,Ae.type=V}function Re(b){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function gt(b){const O=b.target;O.removeEventListener("dispose",gt),kt(O)}function kt(b){Pr(b),y.remove(b)}function Pr(b){const O=y.get(b).programs;O!==void 0&&(O.forEach(function(Y){Te.releaseProgram(Y)}),b.isShaderMaterial&&Te.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Y,j,V,pe){O===null&&(O=ct);const xe=V.isMesh&&V.matrixWorld.determinant()<0,_e=vx(b,O,Y,j,V);be.setMaterial(j,xe);let Me=Y.index,Pe=1;if(j.wireframe===!0){if(Me=Ee.getWireframeAttribute(Y),Me===void 0)return;Pe=2}const Fe=Y.drawRange,De=Y.attributes.position;let $e=Fe.start*Pe,pt=(Fe.start+Fe.count)*Pe;pe!==null&&($e=Math.max($e,pe.start*Pe),pt=Math.min(pt,(pe.start+pe.count)*Pe)),Me!==null?($e=Math.max($e,0),pt=Math.min(pt,Me.count)):De!=null&&($e=Math.max($e,0),pt=Math.min(pt,De.count));const Lt=pt-$e;if(Lt<0||Lt===1/0)return;fe.setup(V,j,_e,Y,Me);let Dt,mt=U;if(Me!==null&&(Dt=K.get(Me),mt=ge,mt.setIndex(Dt)),V.isMesh)j.wireframe===!0?(be.setLineWidth(j.wireframeLinewidth*Tt()),mt.setMode(I.LINES)):mt.setMode(I.TRIANGLES);else if(V.isLine){let Ie=j.linewidth;Ie===void 0&&(Ie=1),be.setLineWidth(Ie*Tt()),V.isLineSegments?mt.setMode(I.LINES):V.isLineLoop?mt.setMode(I.LINE_LOOP):mt.setMode(I.LINE_STRIP)}else V.isPoints?mt.setMode(I.POINTS):V.isSprite&&mt.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ea("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ie=V._multiDrawStarts,ut=V._multiDrawCounts,at=V._multiDrawCount,Rn=Me?K.get(Me).bytesPerElement:1,as=y.get(j).currentProgram.getUniforms();for(let Pn=0;Pn<at;Pn++)as.setValue(I,"_gl_DrawID",Pn),mt.render(Ie[Pn]/Rn,ut[Pn])}else if(V.isInstancedMesh)mt.renderInstances($e,Lt,V.count);else if(Y.isInstancedBufferGeometry){const Ie=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ut=Math.min(Y.instanceCount,Ie);mt.renderInstances($e,Lt,ut)}else mt.render($e,Lt)};function Nr(b,O,Y){b.transparent===!0&&b.side===wn&&b.forceSinglePass===!1?(b.side=Cn,b.needsUpdate=!0,Fa(b,O,Y),b.side=br,b.needsUpdate=!0,Fa(b,O,Y),b.side=wn):Fa(b,O,Y)}this.compile=function(b,O,Y=null){Y===null&&(Y=b),w=he.get(Y),w.init(O),C.push(w),Y.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),b!==Y&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();const j=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pe=V.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const _e=pe[xe];Nr(_e,Y,V),j.add(_e)}else Nr(pe,Y,V),j.add(pe)}),w=C.pop(),j},this.compileAsync=function(b,O,Y=null){const j=this.compile(b,O,Y);return new Promise(V=>{function pe(){if(j.forEach(function(xe){y.get(xe).currentProgram.isReady()&&j.delete(xe)}),j.size===0){V(b);return}setTimeout(pe,10)}tt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let xo=null;function _x(b){xo&&xo(b)}function fp(){Lr.stop()}function pp(){Lr.start()}const Lr=new jv;Lr.setAnimationLoop(_x),typeof self<"u"&&Lr.setContext(self),this.setAnimationLoop=function(b){xo=b,W.setAnimationLoop(b),b===null?Lr.stop():Lr.start()},W.addEventListener("sessionstart",fp),W.addEventListener("sessionend",pp),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const Y=W.enabled===!0&&W.isPresenting===!0,j=N!==null&&(B===null||Y)&&N.begin(E,B);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(O),O=W.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,O,B),w=he.get(b,C.length),w.init(O),C.push(w),Ft.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ve.setFromProjectionMatrix(Ft,_i,O.reversedDepth),Ye=this.localClippingEnabled,we=Se.init(this.clippingPlanes,Ye),S=se.get(b,A.length),S.init(),A.push(S),W.enabled===!0&&W.isPresenting===!0){const xe=E.xr.getDepthSensingMesh();xe!==null&&Wc(xe,O,-1/0,E.sortObjects)}Wc(b,O,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(Be,nt),Ge=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ge&&ue.addToRenderList(S,b),this.info.render.frame++,we===!0&&Se.beginShadows();const V=w.state.shadowsArray;if(Ae.render(V,b,O),we===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&N.hasRenderPass())===!1){const xe=S.opaque,_e=S.transmissive;if(w.setupLights(),O.isArrayCamera){const Me=O.cameras;if(_e.length>0)for(let Pe=0,Fe=Me.length;Pe<Fe;Pe++){const De=Me[Pe];gp(xe,_e,b,De)}Ge&&ue.render(b);for(let Pe=0,Fe=Me.length;Pe<Fe;Pe++){const De=Me[Pe];mp(S,b,De,De.viewport)}}else _e.length>0&&gp(xe,_e,b,O),Ge&&ue.render(b),mp(S,b,O)}B!==null&&F===0&&(k.updateMultisampleRenderTarget(B),k.updateRenderTargetMipmap(B)),j&&N.end(E),b.isScene===!0&&b.onAfterRender(E,b,O),fe.resetDefaultState(),$=-1,q=null,C.pop(),C.length>0?(w=C[C.length-1],we===!0&&Se.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function Wc(b,O,Y,j){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ve.intersectsSprite(b)){j&&it.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ft);const xe=de.update(b),_e=b.material;_e.visible&&S.push(b,xe,_e,Y,it.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ve.intersectsObject(b))){const xe=de.update(b),_e=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),it.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),it.copy(xe.boundingSphere.center)),it.applyMatrix4(b.matrixWorld).applyMatrix4(Ft)),Array.isArray(_e)){const Me=xe.groups;for(let Pe=0,Fe=Me.length;Pe<Fe;Pe++){const De=Me[Pe],$e=_e[De.materialIndex];$e&&$e.visible&&S.push(b,xe,$e,Y,it.z,De)}}else _e.visible&&S.push(b,xe,_e,Y,it.z,null)}}const pe=b.children;for(let xe=0,_e=pe.length;xe<_e;xe++)Wc(pe[xe],O,Y,j)}function mp(b,O,Y,j){const{opaque:V,transmissive:pe,transparent:xe}=b;w.setupLightsView(Y),we===!0&&Se.setGlobalState(E.clippingPlanes,Y),j&&be.viewport(X.copy(j)),V.length>0&&Ua(V,O,Y),pe.length>0&&Ua(pe,O,Y),xe.length>0&&Ua(xe,O,Y),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function gp(b,O,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[j.id]===void 0){const $e=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[j.id]=new Mi(1,1,{generateMipmaps:!0,type:$e?qi:Un,minFilter:qr,samples:ft.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const pe=w.state.transmissionRenderTarget[j.id],xe=j.viewport||X;pe.setSize(xe.z*E.transmissionResolutionScale,xe.w*E.transmissionResolutionScale);const _e=E.getRenderTarget(),Me=E.getActiveCubeFace(),Pe=E.getActiveMipmapLevel();E.setRenderTarget(pe),E.getClearColor(Z),H=E.getClearAlpha(),H<1&&E.setClearColor(16777215,.5),E.clear(),Ge&&ue.render(Y);const Fe=E.toneMapping;E.toneMapping=Si;const De=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),w.setupLightsView(j),we===!0&&Se.setGlobalState(E.clippingPlanes,j),Ua(b,Y,j),k.updateMultisampleRenderTarget(pe),k.updateRenderTargetMipmap(pe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let pt=0,Lt=O.length;pt<Lt;pt++){const Dt=O[pt],{object:mt,geometry:Ie,material:ut,group:at}=Dt;if(ut.side===wn&&mt.layers.test(j.layers)){const Rn=ut.side;ut.side=Cn,ut.needsUpdate=!0,_p(mt,Y,j,Ie,ut,at),ut.side=Rn,ut.needsUpdate=!0,$e=!0}}$e===!0&&(k.updateMultisampleRenderTarget(pe),k.updateRenderTargetMipmap(pe))}E.setRenderTarget(_e,Me,Pe),E.setClearColor(Z,H),De!==void 0&&(j.viewport=De),E.toneMapping=Fe}function Ua(b,O,Y){const j=O.isScene===!0?O.overrideMaterial:null;for(let V=0,pe=b.length;V<pe;V++){const xe=b[V],{object:_e,geometry:Me,group:Pe}=xe;let Fe=xe.material;Fe.allowOverride===!0&&j!==null&&(Fe=j),_e.layers.test(Y.layers)&&_p(_e,O,Y,Me,Fe,Pe)}}function _p(b,O,Y,j,V,pe){b.onBeforeRender(E,O,Y,j,V,pe),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(E,O,Y,j,b,pe),V.transparent===!0&&V.side===wn&&V.forceSinglePass===!1?(V.side=Cn,V.needsUpdate=!0,E.renderBufferDirect(Y,O,j,V,b,pe),V.side=br,V.needsUpdate=!0,E.renderBufferDirect(Y,O,j,V,b,pe),V.side=wn):E.renderBufferDirect(Y,O,j,V,b,pe),b.onAfterRender(E,O,Y,j,V,pe)}function Fa(b,O,Y){O.isScene!==!0&&(O=ct);const j=y.get(b),V=w.state.lights,pe=w.state.shadowsArray,xe=V.state.version,_e=Te.getParameters(b,V.state,pe,O,Y),Me=Te.getProgramCacheKey(_e);let Pe=j.programs;j.environment=b.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(b.isMeshStandardMaterial?te:Q).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Pe===void 0&&(b.addEventListener("dispose",gt),Pe=new Map,j.programs=Pe);let Fe=Pe.get(Me);if(Fe!==void 0){if(j.currentProgram===Fe&&j.lightsStateVersion===xe)return xp(b,_e),Fe}else _e.uniforms=Te.getUniforms(b),b.onBeforeCompile(_e,E),Fe=Te.acquireProgram(_e,Me),Pe.set(Me,Fe),j.uniforms=_e.uniforms;const De=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=Se.uniform),xp(b,_e),j.needsLights=yx(b),j.lightsStateVersion=xe,j.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMap.value=V.state.directionalShadowMap,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotShadowMap.value=V.state.spotShadowMap,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMap.value=V.state.pointShadowMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Fe,j.uniformsList=null,Fe}function vp(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Wl.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function xp(b,O){const Y=y.get(b);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function vx(b,O,Y,j,V){O.isScene!==!0&&(O=ct),k.resetTextureUnits();const pe=O.fog,xe=j.isMeshStandardMaterial?O.environment:null,_e=B===null?E.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:so,Me=(j.isMeshStandardMaterial?te:Q).get(j.envMap||xe),Pe=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Fe=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!Y.morphAttributes.position,$e=!!Y.morphAttributes.normal,pt=!!Y.morphAttributes.color;let Lt=Si;j.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Lt=E.toneMapping);const Dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mt=Dt!==void 0?Dt.length:0,Ie=y.get(j),ut=w.state.lights;if(we===!0&&(Ye===!0||b!==q)){const hn=b===q&&j.id===$;Se.setState(j,b,hn)}let at=!1;j.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==ut.state.version||Ie.outputColorSpace!==_e||V.isBatchedMesh&&Ie.batching===!1||!V.isBatchedMesh&&Ie.batching===!0||V.isBatchedMesh&&Ie.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ie.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ie.instancing===!1||!V.isInstancedMesh&&Ie.instancing===!0||V.isSkinnedMesh&&Ie.skinning===!1||!V.isSkinnedMesh&&Ie.skinning===!0||V.isInstancedMesh&&Ie.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ie.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ie.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ie.instancingMorph===!1&&V.morphTexture!==null||Ie.envMap!==Me||j.fog===!0&&Ie.fog!==pe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Se.numPlanes||Ie.numIntersection!==Se.numIntersection)||Ie.vertexAlphas!==Pe||Ie.vertexTangents!==Fe||Ie.morphTargets!==De||Ie.morphNormals!==$e||Ie.morphColors!==pt||Ie.toneMapping!==Lt||Ie.morphTargetsCount!==mt)&&(at=!0):(at=!0,Ie.__version=j.version);let Rn=Ie.currentProgram;at===!0&&(Rn=Fa(j,O,V));let as=!1,Pn=!1,yo=!1;const _t=Rn.getUniforms(),yn=Ie.uniforms;if(be.useProgram(Rn.program)&&(as=!0,Pn=!0,yo=!0),j.id!==$&&($=j.id,Pn=!0),as||q!==b){be.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),_t.setValue(I,"projectionMatrix",b.projectionMatrix),_t.setValue(I,"viewMatrix",b.matrixWorldInverse);const Sn=_t.map.cameraPosition;Sn!==void 0&&Sn.setValue(I,et.setFromMatrixPosition(b.matrixWorld)),ft.logarithmicDepthBuffer&&_t.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_t.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),q!==b&&(q=b,Pn=!0,yo=!0)}if(Ie.needsLights&&(ut.state.directionalShadowMap.length>0&&_t.setValue(I,"directionalShadowMap",ut.state.directionalShadowMap,k),ut.state.spotShadowMap.length>0&&_t.setValue(I,"spotShadowMap",ut.state.spotShadowMap,k),ut.state.pointShadowMap.length>0&&_t.setValue(I,"pointShadowMap",ut.state.pointShadowMap,k)),V.isSkinnedMesh){_t.setOptional(I,V,"bindMatrix"),_t.setOptional(I,V,"bindMatrixInverse");const hn=V.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),_t.setValue(I,"boneTexture",hn.boneTexture,k))}V.isBatchedMesh&&(_t.setOptional(I,V,"batchingTexture"),_t.setValue(I,"batchingTexture",V._matricesTexture,k),_t.setOptional(I,V,"batchingIdTexture"),_t.setValue(I,"batchingIdTexture",V._indirectTexture,k),_t.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&_t.setValue(I,"batchingColorTexture",V._colorsTexture,k));const Vn=Y.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&ze.update(V,Y,Rn),(Pn||Ie.receiveShadow!==V.receiveShadow)&&(Ie.receiveShadow=V.receiveShadow,_t.setValue(I,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(yn.envMap.value=Me,yn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(yn.envMapIntensity.value=O.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=Hb()),Pn&&(_t.setValue(I,"toneMappingExposure",E.toneMappingExposure),Ie.needsLights&&xx(yn,yo),pe&&j.fog===!0&&Ue.refreshFogUniforms(yn,pe),Ue.refreshMaterialUniforms(yn,j,Le,Ce,w.state.transmissionRenderTarget[b.id]),Wl.upload(I,vp(Ie),yn,k)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Wl.upload(I,vp(Ie),yn,k),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_t.setValue(I,"center",V.center),_t.setValue(I,"modelViewMatrix",V.modelViewMatrix),_t.setValue(I,"normalMatrix",V.normalMatrix),_t.setValue(I,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const hn=j.uniformsGroups;for(let Sn=0,jc=hn.length;Sn<jc;Sn++){const Dr=hn[Sn];ie.update(Dr,Rn),ie.bind(Dr,Rn)}}return Rn}function xx(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function yx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,O,Y){const j=y.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),y.get(b.texture).__webglTexture=O,y.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Y,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const Y=y.get(b);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const Sx=I.createFramebuffer();this.setRenderTarget=function(b,O=0,Y=0){B=b,D=O,F=Y;let j=null,V=!1,pe=!1;if(b){const _e=y.get(b);if(_e.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(I.FRAMEBUFFER,_e.__webglFramebuffer),X.copy(b.viewport),G.copy(b.scissor),z=b.scissorTest,be.viewport(X),be.scissor(G),be.setScissorTest(z),$=-1;return}else if(_e.__webglFramebuffer===void 0)k.setupRenderTarget(b);else if(_e.__hasExternalTextures)k.rebindTextures(b,y.get(b.texture).__webglTexture,y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(_e.__boundDepthTexture!==Fe){if(Fe!==null&&y.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(b)}}const Me=b.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const Pe=y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?j=Pe[O][Y]:j=Pe[O],V=!0):b.samples>0&&k.useMultisampledRTT(b)===!1?j=y.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?j=Pe[Y]:j=Pe,X.copy(b.viewport),G.copy(b.scissor),z=b.scissorTest}else X.copy(J).multiplyScalar(Le).floor(),G.copy(ne).multiplyScalar(Le).floor(),z=ve;if(Y!==0&&(j=Sx),be.bindFramebuffer(I.FRAMEBUFFER,j)&&be.drawBuffers(b,j),be.viewport(X),be.scissor(G),be.setScissorTest(z),V){const _e=y.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,_e.__webglTexture,Y)}else if(pe){const _e=O;for(let Me=0;Me<b.textures.length;Me++){const Pe=y.get(b.textures[Me]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Me,Pe.__webglTexture,Y,_e)}}else if(b!==null&&Y!==0){const _e=y.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_e.__webglTexture,Y)}$=-1},this.readRenderTargetPixels=function(b,O,Y,j,V,pe,xe,_e=0){if(!(b&&b.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){be.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Pe=b.textures[_e],Fe=Pe.format,De=Pe.type;if(!ft.textureFormatReadable(Fe)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(De)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-j&&Y>=0&&Y<=b.height-V&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e),I.readPixels(O,Y,j,V,le.convert(Fe),le.convert(De),pe))}finally{const Pe=B!==null?y.get(B).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(b,O,Y,j,V,pe,xe,_e=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(O>=0&&O<=b.width-j&&Y>=0&&Y<=b.height-V){be.bindFramebuffer(I.FRAMEBUFFER,Me);const Pe=b.textures[_e],Fe=Pe.format,De=Pe.type;if(!ft.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.bufferData(I.PIXEL_PACK_BUFFER,pe.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e),I.readPixels(O,Y,j,V,le.convert(Fe),le.convert(De),0);const pt=B!==null?y.get(B).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,pt);const Lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await LS(I,Lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pe),I.deleteBuffer($e),I.deleteSync(Lt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,Y=0){const j=Math.pow(2,-Y),V=Math.floor(b.image.width*j),pe=Math.floor(b.image.height*j),xe=O!==null?O.x:0,_e=O!==null?O.y:0;k.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,xe,_e,V,pe),be.unbindTexture()};const Mx=I.createFramebuffer(),wx=I.createFramebuffer();this.copyTextureToTexture=function(b,O,Y=null,j=null,V=0,pe=null){pe===null&&(V!==0?(Ea("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=V,V=0):pe=0);let xe,_e,Me,Pe,Fe,De,$e,pt,Lt;const Dt=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(Y!==null)xe=Y.max.x-Y.min.x,_e=Y.max.y-Y.min.y,Me=Y.isBox3?Y.max.z-Y.min.z:1,Pe=Y.min.x,Fe=Y.min.y,De=Y.isBox3?Y.min.z:0;else{const Vn=Math.pow(2,-V);xe=Math.floor(Dt.width*Vn),_e=Math.floor(Dt.height*Vn),b.isDataArrayTexture?Me=Dt.depth:b.isData3DTexture?Me=Math.floor(Dt.depth*Vn):Me=1,Pe=0,Fe=0,De=0}j!==null?($e=j.x,pt=j.y,Lt=j.z):($e=0,pt=0,Lt=0);const mt=le.convert(O.format),Ie=le.convert(O.type);let ut;O.isData3DTexture?(k.setTexture3D(O,0),ut=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(k.setTexture2DArray(O,0),ut=I.TEXTURE_2D_ARRAY):(k.setTexture2D(O,0),ut=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const at=I.getParameter(I.UNPACK_ROW_LENGTH),Rn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),as=I.getParameter(I.UNPACK_SKIP_PIXELS),Pn=I.getParameter(I.UNPACK_SKIP_ROWS),yo=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Fe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,De);const _t=b.isDataArrayTexture||b.isData3DTexture,yn=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const Vn=y.get(b),hn=y.get(O),Sn=y.get(Vn.__renderTarget),jc=y.get(hn.__renderTarget);be.bindFramebuffer(I.READ_FRAMEBUFFER,Sn.__webglFramebuffer),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,jc.__webglFramebuffer);for(let Dr=0;Dr<Me;Dr++)_t&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,y.get(b).__webglTexture,V,De+Dr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,y.get(O).__webglTexture,pe,Lt+Dr)),I.blitFramebuffer(Pe,Fe,xe,_e,$e,pt,xe,_e,I.DEPTH_BUFFER_BIT,I.NEAREST);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||y.has(b)){const Vn=y.get(b),hn=y.get(O);be.bindFramebuffer(I.READ_FRAMEBUFFER,Mx),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,wx);for(let Sn=0;Sn<Me;Sn++)_t?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vn.__webglTexture,V,De+Sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Vn.__webglTexture,V),yn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,pe,Lt+Sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,pe),V!==0?I.blitFramebuffer(Pe,Fe,xe,_e,$e,pt,xe,_e,I.COLOR_BUFFER_BIT,I.NEAREST):yn?I.copyTexSubImage3D(ut,pe,$e,pt,Lt+Sn,Pe,Fe,xe,_e):I.copyTexSubImage2D(ut,pe,$e,pt,Pe,Fe,xe,_e);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else yn?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(ut,pe,$e,pt,Lt,xe,_e,Me,mt,Ie,Dt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(ut,pe,$e,pt,Lt,xe,_e,Me,mt,Dt.data):I.texSubImage3D(ut,pe,$e,pt,Lt,xe,_e,Me,mt,Ie,Dt):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pe,$e,pt,xe,_e,mt,Ie,Dt.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pe,$e,pt,Dt.width,Dt.height,mt,Dt.data):I.texSubImage2D(I.TEXTURE_2D,pe,$e,pt,xe,_e,mt,Ie,Dt);I.pixelStorei(I.UNPACK_ROW_LENGTH,at),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,as),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,yo),pe===0&&O.generateMipmaps&&I.generateMipmap(ut),be.unbindTexture()},this.initRenderTarget=function(b){y.get(b).__webglFramebuffer===void 0&&k.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?k.setTextureCube(b,0):b.isData3DTexture?k.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?k.setTexture2DArray(b,0):k.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){D=0,F=0,B=null,be.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const jb=32,Xb=64;function Kv(t,e,n,i){if(t.geometryPath&&t.geometryPath.length>=2){const u=t.geometryPath.map(g=>new R(g.x,g.z,g.y)),h=new Bi(u,!1,"catmullrom",.5),f=Xb,p=[];for(let g=0;g<=f;g++)p.push(h.getPointAt(g/f));return i.is3DMode?p:p.map(g=>new R(g.x,0,g.z))}const r=i.is3DMode?e.z:0,s=i.is3DMode?n.z:0,o=new R(e.x,r,e.y),a=new R(n.x,s,n.y),l=[],c=jb;for(let u=0;u<=c;u++){const h=u/c;l.push(new R(xu.lerp(o.x,a.x,h),xu.lerp(o.y,a.y,h),xu.lerp(o.z,a.z,h)))}return l}function Yb(t){const e=[0];for(let n=0;n<t.length-1;n++)e.push(e[e.length-1]+t[n].distanceTo(t[n+1]));return e}function Ug(t,e,n){const i=e[e.length-1],r=Math.max(0,Math.min(n,i));if(t.length===1)return t[0].clone();let s=0;for(;s<e.length-2&&e[s+1]<r;)s++;const o=e[s],l=e[s+1]-o,c=l<1e-8?0:(r-o)/l;return new R().lerpVectors(t[s],t[s+1],c)}const Li={ground:6583435,overpass:47316,ramp:10309341,marking:16777215,highlight:54527,pathGlow:65535},Br={normal:6583435,start:2278750,end:15680580};class qb{constructor(e){Oe(this,"scene");Oe(this,"camera");Oe(this,"renderer");Oe(this,"container");Oe(this,"roadMeshes",new Map);Oe(this,"roadDecorations",[]);Oe(this,"nodeMeshes",new Map);Oe(this,"buildingMeshes",new Map);Oe(this,"buildingLabels",new zi);Oe(this,"interchangeGroup",null);Oe(this,"pathHighlight",null);Oe(this,"vehicle",null);Oe(this,"vehicleLight",null);Oe(this,"nodeMap",new Map);Oe(this,"buildingMap",new Map);Oe(this,"is3DMode",!0);Oe(this,"animationId",null);Oe(this,"lastFrameTime",performance.now());Oe(this,"tooltip",null);Oe(this,"raycaster",new Sl);Oe(this,"cameraDistance",400);Oe(this,"cameraAngleX",.3);Oe(this,"cameraAngleY",Math.PI/4);Oe(this,"cameraFocus",new R(0,0,0));Oe(this,"followLookAt",new R(0,0,0));Oe(this,"pressedKeys",new Set);Oe(this,"isDragging",!1);Oe(this,"lastMouseX",0);Oe(this,"lastMouseY",0);Oe(this,"followVehicle",!1);Oe(this,"animate",()=>{const e=performance.now(),n=Math.min((e-this.lastFrameTime)/1e3,.05);this.lastFrameTime=e,this.updateCameraMovement(n),this.animationId=requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)});this.container=e,this.scene=new vM,this.scene.background=new Je(1515571),this.scene.fog=new ip(1515571,450,1100);const n=e.clientWidth/e.clientHeight;this.camera=new In(60,n,1,2e3),this.updateCameraPosition(),this.renderer=new Wb({antialias:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=fv,e.appendChild(this.renderer.domElement),this.setupLights(),this.addGroundGrid(),this.scene.add(this.buildingLabels),this.createTooltip(),this.setupEventListeners(),this.animate()}setupLights(){const e=new XM(3359061,.6);this.scene.add(e);const n=new lg(16777215,.8);n.position.set(100,200,100),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=10,n.shadow.camera.far=500,n.shadow.camera.left=-300,n.shadow.camera.right=300,n.shadow.camera.top=300,n.shadow.camera.bottom=-300,this.scene.add(n);const i=new lg(561586,.3);i.position.set(-100,100,-100),this.scene.add(i)}createTooltip(){this.tooltip=document.createElement("div"),this.tooltip.style.cssText=`
      position: absolute;
      padding: 8px 12px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid rgba(59, 130, 246, 0.5);
      border-radius: 8px;
      color: white;
      font-size: 13px;
      pointer-events: none;
      z-index: 1000;
      display: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(8px);
      max-width: 200px;
    `,this.container.appendChild(this.tooltip)}showTooltip(e,n,i,r){if(!this.tooltip)return;let s="📍";r==="gate"?s="🚪":r==="shop"?s="🏪":r==="bus_stop"?s="🚌":r==="intersection"?s="🔀":r==="building"?s="🏢":r==="road"&&(s="🛣️"),this.tooltip.innerHTML=`<span style="margin-right: 4px;">${s}</span>${i}`,this.tooltip.style.display="block",this.tooltip.style.left=`${e+15}px`,this.tooltip.style.top=`${n+15}px`}hideTooltip(){this.tooltip&&(this.tooltip.style.display="none")}handleHover(e){const n=this.renderer.domElement.getBoundingClientRect(),i=new Ne((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1);this.raycaster.setFromCamera(i,this.camera);const r=Array.from(this.nodeMeshes.values()),s=this.raycaster.intersectObjects(r);if(s.length>0){const u=s[0].object.userData.node;if(u){this.showTooltip(e.clientX-n.left,e.clientY-n.top,u.name,u.landmarkType);return}}const o=Array.from(this.buildingMeshes.values()),a=this.raycaster.intersectObjects(o,!0);if(a.length>0){let u=a[0].object;for(;u.parent&&!u.userData.building;)u=u.parent;const h=u.userData.building;if(h){this.showTooltip(e.clientX-n.left,e.clientY-n.top,h.name,"building");return}}const l=Array.from(this.roadMeshes.values()),c=this.raycaster.intersectObjects(l);if(c.length>0){const h=c[0].object.userData.edge;if(h){const f=this.nodeMap.get(h.from),p=this.nodeMap.get(h.to),g=f&&p?`${f.name} → ${p.name}`:h.id,v=h.congestion>.7?"拥堵":h.congestion>.4?"缓行":"畅通";this.showTooltip(e.clientX-n.left,e.clientY-n.top,`${g}<br><span style="color: ${h.congestion>.7?"#ef4444":h.congestion>.4?"#f97316":"#22c55e"}">${v}</span> · ${h.speedLimit}km/h`,"road");return}}this.hideTooltip()}addGroundGrid(){const e=new ao(1e3,1e3),n=new fi({color:725536,roughness:.95,metalness:.05}),i=new Mt(e,n);i.rotation.x=-Math.PI/2,i.position.y=-1,i.receiveShadow=!0,this.scene.add(i);const r=new qM(800,40,4674921,1976635);r.position.y=0,this.scene.add(r)}setupEventListeners(){this.renderer.domElement.addEventListener("mousedown",e=>{this.isDragging=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),window.addEventListener("mousemove",e=>{if(this.isDragging&&!this.followVehicle){const n=e.clientX-this.lastMouseX,i=e.clientY-this.lastMouseY;this.cameraAngleY+=n*.01,this.cameraAngleX=Math.max(.1,Math.min(Math.PI/2-.1,this.cameraAngleX+i*.01)),this.updateCameraPosition(),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY,this.hideTooltip()}}),this.renderer.domElement.addEventListener("mousemove",e=>{this.isDragging||this.handleHover(e)}),this.renderer.domElement.addEventListener("mouseleave",()=>{this.hideTooltip()}),this.renderer.domElement.addEventListener("wheel",e=>{e.preventDefault(),this.cameraDistance=Math.max(100,Math.min(800,this.cameraDistance+e.deltaY*.5)),this.updateCameraPosition()}),window.addEventListener("keydown",e=>{const n=e.target;if(n){const r=n.tagName.toLowerCase();if(r==="input"||r==="textarea"||n.isContentEditable)return}const i=e.key.toLowerCase();["w","a","s","d"].includes(i)&&this.pressedKeys.add(i)}),window.addEventListener("keyup",e=>{this.pressedKeys.delete(e.key.toLowerCase())}),window.addEventListener("resize",()=>{const e=this.container.clientWidth,n=this.container.clientHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)})}updateCameraPosition(){if(this.followVehicle&&this.vehicle)this.updateFollowCamera(!0);else{const e=this.cameraDistance*Math.sin(this.cameraAngleX)*Math.sin(this.cameraAngleY),n=this.cameraDistance*Math.cos(this.cameraAngleX),i=this.cameraDistance*Math.sin(this.cameraAngleX)*Math.cos(this.cameraAngleY);this.camera.position.set(this.cameraFocus.x+e,this.cameraFocus.y+n,this.cameraFocus.z+i),this.camera.lookAt(this.cameraFocus)}}loadRoadNetwork(e){for(this.interchangeGroup&&(this.scene.remove(this.interchangeGroup),this.interchangeGroup=null),this.roadMeshes.forEach(n=>this.scene.remove(n)),this.roadDecorations.forEach(n=>this.scene.remove(n)),this.nodeMeshes.forEach(n=>this.scene.remove(n)),this.buildingMeshes.forEach(n=>this.scene.remove(n)),this.roadMeshes.clear(),this.roadDecorations=[],this.nodeMeshes.clear(),this.buildingMeshes.clear(),this.buildingMap.clear();this.buildingLabels.children.length>0;)this.buildingLabels.remove(this.buildingLabels.children[0]);this.nodeMap=new Map(e.nodes.map(n=>[n.id,n]));for(const n of e.edges)this.addRoad(n);for(const n of e.nodes)n.isLandmark&&this.addNode(n);if(e.buildings)for(const n of e.buildings)this.buildingMap.set(n.id,n),this.addBuilding(n)}addTInterchangeGroup(e,n,i){this.interchangeGroup&&this.scene.remove(this.interchangeGroup),this.interchangeGroup=e,this.scene.add(e);const r=new Map(i.map(s=>[s.id,s]));n.forEach((s,o)=>{const a=r.get(o);a&&!s.userData.edge&&(s.userData.edge=a),this.roadMeshes.set(o,s),this.roadMeshes.set(`${o}_rev`,s)})}addRoad(e){if(e.renderInScene===!1)return;const n=this.nodeMap.get(e.from),i=this.nodeMap.get(e.to);if(!n||!i)return;const r=Kv(e,n,i,{nodeMap:this.nodeMap,is3DMode:this.is3DMode});if(r.length<2)return;const s=new Bi(r,!1,"catmullrom",.5),o=e.type==="overpass"?16:e.type==="ramp"?9:12,a=.22,l=this.buildRibbonGeometry(s,o,64),c=e.type==="overpass"?Li.overpass:e.type==="ramp"?Li.ramp:Li.ground,u=new fi({color:c,transparent:!1,opacity:1,depthWrite:!0,depthTest:!0,side:wn,metalness:.2,roughness:.8}),h=new Mt(l,u);h.position.y+=a,h.castShadow=!0,h.receiveShadow=!0,h.renderOrder=0,h.userData={edgeId:e.id,edge:e,restColor:c},this.scene.add(h),this.addDashedLaneLines(s,o,e.id),this.roadMeshes.set(e.id,h),this.roadMeshes.set(`${e.id}_rev`,h)}buildRibbonGeometry(e,n,i){const r=n*.5,s=new R(0,1,0),o=[],a=[],l=[];for(let u=0;u<=i;u++){const h=u/i,f=e.getPointAt(h),p=e.getTangentAt(h).normalize();let g=new R().crossVectors(p,s);g.lengthSq()<1e-10&&(g=new R().crossVectors(new R(1,0,0),p)),g.normalize();const v=f.clone().add(g.clone().multiplyScalar(r)),m=f.clone().add(g.clone().multiplyScalar(-r));o.push(v.x,v.y,v.z,m.x,m.y,m.z),a.push(0,h,1,h)}for(let u=0;u<i;u++){const h=u*2;l.push(h,h+1,h+2),l.push(h+1,h+3,h+2)}const c=new Kt;return c.setAttribute("position",new xt(o,3)),c.setAttribute("uv",new xt(a,2)),c.setIndex(l),c.computeVertexNormals(),c}addDashedLaneLines(e,n,i){const r=new Hv({color:Li.marking,dashSize:n>12?6:4,gapSize:n>12?4:3.5,linewidth:1,transparent:!1,opacity:1,depthWrite:!0,depthTest:!0}),s=new R(0,1,0),o=n*.22;for(const a of[-1,1]){const l=[];for(let h=0;h<=64;h++){const f=h/64,p=e.getPointAt(f),g=e.getTangentAt(f).normalize();let v=new R().crossVectors(g,s);v.lengthSq()<1e-10&&(v=new R().crossVectors(new R(1,0,0),g)),v.normalize();const m=p.clone().add(v.multiplyScalar(a*o));m.y+=.16,l.push(m)}const c=new Kt().setFromPoints(l),u=new op(c,r);u.computeLineDistances(),u.renderOrder=10,u.userData={edgeId:`${i}_lane_${a}`},this.scene.add(u),this.roadDecorations.push(u)}}restoreRoadMeshBaseAppearance(e){const n=e.material,i=e.userData.restColor;n.color.setHex(i??Li.ground),n.emissive.setHex(0),n.emissiveIntensity=0,n.transparent=!1,n.opacity=1,n.depthWrite=!0}addNode(e){let n=Br.normal,i=3;e.landmarkType==="gate"?(n=2278750,i=4):e.landmarkType==="shop"?(n=15680580,i=3.5):e.landmarkType==="bus_stop"?(n=16498468,i=3):e.landmarkType==="intersection"&&(n=959977,i=2.5);const r=new Aa(i,16,16),s=new fi({color:n,roughness:.5,metalness:.5,emissive:n,emissiveIntensity:.3}),o=new Mt(r,s),a=this.is3DMode?e.z:0;o.position.set(e.x,a+3,e.y),o.castShadow=!0,o.userData={nodeId:e.id,node:e},this.scene.add(o),this.nodeMeshes.set(e.id,o)}addBuilding(e){const n=new zi,i=e.color||this.getBuildingColor(e.type),r=new vi(e.width,e.height,e.depth),s=new fi({color:i,roughness:.6,metalness:.2,emissive:i,emissiveIntensity:.1}),o=new Mt(r,s);o.position.y=e.height/2,o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=new vi(e.width+1,1,e.depth+1),l=new fi({color:new Je(i).multiplyScalar(.7).getHex(),roughness:.7,metalness:.3}),c=new Mt(a,l);c.position.y=e.height+.5,c.castShadow=!0,n.add(c),e.height>12&&this.addBuildingWindows(n,e),n.position.set(e.x,0,e.y),n.userData={buildingId:e.id,building:e},this.scene.add(n),this.buildingMeshes.set(e.id,n)}addBuildingWindows(e,n){const i=new na({color:16777198,transparent:!0,opacity:.6}),r=Math.floor(n.height/5),s=Math.floor(n.width/6);for(let o=0;o<r;o++)for(let a=0;a<s;a++){const l=new ao(2,2.5),c=new Mt(l,i);c.position.set((a-s/2+.5)*5,3+o*5,n.depth/2+.1),e.add(c);const u=new Mt(l,i);u.position.set((a-s/2+.5)*5,3+o*5,-n.depth/2-.1),u.rotation.y=Math.PI,e.add(u)}}getBuildingColor(e){switch(e){case"school":return 3900150;case"shop":return 15680580;case"office":return 6583435;case"residence":return 2278750;case"landmark":return 16498468;default:return 9741240}}highlightEndpoints(e,n){this.nodeMeshes.forEach((i,r)=>{const s=i.material;r===e?(s.color.setHex(Br.start),s.emissive.setHex(Br.start),s.emissiveIntensity=.5,i.scale.setScalar(1.5)):r===n?(s.color.setHex(Br.end),s.emissive.setHex(Br.end),s.emissiveIntensity=.5,i.scale.setScalar(1.5)):(s.color.setHex(Br.normal),s.emissive.setHex(Br.normal),s.emissiveIntensity=.2,i.scale.setScalar(1))})}highlightPath(e){if(this.pathHighlight&&(this.scene.remove(this.pathHighlight),this.pathHighlight=null),this.roadMeshes.forEach(i=>{const r=i;this.restoreRoadMeshBaseAppearance(r)}),!e)return;this.pathHighlight=new zi;for(const i of e.edges){const r=i.id.replace(/_rev$/,""),s=this.roadMeshes.get(i.id)??this.roadMeshes.get(r);if(s){const a=s.material;a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.color.setHex(Li.highlight),a.emissive.setHex(Li.pathGlow),a.emissiveIntensity=.5}}const n=[];for(const i of e.path){const r=this.nodeMap.get(i);if(r){const s=this.is3DMode?r.z+5:5;n.push(new R(r.x,s,r.y))}}if(n.length>1){const i=new Bi(n),r=new cp(i,n.length*10,1.2,8,!1),s=new na({color:Li.pathGlow,transparent:!0,opacity:.6}),o=new Mt(r,s);this.pathHighlight.add(o)}this.scene.add(this.pathHighlight)}createVehicle(){this.vehicle&&(this.scene.remove(this.vehicle),this.vehicle=null),this.vehicle=new zi;const e=new vi(6,4,10),n=new fi({color:3900150,roughness:.3,metalness:.8,emissive:3900150,emissiveIntensity:.3}),i=new Mt(e,n);i.position.y=3,i.castShadow=!0,this.vehicle.add(i);const r=new vi(5,3,6),s=new Mt(r,n);s.position.set(0,6,-1),s.castShadow=!0,this.vehicle.add(s);const o=new Aa(.8,8,8),a=new na({color:16777130}),l=new Mt(o,a);l.position.set(2,3,5),this.vehicle.add(l);const c=new Mt(o,a);return c.position.set(-2,3,5),this.vehicle.add(c),this.vehicleLight=new WM(54527,2,50),this.vehicleLight.position.set(0,10,0),this.vehicle.add(this.vehicleLight),this.scene.add(this.vehicle),this.vehicle}removeVehicle(){this.vehicle&&(this.scene.remove(this.vehicle),this.vehicle=null,this.vehicleLight=null,this.followVehicle=!1)}updateVehiclePosition(e){this.vehicle&&(this.vehicle.position.set(e.position.x,this.is3DMode?e.position.z:0,e.position.y),this.vehicle.rotation.y=e.rotation,this.followVehicle&&this.updateFollowCamera(!1))}setViewMode(e){this.is3DMode=e,e?(this.cameraAngleX=.3,this.cameraAngleY=Math.PI/4):(this.cameraAngleX=.01,this.cameraAngleY=0),this.updateCameraPosition()}setFollowVehicle(e){this.followVehicle=e,this.updateCameraPosition()}updateCameraMovement(e){if(this.followVehicle){this.updateFollowCamera(!1);return}if(this.pressedKeys.size===0)return;const n=Math.max(40,this.cameraDistance*.35)*e,i=new R(Math.sin(this.cameraAngleY),0,Math.cos(this.cameraAngleY)).normalize(),r=new R(i.z,0,-i.x).normalize();this.pressedKeys.has("w")&&this.cameraFocus.add(i.clone().multiplyScalar(n)),this.pressedKeys.has("s")&&this.cameraFocus.add(i.clone().multiplyScalar(-n)),this.pressedKeys.has("a")&&this.cameraFocus.add(r.clone().multiplyScalar(-n)),this.pressedKeys.has("d")&&this.cameraFocus.add(r.clone().multiplyScalar(n)),this.updateCameraPosition()}updateFollowCamera(e){if(!this.vehicle)return;const n=this.vehicle.position.clone(),i=new R(n.x-42*Math.sin(this.vehicle.rotation.y),n.y+24,n.z-42*Math.cos(this.vehicle.rotation.y)),r=new R(n.x+16*Math.sin(this.vehicle.rotation.y),n.y+6,n.z+16*Math.cos(this.vehicle.rotation.y));e?(this.camera.position.copy(i),this.followLookAt.copy(r)):(this.camera.position.lerp(i,.12),this.followLookAt.lerp(r,.16)),this.camera.lookAt(this.followLookAt)}getGroundPoint(e){const n=this.renderer.domElement.getBoundingClientRect(),i=new Ne((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),r=new Sl;r.setFromCamera(i,this.camera);const s=new cr(new R(0,1,0),0),o=new R;return r.ray.intersectPlane(s,o)?o:null}getClickedNode(e){const n=this.renderer.domElement.getBoundingClientRect(),i=new Ne((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),r=new Sl;r.setFromCamera(i,this.camera);const s=Array.from(this.nodeMeshes.values()),o=r.intersectObjects(s);return o.length>0?o[0].object.userData.node:null}getClickedRoad(e){const n=this.renderer.domElement.getBoundingClientRect(),i=new Ne((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),r=new Sl;r.setFromCamera(i,this.camera);const s=Array.from(this.roadMeshes.values()),o=r.intersectObjects(s);return o.length>0?o[0].object.userData.edge:null}highlightSelectedRoad(e){const n=i=>i.replace(/_rev$/,"");this.roadMeshes.forEach((i,r)=>{const s=i,o=s.material;r===e||r===`${e}_rev`||n(r)===n(e??"")?(o.transparent=!1,o.opacity=1,o.depthWrite=!0,o.color.setHex(16498468),o.emissive.setHex(16498468),o.emissiveIntensity=.5):this.restoreRoadMeshBaseAppearance(s)})}updateRoadCongestion(e,n){const i=this.roadMeshes.get(e),r=this.roadMeshes.get(`${e}_rev`),s=o=>{if(!o)return;const a=o.userData.edge;a.congestion=n;const l=o.material;if(n>.7)l.color.setHex(15680580),l.emissive.setHex(15680580);else if(n>.4)l.color.setHex(16347926),l.emissive.setHex(16347926);else{const c=o.userData.restColor;l.color.setHex(c??Li.ground),l.emissive.setHex(0),l.emissiveIntensity=0,l.transparent=!1,l.opacity=1}};s(i),s(r)}dispose(){this.interchangeGroup&&(this.scene.remove(this.interchangeGroup),this.interchangeGroup=null),this.animationId&&cancelAnimationFrame(this.animationId),this.tooltip&&this.tooltip.parentNode&&this.tooltip.parentNode.removeChild(this.tooltip),this.renderer.dispose(),this.container.removeChild(this.renderer.domElement)}}class $b{constructor(e,n,i=[],r=!0){Oe(this,"pathResult",null);Oe(this,"nodeMap");Oe(this,"config");Oe(this,"networkEdges",[]);Oe(this,"is3DMode",!0);Oe(this,"edgeSamples",new Map);Oe(this,"vehicleState",{position:{x:0,y:0,z:0},rotation:0,currentNodeIndex:0,progress:0,speed:0,isPaused:!0});Oe(this,"animationId",null);Oe(this,"lastTime",0);Oe(this,"rotationLookAheadDistance",18);Oe(this,"onUpdate",null);Oe(this,"onNodeChange",null);Oe(this,"onComplete",null);Oe(this,"animate",()=>{if(this.vehicleState.isPaused)return;const e=performance.now(),n=(e-this.lastTime)/1e3;this.lastTime=e,this.updateVehicle(n),this.animationId=requestAnimationFrame(this.animate)});this.nodeMap=e,this.config=n,this.networkEdges=i,this.is3DMode=r}setRoadGeometryContext(e,n){this.networkEdges=e,this.is3DMode=n,this.pathResult&&this.cacheEdgeSamples()}geometryContext(){return{nodeMap:this.nodeMap,networkEdges:this.networkEdges,is3DMode:this.is3DMode}}cacheEdgeSamples(){if(this.edgeSamples.clear(),!this.pathResult)return;const e=this.geometryContext();for(const n of this.pathResult.edges){const i=this.nodeMap.get(n.from),r=this.nodeMap.get(n.to);if(!i||!r)continue;const s=Kv(n,i,r,e),o=Yb(s),a=o[o.length-1];this.edgeSamples.set(n.id,{points:s,cumulative:o,arcLength:a})}}setPath(e){if(this.pathResult=e,this.vehicleState={position:{x:0,y:0,z:0},rotation:0,currentNodeIndex:0,progress:0,speed:0,isPaused:!0},e.path.length>0){const n=this.nodeMap.get(e.path[0]);if(n&&(this.vehicleState.position={x:n.x,y:n.y,z:n.z},e.path.length>1)){const i=this.nodeMap.get(e.path[1]);i&&(this.vehicleState.rotation=Math.atan2(i.x-n.x,i.y-n.y))}}this.cacheEdgeSamples(),this.updatePositionAtNode(),this.notifyNodeChange(),this.notifyUpdate()}start(){!this.pathResult||this.pathResult.path.length<2||(this.vehicleState.isPaused=!1,this.lastTime=performance.now(),this.animate())}pause(){this.vehicleState.isPaused=!0,this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}togglePause(){return this.vehicleState.isPaused?this.start():this.pause(),this.vehicleState.isPaused}speedUp(){return this.config.speedMultiplier=Math.min(5,this.config.speedMultiplier+.5),this.config.speedMultiplier}speedDown(){return this.config.speedMultiplier=Math.max(.25,this.config.speedMultiplier-.25),this.config.speedMultiplier}nextNode(){if(!this.pathResult)return;const e=this.pathResult.path.length-1;this.vehicleState.currentNodeIndex<e&&(this.vehicleState.currentNodeIndex++,this.vehicleState.progress=0,this.updatePositionAtNode(),this.notifyNodeChange())}prevNode(){this.pathResult&&this.vehicleState.currentNodeIndex>0&&(this.vehicleState.currentNodeIndex--,this.vehicleState.progress=0,this.updatePositionAtNode(),this.notifyNodeChange())}reset(){this.pause(),this.pathResult&&this.setPath(this.pathResult)}updateVehicle(e){var o,a;if(!this.pathResult||this.vehicleState.currentNodeIndex>=this.pathResult.path.length-1){(o=this.onComplete)==null||o.call(this),this.pause();return}const n=this.pathResult.edges[this.vehicleState.currentNodeIndex];if(!n)return;const r=n.speedLimit*(1-n.congestion*.5)*this.config.speedMultiplier*this.config.baseSpeed/60;this.vehicleState.speed=r;const s=r*e/n.length;if(this.vehicleState.progress+=s,this.vehicleState.progress>=1&&(this.vehicleState.currentNodeIndex++,this.vehicleState.progress=0,this.notifyNodeChange(),this.vehicleState.currentNodeIndex>=this.pathResult.path.length-1)){this.updatePositionAtNode(),(a=this.onComplete)==null||a.call(this),this.pause();return}this.interpolatePosition(),this.notifyUpdate()}interpolatePosition(){if(!this.pathResult)return;const e=this.pathResult.path[this.vehicleState.currentNodeIndex],n=this.pathResult.path[this.vehicleState.currentNodeIndex+1],i=this.nodeMap.get(e),r=this.nodeMap.get(n);if(!i||!r)return;const s=this.vehicleState.progress,o=this.pathResult.edges[this.vehicleState.currentNodeIndex],a=o?this.edgeSamples.get(o.id):void 0;if(a&&a.points.length>=2&&o){const l=s*o.length,c=Ug(a.points,a.cumulative,l);this.vehicleState.position={x:c.x,y:c.z,z:c.y}}else this.vehicleState.position={x:i.x+(r.x-i.x)*s,y:i.y+(r.y-i.y)*s,z:i.z+(r.z-i.z)*s};this.updateVehicleRotation()}updatePositionAtNode(){if(!this.pathResult)return;const e=this.pathResult.path[this.vehicleState.currentNodeIndex],n=this.nodeMap.get(e);if(n){this.vehicleState.position={x:n.x,y:n.y,z:n.z};const i=Math.min(this.vehicleState.currentNodeIndex+1,this.pathResult.path.length-1),r=this.pathResult.path[i],s=this.nodeMap.get(r);s&&s.id!==n.id&&this.updateVehicleRotation()}this.notifyUpdate()}setOnUpdate(e){this.onUpdate=e}setOnNodeChange(e){this.onNodeChange=e}setOnComplete(e){this.onComplete=e}notifyUpdate(){var e;(e=this.onUpdate)==null||e.call(this,this.vehicleState)}notifyNodeChange(){var i;if(!this.pathResult)return;const e=this.pathResult.path[this.vehicleState.currentNodeIndex],n=this.nodeMap.get(e);n&&((i=this.onNodeChange)==null||i.call(this,this.vehicleState.currentNodeIndex,n))}updateVehicleRotation(){if(!this.pathResult)return;const e=this.getLookAheadPoint(this.vehicleState.currentNodeIndex,this.vehicleState.progress,this.rotationLookAheadDistance);if(!e)return;const n=e.x-this.vehicleState.position.x,i=e.y-this.vehicleState.position.y;Math.abs(n)<.001&&Math.abs(i)<.001||(this.vehicleState.rotation=Math.atan2(n,i))}getLookAheadPoint(e,n,i){if(!this.pathResult)return null;let r=i,s=e,o=n;for(;s<this.pathResult.edges.length;){const l=this.pathResult.edges[s],c=this.nodeMap.get(this.pathResult.path[s]),u=this.nodeMap.get(this.pathResult.path[s+1]);if(!l||!c||!u)return null;const h=l.length*(1-o);if(r<=h){const f=o+r/l.length,p=this.edgeSamples.get(l.id);if(p&&p.points.length>=2){const g=f*l.length,v=Ug(p.points,p.cumulative,g);return{x:v.x,y:v.z}}return{x:c.x+(u.x-c.x)*f,y:c.y+(u.y-c.y)*f}}r-=h,s++,o=0}const a=this.nodeMap.get(this.pathResult.path[this.pathResult.path.length-1]);return a?{x:a.x,y:a.y}:null}getState(){return{...this.vehicleState}}getConfig(){return{...this.config}}updateConfig(e){this.config={...this.config,...e},e.weights&&(this.config.weights={...this.config.weights,...e.weights})}dispose(){this.pause(),this.onUpdate=null,this.onNodeChange=null,this.onComplete=null,this.edgeSamples.clear()}}class Kb{constructor(){Oe(this,"heap",[])}push(e){this.heap.push(e),this.bubbleUp(this.heap.length-1)}pop(){if(this.heap.length===0)return;const e=this.heap[0],n=this.heap.pop();return this.heap.length>0&&(this.heap[0]=n,this.bubbleDown(0)),e}isEmpty(){return this.heap.length===0}bubbleUp(e){for(;e>0;){const n=Math.floor((e-1)/2);if(this.heap[n].cost<=this.heap[e].cost)break;[this.heap[n],this.heap[e]]=[this.heap[e],this.heap[n]],e=n}}bubbleDown(e){for(;;){const n=2*e+1,i=2*e+2;let r=e;if(n<this.heap.length&&this.heap[n].cost<this.heap[r].cost&&(r=n),i<this.heap.length&&this.heap[i].cost<this.heap[r].cost&&(r=i),r===e)break;[this.heap[e],this.heap[r]]=[this.heap[r],this.heap[e]],e=r}}}function Zb(t,e){const{length:n,speedLimit:i,congestion:r}=t,{length:s,time:o,congestion:a}=e,l=n/1e3/(i/3600);return s*n+o*l+a*r*100}function Jb(t){const e=new Map;for(const n of t.nodes)e.set(n.id,[]);for(const n of t.edges){const i=e.get(n.from);i&&i.push(n)}return e}function Qb(t,e,n,i){const r=Jb(t),s=new Map(t.nodes.map(m=>[m.id,m]));if(!s.has(e)||!s.has(n))return console.error("起点或终点不存在"),null;const o=new Map,a=new Map,l=new Map,c=new Set,u=new Kb;for(const m of t.nodes)o.set(m.id,1/0),a.set(m.id,null),l.set(m.id,null);for(o.set(e,0),u.push({nodeId:e,cost:0});!u.isEmpty();){const m=u.pop();if(c.has(m.nodeId))continue;if(c.add(m.nodeId),m.nodeId===n)break;const d=r.get(m.nodeId)||[];for(const _ of d){if(c.has(_.to))continue;const x=Zb(_,i.weights),S=o.get(m.nodeId)+x;S<o.get(_.to)&&(o.set(_.to,S),a.set(_.to,m.nodeId),l.set(_.to,_),u.push({nodeId:_.to,cost:S}))}}if(o.get(n)===1/0)return console.error("无法找到从起点到终点的路径"),null;const h=[],f=[];let p=n;for(;p;){h.unshift(p);const m=l.get(p);m&&f.unshift(m),p=a.get(p)||null}const g=f.reduce((m,d)=>m+d.length,0),v=f.reduce((m,d)=>{const _=d.speedLimit*(1-d.congestion*.5);return m+d.length/100/_},0);return{path:h,totalCost:o.get(n),totalLength:g,estimatedTime:v*3600,edges:f}}function eA(t,e,n){const i={x:e.x-t.x,y:e.y-t.y},r={x:n.x-e.x,y:n.y-e.y},s=i.x*r.y-i.y*r.x,o=i.x*r.x+i.y*r.y;return Math.atan2(s,o)}function tA(t,e,n,i,r){const s=t.layer,o=e.layer,a=n.layer;return s===0&&o>0&&i.type==="ramp"?"ramp_up":s>0&&a===0&&r.type==="ramp"?"ramp_down":o===0&&a===1&&r.type==="overpass"?"overpass_enter":o===1&&a===0?"overpass_exit":null}function nA(t){const e=t*180/Math.PI;return e>30?"turn_left":e<-30?"turn_right":"straight"}function Qu(t,e,n){const i=e>100?`${Math.round(e)}米后`:"前方";switch(t){case"ramp_up":return`${i}，驶入上匝道，进入高架桥`;case"ramp_down":return`${i}，驶入下匝道，离开高架桥`;case"overpass_enter":return`${i}，进入立交桥高架层`;case"overpass_exit":return`${i}，离开高架桥，进入地面道路`;case"turn_left":return`${i}，左转进入${n}`;case"turn_right":return`${i}，右转进入${n}`;case"straight":return`${i}，直行通过${n}`;case"destination":return`您已到达目的地：${n}`;default:return`${i}，继续行驶`}}function iA(t,e,n){const i=[];if(t.length<2)return i;let r=0;for(let o=1;o<t.length-1;o++){const a=n.get(t[o-1]),l=n.get(t[o]),c=n.get(t[o+1]),u=e[o-1],h=e[o];r+=u.length;const f=tA(a,l,c,u,h);if(f){i.push({nodeId:l.id,type:f,message:Qu(f,r,l.name),distance:r}),r=0;continue}const p=eA(a,l,c),g=nA(p);(g!=="straight"||o%3===0&&t.length>5)&&(i.push({nodeId:l.id,type:g,message:Qu(g,r,c.name),distance:r}),r=0)}const s=n.get(t[t.length-1]);return i.push({nodeId:s.id,type:"destination",message:Qu("destination",0,s.name),distance:0}),i}const Hn={elevated:47316,ground:6583435,ramp:10309341,pier:4342338,marking:16777215,debugPoint:16771899},Fg=64,Wo=.18,kg=9,ws=16,rA=20,sA=15,Og=.85,ci=30,lt=0,zg=18;function oA(t){const e=ci,n=lt;return t>=zg-.001?e:t<=lt+.001?n:n+t/zg*(e-n)}function _o(t){return t.map(e=>new R(e.x,oA(e.y),e.z))}function aA(t){return new fi({color:t,transparent:!1,opacity:1,depthWrite:!0,depthTest:!0,side:wn,metalness:.2,roughness:.8})}const lA=[new R(-150,ci,0),new R(150,ci,0)],cA=[new R(0,lt,-150),new R(0,lt,150)],uA=[new R(0,lt,0),new R(-200,lt,0)],Zv=_o([new R(150,ci,0),new R(125,ci,-9),new R(90,14.2,-30),new R(55,9.6,-52),new R(22,4.8,-78),new R(-5,1.2,-108),new R(-6,.15,-135),new R(0,lt,-150)]),Jv=_o([new R(150,ci,0),new R(124,ci,14),new R(82,13.5,38),new R(32,8.2,58),new R(-22,3.6,62),new R(-78,1,52),new R(-138,.25,28),new R(-200,lt,0)]),Qv=_o([new R(0,lt,-150),new R(24,lt,-124),new R(52,2.4,-96),new R(80,6.8,-68),new R(108,11.5,-40),new R(132,15.5,-14),new R(147,17.6,-2),new R(150,ci,0)]),ex=_o([new R(0,lt,-150),new R(-32,lt,-125),new R(-68,lt,-95),new R(-105,lt,-62),new R(-145,lt,-28),new R(-200,lt,0)]),tx=_o([new R(-200,lt,0),new R(-172,lt,0),new R(-130,2.2,0),new R(-85,6.5,0),new R(-38,11,0),new R(12,14.8,0),new R(70,16.9,0),new R(120,17.7,0),new R(150,ci,0)]),nx=_o([new R(-200,lt,0),new R(-165,lt,-28),new R(-125,lt,-58),new R(-82,lt,-88),new R(-38,lt,-118),new R(0,lt,-150)]),je={hub:"t_ic_hub",aWest:"t_ic_a_w",aEast:"t_ic_a_e",bSouth:"t_ic_b_s",bNorth:"t_ic_b_n",cWest:"t_ic_c_w",underE:"t_ic_under_e",underS:"t_ic_under_s",underW:"t_ic_under_w"};function dA(){return[{id:je.hub,x:0,y:0,z:lt,layer:0,name:"北林T型立交中心",isLandmark:!0,landmarkType:"intersection"},{id:je.aWest,x:-150,y:0,z:ci,layer:1,name:"立交东西主线西端(高架)",isLandmark:!0,landmarkType:"intersection"},{id:je.aEast,x:150,y:0,z:ci,layer:1,name:"立交东西主线东端(高架)",isLandmark:!0,landmarkType:"intersection"},{id:je.bSouth,x:0,y:-150,z:lt,layer:0,name:"立交南北主线南端",isLandmark:!0,landmarkType:"intersection"},{id:je.bNorth,x:0,y:150,z:lt,layer:0,name:"立交南北主线北端",isLandmark:!0,landmarkType:"intersection"},{id:je.cWest,x:-200,y:0,z:lt,layer:0,name:"立交西向主线西端",isLandmark:!0,landmarkType:"intersection"},{id:je.underE,x:68,y:-40,z:lt,layer:0,name:"东向匝道桥下集散点",isLandmark:!0,landmarkType:"intersection"},{id:je.underS,x:14,y:-108,z:lt,layer:0,name:"南侧青蓝高架桥下辅路",isLandmark:!0,landmarkType:"intersection"},{id:je.underW,x:-92,y:14,z:lt,layer:0,name:"西段青蓝高架桥下辅路",isLandmark:!0,landmarkType:"intersection"}]}function Es(t,e,n,i,r){return{id:t,from:e,to:n,length:i,speedLimit:40,congestion:.2,type:"ground",segmentName:r}}function hA(t){return t.map(e=>({x:e.x,y:e.z,z:e.y}))}function Ts(t,e,n,i,r,s){const o=new Bi(i,!1,"catmullrom",.5);return{id:t,from:e,to:n,length:Math.round(o.getLength()*10)/10,speedLimit:40,congestion:.18,type:r,segmentName:s,geometryPath:hA(i),renderInScene:!1}}function El(t,e,n,i,r,s){return{id:t,from:e,to:n,length:i,speedLimit:r==="overpass"?80:60,congestion:.15,type:r,segmentName:s,renderInScene:!1}}function fA(){return[El("t_ic_e_main",je.aWest,je.aEast,300,"overpass","青蓝高架主线（东西向）"),El("t_ic_ns_s",je.bSouth,je.hub,150,"ground","南北地面主线（南—立交中心）"),El("t_ic_ns_n",je.hub,je.bNorth,150,"ground","南北地面主线（立交中心—北）"),El("t_ic_c_main",je.cWest,je.hub,200,"ground","西向地面主线（西端—立交中心）"),Ts("t_ic_r_es",je.aEast,je.bSouth,Zv,"ramp","东→南下匝道"),Ts("t_ic_r_ew",je.aEast,je.cWest,Jv,"ramp","东→西下匝道"),Ts("t_ic_r_se",je.bSouth,je.aEast,Qv,"ramp","南→东上匝道"),Ts("t_ic_r_sw",je.bSouth,je.cWest,ex,"ramp","南→西地面转向匝道"),Ts("t_ic_r_we",je.cWest,je.aEast,tx,"ramp","西→东上匝道"),Ts("t_ic_r_ws",je.cWest,je.bSouth,nx,"ramp","西→南地面转向匝道"),Es("t_ic_g_hub_ue",je.hub,je.underE,79,"立交中心—东匝道桥下集散联络道"),Es("t_ic_g_ue_us",je.underE,je.underS,87,"东→南匝道投影下地面辅路"),Es("t_ic_g_us_bs",je.underS,je.bSouth,44,"南侧桥下辅路—南北主线南端"),Es("t_ic_g_cw_uw",je.cWest,je.underW,109,"西向地面主线—西段桥下辅路"),Es("t_ic_g_uw_hub",je.underW,je.hub,93,"西段桥下辅路—立交中心"),Es("t_ic_g_uw_ue",je.underW,je.underE,169,"青蓝高架桥下东西向地面辅路")]}function pA(t,e,n){const i=e*.5,r=new R(0,1,0),s=[],o=[],a=[];for(let c=0;c<=n;c++){const u=c/n,h=t.getPointAt(u),f=t.getTangentAt(u).normalize();let p=new R().crossVectors(f,r);p.lengthSq()<1e-10&&(p=new R().crossVectors(new R(1,0,0),f)),p.normalize();const g=h.clone().add(p.clone().multiplyScalar(i)),v=h.clone().add(p.clone().multiplyScalar(-i));s.push(g.x,g.y,g.z,v.x,v.y,v.z),o.push(0,u,1,u)}for(let c=0;c<n;c++){const u=c*2;a.push(u,u+1,u+2),a.push(u+1,u+3,u+2)}const l=new Kt;return l.setAttribute("position",new xt(s,3)),l.setAttribute("uv",new xt(o,2)),l.setIndex(a),l.computeVertexNormals(),l}function ix(t,e,n=0){const i=aA(e),r=new Mt(t,i);return r.position.y+=n,r.castShadow=!0,r.receiveShadow=!0,r.userData.restColor=e,r.renderOrder=0,r}function ed(t,e,n,i,r){const s=new R().subVectors(e,t),o=s.length(),a=new R().addVectors(t,e).multiplyScalar(.5),l=Math.atan2(s.z,s.x),c=new vi(o,i,n),u=ix(c,r,0);return u.position.copy(a),u.position.y=a.y-i/2,u.rotation.y=-l,u}function rx(t,e,n,i){const s=Math.max(.5,i-0),o=new Bc(Og,Og*1.05,s,16),a=new fi({color:Hn.pier,transparent:!1,opacity:1,depthWrite:!0,depthTest:!0,side:wn,metalness:.2,roughness:.75}),l=new Mt(o,a);l.position.set(e,0+s/2,n),l.castShadow=!0,l.receiveShadow=!0,t.add(l)}function mA(t,e,n){const i=e.getLength();if(i<2)return;let r=n*.4,s=0;const o=500;let a=e.getPointAt(0);for(let l=1;l<=o;l++){const c=l/o,u=e.getPointAt(c);s+=a.distanceTo(u),a=u.clone(),s>=r&&r<i+n&&(rx(t,u.x,u.z,u.y-Wo*.35),r+=n)}}function Tl(t,e,n,i,r,s){const o=new Hv({color:Hn.marking,dashSize:r,gapSize:s,linewidth:1,transparent:!1,opacity:1,depthWrite:!0,depthTest:!0}),a=new R(0,1,0);for(const l of[-1,1]){const c=[];for(let f=0;f<=n;f++){const p=f/n,g=e.getPointAt(p),v=e.getTangentAt(p).normalize();let m=new R().crossVectors(v,a);m.lengthSq()<1e-10&&(m=new R().crossVectors(new R(1,0,0),v)),m.normalize();const d=g.clone().add(m.multiplyScalar(l*i));d.y+=.14,c.push(d)}const u=new Kt().setFromPoints(c),h=new op(u,o);h.computeLineDistances(),h.renderOrder=10,t.add(h)}}function bl(t,e,n,i=3){const r=new ap(1.1,3.2,8),s=new fi({color:n,transparent:!1,opacity:1,depthWrite:!0,depthTest:!0,side:wn,metalness:.15,roughness:.75,emissive:1118481,emissiveIntensity:.02});for(let o=1;o<=i;o++){const a=o/(i+1),l=e.getPointAt(a),c=e.getTangentAt(a).normalize();l.y+=.22;const u=new Mt(r.clone(),s);u.position.copy(l);const h=new po;h.setFromUnitVectors(new R(0,1,0),c),u.quaternion.copy(h),u.castShadow=!0,u.renderOrder=11,t.add(u)}}function Bg(t,e){const n=new Aa(1.2,12,12),i=new fi({color:Hn.debugPoint,transparent:!1,opacity:1,depthWrite:!0,side:wn,metalness:.2,roughness:.6,emissive:Hn.debugPoint,emissiveIntensity:.15});for(const r of e){const s=new Mt(n,i);s.position.copy(r),t.add(s)}}function gA(t){const e=n=>n.map(i=>i.clone());return{mainA:e(t.mainA),mainB:e(t.mainB),mainC:e(t.mainC),eastToSouth:e(t.eastToSouth),eastToWest:e(t.eastToWest),southToEast:e(t.southToEast),southToWest:e(t.southToWest),westToEast:e(t.westToEast),westToSouth:e(t.westToSouth)}}const _A={mainA:lA,mainB:cA,mainC:uA,eastToSouth:Zv,eastToWest:Jv,southToEast:Qv,southToWest:ex,westToEast:tx,westToSouth:nx};function vA(t){const e=new zi;e.name="TInterchange";const n=new Map,i=t.mainA[0].clone(),r=t.mainA[t.mainA.length-1].clone(),s=ed(i,r,ws,Wo,Hn.elevated);s.userData.edgeId="t_ic_e_main",e.add(s),n.set("t_ic_e_main",s);const o=i.y-Wo;for(let d=-140;d<=140;d+=rA)rx(e,d,0,o);const a=t.mainB[0].clone(),l=t.mainB[t.mainB.length-1].clone(),c=ed(a,l,ws,Wo,Hn.ground);c.userData.edgeId="t_ic_ns_s",e.add(c),n.set("t_ic_ns_s",c),n.set("t_ic_ns_n",c);const u=t.mainC[0].clone(),h=t.mainC[t.mainC.length-1].clone(),f=ed(u,h,ws,Wo,Hn.ground);f.userData.edgeId="t_ic_c_main",e.add(f),n.set("t_ic_c_main",f);const p=[{id:"t_ic_r_es",path:t.eastToSouth},{id:"t_ic_r_ew",path:t.eastToWest},{id:"t_ic_r_se",path:t.southToEast},{id:"t_ic_r_sw",path:t.southToWest},{id:"t_ic_r_we",path:t.westToEast},{id:"t_ic_r_ws",path:t.westToSouth}];for(const{id:d,path:_}of p){const x=new Bi(_,!1,"catmullrom",.5),S=pA(x,kg,Fg),w=ix(S,Hn.ramp,0);w.userData.edgeId=d,e.add(w),n.set(d,w),Tl(e,x,Fg,kg*.22,4,3.5),bl(e,x,Hn.marking,3),mA(e,x,sA),Bg(e,_)}const g=new Bi(t.mainA,!1,"catmullrom",.5);Tl(e,g,48,ws*.22,6,4),bl(e,g,Hn.marking,2);const v=new Bi(t.mainB,!1,"catmullrom",.5);Tl(e,v,48,ws*.22,6,4),bl(e,v,Hn.marking,2);const m=new Bi(t.mainC,!1,"catmullrom",.5);return Tl(e,m,36,ws*.22,6,4),bl(e,m,Hn.marking,2),Bg(e,[...t.mainA,...t.mainB,...t.mainC]),{group:e,edgeMeshes:n}}function td(){return vA(gA(_A))}const xA=[{id:"bjfu_east",x:78,y:18,z:0,layer:0,name:"北林东门",isLandmark:!0,landmarkType:"gate"},{id:"bjfu_south",x:12,y:-96,z:0,layer:0,name:"北林南门",isLandmark:!0,landmarkType:"gate"},{id:"bjfu_west",x:-82,y:10,z:0,layer:0,name:"北林西门",isLandmark:!0,landmarkType:"gate"},{id:"bjfu_north",x:14,y:98,z:0,layer:0,name:"北林北门",isLandmark:!0,landmarkType:"gate"},{id:"kfc_south",x:74,y:-145,z:0,layer:0,name:"肯德基(南门店)",isLandmark:!0,landmarkType:"shop"},{id:"bus_east",x:122,y:18,z:0,layer:0,name:"林业大学东门公交站",isLandmark:!0,landmarkType:"bus_stop"},{id:"bus_south",x:12,y:-145,z:0,layer:0,name:"林业大学南门公交站",isLandmark:!0,landmarkType:"bus_stop"},{id:"xueyuan_n1",x:-145,y:170,z:0,layer:0,name:"学院路北段",isLandmark:!1},{id:"xueyuan_n2",x:-145,y:98,z:0,layer:0,name:"学院路-清华东路口",isLandmark:!0,landmarkType:"intersection"},{id:"xueyuan_c",x:-145,y:18,z:0,layer:0,name:"学院路-成府路口",isLandmark:!0,landmarkType:"intersection"},{id:"xueyuan_s1",x:-145,y:-62,z:0,layer:0,name:"学院路-北四环辅路",isLandmark:!0,landmarkType:"intersection"},{id:"xueyuan_s2",x:-145,y:-150,z:0,layer:0,name:"学院路南段",isLandmark:!1},{id:"qinghua_w",x:-230,y:98,z:0,layer:0,name:"清华东路西段",isLandmark:!1},{id:"qinghua_c",x:-10,y:98,z:0,layer:0,name:"清华东路-北林北",isLandmark:!1},{id:"qinghua_e",x:160,y:98,z:0,layer:0,name:"清华东路东段",isLandmark:!1},{id:"chengfu_w",x:-230,y:18,z:0,layer:0,name:"成府路西段",isLandmark:!1},{id:"chengfu_e1",x:35,y:18,z:0,layer:0,name:"成府路-校园东侧",isLandmark:!1},{id:"chengfu_e2",x:140,y:18,z:0,layer:0,name:"成府路东段",isLandmark:!1},{id:"sihuan_w",x:-230,y:-62,z:0,layer:0,name:"北四环辅路西段",isLandmark:!1},{id:"sihuan_c1",x:-82,y:-62,z:0,layer:0,name:"北四环辅路-校园西南",isLandmark:!1},{id:"sihuan_c2",x:32,y:-62,z:0,layer:0,name:"北四环辅路-校园东南",isLandmark:!1},{id:"sihuan_e",x:148,y:-62,z:0,layer:0,name:"北四环辅路东段",isLandmark:!1},{id:"south_road_w",x:-110,y:-145,z:0,layer:0,name:"南侧服务路西",isLandmark:!1},{id:"south_road_c",x:10,y:-145,z:0,layer:0,name:"南侧服务路中",isLandmark:!1},{id:"south_road_e",x:116,y:-145,z:0,layer:0,name:"南侧服务路东",isLandmark:!1},{id:"north_road",x:176,y:155,z:0,layer:0,name:"北侧联络路",isLandmark:!1},{id:"interchange_sw",x:172,y:-116,z:0,layer:0,name:"立交西南",isLandmark:!0,landmarkType:"intersection"},{id:"interchange_nw",x:172,y:68,z:0,layer:0,name:"立交西北",isLandmark:!0,landmarkType:"intersection"},{id:"campus_c",x:-8,y:0,z:0,layer:0,name:"校园中心",isLandmark:!1},{id:"campus_ne",x:42,y:48,z:0,layer:0,name:"东北角",isLandmark:!1},{id:"campus_se",x:42,y:-48,z:0,layer:0,name:"东南角",isLandmark:!1},{id:"campus_sw",x:-48,y:-48,z:0,layer:0,name:"西南角",isLandmark:!1},{id:"campus_nw",x:-48,y:48,z:0,layer:0,name:"西北角",isLandmark:!1},...dA()],yA=[{id:"xy_1",from:"xueyuan_n1",to:"xueyuan_n2",length:72,speedLimit:50,congestion:.24,type:"ground",segmentName:"学院路北段"},{id:"xy_2",from:"xueyuan_n2",to:"xueyuan_c",length:80,speedLimit:50,congestion:.28,type:"ground",segmentName:"学院路（清华东路—成府路段）"},{id:"xy_3",from:"xueyuan_c",to:"xueyuan_s1",length:80,speedLimit:50,congestion:.42,type:"ground"},{id:"xy_4",from:"xueyuan_s1",to:"xueyuan_s2",length:88,speedLimit:50,congestion:.33,type:"ground"},{id:"qh_1",from:"qinghua_w",to:"xueyuan_n2",length:85,speedLimit:50,congestion:.22,type:"ground"},{id:"qh_2",from:"xueyuan_n2",to:"qinghua_c",length:135,speedLimit:50,congestion:.25,type:"ground"},{id:"qh_3",from:"qinghua_c",to:"bjfu_north",length:24,speedLimit:40,congestion:.18,type:"ground"},{id:"qh_4",from:"bjfu_north",to:"qinghua_e",length:146,speedLimit:50,congestion:.26,type:"ground"},{id:"cf_1",from:"chengfu_w",to:"xueyuan_c",length:85,speedLimit:50,congestion:.27,type:"ground",segmentName:"成府路西段"},{id:"cf_2",from:"xueyuan_c",to:"bjfu_west",length:64,speedLimit:40,congestion:.25,type:"ground"},{id:"cf_3",from:"bjfu_west",to:"campus_c",length:78,speedLimit:30,congestion:.16,type:"ground"},{id:"cf_4",from:"campus_c",to:"chengfu_e1",length:52,speedLimit:30,congestion:.16,type:"ground"},{id:"cf_5",from:"chengfu_e1",to:"bjfu_east",length:43,speedLimit:40,congestion:.23,type:"ground"},{id:"cf_6",from:"bjfu_east",to:"chengfu_e2",length:64,speedLimit:50,congestion:.27,type:"ground"},{id:"cf_7",from:"chengfu_e2",to:"bus_east",length:26,speedLimit:40,congestion:.24,type:"ground"},{id:"sh_1",from:"sihuan_w",to:"xueyuan_s1",length:85,speedLimit:60,congestion:.64,type:"ground"},{id:"sh_2",from:"xueyuan_s1",to:"sihuan_c1",length:63,speedLimit:60,congestion:.7,type:"ground"},{id:"sh_3",from:"sihuan_c1",to:"bjfu_south",length:95,speedLimit:50,congestion:.76,type:"ground"},{id:"sh_4",from:"bjfu_south",to:"sihuan_c2",length:46,speedLimit:50,congestion:.68,type:"ground"},{id:"sh_5",from:"sihuan_c2",to:"sihuan_e",length:116,speedLimit:60,congestion:.58,type:"ground"},{id:"sr_1",from:"xueyuan_s2",to:"south_road_w",length:48,speedLimit:40,congestion:.24,type:"ground"},{id:"sr_2",from:"south_road_w",to:"south_road_c",length:120,speedLimit:40,congestion:.25,type:"ground"},{id:"sr_3",from:"south_road_c",to:"kfc_south",length:64,speedLimit:30,congestion:.18,type:"ground"},{id:"sr_4",from:"kfc_south",to:"south_road_e",length:42,speedLimit:40,congestion:.24,type:"ground"},{id:"sr_5",from:"south_road_c",to:"bus_south",length:8,speedLimit:30,congestion:.16,type:"ground"},{id:"sr_6",from:"bus_south",to:"bjfu_south",length:49,speedLimit:40,congestion:.22,type:"ground"},{id:"ns_1",from:"qinghua_e",to:"chengfu_e2",length:80,speedLimit:50,congestion:.24,type:"ground"},{id:"ns_2",from:"chengfu_e2",to:"sihuan_e",length:80,speedLimit:50,congestion:.28,type:"ground"},{id:"ns_3",from:"sihuan_e",to:"south_road_e",length:83,speedLimit:40,congestion:.26,type:"ground"},{id:"cp_1",from:"bjfu_north",to:"campus_nw",length:72,speedLimit:20,congestion:.1,type:"ground"},{id:"cp_2",from:"campus_nw",to:"campus_c",length:58,speedLimit:20,congestion:.08,type:"ground"},{id:"cp_3",from:"bjfu_north",to:"campus_ne",length:48,speedLimit:20,congestion:.1,type:"ground"},{id:"cp_4",from:"campus_ne",to:"campus_c",length:64,speedLimit:20,congestion:.08,type:"ground"},{id:"cp_5",from:"campus_c",to:"campus_sw",length:60,speedLimit:20,congestion:.08,type:"ground"},{id:"cp_6",from:"campus_sw",to:"bjfu_south",length:74,speedLimit:20,congestion:.12,type:"ground"},{id:"cp_7",from:"campus_c",to:"campus_se",length:60,speedLimit:20,congestion:.08,type:"ground"},{id:"cp_8",from:"campus_se",to:"bjfu_south",length:70,speedLimit:20,congestion:.12,type:"ground"},{id:"cp_9",from:"campus_ne",to:"bjfu_east",length:48,speedLimit:20,congestion:.12,type:"ground"},{id:"cp_10",from:"campus_se",to:"bjfu_east",length:72,speedLimit:20,congestion:.12,type:"ground"},{id:"cp_11",from:"campus_nw",to:"bjfu_west",length:58,speedLimit:20,congestion:.1,type:"ground"},{id:"cp_12",from:"campus_sw",to:"bjfu_west",length:64,speedLimit:20,congestion:.1,type:"ground"},{id:"ic_1",from:"south_road_e",to:"interchange_sw",length:56,speedLimit:40,congestion:.24,type:"ground"},{id:"ic_2",from:"sihuan_e",to:"interchange_sw",length:62,speedLimit:45,congestion:.28,type:"ground"},{id:"ic_3",from:"qinghua_e",to:"interchange_nw",length:44,speedLimit:45,congestion:.24,type:"ground"},{id:"ic_4",from:"interchange_nw",to:"north_road",length:88,speedLimit:40,congestion:.2,type:"ground"},{id:"ic_5",from:"interchange_nw",to:"interchange_sw",length:184,speedLimit:45,congestion:.3,type:"ground"},{id:"nr_1",from:"xueyuan_n1",to:"north_road",length:322,speedLimit:50,congestion:.22,type:"ground"},{id:"tic_link_campus",from:"campus_c",to:"t_ic_hub",length:50,speedLimit:30,congestion:.12,type:"ground",segmentName:"校园联络线—北林T型立交方向"},...fA()],SA=[],MA=yA.flatMap(t=>[t,{...t,id:`${t.id}_rev`,from:t.to,to:t.from,geometryPath:t.geometryPath?[...t.geometryPath].reverse():void 0}]),zs={nodes:xA,edges:MA,buildings:SA},yc=[{kind:"current-campus",title:"当前校园+T型立交主场景",description:"保留你现有顺滑曲线、匝道起伏和桥下道路，是系统默认主模板。",recommendedRoute:{start:"campus_c",end:"t_ic_a_e",label:"校园中心 → 高架东端"}},{kind:"stacked-overpass",title:"高架主路 + 桥下辅路",description:"东西向高架与桥下辅路在 2D 投影重合，突出 3D 立体识别价值。",recommendedRoute:{start:"so_south",end:"so_over_e",label:"南侧地面入口 → 高架东段"}},{kind:"diamond-interchange",title:"菱形互通",description:"包含高架、桥下地面路和上下匝道，适合演示匝道切换。",recommendedRoute:{start:"di_ground_w",end:"di_over_n",label:"地面西口 → 高架北口"}},{kind:"bridge-underpass",title:"桥梁跨越 + 桥下通道",description:"桥面直行与桥下穿行平面重叠，适合做 2D/3D 对比演示。",recommendedRoute:{start:"bu_north",end:"bu_ground_e",label:"北侧接入 → 桥下东口"}},{kind:"multi-level-express-hub",title:"城市快速路复合枢纽",description:"参考主流城市高架快速路枢纽抽象化设计，包含双主线、半定向匝道、桥下辅路与多层投影重叠。",recommendedRoute:{start:"meh_sw_ground",end:"meh_ground_ne",label:"西南地面入口 → 东北地面出城口"}}];function Ze(t){const e={...t};return[e,{...e,id:`${e.id}_rev`,from:e.to,to:e.from,geometryPath:e.geometryPath?[...e.geometryPath].reverse():void 0}]}function Vg(t){return{nodes:t.nodes.map(e=>({...e})),edges:t.edges.map(e=>({...e,geometryPath:e.geometryPath?e.geometryPath.map(n=>({...n})):void 0})),buildings:t.buildings?t.buildings.map(e=>({...e})):[]}}function wA(){const t=[{id:"so_ground_w",name:"桥下西段",x:-180,y:0,z:0,layer:0},{id:"so_ground_mid",name:"桥下中心",x:0,y:0,z:0,layer:0,isLandmark:!0,landmarkType:"intersection"},{id:"so_ground_e",name:"桥下东段",x:180,y:0,z:0,layer:0},{id:"so_over_w",name:"高架西段",x:-180,y:0,z:18,layer:1},{id:"so_over_mid",name:"高架中心",x:0,y:0,z:18,layer:1},{id:"so_over_e",name:"高架东段",x:180,y:0,z:18,layer:1},{id:"so_south",name:"南侧地面入口",x:0,y:-180,z:0,layer:0},{id:"so_ramp_w",name:"西向上桥匝道",x:-72,y:-92,z:9,layer:.5},{id:"so_ramp_e",name:"东向上桥匝道",x:72,y:-92,z:9,layer:.5}],e=[...Ze({id:"so_ground_a",from:"so_ground_w",to:"so_ground_mid",length:180,speedLimit:35,congestion:.24,type:"ground",segmentName:"桥下辅路西段",geometryPath:[{x:-180,y:-12,z:0},{x:-110,y:-6,z:0},{x:-35,y:-2,z:0},{x:0,y:0,z:0}]}),...Ze({id:"so_ground_b",from:"so_ground_mid",to:"so_ground_e",length:180,speedLimit:35,congestion:.2,type:"ground",segmentName:"桥下辅路东段",geometryPath:[{x:0,y:0,z:0},{x:35,y:2,z:0},{x:110,y:6,z:0},{x:180,y:12,z:0}]}),...Ze({id:"so_over_a",from:"so_over_w",to:"so_over_mid",length:180,speedLimit:60,congestion:.08,type:"overpass",segmentName:"高架主路西段",geometryPath:[{x:-180,y:-8,z:18},{x:-120,y:-4,z:18},{x:-48,y:-1,z:18},{x:0,y:0,z:18}]}),...Ze({id:"so_over_b",from:"so_over_mid",to:"so_over_e",length:180,speedLimit:60,congestion:.08,type:"overpass",segmentName:"高架主路东段",geometryPath:[{x:0,y:0,z:18},{x:48,y:1,z:18},{x:120,y:4,z:18},{x:180,y:8,z:18}]}),...Ze({id:"so_south_link",from:"so_south",to:"so_ground_mid",length:180,speedLimit:35,congestion:.18,type:"ground",segmentName:"南侧桥下接入",geometryPath:[{x:0,y:-180,z:0},{x:-6,y:-120,z:0},{x:-4,y:-48,z:0},{x:0,y:0,z:0}]}),...Ze({id:"so_ramp_w",from:"so_south",to:"so_over_mid",length:230,speedLimit:30,congestion:.16,type:"ramp",segmentName:"西侧上桥匝道",geometryPath:[{x:0,y:-180,z:0},{x:-32,y:-145,z:2},{x:-72,y:-92,z:9},{x:-65,y:-40,z:14},{x:-28,y:-10,z:17},{x:0,y:0,z:18}]}),...Ze({id:"so_ramp_e",from:"so_south",to:"so_over_mid",length:230,speedLimit:30,congestion:.16,type:"ramp",segmentName:"东侧上桥匝道",geometryPath:[{x:0,y:-180,z:0},{x:32,y:-145,z:2},{x:72,y:-92,z:9},{x:65,y:-40,z:14},{x:28,y:-10,z:17},{x:0,y:0,z:18}]})];return{nodes:t,edges:e,buildings:[]}}function EA(){const t=[{id:"di_ground_w",name:"地面西口",x:-170,y:0,z:0,layer:0},{id:"di_ground_c",name:"桥下中心",x:0,y:0,z:0,layer:0,isLandmark:!0,landmarkType:"intersection"},{id:"di_ground_e",name:"地面东口",x:170,y:0,z:0,layer:0},{id:"di_over_n",name:"高架北口",x:0,y:180,z:20,layer:1},{id:"di_over_s",name:"高架南口",x:0,y:-180,z:20,layer:1},{id:"di_ramp_nw",name:"西北匝道",x:-88,y:84,z:10,layer:.5},{id:"di_ramp_ne",name:"东北匝道",x:88,y:84,z:10,layer:.5},{id:"di_ramp_sw",name:"西南匝道",x:-88,y:-84,z:10,layer:.5},{id:"di_ramp_se",name:"东南匝道",x:88,y:-84,z:10,layer:.5}],e=[...Ze({id:"di_ground_a",from:"di_ground_w",to:"di_ground_c",length:170,speedLimit:40,congestion:.24,type:"ground",segmentName:"桥下地面西段",geometryPath:[{x:-170,y:-8,z:0},{x:-92,y:-4,z:0},{x:-28,y:-1,z:0},{x:0,y:0,z:0}]}),...Ze({id:"di_ground_b",from:"di_ground_c",to:"di_ground_e",length:170,speedLimit:40,congestion:.24,type:"ground",segmentName:"桥下地面东段",geometryPath:[{x:0,y:0,z:0},{x:28,y:1,z:0},{x:92,y:4,z:0},{x:170,y:8,z:0}]}),...Ze({id:"di_over",from:"di_over_s",to:"di_over_n",length:360,speedLimit:65,congestion:.08,type:"overpass",segmentName:"南北向高架主路",geometryPath:[{x:0,y:-180,z:20},{x:-10,y:-90,z:20},{x:-6,y:0,z:20},{x:8,y:92,z:20},{x:0,y:180,z:20}]}),...Ze({id:"di_nw",from:"di_ground_w",to:"di_over_n",length:240,speedLimit:30,congestion:.18,type:"ramp",segmentName:"西向北上匝道",geometryPath:[{x:-170,y:0,z:0},{x:-138,y:18,z:2},{x:-88,y:84,z:10},{x:-42,y:140,z:17},{x:0,y:180,z:20}]}),...Ze({id:"di_ne",from:"di_ground_e",to:"di_over_n",length:240,speedLimit:30,congestion:.18,type:"ramp",segmentName:"东向北上匝道",geometryPath:[{x:170,y:0,z:0},{x:138,y:18,z:2},{x:88,y:84,z:10},{x:42,y:140,z:17},{x:0,y:180,z:20}]}),...Ze({id:"di_sw",from:"di_ground_w",to:"di_over_s",length:240,speedLimit:30,congestion:.18,type:"ramp",segmentName:"西向南上匝道",geometryPath:[{x:-170,y:0,z:0},{x:-138,y:-18,z:2},{x:-88,y:-84,z:10},{x:-42,y:-140,z:17},{x:0,y:-180,z:20}]}),...Ze({id:"di_se",from:"di_ground_e",to:"di_over_s",length:240,speedLimit:30,congestion:.18,type:"ramp",segmentName:"东向南上匝道",geometryPath:[{x:170,y:0,z:0},{x:138,y:-18,z:2},{x:88,y:-84,z:10},{x:42,y:-140,z:17},{x:0,y:-180,z:20}]})];return{nodes:t,edges:e,buildings:[]}}function TA(){const t=[{id:"bu_ground_w",name:"桥下西口",x:-160,y:-10,z:0,layer:0},{id:"bu_ground_c",name:"桥下中段",x:0,y:-10,z:0,layer:0,isLandmark:!0,landmarkType:"intersection"},{id:"bu_ground_e",name:"桥下东口",x:160,y:-10,z:0,layer:0},{id:"bu_over_w",name:"桥面西侧",x:-160,y:18,z:16,layer:1},{id:"bu_over_c",name:"桥面中段",x:0,y:18,z:16,layer:1},{id:"bu_over_e",name:"桥面东侧",x:160,y:18,z:16,layer:1},{id:"bu_north",name:"北侧接入",x:0,y:150,z:0,layer:0}],e=[...Ze({id:"bu_ground_a",from:"bu_ground_w",to:"bu_ground_c",length:160,speedLimit:35,congestion:.22,type:"ground",segmentName:"桥下通道西段",geometryPath:[{x:-160,y:-24,z:0},{x:-92,y:-18,z:0},{x:-28,y:-12,z:0},{x:0,y:-10,z:0}]}),...Ze({id:"bu_ground_b",from:"bu_ground_c",to:"bu_ground_e",length:160,speedLimit:35,congestion:.22,type:"ground",segmentName:"桥下通道东段",geometryPath:[{x:0,y:-10,z:0},{x:28,y:-8,z:0},{x:92,y:-2,z:0},{x:160,y:4,z:0}]}),...Ze({id:"bu_over_a",from:"bu_over_w",to:"bu_over_c",length:160,speedLimit:55,congestion:.1,type:"overpass",segmentName:"桥面西段",geometryPath:[{x:-160,y:0,z:16},{x:-90,y:8,z:16},{x:-32,y:14,z:16},{x:0,y:18,z:16}]}),...Ze({id:"bu_over_b",from:"bu_over_c",to:"bu_over_e",length:160,speedLimit:55,congestion:.1,type:"overpass",segmentName:"桥面东段",geometryPath:[{x:0,y:18,z:16},{x:32,y:14,z:16},{x:90,y:8,z:16},{x:160,y:0,z:16}]}),...Ze({id:"bu_north_link",from:"bu_north",to:"bu_ground_c",length:160,speedLimit:35,congestion:.18,type:"ground",segmentName:"北侧桥下接入",geometryPath:[{x:0,y:150,z:0},{x:-8,y:90,z:0},{x:-6,y:28,z:0},{x:0,y:-10,z:0}]})];return{nodes:t,edges:e,buildings:[]}}function bA(){const t=[{id:"meh_w_over",name:"西向高架入口",x:-260,y:20,z:22,layer:1},{id:"meh_center_over",name:"中央高架转换枢纽",x:0,y:0,z:24,layer:1,isLandmark:!0,landmarkType:"intersection"},{id:"meh_e_over",name:"东向高架主出口",x:260,y:-10,z:22,layer:1},{id:"meh_s_over",name:"南向快速路入口",x:-20,y:-260,z:20,layer:1},{id:"meh_ne_over",name:"东北高架分流口",x:220,y:180,z:24,layer:1},{id:"meh_ground_w",name:"西侧桥下辅路",x:-250,y:-35,z:0,layer:0},{id:"meh_ground_c",name:"桥下集散中心",x:0,y:-30,z:0,layer:0,isLandmark:!0,landmarkType:"intersection"},{id:"meh_ground_e",name:"东侧桥下辅路",x:250,y:-25,z:0,layer:0},{id:"meh_sw_ground",name:"西南城区入口",x:-180,y:-220,z:0,layer:0},{id:"meh_se_ground",name:"东南城区入口",x:180,y:-220,z:0,layer:0},{id:"meh_n_ground",name:"北侧桥下出口",x:20,y:220,z:0,layer:0},{id:"meh_ground_ne",name:"东北出城地面口",x:210,y:240,z:0,layer:0,isLandmark:!0,landmarkType:"intersection"},{id:"meh_under_west_hub",name:"西桥下转换点",x:-120,y:-50,z:0,layer:0,isLandmark:!0,landmarkType:"intersection"},{id:"meh_under_east_hub",name:"东桥下转换点",x:128,y:-34,z:0,layer:0,isLandmark:!0,landmarkType:"intersection"},{id:"meh_service_south",name:"南侧服务路口",x:0,y:-260,z:0,layer:0,isLandmark:!0,landmarkType:"intersection"}],e=[...Ze({id:"meh_over_main_w",from:"meh_w_over",to:"meh_center_over",length:265,speedLimit:70,congestion:.12,type:"overpass",segmentName:"城市快速路高架西段",geometryPath:[{x:-260,y:20,z:22},{x:-180,y:18,z:23},{x:-90,y:8,z:24},{x:0,y:0,z:24}]}),...Ze({id:"meh_over_main_e",from:"meh_center_over",to:"meh_e_over",length:265,speedLimit:70,congestion:.12,type:"overpass",segmentName:"城市快速路高架东段",geometryPath:[{x:0,y:0,z:24},{x:90,y:-6,z:24},{x:180,y:-8,z:23},{x:260,y:-10,z:22}]}),...Ze({id:"meh_over_branch_s",from:"meh_s_over",to:"meh_center_over",length:270,speedLimit:65,congestion:.14,type:"overpass",segmentName:"南向高架主接入",geometryPath:[{x:-20,y:-260,z:20},{x:-28,y:-180,z:20},{x:-20,y:-92,z:22},{x:-8,y:-30,z:24},{x:0,y:0,z:24}]}),...Ze({id:"meh_over_branch_ne",from:"meh_center_over",to:"meh_ne_over",length:305,speedLimit:65,congestion:.12,type:"overpass",segmentName:"高架东北向分流主线",geometryPath:[{x:0,y:0,z:24},{x:55,y:28,z:24},{x:120,y:90,z:24},{x:172,y:138,z:24},{x:220,y:180,z:24}]}),...Ze({id:"meh_ground_main_w",from:"meh_ground_w",to:"meh_under_west_hub",length:130,speedLimit:40,congestion:.28,type:"ground",segmentName:"西桥下辅路主段",geometryPath:[{x:-250,y:-35,z:0},{x:-200,y:-40,z:0},{x:-155,y:-42,z:0},{x:-120,y:-50,z:0}]}),...Ze({id:"meh_ground_mid",from:"meh_under_west_hub",to:"meh_ground_c",length:122,speedLimit:35,congestion:.26,type:"ground",segmentName:"西桥下转换点至集散中心",geometryPath:[{x:-120,y:-50,z:0},{x:-85,y:-45,z:0},{x:-42,y:-36,z:0},{x:0,y:-30,z:0}]}),...Ze({id:"meh_ground_main_e",from:"meh_ground_c",to:"meh_under_east_hub",length:130,speedLimit:35,congestion:.24,type:"ground",segmentName:"集散中心至东桥下转换点",geometryPath:[{x:0,y:-30,z:0},{x:38,y:-28,z:0},{x:82,y:-30,z:0},{x:128,y:-34,z:0}]}),...Ze({id:"meh_ground_main_e2",from:"meh_under_east_hub",to:"meh_ground_e",length:124,speedLimit:40,congestion:.22,type:"ground",segmentName:"东桥下辅路主段",geometryPath:[{x:128,y:-34,z:0},{x:168,y:-32,z:0},{x:210,y:-28,z:0},{x:250,y:-25,z:0}]}),...Ze({id:"meh_ground_sw",from:"meh_sw_ground",to:"meh_under_west_hub",length:265,speedLimit:35,congestion:.22,type:"ground",segmentName:"西南城区入口联络道",geometryPath:[{x:-180,y:-220,z:0},{x:-150,y:-180,z:0},{x:-128,y:-120,z:0},{x:-120,y:-50,z:0}]}),...Ze({id:"meh_ground_se",from:"meh_se_ground",to:"meh_under_east_hub",length:250,speedLimit:35,congestion:.24,type:"ground",segmentName:"东南城区入口联络道",geometryPath:[{x:180,y:-220,z:0},{x:162,y:-175,z:0},{x:142,y:-110,z:0},{x:128,y:-34,z:0}]}),...Ze({id:"meh_ground_center_n",from:"meh_ground_c",to:"meh_n_ground",length:255,speedLimit:40,congestion:.2,type:"ground",segmentName:"桥下北向出城辅路",geometryPath:[{x:0,y:-30,z:0},{x:5,y:32,z:0},{x:10,y:102,z:0},{x:20,y:220,z:0}]}),...Ze({id:"meh_ground_ne_link",from:"meh_n_ground",to:"meh_ground_ne",length:195,speedLimit:40,congestion:.18,type:"ground",segmentName:"北侧地面联络至东北出城口",geometryPath:[{x:20,y:220,z:0},{x:72,y:225,z:0},{x:138,y:232,z:0},{x:210,y:240,z:0}]}),...Ze({id:"meh_service_road",from:"meh_service_south",to:"meh_ground_c",length:235,speedLimit:30,congestion:.2,type:"ground",segmentName:"南侧服务路进桥下集散区",geometryPath:[{x:0,y:-260,z:0},{x:0,y:-188,z:0},{x:0,y:-112,z:0},{x:0,y:-30,z:0}]}),...Ze({id:"meh_ramp_sw_to_over",from:"meh_sw_ground",to:"meh_center_over",length:330,speedLimit:30,congestion:.18,type:"ramp",segmentName:"西南半定向上桥匝道",geometryPath:[{x:-180,y:-220,z:0},{x:-165,y:-180,z:2},{x:-120,y:-120,z:10},{x:-72,y:-68,z:16},{x:-30,y:-25,z:21},{x:0,y:0,z:24}]}),...Ze({id:"meh_ramp_se_to_over",from:"meh_se_ground",to:"meh_center_over",length:330,speedLimit:30,congestion:.18,type:"ramp",segmentName:"东南半定向上桥匝道",geometryPath:[{x:180,y:-220,z:0},{x:165,y:-178,z:2},{x:120,y:-120,z:10},{x:70,y:-66,z:16},{x:28,y:-22,z:21},{x:0,y:0,z:24}]}),...Ze({id:"meh_ramp_over_to_ne",from:"meh_e_over",to:"meh_ne_over",length:295,speedLimit:40,congestion:.16,type:"ramp",segmentName:"东向高架转东北分流匝道",geometryPath:[{x:260,y:-10,z:22},{x:225,y:8,z:22},{x:180,y:40,z:23},{x:120,y:90,z:24},{x:170,y:138,z:24},{x:220,y:180,z:24}]}),...Ze({id:"meh_ramp_center_to_ground",from:"meh_center_over",to:"meh_ground_e",length:305,speedLimit:35,congestion:.18,type:"ramp",segmentName:"高架汇聚后下桥至东辅路",geometryPath:[{x:0,y:0,z:24},{x:40,y:-18,z:22},{x:82,y:-45,z:16},{x:132,y:-52,z:9},{x:190,y:-40,z:3},{x:250,y:-25,z:0}]}),...Ze({id:"meh_ramp_ne_to_ground",from:"meh_ne_over",to:"meh_ground_ne",length:278,speedLimit:35,congestion:.16,type:"ramp",segmentName:"东北高架出口下坡至地面",geometryPath:[{x:220,y:180,z:24},{x:190,y:190,z:22},{x:150,y:205,z:18},{x:105,y:220,z:12},{x:58,y:232,z:6},{x:210,y:240,z:0}]})];return{nodes:t,edges:e,buildings:[]}}function AA(t){var e;return((e=yc.find(n=>n.kind===t))==null?void 0:e.recommendedRoute)??yc[0].recommendedRoute}function Gg(t){return t.nodes.some(e=>e.id==="t_ic_hub")}function CA(t){switch(t){case"current-campus":return Vg(zs);case"stacked-overpass":return wA();case"diamond-interchange":return EA();case"bridge-underpass":return TA();case"multi-level-express-hub":return bA();default:return Vg(zs)}}function sx(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=sx(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function ox(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=sx(t))&&(i&&(i+=" "),i+=e);return i}const Hg=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Wg=ox,RA=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return Wg(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const u=n==null?void 0:n[c],h=s==null?void 0:s[c];if(u===null)return null;const f=Hg(u)||Hg(h);return r[c][f]}),a=n&&Object.entries(n).reduce((c,u)=>{let[h,f]=u;return f===void 0||(c[h]=f),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:h,className:f,...p}=u;return Object.entries(p).every(g=>{let[v,m]=g;return Array.isArray(m)?m.includes({...s,...a}[v]):{...s,...a}[v]===m})?[...c,h,f]:c},[]);return Wg(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},hp="-",PA=t=>{const e=LA(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(hp);return a[0]===""&&a.length!==1&&a.shift(),ax(a,e)||NA(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},ax=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?ax(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(hp);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},jg=/^\[(.+)\]$/,NA=t=>{if(jg.test(t)){const e=jg.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},LA=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return IA(Object.entries(t.classGroups),n).forEach(([s,o])=>{Yh(o,i,s,e)}),i},Yh=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:Xg(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(DA(r)){Yh(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{Yh(o,Xg(e,s),n,i)})})},Xg=(t,e)=>{let n=t;return e.split(hp).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},DA=t=>t.isThemeGetter,IA=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,UA=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},lx="!",FA=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,u=0,h;for(let m=0;m<a.length;m++){let d=a[m];if(c===0){if(d===r&&(i||a.slice(m,m+s)===e)){l.push(a.slice(u,m)),u=m+s;continue}if(d==="/"){h=m;continue}}d==="["?c++:d==="]"&&c--}const f=l.length===0?a:a.substring(u),p=f.startsWith(lx),g=p?f.substring(1):f,v=h&&h>u?h-u:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:v}};return n?a=>n({className:a,parseClassName:o}):o},kA=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},OA=t=>({cache:UA(t.cacheSize),parseClassName:FA(t),...PA(t)}),zA=/\s+/,BA=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(zA);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:u,hasImportantModifier:h,baseClassName:f,maybePostfixModifierPosition:p}=n(c);let g=!!p,v=i(g?f.substring(0,p):f);if(!v){if(!g){a=c+(a.length>0?" "+a:a);continue}if(v=i(f),!v){a=c+(a.length>0?" "+a:a);continue}g=!1}const m=kA(u).join(":"),d=h?m+lx:m,_=d+v;if(s.includes(_))continue;s.push(_);const x=r(v,g);for(let S=0;S<x.length;++S){const w=x[S];s.push(d+w)}a=c+(a.length>0?" "+a:a)}return a};function VA(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=cx(e))&&(i&&(i+=" "),i+=n);return i}const cx=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=cx(t[i]))&&(n&&(n+=" "),n+=e);return n};function GA(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((u,h)=>h(u),t());return n=OA(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const u=BA(l,n);return r(l,u),u}return function(){return s(VA.apply(null,arguments))}}const yt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},ux=/^\[(?:([a-z-]+):)?(.+)\]$/i,HA=/^\d+\/\d+$/,WA=new Set(["px","full","screen"]),jA=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,XA=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,YA=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,qA=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$A=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Di=t=>qs(t)||WA.has(t)||HA.test(t),sr=t=>vo(t,"length",iC),qs=t=>!!t&&!Number.isNaN(Number(t)),nd=t=>vo(t,"number",qs),Fo=t=>!!t&&Number.isInteger(Number(t)),KA=t=>t.endsWith("%")&&qs(t.slice(0,-1)),We=t=>ux.test(t),or=t=>jA.test(t),ZA=new Set(["length","size","percentage"]),JA=t=>vo(t,ZA,dx),QA=t=>vo(t,"position",dx),eC=new Set(["image","url"]),tC=t=>vo(t,eC,sC),nC=t=>vo(t,"",rC),ko=()=>!0,vo=(t,e,n)=>{const i=ux.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},iC=t=>XA.test(t)&&!YA.test(t),dx=()=>!1,rC=t=>qA.test(t),sC=t=>$A.test(t),oC=()=>{const t=yt("colors"),e=yt("spacing"),n=yt("blur"),i=yt("brightness"),r=yt("borderColor"),s=yt("borderRadius"),o=yt("borderSpacing"),a=yt("borderWidth"),l=yt("contrast"),c=yt("grayscale"),u=yt("hueRotate"),h=yt("invert"),f=yt("gap"),p=yt("gradientColorStops"),g=yt("gradientColorStopPositions"),v=yt("inset"),m=yt("margin"),d=yt("opacity"),_=yt("padding"),x=yt("saturate"),S=yt("scale"),w=yt("sepia"),A=yt("skew"),C=yt("space"),N=yt("translate"),E=()=>["auto","contain","none"],T=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",We,e],F=()=>[We,e],B=()=>["",Di,sr],$=()=>["auto",qs,We],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],X=()=>["solid","dashed","dotted","double","none"],G=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],z=()=>["start","end","center","between","around","evenly","stretch"],Z=()=>["","0",We],H=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ee=()=>[qs,We];return{cacheSize:500,separator:":",theme:{colors:[ko],spacing:[Di,sr],blur:["none","",or,We],brightness:ee(),borderColor:[t],borderRadius:["none","","full",or,We],borderSpacing:F(),borderWidth:B(),contrast:ee(),grayscale:Z(),hueRotate:ee(),invert:Z(),gap:F(),gradientColorStops:[t],gradientColorStopPositions:[KA,sr],inset:D(),margin:D(),opacity:ee(),padding:F(),saturate:ee(),scale:ee(),sepia:Z(),skew:ee(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",We]}],container:["container"],columns:[{columns:[or]}],"break-after":[{"break-after":H()}],"break-before":[{"break-before":H()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),We]}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Fo,We]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",We]}],grow:[{grow:Z()}],shrink:[{shrink:Z()}],order:[{order:["first","last","none",Fo,We]}],"grid-cols":[{"grid-cols":[ko]}],"col-start-end":[{col:["auto",{span:["full",Fo,We]},We]}],"col-start":[{"col-start":$()}],"col-end":[{"col-end":$()}],"grid-rows":[{"grid-rows":[ko]}],"row-start-end":[{row:["auto",{span:[Fo,We]},We]}],"row-start":[{"row-start":$()}],"row-end":[{"row-end":$()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",We]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",We]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...z()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...z(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...z(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[_]}],px:[{px:[_]}],py:[{py:[_]}],ps:[{ps:[_]}],pe:[{pe:[_]}],pt:[{pt:[_]}],pr:[{pr:[_]}],pb:[{pb:[_]}],pl:[{pl:[_]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",We,e]}],"min-w":[{"min-w":[We,e,"min","max","fit"]}],"max-w":[{"max-w":[We,e,"none","full","min","max","fit","prose",{screen:[or]},or]}],h:[{h:[We,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[We,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[We,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[We,e,"auto","min","max","fit"]}],"font-size":[{text:["base",or,sr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",nd]}],"font-family":[{font:[ko]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",We]}],"line-clamp":[{"line-clamp":["none",qs,nd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Di,We]}],"list-image":[{"list-image":["none",We]}],"list-style-type":[{list:["none","disc","decimal",We]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[d]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[d]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...X(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Di,sr]}],"underline-offset":[{"underline-offset":["auto",Di,We]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",We]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",We]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[d]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),QA]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",JA]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},tC]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[d]}],"border-style":[{border:[...X(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[d]}],"divide-style":[{divide:X()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...X()]}],"outline-offset":[{"outline-offset":[Di,We]}],"outline-w":[{outline:[Di,sr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[d]}],"ring-offset-w":[{"ring-offset":[Di,sr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",or,nC]}],"shadow-color":[{shadow:[ko]}],opacity:[{opacity:[d]}],"mix-blend":[{"mix-blend":[...G(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":G()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",or,We]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[x]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[d]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",We]}],duration:[{duration:ee()}],ease:[{ease:["linear","in","out","in-out",We]}],delay:[{delay:ee()}],animate:[{animate:["none","spin","ping","pulse","bounce",We]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[Fo,We]}],"translate-x":[{"translate-x":[N]}],"translate-y":[{"translate-y":[N]}],"skew-x":[{"skew-x":[A]}],"skew-y":[{"skew-y":[A]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",We]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",We]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",We]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Di,sr,nd]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},aC=GA(oC);function os(...t){return aC(ox(t))}const lC=RA("inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-border bg-transparent hover:bg-secondary hover:text-secondary-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-secondary hover:text-secondary-foreground",link:"text-primary underline-offset-4 hover:underline",glow:"bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30 hover:shadow-neon",accent:"bg-accent text-accent-foreground hover:bg-accent/90 shadow-neon-accent",success:"bg-success text-success-foreground hover:bg-success/90"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Ct=oe.forwardRef(({className:t,variant:e,size:n,...i},r)=>M.jsx("button",{className:os(lC({variant:e,size:n,className:t})),ref:r,...i}));Ct.displayName="Button";const Yt=oe.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:os("rounded-xl border border-border bg-card text-card-foreground shadow-glass glass",t),...e}));Yt.displayName="Card";const Jt=oe.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:os("flex flex-col space-y-1.5 p-4",t),...e}));Jt.displayName="CardHeader";const Qt=oe.forwardRef(({className:t,...e},n)=>M.jsx("h3",{ref:n,className:os("text-lg font-semibold leading-none tracking-tight text-gradient",t),...e}));Qt.displayName="CardTitle";const cC=oe.forwardRef(({className:t,...e},n)=>M.jsx("p",{ref:n,className:os("text-sm text-muted-foreground",t),...e}));cC.displayName="CardDescription";const qt=oe.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:os("p-4 pt-0",t),...e}));qt.displayName="CardContent";const uC=oe.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:os("flex items-center p-4 pt-0",t),...e}));uC.displayName="CardFooter";/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),He=(t,e)=>{const n=oe.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>oe.createElement("svg",{ref:u,...dC,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${hC(t)}`,a].join(" "),...c},[...e.map(([h,f])=>oe.createElement(h,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=He("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=He("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=He("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=He("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=He("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=He("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=He("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=He("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=He("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=He("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=He("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=He("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=He("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=He("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=He("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=He("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=He("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=He("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=He("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=He("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=He("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=He("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=He("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=He("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=He("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=He("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=He("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=He("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=He("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=He("PanelRightOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=He("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=He("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=He("Rewind",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=He("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=He("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=He("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=He("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=He("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=He("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=He("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=He("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=He("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$g=({label:t,placeholder:e="搜索地点...",nodes:n,selectedId:i,onChange:r,icon:s="start"})=>{const[o,a]=oe.useState(""),[l,c]=oe.useState(!1),[u,h]=oe.useState(-1),f=oe.useRef(null),p=oe.useRef(null),g=oe.useMemo(()=>n.find(w=>w.id===i),[n,i]),v=oe.useMemo(()=>n.filter(w=>w.isLandmark),[n]),m=oe.useMemo(()=>{if(!o.trim())return v.slice(0,10);const w=o.toLowerCase(),A=[];for(const C of v)(C.name.toLowerCase().includes(w)||C.id.toLowerCase().includes(w))&&A.push(C);return A.sort((C,N)=>{const E=C.name.toLowerCase().startsWith(w),T=N.name.toLowerCase().startsWith(w);return E&&!T?-1:!E&&T?1:0}),A.slice(0,8)},[o,v]),d=w=>{switch(w){case"gate":return M.jsx(Ca,{className:"h-4 w-4 text-green-500"});case"shop":return M.jsx(xC,{className:"h-4 w-4 text-red-500"});case"bus_stop":return M.jsx(yC,{className:"h-4 w-4 text-yellow-500"});case"intersection":return M.jsx(Sc,{className:"h-4 w-4 text-cyan-500"});default:return M.jsx(Sc,{className:"h-4 w-4 text-muted-foreground"})}},_=w=>{var A;if(l)switch(w.key){case"ArrowDown":w.preventDefault(),h(C=>C<m.length-1?C+1:0);break;case"ArrowUp":w.preventDefault(),h(C=>C>0?C-1:m.length-1);break;case"Enter":w.preventDefault(),u>=0&&m[u]&&x(m[u]);break;case"Escape":c(!1),(A=f.current)==null||A.blur();break}},x=w=>{r(w.id),a(""),c(!1),h(-1)},S=()=>{var w;r(null),a(""),(w=f.current)==null||w.focus()};return oe.useEffect(()=>{const w=A=>{p.current&&!p.current.contains(A.target)&&f.current&&!f.current.contains(A.target)&&c(!1)};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),M.jsxs("div",{className:"relative",children:[M.jsxs("label",{className:"text-xs text-muted-foreground block mb-1 flex items-center gap-1",children:[s==="start"?M.jsx("span",{className:"w-2 h-2 rounded-full bg-green-500"}):M.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500"}),t]}),M.jsxs("div",{className:"relative",children:[g&&!l?M.jsxs("div",{className:"w-full h-10 px-3 rounded-lg bg-input border border-border flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors",onClick:()=>{c(!0),setTimeout(()=>{var w;return(w=f.current)==null?void 0:w.focus()},0)},children:[M.jsxs("div",{className:"flex items-center gap-2 truncate",children:[d(g.landmarkType),M.jsx("span",{className:"text-sm truncate",children:g.name})]}),M.jsx("button",{onClick:w=>{w.stopPropagation(),S()},className:"p-1 hover:bg-muted rounded",children:M.jsx(gx,{className:"h-3 w-3 text-muted-foreground"})})]}):M.jsxs("div",{className:"relative",children:[M.jsx(zC,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),M.jsx("input",{ref:f,type:"text",value:o,onChange:w=>{a(w.target.value),c(!0),h(-1)},onFocus:()=>c(!0),onKeyDown:_,placeholder:e,className:"w-full h-10 pl-9 pr-3 rounded-lg bg-input border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-muted-foreground"})]}),l&&M.jsxs("div",{ref:p,className:"absolute w-full mt-1 py-1 rounded-lg bg-popover border border-border shadow-lg max-h-64 overflow-y-auto",style:{zIndex:9999},children:[m.length>0?M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"px-3 py-1.5 text-xs text-muted-foreground border-b border-border",children:o?`搜索结果 (${m.length})`:"热门地点"}),m.map((w,A)=>M.jsxs("div",{className:`px-3 py-2 flex items-center gap-2 cursor-pointer transition-colors ${A===u?"bg-primary/10 text-primary":"hover:bg-muted"}`,onClick:()=>x(w),onMouseEnter:()=>h(A),children:[d(w.landmarkType),M.jsxs("div",{className:"flex-1 min-w-0",children:[M.jsx("div",{className:"text-sm truncate",children:w.name}),M.jsxs("div",{className:"text-xs text-muted-foreground truncate",children:[w.landmarkType==="gate"&&"校门",w.landmarkType==="shop"&&"商店",w.landmarkType==="bus_stop"&&"公交站",w.landmarkType==="intersection"&&"路口"]})]})]},w.id))]}):M.jsx("div",{className:"px-3 py-4 text-center text-sm text-muted-foreground",children:"未找到相关地点"}),M.jsx("div",{className:"px-3 py-2 text-xs text-muted-foreground border-t border-border bg-muted/30",children:"💡 也可以在地图上点击地标选择"})]})]})]})},Kg=[{title:"快速体验",routes:[{id:1,name:"东门 → 南门肯德基",start:"bjfu_east",end:"kfc_south",desc:"校园日常出行"},{id:2,name:"学院路 → 东南立交",start:"xueyuan_s1",end:"interchange_sw",desc:"地面道路接入立交"},{id:3,name:"西门 → 东门",start:"bjfu_west",end:"bjfu_east",desc:"横穿校园主轴"}]},{title:"立体演示",hint:"优先选择含上桥、下桥、桥下通行的路线，对比 2D/3D 与跟车视角。",routes:[{id:4,name:"校园中心 → 高架东端",start:"campus_c",end:"t_ic_a_e",desc:"典型上桥演示"},{id:5,name:"南端 → 东端",start:"t_ic_b_s",end:"t_ic_a_e",desc:"同起点上高架"},{id:6,name:"高架东端 → 南侧桥下",start:"t_ic_a_e",end:"t_ic_under_s",desc:"下桥再进入桥下道路"},{id:7,name:"桥下西段 → 南侧桥下",start:"t_ic_under_w",end:"t_ic_under_s",desc:"全程地面桥下对照"}]}],rd="nav_route_history",HC=({nodes:t,startNode:e,endNode:n,onStartNodeChange:i,onEndNodeChange:r,onPlanPath:s,recommendedRoutes:o=[],isPlaying:a,onPlayPause:l,onReset:c,onPrevNode:u,onNextNode:h,onSpeedUp:f,onSpeedDown:p,speedMultiplier:g,is3DMode:v,onToggleViewMode:m,isFollowMode:d,onToggleFollowMode:_,config:x,onConfigChange:S,hasPath:w,currentNodeIndex:A,totalNodes:C})=>{const[N,E]=oe.useState(!1),[T,D]=oe.useState(!0),[F,B]=oe.useState([]),$=oe.useMemo(()=>o.length===0?Kg:[{title:"当前模板推荐",hint:"模板切换后会自动更新，优先用这些路线做演示。",routes:o},...Kg],[o]);oe.useEffect(()=>{try{const H=localStorage.getItem(rd);H&&B(JSON.parse(H))}catch(H){console.error("加载历史记录失败",H)}},[]);const q=()=>{if(!e||!n)return;const H=t.find(Be=>Be.id===e),ee=t.find(Be=>Be.id===n);if(!H||!ee)return;const Le=[{start:e,end:n,startName:H.name,endName:ee.name,timestamp:Date.now()},...F.filter(Be=>!(Be.start===e&&Be.end===n))].slice(0,5);B(Le);try{localStorage.setItem(rd,JSON.stringify(Le))}catch(Be){console.error("保存历史记录失败",Be)}},X=H=>{i(H.start),r(H.end)},G=H=>{i(H.start),r(H.end)},z=()=>{B([]),localStorage.removeItem(rd)},Z=()=>{q(),s()};return M.jsxs("div",{className:"space-y-3 w-80",children:[M.jsxs(Yt,{className:"relative",style:{zIndex:100},children:[M.jsx(Jt,{className:"pb-2",children:M.jsxs(Qt,{className:"flex items-center gap-2 text-base",children:[M.jsx(Hc,{className:"h-4 w-4 text-primary"}),"路径规划"]})}),M.jsxs(qt,{className:"space-y-3",children:[M.jsx($g,{label:"起点",placeholder:"搜索起点...",nodes:t,selectedId:e,onChange:i,icon:"start"}),M.jsx($g,{label:"终点",placeholder:"搜索终点...",nodes:t,selectedId:n,onChange:r,icon:"end"}),M.jsxs(Ct,{onClick:Z,disabled:!e||!n,className:"w-full",variant:"glow",children:[M.jsx(Ca,{className:"h-4 w-4 mr-2"}),"开始导航"]}),M.jsxs("div",{className:"pt-2 border-t border-border",children:[M.jsxs("div",{className:"flex items-center justify-between cursor-pointer mb-2",onClick:()=>D(!T),children:[M.jsxs("span",{className:"text-xs text-muted-foreground flex items-center gap-1",children:[M.jsx(mx,{className:"h-3 w-3 text-yellow-500"}),"推荐路线"]}),M.jsx(id,{className:`h-3 w-3 text-muted-foreground transition-transform ${T?"rotate-90":""}`})]}),T&&M.jsx("div",{className:"space-y-2.5",children:$.map(H=>M.jsxs("div",{className:"space-y-1.5",children:[M.jsx("div",{className:"text-[10px] font-semibold text-foreground/85 uppercase tracking-wide",children:H.title}),H.hint?M.jsx("p",{className:"text-[10px] text-muted-foreground leading-snug pl-0.5",children:H.hint}):null,H.routes.map(ee=>M.jsx("button",{type:"button",onClick:()=>X(ee),className:"w-full text-left px-2.5 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-colors group",children:M.jsxs("div",{className:"flex items-center justify-between gap-2",children:[M.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[M.jsx(VC,{className:"h-3 w-3 text-yellow-500 shrink-0"}),M.jsx("span",{className:"text-xs font-medium text-foreground group-hover:text-primary truncate",children:ee.name})]}),M.jsx("span",{className:"rounded-full border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground",children:ee.desc})]})},ee.id))]},H.title))})]}),F.length>0&&M.jsxs("div",{className:"pt-2 border-t border-border",children:[M.jsxs("div",{className:"flex items-center justify-between mb-2",children:[M.jsxs("span",{className:"text-xs text-muted-foreground flex items-center gap-1",children:[M.jsx(fx,{className:"h-3 w-3"}),"历史记录"]}),M.jsx("button",{onClick:z,className:"text-xs text-muted-foreground hover:text-destructive",children:"清除"})]}),M.jsx("div",{className:"space-y-1",children:F.map((H,ee)=>M.jsx("button",{onClick:()=>G(H),className:"w-full text-left px-2.5 py-1.5 rounded-md hover:bg-muted transition-colors flex items-center justify-between group",children:M.jsxs("span",{className:"text-xs truncate",children:[M.jsx("span",{className:"text-green-500",children:"●"})," ",H.startName," → ",M.jsx("span",{className:"text-red-500",children:"●"})," ",H.endName]})},ee))})]})]})]}),M.jsxs(Yt,{style:{zIndex:50},children:[M.jsx(Jt,{className:"pb-2",children:M.jsxs(Qt,{className:"flex items-center gap-2 text-base",children:[M.jsx(qh,{className:"h-4 w-4 text-primary"}),"仿真控制"]})}),M.jsxs(qt,{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-center gap-1.5",children:[M.jsx(Ct,{variant:"outline",size:"icon",onClick:u,disabled:!w,title:"上一节点 (←)",className:"h-8 w-8",children:M.jsx(SC,{className:"h-4 w-4"})}),M.jsx(Ct,{variant:"outline",size:"icon",onClick:p,disabled:!w,title:"减速 (↓)",className:"h-8 w-8",children:M.jsx(FC,{className:"h-3 w-3"})}),M.jsx(Ct,{variant:a?"accent":"glow",size:"icon",onClick:l,disabled:!w,title:"播放/暂停 (空格)",className:"h-10 w-10",children:a?M.jsx(IC,{className:"h-4 w-4"}):M.jsx(UC,{className:"h-4 w-4"})}),M.jsx(Ct,{variant:"outline",size:"icon",onClick:f,disabled:!w,title:"加速 (↑)",className:"h-8 w-8",children:M.jsx(EC,{className:"h-3 w-3"})}),M.jsx(Ct,{variant:"outline",size:"icon",onClick:h,disabled:!w,title:"下一节点 (→)",className:"h-8 w-8",children:M.jsx(id,{className:"h-4 w-4"})}),M.jsx(Ct,{variant:"outline",size:"icon",onClick:c,disabled:!w,title:"重置",className:"h-8 w-8",children:M.jsx(kC,{className:"h-3 w-3"})})]}),M.jsxs("div",{className:"flex items-center justify-between text-xs",children:[M.jsxs("span",{className:"text-muted-foreground",children:["速度: ",M.jsxs("span",{className:"text-primary font-medium",children:[g.toFixed(1),"x"]})]}),w&&M.jsxs("span",{className:"text-muted-foreground",children:["进度: ",M.jsxs("span",{className:"text-primary font-medium",children:[A+1,"/",C]})]})]}),w&&M.jsx("div",{className:"h-1.5 bg-muted rounded-full overflow-hidden",children:M.jsx("div",{className:"h-full bg-primary transition-all duration-300",style:{width:`${(A+1)/C*100}%`}})})]})]}),M.jsx(Yt,{style:{zIndex:50},children:M.jsxs(qt,{className:"py-3",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsxs("div",{className:"flex-1 grid grid-cols-2 gap-1.5",children:[M.jsxs(Ct,{variant:v?"glow":"outline",onClick:()=>!v&&m(),size:"sm",className:"h-8",children:[M.jsx(_C,{className:"h-3 w-3 mr-1"}),"3D"]}),M.jsxs(Ct,{variant:v?"outline":"glow",onClick:()=>v&&m(),size:"sm",className:"h-8",children:[M.jsx(wC,{className:"h-3 w-3 mr-1"}),"2D"]})]}),M.jsxs(Ct,{variant:d?"accent":"outline",onClick:_,disabled:!w,size:"sm",className:"h-8",children:[M.jsx(qh,{className:"h-3 w-3 mr-1"}),"跟车"]})]}),M.jsxs("p",{className:"text-[11px] text-muted-foreground leading-snug mt-2 flex gap-1.5 items-start",children:[M.jsx(px,{className:"h-3.5 w-3.5 shrink-0 text-emerald-500/90 mt-0.5"}),M.jsxs("span",{children:["当前路网为",M.jsx("strong",{className:"text-foreground/90",children:"纯地面道路"}),"；2D 俯视便于看整体走向，3D 便于观察坡度与跟车。"]})]})]})}),M.jsxs(Yt,{style:{zIndex:50},children:[M.jsx(Jt,{className:"py-2 cursor-pointer",onClick:()=>E(!N),children:M.jsxs(Qt,{className:"flex items-center gap-2 text-sm",children:[M.jsx(BC,{className:"h-3 w-3 text-primary"}),"算法配置",M.jsx(id,{className:`h-3 w-3 ml-auto transition-transform ${N?"rotate-90":""}`})]})}),N&&M.jsxs(qt,{className:"pt-0 space-y-2",children:[M.jsxs("div",{className:"p-2 rounded-lg bg-primary/5 border border-primary/10",children:[M.jsxs("label",{className:"text-xs text-primary font-medium flex items-center gap-1 mb-1",children:[M.jsx(bC,{className:"h-3 w-3"}),"车速: ",x.baseSpeed.toFixed(1),"x"]}),M.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:x.baseSpeed,onChange:H=>S({...x,baseSpeed:parseFloat(H.target.value)}),className:"w-full h-1"})]}),M.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[M.jsxs("div",{children:[M.jsxs("label",{className:"text-muted-foreground block mb-1",children:["距离:",x.weights.length.toFixed(1)]}),M.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:x.weights.length,onChange:H=>S({...x,weights:{...x.weights,length:parseFloat(H.target.value)}}),className:"w-full h-1"})]}),M.jsxs("div",{children:[M.jsxs("label",{className:"text-muted-foreground block mb-1",children:["时间:",x.weights.time.toFixed(1)]}),M.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:x.weights.time,onChange:H=>S({...x,weights:{...x.weights,time:parseFloat(H.target.value)}}),className:"w-full h-1"})]}),M.jsxs("div",{children:[M.jsxs("label",{className:"text-muted-foreground block mb-1",children:["拥堵:",x.weights.congestion.toFixed(1)]}),M.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:x.weights.congestion,onChange:H=>S({...x,weights:{...x.weights,congestion:parseFloat(H.target.value)}}),className:"w-full h-1"})]})]})]})]}),M.jsx("div",{className:"text-center",children:M.jsx("p",{className:"text-xs text-muted-foreground",children:"快捷键: WASD 平移视角, 滚轮缩放, 空格播放, ↑↓调速, ←→切节点"})})]})};function Zg(t){switch(t){case"straight":return M.jsx(mC,{className:"h-8 w-8"});case"turn_left":return M.jsx(fC,{className:"h-8 w-8"});case"turn_right":return M.jsx(pC,{className:"h-8 w-8"});case"ramp_up":return M.jsx(qg,{className:"h-8 w-8"});case"ramp_down":return M.jsx(Yg,{className:"h-8 w-8"});case"overpass_enter":return M.jsx(qg,{className:"h-8 w-8"});case"overpass_exit":return M.jsx(Yg,{className:"h-8 w-8"});case"destination":return M.jsx(Sc,{className:"h-8 w-8"});default:return M.jsx(Ca,{className:"h-8 w-8"})}}function WC(t){switch(t){case"ramp_up":case"overpass_enter":return"bg-road-overpass/20 border-road-overpass";case"ramp_down":case"overpass_exit":return"bg-road-ramp/20 border-road-ramp";case"destination":return"bg-success/20 border-success";default:return"bg-primary/20 border-primary"}}function jC(t){if(t<60)return`${Math.round(t)}秒`;const e=Math.floor(t/60),n=Math.round(t%60);return`${e}分${n}秒`}function Jg(t){return t<1e3?`${Math.round(t)}米`:`${(t/1e3).toFixed(1)}公里`}const XC=({currentHint:t,nextHint:e,currentNode:n,remainingDistance:i,remainingTime:r})=>t?M.jsxs(Yt,{className:"w-full animate-fade-in",children:[M.jsx(Jt,{className:"pb-2",children:M.jsxs(Qt,{className:"flex items-center gap-2",children:[M.jsx(Ca,{className:"h-5 w-5 text-primary"}),"导航提示"]})}),M.jsxs(qt,{className:"space-y-4",children:[M.jsx("div",{className:`rounded-lg border-2 p-4 ${WC(t.type)}`,children:M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsx("div",{className:"text-primary",children:Zg(t.type)}),M.jsxs("div",{className:"flex-1",children:[M.jsx("p",{className:"font-medium text-foreground",children:t.message}),t.distance>0&&M.jsxs("p",{className:"text-sm text-muted-foreground mt-1",children:["距离: ",Jg(t.distance)]})]})]})}),n&&M.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[M.jsx(Sc,{className:"h-4 w-4 text-accent"}),M.jsxs("span",{children:["当前位置: ",n.name]})]}),e&&e.type!=="destination"&&M.jsxs("div",{className:"border-t border-border pt-3",children:[M.jsx("p",{className:"text-xs text-muted-foreground mb-2",children:"接下来:"}),M.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[M.jsx("div",{className:"text-muted-foreground",children:Zg(e.type)}),M.jsx("span",{className:"text-muted-foreground",children:e.message})]})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4 border-t border-border pt-3",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-xs text-muted-foreground",children:"剩余距离"}),M.jsx("p",{className:"text-lg font-semibold text-primary",children:Jg(i)})]}),M.jsxs("div",{children:[M.jsx("p",{className:"text-xs text-muted-foreground",children:"预计时间"}),M.jsx("p",{className:"text-lg font-semibold text-accent",children:jC(r)})]})]})]})]}):M.jsxs(Yt,{className:"w-full animate-fade-in",children:[M.jsx(Jt,{children:M.jsxs(Qt,{className:"flex items-center gap-2",children:[M.jsx(Ca,{className:"h-5 w-5 text-primary"}),"导航提示"]})}),M.jsx(qt,{children:M.jsx("p",{className:"text-muted-foreground text-sm",children:"请选择起点和终点开始导航"})})]});function YC(t){if(t<60)return`${Math.round(t)}秒`;const e=Math.floor(t/60),n=Math.round(t%60);if(e<60)return`${e}分${n}秒`;const i=Math.floor(e/60),r=e%60;return`${i}时${r}分`}function sd(t){return t<1e3?`${Math.round(t)}米`:`${(t/1e3).toFixed(2)}公里`}function qC(t){switch(t){case"ground":return"bg-road-ground";case"overpass":return"bg-road-overpass";case"ramp":return"bg-road-ramp";default:return"bg-muted"}}function Qg(t){switch(t){case"ground":return"地面道路";case"overpass":return"高架桥";case"ramp":return"匝道";default:return"未知"}}function $C(t){const e=t.edges.filter(s=>s.type==="ramp").reduce((s,o)=>s+o.length,0),n=t.edges.filter(s=>s.type==="overpass").reduce((s,o)=>s+o.length,0),i=t.edges.reduce((s,o)=>s+o.congestion,0)/t.edges.length;return t.edges.filter(s=>s.congestion>=.5).length>=2?"智能建议：这条路线存在连续拥堵路段，适合在拥堵设置里优先调高“时间”或“拥堵”权重，再重新规划。":e+n>t.totalLength*.35?"智能建议：当前路线较多依赖高架与匝道，通行效率高，但跟车观察时更适合使用跟车视角查看上下层切换。":i<.25?"智能建议：这条路线整体较顺畅，适合用于演示路径规划与三维道路切换效果。":"智能建议：当前路线在长度与通行效率之间较均衡，可以继续通过拥堵面板做对比实验。"}const KC=({pathResult:t,nodes:e})=>{if(!t)return null;const n=new Map(e.map(o=>[o.id,o])),i=t.edges.reduce((o,a)=>(o[a.type]=(o[a.type]||0)+a.length,o),{}),r=t.edges.reduce((o,a)=>o+a.congestion,0)/t.edges.length,s=$C(t);return M.jsxs(Yt,{className:"w-full animate-fade-in",children:[M.jsx(Jt,{className:"pb-2",children:M.jsxs(Qt,{className:"flex items-center gap-2 text-base",children:[M.jsx(Hc,{className:"h-4 w-4 text-primary"}),"路径信息"]})}),M.jsxs(qt,{className:"space-y-4",children:[M.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"space-y-1",children:[M.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[M.jsx(OC,{className:"h-3 w-3"}),"总距离"]}),M.jsx("p",{className:"text-lg font-semibold text-primary",children:sd(t.totalLength)})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[M.jsx(fx,{className:"h-3 w-3"}),"预计时间"]}),M.jsx("p",{className:"text-lg font-semibold text-accent",children:YC(t.estimatedTime)})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-between text-xs",children:[M.jsxs("span",{className:"text-muted-foreground flex items-center gap-1",children:[M.jsx(hx,{className:"h-3 w-3"}),"平均拥堵"]}),M.jsxs("span",{className:`font-medium ${r>.5?"text-destructive":r>.3?"text-accent":"text-success"}`,children:[(r*100).toFixed(0),"%"]})]}),M.jsx("div",{className:"h-2 bg-muted rounded-full overflow-hidden",children:M.jsx("div",{className:`h-full transition-all ${r>.5?"bg-destructive":r>.3?"bg-accent":"bg-success"}`,style:{width:`${r*100}%`}})})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("p",{className:"text-xs text-muted-foreground",children:"道路构成"}),M.jsx("div",{className:"space-y-2",children:Object.entries(i).map(([o,a])=>M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("div",{className:`w-3 h-3 rounded-full ${qC(o)}`}),M.jsx("span",{className:"text-sm flex-1",children:Qg(o)}),M.jsx("span",{className:"text-xs text-muted-foreground",children:sd(a)}),M.jsxs("span",{className:"text-xs text-muted-foreground",children:["(",(a/t.totalLength*100).toFixed(0),"%)"]})]},o))})]}),M.jsxs("div",{className:"flex items-center justify-between text-sm border-t border-border pt-3",children:[M.jsx("span",{className:"text-muted-foreground",children:"经过地点"}),M.jsxs("span",{className:"font-medium",children:[t.path.length," 个"]})]}),M.jsxs("div",{className:"space-y-2 border-t border-border pt-3",children:[M.jsx("p",{className:"text-xs text-muted-foreground",children:"路段明细（含名称）"}),M.jsx("ul",{className:"max-h-40 overflow-y-auto space-y-1.5 text-xs pr-1",children:t.edges.map((o,a)=>{const l=n.get(t.path[a]),c=n.get(t.path[a+1]),u=o.segmentName??o.id;return M.jsxs("li",{className:"rounded border border-border/60 bg-muted/30 px-2 py-1.5 leading-relaxed",children:[M.jsx("span",{className:"font-medium text-foreground/90",children:u}),M.jsxs("span",{className:"text-muted-foreground",children:[" ","· ",Qg(o.type)," · ",sd(o.length)]}),(l||c)&&M.jsxs("div",{className:"mt-0.5 text-muted-foreground",children:[(l==null?void 0:l.name)??"?"," → ",(c==null?void 0:c.name)??"?"]})]},`${o.id}-${a}`)})})]}),M.jsxs("div",{className:"rounded-lg border border-primary/20 bg-primary/5 p-3",children:[M.jsxs("div",{className:"mb-1 flex items-center gap-2 text-xs font-medium text-primary",children:[M.jsx(mx,{className:"h-3.5 w-3.5"}),"智能导航建议"]}),M.jsx("p",{className:"text-sm leading-6 text-foreground/85",children:s})]})]})]})};function ZC(t){switch(t){case"ground":return"地面道路";case"overpass":return"高架桥";case"ramp":return"匝道";default:return"未知"}}function e0(t){return t>=.7?{text:"严重拥堵",color:"text-destructive"}:t>=.4?{text:"中度拥堵",color:"text-accent"}:t>=.2?{text:"轻度拥堵",color:"text-primary"}:{text:"畅通",color:"text-success"}}const JC=({selectedEdge:t,isSelectingRoad:e,onToggleSelectMode:n,onCongestionChange:i,onClearSelection:r})=>M.jsxs(Yt,{className:"w-80 animate-fade-in",children:[M.jsx(Jt,{className:"pb-2",children:M.jsxs(Qt,{className:"flex items-center gap-2 text-base",children:[M.jsx(hx,{className:"h-4 w-4 text-accent"}),"道路拥堵设置"]})}),M.jsxs(qt,{className:"space-y-4",children:[M.jsxs(Ct,{variant:e?"accent":"outline",onClick:n,className:"w-full",children:[M.jsx(RC,{className:"h-4 w-4 mr-2"}),e?"点击地图选择道路...":"选择道路设置拥堵"]}),t?M.jsxs("div",{className:"space-y-3 border border-border rounded-lg p-3",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("span",{className:"text-sm font-medium",children:"已选道路"}),M.jsx(Ct,{variant:"ghost",size:"icon",onClick:r,className:"h-6 w-6",children:M.jsx(gx,{className:"h-4 w-4"})})]}),t.segmentName&&M.jsxs("div",{className:"text-sm",children:[M.jsx("span",{className:"text-muted-foreground",children:"路段名:"}),M.jsx("span",{className:"ml-1 font-medium",children:t.segmentName})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[M.jsxs("div",{children:[M.jsx("span",{className:"text-muted-foreground",children:"类型:"}),M.jsx("span",{className:"ml-1",children:ZC(t.type)})]}),M.jsxs("div",{children:[M.jsx("span",{className:"text-muted-foreground",children:"限速:"}),M.jsxs("span",{className:"ml-1",children:[t.speedLimit,"km/h"]})]}),M.jsxs("div",{children:[M.jsx("span",{className:"text-muted-foreground",children:"长度:"}),M.jsxs("span",{className:"ml-1",children:[t.length,"m"]})]}),M.jsxs("div",{children:[M.jsx("span",{className:"text-muted-foreground",children:"状态:"}),M.jsx("span",{className:`ml-1 ${e0(t.congestion).color}`,children:e0(t.congestion).text})]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("label",{className:"text-sm text-muted-foreground",children:"拥堵系数"}),M.jsxs("span",{className:"text-sm font-semibold text-primary",children:[(t.congestion*100).toFixed(0),"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"100",value:t.congestion*100,onChange:s=>i(t.id,parseInt(s.target.value)/100),className:"w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, 
                    hsl(var(--success)) 0%, 
                    hsl(var(--accent)) 50%, 
                    hsl(var(--destructive)) 100%)`}}),M.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[M.jsx("span",{children:"畅通"}),M.jsx("span",{children:"中度"}),M.jsx("span",{children:"严重"})]})]}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx(Ct,{variant:"outline",size:"sm",onClick:()=>i(t.id,0),className:"flex-1 text-xs",children:"畅通"}),M.jsx(Ct,{variant:"outline",size:"sm",onClick:()=>i(t.id,.4),className:"flex-1 text-xs",children:"中度"}),M.jsx(Ct,{variant:"outline",size:"sm",onClick:()=>i(t.id,.8),className:"flex-1 text-xs",children:"严重"})]})]}):M.jsx("p",{className:"text-sm text-muted-foreground text-center py-4",children:"点击上方按钮，然后在地图上选择道路来设置拥堵值"}),M.jsx("div",{className:"text-xs text-muted-foreground border-t border-border pt-3",children:M.jsx("p",{children:"设置拥堵后重新规划路径，算法会根据距离和拥堵综合计算最优路线"})})]})]});function QC({onApplyTemplate:t,onExport:e,onImport:n}){const[i,r]=oe.useState("");return M.jsxs("div",{className:"grid grid-cols-1 gap-4 xl:grid-cols-[1.15fr_0.85fr]",children:[M.jsxs(Yt,{children:[M.jsx(Jt,{className:"pb-2",children:M.jsxs(Qt,{className:"flex items-center gap-2 text-base",children:[M.jsx(AC,{className:"h-4 w-4 text-primary"}),"立体道路模板场景"]})}),M.jsxs(qt,{className:"space-y-3",children:[M.jsxs("div",{className:"rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm leading-6 text-foreground/85",children:["这里改成了",M.jsx("strong",{className:"text-primary",children:"模板优先"}),"模式：优先点选现实感更强的立体道路模板，直接切换场景；系统会自动填入该模板最适合演示的起点和终点。若你想完全自定义，再用 JSON 从 0 导入即可。"]}),M.jsx("div",{className:"grid gap-3 md:grid-cols-3",children:yc.map(s=>M.jsxs("button",{type:"button",onClick:()=>t(s.kind),className:"rounded-2xl border border-border bg-muted/20 p-4 text-left transition hover:border-primary/60 hover:bg-primary/10",children:[M.jsxs("div",{className:"mb-2 flex items-center gap-2 text-sm font-semibold text-foreground",children:[M.jsx(Hc,{className:"h-4 w-4 text-primary"}),s.title]}),M.jsx("p",{className:"text-xs leading-5 text-muted-foreground",children:s.description}),M.jsxs("div",{className:"mt-4 flex items-center justify-between gap-2",children:[M.jsx("span",{className:"inline-flex rounded-full border border-primary/30 px-2 py-1 text-[11px] text-primary",children:"点击立即切换"}),M.jsxs("span",{className:"text-[11px] text-muted-foreground",children:["推荐：",s.recommendedRoute.label]})]})]},s.kind))})]})]}),M.jsxs(Yt,{children:[M.jsx(Jt,{className:"pb-2",children:M.jsxs(Qt,{className:"flex items-center gap-2 text-base",children:[M.jsx(TC,{className:"h-4 w-4 text-accent"}),"JSON 场景导入 / 导出"]})}),M.jsxs(qt,{className:"space-y-3",children:[M.jsx("div",{className:"rounded-lg border border-border bg-muted/20 p-3 text-sm leading-6 text-muted-foreground",children:"如果你想从 0 构造一个完全自定义的立体道路场景，就直接在这里粘贴 JSON 导入。导出按钮会把当前场景复制到剪贴板，便于备份或二次编辑。"}),M.jsxs("div",{className:"flex gap-2",children:[M.jsxs(Ct,{variant:"outline",className:"flex-1",onClick:e,children:[M.jsx(MC,{className:"mr-2 h-4 w-4"}),"导出 JSON"]}),M.jsxs(Ct,{variant:"outline",className:"flex-1",onClick:()=>n(i),children:[M.jsx(GC,{className:"mr-2 h-4 w-4"}),"导入 JSON"]})]}),M.jsx("textarea",{value:i,onChange:s=>r(s.target.value),placeholder:"粘贴你的完整场景 JSON 到这里",className:"min-h-[260px] w-full rounded-lg border border-border bg-input px-3 py-2 text-xs"})]})]})]})}const e3={baseSpeed:8,speedMultiplier:1,weights:{length:1,time:.8,congestion:.5}};function t3(){const t=oe.useRef(null),e=oe.useRef(null),n=oe.useRef(null),i=oe.useRef(new Map),[r,s]=oe.useState(()=>({nodes:[...zs.nodes],edges:zs.edges.map(L=>({...L})),buildings:zs.buildings?[...zs.buildings]:[]})),[o,a]=oe.useState("overview"),[l,c]=oe.useState(!0),[u,h]=oe.useState(!0),[f,p]=oe.useState(null),[g,v]=oe.useState(null),[m,d]=oe.useState(null),[_,x]=oe.useState([]),[S,w]=oe.useState(!1),[A,C]=oe.useState(1),[N,E]=oe.useState(!0),[T,D]=oe.useState(!1),[F,B]=oe.useState(e3),[$,q]=oe.useState(0),[X,G]=oe.useState(null),[z,Z]=oe.useState(0),[H,ee]=oe.useState(0),[Ce,Le]=oe.useState(0),[Be,nt]=oe.useState(null),[J,ne]=oe.useState([]),[ve,Ve]=oe.useState(!1),[we,Ye]=oe.useState(null),[Ft,et]=oe.useState(!1),[it,ct]=oe.useState(null),Ge=oe.useRef(!1),Tt=oe.useRef(null),I=oe.useRef(null),bt=oe.useRef(null),tt=oe.useRef(r);oe.useEffect(()=>{Ge.current=ve},[ve]),oe.useEffect(()=>{Tt.current=Be},[Be]),oe.useEffect(()=>{I.current=f},[f]),oe.useEffect(()=>{bt.current=g},[g]),oe.useEffect(()=>{tt.current=r},[r]),oe.useEffect(()=>{const L=yc.find(ce=>{const Re=ce.recommendedRoute;return r.nodes.some(gt=>gt.id===Re.start)&&r.nodes.some(gt=>gt.id===Re.end)});if(!L){ne([]);return}const W=L.recommendedRoute,re=[{id:1e3,name:W.label,start:W.start,end:W.end,desc:"模板主推荐"}];L.kind==="multi-level-express-hub"&&re.push({id:1001,name:"南向快速路入口 → 东侧桥下辅路",start:"meh_s_over",end:"meh_ground_e",desc:"高架汇聚后下桥"},{id:1002,name:"东南城区入口 → 东北高架分流口",start:"meh_se_ground",end:"meh_ne_over",desc:"上桥后分流演示"},{id:1003,name:"西桥下转换点 → 东北出城地面口",start:"meh_under_west_hub",end:"meh_ground_ne",desc:"桥下联络对照"}),ne(re)},[r]),oe.useEffect(()=>{if(!t.current)return;i.current=new Map(r.nodes.map(ce=>[ce.id,ce]));const L=new qb(t.current);if(L.loadRoadNetwork(r),Gg(r)){const{group:ce,edgeMeshes:Re}=td();L.addTInterchangeGroup(ce,Re,r.edges)}e.current=L;const W=new $b(i.current,F,r.edges,N);n.current=W,W.setOnUpdate(ce=>{L.updateVehiclePosition(ce),ft(ce)}),W.setOnNodeChange((ce,Re)=>{q(ce),G(Re),be(ce)}),W.setOnComplete(()=>{w(!1)});const re=ce=>P(ce);return t.current.addEventListener("click",re),()=>{var ce;L.dispose(),W.dispose(),(ce=t.current)==null||ce.removeEventListener("click",re)}},[]),oe.useEffect(()=>{var L;(L=n.current)==null||L.setRoadGeometryContext(r.edges,N)},[r,N]);const ft=oe.useCallback(L=>{if(!m)return;let W=0;for(let ce=L.currentNodeIndex;ce<m.edges.length;ce++){const Re=m.edges[ce];ce===L.currentNodeIndex?W+=Re.length*(1-L.progress):W+=Re.length}ee(W);let re=0;for(let ce=L.currentNodeIndex;ce<m.edges.length;ce++){const Re=m.edges[ce],gt=Re.speedLimit*(1-Re.congestion*.5),kt=ce===L.currentNodeIndex?Re.length*(1-L.progress):Re.length;re+=kt/1e3/(gt/3600)*3600}Le(re/F.speedMultiplier)},[m,F.speedMultiplier]),be=oe.useCallback(L=>{if(!m)return;const W=m.path[L],re=_.findIndex(ce=>ce.nodeId===W);re>=0&&Z(re)},[m,_]),P=oe.useCallback(L=>{if(!e.current)return;if(o==="builder"&&it){const ce=e.current.getGroundPoint(L);ce&&(s(Re=>{const gt={...Re,nodes:Re.nodes.map(kt=>kt.id===it?{...kt,x:Math.round(ce.x),y:Math.round(ce.z)}:kt)};return queueMicrotask(()=>ze(gt)),gt}),ct(null));return}if(o==="builder"&&Ft){const ce=e.current.getGroundPoint(L);if(ce){const gt={id:`custom_node_${Date.now()}`,name:`节点${tt.current.nodes.length+1}`,x:Math.round(ce.x),y:Math.round(ce.z),z:0,layer:0};s(kt=>{const Pr={...kt,nodes:[...kt.nodes,gt]};return queueMicrotask(()=>{if(e.current){e.current.loadRoadNetwork(Pr);const{group:Nr,edgeMeshes:xo}=td();e.current.addTInterchangeGroup(Nr,xo,Pr.edges)}}),Pr}),et(!1)}return}if(Ge.current){const ce=e.current.getClickedRoad(L);if(ce){const Re=tt.current.edges.find(gt=>gt.id===ce.id);Ye(Re||ce),e.current.highlightSelectedRoad(ce.id)}return}const re=e.current.getClickedNode(L);if(re){if(Tt.current==="start"){p(re.id),nt(null);return}if(Tt.current==="end"){v(re.id),nt(null);return}if(!I.current){p(re.id);return}if(!bt.current){v(re.id);return}p(re.id),nt("end")}},[o,Ft,it]);oe.useEffect(()=>{var L;(L=e.current)==null||L.highlightEndpoints(f,g)},[f,g]);const y=oe.useCallback(()=>{var W,re,ce,Re,gt,kt;if(!f||!g)return;const L=Qb(r,f,g,F);if(L){d(L),(W=e.current)==null||W.highlightPath(L);const Pr=iA(L.path,L.edges,i.current);x(Pr),Z(0),(re=n.current)==null||re.setPath(L),(ce=e.current)==null||ce.createVehicle();const Nr=(Re=n.current)==null?void 0:Re.getState();Nr&&((gt=e.current)==null||gt.updateVehiclePosition(Nr)),q(0),G(i.current.get(L.path[0])||null),ee(L.totalLength),Le(L.estimatedTime),w(!1),Ye(null),(kt=e.current)==null||kt.highlightSelectedRoad(null)}else alert("无法找到从起点到终点的路径")},[f,g,F,r]),k=oe.useCallback(()=>{if(!n.current)return;const L=n.current.togglePause();w(!L)},[]),Q=oe.useCallback(()=>{var L;(L=n.current)==null||L.reset(),w(!1),q(0),Z(0),m&&(G(i.current.get(m.path[0])||null),ee(m.totalLength),Le(m.estimatedTime))},[m]),te=oe.useCallback(()=>{var L;(L=n.current)==null||L.prevNode()},[]),K=oe.useCallback(()=>{var L;(L=n.current)==null||L.nextNode()},[]),Ee=oe.useCallback(()=>{var W;const L=((W=n.current)==null?void 0:W.speedUp())||1;C(L),B(re=>({...re,speedMultiplier:L}))},[]),de=oe.useCallback(()=>{var W;const L=((W=n.current)==null?void 0:W.speedDown())||1;C(L),B(re=>({...re,speedMultiplier:L}))},[]),Te=oe.useCallback(()=>{var W;const L=!N;E(L),(W=e.current)==null||W.setViewMode(L)},[N]),Ue=oe.useCallback(()=>{var W;const L=!T;D(L),(W=e.current)==null||W.setFollowVehicle(L)},[T]),se=oe.useCallback(L=>{var W;B(L),(W=n.current)==null||W.updateConfig(L)},[]),he=oe.useCallback(()=>{Ve(L=>{var re;const W=!L;return Ge.current=W,W||(Ye(null),(re=e.current)==null||re.highlightSelectedRoad(null)),W})},[]),Se=oe.useCallback((L,W)=>{var re;s(ce=>({...ce,edges:ce.edges.map(Re=>Re.id===L||Re.id===`${L}_rev`||`${Re.id}_rev`===L?{...Re,congestion:W}:Re)})),Ye(ce=>ce?{...ce,congestion:W}:null),(re=e.current)==null||re.updateRoadCongestion(L,W)},[]),Ae=oe.useCallback(()=>{var L;Ye(null),(L=e.current)==null||L.highlightSelectedRoad(null)},[]),ue=oe.useCallback(()=>{var L,W,re,ce;d(null),x([]),Z(0),q(0),G(null),ee(0),Le(0),w(!1),Ye(null),(L=e.current)==null||L.highlightPath(null),(W=e.current)==null||W.highlightSelectedRoad(null),(re=e.current)==null||re.removeVehicle(),(ce=n.current)==null||ce.pause()},[]),ze=oe.useCallback(L=>{var W;if(e.current){if(e.current.loadRoadNetwork(L),Gg(L)){const{group:re,edgeMeshes:ce}=td();e.current.addTInterchangeGroup(re,ce,L.edges)}e.current.highlightEndpoints(I.current,bt.current),(W=n.current)==null||W.setRoadGeometryContext(L.edges,N)}},[N]),U=oe.useCallback(()=>{const L=JSON.stringify(tt.current,null,2);navigator.clipboard.writeText(L),alert("场景JSON已复制到剪贴板")},[]),ge=oe.useCallback(L=>{try{const W=JSON.parse(L);if(!W.nodes||!W.edges){alert("JSON格式不正确");return}s(W),queueMicrotask(()=>{ue(),ze(W)})}catch{alert("JSON解析失败，请检查内容")}},[ze,ue]),le=oe.useCallback(L=>{const W=CA(L),re=AA(L);s(W),p(re.start),v(re.end),ct(null),et(!1),queueMicrotask(()=>{var ce;ue(),ze(W),(ce=e.current)==null||ce.highlightEndpoints(re.start,re.end)})},[ze,ue]),fe=oe.useMemo(()=>r.edges.filter(L=>!L.id.endsWith("_rev")),[r.edges]),ie=oe.useMemo(()=>{const L=fe.length,W=L>0?fe.reduce((re,ce)=>re+ce.congestion,0)/L:0;return{total:L,avg:W,level3d:fe.filter(re=>re.type!=="ground").length,healthy:fe.filter(re=>re.congestion<.3).length,warning:fe.filter(re=>re.congestion>=.3&&re.congestion<.7).length,danger:fe.filter(re=>re.congestion>=.7).length}},[fe]);return oe.useEffect(()=>{const L=W=>{var re;switch(W.code){case"Space":W.preventDefault(),o==="simulation"&&k();break;case"ArrowUp":W.preventDefault(),o==="simulation"&&Ee();break;case"ArrowDown":W.preventDefault(),o==="simulation"&&de();break;case"ArrowLeft":W.preventDefault(),o==="simulation"&&te();break;case"ArrowRight":W.preventDefault(),o==="simulation"&&K();break;case"Escape":Ve(!1),Ye(null),(re=e.current)==null||re.highlightSelectedRoad(null);break}};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[o,k,Ee,de,te,K]),M.jsxs("div",{className:"h-screen w-screen overflow-hidden bg-background",children:[M.jsx("header",{className:"absolute top-0 left-0 right-0 z-20 glass border-b border-border",children:M.jsxs("div",{className:"container mx-auto px-4 py-3 flex items-center justify-between",children:[M.jsx("h1",{className:"text-xl font-bold text-gradient",children:"3D城市道路导航仿真系统（管理版）"}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsxs(Ct,{size:"sm",variant:o==="overview"?"glow":"outline",onClick:()=>a("overview"),children:[M.jsx(CC,{className:"h-4 w-4 mr-1"}),"总览"]}),M.jsxs(Ct,{size:"sm",variant:o==="simulation"?"glow":"outline",onClick:()=>a("simulation"),children:[M.jsx(qh,{className:"h-4 w-4 mr-1"}),"演示驾驶"]}),M.jsxs(Ct,{size:"sm",variant:o==="builder"?"glow":"outline",onClick:()=>a("builder"),children:[M.jsx(vC,{className:"h-4 w-4 mr-1"}),"场景搭建"]})]})]})}),M.jsx("div",{ref:t,className:`absolute inset-0 pt-14 ${o==="simulation"?"":"opacity-40"}`,style:{cursor:ve?"pointer":Be?"crosshair":"grab"}}),o==="simulation"&&M.jsxs(M.Fragment,{children:[l&&M.jsxs("div",{className:"absolute top-20 left-4 z-10 space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto pr-1",children:[M.jsx(HC,{nodes:r.nodes,startNode:f,endNode:g,onStartNodeChange:p,onEndNodeChange:v,onPlanPath:y,isPlaying:S,onPlayPause:k,onReset:Q,onPrevNode:te,onNextNode:K,onSpeedUp:Ee,onSpeedDown:de,speedMultiplier:A,is3DMode:N,onToggleViewMode:Te,isFollowMode:T,onToggleFollowMode:Ue,config:F,onConfigChange:se,hasPath:!!m,currentNodeIndex:$,totalNodes:(m==null?void 0:m.path.length)||0,recommendedRoutes:J}),M.jsx(JC,{selectedEdge:we,isSelectingRoad:ve,onToggleSelectMode:he,onCongestionChange:Se,onClearSelection:Ae})]}),M.jsx(Ct,{size:"icon",variant:"outline",className:`absolute top-20 z-20 glass border-primary/40 transition-all ${l?"left-[376px]":"left-4"}`,onClick:()=>c(L=>!L),title:l?"隐藏左侧控制面板":"显示左侧控制面板",children:l?M.jsx(PC,{className:"h-4 w-4"}):M.jsx(NC,{className:"h-4 w-4"})}),u&&M.jsxs("div",{className:"absolute top-20 right-4 z-10 w-[340px] max-h-[calc(100vh-100px)] space-y-4 overflow-y-auto pr-1",children:[M.jsx(XC,{currentHint:_[z]||null,nextHint:_[z+1]||null,currentNode:X,remainingDistance:H,remainingTime:Ce}),M.jsx(KC,{pathResult:m,nodes:r.nodes})]}),M.jsx(Ct,{size:"icon",variant:"outline",className:`absolute top-20 z-20 glass border-primary/40 transition-all ${u?"right-[364px]":"right-4"}`,onClick:()=>h(L=>!L),title:u?"隐藏右侧导航面板":"显示右侧导航面板",children:u?M.jsx(LC,{className:"h-4 w-4"}):M.jsx(DC,{className:"h-4 w-4"})})]}),o==="overview"&&M.jsx("div",{className:"absolute inset-0 z-10 pt-20 px-4 overflow-y-auto",children:M.jsxs("div",{className:"max-w-7xl mx-auto space-y-4",children:[M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-4",children:[M.jsxs(Yt,{children:[M.jsx(Jt,{className:"pb-2",children:M.jsxs(Qt,{className:"text-base flex items-center gap-2",children:[M.jsx(Hc,{className:"h-4 w-4 text-primary"}),"道路总量"]})}),M.jsx(qt,{children:M.jsx("p",{className:"text-3xl font-bold text-primary",children:ie.total})})]}),M.jsxs(Yt,{children:[M.jsx(Jt,{className:"pb-2",children:M.jsxs(Qt,{className:"text-base flex items-center gap-2",children:[M.jsx(gC,{className:"h-4 w-4 text-accent"}),"平均拥堵"]})}),M.jsx(qt,{children:M.jsxs("p",{className:"text-3xl font-bold text-accent",children:[(ie.avg*100).toFixed(0),"%"]})})]}),M.jsxs(Yt,{children:[M.jsx(Jt,{className:"pb-2",children:M.jsxs(Qt,{className:"text-base flex items-center gap-2",children:[M.jsx(px,{className:"h-4 w-4 text-primary"}),"立体道路"]})}),M.jsx(qt,{children:M.jsx("p",{className:"text-3xl font-bold text-primary",children:ie.level3d})})]}),M.jsxs(Yt,{children:[M.jsx(Jt,{className:"pb-2",children:M.jsx(Qt,{className:"text-base",children:"拥堵分布"})}),M.jsxs(qt,{className:"text-sm",children:[M.jsxs("p",{children:["畅通 ",ie.healthy]}),M.jsxs("p",{children:["缓行 ",ie.warning]}),M.jsxs("p",{children:["拥堵 ",ie.danger]})]})]})]}),M.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-4",children:[M.jsxs(Yt,{children:[M.jsx(Jt,{className:"pb-2",children:M.jsx(Qt,{className:"text-base",children:"为什么深度用户会留下来"})}),M.jsxs(qt,{className:"space-y-2 text-sm text-foreground/85",children:[M.jsx("p",{className:"rounded border border-primary/30 bg-primary/5 p-3",children:"场景切换不是换底图，而是直接切换完整立体道路实验网络，进入系统就能开始对比演示。"}),M.jsx("p",{className:"rounded border border-primary/30 bg-primary/5 p-3",children:"在一个页面里完成选点、算路、2D/3D切换、跟车观察、拥堵调节，不需要频繁跳模块。"}),M.jsx("p",{className:"rounded border border-primary/30 bg-primary/5 p-3",children:"模板优先 + JSON 兜底，兼顾快速实验与自定义构建，比只会展示或只会编辑的竞品更贴近答辩与研究使用场景。"})]})]}),M.jsxs(Yt,{children:[M.jsx(Jt,{className:"pb-2",children:M.jsx(Qt,{className:"text-base",children:"当前版本的核心优势"})}),M.jsxs(qt,{className:"space-y-2 text-sm text-muted-foreground",children:[M.jsx("p",{className:"rounded border border-border p-3",children:"可视化上强调桥上、桥下、匝道的空间层次，适合做立体道路导航主题展示。"}),M.jsx("p",{className:"rounded border border-border p-3",children:"推荐路线已收敛为高频与立体对比两类，降低首次使用门槛。"}),M.jsx("p",{className:"rounded border border-border p-3",children:"右侧导航信息可滚动查看，不再出现面板底部被截断的问题。"})]})]})]})]})}),o==="builder"&&M.jsx("div",{className:"absolute inset-0 z-10 pt-20 px-4 overflow-y-auto",children:M.jsxs("div",{className:"max-w-7xl mx-auto space-y-4",children:[M.jsxs(Yt,{children:[M.jsx(Jt,{className:"pb-2",children:M.jsx(Qt,{className:"text-base",children:"场景搭建与实验切换"})}),M.jsx(qt,{className:"text-sm text-muted-foreground",children:"面向深度使用者，当前版本将复杂的逐条造路收敛为“模板切换 + JSON 导入”。先快速进入真实立体道路场景，再做实验与答辩演示。"})]}),M.jsx(QC,{onApplyTemplate:le,onExport:U,onImport:ge})]})})]})}od.createRoot(document.getElementById("root")).render(M.jsx(Gx.StrictMode,{children:M.jsx(t3,{})}));
