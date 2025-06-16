---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';




# NocoDB Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/e4e.png" alt="Alt Text" width="25%"/>
</p> 


**NocoDB:** The Open Source Airtable Alternative. Transform MySQL, PostgreSQL, SQL Server, SQLite, and MariaDB databases into smart spreadsheets. NocoDB provides a user-friendly interface for managing data, offering an open-source solution akin to Airtable.


### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 8080        | nocodb exposes port 8080 for HTTP.     |
| Tcp       | -           | -             |

### Volume Mounts

nocodb uses volume mounts to manage data storage. You can set these when running the container:

| Volume      | Description                                    |
| ----------- | ---------------------------------------------- |
| `/usr/app/data/` | Path to store nocodb configuration data.    |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation



|                       |                                                                                                                          |
|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [nocodb/nocodb](https://hub.docker.com/r/nocodb/nocodb)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: cou1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |  8080                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |
                                                                  


### Steps And Procedure&#x20;

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots


<img src="/img/vv.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/vbb.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/vbbg.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/vdx.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/vfd.png" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/vvc.png" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/vvg.png" alt="Alt Text" style={{ maxWidth: '350px' }} />





### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, database, couch base

</details>

</span>

<Comments />