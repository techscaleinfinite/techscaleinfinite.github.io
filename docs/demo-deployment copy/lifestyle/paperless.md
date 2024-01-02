---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/bfd.png" alt="Alt Text" width="25%"/>
</p> 


# Paperless-ng - Document Indexing and Management

Paperless-ng, developed by Daniel Quinn and contributors, is an application designed for indexing scanned documents. This tool enables users to efficiently search for documents and store metadata alongside their scanned files. With Paperless-ng, you can streamline the organization and retrieval of your documents, making it a valuable asset for efficient document management.



 

|  **Exposed Ports:**    | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Http port          |       8000 is exposed to facilitate web-based communication for Paperless-ng. Users can access the Paperless-ng application through this port.                              |
| Tcp port      |              -                                                                     | 

|  **Working directory:** | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| /path/to/Paperless-ng/config:/config         |  This is the path  where Paperless-ng's configuration files are stored. It ensures that the necessary configuration data is accessible.                                  |



|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |


</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`linuxserver/paperless-ng`](https://hub.docker.com/r/linuxserver/paperless-ng)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: bzzz1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8000                                                                                                                       |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

                                                                        


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



**Step-by-Step Guide to Paperless-ng Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `Paperless-ng`
2. **Application Details:**
   * Application Name: `paper1`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `8000`
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
            - /path/to/Paperless-ng/config:/config
            
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an Paperless-ng instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/5b.png)
![Alt Text](/img/5f.png)
![Alt Text](/img/5jk.png)
![Alt Text](/img/5n.png)
![Alt Text](/img/5v.png)



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About Paperless-ng image we used.**

This is the official Paperless-ng image.

**Can I deploy my own Paperless-ng image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going.

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions , media, entertainment

</details>

</span>

<Comments />
