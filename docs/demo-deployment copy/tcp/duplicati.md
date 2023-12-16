<p align="center">
  <img src="/img/a3w.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>

# Duplicati

**Duplicati** is a versatile backup solution that seamlessly integrates with standard protocols including FTP, SSH, and WebDAV. It extends its compatibility to well-known cloud services such as Microsoft OneDrive, Amazon Cloud Drive & S3, Google Drive, box.com, Mega, hubiC, and more. This broad support makes Duplicati a robust choice for users seeking flexibility and compatibility across various storage and service options.


### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 8200       | Exposes port 8200 for the Duplicati app. Users can access the  application through this port. |
| Tcp       | -           | -             |

### Working Directories

| Path Mapping                         | Description |
| ------------------------------------ | ----------- |
|-v /path/to/appdata/config:/config \     | - |
|-v /path/to/backups:/backups \     | - |
|-v /path/to/source:/source     | - |



### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation
|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/duplicati](https://hub.docker.com/r/linuxserver/duplicati)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: Duplicati
(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8200                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

*   **This deployment utilizes the official Duplicati Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the [linuxserver/duplicati](https://hub.docker.com/r/linuxserver/duplicati) application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the Duplicati
 application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the  Duplicati
 webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed  Duplicati
 application and gained access to its features through a seamless and user-friendly process.



**Step-by-Step Guide to Duplicati  Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `Duplicati'
`
2. **Application Details:**
   * Application Name: Duplicati

   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `8200`
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

By following these steps, you can effortlessly deploy an  Duplicati instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/o8.png)
![Alt Text](/img/o9.png)
![Alt Text](/img/o77.png)
![Alt Text](/img/o776.png)
![Alt Text](/img/o777.png)




### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About Duplicati image we used.**

This is the official Duplicatiimage.

**Can I deploy my own Duplicati image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Duplicati


</details>

</span>
