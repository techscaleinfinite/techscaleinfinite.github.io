"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[6635],{73422:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var n=s(85893),r=s(11151),i=s(5370);const d={draft:!1},c="htpcmanager Deployment",l={id:"demo-deployment copy/tcp/htpcmanager",title:"htpcmanager",description:"HTPCManager:",source:"@site/docs/demo-deployment copy/tcp/htpcmanager.md",sourceDirName:"demo-deployment copy/tcp",slug:"/demo-deployment copy/tcp/htpcmanager",permalink:"/demo-deployment copy/tcp/htpcmanager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"gitea",permalink:"/demo-deployment copy/tcp/gitea"},next:{title:"httpd-deployment",permalink:"/demo-deployment copy/tcp/httpd-deployment"}},o={},a=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{Details:d}=t;return d||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/img/32.png",alt:"Alt Text",width:"25%"})}),"\n",(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)(t.h1,{id:"htpcmanager-deployment",children:"htpcmanager Deployment"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"HTPCManager:"}),"\r\nA front-end interface that serves as a unified dashboard for various HTPC (Home Theater PC) related applications. HTPCManager provides a centralized and user-friendly platform for managing and accessing multiple HTPC applications from a single interface."]}),(0,n.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Port Type"}),(0,n.jsx)(t.th,{children:"Port Number"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Http"}),(0,n.jsx)(t.td,{children:"8085"}),(0,n.jsx)(t.td,{children:"htpcmanager Web UI is accessible on port 8085."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tcp"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),(0,n.jsx)(t.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,n.jsx)(t.p,{children:"htpcmanager uses volume mounts to manage configuration and download data. You can set these when running the container:"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Volume"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/path/to/appdata/config"})}),(0,n.jsx)(t.td,{children:"Path to htpcmanager's configuration files."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/path/to/downloads"})}),(0,n.jsx)(t.td,{children:"Path to the directory where downloads are stored."})]})]})]}),(0,n.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Environment value:"})}),(0,n.jsx)(t.th,{children:"Decription"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Decription"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Docker Image"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://hub.docker.com/r/linuxserver/htpcmanager",children:"linuxserver/htpcmanager"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Application name"}),(0,n.jsx)(t.td,{children:"Eg: qb1(you can put any name)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resource Allocation"}),(0,n.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Protocol"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Http:"}),(0,n.jsx)(t.td,{children:"8085"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tcp:"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Advanced"}),(0,n.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,n.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,n.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,n.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,n.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt Text",src:s(15168).Z+"",width:"1918",height:"1078"})}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Alt Text",src:s(81779).Z+"",width:"1918",height:"1026"}),"\r\n",(0,n.jsx)(t.img,{alt:"Alt Text",src:s(89113).Z+"",width:"1918",height:"1018"}),"\r\n",(0,n.jsx)(t.img,{alt:"Alt Text",src:s(73999).Z+"",width:"1918",height:"1016"})]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt Text",src:s(65051).Z+"",width:"1918",height:"1017"})}),(0,n.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,n.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,n.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"About htpcmanager image we used."})}),(0,n.jsx)(t.p,{children:"This is the official htpcmanager image."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Can I deploy my own htpcmanager image with modified configuration ?"})}),(0,n.jsx)(t.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Are my data persistent ?"})}),(0,n.jsx)(t.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,n.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,n.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,n.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,n.jsxs)(d,{children:[(0,n.jsx)("summary",{children:"Category"}),(0,n.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, htpcmanager"})]})]}),"\n",(0,n.jsx)(i.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},81779:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/c4-1089eab2cf3daa9bf877c7b0b9599a1b.png"},89113:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/c5-cff96b299d1226cc9c5ea7c23f4e2f09.png"},73999:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/c6-1d37ff2b6450715420c138892d4f1a34.png"},65051:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/c66-a80a77819dc02c6276741f4fa88da6a1.png"},15168:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/c77-3467b980148ce13f803c926418478dcc.png"}}]);