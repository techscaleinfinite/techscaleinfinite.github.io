---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';


# Znc Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>



<p align="center">
  <img src="/img/sd.jpg" alt="Alt Text" width="25%"/>
</p> 

ZNC, an IRC network bouncer or BNC, enhances the IRC experience by allowing users to connect via an intermediary server. Users can detach clients gracefully, focus on specific channels, consolidate nicknames, and connect from multiple devices simultaneously. ZNC ensures security, message buffering, and customization, providing a persistent IRC presence with user-friendly interfaces for management.

### Exposed Ports

| Port Type | Port Number | Description                        |
| --------- | ----------- | ---------------------------------- |
| Http       | 6051        | ZNC is exposed on port 6051.        |

### Volume Configuration

When running the container, you may mount the configuration data directory from the host using the following volume configurations:

| Volume                          | Description                                      |
| ------------------------------- | ------------------------------------------------ |
| `/path/to/appdata/config:/config` | Mounts the configuration data directory from the host. |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [ZNC](https://hub.docker.com/r/linuxserver/znc)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: znc(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 6051                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

                                                                 


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots


<img src="/img/433.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> 
<img src="/img/432.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> 
<img src="/img/asd.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />
<img src="/img/qq1.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> 
<img src="/img/dd3.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />

### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, znc

</details>

</span>



<Comments />