"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[6561],{533:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=s(5893),n=s(1151),l=s(8662);const i={draft:!1},d="Darktable Deployment",o={id:"demo-deployment copy/tcp/darktable",title:"Darktable Deployment",description:"darktable:",source:"@site/docs/demo-deployment copy/tcp/darktable.md",sourceDirName:"demo-deployment copy/tcp",slug:"/demo-deployment copy/tcp/darktable",permalink:"/demo-deployment copy/tcp/darktable",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd12 Cyber Chef Deployment",permalink:"/demo-deployment copy/tcp/cyberchef"},next:{title:"doublecommander Deployment",permalink:"/demo-deployment copy/tcp/doublecommander"}},a={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"darktable-deployment",children:"Darktable Deployment"}),"\n",(0,r.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"/img/xxcsw.png",alt:"Alt Text",width:"25%"})}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"darktable:"}),"\r\nAn open-source photography workflow application and raw developer, darktable serves as a virtual lighttable and darkroom for photographers. It organizes digital negatives in a database, offers a zoomable lighttable for viewing, and facilitates the development and enhancement of raw images, providing comprehensive tools for photographers."]}),(0,r.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Port Type"}),(0,r.jsx)(t.th,{children:"Port Number"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Http"}),(0,r.jsx)(t.td,{children:"3000"}),(0,r.jsx)(t.td,{children:"darktable Web UI is accessible on port 3000."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tcp"}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"-"})]})]})]}),(0,r.jsx)(t.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,r.jsx)(t.p,{children:"darktable uses volume mounts to manage configuration and download data. You can set these when running the container:"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Volume"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/path/to/appdata/config"})}),(0,r.jsx)(t.td,{children:"Path to darktable's configuration files."})]})})]}),(0,r.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Environment value:"})}),(0,r.jsx)(t.th,{children:"Decription"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,r.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Decription"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Docker Image"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://hub.docker.com/r/linuxserver/darktable",children:"linuxserver/darktable"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Application name"}),(0,r.jsx)(t.td,{children:"Eg: darktable1(you can put any name)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resource Allocation"}),(0,r.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Protocol"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Http:"}),(0,r.jsx)(t.td,{children:"3000"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tcp:"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advanced"}),(0,r.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,r.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,r.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,r.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,r.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,r.jsx)("img",{src:"/img/v66.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)("img",{src:"/img/v44.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)("img",{src:"/img/v55.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)("img",{src:"/img/v77.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)("img",{src:"/img/v88.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,r.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,r.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,r.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,r.jsxs)(t.p,{children:["For Detailed FAQ please vist this page: ",(0,r.jsx)(t.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,r.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,r.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,r.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Category"}),(0,r.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, darktable"})]})]}),"\n",(0,r.jsx)(l.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);