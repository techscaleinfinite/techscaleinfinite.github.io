---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/xxcz.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# booksonic-air Deployment

**Booksonic-air:**
A platform designed for accessing your audiobooks from anywhere. The platform includes Booksonic Air, a server that streams audiobooks. It is the successor to the original Booksonic server and is built on Airsonic, offering a convenient solution for streaming and enjoying your audiobook collection.






### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 4040       | booksonic-air Web UI is accessible on port 4040. |
| Tcp       | -           | -             |

### Volume Mounts

booksonic-air
 uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to booksonic-air's configuration files.  |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/booksonic-air](https://hub.docker.com/r/linuxserver/booksonic-air)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: booksonic-air1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     4040                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots




![Alt Text](/img/p0076.png)
![Alt Text](/img/p00.png)
![Alt Text](/img/p000.png)
![Alt Text](/img/p007.png)
![Alt Text](/img/p009.png)











### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About booksonic-airimage we used.**

This is the official booksonic-airimage.

**Can I deploy my own booksonic-air image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, booksonic-air


</details>

</span>


<Comments />