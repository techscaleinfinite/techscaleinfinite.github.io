---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/wdv.jpg" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 📊 Gatus Deployment

### Gatus: Your Digital Health Maestro

Gatus is a versatile health dashboard that monitors HTTP, ICMP, TCP, and DNS, providing real-time insights into service well-being. Acting as a vigilant conductor, it excels in evaluating status codes, response times, and certificate expirations. With a symphony of alerting options, adaptability, and a user-friendly interface, Gatus ensures a seamless monitoring experience. As an open-source orchestra, it invites global collaboration for continuous fine-tuning, making it a reliable sidekick for data-driven decisions in the digital realm.

### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 80          | Gatus application is exposed on port 80. |

### Path Configuration

"Gatus" utilizes path configuration. Set these when running the container:

| Path                          | Description                                |
| ----------------------------- | ------------------------------------------ |
| `$(pwd)/config.yaml`          | Local path to the Gatus configuration file. |
| `/config/config.yaml`         | Target path within the container.           |

### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>



<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation
|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [gatus](https://hub.docker.com/r/twinproduction/gatus))👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: fatus1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |
                                                                       |


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


### Visual Snapshots

![Alt Text](/img/cfsr.jpg)
![Alt Text](/img/ddt5.jpg)
![Alt Text](/img/ddwe4.jpg)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About**  uptime gatus**image we used.**

This is the official uptime gatus image.

**Can I deploy my own** uptime gatus **image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, gatus&#x20;

</details>

</span>

<Comments />