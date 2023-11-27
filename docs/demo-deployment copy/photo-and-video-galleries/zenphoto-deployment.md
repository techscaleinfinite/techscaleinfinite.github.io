

# 🖥 ZenPhoto Deployment

### What's  zenphoto?

**Zenphoto: Your Creative Website Companion**

In today's digital age, your online presence is your canvas for showcasing creativity through images, videos, and audio. Zenphoto, a robust Content Management System (CMS), is tailored for self-hosted websites with a special focus on galleries. Here's why Zenphoto truly shines:

**1. Multimedia Versatility:** Zenphoto is your stage for a grand multimedia performance. It effortlessly handles various media formats, from stunning images to captivating videos and soul-soothing audio. If you're into photography, design, filmmaking, or music, Zenphoto has got your back.

**2. Customized Page Management:** With Zenphoto, the stage is yours to design. Take full control of your website's structure with custom page management. Create and organize pages, including nested subpages, to elegantly manage your content.

**3. Intuitive Menu Creation:** Designing your website's navigation is a breeze with Zenphoto. Craft custom menus that reflect your site's unique structure, ensuring that your visitors find their way seamlessly.

**4. Feature-Rich Blogging:** Zenphoto's news section is your personal blog platform. It comes with nested categories, allowing you to share your thoughts and updates effectively. What's even more exciting is that you can seamlessly integrate new gallery items into your blog posts, making your content engaging and dynamic.

**5. Robust File Management:** Your website's resources are in safe hands with Zenphoto. It includes a capable file manager for handling non-gallery files, keeping everything organized efficiently.

**6. Scheduled Publishing:** Planning your content strategy is a breeze with Zenphoto's scheduled publishing feature. Prepare your posts in advance and have them go live when you want, allowing you to keep your audience engaged consistently.

**7. Community Interaction:** Connect with your audience like a pro. Zenphoto empowers you with features like comments, RSS feeds, tags, and statistics, helping you engage effectively with your visitors.

**8. User Management:** Zenphoto offers comprehensive user management, allowing you to create user groups and assign specific rights per user. You can also add an extra layer of security by password-protecting certain albums and pages.

**9. Multilingual Capabilities:** With Zenphoto, there are no language barriers. Reach a global audience with its multilingual support. You can create separate language sites with subdomain functionality, like fr.domain.com and en.domain.com, making sure your message is heard worldwide.

Zenphoto is more than just a CMS; it's your stage, your canvas, your spotlight to share your creativity with the world. Whether you're an artist, photographer, filmmaker, or musician, Zenphoto empowers you to express your passion and captivate your audience. It's your digital masterpiece waiting to be unveiled.

### **How It Works**

**How Zenphoto Brings Your Creative Website to Life**

Zenphoto is not your run-of-the-mill CMS; it's a powerhouse designed to help you effectively manage and showcase your creative work. Let's unravel the magic behind Zenphoto:

**1. Multimedia Content Harmony:** Zenphoto is your virtual art gallery, embracing all your creative expressions. It welcomes images, videos, and audio files with open arms. Whether you're an artist, photographer, filmmaker, or musician, Zenphoto's got your back.

**2. Tailoring Your Online Space:** Ever dreamed of a website that's as unique as you are? Zenphoto makes it happen. You can shape your website's structure with custom pages. These pages can even neatly nest under one another, making organization a walk in the park.

**3. Navigational Bliss:** Creating a user-friendly website is a piece of cake with Zenphoto. Custom menus are your trusty sidekicks. They allow you to design navigation that perfectly fits your website's character.

**4. Blogging with Pizzazz:** Zenphoto's blog-like news section is your platform for sharing your thoughts and updates. But wait, it's not just any blog. It's equipped with nested categories and lets you easily incorporate gallery items into your blog posts, keeping your content dynamic.

**5. Efficient File Handling:** Zenphoto takes on the role of an expert file manager for everything that isn't part of your gallery. With this feature, you can ensure your website's resources remain neatly organized.

**6. Timing is Everything:** Zenphoto understands that timing is crucial. The scheduled publishing feature lets you plan your content strategy in advance. Prepare your posts and set them to go live at just the right moment.

**7. Engaging Your Audience:** Zenphoto doesn't stop at managing your content; it also helps you connect with your audience. Features like comments, RSS feeds, tags, and statistics facilitate interactions, making your website more engaging.

**8. User Empowerment:** Taking charge of who can do what is a breeze with Zenphoto. It offers comprehensive user management, including user groups and individual rights assignments. And, for added security, you can even password-protect specific albums and pages.

**9. Multilingual Flexibility:** In a globalized world, Zenphoto ensures your website can speak multiple languages. Create separate language sites with subdomains like fr.domain.com and en.domain.com, reaching a diverse audience effortlessly.

**In a Nutshell: A Canvas for Your Creativity**

Zenphoto is more than just a CMS; it's your creative hub. Whether you're an artist showcasing your portfolio, a photographer displaying your best shots, a filmmaker sharing your videos, or a musician promoting your tracks, Zenphoto empowers you to express your creativity and captivate your audience. It's where your digital world finds order and harmony while staying visually pleasing and efficient.

With Zenphoto, your website becomes your canvas, your stage, and your platform for making an impact. Showcase your creativity with ease and elegance, all thanks to Zenphoto.

### Steps And Procedure

*   &#x20;**This deployment utilizes the official zenphoto Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the  [emieza/zenphoto](https://hub.docker.com/r/emieza/zenphoto) application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the Zenphoto application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the Zenphoto webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed the Zenphoto  application and gained access to its features through a seamless and user-friendly process.

### Installation

| Docker Image                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [Zenphoto ](https://hub.docker.com/r/emieza/zenphoto)  👈(click me,for the dockerhub image) |

| Application name                                                             |
| ---------------------------------------------------------------------------- |
| Eg: zenn(you can put any name) |

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

| WORKING DIR                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```                                                              |
| Here use ( use the path after   " :"  )                                                                             |
|  ```shell  -v ~/zenphoto/mysql:/var/lib/mysql \
        -v ~/zenphoto/www:/var/www/html \```  |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to zenphoto Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: zenphoto&#x20;
2. **Application Details:**
   * Application Name: Zenphoto
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

           ```sh
            -v ~/zenphoto/mysql:/var/lib/mysql \
                   -v ~/zenphoto/www:/var/www/html \
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an Zenphoto instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About Zenphoto image we used.**

This is the official Zenphoton image.

**Can I deploy my own Zenphoto image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, zen photo

</details>
