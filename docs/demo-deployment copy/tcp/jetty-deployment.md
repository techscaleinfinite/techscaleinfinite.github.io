

# 🖥 Jetty Deployment

### What's  jetty?

Jetty, often referred to as Eclipse Jetty, is an open-source web server and servlet container. It is developed as part of the Eclipse Foundation's community-driven projects and is written in Java. Jetty is designed to be highly scalable, lightweight, and embeddable, making it a popular choice for a wide range of web-based applications and services. Here are some key aspects of Jetty:

1. **Web Server**: Jetty primarily functions as a web server, serving web content, static files, and handling HTTP requests. It supports various HTTP versions, including HTTP/1.1 and HTTP/2, making it suitable for modern web applications.
2. **Servlet Container**: Jetty also serves as a servlet container, implementing the Java Servlet API. This means it can host Java servlets and JavaServer Pages (JSP), making it compatible with a wide range of Java-based web applications.
3. **Embedded Deployment**: One of Jetty's strengths is its ability to be embedded within other Java applications. Developers can include Jetty as a library and configure it programmatically. This is especially useful for microservices and embedded systems.
4. **Scalability**: Jetty is known for its scalability. It can efficiently handle a large number of concurrent connections and requests, making it suitable for high-traffic websites and web services.
5. **Low Resource Usage**: Jetty is designed to be lightweight, with a small memory footprint. This makes it suitable for resource-constrained environments or scenarios where efficient resource usage is critical.
6. **Modular Architecture**: Jetty adopts a modular architecture, allowing users to include only the components they need. This reduces the overall footprint and helps maintain a minimal attack surface.
7. **WebSocket Support**: Jetty provides built-in support for WebSocket, enabling real-time bidirectional communication between clients and servers. This is essential for applications that require instant data updates.

### **How It Works**

Jetty works as a web server and servlet container to handle incoming HTTP requests, serve web content, and execute Java servlets and JavaServer Pages (JSP). Here's a simplified overview of how Jetty works:

1. **Initialization**: Jetty is typically embedded within a Java application as a library. When the application starts, Jetty is initialized programmatically, and the necessary configurations are set up.
2. **HTTP Server**: Jetty listens on a specified network port (e.g., port 8080) for incoming HTTP requests. It can also be configured to support secure connections via HTTPS.
3. **Request Handling**: When an HTTP request (e.g., a web page request or API call) is received on the configured port, Jetty's request handling mechanism takes over.
4. **Servlet Container**: If the request is destined for a Java servlet or JSP, Jetty's servlet container component processes it. The servlet container manages the servlet lifecycle, including instantiation, initialization, and execution of the servlet's `doGet()` or `doPost()` methods.
5. **Static Content**: If the request is for static content (e.g., HTML, CSS, JavaScript files), Jetty serves these files directly from the configured directory without involving the servlet container. This improves performance for static assets.
6. **Request Routing**: Jetty has a URL mapping mechanism that directs incoming requests to the appropriate servlet or resource based on the URL path. This routing ensures that each request is processed by the correct component.

### Steps And Procedure

*   **This deployment utilizes the official jetty Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the jetty application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the jetty application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the jetty webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed the Nginx application and gained access to its features through a seamless and user-friendly process.

### Installation

| Docker Image                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------- |
| [`jetty`](https://hub.docker.com/\_/jetty)👈(click me,for the dockerhub image) |

| Application name                                                              |
| ----------------------------------------------------------------------------- |
| Eg: jetty(you can put any name) |

| Resource Allocation                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.) |

`PROTOCOL`

<table><thead><tr><th width="417">Protocol</th><th>Protocol Value</th></tr></thead><tbody><tr><td>Http</td><td>80/8080/443/8443</td></tr><tr><td>Tcp</td><td>-</td></tr></tbody></table>

| Install with Default                                                                                                                                        | Advanced                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (select this if you want install with default settings if don't have environment value and working directory) | (select this if you want to go with advanced settings, where you select you own environment value and working directory) |

If you choose Advanced option:

| ENV VARIABLE                                                            |
| ----------------------------------------------------------------------- |
| ```shellGive env variable.``` ```shellEg:key==value```  |

| WORKING DIR                                                                             |
| --------------------------------------------------------------------------------------- |
| ```shellWORKDIR for the application.``` ```shellEg:usr/src/yourAPP```  |
| Here use ( use the path after   " :"  )                 |
| /usr/local/jetty/webapps                                                                |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to jetty Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `jetty`
2. **Application Details:**
   * Application Name: `jetty`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration****:**
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
       * /usr/local/jetty/webapps
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an jetty instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

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

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, jetty

</details>
