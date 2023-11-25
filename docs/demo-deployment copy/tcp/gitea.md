

# ☕ Gitea

### What's  Gitea?

**Gitea: Your All-in-One Software Development Buddy**

When it comes to software development, Gitea steps into the spotlight as your trusty sidekick. This self-hosted platform packs a punch with a range of features that make your coding adventures a breeze:

**1. Git Hosting:**

* Gitea offers a cozy home for your Git repositories. It's like a secure vault where your source code is protected, and your team can collaborate seamlessly.

**2. Code Review:**

* Collaboration just got simpler. Gitea has your back with built-in code review tools. Your team can join forces to fine-tune code changes, ensuring top-notch quality and teamwork.

**3. Team Collaboration:**

* Think of Gitea as a digital hangout for your development crew. It brings developers under one roof, making communication, knowledge sharing, and project management a walk in the park.

**4. Package Registry:**

* Developers, you're in for a treat! Gitea's package registry lets you neatly organize and manage your software packages. It's like tidying up your digital toolbox, making package distribution a breeze.

**5. CI/CD (Continuous Integration/Continuous Deployment):**

* Say goodbye to the hassle of manual code building and testing. Gitea automates the CI/CD process, ensuring your code changes gracefully waltz into the production environment.

Gitea has come a long way from its ancestor, Gogs, with significant upgrades. It's the answer to your self-hosted dreams, offering control, collaboration, and code excellence. It's like your very own backstage pass to software development, where you call the shots. Say hello to your new coding companion!

### **How It Works**

**Gitea Unveiled: Your Ultimate Software Sidekick**

In a nutshell, Gitea is the tech wizard you've been waiting for. It's your all-in-one package for software development, making your coding journey smoother and smarter:

**1. Git Hosting:**

* At its core, Gitea is your Git sanctuary. It's where you create and manage Git repositories for your projects, like a secure vault for your code.

**2. Code Review:**

* Collaboration is a breeze with Gitea. It offers nifty code review tools, including pull requests for proposing code changes. Your team can discuss and fine-tune these changes before they become a part of your project.

**3. Team Collaboration:**

* Gitea is the ultimate team player. It fosters collaboration by letting users create organizations, allowing teams to work on projects together. It also offers handy features like issue tracking and wikis.

**4. Package Registry:**

* Store and manage your software packages effortlessly with Gitea's package registry. It's like your own digital toolbox, especially handy for projects with complex dependencies.

**5. ****CI/CD (Continuous Integration/Continuous Deployment):**

* Gitea takes the grunt work out of software building and deployment. It automates the process, ensuring that your code flows smoothly from development to production.

**6****. User-Friendly Web Interface:**

* No tech jargon here! Gitea provides a web-based interface that's easy to use. Manage repositories, conduct code reviews, and collaborate with your team using a user-friendly dashboard.

**7. Customization:**

* Make Gitea your own. You can personalize it with themes, branding, and configuration settings to match your unique needs and style.

**8. Security:**

* Gitea is the fortress for your code. It takes security seriously with features like user authentication, access controls, and encryption to protect your data and ensure secure access.

**9. Open Source:**

* The beauty of Gitea is its open-source nature. It's all about community contributions, customization, and transparency. You can enhance its power with plugins and integrations.

**10. Cross-Platform Compatibility:**

* No matter what tech setup you've got, Gitea plays nice. Its Go-based architecture runs smoothly on various systems, ensuring accessibility across different environments.

With Gitea by your side, you're ready to conquer the world of software development. It's your trusty companion for coding adventures, offering a suite of tools that streamline the process and enhance collaboration. Say hello to your new coding buddy!\


### Steps And Procedure

*   **This deployment utilizes the official gitea Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the [gitea/gitea](https://hub.docker.com/r/gitea/gitea) application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the GITEA application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the  GITEA webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed  GITEA application and gained access to its features through a seamless and user-friendly process.

### Installation

| Docker Image                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------- |
| [Gitea](https://hub.docker.com/r/gitea/gitea)👈(click me,for the dockerhub image) |

| Application name                                                              |
| ----------------------------------------------------------------------------- |
| Eg: gitea(you can put any name) |

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

| WORKING DIR                                                                             |
| --------------------------------------------------------------------------------------- |
| ```shellWORKDIR for the application.``` ```shellEg:usr/src/yourAPP```  |
| Here use ( use the path after   " :"  )                 |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to gitea Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `Gitea`
2. **Application Details:**
   * Application Name: Gitea
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration****:**
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
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an  GITEA instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About** GITEA **image we used.**

This is the official GITEA  image.

**Can I deploy my own**  GITEA **image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Gitea

</details>
