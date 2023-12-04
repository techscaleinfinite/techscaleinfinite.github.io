<p align="center">
  <img src="/img/ssc.jpg" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>

# 🔒 Caddy Deployment

### What's is caddy?

**Caddy: Simplifying Web Servers**

*Caddy*, the modern web server, excels in simplicity, efficiency, and security. Offering a user-friendly experience, it streamlines configuration with its human-readable Caddyfile. With automatic HTTPS setup, Caddy effortlessly summons SSL/TLS certificates from Let's Encrypt, ensuring secure content delivery. As a master of reverse proxy, it expertly directs requests for hosting multiple services, while graceful load balancing guarantees high availability. Caddy's prowess extends to URL tweaking, SEO-friendly redirects, and efficient handling of multiple connections, making it a speed demon in web server technology. Its feature ensemble, including plugins and middleware, contributes to a harmonious, efficient, and secure web server experience.

### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 80          | Caddy application is exposed on port 80.  |
| Tcp       | -           | -             |

### Path Configuration

When running the container, the default Caddy web server may serve content from the following path:

| Path                            | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| `/usr/share/caddy/index.html`   | Default path for serving Caddy web server pages. |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [caddy](https://hub.docker.com/\_/caddy)👈(click me,for the dockerhub image)                       |
| Application name      |  Eg: cadd(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                     |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |


### Steps And Procedure

&#x20; **This deployment utilizes the official caddy image. Here's a step-by-step guide to get you started:**

1. Begin by navigating to the "Create Apps" page and use the search bar to find the cadd application.
2. Click on the "Install" button to initiate the installation process.
3. Fill in all the required fields with the necessary information.
4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
5. After making your selections, press the "Install" button to proceed.
6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
7. Copy the Hostname of the Caddy application without the NodePort and paste it into your preferred browser's address bar.
8. Voilà! You're now able to access the  Caddy webpage and explore its content.



**Step-by-Step Guide to caddy Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: caddy
2. **Application Details:**
   * Application Name: caddy
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: http
   * Port: 80
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

           ```console
           /usr/share/caddy/index.html
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an HOMER instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots
![Alt Text](/img/ve3.jpg)
![Alt Text](/img/fef3.jpg)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About caddy image we used.**

This is the official caddy image.

**Can I deploy my own caddy image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, caddy

</details>

</span>


