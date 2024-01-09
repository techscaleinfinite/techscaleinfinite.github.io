"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[5068],{8552:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=s(5893),i=s(1151),r=s(5370);const o={draft:!1},l="\u2699\ufe0f Simply shorten deployment",d={id:"demo-deployment copy/tcp/simply shorten",title:"\u2699\ufe0f Simply shorten deployment",description:"SimpleURL is a straightforward, self-hosted URL shortener designed with simplicity in mind. Offering no unnecessary features, this tool focuses on the core functionality of shortening URLs efficiently. As a self-hosted solution, it provides users with control over their URL shortening needs, ensuring privacy and customization without the burden of unnecessary complexities.",source:"@site/docs/demo-deployment copy/tcp/simply shorten.md",sourceDirName:"demo-deployment copy/tcp",slug:"/demo-deployment copy/tcp/simply shorten",permalink:"/demo-deployment copy/tcp/simply shorten",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"remmina Deployment",permalink:"/demo-deployment copy/tcp/remmina"},next:{title:"\u2699\ufe0f Smokeping",permalink:"/demo-deployment copy/tcp/smokeping"}},c={},h=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Configuration",id:"volume-configuration",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\ufe0f-simply-shorten-deployment",children:"\u2699\ufe0f Simply shorten deployment"}),"\n",(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/img/ssca.png",alt:"Alt Text",width:"25%"})}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"SimpleURL"})," is a straightforward, self-hosted URL shortener designed with simplicity in mind. Offering no unnecessary features, this tool focuses on the core functionality of shortening URLs efficiently. As a self-hosted solution, it provides users with control over their URL shortening needs, ensuring privacy and customization without the burden of unnecessary complexities.\r\n."]}),(0,n.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Port Type"}),(0,n.jsx)(t.th,{children:"Port Number"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Http"}),(0,n.jsx)(t.td,{children:"4567"}),(0,n.jsx)(t.td,{children:"Simply shorten is exposed on port 4567."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tcp"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),(0,n.jsx)(t.h3,{id:"volume-configuration",children:"Volume Configuration"}),(0,n.jsx)(t.p,{children:"When running the container, you may mount the Simply shorten configuration file from the host using the following volume configurations:"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Volume"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]})})]}),(0,n.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Environment value:"})}),(0,n.jsx)(t.th,{children:"Decription"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"username="}),(0,n.jsx)(t.td,{children:"123"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"password"}),(0,n.jsx)(t.td,{children:"123"})]})]})]})]}),"\n",(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Decription"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Docker Image"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://hub.docker.com/r/draganczukp/simply-shorten",children:(0,n.jsx)(t.code,{children:"Simply shorten"})}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Application name"}),(0,n.jsx)(t.td,{children:"Eg: Simply shorten (you can put any name)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resource Allocation"}),(0,n.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Protocol"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Http:"}),(0,n.jsx)(t.td,{children:"4567"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tcp:"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Advanced"}),(0,n.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,n.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,n.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,n.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"}),"\r\ns"]}),(0,n.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,n.jsx)("img",{src:"/img/n1.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/n2.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/n3.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/n4.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,n.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,n.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,n.jsxs)(t.p,{children:["For Detailed FAQ please vist this page: ",(0,n.jsx)(t.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,n.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,n.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,n.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Category"}),(0,n.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Simply shorten"})]})]}),"\n",(0,n.jsx)(r.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}}}]);