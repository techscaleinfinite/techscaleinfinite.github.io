---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/33d.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# doublecommander Deployment

**doublecommander:**
Double Commander is a free cross platform open source file manager with two panels side by side. It is inspired by Total Commander and features some new ideas.

### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 3000       | doublecommander Web UI is accessible on port 3000. |
| Tcp       | -           | -             |

### Volume Mounts

doublecommander uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to doublecommander's configuration files.  |
| `/path/to/downloads`         | Path to the directory where downloads are stored. |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/doublecommander](https://hub.docker.com/r/linuxserver/doublecommander)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: qb1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     3000                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots

![Alt Text](/img/f454.png)
![Alt Text](/img/f56.png)

![Alt Text](/img/f555.png)
![Alt Text](/img/f643.png)
![Alt Text](/img/f6666.png)






### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About doublecommander image we used.**

This is the official doublecommander image.

**Can I deploy my own doublecommander image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, doublecommander

</details>

</span>


<Comments />