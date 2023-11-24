

# 🎨 Asciiflow Deployment

### What's asciiflow ?

\
**ASCII Flow: Where Creativity Meets Simplicity**

Imagine a canvas where your ideas come to life, but instead of paintbrushes and colors, you have a simple set of ASCII characters. Welcome to ASCII Flow, your gateway to a world of creativity and simplicity in diagramming.

**1. Infinite ASCII Diagrams:**

* _Unleash Your Imagination_: ASCII Flow provides you with an infinite canvas where you can create diagrams, flowcharts, and designs using a straightforward set of ASCII characters. Let your ideas flow freely.

**2. Google Drive Integration:**

* _Seamless Storage_: You can effortlessly save your ASCII creations to Google Drive, ensuring that your work is safe, secure, and accessible from anywhere.

**3. Resize and Freeform Draw:**

* _Flexible Design_: Need to adjust the size of your diagram or add freeform elements? ASCII Flow gives you the freedom to resize and freeform draw to achieve your desired layout.

**4. Export to Text/HTML:**

* _Share Your Vision_: Once your masterpiece is complete, export it directly to text or HTML. Share your creations with others or incorporate them into your projects with ease.

**5. ASCII and Unicode Support:**

* _Versatile Characters_: Whether you prefer classic ASCII or want to add a touch of sophistication with extended Unicode box drawing characters, ASCII Flow supports both, giving you versatile tools for your creative expressions.

**6. Web-Based and Interactive:**

* _Anywhere, Anytime_: Access ASCII Flow from your web browser. It's an interactive tool that's ready to bring your ideas to life whenever inspiration strikes.

**7. Text-Based Brilliance:**

* _The Power of Simplicity_: Despite its simplicity, ASCII Flow is a powerful tool for expressing ideas, creating diagrams, and visualizing concepts—all using text-based characters.

In summary, ASCII Flow is where simplicity meets creativity. It provides a limitless canvas for your ideas, seamless integration with Google Drive for secure storage, the flexibility to resize and freeform draw, and the ability to export your work to text or HTML for sharing and integration. Whether you're a seasoned ASCII artist or a beginner, ASCII Flow is your canvas for turning simple characters into intricate designs. So, embrace the elegance of text-based creativity and start diagramming with ASCII Flow today!

### **How It Works:**

**Unlocking ASCII Creativity: How ASCII Flow Works**

ASCII Flow is your digital canvas where the magic of creativity blends seamlessly with the simplicity of text-based art. Let's embark on a journey through its inner workings:

**1. Infinite ASCII Canvases:**

* _Unleash Your Imagination_: Imagine an endless canvas where ideas come to life using plain text. ASCII Flow grants you this boundless realm for creating diagrams, flowcharts, and designs—all with a set of simple ASCII characters.

**2. Google Drive Harmony:**

* _Safe and Accessible_: Your ASCII masterpieces are safely stored in Google Drive. This integration ensures your creations are secure, accessible, and ready for collaboration from any corner of the world.

**3. Flexibility in Design:**

* _Reshape and Revise_: Need to resize your diagram? Yearning for freeform elements? ASCII Flow provides the flexibility to reshape and freely draw to achieve your desired layout.

**4. Export Brilliance:**

* _Sharing Made Simple_: Once your work of art is complete, export it effortlessly to text or HTML formats. Now, you can share your creations with others or seamlessly incorporate them into your projects.

**5. ASCII and Unicode Support:**

* _Diverse Characters_: Whether you're a purist who prefers classic ASCII or an enthusiast exploring the elegance of extended Unicode box drawing characters, ASCII Flow caters to your diverse character needs.

**6. Web-Based Inspiration:**

* _Anytime, Anywhere_: ASCII Flow awaits you in your web browser, ready to bring your ideas to life. It's an interactive platform, available whenever creativity strikes.

**7. The Elegance of Text:**

* _Simplicity's Power_: Despite its minimalist appearance, ASCII Flow is a potent tool for expressing ideas, visualizing concepts, and creating intricate diagrams—all using text-based characters.

In essence, ASCII Flow is where simplicity becomes a canvas for creativity. It offers an endless space for your ideas, tight integration with Google Drive for secure storage, the freedom to reshape and draw, and the convenience of exporting to text or HTML. Whether you're an ASCII aficionado or just dipping your toes into the world of text art, ASCII Flow welcomes you to explore the possibilities of turning plain characters into intricate designs. Embrace the elegance of text-based creativity and embark on your ASCII journey with ASCII Flow today!

### Steps And Procedure

*   **This deployment utilizes the official asciiflow  Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the  [l](https://hub.docker.com/r/linuxserver/dillinger)[fraoustin/asciiflow](https://hub.docker.com/r/fraoustin/asciiflow) application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the ASCII Flow application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the  ASCII Flow webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed the ASCII Flowapplication and gained access to its features through a seamless and user-friendly process.



### Installation

| Docker Image                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ascii flow ](https://hub.docker.com/r/fraoustin/asciiflow)[👈(](https://hub.docker.com/r/linuxserver/firefox)click me,for the dockerhub image) |

| Application name                                                             |
| ---------------------------------------------------------------------------- |
| Eg: flow(you can put any name) |

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
| ```shellGive env variable.``` ```shellEg:key==value```  |

| WORKING DIR                                                                             |
| --------------------------------------------------------------------------------------- |
| ```shellWORKDIR for the application.``` ```shellEg:usr/src/yourAPP```  |
| Here use ( use the path after   " :"  )\\               |
| /share                                                                                  |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to ascii flow Deployment**

1. **Docker Image Selection****:**
   * Docker Image Name: ascii flow
2. **Application Details****:**
   * Application Name: `ascii flow`
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
       * /share
6. **Access Configuration****:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation****:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an ASCII Flow   instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About** ASCII Flow **image we used.**

This is the official ASCII Flow  mage.

**Can I deploy my own media** ASCII Flow **with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions&#x20;

</details>
