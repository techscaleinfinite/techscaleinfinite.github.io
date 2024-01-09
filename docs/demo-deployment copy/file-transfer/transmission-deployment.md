---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';






# 🖥 Transmission Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/olk.jpg" alt="Alt Text" width="25%"/>
</p> 

Transmission stands out as a user-friendly, lightweight, and fast BitTorrent client, simplifying the torrenting experience. Designed for simplicity, it offers easy installation and configuration, making it a favorite for both beginners and advanced users. With a minimal system footprint, Transmission ensures speedy performance without consuming excessive resources, making it an ideal choice for various devices, including home NAS and media servers.

### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 9091        | Transmission Web UI is accessible on port 9091. |
| Tcp       | -           | -             |

### Volume Mounts

Transmission uses volume mounts to manage configuration, downloads, and watch folders. You can set these when running the container:

| Volume                          | Description                                        |
| ------------------------------- | -------------------------------------------------- |
| `/path/to/data:/config`          | Path to Transmission's configuration files.        |
| `/path/to/downloads:/downloads`  | Path to the directory where downloads are stored.  |
| `/path/to/watch/folder:/watch`   | Path to the watch folder for new torrents.         |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [Transmission ](https://hub.docker.com/r/linuxserver/transmission)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: trans1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     9091                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


### Visual Snapshots

<img src="/img/ddd4.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/rgr5.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/oiir.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, transmission

</details>

</span>

<Comments />