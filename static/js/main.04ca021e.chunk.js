(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{11:function(e,t,r){e.exports={searchError:"SearchErrorMessage_searchError__wuZON",searchErrorIcon:"SearchErrorMessage_searchErrorIcon__1vrBl"}},21:function(e,t,r){e.exports={loader:"MovieMain_loader__2buvk"}},4:function(e,t,r){e.exports={moviesContainer:"MovieList_moviesContainer__ct8q7",movieStyle:"MovieList_movieStyle__1kqv-",movieTitle:"MovieList_movieTitle__2OIbP",movieInfo:"MovieList_movieInfo__PGvHr",movieRating:"MovieList_movieRating__35nbz",purpleRating:"MovieList_purpleRating__3oS__",blackRating:"MovieList_blackRating__2ZFPT"}},48:function(e,t,r){"use strict";r.r(t);var n,a,c,i,s=r(2),l=r.n(s),o=r(20),u=r.n(o),m=r(5),p=r.n(m),j=r(9),v=r(6),b=r(10),h=r.n(b),d=r(21);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function O(e,t){var r=e.title,l=e.titleId,o=x(e,["title","titleId"]);return s.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":l},o),r?s.createElement("title",{id:l},r):null,n||(n=s.createElement("circle",{cx:27.5,cy:57.5,r:5,fill:"#7a1698"},s.createElement("animate",{attributeName:"cy",calcMode:"spline",keySplines:"0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5",repeatCount:"indefinite",values:"57.5;42.5;57.5;57.5",keyTimes:"0;0.3;0.6;1",dur:"1s",begin:"-0.6s"}))),a||(a=s.createElement("circle",{cx:42.5,cy:57.5,r:5,fill:"#9884a8"},s.createElement("animate",{attributeName:"cy",calcMode:"spline",keySplines:"0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5",repeatCount:"indefinite",values:"57.5;42.5;57.5;57.5",keyTimes:"0;0.3;0.6;1",dur:"1s",begin:"-0.44999999999999996s"}))),c||(c=s.createElement("circle",{cx:57.5,cy:57.5,r:5,fill:"#4803a2"},s.createElement("animate",{attributeName:"cy",calcMode:"spline",keySplines:"0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5",repeatCount:"indefinite",values:"57.5;42.5;57.5;57.5",keyTimes:"0;0.3;0.6;1",dur:"1s",begin:"-0.3s"}))),i||(i=s.createElement("circle",{cx:72.5,cy:57.5,r:5,fill:"#ac63e8"},s.createElement("animate",{attributeName:"cy",calcMode:"spline",keySplines:"0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5",repeatCount:"indefinite",values:"57.5;42.5;57.5;57.5",keyTimes:"0;0.3;0.6;1",dur:"1s",begin:"-0.15s"}))))}var y=s.forwardRef(O),_=(r.p,r(4)),g=r(1),k=function(e){var t=Math.round(e/2);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{className:_.purpleRating,children:"\u2605".repeat(t)}),Object(g.jsx)("span",{className:_.blackRating,children:"\u2605".repeat(5-t)})]})};function w(e){var t=e.movies;return console.log(t),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("ul",{className:_.moviesContainer,children:t.map((function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("li",{className:_.movieStyle,children:[Object(g.jsx)("img",{src:e.small_cover_image,alt:e.title}),Object(g.jsx)("span",{className:_.movieTitle,children:e.title}),Object(g.jsx)("span",{className:_.movieInfo,children:"".concat(e.year," | ").concat(e.genres)}),Object(g.jsx)("span",{className:_.movieRating,children:k(e.rating)})]},e.id)})}))})})}var E=r(7),S=r(22);function M(e){var t=e.onKeyUp;return Object(g.jsxs)("div",{className:E.container,children:[Object(g.jsx)("input",{id:"search",type:"search",placeholder:"Search movie what you want!",className:E.searchInput,onKeyUp:t,autoComplete:"off"}),Object(g.jsx)("label",{htmlFor:"search",children:Object(g.jsx)(S.a,{className:E.searchIcon})})]})}var N=r(23),I=r(11);function R(e){var t=e.query;return Object(g.jsxs)("div",{className:I.searchError,children:[Object(g.jsx)(N.a,{className:I.searchErrorIcon}),"".concat(t,"(\uc73c)\ub85c \uac80\uc0c9\ub41c \uc601\ud654\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")]})}function C(){var e=Object(s.useState)(null),t=Object(v.a)(e,2),r=t[0],n=t[1],a=Object(s.useState)(!1),c=Object(v.a)(a,2),i=c[0],l=c[1],o=Object(s.useState)(null),u=Object(v.a)(o,2),m=u[0],b=u[1],f=Object(s.useState)(null),x=Object(v.a)(f,2),O=x[0],_=x[1],k=function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(null),b(null),_(null),l(!0),e.next=7,h.a.get("https://yts.mx/api/v2/list_movies.json");case 7:t=e.sent,n(t.data.data.movies),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),b(e.t0);case 14:l(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13===t.keyCode){e.next=2;break}return e.abrupt("return",null);case 2:return n(null),b(null),_(null),l(!0),e.next=8,h.a.get("https://yts.mx/api/v2/list_movies.json?query_term=".concat(t.target.value));case 8:r=e.sent,n(r.data.data.movies),l(!1),_(t.target.value);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){k()}),[]),i?Object(g.jsx)(y,{className:d.loader}):m?Object(g.jsx)("div",{children:"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."}):r?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(M,{onKeyUp:E}),Object(g.jsx)(w,{movies:r})]}):null!==O?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(M,{onKeyUp:E}),Object(g.jsx)(R,{query:O})]}):null}var T=function(){return Object(g.jsx)(C,{})};u.a.render(Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))},7:function(e,t,r){e.exports={container:"Search_container__2jM2O",searchInput:"Search_searchInput__1W1ZZ",searchIcon:"Search_searchIcon__3jiWG"}}},[[48,1,2]]]);
//# sourceMappingURL=main.04ca021e.chunk.js.map