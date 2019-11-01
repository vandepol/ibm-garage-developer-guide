(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{416:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),n=a(439);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},l=s("Tabs"),c=s("Tab"),b={_frontmatter:o},p=n.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(p,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"Tabs"},Object(r.b)(c,{label:"Pre-requisites",mdxType:"Tab"},Object(r.b)("p",null,"The IBM Garage for Cloud Developer Tools are hosted in a ",Object(r.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers"}),"IBM Cloud Kubernetes Service")," or\n",Object(r.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/openshift"}),"Red Hat OpenShift on IBM Cloud")," clutser to use for application development. These\ninstructions explain how to access, configure, and run the scripts to create the cluster."),Object(r.b)("p",null,"The following pre-requisties are required before following the setup instructions."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An IBM Cloud account with:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the ability to provision resources to support ",Object(r.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/kubernetes/clusters"}),"Kubernetes"),"\nand ",Object(r.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/kubernetes/clusters?platformType=openshift"}),"OpenShift")," environments"),Object(r.b)("li",{parentName:"ul"},"the ability to create a ",Object(r.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/account/resource-groups"}),"Resource Group")," for your development resources and admin rights to this resource group"),Object(r.b)("li",{parentName:"ul"},"a region and zone containing ",Object(r.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/classic/network/vlans"}),"a pair of public and private VLANs")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop")," installed and running on your local machine"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node")," installed on your local machine"))),Object(r.b)(c,{label:"1. Clone",mdxType:"Tab"},Object(r.b)("p",null,"Clone the ",Object(r.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n")),Object(r.b)("p",null,"Switch to the cloned directory"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-bash"}),"cd ibm-garage-iteration-zero\n"))),Object(r.b)(c,{label:"2. API keys",mdxType:"Tab"},Object(r.b)("p",null,"A Kubernetes or OpenShift clutser is a PaaS resource hosted in IaaS resources.\nAPI keys authenticate an ",Object(r.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli"}),"IBM Cloud CLI")," client—such as a Terraform script—to create\nthese resources programatically. Two keys will be needed:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The first Key is for the Classic Infrastructure (IaaS) resources"),Object(r.b)("li",{parentName:"ul"},"The second key is for the IBM Cloud (PaaS) resources")),Object(r.b)("p",null,"The following steps create the required keys and put them into a file called ",Object(r.b)("inlineCode",{parentName:"p"},"credentials.properties"),"."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-properties"}),"classic.username=<CLASSIC_USERNAME>\nclassic.api.key=<CLASSIC_API_KEY>\nibmcloud.api.key=<IBMCLOUD_API_KEY>\n")),Object(r.b)("p",null,"The Iteration Zero library will use these settings to initialize its environment."),Object(r.b)("h3",{id:"step-a-create-the-credentialsproperties-file"},"Step A. Create the credentials.properties file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Inside the ",Object(r.b)("inlineCode",{parentName:"li"},"iteration-zero-ibmcloud")," folder, copy ",Object(r.b)("inlineCode",{parentName:"li"},"credentials.template")," to a file named ",Object(r.b)("inlineCode",{parentName:"li"},"credentials.properties"),".")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"credentials.properties")," file is already listed in the ",Object(r.b)("inlineCode",{parentName:"p"},".gitignore")," file so that the file containing\nyour private API keys will not be pushed to the server repository."),Object(r.b)("h3",{id:"step-b-create-and-set-the-classic-infrastructure-api-key"},"Step B. Create and set the Classic infrastructure API key"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Follow these instructions to create a Classic infrastructure API key: ",Object(r.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-classic_keys",title:"Managing classic infrastructure API keys"}),"Managing classic infrastructure API keys")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the IBM Cloud console, go to the IBM Cloud API Keys page"),Object(r.b)("p",{parentName:"li"},"To open the IBM Cloud API Keys page, select ",Object(r.b)("strong",{parentName:"p"},"Manage -> Access (IAM)"),", then select the ",Object(r.b)("strong",{parentName:"p"},"IBM Cloud API keys")," tab.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If your account already has a classic infrastructure API key, it will appear in the list of keys as ",Object(r.b)("strong",{parentName:"p"},"Classic infrastructure API key"),". Otherwise, the page will have a ",Object(r.b)("strong",{parentName:"p"},"Create a classic infrastructure API key")," button on the top. To crate the key, press that button and close the dialog."),Object(r.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"968px"}}),"\n      ",Object(r.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.42148760330579%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzklEQVQY043Mu07DMBSA4TwtEojLwguwsDAgcRtYGZB4DNRWLAixchEoSqvUxnFckjhx2vycpAIWBix95z86g6NUaWzu0CYb5G7Bf1/XdQPZMJmlKEsik39iXUEm+r1v6QNVHaQNvgnUTSt++31rlyuC6LuSf5cyopm2JHPDTFmmKhuapOanb1PNS6x4ek95Tdb7czwnTi3a1ajcr9mKD+eJCt/yl1IsqsDh9QMbx7fsnI/FhK3TEfuXdxxc3bN5MmJX7ttnY/YuJhzdPPIFqJUn7NcaI6oAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"API Keys",title:"API Keys",src:"/ibm-garage-developer-guide/static/5c2c0556e59dc6d972f4484169318d46/cfe9c/apikeys.png",srcSet:["/ibm-garage-developer-guide/static/5c2c0556e59dc6d972f4484169318d46/d6747/apikeys.png 288w","/ibm-garage-developer-guide/static/5c2c0556e59dc6d972f4484169318d46/09548/apikeys.png 576w","/ibm-garage-developer-guide/static/5c2c0556e59dc6d972f4484169318d46/cfe9c/apikeys.png 968w"],sizes:"(max-width: 968px) 100vw, 968px",loading:"lazy"})),"\n    ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Find ",Object(r.b)("strong",{parentName:"p"},"Classic infrastructure API key")," in the list and open its details."),Object(r.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"608px"}}),"\n      ",Object(r.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.77631578947368%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABsElEQVQ4y42Ti26rMAyG+/7Pd6bR9bJ2BRISoNBwTUj+44RTymGatEif4jjC/m2cXSwbpEULVnaB/+0Xs6/fnDskeUs0+BIKV15hB1qT0ej7DnocYCeDYegxkm30CE34e+9rGhV8/jwOQ/jG2QnPZbSeA3bDiCSTuDGB8qGQihwxF8iKO3heBrwt7zWYLCDonLAMt4RBNe0SUGuDnXPOSwQcZfLZvE0KSC4x/NvXkM9ZrFeIEQJ6hRRARX/Ao3dU5wOKwx6GJ0ApgCKDk3wDg0uvIciaENCQQp+1OB/xwSQuXOKQcORNB6WnwFOLW+1OpFTJNNvfApJCc4rQnz/QHiM89m+oSXFFeNvePoHkAkeEPaZz+jUn2CoMJVPf+tMeefQGk1ypTA7kjOAzXk1GLeAxHAF2m32r3j31LyXfP0/YxwyiqkG/A/1kMVi3MLpNyT6BfZU82U3AKb5gqCt0hYQS2YzMFruRAo5mEK2Ca5tZ7aKOBIzmVXK4eFT0VyVQFT9D967MqSUUvJtnb7IWqtM0x2al8FnGL8DGNtSaoqYX1OvXYGMzTz+BDeuS1y/lLzUf8FmtiQsfAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Classic Keys",title:"Classic Keys",src:"/ibm-garage-developer-guide/static/d532ccb8217912372f627a41d130228e/0bd43/classickeys.png",srcSet:["/ibm-garage-developer-guide/static/d532ccb8217912372f627a41d130228e/d6747/classickeys.png 288w","/ibm-garage-developer-guide/static/d532ccb8217912372f627a41d130228e/09548/classickeys.png 576w","/ibm-garage-developer-guide/static/d532ccb8217912372f627a41d130228e/0bd43/classickeys.png 608w"],sizes:"(max-width: 608px) 100vw, 608px",loading:"lazy"})),"\n    ")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Edit the ",Object(r.b)("inlineCode",{parentName:"p"},"credentials.properties")," file to set the values for the ",Object(r.b)("inlineCode",{parentName:"p"},"classic.username")," and ",Object(r.b)("inlineCode",{parentName:"p"},"classic.api.key")," properties."))),Object(r.b)("h3",{id:"step-c-create-and-set-the-ibm-cloud-api-key"},"Step C. Create and set the IBM Cloud API key"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Follow these instructions to create an IBM Cloud API key:\n",Object(r.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userapikey",title:"Managing user API keys"}),"Managing user API keys"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Edit the ",Object(r.b)("inlineCode",{parentName:"p"},"credentials.properties")," file to set the value for the ",Object(r.b)("inlineCode",{parentName:"p"},"ibmcloud.api.key")," property.")))),Object(r.b)(c,{label:"3. Resource Group",mdxType:"Tab"},Object(r.b)("p",null,"Before we can create resources—such as a Kubernetes or OpenShift cluster—we need to create a resource group.\n",Object(r.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam"}),"IBM Cloud Identity and Access Management")," uses a resource group to organize\na set of resources so that one access policy can easily be applied to all of the resources. This resource group\nwill help distinguish the Cloud Developer Tools resources from the other resources in the same IBM Cloud account. "),Object(r.b)("p",null,"Create a dedicated resource group for your development team. This resource group will contain the Cloud Developer\nTools’ resources—your development cluster and supporting cloud services."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Follow these instructions to create a resource group:\n",Object(r.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/resources?topic=resources-rgs#create_rgs",title:"Creating a resource group"}),"Creating a resource group"))),Object(r.b)("p",null,"Remember the name of your resource group, you’ll need to set it in a configuration file.")),Object(r.b)(c,{label:"4. VLANs",mdxType:"Tab"},Object(r.b)("p",null,"A Kubernetes or OpenShift cluster uses two VLANs, a public VLAN and a private VLAN. In IBM Cloud, a single zone cluster\nis hosted in a particular zone in a particular region. If the account you’re using has multiple regions and zones,\nyou need to decide what region and zone you’ll want the cluster cerated in, then specify VLANs in that zone."),Object(r.b)("p",null,"There are two approaches for determing the VLAN info:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Advanced users can view the list of VLANs in their account and choose which VLANs to use."),Object(r.b)("li",{parentName:"ul"},"For users who want a simpler approach, the Cloud Developer Tools include a CLI which can tell you\nthe VLAN info for the first zone in the region you specify. ")),Object(r.b)("p",null,"Either way, once you determine the VLAN info, you need to set it in the ",Object(r.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," properties file."),Object(r.b)("h3",{id:"option-a-select-from-accounts-vlan-list-advanced"},"Option A. Select from account’s VLAN List (Advanced)"),Object(r.b)("p",null,Object(r.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/infrastructure/vlans"}),"Getting started with VLANs")," explains how to open the\nVLAN List page in the console. Choose the public and private VLANs for the region and zone you want to\nhost the Cloud Developer Tools. "),Object(r.b)("h3",{id:"option-b-install-and-use-the-developer-tools-cli-simpler"},"Option B. Install and use the Developer Tools CLI (Simpler)"),Object(r.b)("p",null,"The Developer Tools CLI has a command to gather this information for you, in a format that is\neasy to cut/paste into the ",Object(r.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," properties file."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install the ",Object(r.b)("a",i({parentName:"li"},{href:"https://github.ibm.com/garage-catalyst/ibmcloud-garage-cli"}),"IBM Garage Developer Tools CLI"),":",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",i({parentName:"pre"},{className:"language-bash"}),"npm i -g @garage-catalyst/ibm-garage-cloud-cli\n"))),Object(r.b)("li",{parentName:"ul"},"Log into your IBM Cloud Account with the correct region and resource group:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",i({parentName:"pre"},{className:"language-bash"}),"ibmcloud login -a cloud.ibm.com -r <region> -g <resource group>\n"))),Object(r.b)("li",{parentName:"ul"},"Run the CLI command to obtain the VLAN information:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",i({parentName:"pre"},{className:"language-bash"}),"igc vlan\n")),"  You will now have a set of properties that can be copied directly into your ",Object(r.b)("inlineCode",{parentName:"li"},"terraform.tfvars"),".")),Object(r.b)("p",null,"Remember your VLAN ID and routers, you’ll need to set them in a configuration file.")),Object(r.b)(c,{label:"5. Variables",mdxType:"Tab"},Object(r.b)("p",null,"The settings for creating the Cloud Developer Tools cluster go in a file called ",Object(r.b)("inlineCode",{parentName:"p"},"terraform.tfvars"),"."),Object(r.b)("h3",{id:"step-a-set-the-required-terraform-variables"},"Step A. Set the required Terraform variables"),Object(r.b)("p",null,"Edit the ",Object(r.b)("inlineCode",{parentName:"p"},"./terraform/settings/terraform.tfvars")," file to set the resource group, VLANs, and other values gathered from the previous steps.\nMany of these values can be copied directly from the output of\nthe ",Object(r.b)("a",i({parentName:"p"},{href:"https://github.ibm.com/garage-catalyst/ibmcloud-garage-cli"}),"IBM Garage Developer Tools CLI")," command ",Object(r.b)("inlineCode",{parentName:"p"},"igc vlan"),"."),Object(r.b)("p",null,"Typical values look like this:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-terraform"}),'resource_group_name="catalyst-team"\nvlan_region="us-south"\nvlan_datacenter="dal10"\npublic_vlan_id="2366011"\nprivate_vlan_id="2366012"\ncluster_name="catalyst-team-cluster"\n')),Object(r.b)("h3",{id:"step-b-set-the-optional-terraform-variables"},"Step B. Set the optional Terraform variables"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," file has three additional properties that specify optional settings."),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-terraform"}),'# The type of cluster that will be created/used (kubernetes or openshift)\ncluster_type="kubernetes"\n# Flag indicating if we are using an existing cluster or creating a new one\ncluster_exists="false"\n# Flag indicating if we are using an existing postgres server or creating a new one\npostgres_server_exists="false"\n')),Object(r.b)("p",null,"These are scenarios for using these optioal settings:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To specify whether the cluster is Kubernetes or OpenShift, set ",Object(r.b)("inlineCode",{parentName:"p"},"cluster_type"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To specify installing the tools into an existing cluster, set ",Object(r.b)("inlineCode",{parentName:"p"},"cluster_exists"),", ",Object(r.b)("inlineCode",{parentName:"p"},"cluster_type"),", and  ",Object(r.b)("inlineCode",{parentName:"p"},"cluster_name"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To specify that the existing cluster already has a Postgres service instance, set ",Object(r.b)("inlineCode",{parentName:"p"},"postgres_server_exists"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you are installing into an existing cluster you can ignore the step that requires you to obtain the VLAN information.")))),Object(r.b)(c,{label:"6. Run",mdxType:"Tab"},Object(r.b)("h3",{id:"run-the-installation"},"Run the installation"),Object(r.b)("p",null,"We are now ready to kick off the installation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run the following command to launch a IBM Garage ",Object(r.b)("a",i({parentName:"p"},{href:"https://github.ibm.com/garage-catalyst/client-tools-image"}),"Developer Tools CLI Tools Docker container"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",i({parentName:"pre"},{className:"language-bash"}),"./launch.sh\n")),Object(r.b)("p",{parentName:"li"},"  This will install the Cloud Garage Tools docker image and exec shell into the running container. The container will\nmount the filesystem’s ",Object(r.b)("inlineCode",{parentName:"p"},"./terraform/")," directory as ",Object(r.b)("inlineCode",{parentName:"p"},"/home/devops/src/"),". Once the Docker container has started and\nthe script has exec shelled into it, you will see an IBM Garage banner. This will help you identify you are running\ninside the Docker image that has just mounted your file system."),Object(r.b)("p",{parentName:"li"},"  The supplied Terraform script is ready to run. You optionally can extend or modify the scripts and tailor them for\nyour project’s specific needs.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run this script in the container:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",i({parentName:"pre"},{className:"language-bash"}),"./runTerraform.sh\n")),Object(r.b)("p",{parentName:"li"},"  This script will create the Cloud Developer Tools environment."),Object(r.b)("p",{parentName:"li"},"  The script will prompt if you want to proceed. After you select ",Object(r.b)("strong",{parentName:"p"},"Y"),", the Terraform Apply process will begin to\ncreate the infrastructure and services for your environment."),Object(r.b)("p",{parentName:"li"},"  If an existing cluster is selected, the contents will be cleaned up to prepare for the terraform\nprocess (the ",Object(r.b)("inlineCode",{parentName:"p"},"tools"),", ",Object(r.b)("inlineCode",{parentName:"p"},"dev"),", ",Object(r.b)("inlineCode",{parentName:"p"},"test"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"staging")," namespaces)."),Object(r.b)("p",{parentName:"li"},"  Creating a new cluster takes about 1.5 hours on average (but can also take considerably longer)\nand the rest of the process takes about 30 minutes. At the end, you should have your Iteration Zero\nresources fully provisioned and configured. Enjoy!"))),Object(r.b)("h3",{id:"cloud-developer-tools-environment"},"Cloud Developer Tools environment"),Object(r.b)("p",null,"Once the Terraform scripts have finished, you can see the scripts created in IBM Cloud"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In the IBM Cloud console, open the ",Object(r.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/overview?topic=overview-ui#dashboardview"}),"Resource List")),Object(r.b)("li",{parentName:"ul"},"On the Resource List page, filter by your Resource Group (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"catalyst-team"),")"),Object(r.b)("li",{parentName:"ul"},"You should see these resources listed:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Clusters"),": 1, either Kubernetes or OpenShift"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Services"),": 5 or so, such as PostgreSQL, LogDNA, etc."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Storage"),": 1, an instance of Cloud Object Storage"))),Object(r.b)("li",{parentName:"ul"},"Select the cluster and open the Kubernetes dashboard or OpenShift web console. You should see:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Namespaces: ",Object(r.b)("inlineCode",{parentName:"li"},"tools"),", ",Object(r.b)("inlineCode",{parentName:"li"},"dev"),", ",Object(r.b)("inlineCode",{parentName:"li"},"test"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"staging")),Object(r.b)("li",{parentName:"ul"},"Deployments in the ",Object(r.b)("inlineCode",{parentName:"li"},"tools")," namespace: ",Object(r.b)("inlineCode",{parentName:"li"},"catalyst-dashboard"),", ",Object(r.b)("inlineCode",{parentName:"li"},"jenkins"),", etc.")))),Object(r.b)("h3",{id:"possible-issues"},"Possible issues"),Object(r.b)("p",null,"If you find that that the Terraform provisioning has failed try re-running the ",Object(r.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again. The state will be saved and Terraform will try and apply the configuration to match the desired end state."),Object(r.b)("p",null,"If you find that some of the services have failed to create in the time allocated. You can manually delete the instances in your resource group. You can then re-run the ",Object(r.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," but you need to delete the ",Object(r.b)("inlineCode",{parentName:"p"},"workspace")," directory first. This will remove any state that has been created by Terraform. "),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-bash"}),"rm -rf workspace\n")))))}u.isMDXComponent=!0},437:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},438:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},439:function(e,t,a){"use strict";a(32),a(28);var r=a(1),n=a(437),i=a(0),o=a.n(i),s=a(105),l=a.n(s),c=a(195),b=a(127),p=a(3),u=a.n(p),d=a(384),m=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(r.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:d.text},a)))))},h=a(438),g=a(385),O=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,i=a||n,o=i.baseUrl,s=i.subDirectory,l=o+"/edit/"+i.branch+s+"/src/pages"+t;return o?Object(r.b)("div",{className:"bx--row "+g.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a(193),f=(a(59),a(26)),N=a(386);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0}),o=i===n,s=new RegExp(n+"(?!-)"),c=a.replace(s,i);return Object(r.b)("li",{key:e,className:u()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(r.b)(f.Link,{className:N.link,to:""+c},e))}));return Object(r.b)("div",{className:N.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:N.list},i))))))},n}(o.a.Component),v=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,s=t.frontmatter,p=void 0===s?{}:s,u=t.relativePagePath,d=t.titleType,h=p.tabs,g=p.title,f=p.theme,N=p.description,A=p.keywords,C=n.data.site.pathPrefix,w=C?i.pathname.replace(C,""):i.pathname,T=h?w.split("/").slice(-1)[0]||l()(h[0],{lower:!0}):"";return Object(r.b)(b.a,{homepage:!1,theme:f,pageTitle:g,pageDescription:N,pageKeywords:A,titleType:d},Object(r.b)(m,{title:o?Object(r.b)(o,null):g,label:"label",tabs:h}),h&&Object(r.b)(y,{slug:w,tabs:h,currentTab:T}),Object(r.b)(v.a,{padded:!0},a,Object(r.b)(O,{relativePagePath:u})),Object(r.b)(j.a,{pageContext:t,location:i,slug:w,tabs:h,currentTab:T}),Object(r.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-installation-index-mdx-fc05ea5f550fd6f39a74.js.map