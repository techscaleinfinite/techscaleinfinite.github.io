---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# ZenPhoto Deployment
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>
<p align="center">
  <img src="/img/eegb.jpg" alt="Alt Text" width="25%"/>
</p> 

Zenphoto is a versatile Content Management System (CMS) designed for self-hosted websites, focusing on multimedia galleries. It excels in handling various media formats, offers customized page and menu management, robust blogging features, efficient file handling, and multilingual support. With scheduled publishing, user management, and community interaction features, Zenphoto empowers artists, photographers, filmmakers, and musicians to showcase their creativity seamlessly on a global stage.

### Exposed Ports

| Port Type | Port Number | Description                              |
| --------- | ----------- | ---------------------------------------- |
| Http      | 80          | Zenphoto application is on port 80.      |
| Tcp       | -           | -             |

### Path Configuration

"Zenphoto" uses path configuration. Set these when running the container:

| Path                          | Description                              |
| ----------------------------- | ---------------------------------------- |
| `~/zenphoto/mysql:/var/lib/mysql \`            | Path for Zenphoto MySQL data. Internal path used by Zenphoto for MySQL.            |
| `~/zenphoto/www:/var/www/html \`              | Path for Zenphoto web content.Internal path used by Zenphoto for HTML.           |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |
</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          | [Zenphoto ](https://hub.docker.com/r/emieza/zenphoto)  👈(click me,for the dockerhub image)                              |
| Application name      |  Eg: zen1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


### Visual Snapshots

<img src="/img/t555.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/eer44.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/uyt5.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/s22.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/rw4.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/e333.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/fr4.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/htt.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/tht5.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ
For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, zen photo

</details>

</span>

<Comments />