---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/dcdt5.jpg" alt="Alt Text" width="25%"/>
</p>
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 📓 Livebook Deployment

# Livebook: Your Collaborative Code Notebook

Livebook is your dynamic companion in the coding and data exploration realm, seamlessly blending documentation and execution. With interactive code notebooks featuring Markdown support and code cells for Elixir execution, Livebook transforms coding into a collaborative adventure. The Monaco Editor, Kino for visualizations, and Smart Cells enhance your coding experience, while reproducibility and predictability streamline the process. Livebook fosters effortless collaboration, allowing multiple users to work simultaneously. It's open-source, decentralized, and ready to elevate your coding journey into a vibrant, communal exploration. Dive into Livebook for a magical coding experience!

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 80          | Exposes port 80 for the Livebook application. Users can access Livebook through this port. |
| Tcp       | -           | -             |

### Volume Mounts

| Path Mapping | Description |
| ------------ | ----------- |
| $(pwd):/data | Maps the host directory to the /data directory inside the Livebook container. This allows Livebook to access and store data in the specified host directory. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [Livebook](https://hub.docker.com/r/livebook/livebook)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: book1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8080                                                                                                                   |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

                                                      

### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


### Visual Snapshots


![Alt Text](/img/111.jpg)
![Alt Text](/img/r22.jpg)
![Alt Text](/img/ee4.jpg)
![Alt Text](/img/rr3.jpg)
![Alt Text](/img/eeee4.jpg)
![Alt Text](/img/ee3e.jpg)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About Livebook image we used.**

This is the official Livebook mage.

**Can I deploy my own media Livebook with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Livebook

</details>

</span>

<Comments />