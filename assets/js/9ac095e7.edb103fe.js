"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[521],{17939:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=a(85893),n=a(11151),r=a(5370);const i={draft:!1},o="\ud83d\udcbb Grafana deployment",d={id:"demo-deployment copy/content-management-system-cms/grafana-deployment",title:"grafana-deployment",description:"Grafana is the ultimate data analytics and visualization tool, transforming raw numbers into vibrant charts and dashboards. Compatible with various platforms, including PC, Mac, and Raspberry Pi, Grafana is open source, empowering users to customize and share their data playground. Acting as a data detective, it connects seamlessly to diverse data sources, creating a centralized hub for insights.",source:"@site/docs/demo-deployment copy/content-management-system-cms/grafana-deployment.md",sourceDirName:"demo-deployment copy/content-management-system-cms",slug:"/demo-deployment copy/content-management-system-cms/grafana-deployment",permalink:"/demo-deployment copy/content-management-system-cms/grafana-deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"firefox-deployment",permalink:"/demo-deployment copy/content-management-system-cms/firefox-deployment"},next:{title:"joomla",permalink:"/demo-deployment copy/content-management-system-cms/joomla"}},l={},c=[{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation",id:"installation",level:3},{value:"Steps And Procedure ",id:"steps-and-procedure-",level:3},{value:"Visual Snapshots",id:"visual-snapshots",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/img/vf.jpg",alt:"Alt Text",width:"25%"})}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)(t.h1,{id:"-grafana-deployment",children:"\ud83d\udcbb Grafana deployment"}),(0,s.jsx)(t.h1,{id:"grafana-your-datas-picasso-and-detective",children:"Grafana: Your Data's Picasso and Detective"}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Grafana"})," is the ultimate data analytics and visualization tool, transforming raw numbers into vibrant charts and dashboards. Compatible with various platforms, including PC, Mac, and Raspberry Pi, Grafana is open source, empowering users to customize and share their data playground. Acting as a data detective, it connects seamlessly to diverse data sources, creating a centralized hub for insights."]}),(0,s.jsx)(t.p,{children:"Grafana's visual prowess turns data into a visual masterpiece, offering real-time updates and dynamic charts. With an alert system, it keeps you informed about data anomalies, serving as your personal data watchdog. Whether you're a seasoned data professional or a newcomer, Grafana is your gateway to turning data chaos into meaningful insights. It's your data, your rules, and your way to visualize and understand numbers like never before! \ud83d\udcca\ud83d\udd75\ufe0f\u200d\u2642\ufe0f\u2728"}),(0,s.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Port Type"}),(0,s.jsx)(t.th,{children:"Port Number"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Http"}),(0,s.jsx)(t.td,{children:"80"}),(0,s.jsx)(t.td,{children:"Grafana exposes port 80 for HTTP communication."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Http"}),(0,s.jsx)(t.td,{children:"3000"}),(0,s.jsx)(t.td,{children:"Additionally, port 3000 is commonly used for Grafana's web interface."})]})]})]}),(0,s.jsx)(t.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Path Mapping"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"grafana-storage:/var/lib/grafana"}),(0,s.jsx)(t.td,{children:"Maps the volume named 'grafana-storage' to the container's '/var/lib/grafana' directory. This allows Grafana to store its data in the specified volume."})]})})]}),(0,s.jsx)(t.p,{children:"This volume mount ensures that Grafana can store its data persistently in the 'grafana-storage' volume. Adjust the volume name and paths as needed."}),(0,s.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Environment value:"})}),(0,s.jsx)(t.th,{children:"Decription"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"-"})]})})]})]}),"\n",(0,s.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Decription"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Docker Image"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://hub.docker.com/r/grafana/grafana",children:(0,s.jsx)(t.code,{children:"grafana"})}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Application name"}),(0,s.jsx)(t.td,{children:"Eg: firefox(you can put any name)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resource Allocation"}),(0,s.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Protocol"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Http:"}),(0,s.jsx)(t.td,{children:"80/3000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tcp:"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Advanced"}),(0,s.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,s.jsxs)(t.p,{children:["| If you choose Advanced option|                                                                                                                   |\n| ENV VARIABLE          | ",(0,s.jsx)(t.code,{children:"Give env variable."})," ",(0,s.jsx)(t.code,{children:"Eg:key==value"}),"                                                                             |\n| WORKING DIR           | ",(0,s.jsx)(t.code,{children:"WORKDIR for the application."})," ",(0,s.jsx)(t.code,{children:"Eg:usr/src/yourAPP"}),'Here use ( use the path after   " :"  ) grafana-storage:/var/lib/grafana                      |\n| ',(0,s.jsx)(t.code,{children:"Access"}),"              |                                                                                                                          |\n| Public                |    (select this if you want to make it public)                                                                           |\n| Private               |  (select this if you want to make it private)                                                                            |"]}),(0,s.jsx)(t.h3,{id:"steps-and-procedure-",children:"Steps And Procedure "}),(0,s.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,s.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,s.jsx)(t.h3,{id:"visual-snapshots",children:"Visual Snapshots"}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Alt Text",src:a(27061).Z+"",width:"1917",height:"1080"}),"\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:a(23618).Z+"",width:"1920",height:"1077"}),"\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:a(14717).Z+"",width:"957",height:"925"}),"\n",(0,s.jsx)(t.img,{alt:"Alt Text",src:a(37665).Z+"",width:"1919",height:"912"})]}),(0,s.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"About grafana image we used."})}),(0,s.jsx)(t.p,{children:"This is the official grafana image."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Are there any restrictions on adding data sources ?"})}),(0,s.jsx)(t.p,{children:"you can add any data source that grafana supports."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Can i deploy older version of grafana or my own modified grafana image ?"})}),(0,s.jsx)(t.p,{children:"Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Are my data persistent ?"})}),(0,s.jsx)(t.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,s.jsx)(t.h3,{id:"join-us",children:"Join us"}),(0,s.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,s.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Category"}),(0,s.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, grafana"})]})]}),"\n",(0,s.jsx)(r.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},37665:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/ght6-f0079952c07a41769daa6a4f27269918.jpg"},23618:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/hbh7-cc962b381b921dd8af233a51ab2a9c74.jpg"},14717:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/jjj6-e95df56ae9862d3ac4ef5f1399d7e0e3.jpg"},27061:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/nn6-da43c15e73fa9bd16e0d0cfb46b9cf93.jpg"}}]);