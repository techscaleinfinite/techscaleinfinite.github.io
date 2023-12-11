
<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>

# 📺 baby buddy Deployment

# baby buddy: Your Subtitle Sidekick

**baby buddy** steps into the spotlight as the unsung hero of your media experience, focusing on perfect subtitles. Acting as the Robin to Sonarr and Radarr's Batman, baby buddy allows you to personalize your subtitle preferences for TV shows and movies. It embarks on a relentless quest, hunting and downloading subtitles that align with your media files, enhancing your viewing experience.
baby buddy seamlessly integrates with media management software, allowing you to set detailed subtitle preferences. It continuously monitors your media library, searching for new arrivals. Acting as a diligent detective, baby buddy explores subtitle provider websites, downloads, and matches subtitles with precision. Notifications signal the completion of the process, all automated for a worry-free media experience.

In a nutshell, baby buddy is your dedicated companion, ensuring your favorite shows and movies are adorned with perfectly matched subtitles. It brings a touch of personalization, convenience, and enjoyment to your media world. 🎬🍿✨

 

|  **Exposed Ports:**    | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Http port          |       8000 is exposed to facilitate web-based communication for baby buddy. Users can access the baby buddy application through this port.                              |
| Tcp port      |              -                                                                     | 

|  **Working directory:** | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| /path/to/baby buddy/config:/config         |  This is the path  where baby buddy's configuration files are stored. It ensures that the necessary configuration data is accessible.                                  |



|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |


</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`baby buddy`](https://hub.docker.com/r/linuxserver/baby buddy)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: bzzz1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8000                                                                                                                       |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

                                                                        


### Steps And Procedure

**This deployment utilizes the official baby buddy Docker image. Here's a step-by-step guide to get you started:**

1. Begin by navigating to the "Create Apps" page and use the search bar to find the [`linuxserver/baby buddy`](https://hub.docker.com/r/linuxserver/baby buddy)👈 application.
2. Click on the "Install" button to initiate the installation process.
3. Fill in all the required fields with the necessary information.
4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
5. After making your selections, press the "Install" button to proceed.
6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
7. Copy the Hostname of the baby buddy application without the NodePort and paste it into your preferred browser's address bar.
8. Voilà! You're now able to access the baby buddy webpage and explore its content.

By following these straightforward steps, you'll have successfully deployed the baby buddy application and gained access to its features through a seamless and user-friendly process.



**Step-by-Step Guide to baby buddy Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `baby buddy`
2. **Application Details:**
   * Application Name: `bazar1`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `8000`
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

           ```yaml
            - /path/to/baby buddy/config:/config
            
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an baby buddy instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/q1.png)
![Alt Text](/img/q2.png)
![Alt Text](/img/q3.png)

![Alt Text](/img/q4.png)
![Alt Text](/img/q5.png)
![Alt Text](/img/q6.png)
![Alt Text](/img/q7.png)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About baby buddy image we used.**

This is the official baby buddy image.

**Can I deploy my own baby buddy image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going.

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions , media, entertainment

</details>

</span>

