---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/090.jpg" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 📙 LazyLibrarian - Automated Digital Reading Metadata Manager

LazyLibrarian is a versatile program designed to streamline your digital reading experience. It allows users to follow authors and automatically retrieve metadata for their digital reading needs. By leveraging sources such as Goodreads, LibraryThing, and optionally Google Books, LazyLibrarian ensures comprehensive author and book information. This automation eliminates the manual effort of managing metadata, making it an essential tool for those seeking an efficient and organized approach to digital reading.


### Exposed Ports

| Port Type | Port Number | Description                       |
| --------- | ----------- | --------------------------------- |
| Http      | 5299       | linuxserver/lazylibrarian is accessible on port 5299.|
| Tcp       | -           | -             |

### Volume Mounts

linuxserver/lazylibrarian uses volume mounts to manage manga and configuration data. You can set these when running the container:

| Volume                                 | Description                              |
| -------------------------------------- | ---------------------------------------- |
| `/config` | Path to your linuxserver/lazylibrarian configuration data. |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |    [linuxserver/lazylibrarian ](https://hub.docker.com/r/linuxserver/lazylibrarian)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: v1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     5299                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)

### Visual Snapshots

![Alt Text](/img/81.png)
![Alt Text](/img/84.png)
![Alt Text](/img/86.png)
![Alt Text](/img/87.png)
![Alt Text](/img/89.png)



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About linuxserver/lazylibrarian image we used.**

This is the official  linuxserver/lazylibrarian image.

**Can I deploy my own linuxserver/lazylibrarian image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, linuxserver/lazylibrarian

</details>

</span>

<Comments />