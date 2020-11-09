(this["webpackJsonpcmpt470-project"]=this["webpackJsonpcmpt470-project"]||[]).push([[0],{48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},74:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),c=s.n(a),i=s(14),r=s.n(i),l=(s(48),s(15)),o=s(7),j=s(8),h=s(10),d=s(9),b=s(41),u=s(2),p=(s(49),function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("ul",{class:"nav",children:[Object(n.jsx)("li",{class:"navHome",children:Object(n.jsx)("a",{class:"active",href:"/",children:"Home"})}),Object(n.jsx)("li",{class:"navStat",children:Object(n.jsx)("a",{href:"Stats",children:"Stats"})}),Object(n.jsx)("li",{class:"navMap",children:Object(n.jsx)("a",{href:"Map",children:"Map"})}),Object(n.jsx)("li",{class:"navReg",children:Object(n.jsx)("a",{href:"Register",on:!0,children:"Register"})}),Object(n.jsx)("li",{class:"navSign",children:Object(n.jsx)("a",{href:"SignIn",children:"Sign-in"})})]}),Object(n.jsxs)("div",{class:"bodyMain",children:[Object(n.jsx)("h1",{children:"Did you know?"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Coronavirus disease (COVID-19)"})," is an infectious disease caused by a newly discovered coronavirus. "]}),Object(n.jsx)("p",{children:"Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness."}),Object(n.jsxs)("details",{children:[Object(n.jsx)("summary",{children:"Read more!!!"}),Object(n.jsx)("a",{href:"https://www.who.int/health-topics/coronavirus#tab=tab_1",children:"WHO CoronaVirus Information"})]})]})]})}}]),s}(a.Component)),O=(s(50),function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onDoBChange=function(e){n.setState({dob:e.target.value})},n.onCityChange=function(e){n.setState({city:e.target.value})},n.onSubmitRegister=function(){fetch("/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,email:n.state.email,password:n.state.password,dob:n.state.dob,city:n.state.city})}).then((function(e){return e.json()})).then((function(e){"Email is not available."===e?n.setState({validateEmail:!1}):(n.props.UserInfo(e),n.props.history.push("/Signin"))}))},n.onKeyPressedRegister=function(e){"Enter"===e.key&&n.onSubmitRegister()},n.state={name:"",email:"",password:"",dob:"",city:"",validateEmail:!0},n}return Object(j.a)(s,[{key:"render",value:function(){var e=this.state.validateEmail;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("ul",{class:"nav",children:[Object(n.jsx)("li",{class:"navHome",children:Object(n.jsx)("a",{href:"/",children:"Home"})}),Object(n.jsx)("li",{class:"navStat",children:Object(n.jsx)("a",{href:"Stats",children:"Stats"})}),Object(n.jsx)("li",{class:"navMap",children:Object(n.jsx)("a",{href:"Map",children:"Map"})}),Object(n.jsx)("li",{class:"navReg",children:Object(n.jsx)("a",{class:"active",href:"Register",on:!0,children:"Register"})}),Object(n.jsx)("li",{class:"navSign",children:Object(n.jsx)("a",{href:"SignIn",children:"Sign-in"})})]}),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{class:"regisUserForm",children:[Object(n.jsx)("h1",{class:"title",children:"Register"}),Object(n.jsx)("label",{children:"Full Name : "}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{class:"regisInput",id:"fn",type:"text",name:"fullname",placeholder:"eg: Anderson Parker",onChange:this.onNameChange}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"UserName : "}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{class:"regisInput",id:"email",type:"email",name:"email",size:"50",required:!0,placeholder:"eg: example@email.com",onChange:this.onEmailChange}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"password: "}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{class:"regisInput",id:"password",type:"password",name:"email",size:"50",required:!0,placeholder:"eg: bubbleteaislife",onfocus:"this.placeholder = ''",onChange:this.onPasswordChange}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Date of Birth: "}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{class:"regisInputDate",id:"dob",type:"date",name:"dob",size:"50",required:!0,onChange:this.onDoBChange}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"City: "}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{class:"regisInput",id:"city",type:"text",name:"city",size:"50",list:"cities",required:!0,onChange:this.onCityChange}),Object(n.jsxs)("datalist",{id:"cities",children:[Object(n.jsx)("option",{children:"Vancouver"}),Object(n.jsx)("option",{children:"Victoria"}),Object(n.jsx)("option",{children:"Edmonton"}),Object(n.jsx)("option",{children:"Calgary"}),Object(n.jsx)("option",{children:"Regina"}),Object(n.jsx)("option",{children:"Saskatoon"}),Object(n.jsx)("option",{children:"Winnipeg"}),Object(n.jsx)("option",{children:"Toronto"}),Object(n.jsx)("option",{children:"Mississauga"}),Object(n.jsx)("option",{children:"Ottawa"}),Object(n.jsx)("option",{children:"Montreal"})]}),Object(n.jsx)("br",{}),e?Object(n.jsx)("p",{className:"ma1"}):Object(n.jsx)("p",{class:"regisWrong",children:"Email is not avaiable to use. Please use different email!"}),Object(n.jsx)("input",{class:"regisSubmit",onClick:this.onSubmitRegister,type:"submit",value:"Register"}),Object(n.jsxs)("p",{children:["Already have an account? ",Object(n.jsx)("a",{href:"SignIn",children:"Sign in"}),"."]})]})})]})}}]),s}(c.a.Component)),x=s(23),m=s(17),f=(s(51),s(37)),g=s.n(f),y=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).SeePercent=function(e){n.setState({total:parseInt(n.state.fever)+parseInt(n.state.cough)+parseInt(n.state.tired)+parseInt(n.state.sore)+parseInt(n.state.diarrhoea)+parseInt(n.state.aches)+parseInt(n.state.pink_eye)+parseInt(n.state.headache)+parseInt(n.state.no_taste)+parseInt(n.state.no_smell)+parseInt(n.state.rash)+parseInt(n.state.breathing)+parseInt(n.state.chest_pain)+parseInt(n.state.movement)},(function(){this.setState({total:parseInt(this.state.total)/23*100})}))},n.state={total:"0",fever:"0",cough:"0",tired:"0",sore:"0",diarrhoea:"0",aches:"0",pink_eye:"0",headache:"0",no_taste:"0",no_smell:"0",rash:"0",breathing:"0",chest_pain:"0",movement:"0",showModal:!1},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleOpenModal=n.handleOpenModal.bind(Object(m.a)(n)),n.handleCloseModal=n.handleCloseModal.bind(Object(m.a)(n)),n}return Object(j.a)(s,[{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,parseInt(e.target.value)))}},{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1,fever:"0",cough:"0",tired:"0",sore:"0",diarrhoea:"0",aches:"0",pink_eye:"0",headache:"0",no_taste:"0",no_smell:"0",rash:"0",breathing:"0",chest_pain:"0",movement:"0",total:0})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("ul",{class:"nav",children:[Object(n.jsx)("li",{class:"navUser",children:Object(n.jsx)("a",{class:"active",href:"/UserPage",children:"UserPage"})}),Object(n.jsx)("li",{class:"userLog",children:Object(n.jsx)("a",{href:"/",children:"log-off"})})]}),Object(n.jsxs)("div",{class:"page_body",children:[Object(n.jsx)("h1",{children:"Check if you have COVID"}),Object(n.jsx)("button",{onClick:this.handleOpenModal,children:"Open Form"}),Object(n.jsxs)(g.a,{isOpen:this.state.showModal,contentLabel:"diag form",className:"Modal",children:[Object(n.jsx)("button",{class:"close_form",onClick:this.handleCloseModal,children:"Cancel"}),Object(n.jsx)("button",{class:"check_per",onClick:this.SeePercent,children:"Check"}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you have a fever"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"fever_yes",name:"fever",value:"2"}),Object(n.jsx)("label",{for:"fever_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"fever_no",name:"fever",value:"0"}),Object(n.jsx)("label",{for:"fever_no",children:"No"}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you have a dry cough"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"cough_yes",name:"cough",value:"2"}),Object(n.jsx)("label",{for:"cough_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"cough_no",name:"cough",value:"0"}),Object(n.jsx)("label",{for:"cough_no",children:"No"}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you feel tired all the time"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"tired_yes",name:"tired",value:"2"}),Object(n.jsx)("label",{for:"tired_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"tired_no",name:"tired",value:"0"}),Object(n.jsx)("label",{for:"tired_no",children:"No"}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you have sore throat"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"sore_yes",name:"sore",value:"1"}),Object(n.jsx)("label",{for:"sore_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"sore_no",name:"sore",value:"0"}),Object(n.jsx)("label",{for:"sore_no",children:"No"}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you have diarrhoea"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"diarrhoea_yes",name:"diarrhoea",value:"1"}),Object(n.jsx)("label",{for:"diarrhoea_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"diarrhoea_no",name:"diarrhoea",value:"0"}),Object(n.jsx)("label",{for:"diarrhoea_no",children:"No"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you have aches and pain"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"aches_yes",name:"aches",value:"1"}),Object(n.jsx)("label",{for:"aches_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"aches_no",name:"aches",value:"0"}),Object(n.jsx)("label",{for:"aches_no",children:"No"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you have conjunctivitis (pink_eye)"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"pink_eye_yes",name:"pink_eye",value:"1"}),Object(n.jsx)("label",{for:"pink_eye_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"pink_eye_no",name:"pink_eye",value:"0"}),Object(n.jsx)("label",{for:"pink_eye_no",children:"No"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you have headache"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"headache_yes",name:"headache",value:"1"}),Object(n.jsx)("label",{for:"headache_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"headache_no",name:"headache",value:"0"}),Object(n.jsx)("label",{for:"headache_no",children:"No"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you have loss of taste"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"no_taste_yes",name:"no_taste",value:"1"}),Object(n.jsx)("label",{for:"no_taste_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"no_taste_no",name:"no_taste",value:"0"}),Object(n.jsx)("label",{for:"no_taste_no",children:"No"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you have loss of smell"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"no_smell_yes",name:"no_smell",value:"1"}),Object(n.jsx)("label",{for:"no_smell_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"no_smell_no",name:"no_smell",value:"0"}),Object(n.jsx)("label",{for:"no_smell_no",children:"No"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you have a rash on skin, or discolouration of fingers or toes"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"rash_yes",name:"rash",value:"1"}),Object(n.jsx)("label",{for:"rash_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"no_smell_no",name:"rash",value:"0"}),Object(n.jsx)("label",{for:"rash_no",children:"No"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you have a difficulty in breathing or shortness of breath"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"breathing_yes",name:"breathing",value:"3"}),Object(n.jsx)("label",{for:"breathing_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"breathing_no",name:"breathing",value:"0"}),Object(n.jsx)("label",{for:"breathing_no",children:"No"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you have a chest pain or pressure"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"chest_pain_yes",name:"chest_pain",value:"3"}),Object(n.jsx)("label",{for:"chest_pain_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"breathing_no",name:"chest_pain",value:"0"}),Object(n.jsx)("label",{for:"chest_pain_no",children:"No"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{class:"input_label",onChange:this.handleChange,children:[Object(n.jsx)("h3",{children:"Do you have a loss of speech or movement"}),Object(n.jsx)("input",{class:"input_yes",type:"radio",id:"movement_yes",name:"movement",value:"3"}),Object(n.jsx)("label",{for:"movement_yes",children:"Yes"}),Object(n.jsx)("input",{class:"input_no",type:"radio",id:"movement_no",name:"movement",value:"0"}),Object(n.jsx)("label",{for:"movement_no",children:"No"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("h2",{class:"show_per",children:["The percentage of you having COVID-19 is ",this.state.total]})]})]})]})}}]),s}(c.a.Component),v=(s(62),function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignin=function(){fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){"Wrong credential"===e?n.setState({isCorrect:!1}):(n.props.CorrectSignIn(!0),n.props.UserInfo(e),n.props.history.push("/UserPage"))}))},n.onKeyPressedSignin=function(e){"Enter"===e.key&&n.onSubmitSignin()},n.state={signInEmail:"",signInPassword:"",isCorrect:!0},n}return Object(j.a)(s,[{key:"render",value:function(){var e=this.state.isCorrect;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("ul",{class:"nav",children:[Object(n.jsx)("li",{class:"navHome",children:Object(n.jsx)("a",{href:"/",children:"Home"})}),Object(n.jsx)("li",{class:"navStat",children:Object(n.jsx)("a",{href:"Stats",children:"Stats"})}),Object(n.jsx)("li",{class:"navMap",children:Object(n.jsx)("a",{href:"Map",children:"Map"})}),Object(n.jsx)("li",{class:"navReg",children:Object(n.jsx)("a",{href:"Register",on:!0,children:"Register"})}),Object(n.jsx)("li",{class:"navSign",children:Object(n.jsx)("a",{class:"active",href:"SignIn",children:"Sign-in"})})]}),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{class:"addUserForm",children:[Object(n.jsx)("h1",{class:"label_title",children:"Sign In"}),Object(n.jsx)("label",{children:"Username: "}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{class:"signInput",id:"email",type:"email",name:"email",size:"50",required:!0,placeholder:"eg: example@email.com",onChange:this.onEmailChange}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Password: "}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{class:"signInput",id:"password",type:"password",name:"email",size:"50",required:!0,placeholder:"eg: bubbleteaislife",onfocus:"this.placeholder = ''",onChange:this.onPasswordChange}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),e?Object(n.jsx)("p",{className:"ma1"}):Object(n.jsx)("p",{class:"signWrong",children:"Wrong username or password."}),Object(n.jsx)("a",{class:"signForgot",href:"Register",children:"Forgot your password?"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{class:"signSubmit",onClick:this.onSubmitSignin,type:"submit",value:"Sign in"})]})})]})}}]),s}(a.Component)),_=s(20),C=s(22),S=s(38),w=s.n(S),I=(s(63),s(18)),k=s.n(I),T=s(24),M=s(21),N=s(19);s(65),s(66);function D(e){var t=e.panTo,s=e.handleMarkers,a=Object(M.a)({requestOptions:{location:{lat:function(){return 49.28273},lng:function(){return-123.120735}},radius:2e5,types:["establishment"]}}),c=a.ready,i=a.value,r=a.suggestions,l=r.status,o=r.data,j=a.setValue,h=a.clearSuggestions,d=function(){var e=Object(T.a)(k.a.mark((function e(n){var a,c,i,r,l,o,d,b,u,p,O;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(n,!1),h(),e.prev=2,e.next=5,Object(M.c)({address:n});case 5:return a=e.sent,e.next=8,Object(M.d)(a[0]);case 8:return c=e.sent,i=c.lat,r=c.lng,e.next=13,Object(M.b)(a[0].place_id);case 13:l=e.sent,o=l.name,d=l.types,b=l.url,u=l.formatted_address,p=l.opening_hours,O=p?p.isOpen():null,t({lat:i,lng:r}),s({lat:i,lng:r,name:o,types:d,url:b,formatted_address:u,open_now:O}),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(2),console.log("error: ",e.t0);case 27:case"end":return e.stop()}}),e,null,[[2,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"search",children:Object(n.jsxs)(N.a,{onSelect:d,children:[Object(n.jsx)(N.b,{value:i,disabled:!c,onChange:function(e){j(e.target.value)},placeholder:"Search..."}),Object(n.jsx)(N.e,{children:Object(n.jsx)(N.c,{children:"OK"===l&&o.map((function(e){var t=e.id,s=e.description;return Object(n.jsx)(N.d,{value:s},t)}))})})]})})}s(67);var R=["All employees are wearing face coverings","There are signs and markers for social distancing throughout the establishment","Limited number of customers allowed","Face coverings are mandatory for all customers","Hand sanitizer is available throughout the establishment","No-touch payment options are available"];function P(){return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{children:[R.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"checkbox",id:e,value:e}),Object(n.jsx)("label",{htmlFor:e,children:e})]},e)})),Object(n.jsx)("button",{className:"submitButton",children:"Submit"})]})})}s(68);function Y(e){var t=e.selected,s=c.a.useState(!1),a=Object(_.a)(s,2),i=a[0],r=a[1],l=t.name,o=t.type,j=t.url,h=t.formatted_address,d=t.open_now,b=function(e){r(e)};return Object(n.jsxs)("div",{className:"infoWindow",children:[Object(n.jsx)("h1",{children:l}),Object(n.jsx)("p",{className:"type",children:o.charAt(0).toUpperCase()+o.slice(1)}),d?d?Object(n.jsx)("p",{className:"open",children:"Open"}):Object(n.jsx)("p",{className:"close",children:"Closed"}):null,Object(n.jsx)("p",{children:h}),Object(n.jsx)("a",{href:j,target:"_blank",rel:"noreferrer",children:Object(n.jsx)("button",{children:"Google Maps"})}),Object(n.jsx)("button",{className:"submitSafetyRating",onClick:function(){return b(!0)},children:"Submit Safety Rating"}),i&&Object(n.jsxs)("div",{className:"form",children:[Object(n.jsx)(P,{handleSafetyForm:b}),Object(n.jsx)("button",{className:"closeForm",onClick:function(){return b(!1)},children:"Close"})]})]})}s(69);function E(e){var t=e.panTo;return Object(n.jsx)("div",{className:"locate",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){t({lat:e.coords.latitude,lng:e.coords.longitude})}),(function(){return null}))},children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"})})})}var U=["places"],F={width:"100vw",height:"95vh"},H={lat:49.28273,lng:-123.120735},z={styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],disableDefaultUI:!0,zoomControl:!0};function L(){var e=c.a.useRef(),t=c.a.useState(null),s=Object(_.a)(t,2),a=s[0],i=s[1],r=c.a.useState(null),l=Object(_.a)(r,2),o=l[0],j=l[1],h=c.a.useCallback((function(t){e.current=t}),[]),d=c.a.useCallback((function(t){var s=t.lat,n=t.lng;e.current.panTo({lat:s,lng:n}),e.current.setZoom(16)}),[]),b=Object(C.d)({googleMapsApiKey:"AIzaSyC5c_gIqeFjNMQ5L-5Hs6gQGjoITEEwlxA",libraries:U}),u=b.isLoaded;return b.loadError?"Error Loading Map":u?Object(n.jsxs)("div",{children:[Object(n.jsxs)("ul",{class:"nav",children:[Object(n.jsx)("li",{class:"navHome",children:Object(n.jsx)("a",{href:"/",children:"Home"})}),Object(n.jsx)("li",{class:"navStat",children:Object(n.jsx)("a",{href:"Stats",children:"Stats"})}),Object(n.jsx)("li",{class:"navMap",children:Object(n.jsx)("a",{class:"active",href:"Map",children:"Map"})}),Object(n.jsx)("li",{class:"navReg",children:Object(n.jsx)("a",{href:"Register",on:!0,children:"Register"})}),Object(n.jsx)("li",{class:"navSign",children:Object(n.jsx)("a",{href:"SignIn",children:"Sign-in"})})]}),Object(n.jsx)(D,{panTo:d,handleMarkers:function(e){var t=e.lat,s=e.lng,n=e.name,a=e.types,c=e.url,r=e.formatted_address,l=e.open_now;i({lat:t,lng:s,name:n,type:a[0],url:c,formatted_address:r,open_now:l})}}),Object(n.jsx)(E,{panTo:d}),Object(n.jsxs)(C.a,{mapContainerStyle:F,zoom:8,center:H,options:z,onLoad:h,children:[!w.a.isEmpty(a)&&Object(n.jsx)(C.c,{position:{lat:a.lat,lng:a.lng},onClick:function(){j(a)}},"".concat(a.lat,"-").concat(a.lng)),o?Object(n.jsx)(C.b,{position:{lat:o.lat,lng:o.lng},onCloseClick:function(){j(null)},children:Object(n.jsx)(Y,{selected:o})}):null]})]}):"Loading Map"}s(70);var q=s(40),B=s.n(q),V=s.p+"static/media/canada_map.ec28fb32.png",A=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={loading:!0,summary:[],date:""},n}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=Object(T.a)(k.a.mark((function e(){var t,s,n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere.herokuapp.com/","https://api.opencovid.ca/summary",e.next=4,fetch("https://cors-anywhere.herokuapp.com/https://api.opencovid.ca/summary");case 4:return t=e.sent,e.next=7,t.json();case 7:s=e.sent,n=B()(s.summary[0].date,"DD-MM-YYYY"),a=n.format("YYYY, MMM DD"),this.setState({summary:s.summary}),this.setState({date:a});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("ul",{class:"nav",children:[Object(n.jsx)("li",{class:"navHome",children:Object(n.jsx)("a",{href:"/",children:"Home"})}),Object(n.jsx)("li",{class:"navStat",children:Object(n.jsx)("a",{class:"active",href:"Stats",children:"Stats"})}),Object(n.jsx)("li",{class:"navMap",children:Object(n.jsx)("a",{href:"Map",children:"Map"})}),Object(n.jsx)("li",{class:"navReg",children:Object(n.jsx)("a",{href:"Register",on:!0,children:"Register"})}),Object(n.jsx)("li",{class:"navSign",children:Object(n.jsx)("a",{href:"SignIn",children:"Sign-in"})})]}),Object(n.jsxs)("div",{class:"statBody",children:[Object(n.jsx)("h1",{className:"Text",children:"Current Stats - Canada"}),Object(n.jsx)("h3",{className:"Text1",children:"Update @"}),Object(n.jsx)("h3",{className:"ReportDate",children:this.state.date}),Object(n.jsx)("br",{}),Object(n.jsx)("table",{children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Province"}),Object(n.jsx)("th",{children:"New Cases"}),Object(n.jsx)("th",{children:"Cumulative Cases"}),Object(n.jsx)("th",{children:"New Deaths"}),Object(n.jsx)("th",{children:"Cumulative Deaths"})]}),this.state.summary.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.province}),Object(n.jsx)("td",{children:e.cases}),Object(n.jsx)("td",{children:e.cumulative_cases}),Object(n.jsx)("td",{children:e.deaths}),Object(n.jsx)("td",{children:e.cumulative_deaths})]},t)}))]})}),Object(n.jsx)("img",{class:"statMap",src:V,alt:"Logo"})]})]})}}]),s}(c.a.Component);document.title="Covid-19 Pandemic";var W=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).UserInfo=function(t){e.setState({user:{name:t.name,email:t.email,dob:t.dob,city:t.city,joined:t.joined}})},e.CorrectSignIn=function(t){e.setState({isSignIn:t})},e.state={route:"main",isSignIn:!1,user:{name:"",email:"",dob:"",city:"",joined:""}},e}return Object(j.a)(s,[{key:"render",value:function(){var e=this,t=this.state.isSignIn;return Object(n.jsx)(b.a,{children:Object(n.jsx)(u.c,{children:!1===t?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(u.a,{exact:!0,path:"/",component:p}),Object(n.jsx)(u.a,{exact:!0,path:"/Register",render:function(t){return Object(n.jsx)(O,Object(l.a)(Object(l.a)({},t),{},{UserInfo:e.UserInfo}))}}),Object(n.jsx)(u.a,{exact:!0,path:"/SignIn",render:function(t){return Object(n.jsx)(v,Object(l.a)(Object(l.a)({},t),{},{UserInfo:e.UserInfo,CorrectSignIn:e.CorrectSignIn}))}}),Object(n.jsx)(u.a,{exact:!0,path:"/Map",render:function(e){return Object(n.jsx)(L,Object(l.a)({},e))}}),Object(n.jsx)(u.a,{exact:!0,path:"/Stats",render:function(e){return Object(n.jsx)(A,Object(l.a)({},e))}})]})}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(u.a,{exact:!0,path:"/UserPage",render:function(e){return Object(n.jsx)(y,Object(l.a)({},e))}})})})})}}]),s}(a.Component),J=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,75)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))};s(73);r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(W,{})}),document.getElementById("root")),J()}},[[74,1,2]]]);
//# sourceMappingURL=main.7e121739.chunk.js.map