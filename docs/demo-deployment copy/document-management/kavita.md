---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/rhrt.jpg" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 🖥 Kavita Deployment

### Kavita: A Swift and Versatile Digital Library

**Kavita** is a self-hosted digital library offering lightning-fast access to a diverse range of file formats. With a sleek design, it caters to bookworms and manga enthusiasts, providing organized series, user reviews, and swift search capabilities. Kavita simplifies library management, offering a command center for users to explore literature seamlessly.
### Exposed Ports

| Port Type | Port Number | Description                       |
| --------- | ----------- | --------------------------------- |
| Http      | 5000        | Kavita is accessible on port 5000.|
| Tcp       | -           | -             |

### Volume Mounts

Kavita uses volume mounts to manage manga and configuration data. You can set these when running the container:

| Volume                                 | Description                              |
| -------------------------------------- | ---------------------------------------- |
| `/your/manga/directory:/manga`         | Path to your manga directory.            |
| `/kavita/data/directory:/kavita/config` | Path to your Kavita configuration data. |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [kavita ](https://hub.docker.com/r/kizaing/kavita) 👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: kav1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     5000                                                                                                                     |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots

![Alt Text](/img/swee.jpg)
![Alt Text](/img/gt.jpg)

![Alt Text](/img/ju.jpg)
![Alt Text](/img/fdfd4.jpg)



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About Kavita image we used.**

This is the official  Kavita image.

**Can I deploy my own Kavita image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Kavita

</details>

</span>

<Comments />