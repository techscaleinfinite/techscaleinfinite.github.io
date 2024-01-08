---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/ljh.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# muximux Deployment

**Muximux:**
A lightweight portal designed for managing Home Theater PC (HTPC) apps. Muximux allows users to view and control their HTPC applications through a single interface, eliminating the need for multiple tabs or bookmarks. It operates with just a PHP-enabled web server, providing a streamlined solution for HTPC app management.






### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 80       | muximux Web UI is accessible on port 80. |
| Tcp       | -           | -             |

### Volume Mounts

muximux uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to muximux's configuration files.  |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/muximux](https://hub.docker.com/r/linuxserver/muximux)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: muximux1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     80                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots




![Alt Text](/img/a1.png)
![Alt Text](/img/a2.png)

![Alt Text](/img/a3.png)
![Alt Text](/img/a4.png)
![Alt Text](/img/a6.png)
![Alt Text](/img/a7.png)













### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About muximux image we used.**

This is the official muximux image.

**Can I deploy my own muximux image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, muximux

</details>

</span>


<Comments />