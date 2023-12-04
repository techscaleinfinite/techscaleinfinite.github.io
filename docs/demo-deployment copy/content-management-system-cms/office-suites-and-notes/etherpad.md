
<p align="center">
  <img src="/img/sfb.jpg" alt="Alt Text" width="25%"/>
</p>
<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>


# 📓 Etherpad

# Etherpad: Collaborative Writing Symphony

Etherpad is not just a text editor; it's a virtuoso of collaborative writing. With features like rich editing, minimalist interface, dark mode, and seamless integration of visuals, it transforms your writing into a collaborative masterpiece. The real-time collaboration, version history, time slider, and group chat create a harmonious environment for multiple authors. Etherpad respects privacy with access control and self-hosting options, while its customization and exporting features allow your creativity to take center stage. It's an open-source symphony, where ideas unite, and documents come to life in a world of collaborative creativity.

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 9001        | Exposes port 9001 for the Etherpad application. Users can access Etherpad through this port. |

### Volume Mounts

| Path Mapping                                     | Description |
| ------------------------------------------------ | ----------- |
| application/lib/etherpad-lite/var/dirty.db       | Maps the host directory for Etherpad's dirty.db file to the corresponding directory inside the container. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |



</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [ethepad](https://hub.docker.com/r/etherpad/etherpad)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: etherpad1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 9001                                                                                                                    |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |


### Steps And Procedure

*   **This deployment utilizes the official etherpad Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the [etherpad/etherpad](https://hub.docker.com/r/etherpad/etherpad) application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the ETHERPAD application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the  ETHERPAD webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed the ETHERPAD application and gained access to its features through a seamless and user-friendly process.


**Step-by-Step Guide to ETHERPAD Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `ETHERPAD`
2. **Application Details:**
   * Application Name: `ETHERPAD`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `9001`
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
       * application/lib/etherpad-lite/var/dirty.db
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an ETHERPAD instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/ee.jpg)
![Alt Text](/img/ee3.jpg)
![Alt Text](/img/rr.jpg)

![Alt Text](/img/ooyy.jpg)





### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About ETHERPAD image we used.**

This is the official ETHERPAD mage.

**Can I deploy my own media ETHERPAD with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions&#x20;

</details>

</span>


