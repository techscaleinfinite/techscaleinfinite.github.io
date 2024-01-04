"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[3226],{54071:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var i=s(85893),r=s(11151),o=s(5370);const n={draft:!1},l="\u2601 Next Cloud Deployment",d={id:"demo-deployment copy/cloud-services/Next Cloud Deployment",title:"Next Cloud Deployment",description:"Nextcloud Overview",source:"@site/docs/demo-deployment copy/cloud-services/Next Cloud Deployment.md",sourceDirName:"demo-deployment copy/cloud-services",slug:"/demo-deployment copy/cloud-services/Next Cloud Deployment",permalink:"/demo-deployment copy/cloud-services/Next Cloud Deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:" \u2601 Cloud",permalink:"/category/--cloud"},next:{title:"Own Cloud Deployment",permalink:"/demo-deployment copy/cloud-services/Own Cloud Deployment"}},c={},a=[{value:"Nextcloud Overview",id:"nextcloud-overview",level:3},{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Working Directories",id:"working-directories",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/vv.jpg",alt:"Alt Text",width:"25%"})}),"\n",(0,i.jsx)(t.h1,{id:"-next-cloud-deployment",children:"\u2601 Next Cloud Deployment"}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h3,{id:"nextcloud-overview",children:"Nextcloud Overview"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Nextcloud"})," is an open-source, self-hosted cloud storage and collaboration solution, offering a secure alternative to commercial cloud services. Users set up Nextcloud on a server, becoming administrators to customize the platform. Serving as a digital filing cabinet, Nextcloud allows file uploads, folder organization, and synchronization across multiple devices. With seamless sharing options, users can collaborate effectively, deciding who can access and modify files. Nextcloud empowers users with control over their data, providing a personal file haven accessible anywhere."]}),(0,i.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Port Type"}),(0,i.jsx)(t.th,{children:"Port Number"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http"}),(0,i.jsx)(t.td,{children:"8080"}),(0,i.jsx)(t.td,{children:"Exposes port 8080 for the Nextcloud app. Users can access the Nextcloud application through this port."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp"}),(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})]})]}),(0,i.jsx)(t.h3,{id:"working-directories",children:"Working Directories"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Path Mapping"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})})]}),(0,i.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Environment value:"})}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,i.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Decription"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Docker Image"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"https://hub.docker.com/_/nextcloud/",children:"nextcloud"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Application name"}),(0,i.jsx)(t.td,{children:"Eg: nextcloud1(you can put any name)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resource Allocation"}),(0,i.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Protocol"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Http:"}),(0,i.jsx)(t.td,{children:"8080"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tcp:"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Advanced"}),(0,i.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,i.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,i.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,i.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,i.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Alt Text",src:s(17545).Z+"",width:"1917",height:"1078"}),"\n",(0,i.jsx)(t.img,{alt:"Alt Text",src:s(74562).Z+"",width:"1917",height:"1078"})]}),(0,i.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,i.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,i.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"About nextcloud image we used."})}),(0,i.jsx)(t.p,{children:"This is the official nextcloud image."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Can I deploy my own nextcloud image with modified configuration ?"})}),(0,i.jsx)(t.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Are my data persistent ?"})}),(0,i.jsx)(t.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,i.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,i.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,i.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Category"}),(0,i.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions "})]})]}),"\n",(0,i.jsx)(o.Z,{})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},17545:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/aa12-c0088ac2a8a1ab4f972458debbe8c098.jpg"},74562:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/ee34-35f80b8117bd83a70efb5303fc683c61.jpg"}}]);