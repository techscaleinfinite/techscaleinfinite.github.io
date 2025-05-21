---
draft: false
id: couch-base-deployment
title: Couchbase Deployment
slug: /demo-deployment-copy/database/couch-base-deployment
canonical: https://docs.scaleinfinite.fr/demo-deployment-copy/database/couch-base-deployment/
---
import Comments from '/src/components/HomepageFeatures/Comment';




# Couch Base Deployment

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/dd31.png" alt="Alt Text" width="25%"/>
</p> 

**Couchbase** is an award-winning distributed NoSQL cloud database renowned for its versatility, speed, and scalability. It supports a JSON-based data format, providing adaptability and accommodating various data technologies within a single architecture. With features like AI-powered coding assistance (Capella iQ), a memory-first architecture, robust scalability, and SQL++ for versatile querying, Couchbase offers a powerful solution for modern data management, seamlessly bridging the gap between NoSQL and SQL databases.

### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 8091        | Couchbase exposes port 8091 for HTTP.     |
| Tcp       | -           | -             |

### Volume Mounts

Couchbase uses volume mounts to manage data storage. You can set these when running the container:

| Volume      | Description                                    |
| ----------- | ---------------------------------------------- |
| `/couchbase` | Path to store Couchbase configuration data.    |


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
| Docker Image          |  [couch base](https://hub.docker.com/\_/couchbase)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: cou1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |  8091                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |
                                                                  


### Steps And Procedure&#x20;

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


### Visual Snapshots

<img src="/img/1111.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/2121.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/23233.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/23231.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/44.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/gg4.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/d221.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/dd211.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/dede.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />


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