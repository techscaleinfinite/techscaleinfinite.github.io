

# 📰 Friendica Deployment

### What's friendica?

Friendica is a free and open-source social networking platform that provides a decentralized and federated alternative to commercial social media networks. Here's how Friendica works:



**User Registration:** Just like entering a welcoming community, users can create their accounts on Friendica servers. It's as easy as signing up for any traditional social media platform.

**Decentralization****:** Friendica is the embodiment of democracy in social media. Instead of a central authority, it operates on a federated model, similar to email. It's like a web of communities where each Friendica server is like a town, and users from one town can visit and interact with users from other towns.

**Federation Protocols:** Think of Friendica as a multilingual diplomat. It speaks various federation protocols like ActivityPub, Diaspora, and OStatus. These protocols bridge the gap between different social networks and platforms, allowing Friendica users to connect and interact with users on other federated social networks.

**Profile and Content Creation:** It's your canvas to express yourself. Users can create profiles, share posts, images, links, and videos. It's like an art studio where you can showcase your creations and personalize your space.

**Privacy and Control:** Friendica takes privacy seriously. It's like having a personal bouncer at the door. You decide who gets to see your posts, and you have precise control over your connections and interactions.

**Friendica Add-ons:** Friendica is all about customization. It offers a variety of add-ons and extensions that you can install to tailor your experience. It's like a buffet of features where you can pick and choose what suits your taste.

**Interactions:** It's a bustling social scene. You can follow others, send friend requests, and engage in conversations through comments, likes, and sharing. It's like attending a lively party where you can strike up conversations with interesting people.

**Cross-Platform Compatibility:** Friendica is like a polyglot. Thanks to its federation protocols, you can interact with users on different federated social networks. It's like speaking multiple languages and making friends from around the world.

**Hosting and Community:** Friendica offers the best of both worlds. You can self-host it on your private server or be part of a community. This flexibility means you can choose the level of control and privacy that suits you best.

**Open Source:** Friendica is an open book. Its source code is freely available for anyone to read, modify, and contribute to. It's like a community garden where everyone can pitch in and ensure the platform remains free and open for all.

In essence, Friendica is a social networking platform that champions user privacy, decentralization, and the ability to connect with other federated social networks. It's a refreshing alternative to centralized social media, giving you the reins to control your online interactions and data. It's the digital town square where your voice matters

### **How It Works:**

**decentralized Network:** Think of Friendica as a constellation of communities. It doesn't have a central ruler; instead, it's a tapestry of independently operated nodes, each like a unique village. There's no one-size-fits-all; you get to choose where you want to belong.

**Node Selection:** Joining Friendica is a bit like choosing a neighborhood. You can either create your own community by setting up your Friendica instance or become part of an existing one. Each instance is like a friendly neighborhood where users interact and share.

**User Registration:** Registering on Friendica is as straightforward as signing up for a local club. You provide your username, password, and email address. Some instances might have their own house rules or additional requirements, like a friendly neighborhood committee ensuring everyone gets along.

**Interoperability:** Friendica is like a social diplomat. It speaks the language of other federated social networking platforms, such as Diaspora, Mastodon, and GNU Social. This means you can visit and chat with friends from other digital towns. It's like having a seamless highway that connects different cities.

**Profile Creation:** Once you're in, it's time to set up your digital home. You create your profile, adding personal information, profile pictures, and all the details that make you unique. Just like decorating your real home, you can customize your privacy settings to determine who gets to visit and see your content.

In essence, Friendica offers you the freedom to choose your digital community, be it a bustling metropolis or a cozy town. It's all about connecting with others, sharing stories, and customizing your online experience. It's the social network that puts you in the driver's seat.

### Steps And Procedure

*   **This deployment utilizes the official friendica Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the friendicaapplication.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the friendica application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the friendica webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed the friendica application and gained access to its features through a seamless and user-friendly process.

### Installation

| Docker Image                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| [`friendica`](https://hub.docker.com/\_/friendica)👈(click me,for the dockerhub image) |

| Application name                                                                 |
| -------------------------------------------------------------------------------- |
| Eg: friedika(you can put any name) |

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

| WORKING DIR                                                                                 |
| ------------------------------------------------------------------------------------------- |
| ```shellWORKDIR for the application.``` ```shellEg:usr/src/yourAPP```      |
| Here use ( use the path after   " :"  )                     |
|  ```shell /var/www/html
```  |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to Friendica Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `friendica`
2. **Application Details:**
   * Application Name: `friendica`
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

           ```console
           /var/www/html
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an Friendica instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About** Friendica**image we used.**

This is the official Friendica image.

**Can I deploy my own** Friendica **image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Friendica

</details>
