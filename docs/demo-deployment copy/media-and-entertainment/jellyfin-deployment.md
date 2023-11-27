

# 📺 Jellyfin Deployment

### What's Jellyfin?

**Jellyfin: Your Personal Media Maestro**

**A Symphony of Media Freedom:** Jellyfin is like an open-air concert for your media. It's open-source, meaning it's free for all to enjoy. You get a powerful platform to organize and stream your personal media without reaching for your wallet.

**Media Wonderland:** Whether you're a movie buff, a music lover, or a photography enthusiast, Jellyfin's got your back. It plays nicely with all sorts of media, from your favorite songs to cherished videos and treasured photos.

**Your Media, Your Way:** With Jellyfin, your media is wherever you are. It harmoniously streams your content to a variety of devices, ensuring you can dive into your collection no matter what gadget you're using.

**Tailored to You:** Personalization is Jellyfin's middle name. You can customize your media server's look and feel to match your style. It's like having your own private media den, designed just the way you like it.

**Fort Knox for Your Media:** Worried about privacy? Jellyfin has you covered. Since it's self-hosted, there's no need to fret about nosy neighbors. It's like having a safe vault for your digital treasures.

In a world where media reigns supreme, Jellyfin is your media maestro. It ensures your collection is neat, accessible, and completely under your command. Think of it as your personal media curator, ready to serve entertainment whenever and wherever you want it.

### **Working in Brief:**

**Media Library Zen****:** Think of Jellyfin as your personal librarian for all things media. It takes your movies, music, and more and neatly organizes them by type, genre, or artist. It's like having a beautifully sorted bookshelf for your entertainment collection.

**Entertainment on Demand:** Jellyfin plays the role of a magical genie, granting your media wishes on demand. It effortlessly streams your media to your devices, no matter if they're in your living room or on the other side of the world.

**VIP Access:** With Jellyfin, your media kingdom becomes exclusive. You simply log in to your Jellyfin account for a tailored experience. It's like having a VIP pass to your personal media wonderland.

**Media Multilingualism:** Jellyfin is the ultimate linguist for your media. It can translate media formats in real-time to match your devices, ensuring everything plays smoothly. It's like having a universal remote control for your media.

**Worldwide Entertainment:** Jellyfin opens the door to a world of media. You can enjoy your collection from anywhere, as if you're carrying your entire media library in your pocket. It's ready to entertain you wherever you go.

Jellyfin takes the complexity out of managing your media. It puts you in charge of your entertainment kingdom with its self-hosted solution, and since it's open-source, you have the keys to customize it as you like. With Jellyfin, your media remains private and secure, promising an entertainment experience that's uniquely yours.

### Steps And Procedure

&#x20; **This deployment utilizes the official jellyfin Docker image. Here's a step-by-step guide to get you started:**

1. Begin by navigating to the "Create Apps" page and use the search bar to find the jellyfin application.
2. Click on the "Install" button to initiate the installation process.
3. Fill in all the required fields with the necessary information.
4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
5. After making your selections, press the "Install" button to proceed.
6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
7. Copy the Hostname of the jellyfin application without the NodePort and paste it into your preferred browser's address bar.
8. Voilà! You're now able to access the  jellyfin webpage and explore its content.

### Installation

| Docker Image                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------ |
| [`Jellyfin`](https://hub.docker.com/r/jellyfin/jellyfin)👈(click me,for the dockerhub image) |

| Application name                                                              |
| ----------------------------------------------------------------------------- |
| Eg: jelly(you can put any name) |

| Resource Allocation                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.) |

`PROTOCOL`

<table><thead><tr><th width="417">Protocol</th><th>Protocol Value</th></tr></thead><tbody><tr><td>Http</td><td>8096</td></tr><tr><td>Tcp</td><td>-</td></tr></tbody></table>

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
|         |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to jellyfin Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `jellyfin`
2. **Application Details:**
   * Application Name: `jelly`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `8096`
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
       * \-v /path/to/tvseries:/data/tvshows\
         \-v /path/to/movies:/data/movies
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy and JELLY instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots





### FAQ

**About Jellyfin image we used.**

This is the official linuxserver/jellyfin image.

**Are there any restrictions on adding data sources ?**

you can add any data source that Jellyfin supports.

**Can i deploy older version of Jellyfin or my own modified Jellyfin image ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, media, entertainment, jellyfin

</details>
