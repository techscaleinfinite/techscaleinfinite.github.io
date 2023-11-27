

# 📺 Emby DeployMent

### What's  emby?

Emby is like a personal media butler, here to help you bring order to your multimedia chaos. It's not just software; it's a trusted companion in your media journey. Here's how Emby adds magic to your media world:

**Installation: The First Step in Your Emby Adventure**

Your Emby journey starts with a simple and crucial step – installing the Emby server software. Think of it as finding the perfect home for your precious media collection. You have the freedom to choose the device that suits you best, whether it's your trusted desktop, a nimble laptop, a dedicated server, or a reliable NAS (Network Attached Storage). This chosen device becomes the guardian of your media library, ensuring smooth and hassle-free content streaming.

**Library Setup: Laying the Groundwork for Your Media Empire**

Now that Emby is in place, it's time to create the foundation for your media empire. It's like providing your librarian with a map to all the hidden bookshelves. You configure Emby by informing it about the locations of your valuable media files. Your media might include movies, TV shows, music collections, cherished photos, and more, all waiting to be organized and enjoyed.

**Media Scanning and Metadata Retrieval: Your Meticulous Archivist**

Emby takes on the role of a meticulous archivist. It embarks on a quest through the directories you've specified, identifying each media file and categorizing it just like a seasoned librarian. But here's where the magic happens: Emby doesn't stop there. It reaches out to online databases like The Movie Database (TMDb) and TheTVDB to fetch all the juicy details. Picture it as your personal librarian who not only arranges your books but also adds beautifully crafted book jackets, intriguing blurbs, cast lists, and even trailers to breathe life into your library.

**User Profiles: Tailoring the Experience**

In a household with diverse tastes, Emby plays the role of a diplomat. It graciously supports multiple user profiles, ensuring that each member can have their unique view of the media library. It's like having a custom-made reading nook for every family member in your library. Each user can tailor their preferences and settings, guaranteeing that everyone gets to enjoy their favorite books or media content.

Emby transforms your media experience into something that's not just organized but also deeply personalized. It's like having a team of experts dedicated to making sure your media library is not only well-kept but also a delight to explore. Your media world becomes a place of discovery, entertainment, and tailored enjoyment. Emby takes care of the technicalities so you can dive into the wonderful world of your media collection.

### **How It Works:**

**How Emby Works: Bringing Your Media to Life**

Emby transforms your digital space into a well-organized and personalized media haven. Here's how it all comes together:

**1. Installation: Setting the Stage**

Your Emby journey kicks off with a simple yet crucial step - installing the Emby server software. Think of it like finding the perfect home for your cherished media collection. You have the flexibility to choose from a range of compatible devices, whether it's your reliable desktop, a nimble laptop, a dedicated server, or a trusty NAS (Network Attached Storage). This chosen device becomes the guardian of your media library, ensuring a seamless streaming experience.

**2. Library Setup: The Foundation of Your Media Empire**

With Emby in place, it's time to lay the groundwork for your media empire. It's akin to providing your librarian with a map to all the hidden bookshelves. You configure Emby by informing it about the locations of your precious media files. Your media could encompass movies, TV shows, music collections, cherished photos, and more, all waiting to be neatly organized and thoroughly enjoyed.

**3. Media Scanning and Metadata Retrieval: Your Meticulous Archivist**

Emby takes on the role of a meticulous archivist. It embarks on a quest through the directories you've specified, identifying each media file and categorizing it just like a seasoned librarian. But here's where the magic unfolds - Emby doesn't stop there. It reaches out to online databases like The Movie Database (TMDb) and TheTVDB to fetch all the juicy details. Imagine it as your personal librarian who not only arranges your books but also adds beautifully crafted book jackets, intriguing blurbs, cast lists, and even trailers to bring your library to life.

**4. User Profiles: Tailoring the Experience**

In a household where diverse tastes reign, Emby plays the role of a diplomat. It gracefully supports multiple user profiles, ensuring that each member can have their very own, unique view of the media library. It's like having a custom-made reading nook for every family member in your library. Each user can tailor their preferences and settings, guaranteeing that everyone gets to enjoy their favorite books or media content.

Emby goes beyond mere organization; it personalizes your media experience. It's like having a team of experts dedicated to ensuring your media library is not only well-kept but also a joy to explore. Your media world becomes a realm of discovery, entertainment, and tailored enjoyment. Emby takes care of the technicalities so you can dive into the wonderful world of your media collection effortlessly.

### Steps And Procedure

&#x20; **This deployment utilizes the official EMBY image. Here's a step-by-step guide to get you started:**

1. Begin by navigating to the "Create Apps" page and use the search bar to find the emby/embyserver application.
2. Click on the "Install" button to initiate the installation process.
3. Fill in all the required fields with the necessary information.
4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
5. After making your selections, press the "Install" button to proceed.
6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
7. Copy the Hostname of the emby application without the NodePort and paste it into your preferred browser's address bar.
8. Voilà! You're now able to access the   emby webpage and explore its content.

### Installation

| Docker Image                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------- |
| [emby](https://hub.docker.com/r/emby/embyserver)👈(click me,for the dockerhub image) |

| Application name                                                             |
| ---------------------------------------------------------------------------- |
| Eg: emby(you can put any name) |

| Resource Allocation                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.) |

`PROTOCOL`

<table><thead><tr><th width="417">Protocol</th><th>Protocol Value</th></tr></thead><tbody><tr><td>Http</td><td>8096</td></tr><tr><td>Tcp</td><td></td></tr></tbody></table>

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
| /path/to/tvshows:/mnt/share1                                                            |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to emby Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: emby
2. **Application Details:**
   * Application Name: emby1
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: http
   * Port: 8096
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
       * /path/to/tvshows:/mnt/share1
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an EMBY instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About emby image we used.**

This is the official emby image.

**Can I deploy my own emby image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions , media, entertainment, emby

</details>
