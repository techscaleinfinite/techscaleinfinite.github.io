---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/kk09k.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# kanboard

**Kanboard:** Free and open-source Kanban project management software. Kanboard provides a flexible and visual approach to managing projects, making it easy to organize tasks and monitor progress using the Kanban methodology.





### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 80       | Exposes port 80 for the kerberosapp. Users can access the  application through this port. |
| Tcp       | -           | -             |

### Working Directories

| Path Mapping                         | Description |
| ------------------------------------ | ----------- |
|kanboard_data: | /var/www/app/data |
|- kanboard_plugins:-| /var/www/app/plugins- |
| - kanboard_ssl:| /etc/nginx/ssl- |



### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [kanboard/kanboard](https://hub.docker.com/r/kanboard/kanboard)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: wiki(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


### Visual Snapshots

![Alt Text](/img/4rrf.png)

![Alt Text](/img/4bbf.png)
![Alt Text](/img/4ggr.png)
![Alt Text](/img/4ght.png)
![Alt Text](/img/4rg.png)

![Alt Text](/img/4rrr.png)







### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About kerberosimage we used.**

This is the official kerberosimage.

**Can I deploy my ow kerberosimage with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, kanboard

</details>

</span>



<Comments />