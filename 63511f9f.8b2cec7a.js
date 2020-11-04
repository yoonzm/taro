(window.webpackJsonp=window.webpackJsonp||[]).push([[666],{1729:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return p}));var b=n(0),c=n.n(b);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,b)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e){if(null==t)return{};var n,b,c=function(t,e){if(null==t)return{};var n,b,c={},l=Object.keys(t);for(b=0;b<l.length;b++)n=l[b],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(b=0;b<l.length;b++)n=l[b],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var j=c.a.createContext({}),d=function(t){var e=c.a.useContext(j),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=d(t.components);return c.a.createElement(j.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},o=c.a.forwardRef((function(t,e){var n=t.components,b=t.mdxType,l=t.originalType,r=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),u=d(n),o=b,p=u["".concat(r,".").concat(o)]||u[o]||i[o]||l;return n?c.a.createElement(p,a(a({ref:e},j),{},{components:n})):c.a.createElement(p,a({ref:e},j))}));function p(t,e){var n=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var l=n.length,r=new Array(l);r[0]=o;var a={};for(var O in e)hasOwnProperty.call(e,O)&&(a[O]=e[O]);a.originalType=t,a.mdxType="string"==typeof t?t:b,r[1]=a;for(var j=2;j<l;j++)r[j]=n[j];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},723:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return a})),n.d(e,"rightToc",(function(){return O})),n.d(e,"default",(function(){return d}));var b=n(2),c=n(6),l=(n(0),n(1729)),r={title:"Input",sidebar_label:"Input"},a={unversionedId:"components/forms/input",id:"version-2.x/components/forms/input",isDocsHomePage:!1,title:"Input",description:"\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236",source:"@site/versioned_docs/version-2.x/components/forms/input.md",slug:"/components/forms/input",permalink:"/taro/docs/2.x/components/forms/input",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/forms/input.md",version:"2.x",sidebar_label:"Input",sidebar:"version-2.x/components",previous:{title:"Form",permalink:"/taro/docs/2.x/components/forms/form"},next:{title:"Label",permalink:"/taro/docs/2.x/components/forms/label"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"InputProps",id:"inputprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"inputEventDetail",id:"inputeventdetail",children:[]},{value:"inputForceEventDetail",id:"inputforceeventdetail",children:[]},{value:"inputValueEventDetail",id:"inputvalueeventdetail",children:[]},{value:"onKeyboardHeightChangeEventDetail",id:"onkeyboardheightchangeeventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],j={rightToc:O};function d(t){var e=t.components,n=Object(c.a)(t,["components"]);return Object(l.b)("wrapper",Object(b.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/input.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<InputProps>\n")),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n\n  render () {\n    return (\n        <View className='example-body'>\n          <Text>\u53ef\u4ee5\u81ea\u52a8\u805a\u7126\u7684 input</Text>\n            <Input type='text' placeholder='\u5c06\u4f1a\u83b7\u53d6\u7126\u70b9' focus/>\n            <Text>\u63a7\u5236\u6700\u5927\u8f93\u5165\u957f\u5ea6\u7684 input</Text>\n            <Input type='text' placeholder='\u6700\u5927\u8f93\u5165\u957f\u5ea6\u4e3a 10' maxLength='10'/>\n            <Text>\u6570\u5b57\u8f93\u5165\u7684 input</Text>\n            <Input type='number' placeholder='\u8fd9\u662f\u4e00\u4e2a\u6570\u5b57\u8f93\u5165\u6846'/>\n            <Text>\u5bc6\u7801\u8f93\u5165\u7684 input</Text>\n            <Input type='password' password placeholder='\u8fd9\u662f\u4e00\u4e2a\u5bc6\u7801\u8f93\u5165\u6846'/>\n            <Text>\u5e26\u5c0f\u6570\u70b9\u7684 input</Text>\n            <Input type='digit' placeholder='\u5e26\u5c0f\u6570\u70b9\u7684\u6570\u5b57\u952e\u76d8'/>\n            <Text>\u8eab\u4efd\u8bc1\u8f93\u5165\u7684 input</Text>\n            <Input type='idcard' placeholder='\u8eab\u4efd\u8bc1\u8f93\u5165\u952e\u76d8'/>\n            <Text>\u63a7\u5236\u5360\u4f4d\u7b26\u989c\u8272\u7684 input</Text>\n            <Input type='text' placeholder='\u5360\u4f4d\u7b26\u5b57\u4f53\u662f\u7ea2\u8272\u7684' placeholderStyle='color:red'/>\n        </View>\n    )\n  }\n}\n")),Object(l.b)("h2",{id:"inputprops"},"InputProps"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8f93\u5165\u6846\u7684\u521d\u59cb\u5185\u5bb9")),Object(l.b)("tr",null,Object(l.b)("td",null,"type"),Object(l.b)("td",null,Object(l.b)("code",null,'"number" | "text" | "idcard" | "digit"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"text"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"input \u7684\u7c7b\u578b")),Object(l.b)("tr",null,Object(l.b)("td",null,"password"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u662f\u5426\u662f\u5bc6\u7801\u7c7b\u578b")),Object(l.b)("tr",null,Object(l.b)("td",null,"placeholder"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8f93\u5165\u6846\u4e3a\u7a7a\u65f6\u5360\u4f4d\u7b26")),Object(l.b)("tr",null,Object(l.b)("td",null,"placeholderStyle"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6307\u5b9a placeholder \u7684\u6837\u5f0f")),Object(l.b)("tr",null,Object(l.b)("td",null,"placeholderClass"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"input-placeholder"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6307\u5b9a placeholder \u7684\u6837\u5f0f\u7c7b")),Object(l.b)("tr",null,Object(l.b)("td",null,"disabled"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u662f\u5426\u7981\u7528")),Object(l.b)("tr",null,Object(l.b)("td",null,"maxLength"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"140")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6700\u5927\u8f93\u5165\u957f\u5ea6\uff0c\u8bbe\u7f6e\u4e3a -1 \u7684\u65f6\u5019\u4e0d\u9650\u5236\u6700\u5927\u957f\u5ea6")),Object(l.b)("tr",null,Object(l.b)("td",null,"cursorSpacing"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"0")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6307\u5b9a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb\uff0c\u5355\u4f4d px \u3002\u53d6 input \u8ddd\u79bb\u5e95\u90e8\u7684\u8ddd\u79bb\u548c cursor-spacing \u6307\u5b9a\u7684\u8ddd\u79bb\u7684\u6700\u5c0f\u503c\u4f5c\u4e3a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb")),Object(l.b)("tr",null,Object(l.b)("td",null,"autoFocus"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"(\u5373\u5c06\u5e9f\u5f03\uff0c\u8bf7\u76f4\u63a5\u4f7f\u7528 focus )\u81ea\u52a8\u805a\u7126\uff0c\u62c9\u8d77\u952e\u76d8")),Object(l.b)("tr",null,Object(l.b)("td",null,"focus"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u83b7\u53d6\u7126\u70b9")),Object(l.b)("tr",null,Object(l.b)("td",null,"confirmType"),Object(l.b)("td",null,Object(l.b)("code",null,'"send" | "search" | "next" | "go" | "done"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"done")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8bbe\u7f6e\u952e\u76d8\u53f3\u4e0b\u89d2\u6309\u94ae\u7684\u6587\u5b57")),Object(l.b)("tr",null,Object(l.b)("td",null,"confirmHold"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u70b9\u51fb\u952e\u76d8\u53f3\u4e0b\u89d2\u6309\u94ae\u65f6\u662f\u5426\u4fdd\u6301\u952e\u76d8\u4e0d\u6536\u8d77")),Object(l.b)("tr",null,Object(l.b)("td",null,"cursor"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6307\u5b9afocus\u65f6\u7684\u5149\u6807\u4f4d\u7f6e")),Object(l.b)("tr",null,Object(l.b)("td",null,"selectionStart"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"-1")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5149\u6807\u8d77\u59cb\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0eselection-end\u642d\u914d\u4f7f\u7528")),Object(l.b)("tr",null,Object(l.b)("td",null,"selectionEnd"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"-1")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5149\u6807\u7ed3\u675f\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0eselection-start\u642d\u914d\u4f7f\u7528")),Object(l.b)("tr",null,Object(l.b)("td",null,"adjustPosition"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u952e\u76d8\u5f39\u8d77\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u4e0a\u63a8\u9875\u9762")),Object(l.b)("tr",null,Object(l.b)("td",null,"holdKeyboard"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"focus \u65f6\uff0c\u70b9\u51fb\u9875\u9762\u7684\u65f6\u5019\u4e0d\u6536\u8d77\u952e\u76d8")),Object(l.b)("tr",null,Object(l.b)("td",null,"onInput"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<inputEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5f53\u952e\u76d8\u8f93\u5165\u65f6\uff0c\u89e6\u53d1input\u4e8b\u4ef6\uff0cevent.detail = ","{value, cursor, keyCode}","\uff0c\u5904\u7406\u51fd\u6570\u53ef\u4ee5\u76f4\u63a5 return \u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5c06\u66ff\u6362\u8f93\u5165\u6846\u7684\u5185\u5bb9\u3002")),Object(l.b)("tr",null,Object(l.b)("td",null,"onFocus"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<inputForceEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8f93\u5165\u6846\u805a\u7126\u65f6\u89e6\u53d1\uff0cevent.detail = ","{ value, height }","\uff0cheight \u4e3a\u952e\u76d8\u9ad8\u5ea6")),Object(l.b)("tr",null,Object(l.b)("td",null,"onBlur"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<inputValueEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8f93\u5165\u6846\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1",Object(l.b)("br",null),Object(l.b)("br",null),"event.detail = ","{value: value}")),Object(l.b)("tr",null,Object(l.b)("td",null,"onConfirm"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<inputValueEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u70b9\u51fb\u5b8c\u6210\u6309\u94ae\u65f6\u89e6\u53d1",Object(l.b)("br",null),Object(l.b)("br",null),"event.detail = ","{value: value}")),Object(l.b)("tr",null,Object(l.b)("td",null,"onKeyboardHeightChange"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onKeyboardHeightChangeEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u952e\u76d8\u9ad8\u5ea6\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6",Object(l.b)("br",null),Object(l.b)("br",null),"event.detail = ","{height: height, duration: duration}")))),Object(l.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.value"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.type"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(\u90e8\u5206\u652f\u6301)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.password"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.placeholder"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.placeholderStyle"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.placeholderClass"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.disabled"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.maxLength"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.cursorSpacing"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.autoFocus"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.focus"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.confirmType"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.confirmHold"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.cursor"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.selectionStart"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.selectionEnd"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.adjustPosition"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.holdKeyboard"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.onInput"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.onFocus"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.onBlur"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.onConfirm"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"(\u501f\u7528",Object(l.b)("a",Object(b.a)({parentName:"td"},{href:"/taro/docs/2.x/components/forms/form"}),"Form \u7ec4\u4ef6"),"\u7684",Object(l.b)("inlineCode",{parentName:"td"},"onSubmit"),"\u4e8b\u4ef6\u6765\u66ff\u4ee3)"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InputProps.onKeyboardHeightChange"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"inputeventdetail"},"inputEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u8f93\u5165\u503c")),Object(l.b)("tr",null,Object(l.b)("td",null,"cursor"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u5149\u6807\u4f4d\u7f6e")),Object(l.b)("tr",null,Object(l.b)("td",null,"keyCode"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u952e\u503c")))),Object(l.b)("h3",{id:"inputforceeventdetail"},"inputForceEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u8f93\u5165\u503c")),Object(l.b)("tr",null,Object(l.b)("td",null,"height"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u952e\u76d8\u9ad8\u5ea6")))),Object(l.b)("h3",{id:"inputvalueeventdetail"},"inputValueEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u8f93\u5165\u503c")))),Object(l.b)("h3",{id:"onkeyboardheightchangeeventdetail"},"onKeyboardHeightChangeEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"height"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u952e\u76d8\u9ad8\u5ea6")),Object(l.b)("tr",null,Object(l.b)("td",null,"duration"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u6301\u7eed\u65f6\u95f4")))),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Input"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);