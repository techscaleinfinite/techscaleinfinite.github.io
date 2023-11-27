

# 🖥 Joomla

### What's joomla?

Joomla isn't just a mouthful to say; it's an open-source powerhouse that lets you create and manage fantastic websites and online applications with ease. Let's break it down into simple terms that anyone can understand:

**1. Content Made Easy:**

* Joomla is like a super-smart librarian. It helps you create, edit, organize, and publish stuff on your website. You can add articles, blog posts, images, videos, and more.

**2. Easy-Peasy Interface:**

* Imagine your favorite video game. Joomla's admin panel is just as user-friendly and fun to navigate. You don't need to be a tech wizard to run your website.

**3. Supercharge Your Site:**

* Joomla is like a toolbox filled with cool gadgets. You can add all sorts of stuff to your site – templates, modules, plugins, and components – to make it do exactly what you want.

**4. Dress Up Your Site:**

* Ever tried on different outfits? Joomla lets you dress up your site with various templates and themes. They make your site look great and work smoothly on phones, tablets, and computers.

**5. Speak Any Language:**

* Whether you're a globetrotter or just want to reach a wider audience, Joomla has your back. It can speak many languages and make your content understandable to everyone.

**6. Boss-Level User Control:**

* Joomla gives you the power to be the boss. You can create accounts, decide who can do what, and protect some content from nosy visitors.

**7. Ironclad Security:**

* Worried about online baddies? Joomla is your digital security guard. It gets regular updates and can even add extra security measures.

**8. Google's Best Friend:**

* Everyone wants to be on Google's good side, right? Joomla helps you with that. It comes with tools to make your site shine in Google's search results.

**9. Friends Forever:**

* Joomla has a huge gang of friends. It's like a big party where everyone helps each other. They share tips, write guides, and keep Joomla in tip-top shape.

**10. Online Shop Ready:**

* Thinking of selling stuff online? Joomla's got you covered. It can turn your website into an online store with the right tools.

**11. Small or Super-sized:**

* Whether you're starting a personal blog or a massive business site, Joomla can handle it all. It's like a one-size-fits-all superhero for the web.

In a nutshell, Joomla is the easy-to-use, superhero buddy you need to build awesome websites. It's flexible, friendly, and can help you tackle all sorts of web projects, big or small. Your website adventures just got a whole lot cooler with Joomla on your side.

### **How It Works:**

Joomla Unveiled: The Web Wizard's Secret Ever wondered how websites come to life? Joomla is like the magical wand behind the scenes, making it all happen. Let's unveil the secret in simple terms:

**1. Ready, Set, Go:**

* It all starts with getting Joomla onto your web server. It's like planting the seeds of your website.
* During setup, you give your website a name, a short description, and create your secret admin code.

**2. Craft Your Content:**

* Once inside Joomla's special control room, you'll find a content editor – think of it like a digital notepad.
* You can create articles filled with text, pictures, videos, and more. It's where your ideas become web pages.

**3. Stay Organized:**

* Joomla has a built-in organizer. You can group your articles into categories. It's like sorting your books into different shelves.
* This makes managing a big website a piece of cake.

**4. Dress Your Website:**

* Think of Joomla like a wardrobe for your website. It offers different outfits (templates) to change the look and feel.
* You can pick one or create your own unique style.

**5. Superpowers Unleashed:**

* Joomla can do even more with its super extensions – they're like adding cool gadgets to your site.
* Modules are like building blocks you can place anywhere.
* Plugins make your site do special tricks.
* Components are like adding a new room to your digital house.

**6. Who's the Boss? You Are:**

* Joomla gives you the keys to user management. You can invite others to join the adventure and decide what they can or can't do.
* Perfect for group projects or exclusive clubs.

**7. Menu Magic:**

* Websites have menus just like a restaurant. Joomla lets you create them. Each menu item leads to a different part of your site.

**8. Talk to the World:**

* Joomla is a language expert. It can speak in many languages, so everyone understands what you're saying.

**9. Lights, Camera, Action:**

* When you're ready to show off, hit the "Publish" button. Your content goes live for the world to see.

**10. SEO Friend:**

* Joomla helps you get noticed on Google. It can make your web address look neat and tidy, which Google loves.

**11. Hang with the Gang:**

* Joomla is part of a big community. It's like a club of friendly experts. They chat on forums, share tips, and make your web journey smooth.

In a nutshell, Joomla is the web wizard that takes the hassle out of creating and managing websites. It's got your back with user-friendly tools and a group of extensions to add all the magic you need. You focus on your content, and Joomla does the web work. Easy peasy!

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

### Installation

| Docker Image                                                                               |
| ------------------------------------------------------------------------------------------ |
| `joomla`👈(click me,for the dockerhub image) |

| Application name                                                                |
| ------------------------------------------------------------------------------- |
| Eg: joomla1(you can put any name) |

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

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

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
