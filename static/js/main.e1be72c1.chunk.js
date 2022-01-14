(this.webpackJsonpyugidraft=this.webpackJsonpyugidraft||[]).push([[0],{40:function(n,e,t){n.exports=t(72)},45:function(n,e,t){},46:function(n,e,t){},72:function(n,e,t){"use strict";t.r(e);var a,r,o,i,c,l,b,s,d,u,m,f,g,p,h=t(0),x=t.n(h),j=t(11),y=t.n(j),O=(t(45),t(46),t(1)),v=t(9),k=t(3),E=t(14),w=t(12),L=t.n(w),z="https://yugidraft.herokuapp.com/",S=t(2);var C,P,T,I,D,R,N,B,M,F,_,J,A,Y,q,G,W,H,K,U,Q,V,X,Z,$,nn,en,tn,an,rn,on=Object(S.a)(a||(a=Object(O.a)(["\n  body {\n    text-align: center;\n    border: 1em solid;\n    border-image: linear-gradient(130deg, rgb(50,63,152), rgb(246,224,105), rgb(248,54,116) ) 1;\n    background: linear-gradient(129deg, rgba(14,17,40,1) 0%, rgba(40,9,19,1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0;\n    height: 95vh;\n  }\n  button,\n  input {\n    appearance: none;\n    border: 0;\n  }\n"]))),cn=S.b.hr(r||(r=Object(O.a)(["\n  border-top: 1px solid rgba(255, 255, 255, 0.04);\n  width: 200px;\n  margin-bottom: 2rem;\n"]))),ln=S.b.div(o||(o=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100%;\n  background: linear-gradient(129deg, rgba(14,17,40,1) 0%, rgba(40,9,19,1) 100%);\n  padding: 2em;\n"]))),bn=S.b.h1(i||(i=Object(O.a)(["\n  width: 100%;\n  position: relative;\n  margin: 0 0 0.5rem;\n  padding: 0 1rem;\n  color: white;\n  font-size: 2.5rem;\n"]))),sn=S.b.p(c||(c=Object(O.a)(["\n  color: red;\n  font-size: 0.8rem;\n"]))),dn=S.b.p(l||(l=Object(O.a)(["\n  color: #fff;\n\n  a {\n    color: #2cce9f;\n  }\n"]))),un=S.b.p(b||(b=Object(O.a)(["\n  font-size: 1em;\n  color: #fff;\n"]))),mn=Object(S.b)(E.b)(s||(s=Object(O.a)(["\n  display: block;\n  background: rgb(246,224,105);\n  appearance: none;\n  color: #000;\n  font-size: 1em;\n  border: 0;\n  padding: 0.7em 1em;\n  border-radius: 8px;\n  margin: 0.75em 0;\n  font-weight: bold;\n  transition: opacity 0.25s;\n  text-decoration: none;\n\n  &:hover,\n  &:focus,\n  &:disabled {\n    opacity: 0.5;\n    outline: 0;\n  }\n"]))),fn=S.b.button(d||(d=Object(O.a)(["\n  display: block;\n  appearance: none;\n  background: rgb(248,54,116);\n  color: #000;\n  font-size: 1em;\n  border: 0;\n  padding: 0.7em 1em;\n  border-radius: 8px;\n  margin: 1em 0.5em;\n  font-weight: bold;\n  transition: opacity 0.25s;\n\n  &:hover,\n  &:focus,\n  &:disabled {\n    opacity: 0.5;\n    outline: 0;\n  }\n"]))),gn=S.b.p(u||(u=Object(O.a)(['\n  position: relative;\n  font-style: italic;\n  color: #fff;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-top: 1px solid #fff;\n    width: 70px;\n    height: 1px;\n  }\n']))),pn=S.b.span(m||(m=Object(O.a)(["\n  position: relative;\n  background: linear-gradient(129deg, rgba(14,17,40,1) 0%, rgba(40,9,19,1) 100%);\n  padding: 0 0.5em;\n"]))),hn=S.b.input(f||(f=Object(O.a)(["\n  appearance: none;\n  border-radius: 8px;\n  padding: 0.35em 0.25em;\n  border: 2px solid transparent;\n  text-align: center;\n  transition: border-color 0.25s;\n  max-width: 120px;\n  font-size: 1em;\n\n  &:focus {\n    outline: 0;\n    border-color: #2cce9f;\n  }\n"]))),xn=S.b.label(g||(g=Object(O.a)(["\n  display: block;\n  text-align: left;\n  text-transform: uppercase;\n  font-size: 0.813em;\n  color: #fff;\n  margin-bottom: 0.5em;\n"]))),jn=S.b.form(p||(p=Object(O.a)(["\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),yn=function(){var n=Object(k.f)(),e=Object(h.useRef)(null),t=Object(h.useState)({}),a=Object(v.a)(t,2),r=a[0],o=a[1],i=Object(h.useState)(""),c=Object(v.a)(i,2),l=c[0],b=c[1];return x.a.createElement(ln,null,x.a.createElement(on,null),x.a.createElement(bn,null,"Yugidraft"),x.a.createElement(un,null,"Draft and create your own Yu-Gi-Oh! decks"),x.a.createElement(cn,null),x.a.createElement(jn,{onSubmit:function(t){return function(n){var e=n.e,t=n.setLoading,a=n.joinLobbyInputRef,r=n.history,o=n.setErrorMsg;e.preventDefault(),a.current.value.length<2?o({type:"join",message:"Room name must be at least ".concat(2," characters long.")}):a.current.value.length>16?o({type:"join",message:"Room name must be no longer than ".concat(16," characters.")}):(t("join"),L.a.post("".concat(z,"/api/checkAvailableRooms"),{roomName:a.current.value}).then((function(n){t(""),n.data?r.push("/l/".concat(a.current.value)):o({type:"join"})})).catch((function(n){o({type:"join",message:"There was an error on the server. Please try again."}),console.error(n)})))}({e:t,setLoading:b,joinLobbyInputRef:e,history:n,setErrorMsg:o})}},x.a.createElement(xn,{htmlFor:"joinlobby"},"GOT THE LOBBY CODE?"),x.a.createElement(hn,{ref:e,id:"joinlobby",minLength:2,maxLength:16,text:"text",required:!0}),x.a.createElement(fn,{type:"submit",disabled:"join"===l},"Join Lobby"),"join"!==r.type||r.message?"join"===r.type&&r.message&&x.a.createElement(sn,null,r.message):x.a.createElement(dn,null,"Lobby doesn't exist. Would you like to"," ",x.a.createElement(E.b,{to:"/g/".concat(e.current.value)},"create it?")),x.a.createElement(gn,null,x.a.createElement(pn,null,"OR"))),x.a.createElement(mn,{to:"/create-lobby"},"Create Lobby"))},On=t(39),vn=t(38),kn=t.n(vn),En=Object(S.a)(C||(C=Object(O.a)(["\n  html {\n    position: static;\n    overflow: visible;\n  }\n  body {\n    text-align: center;\n    background: linear-gradient(129deg, rgba(14,17,40,1) 0%, rgba(40,9,19,1) 100%);\n    border: 1em solid;\n    border-image: linear-gradient(130deg, rgb(50,63,152), rgb(246,224,105), rgb(248,54,116) ) 1;\n    padding: 2em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 88vh;\n  }\n"]))),wn=S.b.div(P||(P=Object(O.a)(['\n  margin: 20px;\n  display: grid;\n  grid-template-columns: 30% 30% 10% 25%;\n  grid-template-rows: auto;\n  gap: 15px 10px;\n  grid-template-areas:\n    "h h . d"\n    "c c . s"\n    "c c . s"\n    "c c . s";\n']))),Ln=S.b.h1(T||(T=Object(O.a)(["\n  grid-area: h;\n  width: 100%;\n  position: relative;\n  margin: 0 0 1rem;\n  padding: 0 1rem;\n  color: white;\n"]))),zn=S.b.ul(I||(I=Object(O.a)(["\n  grid-area: s;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  border: 3px solid #2cce9f;\n  border-radius: 8px;\n  overflow: scroll;\n  max-height: 640px;\n"]))),Sn=S.b.li(D||(D=Object(O.a)(["\n  color: #fff;\n  padding: 5px;\n  border-bottom: 3px solid rgb(44, 206, 159);\n"]))),Cn=S.b.div(R||(R=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  flex-direction: row;\n  height: 70vh;\n  overflow: scroll;\n"]))),Pn=S.b.div(N||(N=Object(O.a)(["\n  grid-area: c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border: 3px solid;\n  border-image: linear-gradient(130deg, rgb(248,54,116), rgb(246,224,105), rgb(50,63,152) ) 1;\n  "]))),Tn=S.b.img(B||(B=Object(O.a)(["\n  max-width: 250px;\n  height: auto;\n  margin: auto;\n  margin-bottom: 20px;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),In=S.b.p(M||(M=Object(O.a)(["\n  font-size: 1.5em;\n  color: #fff;\n"]))),Dn=S.b.button(F||(F=Object(O.a)(["\n  grid-area: d;\n  background: rgb(64, 224, 208);\n  appearance: none;\n  color: #000;\n  font-size: 1em;\n  border: 0;\n  padding: 0.7em 1em;\n  border-radius: 8px;\n  margin: 0.75em 0;\n  font-weight: bold;\n  transition: opacity 0.25s;\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover,\n  &:focus,\n  &:disabled {\n    opacity: 0.5;\n    outline: 0;\n  }\n"]))),Rn=function(){var n=Object(h.useState)([]),e=Object(v.a)(n,2),t=e[0],a=e[1],r=Object(h.useState)([]),o=Object(v.a)(r,2),i=o[0],c=o[1],l=Object(h.useState)(""),b=Object(v.a)(l,2);b[0],b[1];return Object(h.useEffect)((function(){L.a.post("".concat(z,"/api/getInitialCards"),{deckName:"2013 Collectible Tins Wave 2",roomId:"mfqsc"}).then((function(n){a(n.data)}))}),[]),x.a.createElement(x.a.Fragment,null,x.a.createElement(En,null),x.a.createElement(wn,null,x.a.createElement(Ln,null,"Create your deck!"),x.a.createElement(Pn,null,x.a.createElement(In,null,"Pick your cards"),t&&x.a.createElement(Cn,null,t.map((function(n){var e=n.name,t=n.img;return x.a.createElement(Tn,{src:t,alt:e,onClick:function(n){return function(n){c([].concat(Object(On.a)(i),[{cardName:n.target.alt}])),console.log(i)}(n)}})})))),x.a.createElement(zn,null,i.map((function(n,e){return x.a.createElement(Sn,{key:e},n.cardName)}))),x.a.createElement(Dn,{onClick:function(){return function(){var n=Object.values(i),e=new Blob([JSON.stringify(n)],{type:"text/plain;charset=utf-8"});kn.a.saveAs(e,"deck.txt")}()}},"Download")))},Nn=t(17),Bn=Object(S.a)(_||(_=Object(O.a)(["\n  .Toastify__toast--info {\n    background: #2cce9f;\n    border-radius: 8px;\n    color: #000;\n    margin: 2em;\n    font: inherit;\n  }\n  .Toastify__close-button {\n    color: #000;\n  }\n"]))),Mn=S.b.div(J||(J=Object(O.a)(["\n  margin: 1em 0;\n"]))),Fn=S.b.div(A||(A=Object(O.a)(["\n  display: flex;\n"]))),_n=S.b.label(Y||(Y=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  color: #fff;\n  font-size: 1.5em;\n"]))),Jn=S.b.input(q||(q=Object(O.a)(["\n  display: block;\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  border: 2px solid #fff;\n  transition: background 0.25s;\n  margin-right: 0.5em;\n  &:focus {\n    outline: 0;\n  }\n  &:checked {\n    background: #2cce9f;\n  }\n"]))),An=S.b.button(G||(G=Object(O.a)(["\n  appearance: none;\n  background: transparent;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  margin: 0 0 0 0.25em;\n  transition: opacity 0.25s, color 0.25s;\n  padding: 0;\n  &:hover,\n  &:focus,\n  &:disabled {\n    color: #2cce9f;\n    opacity: 0.5;\n    outline: 0;\n  }\n"]))),Yn=function(n){var e=n.setIsPrivate,t=n.toastText;return x.a.createElement(x.a.Fragment,null,x.a.createElement(Bn,null),x.a.createElement(Mn,null,x.a.createElement(Fn,null,x.a.createElement(Jn,{id:"checkbox",type:"checkbox",onChange:function(){return e((function(n){return!n}))}}),x.a.createElement(_n,{htmlFor:"checkbox"},"Make lobby private"," ",x.a.createElement(An,{type:"button",onClick:function(){return Nn.c.info(t,{toastId:"private-toast",position:Nn.c.POSITION.TOP_CENTER})}})))),x.a.createElement(Nn.b,{limit:1,autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,transition:Nn.a,pauseOnFocusLoss:!1}))};function qn(n){var e=n.e,t=n.history,a=n.deck,r=n.setError,o=n.setLoading,i=n.isPrivate;e.preventDefault(),o("createLobby"),L.a.post("".concat(z,"/api/getDeck"),{deck:a}).then((function(n){n.data?(o(!1),r(""),function n(e){var t=e.history,a=e.deck,r=e.setError,o=e.setLoading,i=e.isPrivate,c=(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)).substring(0,5);L.a.post("".concat(z,"/api/checkAvailableRooms"),{roomName:c}).then((function(e){console.log("were in here",e),o(!1),r(""),e.data?n({history:t,deck:a,setError:r,setLoading:o,isPrivate:i}):t.push("/l/".concat(c).concat(function(n){var e=n.deck,t=n.isPrivate,a="";e&&(a+="?deck=".concat(e));t&&(a+=e?"&private=1":"?private=1");return a}({deck:a,isPrivate:i})))})).catch((function(n){r("There was an error on the server. Please try again."),console.error(n)}))}({history:t,deck:a,setError:r,setLoading:o,isPrivate:i})):r("This deck could not be found.")})).catch((function(n){o(!1),r("This deck does not exist."),console.error(n)}))}var Gn=Object(S.a)(W||(W=Object(O.a)(["\n  html {\n    position: static;\n    overflow: visible;\n  }\n  body {\n    text-align: center;\n    background: linear-gradient(129deg, rgba(14,17,40,1) 0%, rgba(40,9,19,1) 100%);\n    border: 1em solid;\n    border-image: linear-gradient(130deg, rgb(50,63,152), rgb(246,224,105), rgb(248,54,116) ) 1;\n    padding: 2em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 95vh;\n  }\n  button,\n  input {\n    appearance: none;\n    border: 0;\n  }\n"]))),Wn=S.b.form(H||(H=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Hn=S.b.input(K||(K=Object(O.a)(["\n  appearance: none;\n  font-size: 1em;\n  border: 0;\n  margin: 0;\n  padding: 0.5em 0 0.3em;\n  background: transparent;\n  border-bottom: 1px solid #fff;\n  transition: border-color 0.25s;\n  border-radius: 0;\n  color: #fff;\n\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus,\n  &:-webkit-autofill:active {\n    -webkit-text-fill-color: #fff;\n    -webkit-box-shadow: 0 0 0px 1000px #000 inset;\n    transition: background-color 5000s ease-in-out 0s;\n  }\n\n  &:hover,\n  &:focus {\n    outline: 0;\n    border-color: #2cce9f;\n  }\n"]))),Kn=S.b.div(U||(U=Object(O.a)(["\n  margin-bottom: 1em;\n"]))),Un=S.b.ul(Q||(Q=Object(O.a)(["\n  list-style: none;\n  padding: 0;\n  width: 150%;\n  max-width: 300px;\n  max-height: 175px;\n  overflow: auto;\n  margin: 0;\n  border: 1px solid #2cce9f;\n  border-radius: 8px;\n  max-height: 139px;\n  overflow: auto;\n  margin-bottom: 1em;\n  min-height: 145px;\n"]))),Qn=S.b.li(V||(V=Object(O.a)(["\n  color: #fff;\n  border-bottom: 1px solid rgb(44, 206, 159);\n"]))),Vn=S.b.button(X||(X=Object(O.a)(["\n  apperance: none;\n  font-size: 1em;\n  background: 0;\n  color: #fff;\n  padding: 0.5em 0;\n  text-transform: capitalize;\n  transition: color 0.25s;\n  width: 100%;\n\n  &:hover,\n  &:focus {\n    outline: 0;\n    color: #2cce9f;\n  }\n"]))),Xn=S.b.p(Z||(Z=Object(O.a)(["\n  font-size: 1.5em;\n  color: #fff;\n"]))),Zn=S.b.h1($||($=Object(O.a)(["\n  color: #fff;\n  margin: 0 0 1em;\n  font-weight: normal;\n  font-size: 2em;\n"]))),$n=S.b.p(nn||(nn=Object(O.a)(["\n  color: red;\n  font-size: 0.8rem;\n"]))),ne=S.b.div(en||(en=Object(O.a)(["\n  min-height: 100%;\n  background: linear-gradient(129deg, rgba(14,17,40,1) 0%, rgba(40,9,19,1) 100%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),ee=Object(S.b)(E.b)(tn||(tn=Object(O.a)(["\n  display: block;\n  appearance: none;\n  background: #fff;\n  color: #000;\n  font-size: 1em;\n  border: 0;\n  padding: 0.7em 1em;\n  border-radius: 8px;\n  margin: 1em 0.5em;\n  font-weight: bold;\n  transition: opacity 0.25s;\n  text-decoration: none;\n\n  &:hover,\n  &:focus,\n  &:disabled {\n    opacity: 0.5;\n    outline: 0;\n  }\n"]))),te=S.b.button(an||(an=Object(O.a)(["\n  display: block;\n  appearance: none;\n  background: #2cce9f;\n  color: #000;\n  font-size: 1em;\n  border: 0;\n  padding: 0.7em 1em;\n  border-radius: 8px;\n  margin: 1em 0.5em;\n  font-weight: bold;\n  transition: opacity 0.25s;\n\n  &:hover,\n  &:focus,\n  &:disabled {\n    opacity: 0.5;\n    outline: 0;\n  }\n"]))),ae=S.b.div(rn||(rn=Object(O.a)(["\n  display: flex;\n  align-items: center;\n"]))),re=function(){var n=Object(k.f)(),e=Object(h.useState)("safe-for-work"),t=Object(v.a)(e,2),a=t[0],r=t[1],o=Object(h.useState)(!1),i=Object(v.a)(o,2),c=i[0],l=i[1],b=Object(h.useState)(!1),s=Object(v.a)(b,2),d=(s[0],s[1]),u=Object(h.useState)(""),m=Object(v.a)(u,2),f=m[0],g=m[1],p=Object(h.useState)([]),j=Object(v.a)(p,2),y=j[0],O=j[1];return Object(h.useEffect)((function(){L.a.post("".concat(z,"/api/getPublicDecks")).then((function(n){console.log(n.data),O(n.data)}))}),[]),x.a.createElement(ne,null,x.a.createElement(Gn,null),x.a.createElement(Zn,null,"Create Lobby"),x.a.createElement(Wn,{onSubmit:function(e){return qn({e:e,history:n,deck:a,setError:g,setLoading:d,isPrivate:c})}},x.a.createElement(Xn,null,"Choose a pack"),y&&x.a.createElement(Un,null,y.map((function(n){var e=n.name;return x.a.createElement(Qn,{key:e},x.a.createElement(Vn,{type:"button",onClick:function(){return function(n){var e=n.name,t=n.deck,a=n.setDeck;if(t===e)return a("");a(e)}({name:e,deck:a,setDeck:r})},style:{color:e===a?"#2cce9f":null}},e.replace(/-/g," ")))}))),x.a.createElement(Xn,null,"Search for pack"),x.a.createElement(Kn,null,x.a.createElement(Hn,{id:"nameOfDeck",type:"text",onKeyUp:function(n){return r(n.target.value)},maxLength:"20"})),f&&x.a.createElement($n,null,f),x.a.createElement(Yn,{setIsPrivate:l,title:"game",toastText:"If checked, this game will not be listed under public lobbies."}),x.a.createElement(ae,null,x.a.createElement(ee,{to:"/"},"Back"),x.a.createElement(te,null,"Create"))))};var oe=function(){return x.a.createElement(E.a,null,x.a.createElement(k.c,null,x.a.createElement(k.a,{exact:!0,path:"/"},x.a.createElement(yn,null)),x.a.createElement(k.a,{exact:!0,path:"/create-lobby"},x.a.createElement(re,null)),x.a.createElement(k.a,{path:"/l/:roomId"},x.a.createElement(Rn,null))))};t(71);y.a.render(x.a.createElement(x.a.StrictMode,null,x.a.createElement(oe,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e1be72c1.chunk.js.map