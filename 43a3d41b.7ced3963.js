(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{1729:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,p=d["".concat(b,".").concat(s)]||d[s]||m[s]||c;return n?a.a.createElement(p,i(i({ref:t},o),{},{components:n})):a.a.createElement(p,i({ref:t},o))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var o=2;o<c;o++)b[o]=n[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1730:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1731:function(e,t,n){"use strict";var r=n(0),a=n(1732);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1732:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},1733:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(1731),b=n(1730),i=n(47),l=n.n(i),o=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,d=e.values,m=e.groupId,s=e.className,p=Object(c.a)(),O=p.tabGroupChoices,j=p.setTabGroupChoices,f=Object(r.useState)(i),v=f[0],h=f[1],g=Object(r.useState)(!1),y=g[0],w=g[1];if(null!=m){var x=O[m];null!=x&&x!==v&&d.some((function(e){return e.value===x}))&&h(x)}var N=function(e){h(e),null!=m&&j(m,e)},C=[],P=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},E=function(){w(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",P),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",P),window.removeEventListener("mousedown",E)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":t},s)},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(b.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),P(e)},onFocus:function(){return N(t)},onClick:function(){N(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},1734:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},504:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(2),a=n(6),c=(n(0),n(1729)),b=n(1733),i=n(1734),l={title:"matchMedia",sidebar_label:"matchMedia"},o={unversionedId:"components/viewContainer/match-media",id:"components/viewContainer/match-media",isDocsHomePage:!1,title:"matchMedia",description:"media query \u5339\u914d\u68c0\u6d4b\u8282\u70b9\u3002\u53ef\u4ee5\u6307\u5b9a\u4e00\u7ec4 media query \u89c4\u5219\uff0c\u6ee1\u8db3\u65f6\uff0c\u8fd9\u4e2a\u8282\u70b9\u624d\u4f1a\u88ab\u5c55\u793a\u3002",source:"@site/docs/components/viewContainer/match-media.md",slug:"/components/viewContainer/match-media",permalink:"/taro/docs/next/components/viewContainer/match-media",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/viewContainer/match-media.md",version:"current",sidebar_label:"matchMedia",sidebar:"components",previous:{title:"CoverImage",permalink:"/taro/docs/next/components/viewContainer/cover-image"},next:{title:"Icon",permalink:"/taro/docs/next/components/base/icon"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"CoverImageProps",id:"coverimageprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]}],d={rightToc:u};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"media query \u5339\u914d\u68c0\u6d4b\u8282\u70b9\u3002\u53ef\u4ee5\u6307\u5b9a\u4e00\u7ec4 media query \u89c4\u5219\uff0c\u6ee1\u8db3\u65f6\uff0c\u8fd9\u4e2a\u8282\u70b9\u624d\u4f1a\u88ab\u5c55\u793a\u3002"),Object(c.b)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u8282\u70b9\u53ef\u4ee5\u5b9e\u73b0\u201c\u9875\u9762\u5bbd\u9ad8\u5728\u67d0\u4e2a\u8303\u56f4\u65f6\u624d\u5c55\u793a\u67d0\u4e2a\u533a\u57df\u201d\u8fd9\u6837\u7684\u6548\u679c\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<MatchMediaProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)(b.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'class App extends Components {\n  render () {\n    return (\n      <View>\n        <MatchMedia min-width="300" max-width="600">\n          <view>\u5f53\u9875\u9762\u5bbd\u5ea6\u5728 300 ~ 500 px \u4e4b\u95f4\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n        </MatchMedia>\n        <MatchMedia min-height="400" orientation="landscape">\n          <view>\u5f53\u9875\u9762\u9ad8\u5ea6\u4e0d\u5c0f\u4e8e 400 px \u4e14\u5c4f\u5e55\u65b9\u5411\u4e3a\u7eb5\u5411\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n        </MatchMedia>\n      </View>\n    )\n  }\n}\n'))),Object(c.b)(i.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <match-media min-width="300" max-width="500">\n      <view>\u5f53\u9875\u9762\u5bbd\u5ea6\u5728 300 ~ 500 px \u4e4b\u95f4\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n    </match-media>\n    <match-media min-height="400" orientation="landscape">\n      <view>\u5f53\u9875\u9762\u9ad8\u5ea6\u4e0d\u5c0f\u4e8e 400 px \u4e14\u5c4f\u5e55\u65b9\u5411\u4e3a\u7eb5\u5411\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n    </match-media>\n  </view>\n</template>\n')))),Object(c.b)("h2",{id:"coverimageprops"},"CoverImageProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"minWidth"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u6700\u5c0f\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"maxWidth"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u6700\u5927\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"width"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"minHeight"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u6700\u5c0f\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"maxHeight"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u6700\u5927\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"Height"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"orientation"),Object(c.b)("td",null,"string"),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5c4f\u5e55\u65b9\u5411\uff08 landscape \u6216 portrait \uff09")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CoverImageProps.src"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CoverImageProps.onLoad"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CoverImageProps.onError"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);