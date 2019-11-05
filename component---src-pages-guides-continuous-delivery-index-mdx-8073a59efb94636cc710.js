(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{403:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),i=a(429);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r,c={},l=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),p={_frontmatter:c},b=i.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(b,o({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use ArgoCD to continuously deliver application changes into the runtime environment")),Object(n.b)("h2",{id:"what-is-continuous-delivery"},"What is Continuous Delivery"),Object(n.b)("p",null,"Continuous Delivery is the DevOps approach of continuously making new versions of a application components available\nfor deployment to an environment. The process involves automation of the build and validation process and concludes with\na new version of the application that is available for promotion to another environment."),Object(n.b)("p",null,"Continuous Delivery is closely related to Continuous Deployment with the only distinction being that in\nContinuous Deployment the new versions are automatically deployed into the next environment. In Continuous\nDelivery the automated deployment requires the deployment to be manually triggered."),Object(n.b)("h2",{id:"what-is-git-ops"},"What is Git Ops"),Object(n.b)("p",null,"GitOps is the operational pattern of using Git repositories as the source od truth for\ndefining the configuration that makes up the desired state of the application."),Object(n.b)("h2",{id:"common-tools"},"Common tools"),Object(n.b)("h3",{id:"what-is-argocd"},"What is ArgoCD"),Object(n.b)("p",null,"“ArgoCD is a delarative, GitOps continuous delivery tools for Kubernetes”"),Object(n.b)("p",null,"It supports defining kubernetes manifests in a number of ways:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"kustomize"),Object(n.b)("li",{parentName:"ul"},"helm charts"),Object(n.b)("li",{parentName:"ul"},"ksonnet"),Object(n.b)("li",{parentName:"ul"},"jsonnet"),Object(n.b)("li",{parentName:"ul"},"plain directory of yaml/json manifests")),Object(n.b)("p",null,"ArgoCD synchronizes the application state with the desired state defined in Git and\nautomates the deployment of kubernetes resources to ensure they match."),Object(n.b)("h3",{id:"configuring-gitops-with-argocd"},"Configuring GitOps with ArgoCD"),Object(n.b)("p",null,"You must have completed the ",Object(n.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-start/argocd-setup"}),"ArgoCD Setup")," before continuing."),Object(n.b)("h4",{id:"setup-gitops-repo"},"Setup GitOps repo"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a new repo from the ArgoCD Starter Kit template - ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/template-argocd-test/generate"}),"https://github.com/ibm-garage-cloud/template-argocd-test/generate"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Clone the project to your machine")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a branch named ",Object(n.b)("inlineCode",{parentName:"p"},"test")," to configure the values for deployment to the ",Object(n.b)("inlineCode",{parentName:"p"},"test")," environment"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"git checkout -b test\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Copy ",Object(n.b)("inlineCode",{parentName:"p"},"app-artifactory")," folder into folder for one of the application project names")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Update the ",Object(n.b)("inlineCode",{parentName:"p"},"requirements.yaml")," with the following values:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"name")," - the name of helm chart/image"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"repository")," - the url to artifactory within the cluster (",Object(n.b)("inlineCode",{parentName:"li"},"igc ingress -n tools"),")"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Update the ",Object(n.b)("inlineCode",{parentName:"p"},"values.yaml")," file with environment-specific values for the options available in the helm chart."),Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Note:")," The helm values will need to be prefixed with the helm chart name that was provided in the\nprevious step. For example, assuming the helm chart is ",Object(n.b)("inlineCode",{parentName:"p"},"message-logger")," the values.yaml file would look like the following:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"message-logger:\n  replicaCount: 3\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Repeat steps 4-6 for each helm chart/image in the application"))),Object(n.b)("h4",{id:"register-the-git-repo-in-argocd"},"Register the git repo in ArgoCD"),Object(n.b)("p",null,"Now that the repository has been created, we need to tell ArgoCD where it is."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Get the ArgoCD login information from the ",Object(n.b)("inlineCode",{parentName:"p"},"igc credentials")," cli command"),Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Note:")," You need to be logged into the cluster on the command-line for the CLI to access the cluster information.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Log into ArgoCD")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click on the gear icon on the left menu to access the Settings options"),Object(n.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.854545454545452%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAuklEQVQY062PSwuCQBSF57caUdkD2rTuZwpWlJSpaQ/HcV7B6TpG0CJ00cBhFvfc757D1qslhJT412NDz8PlzlGUAvmD48YFKmVQawNtLFRfkb9WGmzgzxAcYoSnDEGUYJ8UyAhaVIKSK2c29glt7U+5OfkaPxsRMDwm2J1zbAgaZVcH47WEqJW72lzvkiQ1O2w88QmYYhtf6Cdg2gJLIcFJLmVPYNUAp/PFN5AS5m+gMqazblvZfiq/AEYjyEZUoxfCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ArgoCD config",title:"ArgoCD config",src:"/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/fb070/argocd-config.png",srcSet:["/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/d6747/argocd-config.png 288w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/09548/argocd-config.png 576w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/fb070/argocd-config.png 1152w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/fb104/argocd-config.png 1728w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/902fb/argocd-config.png 2304w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/5448d/argocd-config.png 2750w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select the ",Object(n.b)("inlineCode",{parentName:"p"},"Repositories")," option")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click the ",Object(n.b)("inlineCode",{parentName:"p"},"Connect Repo")," button at the top and provide the url, username, and personal access token for the Git repo."))),Object(n.b)("h4",{id:"create-a-project-in-argocd-optional"},"Create a project in ArgoCD (Optional)"),Object(n.b)("p",null,"In ArgoCD terms, each deployable component is an application and applications are grouped into projects. Projects are not\nrequired for ArgoCD to be able to deploy applications but it helps to organize applications and provide some restrictions\non what can be done for applications that make up a project."),Object(n.b)("p",null,"To create a project, do the following:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Log into ArgoCD")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click on the gear icon on the left menu to access the Settings options"),Object(n.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.854545454545452%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAuklEQVQY062PSwuCQBSF57caUdkD2rTuZwpWlJSpaQ/HcV7B6TpG0CJ00cBhFvfc757D1qslhJT412NDz8PlzlGUAvmD48YFKmVQawNtLFRfkb9WGmzgzxAcYoSnDEGUYJ8UyAhaVIKSK2c29glt7U+5OfkaPxsRMDwm2J1zbAgaZVcH47WEqJW72lzvkiQ1O2w88QmYYhtf6Cdg2gJLIcFJLmVPYNUAp/PFN5AS5m+gMqazblvZfiq/AEYjyEZUoxfCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ArgoCD config",title:"ArgoCD config",src:"/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/fb070/argocd-config.png",srcSet:["/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/d6747/argocd-config.png 288w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/09548/argocd-config.png 576w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/fb070/argocd-config.png 1152w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/fb104/argocd-config.png 1728w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/902fb/argocd-config.png 2304w","/ibm-garage-developer-guide/static/c8c14e74a827c9c2dff00ee18cc14073/5448d/argocd-config.png 2750w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select the ",Object(n.b)("inlineCode",{parentName:"p"},"Projects")," option")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click the ",Object(n.b)("inlineCode",{parentName:"p"},"New Project")," button at the top of the page.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Provide the following values then press ",Object(n.b)("inlineCode",{parentName:"p"},"Create"),":"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"name")," - provide the name for the project"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"description")," - a brief description of the project"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"sources")," - click ",Object(n.b)("inlineCode",{parentName:"li"},"add source")," and pick the Git repository from the list that was added previously"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"destinations")," - click ",Object(n.b)("inlineCode",{parentName:"li"},"add destination")," and provide the cluster url(s) and namespace(s) to which the project applications can be deployed")),Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Note:")," Initially, the only cluster that is available is the one that ArgoCD is running in - ",Object(n.b)("inlineCode",{parentName:"p"},"https://kubernetes.default.svc"),"."))),Object(n.b)("h4",{id:"create-the-gitops-cd-secret"},"Create the ",Object(n.b)("inlineCode",{parentName:"h4"},"gitops-cd-secret")),Object(n.b)("p",null,"The last stage in the Jenkins pipeline updates the version number in the ",Object(n.b)("inlineCode",{parentName:"p"},"requirements.yaml")," to version of the helm chart\nthat was just built. In order for the pipeline to push the updated file into the GitOps repo, it needs to read the url\nand credentials from a Kubernetes secret named ",Object(n.b)("inlineCode",{parentName:"p"},"gitops-cd-secret"),"."),Object(n.b)("p",null,"Fortunately, a helm chart has been provided in the ArgoCD Starter Kit to help in the creation of the secret. The following\nsteps will walk through using the helm chart to create the secret."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Log into the cluster on the command-line.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Change the directory to the root of the ArgoCD Starter Kit repo that was cloned previously.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Run ",Object(n.b)("inlineCode",{parentName:"p"},"igc tools")," to start the tools environment")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Within the tools image context, run the following to create the secret:"))),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"helm template \\ \n    --name gitops-cd-secret \\\n    --namespace tools \\\n    --set git.username={GIT_USERNAME} \\\n    --set git.personalAccessToken={GIT_PAT} \\\n    --set git.host={GIT_HOST} \\\n    --set git.org={GIT_ORG} \\\n    --set git.repo={GIT_REPO} | \\\n    kubectl apply -n tools -f -\n")),Object(n.b)("h4",{id:"add-an-application-in-argocd-for-each-application-component-helm-chart"},"Add an application in ArgoCD for each application component (helm chart)"),Object(n.b)("p",null,"The last step in the process is to define the application(s) within ArgoCD that should be managed. This consists of\nconnecting the config within the Git repo to the cluster and namespace."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Log into ArgoCD")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("inlineCode",{parentName:"p"},"New Application")," and provide the following values:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"application name")," - The name of the application. It is recommend to use the format of ",Object(n.b)("inlineCode",{parentName:"li"},"{namespace}-{image name}")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"project")," - The project with which the application should be included"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"sync-policy")," - The manner with which ArgoCD will use to manage the deployed artifacts. ",Object(n.b)("inlineCode",{parentName:"li"},"Automatic with pruning")," is\nrecommended"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"repository url")," - The Git url where the configuration is stored"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"revision")," - The branch where the configuration for this instance is stored"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"path")," - The path within the repository where the application config is located"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"destination cluster")," - The cluster url for the deployment"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"destination namespace")," - The namespace where the application should be deployed"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Repeat that step for each application and each environment"))))}s.isMDXComponent=!0},427:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},428:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},429:function(e,t,a){"use strict";a(32),a(28);var n=a(1),i=a(427),o=a(0),r=a.n(o),c=a(105),l=a.n(c),p=a(195),b=a(127),s=a(3),m=a.n(s),d=a(384),g=function(e){var t,a=e.title,i=e.tabs,o=void 0===i?[]:i;return Object(n.b)("div",{className:m()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},a)))))},h=a(428),u=a(385),O=function(e){var t=e.relativePagePath,a=e.repository,i=h.data.site.siteMetadata.repository,o=a||i,r=o.baseUrl,c=o.subDirectory,l=r+"/edit/"+o.branch+c+"/src/pages"+t;return r?Object(n.b)("div",{className:"bx--row "+u.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:u.link,href:l},"Edit this page on GitHub"))):null},j=a(193),f=(a(59),a(26)),N=a(386);var v=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0}),r=o===i,c=new RegExp(i+"(?!-)"),p=a.replace(c,o);return Object(n.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=r,t),N.listItem)},Object(n.b)(f.Link,{className:N.link,to:""+p},e))}));return Object(n.b)("div",{className:N.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:N.list},o))))))},i}(r.a.Component),A=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,r=e.Title,c=t.frontmatter,s=void 0===c?{}:c,m=t.relativePagePath,d=t.titleType,h=s.tabs,u=s.title,f=s.theme,N=s.description,C=s.keywords,w=i.data.site.pathPrefix,y=w?o.pathname.replace(w,""):o.pathname,D=h?y.split("/").slice(-1)[0]||l()(h[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:f,pageTitle:u,pageDescription:N,pageKeywords:C,titleType:d},Object(n.b)(g,{title:r?Object(n.b)(r,null):u,label:"label",tabs:h}),h&&Object(n.b)(v,{slug:y,tabs:h,currentTab:D}),Object(n.b)(A.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:m})),Object(n.b)(j.a,{pageContext:t,location:o,slug:y,tabs:h,currentTab:D}),Object(n.b)(p.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-continuous-delivery-index-mdx-8073a59efb94636cc710.js.map