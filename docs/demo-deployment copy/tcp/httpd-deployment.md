

# 🖥 HTTPd Deployment

### What's  httpd?

**The Apache HTTP Server (HTTPD): Empowering the Web**

_Apache HTTP Server, commonly known as HTTPD, is more than just a web server; it's the cornerstone of web hosting. Let's unravel the essence of this legendary software:_

1. **Web Serving Excellence:** At its core, HTTPD excels at serving web content. It seamlessly delivers HTML, images, CSS, JavaScript, and more to users' browsers via HTTP and HTTPS protocols.
2. **Open Source Prowess:** HTTPD is a proud open-source champion. Its source code is a gift to the world, nurturing a community of developers and fostering innovation.
3. **Platform Agnostic:** HTTPD dances gracefully across diverse platforms. It harmonizes with Unix-based systems like Linux and BSD, as well as Windows, offering versatile web hosting solutions.
4. **Modular Marvel:** HTTPD's strength lies in its modularity. With a treasure trove of dynamic modules, it adapts to various scenarios effortlessly. Customize and extend its capabilities as per your desires.
5. **Security Sentry:** Security is HTTPD's middle name. It comes fortified with access control, authentication, and encryption features, making it the guardian of secure websites. Administrators wield the power to control access meticulously.
6. **Configuration Finesse:** HTTPD's configuration options are as intricate as a Swiss watch. Tailor it to your specific needs by tweaking settings that govern access, performance, and functionality.

_In the ever-evolving landscape of web hosting, Apache HTTP Server stands as a timeless monument, fostering the web's growth securely and efficiently._ 🚀

### **How It Works:**

1.  **Client Request Unveiled: The Apache Ballet**

    _Behold, the enchanting dance of client requests and Apache's graceful response:_

    1. **Client Request Debut:** It all commences with a client - often a web browser - extending an HTTP request towards a web server. This request can be as simple as a URL or rich with parameters and information, akin to casting a spell.
    2. **Server's Attentive Ear:** The Apache server is a vigilant sentinel, stationed at a specific port (usually 80 for HTTP or 443 for HTTPS). It stands ready, ears perked, waiting for the faintest whisper of a client connection.
    3. **Request Unraveled:** As a request arrives, Apache steps onto the stage, armed with its configuration directives from files like 'httpd.conf' or 'apache2.conf.' These directives hold the script, guiding Apache in its response.
    4. **Modules, the Dancers:** Apache's secret lies in its modular ensemble. Each request dictates the choreography. If PHP prowess is needed, the 'mod\_php' module takes center stage, elegantly pirouetting to handle PHP scripts.

    _In this intricate ballet, Apache's modular flexibility allows it to waltz through an array of requests, delivering the perfect performance every time_

### Steps And Procedure

*   **This deployment utilizes the official httpd Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the httpd application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the httpd application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the httpd webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed the Nginx application and gained access to its features through a seamless and user-friendly process.

### Installation

| Docker Image                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------- |
| [`httpd`](https://hub.docker.com/\_/httpd)👈(click me,for the dockerhub image) |

| Application name                                                               |
| ------------------------------------------------------------------------------ |
| Eg: httpd1(you can put any name) |

| Resource Allocation                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.) |

`PROTOCOL`

<table><thead><tr><th width="417">Protocol</th><th>Protocol Value</th></tr></thead><tbody><tr><td>Http</td><td>80</td></tr><tr><td>Tcp</td><td>-</td></tr></tbody></table>

| Install with Default                                                                                                                                        | Advanced                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (select this if you want install with default settings if don't have environment value and working directory) | (select this if you want to go with advanced settings, where you select you own environment value and working directory) |

If you choose Advanced option:

| ENV VARIABLE                                                            |
| ----------------------------------------------------------------------- |
| ```shellGive env variable.``` ```shellEg:key==value```  |

| WORKING DIR                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- |
| ```shellWORKDIR for the application.``` ```shellEg:usr/src/yourAPP```                         |
| Here use ( use the path after   " :"  )                                        |
|  ```shell /usr/local/apache2/htdocs/
```  |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to httpd Deployment**

1. **Docker Image Selection****:**
   * Docker Image Name: `httpd`
2. **Application Details****:**
   * Application Name: `httpd`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration****:**
   * Protocol: `HTTP`
   * Port: `80`
4. **Installation Options****:**
   * Choose between "Default" or "Advanced" installation.
5. **Advanced Installation (Optional****):**
   * If selecting "Advanced," you can customize the environment variables and working directory:
   *   **Environment Variables:**

       Environment variables are dynamic values used by a containerized application for configuration. They are defined as key-value pairs, like `API_KEY=xyz`, and provide flexibility to adjust an app's behavior without changing its code.

       * Environment Variables: Define environment variables with keys and values (e.g., `key=value`).
   *   **Working Directory:**

       The working directory is the starting point inside a container where an app's files are located. It affects relative file paths and operations. For example, if set to `/usr/src/yourAPP`, an app will reference files from there, like `/usr/src/yourAPP/data.txt`.

       * Working Directory: Set the working directory for the application (e.g., `usr/src/yourAPP`).
       * Here use ( use the path after   " :"  )
       *

           ```dockerfile
           /usr/local/apache2/htdocs/
           ```
6. **Access Configuration****:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation****:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an HTTPD instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About httpd image we used.**

This is the official httpd image.

**Can I deploy my own httpd image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, httpd

</details>
