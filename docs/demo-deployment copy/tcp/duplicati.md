---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# ⚙️ Duplicati

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/a3w.png" alt="Alt Text" width="25%"/>
</p> 

**Duplicati** is a versatile backup solution that seamlessly integrates with standard protocols including FTP, SSH, and WebDAV. It extends its compatibility to well-known cloud services such as Microsoft OneDrive, Amazon Cloud Drive & S3, Google Drive, box.com, Mega, hubiC, and more. This broad support makes Duplicati a robust choice for users seeking flexibility and compatibility across various storage and service options.


### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 8200       | Exposes port 8200 for the Duplicati app. Users can access the  application through this port. |
| Tcp       | -           | -             |

### Working Directories

| Path Mapping                         | Description |
| ------------------------------------ | ----------- |
|-v /path/to/appdata/config:/config \     | - |
|-v /path/to/backups:/backups \     | - |
|-v /path/to/source:/source     | - |



### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation
|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/duplicati](https://hub.docker.com/r/linuxserver/duplicati)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: Duplicati
(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8200                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


### Visual Snapshots

<img src="/img/o8.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/o9.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/o77.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/o776.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/o777.png" alt="Alt Text" style={{ maxWidth: '350px' }} />





### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Duplicati


</details>

</span>

<Comments />