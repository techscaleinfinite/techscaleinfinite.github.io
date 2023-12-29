---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/t5t5.png" alt="Alt Text" width="25%"/>
</p>
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 📓 Wbo Deployment

## WBO - Online Collaborative Whiteboard

**WBO** is an innovative online collaborative whiteboard enabling multiple users to draw simultaneously on a shared virtual board. With real-time updates for all connected users, the board's state is persistently stored. Its versatile application spans various purposes, such as art, entertainment, design, and teaching, offering a dynamic and interactive platform for collaborative creativity.

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 80        | Exposes port 80 for the Wbo app. Users can access the Wbo application through this port. |
| Tcp       | -           | -             |

### Working Directories

| Path Mapping                         | Description |
| ------------------------------------ | ----------- |
|/opt/app/server-data     | - |


### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [lovasoa/wbo](https://hub.docker.com/r/lovasoa/wbo)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: wbo(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                     |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


**Step-by-Step Guide to Wbo Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `Wbo`
2. **Application Details:**
   * Application Name: `Wbo`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `80`
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

By following these steps, you can effortlessly deploy an Wbo instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/k7.png)
![Alt Text](/img/k8.png)
![Alt Text](/img/k77.png)
![Alt Text](/img/k88.png)
![Alt Text](/img/k776.png)
![Alt Text](/img/k8886.png)



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About Wbo image we used.**

This is the official Wbo mage.

**Can I deploy my own media Wbo with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Wbo

</details>

</span>


<Comments />