---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';




# Drupal deployment
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/sdsu.jpg" alt="Alt Text" width="25%"/>
</p>

# Drupal: Your Friendly Website Companion

Drupal is your open-source, PHP-powered friend for building and managing websites. With a modular architecture, it's like having building blocks to create a tailored website. Themes and modules allow easy customization, giving your site a unique look and functionality. The Drupal community, a supportive group of developers and users, constantly enhances the platform. Content creation is a breeze with Drupal's user-friendly interface, and its PHP engine ensures dynamic and real-time website interactions. In summary, Drupal is more than a website tool; it's a powerful platform with a friendly community, making web content management flexible and enjoyable.

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 80          | Exposes port 80 for the Drupal app. Users can access the Drupal application through this port. |

### Volume Mounts

| Path Mapping                                    | Description |
| ----------------------------------------------- | ----------- |
| /path/on/host/modules:/var/www/html/modules     | Maps the host directory for Drupal modules to the corresponding directory inside the container. |
| /path/on/host/profiles:/var/www/html/profiles   | Maps the host directory for Drupal profiles to the corresponding directory inside the container. |
| /path/on/host/sites:/var/www/html/sites         | Maps the host directory for Drupal sites to the corresponding directory inside the container. |
| /path/on/host/themes:/var/www/html/themes       | Maps the host directory for Drupal themes to the corresponding directory inside the container. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>



### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`drupal`](https://hub.docker.com/\_/drupal)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: OWNCLOUD1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                     |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

| If you choose Advanced option|                                                                                                                   | 

| ENV VARIABLE          | ```Give env variable.``` ```Eg:key==value```                                                                             | 
| WORKING DIR           | ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```Here use ( use the path after   " :"  )   ```shell -v /path/on/host/modules:/var/www/html/modules \-v /path/on/host/profiles:/var/www/html/profiles \v-v /path/on/host/sites:/var/www/html/sites \ -v /path/on/host/themes:/var/www/html/themes \```                    |
| `Access`              |                                                                                                                          | 
| Public                |    (select this if you want to make it public)                                                                           |
| Private               |  (select this if you want to make it private)                                                                            |


### &#x20;Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots


<img src="/img/g3.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/t5.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/d343.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/gg.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions&#x20;

</details>

</span>



<Comments />