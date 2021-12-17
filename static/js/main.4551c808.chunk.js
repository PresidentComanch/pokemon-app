(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),s=a.n(r),i=a(51),o=function(){return Object(i.b)()},l=i.c,u=a(32),j=a.n(u),b=a(14),d=a(55),p=a(40),f=a(13),m=a(199),O=a(173),x=a(181),h=a(186),g=a(37),y=a(45),v=a.n(y);v.a.defaults.baseURL="https://pokeapi.co/api/v2/";var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?v.a.get("type/".concat(e)):v.a.get("pokemon/?offset=0&limit=1200")},P=Object(g.b)("articles/fetchAsyncListOfPokemons",function(){var e=Object(p.a)(j.a.mark((function e(t){var a,n,c,r,s,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],0!==t.length){e.next=8;break}return e.next=4,k();case 4:n=e.sent,a=Object(b.a)(n.data.results),e.next=28;break;case 8:c=Object(d.a)(t),e.prev=9,c.s();case 11:if((r=c.n()).done){e.next=20;break}return s=r.value,e.next=15,k(s);case 15:i=e.sent,o=i.data.pokemon.map((function(e){return{name:e.pokemon.name,url:e.pokemon.url}})),a=0===a.length?Object(b.a)(o):[].concat(Object(b.a)(a),Object(b.a)(o));case 18:e.next=11;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(9),c.e(e.t0);case 25:return e.prev=25,c.f(),e.finish(25);case 28:return e.abrupt("return",a.filter((function(e,t,a){return t===a.findIndex((function(t){return t.name===e.name}))})));case 29:case"end":return e.stop()}}),e,null,[[9,22,25,28]])})));return function(t){return e.apply(this,arguments)}}()),S=Object(g.c)({name:"listOfPokemons",initialState:{pokemonsList:[],pokemonsType:[]},reducers:{setPokemonsType:function(e,t){e.pokemonsType=t.payload}},extraReducers:function(e){e.addCase(P.fulfilled,(function(e,t){e.pokemonsList=t.payload}))}}),w=S.actions.setPokemonsType,T=function(e){return e.listOfPokemons.pokemonsList},D=function(e){return e.listOfPokemons.pokemonsType},B=S.reducer,C=Object(g.c)({name:"pokemonsDataToDisplay",initialState:{filterQuery:"",qtyPerPage:10},reducers:{setFilterQuery:function(e,t){e.filterQuery=t.payload},setQtyPerPage:function(e,t){e.qtyPerPage=t.payload}}}),F=C.actions,A=F.setFilterQuery,E=F.setQtyPerPage,L=function(e){return e.pokemonsDataToDisplay.filterQuery},Q=function(e){return e.pokemonsDataToDisplay.qtyPerPage},_=C.reducer,I=a(191),q=a(193),z=a(194),J=a(195),M=a(187),R=a(188),H=a(196),N=a(90),U=a(2),W={normal:"#a4acaf",fighting:"#d56723",flying:"#3dc7ef",poison:"#b97fc9",ground:"#ab9842",rock:"#a38c21",bug:"#729f3f",ghost:"#51c4e7",steel:"#9eb7b8",fire:"#fd7d24",water:"#4592c4",grass:"#9bcc50",electric:"#eed535",psychic:"#f366b9",ice:"#51c4e7",dragon:"#f16e57",dark:"#707070",fairy:"#fdb9e9",unknown:"#ffffff",shadow:"#ffffff"},G=function(e){var t=e.data,a=t.name,c=t.types,r=t.image,s=t.hp,i=t.attack,o=t.defense,l=t.specialAttack,u=t.specialDefense,j=t.speed,b=t.weight,d=Object(n.useState)(!1),p=Object(f.a)(d,2),m=p[0],x=p[1];return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(h.a,{item:!0,xs:12,md:4,lg:3,children:Object(U.jsxs)(I.a,{children:[Object(U.jsx)(q.a,{component:"img",height:"240px",image:r,alt:a,title:a}),Object(U.jsxs)(z.a,{children:[Object(U.jsx)(J.a,{gutterBottom:!0,variant:"h5",component:"div",textAlign:"center",children:a}),Object(U.jsx)(O.a,{direction:"row",spacing:1,sx:{mb:1},justifyContent:"center",children:c.map((function(e){return Object(U.jsx)(M.a,{label:e,size:"small",sx:{bgcolor:"".concat(W[e])}},Object(N.a)())}))}),Object(U.jsxs)(J.a,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:["HP: ",s]}),Object(U.jsxs)(J.a,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:["Attack: ",i]}),Object(U.jsxs)(J.a,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:["Defense: ",o]}),Object(U.jsx)(R.a,{onClick:function(){x(!m)},children:"more stats"}),Object(U.jsx)(H.a,{in:m,timeout:"auto",unmountOnExit:!0,children:Object(U.jsxs)(z.a,{sx:{p:0},children:[Object(U.jsxs)(J.a,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:["Special Attack: ",l]}),Object(U.jsxs)(J.a,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:["Special Defense: ",u]}),Object(U.jsxs)(J.a,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:["Speed: ",j]}),Object(U.jsxs)(J.a,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:["Weight: ",b]})]})})]})]})})})},K=a(197),V=a(198),X=function(){return Object(U.jsx)(K.a,{sx:{width:"100%"},children:Object(U.jsx)(V.a,{})})},Y=function(){var e=l(L),t=l(T),a=l(Q),c=Object(n.useState)(1),r=Object(f.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(0),u=Object(f.a)(o,2),g=u[0],y=u[1],k=Object(n.useState)(t),P=Object(f.a)(k,2),S=P[0],w=P[1],D=Object(n.useState)([]),B=Object(f.a)(D,2),C=B[0],F=B[1],A=Object(n.useState)(!1),E=Object(f.a)(A,2),_=E[0],I=E[1];return Object(n.useEffect)((function(){var a=t.filter((function(t){return t.name.includes(e)}));w(a)}),[t,e]),Object(n.useEffect)((function(){y(Math.floor(S.length/a))}),[S,a]),Object(n.useEffect)(Object(p.a)(j.a.mark((function e(){var t,n,c,r,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I(!_),t=S.slice((s-1)*a,(s-1)*a+a),n=[],c=Object(d.a)(t),e.prev=4,c.s();case 6:if((r=c.n()).done){e.next=14;break}return i=r.value,e.next=10,l=i.name,v.a.get("pokemon/".concat(l));case 10:o=e.sent,n=[].concat(Object(b.a)(n),[o.data]);case 12:e.next=6;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),c.e(e.t0);case 19:return e.prev=19,c.f(),e.finish(19);case 22:n=n.map((function(e){return{id:e.id,name:e.name,types:e.types.map((function(e){return e.type.name})),moves:e.moves.map((function(e){return e.move.name})),image:e.sprites.front_default,hp:e.stats[0].base_stat,attack:e.stats[1].base_stat,defense:e.stats[2].base_stat,specialAttack:e.stats[3].base_stat,specialDefense:e.stats[4].base_stat,speed:e.stats[5].base_stat,weight:e.weight}})),F(n),I(!1);case 25:case"end":return e.stop()}var l}),e,null,[[4,16,19,22]])}))),[s,a,S]),Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(m.a,{children:[Object(U.jsx)(O.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:0,children:Object(U.jsx)(x.a,{count:g,page:s,color:"primary",size:"large",shape:"rounded",variant:"outlined",onChange:function(e,t){i(t)}})}),Object(U.jsx)(h.a,{container:!0,spacing:1,sx:{p:"45px"},children:_?Object(U.jsx)(X,{}):C.map((function(e){return Object(U.jsx)(G,{data:e},e.id)}))})]})})},Z=a(183),$=a(189),ee=a(202),te=a(184),ae=a(179),ne=a(190),ce=a(182);var re=function(){var e=o(),t=Object(n.useState)([]),a=Object(f.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),i=Object(f.a)(s,2),l=i[0],u=i[1],b=Object(n.useState)(10),d=Object(f.a)(b,2),O=d[0],x=d[1],g=Object(n.useState)(""),y=Object(f.a)(g,2),k=y[0],P=y[1],S=Object(n.useCallback)(function(e,t){var a;return function(){clearTimeout(a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];a=setTimeout.apply(void 0,[e,t].concat(c))}}((function(t){e(A(t))}),300),[]);return Object(n.useEffect)(Object(p.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("type/");case 2:return t=e.sent,e.next=5,t.data.results.map((function(e){return{name:e.name,typeIndex:e.url.split("/").slice(-2,-1)}}));case 5:a=e.sent,r(a);case 7:case"end":return e.stop()}}),e)}))),[]),Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(m.a,{children:Object(U.jsxs)(h.a,{container:!0,spacing:2,children:[Object(U.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(U.jsxs)(Z.a,{sx:{m:1,width:"100%"},children:[Object(U.jsx)($.a,{id:"standard-basic",label:"Search by name",onChange:function(e){P(e.target.value),S(e.target.value)},value:k}),Object(U.jsx)(ee.a,{children:"Filter pokemons by name"})]})}),Object(U.jsx)(h.a,{item:!0,xs:6,md:4,children:Object(U.jsxs)(Z.a,{sx:{m:1,width:"100%"},children:[Object(U.jsx)(te.a,{id:"inputTypeSelectLabel",children:"Type"}),Object(U.jsx)(ae.a,{labelId:"inputTypeSelectLabel",id:"inputTypeSelect",multiple:!0,value:l,label:"Type",input:Object(U.jsx)(ne.a,{label:"Type"}),onChange:function(t){u(t.target.value),e(w(t.target.value))},children:c.map((function(e){var t=e.name;return Object(U.jsx)(ce.a,{value:t,children:t},t)}))}),Object(U.jsx)(ee.a,{children:"Filter pokemons by type"})]})}),Object(U.jsx)(h.a,{item:!0,xs:6,md:2,children:Object(U.jsxs)(Z.a,{sx:{m:1,width:"100%"},children:[Object(U.jsx)(te.a,{id:"labelForPaginationSelect",children:"Pokemons per page"}),Object(U.jsxs)(ae.a,{labelId:"labelForPaginationSelect",id:"PaginationSelect",value:O,label:"PokemonsPerPage",onChange:function(t){x(+t.target.value),e(E(+t.target.value))},children:[Object(U.jsx)(ce.a,{value:10,children:"10"}),Object(U.jsx)(ce.a,{value:20,children:"20"}),Object(U.jsx)(ce.a,{value:50,children:"50"})]}),Object(U.jsx)(ee.a,{children:"Pokemons per page"})]})})]})})})};var se=function(){var e=l(D),t=o();return Object(n.useEffect)((function(){t(P(e))}),[t,e]),Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(re,{}),Object(U.jsx)(Y,{})]})},ie=Object(g.a)({reducer:{listOfPokemons:B,pokemonsDataToDisplay:_}}),oe=a(178);s.a.render(Object(U.jsxs)(c.a.StrictMode,{children:[Object(U.jsx)(oe.a,{}),Object(U.jsx)(i.a,{store:ie,children:Object(U.jsx)(se,{})})]}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.4551c808.chunk.js.map