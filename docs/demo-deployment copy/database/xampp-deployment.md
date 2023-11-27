

# 🖥 Xampp deployment

### What's Xampp?

XAMPP is a great and free web server solution carefully built by Apache Friends. This is your one stop shop for web development, bringing together some of the essential components that make your web projects a breeze.

**All-in-one package:** XAMPP is like a toolbox filled with useful features for web development. Inside you'll find the Apache HTTP server, the MariaDB database, and an interpreter for PHP and Perl scripts. It's like having all the tools you need in one place. Universal Compatibility: No matter which operating system you prefer, XAMPP can support you. It is available for different platforms, ensuring a consistent development experience whether you are using Windows, macOS or Linux.

**Towards the community:** XAMPP's open source nature means it's not only free, but open to the community to tinker and improve. This fosters collaboration and innovation in the world of web development.

**Web magic:** XAMPP is more than just a bundled software package. It's the magic wand for web developers. With the built-in Apache server, MariaDB database, and PHP/Perl interpreter, you can easily create dynamic web applications.

**Local playground:** One of the coolest features of XAMPP is the ability to create a local server environment right on your machine. This serves as a personal playground for site testing and development before they go live. It's like having a secret lab where you can experiment with no consequences. In short, XAMPP is the right choice for web developers who want a simple, comprehensive and community-driven solution for their local development needs. So go ahead, unleash your web development power with XAMPP!&#x20;

### **Working in Brief**

Here is a step-by-step guide on how to use XAMPP to make your web development journey easier:

1. Installation: Start by installing XAMPP on your computer. This handy package includes all the essentials like Apache, MariaDB, PHP and Perl. It's like having all the ingredients for your favorite recipes in one go.
2. **Local web server:** After installing XAMPP, launch it! Launching XAMPP creates a cozy little local server environment on your machine. It's like having your own proof platform at your fingertips.
3. **Database management:** Now let's talk about data. With MariaDB, you can easily store and manage your valuable application data. Think of it as your digital filing cabinet to store all your data.
4. **Web Development:** This is where the magic happens. With the XAMPP tools at your disposal, you can develop and test PHP and Perl scripts directly on your localhost. It's like having your own personal lab for coding testing. 5. Browser access: Don't keep your creations to yourself! Access your development site through your browser. It's like opening the curtains and letting the world see your work, even while it's still under construction.

In short, XAMPP is your trusted companion when it comes to web development. It simplifies the whole process by providing you with a self-contained environment equipped with all the necessary tools. It's like having a trusty workshop where you can create and perfect your web apps before they're ready for the big stage.

So go ahead and harness the power of XAMPP. It's the secret recipe that allows developers like you to seamlessly build, test, and tweak web applications before they hit the Internet. Happy coding! 🚀

### &#x20;Steps And Procedure

* &#x20;**Docker image of this application consists of following layers :**

```
'FROM debian:buster' Taking debian:buster as the base image.

And updating and installing all the required softwares like 'openssh-server' 'supervisor' 'net-tools'

Installing the Xampp software. And configuring Xampp to Enable web interface, error display in php.

And creating a /www folder and a symbolic link to it in /opt/lampp/htdocs. This is convenient because it doesn't interfere with xampp, phpmyadmin or other tools in /opt/lampp/htdocs.

And exposing 3306, 22 and 80 ports.
```

#### Deploy Xampp on Scaleinfinite

**This deployment utilizes the official Xampp Docker image. Here's a step-by-step guide to get you started:**

1. Begin by navigating to the "Create Apps" page and use the search bar to find the scaleinfinite/xampp  application.
2. Click on the "Install" button to initiate the installation process.
3. Fill in all the required fields with the necessary information.
4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
5. After making your selections, press the "Install" button to proceed.
6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
7. Copy the Hostname of the xampp  application without the NodePort and paste it into your preferred browser's address bar.
8. Voilà! You're now able to access the xampp webpage and explore its content.

### Installation&#x20;

| Docker Image                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------- |
| [`Xampp`](https://hub.docker.com/r/tomsik68/xampp/)👈(click me,for the dockerhub image) |

| Application name                                                               |
| ------------------------------------------------------------------------------ |
| Eg: Xampp1(you can put any name) |

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

| WORKING DIR                                                                             |
| --------------------------------------------------------------------------------------- |
| ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```  |
| Here use ( use the path after   " :"  )                 |
|  ```shell -v ~/my_web_pages:/www tomsik68/xampp```                   

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to** XAMPP **Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `xampp`
2. **Application Details:**
   * Application Name: `xampp1`
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

           ```
           -v ~/my_web_pages:/www 
           tomsik68/xampp
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an XAMPP instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots




### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.


### FAQ

**About Xampp image we used.**

This image is maintained by the scale infinite.

**Do the image secure to use ?**

The image is created and verified by the scale infinite. it is a 100% secure image.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

#### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, , database, xampp

</details>
