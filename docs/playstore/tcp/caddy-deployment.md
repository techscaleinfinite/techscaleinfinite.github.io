---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# Caddy Deployment
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/ssc.jpg" alt="Alt Text" width="25%"/>
</p> 


**Caddy: Simplifying Web Servers**

*Caddy*, the modern web server, excels in simplicity, efficiency, and security. Offering a user-friendly experience, it streamlines configuration with its human-readable Caddyfile. With automatic HTTPS setup, Caddy effortlessly summons SSL/TLS certificates from Let's Encrypt, ensuring secure content delivery. As a master of reverse proxy, it expertly directs requests for hosting multiple services, while graceful load balancing guarantees high availability. Caddy's prowess extends to URL tweaking, SEO-friendly redirects, and efficient handling of multiple connections, making it a speed demon in web server technology. Its feature ensemble, including plugins and middleware, contributes to a harmonious, efficient, and secure web server experience.

### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 80          | Caddy application is exposed on port 80.  |
| Tcp       | -           | -             |

### Path Configuration

When running the container, the default Caddy web server may serve content from the following path:

| Path                            | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| `/usr/share/caddy/index.html`   | Default path for serving Caddy web server pages. |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [caddy](https://hub.docker.com/\_/caddy)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: cadd(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                     |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)

### Visual Snapshots
<img src="/img/ve3.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/fef3.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)



























### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, caddy

</details>

</span>



<Comments />