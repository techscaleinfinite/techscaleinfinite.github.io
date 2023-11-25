

# 📓 Onlyoffice deployment

### What's ONLYOFFICE?

**Unleash Your Productivity with ONLYOFFICE: The Ultimate Office Suite**

In a world where productivity is paramount, ONLYOFFICE, crafted by Ascensio System SIA, emerges as your go-to solution. This robust office suite takes your document editing experience to new heights, offering a powerhouse of features that rival even the most renowned office software. Here's why ONLYOFFICE is your ticket to seamless document creation and collaboration:

**1. Online Editing Excellence**: ONLYOFFICE boasts a trio of online editors that cover all your document needs—text documents, spreadsheets, and presentations. You're not just editing; you're crafting excellence.

**2. Compatibility Champion**: Compatibility is key, and ONLYOFFICE gets it right. It's a harmonious blend of Microsoft Office and OpenDocument file formats, ensuring that your documents seamlessly transition across platforms.

**3. Tools Galore**: Dive into a treasure trove of editing tools that empower your creativity. Whether it's precise formatting, intricate calculations, or captivating visuals, ONLYOFFICE has the arsenal you need.

**4. Collaborative Bliss**: Collaboration is where ONLYOFFICE truly shines. It's not just about editing; it's about teamwork. Real-time collaboration, comments, and tracking changes ensure that your team's workflow is smoother than ever.

**5. Mastering Complexity**: Complex formatting and objects are no longer barriers. ONLYOFFICE conquers them with finesse, making your documents not just functional but visually stunning.

**6. Web Solution Integration**: Seamlessly integrate ONLYOFFICE into your web solution. It's not just an office suite; it's an ecosystem designed to enhance your online platform.

**7. Your Productivity Ally**: ONLYOFFICE is more than software; it's your productivity ally. It's where ideas transform into documents, where data becomes insights, and where collaboration is a breeze.

So, whether you're a creative genius, a number-crunching expert, or a presentation virtuoso, ONLYOFFICE is your canvas, your calculator, and your stage. It's where documents come to life, ideas turn into reality, and productivity knows no bounds. Experience the future of office suites with ONLYOFFICE and elevate your work to unparalleled heights.



### **How It Works:**

**Unlocking the Magic of ONLYOFFICE: Behind the Scenes**

Welcome to the world of ONLYOFFICE, where document creation and collaboration reach new heights. Let's dive into the inner workings of this remarkable office suite, so you can grasp how it conjures productivity magic:

**1. Trio of Online Editors**: ONLYOFFICE features three stellar online editors, each tailored to its role—text documents, spreadsheets, and presentations. It's your creative toolkit, accessible from anywhere.

**2. Compatibility Mastery**: ONLYOFFICE speaks the language of files. It effortlessly handles Microsoft Office and OpenDocument formats, ensuring your documents dance seamlessly between different platforms.

**3. Toolbox Extravaganza**: Inside ONLYOFFICE, you'll discover a treasure chest of editing tools. From pixel-perfect formatting to advanced calculations, it's a playground for your creativity.

**4. Collaborative Symphony**: ONLYOFFICE transforms solo edits into collaborative symphonies. Real-time collaboration, comment threads, and change tracking orchestrate teamwork, turning ideas into reality.

**5. Taming Complexity**: Complex formatting and intricate objects are no match for ONLYOFFICE. It navigates these challenges with grace, making your documents not just functional but visually captivating.

**6. Web Solution Integration**: ONLYOFFICE seamlessly becomes part of your web solution. It's not just software; it's an ecosystem that enhances your online platform's capabilities.

**7. Your Productivity Partner**: Think of ONLYOFFICE as your trusted productivity companion. It's where inspiration takes form, data transforms into insights, and teamwork flourishes.

In this realm, you're not just editing documents; you're shaping the future. ONLYOFFICE is the canvas where ideas become tangible, numbers reveal stories, and collaboration knows no boundaries. It's the passport to a world where productivity soars to new heights.

So, whether you're a wordsmith, a spreadsheet maestro, or a presentation virtuoso, ONLYOFFICE empowers you to create, collaborate, and conquer. It's more than an office suite; it's your stage for greatness. Experience the magic of ONLYOFFICE and redefine your journey toward productivity.

### Steps And Procedure

*   **This deployment utilizes the official ONLYOFFICE  Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the [onlyoffice/documentserver](https://hub.docker.com/r/onlyoffice/documentserver/) application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the ONLYOFFICE  application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the  ONLYOFFICE webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed the ONLYOFFICE application and gained access to its features through a seamless and user-friendly process.



### Installation

| Docker Image                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ONLYOFFICE](https://hub.docker.com/r/onlyoffice/documentserver/) [👈(](https://hub.docker.com/r/linuxserver/firefox)click me,for the dockerhub image) |

| Application name                                                                   |
| ---------------------------------------------------------------------------------- |
| Eg: onlyoffice(you can put any name) |

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

| WORKING DIR                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```shellWORKDIR for the application.``` ```shellEg:usr/src/yourAPP```                                                                            |
| Here use ( use the path after   " :"  )                                                                                           |
|  ```shell -v /app/onlyoffice/DocumentServer/logs:/var/log/onlyoffice  \
    -v /app/onlyoffice/DocumentServer/data:/var/www/onlyoffice/Data
```  |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to ONLYOFFICE Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `ONLYOFFICE`
2. **Application Details:**
   * Application Name: `ONLYOFFICE`
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



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About** ONLYOFFICE **image we used.**

This is the official ONLYOFFICE mage.

**Can I deploy my own media** ONLYOFFICE **with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, ONLYOFFICE

</details>
