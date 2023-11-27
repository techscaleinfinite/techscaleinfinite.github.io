

# ☁ Next Cloud Deployment

### What's Next cloud?

Nextcloud is a remarkable open-source solution for self-hosted cloud storage and collaboration. It grants you the power to safeguard, synchronize, and exchange an array of digital assets, including files, documents, images, and much more. It represents a secure and private alternative to conventional commercial cloud storage services. With Nextcloud, you retain control over your data, ensuring both its protection and accessibility.

### **How It Works:**

**Installation and Setup: Creating Your Cloud Haven** To start your journey with Nextcloud, think of it as your secret vault for files. You need a server or hosting provider, and Nextcloud software will be your magic key to transform it into your personal cloud storage. During this setup, you'll become the admin and customize Nextcloud to fit your style.

**File Handling: Your Digital Filing Cabinet** Once you've set up shop, Nextcloud becomes your digital filing cabinet. Just like other cloud storage services, you can upload files, create folders, and neatly arrange your digital stuff to match your workflow.

**Syncing Made Simple****: Your Files on All Devices** But what's cooler is how Nextcloud keeps everything in sync. It's like having magical elves working in the background. Your files stay updated on all your devices - computer, phone, tablet, you name it. It doesn't matter where you are; your stuff is with you.

**Share with Ease: Collaborate Like a Pro** Nextcloud gives you the power to share files and folders effortlessly. It's like sharing a pizza; you decide who gets a slice. You can make things public or invite specific friends to the feast. Plus, you can set rules – whether they can only look, make changes, or take the whole pizza (download). It's collaboration made easy.

So, Nextcloud is your personal file haven. It's not just about storage; it's about keeping everything in line, wherever you go. It's like having your own magical file manager, plus a team of elves to help you share the goodies! 🌟📂📤🍕

### Steps And Procedure

*   &#x20; **This deployment utilizes the official NextCloud Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the nextcloud application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the nextcloud application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the  homer webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed the nextcloud application and gained access to its features through a seamless and user-friendly process..

### Installation

| Docker Image                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------- |
| [nextcloud](https://hub.docker.com/\_/nextcloud/)👈(click me,for the dockerhub image) |

| Application name                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------- |
| Eg: nextcloud1(you can put any name) |

| Resource Allocation                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.) |

`PROTOCOL`

<table><thead><tr><th width="417">Protocol</th><th>Protocol Value</th></tr></thead><tbody><tr><td>Http</td><td>8080</td></tr><tr><td>Tcp</td><td>-</td></tr></tbody></table>

| Install with Default                                                                                                                                        | Advanced                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (select this if you want install with default settings if don't have environment value and working directory) | (select this if you want to go with advanced settings, where you select you own environment value and working directory) |

If you choose Advanced option:

| ENV VARIABLE                                                            |
| ----------------------------------------------------------------------- |
| ```Give env variable.``` ```Eg:key==value```  |

| WORKING DIR                                                                             |
| --------------------------------------------------------------------------------------- |
| ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```  |
| Here use ( use the path after   " :"  )                 |
| /var/www/html                                                                           |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to nextcloud Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: nextcloud
2. **Application Details:**
   * Application Name: nextcloud
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: HTTP
   * Port: 8080
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
       * /var/www/html
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an nextcloud instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots





### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About nextcloud image we used.**

This is the official nextcloud image.

**Can I deploy my own nextcloud image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions&#x20;

</details>
