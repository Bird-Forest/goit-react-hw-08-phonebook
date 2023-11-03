"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[35],{9015:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var i,r,o,a,d,c=t(9434),l=t(6916),s=function(n){return n.contacts.isLoading},p=function(n){return n.contacts.error},u=(0,l.P1)([function(n){return n.contacts.users},function(n){return n.filter.select}],(function(n,e){return null!==e?n.filter((function(n){return n.name.toLowerCase().includes(e)})):n})),x=t(2791),f=t(168),h=t(5867),g=h.ZP.ul(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 0;\n  margin: 0;\n  .icon-sad {\n    width: 60px;\n    height: 60px;\n    fill: #673ab7;\n  }\n"]))),m=t(7425),b=h.ZP.li(r||(r=(0,f.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  min-width: 360px;\n  gap: 8px;\n"]))),w=h.ZP.p(o||(o=(0,f.Z)(["\n  width: 250px;\n  height: 30px;\n  font-size: 16px;\n  font-weight: 700;\n  border-radius: 4px;\n  outline: none;\n  border: 1px solid #7e57c2;\n  color: #673ab7;\n  padding: 0 8px;\n  margin: 0;\n"]))),Z=h.ZP.p(a||(a=(0,f.Z)(["\n  width: 150px;\n  height: 30px;\n  font-size: 16px;\n  font-weight: 700;\n  border-radius: 4px;\n  outline: none;\n  color: #673ab7;\n  border: 1px solid #7e57c2;\n  padding: 0 8px;\n  margin: 0;\n"]))),j=h.ZP.button(d||(d=(0,f.Z)(["\n  display: inline-block;\n  background-color: #ede7f6;\n  width: 30px;\n  height: 30px;\n  color: white;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  .icon-delete {\n    width: 30px;\n    height: 30px;\n    fill: #673ab7;\n    &:hover,\n    :focus {\n      fill: #7c4dff;\n    }\n  }\n"]))),v=t(3634),y=t(6382),k=t(3329);function P(n){var e=n.contact,t=(0,c.I0)();return(0,k.jsxs)(b,{id:e.id,children:[(0,k.jsx)(w,{children:e.name}),(0,k.jsx)(Z,{children:e.number}),(0,k.jsx)(j,{type:"button",onClick:function(){return t((0,v.GK)(e.id))},children:(0,k.jsx)(m.qNE,{className:"icon-delete"})})]},(0,y.nanoid)())}var z,N,C,_,q,A,I=t(860),F=t(6436);function L(){var n=(0,c.I0)(),e=(0,c.v9)(s),t=(0,c.v9)(p),i=(0,c.v9)(u);(0,x.useEffect)((function(){n((0,v.yF)())}),[n]);var r=Array.isArray(i)&&0!==i.length;return(0,k.jsxs)(g,{children:[e&&(0,k.jsx)(F.Z,{}),t&&(0,k.jsx)("p",{children:t}),r?i.map((function(n){return(0,k.jsx)(P,{contact:n},(0,y.nanoid)())})):(0,k.jsx)(I.cVW,{className:"icon-sad"})]})}var R=h.ZP.form(z||(z=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 4px;\n  min-width: 360px;\n  /* margin-top: 100px; */\n  /* margin-left: auto;\n  margin-right: auto; */\n  padding: 8px 0;\n  margin: 0 auto;\n  @media screen and (min-width: 800px) {\n    width: 800px;\n    /* margin-top: 60px; */\n  }\n"]))),D=h.ZP.label(N||(N=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #7e57c2;\n  padding: 0;\n  margin: 0;\n"]))),E=h.ZP.input(C||(C=(0,f.Z)(["\n  width: 280px;\n  height: 30px;\n  font-size: 16px;\n  font-weight: 700;\n  border-radius: 4px;\n  outline: none;\n  border: 1px solid #7e57c2;\n  color: #673ab7;\n  padding: 0 8px;\n  &:hover,\n  :focus {\n    background-color: #b39ddb;\n    border: 1px solid #b39ddb;\n  }\n"]))),K=h.ZP.div(_||(_=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 8px;\n  width: 240px;\n"]))),G=h.ZP.input(q||(q=(0,f.Z)(["\n  width: 180px;\n  height: 30px;\n  font-size: 16px;\n  font-weight: 700;\n  border-radius: 4px;\n  outline: none;\n  color: #673ab7;\n  border: 1px solid #7e57c2;\n  padding: 0 8px;\n  cursor: pointer;\n  &:hover,\n  :focus {\n    background-color: #b39ddb;\n    border: 1px solid #b39ddb;\n  }\n"]))),Q=h.ZP.button(A||(A=(0,f.Z)(["\n  display: inline-block;\n  background-color: #ede7f6;\n  width: 30px;\n  height: 30px;\n  color: white;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  .icon-add {\n    width: 30px;\n    height: 30px;\n    fill: #673ab7;\n    &:hover,\n    :focus {\n      fill: #7c4dff;\n    }\n  }\n"])));function S(){var n=(0,c.I0)(),e=(0,c.v9)((function(n){return n.contacts.users}));return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(R,{onSubmit:function(t){t.preventDefault();var i={name:t.target.elements.name.value,number:t.target.elements.number.value};console.log(i);var r=e.some((function(n){return n.name===t.target.elements.name.value}));if(r)return alert("".concat(r," is already in contacts")),void t.target.reset();n((0,v.uK)(i)),t.target.reset()},children:[(0,k.jsxs)(D,{children:["Name",(0,k.jsx)(E,{type:"text",name:"name",required:!0})]}),(0,k.jsxs)(K,{children:[(0,k.jsxs)(D,{children:["Number",(0,k.jsx)(G,{type:"tel",name:"number",required:!0})]}),(0,k.jsx)(Q,{type:"submit",children:(0,k.jsx)(m.jus,{className:"icon-add"})})]})]})})}var U=t(7071);function V(){var n=(0,c.v9)(s);return(0,k.jsxs)(U.aR,{children:[(0,k.jsx)(U.hA,{children:"Contacts Page"}),(0,k.jsx)(S,{}),(0,k.jsx)("div",{children:n&&"Request in progress..."}),(0,k.jsx)(L,{})]})}},7071:function(n,e,t){t.d(e,{hA:function(){return w},IU:function(){return m},Ly:function(){return h},aR:function(){return b},NF:function(){return x},QD:function(){return g},un:function(){return f}});var i,r,o,a,d,c,l,s=t(168),p=t(5867),u=t.p+"static/media/hends.510553930ee411343c99.jpg",x=p.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  /* background-image: url('https://celes.club/uploads/posts/2023-03/thumbs/1679452484_celes-club-p-fon-druzhba-vkontakte-97.jpg'); */\n  background-image: url(",");\n  object-fit: cover;\n  background-repeat: no-repeat;\n  min-width: 360px;\n  height: 1200px;\n  @media screen and (min-width: 800px) {\n    width: 800px;\n  }\n"])),u),f=p.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: #e1f5fe;\n  /* gap: 20px; */\n  margin: 0;\n"]))),h=p.ZP.h2(o||(o=(0,s.Z)(["\n  display: block;\n  /* margin-bottom: 10px; */\n  font-size: 24px;\n  padding: 0;\n  margin: 160px auto 20px auto;\n  color: #01579b;\n"]))),g=p.ZP.div(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: #ccff90;\n  /* gap: 20px; */\n  margin: 0;\n"]))),m=p.ZP.h2(d||(d=(0,s.Z)(["\n  display: block;\n  /* margin-bottom: 10px; */\n  font-size: 24px;\n  padding: 0;\n  margin: 160px auto 20px auto;\n  color: #388e3c;\n"]))),b=p.ZP.div(c||(c=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: #ede7f6;\n  gap: 20px;\n  margin: 0;\n"]))),w=p.ZP.div(l||(l=(0,s.Z)(["\n  display: flex;\n  min-width: 360px;\n  max-height: 100px;\n  font-size: 4px;\n  padding: 0;\n  margin: 0 auto 68px auto;\n  color: #ede7f6;\n  @media screen and (min-width: 600px) {\n    width: 800px;\n    /* height: 40px; */\n    margin: 0 auto 32px auto;\n  }\n"])))}}]);
//# sourceMappingURL=35.df8c8e9c.chunk.js.map