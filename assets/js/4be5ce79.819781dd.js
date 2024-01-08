"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[1501],{21944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=r(85893),i=r(11151),n=r(5370);const d={draft:!1},o="pairdrop Deployment",l={id:"demo-deployment copy/tcp/pairdrop",title:"pairdrop",description:"PairDrop:",source:"@site/docs/demo-deployment copy/tcp/pairdrop.md",sourceDirName:"demo-deployment copy/tcp",slug:"/demo-deployment copy/tcp/pairdrop",permalink:"/demo-deployment copy/tcp/pairdrop",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"nzbhydra2",permalink:"/demo-deployment copy/tcp/nzbhydra2"},next:{title:"raneto",permalink:"/demo-deployment copy/tcp/raneto"}},a={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components},{Details:d}=t;return d||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/img/decc.png",alt:"Alt Text",width:"25%"})}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)(t.h1,{id:"pairdrop-deployment",children:"pairdrop Deployment"}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"PairDrop:"}),"\r\nA sublime alternative to AirDrop, PairDrop is a cross-platform solution that enables the seamless transfer of images, documents, or text via peer-to-peer connections. It functions within the same local network or Wi-Fi, offering an easy way to share files between paired devices."]}),(0,s.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Port Type"}),(0,s.jsx)(t.th,{children:"Port Number"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Http"}),(0,s.jsx)(t.td,{children:"3000"}),(0,s.jsx)(t.td,{children:"pairdrop Web UI is accessible on port 3000."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tcp"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),(0,s.jsx)(t.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,s.jsx)(t.p,{children:"pairdrop uses volume mounts to manage configuration and download data. You can set these when running the container:"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Volume"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/path/to/appdata/config"})}),(0,s.jsx)(t.td,{children:"Path to pairdrop's configuration files."})]})})]}),(0,s.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Environment value:"})}),(0,s.jsx)(t.th,{children:"Decription"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Decription"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Docker Image"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://hub.docker.com/r/linuxserver/pairdrop",children:"linuxserver/pairdrop"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Application name"}),(0,s.jsx)(t.td,{children:"Eg: pairdrop1(you can put any name)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resource Allocation"}),(0,s.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Protocol"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Http:"}),(0,s.jsx)(t.td,{children:"3000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tcp:"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Advanced"}),(0,s.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,s.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,s.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,s.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,s.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Alt Text",src:r(49682).Z+"",width:"1918",height:"1078"}),"\r\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:r(97398).Z+"",width:"1918",height:"1023"}),"\r\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:r(96966).Z+"",width:"1917",height:"995"}),"\r\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:r(55415).Z+"",width:"1918",height:"1028"}),"\r\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:r(79932).Z+"",width:"140",height:"145"})]}),(0,s.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,s.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,s.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"About pairdrop image we used."})}),(0,s.jsx)(t.p,{children:"This is the official pairdrop image."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Can I deploy my own pairdrop image with modified configuration ?"})}),(0,s.jsx)(t.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Are my data persistent ?"})}),(0,s.jsx)(t.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,s.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,s.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,s.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,s.jsxs)(d,{children:[(0,s.jsx)("summary",{children:"Category"}),(0,s.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, pairdrop"})]})]}),"\n",(0,s.jsx)(n.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},79932:(e,t,r)=>{r.d(t,{Z:()=>s});const s="data:image/png;base64,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"},55415:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/g444-3d1ac373a081431bb1852baaff7274b6.png"},49682:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/g5-8a5cd05b6553b7d807d11aa0ae91eb3b.png"},97398:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/g54-aa2694239dd03649783b9e59905910eb.png"},96966:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/g67-9be0c96083ab13e5a2d4dac5e632292b.png"}}]);