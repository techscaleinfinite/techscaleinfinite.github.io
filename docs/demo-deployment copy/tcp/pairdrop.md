---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';






# pairdrop Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/decc.png" alt="Alt Text" width="25%"/>
</p> 

**PairDrop:**
A sublime alternative to AirDrop, PairDrop is a cross-platform solution that enables the seamless transfer of images, documents, or text via peer-to-peer connections. It functions within the same local network or Wi-Fi, offering an easy way to share files between paired devices.



### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 3000       | pairdrop Web UI is accessible on port 3000. |
| Tcp       | -           | -             |

### Volume Mounts

pairdrop uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to pairdrop's configuration files.  |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/pairdrop](https://hub.docker.com/r/linuxserver/pairdrop)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: pairdrop1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     3000                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots




<img src="/img/g5.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/g54.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/g67.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/g444.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/664.png" alt="Alt Text" style={{ maxWidth: '350px' }} />








### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, pairdrop

</details>

</span>


<Comments />