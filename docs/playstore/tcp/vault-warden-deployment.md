---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';






# Vault Warden Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/009k.jpg" alt="Alt Text" width="25%"/>
</p> 

Vaultwarden, formerly Bitwarden\_RS, is an open-source, self-hosted password manager providing users with control over their password vault. With a focus on security, it employs robust encryption, supports 2FA, and ensures access from any device. Browser extensions ease password management, and its open-source nature fosters community collaboration.

### Exposed Ports

| Port Type | Port Number | Description                                        |
| --------- | ----------- | -------------------------------------------------- |
| Http      | 80          | Vault Warden is exposed on port 80.                |
| Tcp       | -           | -             |
### Volume Configuration

When running the container, you may mount the data directory from the host using the following volume configurations:

| Volume         | Description                             |
| -------------- | --------------------------------------- |
| `/vw-data/:/data/` | Mounts the data directory from the host. |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [vault varden](https://hub.docker.com/r/vaultwarden/server)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: vault warden (you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots

<img src="/img/ewf.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/dcd4.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/sd4.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/cc7.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ
For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, vault warden

</details>

</span>


<Comments />