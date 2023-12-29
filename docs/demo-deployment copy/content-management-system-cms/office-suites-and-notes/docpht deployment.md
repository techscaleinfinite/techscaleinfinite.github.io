---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/a33.jpg" alt="Alt Text" width="25%"/>
</p>

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 📓 DocPHT Deployment

# DocPHT: Where Documentation Meets Simplicity

DocPHT stands out as a simple yet powerful documentation tool that streamlines note-taking, user management, version control, and backups. Ideal for both solo users and teams, it offers a tailored interface for a personalized workspace. Embrace the agility of a database-free system, ensuring your documentation remains adaptable and easily accessible. DocPHT redefines the documentation experience, bringing order to chaos and encouraging collaboration. Try it out to simplify your digital journey and witness how DocPHT makes documentation smarter and more efficient.
</span>

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 8080        | Exposes port 8080 for the DocPHT app. Users can access the DocPHT application through this port. |
| Tcp       | -           | -             |

### Working Directories

| Path Mapping                     | Description |
| ---------------------------------| ----------- |
| /var/www/app/src/config:/var/www/app/src/config | Points to the directory where DocPHT's configuration files are stored. It ensures that the necessary configuration data is accessible. |
| /var/www/app/data:/var/www/app/data           | Points to the directory where DocPHT stores data. |
| /var/www/app/pages:/var/www/app/pages         | Points to the directory where DocPHT stores pages. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |



<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>


### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [DocPHT](https://hub.docker.com/r/docpht/docpht)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: doc1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8080                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



**Step-by-Step Guide to Docpht  Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: docpht
2. **Application Details:**
   * Application Name: `docpht`
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
       *

           ```
           -v /var/www/app/src/config:/var/www/app/src/config
           -v /var/www/app/data:/var/www/app/data
           -v /var/www/app/pages:/var/www/app/pages
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an DocPHT  instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/e1.jpg)
![Alt Text](/img/e2.jpg)
![Alt Text](/img/e3.jpg)
![Alt Text](/img/e4.jpg)
![Alt Text](/img/e6.jpg)

### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About DocPHT image we used.**

This is the official DocPHT mage.

**Can I deploy my own media DocPHT with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us



Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions,  DocPHT&#x20;

</details>
</span>


<Comments />