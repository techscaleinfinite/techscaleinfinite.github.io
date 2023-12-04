<p align="center">
  <img src="/img/sad.jpg" alt="Alt Text" width="25%"/>
</p>
<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>

# 🖥 Node Red Deployment

# Node-RED: Unleash Creativity in Connectivity

**Node-RED** transforms programming into an imaginative journey, allowing users to visually wire together hardware devices, APIs, and online services. The browser-based editor acts as a canvas, letting users intuitively connect nodes like digital Lego blocks to create intricate flows. With one-click deployment, your ideas spring to life instantly. For those with a penchant for JavaScript, the editor includes a rich text editor for crafting intricate functions.

Node-RED boasts a library for saving and sharing code snippets, functions, or entire flows. Behind the scenes, flows are stored as JSON, offering flexibility in import, export, and sharing. The platform goes beyond being a tool; it's a canvas for digital artistry, where creativity knows no bounds. Start painting the future of connectivity with Node-RED, where your imagination sets the limits, and innovation is the masterpiece. 🎨💡🌐
### Exposed Ports

| Port Type | Port Number | Description                        |
| --------- | ----------- | ---------------------------------- |
| http       | 1880        | Node-RED exposes port 1880.         |
| Tcp       | -           | -             |

### Volume Mounts

Node-RED uses volume mounts to manage data storage. You can set these when running the container:

| Volume            | Description                            |
| ----------------- | -------------------------------------- |
| `myNodeREDdata:/data`   | This is the path where Node-RED data is stored. |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |
</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          | [node red ](https://hub.docker.com/r/nodered/node-red/)(click me,for the dockerhub image)                                  |
| Application name      |  Eg: nodered(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |  1880                                                                                                                    |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

| If you choose Advanced option|                                                                                                                   | 
| ENV VARIABLE          | ```Give env variable.``` ```Eg:key==value```                                                                             | 
| WORKING DIR           | ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```Here use ( use the path after   " :"  ) ```shell -v myNodeREDdata:/data```                    |
| `Access`              |                                                                                                                          | 
| Public                |    (select this if you want to make it public)                                                                           |
| Private               |  (select this if you want to make it private)                                                                            |


**Step-by-Step Guide to MEDIAWIKI Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `mediawiki`
2. **Application Details:**
   * Application Name: `mediawiki`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `1880`
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

           ```
           -v myNodeREDdata:/data
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an Node-RED instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.
 
### Steps And Procedure

*   **This deployment utilizes the official node red Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the [nodered/node-red](https://hub.docker.com/r/nodered/node-red/) application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the Node-RED application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the Node-RED  webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed the Node-RED application and gained access to its features through a seamless and user-friendly process.


### Visual Snapshots

 
![Alt Text](/img/zz1.jpg)
![Alt Text](/img/kk3.jpg)
![Alt Text](/img/oo3.jpg)

### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About media** Node-RED **we used.**

This is the official Node-RED image.

**Can I deploy my own media** Node-RED **with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, node red

</details>

</span>
