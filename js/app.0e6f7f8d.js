(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],m=0,f=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/admin-router-package/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0cb0":function(t,e,n){"use strict";n("e0e2")},"16b4":function(t,e,n){},4526:function(t,e,n){"use strict";n("72db")},"4ff9":function(t,e,n){"use strict";n("a13a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o={name:"App",components:{}},i=o,l=n("2877"),c=Object(l["a"])(i,a,s,!1,null,null,null),u=c.exports,m=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[t._m(0),n("div",{staticClass:"form-login p-4"},[n("div",{staticClass:"form-group form-inline"},[n("label",{attrs:{for:"username"}},[t._v("登录名称")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}}],staticClass:"form-control ml-2",attrs:{type:"text",id:"username",placeholder:"请输入登录名称",autocomplete:"off"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"form-group form-inline"},[n("label",{attrs:{for:"password"}},[t._v("登录密码")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.passward,expression:"passward",modifiers:{trim:!0}}],staticClass:"form-control ml-2",attrs:{type:"text",id:"password",placeholder:"请输入登录密码"},domProps:{value:t.passward},on:{input:function(e){e.target.composing||(t.passward=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"form-group form-inline d-flex justify-content-end"},[n("button",{staticClass:"btn btn-secondary mr-2",attrs:{type:"button"},on:{click:t.reset}},[t._v("重置")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.login}},[t._v("登录")])])])])},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-box"},[r("div",{staticClass:"text-center avatar-box"},[r("img",{staticClass:"img-thumbnail avatar",attrs:{src:n("cf05"),alt:""}})])])}],d={name:"MyLogin",data:function(){return{username:"",passward:""}},methods:{reset:function(){this.username="",this.passward=""},login:function(){"admin"===this.username&&"666666"===this.passward?(localStorage.setItem("token","Bearer xxx"),this.$router.push("/home")):localStorage.removeItem("token")}}},h=d,v=(n("aac3"),Object(l["a"])(h,f,p,!1,null,"4c6db0f4",null)),b=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-container"},[n("MyHead"),n("div",{staticClass:"home-main-box"},[n("MyAside"),n("div",{staticClass:"home-main-body"},[n("router-view")],1)],1)],1)},_=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-header-container d-flex justify-content-between align-items-center p-3"},[t._m(0),n("div",{staticClass:"layout-header-right"},[n("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.logout}},[t._v("退出登录")])])])},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layout-header-left d-flex align-items-center user-select-none"},[r("img",{staticClass:"layout-header-left-img",attrs:{src:n("5bfa"),alt:""}}),r("h4",{staticClass:"layout-header-left-title ml-3"},[t._v("黑马后台管理系统")])])}],C={name:"MyHeader",methods:{logout:function(){localStorage.removeItem("token"),this.$router.push("/login")}}},w=C,O=(n("4526"),Object(l["a"])(w,y,x,!1,null,"72477bd2",null)),j=O.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-aside-container"},[n("ul",{staticClass:"user-select-none menu"},[n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:"/home/users"}},[t._v("用户管理")])],1),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:"/home/rights"}},[t._v("权限管理")])],1),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:"/home/goods"}},[t._v("商品管理")])],1),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:"/home/orders"}},[t._v("订单管理")])],1),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:"/home/settings"}},[t._v("系统设置")])],1)])])},$=[],M={name:"MyAside"},E=M,S=(n("0cb0"),Object(l["a"])(E,k,$,!1,null,"cc18063a",null)),P=S.exports,A={name:"MyHome",components:{MyHead:j,MyAside:P}},D=A,H=(n("4ff9"),Object(l["a"])(D,g,_,!1,null,"33ead554",null)),I=H.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"users-container"},[n("h4",{staticClass:"text-center"},[t._v("用户管理")]),n("table",{staticClass:"table table-bordered table-striped table-hover"},[t._m(0),n("tbody",t._l(t.userlist,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.age))]),n("td",[t._v(t._s(e.position))]),n("td",[n("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.gotoDetail(e.id)}}},[t._v("详情")])])])})),0)])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("#")]),n("th",[t._v("姓名")]),n("th",[t._v("年龄")]),n("th",[t._v("头衔")]),n("th",[t._v("操作")])])])}],J={name:"MyUser",data:function(){return{userlist:[{id:1,name:"嬴政",age:18,position:"始皇帝"},{id:2,name:"李斯",age:35,position:"丞相"},{id:3,name:"吕不韦",age:50,position:"商人"},{id:4,name:"赵姬",age:48,position:"王太后"}]}},methods:{gotoDetail:function(t){this.$router.push("/home/userinfo/"+t)}}},N=J,B=Object(l["a"])(N,U,T,!1,null,"8e5c5ba2",null),G=B.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",{staticClass:"text-center"},[t._v("权限管理")])},R=[],q={name:"MyRights"},z=q,F=Object(l["a"])(z,L,R,!1,null,"3205a619",null),K=F.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",{staticClass:"text-center"},[t._v("商品管理")])},V=[],W={name:"MyGoods"},X=W,Y=Object(l["a"])(X,Q,V,!1,null,"6f72cafb",null),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",{staticClass:"text-center"},[t._v("订单管理")])},et=[],nt={name:"MyOrders"},rt=nt,at=Object(l["a"])(rt,tt,et,!1,null,"f10f6592",null),st=at.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",{staticClass:"text-center"},[t._v("系统设置")])},it=[],lt={name:"MySettings"},ct=lt,ut=Object(l["a"])(ct,ot,it,!1,null,"67097b3f",null),mt=ut.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn btn-light btn-sm",attrs:{type:"button"},on:{click:t.goback}},[t._v("后退")]),n("h4",{staticClass:"text-center"},[t._v("用户详情--"+t._s(t.id))])])},pt=[],dt={name:"MyUserDetail",props:["id"],methods:{goback:function(){this.$router.back()}}},ht=dt,vt=Object(l["a"])(ht,ft,pt,!1,null,"18c49035",null),bt=vt.exports,gt=["/home","/home/users","/home/rights","/home/goods","/home/orders","/home/settings","/home/userinfo"];r["a"].use(m["a"]);var _t=new m["a"]({routes:[{path:"/",redirect:"/login"},{path:"/login",component:b},{path:"/home",component:I,redirect:"/home/users",children:[{path:"users",component:G},{path:"rights",component:K},{path:"goods",component:Z},{path:"orders",component:st},{path:"settings",component:mt},{path:"userinfo/:id",component:bt,props:!0}]}]});_t.beforeEach((function(t,e,n){if(-1!==gt.indexOf(t.path)){var r=localStorage.getItem("token");r?n():n("/login")}else n()}));var yt=_t;n("16b4"),n("a766");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(u)},router:yt}).$mount("#app")},"5bfa":function(t,e,n){t.exports=n.p+"img/heima.9c5f76b9.png"},"72db":function(t,e,n){},"9bc8":function(t,e,n){},a13a:function(t,e,n){},a766:function(t,e,n){},aac3:function(t,e,n){"use strict";n("9bc8")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},e0e2:function(t,e,n){}});
//# sourceMappingURL=app.0e6f7f8d.js.map