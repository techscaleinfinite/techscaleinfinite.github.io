"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[9873],{1372:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=i(5893),s=i(1151),r=i(5370);const o={draft:!1},a="\ud83d\udcfa Emby DeployMent",d={id:"demo-deployment copy/media-and-entertainment/emby-deployment",title:"\ud83d\udcfa Emby DeployMent",description:"Emby is your personal media butler, turning multimedia chaos into an organized and personalized experience. Begin your Emby adventure by installing the server software on a chosen device, the guardian of your media library. Configure Emby by specifying the locations of your media files, covering movies, TV shows, music, and more. Emby acts as a meticulous archivist, scanning directories and fetching metadata from online databases to enhance your library. With support for multiple user profiles, Emby offers a customized viewing experience for each family member. Beyond organization, Emby curates a realm of discovery and entertainment, handling technicalities so you can enjoy your media effortlessly. \ud83c\udfac\ud83c\udfb6\ud83d\udcf8",source:"@site/docs/demo-deployment copy/media-and-entertainment/emby-deployment.md",sourceDirName:"demo-deployment copy/media-and-entertainment",slug:"/demo-deployment copy/media-and-entertainment/emby-deployment",permalink:"/demo-deployment copy/media-and-entertainment/emby-deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd7 booksonic-air Deployment",permalink:"/demo-deployment copy/media-and-entertainment/booksonic-air"},next:{title:"\ud83c\udfac Grav - Fast, Simple, and Flexible Web Platform",permalink:"/demo-deployment copy/media-and-entertainment/grav"}},l={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Path Configuration",id:"path-configuration",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"-emby-deployment",children:"\ud83d\udcfa Emby DeployMent"}),"\n",(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/img/css.jpg",alt:"Alt Text",width:"25%"})}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Emby"})," is your personal media butler, turning multimedia chaos into an organized and personalized experience. Begin your Emby adventure by installing the server software on a chosen device, the guardian of your media library. Configure Emby by specifying the locations of your media files, covering movies, TV shows, music, and more. Emby acts as a meticulous archivist, scanning directories and fetching metadata from online databases to enhance your library. With support for multiple user profiles, Emby offers a customized viewing experience for each family member. Beyond organization, Emby curates a realm of discovery and entertainment, handling technicalities so you can enjoy your media effortlessly. \ud83c\udfac\ud83c\udfb6\ud83d\udcf8"]}),(0,n.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Port Type"}),(0,n.jsx)(t.th,{children:"Port Number"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Http"}),(0,n.jsx)(t.td,{children:"8096"}),(0,n.jsx)(t.td,{children:'"Emby" application is accessible on port 8096.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tcp"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),(0,n.jsx)(t.h3,{id:"path-configuration",children:"Path Configuration"}),(0,n.jsx)(t.p,{children:"Emby may use path configuration. Set these when running the container:"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Path"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/path/to/tvshows"})}),(0,n.jsx)(t.td,{children:"Path for TV shows in Emby."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/mnt/share1"})}),(0,n.jsx)(t.td,{children:"Mount point for Emby to access data."})]})]})]}),(0,n.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Environment value:"})}),(0,n.jsx)(t.th,{children:"Decription"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Decription"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Docker Image"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://hub.docker.com/r/emby/embyserver",children:"emby"}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Application name"}),(0,n.jsx)(t.td,{children:"Eg: emby1(you can put any name)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resource Allocation"}),(0,n.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Protocol"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Http:"}),(0,n.jsx)(t.td,{children:"8096"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tcp:"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Advanced"}),(0,n.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,n.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,n.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,n.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,n.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,n.jsx)("img",{src:"/img/kkki.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/kkol.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/mm0.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/dkfk.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/fef.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/m5.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/bf.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)("img",{src:"/img/lk.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,n.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,n.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,n.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,n.jsxs)(t.p,{children:["For Detailed FAQ please vist this page: ",(0,n.jsx)(t.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,n.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,n.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,n.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Category"}),(0,n.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions , media, entertainment, emby"})]})]}),"\n",(0,n.jsx)(r.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);