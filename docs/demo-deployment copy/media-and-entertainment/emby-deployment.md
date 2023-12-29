---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/css.jpg" alt="Alt Text" width="25%"/>
</p> 
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 📺 Emby DeployMent

# Emby: Your Personal Media Butler

**Emby** is your personal media butler, turning multimedia chaos into an organized and personalized experience. Begin your Emby adventure by installing the server software on a chosen device, the guardian of your media library. Configure Emby by specifying the locations of your media files, covering movies, TV shows, music, and more. Emby acts as a meticulous archivist, scanning directories and fetching metadata from online databases to enhance your library. With support for multiple user profiles, Emby offers a customized viewing experience for each family member. Beyond organization, Emby curates a realm of discovery and entertainment, handling technicalities so you can enjoy your media effortlessly. 🎬🎶📸

### Exposed Ports

| Port Type | Port Number | Description                                     |
| --------- | ----------- | ----------------------------------------------- |
| Http      | 8096        | "Emby" application is accessible on port 8096. |
| Tcp       | -           | -             |

### Path Configuration

Emby may use path configuration. Set these when running the container:

| Path                    | Description                           |
| ----------------------- | ------------------------------------- |
| `/path/to/tvshows`      | Path for TV shows in Emby.             |
| `/mnt/share1`           | Mount point for Emby to access data.   |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [emby](https://hub.docker.com/r/emby/embyserver)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: emby1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8096                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

                                                                     


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


**Step-by-Step Guide to emby Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: emby
2. **Application Details:**
   * Application Name: emby1
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: http
   * Port: 8096
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
       * /path/to/tvshows:/mnt/share1
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an EMBY instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/kkki.jpg)
![Alt Text](/img/kkol.jpg)

![Alt Text](/img/mm0.jpg)
![Alt Text](/img/dkfk.jpg)

![Alt Text](/img/fef.jpg)
![Alt Text](/img/m5.jpg)

![Alt Text](/img/bf.jpg)
![Alt Text](/img/lk.jpg)

### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About emby image we used.**

This is the official emby image.

**Can I deploy my own emby image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions , media, entertainment, emby

</details>

</span>

<Comments />