---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/ww37.jpg" alt="Alt Text" width="25%"/>
</p>
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 📓 Rustpad Deployment

# Rustpad: Where Real-Time Collaboration Meets Seamless Editing

**Rustpad** redefines collaborative text editing with its open-source marvel. Using operational transformation, edits appear instantaneously for all collaborators, creating a virtual writing party. This web-based editor eliminates complexities—share a link, and colleagues can join the editing fray hassle-free. With live preview and uninterrupted workflow, Rustpad transforms into a dynamic canvas where ideas come to life. Version control ensures easy navigation between document states. Embrace the future of real-time collaboration, bid farewell to traditional delays, and unleash your creative potential with Rustpad. ✨🖋️🤝

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 3030        | Exposes port 3030 for the rustpad app. Users can access the rustpad application through this port. |
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
| Docker Image          |  [Rustpad](https://hub.docker.com/r/ekzhang/rustpad)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: rst(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 3030                                                                                                                     |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)





**Step-by-Step Guide to RUSTPAD Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `rustpad`
2. **Application Details:**
   * Application Name: `rustpad`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `3030`
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

By following these steps, you can effortlessly deploy an Rustpad instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/r1.jpg)
![Alt Text](/img/r2.jpg)
![Alt Text](/img/r3.jpg)

### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About Rustpad image we used.**

This is the official Rustpad mage.

**Can I deploy my own media Rustpad with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Rustpad

</details>

</span>


<Comments />