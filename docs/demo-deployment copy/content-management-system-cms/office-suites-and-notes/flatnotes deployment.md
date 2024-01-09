---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';



# 📜 flatnotes Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/dddv.jpg" alt="Alt Text" width="25%"/>
</p>

# Flatnotes: Simplicity in Note-Taking Brilliance

Flatnotes redefines digital note-taking with its clean, distraction-free design and minimalist interface. Offering a simple yet powerful organizational approach with tags and advanced search, it ensures your notes are effortlessly accessible. Embrace the flexibility of Markdown with both Raw and WYSIWYG editor modes. Flatnotes prioritizes your ownership and portability, storing notes as plain markdown files under your control. With responsive cross-device functionality, customizable themes, security options, and developer-friendly features like a Restful API, Flatnotes provides an unparalleled note-taking experience that's refreshingly simple and highly functional.

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 8080        | Exposes port 8080 for the Flatnotes application. Users can access Flatnotes through this port. |
| Tcp       | -           | -             |

### Volume Mounts

| Path Mapping | Description |
| ------------ | ----------- |
| ./data:/data  | Maps the host directory for Flatnotes' data to the corresponding directory inside the container. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |


</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [flatnotes](https://hub.docker.com/r/elestio/flatnotes)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: OWNCLOUD1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8080                                                                                                                    |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |


| If you choose Advanced option|                                                                                                                   | 
| ENV VARIABLE          | ```Give env variable.``` ```Eg:key==value```                                                                             | 
| WORKING DIR           | ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```Here use ( use the path after   " :"  ) ```shell - "./data:/data"```                      |
| `Access`              |                                                                                                                          | 
| Public                |    (select this if you want to make it public)                                                                           |
| Private               |  (select this if you want to make it private)                                                                            |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots

<img src="/img/ww2.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/ttt44.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/xx2.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/ss3.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/fee3.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, flatnotes

</details>

</span>

<Comments />