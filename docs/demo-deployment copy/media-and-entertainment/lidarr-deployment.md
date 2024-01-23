---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# Lidarr Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/r43.jpg" alt="Alt Text" width="25%"/>
</p> 

**Lidarr** is the music enthusiast's dream assistant, a savvy sidekick and tech virtuoso in the realm of Usenet and BitTorrent. Constantly scanning RSS feeds, it hunts down new tracks from your favorite artists with precision. Beyond mere collection, Lidarr elevates your music library by sorting, renaming, and organizing tracks for a polished look, akin to having a personal butler for your tunes. This virtuoso doesn't settle for any quality; it automatically upgrades tracks with better versions, ensuring your collection remains top-notch. Lidarr is your backstage pass to music management nirvana, delivering an organized and high-quality symphony to your digital world. 🎵🔍🌟

### Exposed Ports

| Port Type | Port Number | Description                                       |
| --------- | ----------- | ------------------------------------------------- |
| Http      | 8686        | "Lidarr" application is accessible on port 8686. |
| Tcp       | -           | -             |

### Path Configuration

Lidarr may use path configuration. Set these when running the container:

| Path                          | Description                             |
| ----------------------------- | --------------------------------------- |
| `/path/to/appdata/config`     | Path for Lidarr configuration data.     |
| `/path/to/music`              | Path for music in Lidarr.               |
| `/path/to/downloads` (optional) | Path for downloads in Lidarr (optional). |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`lidarr`](https://hub.docker.com/r/linuxserver/lidarr)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: lidarr1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8686                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)




### Visual Snapshots

<img src="/img/wwr.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/eeg.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/dfdd.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions&#x20;

</details>

</span>

<Comments />