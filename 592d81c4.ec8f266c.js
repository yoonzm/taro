(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{1729:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),s=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=s(n),O=a,d=u["".concat(b,".").concat(O)]||u[O]||p[O]||r;return n?c.a.createElement(d,l(l({ref:t},i),{},{components:n})):c.a.createElement(d,l({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,b=new Array(r);b[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var i=2;i<r;i++)b[i]=n[i];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},1730:function(e,t,n){"use strict";function a(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(c&&(c+=" "),c+=t);return c}},1731:function(e,t,n){"use strict";var a=n(0),c=n(1732);t.a=function(){var e=Object(a.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1732:function(e,t,n){"use strict";var a=n(0),c=Object(a.createContext)(void 0);t.a=c},1733:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(1731),b=n(1730),l=n(47),o=n.n(l),i=37,s=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,u=e.values,p=e.groupId,O=e.className,d=Object(r.a)(),j=d.tabGroupChoices,m=d.setTabGroupChoices,f=Object(a.useState)(l),g=f[0],h=f[1],v=Object(a.useState)(!1),y=v[0],x=v[1];if(null!=p){var N=j[p];null!=N&&N!==g&&u.some((function(e){return e.value===N}))&&h(N)}var w=function(e){h(e),null!=p&&m(p,e)},T=[],P=function(e){e.metaKey||e.altKey||e.ctrlKey||x(!0)},E=function(){x(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",P),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",P),window.removeEventListener("mousedown",E)}}),[]),c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":t},O)},u.map((function(e){var t=e.value,n=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(b.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),P(e)},onFocus:function(){return w(t)},onClick:function(){w(t),x(!1)},onPointerDown:function(){return x(!1)}},n)}))),c.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},1734:function(e,t,n){"use strict";var a=n(0),c=n.n(a);t.a=function(e){return c.a.createElement("div",null,e.children)}},643:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),c=n(6),r=(n(0),n(1729)),b=n(1733),l=n(1734),o={title:"Text",sidebar_label:"Text"},i={unversionedId:"components/base/text",id:"components/base/text",isDocsHomePage:!1,title:"Text",description:"\u6587\u672c",source:"@site/docs/components/base/text.md",slug:"/components/base/text",permalink:"/taro/docs/next/components/base/text",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/base/text.md",version:"current",sidebar_label:"Text",sidebar:"components",previous:{title:"Icon",permalink:"/taro/docs/next/components/base/icon"},next:{title:"Progress",permalink:"/taro/docs/next/components/base/progress"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"TextProps",id:"textprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"TSpace",id:"tspace",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u6587\u672c"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/text.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<TextProps>\n")),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)(b.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"React",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  state = {\n    contents: [],\n    contentsLen: 0\n  }\n\n  add = () => {\n    this.setState(prev => {\n      const cot = prev.contents.slice()\n      cot.push({ text: 'hello world' })\n      return {\n        contents: cot,\n        contentsLen: cot.length\n      }\n    })\n  }\n\n  remove = () => {\n    this.setState(prev => {\n      const cot = prev.contents.slice()\n      cot.pop()\n      return {\n        contents: cot,\n        contentsLen: cot.length\n      }\n    })\n  }\n\n  render () {\n    return (\n      <View className='container'>\n        {this.state.contents.map((item, index) => (\n          <Text key={index}>{item.text}</Text>\n        ))}\n        <Button className='btn-max-w button_style' plain type='default' onClick={this.add}>add line</Button>\n        <Button className='btn-max-w button_style' plain type='default' disabled={this.state.contentsLen ? false : true} onClick={this.remove}>remove line</Button>\n      </View>\n    )\n  }\n}\n"))),Object(r.b)(l.a,{value:"Vue",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="container">\n    <view v-for="(item, index) in contents">\n      <text>{{item.text}} line {{index + 1}}</text>\n    </view>\n    <button class="btn-max-w button_style" plain type="default" @tap="add">add line</button>\n    <button class="btn-max-w button_style" plain type="default" :disabled="contentsLen ? false : true" @tap="remove">remove line</button>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      contents: [],\n      contentsLen: 0\n    }\n  },\n  methods: {\n    add () {\n      const cot = this.contents.slice()\n      cot.push({ text: \'hello world\' })\n      this.contents = cot\n      this.contentsLen = cot.length\n    },\n\n    remove () {\n      const cot = this.contents.slice()\n      cot.pop()\n      this.contents = cot\n      this.contentsLen = cot.length\n    }\n  }\n}\n<\/script>\n')))),Object(r.b)("h2",{id:"textprops"},"TextProps"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"selectable"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6587\u672c\u662f\u5426\u53ef\u9009")),Object(r.b)("tr",null,Object(r.b)("td",null,"space"),Object(r.b)("td",null,Object(r.b)("code",null,'"ensp" | "emsp" | "nbsp"')),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u663e\u793a\u8fde\u7eed\u7a7a\u683c")),Object(r.b)("tr",null,Object(r.b)("td",null,"decode"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u662f\u5426\u89e3\u7801")))),Object(r.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"TextProps.selectable"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"TextProps.space"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"TextProps.decode"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))),Object(r.b)("h3",{id:"tspace"},"TSpace"),Object(r.b)("p",null,"space \u7684\u5408\u6cd5\u503c"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"ensp"),Object(r.b)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u4e00\u534a\u5927\u5c0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"emsp"),Object(r.b)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u5927\u5c0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"nbsp"),Object(r.b)("td",null,"\u6839\u636e\u5b57\u4f53\u8bbe\u7f6e\u7684\u7a7a\u683c\u5927\u5c0f")))),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Text"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);