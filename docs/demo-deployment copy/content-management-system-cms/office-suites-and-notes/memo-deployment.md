

# 📜 memo Deployment

### What's  memo?

**memos: Your Personal Memo Assistant**

Are you tired of complex note-taking apps with cluttered interfaces and privacy concerns? Enter **memos**, a refreshingly simple yet robust memo application that puts your thoughts and ideas at the forefront while prioritizing your data's privacy.

**Key Features at a Glance:**

**Privacy First:**

* With memos, your data is your own. It champions data privacy by storing all your information in a secure SQLite database file, keeping it away from prying eyes.

**Plain Text with Markdown:**

* Your memos are stored as plain text with the added magic of Markdown. This means you can effortlessly format your notes without unnecessary HTML complications.

**Lightweight and Powerful:**

* Under the hood, memos rely on a sleek combination of Go, React.js, and SQLite. This architecture ensures a lightweight package that doesn't compromise on functionality.

**Customizable:**

* Make memos truly yours by tailoring it to your preferences. You can customize everything from the server name, icon, description, system style, to execution scripts, and more.

**Completely Open Source:**

* memos embraces the open-source ethos. You can explore its inner workings on GitHub, fostering transparency and community collaboration.

**Free Forever:**

* Good news for your wallet—memos offers all its features for free, and there's no plan to change that. It's a commitment to keeping your memo-taking experience both valuable and cost-free.

So, whether you're jotting down spur-of-the-moment ideas, organizing your thoughts, or simply capturing snippets of inspiration, memos has your back. It's where simplicity meets functionality, and where your data stays firmly in your grasp. Start memo-ing today! 🗒️🔐✍️



### **How It Works:**

**How memos Works: Unveiling the Magic Behind Your Memos**

At first glance, memos may seem like just another note-taking app, but beneath its simple exterior lies a powerhouse of features designed to elevate your memo-keeping experience. Let's peel back the curtain and explore how this ingenious application works:

**1. Privacy First and Foremost:**

* memos takes data privacy seriously. Every piece of information you generate while using the app is securely stored within an SQLite database file. This approach ensures your notes are for your eyes only, safeguarding your personal thoughts and ideas.

**2. Markdown Magic:**

* memos embraces the simplicity of plain text but doesn't skimp on style. It utilizes Markdown, a lightweight markup language, to help you format your memos effortlessly. Whether you want to emphasize text, create lists, or add headers, memos has got your back with a plethora of Markdown features.

**3. Lean yet Robust:**

* The technology stack behind memos is a carefully crafted blend of Go, React.js, and SQLite. This choice of architecture strikes the perfect balance between a lightweight application and robust functionality. You get a nimble memo-keeping tool that doesn't compromise on power.

**4. Tailored to Your Tastes:**

* Make memos uniquely yours by diving into its customization options. You have the freedom to tweak various elements, including the server name, icon, description, system style, execution scripts, and more. Personalize it to align with your preferences and style.

**5. Open Source Philosophy:**

* Transparency is key, and memos fully embraces the open-source ethos. The entire codebase is available for exploration on GitHub, allowing tech enthusiasts and developers to delve into the application's inner workings, suggest improvements, and foster a sense of community.

**6. Forever Free:**

* In a world where software often comes with price tags, memos stands out as a beacon of generosity. It's committed to offering all its features for free, forever. There are no hidden costs or premium tiers. Your memo-taking journey remains valuable without costing you a dime.

With memos, the process is simple: write, customize, and enjoy the peace of mind that your thoughts are private and your memos are as unique as you are. It's the digital memo assistant that simplifies your note-taking journey while respecting your privacy. Get started with memos and experience memo-taking made refreshingly easy! 📝🔒✨\


### Steps And Procedure

*   **This deployment utilizes the official memos Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the [elestio/memos](https://hub.docker.com/r/elestio/memos) application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the memos application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the memos edit webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed   memos and gained access to its features through a seamless and user-friendly process.

### Installation

| Docker Image                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------- |
| [memos](https://hub.docker.com/r/elestio/memos) 👈(click me,for the dockerhub image) |

| Application name                                                              |
| ----------------------------------------------------------------------------- |
| Eg: memos(you can put any name) |



| Resource Allocation                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.) |

`PROTOCOL`

<table><thead><tr><th width="417">Protocol</th><th>Protocol Value</th></tr></thead><tbody><tr><td>Http</td><td>5230</td></tr><tr><td>Tcp</td><td>-</td></tr></tbody></table>

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
|  ```shell - './memos/:/var/opt/memos'```                              |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to mems Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `memos`
2. **Application Details:**
   * Application Name: memos
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `5230`
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
           - './memos/:/var/opt/memos'
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an  memos instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots




### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About memos image we used.**

This is the official memos image.

**Can I deploy my own memos image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, memo

</details>
