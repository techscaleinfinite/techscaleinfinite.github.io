

# 💧 Drupal deployment

### What's Drupal?

Drupal is like a helpful friend when it comes to building and managing websites. It's an open-source tool, which means it's free for everyone, and it's powered by a flexible language called PHP, commonly used for creating websites.

The cool thing about Drupal is its modular architecture. It's like having building blocks that you can mix and match to create a website that suits your needs. You can even change how your website looks and works using themes and modules. It's like having a closet full of different outfits for your site.

What's really amazing is the Drupal community. Think of it as a bunch of people who love helping others. They work together to make Drupal better all the time, so you can keep your website fresh and exciting.

So, in a nutshell, Drupal is more than just a website tool. It's a friendly and powerful platform that lets you create fantastic websites with the support of a big, helpful community.

### **Working in Brief**

Content Creation Made Easy: Drupal understands that creating content should be a breeze. It provides a simple and user-friendly interface so you can create and structure content without breaking a sweat.

Building Blocks for Your Dream Website: Imagine Drupal's modular architecture like Lego pieces. You can add specific features and functionalities to your website using these modules. They're like building blocks, offering flexibility and adaptability.

Dress Your Website the Way You Like: With Drupal, you have plenty of choices to make your website look just the way you want it to. It's like picking an outfit that matches your style. Themes can be applied to give your site a unique and personalized appearance.

The Magic of PHP: At the heart of Drupal is PHP, a dynamic scripting language. It's like the engine that powers your website, processing requests, and making your content appear in real-time. This means your site can stay updated and interactive.

A[ Community That Has Your Back:](#user-content-fn-1)[^1] Drupal has an awesome community of developers, contributors, and users. They work together to keep Drupal in great shape. They solve problems, introduce cool new stuff, and make sure the platform gets better all the time.

In a nutshell, Drupal is a fantastic choice for managing web content. It's flexible, scalable, and has an amazing community to support you.

### &#x20;Steps And Procedure

**This deployment utilizes the official drupal Docker image. Here's a step-by-step guide to get you started:**

1. Begin by navigating to the "Create Apps" page and use the search bar to find the drupal application.
2. Click on the "Install" button to initiate the installation process.
3. Fill in all the required fields with the necessary information.
4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
5. After making your selections, press the "Install" button to proceed.
6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
7. Copy the Hostname of the drupal application without the NodePort and paste it into your preferred browser's address bar.
8. Voilà! You're now able to access the  drupal webpage and explore its content.

By following these straightforward steps, you'll have successfully deployed the drupal application and gained access to its features through a seamless and user-friendly process.

### Installation

| Docker Image                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------ |
| [`drupal`](https://hub.docker.com/\_/drupal)👈(click me,for the dockerhub image) |

| Resource Allocation                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.) |

| Application name                                                               |
| ------------------------------------------------------------------------------ |
| Eg: drupal(you can put any name) |

`PROTOCOL`

<table><thead><tr><th width="417">Protocol</th><th>Protocol Value</th></tr></thead><tbody><tr><td>Http</td><td>80</td></tr><tr><td>Tcp</td><td>-</td></tr></tbody></table>

| Install with Default                                                                                                                                        | Advanced                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (select this if you want install with default settings if don't have environment value and working directory) | (select this if you want to go with advanced settings, where you select you own environment value and working directory) |

If you choose Advanced option:

| ENV VARIABLE                                                            |
| ----------------------------------------------------------------------- |
| ```shellGive env variable.``` ```shellEg:key==value```  |

| WORKING DIR                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
                                                                                                                                                                                       |
| Here use ( use the path after   " :"  )                                                                                                                                                                                                          |
|  ```shell -v /path/on/host/modules:/var/www/html/modules \
	-v /path/on/host/profiles:/var/www/html/profiles \
	-v /path/on/host/sites:/var/www/html/sites \
	-v /path/on/host/themes:/var/www/html/themes \
```  |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to Drupal Deployment**

1. **Docker Image Selection****:**
   * Docker Image Name: `drupal`
2. **Application Details****:**
   * Application Name: `drupal`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration****:**
   * Protocol: `HTTP`
   * Port: `80`
4. **Installation Options****:**
   * Choose between "Default" or "Advanced" installation.
5. **Advanced Installation (Optional****):**
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
           -v /path/on/host/modules:/var/www/html/modules \
           	-v /path/on/host/profiles:/var/www/html/profiles \
           	-v /path/on/host/sites:/var/www/html/sites \
           	-v /path/on/host/themes:/var/www/html/themes \
           ```
6. **Access Configuration****:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation****:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an drupal instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About Drupal image we used.**

This is the official Drupal image.

**Is the Database inbuilted in the same image ?**

No, you need to add your database while you are login and setting your website.

**Can i deploy older version of drupal or my own modified drupal image ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions&#x20;

</details>

[^1]: 
