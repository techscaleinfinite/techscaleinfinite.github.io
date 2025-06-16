---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';






# Radarr' Deployment
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/scaas.png" alt="Alt Text" width="25%"/>
</p> 

**Radarr:**
A fork of Sonarr designed for managing movies, inspired by Couchpotato. Radarr is a powerful tool for automating the downloading and organization of movies, providing a user-friendly interface for movie enthusiasts.

### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 7878       | Radarr' Web UI is accessible on port 7878. |
| Tcp       | -           | -             |

### Volume Mounts

Radarr' uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to Radarr''s configuration files.  |
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
| Docker Image          |   [linuxserver/radarr](https://hub.docker.com/r/linuxserver/radarr)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: qb1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     7878                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots

<img src="/img/z21.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/z22.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/z33.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/z55.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/z88.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/z551.png" alt="Alt Text" style={{ maxWidth: '350px' }} />




### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)
### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Radarr'

</details>

</span>


<Comments />