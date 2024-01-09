---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# 💻 foldingathome Deployment
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/kh.png" alt="Alt Text" width="25%"/>
</p> 


**Foldinghome:**
A distributed computing project focused on simulating protein dynamics, including the complex processes of protein folding and the movements of proteins associated with various diseases. Folding@home engages citizen scientists who volunteer their personal computers to run simulations. The insights derived from this collaborative effort contribute to a deeper understanding of biology and open new avenues for therapeutic development.





### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 7396       | foldingathome Web UI is accessible on port 7396. |
| Tcp       | -           | -             |

### Volume Mounts

foldingathome uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to foldingathome's configuration files.  |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/foldingathome](https://hub.docker.com/r/linuxserver/foldingathome)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: foldingathome1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     7396                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots



<img src="/img/t9.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/t1.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/t2.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/t3.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/t7.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/t8.png" alt="Alt Text" style={{ maxWidth: '350px' }} />














### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, foldingathome

</details>

</span>


<Comments />