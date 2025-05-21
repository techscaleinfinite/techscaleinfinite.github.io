---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# PHPmyADMIN Deployment

### What's  php myadmin?
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/re2.jpg" alt="Alt Text" width="25%"/>
</p> 

**phpMyAdmin** serves as a user-friendly web-based interface for managing MySQL and MariaDB databases. Accessed through a web browser, it facilitates tasks like database selection, navigation, table management, and data manipulation. With authentication, it provides a secure gateway to your databases, making it akin to having a trained librarian guiding you through your digital library.

### Exposed Ports

| Port Type | Port Number | Description                              |
| --------- | ----------- | ---------------------------------------- |
| Http      | 80          | phpMyAdmin is accessible on port 80.     |
| Tcp       | -           | -             |

### Volume Mounts

phpMyAdmin uses volume mounts to manage configuration. You can set these when running the container:

| Volume                                        | Description                                              |
| --------------------------------------------- | -------------------------------------------------------- |
| `/some/local/directory/config.user.inc.php`   | Path to the custom phpMyAdmin configuration file.        |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation



|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`phpmyadmin`](https://hub.docker.com/\_/phpmyadmin)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: php1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |    80                                                                                                                      |
|  Tcp:                 |                                                                                                                    | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)




### Visual Snapshots

<img src="/img/ssw2.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/ee32.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />





### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ
For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, database, php

</details>

</span>

<Comments />