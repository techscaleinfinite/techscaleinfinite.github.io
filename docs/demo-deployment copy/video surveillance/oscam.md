<p align="center">
  <img src="/img/44.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>

# 💻 oscam Deployment


## Oscam - Open Source Conditional Access Module

**Oscam** is an open-source Conditional Access Module software designed for descrambling DVB transmissions using smart cards. It provides a flexible and efficient solution for decrypting digital TV broadcasts, making it a popular choice for users seeking control and customization in their viewing experience.



### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 8888      | Exposes port 8888for the oscamapp. Users can access the  application through this port. |
| Tcp       | -           | -             |

### Working Directories

| Path Mapping                         | Description |
| ------------------------------------ | ----------- |
|-| - |


### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/oscam](https://hub.docker.com/r/linuxserver/oscam) 👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: wiki(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8888                                                                                                                     |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

*   **This deployment utilizes the official farm os  Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the [linuxserver/oscam](https://hub.docker.com/r/linuxserver/oscam)  application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the oscamapplication without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the oscamwebpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed oscamapplication and gained access to its features through a seamless and user-friendly process.



**Step-by-Step Guide to oscam Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `otterwiki`
2. **Application Details:**
   * Application Name: `otterwiki`
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

By following these steps, you can effortlessly deploy an oscaminstance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/d22.png)
![Alt Text](/img/d23.png)
![Alt Text](/img/d231.png)

![Alt Text](/img/d2322.png)
![Alt Text](/img/d22221.png)





### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About oscamimage we used.**

This is the official oscamimage.

**Can I deploy my ow oscamimage with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, otterwiki

</details>

</span>


