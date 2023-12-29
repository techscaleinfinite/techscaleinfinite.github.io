---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/dsd.jpg" alt="Alt Text" width="25%"/>
</p> 

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 📺 Jellyfin Deployment

# Jellyfin: Your Personal Media Maestro

**Jellyfin** is the open-source maestro for your personal media symphony, providing a cost-free platform to organize and stream diverse content types. Its versatility extends to movies, music, and photos, ensuring your entire collection is easily accessible. Jellyfin harmoniously streams your media to various devices, allowing you to indulge in your favorites wherever you go. With customizable server aesthetics, it creates a private media haven tailored to your style. Security is paramount with Jellyfin's self-hosted solution, ensuring your digital treasures remain private and protected. In a media-dominated world, Jellyfin stands as your personal curator, delivering a neat, accessible, and private collection curated to your preferences. 🎬🎵📷

### Exposed Ports

| Port Type | Port Number | Description                                       |
| --------- | ----------- | ------------------------------------------------- |
| Http      | 8096        | "Jellyfin" application is accessible on port 8096. |
| Tcp       | -           | -             |

### Path Configuration

Jellyfin may use path configuration. Set these when running the container:

| Path                  | Description                             |
| --------------------- | --------------------------------------- |
| `/path/to/movies`     | Path for movies in Jellyfin.             |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`Jellyfin`](https://hub.docker.com/r/jellyfin/jellyfin))👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: jell1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8096                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



**Step-by-Step Guide to jellyfin Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `jellyfin`
2. **Application Details:**
   * Application Name: `jelly`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `8096`
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
       * \-v /path/to/tvseries:/data/tvshows\
         \-v /path/to/movies:/data/movies
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy and JELLY instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots


![Alt Text](/img/l7.jpg)
![Alt Text](/img/k5k.jpg)
![Alt Text](/img/ll.jpg)
![Alt Text](/img/ooog.jpg)
![Alt Text](/img/kkkj.jpg)
![Alt Text](/img/kkn.jpg)




### FAQ

**About Jellyfin image we used.**

This is the official linuxserver/jellyfin image.

**Are there any restrictions on adding data sources ?**

you can add any data source that Jellyfin supports.

**Can i deploy older version of Jellyfin or my own modified Jellyfin image ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, media, entertainment, jellyfin

</details>

</span>


<Comments />