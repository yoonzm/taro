(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{1791:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return i}));var b=n(0),r=n.n(b);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){if(null==e)return{};var n,b,r=function(e,t){if(null==e)return{};var n,b,r={},a=Object.keys(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var j=r.a.createContext({}),o=function(e){var t=r.a.useContext(j),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=o(e.components);return r.a.createElement(j.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(b.forwardRef)((function(e,t){var n=e.components,b=e.mdxType,a=e.originalType,c=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),p=o(n),d=b,i=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?r.a.createElement(i,l({ref:t},j,{components:n})):r.a.createElement(i,l({ref:t},j))}));function i(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var O in t)hasOwnProperty.call(t,O)&&(l[O]=t[O]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var j=2;j<a;j++)c[j]=n[j];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},442:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return o}));var b=n(1),r=n(9),a=(n(0),n(1791)),c={title:"OpenData",sidebar_label:"OpenData"},l={id:"version-2.2.13/components/open/open-data",title:"OpenData",description:"\u7528\u4e8e\u5c55\u793a\u5fae\u4fe1\u5f00\u653e\u7684\u6570\u636e",source:"@site/versioned_docs/version-2.2.13/components/open/open-data.md",permalink:"/taro/docs/2.2.13/components/open/open-data",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.13/components/open/open-data.md",version:"2.2.13",sidebar_label:"OpenData",sidebar:"version-2.2.13/components",previous:{title:"OfficialAccount",permalink:"/taro/docs/2.2.13/components/open/official-account"},next:{title:"WebView",permalink:"/taro/docs/2.2.13/components/open/web-view"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"OpenDataProps",id:"opendataprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"type",id:"type",children:[]},{value:"lang",id:"lang",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],j={rightToc:O};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u7528\u4e8e\u5c55\u793a\u5fae\u4fe1\u5f00\u653e\u7684\u6570\u636e"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<OpenDataProps>\n")),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  render () {\n    return (\n      <OpenData type='userAvatarUrl'/>\n    )\n  }\n}\n")),Object(a.b)("h2",{id:"opendataprops"},"OpenDataProps"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"type"),Object(a.b)("td",null,Object(a.b)("code",null,'"groupName" | "userNickName" | "userAvatarUrl" | "userGender" | "userCity" | "userProvince" | "userCountry" | "userLanguage"')),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u5f00\u653e\u6570\u636e\u7c7b\u578b")),Object(a.b)("tr",null,Object(a.b)("td",null,"openGid"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,'\u5f53 type="groupName" \u65f6\u751f\u6548, \u7fa4id')),Object(a.b)("tr",null,Object(a.b)("td",null,"lang"),Object(a.b)("td",null,Object(a.b)("code",null,'"en" | "zh_CN" | "zh_TW"')),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,'"en"')),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,'\u5f53 type="user*" \u65f6\u751f\u6548\uff0c\u4ee5\u54ea\u79cd\u8bed\u8a00\u5c55\u793a userInfo')),Object(a.b)("tr",null,Object(a.b)("td",null,"defaultText"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u6570\u636e\u4e3a\u7a7a\u65f6\u7684\u9ed8\u8ba4\u6587\u6848")),Object(a.b)("tr",null,Object(a.b)("td",null,"defaultAvatar"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u7528\u6237\u5934\u50cf\u4e3a\u7a7a\u65f6\u7684\u9ed8\u8ba4\u56fe\u7247\uff0c\u652f\u6301\u76f8\u5bf9\u8def\u5f84\u548c\u7f51\u7edc\u56fe\u7247\u8def\u5f84")),Object(a.b)("tr",null,Object(a.b)("td",null,"onError"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<any>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u7fa4\u540d\u79f0\u6216\u7528\u6237\u4fe1\u606f\u4e3a\u7a7a\u65f6\u89e6\u53d1")))),Object(a.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"OpenDataProps.type"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"OpenDataProps.openGid"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"OpenDataProps.lang"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"OpenDataProps.defaultText"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"OpenDataProps.defaultAvatar"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"OpenDataProps.onError"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(a.b)("h3",{id:"type"},"type"),Object(a.b)("p",null,"type \u7684\u5408\u6cd5\u503c"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"groupName"),Object(a.b)("td",null,"\u62c9\u53d6\u7fa4\u540d\u79f0")),Object(a.b)("tr",null,Object(a.b)("td",null,"userNickName"),Object(a.b)("td",null,"\u7528\u6237\u6635\u79f0")),Object(a.b)("tr",null,Object(a.b)("td",null,"userAvatarUrl"),Object(a.b)("td",null,"\u7528\u6237\u5934\u50cf")),Object(a.b)("tr",null,Object(a.b)("td",null,"userGender"),Object(a.b)("td",null,"\u7528\u6237\u6027\u522b")),Object(a.b)("tr",null,Object(a.b)("td",null,"userCity"),Object(a.b)("td",null,"\u7528\u6237\u6240\u5728\u57ce\u5e02")),Object(a.b)("tr",null,Object(a.b)("td",null,"userProvince"),Object(a.b)("td",null,"\u7528\u6237\u6240\u5728\u7701\u4efd")),Object(a.b)("tr",null,Object(a.b)("td",null,"userCountry"),Object(a.b)("td",null,"\u7528\u6237\u6240\u5728\u56fd\u5bb6")),Object(a.b)("tr",null,Object(a.b)("td",null,"userLanguage"),Object(a.b)("td",null,"\u7528\u6237\u7684\u8bed\u8a00")))),Object(a.b)("h3",{id:"lang"},"lang"),Object(a.b)("p",null,"lang \u7684\u5408\u6cd5\u503c"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"en"),Object(a.b)("td",null,"\u82f1\u6587")),Object(a.b)("tr",null,Object(a.b)("td",null,"zh_CN"),Object(a.b)("td",null,"\u7b80\u4f53\u4e2d\u6587")),Object(a.b)("tr",null,Object(a.b)("td",null,"zh_TW"),Object(a.b)("td",null,"\u7e41\u4f53\u4e2d\u6587")))),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"OpenData"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))))}o.isMDXComponent=!0}}]);