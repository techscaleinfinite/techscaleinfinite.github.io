---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';




# Onlyoffice deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/rre4.jpg" alt="Alt Text" width="25%"/>
</p>

# Unleash Your Productivity with ONLYOFFICE: The Ultimate Office Suite

**ONLYOFFICE**, crafted by Ascensio System SIA, redefines document editing with a robust office suite. It features online editors for text, spreadsheets, and presentations, blending Microsoft Office and OpenDocument compatibility seamlessly. The suite offers a rich toolbox for precise formatting, calculations, and collaborative features, making teamwork a breeze. With a focus on taming complexity, ONLYOFFICE stands as your productivity ally, seamlessly integrating into web solutions. Experience a new era in office suites where creativity knows no bounds—ONLYOFFICE, your canvas, calculator, and stage for unparalleled work. 🚀📄👩‍💻
### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 80          | OnlyOffice Document Server exposes port 80 for HTTP communication. |
| Tcp       | -           | -             |

### Volume Mounts

| Path Mapping                                         | Description                                            |
| ----------------------------------------------------- | ------------------------------------------------------ |
| /app/onlyoffice/DocumentServer/logs:/var/log/onlyoffice | Maps the host directory '/app/onlyoffice/DocumentServer/logs' to the container's '/var/log/onlyoffice' directory. This facilitates access to OnlyOffice Document Server logs on the host. |
| /app/onlyoffice/DocumentServer/data:/var/www/onlyoffice/Data | Maps the host directory '/app/onlyoffice/DocumentServer/data' to the container's '/var/www/onlyoffice/Data' directory. This allows OnlyOffice Document Server to access and store data in the specified host directory. |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |
</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [ONLYOFFICE](https://hub.docker.com/r/onlyoffice/documentserver/)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: office(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                       |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots

<img src="/img/q1.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/q2.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/q3.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, ONLYOFFICE

</details>

</span>

<Comments />