webpackJsonp([1],{"+WHZ":function(e,t){},"+Ypz":function(e,t){},"5Xbg":function(e,t){},"64TK":function(e,t){},GcMe:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("//Fk"),n=r.n(a),s=r("7+uW"),l=r("zL8q"),i=r.n(l),o=(r("tvR6"),r("/ocq")),c=r("Xxa5"),u=r.n(c),m=r("exGp"),p=r.n(m),d={data:function(){return{model:{}}},methods:{login:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("login",e.model);case 2:r=t.sent,localStorage.token=r.data.token,e.$router.push("/"),e.$message({type:"success",message:"登录成功"});case 6:case"end":return t.stop()}},t,e)}))()}}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("el-card",{staticClass:"login-card",attrs:{header:"请先登录"}},[r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("登录")])],1)],1)],1)],1)},staticRenderFns:[]};var v=r("VU/8")(d,f,!1,function(e){r("+WHZ")},"data-v-4f7d6013",null).exports,h={data:function(){return{tableData:Array(20).fill({date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"})}}},_={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticStyle:{height:"100vh"}},[r("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[r("el-menu",{attrs:{router:"","default-openeds":["1"],"unique-opened":"","default-active":e.$router.path}},[r("el-submenu",{attrs:{index:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("内容管理\r\n        ")]),e._v(" "),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("分类")]),e._v(" "),r("el-menu-item",{attrs:{index:"/categories/create"}},[e._v("新建分类")]),e._v(" "),r("el-menu-item",{attrs:{index:"/categories/list"}},[e._v("分类列表")])],2),e._v(" "),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("物品")]),e._v(" "),r("el-menu-item",{attrs:{index:"/items/create"}},[e._v("新建物品")]),e._v(" "),r("el-menu-item",{attrs:{index:"/items/list"}},[e._v("物品列表")])],2),e._v(" "),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("英雄")]),e._v(" "),r("el-menu-item",{attrs:{index:"/heroes/create"}},[e._v("新建英雄")]),e._v(" "),r("el-menu-item",{attrs:{index:"/heroes/list"}},[e._v("英雄列表")])],2),e._v(" "),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("文章")]),e._v(" "),r("el-menu-item",{attrs:{index:"/articles/create"}},[e._v("新建文章")]),e._v(" "),r("el-menu-item",{attrs:{index:"/articles/list"}},[e._v("文章列表")])],2),e._v(" "),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("广告位")]),e._v(" "),r("el-menu-item",{attrs:{index:"/ads/create"}},[e._v("新建广告位")]),e._v(" "),r("el-menu-item",{attrs:{index:"/ads/list"}},[e._v("广告位列表")])],2)],2),e._v(" "),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("运营管理\r\n        ")]),e._v(" "),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("广告位")]),e._v(" "),r("el-menu-item",{attrs:{index:"/ads/create"}},[e._v("新建广告位")]),e._v(" "),r("el-menu-item",{attrs:{index:"/ads/list"}},[e._v("广告位列表")])],2)],2),e._v(" "),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("系统设置\r\n        ")]),e._v(" "),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("分类")]),e._v(" "),r("el-menu-item",{attrs:{index:"/categories/create"}},[e._v("新建分类")]),e._v(" "),r("el-menu-item",{attrs:{index:"/categories/list"}},[e._v("分类列表")])],2),e._v(" "),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("管理员")]),e._v(" "),r("el-menu-item",{attrs:{index:"/admin_users/create"}},[e._v("新建管理员")]),e._v(" "),r("el-menu-item",{attrs:{index:"/admin_users/list"}},[e._v("管理员列表")])],2)],2)],1)],1),e._v(" "),r("el-container",[r("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[r("el-dropdown",[r("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),e._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[e._v("查看")]),e._v(" "),r("el-dropdown-item",[e._v("新增")]),e._v(" "),r("el-dropdown-item",[e._v("删除")])],1)],1),e._v(" "),r("span",[e._v("王小虎")])],1),e._v(" "),r("el-main",[r("router-view",{key:e.$route.path})],1)],1)],1)},staticRenderFns:[]};var b=r("VU/8")(h,_,!1,function(e){r("5Xbg")},null,null).exports,x={props:{id:{}},data:function(){return{model:{},parents:[]}},methods:{save:function(){var e=this;return p()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0,!e.id){t.next=7;break}return t.next=4,e.$http.put("rest/categories/"+e.id,e.model);case 4:t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("rest/categories",e.model);case 9:t.sent;case 10:e.$router.push("/categories/list"),e.$message({type:"success",message:"保存成功"});case 12:case"end":return t.stop()}},t,e)}))()},fetch:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories/"+e.id);case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}},t,e)}))()},fetchParents:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.parents=r.data;case 4:case"end":return t.stop()}},t,e)}))()}},created:function(){this.fetchParents(),this.id&&this.fetch()}},g={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"分类")]),e._v(" "),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save()}}},[r("el-form-item",{attrs:{label:"上级分类"}},[r("el-select",{model:{value:e.model.parent,callback:function(t){e.$set(e.model,"parent",t)},expression:"model.parent"}},e._l(e.parents,function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]},w=r("VU/8")(x,g,!1,null,null,null).exports,k={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}},t,e)}))()},remove:function(e){var t=this;return p()(u.a.mark(function r(){return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t.$confirm('此操作将永久删除"'+e.name+'"',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(p()(u.a.mark(function r(){return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/categories/"+e._id);case 2:r.sent,t.$message({type:"success",message:"删除成功!"}),t.fetch();case 5:case"end":return r.stop()}},r,t)})));case 1:case"end":return r.stop()}},r,t)}))()}}},$={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("分类列表")]),e._v(" "),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),e._v(" "),r("el-table-column",{attrs:{prop:"parent.name",label:"上级分类"}}),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),e._v(" "),r("el-table-column",{attrs:{fixed:"right",label:"操作",wdith:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/categories/edit/"+t.row._id)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},staticRenderFns:[]},y=r("VU/8")(k,$,!1,null,null,null).exports,C={props:{id:{}},data:function(){return{model:{}}},methods:{afterUpload:function(e){this.$set(this.model,"icon",e.url),this.model.icon=e.url},save:function(){var e=this;return p()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0,!e.id){t.next=7;break}return t.next=4,e.$http.put("rest/items/"+e.id,e.model);case 4:t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("rest/items",e.model);case 9:t.sent;case 10:e.$router.push("/items/list"),e.$message({type:"success",message:"保存成功"});case 12:case"end":return t.stop()}},t,e)}))()},fetch:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items/"+e.id);case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}},t,e)}))()}},created:function(){this.id&&this.fetch()}},S={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"物品")]),e._v(" "),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save()}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":e.afterUpload}},[e.model.icon?r("img",{staticClass:"avatar",attrs:{src:e.model.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]},U=r("VU/8")(C,S,!1,null,null,null).exports,T={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}},t,e)}))()},remove:function(e){var t=this;return p()(u.a.mark(function r(){return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t.$confirm('此操作将永久删除"'+e.name+'"',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(p()(u.a.mark(function r(){return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/items/"+e._id);case 2:r.sent,t.$message({type:"success",message:"删除成功!"}),t.fetch();case 5:case"end":return r.stop()}},r,t)})));case 1:case"end":return r.stop()}},r,t)}))()}}},z={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("物品列表")]),e._v(" "),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:"物品名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"icon",label:"图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.icon}})]}}])}),e._v(" "),r("el-table-column",{attrs:{fixed:"right",label:"操作",wdith:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/items/edit/"+t.row._id)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},staticRenderFns:[]},R=r("VU/8")(T,z,!1,null,null,null).exports,E=r("woOf"),F=r.n(E),V={props:{id:{}},data:function(){return{categories:[],items:[],model:{name:"",avatar:"",scores:{difficult:0},skills:[],partners:[]}}},methods:{save:function(){var e=this;return p()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0,!e.id){t.next=7;break}return t.next=4,e.$http.put("rest/heroes/"+e.id,e.model);case 4:t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("rest/heroes",e.model);case 9:t.sent;case 10:e.$router.push("/heroes/list"),e.$message({type:"success",message:"保存成功"});case 12:case"end":return t.stop()}},t,e)}))()},fetch:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes/"+e.id);case 2:r=t.sent,e.model=F()({},e.model,r.data);case 4:case"end":return t.stop()}},t,e)}))()},fetchCategories:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}},t,e)}))()},fetchItems:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}},t,e)}))()},fetchHeroes:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes");case 2:r=t.sent,e.heroes=r.data;case 4:case"end":return t.stop()}},t,e)}))()}},created:function(){this.fetchItems(),this.fetchHeroes(),this.fetchCategories(),this.id&&this.fetch()}},D={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"英雄")]),e._v(" "),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-tabs",{attrs:{value:"basic",type:"border-card"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"basic"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"avatar",t.url)}}},[e.model.avatar?r("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),r("el-form-item",{attrs:{label:"背景图"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"banner",t.url)}}},[e.model.banner?r("img",{staticClass:"avatar",attrs:{src:e.model.banner}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),r("el-form-item",{attrs:{label:"称号"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类型"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"难度"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"技能"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"攻击"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"生存"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"顺风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.items,function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"逆风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.items,function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"使用技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"对抗技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"团战思路"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1)],1),e._v(" "),r("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.skills.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加技能")]),e._v(" "),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.skills,function(t,a){return r("el-col",{key:a,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"item.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(r){return e.$set(t,"icon",r.url)}}},[t.icon?r("img",{staticClass:"avatar",attrs:{src:t.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),r("el-form-item",{attrs:{label:"冷却值"}},[r("el-input",{model:{value:t.delay,callback:function(r){e.$set(t,"delay",r)},expression:"item.delay"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"消耗"}},[r("el-input",{model:{value:t.cost,callback:function(r){e.$set(t,"cost",r)},expression:"item.cost"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"小提示"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(r){e.$set(t,"tips",r)},expression:"item.tips"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.skills.splice(a,1)}}},[e._v("删除")])],1)],1)}),1)],1),e._v(" "),r("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.partners.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加英雄")]),e._v(" "),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.partners,function(t,a){return r("el-col",{key:a,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-select",{attrs:{filterable:""},model:{value:t.hero,callback:function(r){e.$set(t,"hero",r)},expression:"item.hero"}},e._l(e.heroes,function(e){return r("el-option",{key:e._id,attrs:{value:e._id,label:e.name}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.partners.splice(a,1)}}},[e._v("删除")])],1)],1)}),1)],1)],1),e._v(" "),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]};var B=r("VU/8")(V,D,!1,function(e){r("64TK")},null,null).exports,A={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}},t,e)}))()},remove:function(e){var t=this;return p()(u.a.mark(function r(){return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t.$confirm('此操作将永久删除"'+e.name+'"',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(p()(u.a.mark(function r(){return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/heroes/"+e._id);case 2:r.sent,t.$message({type:"success",message:"删除成功!"}),t.fetch();case 5:case"end":return r.stop()}},r,t)})));case 1:case"end":return r.stop()}},r,t)}))()}}},H={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("英雄列表")]),e._v(" "),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:"英雄名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"title",label:"称号"}}),e._v(" "),r("el-table-column",{attrs:{prop:"avatar",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.avatar}})]}}])}),e._v(" "),r("el-table-column",{attrs:{fixed:"right",label:"操作",wdith:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/heroes/edit/"+t.row._id)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},staticRenderFns:[]},I=r("VU/8")(A,H,!1,null,null,null).exports,O={props:{id:{}},components:{VueEditor:r("+qPk").a},data:function(){return{model:{},parents:[],categories:[]}},methods:{handleImageAdded:function(e,t,r,a){var n=this;return p()(u.a.mark(function s(){var l,i;return u.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return(l=new FormData).append("file",e),s.next=4,n.$http.post("upload",l);case 4:i=s.sent,t.insertEmbed(r,"image",i.data.url),a();case 7:case"end":return s.stop()}},s,n)}))()},save:function(){var e=this;return p()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0,!e.id){t.next=7;break}return t.next=4,e.$http.put("rest/articles/"+e.id,e.model);case 4:t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("rest/articles",e.model);case 9:t.sent;case 10:e.$router.push("/articles/list"),e.$message({type:"success",message:"保存成功"});case 12:case"end":return t.stop()}},t,e)}))()},fetch:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/articles/"+e.id);case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}},t,e)}))()},fetchCategories:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}},t,e)}))()}},created:function(){this.fetchCategories(),this.id&&this.fetch()}},P={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"文章")]),e._v(" "),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save()}}},[r("el-form-item",{attrs:{label:"所属分类"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"详情"}},[r("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.model.body,callback:function(t){e.$set(e.model,"body",t)},expression:"model.body"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]},q=r("VU/8")(O,P,!1,null,null,null).exports,L={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/articles");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}},t,e)}))()},remove:function(e){var t=this;return p()(u.a.mark(function r(){return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t.$confirm('此操作将永久删除文章"'+e.title+'"',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(p()(u.a.mark(function r(){return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/articles/"+e._id);case 2:r.sent,t.$message({type:"success",message:"删除成功!"}),t.fetch();case 5:case"end":return r.stop()}},r,t)})));case 1:case"end":return r.stop()}},r,t)}))()}}},M={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("文章列表")]),e._v(" "),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),e._v(" "),r("el-table-column",{attrs:{prop:"title",label:"文章标题"}}),e._v(" "),r("el-table-column",{attrs:{fixed:"right",label:"操作",wdith:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/articles/edit/"+t.row._id)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},staticRenderFns:[]},W=r("VU/8")(L,M,!1,null,null,null).exports,j={props:{id:{}},data:function(){return{model:{items:[]}}},methods:{save:function(){var e=this;return p()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0,!e.id){t.next=7;break}return t.next=4,e.$http.put("rest/ads/"+e.id,e.model);case 4:t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("rest/ads",e.model);case 9:t.sent;case 10:e.$router.push("/ads/list"),e.$message({type:"success",message:"保存成功"});case 12:case"end":return t.stop()}},t,e)}))()},fetch:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/ads/"+e.id);case 2:r=t.sent,e.model=F()({},e.model,r.data);case 4:case"end":return t.stop()}},t,e)}))()}},created:function(){this.id&&this.fetch()}},G={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"广告位")]),e._v(" "),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save()}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"广告"}},[r("el-button",{on:{click:function(t){return e.model.items.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加广告")]),e._v(" "),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.items,function(t,a){return r("el-col",{key:a,attrs:{md:24}},[r("el-form-item",{attrs:{label:"跳转链接(URL)"}},[r("el-input",{model:{value:t.url,callback:function(r){e.$set(t,"url",r)},expression:"item.url"}})],1),e._v(" "),r("el-form-item",{staticStyle:{"margin-top":"0.5rem"},attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":function(r){return e.$set(t,"image",r.url)}}},[t.image?r("img",{staticClass:"avatar",attrs:{src:t.image}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.items.splice(a,1)}}},[e._v("删除")])],1)],1)}),1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]},X=r("VU/8")(j,G,!1,null,null,null).exports,K={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/ads");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}},t,e)}))()},remove:function(e){var t=this;return p()(u.a.mark(function r(){return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t.$confirm('此操作将永久删除"'+e.name+'"',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(p()(u.a.mark(function r(){return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/ads/"+e._id);case 2:r.sent,t.$message({type:"success",message:"删除成功!"}),t.fetch();case 5:case"end":return r.stop()}},r,t)})));case 1:case"end":return r.stop()}},r,t)}))()}}},N={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("广告位列表")]),e._v(" "),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),e._v(" "),r("el-table-column",{attrs:{fixed:"right",label:"操作",wdith:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/ads/edit/"+t.row._id)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},staticRenderFns:[]},Y=r("VU/8")(K,N,!1,null,null,null).exports,Z={props:{id:{}},data:function(){return{model:{}}},methods:{save:function(){var e=this;return p()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0,!e.id){t.next=7;break}return t.next=4,e.$http.put("rest/admin_users/"+e.id,e.model);case 4:t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("rest/admin_users",e.model);case 9:t.sent;case 10:e.$router.push("/admin_users/list"),e.$message({type:"success",message:"保存成功"});case 12:case"end":return t.stop()}},t,e)}))()},fetch:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_users/"+e.id);case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}},t,e)}))()}},created:function(){this.id&&this.fetch()}},J={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"管理员")]),e._v(" "),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save()}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"text"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]},Q=r("VU/8")(Z,J,!1,null,null,null).exports,ee={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e=this;return p()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_users");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}},t,e)}))()},remove:function(e){var t=this;return p()(u.a.mark(function r(){return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t.$confirm('此操作将永久删除"'+e.username+'"',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(p()(u.a.mark(function r(){return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/admin_users/"+e._id);case 2:r.sent,t.$message({type:"success",message:"删除成功!"}),t.fetch();case 5:case"end":return r.stop()}},r,t)})));case 1:case"end":return r.stop()}},r,t)}))()}}},te={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("分类列表")]),e._v(" "),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),e._v(" "),r("el-table-column",{attrs:{prop:"username",label:"用户名"}}),e._v(" "),r("el-table-column",{attrs:{fixed:"right",label:"操作",wdith:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/admin_users/edit/"+t.row._id)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},staticRenderFns:[]},re=r("VU/8")(ee,te,!1,null,null,null).exports;s.default.use(o.a);var ae=new o.a({routes:[{path:"/login",name:"login",component:v,meta:{isPublic:!0}},{path:"/",name:"Main",component:b,children:[{path:"/categories/create",component:w},{path:"/categories/edit/:id",component:w,props:!0},{path:"/categories/list",component:y},{path:"/items/create",component:U},{path:"/items/edit/:id",component:U,props:!0},{path:"/items/list",component:R},{path:"/heroes/create",component:B},{path:"/heroes/edit/:id",component:B,props:!0},{path:"/heroes/list",component:I},{path:"/articles/create",component:q},{path:"/articles/edit/:id",component:q,props:!0},{path:"/articles/list",component:W},{path:"/ads/create",component:X},{path:"/ads/edit/:id",component:X,props:!0},{path:"/ads/list",component:Y},{path:"/admin_users/create",component:Q},{path:"/admin_users/edit/:id",component:Q,props:!0},{path:"/admin_users/list",component:re}]}]});ae.beforeEach(function(e,t,r){if(e.matched.isPublic&&!localStorage.token)return r("/login");r()});var ne=ae,se=r("mtWM"),le=r.n(se),ie={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var oe=r("VU/8")({name:"App"},ie,!1,function(e){r("+Ypz")},null,null).exports,ce=(r("GcMe"),le.a.create({baseURL:"http://localhost:3000/admin/api"}));ce.interceptors.request.use(function(e){return localStorage.token&&(e.headers.Authorization="Bearer "+(localStorage.token||" ")),e},function(e){return n.a.reject(e)}),ce.interceptors.response.use(function(e){return e},function(e){return e.response.data.message&&(s.default.prototype.$message({type:"error",message:e.response.data.message}),401===e.response.status&&ne.push("/login")),n.a.reject(e)}),s.default.prototype.$http=ce,s.default.config.productionTip=!1,s.default.mixin({computed:{uploadUrl:function(){return this.$http.defaults.baseURL+"/upload"}},methods:{getAuthHeaders:function(){return{Authorization:"Bearer "+(localStorage.token||"")}}}}),s.default.use(i.a),new s.default({el:"#app",router:ne,components:{App:oe},template:"<App/>"})},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.bffefdfa44f1acc0272c.js.map