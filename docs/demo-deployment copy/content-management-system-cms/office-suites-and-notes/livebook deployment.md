
<p align="center">
  <img src="/img/dcdt5.jpg" alt="Alt Text" width="25%"/>
</p>
<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>

# 📓 Livebook Deployment

# Livebook: Your Collaborative Code Notebook

Livebook is your dynamic companion in the coding and data exploration realm, seamlessly blending documentation and execution. With interactive code notebooks featuring Markdown support and code cells for Elixir execution, Livebook transforms coding into a collaborative adventure. The Monaco Editor, Kino for visualizations, and Smart Cells enhance your coding experience, while reproducibility and predictability streamline the process. Livebook fosters effortless collaboration, allowing multiple users to work simultaneously. It's open-source, decentralized, and ready to elevate your coding journey into a vibrant, communal exploration. Dive into Livebook for a magical coding experience!

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 80          | Exposes port 80 for the Livebook application. Users can access Livebook through this port. |
| Tcp       | -           | -             |

### Volume Mounts

| Path Mapping | Description |
| ------------ | ----------- |
| $(pwd):/data | Maps the host directory to the /data directory inside the Livebook container. This allows Livebook to access and store data in the specified host directory. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [Livebook](https://hub.docker.com/r/livebook/livebook)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: book1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 8080                                                                                                                   |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

                                                      

### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)




**Step-by-Step Guide to livebook Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: livebook
2. **Application Details:**
   * Application Name: `livebook`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `8080`
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
       * \-v $(pwd):/data [ghcr.io/livebook-dev/livebook](http://ghcr.io/livebook-dev/livebook)
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an Livebook instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots


![Alt Text](/img/111.jpg)
![Alt Text](/img/r22.jpg)
![Alt Text](/img/ee4.jpg)
![Alt Text](/img/rr3.jpg)
![Alt Text](/img/eeee4.jpg)
![Alt Text](/img/ee3e.jpg)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

**About Livebook image we used.**

This is the official Livebook mage.

**Can I deploy my own media Livebook with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, Livebook

</details>

</span>

