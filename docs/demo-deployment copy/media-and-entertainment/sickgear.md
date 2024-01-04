---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/4443.png" alt="Alt Text" width="25%"/>
</p> 

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>


# 🎵 sickgear Deployment

## SickGear - Your TV Show and Anime Manager

**SickGear** is your go-to solution for managing TV shows and Anime. It excels at detecting new episodes, seamlessly integrating with downloader apps, and offering a range of additional features. Whether you're a TV show enthusiast or an Anime lover, SickGear simplifies and enhances your media management experience.


### Exposed Ports

| Port Type | Port Number | Description                                   |
| --------- | ----------- | --------------------------------------------- |
| Http      | 8081        | "sickgear" application is accessible on port 8081. |
| Tcp       | -           | -             |

### Path Configuration

"sickgear" may use path configuration. Set these when running the container:

| Path                          | Description                         |
| ----------------------------- | ----------------------------------- |
| ` /path/to/data:/tv`        | Path for sickgear assets.            |
| `/path/to/data:/downloads`                     | Internal path used by download.      |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`linuxserver/sickgear`](https://hub.docker.com/r/linuxserver/sickgear)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: pod1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8081                                                                                                                     |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots

![Alt Text](/img/y4.png)
![Alt Text](/img/y44.png)
![Alt Text](/img/y433.png)
![Alt Text](/img/y442.png)
![Alt Text](/img/y4424.png)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About sickgear image we used.**

This is the official sickgear image.

**Can I deploy my own sickgear image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going.

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, , media, entertainment

</details>

</span>

<Comments />