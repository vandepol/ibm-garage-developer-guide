(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{402:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),i=a(434);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var s={},n=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=n("PageDescription"),l=n("AnchorLinks"),p=n("AnchorLink"),b={_frontmatter:s},h=i.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(r.b)(h,o({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"},Object(r.b)("p",null,"Use Artifactory to store artifacts such as Helm charts")),Object(r.b)("p",null,"In IBM Garage Method, one of the Develop practices is to ",Object(r.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/deliver/practice_delivery_pipeline/"}),"automate continuous delivery through a delivery pipeline"),", in part by using an artifact repository for storing output of the build stage.\nThe Developer Tools environment uses Artifactory as an artifact repository manager, which it uses to host its Helm repository."),Object(r.b)("h2",{id:"what-is-artifactory"},"What is Artifactory"),Object(r.b)("p",null,"Artifactory is an artifact repository manager."),Object(r.b)("p",null,"An artifact repository manager hosts multiple binary repositories, like a database management system for artifacts. The binary repository compliments the source code repository: the code from an SCM is the input to the build process, whereas a binary repository stores the output of the build process, often called artifacts. The artifacts are often individual application components that can later be assembled into a full product."),Object(r.b)("p",null,"An artifact repository manager is an integral part of a CI/CD solution, a companion to the pipeline. As the pipeline builds artifacts, they’re stored in the repositories. When the pipeline later needs artifacts that have already been built, they’re retrieved from the repositories. This enables a build to be broken into smaller stages with well-defined inputs and outputs and provides better tracking of each stage’s results. Often a failed pipeline can restart in the middle using artifacts that were already built and stored."),Object(r.b)("p",null,"An artifact repository often serves as the storage for a package manager, which assembles an application from artifacts. Here are some common package managers and their repositories:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://maven.apache.org"}),Object(r.b)("strong",{parentName:"a"},"Maven")),": Builds Java artifacts (such as Jar, War, Ear, etc.) and projects stored in ",Object(r.b)("a",o({parentName:"li"},{href:"https://maven.apache.org/guides/introduction/introduction-to-repositories.html"}),"Maven repositories")," such as ",Object(r.b)("a",o({parentName:"li"},{href:"https://maven.apache.org/repository/index.html"}),"Maven Central")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://docs.npmjs.com/about-npm/"}),Object(r.b)("strong",{parentName:"a"},"npm")),": Assembles programs from JavaScript packages stored in ",Object(r.b)("a",o({parentName:"li"},{href:"https://docs.npmjs.com/misc/registry"}),"npm-registries")," such as the ",Object(r.b)("a",o({parentName:"li"},{href:"https://docs.npmjs.com/about-the-public-npm-registry"}),"public npm registry")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://pypi.org/project/pip/"}),Object(r.b)("strong",{parentName:"a"},"PIP")),": Installs Python packages from ",Object(r.b)("a",o({parentName:"li"},{href:"https://packaging.python.org/guides/hosting-your-own-index/"}),"index repositories")," such as the ",Object(r.b)("a",o({parentName:"li"},{href:"https://pypi.org/"}),"Python Package Index (PyPI)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://helm.sh"}),Object(r.b)("strong",{parentName:"a"},"Helm")),": Deploys applications to Kubernetes using charts stored in ",Object(r.b)("a",o({parentName:"li"},{href:"https://helm.sh/docs/chart_repository/"}),"Helm repositories")," such as the ",Object(r.b)("a",o({parentName:"li"},{href:"https://helm.sh/blog/intro-helm-hub/"}),"Helm Hub")," catalog of repositories")),Object(r.b)("p",null,"Docker is not a package manager, but its architecture includes an artifact repository:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://www.docker.com/"}),Object(r.b)("strong",{parentName:"a"},"Docker")),": Stores images in ",Object(r.b)("a",o({parentName:"li"},{href:"https://docs.docker.com/registry/"}),"Docker registries")," such as ",Object(r.b)("a",o({parentName:"li"},{href:"https://docs.docker.com/docker-hub/"}),"Docker Hub"))),Object(r.b)("p",null,"Note that you do not need a very large team to start reaping benefits from an artifact repository manager. The initial investment is not very large and the benefits are felt immediately."),Object(r.b)("h2",{id:"artifact-management-in-the-pipeline"},"Artifact management in the Pipeline"),Object(r.b)("p",null,"Note: Be sure to ",Object(r.b)("a",o({parentName:"p"},{href:"/getting-started/artifactory-setup"}),"set up Artifactory")," before using it in the Development Tools environment."),Object(r.b)("p",null,"The Developer Tools environment will eventually be extended to store a number of artifact types in Artifactory. Thus far, the CI and CD pipelines exchange two types of artifacts: Docker images and Helm charts. Jenkins builds these artifacts and ArgoCD deploys them. To store and share the artifacts, the pipeline uses two repositories:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Docker images"),": The ",Object(r.b)("a",o({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/Registry"}),"IBM Cloud Container Registry")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Helm charts"),": A Helm repository in Artifactory")),Object(r.b)("p",null,"The ",Object(r.b)("a",o({parentName:"p"},{href:"/starterkits/overview"}),"Starter Kit Templates")," have also been configured to store their Helm charts in Artificatory."),Object(r.b)("p",null,"Artifactory is part of the Developer Tools environment’s complete CI/CD solution:"),Object(r.b)(l,{small:!0,mdxType:"AnchorLinks"},Object(r.b)(p,{to:"../../guides/continuous-integration",mdxType:"AnchorLink"},"Continuous Integration"),Object(r.b)(p,{to:"../../guides/continuous-delivery",mdxType:"AnchorLink"},"Continuous Delivery")),Object(r.b)("h3",{id:"artifactory-dashboard"},"Artifactory dashboard"),Object(r.b)("p",null,"Use the Artifactory dashboard to browse the repositories and their artifacts."),Object(r.b)("p",null,"Open the Artifactory web UI for your environment."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Use the ",Object(r.b)("a",o({parentName:"li"},{href:"/getting-started/dashboard"}),"Developer Tools Dashboard")," to open the Artifactory dashboard")),Object(r.b)("p",null,"Browse the Helm repository."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to the Artifact Repository Browser page"),Object(r.b)("li",{parentName:"ul"},"Expand the tree for the ",Object(r.b)("inlineCode",{parentName:"li"},"generic-local")," repository, which is the Helm repository"),Object(r.b)("li",{parentName:"ul"},"Expand the branch for your environment’s cluster, such as ",Object(r.b)("inlineCode",{parentName:"li"},"showcase-dev-iks"))),Object(r.b)("p",null,"The artifacts in the cluster’s branch follow the ",Object(r.b)("a",o({parentName:"p"},{href:"https://helm.sh/docs/chart_repository/"}),"Helm chart repository")," structure:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"index.yaml"),": Helm’s index of all of the charts in the repository"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"charts"),": The ",Object(r.b)("inlineCode",{parentName:"li"},"tgz")," files named for the application they deploy\n",Object(r.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"461px"}}),"\n      ",Object(r.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"91.32321041214749%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAACzklEQVQ4y4WT60tTcRjHz3/jDY2BYbtZKIkJkhhaWb1MCCKxgijoRWbLPyEKonCbli96UwmGSS96IV02zSBZkivXNtl2tnPdznbOt9/zm2ed6cAffPld9jyf89wmDM4O4Ux4FIPBIYwtXMTp0DBGX5zHhYVLGJ4b4RqYHcTJZ/3oe37qUAlnX41hfPEKhl+OYPLtDdxauo2rrydwffEm269h4s0kRubP4eijY/A88cP92FcnenNK6Lvbj/47A7j8dByBDzOYfh/A1PI07i3f5+fplQAerDxEYGWmtjs19Y7ZLk0x3ecSTviOw3XEhfngHNKJNFY/rmLtyxo2v28i8imC6Oco1r+uc8V+xNg9gm+RdWxEN5hdFEpeAcqAWTJhGiYEr8+L1tZWBINBKIqC7fg2VzKZxE5iB7GfMcTj8ap+x/kb7fZdkiVougZZliErMgS/34/Ozk4OpJXRszDKBiSJGWoaDluGYUAURW6fzWZZhF4v2traakBZlTmIvkgR67qOYrHI91KpBNM0D6hcLsOyLA7lwJaWFoTDYQ4kmKqqyOfzXIVCoXYmKC1ybrQoCMHn89UBCUZfKjAAwSnKekAD2N7vHEg17OjoQDAUgsEedyUVOxkRW39T2EqkEPuTYHuS33+ldpFVdWQUh+y7WkRGzEPo7u6Gy+Wq1VDSdMh6ETlZQSqTQzorIp1jyuaQV1RoRgWqUebS9vbquQKxIFUjbG9vr6VsVio8BdNkjqoCeS992i3L5O8Wa8R+kQ9PuaenB263GyGWMi3qGHWOOiqyFKiG1BCqK42HLd4sJqo5gWybA122gTRf5ETGuVyurtt290nUOALVgL29vejq6qqLkLpKQDKyR4iMnbLnlIDkQ/YNx2Y/kJwpQhtkR2YD6a1uDj0eD5qamhqmTMbOGjpF7ySCWM45pBo2NzcfAFab8v8/akdm14+c7YidwH832cIwuW/ueAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Artifact Repository Browser",title:"Artifact Repository Browser",src:"/static/a6d2b6618e0df652d9f9d60f9f5f6a9f/504c6/artifact-repo-browser.png",srcSet:["/static/a6d2b6618e0df652d9f9d60f9f5f6a9f/d6747/artifact-repo-browser.png 288w","/static/a6d2b6618e0df652d9f9d60f9f5f6a9f/504c6/artifact-repo-browser.png 461w"],sizes:"(max-width: 461px) 100vw, 461px",loading:"lazy"})),"\n    "))),Object(r.b)("p",null,"Browse the artifacts to see how a Helm repository is organized."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select the ",Object(r.b)("inlineCode",{parentName:"li"},"index.yaml")," file and View it to see its contents\n",Object(r.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"873px"}}),"\n      ",Object(r.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.57044673539518%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABuUlEQVQ4y6VSi26DMAzk/z9xWllpGd3aQgkhIS/wfC7puoc2aUM6nROU8/lR9H1P+/2eDocDjeP4LwzDQIVzjowxNE0ThRDIe/8nZJ2C+IsxEpxCdJ5nXNGyLBJn4Pwd8j+8BYp8yGWfz2fquk7sIxEA578hpSQokAFB27a03W7pdDpJP5AEZVhrRTQ/yMiJMn8QxCVcwWXTNMJ1XdNut6PNZiPtQBKt9Y2R8N79J8FAl0snYigb3DQHiVE6BIZBMQ/ceC3s3MQCcP5JED0MIdHLi6Nt5aiqApfu2KWnaufZqZf4eIzsbiY1JBa8slI8TAWXGOTCxlZB5yKV5YUeHl6ZO+6n45ISu4krBxbzAq39GvOd3GPVIuVZSMmw3LYndvckPI6ah2EEKA8tWRasR1qBVbqWi7K/9PAq2MkQ6vqZhasbyrKUgfW9kuEoNUhsjOV3PwxFqQv36Sh7iNUBsEpYG8AYrJLh9ljhGL24hdP7tSpg35iJp6p5RTQ7MvS4MXc88v3Izi0nmDjRtLJlGDZhuEXTTVSGktIszXcuMUcBBpU5x9ZGGRT4HUlKhyC0WJD+/V1XL0j8BqfRidaOH+8pAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Helm Repository Index",title:"Helm Repository Index",src:"/static/0ef6e45f1e00327f32f533f9b20c7329/2fb3a/helm-repo-index.png",srcSet:["/static/0ef6e45f1e00327f32f533f9b20c7329/d6747/helm-repo-index.png 288w","/static/0ef6e45f1e00327f32f533f9b20c7329/09548/helm-repo-index.png 576w","/static/0ef6e45f1e00327f32f533f9b20c7329/2fb3a/helm-repo-index.png 873w"],sizes:"(max-width: 873px) 100vw, 873px",loading:"lazy"})),"\n    ")),Object(r.b)("li",{parentName:"ul"},"Expand a chart’s branch to see that the ",Object(r.b)("inlineCode",{parentName:"li"},"tgz")," file contains the chart directory structure\n",Object(r.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"480px"}}),"\n      ",Object(r.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"125.41666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAACXBIWXMAAAsSAAALEgHS3X78AAADKklEQVQ4y51Ua08TQRTdnwRNoRTagppo9ItRUBKDQkw0IsHHJ/0VChKe8QsxRo2amNAWDF+I8tBEHhFI0MYYaQu0S/fVx7bbhePcqdMsVCVlkpN7d3bm7Jl77qx0/tkFXHzehrYXl9HxphOtLF5904Vrb7vQ/uoKLr1sx5nxczg9ftYRBc5VQOoIduLm+260vr6Mu+H7uBO+h+vvbqAn2ItbE7fRPdGDpqcB1I02oH7Ui/oxL8tLqP8LpBN3T+FE70k8ePEQgwtDeDzTj74PT/Bopg/9HwcwMDuIodlhDM+PcgyyfGRhDKMMw3MjGDoEKeAJwF/vx/TENKKRKBbnFrGxsoHIagRL80v4/vUbVj6vYH1pHZG1CNa+rPJ8+dMyktEk+Cgy2CVIHq8HLrcLwXAIpmVCVmTsKrtQNRXbiW3spko5zckpGZquIaWkeG5kDOTMHItpaIbGITU3N8Pn9yEUDPGPqaYK0zShazoKhQKOGsViEZqmIZ1O8yh5PB7U1NQgHA7zBdlsloNeUsxkMtB1ncO2bezv72Nvb68MeqZBH5dlGVJjYyPq6uowOTnJXxABgb4o8nw+zzeIzc4h5mh9NBqF1NDQAJfLVSbM5XJcnaqqB5Q51VB0QgiJxWKQ/H4/mpqaykemjaRIHFWopVzU9L+EXq8Xbre7rNC2izxaVoHX0DAMRmjAOsIgWssJW1paQE4HQyHQFtnIQsnmEZNT+LmVwI/YFiKbcfzaSTLIPG4mZESTu2yNwmKKI86e4/E4JJ/PB6pjiB2ZxGtZE+m8BSWdxU5KxRYjJtAGirFEkkHmOb1PqjpHIqWUCAOBAMjpcg1t29FjFkxmks5M0phJBMozrKYGq2malUOsLx+ZCKmOgpAa1VnwfKFUS103uPOHm73CFNHYU1NTFYSiVWiOzCFQS1EXON0+QEj1q62tLbt8mJBAc3QdxfWi+E+FRxFStCyr4gbR0cVVPJZC2qAoCgfVkkCqxahaofNuE+w/7latUMwJIjKG1NHcsQjpmVwVRGSK889TFSGBNtNxqRdFdDpctULhsOhBIj38G6tKoTBENDbhf4S/AdHkyYvConYvAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Helm Chart Structure",title:"Helm Chart Structure",src:"/static/6a53b5961d67badb27d55d9b510dec16/67dff/helm-chart-structure.png",srcSet:["/static/6a53b5961d67badb27d55d9b510dec16/d6747/helm-chart-structure.png 288w","/static/6a53b5961d67badb27d55d9b510dec16/67dff/helm-chart-structure.png 480w"],sizes:"(max-width: 480px) 100vw, 480px",loading:"lazy"})),"\n    "))),Object(r.b)("p",null,"Notice that each chart has its own URL in Artifactory, and index lists the URL for a chart."),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"The Developer Tools environment includes an artifact repository manager called Artifactory, which it uses to host a Helm repository.\nAs the Jenkins pipeline builds the Helm chart for an application, it stores the chart in the Artifactory repository. When the ArgoCD pipeline deploys an application, it retrieves the chart from the Artifactory repository."))}m.isMDXComponent=!0},432:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},433:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},434:function(e,t,a){"use strict";a(32),a(28);var r=a(1),i=a(432),o=a(0),s=a.n(o),n=a(105),c=a.n(n),l=a(195),p=a(127),b=a(3),h=a.n(b),m=a(384),d=function(e){var t,a=e.title,i=e.tabs,o=void 0===i?[]:i;return Object(r.b)("div",{className:h()(m.pageHeader,(t={},t[m.withTabs]=o.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:m.text},a)))))},u=a(433),f=a(385),g=function(e){var t=e.relativePagePath,a=e.repository,i=u.data.site.siteMetadata.repository,o=a||i,s=o.baseUrl,n=o.subDirectory,c=s+"/edit/"+o.branch+n+"/src/pages"+t;return s?Object(r.b)("div",{className:"bx--row "+f.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:f.link,href:c},"Edit this page on GitHub"))):null},y=a(193),A=(a(59),a(26)),O=a(386);var j=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=c()(e,{lower:!0}),s=o===i,n=new RegExp(i+"(?!-)"),l=a.replace(n,o);return Object(r.b)("li",{key:e,className:h()((t={},t[O.selectedItem]=s,t),O.listItem)},Object(r.b)(A.Link,{className:O.link,to:""+l},e))}));return Object(r.b)("div",{className:O.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:O.list},o))))))},i}(s.a.Component),N=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,s=e.Title,n=t.frontmatter,b=void 0===n?{}:n,h=t.relativePagePath,m=t.titleType,u=b.tabs,f=b.title,A=b.theme,O=b.description,v=b.keywords,k=i.data.site.pathPrefix,w=k?o.pathname.replace(k,""):o.pathname,x=u?w.split("/").slice(-1)[0]||c()(u[0],{lower:!0}):"";return Object(r.b)(p.a,{homepage:!1,theme:A,pageTitle:f,pageDescription:O,pageKeywords:v,titleType:m},Object(r.b)(d,{title:s?Object(r.b)(s,null):f,label:"label",tabs:u}),u&&Object(r.b)(j,{slug:w,tabs:u,currentTab:x}),Object(r.b)(N.a,{padded:!0},a,Object(r.b)(g,{relativePagePath:h})),Object(r.b)(y.a,{pageContext:t,location:o,slug:w,tabs:u,currentTab:x}),Object(r.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-artifact-management-index-mdx-f698aa0d4eb54823e9f0.js.map