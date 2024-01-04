---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/jnhnn.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# taskwarrior-web

**Taskwarrior-Web Container:** Run the Taskwarrior-Web UI synchronized with a Taskwarrior server. This container enables seamless integration, allowing users to manage tasks using the Taskwarrior-Web interface in sync with a Taskwarrior server.



### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 5678       | Exposes port 5678 for the taskwarrior-webapp. Users can access the  application through this port. |
| Tcp       | -           | -             |

### Working Directories

| Path Mapping                         | Description |
| ------------------------------------ | ----------- |
|:/root/.task |  |
||  |
| :|  |



### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|TASKD_SERVER= | trident.hav0k.ru:53589|
TASKD_CREDENTIALS=| AlphaV/Alexey Vildyaev/3e382537-d7d9-4677-8311-3cfd1047623f|


</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [jeckel/taskwarrior-web](https://hub.docker.com/r/jeckel/taskwarrior-web)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: wiki(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 5678                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)

### Visual Snapshots

![Alt Text](/img/50.png)

![Alt Text](/img/45.png)

![Alt Text](/img/46.png)

![Alt Text](/img/47.png)

![Alt Text](/img/48.png)

![Alt Text](/img/49.png)










### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About taskwarrior-webimage we used.**

This is the official taskwarrior-webimage.

**Can I deploy my ow taskwarrior-webimage with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, taskwarrior-web

</details>

</span>



<Comments />