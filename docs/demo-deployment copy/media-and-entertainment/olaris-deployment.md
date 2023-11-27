

# 📺 Olaris Deployment

### What's is olaris?

Olaris is like a creative hub for media enthusiasts, a place where the community comes together to manage and transform their media treasures. At its heart lies the olaris-react project, the main interface that's here to streamline your media management experience. And, guess what? There are plans in the pipeline to support even more clients and applications down the road.

**olari-react:** The Heart of the Experience

At the core of Olaris is the olaris-react project, your trusty companion in the realm of media management. This interface is your ticket to a smoother and more enjoyable experience when handling your media. And guess what? We're cooking up exciting plans to support even more clients and applications in the near future, so stay tuned!

**The Open-Source Art Studio**

Olaris is not just a piece of software; it's a collective labor of love, driven by a vibrant community that celebrates the open-source spirit. It's like a bustling art studio, where everyone's brushes and talents converge to create something truly beautiful.

**Your Digital Curator**

Picture Olaris as your very own digital curator, tirelessly working to organize, optimize, and enhance your media collection. It's like having a personal archivist who ensures that your media is always in its prime.

**Media Format Sorcery**

Need to work magic on media formats? Olaris has got you covered. It's like a wizard casting spells, effortlessly transforming your media into the perfect format for any occasion or device.

**olari-react: Your Gateway**

Leading the charge is olari-react, your gateway to a world of media management possibilities. Think of it as your cozy library, where you can effortlessly browse through your media treasures and pick out exactly what you need.

**A Symphony of Community**

But here's the best part: Olaris isn't a solo act. It's a collaborative masterpiece, forged by a passionate community that understands the immense power of media. It's like a jam session where everyone's talents harmonize to create something truly extraordinary.

So, envision Olaris as your creative studio, your digital playground, and your sanctuary for all things media. It's where you and the community can turn your wildest media management dreams into reality. Welcome to the future of media management—welcome to Olaris.

### **How It Works:**

Are you curious about the inner workings of Olaris, your digital haven for media management? Let's dive in and unveil the magic behind the scenes.

**Media Management Made Easy**

At the heart of Olaris is a user-friendly web-based interface, such as the ever-capable olaris-react. Think of it as your personal media assistant, tirelessly working to streamline your media management experience. Upload, organize, and manage all your media files with ease, whether they're captivating videos, soul-soothing audio tracks, or cherished images. It's your digital command center for all things media organization.

**Transcoding: The Media Alchemy**

Olaris is your go-to media magician, equipped with a transcoding engine that performs media alchemy. Imagine turning a paperback into an e-book—it's that simple. Specify all the details you desire, from output formats and codecs to bitrates and resolutions. Olaris is like having a high-tech studio where you can fine-tune your media to perfection, making it ready for any occasion or device.

**The Powerhouse Behind the Curtain**

But Olaris isn't all style and no substance. It operates on a robust server that acts as the wizard working behind the scenes. This server takes on the heavy lifting, handling all the grunt work of actual transcoding tasks. It's akin to having a dedicated production team backstage, ensuring your media transformations happen seamlessly and without a hitch.

With Olaris, managing, transforming, and enjoying your media becomes a seamless and delightful experience. It's like having a trusted partner that not only understands your media needs but also possesses the skills and resources to bring them to life. Your media world transforms into a realm of order, creativity, and limitless possibilities.

### Steps And Procedure

&#x20; **This deployment utilizes the official oalris Docker image. Here's a step-by-step guide to get you started:**

1. Begin by navigating to the "Create Apps" page and use the search bar to find the olaristv/olaris-server application.
2. Click on the "Install" button to initiate the installation process.
3. Fill in all the required fields with the necessary information.
4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
5. After making your selections, press the "Install" button to proceed.
6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
7. Copy the Hostname of the olaris application without the NodePort and paste it into your preferred browser's address bar.
8. Voilà! You're now able to access the  olaris webpage and explore its content.

### Installation

| Docker Image                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| [olaris](https://hub.docker.com/r/olaristv/olaris-server)👈(click me,for the dockerhub image) |

| Application name                                                               |
| ------------------------------------------------------------------------------ |
| Eg: olaris(you can put any name) |

| Resource Allocation                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.) |

`PROTOCOL`

<table><thead><tr><th width="417">Protocol</th><th>Protocol Value</th></tr></thead><tbody><tr><td>Http</td><td>8080</td></tr><tr><td>Tcp</td><td></td></tr></tbody></table>

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
| /var/media                                                                              |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to olaris Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: olaris
2. **Application Details:**
   * Application Name: olaris
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: http
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
       * /var/media
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an HOMER instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About olaris image we used.**

This is the official olaris image.

**Can I deploy my own olaris image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, media, entertainment, olaris

</details>
