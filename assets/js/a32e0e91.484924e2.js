"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[6780],{3814:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(5893),r=t(1151),n=t(5370);const o={draft:!1},d="\ud83d\udcd4 Doku Wiki Deployment",l={id:"demo-deployment copy/wikis/dokuwiki",title:"\ud83d\udcd4 Doku Wiki Deployment",description:"DokuWiki is a standards-compliant wiki tailored for efficient documentation creation. Ideal for small organizations, it boasts simplicity and ease of use. Noteworthy is its data storage approach, utilizing plain text files, eliminating the need for a database. This makes DokuWiki a straightforward and accessible choice for those prioritizing simplicity and efficiency in their documentation processes.",source:"@site/docs/demo-deployment copy/wikis/dokuwiki.md",sourceDirName:"demo-deployment copy/wikis",slug:"/demo-deployment copy/wikis/dokuwiki",permalink:"/demo-deployment copy/wikis/dokuwiki",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:" \ud83d\udcd4 wikis",permalink:"/category/--wikis"},next:{title:"\ud83d\udcd4 otterwiki Deployment",permalink:"/demo-deployment copy/wikis/otterwiki"}},a={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Working Directories",id:"working-directories",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{Details:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"-doku-wiki-deployment",children:"\ud83d\udcd4 Doku Wiki Deployment"}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/img/d23.png",alt:"Alt Text",width:"25%"})}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"DokuWiki"})," is a standards-compliant wiki tailored for efficient documentation creation. Ideal for small organizations, it boasts simplicity and ease of use. Noteworthy is its data storage approach, utilizing plain text files, eliminating the need for a database. This makes DokuWiki a straightforward and accessible choice for those prioritizing simplicity and efficiency in their documentation processes."]}),(0,s.jsx)(i.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Port Type"}),(0,s.jsx)(i.th,{children:"Port Number"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Http"}),(0,s.jsx)(i.td,{children:"8080"}),(0,s.jsx)(i.td,{children:"Exposes port 8080 for the Doku Wiki app. Users can access the  application through this port."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Tcp"}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"})]})]})]}),(0,s.jsx)(i.h3,{id:"working-directories",children:"Working Directories"}),(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Path Mapping"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"})]})})]}),(0,s.jsx)(i.h3,{id:"environment-variables",children:"Environment Variables"}),(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:(0,s.jsx)(i.strong,{children:"Environment value:"})}),(0,s.jsx)(i.th,{children:"Decription"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"ALLOW_EMPTY_PASSWORD=yes"}),(0,s.jsx)(i.td,{children:"-"})]})})]})]}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)(i.h3,{id:"installation",children:"Installation"}),(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Decription"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Docker Image"}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.a,{href:"https://hub.docker.com/r/bitnami/dokuwiki",children:"Doku Wiki "}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Application name"}),(0,s.jsx)(i.td,{children:"Eg: wiki(you can put any name)"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Resource Allocation"}),(0,s.jsx)(i.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Protocol"})}),(0,s.jsx)(i.td,{})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Http:"}),(0,s.jsx)(i.td,{children:"8080"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Tcp:"}),(0,s.jsx)(i.td,{})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Advanced"}),(0,s.jsx)(i.td,{children:"Install with Default"})]})]})]}),(0,s.jsx)(i.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,s.jsxs)(i.p,{children:["For Detailed steps and procedure please vist this page: ",(0,s.jsx)(i.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,s.jsx)(i.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,s.jsx)("img",{src:"/img/m3.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/m44.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/m54.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/m55.png)",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/m554.png",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)(i.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,s.jsx)(i.p,{children:"Check out our youtube video for more clarification."}),(0,s.jsx)(i.h3,{id:"faq",children:"FAQ"}),(0,s.jsxs)(i.p,{children:["For Detailed FAQ please vist this page: ",(0,s.jsx)(i.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,s.jsx)(i.h3,{id:"join-us",children:"Join us"}),(0,s.jsxs)(i.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,s.jsx)(i.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Category"}),(0,s.jsx)(i.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Doku Wiki"})]})]}),"\n",(0,s.jsx)(n.Z,{})]})}function p(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);