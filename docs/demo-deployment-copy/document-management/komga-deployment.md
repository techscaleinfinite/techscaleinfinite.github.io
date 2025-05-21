---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';




# Komga Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/r66.png" alt="Alt Text" width="25%"/>
</p> 


**Komga** is a free and open-source comics/mangas server with a responsive web UI for easy access. It offers features like metadata management, collections, and read lists, ensuring an organized reading experience. With a REST API, multi-user support, and seamless imports, Komga transforms your comics collection into a delightful and immersive adventure.
### Exposed Ports

| Port Type | Port Number | Description                       |
| --------- | ----------- | --------------------------------- |
| Http      | 25600       | Komga is accessible on port 25600.|
| Tcp       | -           | -             |

### Volume Mounts

Komga uses volume mounts to manage data. You can set these when running the container:

| Volume                    | Description                   |
| ------------------------- | ----------------------------- |
| `/path/to/data:/config`   | Path to Komga configuration.  |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [komga ](https://hub.docker.com/r/gotson/komga) 👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: kav1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     5000                                                                                                                     |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots
<img src="/img/tt6.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/gt6.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/ht6.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Komga

</details>
</span>

<Comments />