(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{403:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(437);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=b("PageDescription"),c=b("Video"),s={_frontmatter:i},p=r.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"<Video>")," component can render a Vimeo player or a html video player.")),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("h4",{id:"vimeo"},"Vimeo"),Object(n.b)(c,{title:"Eyes",vimeoId:"310583077",mdxType:"Video"}),Object(n.b)("h4",{id:"video"},"Video"),Object(n.b)(c,{src:"/videos/hero-video.mp4",poster:"/images/poster.png",mdxType:"Video"},Object(n.b)("track",{default:!0,src:"/videos/vtt/hero-video.vtt",srcLang:"en"})),Object(n.b)("h2",{id:"code"},"Code"),Object(n.b)("h4",{id:"vimeo-1"},"Vimeo"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Video/Video.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Video",path:"components/Video/Video.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Video"}),'<Video title="Eyes" vimeoId="310583077" />\n')),Object(n.b)("h4",{id:"video-1"},"Video"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Video/Video.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Video",path:"components/Video/Video.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Video"}),'<Video src="/videos/hero-video.mp4" poster="/images/poster.png">\n  <track default src="/videos/vtt/hero-video.vtt" srcLang="en" />\n</Video>\n')),Object(n.b)("h2",{id:"props"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"property"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"propType"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"required"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"default"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"vimeoId"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),"To find your ",Object(n.b)("inlineCode",{parentName:"td"},"vimeoId"),", go to the Vimeo page and find the video you want to put on your website. Once it is loaded, look at the URL and look for the numbers that come after the slash (/).")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"src"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Use the html ",Object(n.b)("inlineCode",{parentName:"td"},"<video>")," player with a local ",Object(n.b)("inlineCode",{parentName:"td"},".mp4")," video")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"title"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Vimeo title")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"poster"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Provides an image to show before the video loads, only works with ",Object(n.b)("inlineCode",{parentName:"td"},"src"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"children"),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("a",o({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track"}),Object(n.b)("inlineCode",{parentName:"a"},"<track>"))),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"non-vimeo only")," – Provide ",Object(n.b)("inlineCode",{parentName:"td"},".vtt")," file in your static directory to make your videos more accessible. Then add a track element with a src pointing to it Check out ",Object(n.b)("a",o({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#Tutorial_on_how_to_write_a_WebVTT_file"}),"this simple tutorial")," for getting started with writing vtt files.")))))}d.isMDXComponent=!0},435:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/garage-developer-guide"}}}')},436:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":""}}}}}')},437:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(435),o=a(0),i=a.n(o),b=a(105),l=a.n(b),c=a(195),s=a(127),p=a(3),d=a.n(p),m=a(383),u=function(e){var t,a=e.title,r=e.tabs,o=void 0===r?[]:r;return Object(n.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=o.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},g=a(436),j=a(384),O=function(e){var t=e.relativePagePath,a=e.repository,r=g.data.site.siteMetadata.repository,o=a||r,i=o.baseUrl,b=i+"/tree/master"+o.subDirectory+"/src/pages"+t;return i?Object(n.b)("div",{className:"bx--row "+j.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},h=a(193),N=(a(59),a(26)),v=a(385);var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0}),i=o===r,b=new RegExp(r+"(?!-)"),c=a.replace(b,o);return Object(n.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(n.b)(N.Link,{className:v.link,to:""+c},e))}));return Object(n.b)("div",{className:v.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:v.list},o))))))},r}(i.a.Component),f=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,b=t.frontmatter,p=void 0===b?{}:b,d=t.relativePagePath,m=t.titleType,g=p.tabs,j=p.title,N=p.theme,v=p.description,w=p.keywords,V=r.data.site.pathPrefix,x=V?o.pathname.replace(V,""):o.pathname,k=g?x.split("/").slice(-1)[0]||l()(g[0],{lower:!0}):"";return Object(n.b)(s.a,{homepage:!1,theme:N,pageTitle:j,pageDescription:v,pageKeywords:w,titleType:m},Object(n.b)(u,{title:i?Object(n.b)(i,null):j,label:"label",tabs:g}),g&&Object(n.b)(y,{slug:x,tabs:g,currentTab:k}),Object(n.b)(f.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:d})),Object(n.b)(h.a,{pageContext:t,location:o,slug:x,tabs:g,currentTab:k}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-video-mdx-bd7a00f88ae5907fefb9.js.map