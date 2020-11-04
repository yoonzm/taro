(window.webpackJsonp=window.webpackJsonp||[]).push([[836],{1729:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,f=u["".concat(c,".").concat(b)]||u[b]||v[b]||a;return t?o.a.createElement(f,i(i({ref:n},p),{},{components:t})):o.a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},893:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(6),a=(t(0),t(1729)),c={title:"\u6d88\u606f\u673a\u5236"},i={unversionedId:"apis/about/events",id:"version-1.x/apis/about/events",isDocsHomePage:!1,title:"\u6d88\u606f\u673a\u5236",description:"Taro \u63d0\u4f9b\u4e86 Taro.Events \u6765\u5b9e\u73b0\u6d88\u606f\u673a\u5236\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u5b9e\u4f8b\u5316\u5b83\uff0c\u5982\u4e0b",source:"@site/versioned_docs/version-1.x/apis/about/events.md",slug:"/apis/about/events",permalink:"/taro/docs/1.x/apis/about/events",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/about/events.md",version:"1.x",sidebar:"version-1.x/API",previous:{title:"\u73af\u5883\u5224\u65ad",permalink:"/taro/docs/1.x/apis/about/env"},next:{title:"Taro.startAccelerometer(res)",permalink:"/taro/docs/1.x/apis/device/accelerometer/startAccelerometer"}},s=[],p={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Taro \u63d0\u4f9b\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"Taro.Events")," \u6765\u5b9e\u73b0\u6d88\u606f\u673a\u5236\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u5b9e\u4f8b\u5316\u5b83\uff0c\u5982\u4e0b"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Events } from '@tarojs/taro'\n\nconst events = new Events()\n\n// \u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u63a5\u53d7\u53c2\u6570\nevents.on('eventName', (arg) => {\n  // doSth\n})\n\n// \u76d1\u542c\u540c\u4e2a\u4e8b\u4ef6\uff0c\u540c\u65f6\u7ed1\u5b9a\u591a\u4e2a handler\nevents.on('eventName', handler1)\nevents.on('eventName', handler2)\nevents.on('eventName', handler3)\n\n// \u89e6\u53d1\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u4f20\u53c2\nevents.trigger('eventName', arg)\n\n// \u89e6\u53d1\u4e8b\u4ef6\uff0c\u4f20\u5165\u591a\u4e2a\u53c2\u6570\nevents.trigger('eventName', arg1, arg2, ...)\n\n// \u53d6\u6d88\u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6\nevents.off('eventName')\n\n// \u53d6\u6d88\u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6\u67d0\u4e2a handler\nevents.off('eventName', handler1)\n\n// \u53d6\u6d88\u76d1\u542c\u6240\u6709\u4e8b\u4ef6\nevents.off()\n")),Object(a.b)("p",null,"\u540c\u65f6 Taro \u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5168\u5c40\u6d88\u606f\u4e2d\u5fc3 ",Object(a.b)("inlineCode",{parentName:"p"},"Taro.eventCenter")," \u4ee5\u4f9b\u4f7f\u7528\uff0c\u5b83\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"Taro.Events")," \u7684\u5b9e\u4f8b"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.eventCenter.on\nTaro.eventCenter.trigger\nTaro.eventCenter.off\n")))}l.isMDXComponent=!0}}]);