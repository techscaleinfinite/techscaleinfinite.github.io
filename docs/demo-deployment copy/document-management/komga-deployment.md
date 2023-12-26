
<p align="center">
  <img src="/img/r66.png" alt="Alt Text" width="25%"/>
</p> 

<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>

# 📙 Komga Deployment

### Komga: Your Comics and Mangas Server

**Komga** is a free and open-source comics/mangas server with a responsive web UI for easy access. It offers features like metadata management, collections, and read lists, ensuring an organized reading experience. With a REST API, multi-user support, and seamless imports, Komga transforms your comics collection into a delightful and immersive adventure.
### Exposed Ports

| Port Type | Port Number | Description                       |
| --------- | ----------- | --------------------------------- |
| Http      | 25600       | Komga is accessible on port 25600.|
| Tcp       | -           | -             |

### Volume Mounts

Komga uses volume mounts to manage data. You can set these when running the container:

| Volume                    | Description                   |
| ------------------------- | ----------------------------- |
| `/path/to/data:/config`   | Path to Komga configuration.  |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [komga ](https://hub.docker.com/r/gotson/komga) 👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: kav1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     5000                                                                                                                     |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



**Step-by-Step Guide to komga Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `komga`
2. **Application Details:**
   * Application Name: `komga`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: 25600
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

By following these steps, you can effortlessly deploy an  Komga instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots
![Alt Text](/img/tt6.jpg)
![Alt Text](/img/gt6.jpg)
![Alt Text](/img/ht6.jpg)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About** Komga **image we used.**

This is the officia Komga image.

**Can I deploy my own** Komga **image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Komga

</details>
</span>

