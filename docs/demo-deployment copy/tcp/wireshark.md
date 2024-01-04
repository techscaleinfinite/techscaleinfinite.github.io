---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/qaw.jpg" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

#  ⚙️ wireshark Deployment



Wireshark stands as the world's foremost network protocol analyzer, widely utilized for scrutinizing network activities at a microscopic level. Serving as the de facto standard across numerous commercial, non-profit enterprises, government agencies, and educational institutions, Wireshark allows users to gain detailed insights into their network's functioning. Its unparalleled capabilities make it an essential tool for network professionals, enabling them to analyze and understand the intricacies of network protocols with precision.


### Exposed Ports

| Port Type | Port Number | Description                                        |
| --------- | ----------- | -------------------------------------------------- |
| Http      | 3000        | It is exposed on port 3000. |
| Tcp       | -           | -             |

### Volume Configuration

When running the container, you may mount the configuration data directory from the host using the following volume configurations:

| Volume                     | Description                                      |
| -------------------------- | ------------------------------------------------ |
| `/path/to/appdata/config:/config` | Mounts the configuration data directory from the host. |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [wireshark](https://hub.docker.com/r/linuxserver/wireshark)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: vs1 (you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |  3000                                                                                                                   |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots

![Alt Text](/img/x1.png)
![Alt Text](/img/x2.png)
![Alt Text](/img/x3.png)
![Alt Text](/img/x4.png)
![Alt Text](/img/x5.png)
![Alt Text](/img/x6.png)



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About wireshark image we used.**

This is the official wireshark image.

**Can I deploy my own wireshark image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, wireshark

</details>

</span>


<Comments />