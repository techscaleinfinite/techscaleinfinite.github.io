---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# Prowlarr Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/scaa.png" alt="Alt Text" width="25%"/>
</p> 


**Prowlarr:**
A lightweight, cross-platform BitTorrent client that is free and open-source. Prowlarr features full encryption, a WebUI for remote management, and a plugin system, making it a versatile and user-friendly solution for BitTorrent downloading.

### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 9696        | Prowlarr Web UI is accessible on port 9696. |
| Tcp       | -           | -             |

### Volume Mounts

Prowlarr uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to Prowlarr's configuration files.  |
| `/path/to/downloads`         | Path to the directory where downloads are stored. |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/prowlarr](https://hub.docker.com/r/linuxserver/prowlarr)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: qb1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     9696                                                                                                                     |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots

<img src="/img/b444.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/b1.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/b4.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/b44.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/b555.png" alt="Alt Text" style={{ maxWidth: '350px' }} />




### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Prowlarr

</details>

</span>


<Comments />