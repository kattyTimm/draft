(this.webpackJsonpdraft=this.webpackJsonpdraft||[]).push([[0],{11:function(t,e,n){t.exports={container:"Profile_container__22vHX",profileContainer:"Profile_profileContainer__3pTT-",avaTmp:"Profile_avaTmp__132FB",ava:"Profile_ava__3Yrlc",contactsTmp:"Profile_contactsTmp__31qO3",statusTmp:"Profile_statusTmp__3KE1H",infoTmp:"Profile_infoTmp__dfGNu",postFormTmp:"Profile_postFormTmp__3AIjn",postArea:"Profile_postArea__1CMfY",postItem:"Profile_postItem__3K4Pw"}},13:function(t,e,n){t.exports={itemTmp:"Users_itemTmp__3ko4P",leftSide:"Users_leftSide__2r9NM",rightSide:"Users_rightSide__2jV_n",title:"Users_title__2FUdA",pgnsBlock:"Users_pgnsBlock__1w1tK",page:"Users_page__39adG",activePage:"Users_activePage__3Thba",preloaderDiv:"Users_preloaderDiv__3dRDs"}},130:function(t,e,n){t.exports={formControl:"formControl_formControl__2UQGH",errorLoginField:"formControl_errorLoginField__22vSW"}},163:function(t,e,n){},164:function(t,e,n){},287:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(65),o=n.n(a),i=(n(163),n(21)),s=n(22),l=n(67),u=n(24),d=n(23),j=(n.p,n(164),n(10)),b=n(14),p=n(9),h=n(20),f=n(35),O=n.n(f),m=n(0),x=function(t){return Object(m.jsxs)("nav",{className:"Navbar",children:[Object(m.jsx)(h.b,{to:"/profile",activeClassName:O.a.activeLink,className:O.a.link,children:"\u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(m.jsx)(h.b,{to:"/users",activeClassName:O.a.activeLink,className:O.a.link,children:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})]})},g=n(11),v=n.n(g),A=n(25),w=n.n(A),y=n(41),C=n(40),P=n(3),_=n(129).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"43040dd6-0e63-4499-9314-9afff1dbb86e"}}),S=function(){return _.get("auth/me")},F=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return _.post("auth/login",{email:t,password:e,rememberMe:n,captcha:r})},N=function(){return _.delete("auth/login")},k=function(t){return _.get("profile/".concat(t))},E=function(t){return _.get("profile/status/".concat(t))},U=function(t){return _.put("profile/status",{status:t})},I=function(t){return _.put("profile",t)},T=function(t){var e=new FormData;return e.append("image",t),_.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}})},B=function(t){return _.get("profile/".concat(t))},J=function(t){return _.get("profile/status/".concat(t))},M=function(t){return _.put("profile/status",{status:t})},G=function(t){var e=new FormData;return e.append("image",t),_.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}})},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return _.get("users?page=".concat(t,"&count=").concat(e))},L=function(t){return _.post("follow/".concat(t))},D=function(t){return _.delete("follow/".concat(t))},H=function(t){return _.put("profile",t)},z=n(27),q="SET_USER_PROFILE",W="ADD_NEW_POST",K="GET_USER_STATUS",Y="SET_PHOTO_SUCCESS",Q={profile:null,status:"",post:[{id:Date.now(),text:"\u041f\u0440\u0438\u0432\u0435\u0442"}],newPostText:""},V=function(t){return{type:q,data:t}},Z=function(t){return{type:K,status:t}},X=function(t){return function(e){k(t).then((function(t){e(V(t.data))}))}},$=function(t){return function(){var e=Object(y.a)(w.a.mark((function e(n){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(t);case 3:r=e.sent,n(V(r.data)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(t),console.log("error 112");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},tt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case q:return Object(P.a)(Object(P.a)({},t),{},{profile:e.data});case W:var n=t.post.length+1;return Object(P.a)(Object(P.a)({},t),{},{post:[].concat(Object(C.a)(t.post),[{id:n,text:e.text}])});case K:return Object(P.a)(Object(P.a)({},t),{},{status:e.status});case Y:return Object(P.a)(Object(P.a)({},t),{},{profile:Object(P.a)(Object(P.a)({},t.profile),{},{photos:e.file})});default:return t}},et=(n(92),n(12)),nt=n(125),rt=n(126),ct=n(71),at=n(130),ot=n.n(at),it=function(t){t.input;var e=t.meta,n=Object(ct.a)(t,["input","meta"]),r=e.error&&e.visited;return Object(m.jsxs)("span",{className:r?ot.a.errorLoginField:"",children:[n.children,r&&Object(m.jsx)("span",{children:e.error})]})},st=function(t){var e=t.input,n=t.meta,r=Object(ct.a)(t,["input","meta"]),c={borderRadius:"5px"};return n.error&&n.visited&&(c.border="2px solid red"),Object(m.jsx)(it,Object(P.a)(Object(P.a)({},t),{},{children:Object(m.jsx)("textarea",Object(P.a)(Object(P.a)(Object(P.a)({},e),r),{},{style:c}))}))},lt=function(t){var e=t.input,n=t.meta,r=Object(ct.a)(t,["input","meta"]),c={borderRadius:"5px"};return n.error&&n.visited&&(c.border="2px solid red"),Object(m.jsx)(it,Object(P.a)(Object(P.a)({},t),{},{children:Object(m.jsx)("input",Object(P.a)(Object(P.a)(Object(P.a)({},e),r),{},{style:c}))}))},ut=function(t){return t?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"},dt=function(t){return function(e){return e&&e.length<t?"\u041c\u0438\u043d\u0438\u043c\u0443\u043c ".concat(t," \u0441\u0438\u043c\u0432\u043e\u043b\u0430"):void 0}},jt=function(t){var e=Object(r.useState)(!1),n=Object(et.a)(e,2),c=n[0],a=n[1],o=Object(r.useState)(t.status),i=Object(et.a)(o,2),s=(i[0],i[1],Object(r.useState)(t.status)),l=Object(et.a)(s,2),u=l[0],d=l[1];Object(r.useEffect)((function(){d(t.status)}),[t.status]);return Object(m.jsxs)("div",{className:v.a.statusTmp,children:[Object(m.jsx)("span",{style:{marginRight:"10px"},children:"\u0441\u0442\u0430\u0442\u0443\u0441:"}),c&&Object(m.jsx)("input",{autoFocus:!0,value:u,onChange:function(t){return d(t.target.value)},onBlur:function(){return t.updateStatus_My(u),void a(!1)}}),!c&&Object(m.jsx)("div",{children:Object(m.jsx)("span",{onClick:function(){a(!0)},children:u||"write you status"})})]})},bt=n(39),pt=dt(2),ht=function(t){return Object(m.jsx)("div",{className:v.a.infoTmp,children:Object(m.jsxs)("table",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"\u0438\u043c\u044f: "}),Object(m.jsx)("td",{children:t.profile.fullName})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"\u043e\u0431\u043e \u043c\u043d\u0435: "}),Object(m.jsx)("td",{children:t.profile.aboutMe})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"\u0438\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:"}),Object(m.jsx)("td",{children:t.profile.lookingForAJob?"\u0434\u0430":"\u043d\u0435\u0442"})]}),t.profile.lookingForAJob&&Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "}),Object(m.jsx)("td",{children:t.profile.lookingForAJobDescription})]}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{children:"\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"})}),Object.keys(t.profile.contacts).map((function(e,n){return null!==t.profile.contacts[e]?Object(m.jsx)(Ot,{objectKey:e,constact:t.profile.contacts[e]},n):""})),t.isOwner&&Object(m.jsx)("tr",{children:Object(m.jsx)("td",{children:Object(m.jsx)("button",{onClick:function(){return t.setEditMode(!0)},children:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})})]})})},ft=Object(rt.a)({form:"profileEditComponent"})((function(t){var e;return Object(m.jsx)("form",(e={onSubmit:t.handleSubmit,className:t.error?v.a.errorBorder:""},Object(bt.a)(e,"className",v.a.infoTmp),Object(bt.a)(e,"children",Object(m.jsxs)("table",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("label",{htmlFor:"fullName",children:"\u0438\u043c\u044f:"})}),Object(m.jsx)("td",{children:Object(m.jsx)(nt.a,{name:"fullName",component:lt,type:"text",validate:[ut,pt]})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("label",{htmlFor:"aboutMe",children:"\u043e\u0431\u043e \u043c\u043d\u0435: "})}),Object(m.jsx)("td",{children:Object(m.jsx)(nt.a,{name:"aboutMe",component:lt,type:"text",validate:null})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("label",{htmlFor:"lookingForAJob",children:"\u0438\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: "})}),Object(m.jsx)("td",{children:Object(m.jsx)(nt.a,{name:"lookingForAJob",component:lt,type:"checkbox",validate:null})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("label",{htmlFor:"lookingForAJobDescription",children:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"})}),Object(m.jsx)("td",{children:Object(m.jsx)(nt.a,{name:"lookingForAJobDescription",component:st,type:"checkbox",validate:pt})})]}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{children:"\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b :"})}),Object.keys(t.profile.contacts).map((function(t,e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsxs)("label",{htmlFor:t,children:[t,": "]})}),Object(m.jsx)("td",{children:Object(m.jsx)(nt.a,{name:"contacts."+t,component:lt,type:"text",validate:pt})})]},e)})),t.error&&Object(m.jsx)("div",{className:v.a.commonError,children:t.error}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{children:Object(m.jsx)("button",{children:"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})})]})),e))})),Ot=function(t){return Object(m.jsx)(m.Fragment,{children:t.constact.length>0&&Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[t.objectKey,": "]}),Object(m.jsx)("td",{children:Object(m.jsx)("a",{href:t.constact,target:"_blanck",children:t.constact})})]})})},mt=(Object(rt.a)({form:"editProfile"})((function(t){return Object(m.jsxs)("form",{onSubmit:t.handleSubmit,className:t.error?v.a.errorBorder:"",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"fullName",children:"name"}),Object(m.jsx)(nt.a,{name:"fullName",component:lt,type:"text",validate:[ut,pt]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"aboutMe",children:"about me"}),Object(m.jsx)(nt.a,{name:"aboutMe",component:lt,type:"text",validate:null})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"lookingForAJob",children:"looking job"}),Object(m.jsx)(nt.a,{name:"lookingForAJob",component:lt,type:"checkbox",validate:null})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"lookingForAJobDescription",children:"job description"}),Object(m.jsx)(nt.a,{name:"lookingForAJobDescription",component:st,type:"checkbox",validate:pt})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"contacts :"}),Object.keys(t.profile.contacts).map((function(t,e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:t,children:[t,": "]}),Object(m.jsx)(nt.a,{name:"contacts."+t,component:lt,type:"text",validate:pt})]},e)}))]}),t.error&&Object(m.jsx)("div",{className:v.a.commonError,children:t.error}),Object(m.jsx)("button",{children:"send"})]})})),function(t){var e=Object(r.useState)(!1),n=Object(et.a)(e,2),c=n[0],a=n[1];return Object(m.jsxs)(m.Fragment,{children:[c&&Object(m.jsx)(ft,{profile:t.profile,onSubmit:function(e){console.log(e),t.updateProfile_My(e),a(!1)},initialValues:t.profile}),!c&&Object(m.jsx)(ht,{profile:t.profile,setEditMode:a,isOwner:t.isOwner})]})}),xt=n.p+"static/media/Bean Eater-1s-200px.6f04a94a.gif",gt=n(13),vt=n.n(gt),At=(dt(2),Object(rt.a)({form:"addPost"})((function(t){var e={paddingTop:"15px",display:"flex",justifyContent:"center"};return Object(m.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(m.jsx)("div",{style:e,children:Object(m.jsx)(nt.a,{className:v.a.postArea,name:"newPost",component:st,validate:[],placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})}),Object(m.jsx)("div",{style:e,children:Object(m.jsx)("button",{style:{marginBottom:"15px",cursor:"pointer"},children:"\u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})})]})}))),wt=function(t){console.log(t.isOwner);var e=Object(r.useState)(""),n=Object(et.a)(e,2),c=n[0],a=n[1];return t.profile?Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:v.a.profileContainer,children:[Object(m.jsxs)("div",{className:v.a.avaTmp,children:[Object(m.jsx)("img",{src:t.profile.photos.large?t.profile.photos.large:"data:image/png;base64,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",className:v.a.ava,width:"200",height:"200 "}),t.isOwner&&Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.updatePhoto_My(e.target.files[0],t.autorizedUserId)},title:""})})]}),Object(m.jsxs)("div",{className:v.a.contactsTmp,children:[Object(m.jsx)(jt,{status:t.status,updateStatus:t.updateStatus,updateStatus_My:t.updateStatus_My}),Object(m.jsx)(mt,{profile:t.profile,match:t.match,isAuth:t.isAuth,autorizedUserId:t.autorizedUserId,isOwner:t.isOwner,updateProfile:t.updateProfile,updateProfile_My:t.updateProfile_My})]})]}),t.isOwner&&Object(m.jsx)("div",{className:v.a.postFormTmp,children:Object(m.jsx)(At,{onSubmit:function(e){e.newPost&&(t.addPost(e.newPost),a(""))},value:c})})]}):Object(m.jsx)("div",{className:vt.a.preloaderDiv,children:Object(m.jsx)("img",{src:xt})})},yt=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.posts.map((function(t,e){return Object(m.jsx)("div",{className:v.a.postItem,children:t.text},e)}));return Object(m.jsx)("div",{children:t})}}]),n}(c.a.Component),Ct=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.refresfProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refresfProfile()}},{key:"refresfProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.autorizedUserId),this.props.setProfile_My(t),this.props.setStatus_My(t)}},{key:"render",value:function(){return this.props.isAuth?Object(m.jsxs)("div",{className:v.a.container,children:[Object(m.jsx)(wt,{status:this.props.status,profile:this.props.profile,autorizedUserId:this.props.autorizedUserId,match:this.props.match,isAuth:this.props.isAuth,isOwner:!this.props.match.params.userId,createNewPost:this.props.createNewPost,addPost:this.props.addPost,updateStatus:this.props.updateStatus,updateProfile:this.props.updateProfile,updatePhoto:this.props.updatePhoto,updateStatus_My:this.props.updateStatus_My,updateProfile_My:this.props.updateProfile_My,updatePhoto_My:this.props.updatePhoto_My}),void 0===this.props.match.params.userId&&Object(m.jsx)(yt,{posts:this.props.post})]}):Object(m.jsx)(j.a,{to:"/login"})}}]),n}(c.a.Component),Pt=Object(j.g)(Ct),_t=Object(b.b)((function(t){return{profile:t.profile.profile,isAuth:t.auth.isAuth,autorizedUserId:t.auth.id,newPostText:t.profile.newPostText,post:t.profile.post,status:t.profile.status}}),{setProfile:$,addPost:function(t){return{type:W,text:t}},getStatus:function(t){return function(e){J(t).then((function(t){e(Z(t.data))}))}},updateStatus:function(t){return function(e){M(t).then((function(n){0===n.data.resultCode&&e(Z(t))}))}},updateProfile:function(t){return function(){var e=Object(y.a)(w.a.mark((function e(n,r){var c,a,o,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t);case 2:if(c=e.sent,a=r().auth.id,console.log(c),0!=c.data.resultCode){e.next=9;break}n($(a)),e.next=13;break;case 9:return o=c.data.messages[0],i=Object(z.a)("editProfile",{_error:o}),n(i),e.abrupt("return",Promise.reject(o));case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},updatePhoto:function(t,e){return function(n){G(t).then((function(t){0===t.data.resultCode&&n($(e))}))}},setProfile_My:X,setStatus_My:function(t){return function(e){E(t).then((function(t){e(Z(t.data))}))}},updateStatus_My:function(t){return function(e){U(t).then((function(n){0===n.data.resultCode&&e(Z(t))}))}},updateProfile_My:function(t){return function(e){I(t).then((function(n){0===n.data.resultCode&&e(X(t.userId))}))}},updatePhoto_My:function(t,e){return function(n){T(t).then((function(t){console.log(t),0===t.data.resultCode&&n(X(e))}))}}})(Pt),St="SET_USERS",Ft="TOGGLE_IS_FETCHING",Nt="SET_CURRENT_PAGE",kt="SET_TOTAL_USERS_COUNT",Et="SET_TOGGLE_FOLLOW",Ut="SET_TOGGLE_UnFOLLOW",It="TOGGLE_FOLLOWING_PROGRESS",Tt={items:[],count:7,page:1,currentPage:1,isFetching:!0,totalUsers:0,followingProgress:[]},Bt=function(t){return{type:Ft,value:t}},Jt=function(t){return{type:Et,userId:t}},Mt=function(t){return{type:Ut,userId:t}},Gt=function(t,e){return{type:It,isFetching:t,id:e}},Rt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case St:return Object(P.a)(Object(P.a)({},t),{},{items:e.items});case Ft:return Object(P.a)(Object(P.a)({},t),{},{isFetching:e.value});case Et:return Object(P.a)(Object(P.a)({},t),{},{items:t.items.map((function(t,n){return t.id===e.userId?Object(P.a)(Object(P.a)({},t),{},{followed:!0}):t}))});case Ut:return Object(P.a)(Object(P.a)({},t),{},{items:t.items.map((function(t,n){return t.id===e.userId?Object(P.a)(Object(P.a)({},t),{},{followed:!1}):t}))});case Nt:return Object(P.a)(Object(P.a)({},t),{},{currentPage:e.page});case kt:return Object(P.a)(Object(P.a)({},t),{},{totalUsers:e.total});case It:return Object(P.a)(Object(P.a)({},t),{},{followingProgress:e.isFetching?[].concat(Object(C.a)(t.followingProgress),[e.id]):t.followingProgress.filter((function(t){return t!==e.id}))});default:return t}},Lt=n(132),Dt=n.n(Lt),Ht=function(t){for(var e=[],n=Math.floor(t.totalUsers/t.count),c=1;c<=n;c++)e.push(c);var a=Math.floor(n/15),o=Object(r.useState)(1),i=Object(et.a)(o,2),s=i[0],l=i[1],u=15*(s-1)+1,d=15*s,j=e.filter((function(t){return t>=u&&t<=d})).map((function(e,n){return Object(m.jsxs)("span",{className:e===t.currentPage?vt.a.activePage:" "+vt.a.page,onClick:function(){return t.onSetPage(e)},children:[e," \xa0"]},n)})),b=(e.map((function(e,n){return Object(m.jsx)("span",{className:Dt()(Object(bt.a)({},vt.a.activePage,e===t.currentPage)),onClick:function(){return t.onSetPage(e)},children:e},n)})),t.items.map((function(e,n){return Object(m.jsxs)("div",{className:vt.a.itemTmp,children:[Object(m.jsxs)("div",{className:vt.a.leftSide,children:[Object(m.jsx)(h.b,{to:"/profile/".concat(e.id),children:Object(m.jsx)("img",{src:e.photos.small?e.photos.small:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAwBJREFUWIXll81LFHEYx7/Pb/ZVbE3STOnNl4KwWyEmrrGKHuzQIRDsUNLRgwlRnWyT8FYeIiLoPwgPnZKIFVNRITtEISEoK7Wrhi+rq7PO7szv6WCCuerMyuylvsfn98z3+5lnhocZ4H8XHeYiZqbB0dFKKcV5BjNBmaqvrZokIs4qADPTwMhYK8CPAXHu71M5BVBXg7/mTVYAmJlCI2MvCNR+YB/4eUPtlU6r0xBWAULDY/fNwgGAQB2hkfEOq76WJjA0NFSosXNWCHit9Etg3QP9tN/vXzHrtTSBJLlarIb/Mc3VpHLDYq+5GPKS1fBtEdFl2wAEKDdTAAaO2AYA5mimACBE7AMQNJBpvpAyZBuASG2+21o01sSMbx/raj7YBhAIBHQB5TYAzaxXSiQEUVs3kbQNAAAC/upxYnlNQi7un45fEGiu91d/tuqrWG2cbc+vnFZx8+uyUSN13eFwOuFUFDAANaFibmEBU+FpJW/m/frTinC4dyKxZMXXdBNyECIqyx7EZiI9EJQINb5yJTXdmdI06IaxdRcOBW63Gx4YyauDdw0Cu/NLix8Wi3AvdePAR3EgwGKwwpdk2QegUU9oWAtHAa939VNdj1S9Rfk7e73xyErV6CMFiU2f72wJHF43JLjfSd6Wou7J9YwBIsHiHEhviAjV27WUuon1nwuQkpnzCubivjMbAJAbm82l+OIJIYh8J4vgyPHstBrWyGgq7Z7d3CvHsS8Zu19jRzgAOHM8yKs4BW15jbS11RJfbGLLxOOCq/AoPPk+kEh7r/1ug14CuGN5ApGu8utE/HY/uEOJ0VzyZKZ/dzkNlwECjGe2hgOQ4D090wDmg2UBIlFuN4AguhAJltWaAhgpo83u8G1xyrhlCsDMDdkCkIbRZAogCMeyBSAU5bgpQFJNGNkCSG6ke6cBqNGlyVRcBSPjf4x9xWAk1zagRha/7D5LW0RSl52xH/P9wuInlWVJrArCvd3lPRfR91YU6CnUAHDZFJ8EMHKxD8s2+f1D+g0/Lh/WOm0+VgAAAABJRU5ErkJggg=="})}),e.followed&&Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:function(){return t.unfollow(e.id)},disabled:t.followingProgress.some((function(t){return t===e.id})),children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"})}),!e.followed&&Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:function(){return t.follow(e.id)},disabled:t.followingProgress.some((function(t){return t===e.id})),children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]}),Object(m.jsx)("div",{className:vt.a.rightSide,children:Object(m.jsxs)("table",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:vt.a.title,children:"\u0438\u043c\u044f: "}),Object(m.jsx)("td",{children:e.name})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:vt.a.title,children:"\u0441\u0442\u0430\u0442\u0443\u0441: "}),Object(m.jsx)("td",{children:e.status})]})]})})]},n)})));return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:vt.a.pgnsBlock,children:[s>1&&Object(m.jsx)("button",{className:vt.a.page,onClick:function(){return l(s-1)},children:"\u2190"}),j,a>s&&Object(m.jsx)("button",{className:vt.a.page,onClick:function(){return l(s+1)},children:"\u2192"})]}),b]})},zt=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).onSetPage=function(e){t.props.setCurrPage(e),t.props.setUsers(e,t.props.count)},t.onFollow=function(e){t.props.follow(e)},t.onUnfollow=function(e){t.props.unfollow(e)},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.setUsers(this.props.page,this.props.count)}},{key:"render",value:function(){return this.props.isFetching?Object(m.jsx)("div",{className:vt.a.preloaderDiv,children:Object(m.jsx)("img",{src:xt})}):Object(m.jsx)(Ht,{totalUsers:this.props.totalUsers,count:this.props.count,items:this.props.items,isFetching:this.props.isFetching,currentPage:this.props.currentPage,followingProgress:this.props.followingProgress,onSetPage:this.onSetPage,follow:this.onFollow,unfollow:this.onUnfollow})}}]),n}(c.a.Component),qt=Object(b.b)((function(t){return{items:t.users.items,isFetching:t.users.isFetching,count:t.users.count,page:t.users.page,totalUsers:t.users.totalUsers,currentPage:t.users.currentPage,followingProgress:t.users.followingProgress}}),{setUsers:function(t,e){return function(n){R(t,e).then((function(t){var e,r;n(Bt(!1)),n((e=t.data.totalCount,{type:kt,total:e})),n((r=t.data.items,{type:St,items:r}))}))}},setCurrPage:function(t){return{type:Nt,page:t}},follow:function(t){return function(e,n){e(Gt(!0,t)),L(t).then((function(n){0===n.data.resultCode&&(e(Bt(!1)),e(Jt(t))),e(Gt(!1,t))}))}},unfollow:function(t){return function(e){e(Gt(!0,t)),D(t).then((function(n){0===n.data.resultCode&&(e(Bt(!1)),e(Mt(t))),e(Gt(!1,t))}))}}})(zt),Wt=n(95),Kt=n.n(Wt),Yt="AUTH_ME",Qt="LOGOUT",Vt="GET_CAPTCHA_URL",Zt={id:null,login:null,email:null,isAuth:!1,isFetching:!0,captcha:null},Xt=function(t,e,n){return{type:Qt,data:{id:t,login:e,email:n}}},$t=function(){return function(t){return S().then((function(e){if(0===e.data.resultCode){var n=e.data.data,r=n.id,c=n.login,a=n.email;t(function(t,e,n){return{type:Yt,data:{id:t,login:e,email:n}}}(r,c,a))}}))}},te=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Yt:return Object(P.a)(Object(P.a)(Object(P.a)({},t),e.data),{},{isAuth:!0,isFetching:!1});case Qt:return Object(P.a)(Object(P.a)(Object(P.a)({},t),e.data),{},{isAuth:!1,isFetching:!1});case Vt:return Object(P.a)(Object(P.a)({},t),e.payload);default:return t}},ee="LOGIN",ne={email:null,password:null,rememberMe:!1,captcha:null,isAuth:!1,isFetching:!0},re=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ee:return Object(P.a)(Object(P.a)({},t),e.data);default:return t}},ce=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:Kt.a.header,children:[this.props.login&&Object(m.jsx)("button",{className:Kt.a.exitBtn,onClick:this.props.logout,children:"\u0432\u044b\u0445\u043e\u0434"}),!this.props.isAuth&&Object(m.jsx)(h.b,{to:"/login",activeClassName:O.a.activeLink,className:O.a.link,children:"\u043b\u043e\u0433\u0438\u043d"})]})}}]),n}(c.a.Component),ae=Object(b.b)((function(t){return{login:t.auth.login,isAuth:t.auth.isAuth}}),{logout:function(){return function(t){N().then((function(e){0===e.data.resultCode&&t(Xt(null,null,null))}))}}})(ce),oe=n(69),ie=n.n(oe),se=dt(2),le=Object(rt.a)({form:"login"})((function(t){var e=Object(r.useState)(""),n=Object(et.a)(e,2);n[0],n[1];return Object(m.jsx)("form",{onSubmit:t.handleSubmit,children:Object(m.jsxs)("table",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("label",{htmlFor:"email",children:"\u043b\u043e\u0433\u0438\u043d:"})}),Object(m.jsx)("td",{children:Object(m.jsx)(nt.a,{name:"email",component:lt,type:"text",validate:[ut,se]})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("label",{htmlFor:"password",children:"\u043f\u0430\u0440\u043e\u043b\u044c:"})}),Object(m.jsx)("td",{children:Object(m.jsx)(nt.a,{name:"password",component:lt,type:"password",validate:[ut,se]})})]}),t.captcha&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{src:t.captcha}),Object(m.jsx)("label",{htmlFor:"captcha",children:"captcha"}),Object(m.jsx)(nt.a,{name:"captcha",component:lt,type:"text",validate:[ut]})]}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{children:Object(m.jsx)("button",{type:"submit",children:"\u0432\u043e\u0439\u0442\u0438"})})}),t.error&&Object(m.jsx)("tr",{className:ie.a.formCommonError,children:Object(m.jsx)("td",{colspan:"2",children:t.error})})]})})})),ue=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t,r){var c;return Object(i.a)(this,n),(c=e.call(this,t,r)).onSubmit=function(t){var e=t.email,n=t.password,r=t.rememberMe;c.props.login(e,n,r)},c.props=t,c.state=r,c.state={editVode:!1,captchaText:""},c}return Object(s.a)(n,[{key:"render",value:function(){return this.props.isAuth?Object(m.jsx)(j.a,{to:"/profile"}):Object(m.jsx)("div",{className:ie.a.loginPageTmp,children:Object(m.jsx)(le,{onSubmit:this.onSubmit,captcha:this.props.captcha})})}}]),n}(c.a.Component),de=Object(b.b)((function(t){return{isAuth:t.auth.isAuth,captcha:t.auth.captcha}}),{login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return function(c){F(t,e,n,r).then((function(t){if(0===t.data.resultCode)c($t());else{var e=Object(z.a)("login",{_error:t.data.messages[0]});c(e)}}))}}})(ue),je="GET_INITIALAZED",be="ALL_UNCAUTCHED_ERRORS",pe="HIDE_ERROR_MESSAGE",he={initialazed:!1,globalUncautched:null},fe=function(){return{type:je}},Oe=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case je:return Object(P.a)(Object(P.a)({},t),{},{initialazed:!0});case be:return Object(P.a)(Object(P.a)({},t),{},{globalUncautched:"global_errors"});case pe:return Object(P.a)(Object(P.a)({},t),{},{globalUncautched:null});default:return t}},me=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t,r){var c;return Object(i.a)(this,n),(c=e.call(this,t,r)).unCautchRejections=c.unCautchRejections.bind(Object(l.a)(c)),c.hide=!0,c}return Object(s.a)(n,[{key:"unCautchRejections",value:function(){this.props.unCautchedErrorsHandle()}},{key:"componentDidMount",value:function(){this.props.getInitialaze(),window.addEventListener("unhandledrejection",this.unCautchRejections)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.unCautchRejections)}},{key:"render",value:function(){return this.props.initialazed?Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"header-container",children:[Object(m.jsx)("div",{className:"Navbar",children:Object(m.jsx)(x,{})}),Object(m.jsx)(ae,{})]}),Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(j.a,{to:"profile"})}}),Object(m.jsx)(j.b,{path:"/login",render:function(){return Object(m.jsx)(de,{})}}),Object(m.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(m.jsx)(_t,{})}}),Object(m.jsx)(j.b,{path:"/users",render:function(){return Object(m.jsx)(qt,{})}}),Object(m.jsx)(j.b,{path:"*",render:function(){return Object(m.jsx)("div",{children:"404 not found"})}})]})})]}):Object(m.jsx)("div",{className:vt.a.preloaderDiv,children:Object(m.jsx)("img",{src:xt})})}}]),n}(c.a.Component),xe=Object(p.d)(Object(b.b)((function(t){return{login:t.auth.login,isAuth:t.auth.isAuth,initialazed:t.app.initialazed,globalUncautched:t.app.globalUncautched}}),{getInitialaze:function(){return function(t){t($t()).then((function(e){t(fe())}))}},unCautchedErrorsHandle:function(){return function(){var t=Object(y.a)(w.a.mark((function t(e){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({type:be});case 2:return n=t.sent,setTimeout((function(){e({type:pe})}),3e3),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),j.g)(me),ge=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,288)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=n(133),Ae=n(127),we=Object(p.c)({profile:tt,auth:te,form:Ae.a,users:Rt,app:Oe,login:re}),ye=Object(p.e)(we,Object(p.a)(ve.a));window.store=ye;var Ce=ye;o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(h.a,{children:Object(m.jsx)(b.a,{store:Ce,children:Object(m.jsx)(xe,{})})})}),document.getElementById("root")),ge(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},35:function(t,e,n){t.exports={activeLink:"navbar_activeLink__3cseK",link:"navbar_link__389Yc"}},69:function(t,e,n){t.exports={formCommonError:"login_formCommonError__cs5yi",loginPageTmp:"login_loginPageTmp__3la9Q"}},95:function(t,e,n){t.exports={exitBtn:"header_exitBtn__3c3id"}}},[[287,1,2]]]);
//# sourceMappingURL=main.5a9a0e9b.chunk.js.map