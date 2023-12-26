<p align="center">
  <img src="/img/ww33.jpg" alt="Alt Text" width="25%"/>
</p>
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 📓 Dillinger Deployment

# Dillinger: The Markdown Maestro

Meet Dillinger, the HTML5 Markdown editor that combines simplicity with powerful features. Whether you're a writer, coder, or creative mind, Dillinger has you covered. With a mobile-friendly design and cloud storage, it offers on-the-go convenience and ensures your documents are always accessible. Dillinger's clean interface, offline capability, and live preview feature provide a distraction-free writing experience. It goes beyond basic editing with AngularJS technology, Github integration, and the ability to effortlessly convert Markdown to HTML. Embrace the magic of Dillinger as your Markdown companion for an enchanting and efficient writing journey.

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 80          | Exposes port 80 for the Dilinger app. Users can access the Dilinger application through this port. |
| Tcp       | -           | -             |

### Working Directories

| Path Mapping                  | Description |
| ----------------------------- | ----------- |
| /path/to/configs:/config      | Points to the directory where Dilinger's configuration files are stored. It ensures that the necessary configuration data is accessible. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |


</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [Dillinger](https://hub.docker.com/r/linuxserver/dillinger)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: dillinger1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8080                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


**Step-by-Step Guide to Dillyinger Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: d`illyinger`
2. **Application Details:**
   * Application Name: `dillinger`
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

           ```yaml
            - /path/to/configs:/config
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an Dillinger instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots
![Alt Text](/img/w1.jpg)
![Alt Text](/img/w2.jpg)
![Alt Text](/img/w3.jpg)
![Alt Text](/img/w4.jpg)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About Dillinger image we used.**

This is the official Dillinger  mage.

**Can I deploy my own media Dillinger with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Dillinger

</details>

</span>

