---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/vvc.png" alt="Alt Text" width="25%"/>
</p>

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 📓 mininote deployment

# MiniNote: Your Secret Sanctuary for Markdown Memoirs

**MiniNote** is a self-hosted, privacy-focused gem for Markdown note-taking. It combines simplicity with security, featuring an uncluttered interface for crafting and storing Markdown-based notes. Your privacy is a priority as MiniNote encrypts your notes, ensuring exclusive ownership. This self-hosted solution puts you in control of your data, offering a no-frills, efficient note-taking experience. MiniNote stands out as a beacon of simplicity and security in a world filled with complicated note-taking apps, providing a digital sanctuary for your Markdown memoirs. 📝🔒✨
### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http       | 3000        | Mininote exposes port 3000 for its functionality. |
| Tcp       | -           | -             |

### Volume Mounts

| Path Mapping           | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| mininote-data:/app/data | Maps the named volume 'mininote-data' to the '/app/data' directory inside the Mininote container. This allows Mininote to access and store data in the specified named volume. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [mini n](https://hub.docker.com/r/n1try/mininote)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: mininote(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 3000                                                                                                                  |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)




**Step-by-Step Guide to mininote Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `mininote`
2. **Application Details:**
   * Application Name: `mininote`
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
       *

           ```bash
           -v mininote-data:/app/data
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an  MiniNote instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/yoy.jpg)
![Alt Text](/img/oo7.jpg)
![Alt Text](/img/ppu.jpg)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About** MiniNote **image we used.**

This is the official  MiniNote mage.

**Can I deploy my own media** MiniNote **with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, notes

</details>

</span>

<Comments />