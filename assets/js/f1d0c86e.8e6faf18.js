"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[9168],{2985:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=i(5893),n=i(1151),r=i(5370);const d={draft:!1},o="\ud83d\udda5 Media Wiki Deployment",l={id:"demo-deployment copy/content-management-system-cms/media-wiki-deployment",title:"\ud83d\udda5 Media Wiki Deployment",description:"MediaWiki, the force behind Wikipedia, is more than software; it's the architect of collaborative knowledge creation. Users, like a team of friends, contribute and edit articles, creating a digital playground for learning and sharing. With a detailed version control system, users can navigate through the history of changes and revert if needed.",source:"@site/docs/demo-deployment copy/content-management-system-cms/media-wiki-deployment.md",sourceDirName:"demo-deployment copy/content-management-system-cms",slug:"/demo-deployment copy/content-management-system-cms/media-wiki-deployment",permalink:"/demo-deployment copy/content-management-system-cms/media-wiki-deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udda5 Joomla",permalink:"/demo-deployment copy/content-management-system-cms/joomla"},next:{title:"\ud83d\udda5 Node Red Deployment",permalink:"/demo-deployment copy/content-management-system-cms/node-red-deployment"}},a={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"-media-wiki-deployment",children:"\ud83d\udda5 Media Wiki Deployment"}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/img/vvvc.png",alt:"Alt Text",width:"25%"})}),(0,s.jsx)(t.h1,{id:"mediawiki-crafting-collaborative-knowledge",children:"MediaWiki: Crafting Collaborative Knowledge"}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"MediaWiki"}),", the force behind Wikipedia, is more than software; it's the architect of collaborative knowledge creation. Users, like a team of friends, contribute and edit articles, creating a digital playground for learning and sharing. With a detailed version control system, users can navigate through the history of changes and revert if needed."]}),(0,s.jsx)(t.p,{children:"It's not just about text; MediaWiki embraces media with ease, allowing users to incorporate images, audio, and video seamlessly. With user contributions, personal spaces are created, fostering community interaction. The software's markup language simplifies content creation, making it accessible to all. In essence, MediaWiki is the unsung hero behind."}),(0,s.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Port Type"}),(0,s.jsx)(t.th,{children:"Port Number"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Http"}),(0,s.jsx)(t.td,{children:"80"}),(0,s.jsx)(t.td,{children:"MediaWiki exposes port 80 for HTTP."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tcp"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),(0,s.jsx)(t.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,s.jsx)(t.p,{children:"MediaWiki uses volume mounts to manage data storage. You can set these when running the container:"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Volume"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/var/www/html"})}),(0,s.jsx)(t.td,{children:"This is the path where MediaWiki's site files are stored."})]})})]}),(0,s.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Environment value:"})}),(0,s.jsx)(t.th,{children:"Decription"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Decription"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Docker Image"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://hub.docker.com/_/mediawiki",children:(0,s.jsx)(t.code,{children:"mediawiki"})}),"(click me,for the dockerhub image)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Application name"}),(0,s.jsx)(t.td,{children:"Eg: wiki(you can put any name)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resource Allocation"}),(0,s.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Protocol"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Http:"}),(0,s.jsx)(t.td,{children:"80"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tcp:"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Advanced"}),(0,s.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,s.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,s.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,s.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,s.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,s.jsx)("img",{src:"/img/dd222.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/aa2.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)("img",{src:"/img/dd244.jpg",alt:"Alt Text",style:{maxWidth:"350px"}}),(0,s.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,s.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,s.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,s.jsxs)(t.p,{children:["For Detailed FAQ please vist this page: ",(0,s.jsx)(t.a,{href:"https://techscaleinfinite.github.io/FAQ",children:"FAQ"})]}),(0,s.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,s.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,s.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Category"}),(0,s.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, media wiki "})]})]}),"\n",(0,s.jsx)(r.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);