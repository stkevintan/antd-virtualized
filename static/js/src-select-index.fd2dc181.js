(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/_util/getPrefixCls.ts":function(e,t,n){"use strict";function l(e,t){var n=this.props.prefixCls,l=void 0===n?"ant-virtualized":n;return t||(e?"".concat(l,"-").concat(e):l)}n.d(t,"a",function(){return l}),l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPrefixCls",filename:"src\\_util\\getPrefixCls.ts"}})},"./src/select/index.mdx":function(e,t,n){"use strict";n.r(t);var l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("react"),a=n.n(i),o=n("./node_modules/@mdx-js/react/dist/index.es.js"),r=n("./node_modules/docz/dist/index.esm.js"),s=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),c=(n("./node_modules/antd/es/select/style/index.js"),n("./node_modules/antd/es/select/index.js")),d=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),p=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),f=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),h=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),v=n("./node_modules/classnames/index.js"),j=n.n(v),O=n("./node_modules/react-window/dist/index.esm.js"),y=n("./node_modules/omit.js/es/index.js");function S(e,t){return!t.disabled&&t[this.props.optionFilterProp].toLowerCase().indexOf(e.toLowerCase())>-1}"test"===Object("test")&&Object.isExtensible("test")&&Object.defineProperty("test","__filemeta",{enumerable:!0,configurable:!0,value:{name:"util",filename:"src\\select\\util.ts"}}),S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultFilterFn",filename:"src\\select\\util.ts"}});var g=n("./src/_util/getPrefixCls.ts");"undefined"!==typeof SelectProps&&SelectProps&&SelectProps===Object(SelectProps)&&Object.isExtensible(SelectProps)&&Object.defineProperty(SelectProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SelectProps",filename:"src\\select\\index.tsx"}}),"undefined"!==typeof IState&&IState&&IState===Object(IState)&&Object.isExtensible(IState)&&Object.defineProperty(IState,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IState",filename:"src\\select\\index.tsx"}});var _=function(e){function t(e){var n;Object(u.a)(this,t),(n=Object(p.a)(this,Object(b.a)(t).call(this,e))).avSelect=void 0,n.avList=void 0,n.saveSelect=function(e){n.avSelect=e},n.scrollActiveItemToView=function(){var e=n.props,t=e.options,l=void 0===t?[]:t,i=e.keyField,a=n.state.value,o=l.findIndex(function(e){return e[i]===(a||{}).key});n.avList.current&&n.avList.current.scrollToItem(o)},n.handleSearch=function(e){n.setState({searchValue:e})},n.handleSelect=function(e){var t=n.props,l=t.onChange,i=t.keyField,a=t.titleField,o={key:e[i],label:e[a]};l&&l(e[i]),n.handleDropdownVisibleChange(!1),n.setState({value:o,searchValue:""},function(){n.avSelect.rcSelect.setInputValue(""),n.avSelect.focus()})},n.handleChange=function(e){var t=n.props.onChange;t&&t(e),n.setState({value:void 0,searchValue:""})},n.handleDropdownVisibleChange=function(e){n.setState({open:e});var t=n.props.onDropdownVisibleChange;t&&t(e)},n.handleBlur=function(){n.setState({searchValue:""})},n._getItemSize=function(e){var t=n.props,l=t.optionHeight,i=t.options;return l instanceof Function?l((void 0===i?[]:i)[e]):l||0},n._calculateListHeight=function(e){for(var t=n.props.height,l=0,i=0;i<e.length;i++)if((l+=n._getItemSize(i))>t)return t;return l},n.handleEventPrevent=function(e){return e.preventDefault()},n._optionRenderer=function(e){var t,n=e.handleSelect,l=e.titleField,i=e.option,o=e.style,r=e.valueArray,s=e.keyField,c=e.prefixCls,u=j()("".concat(c,"-item"),(t={},Object(d.a)(t,"".concat(c,"-item-disabled"),i.disabled),Object(d.a)(t,"".concat(c,"-item-selected"),r&&r.some(function(e){return e.key===i[s]})),t)),p=i.disabled?{}:{onClick:function(){return n(i)}};return a.a.createElement("div",Object.assign({className:u,style:o},p),i[l])},n.filterOption=function(e,t){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:S,i=n.props.filterOption,a=i;return"filterOption"in n.props?!0===i&&(a=l.bind(Object(m.a)(n))):a=l.bind(Object(m.a)(n)),!a||("function"===typeof a?a.call(Object(m.a)(n),e,t):!t.disabled)},n.renderMenu=function(e){var t=n.props,l=t.keyField,i=t.titleField,o=t.filterOption,r=t.prefixCls,s=t.options,c=void 0===s?[]:s,d=n.state,u=d.searchValue,p=d.value,b=o&&u?c.filter(function(e){return n.filterOption(u,e)}):c;if(0===b.length)return e;var f=n._calculateListHeight(b),h=g.a.call(Object(m.a)(n),"select",r);return a.a.createElement("div",{onMouseDown:n.handleEventPrevent,className:h},a.a.createElement(O.a,{ref:n.avList,className:"".concat(h,"-menu"),height:f,itemCount:b.length,itemSize:n._getItemSize,width:""},function(e){var t=e.index,a=e.style,o=b[t];return n._optionRenderer({handleSelect:n.handleSelect,titleField:i,option:o,style:a,valueArray:p?[p]:null,keyField:l,prefixCls:h})}))};var l=e.value||e.defaultValue,i=e.options||[];return n.state={value:function(){if(i.length>0&&l){var t=i.filter(function(t){return t[e.keyField]===l});if(t[0])return{key:l,label:t[0][e.titleField]}}}(),searchValue:"",open:e.defaultOpen},n.avList=a.a.createRef(),n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.open;!t.open&&n&&this.scrollActiveItemToView()}}]),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.value,i=t.open,o=this.props,r=o.titleField,s=Object(l.a)(o,["titleField"]),d=Object(y.default)(s,["defaultValue","value"]);return a.a.createElement(c.a,Object.assign({},d,{value:n,ref:this.saveSelect,open:i,onSearch:function(t){return e.handleSearch(t)},onChange:this.handleChange,onBlur:function(){return e.handleBlur()},labelInValue:!0,optionLabelProp:r,onDropdownVisibleChange:this.handleDropdownVisibleChange,dropdownRender:this.renderMenu,dropdownStyle:{overflow:"hidden"}}))}}]),t}(i.Component);_.defaultProps={height:256,optionHeight:32,titleField:"title",keyField:"id",options:[]},"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VirtualizedSelect",filename:"src\\select\\index.tsx"}}),"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VirtualizedSelect",filename:"src\\select\\index.tsx"}});var x=n("./node_modules/antd/lib/select/index.js"),w=n.n(x);n("./src/select/style/index.less");n.d(t,"default",function(){return F});var C={},P="wrapper";function F(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)(P,Object.assign({},C,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"select-\u9009\u62e9\u5668"},"Select \u9009\u62e9\u5668"),Object(o.b)("p",null,"\u4e0b\u62c9\u9009\u62e9\u5668\u3002"),Object(o.b)("h2",{id:"\u5f15\u5165"},"\u5f15\u5165"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"import { Select } from 'antd-virtualized';\n")),Object(o.b)("h2",{id:"\u539f\u751fantd-select\u5bf9\u6bd4"},"\u539f\u751fAntd Select\u5bf9\u6bd4"),Object(o.b)(w.a,{style:{width:120},onDropdownVisibleChange:function(e){return console.log("visible",e)},mdxType:"OriginalSelect"},Array.from({length:20}).map(function(e,t){return Object(o.b)(w.a.Option,{key:t},"test")})),Object(o.b)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),Object(o.b)("h3",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),Object(o.b)(r.c,{__position:1,__code:"<Select\n  placeholder=\"\u652f\u6301\u5927\u6570\u636e\u7684Select\"\n  titleField=\"name\"\n  options={Array.from({ length: 2000 }).map((v, i) => ({\n    id: i,\n    name: 'test' + i,\n  }))}\n  keyField=\"id\"\n  style={{ width: 120 }}\n  defaultOpen\n  onDropdownVisibleChange={visible => console.log('visible', visible)}\n/>\n<Select\n  placeholder=\"\u652f\u6301\u5927\u6570\u636e\u7684Select\"\n  titleField=\"name\"\n  options={[\n    { id: 1, name: '1' },\n    { id: '2', name: '2', disabled: true },\n    { id: '3', name: '3' },\n  ]}\n  keyField=\"id\"\n  style={{ width: 120 }}\n/>",__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,State:s.a,Toggle:s.b,Select:_,OriginalSelect:w.a},mdxType:"Playground"},Object(o.b)(_,{placeholder:"\u652f\u6301\u5927\u6570\u636e\u7684Select",titleField:"name",options:Array.from({length:2e3}).map(function(e,t){return{id:t,name:"test"+t}}),keyField:"id",style:{width:120},defaultOpen:!0,onDropdownVisibleChange:function(e){return console.log("visible",e)},mdxType:"Select"}),Object(o.b)(_,{placeholder:"\u652f\u6301\u5927\u6570\u636e\u7684Select",titleField:"name",options:[{id:1,name:"1"},{id:"2",name:"2",disabled:!0},{id:"3",name:"3"}],keyField:"id",style:{width:120},mdxType:"Select"})),Object(o.b)("h3",{id:"\u5e26\u641c\u7d22\u6846"},"\u5e26\u641c\u7d22\u6846"),Object(o.b)(r.c,{__position:2,__code:'<State initial={{ value: 100 }}>\n  {({ state, setState }) => (\n    <Select\n      allowClear\n      showSearch\n      placeholder="\u652f\u6301\u5927\u6570\u636e\u7684Select"\n      titleField="name"\n      options={Array.from({ length: 2000 }).map((v, i) => ({\n        id: i,\n        name: \'test\' + i,\n      }))}\n      keyField="id"\n      style={{ width: 120 }}\n      defaultValue={state.value}\n      filterOption={(input, option) => option.name.indexOf(input) >= 0}\n      onChange={value => setState({ value })}\n    />\n  )}\n</State>',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,State:s.a,Toggle:s.b,Select:_,OriginalSelect:w.a},mdxType:"Playground"},Object(o.b)(s.a,{initial:{value:100},mdxType:"State"},function(e){var t=e.state,n=e.setState;return Object(o.b)(_,{allowClear:!0,showSearch:!0,placeholder:"\u652f\u6301\u5927\u6570\u636e\u7684Select",titleField:"name",options:Array.from({length:2e3}).map(function(e,t){return{id:t,name:"test"+t}}),keyField:"id",style:{width:120},defaultValue:t.value,filterOption:function(e,t){return t.name.indexOf(e)>=0},onChange:function(e){return n({value:e})},mdxType:"Select"})})),Object(o.b)("h3",{id:"\u5b9a\u4e49\u4e0b\u62c9\u5217\u8868\u4e3a\u7a7a\u65f6\u663e\u793a\u7684\u5185\u5bb9"},"\u5b9a\u4e49\u4e0b\u62c9\u5217\u8868\u4e3a\u7a7a\u65f6\u663e\u793a\u7684\u5185\u5bb9"),Object(o.b)(r.c,{__position:3,__code:'\u539f\u59cb\n<Select style={{ width: 120 }} />\n<br />\n<br />\n\u81ea\u5b9a\u4e49\n<Select style={{ width: 120 }} notFoundContent="\u6570\u636e\u4e3a\u7a7a" />',__scope:{props:this?this.props:n,Playground:r.c,Props:r.d,State:s.a,Toggle:s.b,Select:_,OriginalSelect:w.a},mdxType:"Playground"},"\u539f\u59cb",Object(o.b)(_,{style:{width:120},mdxType:"Select"}),Object(o.b)("br",null),Object(o.b)("br",null),"\u81ea\u5b9a\u4e49",Object(o.b)(_,{style:{width:120},notFoundContent:"\u6570\u636e\u4e3a\u7a7a",mdxType:"Select"})),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)(r.d,{of:_,isToggle:!0,title:"\u269b\ufe0f Select props",mdxType:"Props"}))}F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\select\\index.mdx"}}),F.isMDXComponent=!0},"./src/select/style/index.less":function(e,t,n){}}]);