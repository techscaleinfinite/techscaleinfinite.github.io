"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[5804],{3265:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var i=s(5893),n=s(1151),r=s(5370);const l={draft:!1},d="\ud83d\udda5\ufe0f Cloud9 - Web-Based IDE with Terminal Access",o={id:"demo-deployment copy/ide/cloud9",title:"\ud83d\udda5\ufe0f Cloud9 - Web-Based IDE with Terminal Access",description:"Cloud9 is a comprehensive web-based Integrated Development Environment (IDE) that offers terminal access. This container is designed to run the core Software Development Kit (SDK) of Cloud9 locally, enabling developers to create and enhance plugins seamlessly. With its user-friendly interface and terminal capabilities, Cloud9 facilitates efficient and collaborative coding. As an open-source platform, Cloud9 empowers developers with a flexible and feature-rich environment for web development.",source:"@site/docs/demo-deployment copy/ide/cloud9.md",sourceDirName:"demo-deployment copy/ide",slug:"/demo-deployment copy/ide/cloud9",permalink:"/demo-deployment copy/ide/cloud9",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udda5\ufe0f Atheos",permalink:"/demo-deployment copy/ide/atheos"},next:{title:"\ud83d\udda5\ufe0fcode server Deployment",permalink:"/demo-deployment copy/ide/code server"}},c={},a=[{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\ufe0f-cloud9---web-based-ide-with-terminal-access",children:"\ud83d\udda5\ufe0f Cloud9 - Web-Based IDE with Terminal Access"}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/xcxa.png",alt:"Alt Text",width:"25%"})}),(0,i.jsx)(t.p,{children:"Cloud9 is a comprehensive web-based Integrated Development Environment (IDE) that offers terminal access. This container is designed to run the core Software Development Kit (SDK) of Cloud9 locally, enabling developers to create and enhance plugins seamlessly. With its user-friendly interface and terminal capabilities, Cloud9 facilitates efficient and collaborative coding. As an open-source platform, Cloud9 empowers developers with a flexible and feature-rich environment for web development."}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Exposed Ports:"})}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http port"}),(0,i.jsx)(t.td,{children:"8000 is exposed to facilitate web-based communication for cloud9. Users can access the cloud9 application through this port."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp port"}),(0,i.jsx)(t.td,{children:"-"})]})]})]}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Working directory:"})}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/path/to/cloud9/config:/config"}),(0,i.jsx)(t.td,{children:"This is the path  where cloud9's configuration files are stored. It ensures that the necessary configuration data is accessible."})]})})]}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Environment value:"})}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Docker Image"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"https://hub.docker.com/r/linuxserver/cloud9",children:(0,i.jsx)(t.code,{children:"cloud9"})}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Application name"}),(0,i.jsx)(t.td,{children:"Eg: bzzz1(you can put any name)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resource Allocation"}),(0,i.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Protocol"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http:"}),(0,i.jsx)(t.td,{children:"8000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp:"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Advanced"}),(0,i.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,i.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,i.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,i.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,i.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,i.jsx)("img",{src:"/img/78.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/71.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/73.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/74.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)("img",{src:"/img/77.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,i.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,i.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,i.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,i.jsxs)(t.p,{children:["For Detailed FAQ please vist this page: ",(0,i.jsx)(t.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,i.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,i.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,i.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going."]}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Category"}),(0,i.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions , media, entertainment"})]})]}),"\n",(0,i.jsx)(r.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);