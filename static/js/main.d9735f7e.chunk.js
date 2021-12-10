(this["webpackJsonpreact-ts-router-redux-template"]=this["webpackJsonpreact-ts-router-redux-template"]||[]).push([[0],{164:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(30),c=n.n(a),s=n(23),o=n(13),i=n(4),u=n(3);var p=function(){return Object(u.jsx)("div",{children:"Confidential"})},d=function(e){var t=e.page,n=Object(i.h)();return{handleClick:function(){n(t||-1)}}},b=n(61),h=n(17),f=n(18),j=function(){function e(t){if(Object(h.a)(this,e),this.REQUEST=void 0,this.FAILURE=void 0,this.SUCCESS=void 0,!t)throw new Error("Type parameter is mandatory");this.REQUEST="".concat(t,"_REQUEST"),this.SUCCESS="".concat(t,"_SUCCESS"),this.FAILURE="".concat(t,"_FAILURE")}return Object(f.a)(e,[{key:"request",value:function(e){return e?{type:this.REQUEST,payload:e}:{type:this.REQUEST}}},{key:"success",value:function(e){return e?{type:this.SUCCESS,payload:e}:{type:this.SUCCESS}}},{key:"failure",value:function(e){return e?{type:this.FAILURE,payload:e}:{type:this.FAILURE}}}]),e}(),l="PostsPage",O=new j("".concat(l,"/POSTS_FETCH")),v=new j("".concat(l,"/POST_FETCH")),E=new j("".concat(l,"/POST_CREATE")),x=new j("".concat(l,"/POST_UPDATE")),S=new j("".concat(l,"/POST_REMOVE")),P=function(e){return e.PostsPage},k=Object(b.a)((function(e,t){var n=t.type,r=t.payload;switch(n){case O.REQUEST:e.isFetchPostsLoading=!0,e.fetchPostsError="";break;case O.SUCCESS:e.postsData=r,e.isFetchPostsLoading=!1;break;case O.FAILURE:e.isFetchPostsLoading=!1,e.fetchPostsError=r;break;case v.REQUEST:e.isFetchPostLoading=!0,e.fetchPostError="";break;case v.SUCCESS:e.postData=r,e.isFetchPostLoading=!1;break;case v.FAILURE:e.isFetchPostLoading=!1,e.fetchPostError=r;break;case E.REQUEST:e.isCreatePostLoading=!0,e.createPostError="";break;case E.SUCCESS:e.isCreatePostLoading=!1;break;case E.FAILURE:e.isCreatePostLoading=!1,e.createPostError=r;break;case x.REQUEST:e.isUpdatePostLoading=!0,e.updatePostError="";break;case x.SUCCESS:e.postData=r,e.isUpdatePostLoading=!1;break;case x.FAILURE:e.isUpdatePostLoading=!1,e.updatePostError=r;break;case S.REQUEST:e.isRemovePostLoading=!0,e.removePostError="";break;case S.SUCCESS:e.isRemovePostLoading=!1;break;case S.FAILURE:e.isRemovePostLoading=!1,e.removePostError=r}}),{postsData:[],postData:{},isFetchPostsLoading:!1,isFetchPostLoading:!1,isCreatePostLoading:!1,isUpdatePostLoading:!1,isRemovePostLoading:!1,fetchPostsError:"",fetchPostError:"",createPostError:"",updatePostError:"",removePostError:""}),m=function(){var e=Object(s.b)(),t=Object(s.c)(P),n=t.postsData,a=t.isFetchPostsLoading;return Object(r.useEffect)((function(){e(O.request()),e(v.request({values:{postId:1}}))}),[e]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{children:"Posts"}),a?"Loading":n.map((function(e){return Object(u.jsx)("h6",{children:e.title},e.id)}))]})},g=Object(r.memo)(m);var w=function(){var e=d({}).handleClick;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"About"}),Object(u.jsx)("button",{onClick:e,children:"Go Back"}),Object(u.jsx)(g,{})]})};var T=function(){var e=d({page:"/about"}).handleClick;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:e,children:"Go to About page"})}),Object(u.jsx)("div",{children:Object(u.jsx)(o.b,{to:"/confidential",children:"Confidential link"})})]})};var C=function(){return function(){var e={loggedIn:!1};return e&&(null===e||void 0===e?void 0:e.loggedIn)}()?Object(u.jsx)(i.b,{}):Object(u.jsx)(i.a,{to:"/"})};var U=function(){return Object(u.jsxs)(i.e,{children:[Object(u.jsx)(i.c,{path:"/",element:Object(u.jsx)(T,{})}),Object(u.jsx)(i.c,{path:"/about",element:Object(u.jsx)(w,{})}),Object(u.jsx)(i.c,{element:Object(u.jsx)(C,{}),children:Object(u.jsx)(i.c,{path:"/confidential",element:Object(u.jsx)(p,{})})}),Object(u.jsx)(i.c,{path:"*",element:Object(u.jsx)(i.a,{to:"/"})})]})};n(76);var y=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)(U,{})})},R=n(32),L=n(14),A=n(65),_=n(7),F=n.n(_),I=n(6),Q=Object({NODE_ENV:"production",PUBLIC_URL:"/react-ts-router-redux-template",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_iexToken:"Tpk_8d57b30e4f694d7d892a7718b4832d54",REACT_APP_newsAPI:"7ad02e185c454a0ebc3ee6f11b41f27e",REACT_APP_DB:"http://127.0.0.1:8000"}).REACT_APP_AUTH_URL||"https://jsonplaceholder.typicode.com",q={posts:"".concat(Q,"/posts")},D=n(62),H=n(15),B=n(66),W=n(63),M=["headers"],G=function(e,t){var n={};if(e){var r=e.headers,a=Object(B.a)(e,M);for(var c in n=a,r)t.append(c,r[c])}return n},J=function(e,t){return function(e){return e&&e.indexOf("json")>=0}(t)?e.json():e.text()},K=function(e,t){if(e&&e instanceof FormData)t.delete("Content-Type");else if(!Object(W.isString)(e))return JSON.stringify(e);return e},N=new(function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,[{key:"get",value:function(){var e=Object(H.a)(F.a.mark((function e(t,n,r){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("GET",t,n,r));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(H.a)(F.a.mark((function e(t,n,r){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("POST",t,n,r));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=Object(H.a)(F.a.mark((function e(t,n,r){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("PUT",t,n,r));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(H.a)(F.a.mark((function e(t,n,r){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("DELETE",t,n,r));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"patch",value:function(){var e=Object(H.a)(F.a.mark((function e(t,n,r){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("PATCH",t,n,r));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"request",value:function(){var e=Object(H.a)(F.a.mark((function e(t,n,r,a){var c,s,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new Headers({"Content-Type":"application/json",Authorization:"Bearer ".concat("123")}),s=K(r,c),o=G(a,c),e.abrupt("return",fetch(n.toString(),Object(D.a)({body:s,method:t,headers:c},o)).then((function(e){return new Promise((function(t,n){var r=e.headers.get("content-type");J(e,r).then((function(r){e.status<400?t(r):n(r)}))}))})));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}()}]),e}()),V=n(64),z=n.n(V),$=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;Object(h.a)(this,e),this.url=void 0,this.params=void 0,this.url=t,this.params=n}return Object(f.a)(e,[{key:"addParams",value:function(e){Object.assign(this.params,e)}},{key:"toString",value:function(){var e=this.params?"?":"";return e+=z()(this.params,(function(e,t,n){e.push("".concat(n,"=").concat(t))}),[]).join("&"),this.url+e}}]),e}(),X=function(){return N.get(new $("".concat(q.posts)))},Y=function(e){return N.get(new $("".concat(q.posts,"/").concat(e)))},Z=function(e){return N.post(new $("".concat(q.posts)),e)},ee=function(e,t){return N.put(new $("".concat(q.posts,"/").concat(e)),t)},te=function(e){return N.get(new $("".concat(q.posts,"/").concat(e)))},ne=F.a.mark(ie),re=F.a.mark(ue),ae=F.a.mark(pe),ce=F.a.mark(de),se=F.a.mark(be),oe=F.a.mark(he);function ie(){var e;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(I.b)(X);case 3:return e=t.sent,t.next=6,Object(I.c)(O.success(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(I.c)(O.failure(t.t0));case 12:case"end":return t.stop()}}),ne,null,[[0,8]])}function ue(e){var t,n,r,a;return F.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.values,r=n.postId,c.prev=3,c.next=6,Object(I.b)(Y,r);case 6:return a=c.sent,c.next=9,Object(I.c)(v.success(a));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(3),c.next=15,Object(I.c)(v.failure(c.t0));case 15:case"end":return c.stop()}}),re,null,[[3,11]])}function pe(e){var t,n,r;return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,n=t.values,r=t.setErrorMessage,a.prev=2,a.next=5,Object(I.b)(Z,n);case 5:return a.next=7,Object(I.c)(E.success());case 7:return a.next=9,Object(I.c)(O.request());case 9:a.next=17;break;case 11:return a.prev=11,a.t0=a.catch(2),a.next=15,Object(I.c)(E.failure(a.t0));case 15:return a.next=17,Object(I.b)(r,"postname","postname needs to be unique");case 17:case"end":return a.stop()}}),ae,null,[[2,11]])}function de(e){var t,n,r,a,c;return F.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.values,r=t.setErrorMessage,a=n.postId,s.prev=3,s.next=6,Object(I.b)(ee,a,n);case 6:return c=s.sent,s.next=9,Object(I.c)(x.success(c));case 9:return s.next=11,Object(I.c)(O.request());case 11:s.next=19;break;case 13:return s.prev=13,s.t0=s.catch(3),s.next=17,Object(I.c)(x.failure(s.t0));case 17:return s.next=19,Object(I.b)(r,"postname","postname needs to be unique");case 19:case"end":return s.stop()}}),ce,null,[[3,13]])}function be(e){var t,n,r,a;return F.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.values,r=t.callback,a=n.postId,c.prev=3,c.next=6,Object(I.b)(te,a);case 6:return c.next=8,Object(I.c)(S.success());case 8:return c.next=10,Object(I.c)(O.request());case 10:r(),c.next=17;break;case 13:return c.prev=13,c.t0=c.catch(3),c.next=17,Object(I.c)(S.failure(c.t0));case 17:case"end":return c.stop()}}),se,null,[[3,13]])}function he(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)([Object(I.d)(O.REQUEST,ie),Object(I.d)(v.REQUEST,ue),Object(I.d)(E.REQUEST,pe),Object(I.d)(x.REQUEST,de),Object(I.d)(S.REQUEST,be)]);case 2:case"end":return e.stop()}}),oe)}var fe=Object(L.b)(Object(R.a)({},l,k)),je=[he],le=L.c,Oe=Object(A.a)(),ve=Object(L.d)(fe,le(Object(L.a)(Oe)));je.forEach((function(e){return Oe.run(e)}));var Ee=ve;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(164);c.a.render(Object(u.jsx)(r.StrictMode,{children:Object(u.jsx)(s.a,{store:Ee,children:Object(u.jsx)(y,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,n){}},[[165,1,2]]]);
//# sourceMappingURL=main.d9735f7e.chunk.js.map