---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# mininote deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/vvc.png" alt="Alt Text" width="25%"/>
</p>

# MiniNote: Your Secret Sanctuary for Markdown Memoirs

**MiniNote** is a self-hosted, privacy-focused gem for Markdown note-taking. It combines simplicity with security, featuring an uncluttered interface for crafting and storing Markdown-based notes. Your privacy is a priority as MiniNote encrypts your notes, ensuring exclusive ownership. This self-hosted solution puts you in control of your data, offering a no-frills, efficient note-taking experience. MiniNote stands out as a beacon of simplicity and security in a world filled with complicated note-taking apps, providing a digital sanctuary for your Markdown memoirs. 📝🔒✨
### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http       | 3000        | Mininote exposes port 3000 for its functionality. |
| Tcp       | -           | -             |

### Volume Mounts

| Path Mapping           | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| mininote-data:/app/data | Maps the named volume 'mininote-data' to the '/app/data' directory inside the Mininote container. This allows Mininote to access and store data in the specified named volume. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [mini n](https://hub.docker.com/r/n1try/mininote)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: mininote(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 3000                                                                                                                  |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots
![Alt Text](/img/yoy.jpg)
![Alt Text](/img/oo7.jpg)
![Alt Text](/img/ppu.jpg)

### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, notes

</details>

</span>

<Comments />