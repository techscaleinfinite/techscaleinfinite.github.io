---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';




# nzbhydra2 Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/d4r.png" alt="Alt Text" width="25%"/>
</p> 


**NZBHydra2:**
A meta-search application for NZB indexers, NZBHydra2 is the "spiritual successor" to NZBmegasearcH and an evolution of the original NZBHydra. It facilitates easy access to various raw and newznab-based indexers. NZBHydra 2 is designed to replace NZBHydra 1, supporting migration from V1 with a note of potential compatibility issues. Users are advised to back up their old configuration before transitioning to the new version.




### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 5076       | nzbhydra2 Web UI is accessible on port 5076. |
| Tcp       | -           | -             |

### Volume Mounts

nzbhydra2 uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to nzbhydra2's configuration files.  |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/nzbhydra2](https://hub.docker.com/r/linuxserver/nzbhydra2)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: nzbhydra21(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     5076                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots


<img src="/img/zz3.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/zz1.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/zz2.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/zz4.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/zz5.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/zz7.png" alt="Alt Text" style={{ maxWidth: '350px' }} />










### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, nzbhydra2

</details>

</span>


<Comments />