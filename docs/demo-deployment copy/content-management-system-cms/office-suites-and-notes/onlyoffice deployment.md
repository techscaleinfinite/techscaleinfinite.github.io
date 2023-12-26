

<p align="center">
  <img src="/img/rre4.jpg" alt="Alt Text" width="25%"/>
</p>
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 📓 Onlyoffice deployment


# Unleash Your Productivity with ONLYOFFICE: The Ultimate Office Suite

**ONLYOFFICE**, crafted by Ascensio System SIA, redefines document editing with a robust office suite. It features online editors for text, spreadsheets, and presentations, blending Microsoft Office and OpenDocument compatibility seamlessly. The suite offers a rich toolbox for precise formatting, calculations, and collaborative features, making teamwork a breeze. With a focus on taming complexity, ONLYOFFICE stands as your productivity ally, seamlessly integrating into web solutions. Experience a new era in office suites where creativity knows no bounds—ONLYOFFICE, your canvas, calculator, and stage for unparalleled work. 🚀📄👩‍💻
### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 80          | OnlyOffice Document Server exposes port 80 for HTTP communication. |
| Tcp       | -           | -             |

### Volume Mounts

| Path Mapping                                         | Description                                            |
| ----------------------------------------------------- | ------------------------------------------------------ |
| /app/onlyoffice/DocumentServer/logs:/var/log/onlyoffice | Maps the host directory '/app/onlyoffice/DocumentServer/logs' to the container's '/var/log/onlyoffice' directory. This facilitates access to OnlyOffice Document Server logs on the host. |
| /app/onlyoffice/DocumentServer/data:/var/www/onlyoffice/Data | Maps the host directory '/app/onlyoffice/DocumentServer/data' to the container's '/var/www/onlyoffice/Data' directory. This allows OnlyOffice Document Server to access and store data in the specified host directory. |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |
</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [ONLYOFFICE](https://hub.docker.com/r/onlyoffice/documentserver/)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: office(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                       |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)





**Step-by-Step Guide to ONLYOFFICE Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `ONLYOFFICE`
2. **Application Details:**
   * Application Name: `ONLYOFFICE`
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
           -v /app/onlyoffice/DocumentServer/logs:/var/log/onlyoffice  \
               -v /app/onlyoffice/DocumentServer/data:/var/www/onlyoffice/Data
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an ONLYOFFICE instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/q1.jpg)
![Alt Text](/img/q2.jpg)
![Alt Text](/img/q3.jpg)

### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About ONLYOFFICE image we used.**

This is the official ONLYOFFICE mage.

**Can I deploy my own media ONLYOFFICE with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, ONLYOFFICE

</details>

</span>