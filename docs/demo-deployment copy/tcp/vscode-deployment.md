---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# ⚙️ Vscode Deployment
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/fsd.jpg" alt="Alt Text" width="25%"/>
</p> 


VS Code, an open-source gem, is a cross-platform code editor delivering speed and versatility. It supports various languages through extensions, offers a seamless integrated development environment (IDE) experience, and boasts features like integrated terminal, Git support, and live collaboration. Highly customizable, VS Code adapts to individual preferences, making it an inclusive and user-friendly coding tool.

### Exposed Ports

| Port Type | Port Number | Description                                        |
| --------- | ----------- | -------------------------------------------------- |
| Http      | 3000        | Visual Studio Code Server is exposed on port 3000. |
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
| Docker Image          |   [VSCODE](https://hub.docker.com/r/linuxserver/openvscode-server)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: vs1 (you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |  3000                                                                                                                   |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


### Visual Snapshots

<img src="/img/jp.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> 
<img src="/img/tty.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> 
<img src="/img/uu7.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, vscode

</details>

</span>


<Comments />