---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/sdfe.jpg" alt="Alt Text" width="25%"/>
</p>
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 🎨 DRAW.IO Deployment

# Draw.io: Unleash Your Visual Creativity

Draw.io is more than a diagramming tool; it's a cross-platform marvel that welcomes users into a world of visual versatility and collaboration. With a user-friendly interface, it adapts to both professionals and casual users, offering customization options to bring ideas to life. From wireframes to UML diagrams, Draw.io's toolbox empowers users to create captivating visuals effortlessly. Its intuitive canvas, drag-and-drop magic, and connection wizardry make complex diagramming simple, while features like cloud convenience and exporting excellence ensure seamless collaboration and sharing. Dive into Draw.io, where creativity knows no limits and ideas find their visual form.
Draw.io simplifies complex diagramming with an intuitive canvas, drag-and-drop magic, and a versatile toolbox. From connection wizardry to collaboration harmony, it streamlines the process of turning ideas into captivating visuals. With cloud convenience, exporting excellence, and customization galore, Draw.io empowers users to create unique, shareable diagrams effortlessly. Whether mapping business processes or designing dream homes, Draw.io brings simplicity to complexity, making the creation of stunning visuals a joy. Dive into Draw.io today and experience a world where creativity knows no bounds.

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 8080        | Exposes port 8080 for the Draw.io app. Users can access the Draw.io application through this port. |
| Tcp       | -           | -             |

### Volume Mounts

| Path Mapping                                      | Description |
| --------------------------------------------------| ----------- |
| /opt/docker/drawiodata/letsencrypt-log:/var/log/letsencrypt/ | Points to the directory where Draw.io logs related to LetsEncrypt are stored. |
| /opt/docker/drawiodata/letsencrypt-etc:/etc/letsencrypt/    | Points to the directory where Draw.io stores LetsEncrypt configuration files. |
| /opt/docker/drawiodata/letsencrypt-lib:/var/lib/letsencrypt | Points to the directory where Draw.io stores LetsEncrypt library files. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |



</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>



### Installation

|  draw.io              |                                                                                                                          | 
| --------------------- | ------                                                                                                                   |            
| Application name      |  Eg: drawio(you can put any name)                                                                                    | 
| Resource Allocation   |  0-100%( % of your allocated resources (CPU, RAM) will be used for this application.)                                    | 
| `Exposed Ports`       |                                                                                                                          | 
|  Http:                | 8080                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |
|                       |                                                                                                                          |


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [draw.io   ](https://hub.docker.com/r/jgraph/drawio)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: drawio1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8080                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

| ENV VARIABLE          | ```Give env variable.``` ```Eg:key==value```                                                                             | 
| WORKING DIR           | ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```Here use ( use the path after   " :"  )   ```shell -v "/opt/docker/drawiodata/letsencrypt-log:/var/log/letsencrypt/" -v "/opt/docker/drawiodata/letsencrypt-etc:/etc/letsencrypt/"-v "/opt/docker/drawiodata/letsencrypt-lib:/var/lib/letsencrypt"```                    |
| `Access`              |                                                                                                                          | 
| Public                |    (select this if you want to make it public)                                                                           |
| Private               |  (select this if you want to make it private)                                                                            |

### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


**Step-by-Step Guide to Draw.io  Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: draw.io
2. **Application Details:**
   * Application Name: `draw.io`
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

           ```bash
           -v "/opt/docker/drawiodata/letsencrypt-log:/var/log/letsencrypt/" 
           -v "/opt/docker/drawiodata/letsencrypt-etc:/etc/letsencrypt/"
            -v "/opt/docker/drawiodata/letsencrypt-lib:/var/lib/letsencrypt
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an Draw.io   instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots


![Alt Text](/img/r4.jpg)
![Alt Text](/img/r5.jpg)
![Alt Text](/img/r6.jpg)



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About** Draw.io  **image we used.**

This is the official Draw.io  mage.

**Can I deploy my own media** Draw.io **with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions,Draw.io &#x20;

</details>
</span>

<Comments />