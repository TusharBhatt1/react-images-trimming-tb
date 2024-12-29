"use strict";var e=require("react"),t=function(){return t=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},t.apply(this,arguments)};function r(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(e){a(e)}}function c(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}s((n=n.apply(e,t||[])).next())}))}function n(e,t){var r,n,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=c(0),i.throw=c(1),i.return=c(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}function o(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var a,i={exports:{}},c={};var s,u,l={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function f(){return s||(s=1,"production"!==process.env.NODE_ENV&&function(){var t=e,r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),m=Symbol.iterator;var g=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function h(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];!function(e,t,r){var n=g.ReactDebugCurrentFrame,o=n.getStackAddendum();""!==o&&(t+="%s",r=r.concat([o]));var a=r.map((function(e){return String(e)}));a.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,a)}("error",e,r)}var b;function w(e){return e.displayName||"Context"}function x(e){if(null==e)return null;if("number"==typeof e.tag&&h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case i:return"Profiler";case a:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case s:return w(e)+".Consumer";case c:return w(e._context)+".Provider";case u:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case d:var t=e.displayName||null;return null!==t?t:x(e.type)||"Memo";case y:var r=e,l=r._payload,v=r._init;try{return x(v(l))}catch(e){return null}}return null}b=Symbol.for("react.module.reference");var k,S,j,_,E,O,R,C=Object.assign,I=0;function Y(){}Y.__reactDisabledLog=!0;var P,N=g.ReactCurrentDispatcher;function T(e,t,r){if(void 0===P)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);P=n&&n[1]||""}return"\n"+P+e}var $,D=!1,F="function"==typeof WeakMap?WeakMap:Map;function M(e,t){if(!e||D)return"";var r,n=$.get(e);if(void 0!==n)return n;D=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=N.current,N.current=null,function(){if(0===I){k=console.log,S=console.info,j=console.warn,_=console.error,E=console.group,O=console.groupCollapsed,R=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Y,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}I++}();try{if(t){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){r=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){r=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var c=t.stack.split("\n"),s=r.stack.split("\n"),u=c.length-1,l=s.length-1;u>=1&&l>=0&&c[u]!==s[l];)l--;for(;u>=1&&l>=0;u--,l--)if(c[u]!==s[l]){if(1!==u||1!==l)do{if(u--,--l<0||c[u]!==s[l]){var f="\n"+c[u].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&$.set(e,f),f}}while(u>=1&&l>=0);break}}}finally{D=!1,N.current=o,function(){if(0==--I){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:C({},e,{value:k}),info:C({},e,{value:S}),warn:C({},e,{value:j}),error:C({},e,{value:_}),group:C({},e,{value:E}),groupCollapsed:C({},e,{value:O}),groupEnd:C({},e,{value:R})})}I<0&&h("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?T(p):"";return"function"==typeof e&&$.set(e,d),d}function z(e,t,r){if(null==e)return"";if("function"==typeof e)return M(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return T(e);switch(e){case f:return T("Suspense");case p:return T("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return M(e.render,!1);case d:return z(e.type,t,r);case y:var o=e,a=o._payload,i=o._init;try{return z(i(a),t,r)}catch(e){}}return""}$=new F;var A=Object.prototype.hasOwnProperty,B={},L=g.ReactDebugCurrentFrame;function W(e){if(e){var t=e._owner,r=z(e.type,e._source,t?t.type:null);L.setExtraStackFrame(r)}else L.setExtraStackFrame(null)}var U=Array.isArray;function V(e){return U(e)}function q(e){return""+e}function J(e){if(function(e){try{return q(e),!1}catch(e){return!0}}(e))return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),q(e)}var K,X,H=g.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function Q(e,t,n,o,a){var i,c={},s=null,u=null;for(i in void 0!==n&&(J(n),s=""+n),function(e){if(A.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}(t)&&(J(t.key),s=""+t.key),function(e){if(A.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}(t)&&(u=t.ref,function(e){"string"==typeof e.ref&&H.current}(t)),t)A.call(t,i)&&!G.hasOwnProperty(i)&&(c[i]=t[i]);if(e&&e.defaultProps){var l=e.defaultProps;for(i in l)void 0===c[i]&&(c[i]=l[i])}if(s||u){var f="function"==typeof e?e.displayName||e.name||"Unknown":e;s&&function(e,t){var r=function(){K||(K=!0,h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(c,f),u&&function(e,t){var r=function(){X||(X=!0,h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(c,f)}return function(e,t,n,o,a,i,c){var s={$$typeof:r,type:e,key:t,ref:n,props:c,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s}(e,s,u,a,o,H.current,c)}var Z,ee=g.ReactCurrentOwner,te=g.ReactDebugCurrentFrame;function re(e){if(e){var t=e._owner,r=z(e.type,e._source,t?t.type:null);te.setExtraStackFrame(r)}else te.setExtraStackFrame(null)}function ne(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}function oe(){if(ee.current){var e=x(ee.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}Z=!1;var ae={};function ie(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=oe();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!ae[r]){ae[r]=!0;var n="";e&&e._owner&&e._owner!==ee.current&&(n=" It was passed a child from "+x(e._owner.type)+"."),re(e),h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),re(null)}}}function ce(e,t){if("object"==typeof e)if(V(e))for(var r=0;r<e.length;r++){var n=e[r];ne(n)&&ie(n,t)}else if(ne(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var t=m&&e[m]||e["@@iterator"];return"function"==typeof t?t:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)ne(a.value)&&ie(a.value,t)}}function se(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==u&&r.$$typeof!==d)return;t=r.propTypes}if(t){var n=x(r);!function(e,t,r,n,o){var a=Function.call.bind(A);for(var i in e)if(a(e,i)){var c=void 0;try{if("function"!=typeof e[i]){var s=Error((n||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}c=e[i](t,i,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){c=e}!c||c instanceof Error||(W(o),h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,i,typeof c),W(null)),c instanceof Error&&!(c.message in B)&&(B[c.message]=!0,W(o),h("Failed %s type: %s",r,c.message),W(null))}}(t,e.props,"prop",n,e)}else if(void 0!==r.PropTypes&&!Z){Z=!0,h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",x(r)||"Unknown")}"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var ue={};function le(e,t,n,l,m,g){var w=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===i||e===a||e===f||e===p||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===c||e.$$typeof===s||e.$$typeof===u||e.$$typeof===b||void 0!==e.getModuleId)}(e);if(!w){var k="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(k+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var S;k+=oe(),null===e?S="null":V(e)?S="array":void 0!==e&&e.$$typeof===r?(S="<"+(x(e.type)||"Unknown")+" />",k=" Did you accidentally export a JSX literal instead of a component?"):S=typeof e,h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",S,k)}var j=Q(e,t,n,m,g);if(null==j)return j;if(w){var _=t.children;if(void 0!==_)if(l)if(V(_)){for(var E=0;E<_.length;E++)ce(_[E],e);Object.freeze&&Object.freeze(_)}else h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ce(_,e)}if(A.call(t,"key")){var O=x(e),R=Object.keys(t).filter((function(e){return"key"!==e})),C=R.length>0?"{key: someKey, "+R.join(": ..., ")+": ...}":"{key: someKey}";if(!ue[O+C])h('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',C,O,R.length>0?"{"+R.join(": ..., ")+": ...}":"{}",O),ue[O+C]=!0}return e===o?function(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){re(e),h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),re(null);break}}null!==e.ref&&(re(e),h("Invalid attribute `ref` supplied to `React.Fragment`."),re(null))}(j):se(j),j}var fe=function(e,t,r){return le(e,t,r,!1)},pe=function(e,t,r){return le(e,t,r,!0)};l.Fragment=o,l.jsx=fe,l.jsxs=pe}()),l}var p=(u||(u=1,"production"===process.env.NODE_ENV?i.exports=function(){if(a)return c;a=1;var t=e,r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var a,c={},u=null,l=null;for(a in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,a)&&!s.hasOwnProperty(a)&&(c[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===c[a]&&(c[a]=t[a]);return{$$typeof:r,type:e,key:u,ref:l,props:c,_owner:i.current}}return c.Fragment=n,c.jsx=u,c.jsxs=u,c}():i.exports=f()),i.exports);module.exports=function(a){var i=a.images,c=void 0===i?[]:i,s=a.onSave,u=void 0===s?function(){}:s,l=a.onTrim,f=void 0===l?function(){}:l,d=a.onRevert,y=void 0===d?function(){}:d,v=a.width,m=void 0===v?400:v,g=a.selectionColor,h=void 0===g?"rgba(255, 0, 0, 0.3)":g,b=a.selectionBorder,w=void 0===b?"2px dotted red":b,x=a.activeSelectionColor,k=void 0===x?"rgba(0, 0, 255, 0.3)":x,S=a.activeSelectionBorder,j=void 0===S?"1px solid pink":S,_=e.useRef([]),E=e.useState(2),O=E[0],R=E[1],C=e.useState([]),I=C[0],Y=C[1],P=e.useState(!1),N=P[0],T=P[1],$=e.useState(Array(c.length).fill(!1)),D=$[0],F=$[1],M=e.useState(null),z=M[0],A=M[1],B=e.useState(0),L=B[0],W=B[1],U=e.useState(0),V=U[0],q=U[1],J=e.useState(!1),K=J[0],X=J[1],H=e.useState(null),G=H[0],Q=H[1],Z=e.useState(null),ee=Z[0],te=Z[1],re=e.useState(!1),ne=re[0],oe=re[1],ae=function(e){return Math.max(0,Math.min(e,5e3))};e.useEffect((function(){!function(){r(this,void 0,void 0,(function(){var e,t;return n(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,(n=c[0],new Promise((function(e,t){var r=new Image;r.onload=function(){e({width:r.naturalWidth,height:r.naturalHeight})},r.onerror=function(e){t("Error loading image: "+e)},r.src=n})))];case 1:return e=r.sent(),R(e.width/m),[3,3];case 2:return t=r.sent(),alert("Error loading images,check console."),console.log("Error loading images:",t),[3,3];case 3:return[2]}var n}))}))}()}),[c]);var ie=function(e,t,r,n){void 0===n&&(n=null);for(var o=ae(e),a=ae(t),i=o,c=a,s=!0,u=0,l=I.filter((function(e){return e.imageIndex===r&&(null===n||e.id!==n)}));u<l.length;u++){var f=l[u];if(o<=f.startY&&a>=f.endY){s=!1;break}o>=f.startY&&o<=f.endY&&(i=f.endY+1),a>=f.startY&&a<=f.endY&&(c=f.startY-1)}return{start:i=ae(i),end:c=ae(c),shouldCreate:s&&i<c}};e.useEffect((function(){var e=function(e){return function(e){if(K)X(!1),Q(null),te(null);else if(N&&null!==z){T(!1);var t=document.getElementById("page-".concat(z));if(!t)return;var r=t.getBoundingClientRect(),n=Math.min(Math.max(e.clientY-r.top,0),r.height),a=ae(n),i=Math.min(L,a),c=Math.max(L,a),s=ie(i,c,z);s.shouldCreate&&Y((function(e){return o(o([],e,!0),[{startY:s.start,endY:s.end,imageIndex:z,id:Date.now()}],!1)})),A(null)}}(e)},r=function(e){return function(e){if(N||K)if(K&&null!==G){var r=I.find((function(e){return e.id===G}));if(!r)return;if(!(a=document.getElementById("page-".concat(r.imageIndex))))return;var n=a.getBoundingClientRect(),o=ae(e.clientY-n.top);Y((function(e){return e.map((function(e){if(e.id===G){var r=e.startY,n=e.endY;return"top"===ee?r=ie(Math.min(o,e.endY),e.endY,e.imageIndex,G).start:"bottom"===ee&&(n=ie(e.startY,Math.max(o,e.startY),e.imageIndex,G).end),t(t({},e),{startY:r,endY:n})}return e}))}))}else if(N&&null!==z){var a;if(!(a=document.getElementById("page-".concat(z))))return;n=a.getBoundingClientRect();var i=e.clientY-n.top,c=Math.max(0,Math.min(i,n.height));q(ae(c))}}(e)};return window.addEventListener("mouseup",e),window.addEventListener("mousemove",r),function(){window.removeEventListener("mouseup",e),window.removeEventListener("mousemove",r)}}),[N,K,G,ee,z,L]);return p.jsxs("div",{className:"image-trimmer",style:{width:m},children:[p.jsx("div",{className:"controls",style:{padding:"12px",display:"flex",position:"fixed",top:0,zIndex:10,width:"".concat(m,"px"),justifyContent:"space-around",background:"white"},children:ne?p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:function(){F(Array(c.length).fill(!1)),oe(!1),y()},className:"revert",children:"Revert"}),p.jsx("button",{onClick:function(){if(_.current&&u){var e=I.map((function(e){return t(t({},e),{startY:e.startY*O,endY:e.endY*O})}));u({trimSections:e,canvasRefs:_.current})}},className:"save",children:"Save"})]}):I.length>0&&p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:function(){window.confirm("Are you sure you want to delete all selections?")&&Y([])},className:"delete-all",children:"Delete All"}),p.jsxs("button",{onClick:function(){c.forEach((function(e,t){var r=_.current[t];r&&function(e,t,r,n){var a=o([],t,!0).sort((function(e,t){return e.imageIndex===t.imageIndex?e.startY-t.startY:e.imageIndex-t.imageIndex})),i=r.getContext("2d");if(i){var c=new Image;c.onload=function(){var e=c.width,t=c.height,o=a.map((function(e){var t=e.startY,r=e.endY;return[t*O,r*O]})),s=t;o.forEach((function(e){var t=e[0],r=e[1];s-=r-t})),r.width=e,r.height=s;var u=0;o.unshift([0,0]),o.push([t,t]);for(var l=1;l<o.length;l++){var f=o[l-1][1],p=o[l][0]-f;p>0&&(i.drawImage(c,0,f,e,p,0,u,e,p),u+=p)}n(!0),oe(!0)},c.src=e}}(e,I.filter((function(e){return e.imageIndex===t})),r,(function(e){F((function(r){var n=o([],r,!0);return n[t]=e,n}))}))})),f()},className:"trim-all",children:["Trim (",I.length,")"]})]})}),p.jsx("div",{style:{userSelect:"none",paddingTop:"50px"},className:"images-container",children:c.map((function(e,t){return p.jsxs("div",{id:"page-".concat(t),className:"image-wrapper",children:[p.jsx("canvas",{ref:function(e){_.current[t]=e},style:{height:"auto",width:"".concat(m,"px"),display:D[t]?"inherit":"none"}}),!D[t]&&p.jsxs("div",{style:{position:"relative"},children:[I.map((function(e){return e.imageIndex===t&&function(e){var t=e.startY,r=e.endY,n=e.id,o=r-t,a=function(e,t,r){e.stopPropagation(),X(!0),Q(t),te(r)};return p.jsxs("div",{className:"selection-box",style:{position:"absolute",left:0,top:"".concat(t,"px"),width:"".concat(m-4,"px"),height:"".concat(o,"px"),backgroundColor:h,border:w,pointerEvents:"none"},children:[p.jsx("div",{className:"resize-handle top",style:{position:"absolute",top:"-4px",left:0,width:"100%",height:"8px",cursor:"ns-resize",backgroundColor:"transparent",pointerEvents:"auto"},onMouseDown:function(e){return a(e,n,"top")}}),p.jsx("div",{className:"resize-handle bottom",style:{position:"absolute",bottom:"-4px",left:0,width:"100%",height:"8px",cursor:"ns-resize",backgroundColor:"transparent",pointerEvents:"auto"},onMouseDown:function(e){return a(e,n,"bottom")}}),p.jsx("button",{className:"delete-button",style:{position:"absolute",right:"2px",top:"7px",transform:"translateY(-50%)",cursor:"pointer",pointerEvents:"auto",zIndex:10,padding:"0px",backgroundColor:"transparent",border:"transparent",borderRadius:"4px",fontSize:"18px"},onClick:function(e){e.stopPropagation(),Y((function(e){return e.filter((function(e){return e.id!==n}))}))},children:"×"})]},n)}(e)})),p.jsx("img",{src:e,onMouseDown:function(e){return function(e,t){A(t),T(!0);var r=document.getElementById("page-".concat(t));if(r){var n=r.getBoundingClientRect(),o=e.clientY-n.top;W(ae(o))}}(e,t)},alt:"Original ".concat(t+1),style:{height:"auto",width:"".concat(m,"px"),cursor:"crosshair",background:"red",marginBottom:"-4px"},draggable:!1}),N&&z===t&&p.jsx("div",{style:{position:"absolute",left:0,zIndex:"20",top:"".concat(Math.min(L,V),"px"),width:"".concat(m,"px"),height:"".concat(Math.abs(V-L),"px"),backgroundColor:k,border:j,pointerEvents:"none"}})]})]},t)}))})]})};
//# sourceMappingURL=index.js.map
