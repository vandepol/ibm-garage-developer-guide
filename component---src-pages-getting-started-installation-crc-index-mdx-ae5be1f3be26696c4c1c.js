(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{412:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return m}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(441);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},o=c("Tabs"),s=c("Tab"),l=c("PageDescription"),p={_frontmatter:b},d=r.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(d,i({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o,{mdxType:"Tabs"},Object(n.b)(s,{label:"Pre-requisites",mdxType:"Tab"},Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"CodeReady Containers ",Object(n.b)("a",i({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg#minimum-system-requirements_gsg"}),"Minimum system requirements")),Object(n.b)("li",{parentName:"ul"},"A ",Object(n.b)("a",i({parentName:"li"},{href:"https://access.redhat.com/login"}),"Red Hat account")," is required"))),Object(n.b)(s,{label:"Install CRC",mdxType:"Tab"},Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"Download CRC, install it, and configure it")),Object(n.b)("p",null,"Install and configure CRC as described in\n",Object(n.b)("a",i({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg"}),"Getting started with Red Hat CodeReady Containers"),",\nstarting with section 1.5\n",Object(n.b)("a",i({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg#installing-codeready-containers_gsg"}),"Installing CodeReady Containers"),"."),Object(n.b)("p",null,"Some highlights and comments on installing CRC:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"CRC executable"),": Copy the crc binary to your $PATH:"),Object(n.b)("p",{parentName:"li"},"  From the directory where you untarred the download:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cp crc /usr/local/bin\n")),Object(n.b)("p",{parentName:"li"},"  (Is the file literally named ",Object(n.b)("inlineCode",{parentName:"p"},"crc"),"? Do execute permissions need to be set?)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Add memory"),": By default, the CRC VM is set to only use 8 GB of RAM. The more RAM you can give it, the better."),Object(n.b)("p",{parentName:"li"},"  To set it to 10 GB of RAM, do this after ",Object(n.b)("inlineCode",{parentName:"p"},"crc setup")," but before ",Object(n.b)("inlineCode",{parentName:"p"},"crc start"),":"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"crc config set memory 10240\n"))))),Object(n.b)(s,{label:"Run CRC",mdxType:"Tab"},Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"Run the CRC cluster in a VM")),Object(n.b)("p",null,"Run CRC as described in\n",Object(n.b)("a",i({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg"}),"Getting started with Red Hat CodeReady Containers"),",\nstarting with section 1.7\n",Object(n.b)("a",i({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg#starting-the-virtual-machine_gsg"}),"Starting the virtual machine"),"."),Object(n.b)("p",null,"Some highlights and comments on running CRC:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Starting CRC")),Object(n.b)("p",{parentName:"li"},"  To start the CRC VM:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"crc start\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"CRC console")),Object(n.b)("p",{parentName:"li"},"  Open the CRC console in a web browser:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"http://console-openshift-console.apps-crc.testing\n")),Object(n.b)("p",{parentName:"li"},"  Log into the console using the kube.admin link."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The username is ",Object(n.b)("inlineCode",{parentName:"li"},"kubeadmin")),Object(n.b)("li",{parentName:"ul"},"The password is printed in the terminal window by ",Object(n.b)("inlineCode",{parentName:"li"},"crc start"))))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Stopping CRC")),Object(n.b)("p",{parentName:"li"},"  To stop the CRC VM:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"crc stop\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Uninstalling CRC")),Object(n.b)("p",{parentName:"li"},"  To delete the CRC VM:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"crc delete\n"))))),Object(n.b)(s,{label:"Install Tools",mdxType:"Tab"},Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"Install the Cloud Developer Tools environment into the CRC cluster")),Object(n.b)("p",null,"Install the Cloud Developer Tools as described in ",Object(n.b)("a",i({parentName:"p"},{href:"installation"}),"Cloud Developer Tools Installation"),".\nHowever, you really just need to ",Object(n.b)("strong",{parentName:"p"},"Clone")," the scripts and ",Object(n.b)("strong",{parentName:"p"},"Run")," them; you can skip the resource steps—see below."),Object(n.b)("p",null,"Some highlights and comments on installing the Developer Tools:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"API keys")),Object(n.b)("p",{parentName:"li"},"  The credentials file won’t be used, but still needs to exist and needs to contain the proper properties keys.\nThe values will be ignored. So copy the template file but there’s no need to edit it."),Object(n.b)("p",{parentName:"li"},"  Inside the ",Object(n.b)("inlineCode",{parentName:"p"},"iteration-zero-ibmcloud")," folder, copy ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.template")," to a file named ",Object(n.b)("inlineCode",{parentName:"p"},"credentials.properties"),"."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cd iteration-zero-ibmcloud\ncp credentials.template credentials.properties\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"TF variables")),Object(n.b)("p",{parentName:"li"},"  The required variables in ",Object(n.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," are required for IBM Cloud but are not needed for CRC.\nSo there’s no need to set the resource group and VLAN properties."),Object(n.b)("p",{parentName:"li"},"  For the optional variables, the ",Object(n.b)("inlineCode",{parentName:"p"},"cluster_type")," must be set to OpenShift:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'# The type of cluster that will be created/used (kubernetes or openshift)\ncluster_type="openshift"\n')),Object(n.b)("p",{parentName:"li"},"  The other variables will be ignored, so no need to edit them."))))))}m.isMDXComponent=!0},439:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},440:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},441:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(439),i=a(0),b=a.n(i),c=a(105),o=a.n(c),s=a(195),l=a(127),p=a(3),d=a.n(p),m=a(384),u=function(e){var t,a=e.title,r=e.tabs,i=void 0===r?[]:r;return Object(n.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},O=a(440),g=a(385),h=function(e){var t=e.relativePagePath,a=e.repository,r=O.data.site.siteMetadata.repository,i=a||r,b=i.baseUrl,c=i.subDirectory,o=b+"/edit/"+i.branch+c+"/src/pages"+t;return b?Object(n.b)("div",{className:"bx--row "+g.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:g.link,href:o},"Edit this page on GitHub"))):null},j=a(193),N=(a(59),a(26)),C=a(386);var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0}),b=i===r,c=new RegExp(r+"(?!-)"),s=a.replace(c,i);return Object(n.b)("li",{key:e,className:d()((t={},t[C.selectedItem]=b,t),C.listItem)},Object(n.b)(N.Link,{className:C.link,to:""+s},e))}));return Object(n.b)("div",{className:C.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:C.list},i))))))},r}(b.a.Component),f=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,b=e.Title,c=t.frontmatter,p=void 0===c?{}:c,d=t.relativePagePath,m=t.titleType,O=p.tabs,g=p.title,N=p.theme,C=p.description,v=p.keywords,w=r.data.site.pathPrefix,T=w?i.pathname.replace(w,""):i.pathname,_=O?T.split("/").slice(-1)[0]||o()(O[0],{lower:!0}):"";return Object(n.b)(l.a,{homepage:!1,theme:N,pageTitle:g,pageDescription:C,pageKeywords:v,titleType:m},Object(n.b)(u,{title:b?Object(n.b)(b,null):g,label:"label",tabs:O}),O&&Object(n.b)(y,{slug:T,tabs:O,currentTab:_}),Object(n.b)(f.a,{padded:!0},a,Object(n.b)(h,{relativePagePath:d})),Object(n.b)(j.a,{pageContext:t,location:i,slug:T,tabs:O,currentTab:_}),Object(n.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-installation-crc-index-mdx-ae5be1f3be26696c4c1c.js.map