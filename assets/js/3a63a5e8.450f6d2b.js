"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[156],{26534:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=s(85893),r=s(11151),n=s(5370);const o={draft:!1},a="\ud83d\udda5\ufe0f Traggo Deployment",d={id:"demo-deployment copy/lifestyle/trago",title:"trago",description:"Traggo is a tag-based time tracking tool that revolutionizes traditional task tracking. Instead of tasks, it focuses on tagged time spans, providing a flexible approach to time management. For a hassle-free experience, you can deploy a fully managed Traggo on elest.io. This service offers automated backups, SSL termination with a reverse proxy, firewall protection, and continuous OS and software updates. The platform is maintained by a team of Linux experts and open source enthusiasts, ensuring the safety and functionality of your services.",source:"@site/docs/demo-deployment copy/lifestyle/trago.md",sourceDirName:"demo-deployment copy/lifestyle",slug:"/demo-deployment copy/lifestyle/trago",permalink:"/demo-deployment copy/lifestyle/trago",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"paperless",permalink:"/demo-deployment copy/lifestyle/paperless"},next:{title:"wger",permalink:"/demo-deployment copy/lifestyle/wger"}},l={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Path Configuration",id:"path-configuration",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/ccs.png",alt:"Alt Text",width:"25%"})}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h1,{id:"\ufe0f-traggo-deployment",children:"\ud83d\udda5\ufe0f Traggo Deployment"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Traggo"})," is a tag-based time tracking tool that revolutionizes traditional task tracking. Instead of tasks, it focuses on tagged time spans, providing a flexible approach to time management. For a hassle-free experience, you can deploy a fully managed Traggo on elest.io. This service offers automated backups, SSL termination with a reverse proxy, firewall protection, and continuous OS and software updates. The platform is maintained by a team of Linux experts and open source enthusiasts, ensuring the safety and functionality of your services."]}),(0,i.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Port Type"}),(0,i.jsx)(t.th,{children:"Port Number"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http"}),(0,i.jsx)(t.td,{children:"3030"}),(0,i.jsx)(t.td,{children:'"traggo" application is accessible on port 3030.'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})]})]}),(0,i.jsx)(t.h3,{id:"path-configuration",children:"Path Configuration"}),(0,i.jsx)(t.p,{children:'"trago" may use path configuration. Set these when running the container:'}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Path"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/opt/traggo/data"})}),(0,i.jsx)(t.td,{children:"Path for accessing trago user functionality."})]})})]}),(0,i.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Environment value:"})}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TRAGGO_DEFAULT_USER_NAME"}),(0,i.jsx)(t.td,{children:"TRAGGO_DEFAULT_USER_NAME"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TRAGGO_DEFAULT_USER_PASS"}),(0,i.jsx)(t.td,{children:"ADMIN_PASSWORD"})]})]})]})]}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Docker Image"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"https://hub.docker.com/r/elestio/traggo",children:"Traggo "})," \ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Application name"}),(0,i.jsx)(t.td,{children:"Eg: lol1(you can put any name)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resource Allocation"}),(0,i.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Protocol"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http:"}),(0,i.jsx)(t.td,{children:"3030"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp:"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Advanced"}),(0,i.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,i.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,i.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,i.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,i.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Alt Text",src:s(42864).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(20328).Z+"",width:"1918",height:"1078"})]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Alt Text",src:s(92540).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(88437).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(22704).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(88666).Z+"",width:"1918",height:"1078"})]}),(0,i.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,i.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,i.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"About Traggo  image we used."})}),(0,i.jsx)(t.p,{children:"This is the official Traggo   image."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Can I deploy my own media Traggo  with modified configuration ?"})}),(0,i.jsx)(t.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Are my data persistent ?"})}),(0,i.jsx)(t.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,i.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,i.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,i.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Category"}),(0,i.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, crypto, monry"})]})]}),"\n",(0,i.jsx)(n.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},42864:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/r43-ffb1d2395a44165940f1113216b3b812.png"},20328:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/r444-abc968f4eb70203b78def0d87e8a0b3d.png"},22704:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/r4443-fca86a8d827033b15c6cb1a627f41bc2.png"},92540:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/r544-ff35196a275c43619c6d916c1d911b0f.png"},88437:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/r555-f6438d07c3c9a4cfd8a533ecfcbd0792.png"},88666:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/r5554-8284e2a369cce570c88be6f46f21879c.png"}}]);