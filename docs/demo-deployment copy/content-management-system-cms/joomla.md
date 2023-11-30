
<p align="center">
  <img src="/img/rfgf.jpg" alt="Alt Text" width="25%"/>
</p>

# 🖥 Joomla

# Joomla: Your Website's Superhero

**Joomla** is the superhero of open-source web development, simplifying website creation and management. With a user-friendly interface, it empowers users to effortlessly add and organize content, be it articles, images, or videos. Think of Joomla as a versatile wardrobe for your website, offering various templates and themes to dress it up.

Its superpowers extend with extensions like modules, plugins, and components, allowing users to add functionality and customize their digital space. Joomla gives you the authority with user management, enabling collaboration on web projects. It's SEO-friendly, multilingual, and part of a supportive community. Whether you're starting a personal blog or a business site,

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  `joomla`👈(click me,for the dockerhub image)                                  |
| Application name      |  Eg: joomla(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
| Protocol Value        |   Http:80                                                                                                           | 
| Install with Default  | (select this if you want install with default settings if don't have environment value and working directory)            |
| Advanced              | (select this if you want to go with advanced settings, where you select you own environment value and working directory) | 
| If you choose Advanced option|                                                                                                                   | 
| ENV VARIABLE          | ```Give env variable.``` ```Eg:key==value```                                                                             | 
| WORKING DIR           | ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```Here use ( use the path after   " :"  ) grafana-storage:/var/lib/grafana                      |
| `Access`              |                                                                                                                          | 
| Public                |    (select this if you want to make it public)                                                                           |
| Private               |  (select this if you want to make it private)                                                                            |

### Steps And Procedure

*   **This deployment utilizes the official joomla Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the joomla application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the joomla application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the  joomla webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed the joomla application and gained access to its features through a seamless and user-friendly process.

### Steps to connect mysql and joomla

You can check out how to configure [mysql.](https://docs.scaleinfinite.fr/demo-deployment/database/mysql-deployment)

Here are the general steps to configure Joomla to work with a MySQL database:

1. **Database Setup:**
   * Before you start, make sure you have MySQL installed on your server and that it's running. You should also create an empty MySQL database that Joomla will use to store its data. You can do this using the MySQL client or a graphical tool like phpMyAdmin.
2. **Joomla Installation:**
   * Download the Joomla installation package from the official Joomla website.
   * Upload the installation package to your web server's directory using FTP or a file manager provided by your hosting provider.
   * Visit your website's URL in a web browser, and the Joomla installation process will begin. Follow the on-screen instructions, which will include entering your database information.
3. **Database Configuration:**
   * During the Joomla installation, you will need to provide the following database information:
     * Database Type: Select "MySQLi" or "MySQL" as the database type, depending on your MySQL version and configuration.
     * Hostname: This is usually "localhost" if your MySQL server is on the same server as your Joomla installation. If your MySQL server is on a different server, enter the server's IP address or hostname.
     * Username: The MySQL username you created when setting up the database.
     * Password: The password associated with the MySQL username.
     * Database Name: The name of the MySQL database you created for Joomla.
4. **Table Prefix (Optional):**
   * Joomla allows you to set a table prefix for its database tables. This is a security measure that adds a prefix to the table names to help prevent conflicts with other applications sharing the same database.
5. **Site Configuration:**
   * Complete the remaining steps of the Joomla installation, which include configuring your site settings, creating an administrator account, and choosing a template.
6. **Finalize Installation:**
   * Once you've completed the installation, Joomla will create the necessary database tables and configure itself to work with the MySQL database you specified.
7. **Use Joomla:**
   * You can now use Joomla to create and manage your website's content through its user-friendly interface. Joomla will handle all database interactions behind the scenes.



**Step-by-Step Guide to joomla Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `joomla`
2. **Application Details:**
   * Application Name: `joomla`
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
       *

           The following environment variables are also honored for configuring your Joomla instance:

           * `-e JOOMLA_DB_HOST=...` (defaults to the IP and port of the linked `mysql` container)
           * `-e JOOMLA_DB_USER=...` (defaults to "root")
           * `-e JOOMLA_DB_PASSWORD=...` (defaults to the value of the `MYSQL_ROOT_PASSWORD` environment variable from the linked `mysql` container)
           * `-e JOOMLA_DB_NAME=...` (defaults to "joomla")

           ```yaml
            MYSQL_ROOT_PASSWORD: example
           ```
   *   **Working Directory:**

       The working directory is the starting point inside a container where an app's files are located. It affects relative file paths and operations. For example, if set to `/usr/src/yourAPP`, an app will reference files from there, like `/usr/src/yourAPP/data.txt`.

       * Working Directory: Set the working directory for the application (e.g., `usr/src/yourAPP`).
       * Here use ( use the path after   " :"  )
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an joomla instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots
![Alt Text](/img/kk0.jpg)
![Alt Text](/img/oo0.jpg)
![Alt Text](/img/kko.jpg)



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About joomla image we used.**

This is the official joomla image.

**Can I deploy my own media joomla with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, joomla

</details>
