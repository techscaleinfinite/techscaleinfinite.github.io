---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/11.jpg" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# ⚙️ boinc Deployment

## BOINC: High-Throughput Computing Platform

**BOINC** is a versatile platform designed for high-throughput computing on a large scale, involving thousands or even millions of computers. Its applications range from volunteer computing, utilizing consumer devices, to grid computing, making use of organizational resources. BOINC supports various computing paradigms, including virtualized, parallel, and GPU-based applications.


### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 8080         | boinc application is exposed on port 80.  |
| Tcp       | -           | -             |

### Path Configuration

When running the container, the default boinc web server may serve content from the following path:

| Path                            | Description                                     |
| ------------------------------- | ----------------------------------------------- |
|    | . |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/boinc](https://hub.docker.com/r/linuxserver/boinc)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: cadd(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8080                                                                                                                    |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots
![Alt Text](/img/c3.png)
![Alt Text](/img/c33.png)
![Alt Text](/img/c332.png)
![Alt Text](/img/c343.png)
![Alt Text](/img/c3323.png)

### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About boinc image we used.**

This is the official boinc image.

**Can I deploy my own boinc image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, boinc

</details>

</span>



<Comments />