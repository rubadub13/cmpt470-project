(this["webpackJsonpcmpt470-project"]=this["webpackJsonpcmpt470-project"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},60:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),r=n(14),c=n.n(r),l=(n(46),n(16)),o=n(8),j=n(9),d=n(11),h=n(10),b=n(39),u=n(2),p=(n(47),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{class:"active",href:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"SignIn",children:"Sign-in"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"Register",on:!0,children:"Register"})})]}),Object(s.jsx)("h1",{children:"This is the Main Page Before loging in"})]})}}]),n}(a.Component)),O=(n(48),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onNameChange=function(e){s.setState({name:e.target.value})},s.onEmailChange=function(e){s.setState({email:e.target.value})},s.onPasswordChange=function(e){s.setState({password:e.target.value})},s.onDoBChange=function(e){s.setState({dob:e.target.value})},s.onCityChange=function(e){s.setState({city:e.target.value})},s.onSubmitRegister=function(){fetch("/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s.state.name,email:s.state.email,password:s.state.password,dob:s.state.dob,city:s.state.city})}).then((function(e){return e.json()})).then((function(e){"Email is not available."===e?s.setState({validateEmail:!1}):(s.props.UserInfo(e),s.props.history.push("/Signin"))}))},s.onKeyPressedRegister=function(e){"Enter"===e.key&&s.onSubmitRegister()},s.state={name:"",email:"",password:"",dob:"",city:"",validateEmail:!0},s}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.validateEmail;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"SignIn",children:"Sign-in"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{class:"active",href:"Register",children:"Register"})})]}),Object(s.jsxs)("div",{className:"text",children:[Object(s.jsx)("h1",{children:"Did you know?"}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Coronavirus disease (COVID-19)"})," is an infectious disease caused by a newly discovered coronavirus. "]}),Object(s.jsx)("p",{children:"Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness."}),Object(s.jsxs)("details",{children:[Object(s.jsx)("summary",{children:"Read more!!!"}),Object(s.jsx)("a",{href:"https://www.who.int/health-topics/coronavirus#tab=tab_1",children:"WHO CoronaVirus Information"})]})]}),Object(s.jsx)("div",{class:"formPopup",id:"usersForm",children:Object(s.jsxs)("div",{class:"addUserForm",children:[Object(s.jsx)("h1",{class:"label_title",children:"Register"}),Object(s.jsx)("label",{children:"Full Name : "}),Object(s.jsx)("input",{className:"ma1",id:"fn",type:"text",name:"fullname",placeholder:"eg: Anderson Parker",onChange:this.onNameChange}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"UserName : "}),Object(s.jsx)("input",{className:"ma1",id:"email",type:"email",name:"email",size:"50",required:!0,placeholder:"eg: example@email.com",onChange:this.onEmailChange}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"password: "}),Object(s.jsx)("input",{className:"ma1",id:"password",type:"password",name:"email",size:"50",required:!0,placeholder:"eg: bubbleteaislife",onfocus:"this.placeholder = ''",onChange:this.onPasswordChange}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Date of Birth: "}),Object(s.jsx)("input",{className:"ma1",id:"dob",type:"date",name:"dob",size:"50",required:!0,onChange:this.onDoBChange}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"City: "}),Object(s.jsx)("input",{className:"ma1",id:"city",type:"text",name:"city",size:"50",list:"cities",required:!0,onChange:this.onCityChange}),Object(s.jsxs)("datalist",{id:"cities",children:[Object(s.jsx)("option",{children:"Vancouver"}),Object(s.jsx)("option",{children:"Victoria"}),Object(s.jsx)("option",{children:"Edmonton"}),Object(s.jsx)("option",{children:"Calgary"}),Object(s.jsx)("option",{children:"Regina"}),Object(s.jsx)("option",{children:"Saskatoon"}),Object(s.jsx)("option",{children:"Winnipeg"}),Object(s.jsx)("option",{children:"Toronto"}),Object(s.jsx)("option",{children:"Mississauga"}),Object(s.jsx)("option",{children:"Ottawa"}),Object(s.jsx)("option",{children:"Montreal"})]}),Object(s.jsx)("br",{}),e?Object(s.jsx)("p",{className:"ma1"}):Object(s.jsx)("p",{className:"red ma1",children:"Email is not avaiable to use. Please use different email!"}),Object(s.jsx)("input",{className:"ma1",onClick:this.onSubmitRegister,type:"submit",value:"Register"}),Object(s.jsx)("a",{href:"SignIn",className:"ma1 secret dim pointer f6 dib br2",on:!0,children:"Return to Sign-in"})]})})]})}}]),n}(i.a.Component)),x=n(22),m=n(17),f=(n(49),n(35)),y=n.n(f),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).SeePercent=function(e){s.setState({total:parseInt(s.state.fever)+parseInt(s.state.cough)+parseInt(s.state.tired)+parseInt(s.state.sore)+parseInt(s.state.diarrhoea)+parseInt(s.state.aches)+parseInt(s.state.pink_eye)+parseInt(s.state.headache)+parseInt(s.state.no_taste)+parseInt(s.state.no_smell)+parseInt(s.state.rash)+parseInt(s.state.breathing)+parseInt(s.state.chest_pain)+parseInt(s.state.movement)},(function(){this.setState({total:parseInt(this.state.total)/23*100})}))},s.state={total:"0",fever:"0",cough:"0",tired:"0",sore:"0",diarrhoea:"0",aches:"0",pink_eye:"0",headache:"0",no_taste:"0",no_smell:"0",rash:"0",breathing:"0",chest_pain:"0",movement:"0",showModal:!1},s.handleChange=s.handleChange.bind(Object(m.a)(s)),s.handleOpenModal=s.handleOpenModal.bind(Object(m.a)(s)),s.handleCloseModal=s.handleCloseModal.bind(Object(m.a)(s)),s}return Object(j.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,parseInt(e.target.value)))}},{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1,fever:"0",cough:"0",tired:"0",sore:"0",diarrhoea:"0",aches:"0",pink_eye:"0",headache:"0",no_taste:"0",no_smell:"0",rash:"0",breathing:"0",chest_pain:"0",movement:"0",total:0})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{class:"active",href:"/UserPage",children:"UserPage"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/Map",children:"Map"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"log-off"})})]}),Object(s.jsxs)("div",{class:"page_body",children:[Object(s.jsx)("h1",{children:"Check if you have COVID"}),Object(s.jsx)("button",{onClick:this.handleOpenModal,children:"Open Form"}),Object(s.jsxs)(y.a,{isOpen:this.state.showModal,contentLabel:"diag form",className:"Modal",children:[Object(s.jsx)("button",{class:"close_form",onClick:this.handleCloseModal,children:"Cancel"}),Object(s.jsx)("button",{class:"check_per",onClick:this.SeePercent,children:"Check"}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you have a fever"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"fever_yes",name:"fever",value:"2"}),Object(s.jsx)("label",{for:"fever_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"fever_no",name:"fever",value:"0"}),Object(s.jsx)("label",{for:"fever_no",children:"No"}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you have a dry cough"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"cough_yes",name:"cough",value:"2"}),Object(s.jsx)("label",{for:"cough_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"cough_no",name:"cough",value:"0"}),Object(s.jsx)("label",{for:"cough_no",children:"No"}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you feel tired all the time"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"tired_yes",name:"tired",value:"2"}),Object(s.jsx)("label",{for:"tired_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"tired_no",name:"tired",value:"0"}),Object(s.jsx)("label",{for:"tired_no",children:"No"}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you have sore throat"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"sore_yes",name:"sore",value:"1"}),Object(s.jsx)("label",{for:"sore_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"sore_no",name:"sore",value:"0"}),Object(s.jsx)("label",{for:"sore_no",children:"No"}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you have diarrhoea"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"diarrhoea_yes",name:"diarrhoea",value:"1"}),Object(s.jsx)("label",{for:"diarrhoea_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"diarrhoea_no",name:"diarrhoea",value:"0"}),Object(s.jsx)("label",{for:"diarrhoea_no",children:"No"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you have aches and pain"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"aches_yes",name:"aches",value:"1"}),Object(s.jsx)("label",{for:"aches_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"aches_no",name:"aches",value:"0"}),Object(s.jsx)("label",{for:"aches_no",children:"No"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you have conjunctivitis (pink_eye)"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"pink_eye_yes",name:"pink_eye",value:"1"}),Object(s.jsx)("label",{for:"pink_eye_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"pink_eye_no",name:"pink_eye",value:"0"}),Object(s.jsx)("label",{for:"pink_eye_no",children:"No"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you have headache"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"headache_yes",name:"headache",value:"1"}),Object(s.jsx)("label",{for:"headache_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"headache_no",name:"headache",value:"0"}),Object(s.jsx)("label",{for:"headache_no",children:"No"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you have loss of taste"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"no_taste_yes",name:"no_taste",value:"1"}),Object(s.jsx)("label",{for:"no_taste_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"no_taste_no",name:"no_taste",value:"0"}),Object(s.jsx)("label",{for:"no_taste_no",children:"No"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you have loss of smell"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"no_smell_yes",name:"no_smell",value:"1"}),Object(s.jsx)("label",{for:"no_smell_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"no_smell_no",name:"no_smell",value:"0"}),Object(s.jsx)("label",{for:"no_smell_no",children:"No"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you have a rash on skin, or discolouration of fingers or toes"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"rash_yes",name:"rash",value:"1"}),Object(s.jsx)("label",{for:"rash_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"no_smell_no",name:"rash",value:"0"}),Object(s.jsx)("label",{for:"rash_no",children:"No"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you have a difficulty in breathing or shortness of breath"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"breathing_yes",name:"breathing",value:"3"}),Object(s.jsx)("label",{for:"breathing_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"breathing_no",name:"breathing",value:"0"}),Object(s.jsx)("label",{for:"breathing_no",children:"No"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you have a chest pain or pressure"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"chest_pain_yes",name:"chest_pain",value:"3"}),Object(s.jsx)("label",{for:"chest_pain_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"breathing_no",name:"chest_pain",value:"0"}),Object(s.jsx)("label",{for:"chest_pain_no",children:"No"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(s.jsx)("h3",{children:"Do you have a loss of speech or movement"}),Object(s.jsx)("input",{class:"input_yes",type:"radio",id:"movement_yes",name:"movement",value:"3"}),Object(s.jsx)("label",{for:"movement_yes",children:"Yes"}),Object(s.jsx)("input",{class:"input_no",type:"radio",id:"movement_no",name:"movement",value:"0"}),Object(s.jsx)("label",{for:"movement_no",children:"No"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("h2",{class:"show_per",children:["The percentage of you having COVID-19 is ",this.state.total]})]})]})]})}}]),n}(i.a.Component),v=(n(60),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onEmailChange=function(e){s.setState({signInEmail:e.target.value})},s.onPasswordChange=function(e){s.setState({signInPassword:e.target.value})},s.onSubmitSignin=function(){fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.state.signInEmail,password:s.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){"Wrong credential"===e?s.setState({isCorrect:!1}):(s.props.CorrectSignIn(!0),s.props.UserInfo(e),s.props.history.push("/UserPage"))}))},s.onKeyPressedSignin=function(e){"Enter"===e.key&&s.onSubmitSignin()},s.state={signInEmail:"",signInPassword:"",isCorrect:!0},s}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.isCorrect;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{class:"active",href:"SignIn",children:"Sign-in"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"Register",on:!0,children:"Register"})})]}),Object(s.jsx)("div",{children:Object(s.jsx)("div",{class:"formPopup",id:"usersForm",children:Object(s.jsxs)("div",{class:"addUserForm",children:[Object(s.jsx)("h1",{class:"label_title",children:"Sign In"}),Object(s.jsx)("label",{children:"Username: "}),Object(s.jsx)("input",{className:"ma1",id:"email",type:"email",name:"email",size:"50",required:!0,placeholder:"eg: example@email.com",onChange:this.onEmailChange}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Password: "}),Object(s.jsx)("input",{className:"ma",id:"password",type:"password",name:"email",size:"50",required:!0,placeholder:"eg: bubbleteaislife",onfocus:"this.placeholder = ''",onChange:this.onPasswordChange}),Object(s.jsx)("br",{}),e?Object(s.jsx)("p",{className:"ma1"}):Object(s.jsx)("p",{className:"red ma1",children:"Wrong username or password."}),Object(s.jsx)("input",{className:"ma1",onClick:this.onSubmitSignin,type:"submit",value:"Sign in"}),Object(s.jsx)("a",{href:"Register",className:"pointer f6 dib",on:!0,children:"Forgot your password?"})]})})})]})}}]),n}(a.Component)),_=n(19),C=n(21),S=n(36),w=n.n(S),k=n(27),I=n.n(k),T=n(37),N=n(20),M=n(18);n(63),n(64);function P(e){var t=e.panTo,n=e.handleMarkers,a=Object(N.a)({requestOptions:{location:{lat:function(){return 49.28273},lng:function(){return-123.120735}},radius:2e5,types:["establishment"]}}),i=a.ready,r=a.value,c=a.suggestions,l=c.status,o=c.data,j=a.setValue,d=a.clearSuggestions,h=function(){var e=Object(T.a)(I.a.mark((function e(s){var a,i,r,c,l,o,h,b,u,p,O;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(s,!1),d(),e.prev=2,e.next=5,Object(N.c)({address:s});case 5:return a=e.sent,e.next=8,Object(N.d)(a[0]);case 8:return i=e.sent,r=i.lat,c=i.lng,e.next=13,Object(N.b)(a[0].place_id);case 13:l=e.sent,o=l.name,h=l.types,b=l.url,u=l.formatted_address,p=l.opening_hours,O=p?p.isOpen():null,t({lat:r,lng:c}),n({lat:r,lng:c,name:o,types:h,url:b,formatted_address:u,open_now:O}),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(2),console.log("error: ",e.t0);case 27:case"end":return e.stop()}}),e,null,[[2,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)("div",{className:"search",children:Object(s.jsxs)(M.a,{onSelect:h,children:[Object(s.jsx)(M.b,{value:r,disabled:!i,onChange:function(e){j(e.target.value)},placeholder:"Search..."}),Object(s.jsx)(M.e,{children:Object(s.jsx)(M.c,{children:"OK"===l&&o.map((function(e){var t=e.id,n=e.description;return Object(s.jsx)(M.d,{value:n},t)}))})})]})})}n(65);var D=["All employees are wearing face coverings","There are signs and markers for social distancing throughout the establishment","Limited number of customers allowed","Face coverings are mandatory for all customers","Hand sanitizer is available throughout the establishment","No-touch payment options are available"];function R(){return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{children:[D.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"checkbox",id:e,value:e}),Object(s.jsx)("label",{htmlFor:e,children:e})]},e)})),Object(s.jsx)("button",{className:"submitButton",children:"Submit"})]})})}n(66);function E(e){var t=e.selected,n=i.a.useState(!1),a=Object(_.a)(n,2),r=a[0],c=a[1],l=t.name,o=t.type,j=t.url,d=t.formatted_address,h=t.open_now,b=function(e){c(e)};return Object(s.jsxs)("div",{className:"infoWindow",children:[Object(s.jsx)("h1",{children:l}),Object(s.jsx)("p",{className:"type",children:o.charAt(0).toUpperCase()+o.slice(1)}),h?h?Object(s.jsx)("p",{className:"open",children:"Open"}):Object(s.jsx)("p",{className:"close",children:"Closed"}):null,Object(s.jsx)("p",{children:d}),Object(s.jsx)("a",{href:j,target:"_blank",rel:"noreferrer",children:Object(s.jsx)("button",{children:"Google Maps"})}),Object(s.jsx)("button",{className:"submitSafetyRating",onClick:function(){return b(!0)},children:"Submit Safety Rating"}),r&&Object(s.jsxs)("div",{className:"form",children:[Object(s.jsx)(R,{handleSafetyForm:b}),Object(s.jsx)("button",{className:"closeForm",onClick:function(){return b(!1)},children:"Close"})]})]})}n(67);function F(e){var t=e.panTo;return Object(s.jsx)("div",{className:"locate",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){t({lat:e.coords.latitude,lng:e.coords.longitude})}),(function(){return null}))},children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(s.jsx)("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"})})})}var U=["places"],Y={width:"100vw",height:"100vh"},z={lat:49.28273,lng:-123.120735},L={styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],disableDefaultUI:!0,zoomControl:!0};function q(){var e=i.a.useRef(),t=i.a.useState(null),n=Object(_.a)(t,2),a=n[0],r=n[1],c=i.a.useState(null),l=Object(_.a)(c,2),o=l[0],j=l[1],d=i.a.useCallback((function(t){e.current=t}),[]),h=i.a.useCallback((function(t){var n=t.lat,s=t.lng;e.current.panTo({lat:n,lng:s}),e.current.setZoom(16)}),[]),b=Object(C.d)({googleMapsApiKey:"AIzaSyC5c_gIqeFjNMQ5L-5Hs6gQGjoITEEwlxA",libraries:U}),u=b.isLoaded;return b.loadError?"Error Loading Map":u?Object(s.jsxs)("div",{children:[Object(s.jsx)(P,{panTo:h,handleMarkers:function(e){var t=e.lat,n=e.lng,s=e.name,a=e.types,i=e.url,c=e.formatted_address,l=e.open_now;r({lat:t,lng:n,name:s,type:a[0],url:i,formatted_address:c,open_now:l})}}),Object(s.jsx)(F,{panTo:h}),Object(s.jsxs)(C.a,{mapContainerStyle:Y,zoom:8,center:z,options:L,onLoad:d,children:[!w.a.isEmpty(a)&&Object(s.jsx)(C.c,{position:{lat:a.lat,lng:a.lng},onClick:function(){j(a)}},"".concat(a.lat,"-").concat(a.lng)),o?Object(s.jsx)(C.b,{position:{lat:o.lat,lng:o.lng},onCloseClick:function(){j(null)},children:Object(s.jsx)(E,{selected:o})}):null]})]}):"Loading Map"}document.title="Covid-19 Pandemic";var B=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).UserInfo=function(t){e.setState({user:{name:t.name,email:t.email,dob:t.dob,city:t.city,joined:t.joined}})},e.CorrectSignIn=function(t){e.setState({isSignIn:t})},e.state={route:"main",isSignIn:!1,user:{name:"",email:"",dob:"",city:"",joined:""}},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isSignIn;return Object(s.jsx)(b.a,{children:Object(s.jsx)(u.c,{children:!1===t?Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(u.a,{exact:!0,path:"/",component:p}),Object(s.jsx)(u.a,{exact:!0,path:"/Register",render:function(t){return Object(s.jsx)(O,Object(l.a)(Object(l.a)({},t),{},{UserInfo:e.UserInfo}))}}),Object(s.jsx)(u.a,{exact:!0,path:"/SignIn",render:function(t){return Object(s.jsx)(v,Object(l.a)(Object(l.a)({},t),{},{UserInfo:e.UserInfo,CorrectSignIn:e.CorrectSignIn}))}})]})}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/UserPage",render:function(e){return Object(s.jsx)(g,Object(l.a)({},e))}}),Object(s.jsx)(u.a,{exact:!0,path:"/Map",render:function(e){return Object(s.jsx)(q,Object(l.a)({},e))}})]})})})}}]),n}(a.Component),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};n(70);c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(B,{})}),document.getElementById("root")),V()}},[[71,1,2]]]);
//# sourceMappingURL=main.1752b3f4.chunk.js.map