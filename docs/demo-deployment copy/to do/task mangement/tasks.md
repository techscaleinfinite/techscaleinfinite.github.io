---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/uhun.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# TASK.MD

**Tasks.md:** A self-hosted task management board utilizing file-based storage, supporting Markdown syntax. Ideal for organizing and tracking tasks, it provides a flexible and Markdown-friendly environment for efficient task management.


### Exposed Ports

| Port Type | Port Number | Description                                        |
| --------- | ----------- | -------------------------------------------------- |
| Http      | 8080          | tasks.md application is exposed on port 8080.     |

### Path Configuration

For persistent data storage, utilize the following path configuration when running the container:

| Path                        | Description                              |
| --------------------------- | ---------------------------------------- |
| `/path/to/cards/:/api/files/`     | Target path within the container.         |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |
</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [tasks.md](https://hub.docker.com/r/louislam/uptime-kuma)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: task(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8080                                                                                                                     |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



**Step-by-Step Guide to tasks.md Deployment**

1. **Docker Image Selection:**
   * Docker Image Name:`tasks.md`
2. **Application Details:**
   * Application Name: tasks.md
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `8080`
4. **Installation Options:**
   * Choose between "Default" or "Advanced" installation.
5. **Advanced Installation (Optional):**
   * If selecting "Advanced," you can customize the environment variables and working directory:
   *   **Environment Variables:**

       Environment variables are dynamic values used by a containerized application for configuration. They are defined as key-value pairs, like `API_KEY=xyz`, and provide flexibility to adjust an app's behavior without changing its code.

       * Environment Variables: Define environment variables with keys and values (e.g., `key=value`).
   *   **Working Directory:**

       The working directory is the starting point inside a container where an app's files are located. It affects relative file paths and operations. For example, if set to `/usr/src/yourAPP`, an app will reference files from there, like `/usr/src/yourAPP/data.txt`.

       * Working Directory: Set the working directory for the application (e.g., `usr/src/yourAPP`).
       * Here use ( use the path after   " :"  )
       *

           ```bash
           -v uptime-kuma:/app/data
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an  tasks.md instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/3ff.png)

![Alt Text](/img/3fff.png)
![Alt Text](/img/3gg.png)

![Alt Text](/img/3ggg.png)
![Alt Text](/img/3nn.png)
![Alt Text](/img/3tt.png)



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About tasks.md image we used.**

This is the official tasks.md  image.

**Can I deploy my own tasks.md image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, tasks.md

</details>

</span>

<Comments />