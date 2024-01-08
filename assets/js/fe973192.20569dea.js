"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[634],{11526:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var i=s(85893),n=s(11151),r=s(5370);const d={draft:!1},l="muximux Deployment",o={id:"demo-deployment copy/tcp/muximux",title:"muximux",description:"Muximux:",source:"@site/docs/demo-deployment copy/tcp/muximux.md",sourceDirName:"demo-deployment copy/tcp",slug:"/demo-deployment copy/tcp/muximux",permalink:"/demo-deployment copy/tcp/muximux",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"linux-vps-deployment",permalink:"/demo-deployment copy/tcp/linux-vps-deployment"},next:{title:"nginx-deployment",permalink:"/demo-deployment copy/tcp/nginx-deployment"}},a={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components},{Details:d}=t;return d||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/ljh.png",alt:"Alt Text",width:"25%"})}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h1,{id:"muximux-deployment",children:"muximux Deployment"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Muximux:"}),"\r\nA lightweight portal designed for managing Home Theater PC (HTPC) apps. Muximux allows users to view and control their HTPC applications through a single interface, eliminating the need for multiple tabs or bookmarks. It operates with just a PHP-enabled web server, providing a streamlined solution for HTPC app management."]}),(0,i.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Port Type"}),(0,i.jsx)(t.th,{children:"Port Number"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http"}),(0,i.jsx)(t.td,{children:"80"}),(0,i.jsx)(t.td,{children:"muximux Web UI is accessible on port 80."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})]})]}),(0,i.jsx)(t.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,i.jsx)(t.p,{children:"muximux uses volume mounts to manage configuration and download data. You can set these when running the container:"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Volume"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/path/to/appdata/config"})}),(0,i.jsx)(t.td,{children:"Path to muximux's configuration files."})]})})]}),(0,i.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Environment value:"})}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Docker Image"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"https://hub.docker.com/r/linuxserver/muximux",children:"linuxserver/muximux"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Application name"}),(0,i.jsx)(t.td,{children:"Eg: muximux1(you can put any name)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resource Allocation"}),(0,i.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Protocol"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http:"}),(0,i.jsx)(t.td,{children:"80"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp:"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Advanced"}),(0,i.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,i.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,i.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,i.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,i.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Alt Text",src:s(3416).Z+"",width:"1918",height:"1066"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(45523).Z+"",width:"1918",height:"1046"})]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Alt Text",src:s(77553).Z+"",width:"1913",height:"1042"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(10999).Z+"",width:"1917",height:"1027"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(39274).Z+"",width:"1918",height:"1045"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(87366).Z+"",width:"1918",height:"1022"})]}),(0,i.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,i.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,i.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"About muximux image we used."})}),(0,i.jsx)(t.p,{children:"This is the official muximux image."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Can I deploy my own muximux image with modified configuration ?"})}),(0,i.jsx)(t.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Are my data persistent ?"})}),(0,i.jsx)(t.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,i.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,i.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,i.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,i.jsxs)(d,{children:[(0,i.jsx)("summary",{children:"Category"}),(0,i.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, muximux"})]})]}),"\n",(0,i.jsx)(r.Z,{})]})}function x(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3416:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/a1-db848789253f5c336e9a2699dfc65ad6.png"},45523:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/a2-40a7042e7bdd6d14d8be52557fde7f86.png"},77553:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/a3-a3430d0e597e3100d29c8eae18763ede.png"},10999:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/a4-4c768b194733e3863bab7b820b9a5269.png"},39274:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/a6-4afa4474af20770771da23673bc905ef.png"},87366:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/a7-a2b4525d76a1087eaa7a1b6787cb17ea.png"}}]);