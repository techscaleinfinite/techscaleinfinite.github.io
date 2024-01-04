---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/cbcf.jpg" alt="Alt Text" width="25%"/>
</p> 

# Domoticz

Domoticz is a versatile Home Automation System that enables monitoring and configuration of various devices. These include lights, switches, and a range of sensors/meters such as temperature, rain, wind, UV, electricity, gas, water, and more. Additionally, Domoticz supports sending notifications and alerts to any mobile device.



 

|  **Exposed Ports:**    | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Http port          |       8080 is exposed to facilitate web-based communication for domoticz. Users can access the domoticz application through this port.                              |
| Tcp port      |              -                                                                     | 

|  **Working directory:** | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| ./config:/opt/domoticz/userdata       |  This is the path  where domoticz's configuration files are stored. It ensures that the necessary configuration data is accessible.                                  |



|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|LOG_PATH=/opt/domoticz/userdata/domoticz.log    |  -                              |


</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`domoticz/domoticz`](https://hub.docker.com/r/domoticz/domoticz)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: domz1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8080                                                                                                                       |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

                                                                        


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots

![Alt Text](/img/9h.png)
![Alt Text](/img/9i.png)
![Alt Text](/img/9j.png)
![Alt Text](/img/9k.png)
v
![Alt Text](/img/9l.png)

![Alt Text](/img/9m.png)
![Alt Text](/img/9o.png)



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About domoticz image we used.**

This is the official domoticz image.

**Can I deploy my own domoticz image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going.

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions , media, entertainment

</details>

</span>

<Comments />
