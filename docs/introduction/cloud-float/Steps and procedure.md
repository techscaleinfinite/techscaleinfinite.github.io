---
sidebar_position: 4
---


# Steps And Procedure

<p align="center">
  <img src="/img/dwdww.png" alt="Alt Text" width="400"/>
</p>


 Here's a step-by-step guide to get you started:

1. Begin by navigating to the "Create Apps" page and use the search bar to find the  name of the  application you want to install.
2. Click on the "Install" button to initiate the installation process.
3. Fill in all the required fields with the necessary information such as name, port number and environmental variables, each app has different port number and environmental value so make sure you the necesaary changes for the particular app.
4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
5. After making your selections, press the "Install" button to proceed.
6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
7. Copy the Hostname of the Baïkal  application without the NodePort and paste it into your preferred browser's address bar.
8. Voilà! You're now able to access the particular applications webpage and explore its content.


# Here's more detailed version:

**Step-by-Step Guide to Application Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `Application Image Name`
2. **Application Details:**
   * Application Name: Application Image Name
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP/TCP`
   * Port: `port no.`
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

By following these steps, you can effortlessly deploy an  Application  instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.


By following these straightforward steps, you'll have successfully deployed the  application and gained access to its features through a seamless and user-friendly process.
