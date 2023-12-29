---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/dqq.jpg" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# ☕ Gitea

**Gitea: Your Coding Companion**

*Gitea*, the self-hosted platform, is your ultimate software development buddy. It provides Git hosting, seamless code review, and team collaboration under one roof. Gitea simplifies package management, automates CI/CD processes, and ensures cross-platform compatibility. With a user-friendly web interface, customization options, and robust security features, it's a tech wizard for developers. Open-source and community-driven, Gitea offers a backstage pass to efficient and collaborative software development.

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 80       | Exposes port 80 for the gitea app. Users can access the  application through this port. |
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

### Installation
|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [Gitea](https://hub.docker.com/r/gitea/gitea)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: gitea(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 3000                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



**Step-by-Step Guide to gitea Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `Gitea`
2. **Application Details:**
   * Application Name: Gitea
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `3000`
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
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an  GITEA instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/gg432.jpg)
![Alt Text](/img/iir.jpg)
![Alt Text](/img/oii.jpg)
![Alt Text](/img/ki.jpg)
![Alt Text](/img/jji.jpg)
![Alt Text](/img/ii.jpg)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About GITEA image we used.**

This is the official GITEA  image.

**Can I deploy my own GITEA image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Gitea

</details>

</span>

<Comments />