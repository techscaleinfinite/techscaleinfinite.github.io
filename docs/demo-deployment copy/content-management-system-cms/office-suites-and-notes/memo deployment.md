<p align="center">
  <img src="/img/vf.jpg" alt="Alt Text" width="25%"/>
</p>

<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>

# 📜 memo Deployment

# memos: Your Personal Memo Assistant

**memos** is a privacy-focused memo application that offers simplicity without compromising on features. It prioritizes data privacy by securely storing information in an SQLite database, embracing plain text with Markdown for easy formatting. Built with Go, React.js, and SQLite, memos ensures a lean yet powerful experience. Customizable to your preferences, it's completely open source, allowing transparency and community collaboration. Best of all, memos is free forever, making it your go-to solution for jotting down ideas, organizing thoughts, and capturing inspiration with peace of mind. 🗒️🔐✍️

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Tcp       | 5230        | Memo exposes port 5230 for its functionality. |
| http       | -           | -             |
### Volume Mounts

| Path Mapping       | Description                                     |
| ------------------- | ----------------------------------------------- |
| ./memos/:/var/optmemos | Maps the host directory './memos/' to the '/var/optmemos' directory inside the Memo container. This allows Memo to access and store data in the specified host directory. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [memos](https://hub.docker.com/r/elestio/memos)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: memo1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 5230                                                                                                                  |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  | 


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


**Step-by-Step Guide to mems Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `memos`
2. **Application Details:**
   * Application Name: memos
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `5230`
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
           - './memos/:/var/opt/memos'
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an  memos instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots


![Alt Text](/img/oo4.jpg)
![Alt Text](/img/eee55.jpg)
![Alt Text](/img/kk2.jpg)
![Alt Text](/img/ff5.jpg)



### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About memos image we used.**

This is the official memos image.

**Can I deploy my own memos image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, memo

</details>


</span>
