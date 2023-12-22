
<p align="center">
  <img src="/img/sdsu.jpg" alt="Alt Text" width="25%"/>
</p>
<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>

# 💧 Drupal deployment

# Drupal: Your Friendly Website Companion

Drupal is your open-source, PHP-powered friend for building and managing websites. With a modular architecture, it's like having building blocks to create a tailored website. Themes and modules allow easy customization, giving your site a unique look and functionality. The Drupal community, a supportive group of developers and users, constantly enhances the platform. Content creation is a breeze with Drupal's user-friendly interface, and its PHP engine ensures dynamic and real-time website interactions. In summary, Drupal is more than a website tool; it's a powerful platform with a friendly community, making web content management flexible and enjoyable.

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 80          | Exposes port 80 for the Drupal app. Users can access the Drupal application through this port. |

### Volume Mounts

| Path Mapping                                    | Description |
| ----------------------------------------------- | ----------- |
| /path/on/host/modules:/var/www/html/modules     | Maps the host directory for Drupal modules to the corresponding directory inside the container. |
| /path/on/host/profiles:/var/www/html/profiles   | Maps the host directory for Drupal profiles to the corresponding directory inside the container. |
| /path/on/host/sites:/var/www/html/sites         | Maps the host directory for Drupal sites to the corresponding directory inside the container. |
| /path/on/host/themes:/var/www/html/themes       | Maps the host directory for Drupal themes to the corresponding directory inside the container. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>



### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`drupal`](https://hub.docker.com/\_/drupal)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: OWNCLOUD1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 80                                                                                                                     |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

| If you choose Advanced option|                                                                                                                   | 

| ENV VARIABLE          | ```Give env variable.``` ```Eg:key==value```                                                                             | 
| WORKING DIR           | ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```Here use ( use the path after   " :"  )   ```shell -v /path/on/host/modules:/var/www/html/modules \-v /path/on/host/profiles:/var/www/html/profiles \v-v /path/on/host/sites:/var/www/html/sites \ -v /path/on/host/themes:/var/www/html/themes \```                    |
| `Access`              |                                                                                                                          | 
| Public                |    (select this if you want to make it public)                                                                           |
| Private               |  (select this if you want to make it private)                                                                            |


### &#x20;Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



**Step-by-Step Guide to Drupal Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `drupal`
2. **Application Details:**
   * Application Name: `drupal`
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

           ```console
           -v /path/on/host/modules:/var/www/html/modules \
           	-v /path/on/host/profiles:/var/www/html/profiles \
           	-v /path/on/host/sites:/var/www/html/sites \
           	-v /path/on/host/themes:/var/www/html/themes \
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an drupal instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots


![Alt Text](/img/g3.jpg)
![Alt Text](/img/t5.jpg)
![Alt Text](/img/d343.jpg)
![Alt Text](/img/gg.jpg)


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

</span>



