"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[1265],{44911:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=s(85893),r=s(11151),n=s(5370);const o={draft:!1},d="\u2699\ufe0f Farmos Deployment",a={id:"demo-deployment copy/tcp/farmos-deployment",title:"farmos-deployment",description:"farmOS: Revolutionizing Farm Management",source:"@site/docs/demo-deployment copy/tcp/farmos-deployment.md",sourceDirName:"demo-deployment copy/tcp",slug:"/demo-deployment copy/tcp/farmos-deployment",permalink:"/demo-deployment copy/tcp/farmos-deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"duplicati",permalink:"/demo-deployment copy/tcp/duplicati"},next:{title:"flame",permalink:"/demo-deployment copy/tcp/flame"}},l={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Working Directories",id:"working-directories",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/oopl.png",alt:"Alt Text",width:"25%"})}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h1,{id:"\ufe0f-farmos-deployment",children:"\u2699\ufe0f Farmos Deployment"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"farmOS: Revolutionizing Farm Management"})}),(0,i.jsx)(t.p,{children:"farmOS is the collaborative brainchild of farmers, developers, and organizations, providing a community-driven platform for streamlined agricultural data management. Serving as a versatile digital assistant, it simplifies tasks from crop planning to livestock tracking. With seamless data collection, weather monitoring, and customizable features, farmOS brings precision to farm management. Accessible from anywhere, it supports sustainable practices and adapts to the unique needs of each farm. Join the farmOS revolution to navigate the intersection of tradition and innovation in agriculture.\nfarmOS: Where technology meets agriculture, cultivating success one byte at a time."}),(0,i.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Port Type"}),(0,i.jsx)(t.th,{children:"Port Number"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http"}),(0,i.jsx)(t.td,{children:"80"}),(0,i.jsx)(t.td,{children:"Exposes port 8 for the farmos app. Users can access the  application through this port."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})]})]}),(0,i.jsx)(t.h3,{id:"working-directories",children:"Working Directories"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Path Mapping"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})})]}),(0,i.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Environment value:"})}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Docker Image"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"https://hub.docker.com/r/farmos/farmos",children:"farmOS "}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Application name"}),(0,i.jsx)(t.td,{children:"Eg: farm(you can put any name)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resource Allocation"}),(0,i.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Protocol"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http:"}),(0,i.jsx)(t.td,{children:"80"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp:"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Advanced"}),(0,i.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,i.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,i.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,i.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,i.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Alt Text",src:s(1969).Z+"",width:"1918",height:"1077"}),"\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(4572).Z+"",width:"1920",height:"1080"}),"\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(10790).Z+"",width:"1920",height:"1078"})]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Alt Text",src:s(19071).Z+"",width:"1920",height:"1077"}),"\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(41011).Z+"",width:"1920",height:"1077"}),"\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(93274).Z+"",width:"1918",height:"1077"})]}),(0,i.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,i.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,i.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"About farmOS image we used."})}),(0,i.jsx)(t.p,{children:"This is the official farmOS image."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Can I deploy my ow farmOS image with modified configuration ?"})}),(0,i.jsx)(t.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Are my data persistent ?"})}),(0,i.jsx)(t.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,i.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,i.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,i.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Category"}),(0,i.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, farmos"})]})]}),"\n",(0,i.jsx)(n.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},10790:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/aa-f8c1923d14eeb4e4fd69301590ec8784.jpg"},4572:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/aao-0c109192f929a9665c50449e5748eb0c.jpg"},41011:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/dcd3-f2ada6a4b92b219a03e619b8cfe66b85.jpg"},19071:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/eee24-f2ada6a4b92b219a03e619b8cfe66b85.jpg"},93274:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/qw3-4311d9391a6aec1f1528830492743c6f.jpg"},1969:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/ww-6e239ef612ea0971ddc923c123622ddb.jpg"}}]);