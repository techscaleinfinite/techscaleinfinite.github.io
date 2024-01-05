---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/scaas.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# Radarr' Deployment

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

![Alt Text](/img/z21.png)
![Alt Text](/img/z22.png)
![Alt Text](/img/z33.png)
![Alt Text](/img/z55.png)
![Alt Text](/img/z88.png)
![Alt Text](/img/z551.png)




### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About Radarr' image we used.**

This is the official Radarr' image.

**Can I deploy my own Radarr' image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Radarr'

</details>

</span>


<Comments />