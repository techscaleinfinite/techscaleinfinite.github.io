<p align="center">
  <img src="/img/4443.png" alt="Alt Text" width="25%"/>
</p> 

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>


# 🎵 sickgear Deployment

## SickGear - Your TV Show and Anime Manager

**SickGear** is your go-to solution for managing TV shows and Anime. It excels at detecting new episodes, seamlessly integrating with downloader apps, and offering a range of additional features. Whether you're a TV show enthusiast or an Anime lover, SickGear simplifies and enhances your media management experience.


### Exposed Ports

| Port Type | Port Number | Description                                   |
| --------- | ----------- | --------------------------------------------- |
| Http      | 8081        | "sickgear" application is accessible on port 8081. |
| Tcp       | -           | -             |

### Path Configuration

"sickgear" may use path configuration. Set these when running the container:

| Path                          | Description                         |
| ----------------------------- | ----------------------------------- |
| ` /path/to/data:/tv`        | Path for sickgear assets.            |
| `/path/to/data:/downloads`                     | Internal path used by download.      |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`linuxserver/sickgear`](https://hub.docker.com/r/linuxserver/sickgear)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: pod1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8081                                                                                                                     |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



**Step-by-Step Guide to sickgear Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `sickgear`
2. **Application Details:**
   * Application Name: `sickgear`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `8081`
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

           ```sh
           /host/path/to/assets:/assets
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an  sickgear instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/y4.png)
![Alt Text](/img/y44.png)
![Alt Text](/img/y433.png)
![Alt Text](/img/y442.png)
![Alt Text](/img/y4424.png)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About sickgear image we used.**

This is the official sickgear image.

**Can I deploy my own sickgear image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going.

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, , media, entertainment

</details>

</span>
