---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# muximux Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/ljh.png" alt="Alt Text" width="25%"/>
</p> 

**Muximux:**
A lightweight portal designed for managing Home Theater PC (HTPC) apps. Muximux allows users to view and control their HTPC applications through a single interface, eliminating the need for multiple tabs or bookmarks. It operates with just a PHP-enabled web server, providing a streamlined solution for HTPC app management.






### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 80       | muximux Web UI is accessible on port 80. |
| Tcp       | -           | -             |

### Volume Mounts

muximux uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to muximux's configuration files.  |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/muximux](https://hub.docker.com/r/linuxserver/muximux)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: muximux1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     80                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots




<img src="/img/a1.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/a2.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/a3.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/a4.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/a6.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/a7.png" alt="Alt Text" style={{ maxWidth: '350px' }} />













### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, muximux

</details>

</span>


<Comments />