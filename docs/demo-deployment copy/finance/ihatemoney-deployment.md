
<p align="center">
  <img src="/img/vff.jpg" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>

# 💹 ihatemoney Deployment

### "I Hate Money": Simplifying Shared Finances

"I Hate Money" is a web application designed to streamline shared budget management. It effortlessly tracks expenses, calculates debts, and suggests efficient ways to settle bills, making financial coordination within groups seamless. With an intuitive interface, real-time updates, and a focus on privacy, it transforms financial discussions into a harmonious experience. Accessible across multiple platforms, this tool ensures that managing shared expenses becomes a stress-free endeavor.

### Exposed Ports

| Port Type | Port Number | Description                              |
| --------- | ----------- | ---------------------------------------- |
| Http      | 8080        | "I Hate Money" application is accessible on port 8080. |
| Tcp       | -           | -             |

### Volume Mounts

"I Hate Money" may use volume mounts for data and configuration. Set these when running the container:

| Volume                         | Description                                |
| ------------------------------ | ------------------------------------------ |
| `/database:/app/data/db`       | Path to the directory for database storage. |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [I Hate Money](https://hub.docker.com/r/ihatemoney/ihatemoney/) 👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: money1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     8000                                                                                                                   |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |



### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)




**Step-by-Step Guide to ihatemooney  Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: ihatemoney
2. **Application Details:**
   * Application Name: `ihatemoney`
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
           /database
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an I Hate Money  instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/ww21.jpg)
![Alt Text](/img/eee3.jpg)
![Alt Text](/img/f4.jpg)

![Alt Text](/img/ge3.jpg)
![Alt Text](/img/gg42.jpg)
![Alt Text](/img/ee333.jpg)

### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About I Hate Money image we used.**

This is the official I Hate Money  mage.

**Can I deploy my own media I Hate Money with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, monry, finance

</details>

</span>


