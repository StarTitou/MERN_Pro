(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{416:function(e,t,a){e.exports=a(533)},421:function(e,t,a){},440:function(e,t,a){},533:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),c=a.n(i),l=(a(421),a(133)),o=a.n(l),m=a(204),s=a(10),u=a(122),E=a(17),p=a(575),d=a(339),h=a(566),g=a(338),f=a(364),b=a(370),y=a(568),v=a(263),x=a(404),j=a.n(x),k=a(92),w=a(337),O=a(565),C=a(97),S=a.n(C),D=a(277),R=a(96),N=(a(440),a(2)),T=a(12),P=a(19),M=a(564),L=a(345),I=a(268),W=a(407),z=a(191),A=a(344),B=a(67),F=a(567),G=a(541),q=(a(543),a(569),a(362),a(120)),U=a.n(q),_=a(105),J=a.n(_),V=a(399),Y=a.n(V),$=a(121),H=a.n($),X=a(400),K=a.n(X),Q=a(403),Z=a.n(Q),ee=(a(269),a(401)),te=a.n(ee),ae=a(402),ne=a.n(ae),re=a(375),ie=a.n(re),ce=a(377),le=a.n(ce),oe=a(556),me=a(217),se=a.n(me),ue=a(225);S.a.defaults.baseURL="http://localhost:5000",S.a.defaults.headers.post["Content-Type"]="application/json";var Ee=Object(w.a)((function(e){return{root:{flexGrow:1},demo:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2)}}}));var pe=function(){var e=Ee(),t=Object(n.useState)({email:"",password:""}),a=Object(E.a)(t,2),i=a[0],c=a[1],l=i.email,p=i.password,h=function(e){return c(Object(u.a)({},i,Object(s.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(m.a)(o.a.mark((function e(t){var a,n,r,i,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={email:l,password:p},e.prev=2,n=JSON.stringify(a),alert(n),e.next=7,S.a.post("/api/auth",n);case 7:r=e.sent,i=r.data.token,(c=new Date).setTime(c.getTime()+12e4),(new ue.a).set("token",i,{path:"/",expires:c}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.error(e.t0.response.data);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:e.root},r.a.createElement(oe.a,{container:!0,spacing:0},r.a.createElement(oe.a,{item:!0,xs:12,md:12},r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center"},"Nouveau")),r.a.createElement(oe.a,{item:!0,xs:12,md:12},r.a.createElement(g.a,{id:"outlined-full-width",label:"Email",style:{margin:8},placeholder:"Email",helperText:"",fullWidth:!0,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},name:"email",value:l,onChange:function(e){return h(e)}})),r.a.createElement(oe.a,{item:!0,xs:12,md:12},r.a.createElement(g.a,{id:"outlined-full-width",style:{margin:8},label:"Password",placeholder:"Password",helperText:"",fullWidth:!0,name:"password",value:p,onChange:function(e){return h(e)},margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0}})),r.a.createElement(oe.a,{item:!0,xs:12,md:12},r.a.createElement(d.a,{style:{margin:8},variant:"contained",color:"primary",className:e.button,endIcon:r.a.createElement(se.a,null),fullWidth:!0,onClick:f},"Se Connecter"))))},de={routeProps:{path:"/Dashboard",component:function(){return r.a.createElement(oe.a,{container:!0,spacing:0},r.a.createElement(oe.a,{item:!0,xs:2,md:2,lg:3},r.a.createElement(pe,null)))}},name:"Dashboard",icon:r.a.createElement(le.a,{fontSize:"large"})},he=a(385),ge=a.n(he),fe=a(135),be=a(572),ye=a(557),ve=Object(w.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,display:"flex"}}}));function xe(){var e=ve(),t=r.a.useState(0),a=Object(E.a)(t,2),n=a[0],i=a[1];return r.a.createElement(fe.a,{square:!0,className:e.root},r.a.createElement(be.a,{value:n,onChange:function(e,t){i(t)},indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(ye.a,{label:"Models"}),r.a.createElement(ye.a,{label:"Marques"}),r.a.createElement(ye.a,{label:"Categories"}),r.a.createElement(ye.a,{label:"Etats"}),r.a.createElement(ye.a,{label:"Couleurs"}),r.a.createElement(ye.a,{label:"Types"}),r.a.createElement(ye.a,{label:"Unite de Mesure"}),r.a.createElement(ye.a,{label:"Mode de Consommation"}),r.a.createElement(ye.a,{label:"Unite de Mesure"})))}var je=a(95),ke=Object(w.a)((function(e){return{root:{flexGrow:1},demo:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2)}}}));var we=Object(je.b)()((function(){var e=ke();return r.a.createElement("div",{className:e.root},r.a.createElement(oe.a,{container:!0,spacing:0},r.a.createElement(oe.a,{item:!0,xs:12,md:12},r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center"},"Nouveau")),r.a.createElement(oe.a,{item:!0,xs:12,md:12},r.a.createElement(g.a,{id:"outlined-full-width",label:"Designation en Francais",style:{margin:8},placeholder:"Designation en Francais",helperText:"",fullWidth:!0,margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0}})),r.a.createElement(oe.a,{item:!0,xs:12,md:12},r.a.createElement(g.a,{id:"outlined-full-width",style:{margin:8},placeholder:"\u0627\u0644\u062a\u0639\u064a\u064a\u0646 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629",helperText:"",fullWidth:!0,dir:"rtl",margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0}})),r.a.createElement(oe.a,{item:!0,xs:12,md:12},r.a.createElement(d.a,{style:{margin:8},variant:"contained",color:"primary",className:e.button,endIcon:r.a.createElement(se.a,null),fullWidth:!0,onclick:alert},"Ajouter le Model"))))})),Oe=a(37),Ce=a(29),Se=a(73),De=a(55),Re=a(405),Ne=a(384),Te=a.n(Ne),Pe=a(119),Me=a.n(Pe),Le=a(558),Ie=Object(w.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,padding:10}}}));function We(){var e=Ie();return r.a.createElement(fe.a,{className:e.root},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:12},r.a.createElement(Le.a,{variant:"text",height:100}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))))}var ze=a(193),Ae=a.n(ze),Be=a(200),Fe=a.n(Be),Ge=a(194),qe=a.n(Ge),Ue=a(159),_e=a.n(Ue),Je=a(195),Ve=a.n(Je),Ye=a(197),$e=a.n(Ye),He=a(198),Xe=a.n(He),Ke=a(199),Qe=a.n(Ke),Ze=a(201),et=a.n(Ze),tt=a(196),at=a.n(tt),nt=a(379),rt=a.n(nt),it=a(202),ct=a.n(it),lt={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(Ae.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(qe.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(_e.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(Ve.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(J.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(Me.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(at.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement($e.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(Xe.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(Qe.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(J.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(_e.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(H.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(Fe.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(et.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(ct.a,Object.assign({},e,{ref:t}))}))},ot=function(e){Object(De.a)(a,e);var t=Object(Re.a)(a);function a(e){var n;return Object(Oe.a)(this,a),(n=t.call(this)).state={error:null,isLoaded:!1,items:[],secondary:!1,dense:!1,Title:"Liste des "+e.name},n.DeleteThis=n.DeleteThis.bind(Object(Se.a)(n)),n.componentDidMount=n.componentDidMount.bind(Object(Se.a)(n)),n}return Object(Ce.a)(a,[{key:"DeleteThis",value:function(e){e.preventDefault(),fetch("http://127.0.0.1:5000/"+this.props.name+"/Delete/"+e.currentTarget.id,{method:"DELETE"}).then((function(e){}),(function(e){alert(e.message)}))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://127.0.0.1:5000/api/type").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items,i=e.Title;return t?r.a.createElement("div",null,"Erreur : ",t.message):a?r.a.createElement(rt.a,{icons:lt,title:i,columns:[{title:"Designation Fr",field:"description_Fr"},{title:"Designation Ar",field:"description_Ar"}],data:n,actions:[{icon:function(){return r.a.createElement(Me.a,{color:"primary"})},tooltip:"Edit User",onClick:function(e,t){return alert("You saved "+t.name)}},{icon:function(){return r.a.createElement(Te.a,{color:"secondary"})},tooltip:"Delete User",onClick:function(e,t){return alert("You want to delete "+t.name)}}],options:{exportButton:!0,pageSize:20,pageSizeOptions:[5,10,20,50],sorting:!0}}):r.a.createElement("div",null,r.a.createElement(We,null))}}]),a}(n.Component),mt=Object(w.a)({card:{maxWidth:"100%",minHeight:140},media:{height:500},root:{padding:10}});function st(e){var t=mt(),a=r.a.useState(2),n=Object(E.a)(a,2),i=n[0],c=(n[1],r.a.useState(9)),l=Object(E.a)(c,2),o=l[0];l[1];return r.a.createElement(oe.a,{className:t.root,spacing:2},r.a.createElement(oe.a,{item:!0,xs:12},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:i},r.a.createElement(oe.a,{key:"2",item:!0,xs:3},r.a.createElement(we,null)),r.a.createElement(oe.a,{key:"1",item:!0,xs:o},r.a.createElement(oe.a,{justify:"center",spacing:i,margin:5},r.a.createElement(ot,{name:e.name}))))))}var ut={routeProps:{path:"/Configurations",component:function(){return r.a.createElement("div",null,r.a.createElement(xe,null),r.a.createElement(st,{name:"Model"}))}},name:"Configurations",icon:r.a.createElement(ge.a,{fontSize:"large"})},Et=a(390),pt=a.n(Et),dt=a(7),ht=a(570),gt=a(574),ft=a(571),bt=a(386),yt=a.n(bt),vt=a(387),xt=a.n(vt),jt=a(388),kt=a.n(jt),wt=a(389),Ot=a.n(wt),Ct=Object(w.a)((function(e){return{root:{width:"100%",height:"100%"},controls:{margin:e.spacing(3)},exampleWrapper:{position:"relative"},radioGroup:{margin:e.spacing(1,0)},speedDial:{position:"fixed","&$directionUp, &$directionLeft":{bottom:e.spacing(5),right:e.spacing(3)}},directionUp:{},directionLeft:{}}}));function St(){var e=Ct(),t=r.a.useState("up"),a=Object(E.a)(t,1)[0],n=r.a.useState(!1),i=Object(E.a)(n,2),c=i[0],l=i[1],o=r.a.useState(!1),m=Object(E.a)(o,1)[0];var s=function(){l(!1)},u=function(){l(!0)},p=Object(N.a)(e.speedDial,e["direction".concat(Object(dt.a)(a))]);return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.exampleWrapper},r.a.createElement(ht.a,{ariaLabel:"SpeedDial example",className:p,hidden:m,icon:r.a.createElement(gt.a,null),onBlur:s,onClick:function(){l((function(e){return!e}))},onClose:s,onFocus:u,onMouseEnter:u,onMouseLeave:s,open:c,direction:a},r.a.createElement(ft.a,{key:"Exporter",icon:r.a.createElement(yt.a,null),tooltipTitle:"Exporter",onClick:function(){l(!1)}}),r.a.createElement(ft.a,{key:"Imprimer",icon:r.a.createElement(xt.a,null),tooltipTitle:"Imprimer",onClick:function(){l(!1)}}),r.a.createElement(ft.a,{key:"Actualiser",icon:r.a.createElement(kt.a,null),tooltipTitle:"Actualiser",onClick:function(){window.location.reload()}}),r.a.createElement(ft.a,{key:"Plein Ecran",icon:r.a.createElement(Ot.a,null),tooltipTitle:"Plein Ecran",onClick:function(){}}))))}var Dt={routeProps:{path:"/Personnes",component:function(){return r.a.createElement("div",null,r.a.createElement(St,null))}},name:"Personnes",icon:r.a.createElement(pt.a,{fontSize:"large"})},Rt=a(391),Nt=a.n(Rt),Tt={routeProps:{path:"/Magasin",component:function(){return r.a.createElement("div",null,"Magasin")}},name:"Magasin",icon:r.a.createElement(Nt.a,{fontSize:"large"})},Pt=a(392),Mt=a.n(Pt),Lt=Object(w.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,padding:10}}}));function It(){var e=Lt();return r.a.createElement(fe.a,{className:e.root},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:12},r.a.createElement(Le.a,{variant:"text",height:100}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))),r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:2},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:2},r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})),r.a.createElement(oe.a,{key:"2",item:!0,xs:6},r.a.createElement(Le.a,{variant:"circle",width:50,height:50})))),r.a.createElement(oe.a,{key:"2",item:!0,xs:10},r.a.createElement(Le.a,{variant:"text",height:50}))))}var Wt=Object(w.a)({card:{maxWidth:"100%",minHeight:140},media:{height:500},root:{padding:10}});function zt(e){var t=Wt(),a=r.a.useState(2),n=Object(E.a)(a,2),i=n[0],c=(n[1],r.a.useState(10)),l=Object(E.a)(c,2),o=l[0];l[1];return r.a.createElement(oe.a,{className:t.root,spacing:10},r.a.createElement(oe.a,{item:!0,xs:12},r.a.createElement(oe.a,{container:!0,justify:"center",spacing:i},r.a.createElement(oe.a,{key:"1",item:!0,xs:o},r.a.createElement(oe.a,{justify:"center",spacing:i,margin:5},r.a.createElement(It,null))))))}var At={routeProps:{path:"/Catalogue",component:function(){return r.a.createElement("div",null,r.a.createElement(zt,null),r.a.createElement(St,null))}},name:"Catalogue",icon:r.a.createElement(Mt.a,{fontSize:"large"})},Bt=a(393),Ft=a.n(Bt),Gt={routeProps:{path:"/Statistique",component:function(){return r.a.createElement("div",null,"Statistique Module")}},name:"Statistique",icon:r.a.createElement(Ft.a,{fontSize:"large"})},qt=a(394),Ut=a.n(qt),_t={routeProps:{path:"/Documentation",component:function(){return r.a.createElement("div",null,"Documentation Module")}},name:"Documentation",icon:r.a.createElement(Ut.a,{fontSize:"large"})},Jt=a(395),Vt=a.n(Jt),Yt=[de,Dt,At,Tt,_t,ut,Gt,{routeProps:{path:"/A_Propos",component:function(){return r.a.createElement("div",null,"A propos")}},name:"A Propos",icon:r.a.createElement(Vt.a,{fontSize:"large"})}],$t=a(57),Ht=a(396),Xt=a(397),Kt=a(23),Qt=[],Zt=Object($t.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_ALERT":return[].concat(Object(Kt.a)(e),[t.payload]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==n}));default:return e}}}),ea=[Xt.a],ta=Object($t.createStore)(Zt,{},Object(Ht.composeWithDevTools)($t.applyMiddleware.apply(void 0,ea))),aa=Object(w.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},title:Object(s.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(s.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(0)},search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(T.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(T.d)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:240}})}}));function na(){var e,t,a=Object(n.useState)(null),i=Object(E.a)(a,2),c=i[0],l=(i[1],aa()),o=Object(P.a)(),m=r.a.useState(!1),u=Object(E.a)(m,2),p=u[0],d=u[1],g=r.a.useState(!1),f=Object(E.a)(g,2),b=f[0],y=f[1],v=r.a.useState(!0),x=Object(E.a)(v,1)[0],j=r.a.useState(null),w=Object(E.a)(j,2),O=w[0],C=w[1],S=r.a.useState(null),T=Object(E.a)(S,2),q=T[0],_=T[1],V=r.a.useState(!1),$=Object(E.a)(V,2),X=$[0],Q=$[1],ee=r.a.useState(!1),ae=Object(E.a)(ee,2),re=ae[0],ce=ae[1];function le(){_(null),ce(!1)}function oe(){C(null),Q(!1)}return r.a.createElement(ie.a,{enabled:b,onChange:function(e){return y(e)}},r.a.createElement(je.a,{store:ta},r.a.createElement(D.a,null,r.a.createElement("div",{className:l.root},r.a.createElement(h.a,null),r.a.createElement(M.a,{position:"fixed",className:Object(N.a)(l.appBar,Object(s.a)({},l.appBarShift,p))},r.a.createElement(L.a,null,r.a.createElement(I.a,{color:"inherit","aria-label":"open drawer",onClick:function(){d(!0)},edge:"start",className:Object(N.a)(l.menuButton,Object(s.a)({},l.hide,p))},r.a.createElement(Y.a,null)),r.a.createElement(k.a,{className:l.title,variant:"h6",noWrap:!0},"Gestion Materiels Informatiques"),r.a.createElement(k.a,{className:l.title,variant:"h6",wrap:"true"},c),r.a.createElement("div",{className:l.search},r.a.createElement("div",{className:l.searchIcon},r.a.createElement(H.a,null)),r.a.createElement(W.a,{placeholder:"Rechercher...",classes:{root:l.inputRoot,input:l.inputInput},inputProps:{"aria-label":"search"}})),x&&r.a.createElement("div",null,r.a.createElement(I.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){_(e.currentTarget),ce(!0)},color:"inherit"},r.a.createElement(K.a,null)),r.a.createElement(z.a,{id:"menu-appbar",anchorEl:q,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:re,onClose:le},r.a.createElement(A.a,{onClick:le},"Profile"),r.a.createElement(A.a,{onClick:le},"Mon Compte"),r.a.createElement(A.a,{onClick:le},"Se Deconnecter"),r.a.createElement(A.a,{onClick:le},"Verrouiller"))),r.a.createElement("div",null,r.a.createElement(I.a,{"aria-label":"account of current user","aria-controls":"menus-appbar","aria-haspopup":"true",color:"inherit",onClick:function(e){y(!0)}},r.a.createElement(te.a,null))),r.a.createElement("div",null,r.a.createElement(I.a,{"aria-label":"account of current user","aria-controls":"menu-language","aria-haspopup":"true",onClick:function(e){C(e.currentTarget),Q(!0)},color:"inherit"},r.a.createElement(ne.a,null)),r.a.createElement(z.a,{id:"menu-language",anchorEl:O,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:X,onClose:oe},r.a.createElement(A.a,{onClick:oe},"Fran\xe7ais"),r.a.createElement(A.a,{onClick:oe},"Anglais"),r.a.createElement(A.a,{onClick:oe},"\u0627\u0644\u0639\u0631\u0628\u064a\u0640\u0640\u0629"))))),r.a.createElement(B.a,{variant:"permanent",className:Object(N.a)(l.drawer,(e={},Object(s.a)(e,l.drawerOpen,p),Object(s.a)(e,l.drawerClose,!p),e)),classes:{paper:Object(N.a)((t={},Object(s.a)(t,l.drawerOpen,p),Object(s.a)(t,l.drawerClose,!p),t))},open:p},r.a.createElement("div",{className:l.toolbar},r.a.createElement(k.a,{className:l.title,variant:"h3",noWrap:!0,align:"center"},r.a.createElement(Z.a,{fontSize:"large"})),r.a.createElement(I.a,{onClick:function(){d(!1)}},"rtl"===o.direction?r.a.createElement(J.a,null):r.a.createElement(U.a,null))),r.a.createElement(F.a,null),r.a.createElement(G.a,null,Yt.map((function(e){}))),r.a.createElement(F.a,null)),r.a.createElement("main",{className:l.content},r.a.createElement("div",{className:l.toolbar}),Yt.map((function(e){return r.a.createElement(R.a,Object.assign({},e.routeProps,{key:e.name}))})))))))}function ra(){return r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(y.a,{color:"inherit",href:""},"Fateh Djehinet")," ",(new Date).getFullYear(),".")}S.a.defaults.baseURL="http://localhost:5000",S.a.defaults.headers.post["Content-Type"]="application/json";var ia=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ca(){var e=ia(),t=Object(n.useState)({email:"",password:""}),a=Object(E.a)(t,2),i=a[0],l=a[1],y=i.email,x=i.password,w=function(e){return l(Object(u.a)({},i,Object(s.a)({},e.target.name,e.target.value)))},C=function(){var e=Object(m.a)(o.a.mark((function e(t){var a,n,i,l,m,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={email:y,password:x},e.prev=2,n=JSON.stringify(a),e.next=6,S.a.post("/api/auth",n);case 6:i=e.sent,l=i.data.token,(m=new Date).setTime(m.getTime()+12e4),(s=new ue.a).set("token",l,{path:"/"}),c.a.render(r.a.createElement(na,null),document.getElementById("root")),s.set("password",x,{path:"/"}),s.set("email",y,{path:"/"}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),console.error(e.t0.response.data);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(O.a,{component:"main",maxWidth:"xs"},r.a.createElement(h.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(p.a,{className:e.avatar},r.a.createElement(j.a,null)),r.a.createElement(k.a,{component:"h1",variant:"h5"},"Connexion"),r.a.createElement("div",null,r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:y,onChange:function(e){return w(e)},autoComplete:"email",autoFocus:!0}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",value:x,onChange:function(e){return w(e)},label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(f.a,{control:r.a.createElement(b.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:C},"Se Connecter"))),r.a.createElement(v.a,{mt:8},r.a.createElement(ra,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ca,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[416,1,2]]]);
//# sourceMappingURL=main.28a0f054.chunk.js.map