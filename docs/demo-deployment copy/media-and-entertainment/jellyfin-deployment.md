---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/dsd.jpg" alt="Alt Text" width="25%"/>
</p> 

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 📺 Jellyfin Deployment

# Jellyfin: Your Personal Media Maestro

**Jellyfin** is the open-source maestro for your personal media symphony, providing a cost-free platform to organize and stream diverse content types. Its versatility extends to movies, music, and photos, ensuring your entire collection is easily accessible. Jellyfin harmoniously streams your media to various devices, allowing you to indulge in your favorites wherever you go. With customizable server aesthetics, it creates a private media haven tailored to your style. Security is paramount with Jellyfin's self-hosted solution, ensuring your digital treasures remain private and protected. In a media-dominated world, Jellyfin stands as your personal curator, delivering a neat, accessible, and private collection curated to your preferences. 🎬🎵📷

### Exposed Ports

| Port Type | Port Number | Description                                       |
| --------- | ----------- | ------------------------------------------------- |
| Http      | 8096        | "Jellyfin" application is accessible on port 8096. |
| Tcp       | -           | -             |

### Path Configuration

Jellyfin may use path configuration. Set these when running the container:

| Path                  | Description                             |
| --------------------- | --------------------------------------- |
| `/path/to/movies`     | Path for movies in Jellyfin.             |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`Jellyfin`](https://hub.docker.com/r/jellyfin/jellyfin))👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: jell1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8096                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)




### Visual Snapshots


![Alt Text](/img/l7.jpg)
![Alt Text](/img/k5k.jpg)
![Alt Text](/img/ll.jpg)
![Alt Text](/img/ooog.jpg)
![Alt Text](/img/kkkj.jpg)
![Alt Text](/img/kkn.jpg)




### FAQ

**About Jellyfin image we used.**

This is the official linuxserver/jellyfin image.

**Are there any restrictions on adding data sources ?**

you can add any data source that Jellyfin supports.

**Can i deploy older version of Jellyfin or my own modified Jellyfin image ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, media, entertainment, jellyfin

</details>

</span>


<Comments />