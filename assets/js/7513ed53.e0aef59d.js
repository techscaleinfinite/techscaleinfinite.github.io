"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[75],{93332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(85893),s=n(11151),o=n(5370);const r={draft:!1},d="\u2699\ufe0f  Raneto Deployment",a={id:"demo-deployment copy/tcp/raneto",title:"raneto",description:"Raneto is an open-source Knowledgebase platform designed to empower your Knowledgebase using static Markdown files. It simplifies the creation and management of your knowledge repository without the need for a complex system. By leveraging static Markdown files, Raneto provides an efficient and user-friendly solution for organizing and sharing information. It is an ideal choice for those seeking a straightforward Knowledgebase platform that is easy to set up and maintain. With Raneto, you can effortlessly power your Knowledgebase with the simplicity and versatility of Markdown.",source:"@site/docs/demo-deployment copy/tcp/raneto.md",sourceDirName:"demo-deployment copy/tcp",slug:"/demo-deployment copy/tcp/raneto",permalink:"/demo-deployment copy/tcp/raneto",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"nginx-deployment",permalink:"/demo-deployment copy/tcp/nginx-deployment"},next:{title:"simply shorten",permalink:"/demo-deployment copy/tcp/simply shorten"}},l={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Configuration",id:"volume-configuration",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/99i.png",alt:"Alt Text",width:"25%"})}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h1,{id:"\ufe0f--raneto-deployment",children:"\u2699\ufe0f  Raneto Deployment"}),(0,i.jsx)(t.p,{children:"Raneto is an open-source Knowledgebase platform designed to empower your Knowledgebase using static Markdown files. It simplifies the creation and management of your knowledge repository without the need for a complex system. By leveraging static Markdown files, Raneto provides an efficient and user-friendly solution for organizing and sharing information. It is an ideal choice for those seeking a straightforward Knowledgebase platform that is easy to set up and maintain. With Raneto, you can effortlessly power your Knowledgebase with the simplicity and versatility of Markdown."}),(0,i.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Port Type"}),(0,i.jsx)(t.th,{children:"Port Number"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http"}),(0,i.jsx)(t.td,{children:"3000"}),(0,i.jsx)(t.td,{children:"Raneto is exposed on port 3000."})]})})]}),(0,i.jsx)(t.h3,{id:"volume-configuration",children:"Volume Configuration"}),(0,i.jsx)(t.p,{children:"When running the container, you may mount the configuration data directory from the host using the following volume configurations:"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Volume"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/path/to/appdata/config:/config"})}),(0,i.jsx)(t.td,{children:"Mounts the configuration data directory from the host."})]})})]}),(0,i.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Environment value:"})}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Docker Image"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"https://hub.docker.com/r/linuxserver/raneto",children:"Raneto"}),"(click me,for the dockerhub image)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Application name"}),(0,i.jsx)(t.td,{children:"Eg: Raneto(you can put any name)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resource Allocation"}),(0,i.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Protocol"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http:"}),(0,i.jsx)(t.td,{children:"3000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp:"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Advanced"}),(0,i.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,i.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,i.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,i.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,i.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Alt Text",src:n(76502).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:n(267).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:n(38442).Z+"",width:"1918",height:"1078"})]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Alt Text",src:n(4630).Z+"",width:"1892",height:"1075"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:n(26238).Z+"",width:"1918",height:"1078"}),"\r\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:n(58982).Z+"",width:"1918",height:"1078"})]}),(0,i.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,i.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,i.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"About Raneto image we used."})}),(0,i.jsx)(t.p,{children:"This is the official Raneto image."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Can I deploy my own Raneto image with modified configuration ?"})}),(0,i.jsx)(t.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Are my data persistent ?"})}),(0,i.jsx)(t.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,i.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,i.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,i.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Category"}),(0,i.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Raneto"})]})]}),"\n",(0,i.jsx)(o.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},76502:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/z1-671a57b0ce00bc5d3cb7199e809e9c44.png"},267:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/z2-537b6f58e10fc4830355f15421ccac94.png"},38442:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/z3-8c021a2e12bf9e2a3c898ea179fafd7b.png"},4630:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/z4-b8670c409d2428c860d6ff6b886f3519.png"},26238:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/z5-b197a8399fddfedc6c04255d62dc5abd.png"},58982:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/z6-981da1aa8688af000772b004894acd08.png"}}]);