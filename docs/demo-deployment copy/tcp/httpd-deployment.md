---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# HTTPd Deployment
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/09.jpg" alt="Alt Text" width="25%"/>
</p> 

**Apache HTTP Server (HTTPD): Powering the Web**

*Apache HTTP Server* (HTTPD) is a versatile, open-source web server excelling in delivering web content seamlessly. It operates across various platforms, ensures security, and boasts a modular design for easy customization. In handling client requests, HTTPD's modularity allows it to elegantly adapt to diverse scenarios, making it a timeless foundation for web hosting.
### Exposed Ports

| Port Type | Port Number | Description                                     |
| --------- | ----------- | ----------------------------------------------- |
| Http      | 80          | Apache HTTP Server is exposed on port 80.       |
| Tcp       | -           | -             |

### Path Configuration

When running the container, the Apache HTTP Server may serve content from the following path:

| Path                             | Description                                     |
| -------------------------------- | ----------------------------------------------- |
| `/usr/local/apache2/htdocs/`      | Default path for serving Apache HTTP Server pages.|


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |


</span>



<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [`httpd`](https://hub.docker.com/\_/httpd)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: http(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |
                                                                        |


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


### Visual Snapshots

<img src="/img/e43.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/ss22.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, httpd

</details>

</span>


<Comments />