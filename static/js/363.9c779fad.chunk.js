"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[363],{2383:function(t,n,e){e.d(n,{BS:function(){return u},KE:function(){return o},Wp:function(){return h},pG:function(){return f},w7:function(){return s}});var c=e(4569),r=e.n(c),a="https://api.themoviedb.org/3",i="cae3be8cdf5c9c2351403518efd2a643",o=function(){return r().get("".concat(a).concat("/trending/movie/week"),{params:{api_key:i}}).then((function(t){return t.data.results}))},u=function(t){return r().get("".concat(a).concat("/search/movie"),{params:{api_key:i,query:t,page:1}}).then((function(t){return t.data.results}))},s=function(t){return r().get("".concat(a).concat("/movie/").concat(t),{params:{api_key:i}}).then((function(t){return t.data}))},f=function(t){return r().get("".concat(a).concat("/movie/").concat(t).concat("/credits"),{params:{api_key:i}}).then((function(t){return t.data.cast}))},h=function(t){return r().get("".concat(a).concat("/movie/").concat(t).concat("/reviews"),{params:{api_key:i}}).then((function(t){return t.data.results}))}},7363:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var c=e(8152),r=e(2791),a=e(6871),i=e(2383),o={},u=e(184),s=function(){var t=(0,r.useState)([]),n=(0,c.Z)(t,2),e=n[0],s=n[1],f=(0,a.UO)().movieId,h=(0,a.TH)();return console.log(f),console.log("Location: ",h),(0,r.useEffect)((function(){(0,i.pG)(f).then(s)}),[f]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:e&&e.map((function(t){var n=t.profile_path,e=t.name,c=t.character;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("li",{className:o.cast__item,children:[(0,u.jsx)("div",{className:"image-container",children:(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:e,width:"150px"})}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:e}),(0,u.jsx)("h3",{children:c})]})]}),(0,u.jsx)("hr",{})]})}))})})}}}]);
//# sourceMappingURL=363.9c779fad.chunk.js.map