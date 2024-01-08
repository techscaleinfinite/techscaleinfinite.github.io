---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/vvs.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# remmina Deployment

**Remmina:**
A remote desktop client written in GTK, Remmina is designed for system administrators and travelers who work with numerous remote computers on screens of varying sizes. It supports multiple network protocols, including RDP, VNC, SPICE, NX, XDMCP, SSH, and EXEC, providing an integrated and consistent user interface for efficient remote desktop management.





### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 3000       | remmina Web UI is accessible on port 3000. |
| Tcp       | -           | -             |

### Volume Mounts

remmina uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to remmina's configuration files.  |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/remmina](https://hub.docker.com/r/linuxserver/remmina)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: remmina1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     3000                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots


![Alt Text](/img/j9.png)


![Alt Text](/img/j2.png)
![Alt Text](/img/j4.png)
![Alt Text](/img/j5.png)
![Alt Text](/img/j7.png)












### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About remmina image we used.**

This is the official remmina image.

**Can I deploy my own remmina image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, remmina

</details>

</span>


<Comments />