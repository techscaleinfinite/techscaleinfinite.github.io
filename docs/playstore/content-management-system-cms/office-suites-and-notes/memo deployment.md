---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';




# memo Deployment
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>


<p align="center">
  <img src="/img/vf.jpg" alt="Alt Text" width="25%"/>
</p>


# memos: Your Personal Memo Assistant

**memos** is a privacy-focused memo application that offers simplicity without compromising on features. It prioritizes data privacy by securely storing information in an SQLite database, embracing plain text with Markdown for easy formatting. Built with Go, React.js, and SQLite, memos ensures a lean yet powerful experience. Customizable to your preferences, it's completely open source, allowing transparency and community collaboration. Best of all, memos is free forever, making it your go-to solution for jotting down ideas, organizing thoughts, and capturing inspiration with peace of mind. 🗒️🔐✍️

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Tcp       | 5230        | Memo exposes port 5230 for its functionality. |
| http       | -           | -             |
### Volume Mounts

| Path Mapping       | Description                                     |
| ------------------- | ----------------------------------------------- |
| ./memos/:/var/optmemos | Maps the host directory './memos/' to the '/var/optmemos' directory inside the Memo container. This allows Memo to access and store data in the specified host directory. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [memos](https://hub.docker.com/r/elestio/memos)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: memo1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 5230                                                                                                                  |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  | 


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


### Visual Snapshots


<img src="/img/oo4.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/eee55.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/kk2.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/ff5.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />




### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, memo

</details>


</span>

<Comments />