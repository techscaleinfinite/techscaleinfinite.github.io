---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';


<p align="center">
  <img src="/img/vbfbn.jpg" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 🖥 Linux VPS deployment

### Linux VPS: Your Virtual Playground

A Linux Virtual Private Server (VPS) provides a personal virtual space for projects and experiments. Rapid deployment, remote accessibility, complete control, and isolation from other users make it a versatile tool. With the ability to customize and configure your environment, a Linux VPS serves as a dynamic and secure platform for various applications.
### Exposed Ports

| Port Type | Port Number | Description                                     |
| --------- | ----------- | ----------------------------------------------- |
| Http      | 80          | linux vps is exposed on port 80.                    |
| Tcp       | -           | -             |

### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |
</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### &#x20;Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [`Linux VPS`](https://hub.docker.com/r/scaleinfinite/linuxvps)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: linux(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |




```
'FROM ubuntu:20.04' Taking ubuntu:20.04 as the base image.

And updating and installing all the required packages like 'supervisor' a system that allows users to monitor and control a number of processes 'nginx' 'xz-utils' 'dbus-x11' 'dbus-x11' and important tools like 'net-tools'  for controlling the network subsystem of the Linux kernel.

Then installed the 'vim-tiny' 'firefox' 'lxde' and 'vnc' virtual network computing software is very important for this application.

And 'copying' all the required files to the image.

Exposing the port '80' to access the vps.

```

#### Deploy LinuxVPS on Scaleinfinite

**This deployment utilizes the official Vault warden Docker image. Here's a step-by-step guide to get you started:**

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)




**Step-by-Step Guide to Linux Vps Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `linux vps`
2. **Application Details:**
   * Application Name: `linux`
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

By following these steps, you can effortlessly deploy an Linux Vps instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots
![Alt Text](/img/add7.jpg)
![Alt Text](/img/sds9.jpg)



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.




### FAQ

**About Linux VPS image we used.**

This image is maintained by the scale infinite.

**Do the image secure to use?**

The image is created and verified by the scale infinite. it is a 100% secure image.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, linux vps

</details>

</span>


<Comments />