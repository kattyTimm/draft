(this.webpackJsonpdraft=this.webpackJsonpdraft||[]).push([[0],{131:function(t,e,n){t.exports={formCommonError:"login_formCommonError__cs5yi"}},162:function(t,e,n){},163:function(t,e,n){},286:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),c=n(65),i=n.n(c),a=(n(162),n(20)),s=n(21),u=n(67),l=n(23),j=n(22),d=(n.p,n(163),n(12)),p=n(13),b=n(11),f=n(15),h=n(55),O=n.n(h),m=n(0),g=function(t){return Object(m.jsxs)("nav",{className:"Navbar",children:[Object(m.jsx)(f.b,{to:"/profile",activeClassName:O.a.activeLink,children:"profile "}),Object(m.jsx)(f.b,{to:"/users",activeClassName:O.a.activeLink,children:"users "}),Object(m.jsx)(f.b,{to:"/dialogs",activeClassName:O.a.activeLink,children:"dialogs"}),Object(m.jsx)(f.b,{to:"/learning",activeClassName:O.a.activeLink,children:"learning"})]})},x=n(87),v=n(24),A=n.n(v),C=n(39),y=n(10),w=n(3),S=x.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"43040dd6-0e63-4499-9314-9afff1dbb86e"}}),P=function(){return S.get("auth/me")},F=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return S.post("auth/login",{email:t,password:e,rememberMe:n,captcha:r})},k=function(){return S.delete("auth/login")},E=function(t){return S.get("profile/".concat(t))},I=function(t){return S.get("profile/status/".concat(t))},U=function(t){return S.put("profile/status",{status:t})},B=function(t){return S.put("profile",t)},N=function(t){var e=new FormData;return e.append("image",t),S.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}})},_=function(t){return S.get("profile/".concat(t))},M=function(t){return S.get("profile/status/".concat(t))},T=function(t){return S.put("profile/status",{status:t})},J=function(t){var e=new FormData;return e.append("image",t),S.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}})},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return S.get("users?page=".concat(t,"&count=").concat(e))},L=function(t){return S.post("follow/".concat(t))},R=function(t){return S.delete("follow/".concat(t))},D=function(t){return S.put("profile",t)},H=n(26),z="SET_USER_PROFILE",W="ADD_NEW_POST",q="GET_USER_STATUS",K="SET_PHOTO_SUCCESS",Q={profile:null,status:"",post:[],newPostText:""},Y=function(t){return{type:z,data:t}},V=function(t){return{type:q,status:t}},Z=function(t){return function(e){E(t).then((function(t){e(Y(t.data))}))}},X=function(t){return function(){var e=Object(C.a)(A.a.mark((function e(n){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(t);case 3:r=e.sent,n(Y(r.data)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(t),console.log("error 112");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case z:return Object(w.a)(Object(w.a)({},t),{},{profile:e.data});case W:var n=t.post.length+1;return Object(w.a)(Object(w.a)({},t),{},{post:[].concat(Object(y.a)(t.post),[{id:n,text:e.text}])});case q:return Object(w.a)(Object(w.a)({},t),{},{status:e.status});case K:return Object(w.a)(Object(w.a)({},t),{},{profile:Object(w.a)(Object(w.a)({},t.profile),{},{photos:e.file})});default:return t}},tt=(n(91),n(7)),et=n(125),nt=n(126),rt=n(56),ot=n(92),ct=n.n(ot),it=function(t){t.input;var e=t.meta,n=Object(rt.a)(t,["input","meta"]),r=e.error&&e.visited;return Object(m.jsxs)("span",{className:r?ct.a.formControl+" "+ct.a.errorLoginField:"",children:[n.children,r&&Object(m.jsx)("span",{children:e.error})]})},at=function(t){var e=t.input,n=(t.meta,Object(rt.a)(t,["input","meta"]));return Object(m.jsx)(it,Object(w.a)(Object(w.a)({},t),{},{children:Object(m.jsx)("textarea",Object(w.a)(Object(w.a)({},e),n))}))},st=function(t){var e=t.input,n=(t.meta,Object(rt.a)(t,["input","meta"]));return Object(m.jsx)(it,Object(w.a)(Object(w.a)({},t),{},{children:Object(m.jsx)("input",Object(w.a)(Object(w.a)({},e),n))}))},ut=function(t){return t?void 0:"Field is required!"},lt=function(t){return function(e){return e&&e.length<t?"Min length ".concat(t," symbols"):void 0}},jt=function(t){var e=Object(r.useState)(!1),n=Object(tt.a)(e,2),o=n[0],c=n[1],i=Object(r.useState)(t.status),a=Object(tt.a)(i,2),s=(a[0],a[1],Object(r.useState)(t.status)),u=Object(tt.a)(s,2),l=u[0],j=u[1];Object(r.useEffect)((function(){j(t.status)}),[t.status]);return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),o&&Object(m.jsx)("input",{autoFocus:!0,value:l,onChange:function(t){return j(t.target.value)},onBlur:function(){return t.updateStatus_My(l),void c(!1)}}),!o&&Object(m.jsx)("p",{onClick:function(){c(!0)},children:l||"write you status"})]})},dt=function(t){var e=Object(r.useState)(!1),n=Object(tt.a)(e,2),o=n[0],c=n[1],i=Object(r.useState)(t.profile.aboutMe),a=Object(tt.a)(i,2),s=a[0],u=a[1];return Object(m.jsxs)("div",{children:[!o&&Object(m.jsx)("div",{onDoubleClick:function(){return c(!0)},children:t.profile.aboutMe||""}),o&&Object(m.jsx)("input",{value:s,onChange:function(t){u(t.target.value)},onBlur:function(){u(s),c(!1),console.log(s)}})]})},pt=n(35),bt=n.n(pt),ft=lt(2),ht=function(t){return Object(m.jsxs)("div",{className:bt.a.profileInfoBlock,children:[Object(m.jsx)("div",{children:Object(m.jsxs)("span",{children:["name: ",t.profile.fullName]})}),Object(m.jsx)("div",{children:Object(m.jsxs)("span",{children:["about me: ",t.profile.aboutMe]})}),Object(m.jsx)("div",{children:Object(m.jsxs)("span",{children:["looking job: ",t.profile.lookingForAJob?"yes":"no"]})}),t.profile.lookingForAJob&&Object(m.jsx)("span",{children:t.profile.lookingForAJobDescription}),Object.keys(t.profile.contacts).map((function(e,n){return Object(m.jsx)(mt,{objectKey:e,constact:t.profile.contacts[e]},n)})),t.isOwner&&Object(m.jsx)("button",{onClick:function(){return t.setEditMode(!0)},children:"edit"})]})},Ot=Object(nt.a)({form:"profileEditComponent"})((function(t){return Object(m.jsxs)("form",{onSubmit:t.handleSubmit,className:t.error?bt.a.errorBorder:"",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"fullName",children:"name"}),Object(m.jsx)(et.a,{name:"fullName",component:st,type:"text",validate:[ut,ft]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"aboutMe",children:"about me"}),Object(m.jsx)(et.a,{name:"aboutMe",component:st,type:"text",validate:null})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"lookingForAJob",children:"looking job"}),Object(m.jsx)(et.a,{name:"lookingForAJob",component:st,type:"checkbox",validate:null})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"lookingForAJobDescription",children:"job description"}),Object(m.jsx)(et.a,{name:"lookingForAJobDescription",component:at,type:"checkbox",validate:ft})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"contacts :"}),Object.keys(t.profile.contacts).map((function(t,e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:t,children:[t,": "]}),Object(m.jsx)(et.a,{name:"contacts."+t,component:st,type:"text",validate:ft})]},e)}))]}),t.error&&Object(m.jsx)("div",{className:bt.a.commonError,children:t.error}),Object(m.jsx)("button",{children:"send"})]})})),mt=function(t){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{className:bt.a.objectKey,children:[t.objectKey,": "]}),Object(m.jsx)("span",{children:t.constact})]})},gt=(Object(nt.a)({form:"editProfile"})((function(t){return Object(m.jsxs)("form",{onSubmit:t.handleSubmit,className:t.error?bt.a.errorBorder:"",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"fullName",children:"name"}),Object(m.jsx)(et.a,{name:"fullName",component:st,type:"text",validate:[ut,ft]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"aboutMe",children:"about me"}),Object(m.jsx)(et.a,{name:"aboutMe",component:st,type:"text",validate:null})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"lookingForAJob",children:"looking job"}),Object(m.jsx)(et.a,{name:"lookingForAJob",component:st,type:"checkbox",validate:null})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"lookingForAJobDescription",children:"job description"}),Object(m.jsx)(et.a,{name:"lookingForAJobDescription",component:at,type:"checkbox",validate:ft})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"contacts :"}),Object.keys(t.profile.contacts).map((function(t,e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:t,children:[t,": "]}),Object(m.jsx)(et.a,{name:"contacts."+t,component:st,type:"text",validate:ft})]},e)}))]}),t.error&&Object(m.jsx)("div",{className:bt.a.commonError,children:t.error}),Object(m.jsx)("button",{children:"send"})]})})),function(t){var e=Object(r.useState)(!1),n=Object(tt.a)(e,2),o=n[0],c=n[1];return Object(m.jsxs)(m.Fragment,{children:[o&&Object(m.jsx)(Ot,{profile:t.profile,onSubmit:function(e){console.log(e),t.updateProfile_My(e),c(!1)},initialValues:t.profile}),!o&&Object(m.jsx)(ht,{profile:t.profile,setEditMode:c,isOwner:t.isOwner})]})}),xt=lt(2),vt=Object(nt.a)({form:"addPost"})((function(t){return Object(m.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(m.jsx)(et.a,{name:"newPost",component:at,validate:xt,placeholder:"enter you post"}),Object(m.jsx)("button",{type:"submit",children:"add post"})]})})),At=function(t){if(!t.profile)return Object(m.jsx)("div",{children:"'\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430'"});return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:t.profile.photos.large?t.profile.photos.large:"data:image/png;base64,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"}),t.isOwner&&Object(m.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.updatePhoto_My(e.target.files[0],t.autorizedUserId)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(dt,{profile:t.profile}),Object(m.jsx)(jt,{status:t.status,updateStatus:t.updateStatus,updateStatus_My:t.updateStatus_My}),Object(m.jsx)(gt,{profile:t.profile,match:t.match,isAuth:t.isAuth,autorizedUserId:t.autorizedUserId,isOwner:t.isOwner,updateProfile:t.updateProfile,updateProfile_My:t.updateProfile_My})]}),t.updateProfile_My,Object(m.jsx)(vt,{onSubmit:function(e){var n;n=e,t.addPost(n.newPost)}})]})},Ct=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.posts.map((function(t,e){return Object(m.jsx)("div",{children:t.text},e)}));return Object(m.jsx)("div",{children:t})}}]),n}(o.a.Component),yt=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.refresfProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refresfProfile()}},{key:"refresfProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.autorizedUserId),this.props.setProfile_My(t),this.props.setStatus_My(t)}},{key:"render",value:function(){return this.props.isAuth?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(At,{status:this.props.status,profile:this.props.profile,autorizedUserId:this.props.autorizedUserId,match:this.props.match,isAuth:this.props.isAuth,isOwner:!this.props.match.params.userId,createNewPost:this.props.createNewPost,addPost:this.props.addPost,updateStatus:this.props.updateStatus,updateProfile:this.props.updateProfile,updatePhoto:this.props.updatePhoto,updateStatus_My:this.props.updateStatus_My,updateProfile_My:this.props.updateProfile_My,updatePhoto_My:this.props.updatePhoto_My}),Object(m.jsx)(Ct,{posts:this.props.post})]}):Object(m.jsx)(d.a,{to:"/login"})}}]),n}(o.a.Component),wt=Object(d.g)(yt),St=Object(p.b)((function(t){return{profile:t.profile.profile,isAuth:t.auth.isAuth,autorizedUserId:t.auth.id,newPostText:t.profile.newPostText,post:t.profile.post,status:t.profile.status}}),{setProfile:X,addPost:function(t){return{type:W,text:t}},getStatus:function(t){return function(e){M(t).then((function(t){e(V(t.data))}))}},updateStatus:function(t){return function(e){T(t).then((function(n){0===n.data.resultCode&&e(V(t))}))}},updateProfile:function(t){return function(){var e=Object(C.a)(A.a.mark((function e(n,r){var o,c,i,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:if(o=e.sent,c=r().auth.id,console.log(o),0!=o.data.resultCode){e.next=9;break}n(X(c)),e.next=13;break;case 9:return i=o.data.messages[0],a=Object(H.a)("editProfile",{_error:i}),n(a),e.abrupt("return",Promise.reject(i));case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},updatePhoto:function(t,e){return function(n){J(t).then((function(t){0===t.data.resultCode&&n(X(e))}))}},setProfile_My:Z,setStatus_My:function(t){return function(e){I(t).then((function(t){e(V(t.data))}))}},updateStatus_My:function(t){return function(e){U(t).then((function(n){0===n.data.resultCode&&e(V(t))}))}},updateProfile_My:function(t){return function(e){B(t).then((function(n){console.log(t.userId),0===n.data.resultCode&&e(Z(t.userId))}))}},updatePhoto_My:function(t,e){return function(n){N(t).then((function(t){console.log(t),0===t.data.resultCode&&n(Z(e))}))}}})(wt),Pt="SET_USERS",Ft="TOGGLE_IS_FETCHING",kt="SET_CURRENT_PAGE",Et="SET_TOTAL_USERS_COUNT",It="SET_TOGGLE_FOLLOW",Ut="SET_TOGGLE_UnFOLLOW",Bt="TOGGLE_FOLLOWING_PROGRESS",Nt={items:[],count:10,page:1,currentPage:1,isFetching:!0,totalUsers:0,followingProgress:[]},_t=function(t){return{type:Ft,value:t}},Mt=function(t){return{type:It,userId:t}},Tt=function(t){return{type:Ut,userId:t}},Jt=function(t,e){return{type:Bt,isFetching:t,id:e}},Gt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Pt:return Object(w.a)(Object(w.a)({},t),{},{items:e.items});case Ft:return Object(w.a)(Object(w.a)({},t),{},{isFetching:e.value});case It:return Object(w.a)(Object(w.a)({},t),{},{items:t.items.map((function(t,n){return t.id===e.userId?Object(w.a)(Object(w.a)({},t),{},{followed:!0}):t}))});case Ut:return Object(w.a)(Object(w.a)({},t),{},{items:t.items.map((function(t,n){return t.id===e.userId?Object(w.a)(Object(w.a)({},t),{},{followed:!1}):t}))});case kt:return Object(w.a)(Object(w.a)({},t),{},{currentPage:e.page});case Et:return Object(w.a)(Object(w.a)({},t),{},{totalUsers:e.total});case Bt:return Object(w.a)(Object(w.a)({},t),{},{followingProgress:e.isFetching?[].concat(Object(y.a)(t.followingProgress),[e.id]):t.followingProgress.filter((function(t){return t!==e.id}))});default:return t}},Lt=n(34),Rt=n(130),Dt=n.n(Rt),Ht=n(95),zt=n.n(Ht),Wt=function(t){for(var e=[],n=Math.floor(t.totalUsers/t.count),o=1;o<=n;o++)e.push(o);var c=Math.floor(n/15),i=Object(r.useState)(1),a=Object(tt.a)(i,2),s=a[0],u=a[1],l=15*(s-1)+1,j=15*s,d=e.filter((function(t){return t>=l&&t<=j})).map((function(e,n){return Object(m.jsxs)("span",{className:e===t.currentPage?zt.a.activePage:"",onClick:function(){return t.onSetPage(e)},children:[e," \xa0"]},n)})),p=(e.map((function(e,n){return Object(m.jsx)("span",{className:Dt()(Object(Lt.a)({},zt.a.activePage,e===t.currentPage)),onClick:function(){return t.onSetPage(e)},children:e},n)})),t.items.map((function(e,n){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)(f.b,{to:"/profile/".concat(e.id),children:Object(m.jsx)("img",{src:e.photos.small?e.photos.small:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAwBJREFUWIXll81LFHEYx7/Pb/ZVbE3STOnNl4KwWyEmrrGKHuzQIRDsUNLRgwlRnWyT8FYeIiLoPwgPnZKIFVNRITtEISEoK7Wrhi+rq7PO7szv6WCCuerMyuylvsfn98z3+5lnhocZ4H8XHeYiZqbB0dFKKcV5BjNBmaqvrZokIs4qADPTwMhYK8CPAXHu71M5BVBXg7/mTVYAmJlCI2MvCNR+YB/4eUPtlU6r0xBWAULDY/fNwgGAQB2hkfEOq76WJjA0NFSosXNWCHit9Etg3QP9tN/vXzHrtTSBJLlarIb/Mc3VpHLDYq+5GPKS1fBtEdFl2wAEKDdTAAaO2AYA5mimACBE7AMQNJBpvpAyZBuASG2+21o01sSMbx/raj7YBhAIBHQB5TYAzaxXSiQEUVs3kbQNAAAC/upxYnlNQi7un45fEGiu91d/tuqrWG2cbc+vnFZx8+uyUSN13eFwOuFUFDAANaFibmEBU+FpJW/m/frTinC4dyKxZMXXdBNyECIqyx7EZiI9EJQINb5yJTXdmdI06IaxdRcOBW63Gx4YyauDdw0Cu/NLix8Wi3AvdePAR3EgwGKwwpdk2QegUU9oWAtHAa939VNdj1S9Rfk7e73xyErV6CMFiU2f72wJHF43JLjfSd6Wou7J9YwBIsHiHEhviAjV27WUuon1nwuQkpnzCubivjMbAJAbm82l+OIJIYh8J4vgyPHstBrWyGgq7Z7d3CvHsS8Zu19jRzgAOHM8yKs4BW15jbS11RJfbGLLxOOCq/AoPPk+kEh7r/1ug14CuGN5ApGu8utE/HY/uEOJ0VzyZKZ/dzkNlwECjGe2hgOQ4D090wDmg2UBIlFuN4AguhAJltWaAhgpo83u8G1xyrhlCsDMDdkCkIbRZAogCMeyBSAU5bgpQFJNGNkCSG6ke6cBqNGlyVRcBSPjf4x9xWAk1zagRha/7D5LW0RSl52xH/P9wuInlWVJrArCvd3lPRfR91YU6CnUAHDZFJ8EMHKxD8s2+f1D+g0/Lh/WOm0+VgAAAABJRU5ErkJggg=="})})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"name: "}),Object(m.jsx)("span",{children:e.name}),Object(m.jsx)("span",{children:" \xb6 status: "}),Object(m.jsx)("span",{children:e.status})]}),e.followed&&Object(m.jsx)("button",{onClick:function(){return t.unfollow(e.id)},disabled:t.followingProgress.some((function(t){return t===e.id})),children:"unfollw"}),!e.followed&&Object(m.jsx)("button",{onClick:function(){return t.follow(e.id)},disabled:t.followingProgress.some((function(t){return t===e.id})),children:"follow"})]},n)})));return Object(m.jsxs)("div",{children:[s>1&&Object(m.jsx)("button",{onClick:function(){return u(s-1)},children:"\u2190"}),d,c>s&&Object(m.jsx)("button",{onClick:function(){return u(s+1)},children:"\u2192"}),p]})},qt=n.p+"static/media/Bean_Eater_420px.02114c63.gif",Kt=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).onSetPage=function(e){t.props.setCurrPage(e),t.props.setUsers(e,t.props.count)},t.onFollow=function(e){t.props.follow(e)},t.onUnfollow=function(e){t.props.unfollow(e)},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.setUsers(this.props.page,this.props.count)}},{key:"render",value:function(){return this.props.isFetching?Object(m.jsx)("img",{src:qt}):Object(m.jsx)(Wt,{totalUsers:this.props.totalUsers,count:this.props.count,items:this.props.items,isFetching:this.props.isFetching,currentPage:this.props.currentPage,followingProgress:this.props.followingProgress,onSetPage:this.onSetPage,follow:this.onFollow,unfollow:this.onUnfollow})}}]),n}(o.a.Component),Qt=Object(p.b)((function(t){return{items:t.users.items,isFetching:t.users.isFetching,count:t.users.count,page:t.users.page,totalUsers:t.users.totalUsers,currentPage:t.users.currentPage,followingProgress:t.users.followingProgress}}),{setUsers:function(t,e){return function(n){G(t,e).then((function(t){var e,r;n(_t(!1)),n((e=t.data.totalCount,{type:Et,total:e})),n((r=t.data.items,{type:Pt,items:r}))}))}},setCurrPage:function(t){return{type:kt,page:t}},follow:function(t){return function(e,n){e(Jt(!0,t)),L(t).then((function(n){0===n.data.resultCode&&(e(_t(!1)),e(Mt(t))),e(Jt(!1,t))}))}},unfollow:function(t){return function(e){e(Jt(!0,t)),R(t).then((function(n){0===n.data.resultCode&&(e(_t(!1)),e(Tt(t))),e(Jt(!1,t))}))}}})(Kt),Yt=function(t){return Object(m.jsx)("div",{children:"Dialogs"})},Vt="AUTH_ME",Zt="LOGOUT",Xt="GET_CAPTCHA_URL",$t={id:null,login:null,email:null,isAuth:!1,isFetching:!0,captcha:null},te=function(t,e,n){return{type:Zt,data:{id:t,login:e,email:n}}},ee=function(){return function(t){return P().then((function(e){if(0===e.data.resultCode){var n=e.data.data,r=n.id,o=n.login,c=n.email;t(function(t,e,n){return{type:Vt,data:{id:t,login:e,email:n}}}(r,o,c))}}))}},ne=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Vt:return Object(w.a)(Object(w.a)(Object(w.a)({},t),e.data),{},{isAuth:!0,isFetching:!1});case Zt:return Object(w.a)(Object(w.a)(Object(w.a)({},t),e.data),{},{isAuth:!1,isFetching:!1});case Xt:return Object(w.a)(Object(w.a)({},t),e.payload);default:return t}},re="LOGIN",oe={email:null,password:null,rememberMe:!1,captcha:null,isAuth:!1,isFetching:!0},ce=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case re:return Object(w.a)(Object(w.a)({},t),e.data);default:return t}},ie=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[this.props.login&&this.props.login,this.props.login&&Object(m.jsx)("button",{onClick:this.props.logout,children:"logout"}),!this.props.isAuth&&Object(m.jsx)("button",{children:Object(m.jsx)(f.b,{to:"/login",children:"Sing In"})})]})}}]),n}(o.a.Component),ae=Object(p.b)((function(t){return{login:t.auth.login,isAuth:t.auth.isAuth}}),{logout:function(){return function(t){k().then((function(e){0===e.data.resultCode&&t(te(null,null,null))}))}}})(ie),se=n(131),ue=n.n(se),le=lt(2),je=Object(nt.a)({form:"login"})((function(t){var e=Object(r.useState)(""),n=Object(tt.a)(e,2);n[0],n[1];return Object(m.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"email",children:"email"}),Object(m.jsx)(et.a,{name:"email",component:st,type:"text",validate:[ut,le]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"email"}),Object(m.jsx)(et.a,{name:"password",component:st,type:"password",validate:[ut,le]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"rememberMe",children:"remember Me"}),Object(m.jsx)(et.a,{name:"rememberMe",component:st,type:"checkbox"})]}),t.captcha&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{src:t.captcha}),Object(m.jsx)("label",{htmlFor:"captcha",children:"remember Me"}),Object(m.jsx)(et.a,{name:"captcha",component:st,type:"text",validate:[ut]})]}),t.error&&Object(m.jsx)("div",{className:ue.a.formCommonError,children:t.error}),Object(m.jsx)("button",{type:"submit",children:"Submit"})]})})),de=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t,r){var o;return Object(a.a)(this,n),(o=e.call(this,t,r)).onSubmit=function(t){var e=t.email,n=t.password,r=t.rememberMe;o.props.login(e,n,r)},o.props=t,o.state=r,o.state={editVode:!1,captchaText:""},o}return Object(s.a)(n,[{key:"render",value:function(){return this.props.isAuth?Object(m.jsx)(d.a,{to:"/profile"}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(je,{onSubmit:this.onSubmit,captcha:this.props.captcha})})}}]),n}(o.a.Component),pe=Object(p.b)((function(t){return{isAuth:t.auth.isAuth,captcha:t.auth.captcha}}),{login:function(t,e,n){return function(r){F(t,e,n).then((function(t){0===t.data.resultCode&&r(ee())}))}}})(de);var be=function(t){var e=Object(r.useState)([{id:"GYi9G_uC4gBF1e2SixDvu",prop1:"value11",prop2:"value12",prop3:"value13"},{id:"IWSpfBPSV3SXgRF87uO74",prop1:"value21",prop2:"value22",prop3:"value23"},{id:"JAmjRlfQT8rLTm5tG2m1L",prop1:"value31",prop2:"value32",prop3:"value33"}]),n=Object(tt.a)(e,2),o=n[0],c=n[1],i=Object(r.useState)(""),a=Object(tt.a)(i,2),s=a[0],u=a[1],l="IWSpfBPSV3SXgRF87uO74",j={id:"GMNCZnFT4rbBP6cirA0Ha",prop1:"value41",prop2:"value42",prop3:"value43"},d={id:"IWSpfBPSV3SXgRF87uO74",prop1:"value21 !",prop2:"value22 !",prop3:"value23 !"},p="JAmjRlfQT8rLTm5tG2m1L",b="prop2",f=o.map((function(t,e){return Object(m.jsxs)("p",{children:[t.id," ",Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:t.prop1}),",",Object(m.jsx)("span",{children:t.prop2}),",",Object(m.jsx)("span",{children:t.prop3})]},t.id)}));return Object(m.jsxs)("div",{children:[f,Object(m.jsx)("button",{onClick:function(){c(o.filter((function(t){return t.id!==l})))},children:"del second p"}),Object(m.jsx)("button",{onClick:function(){c([].concat(Object(y.a)(o),[j]))},children:"add new p"}),Object(m.jsx)("button",{onClick:function(){c(o.map((function(t){return t.id===d.id?d:t})))},children:"change item p"}),Object(m.jsx)("button",{onClick:function(){c(o.map((function(t,e){return t.id===l?(console.log(o),Object(w.a)(Object(w.a)({},t),{},Object(Lt.a)({},"prop1","!!!"))):t})))},children:"change value"}),Object(m.jsx)("button",{onClick:function(){c(o.map((function(t){if(t.id===p){var e,n=t.prop2,r=t.prop3;return Object(w.a)(Object(w.a)({},t),{},(e={},Object(Lt.a)(e,b,n+"!"),Object(Lt.a)(e,"prop3",r+"!!"),e))}return t})))},children:"add !"}),Object(m.jsx)("button",{onClick:function(){var t=o.reduce((function(t,e){return e.id===p?e.prop2:t}),"");u(t)},children:"select value"}),Object(m.jsx)("p",{children:s})]})},fe="GET_INITIALAZED",he="ALL_UNCAUTCHED_ERRORS",Oe="HIDE_ERROR_MESSAGE",me={initialazed:!1,globalUncautched:null},ge=function(){return{type:fe}},xe=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case fe:return Object(w.a)(Object(w.a)({},t),{},{initialazed:!0});case he:return Object(w.a)(Object(w.a)({},t),{},{globalUncautched:"global_errors"});case Oe:return Object(w.a)(Object(w.a)({},t),{},{globalUncautched:null});default:return t}},ve=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t,r){var o;return Object(a.a)(this,n),(o=e.call(this,t,r)).unCautchRejections=o.unCautchRejections.bind(Object(u.a)(o)),o.hide=!1,o}return Object(s.a)(n,[{key:"unCautchRejections",value:function(){this.props.unCautchedErrorsHandle()}},{key:"componentDidMount",value:function(){this.props.getInitialaze(),window.addEventListener("unhandledrejection",this.unCautchRejections)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.unCautchRejections)}},{key:"render",value:function(){return this.props.initialazed?Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(ae,{}),Object(m.jsx)("div",{className:"Navbar",children:Object(m.jsx)(g,{})}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(d.a,{to:"profile"})}}),Object(m.jsx)(d.b,{path:"/login",render:function(){return Object(m.jsx)(pe,{})}}),Object(m.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(m.jsx)(St,{})}}),Object(m.jsx)(d.b,{path:"/users",render:function(){return Object(m.jsx)(Qt,{})}}),Object(m.jsx)(d.b,{path:"/dialogs",render:function(){return Object(m.jsx)(Yt,{})}}),Object(m.jsx)(d.b,{path:"/learning",render:function(){return Object(m.jsx)(be,{})}}),Object(m.jsx)(d.b,{path:"*",render:function(){return Object(m.jsx)("div",{children:"404 not found"})}})]}),this.props.globalUncautched&&Object(m.jsx)("div",{id:"error_div",children:"ooops, some error"}),!this.hide&&Object(m.jsx)("p",{children:"\u0436\u043e\u043f\u0430"})]})]}):"\u041f\u043e\u043a\u0430 \u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430\u0434\u043e \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u0435\u043b\u043e\u0430\u0434\u0435\u0440!, \u0438\u043d\u0430\u0447\u0435 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 \u043f\u043e\u0432\u0430\u043b\u044f\u0442\u0441\u044f \u043e\u0448\u0438\u0431\u043a\u0438, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043d\u0430\u0434\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u043f\u0440\u0438\u0448\u043b\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u043e\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}}]),n}(o.a.Component),Ae=Object(b.d)(Object(p.b)((function(t){return{login:t.auth.login,isAuth:t.auth.isAuth,initialazed:t.app.initialazed,globalUncautched:t.app.globalUncautched}}),{getInitialaze:function(){return function(t){t(ee()).then((function(e){return t(ge())}))}},unCautchedErrorsHandle:function(){return function(){var t=Object(C.a)(A.a.mark((function t(e){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({type:he});case 2:return n=t.sent,setTimeout((function(){e({type:Oe})}),3e3),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),d.g)(ve),Ce=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,287)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),c(t),i(t)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=n(132),we=n(127),Se=Object(b.c)({profile:$,auth:ne,form:we.a,users:Gt,app:xe,login:ce}),Pe=Object(b.e)(Se,Object(b.a)(ye.a));window.store=Pe;var Fe=Pe;i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(f.a,{children:Object(m.jsx)(p.a,{store:Fe,children:Object(m.jsx)(Ae,{})})})}),document.getElementById("root")),Ce(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},35:function(t,e,n){t.exports={profileInfoBlock:"Profile_profileInfoBlock__1UaST",contactsBlock:"Profile_contactsBlock__2BQDr",contactsTitle:"Profile_contactsTitle__3i-6p",commonError:"Profile_commonError__2_vzC",errorBorder:"Profile_errorBorder__vRyxS",objectKey:"Profile_objectKey__3cWZP"}},55:function(t,e,n){t.exports={activeLink:"navbar_activeLink__3cseK"}},92:function(t,e,n){t.exports={formControl:"formControl_formControl__2UQGH",errorLoginField:"formControl_errorLoginField__22vSW"}},95:function(t,e,n){t.exports={smallAva:"Users_smallAva__2uZg7",activePage:"Users_activePage__3Thba"}}},[[286,1,2]]]);
//# sourceMappingURL=main.fd8725c9.chunk.js.map