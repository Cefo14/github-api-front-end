_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{DVLy:function(e,t){e.exports="/github-api-front-end/_next/static/images/github-users-32dd02bc0f755702535f27612cb694bc.png"},H0SL:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("cMU6")}])},YFqc:function(e,t,a){e.exports=a("cTJO")},cMU6:function(e,t,a){"use strict";a.r(t);var n=a("nKUr"),r=a("q1tI"),c=a("g4pe"),i=a.n(c),o=a("MX0m"),s=a.n(o),l=a("YFqc"),d=a.n(l),u=[".card-route__card.jsx-789943105{padding:32px;border-radius:16px;width:100%;max-width:300px;}",".card-route__card.jsx-789943105:hover{cursor:pointer;}",".card-route__card-avatar-container.jsx-789943105{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-bottom:24px;}",".card-route__card-avatar-container.jsx-789943105 img.jsx-789943105{width:128px;height:128px;object-fit:cover;}"];u.__hash="789943105";var f=u,h=function(e){var t=e.title,a=e.imageURL,r=e.routePath;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d.a,{href:r,children:Object(n.jsxs)("div",{className:"jsx-".concat(f.__hash)+" card card-route__card",children:[Object(n.jsx)("div",{className:"jsx-".concat(f.__hash)+" card-route__card-avatar-container",children:Object(n.jsx)("figure",{className:"jsx-".concat(f.__hash)+" image is-128x128",children:Object(n.jsx)("img",{alt:"route",src:a,width:"128px",height:"128px",loading:"lazy",className:"jsx-".concat(f.__hash)})})}),Object(n.jsx)("div",{className:"jsx-".concat(f.__hash)+" has-text-centered is-size-4",children:t})]})}),Object(n.jsx)(s.a,{id:f.__hash,children:f})]})};h.defaultProps={title:"",imageURL:"",routePath:""};var p=Object(r.memo)(h),x=a("y5V1"),_=a.n(x),b=a("DVLy"),j=a.n(b),m=a("nCcy"),v=a.n(m),g=[".home__container.jsx-3556039402{padding:32px;padding-bottom:0px;}",".home__container.jsx-3556039402>div.jsx-3556039402:not(:last-child){padding-bottom:32px;}",".home__card-route-container.jsx-3556039402{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;max-width:768px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}","@media (min-width:768px){.home__card-route-divider.jsx-3556039402{display:none;}}","@media (max-width:767px){.home__card-route-divider.jsx-3556039402{width:100%;margin-bottom:32px;}}"];g.__hash="3556039402";var w=g,y=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"jsx-".concat(w.__hash)+" home__container",children:[Object(n.jsx)("div",{className:"jsx-".concat(w.__hash)+" flex-center",children:Object(n.jsx)("img",{alt:"github-logo",src:_.a,width:"300px",height:"auto",loading:"lazy",className:"jsx-".concat(w.__hash)})}),Object(n.jsx)("div",{className:"jsx-".concat(w.__hash)+" flex-center",children:Object(n.jsxs)("div",{className:"jsx-".concat(w.__hash)+" home__card-route-container",children:[Object(n.jsx)(p,{title:"Buscar Usuarios",imageURL:j.a,routePath:"/users"}),Object(n.jsx)("div",{className:"jsx-".concat(w.__hash)+" home__card-route-divider"}),Object(n.jsx)(p,{title:"Buscar Repositorios",imageURL:v.a,routePath:"/repositories"})]})})]}),Object(n.jsx)(s.a,{id:w.__hash,children:w})]})};t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(i.a,{children:[Object(n.jsx)("title",{children:"Home"}),Object(n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(n.jsx)(y,{})]})}},cTJO:function(e,t,a){"use strict";var n=a("J4zp"),r=a("284h");t.__esModule=!0,t.default=void 0;var c=r(a("q1tI")),i=a("elyg"),o=a("nOHt"),s=a("vNVm"),l={};function d(e,t,a,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,a,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+a+(r?"%"+r:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,a=(0,o.useRouter)(),r=a&&a.pathname||"/",u=c.default.useMemo((function(){var t=(0,i.resolveHref)(r,e.href,!0),a=n(t,2),c=a[0],o=a[1];return{href:c,as:e.as?(0,i.resolveHref)(r,e.as):o||c}}),[r,e.href,e.as]),f=u.href,h=u.as,p=e.children,x=e.replace,_=e.shallow,b=e.scroll,j=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var m=c.Children.only(p),v=m&&"object"===typeof m&&m.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),w=n(g,2),y=w[0],O=w[1],k=c.default.useCallback((function(e){y(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,y]);(0,c.useEffect)((function(){var e=O&&t&&(0,i.isLocalURL)(f),n="undefined"!==typeof j?j:a&&a.locale,r=l[f+"%"+h+(n?"%"+n:"")];e&&!r&&d(a,f,h,{locale:n})}),[h,f,O,j,t,a]);var L={ref:k,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,a,n,r,c,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(a))&&(e.preventDefault(),null==o&&(o=n.indexOf("#")<0),t[r?"replace":"push"](a,n,{shallow:c,locale:s,scroll:o}))}(e,a,f,h,x,_,b,j)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),d(a,f,h,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof j?j:a&&a.locale,E=a&&a.isLocaleDomain&&(0,i.getDomainLocale)(h,N,a&&a.locales,a&&a.domainLocales);L.href=E||(0,i.addBasePath)((0,i.addLocale)(h,N,a&&a.defaultLocale))}return c.default.cloneElement(m,L)};t.default=u},nCcy:function(e,t){e.exports="/github-api-front-end/_next/static/images/github-repositories-4b9d95708e133ea2611293d8314b29c3.png"},vNVm:function(e,t,a){"use strict";var n=a("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,a=e.disabled||!i,s=(0,r.useRef)(),l=(0,r.useState)(!1),d=n(l,2),u=d[0],f=d[1],h=(0,r.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),a||u||e&&e.tagName&&(s.current=function(e,t,a){var n=function(e){var t=e.rootMargin||"",a=o.get(t);if(a)return a;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return o.set(t,a={id:t,observer:r,elements:n}),a}(a),r=n.id,c=n.observer,i=n.elements;return i.set(e,t),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),o.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[a,t,u]);return(0,r.useEffect)((function(){if(!i&&!u){var e=(0,c.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[u]),[h,u]};var r=a("q1tI"),c=a("0G5g"),i="undefined"!==typeof IntersectionObserver;var o=new Map},y5V1:function(e,t){e.exports="/github-api-front-end/_next/static/images/github-logo-1b136cd11de4e9b17d887882d22ba9ba.png"}},[["H0SL",0,2,1,3]]]);