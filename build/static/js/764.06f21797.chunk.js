"use strict";(self.webpackChunkquatro_em_linha_frontend=self.webpackChunkquatro_em_linha_frontend||[]).push([[764],{9043:function(e,a,o){o.d(a,{Z:function(){return g}});var i=o(4942),n=o(1413),r=o(9439),t=o(7621),s=o(9504),l=o(493),c=o(9834),d=o(6151),m=o(4852),u=o(8096),x=o(4554),p=o(890),v=o(765),h=o(5523),b=o(4479),j=o(2791),Z=o(8439),f=o(915),y=o(4648),C=o(1696),P=o(8447),q=o(184),I=(0,f.D)();function g(e){var a=(0,j.useState)(w),o=(0,r.Z)(a,2),f=o[0],g=o[1],H=(0,j.useState)({nome:"",value:""}),F=(0,r.Z)(H,2),A=F[0],L=F[1],J=(0,j.useState)(!1),R=(0,r.Z)(J,2),S=R[0],D=R[1],V=(0,j.useState)(null),W=(0,r.Z)(V,2),M=W[0],N=W[1],z=(0,j.useState)(!1),E=(0,r.Z)(z,2),T=E[0],O=E[1],_=window.location.href.split("/")[3];(0,j.useEffect)((function(){O("configuracao"===_)}),[]);return(0,j.useEffect)((function(){console.log("Selection:",f)}),[f]),(0,q.jsxs)(t.Z,{sx:{height:150,display:"block",borderRadius:5,backgroundColor:"primary.lightestMain"},children:[(0,q.jsx)(s.Z,{children:(0,q.jsxs)(l.Z,{sx:{width:"100%",position:"relative",overflow:"auto",maxHeight:120,"& ul":{padding:0},my:"auto"},subheader:(0,q.jsx)("li",{}),children:[(0,q.jsxs)(c.Z,{sx:{backgroundColor:"white",color:"font.main"},children:["Qualifica\xe7\xf5es: ",T&&(0,q.jsx)(d.Z,{sx:{display:""},onClick:function(){return D(!0)},children:(0,q.jsx)(Z.Z,{})})]}),(0,q.jsx)(m.ZP,{children:(0,q.jsxs)(u.Z,{required:!1,children:[f.map((function(e){return(0,q.jsxs)(x.Z,{children:[(0,q.jsx)(p.Z,{sx:{color:"font.main",fontWeight:550},children:e.nome}),(0,q.jsxs)(v.Z,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"Colaborador",name:"radio-buttons-group",sx:{flexDirection:"row",color:"font.main"},value:e.value,onChange:function(a){return function(e,a){var o=f.map((function(o){return a.nome===o.nome?{nome:o.nome,value:e.target.value}:{nome:o.nome,value:o.value}}));g(o)}(a,e)},children:[(0,q.jsx)(h.Z,{sx:{display:"inline"},value:"baixa",control:(0,q.jsx)(b.Z,{}),label:"Baixa"}),(0,q.jsx)(h.Z,{sx:{display:"inline"},value:"media",control:(0,q.jsx)(b.Z,{}),label:"M\xe9dia"}),(0,q.jsx)(h.Z,{sx:{display:"inline"},value:"alta",control:(0,q.jsx)(b.Z,{}),label:"Alta"})]})]},e.nome)})),(0,q.jsx)("div",{id:"compVazio",style:{height:"20px"}})]})})]})}),(0,q.jsx)(P.Z,{open:S,onClose:function(){return D(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,q.jsxs)(x.Z,{sx:k,children:[(0,q.jsx)(p.Z,{id:"modal-modal-title",color:"white",variant:"h6",component:"h2",children:"Qualifica\xe7\xe3o:"}),(0,q.jsxs)(x.Z,{children:[(0,q.jsx)(y.Z,(0,i.Z)({value:M,onChange:function(e,a){"string"===typeof a?N({nome:a}):a&&a.inputValue?N({nome:a.inputValue}):N(a)},filterOptions:function(e,a){var o=I(e,a),i=a.inputValue,n=e.some((function(e){return i===e.nome}));return""===i||n||o.push({inputValue:i,nome:'Add "'.concat(i,'"')}),o},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,options:w,getOptionLabel:function(e){return"string"===typeof e?e:e.inputValue?e.inputValue:e.nome},renderOption:function(e,a){return(0,q.jsx)("li",(0,n.Z)((0,n.Z)({},e),{},{children:a.nome}))},sx:{width:300},freeSolo:!0,renderInput:function(e){return(0,q.jsx)(C.Z,(0,n.Z)((0,n.Z)({},e),{},{label:"Free solo with text demo"}))}},"sx",{my:3})),(0,q.jsxs)(v.Z,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"Colaborador",name:"radio-buttons-group",sx:{flexDirection:"row",color:"font.main"},onChange:function(e){return function(e){var a={nome:null===M||void 0===M?void 0:M.nome,value:e.target.value};console.log("novo array:",a),L(a)}(e)},children:[(0,q.jsx)(h.Z,{sx:{display:"inline"},value:"baixa",control:(0,q.jsx)(b.Z,{}),label:"Baixa"}),(0,q.jsx)(h.Z,{sx:{display:"inline"},value:"media",control:(0,q.jsx)(b.Z,{}),label:"M\xe9dia"}),(0,q.jsx)(h.Z,{sx:{display:"inline"},value:"alta",control:(0,q.jsx)(b.Z,{}),label:"Alta"})]}),(0,q.jsx)(d.Z,{sx:{display:"",mt:2},onClick:function(){return function(){var e=!1,a=f.map((function(a){return A.nome===a.nome?(e=!0,{nome:A.nome,value:A.value}):{nome:a.nome,value:a.value}}));e||a.push(A),g(a)}()},children:"Adicionar"})]})]})})]})}var k={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},w=[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}]},2764:function(e,a,o){o.r(a),o.d(a,{default:function(){return U}});var i=o(2791),n=o(7621),r=o(9504),t=o(890),s=o(493),l=o(1473),c=o(5818),d=o(1889),m=o(68),u=o(3721),x=o(1131),p=o(9439),v=o(6151),h=o(8447),b=o(4554),j=o(6711),Z=o(8384),f=o(9043),y=o(184);function C(e){var a=e.item,o=i.useState(!1),r=(0,p.Z)(o,2),s=r[0],l=r[1];return(0,y.jsxs)(n.Z,{id:"ColaboradorAccDetails",sx:{mt:2,width:"100%",p:5,py:2,backgroundColor:"white",color:"font.main"},children:[(0,y.jsx)(d.ZP,{container:!0,sx:{mb:2.6},justifyContent:"end",children:(0,y.jsxs)(d.ZP,{item:!0,children:[(0,y.jsx)(m.Z,{title:"Aceitar!",placement:"top-start",arrow:!0,children:(0,y.jsx)(v.Z,{sx:{display:"aberto"!==a.status&&"none",m:0,p:0,width:"24px"},children:(0,y.jsx)(Z.Z,{sx:{color:"#00bfa5"}})})}),(0,y.jsx)(m.Z,{title:"Cancelar!",placement:"top-start",arrow:!0,children:(0,y.jsx)(v.Z,{sx:{display:"cancelado"===a.status&&"none",m:0,p:0,width:"24px"},children:(0,y.jsx)(j.Z,{sx:{color:"#dd2c00"}})})})]})}),(0,y.jsxs)(d.ZP,{container:!0,sx:{my:2.6},children:[(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2},children:"Nome:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:9,children:(0,y.jsx)(t.Z,{variant:(0,y.jsx)("a",{}),sx:{display:"inline-block",width:"100%",border:"1px solid black",p:1,borderRadius:2},children:a.nome})})]}),(0,y.jsxs)(d.ZP,{container:!0,sx:{my:2.5},children:[(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2},children:"Empresa:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:9,children:(0,y.jsx)(t.Z,{variant:(0,y.jsx)("a",{}),sx:{display:"inline-block",width:"100%",border:"1px solid black",p:1,borderRadius:2},children:a.empresa})})]}),(0,y.jsxs)(d.ZP,{container:!0,sx:{my:2.5},children:[(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2},children:"Valor/Hora:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:9,children:(0,y.jsx)(t.Z,{variant:(0,y.jsx)("a",{}),sx:{display:"inline-block",width:"100%",border:"1px solid black",p:1,borderRadius:2},children:a.valorHora})})]}),(0,y.jsxs)(d.ZP,{container:!0,sx:{my:2.5},children:[(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2},children:"Data In\xedcio:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{variant:(0,y.jsx)("a",{}),sx:{display:"inline-block",width:"100%",border:"1px solid black",p:1,borderRadius:2},children:a.dtInicio})}),(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2,ml:2},children:"Data Fim:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{variant:(0,y.jsx)("a",{}),sx:{display:"inline-block",width:"100%",border:"1px solid black",p:1,borderRadius:2},children:a.dtFim})})]}),(0,y.jsxs)(d.ZP,{container:!0,sx:{my:2.5},children:[(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2},children:"Qualifica\xe7\xf5es:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:9,children:(0,y.jsx)(f.Z,{})})]}),(0,y.jsxs)(d.ZP,{container:!0,sx:{my:2.5},children:[(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2},children:"Descricao:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:9,children:(0,y.jsx)(t.Z,{variant:(0,y.jsx)("a",{}),sx:{display:"inline-block",width:"100%",border:"1px solid black",p:1,borderRadius:2},children:a.descricao})})]}),(0,y.jsx)(h.Z,{open:s,onClose:function(){return l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,y.jsxs)(b.Z,{sx:P,children:[(0,y.jsx)(t.Z,{id:"modal-modal-title",color:"white",variant:"h6",component:"h2",children:"Voc\xea deseja cancelar o projeto?"}),(0,y.jsx)(v.Z,{children:"Cancelar!"})]})})]})}var P={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},q=o(4568);function I(){return(0,y.jsx)(n.Z,{sx:{position:"absolute",top:"49%",left:"50%",transform:"translate(-50%, -50%)",width:800,height:600,bgcolor:"background.navBar",border:"2px solid #000",boxShadow:24,p:7,borderRadius:40,"&:hover":{color:"font.main"}},children:(0,y.jsxs)(r.Z,{children:[(0,y.jsx)(t.Z,{variant:"span",sx:{textAlign:"center",fontSize:"25px",color:"primary.lightMain",fontWeight:"700"},children:"Notifica\xe7\xf5es"}),(0,y.jsxs)(s.Z,{sx:{width:"100%",maxWidth:"100%",position:"relative",overflow:"auto",maxHeight:530,padding:0,"& ul":{padding:0},mt:0},children:[k.map((function(e,a){return(0,y.jsxs)(l.Z,{className:"MonetizacaoArrayAccordion",sx:{backgroundColor:"background.accordionHeader"},children:[(0,y.jsx)(c.Z,{expandIcon:(0,y.jsx)(x.Z,{}),"aria-controls":"panel1a-content",id:e.nome,sx:{mt:2,border:"1px solid",borderColor:g(e.status),opacity:"80%"},children:(0,y.jsx)(d.ZP,{container:!0,sx:{m:0,p:0},children:(0,y.jsxs)(d.ZP,{item:!0,xs:9,children:[(0,y.jsx)(m.Z,{title:"Estado: ".concat(e.status),placement:"top-start",arrow:!0,children:(0,y.jsx)(q.Z,{sx:{color:g(e.status),mr:1}})}),(0,y.jsx)(t.Z,{variant:"span",sx:{fontSize:14,color:"#000000e4",fontWeight:"700"},children:e.nome})]})})}),(0,y.jsx)(u.Z,{sx:{paddingTop:0},children:(0,y.jsx)(t.Z,{variant:"span",children:(0,y.jsx)(d.ZP,{container:!0,spacing:2,sx:{pl:2},children:(0,y.jsx)(C,{item:e})})})})]},"MonetizacaoArrayAccordionHeader-".concat(a))})),(0,y.jsx)("div",{style:{height:"100px",display:"block"},children:""})]})]})})}var g=function(e){switch(e){case"aberto":return"#fdd835";case"cancelado":return"#ff5252";case"aceito":return"#00bfa5"}},k=[{id:0,nome:"Est\xe1gio Backend",empresa:"Microsoft",status:"aberto",valorHora:"10",dtInicio:"25/12/2023",dtFim:"20/01/2024",qualificacoes:[{nome:"Java",value:"baixa"},{nome:"Linux",value:"baixa"},{nome:"Cloud",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:1,nome:"projeto 1",empresa:"empresa 1",status:"cancelado",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:2,nome:"projeto 2",empresa:"empresa 2",status:"aceito",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:0,nome:"projeto 0",empresa:"empresa 0",status:"aberto",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:1,nome:"projeto 1",empresa:"empresa 1",status:"cancelado",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:2,nome:"projeto 2",empresa:"empresa 2",status:"aceito",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:0,nome:"projeto 0",empresa:"empresa 0",status:"aberto",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:1,nome:"projeto 1",empresa:"empresa 1",status:"cancelado",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:2,nome:"projeto 2",empresa:"empresa 2",status:"aceito",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:0,nome:"projeto 0",empresa:"empresa 0",status:"aberto",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:1,nome:"projeto 1",empresa:"empresa 1",status:"cancelado",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:2,nome:"projeto 2",empresa:"empresa 2",status:"aceito",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:0,nome:"projeto 0",empresa:"empresa 0",status:"aberto",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:1,nome:"projeto 1",empresa:"empresa 1",status:"cancelado",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:2,nome:"projeto 2",empresa:"empresa 2",status:"aceito",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:0,nome:"projeto 0",empresa:"empresa 0",status:"aberto",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:1,nome:"projeto 1",empresa:"empresa 1",status:"cancelado",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:2,nome:"projeto 2",empresa:"empresa 2",status:"aceito",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"}];function w(e){var a=e.item,o=i.useState(!1),r=(0,p.Z)(o,2),s=r[0],l=r[1];return(0,y.jsxs)(n.Z,{id:"ColaboradorAccDetails",sx:{mt:2,width:"100%",p:5,py:2,backgroundColor:"white",color:"font.main"},children:[(0,y.jsx)(d.ZP,{container:!0,sx:{mb:2.6},justifyContent:"end",children:(0,y.jsx)(d.ZP,{item:!0,children:(0,y.jsx)(m.Z,{title:"Cancelar!",placement:"top-start",arrow:!0,children:(0,y.jsx)(v.Z,{onClick:function(){return l(!0)},sx:{display:"cancelado"===a.status&&"none",m:0,p:0,width:"24px"},children:(0,y.jsx)(j.Z,{sx:{color:"#dd2c00"}})})})})}),(0,y.jsxs)(d.ZP,{container:!0,sx:{my:2.6},children:[(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2},children:"Nome:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:9,children:(0,y.jsx)(t.Z,{variant:(0,y.jsx)("a",{}),sx:{display:"inline-block",width:"100%",border:"1px solid black",p:1,borderRadius:2},children:a.nome})})]}),(0,y.jsxs)(d.ZP,{container:!0,sx:{my:2.5},children:[(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2},children:"Empresa:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:9,children:(0,y.jsx)(t.Z,{variant:(0,y.jsx)("a",{}),sx:{display:"inline-block",width:"100%",border:"1px solid black",p:1,borderRadius:2},children:a.empresa})})]}),(0,y.jsxs)(d.ZP,{container:!0,sx:{my:2.5},children:[(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2},children:"Valor/Hora:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:9,children:(0,y.jsx)(t.Z,{variant:(0,y.jsx)("a",{}),sx:{display:"inline-block",width:"100%",border:"1px solid black",p:1,borderRadius:2},children:a.valorHora})})]}),(0,y.jsxs)(d.ZP,{container:!0,sx:{my:2.5},children:[(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2},children:"Data In\xedcio:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{variant:(0,y.jsx)("a",{}),sx:{display:"inline-block",width:"100%",border:"1px solid black",p:1,borderRadius:2},children:a.dtInicio})}),(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2,ml:2},children:"Data Fim:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{variant:(0,y.jsx)("a",{}),sx:{display:"inline-block",width:"100%",border:"1px solid black",p:1,borderRadius:2},children:a.dtFim})})]}),(0,y.jsxs)(d.ZP,{container:!0,sx:{my:2.5},children:[(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2},children:"Qualifica\xe7\xf5es:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:9,children:(0,y.jsx)(f.Z,{})})]}),(0,y.jsxs)(d.ZP,{container:!0,sx:{my:2.5},children:[(0,y.jsx)(d.ZP,{item:!0,xs:3,children:(0,y.jsx)(t.Z,{sx:{display:"inline-block",mr:2},children:"Descricao:"})}),(0,y.jsx)(d.ZP,{item:!0,xs:9,children:(0,y.jsx)(t.Z,{variant:(0,y.jsx)("a",{}),sx:{display:"inline-block",width:"100%",border:"1px solid black",p:1,borderRadius:2},children:a.descricao})})]}),(0,y.jsx)(h.Z,{open:s,onClose:function(){return l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,y.jsxs)(b.Z,{sx:H,children:[(0,y.jsx)(t.Z,{id:"modal-modal-title",color:"white",variant:"h6",component:"h2",children:"Voc\xea deseja cancelar o projeto?"}),(0,y.jsx)(v.Z,{children:"Cancelar!"})]})})]})}var H={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},F=o(872),A=o(5130),L=o(8439),J=o(1413),R=o(8096),S=o(829),D=o(4110),V=o(7071),W=o(1652),M=o(6119),N=o(4560),z=o(4750),E=o(7892),T=o.n(E);function O(e){var a=e.setOpen,o=function(e){switch(e.preventDefault(),e.target.id){case"input-nome":j((function(a){return(0,J.Z)((0,J.Z)({},a),{},{nome:{value:e.target.value}})}));break;case"input-descricao":j((function(a){return(0,J.Z)((0,J.Z)({},a),{},{email:{value:e.target.value}})}));break;case"input-endereco":j((function(a){return(0,J.Z)((0,J.Z)({},a),{},{endereco:{value:e.target.value}})}));break;case"input-valorHora":j((function(a){return(0,J.Z)((0,J.Z)({},a),{},{valorHora:{value:e.target.value}})}))}},n=(0,i.useState)(T()(T()())),r=(0,p.Z)(n,2),t=r[0],s=r[1],l=(0,i.useState)(T()(T()())),c=(0,p.Z)(l,2),m=c[0],u=c[1],x=i.useState({nome:{value:"",error:!1,helperText:"",color:"primary"},descricao:{value:"",error:!1,helperText:"",color:"primary"},endereco:{value:"",error:!1,helperText:"",color:"primary"}}),h=(0,p.Z)(x,2),b=h[0],j=h[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(d.ZP,{container:!0,children:[(0,y.jsx)(d.ZP,{item:!0,xs:12,children:(0,y.jsxs)(R.Z,{fullWidth:!0,error:b.nome.error,required:!0,sx:{mb:3,pr:5},children:[(0,y.jsx)(S.Z,{htmlFor:"input-nome",sx:{color:"font.main"},children:"Nome:"}),(0,y.jsx)(D.Z,{onChange:o,id:"input-nome","aria-describedby":"input-your-name"}),(0,y.jsx)(V.Z,{id:"my-helper-input-nome",children:b.nome.helperText})]})}),(0,y.jsx)(d.ZP,{item:!0,xs:12,children:(0,y.jsxs)(R.Z,{fullWidth:!0,error:b.descricao.error,required:!0,sx:{mb:3,pr:5},children:[(0,y.jsx)(S.Z,{htmlFor:"input-documento",sx:{color:"font.main"},children:"Descri\xe7\xe3o:"}),(0,y.jsx)(D.Z,{onChange:o,id:"input-descricao","aria-describedby":"input-your-document"}),(0,y.jsx)(V.Z,{id:"my-helper-input-documento",children:b.descricao.helperText})]})})]}),(0,y.jsx)(d.ZP,{container:!0,children:(0,y.jsx)(d.ZP,{item:!0,xs:12,children:(0,y.jsxs)(R.Z,{fullWidth:!0,error:b.endereco.error,required:!0,sx:{mb:3,pr:5},children:[(0,y.jsx)(S.Z,{htmlFor:"input-email",sx:{color:"font.main"},children:"Endere\xe7o:"}),(0,y.jsx)(D.Z,{onChange:o,id:"input-documento","aria-describedby":"input-your-email"}),(0,y.jsx)(V.Z,{id:"my-helper-input-email",children:b.endereco.helperText})]})})}),(0,y.jsx)(d.ZP,{container:!0,children:(0,y.jsx)(d.ZP,{item:!0,xs:12,children:(0,y.jsxs)(R.Z,{fullWidth:!0,error:b.endereco.error,required:!0,sx:{mb:3,pr:5},children:[(0,y.jsx)(S.Z,{htmlFor:"input-valorHora",sx:{color:"font.main"},children:"Valor/Hora:"}),(0,y.jsx)(D.Z,{onChange:o,id:"input-valorHora","aria-describedby":"input-your-valorHora"})]})})}),(0,y.jsx)(d.ZP,{item:!0,xs:12,id:"CadastroColaboradorDataNascimento",children:(0,y.jsx)(W._,{dateAdapter:z.y,children:(0,y.jsxs)(N.C,{components:["DateField"],children:[(0,y.jsx)(M.N,{label:"Data In\xedcio",value:t,onChange:function(e){return s(e)}}),(0,y.jsx)(M.N,{label:"Data Fim",value:m,onChange:function(e){return u(e)}})]})})}),(0,y.jsx)(v.Z,{sx:{mt:3},onClick:function(){return a(!1)},children:"Cadastrar Projeto"})]})}function _(){var e=i.useState(!1),a=(0,p.Z)(e,2),o=a[0],j=a[1];return(0,y.jsxs)(n.Z,{sx:{position:"absolute",top:"49%",left:"50%",transform:"translate(-50%, -50%)",width:800,height:600,bgcolor:"background.navBar",border:"2px solid #000",boxShadow:24,p:7,borderRadius:40,"&:hover":{color:"font.main"}},children:[(0,y.jsxs)(r.Z,{children:[(0,y.jsx)(t.Z,{variant:"span",sx:{textAlign:"center",fontSize:"25px",color:"primary.lightMain",fontWeight:"700"},children:"Notifica\xe7\xf5es empresa"}),(0,y.jsx)(v.Z,{onClick:function(){return j(!0)},children:(0,y.jsx)(L.Z,{})}),(0,y.jsxs)(s.Z,{sx:{width:"100%",maxWidth:"100%",position:"relative",overflow:"auto",maxHeight:530,padding:0,"& ul":{padding:0},mt:0},children:[K.map((function(e,a){return(0,y.jsxs)(l.Z,{className:"MonetizacaoArrayAccordion",sx:{backgroundColor:"background.accordionHeader"},children:[(0,y.jsx)(c.Z,{expandIcon:(0,y.jsx)(x.Z,{}),"aria-controls":"panel1a-content",id:e.nome,sx:{mt:2,border:"1px solid",borderColor:B(e.status),opacity:"80%"},children:(0,y.jsx)(d.ZP,{container:!0,sx:{m:0,p:0},children:(0,y.jsxs)(d.ZP,{item:!0,xs:9,children:[(0,y.jsx)(m.Z,{title:"Estado: ".concat(e.status),placement:"top-start",arrow:!0,children:(0,y.jsx)(q.Z,{sx:{color:B(e.status),mr:1}})}),(0,y.jsx)(t.Z,{variant:"span",sx:{mr:3,fontSize:14,color:"#000000e4",fontWeight:"700"},children:e.nome}),(0,y.jsx)(m.Z,{title:"Aceites...",placement:"top-start",arrow:!0,children:(0,y.jsxs)(v.Z,{sx:{display:"aceito"===e.qtAceite&&"none",m:0,p:0,width:"24px",color:"font.main"},children:[e.qtAceite,(0,y.jsx)(F.Z,{sx:{color:"#00bfa5"}})]})}),(0,y.jsx)(m.Z,{title:"Recusas...",placement:"top-start",arrow:!0,children:(0,y.jsxs)(v.Z,{sx:{display:"cancelado"===e.qtdRecusa&&"none",m:0,p:0,width:"24px",color:"font.main"},children:[e.qtdRecusa,(0,y.jsx)(A.Z,{sx:{color:"#dd2c00"}})]})})]})})}),(0,y.jsx)(u.Z,{sx:{paddingTop:0},children:(0,y.jsx)(t.Z,{variant:"span",children:(0,y.jsx)(d.ZP,{container:!0,spacing:2,sx:{pl:2},children:(0,y.jsx)(w,{item:e})})})})]},"MonetizacaoArrayAccordionHeader-".concat(a))})),(0,y.jsx)("div",{style:{height:"100px",display:"block"},children:""})]})]}),(0,y.jsx)(h.Z,{open:o,onClose:function(){return j(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,y.jsx)(b.Z,{sx:Q,children:(0,y.jsx)(O,{setOpen:j})})})]})}var B=function(e){switch(e){case"aberto":return"#fdd835";case"cancelado":return"#ff5252";case"aceito":return"#00bfa5"}},Q={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},K=[{id:0,nome:"projeto 0",empresa:"empresa 0",status:"aberto",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:1,nome:"projeto 1",empresa:"empresa 1",status:"cancelado",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:2,nome:"projeto 2",empresa:"empresa 2",status:"aceito",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:0,nome:"projeto 0",empresa:"empresa 0",status:"aberto",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:1,nome:"projeto 1",empresa:"empresa 1",status:"cancelado",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:2,nome:"projeto 2",empresa:"empresa 2",status:"aceito",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:0,nome:"projeto 0",empresa:"empresa 0",status:"aberto",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:1,nome:"projeto 1",empresa:"empresa 1",status:"cancelado",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:2,nome:"projeto 2",empresa:"empresa 2",status:"aceito",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:0,nome:"projeto 0",empresa:"empresa 0",status:"aberto",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:1,nome:"projeto 1",empresa:"empresa 1",status:"cancelado",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:2,nome:"projeto 2",empresa:"empresa 2",status:"aceito",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:0,nome:"projeto 0",empresa:"empresa 0",status:"aberto",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:1,nome:"projeto 1",empresa:"empresa 1",status:"cancelado",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:2,nome:"projeto 2",empresa:"empresa 2",status:"aceito",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:0,nome:"projeto 0",empresa:"empresa 0",status:"aberto",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:1,nome:"projeto 1",empresa:"empresa 1",status:"cancelado",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"},{id:2,nome:"projeto 2",empresa:"empresa 2",status:"aceito",valorHora:"1000",dtInicio:"12/12/2023",dtFim:"15/12/2023",qtAceite:2,qtdRecusa:1,qualificacoes:[{nome:"Java",value:"alta"},{nome:"Python",value:"baixa"},{nome:"C",value:"baixa"},{nome:"C#",value:"media"}],descricao:"Lorem Ipsum"}],G=o(5118);function U(e){var a=(0,i.useContext)(G.Z).tipo;return(0,y.jsx)(y.Fragment,{children:"empresa"===a?(0,y.jsx)(_,{}):(0,y.jsx)(I,{})})}}}]);
//# sourceMappingURL=764.06f21797.chunk.js.map