(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/damir-bosnjak.a6f24e7d.jpg"},113:function(e,t,a){e.exports=a.p+"static/media/mike.aab414f7.jpg"},114:function(e,t,a){e.exports=a.p+"static/media/ayo-ogunseinde-2.bfc688ca.jpg"},115:function(e,t,a){e.exports=a.p+"static/media/joe-gardner-2.76ff47ae.jpg"},116:function(e,t,a){e.exports=a.p+"static/media/clem-onojeghuo-2.bb4b9ac9.jpg"},119:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},125:function(e,t,a){e.exports=a(300)},132:function(e,t,a){},134:function(e,t,a){},136:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(24),c=a.n(r),i=a(19),o=a(307),s=a(302),m=a(311),d=a(303),u=(a(130),a(132),a(134),a(136),a(26)),p=a(55),h=a(6),E=a(7),b=a(10),f=a(8),g=a(9),v=a(12),N=a(2),y=a(123),C=a(3),O=a.n(C),j=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.simple,a=e.round,n=e.icon,r=e.neutral,c=e.leftLabel,i=e.rightLabel,o=e.wd,s=e.link,m=e.fab,d=e.className,u=Object(y.a)(e,["simple","round","icon","neutral","leftLabel","rightLabel","wd","link","fab","className"]),p=O()({"btn-simple":t,"btn-round":a,"btn-icon":n,"btn-neutral":r,"btn-wd":o,"btn-link":s,"btn-fab":m});return void 0!==d&&(p+=" "+d),l.a.createElement(N.a,Object.assign({className:p},u),c?l.a.createElement("span",{className:"btn-label"},l.a.createElement("i",{className:c})," "):null,this.props.children,i?l.a.createElement("span",{className:"btn-label btn-label-right"},l.a.createElement("i",{className:i})," "):null)}}]),t}(n.Component),x=a(18),k=a.n(x),w=a(25),P=a(30),D=a.n(P);function S(){var e=Object(u.a)(["\n      mutation updatePrescription(\n        $id : ID!,\n        $owner: String!,\n        $nid: String,\n        $docname: String!,\n        $docid: String!,\n        $chember: String,\n        $details: String!,\n        $med: String,\n        $phn: String\n       ){\n          updatePrescription(\n              id : $id,\n            owner: $owner,\n            nid  : $nid ,\n        docname  : $docname,\n         docid   : $docid,\n        chember  : $chember,\n        details  : $details,\n           med   : $med,\n          phn    : $phn\n          ){\n            id\n            owner\n            docname\n            details\n            phn\n          }\n        }\n      "]);return S=function(){return e},e}var A=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={pname:e.history.location.state.some[4],nid:e.history.location.state.some[10],docname:e.history.location.state.some[1],drid:e.history.location.state.some[5],inputAddress:e.history.location.state.some[6],phnno:e.history.location.state.some[9],inputDetails:e.history.location.state.some[2],inputMed:e.history.location.state.some[7],viewPresciption:e.history.location.state.some[0]},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"content"},l.a.createElement(w.Mutation,{mutation:k()(S()),variables:{id:this.state.viewPresciption,owner:this.state.pname,nid:this.state.nid,docname:this.state.docname,docid:this.state.drid,chember:this.state.inputAddress,details:this.state.inputDetails,med:this.state.inputMed,phn:this.state.phnno}},function(t,a){var n=a.data,r=a.loading,c=a.error;return r?l.a.createElement("div",null,l.a.createElement(D.a,{className:"loadingScreenAnimation",type:"spin",color:"white",height:"60%",width:"60%"})):n?l.a.createElement("div",{className:"successCreateNoify"},l.a.createElement(N.b,{className:"successCreateNoifyHelper",style:{width:"30rem"}},l.a.createElement(N.f,{top:!0,src:"https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png",alt:"Card image cap"}),l.a.createElement(N.h,null,"Prescription Updated Successfully!!"),l.a.createElement(N.g,null,"Prescription ID : ",l.a.createElement("b",null,n.updatePrescription.id),l.a.createElement("br",null),"Patient Name : ",l.a.createElement("b",null,n.updatePrescription.owner),l.a.createElement("br",null),"Doctor Name : ",l.a.createElement("b",null,n.updatePrescription.docname),l.a.createElement("br",null),"Health Issues : ",l.a.createElement("b",null,n.updatePrescription.details),l.a.createElement("br",null),"Paitent Contact No : ",l.a.createElement("b",null,n.updatePrescription.phn),l.a.createElement("br",null)),l.a.createElement(j,{href:"/prescription"},"Back"))):c?l.a.createElement("p",null,"Error :("):l.a.createElement(N.z,null,l.a.createElement(N.i,{md:12},l.a.createElement(N.b,null,l.a.createElement(N.e,null,l.a.createElement("h5",{className:"title"},"Fill Up The Form With Patient Information")),l.a.createElement(N.c,null,l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",{className:"form-row"},l.a.createElement(N.m,{className:"col-md-6"},l.a.createElement(N.q,{for:"pname"},"Patient Name"),l.a.createElement(N.n,{type:"text",id:"pname",placeholder:e.state.pname,onChange:e.handleChange})),l.a.createElement(N.m,{className:"col-md-6"},l.a.createElement(N.q,{for:"nid"},"NID / Passpost No / Birth Cirtificate No"),l.a.createElement(N.n,{type:"text",id:"nid",placeholder:e.state.nid,onChange:e.handleChange}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(N.m,{className:"col-md-6"},l.a.createElement(N.q,{for:"docname"},"Doctors Name"),l.a.createElement(N.n,{type:"text",id:"docname",placeholder:e.state.docname,onChange:e.handleChange})),l.a.createElement(N.m,{className:"col-md-6"},l.a.createElement(N.q,{for:"drid"},"Doctors ID"),l.a.createElement(N.n,{type:"text",id:"drid",placeholder:e.state.drid,onChange:e.handleChange}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(N.m,{className:"col-md-6"},l.a.createElement(N.q,{for:"inputAddress"},"Chember Address"),l.a.createElement(N.n,{type:"text",id:"inputAddress",placeholder:e.state.inputAddress,onChange:e.handleChange})),l.a.createElement(N.m,{className:"col-md-6"},l.a.createElement(N.q,{for:"phnno"},"Patient contact no"),l.a.createElement(N.n,{type:"text",id:"phnno",placeholder:e.state.phnno,onChange:e.handleChange}))),l.a.createElement(N.m,null,l.a.createElement(N.q,{for:"inputDetails"},"Details"),l.a.createElement(N.n,{type:"text",id:"inputDetails",placeholder:e.state.inputDetails,onChange:e.handleChange})),l.a.createElement("div",{className:"form-row"},l.a.createElement(N.m,{className:"col-md-12"},l.a.createElement(N.q,{for:"inputMed"},"Medicin"),l.a.createElement(N.n,{type:"text",id:"inputMed",placeholder:e.state.inputMed,onChange:e.handleChange}))),l.a.createElement(j,{type:"submit",value:"Submit",color:"success",size:"lg",onClick:function(){t()}},l.a.createElement("i",{className:"fa fa-save"})," \xa0Update"))))))}))}}]),t}(l.a.Component),$=a(73),L=a(309),z=a(80),M=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.children.length;t++)e.push(l.a.createElement("i",{className:this.props.children[t].i,key:t})),e.push(" "+this.props.children[t].t),t!==this.props.children.length-1&&e.push(l.a.createElement("br",null));return l.a.createElement("div",{className:"stats"},e)}}]),t}(l.a.Component),I=a(78),B=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"content"},l.a.createElement(N.z,null,l.a.createElement(N.i,{xs:12,sm:6,md:6,lg:3},l.a.createElement(N.b,{className:"card-stats"},l.a.createElement(N.c,null,l.a.createElement(N.z,null,l.a.createElement(N.i,{xs:5,md:4},l.a.createElement("div",{className:"icon-big text-center"},l.a.createElement("i",{className:"nc-icon nc-globe text-warning"}))),l.a.createElement(N.i,{xs:7,md:8},l.a.createElement("div",{className:"numbers"},l.a.createElement("p",{className:"card-category"},"Capacity"),l.a.createElement(N.h,{tag:"p"},"150GB"))))),l.a.createElement(N.d,null,l.a.createElement("hr",null),l.a.createElement(M,null,[{i:"fas fa-sync-alt",t:"Update Now"}])))),l.a.createElement(N.i,{xs:12,sm:6,md:6,lg:3},l.a.createElement(N.b,{className:"card-stats"},l.a.createElement(N.c,null,l.a.createElement(N.z,null,l.a.createElement(N.i,{xs:5,md:4},l.a.createElement("div",{className:"icon-big text-center"},l.a.createElement("i",{className:"nc-icon nc-money-coins text-success"}))),l.a.createElement(N.i,{xs:7,md:8},l.a.createElement("div",{className:"numbers"},l.a.createElement("p",{className:"card-category"},"Revenue"),l.a.createElement(N.h,{tag:"p"},"$ 1,345"))))),l.a.createElement(N.d,null,l.a.createElement("hr",null),l.a.createElement(M,null,[{i:"far fa-calendar",t:"Last day"}])))),l.a.createElement(N.i,{xs:12,sm:6,md:6,lg:3},l.a.createElement(N.b,{className:"card-stats"},l.a.createElement(N.c,null,l.a.createElement(N.z,null,l.a.createElement(N.i,{xs:5,md:4},l.a.createElement("div",{className:"icon-big text-center"},l.a.createElement("i",{className:"nc-icon nc-vector text-danger"}))),l.a.createElement(N.i,{xs:7,md:8},l.a.createElement("div",{className:"numbers"},l.a.createElement("p",{className:"card-category"},"Errors"),l.a.createElement(N.h,{tag:"p"},"23"))))),l.a.createElement(N.d,null,l.a.createElement("hr",null),l.a.createElement(M,null,[{i:"far fa-clock",t:"In the last hour"}])))),l.a.createElement(N.i,{xs:12,sm:6,md:6,lg:3},l.a.createElement(N.b,{className:"card-stats"},l.a.createElement(N.c,null,l.a.createElement(N.z,null,l.a.createElement(N.i,{xs:5,md:4},l.a.createElement("div",{className:"icon-big text-center"},l.a.createElement("i",{className:"nc-icon nc-favourite-28 text-primary"}))),l.a.createElement(N.i,{xs:7,md:8},l.a.createElement("div",{className:"numbers"},l.a.createElement("p",{className:"card-category"},"Followers"),l.a.createElement(N.h,{tag:"p"},"+45K"))))),l.a.createElement(N.d,null,l.a.createElement("hr",null),l.a.createElement(M,null,[{i:"fas fa-sync-alt",t:"Update now"}]))))),l.a.createElement(N.z,null,l.a.createElement(N.i,{xs:12},l.a.createElement(N.b,null,l.a.createElement(N.e,null,l.a.createElement(N.h,null,"Users Behavior"),l.a.createElement("p",{className:"card-category"},"24 Hours performance")),l.a.createElement(N.c,null,l.a.createElement(z.a,{data:I.dashboard24HoursPerformanceChart.data,options:I.dashboard24HoursPerformanceChart.options,width:400,height:100})),l.a.createElement(N.d,null,l.a.createElement("hr",null),l.a.createElement(M,null,[{i:"fas fa-history",t:" Updated 3 minutes ago"}]))))),l.a.createElement(N.z,null,l.a.createElement(N.i,{xs:12,sm:12,md:4},l.a.createElement(N.b,null,l.a.createElement(N.e,null,l.a.createElement(N.h,null,"Email Statistics"),l.a.createElement("p",{className:"card-category"},"Last Campaign Performance")),l.a.createElement(N.c,null,l.a.createElement(z.b,{data:I.dashboardEmailStatisticsChart.data,options:I.dashboardEmailStatisticsChart.options})),l.a.createElement(N.d,null,l.a.createElement("div",{className:"legend"},l.a.createElement("i",{className:"fa fa-circle text-primary"})," Opened"," ",l.a.createElement("i",{className:"fa fa-circle text-warning"})," Read"," ",l.a.createElement("i",{className:"fa fa-circle text-danger"})," Deleted"," ",l.a.createElement("i",{className:"fa fa-circle text-gray"})," Unopened"),l.a.createElement("hr",null),l.a.createElement(M,null,[{i:"fas fa-calendar-alt",t:" Number of emails sent"}])))),l.a.createElement(N.i,{xs:12,sm:12,md:8},l.a.createElement(N.b,{className:"card-chart"},l.a.createElement(N.e,null,l.a.createElement(N.h,null,"NASDAQ: AAPL"),l.a.createElement("p",{className:"card-category"},"Line Chart With Points")),l.a.createElement(N.c,null,l.a.createElement(z.a,{data:I.dashboardNASDAQChart.data,options:I.dashboardNASDAQChart.options,width:400,height:100})),l.a.createElement(N.d,null,l.a.createElement("div",{className:"chart-legend"},l.a.createElement("i",{className:"fa fa-circle text-info"})," Tesla Model S"," ",l.a.createElement("i",{className:"fa fa-circle text-warning"})," BMW 5 Series"),l.a.createElement("hr",null),l.a.createElement(M,null,[{i:"fas fa-check",t:" Data information certified"}]))))))}}]),t}(l.a.Component),q=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"author"},l.a.createElement("a",{href:this.props.link?this.props.link:"#"},l.a.createElement("img",{className:"avatar border-gray",src:this.props.avatar,alt:this.props.avatarAlt}),l.a.createElement("h5",{className:"title"},this.props.title)),l.a.createElement("p",{className:"description"},this.props.description))}}]),t}(l.a.Component),R=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={focus:!1},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.label,n=t.addonLeft,r=t.addonRight,c=t.formGroupProps,i=t.labelProps,o=t.inputProps,s=t.inputGroupProps,m=t.inputGroupAddonProps,d=" ";return void 0!==s&&void 0!==s.className&&(d+=s.className+" "),void 0!==n||void 0!==r?l.a.createElement(N.o,Object.assign({},s,{className:d+(this.state.focus?"input-group-focus":"")}),void 0!==n?l.a.createElement(N.p,m,n):"",l.a.createElement(N.n,Object.assign({},o,{onFocus:function(t){return e.setState({focus:!0})},onBlur:function(t){return e.setState({focus:!1})}})),void 0!==r?l.a.createElement(N.p,m,r):""):"radio"===o.type||"checkbox"===o.type?l.a.createElement(N.m,Object.assign({},c,{className:"radio"===o.type?"form-check-radio":""}),l.a.createElement(N.q,i,l.a.createElement(N.n,o),l.a.createElement("span",{className:"form-check-sign"}),a||"")):l.a.createElement(N.m,c,a?l.a.createElement(N.q,i,a):"",l.a.createElement(N.n,o))}}]),t}(l.a.Component),U=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.ncols.length;t++)e.push(l.a.createElement("div",{key:t,className:this.props.ncols[t]},l.a.createElement(R,this.props.proprieties[t])));return l.a.createElement("div",{className:"row"},e)}}]),t}(n.Component),H=a(112),W=a.n(H),F=a(113),T=a.n(F),J=a(114),V=a.n(J),G=a(115),Q=a.n(G),Y=a(116),K=a.n(Y),Z=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"content"},l.a.createElement(N.z,null,l.a.createElement(N.i,{md:4,xs:12},l.a.createElement(N.b,{className:"card-user"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:W.a,alt:"..."})),l.a.createElement(N.c,null,l.a.createElement(q,{avatar:T.a,avatarAlt:"...",title:"Chet Faker",description:"@chetfaker"}),l.a.createElement("p",{className:"description text-center"},'"I like the way you work it'," ",l.a.createElement("br",null),"No diggity ",l.a.createElement("br",null),'I wanna bag it up"')),l.a.createElement(N.d,null,l.a.createElement("hr",null),l.a.createElement("div",{className:"button-container"},l.a.createElement(N.z,null,l.a.createElement(N.i,{xs:6,sm:6,md:6,lg:3,className:"ml-auto"},l.a.createElement("h5",null,"12",l.a.createElement("br",null),l.a.createElement("small",null,"Files"))),l.a.createElement(N.i,{xs:6,sm:6,md:6,lg:4,className:"mr-auto ml-auto"},l.a.createElement("h5",null,"2GB",l.a.createElement("br",null),l.a.createElement("small",null,"Used"))),l.a.createElement(N.i,{lg:3,className:"mr-auto"},l.a.createElement("h5",null,"24,6$",l.a.createElement("br",null),l.a.createElement("small",null,"Spent"))))))),l.a.createElement(N.b,null,l.a.createElement(N.e,null,l.a.createElement(N.h,{tag:"h4"},"Team Members")),l.a.createElement(N.c,null,l.a.createElement("ul",{className:"list-unstyled team-members"},l.a.createElement("li",null,l.a.createElement(N.z,null,l.a.createElement(N.i,{xs:2,md:2},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:V.a,alt:"ayoOgunseinde2",className:"img-circle img-no-padding img-responsive"}))),l.a.createElement(N.i,{xs:7,md:7},"DJ Khaled",l.a.createElement("br",null),l.a.createElement("span",{className:"text-muted"},l.a.createElement("small",null,"Offline"))),l.a.createElement(N.i,{xs:3,md:3,className:"text-right"},l.a.createElement(j,{size:"sm",color:"success",round:!0,icon:!0,outline:!0},l.a.createElement("i",{className:"fa fa-envelope"}))))),l.a.createElement("li",null,l.a.createElement(N.z,null,l.a.createElement(N.i,{xs:2,md:2},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:Q.a,alt:"joeGardner2",className:"img-circle img-no-padding img-responsive"}))),l.a.createElement(N.i,{xs:7,md:7},"Creative Tim",l.a.createElement("br",null),l.a.createElement("span",{className:"text-success"},l.a.createElement("small",null,"Available"))),l.a.createElement(N.i,{xs:3,md:3,className:"text-right"},l.a.createElement(j,{size:"sm",color:"success",round:!0,icon:!0,outline:!0},l.a.createElement("i",{className:"fa fa-envelope"}))))),l.a.createElement("li",null,l.a.createElement(N.z,null,l.a.createElement(N.i,{xs:2,md:2},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:K.a,alt:"clemOnojeghuo2",className:"img-circle img-no-padding img-responsive"}))),l.a.createElement(N.i,{xs:7,md:7},"Flume",l.a.createElement("br",null),l.a.createElement("span",{className:"text-danger"},l.a.createElement("small",null,"Busy"))),l.a.createElement(N.i,{xs:3,md:3,className:"text-right"},l.a.createElement(j,{size:"sm",color:"success",round:!0,icon:!0,outline:!0},l.a.createElement("i",{className:"fa fa-envelope"}))))))))),l.a.createElement(N.i,{md:8,xs:12},l.a.createElement(N.b,{className:"card-user"},l.a.createElement(N.e,null,l.a.createElement(N.h,null,"Edit Profile")),l.a.createElement(N.c,null,l.a.createElement("form",null,l.a.createElement(U,{ncols:["col-md-5 pr-1","col-md-3 px-1","col-md-4 pl-1"],proprieties:[{label:"Company (disabled)",inputProps:{type:"text",disabled:!0,defaultValue:"Creative Code Inc."}},{label:"Username",inputProps:{type:"text",defaultValue:"chetfaker"}},{label:"Email address",inputProps:{type:"email",placeholder:"Email"}}]}),l.a.createElement(U,{ncols:["col-md-6 pr-1","col-md-6 pl-1"],proprieties:[{label:"First Name",inputProps:{type:"text",placeholder:"First Name",defaultValue:"Chet"}},{label:"Last Name",inputProps:{type:"text",placeholder:"Last Name",defaultValue:"Faker"}}]}),l.a.createElement(U,{ncols:["col-md-12"],proprieties:[{label:"Address",inputProps:{type:"text",placeholder:"Home Address",defaultValue:"Melbourne, Australia"}}]}),l.a.createElement(U,{ncols:["col-md-4 pr-1","col-md-4 px-1","col-md-4 pl-1"],proprieties:[{label:"City",inputProps:{type:"text",defaultValue:"Melbourne",placeholder:"City"}},{label:"Country",inputProps:{type:"text",defaultValue:"Australia",placeholder:"Country"}},{label:"Postal Code",inputProps:{type:"number",placeholder:"ZIP Code"}}]}),l.a.createElement(U,{ncols:["col-md-12"],proprieties:[{label:"About Me",inputProps:{type:"textarea",defaultValue:"Oh so, your weak rhyme You doubt I'll bother, reading into it",placeholder:"Here can be your description"}}]}),l.a.createElement(N.z,null,l.a.createElement("div",{className:"update ml-auto mr-auto"},l.a.createElement(j,{color:"primary",round:!0},"Update Profile")))))))))}}]),t}(l.a.Component),X=a(84),_=a.n(X),ee=a(117),te=a(118);a(293);function ae(){var e=Object(u.a)(["\n      {\n      allPrescriptions{\n        id\n        docname\n        docid\n        details\n        createdAt\n        owner\n        chember\n        med\n        updatedAt\n        phn\n      }\n    }\n    "]);return ae=function(){return e},e}function ne(){var e=Object(u.a)(["\n          mutation deletePrescription($id: ID!) {\n            deletePrescription(id: $id) {\n              owner\n              id\n            }\n          }\n      "]);return ne=function(){return e},e}function le(){var e=Object(u.a)(["\n      {\n      allPrescriptions{\n        id\n        docname\n        docid\n        details\n        createdAt\n        owner\n        chember\n        med\n        updatedAt\n        phn\n        nid\n      }\n    }\n    "]);return le=function(){return e},e}var re=function(e){return l.a.createElement(w.Query,{query:k()(le())},function(t){var a=t.loading,n=t.error,r=t.data;return a?l.a.createElement("div",null,l.a.createElement(D.a,{className:"loadingScreenAnimation",type:"spin",color:"white",height:"60%",width:"60%"})):n?l.a.createElement("p",null,"Error :("):r.allPrescriptions.map(function(t){var a=t.id,n=t.docname,r=t.details,c=t.createdAt,i=t.owner,o=t.docid,s=t.chember,m=t.med,d=t.updatedAt,u=t.phn,p=t.nid;return l.a.createElement(N.i,{key:a+1,xs:"auto"},l.a.createElement(N.b,{style:{width:"20rem"}},l.a.createElement(N.f,{top:!0,src:"http://icons-for-free.com/free-icons/png/512/1290990.png",alt:"..."}),l.a.createElement(N.c,null,l.a.createElement(N.h,null,"Doctor : ",n),l.a.createElement(N.g,null,l.a.createElement("b",null,"Problem :")," ",r),l.a.createElement(N.g,null,l.a.createElement("b",null,"Date :")," ",c),l.a.createElement(j,{key:a+2,onClick:function(){e.toggle(a)},color:"primary"},"View"),l.a.createElement(j,{color:"default",onClick:function(){e.up(a,n,r,c,i,o,s,m,d,u,p)}},"Update"),l.a.createElement(j,{color:"danger",onClick:function(){e.preDelete(a)}},"Delete"),l.a.createElement(N.r,{key:a+3,isOpen:e.state.modal&&e.state.viewPresciptionId===a,toggle:e.toggle},l.a.createElement(N.u,{toggle:e.toggle},l.a.createElement("p",null,"Prescription of ",l.a.createElement("b",null,l.a.createElement("i",null,i)))),l.a.createElement(N.s,null,l.a.createElement(N.A,{key:a+4,bordered:!0},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Prescription Id : \xa0 ",a)),l.a.createElement("tr",null,l.a.createElement("td",null,"Created at :  \xa0 ",c)),l.a.createElement("tr",null,l.a.createElement("td",null,"Doctor :  \xa0 ",n)),l.a.createElement("tr",null,l.a.createElement("td",null,"DocID :  \xa0 ",o)),l.a.createElement("tr",null,l.a.createElement("td",null,"Paitent contact no :  \xa0 ",u)),l.a.createElement("tr",null,l.a.createElement("td",null,"Chember :  \xa0 ",s)),l.a.createElement("tr",null,l.a.createElement("td",null,"Details :  \xa0 ",r)),l.a.createElement("tr",null,l.a.createElement("td",null,"Medicine :  \xa0 ",m)),l.a.createElement("tr",null,l.a.createElement("td",null,"Last Updated :  \xa0 ",d))))),l.a.createElement(N.t,null,l.a.createElement(j,{color:"secondary",onClick:e.toggle},"Back"))))))})})};function ce(){var e=Object(u.a)(["\n      mutation createPrescription(\n        $owner: String!,\n        $nid: String,\n        $docname: String!,\n        $docid: String!,\n        $chember: String,\n        $details: String!,\n        $med: String,\n        $phn: String\n       ){\n          createPrescription(\n            owner: $owner,\n            nid  : $nid ,\n        docname  : $docname,\n         docid   : $docid,\n        chember  : $chember,\n        details  : $details,\n           med   : $med,\n          phn    : $phn\n          ){\n            id\n            owner\n            docname\n            details\n            phn\n          }\n        }\n      "]);return ce=function(){return e},e}var ie,oe,se=[{path:"/dashboard",name:"Dashboard",icon:"nc-icon nc-bank",component:B},{path:"/prescription",name:"Presciption",icon:"nc-icon nc-paper",component:function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={modal:!1,viewPresciptionId:null},a.toggle=a.toggle.bind(Object(v.a)(Object(v.a)(a))),a.up=a.up.bind(Object(v.a)(Object(v.a)(a))),a.delete=a.delete.bind(Object(v.a)(Object(v.a)(a))),a.preDelete=a.preDelete.bind(Object(v.a)(Object(v.a)(a))),a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"toggle",value:function(e){this.setState({modal:!this.state.modal,viewPresciptionId:e})}},{key:"up",value:function(e,t,a,n,l,r,c,i,o,s,m){this.props.history.push({pathname:"/up",state:{some:[e,t,a,n,l,r,c,i,o,s,m]}})}},{key:"preDelete",value:function(e){var t=this;Object(te.confirmAlert)({title:"Delete?",buttons:[{label:"Yes",onClick:function(){return t.delete(e)}},{label:"No",onClick:function(){return alert("Delete action cancelled")}}]})}},{key:"delete",value:function(){var e=Object(ee.a)(_.a.mark(function e(t){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return alert("Successfully Deleted"),e.next=3,Ce.mutate({mutation:k()(ne()),variables:{id:t},refetchQueries:[{query:k()(ae())}]});case 3:e.sent;case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"content"},l.a.createElement(N.w,{expand:"lg",color:"dark"},l.a.createElement(N.l,{inline:!0,className:"ml-auto"},l.a.createElement(N.m,{className:"no-border"},l.a.createElement(N.n,{type:"text",placeholder:"Search"})),l.a.createElement(j,{color:"neutral",icon:!0,round:!0},l.a.createElement("i",{className:"nc-icon nc-zoom-split"})))),l.a.createElement("div",null,l.a.createElement(N.z,{className:"helper"},l.a.createElement(re,{toggle:this.toggle,state:this.state,delete:this.delete,preDelete:this.preDelete,up:this.up}))))}}]),t}(l.a.Component)},{path:"/cp",name:"Create Prescription",icon:"nc-icon nc-ruler-pencil",component:function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={pname:"",nid:"",docname:"",drid:"",inputAddress:"",phnno:"",inputDetails:"",inputMed:""},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.id,e.target.value))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"content"},l.a.createElement(w.Mutation,{mutation:k()(ce()),variables:{owner:this.state.pname,nid:this.state.nid,docname:this.state.docname,docid:this.state.drid,chember:this.state.inputAddress,details:this.state.inputDetails,med:this.state.inputMed,phn:this.state.phnno}},function(t,a){var n=a.data,r=a.loading,c=a.error;return r?l.a.createElement("div",null,l.a.createElement(D.a,{className:"loadingScreenAnimation",type:"spin",color:"white",height:"60%",width:"60%"})):n?l.a.createElement("div",{className:"successCreateNoify"},l.a.createElement(N.b,{className:"successCreateNoifyHelper",style:{width:"30rem"}},l.a.createElement(N.f,{top:!0,src:"https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png",alt:"Card image cap"}),l.a.createElement(N.h,null,"Prescription Created Successfully!!"),l.a.createElement(N.g,null,"Prescription ID : ",l.a.createElement("b",null,n.createPrescription.id),l.a.createElement("br",null),"Patient Name : ",l.a.createElement("b",null,n.createPrescription.owner),l.a.createElement("br",null),"Doctor Name : ",l.a.createElement("b",null,n.createPrescription.docname),l.a.createElement("br",null),"Health Issues : ",l.a.createElement("b",null,n.createPrescription.details),l.a.createElement("br",null),"Paitent Contact No : ",l.a.createElement("b",null,n.createPrescription.phn),l.a.createElement("br",null)),l.a.createElement(j,{href:"/cp"},"Back"))):c?l.a.createElement("p",null,"Error :("):l.a.createElement(N.z,null,l.a.createElement(N.i,{md:12},l.a.createElement(N.b,null,l.a.createElement(N.e,null,l.a.createElement("h5",{className:"title"},"Fill Up The Form With Patient Information")),l.a.createElement(N.c,null,l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",{className:"form-row"},l.a.createElement(N.m,{className:"col-md-6"},l.a.createElement(N.q,{for:"pname"},"Patient Name"),l.a.createElement(N.n,{type:"text",id:"pname",placeholder:"Patient Name",onChange:e.handleChange})),l.a.createElement(N.m,{className:"col-md-6"},l.a.createElement(N.q,{for:"nid"},"NID / Passpost No / Birth Cirtificate No"),l.a.createElement(N.n,{type:"text",id:"nid",placeholder:"NID / Passpost No / Birth Cirtificate No",onChange:e.handleChange}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(N.m,{className:"col-md-6"},l.a.createElement(N.q,{for:"docname"},"Doctors Name"),l.a.createElement(N.n,{type:"text",id:"docname",placeholder:"Doctors Name",onChange:e.handleChange})),l.a.createElement(N.m,{className:"col-md-6"},l.a.createElement(N.q,{for:"drid"},"Doctors ID"),l.a.createElement(N.n,{type:"text",id:"drid",placeholder:"Doctors ID",onChange:e.handleChange}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(N.m,{className:"col-md-6"},l.a.createElement(N.q,{for:"inputAddress"},"Chember Address"),l.a.createElement(N.n,{type:"text",id:"inputAddress",placeholder:"Doctors Chember Address",onChange:e.handleChange})),l.a.createElement(N.m,{className:"col-md-6"},l.a.createElement(N.q,{for:"phnno"},"Patient contact no"),l.a.createElement(N.n,{type:"text",id:"phnno",placeholder:"Patient contact no",onChange:e.handleChange}))),l.a.createElement(N.m,null,l.a.createElement(N.q,{for:"inputDetails"},"Details"),l.a.createElement(N.n,{type:"text",id:"inputDetails",placeholder:"Issues regarding the patient",onChange:e.handleChange})),l.a.createElement("div",{className:"form-row"},l.a.createElement(N.m,{className:"col-md-12"},l.a.createElement(N.q,{for:"inputMed"},"Medicin"),l.a.createElement(N.n,{type:"text",id:"inputMed",placeholder:"Suggested medicins for the patient",onChange:e.handleChange}))),l.a.createElement(j,{type:"submit",value:"Submit",color:"success",size:"lg",onClick:function(){t()}},l.a.createElement("i",{className:"fa fa-save"})," \xa0Create"))))))}))}}]),t}(l.a.Component)},{path:"/user-page",name:"User Profile",icon:"nc-icon nc-single-02",component:Z},{path:"/up",component:A},{pro:!0,path:"/",name:"Log Out",icon:"nc-icon nc-spaceship"},{redirect:!0,path:"/",pathTo:"/dashboard",name:"Dashboard"}],me=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={isOpen:!1,dropdownOpen:!1,color:"transparent"},a.toggle=a.toggle.bind(Object(v.a)(Object(v.a)(a))),a.dropdownToggle=a.dropdownToggle.bind(Object(v.a)(Object(v.a)(a))),a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"toggle",value:function(){this.state.isOpen?this.setState({color:"transparent"}):this.setState({color:"dark"}),this.setState({isOpen:!this.state.isOpen})}},{key:"dropdownToggle",value:function(e){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"getBrand",value:function(){var e,t=this;return se.map(function(a,n){return a.collapse?a.views.map(function(a,n){return a.path===t.props.location.pathname&&(e=a.name),null}):(a.redirect,a.path===t.props.location.pathname&&(e=a.name)),null}),e}},{key:"openSidebar",value:function(){document.documentElement.classList.toggle("nav-open"),this.refs.sidebarToggle.classList.toggle("toggled")}},{key:"updateColor",value:function(){window.innerWidth<993&&this.state.isOpen?this.setState({color:"dark"}):this.setState({color:"transparent"})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateColor.bind(this))}},{key:"componentDidUpdate",value:function(e){window.innerWidth<993&&e.history.location.pathname!==e.location.pathname&&-1!==document.documentElement.className.indexOf("nav-open")&&(document.documentElement.classList.toggle("nav-open"),this.refs.sidebarToggle.classList.toggle("toggled"))}},{key:"render",value:function(){var e=this;return l.a.createElement(N.w,{color:-1!==this.props.location.pathname.indexOf("full-screen-maps")?"dark":this.state.color,expand:"lg",className:-1!==this.props.location.pathname.indexOf("full-screen-maps")?"navbar-absolute fixed-top":"navbar-absolute fixed-top "+("transparent"===this.state.color?"navbar-transparent ":"")},l.a.createElement(N.k,{fluid:!0},l.a.createElement("div",{className:"navbar-wrapper"},l.a.createElement("div",{className:"navbar-toggle"},l.a.createElement("button",{type:"button",ref:"sidebarToggle",className:"navbar-toggler",onClick:function(){return e.openSidebar()}},l.a.createElement("span",{className:"navbar-toggler-bar bar1"}),l.a.createElement("span",{className:"navbar-toggler-bar bar2"}),l.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),l.a.createElement(N.x,null,this.getBrand())),l.a.createElement(N.y,{onClick:this.toggle},l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),l.a.createElement(N.j,{isOpen:this.state.isOpen,navbar:!0,className:"justify-content-end"})))}}]),t}(l.a.Component),de=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"footer"+(this.props.default?" footer-default":"")},l.a.createElement(N.k,{fluid:!!this.props.fluid},l.a.createElement(N.z,null,l.a.createElement("div",{className:"credits ml-auto"},l.a.createElement("div",{className:"copyright"},"\xa9 ",1900+(new Date).getYear(),", made with ",l.a.createElement("i",{className:"fa fa-heart heart"})," by EMR")))))}}]),t}(l.a.Component),ue=a(310),pe=a(119),he=a.n(pe),Ee=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).activeRoute.bind(Object(v.a)(Object(v.a)(a))),a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"activeRoute",value:function(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}},{key:"componentDidMount",value:function(){navigator.platform.indexOf("Win")>-1&&(ie=new $.a(this.refs.sidebar,{suppressScrollX:!0,suppressScrollY:!1}))}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&ie.destroy()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"sidebar","data-color":this.props.bgColor,"data-active-color":this.props.activeColor},l.a.createElement("div",{className:"logo"},l.a.createElement("a",{href:"./dashboard",className:"simple-text logo-mini"},l.a.createElement("div",{className:"logo-img"},l.a.createElement("img",{src:he.a,alt:"react-logo"}))),l.a.createElement("a",{href:"./dashboard",className:"simple-text logo-normal"},"E M R")),l.a.createElement("div",{className:"sidebar-wrapper",ref:"sidebar"},l.a.createElement(N.v,null,this.props.routes.map(function(t,a){return t.redirect?null:l.a.createElement("li",{className:e.activeRoute(t.path)+(t.pro?" active-pro":""),key:a},l.a.createElement(ue.a,{to:t.path,className:"nav-link",activeClassName:"active"},l.a.createElement("i",{className:t.icon}),l.a.createElement("p",null,t.name)))}))))}}]),t}(l.a.Component),be=[{path:"/",name:"Home",component:function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this,e))).handleActiveClick=function(e){a.setState({activeColor:e})},a.handleBgClick=function(e){a.setState({backgroundColor:e})},a.state={backgroundColor:"black",activeColor:"info"},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){navigator.platform.indexOf("Win")>-1&&(oe=new $.a(this.refs.mainPanel),document.body.classList.toggle("perfect-scrollbar-on"))}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&(oe.destroy(),document.body.classList.toggle("perfect-scrollbar-on"))}},{key:"componentDidUpdate",value:function(e){"PUSH"===e.history.action&&(this.refs.mainPanel.scrollTop=0,document.scrollingElement.scrollTop=0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement(Ee,Object.assign({},this.props,{routes:se,bgColor:this.state.backgroundColor,activeColor:this.state.activeColor})),l.a.createElement("div",{className:"main-panel",ref:"mainPanel"},l.a.createElement(me,this.props),l.a.createElement(m.a,null,se.map(function(e,t){return e.pro?null:e.redirect?l.a.createElement(L.a,{from:e.path,to:e.pathTo,key:t}):l.a.createElement(d.a,{path:e.path,component:e.component,key:t})})),l.a.createElement(de,{fluid:!0})))}}]),t}(l.a.Component)}],fe=a(122),ge=a(308),ve=a(38);a.d(t,"client",function(){return Ce});var Ne=Object(i.a)(),ye=new ge.a,Ce=new fe.a({link:new ve.a,cache:ye,uri:"https://api.graph.cool/simple/v1/cjnaaji6g014p0127lqfjvz73"});c.a.render(l.a.createElement(w.ApolloProvider,{client:Ce},l.a.createElement(o.a,null,l.a.createElement(s.a,{history:Ne},l.a.createElement(m.a,null,be.map(function(e,t){return l.a.createElement(d.a,{path:e.path,key:t,component:e.component})}))))),document.getElementById("root"))},78:function(e,t){e.exports={dashboard24HoursPerformanceChart:{data:function(e){return{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],datasets:[{borderColor:"#6bd098",backgroundColor:"#6bd098",pointRadius:0,pointHoverRadius:0,borderWidth:3,data:[300,310,316,322,330,326,333,345,338,354]},{borderColor:"#f17e5d",backgroundColor:"#f17e5d",pointRadius:0,pointHoverRadius:0,borderWidth:3,data:[320,340,365,360,370,385,390,384,408,420]},{borderColor:"#fcc468",backgroundColor:"#fcc468",pointRadius:0,pointHoverRadius:0,borderWidth:3,data:[370,394,415,409,425,445,460,450,478,484]}]}},options:{legend:{display:!1},tooltips:{enabled:!1},scales:{yAxes:[{ticks:{fontColor:"#9f9f9f",beginAtZero:!1,maxTicksLimit:5},gridLines:{drawBorder:!1,zeroLineColor:"#ccc",color:"rgba(255,255,255,0.05)"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent",display:!1},ticks:{padding:20,fontColor:"#9f9f9f"}}]}}},dashboardEmailStatisticsChart:{data:function(e){return{labels:[1,2,3],datasets:[{label:"Emails",pointRadius:0,pointHoverRadius:0,backgroundColor:["#e3e3e3","#4acccd","#fcc468","#ef8157"],borderWidth:0,data:[342,480,530,120]}]}},options:{legend:{display:!1},pieceLabel:{render:"percentage",fontColor:["white"],precision:2},tooltips:{enabled:!1},scales:{yAxes:[{ticks:{display:!1},gridLines:{drawBorder:!1,zeroLineColor:"transparent",color:"rgba(255,255,255,0.05)"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{display:!1}}]}}},dashboardNASDAQChart:{data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[0,19,15,20,30,40,40,50,25,30,50,70],fill:!1,borderColor:"#fbc658",backgroundColor:"transparent",pointBorderColor:"#fbc658",pointRadius:4,pointHoverRadius:4,pointBorderWidth:8},{data:[0,5,10,12,20,27,30,34,42,45,55,63],fill:!1,borderColor:"#51CACF",backgroundColor:"transparent",pointBorderColor:"#51CACF",pointRadius:4,pointHoverRadius:4,pointBorderWidth:8}]},options:{legend:{display:!1,position:"top"}}}}}},[[125,2,1]]]);
//# sourceMappingURL=main.e8a1914a.chunk.js.map