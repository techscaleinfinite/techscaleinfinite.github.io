"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[5435],{45026:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var r=i(85893),n=i(11151),s=i(5370);const d={draft:!1},o="\ud83c\udfb6 Lidarr Deployment",a={id:"demo-deployment copy/media-and-entertainment/lidarr-deployment",title:"lidarr-deployment",description:"Lidarr is the music enthusiast's dream assistant, a savvy sidekick and tech virtuoso in the realm of Usenet and BitTorrent. Constantly scanning RSS feeds, it hunts down new tracks from your favorite artists with precision. Beyond mere collection, Lidarr elevates your music library by sorting, renaming, and organizing tracks for a polished look, akin to having a personal butler for your tunes. This virtuoso doesn't settle for any quality; it automatically upgrades tracks with better versions, ensuring your collection remains top-notch. Lidarr is your backstage pass to music management nirvana, delivering an organized and high-quality symphony to your digital world. \ud83c\udfb5\ud83d\udd0d\ud83c\udf1f",source:"@site/docs/demo-deployment copy/media-and-entertainment/lidarr-deployment.md",sourceDirName:"demo-deployment copy/media-and-entertainment",slug:"/demo-deployment copy/media-and-entertainment/lidarr-deployment",permalink:"/demo-deployment copy/media-and-entertainment/lidarr-deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"jellyfin-deployment",permalink:"/demo-deployment copy/media-and-entertainment/jellyfin-deployment"},next:{title:"medusa",permalink:"/demo-deployment copy/media-and-entertainment/medusa"}},l={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Path Configuration",id:"path-configuration",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components},{Details:d}=t;return d||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"/img/r43.jpg",alt:"Alt Text",width:"25%"})}),"\n",(0,r.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,r.jsx)(t.h1,{id:"-lidarr-deployment",children:"\ud83c\udfb6 Lidarr Deployment"}),(0,r.jsx)(t.h1,{id:"lidarr-your-virtuoso-music-curator",children:"Lidarr: Your Virtuoso Music Curator"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Lidarr"})," is the music enthusiast's dream assistant, a savvy sidekick and tech virtuoso in the realm of Usenet and BitTorrent. Constantly scanning RSS feeds, it hunts down new tracks from your favorite artists with precision. Beyond mere collection, Lidarr elevates your music library by sorting, renaming, and organizing tracks for a polished look, akin to having a personal butler for your tunes. This virtuoso doesn't settle for any quality; it automatically upgrades tracks with better versions, ensuring your collection remains top-notch. Lidarr is your backstage pass to music management nirvana, delivering an organized and high-quality symphony to your digital world. \ud83c\udfb5\ud83d\udd0d\ud83c\udf1f"]}),(0,r.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Port Type"}),(0,r.jsx)(t.th,{children:"Port Number"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Http"}),(0,r.jsx)(t.td,{children:"8686"}),(0,r.jsx)(t.td,{children:'"Lidarr" application is accessible on port 8686.'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tcp"}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"-"})]})]})]}),(0,r.jsx)(t.h3,{id:"path-configuration",children:"Path Configuration"}),(0,r.jsx)(t.p,{children:"Lidarr may use path configuration. Set these when running the container:"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Path"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/path/to/appdata/config"})}),(0,r.jsx)(t.td,{children:"Path for Lidarr configuration data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"/path/to/music"})}),(0,r.jsx)(t.td,{children:"Path for music in Lidarr."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"/path/to/downloads"})," (optional)"]}),(0,r.jsx)(t.td,{children:"Path for downloads in Lidarr (optional)."})]})]})]}),(0,r.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Environment value:"})}),(0,r.jsx)(t.th,{children:"Decription"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,r.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Decription"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Docker Image"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://hub.docker.com/r/linuxserver/lidarr",children:(0,r.jsx)(t.code,{children:"lidarr"})}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Application name"}),(0,r.jsx)(t.td,{children:"Eg: lidarr1(you can put any name)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resource Allocation"}),(0,r.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Protocol"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Http:"}),(0,r.jsx)(t.td,{children:"8686"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tcp:"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advanced"}),(0,r.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,r.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,r.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,r.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,r.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Alt Text",src:i(85876).Z+"",width:"1917",height:"1077"}),"\n",(0,r.jsx)(t.img,{alt:"Alt Text",src:i(79468).Z+"",width:"1916",height:"1080"})]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Alt Text",src:i(21384).Z+"",width:"1912",height:"1076"}),"\n!"]}),(0,r.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,r.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,r.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"About LIADRR image we used."})}),(0,r.jsx)(t.p,{children:"This is the official LIADRR image."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Can I deploy my own LIADRR image with modified configuration ?"})}),(0,r.jsx)(t.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Are my data persistent ?"})}),(0,r.jsx)(t.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,r.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,r.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,r.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going"]}),(0,r.jsxs)(d,{children:[(0,r.jsx)("summary",{children:"Category"}),(0,r.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions "})]})]}),"\n",(0,r.jsx)(s.Z,{})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21384:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/dfdd-e2182893b307b907b34cb35e466ca5fa.jpg"},79468:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/eeg-41a5e045c7c51b5d6e437e348ccd2836.jpg"},85876:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/wwr-6ca39fb53e0a9fa9fe0f235812464642.jpg"}}]);