

# 📜 flatnotes Deployment

# Flatnotes: Simplicity in Note-Taking Brilliance

Flatnotes redefines digital note-taking with its clean, distraction-free design and minimalist interface. Offering a simple yet powerful organizational approach with tags and advanced search, it ensures your notes are effortlessly accessible. Embrace the flexibility of Markdown with both Raw and WYSIWYG editor modes. Flatnotes prioritizes your ownership and portability, storing notes as plain markdown files under your control. With responsive cross-device functionality, customizable themes, security options, and developer-friendly features like a Restful API, Flatnotes provides an unparalleled note-taking experience that's refreshingly simple and highly functional.

### Installation

| Docker Image                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------ |
| [flatnotes](https://hub.docker.com/r/elestio/flatnotes) 👈(click me,for the dockerhub image) |

| Application name                                                                  |
| --------------------------------------------------------------------------------- |
| Eg: flatnotes(you can put any name) |



| Resource Allocation                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.) |

`PROTOCOL`

<table><thead><tr><th width="417">Protocol</th><th>Protocol Value</th></tr></thead><tbody><tr><td>Http</td><td>8080</td></tr><tr><td>Tcp</td><td>-</td></tr></tbody></table>

| Install with Default                                                                                                                                        | Advanced                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (select this if you want install with default settings if don't have environment value and working directory) | (select this if you want to go with advanced settings, where you select you own environment value and working directory) |

If you choose Advanced option:

| ENV VARIABLE                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```Give env variable.``` ```Eg:key==value```                                                                                                                                                                    |
| here use:(on  right side you can write anything)                                                                                                                                                                                       

| WORKING DIR                                                                             |
| --------------------------------------------------------------------------------------- |
| ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```  |
| Here use ( use the path after   " :"  )                 |
|  ```shell - "./data:/data"```                                         |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to flatnotes Deployment**

1. **Docker Image Selection:**
   * Docker Image Name:`flatnotes`
2. **Application Details:**
   * Application Name: Flatnotes
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

           ```
           - "./data:/data"
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an  Flatnotes instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Steps And Procedure

*   **This deployment utilizes the official flatnotes Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the [elestio/flatnotes](https://hub.docker.com/r/elestio/flatnotes) application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the Flatnotes application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the Flatnotes edit webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed   Flatnotes and gained access to its features through a seamless and user-friendly process.



### Visual Snapshots

![Alt Text](/img/ww2.jpg)
![Alt Text](/img/ttt44.jpg)
![Alt Text](/img/xx2.jpg)
![Alt Text](/img/ss3.jpg)
![Alt Text](/img/fee3.jpg)

### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About  Flatnotes image we used.**

This is the official Flatnotes image.

**Can I deploy my own Flatnot image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, flatnotes

</details>
