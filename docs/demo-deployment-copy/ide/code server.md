---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# code server Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/rf4.png" alt="Alt Text" width="25%"/>
</p> 

## Code-server - Visual Studio Code on a Remote Server

Code-server is an instance of Visual Studio Code running on a remote server, accessible through a web browser. 



### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 8443       | code server Web UI is accessible on port 8443. |
| Tcp       | -           | -             |

### Volume Mounts

code server uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to code server's configuration files.  |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/code server](https://hub.docker.com/r/linuxserver/code-server)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: code server1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     8443                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots




<img src="/img/33b.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/33f.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/33g.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/33j.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/33s.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> 













### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, code server

</details>

</span>


<Comments />