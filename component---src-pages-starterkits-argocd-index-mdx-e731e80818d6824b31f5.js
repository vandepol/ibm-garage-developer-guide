(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{431:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),n=a(438);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o={},s={_frontmatter:o},c=n.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(c,i({},s,a,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},436:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},437:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":""}}}}}')},438:function(e,t,a){"use strict";a(32),a(28);var r=a(1),n=a(436),i=a(0),o=a.n(i),s=a(105),c=a.n(s),b=a(195),l=a(127),p=a(3),u=a.n(p),d=a(384),m=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(r.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:d.text},a)))))},O=a(437),v=a(385),f=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,i=a||n,o=i.baseUrl,s=o+"/tree/master"+i.subDirectory+"/src/pages"+t;return o?Object(r.b)("div",{className:"bx--row "+v.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:v.link,href:s},"Edit this page on GitHub"))):null},g=a(193),j=(a(59),a(26)),h=a(386);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=c()(e,{lower:!0}),o=i===n,s=new RegExp(n+"(?!-)"),b=a.replace(s,i);return Object(r.b)("li",{key:e,className:u()((t={},t[h.selectedItem]=o,t),h.listItem)},Object(r.b)(j.Link,{className:h.link,to:""+b},e))}));return Object(r.b)("div",{className:h.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:h.list},i))))))},n}(o.a.Component),x=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,s=t.frontmatter,p=void 0===s?{}:s,u=t.relativePagePath,d=t.titleType,O=p.tabs,v=p.title,j=p.theme,h=p.description,w=p.keywords,N=n.data.site.pathPrefix,P=N?i.pathname.replace(N,""):i.pathname,k=O?P.split("/").slice(-1)[0]||c()(O[0],{lower:!0}):"";return Object(r.b)(l.a,{homepage:!1,theme:j,pageTitle:v,pageDescription:h,pageKeywords:w,titleType:d},Object(r.b)(m,{title:o?Object(r.b)(o,null):v,label:"label",tabs:O}),O&&Object(r.b)(y,{slug:P,tabs:O,currentTab:k}),Object(r.b)(x.a,{padded:!0},a,Object(r.b)(f,{relativePagePath:u})),Object(r.b)(g.a,{pageContext:t,location:i,slug:P,tabs:O,currentTab:k}),Object(r.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-starterkits-argocd-index-mdx-e731e80818d6824b31f5.js.map