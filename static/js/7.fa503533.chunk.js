(window.webpackJsonpbook_review_app=window.webpackJsonpbook_review_app||[]).push([[7,12],{135:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},136:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},137:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},142:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function i(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",(function(){return i}))},143:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},21:function(e,t,n){"use strict";n.r(t);n(76);var r=n(77),o=(n(51),n(50)),i=(n(66),n(78)),a=(n(58),n(62)),c=n(135),s=n(136),u=n(142),l=n(137),p=n(143),f=n(0),m=n.n(f),d=n(79),y=n.n(d),b=n(5),g=n(67),v=n.n(g),h=(n(35),function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={confirmDirty:!1,autoCompleteResult:[],loading:!1},n.handleSubmit=function(e){e.preventDefault(),n.props.form.validateFieldsAndScroll((function(e,t){e||(n.setState({loading:!0}),v()({method:"post",url:"https://bookreview-tlcn.herokuapp.com/reviewbook/register",data:{email:t.email,password:t.password}}).then((function(e){n.setState({loading:!1}),e.data.success?(y.a.fire({position:"center",type:"success",title:"\u0110\u0103ng k\xed th\xe0nh c\xf4ng !",showConfirmButton:!1,timer:1e3}),n.props.history.push("/login")):y.a.fire({position:"center",type:"error",title:e.data,showConfirmButton:!0,timer:1500})})))}))},n.handleConfirmBlur=function(e){var t=e.target.value;n.setState({confirmDirty:n.state.confirmDirty||!!t})},n.compareToFirstPassword=function(e,t,r){var o=n.props.form;t&&t!==o.getFieldValue("password")?r("Two passwords that you enter is inconsistent!"):r()},n.validateToNextPassword=function(e,t,r){var o=n.props.form;t&&n.state.confirmDirty&&o.validateFields(["confirm"],{force:!0}),r()},n.handleWebsiteChange=function(e){var t;t=e?[".com",".org",".net"].map((function(t){return"".concat(e).concat(t)})):[],n.setState({autoCompleteResult:t})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return m.a.createElement(r.a,{spinning:this.state.loading},m.a.createElement(i.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit}),m.a.createElement(i.a.Item,{label:"E-mail",className:"registerForm"},t("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(m.a.createElement(a.a,null))),m.a.createElement(i.a.Item,{label:"Password",hasFeedback:!0,className:"registerForm"},t("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(m.a.createElement(a.a.Password,null))),m.a.createElement(i.a.Item,{label:"Confirm Password",hasFeedback:!0,className:"registerForm"},t("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(m.a.createElement(a.a.Password,{onBlur:this.handleConfirmBlur}))),m.a.createElement(o.a,{type:"primary",className:"btnRegister",htmlType:"submit"},"Register"),m.a.createElement(o.a,{className:"btnBackLogin",onClick:function(){e.props.backLogin()}},"Back to login")))}}]),t}(m.a.Component)),w=i.a.create({name:"register"})(h);t.default=Object(b.g)(w)},35:function(e,t,n){},76:function(e,t,n){"use strict";n(39),n(86)},77:function(e,t,n){"use strict";var r=n(0),o=n(7),i=n(37),a=n.n(i),c=n(47),s=n(87),u=n.n(s),l=n(387),p=n(55);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},w=Object(p.a)("small","default","large"),O=null;var S=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=b(this,g(t).call(this,e))).debouncifyUpdateSpinning=function(e){var t=(e||n.props).delay;t&&(n.cancelExistingSpin(),n.updateSpinning=u()(n.originalUpdateSpinning,t))},n.updateSpinning=function(){var e=n.props.spinning;n.state.spinning!==e&&n.setState({spinning:e})},n.renderSpin=function(e){var t,o=e.getPrefixCls,i=n.props,s=i.prefixCls,u=i.className,l=i.size,p=i.tip,f=i.wrapperClassName,y=i.style,b=h(i,["prefixCls","className","size","tip","wrapperClassName","style"]),g=n.state.spinning,v=o("spin",s),w=a()(v,(d(t={},"".concat(v,"-sm"),"small"===l),d(t,"".concat(v,"-lg"),"large"===l),d(t,"".concat(v,"-spinning"),g),d(t,"".concat(v,"-show-text"),!!p),t),u),S=Object(c.a)(b,["spinning","delay","indicator"]),E=r.createElement("div",m({},S,{style:y,className:w}),function(e,t){var n=t.indicator,o="".concat(e,"-dot");return r.isValidElement(n)?r.cloneElement(n,{className:a()(n.props.className,o)}):r.isValidElement(O)?r.cloneElement(O,{className:a()(O.props.className,o)}):r.createElement("span",{className:a()(o,"".concat(e,"-dot-spin"))},r.createElement("i",{className:"".concat(e,"-dot-item")}),r.createElement("i",{className:"".concat(e,"-dot-item")}),r.createElement("i",{className:"".concat(e,"-dot-item")}),r.createElement("i",{className:"".concat(e,"-dot-item")}))}(v,n.props),p?r.createElement("div",{className:"".concat(v,"-text")},p):null);if(n.isNestedPattern()){var N=a()("".concat(v,"-container"),d({},"".concat(v,"-blur"),g));return r.createElement("div",m({},S,{className:a()("".concat(v,"-nested-loading"),f)}),g&&r.createElement("div",{key:"loading"},E),r.createElement("div",{className:N,key:"container"},n.props.children))}return E};var o=e.spinning,i=function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(o,e.delay);return n.state={spinning:o&&!i},n.originalUpdateSpinning=n.updateSpinning,n.debouncifyUpdateSpinning(e),n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,i=[{key:"setDefaultIndicator",value:function(e){O=e}}],(o=[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||!this.props.children)}},{key:"render",value:function(){return r.createElement(l.a,null,this.renderSpin)}}])&&y(n.prototype,o),i&&y(n,i),t}(r.Component);S.defaultProps={spinning:!0,size:"default",wrapperClassName:""},S.propTypes={prefixCls:o.string,className:o.string,spinning:o.bool,size:o.oneOf(w),wrapperClassName:o.string,indicator:o.element},t.a=S},86:function(e,t,n){},87:function(e,t,n){var r=n(57),o=n(88),i=n(89),a="Expected a function",c=Math.max,s=Math.min;e.exports=function(e,t,n){var u,l,p,f,m,d,y=0,b=!1,g=!1,v=!0;if("function"!=typeof e)throw new TypeError(a);function h(t){var n=u,r=l;return u=l=void 0,y=t,f=e.apply(r,n)}function w(e){var n=e-d;return void 0===d||n>=t||n<0||g&&e-y>=p}function O(){var e=o();if(w(e))return S(e);m=setTimeout(O,function(e){var n=t-(e-d);return g?s(n,p-(e-y)):n}(e))}function S(e){return m=void 0,v&&u?h(e):(u=l=void 0,f)}function E(){var e=o(),n=w(e);if(u=arguments,l=this,d=e,n){if(void 0===m)return function(e){return y=e,m=setTimeout(O,t),b?h(e):f}(d);if(g)return clearTimeout(m),m=setTimeout(O,t),h(d)}return void 0===m&&(m=setTimeout(O,t)),f}return t=i(t)||0,r(n)&&(b=!!n.leading,p=(g="maxWait"in n)?c(i(n.maxWait)||0,t):p,v="trailing"in n?!!n.trailing:v),E.cancel=function(){void 0!==m&&clearTimeout(m),y=0,u=d=l=m=void 0},E.flush=function(){return void 0===m?f:S(o())},E}},88:function(e,t,n){var r=n(75);e.exports=function(){return r.Date.now()}},89:function(e,t,n){var r=n(57),o=n(74),i=NaN,a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return i;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):c.test(e)?i:+e}}}]);
//# sourceMappingURL=7.fa503533.chunk.js.map