---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/xxcsw.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# Darktable Deployment
**darktable:**
An open-source photography workflow application and raw developer, darktable serves as a virtual lighttable and darkroom for photographers. It organizes digital negatives in a database, offers a zoomable lighttable for viewing, and facilitates the development and enhancement of raw images, providing comprehensive tools for photographers.





### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 3000       | darktable Web UI is accessible on port 3000. |
| Tcp       | -           | -             |

### Volume Mounts

darktable uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to darktable's configuration files.  |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/darktable](https://hub.docker.com/r/linuxserver/darktable)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: darktable1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     3000                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots



![Alt Text](/img/v66.png)

![Alt Text](/img/v44.png)
![Alt Text](/img/v55.png)

![Alt Text](/img/v77.png)
![Alt Text](/img/v88.png)










### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About darktable image we used.**

This is the official darktable image.

**Can I deploy my own darktable image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, darktable

</details>

</span>


<Comments />