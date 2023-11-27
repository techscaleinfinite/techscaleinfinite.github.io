

# 📓 mininote deployment

### What's mininote?

**MiniNote: Your Secret Sanctuary for Markdown Memoirs**

Introducing _MiniNote_, the unassuming yet brilliant self-hosted gem designed for your confidential Markdown note-taking needs. Here's a sneak peek into the world of MiniNote, where simplicity meets security:

📝 **Simplicity in Complexity:**

* MiniNote is a testament to the beauty of simplicity. Behind its uncluttered interface lies a robust tool for crafting and storing Markdown-based notes.

🔒 **Fortress of Encryption:**

* Your thoughts deserve the utmost security. MiniNote takes your privacy seriously by encrypting your notes, ensuring they remain exclusively yours.

📚 **Markdown Magic:**

* Markdown aficionados rejoice! MiniNote understands your language. Craft beautifully formatted notes with ease, harnessing the power of Markdown syntax.

🏡 **Self-Hosted Sanctuary:**

* MiniNote doesn't believe in third-party custody. It's your data, and you control it. Hosting it yourself adds an extra layer of ownership and security.

🌟 **No-Frills, All Thrills:**

* MiniNote isn't about flashy features. It's about getting down to business—taking notes with minimal distractions and maximal productivity.

🔐 **Data's Best Friend:**

* Your data is precious, and MiniNote treats it as such. With encryption and self-hosting, your notes are in the safest of hands—yours.

🌐 **Web-Based Wonder:**

* Access MiniNote from anywhere, anytime. Its web-based nature ensures you're never far from your thoughts.

🚀 **Effortless Efficiency:**

* MiniNote streamlines your note-taking process. Write, edit, and access your notes seamlessly, without the fuss.

In a world filled with overcomplicated note-taking apps, MiniNote stands as a beacon of simplicity and security. It's where your thoughts become encrypted masterpieces, where Markdown's elegance shines, and where you're always in control. Say hello to MiniNote, your digital sanctuary for Markdown memoirs



### **How It Works:**

**MiniNote: Where Security Meets Simplicity**

In the realm of digital sanctuaries, _MiniNote_ stands as a fortress of security with a dash of simplicity. Here's the lowdown on MiniNote's security features:

🔒 **Bulletproof Encryption:**

* MiniNote wraps your notes in a cloak of encryption, ensuring that both titles and content remain as secret as the recipe for grandma's cookies. It uses AES-GCM, a formidable encryption method, courtesy of the Web Crypto API.

🔐 **Password Power:**

* Remember, encryption is only as strong as your password. MiniNote lets you wield this power by using your notebook's password to derive the encryption key. Choose wisely, and your notes will be as secure as Fort Knox.

🌐 **End-to-End-ish:**

* While MiniNote takes encryption seriously, it's honest about its limitations. It encrypts your notes before they travel to the server, but it's not quite "NSA-proof." The server might catch a glimpse of your password when creating a new notebook. Think of it as locking your diary with a sturdy padlock, but the locksmith knows the design.

⚔️ **Decent Security:**

* MiniNote doesn't make grandiose claims, but it does aim for a decent level of security. It's your digital safe haven, not a spy movie prop.

In the world of note-taking apps, MiniNote strikes a balance between robust security and user-friendly simplicity. Your notes are encrypted, your thoughts are guarded, and your Markdown memoirs are in safe hands. Welcome to MiniNote, where security meets simplicity with a touch of wit.

### Steps And Procedure

*   **This deployment utilizes the official mininote Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the [n1try/mininote](https://hub.docker.com/r/n1try/mininote) application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the  MiniNote  application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the   MiniNote webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed the  MiniNote application and gained access to its features through a seamless and user-friendly process.



### Installation

| Docker Image                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [mini n](https://hub.docker.com/r/n1try/mininote)ote  [👈(](https://hub.docker.com/r/linuxserver/firefox)click me,for the dockerhub image) |

| Application name                                                                  |
| --------------------------------------------------------------------------------- |
| Eg: mini note(you can put any name) |

| Resource Allocation                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.) |

`PROTOCOL`

<table><thead><tr><th width="417">Protocol</th><th>Protocol Value</th></tr></thead><tbody><tr><td>Http</td><td>3000</td></tr><tr><td>Tcp</td><td>-</td></tr></tbody></table>

| Install with Default                                                                                                                                        | Advanced                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (select this if you want install with default settings if don't have environment value and working directory) | (select this if you want to go with advanced settings, where you select you own environment value and working directory) |

If you choose Advanced option:

| ENV VARIABLE                                                            |
| ----------------------------------------------------------------------- |
| ```shellGive env variable.``` ```shellEg:key==value```  |

| WORKING DIR                                                                                        |
| -------------------------------------------------------------------------------------------------- |
| ```shellWORKDIR for the application.``` ```shellEg:usr/src/yourAPP```             |
| Here use ( use the path after   " :"  )                            |
|  ```shell -v mininote-data:/app/data```  |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to mininote Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `mininote`
2. **Application Details:**
   * Application Name: `mininote`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `3000`
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

           ```bash
           -v mininote-data:/app/data
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an  MiniNote instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About** MiniNote **image we used.**

This is the official  MiniNote mage.

**Can I deploy my own media** MiniNote **with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, notes

</details>
