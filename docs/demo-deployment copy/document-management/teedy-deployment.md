

# 🖥 Teedy Deployment

### What's is teedy?

In the vast digital landscape, staying organized is no small feat. Enter Teedy, your beacon of light in the world of document management. With a sleek and modern interface, Teedy simplifies your quest for order and clarity in the realm of business operations.

**A Symphony of Order** 📂

* Teedy presents itself as a modern maestro of document organization. Say goodbye to the clutter, and hello to a harmonious repository for all your important documents. It's like having a finely tuned orchestra for your business records.

**Upload and Discover** 🚀

* Efficiency is at the core of Teedy's philosophy. You won't spend precious moments wrestling with the tool. Just upload your documents, and like a well-trained retriever, Teedy will fetch them for you whenever you need them. It's document retrieval made easy.

**Fortress of Security** 🔒

* Your documents are precious, and Teedy treats them as such. With precision akin to a locksmith's touch, Teedy offers stringent user permissions, encryption, and data centers nestled in the secure embrace of France. Only the chosen ones will glimpse your treasures, ensuring that your documents remain in the right hands.

In a world of digital chaos, Teedy is your anchor, your guardian of order. It's where your documents find solace, and your business operations regain their clarity. With Teedy, you're not just managing documents; you're orchestrating a symphony of organization and security.

### **How It Works**

**Unveiling the Inner Workings of Teedy**

Imagine a world where document management is not a hassle but an elegant symphony. Teedy, formerly known as Sismics Docs, is here to turn this vision into reality. It's not just another document management system; it's a modern, lightweight marvel designed to streamline your digital life.

**Organization Made Elegant** 📂

* Teedy welcomes you with a sleek, contemporary interface that transforms the chaos of document handling into a work of art. It's like stepping into a meticulously curated art gallery where every piece has its place. Teedy is your curator of order in the world of business operations.

**Seamless Upload and Instant Retrieval** 🚀

* Teedy's philosophy is simple: save your time. Uploading documents is a breeze, and when you need them, Teedy's lightning-fast search function effortlessly retrieves what you seek. It's like having a digital assistant who knows where everything is, so you don't have to.

**A Citadel of Security** 🔒

* Teedy treats your documents like treasures, guarding them with the meticulous care of a master locksmith. User permissions are as precise as a laser beam. Your documents rest under the shield of encryption, and Teedy's data centers in France provide a fortress of security. Your documents are seen only by those you intend.

In a world brimming with digital clutter, Teedy stands as your beacon of order and simplicity. It's not just about managing documents; it's about crafting an exquisite symphony of organization and security. With Teedy, your documents find a serene sanctuary, and your business operations gain crystal-clear clarity. Welcome to Teedy, where elegance meets efficiency.

### Steps And Procedure

&#x20;**This deployment utilizes the official teedy Docker image. Here's a step-by-step guide to get you started:**

1. Begin by navigating to the "Create Apps" page and use the search bar to find [jdreinhardt/teedy](https://hub.docker.com/r/jdreinhardt/teedy)  application.
2. Click on the "Install" button to initiate the installation process.
3. Fill in all the required fields with the necessary information.
4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
5. After making your selections, press the "Install" button to proceed.
6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
7. Copy the Hostname of the  Teedy  application without the NodePort and paste it into your preferred browser's address bar.
8. Voilà! You're now able to access the   Teedy webpage and explore its content.

By following these straightforward steps, you'll have successfully deployed the  Teedyapplication and gained access to its features through a seamless and user-friendly process.



### Installation

| Docker Image                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [teedy](https://hub.docker.com/r/jdreinhardt/teedy)   👈(click me,for the dockerhub image) |

| Application name                                                               |
| ------------------------------------------------------------------------------ |
| Eg: teedy (you can put any name) |

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
| -v /mnt/teedy:/data          jdreinhardt/teedy:latest                                   |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to Teedy  Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: Teedy
2. **Application Details:**
   * Application Name:  Teedy
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
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an  Teedy instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About Teedy image we used.**

This is the official  Teedy image.

**Can I deploy my own Teedy image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Teedy&#x20;

</details>
