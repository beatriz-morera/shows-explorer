(this["webpackJsonpshows-explorer"]=this["webpackJsonpshows-explorer"]||[]).push([[8],{106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),i=n.n(o),c=n(3),s=n(1),l=n(58),m=n(201),u=n(80),d=n(196),y=n(14),f=Object(a.createContext)([]);var j=function(){return Object(a.useContext)(f)};var E=Object(a.createContext)(void 0);var h=n(13),p=n(197),v=n(198),g=n(199),b=n(72);function k(e){localStorage.setItem("favorites",JSON.stringify(e))}function _(){var e=Object(a.useState)(function(){var e=localStorage.getItem("favorites");return e?JSON.parse(e):[]}()),t=Object(y.a)(e,2),n=t[0],r=t[1];return[n,Object(a.useCallback)((function(e){return r((function(t){var n=[].concat(Object(b.a)(t),[e]);return k(n),n}))}),[r]),Object(a.useCallback)((function(e){var t=e.id;return r((function(e){var n=e.filter((function(e){return e.id!==t}));return k(n),n}))}),[r])]}var O=n(23),w=(n(31),function(e){var t=e.show,n=e.children,a=e.navigateOnClick,o=void 0===a||a,i=e.showInfoButton,c=void 0===i||i,l=t.name,m=t.image.original,u=t.genres,f=t.officialSite,j=t.id,E=_(),b=Object(y.a)(E,3),k=b[0],w=b[1],x=b[2],N=k.some((function(e){return e.id===j}));return r.a.createElement(s.f,{className:"welcome-card",color:"dark",style:{margin:"-2px"}},o?r.a.createElement(h.c,{to:"/search/details/".concat(j),style:{textDecoration:"none"}},r.a.createElement(O.LazyLoadImage,{alt:l,effect:"blur",src:m}),r.a.createElement(s.h,{style:{margin:"10px 2px 5px"}},l)):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:m,alt:l}),r.a.createElement(s.h,{style:{margin:"3px 2px 0"}},l)),n,r.a.createElement(s.g,null,u.join(" - ")),r.a.createElement("div",{className:"featured-show-buttons-container"},r.a.createElement("div",{className:"icon-container"},r.a.createElement(s.k,{icon:N?d.a:p.a,size:"large",style:{marginBottom:"3px"},onClick:function(){return N?x(t):w(t)}}),r.a.createElement("label",null,"My List")),r.a.createElement(s.d,{color:"light"},r.a.createElement("a",{href:f,className:"play-button-link"},r.a.createElement(s.k,{icon:v.a})," Play")),c?r.a.createElement(h.c,{to:"/search/details/".concat(j),style:{textDecoration:"none"}},r.a.createElement("div",{className:"icon-container"},r.a.createElement(s.k,{icon:g.a,size:"large",style:{marginBottom:"3px"}}),r.a.createElement("label",null,"Info"))):r.a.createElement("div",{style:{width:"40px"}})))}),x=function(){var e=function(){var e=j();return Object(a.useMemo)((function(){var t=new Map,n=[];return e.forEach((function(e){return e.genres.forEach((function(a){var r=t.get(a);r||(r=[],t.set(a,r),n.push(a)),r.push(e)}))})),{map:t,keys:n}}),[e])}(),t=e.map,n=e.keys,o=Object(a.useMemo)((function(){return n.filter((function(e){var n,a,r=null!==(n=null===(a=t.get(e))||void 0===a?void 0:a.length)&&void 0!==n?n:0;return 3===r||r>=6}))}),[n,t]);return r.a.createElement("div",{className:"all-genres-container"},o.map((function(e){var n;return r.a.createElement("div",{key:e},r.a.createElement("h4",{className:"genre-title"},e),r.a.createElement("div",{className:"genre-container-container"},r.a.createElement("ul",{className:"genre-container"},null===(n=t.get(e))||void 0===n?void 0:n.slice(0,6).map((function(e){return r.a.createElement(h.c,{to:"/search/details/".concat(e.id),key:e.id},r.a.createElement("li",null,r.a.createElement("div",{className:"image-container"},r.a.createElement(O.LazyLoadImage,{effect:"blur",src:e.image.medium,alt:e.name}))))})))))})))},N=function(){var e=Object(a.useContext)(E);return r.a.createElement(s.p,null,r.a.createElement(s.i,{color:"dark"},r.a.createElement(s.o,{isOpen:!e,message:"Loading..."}),e&&r.a.createElement(w,{show:e}),r.a.createElement(x,null)))},L=function(){var e=Object(a.useState)(""),t=Object(y.a)(e,2),n=t[0],o=t[1],i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=j(),n=Object(a.useState)([]),r=Object(y.a)(n,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){i(t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})))}),[t,e]),o}(n),c=Object(a.useCallback)((function(e){return o(e.target.value)}),[]);return r.a.createElement(s.p,null,r.a.createElement(s.w,{color:"dark"},r.a.createElement(s.r,{color:"medium",autocomplete:"on",placeholder:"Search for a show...",value:n,onInput:c})),r.a.createElement(s.i,{color:"dark"},r.a.createElement("section",{className:"all-shows-container"},r.a.createElement(s.n,{color:"dark"},i.slice(0,100).map((function(e){return r.a.createElement(h.c,{to:"/search/details/".concat(e.id),key:e.id,style:{textDecoration:"none"}},r.a.createElement("div",{className:"show-container"},r.a.createElement("div",{className:"show-image-container"},r.a.createElement(O.LazyLoadImage,{src:e.image.medium,alt:e.name,effect:"blur"})),r.a.createElement("div",{className:"show-info-container"},r.a.createElement("h4",{className:"show-title"},e.name),r.a.createElement("p",{className:"show-year"},e.premiered.slice(0,4)),r.a.createElement("p",{className:"show-info"},e.genres.join(" - ")),r.a.createElement("p",{className:"show-info"},"Language: ",e.language)),r.a.createElement("div",{className:"play-icon-list"},r.a.createElement(s.k,{icon:v.a}))))}))))))},S=n(200),C=function(e){e.match;var t=_(),n=Object(y.a)(t,1)[0];return r.a.createElement(s.p,null,r.a.createElement(s.j,null,r.a.createElement(s.w,{color:"dark"},r.a.createElement(s.v,{style:{textAlign:"center"}},"My List"))),r.a.createElement(s.i,{color:"dark"},n.length?r.a.createElement("div",{className:"myList-gallery-container"},n.map((function(e){return r.a.createElement(h.c,{to:"/search/details/".concat(e.id),key:e.id},r.a.createElement(O.LazyLoadImage,{src:e.image.medium,alt:e.name,className:"myList-image",effect:"blur"}))}))):r.a.createElement("div",{className:"empty-myList-container"},r.a.createElement(s.k,{icon:S.a,color:"medium",style:{fontSize:"250px"}}),r.a.createElement("h4",{className:"empty-myList-info"},"Add shows to your list so you can easily find them later."),r.a.createElement(h.c,{to:"/search"},r.a.createElement(s.d,{color:"light",style:{marginTop:"40px",fontWeight:"600"}},"FIND SOMETHING TO WATCH")))))},I=function(e){var t=e.match,n=function(e){var t=j(),n=Object(a.useState)(),r=Object(y.a)(n,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){var n=t.find((function(t){return t.id===e}));i(n)}),[t,e]),o}(parseInt(t.params.id));return r.a.createElement(s.p,null,r.a.createElement(s.j,null,r.a.createElement(s.w,{color:"dark"},r.a.createElement(s.e,{slot:"start"},r.a.createElement(s.c,{defaultHref:"/search",text:""})))),r.a.createElement(s.i,{color:"dark"},r.a.createElement(s.o,{isOpen:!n,message:"Loading..."}),n?r.a.createElement(w,{show:n,navigateOnClick:!1,showInfoButton:!1},r.a.createElement("section",null,r.a.createElement("div",{className:"details-info-summary",dangerouslySetInnerHTML:{__html:n.summary}})),r.a.createElement("p",{className:"details-info-year"},"------- ",n.premiered.slice(0,4)," -------")):null))},M=function(e){var t=e.children,n=function(){var e=Object(a.useState)([]),t=Object(y.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://api.tvmaze.com/shows").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),n}();return r.a.createElement(f.Provider,{value:n},t)},z=function(e){var t=e.children,n=function(){var e=j(),t=Object(a.useState)(),n=Object(y.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){e.length&&o(e[Math.round(Math.random()*e.length)])}),[e]),r}();return r.a.createElement(E.Provider,{value:n},t)},D=(n(96),n(97),n(98),n(99),n(100),n(101),n(102),n(103),n(104),n(105),n(106),n(107),function(){return r.a.createElement(M,null,r.a.createElement(z,null,r.a.createElement(s.b,null,r.a.createElement(l.a,null,r.a.createElement(s.u,null,r.a.createElement(s.q,null,r.a.createElement(c.c,{path:"/home",component:N,exact:!0}),r.a.createElement(c.c,{path:"/search",component:L,exact:!0}),r.a.createElement(c.c,{path:"/search/details/:id",component:I}),r.a.createElement(c.c,{path:"/myList",component:C}),r.a.createElement(c.c,{path:"/",render:function(){return r.a.createElement(c.b,{to:"/home"})},exact:!0})),r.a.createElement(s.s,{slot:"bottom",color:"dark"},r.a.createElement(s.t,{tab:"home",href:"/home"},r.a.createElement(s.k,{icon:m.a}),r.a.createElement(s.l,null,"Home")),r.a.createElement(s.t,{tab:"search",href:"/search"},r.a.createElement(s.k,{icon:u.a}),r.a.createElement(s.l,null,"Search")),r.a.createElement(s.t,{tab:"myList",href:"/myList"},r.a.createElement(s.k,{icon:d.a}),r.a.createElement(s.l,null,"MyList"))))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},83:function(e,t,n){e.exports=n(108)},89:function(e,t,n){var a={"./ion-action-sheet-controller_8.entry.js":[113,43],"./ion-action-sheet-ios.entry.js":[114,44],"./ion-action-sheet-md.entry.js":[115,45],"./ion-alert-ios.entry.js":[116,24],"./ion-alert-md.entry.js":[117,25],"./ion-app_8-ios.entry.js":[118,11],"./ion-app_8-md.entry.js":[119,12],"./ion-avatar_3-ios.entry.js":[120,46],"./ion-avatar_3-md.entry.js":[121,47],"./ion-back-button-ios.entry.js":[122,48],"./ion-back-button-md.entry.js":[123,49],"./ion-backdrop-ios.entry.js":[124,81],"./ion-backdrop-md.entry.js":[125,82],"./ion-button_2-ios.entry.js":[126,50],"./ion-button_2-md.entry.js":[127,51],"./ion-card_5-ios.entry.js":[128,52],"./ion-card_5-md.entry.js":[129,53],"./ion-checkbox-ios.entry.js":[130,54],"./ion-checkbox-md.entry.js":[131,55],"./ion-chip-ios.entry.js":[132,56],"./ion-chip-md.entry.js":[133,57],"./ion-col_3.entry.js":[134,83],"./ion-datetime_3-ios.entry.js":[135,20],"./ion-datetime_3-md.entry.js":[136,21],"./ion-fab_3-ios.entry.js":[137,58],"./ion-fab_3-md.entry.js":[138,59],"./ion-img.entry.js":[139,84],"./ion-infinite-scroll_2-ios.entry.js":[140,39],"./ion-infinite-scroll_2-md.entry.js":[141,40],"./ion-input-ios.entry.js":[142,60],"./ion-input-md.entry.js":[143,61],"./ion-item-option_3-ios.entry.js":[144,62],"./ion-item-option_3-md.entry.js":[145,63],"./ion-item_8-ios.entry.js":[146,64],"./ion-item_8-md.entry.js":[147,65],"./ion-loading-ios.entry.js":[148,26],"./ion-loading-md.entry.js":[149,27],"./ion-menu_4-ios.entry.js":[150,18],"./ion-menu_4-md.entry.js":[151,19],"./ion-modal-ios.entry.js":[152,14],"./ion-modal-md.entry.js":[153,15],"./ion-nav_5.entry.js":[154,13],"./ion-popover-ios.entry.js":[155,16],"./ion-popover-md.entry.js":[156,17],"./ion-progress-bar-ios.entry.js":[157,66],"./ion-progress-bar-md.entry.js":[158,67],"./ion-radio_2-ios.entry.js":[159,32],"./ion-radio_2-md.entry.js":[160,33],"./ion-range-ios.entry.js":[161,68],"./ion-range-md.entry.js":[162,69],"./ion-refresher_2-ios.entry.js":[163,41],"./ion-refresher_2-md.entry.js":[164,42],"./ion-reorder_2-ios.entry.js":[165,37],"./ion-reorder_2-md.entry.js":[166,38],"./ion-ripple-effect.entry.js":[167,85],"./ion-route_4.entry.js":[168,70],"./ion-searchbar-ios.entry.js":[169,28],"./ion-searchbar-md.entry.js":[170,29],"./ion-segment_2-ios.entry.js":[171,71],"./ion-segment_2-md.entry.js":[172,72],"./ion-select_3-ios.entry.js":[173,34],"./ion-select_3-md.entry.js":[174,35],"./ion-slide_2-ios.entry.js":[175,86],"./ion-slide_2-md.entry.js":[176,87],"./ion-spinner.entry.js":[177,73],"./ion-split-pane-ios.entry.js":[178,88],"./ion-split-pane-md.entry.js":[179,89],"./ion-tab-bar_2-ios.entry.js":[180,74],"./ion-tab-bar_2-md.entry.js":[181,75],"./ion-tab_2.entry.js":[182,36],"./ion-text.entry.js":[183,76],"./ion-textarea-ios.entry.js":[184,77],"./ion-textarea-md.entry.js":[185,78],"./ion-toast-ios.entry.js":[186,30],"./ion-toast-md.entry.js":[187,31],"./ion-toggle-ios.entry.js":[188,22],"./ion-toggle-md.entry.js":[189,23],"./ion-virtual-scroll.entry.js":[190,90]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=89,e.exports=r},91:function(e,t,n){var a={"./ion-icon.entry.js":[194,98]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=91,e.exports=r}},[[83,9,10]]]);
//# sourceMappingURL=main.33240c01.chunk.js.map