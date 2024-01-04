---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/ccs.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 🖥️ Traggo Deployment

**Traggo** is a tag-based time tracking tool that revolutionizes traditional task tracking. Instead of tasks, it focuses on tagged time spans, providing a flexible approach to time management. For a hassle-free experience, you can deploy a fully managed Traggo on elest.io. This service offers automated backups, SSL termination with a reverse proxy, firewall protection, and continuous OS and software updates. The platform is maintained by a team of Linux experts and open source enthusiasts, ensuring the safety and functionality of your services.


### Exposed Ports

| Port Type | Port Number | Description                                      |
| --------- | ----------- | ------------------------------------------------ |
| Http      | 3030        | "traggo" application is accessible on port 3030. |
| Tcp       | -           | -             |

### Path Configuration

"trago" may use path configuration. Set these when running the container:

| Path                         | Description                                       |
| ---------------------------- | ------------------------------------------------- |
| `/opt/traggo/data`              | Path for accessing trago user functionality.  |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|  TRAGGO_DEFAULT_USER_NAME    |  TRAGGO_DEFAULT_USER_NAME                         |
|       TRAGGO_DEFAULT_USER_PASS                            |            ADMIN_PASSWORD                         |
</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation
                                                                                                 

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [Traggo ](https://hub.docker.com/r/elestio/traggo) 👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: lol1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     3030                                                                                                                  |
|  Tcp:                 |                                                                                                                           | 
|    Advanced           |    Install with Default                                                                                                  |

### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)





### Visual Snapshots

![Alt Text](/img/r43.png)
![Alt Text](/img/r444.png)

![Alt Text](/img/r544.png)
![Alt Text](/img/r555.png)
![Alt Text](/img/r4443.png)
![Alt Text](/img/r5554.png)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About Traggo  image we used.**

This is the official Traggo   image.

**Can I deploy my own media Traggo  with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, crypto, monry

</details>

</span>

<Comments />