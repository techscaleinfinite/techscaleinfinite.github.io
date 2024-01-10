---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# rutorrent Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/r4r.jpg" alt="Alt Text" width="25%"/>
</p> 

**rutorrent:**
Rutorrent is a popular rtorrent client with a webui for ease of use.






### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 80       | rutorrent Web UI is accessible on port 80. |
| Tcp       | -           | -             |

### Volume Mounts

rutorrent uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to rutorrent's configuration files.  |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/rutorrent](https://hub.docker.com/r/linuxserver/rutorrent)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: rutorrent1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     80                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots




<img src="/img/11e.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/11q.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/11r.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/11r.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/11w.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> 













### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, rutorrent

</details>

</span>


<Comments />