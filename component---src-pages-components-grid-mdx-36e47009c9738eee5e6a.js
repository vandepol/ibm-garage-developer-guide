(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{396:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return A}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(439);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},b=l("PageDescription"),g=l("AnchorLinks"),o=l("AnchorLink"),p=l("Row"),d=l("Column"),s={_frontmatter:c},m=r.a;function A(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(m,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"<Grid>"),", ",Object(n.b)("inlineCode",{parentName:"p"},"<Row>")," and ",Object(n.b)("inlineCode",{parentName:"p"},"<Column>")," components are used to arrange content and components on the grid within a page.")),Object(n.b)("p",null,"The math for the website is calculated using a 12 column grid at the large breakpoint, 8 column at medium (tablet) breakpoint and 4 column at the small (mobile) breakpoint. The design is based on a 16 column grid, however the math is calcualted with 12 to prevent having to add a ",Object(n.b)("inlineCode",{parentName:"p"},"offset")," class to each row."),Object(n.b)("p",null,"To learn more about the grid is built, you can read the docs in the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/tree/master/packages/grid"}),"Carbon")," repo."),Object(n.b)(g,{mdxType:"AnchorLinks"},Object(n.b)(o,{mdxType:"AnchorLink"},"Grid"),Object(n.b)(o,{mdxType:"AnchorLink"},"Row"),Object(n.b)(o,{mdxType:"AnchorLink"},"Column")),Object(n.b)("h2",{id:"grid"},"Grid"),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"<Grid>")," component is a wrapper that adds the ",Object(n.b)("inlineCode",{parentName:"p"},"bx--grid")," class to a wrapper div. ",Object(n.b)("strong",{parentName:"p"},"You won’t need this")," when adding components to ",Object(n.b)("inlineCode",{parentName:"p"},".mdx")," pages as this is already built into the template.")),Object(n.b)("h3",{id:"code"},"Code"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Grid.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid",path:"components/Grid.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid"}),"<Grid>\n  <Row>\n    <Column>Contents</Column>\n  </Row>\n</Grid>\n")),Object(n.b)("h3",{id:"props"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null}),"property"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"propType"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"required"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"default"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"children"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"node"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"className"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Add custom class name")))),Object(n.b)("h2",{id:"row"},"Row"),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"<Row>")," component is a wrapper that adds the ",Object(n.b)("inlineCode",{parentName:"p"},"bx--row")," class to a wrapper div. You will want to use this to define rows that you will place ",Object(n.b)("inlineCode",{parentName:"p"},"<Column>")," components inside of.")),Object(n.b)("h3",{id:"code-1"},"Code"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Grid.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid",path:"components/Grid.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid"}),"<Row>\n  <Column>\n    Content or additional <Components />\n  </Column>\n</Row>\n")),Object(n.b)("h3",{id:"props-1"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null}),"property"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"propType"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"required"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"default"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"children"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"node"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"className"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Add custom class name")))),Object(n.b)("h2",{id:"column"},"Column"),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"<Column>")," component is used to define column widths for your content, you can set the rules at different breakpoints with the props.")),Object(n.b)("h3",{id:"example"},"Example"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(d,{colMd:4,colLg:4,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVQoz12TS2/aQBRGWTTbqDie8fghSIRpkiJCgrBE8WvGNlRNaVTaLtquiyJ2CAK/qFIX/ZFf7xhDaBZHd2RrztxvHjVmmrhoXaJ79w5MeOB2A5bTPMDcFhzHRTgaIY6ikjAMkecZfv74jq9fZoii8ECNMYZmo4G311doNhsQFodh1HF2ZuwwXsO2BeI0gyw+IKGqUfkYHz99xv3DN8RxQjJaLI5RM6lD3/cRBAF6vVuih263W3GDTqcD13EQJRnSbIJUjUtBnEhaJEeiJjR+KWy3keUFpKKVsxxKV6VQFPRNSnieS0JVTtAyWdyT/D3FD5HIjITpsZDBb50jTwKoaEAEJElK0XA4xGAwgOdqoaSoshQkqaqqrIRHHXLTgNu6RTt5hB/PiV+4vgloTy/pMBxwzmELgYjiyfGUBAVFVSU6rpw8/C+0zFPU22O8Kv7iJP+Dk+w36l4XpnFKMguWZVFkDwnF0lsipUJakeV5WfeyXYc0weIMgtUhuFFiWQJC2GDMRL/fx3Q6xXK5xNN6jdVqhc3mCdvtFvP5HJl6Fupa0zLmXIB5V+Ud1DDvDbjrg9F2HAvXJNxsNlgsFpjNZqVE38m9bBeZhKXIOQcXLrhFnemxvuD07zny7qA0erI+sOPODpF3wiZ0dP0qmNumsaiEnGLTodg2RvRSouqV7Ce/lGn+AcEOYKn+FnaEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png",srcSet:["/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/d6747/Article_05.png 288w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/09548/Article_05.png 576w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png 1152w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)(d,{colMd:4,colLg:4,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVQoz12TS2/aQBRGWTTbqDie8fghSIRpkiJCgrBE8WvGNlRNaVTaLtquiyJ2CAK/qFIX/ZFf7xhDaBZHd2RrztxvHjVmmrhoXaJ79w5MeOB2A5bTPMDcFhzHRTgaIY6ikjAMkecZfv74jq9fZoii8ECNMYZmo4G311doNhsQFodh1HF2ZuwwXsO2BeI0gyw+IKGqUfkYHz99xv3DN8RxQjJaLI5RM6lD3/cRBAF6vVuih263W3GDTqcD13EQJRnSbIJUjUtBnEhaJEeiJjR+KWy3keUFpKKVsxxKV6VQFPRNSnieS0JVTtAyWdyT/D3FD5HIjITpsZDBb50jTwKoaEAEJElK0XA4xGAwgOdqoaSoshQkqaqqrIRHHXLTgNu6RTt5hB/PiV+4vgloTy/pMBxwzmELgYjiyfGUBAVFVSU6rpw8/C+0zFPU22O8Kv7iJP+Dk+w36l4XpnFKMguWZVFkDwnF0lsipUJakeV5WfeyXYc0weIMgtUhuFFiWQJC2GDMRL/fx3Q6xXK5xNN6jdVqhc3mCdvtFvP5HJl6Fupa0zLmXIB5V+Ud1DDvDbjrg9F2HAvXJNxsNlgsFpjNZqVE38m9bBeZhKXIOQcXLrhFnemxvuD07zny7qA0erI+sOPODpF3wiZ0dP0qmNumsaiEnGLTodg2RvRSouqV7Ce/lGn+AcEOYKn+FnaEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png",srcSet:["/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/d6747/Article_05.png 288w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/09548/Article_05.png 576w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png 1152w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)(d,{colMd:4,colLg:4,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVQoz12TS2/aQBRGWTTbqDie8fghSIRpkiJCgrBE8WvGNlRNaVTaLtquiyJ2CAK/qFIX/ZFf7xhDaBZHd2RrztxvHjVmmrhoXaJ79w5MeOB2A5bTPMDcFhzHRTgaIY6ikjAMkecZfv74jq9fZoii8ECNMYZmo4G311doNhsQFodh1HF2ZuwwXsO2BeI0gyw+IKGqUfkYHz99xv3DN8RxQjJaLI5RM6lD3/cRBAF6vVuih263W3GDTqcD13EQJRnSbIJUjUtBnEhaJEeiJjR+KWy3keUFpKKVsxxKV6VQFPRNSnieS0JVTtAyWdyT/D3FD5HIjITpsZDBb50jTwKoaEAEJElK0XA4xGAwgOdqoaSoshQkqaqqrIRHHXLTgNu6RTt5hB/PiV+4vgloTy/pMBxwzmELgYjiyfGUBAVFVSU6rpw8/C+0zFPU22O8Kv7iJP+Dk+w36l4XpnFKMguWZVFkDwnF0lsipUJakeV5WfeyXYc0weIMgtUhuFFiWQJC2GDMRL/fx3Q6xXK5xNN6jdVqhc3mCdvtFvP5HJl6Fupa0zLmXIB5V+Ud1DDvDbjrg9F2HAvXJNxsNlgsFpjNZqVE38m9bBeZhKXIOQcXLrhFnemxvuD07zny7qA0erI+sOPODpF3wiZ0dP0qmNumsaiEnGLTodg2RvRSouqV7Ce/lGn+AcEOYKn+FnaEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png",srcSet:["/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/d6747/Article_05.png 288w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/09548/Article_05.png 576w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png 1152w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("h4",{id:"no-gutter-left"},"No gutter left"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVQoz12TS2/aQBRGWTTbqDie8fghSIRpkiJCgrBE8WvGNlRNaVTaLtquiyJ2CAK/qFIX/ZFf7xhDaBZHd2RrztxvHjVmmrhoXaJ79w5MeOB2A5bTPMDcFhzHRTgaIY6ikjAMkecZfv74jq9fZoii8ECNMYZmo4G311doNhsQFodh1HF2ZuwwXsO2BeI0gyw+IKGqUfkYHz99xv3DN8RxQjJaLI5RM6lD3/cRBAF6vVuih263W3GDTqcD13EQJRnSbIJUjUtBnEhaJEeiJjR+KWy3keUFpKKVsxxKV6VQFPRNSnieS0JVTtAyWdyT/D3FD5HIjITpsZDBb50jTwKoaEAEJElK0XA4xGAwgOdqoaSoshQkqaqqrIRHHXLTgNu6RTt5hB/PiV+4vgloTy/pMBxwzmELgYjiyfGUBAVFVSU6rpw8/C+0zFPU22O8Kv7iJP+Dk+w36l4XpnFKMguWZVFkDwnF0lsipUJakeV5WfeyXYc0weIMgtUhuFFiWQJC2GDMRL/fx3Q6xXK5xNN6jdVqhc3mCdvtFvP5HJl6Fupa0zLmXIB5V+Ud1DDvDbjrg9F2HAvXJNxsNlgsFpjNZqVE38m9bBeZhKXIOQcXLrhFnemxvuD07zny7qA0erI+sOPODpF3wiZ0dP0qmNumsaiEnGLTodg2RvRSouqV7Ce/lGn+AcEOYKn+FnaEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png",srcSet:["/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/d6747/Article_05.png 288w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/09548/Article_05.png 576w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png 1152w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVQoz12TS2/aQBRGWTTbqDie8fghSIRpkiJCgrBE8WvGNlRNaVTaLtquiyJ2CAK/qFIX/ZFf7xhDaBZHd2RrztxvHjVmmrhoXaJ79w5MeOB2A5bTPMDcFhzHRTgaIY6ikjAMkecZfv74jq9fZoii8ECNMYZmo4G311doNhsQFodh1HF2ZuwwXsO2BeI0gyw+IKGqUfkYHz99xv3DN8RxQjJaLI5RM6lD3/cRBAF6vVuih263W3GDTqcD13EQJRnSbIJUjUtBnEhaJEeiJjR+KWy3keUFpKKVsxxKV6VQFPRNSnieS0JVTtAyWdyT/D3FD5HIjITpsZDBb50jTwKoaEAEJElK0XA4xGAwgOdqoaSoshQkqaqqrIRHHXLTgNu6RTt5hB/PiV+4vgloTy/pMBxwzmELgYjiyfGUBAVFVSU6rpw8/C+0zFPU22O8Kv7iJP+Dk+w36l4XpnFKMguWZVFkDwnF0lsipUJakeV5WfeyXYc0weIMgtUhuFFiWQJC2GDMRL/fx3Q6xXK5xNN6jdVqhc3mCdvtFvP5HJl6Fupa0zLmXIB5V+Ud1DDvDbjrg9F2HAvXJNxsNlgsFpjNZqVE38m9bBeZhKXIOQcXLrhFnemxvuD07zny7qA0erI+sOPODpF3wiZ0dP0qmNumsaiEnGLTodg2RvRSouqV7Ce/lGn+AcEOYKn+FnaEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png",srcSet:["/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/d6747/Article_05.png 288w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/09548/Article_05.png 576w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png 1152w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVQoz12TS2/aQBRGWTTbqDie8fghSIRpkiJCgrBE8WvGNlRNaVTaLtquiyJ2CAK/qFIX/ZFf7xhDaBZHd2RrztxvHjVmmrhoXaJ79w5MeOB2A5bTPMDcFhzHRTgaIY6ikjAMkecZfv74jq9fZoii8ECNMYZmo4G311doNhsQFodh1HF2ZuwwXsO2BeI0gyw+IKGqUfkYHz99xv3DN8RxQjJaLI5RM6lD3/cRBAF6vVuih263W3GDTqcD13EQJRnSbIJUjUtBnEhaJEeiJjR+KWy3keUFpKKVsxxKV6VQFPRNSnieS0JVTtAyWdyT/D3FD5HIjITpsZDBb50jTwKoaEAEJElK0XA4xGAwgOdqoaSoshQkqaqqrIRHHXLTgNu6RTt5hB/PiV+4vgloTy/pMBxwzmELgYjiyfGUBAVFVSU6rpw8/C+0zFPU22O8Kv7iJP+Dk+w36l4XpnFKMguWZVFkDwnF0lsipUJakeV5WfeyXYc0weIMgtUhuFFiWQJC2GDMRL/fx3Q6xXK5xNN6jdVqhc3mCdvtFvP5HJl6Fupa0zLmXIB5V+Ud1DDvDbjrg9F2HAvXJNxsNlgsFpjNZqVE38m9bBeZhKXIOQcXLrhFnemxvuD07zny7qA0erI+sOPODpF3wiZ0dP0qmNumsaiEnGLTodg2RvRSouqV7Ce/lGn+AcEOYKn+FnaEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png",srcSet:["/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/d6747/Article_05.png 288w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/09548/Article_05.png 576w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png 1152w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("h4",{id:"no-gutter"},"No gutter"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVQoz12TS2/aQBRGWTTbqDie8fghSIRpkiJCgrBE8WvGNlRNaVTaLtquiyJ2CAK/qFIX/ZFf7xhDaBZHd2RrztxvHjVmmrhoXaJ79w5MeOB2A5bTPMDcFhzHRTgaIY6ikjAMkecZfv74jq9fZoii8ECNMYZmo4G311doNhsQFodh1HF2ZuwwXsO2BeI0gyw+IKGqUfkYHz99xv3DN8RxQjJaLI5RM6lD3/cRBAF6vVuih263W3GDTqcD13EQJRnSbIJUjUtBnEhaJEeiJjR+KWy3keUFpKKVsxxKV6VQFPRNSnieS0JVTtAyWdyT/D3FD5HIjITpsZDBb50jTwKoaEAEJElK0XA4xGAwgOdqoaSoshQkqaqqrIRHHXLTgNu6RTt5hB/PiV+4vgloTy/pMBxwzmELgYjiyfGUBAVFVSU6rpw8/C+0zFPU22O8Kv7iJP+Dk+w36l4XpnFKMguWZVFkDwnF0lsipUJakeV5WfeyXYc0weIMgtUhuFFiWQJC2GDMRL/fx3Q6xXK5xNN6jdVqhc3mCdvtFvP5HJl6Fupa0zLmXIB5V+Ud1DDvDbjrg9F2HAvXJNxsNlgsFpjNZqVE38m9bBeZhKXIOQcXLrhFnemxvuD07zny7qA0erI+sOPODpF3wiZ0dP0qmNumsaiEnGLTodg2RvRSouqV7Ce/lGn+AcEOYKn+FnaEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png",srcSet:["/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/d6747/Article_05.png 288w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/09548/Article_05.png 576w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png 1152w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVQoz12TS2/aQBRGWTTbqDie8fghSIRpkiJCgrBE8WvGNlRNaVTaLtquiyJ2CAK/qFIX/ZFf7xhDaBZHd2RrztxvHjVmmrhoXaJ79w5MeOB2A5bTPMDcFhzHRTgaIY6ikjAMkecZfv74jq9fZoii8ECNMYZmo4G311doNhsQFodh1HF2ZuwwXsO2BeI0gyw+IKGqUfkYHz99xv3DN8RxQjJaLI5RM6lD3/cRBAF6vVuih263W3GDTqcD13EQJRnSbIJUjUtBnEhaJEeiJjR+KWy3keUFpKKVsxxKV6VQFPRNSnieS0JVTtAyWdyT/D3FD5HIjITpsZDBb50jTwKoaEAEJElK0XA4xGAwgOdqoaSoshQkqaqqrIRHHXLTgNu6RTt5hB/PiV+4vgloTy/pMBxwzmELgYjiyfGUBAVFVSU6rpw8/C+0zFPU22O8Kv7iJP+Dk+w36l4XpnFKMguWZVFkDwnF0lsipUJakeV5WfeyXYc0weIMgtUhuFFiWQJC2GDMRL/fx3Q6xXK5xNN6jdVqhc3mCdvtFvP5HJl6Fupa0zLmXIB5V+Ud1DDvDbjrg9F2HAvXJNxsNlgsFpjNZqVE38m9bBeZhKXIOQcXLrhFnemxvuD07zny7qA0erI+sOPODpF3wiZ0dP0qmNumsaiEnGLTodg2RvRSouqV7Ce/lGn+AcEOYKn+FnaEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png",srcSet:["/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/d6747/Article_05.png 288w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/09548/Article_05.png 576w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png 1152w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVQoz12TS2/aQBRGWTTbqDie8fghSIRpkiJCgrBE8WvGNlRNaVTaLtquiyJ2CAK/qFIX/ZFf7xhDaBZHd2RrztxvHjVmmrhoXaJ79w5MeOB2A5bTPMDcFhzHRTgaIY6ikjAMkecZfv74jq9fZoii8ECNMYZmo4G311doNhsQFodh1HF2ZuwwXsO2BeI0gyw+IKGqUfkYHz99xv3DN8RxQjJaLI5RM6lD3/cRBAF6vVuih263W3GDTqcD13EQJRnSbIJUjUtBnEhaJEeiJjR+KWy3keUFpKKVsxxKV6VQFPRNSnieS0JVTtAyWdyT/D3FD5HIjITpsZDBb50jTwKoaEAEJElK0XA4xGAwgOdqoaSoshQkqaqqrIRHHXLTgNu6RTt5hB/PiV+4vgloTy/pMBxwzmELgYjiyfGUBAVFVSU6rpw8/C+0zFPU22O8Kv7iJP+Dk+w36l4XpnFKMguWZVFkDwnF0lsipUJakeV5WfeyXYc0weIMgtUhuFFiWQJC2GDMRL/fx3Q6xXK5xNN6jdVqhc3mCdvtFvP5HJl6Fupa0zLmXIB5V+Ud1DDvDbjrg9F2HAvXJNxsNlgsFpjNZqVE38m9bBeZhKXIOQcXLrhFnemxvuD07zny7qA0erI+sOPODpF3wiZ0dP0qmNumsaiEnGLTodg2RvRSouqV7Ce/lGn+AcEOYKn+FnaEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png",srcSet:["/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/d6747/Article_05.png 288w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/09548/Article_05.png 576w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png 1152w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("h4",{id:"offset"},"Offset"),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(d,{colMd:4,colLg:4,offsetLg:4,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVQoz12TS2/aQBRGWTTbqDie8fghSIRpkiJCgrBE8WvGNlRNaVTaLtquiyJ2CAK/qFIX/ZFf7xhDaBZHd2RrztxvHjVmmrhoXaJ79w5MeOB2A5bTPMDcFhzHRTgaIY6ikjAMkecZfv74jq9fZoii8ECNMYZmo4G311doNhsQFodh1HF2ZuwwXsO2BeI0gyw+IKGqUfkYHz99xv3DN8RxQjJaLI5RM6lD3/cRBAF6vVuih263W3GDTqcD13EQJRnSbIJUjUtBnEhaJEeiJjR+KWy3keUFpKKVsxxKV6VQFPRNSnieS0JVTtAyWdyT/D3FD5HIjITpsZDBb50jTwKoaEAEJElK0XA4xGAwgOdqoaSoshQkqaqqrIRHHXLTgNu6RTt5hB/PiV+4vgloTy/pMBxwzmELgYjiyfGUBAVFVSU6rpw8/C+0zFPU22O8Kv7iJP+Dk+w36l4XpnFKMguWZVFkDwnF0lsipUJakeV5WfeyXYc0weIMgtUhuFFiWQJC2GDMRL/fx3Q6xXK5xNN6jdVqhc3mCdvtFvP5HJl6Fupa0zLmXIB5V+Ud1DDvDbjrg9F2HAvXJNxsNlgsFpjNZqVE38m9bBeZhKXIOQcXLrhFnemxvuD07zny7qA0erI+sOPODpF3wiZ0dP0qmNumsaiEnGLTodg2RvRSouqV7Ce/lGn+AcEOYKn+FnaEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png",srcSet:["/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/d6747/Article_05.png 288w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/09548/Article_05.png 576w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png 1152w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)(d,{colMd:4,colLg:4,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVQoz12TS2/aQBRGWTTbqDie8fghSIRpkiJCgrBE8WvGNlRNaVTaLtquiyJ2CAK/qFIX/ZFf7xhDaBZHd2RrztxvHjVmmrhoXaJ79w5MeOB2A5bTPMDcFhzHRTgaIY6ikjAMkecZfv74jq9fZoii8ECNMYZmo4G311doNhsQFodh1HF2ZuwwXsO2BeI0gyw+IKGqUfkYHz99xv3DN8RxQjJaLI5RM6lD3/cRBAF6vVuih263W3GDTqcD13EQJRnSbIJUjUtBnEhaJEeiJjR+KWy3keUFpKKVsxxKV6VQFPRNSnieS0JVTtAyWdyT/D3FD5HIjITpsZDBb50jTwKoaEAEJElK0XA4xGAwgOdqoaSoshQkqaqqrIRHHXLTgNu6RTt5hB/PiV+4vgloTy/pMBxwzmELgYjiyfGUBAVFVSU6rpw8/C+0zFPU22O8Kv7iJP+Dk+w36l4XpnFKMguWZVFkDwnF0lsipUJakeV5WfeyXYc0weIMgtUhuFFiWQJC2GDMRL/fx3Q6xXK5xNN6jdVqhc3mCdvtFvP5HJl6Fupa0zLmXIB5V+Ud1DDvDbjrg9F2HAvXJNxsNlgsFpjNZqVE38m9bBeZhKXIOQcXLrhFnemxvuD07zny7qA0erI+sOPODpF3wiZ0dP0qmNumsaiEnGLTodg2RvRSouqV7Ce/lGn+AcEOYKn+FnaEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Grid Example",title:"Grid Example",src:"/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png",srcSet:["/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/d6747/Article_05.png 288w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/09548/Article_05.png 576w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/fb070/Article_05.png 1152w","/ibm-garage-developer-guide/static/dc51d23a5322c2511205c8c525bbe8ee/dee76/Article_05.png 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("h3",{id:"code-2"},"Code"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Grid.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid",path:"components/Grid.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid"}),"<Row>\n  <Column colMd={4} colLg={4}>\n    ![Grid Example](images/Article_05.png)\n  </Column>\n  <Column colMd={4} colLg={4}>\n    ![Grid Example](images/Article_05.png)\n  </Column>\n  <Column colMd={4} colLg={4}>\n    ![Grid Example](images/Article_05.png)\n  </Column>\n</Row>\n")),Object(n.b)("h4",{id:"no-gutter-left-1"},"No gutter left"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Grid.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid",path:"components/Grid.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid"}),"<Row>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    ![Grid Example](images/Article_05.png)\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    ![Grid Example](images/Article_05.png)\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    ![Grid Example](images/Article_05.png)\n  </Column>\n</Row>\n")),Object(n.b)("h4",{id:"no-gutter-1"},"No gutter"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Grid.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid",path:"components/Grid.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid"}),"<Row>\n  <Column colMd={4} colLg={4} noGutterSm>\n    ![Grid Example](images/Article_05.png)\n  </Column>\n  <Column colMd={4} colLg={4} noGutterSm>\n    ![Grid Example](images/Article_05.png)\n  </Column>\n  <Column colMd={4} colLg={4} noGutterSm>\n    ![Grid Example](images/Article_05.png)\n  </Column>\n</Row>\n")),Object(n.b)("h4",{id:"offset-1"},"Offset"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Grid.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid",path:"components/Grid.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Grid"}),"<Row>\n  <Column colMd={4} colLg={4} offsetLg={4}>\n    ![Grid Example](images/Article_05.png)\n  </Column>\n  <Column colMd={4} colLg={4}>\n    ![Grid Example](images/Article_05.png)\n  </Column>\n</Row>\n")),Object(n.b)("h3",{id:"props-2"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null}),"property"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"propType"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"required"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"default"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"children"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"node"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"className"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Add custom class name")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"colSm"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Specify the col width at small breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"colMd"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Specify the col width at medium breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"colLg"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"12"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Specify the col width at large breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"offsetLg"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Specify the col offset at large breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"offsetMd"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Specify the col offset at medium breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"offsetSm"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Specify the col offset at small breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"noGutterSm"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"bool"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Specify no-gutter at small breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"noGutterMd"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"bool"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Specify no-gutter at medium breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"noGutterLg"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"bool"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Specify no-gutter at large breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"noGutterSmLeft"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"bool"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Specify no-gutter left at small breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"noGutterMdLeft"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"bool"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Specify no-gutter left at medium breakpoint")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"noGutterLgLeft"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"bool"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Specify no-gutter left at large breakpoint")))))}A.isMDXComponent=!0},437:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},438:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},439:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(437),i=a(0),c=a.n(i),l=a(105),b=a.n(l),g=a(195),o=a(127),p=a(3),d=a.n(p),s=a(384),m=function(e){var t,a=e.title,r=e.tabs,i=void 0===r?[]:r;return Object(n.b)("div",{className:d()(s.pageHeader,(t={},t[s.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:s.text},a)))))},A=a(438),u=a(385),j=function(e){var t=e.relativePagePath,a=e.repository,r=A.data.site.siteMetadata.repository,i=a||r,c=i.baseUrl,l=i.subDirectory,b=c+"/edit/"+i.branch+l+"/src/pages"+t;return c?Object(n.b)("div",{className:"bx--row "+u.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:u.link,href:b},"Edit this page on GitHub"))):null},N=a(193),h=(a(59),a(26)),O=a(386);var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=b()(e,{lower:!0}),c=i===r,l=new RegExp(r+"(?!-)"),g=a.replace(l,i);return Object(n.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=c,t),O.listItem)},Object(n.b)(h.Link,{className:O.link,to:""+g},e))}));return Object(n.b)("div",{className:O.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:O.list},i))))))},r}(c.a.Component),x=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,c=e.Title,l=t.frontmatter,p=void 0===l?{}:l,d=t.relativePagePath,s=t.titleType,A=p.tabs,u=p.title,h=p.theme,O=p.description,v=p.keywords,w=r.data.site.pathPrefix,F=w?i.pathname.replace(w,""):i.pathname,f=A?F.split("/").slice(-1)[0]||b()(A[0],{lower:!0}):"";return Object(n.b)(o.a,{homepage:!1,theme:h,pageTitle:u,pageDescription:O,pageKeywords:v,titleType:s},Object(n.b)(m,{title:c?Object(n.b)(c,null):u,label:"label",tabs:A}),A&&Object(n.b)(y,{slug:F,tabs:A,currentTab:f}),Object(n.b)(x.a,{padded:!0},a,Object(n.b)(j,{relativePagePath:d})),Object(n.b)(N.a,{pageContext:t,location:i,slug:F,tabs:A,currentTab:f}),Object(n.b)(g.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-grid-mdx-36e47009c9738eee5e6a.js.map