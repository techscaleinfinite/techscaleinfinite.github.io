---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/d4r.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# nzbhydra2 Deployment
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



![Alt Text](/img/zz3.png)

![Alt Text](/img/zz1.png)
![Alt Text](/img/zz2.png)

![Alt Text](/img/zz4.png)
![Alt Text](/img/zz5.png)
![Alt Text](/img/zz7.png)









### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About nzbhydra2 image we used.**

This is the official nzbhydra2 image.

**Can I deploy my own nzbhydra2 image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, nzbhydra2

</details>

</span>


<Comments />