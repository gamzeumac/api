(this.webpackJsonpapireact=this.webpackJsonpapireact||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(6),r=c.n(i),s=(c(12),c(4)),o=c.n(s),u=c(7),p=c(2),l=c(5),j=c.n(l),b=c(0),d=function(e){var t=e.title,c=e.calories,n=e.image,a=e.ingredients;return Object(b.jsxs)("div",{className:j.a.recipe,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("ol",{children:a.map((function(e){return Object(b.jsxs)("li",{children:[" ",e.text," "]})}))}),Object(b.jsx)("p",{children:c}),Object(b.jsx)("img",{className:j.a.image,src:n,alt:""})]})},h=(c(15),function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),r=Object(p.a)(i,2),s=r[0],l=r[1],j=Object(n.useState)("chicken"),h=Object(p.a)(j,2),f=h[0],m=h[1],O=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("318063c4","&app_key=").concat("b72af0655ad3a4ede8bfd38bd461994f"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){O()}),[f]);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(s),l("")},className:"search-form",children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){l(e.target.value)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(b.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(b.jsx)(d,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})}),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),f()},5:function(e,t,c){e.exports={recipe:"recipe_recipe__BdaUe",image:"recipe_image__BtdIE"}}},[[16,1,2]]]);
//# sourceMappingURL=main.ee085d06.chunk.js.map