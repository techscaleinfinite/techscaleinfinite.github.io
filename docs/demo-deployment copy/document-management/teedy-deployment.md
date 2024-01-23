---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';




# Teedy Deployment
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/fnn.jpg" alt="Alt Text" width="25%"/>
</p> 


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

<img src="/img/ddd2.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/dfr5.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />
<img src="/img/dd322.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/dwr.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/sw2.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Teedy&#x20;

</details>
</span>


<Comments />