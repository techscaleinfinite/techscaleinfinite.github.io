---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/fnn.jpg" alt="Alt Text" width="25%"/>
</p> 

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 🖥 Teedy Deployment
### Teedy: Symphony of Document Management

**Teedy** is a sleek document management system designed to bring order and clarity to your business operations. With a modern interface, it acts as a maestro of organization, providing efficient document upload and retrieval. Teedy ensures the security of your documents with precise user permissions, encryption, and secure data centers in France, offering a symphony of elegance and efficiency in the realm of document management.

### Exposed Ports

| Port Type | Port Number | Description                   |
| --------- | ----------- | ----------------------------- |
| Http      | 8080        | Teedy is accessible on port 8080.|
| Tcp       | -           | -             |

### Volume Mounts

Teedy uses volume mounts to manage data. You can set these when running the container:

| Volume                         | Description                    |
| ------------------------------ | ------------------------------ |
| `/mnt/teedy:/data`             | Path to the Teedy data directory.|


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [teedy](https://hub.docker.com/r/jdreinhardt/teedy) 👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: teedy1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     8080                                                                                                                     |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |
                                                                    

### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


### Visual Snapshots

![Alt Text](/img/ddd2.jpg)
![Alt Text](/img/dfr5.jpg)
![Alt Text](/img/dd322.jpg)
![Alt Text](/img/dwr.jpg)
![Alt Text](/img/sw2.jpg)

### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About Teedy image we used.**

This is the official  Teedy image.

**Can I deploy my own Teedy image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Teedy&#x20;

</details>
</span>


<Comments />