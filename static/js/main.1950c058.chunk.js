(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),c=n(4),r=n(5),o=n(7),i=n(6),u=n(1),l=n.n(u),y=n(0),d=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={key:null},e.handlePressKey=function(t){e.setState({key:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handlePressKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handlePressKey)}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)("p",{className:"App__message",children:this.state.key?"The last pressed key is [".concat(this.state.key,"]"):"Nothing was pressed yet"})})}}]),n}(l.a.Component);n(13);a.a.render(Object(y.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1950c058.chunk.js.map