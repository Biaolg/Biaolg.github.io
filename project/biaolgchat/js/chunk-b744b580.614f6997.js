(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b744b580"],{"63a3":function(t,e,s){"use strict";var a=s("d8fa"),o=s.n(a);o.a},"989a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Ling"},[s("div",{staticClass:"box",class:{register:!t.register}},[t._m(0),s("form",[s("div",{staticClass:"form-group toinp"},[s("label",{attrs:{for:"exampleInputEmail2"}},[t._v("账号")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail2"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}})]),s("div",{staticClass:"form-group toinp"},[s("label",{attrs:{for:"exampleInputPassword2"}},[t._v("密码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword2"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"form-group toinp"},[s("label",{attrs:{for:"exampleInputNickName"}},[t._v("昵称")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.nickName,expression:"nickName"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputNickName"},domProps:{value:t.nickName},on:{input:function(e){e.target.composing||(t.nickName=e.target.value)}}})]),s("div",{staticClass:"btn-box"},[s("button",{staticClass:"btn btn-primary",attrs:{"data-toggle":"modal","data-target":"#exampleModal"},on:{click:t.toRegister}},[t._v("注册")]),s("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$store.commit("setLingSheen",!1)}}},[t._v("返回")])])])]),s("div",{staticClass:"box sing",class:{ligNone:t.register,lindSheen:t.lindSheen}},[t._m(1),s("form",[s("div",{staticClass:"form-group toinp"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("账号")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}})]),s("div",{staticClass:"form-group toinp"},[s("label",{attrs:{for:"exampleInputPassword1"}},[t._v("密码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"btn-box"},[s("button",{staticClass:"btn btn-primary",on:{click:t.toLoing}},[t._v("登录")]),s("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$store.commit("setLingSheen",!0)}}},[t._v("注册")])])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Logo"},[s("h1",[t._v("注册账号")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Logo"},[s("h1",[t._v("BiaolgChat")])])}],n={name:"Ling",data:function(){return{user:"",password:"",nickName:"",lindSheen:!1}},computed:{register:function(){return this.$store.state.ling.sheen}},methods:{toLoing:function(){var t=this;this.$store.commit("setLonging",{sheen:!0,title:"登录中"}),this.$store.state.user.userId=this.user.toLowerCase();var e={apiUrl:WebIM.config.apiURL,user:this.user,pwd:this.password,appKey:WebIM.config.appkey,success:function(e){var s=e.access_token;t.$store.state.token=s,t.$router.push({path:"Home"}),t.$store.commit("setLoadingSheen",!1)},error:function(e){t.$store.commit("setLoadingSheen",!1),t.ejectSet("未知错误!")}};WebIM.conn.open(e)},toRegister:function(){var t=this;this.$store.commit("setLonging",{sheen:!0,title:"注册中"});var e={apiUrl:WebIM.config.apiURL,username:this.user,password:this.password,nickname:this.nickName,appKey:WebIM.config.appkey,success:function(){t.ejectSet("注册成功"),t.$store.commit("setLingSheen",!1),t.$store.commit("setLoadingSheen",!1)},error:function(e){t.$store.commit("setLoadingSheen",!1),"duplicate_unique_property_exists"==JSON.parse(e.data).error?t.ejectSet("用户已存在！"):"illegal_argument"==JSON.parse(e.data).error?t.ejectSet("用户名不合法!"):"unauthorized"==JSON.parse(e.data).error?t.ejectSet("注册失败，无权限！"):"resource_limited"==JSON.parse(e.data).error&&t.ejectSet("您的App用户注册数量已达上限,请升级至企业版！")}};WebIM.conn.registerUser(e)},ejectSet:function(t){this.$store.commit("setEject",{sheen:!0,title:"注册",content:t,btntitle:{yes:"确认",no:""}})}},mounted:function(){var t=this;this.$store.commit("setLonging",{sheen:!0,title:"加载中"}),setTimeout((function(){t.lindSheen=!0,t.$store.commit("setLoadingSheen",!1)}),3e3)}},r=n,i=(s("63a3"),s("2877")),c=Object(i["a"])(r,a,o,!1,null,"46132812",null);e["default"]=c.exports},d8fa:function(t,e,s){}}]);
//# sourceMappingURL=chunk-b744b580.614f6997.js.map