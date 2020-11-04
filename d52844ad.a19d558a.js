(window.webpackJsonp=window.webpackJsonp||[]).push([[1411],{1466:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(1729)),c={title:"MovableView",sidebar_label:"MovableView"},i={unversionedId:"components/viewContainer/movable-view",id:"version-1.x/components/viewContainer/movable-view",isDocsHomePage:!1,title:"MovableView",description:"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8",source:"@site/versioned_docs/version-1.x/components/viewContainer/movable-view.md",slug:"/components/viewContainer/movable-view",permalink:"/taro/docs/1.x/components/viewContainer/movable-view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/components/viewContainer/movable-view.md",version:"1.x",sidebar_label:"MovableView",sidebar:"version-1.x/components",previous:{title:"Swiper",permalink:"/taro/docs/1.x/components/viewContainer/swiper"},next:{title:"CoverView",permalink:"/taro/docs/1.x/components/viewContainer/cover-view"}},b=[],l={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8"},"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u652f\u6301\u5ea6")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"ReactNative"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"x"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\ufe0f \u2714\ufe0f"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u2714\ufe0f"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(o.b)("p",null,"\u5177\u4f53\u5c5e\u6027\u53c2\u8003\u76f8\u5173\u5c0f\u7a0b\u5e8f\u5b98\u7f51\uff0c\u5c5e\u6027\u503c\u8bf7\u6539\u5199\u4e3a\u9a7c\u5cf0\u5f0f\u547d\u540d\u3002"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f movable-view"),"\u3002"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/view/#movable-area"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f movable-view"),"\u3002"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.alipay.com/mini/component/movable-view"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f movable-view"),"\u3002"),Object(o.b)("h6",{id:"\u793a\u4f8b\uff1a"},"\u793a\u4f8b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 MovableArea, MovableView \u7ec4\u4ef6\nimport { MovableArea, MovableView } from '@tarojs/components'\n\nclass App extends Components {\n  render () {\n    return (\n      <MovableArea style='height: 200px; width: 200px; background: red;'>\n        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'></MovableView>\n      </MovableArea>\n    )\n  }\n}\n")))}p.isMDXComponent=!0},1729:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},v=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),m=p(n),v=r,u=m["".concat(c,".").concat(v)]||m[v]||s[v]||o;return n?a.a.createElement(u,i(i({ref:t},l),{},{components:n})):a.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=v;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"}}]);