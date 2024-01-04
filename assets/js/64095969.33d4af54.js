"use strict";(self.webpackChunkscale=self.webpackChunkscale||[]).push([[3626],{91863:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=s(85893),i=s(11151),r=s(5370);const o={draft:!1},a="\ud83d\udda5 Mysql deployment",l={id:"demo-deployment copy/database/mysql deployment",title:"mysql deployment",description:"MySQL: The Trusty Librarian of Data",source:"@site/docs/demo-deployment copy/database/mysql deployment.md",sourceDirName:"demo-deployment copy/database",slug:"/demo-deployment copy/database/mysql deployment",permalink:"/demo-deployment copy/database/mysql deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"mongo db",permalink:"/demo-deployment copy/database/mongo db"},next:{title:"nocodb",permalink:"/demo-deployment copy/database/nocodb"}},d={},c=[{value:"MySQL: The Trusty Librarian of Data",id:"mysql-the-trusty-librarian-of-data",level:3},{value:"Exposed Ports",id:"exposed-ports",level:3},{value:"Volume Mounts",id:"volume-mounts",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Installation ",id:"installation-",level:3},{value:"Steps And Procedure",id:"steps-and-procedure",level:3},{value:"Visual Snapshot",id:"visual-snapshot",level:3},{value:"Youtube Tutorial ",id:"youtube-tutorial-",level:3},{value:"FAQ",id:"faq",level:3},{value:"Join us",id:"join-us",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/img/kkkw.jpg",alt:"Alt Text",width:"25%"})}),"\n",(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)(t.h1,{id:"-mysql-deployment",children:"\ud83d\udda5 Mysql deployment"}),(0,n.jsx)(t.h3,{id:"mysql-the-trusty-librarian-of-data",children:"MySQL: The Trusty Librarian of Data"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"MySQL"})," serves as an open-source Relational Database Management System (RDBMS), offering structured data organization with SQL queries. It acts like a trusted librarian, ensuring data integrity, scalability, and ease of retrieval. MySQL's role extends from creating databases and defining tables to inserting, retrieving, and manipulating data, making it a reliable partner for various web and software projects."]}),(0,n.jsx)(t.h3,{id:"exposed-ports",children:"Exposed Ports"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Port Type"}),(0,n.jsx)(t.th,{children:"Port Number"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tcp"}),(0,n.jsx)(t.td,{children:"3306"}),(0,n.jsx)(t.td,{children:"MySQL exposes port 3306 for TCP traffic."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"http"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),(0,n.jsx)(t.h3,{id:"volume-mounts",children:"Volume Mounts"}),(0,n.jsx)(t.p,{children:"MySQL uses volume mounts to manage data storage and configuration. You can set these when running the container:"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Volume"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:" /my/custom:/etc/mysql/conf.d"})}),(0,n.jsx)(t.td,{children:"Path to MySQL custom configuration files (conf.d)."})]})})]}),(0,n.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),(0,n.jsx)(t.p,{children:"MySQL requires environment variables to be set for configuration:"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MYSQL_ROOT_PASSWORD"})}),(0,n.jsxs)(t.td,{children:["Password for the root user. (e.g., ",(0,n.jsx)(t.code,{children:"example"}),")"]})]})})]})]}),"\n",(0,n.jsxs)("span",{style:{fontFamily:"Roobert, sans-serif",fontSize:"12pt"},children:[(0,n.jsx)(t.h3,{id:"installation-",children:"Installation "}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Decription"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Docker Image"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://hub.docker.com/_/mysql",children:(0,n.jsx)(t.code,{children:"mysql"})}),"\ud83d\udc48(click me,for the dockerhub image)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Application name"}),(0,n.jsx)(t.td,{children:"Eg: mysql1(you can put any name)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resource Allocation"}),(0,n.jsx)(t.td,{children:"0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Protocol"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Http:"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tcp:"}),(0,n.jsx)(t.td,{children:"3306"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Advanced"}),(0,n.jsx)(t.td,{children:"Install with Default"})]})]})]}),(0,n.jsx)(t.h3,{id:"steps-and-procedure",children:"Steps And Procedure"}),(0,n.jsxs)(t.p,{children:["For Detailed steps and procedure please vist this page: ",(0,n.jsx)(t.a,{href:"https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure",children:"Click here"})]}),(0,n.jsx)(t.p,{children:"By following these steps, you can effortlessly deploy an MYSQL instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Connecting to MySQL Database via MySQL Client"})}),(0,n.jsx)(t.p,{children:"When deploying a MySQL application, you can't directly connect to it via a web browser as you would with HTTP applications. Instead, you need to use a MySQL client to establish a connection using the application's IP address, username, and password. Here's how to do it:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Install MySQL Client:"})," If you don't have MySQL client installed, you can download and install it on your local machine from the official MySQL website."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Gather Connection Details:"})," After deploying your MySQL application, note down its IP address, username, and password. You might have received these details during the deployment process or through an email."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Open MySQL Client:"})," Open your MySQL client application on your local machine."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Create a New Connection:"})," Look for an option to create a new connection or establish a new session. This might vary based on the MySQL client you are using."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Enter Connection Details:"})," In the connection setup, provide the following details:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Host: The IP address of your deployed MySQL application."}),"\n",(0,n.jsx)(t.li,{children:"Username: The MySQL username associated with your application."}),"\n",(0,n.jsx)(t.li,{children:"Password: The corresponding password for the provided username."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Connect:"}),' Once you\'ve entered the details, click on the "Connect" or "Log In" button to establish a connection.']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Execute Queries:"})," After successfully connecting, you'll be able to execute SQL queries, manage databases, and perform various database-related operations using the MySQL client interface."]}),"\n"]}),(0,n.jsx)(t.h3,{id:"visual-snapshot",children:"Visual Snapshot"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Alt Text",src:s(2671).Z+"",width:"1918",height:"1080"}),"\n",(0,n.jsx)(t.img,{alt:"Alt Text",src:s(85377).Z+"",width:"1273",height:"805"})]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Alt Text",src:s(39187).Z+"",width:"1472",height:"1041"}),"\n",(0,n.jsx)(t.img,{alt:"Alt Text",src:s(63637).Z+"",width:"1918",height:"1080"}),"\n",(0,n.jsx)(t.img,{alt:"Alt Text",src:s(12602).Z+"",width:"1465",height:"1018"}),"\n",(0,n.jsx)(t.img,{alt:"Alt Text",src:s(70749).Z+"",width:"1472",height:"1030"})]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Alt Text",src:s(178).Z+"",width:"1173",height:"472"}),"\n",(0,n.jsx)(t.img,{alt:"Alt Text",src:s(93017).Z+"",width:"1920",height:"1080"})]}),(0,n.jsx)(t.h3,{id:"youtube-tutorial-",children:"Youtube Tutorial "}),(0,n.jsx)(t.p,{children:"Check out our youtube video for more clarification."}),(0,n.jsx)(t.h3,{id:"faq",children:"FAQ"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"About mysql image we used."})}),(0,n.jsx)(t.p,{children:"This is the official mysql image."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Are there any restrictions on adding data sources ?"})}),(0,n.jsx)(t.p,{children:"you can add any data source that mysql supports."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Are my data persistent ?"})}),(0,n.jsx)(t.p,{children:"For the free user there is no persistence, and for the premium user you can different type of persistence."}),(0,n.jsx)(t.h4,{id:"join-us",children:"Join us"}),(0,n.jsxs)(t.p,{children:["Stay informed and engaged with our project's latest developments and support on ",(0,n.jsx)(t.a,{href:"https://app.slack.com/client/T04QS32JX6E/C04QKEWE146",children:"Slack"}),". Join us today to connect, collaborate, and keep the momentum going! "]}),(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Category"}),(0,n.jsx)(t.p,{children:"Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, database, mysql"})]})]}),"\n",(0,n.jsx)(r.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2671:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/13w-077267bf03c6f2f7aaaf45597fc1c2f0.jpg"},70749:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/dw2-f6795cf3eae3f7d8ff7fd94b929da9f8.jpg"},39187:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/dwe3-2b2dee5754181d47740dc4b169957b3f.jpg"},93017:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/ed3-51bb52342b6edb0fdbda173f1cf7008b.jpg"},85377:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/ew22-0f2c484cced01fc8674e8a8d78c18af3.jpg"},63637:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/fwd2-4d2c33bc1bc33af6e2f10889303c30d3.jpg"},178:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/gfw3-b934ce2006974111159092337781e17e.jpg"},12602:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/we2-d61667c7c392a12ad2848198383e826e.jpg"}}]);