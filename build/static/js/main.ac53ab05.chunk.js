(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{21:function(e,t,n){e.exports=n(34)},26:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),o=n.n(r),l=n(9),u=n(10),i=n(12),m=n(11),s=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.call(this)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c"),c.a.createElement("ul",null,this.props.renderTodos(!1)),c.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210"),c.a.createElement("ul",null,this.props.renderTodos(!0)))}}]),n}(a.Component),p=function(e){return console.log(e),c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h2",null,"React"),c.a.createElement("p",null,"\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93"),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.history.push("/doc")}},"\u5feb\u901f\u5f00\u59cb"),c.a.createElement("button",{onClick:function(){return e.history.push("/tuto")}},"\u5165\u95e8\u6559\u7a0b")))};var E=function(){var e=this;return c.a.createElement("div",null,[1,2,3,4,5].map((function(t){return c.a.createElement("button",{key:t,onClick:function(){return e.getData(t)}},t)})))},d=(a.Component,n(16)),h=n(1),f=n(3),v=(n(26),function(){return c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement(f.b,{activeClassName:"active",exact:!0,to:"/"},"React"),c.a.createElement(f.b,{activeClassName:"active",to:"/doc"},"\u6587\u6863"),c.a.createElement(f.b,{activeClassName:"active",to:"/tuto"},"\u6559\u7a0b"),c.a.createElement(f.b,{activeClassName:"active",to:"/blog"},"\u535a\u5ba2"),c.a.createElement(f.b,{activeClassName:"active",to:"/comm"},"\u793e\u533a")))}),b=(n(32),[{path:"/",exact:!0,component:p},{path:"/doc",component:function(e){var t=e.routes;return c.a.createElement("div",{className:"doc"},c.a.createElement("div",{className:"content"},c.a.createElement(h.d,null,t.map((function(e){return c.a.createElement(k,e)}))),c.a.createElement(f.a,{from:"/doc",to:"/doc/core"})),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement(f.b,{to:"/doc/core"},"\u6838\u5fc3\u6982\u5ff5")),c.a.createElement("li",null,c.a.createElement(f.b,{to:"/doc/guide"},"\u9ad8\u7ea7\u6307\u5f15")),c.a.createElement("li",null,c.a.createElement(f.b,{to:"/doc/api"},"API")),c.a.createElement("li",null,c.a.createElement(f.b,{to:"/doc/hooks"},"Hooks"))))},pri:!0,routes:[{path:"/doc/core",component:function(){return c.a.createElement("div",null,"Core")}},{path:"/doc/guide",component:function(){return c.a.createElement("div",null,"Guide")}},{path:"/doc/api",component:function(){return c.a.createElement("div",null,"Api")}},{path:"/doc/hooks",component:function(){return c.a.createElement("div",null,"Hooks")}}]},{path:"/tuto",component:function(){return c.a.createElement("div",null,"Tuto")},pri:!0},{path:"/blog",component:function(){return c.a.createElement("div",null,"Blog")}},{path:"/comm",component:function(){return c.a.createElement("div",null,"Comm")}},{path:"/login",component:function(e){return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){localStorage.setItem("userinfo","tom"),e.history.replace(e.location.state)}},"\u767b\u5f55"))}}]);function g(e){e.children;var t=Object(d.a)(e,["children"]);return c.a.createElement(h.b,Object.assign({},t,{render:function(e){var t=e.location;return localStorage.getItem("userinfo")?c.a.createElement("children",null):c.a.createElement(h.a,{to:{pathname:"/login",state:t}})}}))}function k(e){return c.a.createElement(h.b,{path:e.path,render:function(t){return h.b.pri?c.a.createElement(g,e):c.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})}var C=function(){return c.a.createElement(f.a,null,c.a.createElement(v,null),c.a.createElement(h.d,null,b.map((function(e){var t=e.pri,n=Object(d.a)(e,["pri"]);return t?c.a.createElement(k,n):c.a.createElement(h.b,n)}))))};n(33);o.a.render(c.a.createElement(C,null),document.getElementById("root"));fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.ac53ab05.chunk.js.map