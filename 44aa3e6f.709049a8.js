(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{1729:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return d}));var r=n(0),b=n.n(r);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,b=function(t,e){if(null==t)return{};var n,r,b={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(b[n]=t[n]);return b}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(b[n]=t[n])}return b}var i=b.a.createContext({}),u=function(t){var e=b.a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},O=function(t){var e=u(t.components);return b.a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},j=b.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,c=t.originalType,l=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),O=u(n),j=r,d=O["".concat(l,".").concat(j)]||O[j]||s[j]||c;return n?b.a.createElement(d,a(a({ref:e},i),{},{components:n})):b.a.createElement(d,a({ref:e},i))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=n.length,l=new Array(c);l[0]=j;var a={};for(var o in e)hasOwnProperty.call(e,o)&&(a[o]=e[o]);a.originalType=t,a.mdxType="string"==typeof t?t:r,l[1]=a;for(var i=2;i<c;i++)l[i]=n[i];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},510:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return a})),n.d(e,"rightToc",(function(){return o})),n.d(e,"default",(function(){return u}));var r=n(2),b=n(6),c=(n(0),n(1729)),l={title:"Taro.startSoterAuthentication(option)",sidebar_label:"startSoterAuthentication"},a={unversionedId:"apis/open-api/soter/startSoterAuthentication",id:"version-2.x/apis/open-api/soter/startSoterAuthentication",isDocsHomePage:!1,title:"Taro.startSoterAuthentication(option)",description:"\u5f00\u59cb SOTER \u751f\u7269\u8ba4\u8bc1\u3002\u9a8c\u8bc1\u6d41\u7a0b\u8bf7\u53c2\u8003\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-2.x/apis/open-api/soter/startSoterAuthentication.md",slug:"/apis/open-api/soter/startSoterAuthentication",permalink:"/taro/docs/2.x/apis/open-api/soter/startSoterAuthentication",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/open-api/soter/startSoterAuthentication.md",version:"2.x",sidebar_label:"startSoterAuthentication",sidebar:"version-2.x/API",previous:{title:"Taro.chooseInvoice(option)",permalink:"/taro/docs/2.x/apis/open-api/invoice/chooseInvoice"},next:{title:"Taro.checkIsSupportSoterAuthentication(option)",permalink:"/taro/docs/2.x/apis/open-api/soter/checkIsSupportSoterAuthentication"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"requestAuthModes",id:"requestauthmodes",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:o};function u(t){var e=t.components,n=Object(b.a)(t,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5f00\u59cb SOTER \u751f\u7269\u8ba4\u8bc1\u3002\u9a8c\u8bc1\u6d41\u7a0b\u8bf7\u53c2\u8003",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/bio-auth.html"}),"\u8bf4\u660e"),"\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"resultJSON \u8bf4\u660e"),"\n\u6b64\u6570\u636e\u4e3a\u8bbe\u5907TEE\u4e2d\uff0c\u5c06\u4f20\u5165\u7684challenge\u548cTEE\u5185\u5176\u4ed6\u5b89\u5168\u4fe1\u606f\u7ec4\u6210\u7684\u6570\u636e\u8fdb\u884c\u7ec4\u88c5\u800c\u6765\u7684JSON\uff0c\u5bf9\u4e0b\u8ff0\u5b57\u6bb5\u7684\u89e3\u91ca\u5982\u4e0b\u8868\u3002\u4f8b\u5b50\u5982\u4e0b\uff1a\n| \u5b57\u6bb5\u540d | \u8bf4\u660e |\n|---|----|\n| raw | \u8c03\u7528\u8005\u4f20\u5165\u7684challenge |\n| fid | \uff08\u4ec5Android\u652f\u6301\uff09\u672c\u6b21\u751f\u7269\u8bc6\u522b\u8ba4\u8bc1\u7684\u751f\u7269\u4fe1\u606f\u7f16\u53f7\uff08\u5982\u6307\u7eb9\u8bc6\u522b\u5219\u662f\u6307\u7eb9\u4fe1\u606f\u5728\u672c\u8bbe\u5907\u5185\u90e8\u7f16\u53f7\uff09 |\n| counter | \u9632\u91cd\u653e\u7279\u5f81\u53c2\u6570 |\n| tee_n | TEE\u540d\u79f0\uff08\u5982\u9ad8\u901a\u6216\u8005trustonic\u7b49\uff09 |\n| tee_v | TEE\u7248\u672c\u53f7 |\n| fp_n | \u6307\u7eb9\u4ee5\u53ca\u76f8\u5173\u903b\u8f91\u6a21\u5757\u63d0\u4f9b\u5546\uff08\u5982FPC\u7b49\uff09 |\n| fp_v | \u6307\u7eb9\u4ee5\u53ca\u76f8\u5173\u6a21\u5757\u7248\u672c\u53f7 |\n| cpu_id | \u673a\u5668\u552f\u4e00\u8bc6\u522bID |\n| uid | \u6982\u5ff5\u540cAndroid\u7cfb\u7edf\u5b9a\u4e49uid\uff0c\u5373\u5e94\u7528\u7a0b\u5e8f\u7f16\u53f7 |"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"challenge"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u6311\u6218\u56e0\u5b50\u3002\u6311\u6218\u56e0\u5b50\u4e3a\u8c03\u7528\u8005\u4e3a\u6b64\u6b21\u751f\u7269\u9274\u6743\u51c6\u5907\u7684\u7528\u4e8e\u7b7e\u540d\u7684\u5b57\u7b26\u4e32\u5173\u952e\u8bc6\u522b\u4fe1\u606f\uff0c\u5c06\u4f5c\u4e3a ",Object(c.b)("code",null,"resultJSON")," \u7684\u4e00\u90e8\u5206\uff0c\u4f9b\u8c03\u7528\u8005\u8bc6\u522b\u672c\u6b21\u8bf7\u6c42\u3002\u4f8b\u5982\uff1a\u5982\u679c\u573a\u666f\u4e3a\u8bf7\u6c42\u7528\u6237\u5bf9\u67d0\u8ba2\u5355\u8fdb\u884c\u6388\u6743\u786e\u8ba4\uff0c\u5219\u53ef\u4ee5\u5c06\u8ba2\u5355\u53f7\u586b\u5165\u6b64\u53c2\u6570\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"requestAuthModes"),Object(c.b)("td",null,Object(c.b)("code",null,'("fingerPrint" | "facial" | "speech")[]')),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u8bf7\u6c42\u4f7f\u7528\u7684\u53ef\u63a5\u53d7\u7684\u751f\u7269\u8ba4\u8bc1\u65b9\u5f0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"authContent"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9a8c\u8bc1\u63cf\u8ff0\uff0c\u5373\u8bc6\u522b\u8fc7\u7a0b\u4e2d\u663e\u793a\u5728\u754c\u9762\u4e0a\u7684\u5bf9\u8bdd\u6846\u63d0\u793a\u5185\u5bb9")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"authMode"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u751f\u7269\u8ba4\u8bc1\u65b9\u5f0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"errCode"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u9519\u8bef\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u9519\u8bef\u4fe1\u606f")),Object(c.b)("tr",null,Object(c.b)("td",null,"resultJSON"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u5728\u8bbe\u5907\u5b89\u5168\u533a\u57df\uff08TEE\uff09\u5185\u83b7\u5f97\u7684\u672c\u673a\u5b89\u5168\u4fe1\u606f\uff08\u5982TEE\u540d\u79f0\u7248\u672c\u53f7\u7b49\u4ee5\u53ca\u9632\u91cd\u653e\u53c2\u6570\uff09\u4ee5\u53ca\u672c\u6b21\u8ba4\u8bc1\u4fe1\u606f\uff08\u4ec5Android\u652f\u6301\uff0c\u672c\u6b21\u8ba4\u8bc1\u7684\u6307\u7eb9ID\uff09\u3002\u5177\u4f53\u8bf4\u660e\u89c1\u4e0b\u6587")),Object(c.b)("tr",null,Object(c.b)("td",null,"resultJSONSignature"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u7528SOTER\u5b89\u5168\u5bc6\u94a5\u5bf9 ",Object(c.b)("code",null,"resultJSON")," \u7684\u7b7e\u540d(SHA256 with RSA/PSS, saltlen=20)")))),Object(c.b)("h3",{id:"requestauthmodes"},"requestAuthModes"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"fingerPrint"),Object(c.b)("td",null,"\u6307\u7eb9\u8bc6\u522b")),Object(c.b)("tr",null,Object(c.b)("td",null,"facial"),Object(c.b)("td",null,"\u4eba\u8138\u8bc6\u522b")),Object(c.b)("tr",null,Object(c.b)("td",null,"speech"),Object(c.b)("td",null,"\u58f0\u7eb9\u8bc6\u522b",Object(c.b)("br",null),"API \u652f\u6301\u5ea6: \u6682\u672a\u652f\u6301")))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"requestAuthModes.speech"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.startSoterAuthentication({\n   requestAuthModes: ['fingerPrint'],\n   challenge: '123456',\n   authContent: '\u8bf7\u7528\u6307\u7eb9\u89e3\u9501',\n   success: function (res) { }\n})\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "raw":"msg",\n  "fid":"2",\n  "counter":123,\n  "tee_n":"TEE Name",\n  "tee_v":"TEE Version",\n  "fp_n":"Fingerprint Sensor Name",\n  "fp_v":"Fingerprint Sensor Version",\n  "cpu_id":"CPU Id",\n  "uid":"21"\n}\n')),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.startSoterAuthentication"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);