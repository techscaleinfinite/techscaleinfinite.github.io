

# 🖥 Media Wiki Deployment

### What's media wiki?

MediaWiki: The Heart of Collaborative Knowledge

Ever wondered how Wikipedia, the treasure trove of online wisdom, works its magic? Enter MediaWiki, the wizard behind the curtain. It's the software that powers Wikipedia and many other collaborative websites. Let's peel back the layers and see what makes it tick:

**1. Teamwork Made Easy:**

* MediaWiki is all about teamwork. It's like having a group of friends working together on a giant puzzle.
* Anyone can join the party, add their pieces, or rearrange what's already there.

**2. Time Machine for Pages:**

* MediaWiki keeps a detailed history of every change made to a page. It's like a time machine for articles.
* You can travel back in time to see how a page evolved and even hit the "undo" button if something goes wrong.

**3. Content Playground:**

* Think of MediaWiki as a playground for information. It's not just a jumble of data; everything has its place.
* Articles are like neatly labeled boxes, and categories are the shelves where these boxes are organized.

**4. Userland Adventures:**

* MediaWiki gives users their own space, like a personal room. You can create your user page, watch pages to see changes, and chat with others.
* It's like having your own little corner in the vast world of knowledge.

**5. Markup Magic:**

* MediaWiki has its own secret language, but it's not like learning a new code. It's more like using simple commands.
* You can make text bold, create links, add images, and more, just by using these magic words.

**6. Media Mastery:**

* It's not just about words. MediaWiki loves pictures, sounds, and videos.
* You can easily add images, audio, and video to make pages more engaging and informative.

MediaWiki is more than just software; it's the enabler of collaborative knowledge creation. It's like a digital playground where people come together to build, learn, and share. So, the next time you explore Wikipedia, remember the unsung hero behind it all - MediaWiki. 📚🌐✨

### **How It Works**

**Content Creation and Editing:** Think of MediaWiki as your digital canvas where you can unleash your creativity. It allows users, with the right permissions, to write new articles or jazz up existing ones. You don't need to be a coding wizard; a simple markup language helps you with things like making text bold, creating links, and adding pictures.

**Version Control:** Imagine a super-detailed history book, but instead of ancient wars, it records changes made to articles. MediaWiki keeps track of who did what, when they did it, and what they did. If something goes wrong, you can time-travel back to earlier versions of an article.

**User Contributions:** MediaWiki is all about community spirit. Registered users can create their own pages, like a mini bio, and talk to others through user talk pages. It's like having a personal space in a busy online town where you can chat with neighbors.

**Categories and Links:** Think of categories as labels in your super-organized kitchen. They help you sort articles neatly. And links are like magical pathways that connect related articles. This makes it easy to explore and find what you're looking for.

**Templates:** Templates are your trusted building blocks. They're like LEGO pieces you can stick in articles. Templates help with things like creating neat info boxes or citing sources correctly.

**Searching:** MediaWiki has a powerful search engine, like a treasure map. Type in keywords, and it shows you where the treasure (the article you need) is buried. It's a quick way to find what you're looking for.

**Media Magic:** MediaWiki is not just about words; it loves pictures, sounds, and videos. You can easily add and share these media gems to make articles more exciting.

**Recent Changes:** The "Recent Changes" page is like a news feed. It shows you the latest updates across the wiki. It's an excellent way to see what's happening and stay up to date.

MediaWiki is a testament to the power of collaboration and knowledge sharing online. It's your user-friendly tool to create, edit, and share knowledge with the world. It's like a digital playground where everyone's invited to play and learn. 📝🔍🌟

### Steps And Procedure

*   **This deployment utilizes the official mediawiki Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the mediawiki application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the mediawiki application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the mediawiki webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed the  media wiki application and gained access to its features through a seamless and user-friendly process.

### Installation

| Docker Image                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| [`mediawiki`](https://hub.docker.com/\_/mediawiki)👈(click me,for the dockerhub image) |

| Application name                                                                   |
| ---------------------------------------------------------------------------------- |
| Eg: mediawiki1(you can put any name) |

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
| ```Give env variable.``` ```Eg:key==value```  |

| WORKING DIR                                                                                       |
| ------------------------------------------------------------------------------------------------- |
| ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```            |
| Here use ( use the path after   " :"  )                           |
|  ```shell /var/www/html/sites```  |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to MEDIAWIKI Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `mediawiki`
2. **Application Details:**
   * Application Name: `mediawiki`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
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

           ```console
           /var/www/html/sites
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an media wiki instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots
### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About media wiki image we used.**

This is the official medi wiki image.

**Can I deploy my own media wiki image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, media wiki&#x20;

</details>
