(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,r){e.exports={App:"App_App__3Domm",h1:"App_h1__2-29i",error:"App_error__3Z4_S",loaderContainer:"App_loaderContainer__1zGyy",loader:"App_loader__3O8Os"}},15:function(e,t,r){e.exports={container:"PasswordRecovery_container__3gS8a",block:"PasswordRecovery_block__3m6HO",inputWrap:"PasswordRecovery_inputWrap__2QekR",fields:"PasswordRecovery_fields__1JVbt",instruction:"PasswordRecovery_instruction__2eo-4",buttonR:"PasswordRecovery_buttonR__eixc2",blokLink:"PasswordRecovery_blokLink__VxFc-",question:"PasswordRecovery_question__2_5BO",link:"PasswordRecovery_link__grzEb",titleT:"PasswordRecovery_titleT__tQrac"}},21:function(e,t,r){e.exports={input:"Input_input__1YWXB"}},25:function(e,t,r){e.exports={form:"Login_form__2-gAk",input:"Login_input__2Vgw_",title:"Login_title__2fVAV",container:"Login_container__2dgXl",bottom:"Login_bottom__ibDSL"}},26:function(e,t,r){e.exports={container:"Registartion_container__2j8GM",form:"Registartion_form__QHPU3",content:"Registartion_content__3AtXV",btnContainer:"Registartion_btnContainer__1bm3E"}},27:function(e,t,r){e.exports={checkEmailBlock:"PasswordChange_checkEmailBlock__aNIWK",checkEmail:"PasswordChange_checkEmail__zinLh",iconBg:"PasswordChange_iconBg__1TYKy",caption:"PasswordChange_caption__2nfwc",text:"PasswordChange_text__2riGr"}},28:function(e,t,r){e.exports={button:"Button_button__2OENR"}},29:function(e,t,r){e.exports={container:"UpdatePassword_container__3D0GN",block:"UpdatePassword_block__3aq31",instruction:"UpdatePassword_instruction__1biSA"}},37:function(e,t,r){e.exports={label:"Checkbox_label__rLpmE",checkbox:"Checkbox_checkbox__1knew",spanClassName:"Checkbox_spanClassName__2ALIY"}},40:function(e,t,r){e.exports={containerHeader:"Header_containerHeader__3_sRl",header:"Header_header__OXTYY"}},59:function(e,t,r){},84:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),a=r(30),c=r.n(a),i=(r(59),r(14)),o=r.n(i),l=r(7),d=r(4),j=r(2),u=r(25),A=r.n(u),b=r(28),O=r.n(b),h=r(21),m=r.n(h),p=r(19),g=r(24),x=r(37),f=r.n(x),w=r(1),I=function(e){e.type;var t=e.onChange,r=e.onChangeChecked,n=e.className,s=(e.spanClassName,e.children),a=Object(g.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(f.a.checkbox," ").concat(n||"");return Object(w.jsxs)("label",{children:[Object(w.jsx)("input",Object(j.a)({type:"checkbox",onChange:function(e){t&&t(e),r&&r(e.currentTarget.checked)},className:c},a)),s&&Object(w.jsx)("span",{className:f.a.spanClassName,children:s})]})},E=function(e){var t=e.onChange,r=e.onChangeText,n=e.onKeyPress,s=e.onEnter,a=(e.error,e.className),c=Object(g.a)(e,["onChange","onChangeText","onKeyPress","onEnter","error","className"]);"".concat(m.a.error),"".concat(m.a.errorInput," ").concat(a||"");return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("input",Object(j.a)({onChange:function(e){t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),s&&"Enter"===e.key&&s()},className:m.a.input},c))})},R=function(e){var t=e.red,r=e.className,n=Object(g.a)(e,["red","className"]),s="".concat(t?O.a.button:O.a.default," ").concat(r);return Object(w.jsx)("button",Object(j.a)(Object(j.a)({className:s},n),{},{children:"Button"}))},P=r(5),C=r(17),v=r.n(C),S=r(23),k=r(52),y=r.n(k).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),Z=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return y.post("auth/login",{email:e,password:t,rememberMe:r})},D=function(e){return y.post("auth/forgot",{email:e,from:"test-front-admin <ai73a@yandex.by>",message:"<div style=\"background-color: lime; padding: 15px\">\n                            Click <a href='http://localhost:3000//$token$'>here</a> to restore your password\n                      </div>"})},Q=function(e){return y.post("auth/register",e)},B=function(e,t){return y.post("/auth/set-new-password",{password:e,resetPasswordToken:t})},N={isLoggedIn:!1},z=function(){var e=Object(P.c)((function(e){return e.auth.isLoggedIn})),t=Object(P.b)(),r=Object(p.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<3&&(t.password="Please enter your password"):t.password="Incorrect password",t},onSubmit:function(e){var n,s,a;t((n=e.email,s=e.password,a=e.rememberMe,function(){var e=Object(S.a)(v.a.mark((function e(t){var r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z(n,s,a);case 3:r=e.sent,t({type:"login/SET-IS-LOGGED-IN",value:!0}),console.log(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),c=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",console.log(c);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),r.resetForm()}});return e?Object(w.jsx)(d.a,{to:"/profile"}):Object(w.jsx)("div",{className:A.a.container,children:Object(w.jsxs)("div",{className:A.a.form,children:[Object(w.jsxs)("div",{className:A.a.title,children:[Object(w.jsx)("h1",{children:"It-incubator"}),Object(w.jsx)("h3",{children:"Sign In"})]}),Object(w.jsxs)("form",{className:A.a.input,onSubmit:r.handleSubmit,children:[Object(w.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(w.jsx)(E,Object(j.a)({className:m.a.input},r.getFieldProps("email"))),r.touched.email&&r.errors.email?Object(w.jsx)("div",{style:{color:"red"},children:r.errors.email}):null,Object(w.jsx)("label",{htmlFor:"password",children:"Password"}),Object(w.jsx)(E,Object(j.a)({className:m.a.input,type:"password"},r.getFieldProps("password"))),r.touched.password&&r.errors.password?Object(w.jsx)("div",{style:{color:"red"},children:r.errors.password}):null,Object(w.jsx)("label",{htmlFor:"rememberMe",children:"Remember me"}),Object(w.jsx)(I,{name:"rememberMe",onChange:r.handleChange,checked:r.values.rememberMe})]}),Object(w.jsx)(l.b,{to:ie.PASSWORD_CHANGE,style:{textDecoration:"none"},children:"Forgot Password"}),Object(w.jsxs)("div",{className:A.a.bottom,children:[Object(w.jsx)("form",{onSubmit:r.handleSubmit,children:Object(w.jsx)(R,{className:O.a.button,children:"login"})}),Object(w.jsx)("div",{style:{color:"gray"},children:"Don't have an account?"}),Object(w.jsx)(l.b,{to:ie.SIGN_UP,style:{color:"#232480",fontWeight:"bold",textDecoration:"none"},children:"Sign Up"})]})]})})},G=r(26),M=r.n(G),F={status:"idle",error:null,isInitialized:!1},L=function(e){return{type:"app/SET-STATUS",status:e}},T={isRegistered:!1},K=function(){return"loading"!==Object(P.c)((function(e){return e.app.status}))?null:Object(w.jsx)("div",{className:o.a.loaderContainer,children:Object(w.jsx)("div",{className:o.a.loader,children:Object(w.jsx)("img",{src:"data:image/gif;base64,R0lGODlhhANYAvf/AP+14ZdR3LiI5/9qw6py4//K6raG53Ya0cei7P+N0ZhU3Xoi0/8Mnv9uxf+44//r9//6/f9yx//1+//c8f+j2v9nwv+Hz/Xv/O3h+W4Nz6125P9Uu7mL6O7j+f/4/LyQ6ZpW3f+U1P9YvIc312sJzsOb6/+Z1vr2/f8wrP8Fm6Jk4P8mqKx142kFzf9iwPDm+v/h86Zq4a545P8dpf83r55e38CW6v8qqn4o1NvD8/+Q0/+O0sSd6/9Ruf9Ftf8Dmvv4/v9NuP9kwf8ao/8oqf+b1/95yf9ev+jZ94Qy1v+s3r+U6v/m9f8ip/+W1ZtZ3tCx7/8yrf9xxuLP9f/D59/K9KFj4P/U7oMw1n0n1Na68Xcd0o9F2p1b3os92IAs1f9SuqRo4f8sq/+h2f89sf8Tof9avaBh3/8AmWYAzHET0P+L0f+f2f8JncWe7P+e2MWf7P+J0P/x+ffx/LuO6P9JtpFI2v9ItpJJ26Rn4f+FzraF5/81rrWD5v92yP8BmYY112cBzP/a8P+Dzena+P/p9mgDzZNL24xA2f8InP9Lt6hu4v9As/Lp+//l9bSC5n8q1P+Cze/l+ruN6P9Wu/8uq6px43wl07WE5sKZ64Iu1f8lqP+EzvHo+o5D2eDM9ezf+f9DtP/f8s+v7/8bpP+v3//o9v/M6/8hpvPr+9S48erc+P+d2Mij7f91yJRN2//w+f/v+f+x4P+Iz//Z8P9XvPbw/P/k9O/k+rqM6N3H9P37/v9+y2cCzP+m23AQz//2+//j9LJ+5f/H6Yg51/8Pn//T7fTs++XT9v/s9+bW99W58f90x+nb+Mqm7f/W76Nm4P/b8f96yvn1/f93yf85sPz6/vj0/dO18K955M2s7v9rxJVO3GwKzv8Knc2r7v+r3f/i8/+644Ar1eXU9uvd+PLq+/9hwP/u+P/O6/+/5f/3/P/P7Nm/8v+c1+DL9dS38c6t78GX6tnA8v/A5v+K0P9gv7yP6bOB5phT3f+w3/+75Klw4qds4ubV9////yH5BAUKAP8AIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAhANYAgAI/gD/CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnz6BDix5NurTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz59CjS59Ovbr169iza9/Ovbv37+DD/osfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26OGHIIYo4ogklmjiiSimqOKKLLbo4oswxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnkkkw26eSTUEYp5ZRUVmnllVhmqeWWXHbp5ZdghinmmGSWaeaZaKap5ppstunmm3DGKeecdNZp55145qnnnnz26eefgAYq6KCEFmrooYgmquiijDbq6KOQRirppJRWaumlmGaq6aacdurpp6CGKuqopJZq6qmopqrqqqy26uqr/rDGKuustNZq66245qrrrrz26uuvwAYr7LDEFmvsscgmq+yyzDbr7LPQRivttNRWa+212Gar7bbcduvtt+CGK+645JZr7rnopqvuuuy26+678MYr77z01mvvvfjmq+++/Pbr778AByzwwAQXbPDBCCes8MIMN+zwwxBHLPHEFFds8cUYZ6zxxhx37PHHIIcs8sgkl2zyySinrPLKLLfs8sswxyzzzDTXbPPNOOes88489+zzz0AHLfTQRBdt9NFIJ6300kw37fTTUEct9dRUV2311VhnrfXWXHft9ddghy322GSXbfbZaKet9tpst+3223DHLffcdNdt99145633/t589+3334AHLvjghBduOILKLHJAGow3fsAiyhwOHyaBNG5544FgInl7AVzueeMBbK7eK5+XnsYrop/Xh+mmP5I6eeWYfsklppfzungqfE4AEiecgAQBn6twO3jXZOD5NwZ943kG1wzvnSqea4CQBp4v43x3uVxOQiMIdULC5blczx0LlyehEBaXSy++dsBbPoJCI1zOwvraCXD5L3MgNMcvlwtAf3aj8NwHEPIBz43if9hJRQu09wmDfOJ7lmtBKhCInc5dLgOZyN8/5pAJ410udBS8zjtK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"})})})},J=function(){var e=Object(P.c)((function(e){return e.app.error})),t=Object(P.c)((function(e){return e.registation.isRegistered})),r=Object(P.b)(),n=Object(p.a)({initialValues:{email:"",password:"",confirmation:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<7&&(t.password="Must be more then 7 characters"):t.password="Password required",e.password&&!e.confirmation?t.confirmation="Confirm password":e.password!==e.confirmation&&(t.confirmation="Password mismatch"),t},onSubmit:function(e){var t;e.password===e.confirmation&&(r((t={email:e.email,password:e.password},function(e){e(L("loading")),Q(t).then((function(t){console.log("Res",t),e({type:"registration/REGISTER",isRegistered:!0}),e(L("succeeded"))})).catch((function(t){var r=t.response?t.response.data.error:t.message+", more details in the console";e(function(e){return{type:"app/SET-ERROR",error:e}}(r)),e(L("failed"))}))})),n.resetForm())}});return t?Object(w.jsx)(d.a,{to:"/login"}):Object(w.jsxs)("div",{className:M.a.container,children:[Object(w.jsxs)("div",{className:M.a.form,children:[Object(w.jsxs)("div",{className:M.a.content,children:[Object(w.jsx)("h1",{className:o.a.h1,children:"it-incubator"}),Object(w.jsx)("h2",{children:"Sign Up"})]}),Object(w.jsxs)("form",{className:M.a.content,onSubmit:n.handleSubmit,autoComplete:"off",children:[Object(w.jsx)("div",{className:o.a.error,children:e}),Object(w.jsxs)("div",{children:[Object(w.jsx)(E,Object(j.a)({type:"email",placeholder:"Email"},n.getFieldProps("email"))),n.touched.email&&n.errors.email&&Object(w.jsx)("div",{className:o.a.error,children:n.errors.email})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(E,Object(j.a)({type:"password",placeholder:"Password"},n.getFieldProps("password"))),n.touched.password&&n.errors.password&&Object(w.jsx)("div",{className:o.a.error,children:n.errors.password})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(E,Object(j.a)({type:"password",placeholder:"Confirm password"},n.getFieldProps("confirmation"))),n.touched.confirmation&&n.errors.confirmation&&Object(w.jsx)("div",{className:o.a.error,children:n.errors.confirmation})]}),Object(w.jsxs)("div",{className:M.a.btnContainer,children:[Object(w.jsx)(l.b,{to:"/login",children:Object(w.jsx)("button",{children:"Cancel"})}),Object(w.jsx)("button",{type:"submit",children:"Register"})]})]})]}),Object(w.jsx)(K,{})]})},q=function(){return Object(w.jsx)("div",{style:{fontSize:"50px",textAlign:"center"},children:"Profile"})},U=r(15),H=r.n(U),W={errorMessage:null,isRecovered:!1},Y=s.a.memo((function(){var e=Object(P.c)((function(e){return e.auth.isLoggedIn})),t=Object(P.c)((function(e){return e.recoveryPassword.isRecovered})),r=Object(P.b)(),n=Object(p.a)({initialValues:{email:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e){var t;r((t=e.email,function(){var e=Object(S.a)(v.a.mark((function e(r){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(t);case 3:r({type:"DIMA/TEAM-PROJECT/SET-STATUS-SENDING-MESSAGE",isRecovered:!0}),e.next=11;break;case 6:e.prev=6,e.t0=e.catch(0),n=e.t0.response?e.t0.response.data.error:"Restore password failed: ".concat(e.t0.message,"."),r({type:"SET-ERROR-MESSAGE",errorMessage:n}),alert(n);case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}}),e,null,[[0,6,11,13]])})));return function(t){return e.apply(this,arguments)}}())),n.resetForm()}});return t?Object(w.jsx)(d.a,{to:"/password-change"}):e?Object(w.jsx)(d.a,{to:"/"}):Object(w.jsx)("div",{className:H.a.container,children:Object(w.jsx)("form",{onSubmit:n.handleSubmit,children:Object(w.jsxs)("div",{className:H.a.block,children:[Object(w.jsx)(_,{title:"It-Incubator"}),Object(w.jsx)("h4",{children:"Forgot your password?"}),Object(w.jsxs)("div",{className:H.a.inputWrap,children:[Object(w.jsx)(E,Object(j.a)(Object(j.a)({type:"email",placeholder:"Email"},n.getFieldProps("email")),{},{autoComplete:"off"})),n.touched.email&&n.errors.email?Object(w.jsx)("div",{children:n.errors.email}):Object(w.jsx)("div",{children:"\xa0"})]}),Object(w.jsx)("p",{className:H.a.instruction,children:"Enter your email address and we will send you further instructions"}),Object(w.jsx)(R,{type:"submit",className:H.a.button,children:"Send Instructions"}),Object(w.jsxs)("div",{className:H.a.blokLink,children:[Object(w.jsx)("span",{className:H.a.question,children:"Did you remember your password?"}),Object(w.jsx)(l.b,{to:"/login",children:Object(w.jsx)("span",{className:H.a.link,children:"Try logging in"})})]})]})})})})),_=s.a.memo((function(e){return Object(w.jsx)("h2",{className:H.a.titleT,children:e.title})})),V=r(27),X=r.n(V),$=r.p+"static/media/email.e39fba67.svg",ee=s.a.memo((function(){return Object(P.c)((function(e){return e.auth.isLoggedIn}))?Object(w.jsx)(d.a,{to:"/"}):Object(w.jsx)("div",{className:X.a.checkEmailBlock,children:Object(w.jsxs)("div",{className:X.a.checkEmail,children:[Object(w.jsx)("div",{className:X.a.iconBg,children:Object(w.jsx)("img",{src:$})}),Object(w.jsx)("h2",{className:X.a.caption,children:"Check Email"}),Object(w.jsx)("p",{className:X.a.text,children:"We've sent an Email with instructions to example to dimla.carpov2013@yandex.ru"})]})})})),te=function(){return Object(w.jsx)("div",{style:{fontSize:"50px",textAlign:"center"},children:"Error 404 T___T"})},re=r(54),ne=r(29),se=r.n(ne),ae={isSuccess:!1},ce=s.a.memo((function(){var e=Object(P.c)((function(e){return e.updatePasswordReducer.isSuccess})),t=Object(P.c)((function(e){return e.auth.isLoggedIn})),r=Object(P.b)(),s=Object(n.useState)(!1),a=Object(re.a)(s,2),c=a[0],i=(a[1],Object(d.g)().token),o=Object(p.a)({initialValues:{newPassword:""},validate:function(e){var t={};return e.newPassword?e.newPassword.length<6&&(t.newPassword="Must be at least 6 characters"):t.newPassword="Required",t},onSubmit:function(e){r(function(e,t){return function(){var r=Object(S.a)(v.a.mark((function r(n){var s;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,B(e,t);case 3:r.sent,n({type:"DIMA/TEAM-PROJECT/IS-SUCCESS",isSuccess:!0}),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),s=r.t0.res?r.t0.res.data.error:"Update password failed: ".concat(r.t0.message,"."),alert(s);case 11:return r.prev=11,r.finish(11);case 13:case"end":return r.stop()}}),r,null,[[0,7,11,13]])})));return function(e){return r.apply(this,arguments)}}()}(e.newPassword,i)),o.resetForm()}});return e?Object(w.jsx)(d.a,{to:"/login"}):t?Object(w.jsx)(d.a,{to:"/"}):Object(w.jsx)("div",{className:se.a.container,children:Object(w.jsx)("form",{onSubmit:o.handleSubmit,children:Object(w.jsxs)("div",{className:se.a.block,children:[Object(w.jsx)(_,{title:"It-Incubator"}),Object(w.jsx)("h2",{children:"Create new password?"}),Object(w.jsx)(E,Object(j.a)({type:c?"text":"password"},o.getFieldProps("newPassword"))),o.touched.newPassword&&o.errors.newPassword?Object(w.jsx)("div",{children:o.errors.newPassword}):Object(w.jsx)("div",{children:"\xa0"}),Object(w.jsx)("p",{className:se.a.instruction,children:"Create new password and we will send you further instructions to email"}),Object(w.jsx)(R,{type:"submit",className:se.a.button,children:"Create new password"})]})})})})),ie={LOGIN:"/login",PROFILE:"/profile",PASSWORD_CHANGE:"/password-change",SIGN_UP:"/sign-up",PASSWORD_RECOVERY:"/password-recovery",ERROR_404:"/404",UPDATE_PASSWORD:"/updatePassword/:token"},oe=function(){return Object(w.jsx)("div",{children:Object(w.jsxs)(d.d,{children:[Object(w.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(w.jsx)(d.a,{to:"/"})}}),Object(w.jsx)(d.b,{path:ie.LOGIN,render:function(){return Object(w.jsx)(z,{})}}),Object(w.jsx)(d.b,{path:ie.SIGN_UP,render:function(){return Object(w.jsx)(J,{})}}),Object(w.jsx)(d.b,{path:ie.PROFILE,render:function(){return Object(w.jsx)(q,{})}}),Object(w.jsx)(d.b,{path:ie.PASSWORD_RECOVERY,render:function(){return Object(w.jsx)(Y,{})}}),Object(w.jsx)(d.b,{path:ie.PASSWORD_CHANGE,render:function(){return Object(w.jsx)(ee,{})}}),Object(w.jsx)(d.b,{path:ie.ERROR_404,render:function(){return Object(w.jsx)(te,{})}}),Object(w.jsx)(d.b,{path:ie.UPDATE_PASSWORD,render:function(){return Object(w.jsx)(ce,{})}}),Object(w.jsx)(d.a,{from:"*",to:"/404"})]})})},le=r(40),de=r.n(le);var je=function(){return Object(w.jsx)("div",{className:de.a.containerHeader,children:Object(w.jsxs)("div",{className:de.a.header,children:[Object(w.jsx)(l.b,{to:ie.SIGN_UP,children:"sign Up"}),Object(w.jsx)(l.b,{to:ie.LOGIN,children:"login"}),Object(w.jsx)(l.b,{to:ie.PROFILE,children:"profile"}),Object(w.jsx)(l.b,{to:ie.PASSWORD_RECOVERY,children:"recovery"})]})})};var ue=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(l.a,{basename:"/team-project",children:[Object(w.jsx)(je,{}),Object(w.jsx)(oe,{}),Object(w.jsx)(K,{})]})})},Ae=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,85)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),n(e),s(e),a(e),c(e)}))},be=r(34),Oe=r(53),he=Object(be.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:t.value});default:return e}},recoveryPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-ERROR-MESSAGE":return Object(j.a)(Object(j.a)({},e),{},{errorMessage:t.errorMessage});case"DIMA/TEAM-PROJECT/SET-STATUS-SENDING-MESSAGE":return Object(j.a)(Object(j.a)({},e),{},{isRecovered:t.isRecovered});default:return e}},updatePasswordReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIMA/TEAM-PROJECT/IS-SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{isSuccess:t.isSuccess});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET-STATUS":return Object(j.a)(Object(j.a)({},e),{},{status:t.status});case"app/SET-ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:t.error});case"app/SET-INITIALIZED":return Object(j.a)(Object(j.a)({},e),{},{isInitialized:t.isInitialized});default:return Object(j.a)({},e)}},registation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"registration/REGISTER":return Object(j.a)(Object(j.a)({},e),{},{isRegistered:t.isRegistered});default:return Object(j.a)({},e)}}}),me=Object(be.c)(he,Object(be.a)(Oe.a));window.store=me,c.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(P.a,{store:me,children:Object(w.jsx)(ue,{})})}),document.getElementById("root")),Ae()}},[[84,1,2]]]);
//# sourceMappingURL=main.501b7235.chunk.js.map