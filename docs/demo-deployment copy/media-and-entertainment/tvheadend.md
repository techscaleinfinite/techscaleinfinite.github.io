---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# TV headend Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/g5g.png" alt="Alt Text" width="25%"/>
</p> 

**tvheadend:**
tvheadend is an automated music downloader for NZB and Torrent, written in Python. It supports SABnzbd, NZBget, Transmission, µTorrent and Blackhole.






### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 9981       | tvheadend Web UI is accessible on port 9981. |
| Tcp       | -           | -             |

### Volume Mounts

tvheadend uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to tvheadend's configuration files.  |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/tvheadend](https://hub.docker.com/r/linuxserver/tvheadend)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: tvheadend1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     9981                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots




<img src="/img/44e.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/44h.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/44r.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/44t.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/44y.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> 












### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, tvheadend

</details>

</span>


<Comments />