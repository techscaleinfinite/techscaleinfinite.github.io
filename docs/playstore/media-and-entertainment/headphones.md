---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# headphones Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/w23.png" alt="Alt Text" width="25%"/>
</p> 

**headphones:**
Headphones is an automated music downloader for NZB and Torrent, written in Python. It supports SABnzbd, NZBget, Transmission, µTorrent and Blackhole.






### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 8181       | headphones Web UI is accessible on port 8181. |
| Tcp       | -           | -             |

### Volume Mounts

headphones uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to headphones's configuration files.  |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/headphones](https://hub.docker.com/r/linuxserver/headphones)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: headphones1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     8181                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots




<img src="/img/55j.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/55t.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/55u.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/55y.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> 












### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, headphones

</details>

</span>


<Comments />