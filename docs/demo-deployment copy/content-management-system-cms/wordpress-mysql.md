---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# 🖥 WordPress MySQL

# WordPress: Crafting Websites with Ease and Security

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/fds.jpg" alt="Alt Text" width="25%"/>
</p>

**WordPress** is a dynamic, open-source content management system (CMS) powered by PHP and designed to seamlessly integrate with MySQL or MariaDB databases. As an open-source CMS, it provides an adaptable platform for website creation and management. WordPress utilizes PHP to dynamically generate web content, ensuring flexibility.

The collaboration with MySQL or MariaDB databases enhances efficiency in handling diverse website elements. Notably, WordPress prioritizes security by actively supporting HTTPS, encrypting data transmission for enhanced privacy.

In brief, WordPress empowers users with a user-friendly interface for content creation, leverages PHP for dynamic page generation, integrates seamlessly with databases, and prioritizes security through HTTPS encryption. It stands as a versatile and secure solution for crafting and managing websites. 🌐✨

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 80       | Exposes port 80 for the wordpress app. Users can access the wordpress application through this port. |
| Tcp       | -           | -             |

### Working Directories

| Path Mapping                         | Description |
| ------------------------------------ | ----------- |
|-       | - |


### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation&#x20;


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`Wpmysql`](https://hub.docker.com/\_/wordpress)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: wordpress(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
||  Http:                |  80                                                                                                                   |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |
                                                                       



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)

&#x20;**Docker image of this application consists of following layers :**

```
'FROM ubuntu:14.04' Taking ubuntu:14.04 as the base image.

And updating and installing all the required softwares like 'mysql-server' 'mysql-client' 'nginx' for better performance 'php5-fpm' 'php5-mysql'.

And installing all the required softwares for Wordpress 'php5-curl' 'php5-gd' 'php5-intl'

Done configurations in required files like adding nginx keepalive_timeout and wordpress upload and post max file size.

Exposing 3306 and 80 ports on the container. 
```

#### Deploy Wordpress Mysql on Scaleinfinite

**This deployment utilizes the official  wordpress Docker image. Here's a step-by-step guide to get you started:**

1. Begin by navigating to the "Create Apps" page and use the search bar to find the mscaleinfinite/wpmysql application.
2. Click on the "Install" button to initiate the installation process.
3. Fill in all the required fields with the necessary information.
4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
5. After making your selections, press the "Install" button to proceed.
6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
7. Copy the Hostname of the wordpress application without the NodePort and paste it into your preferred browser's address bar.
8. Voilà! You're now able to access the wordpress webpage and explore its content.



### Visual snapshots

<img src="/img/zz3.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/ddq.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/rr5.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/cccf.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />




### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, wordpress

</details>

</span>

<Comments />