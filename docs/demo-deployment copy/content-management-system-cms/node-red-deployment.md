---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/sad.jpg" alt="Alt Text" width="25%"/>
</p>
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 🖥 Node Red Deployment

# Node-RED: Unleash Creativity in Connectivity

**Node-RED** transforms programming into an imaginative journey, allowing users to visually wire together hardware devices, APIs, and online services. The browser-based editor acts as a canvas, letting users intuitively connect nodes like digital Lego blocks to create intricate flows. With one-click deployment, your ideas spring to life instantly. For those with a penchant for JavaScript, the editor includes a rich text editor for crafting intricate functions.

Node-RED boasts a library for saving and sharing code snippets, functions, or entire flows. Behind the scenes, flows are stored as JSON, offering flexibility in import, export, and sharing. The platform goes beyond being a tool; it's a canvas for digital artistry, where creativity knows no bounds. Start painting the future of connectivity with Node-RED, where your imagination sets the limits, and innovation is the masterpiece. 🎨💡🌐
### Exposed Ports

| Port Type | Port Number | Description                        |
| --------- | ----------- | ---------------------------------- |
| http       | 1880        | Node-RED exposes port 1880.         |
| Tcp       | -           | -             |

### Volume Mounts

Node-RED uses volume mounts to manage data storage. You can set these when running the container:

| Volume            | Description                            |
| ----------------- | -------------------------------------- |
| `myNodeREDdata:/data`   | This is the path where Node-RED data is stored. |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |
</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          | [node red ](https://hub.docker.com/r/nodered/node-red/)(click me,for the dockerhub image)                                  |
| Application name      |  Eg: nodered(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |  1880                                                                                                                    |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

| If you choose Advanced option|                                                                                                                   | 
| ENV VARIABLE          | ```Give env variable.``` ```Eg:key==value```                                                                             | 
| WORKING DIR           | ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```Here use ( use the path after   " :"  ) ```shell -v myNodeREDdata:/data```                    |
| `Access`              |                                                                                                                          | 
| Public                |    (select this if you want to make it public)                                                                           |
| Private               |  (select this if you want to make it private)                                                                            |



 
### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


### Visual Snapshots

 
![Alt Text](/img/zz1.jpg)
![Alt Text](/img/kk3.jpg)
![Alt Text](/img/oo3.jpg)

### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About media** Node-RED **we used.**

This is the official Node-RED image.

**Can I deploy my own media** Node-RED **with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, node red

</details>

</span>

<Comments />