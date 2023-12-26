
<p align="center">
  <img src="/img/dd31.png" alt="Alt Text" width="25%"/>
</p> 

<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>

# 🖥 Couch Base Deployment


**Couchbase** is an award-winning distributed NoSQL cloud database renowned for its versatility, speed, and scalability. It supports a JSON-based data format, providing adaptability and accommodating various data technologies within a single architecture. With features like AI-powered coding assistance (Capella iQ), a memory-first architecture, robust scalability, and SQL++ for versatile querying, Couchbase offers a powerful solution for modern data management, seamlessly bridging the gap between NoSQL and SQL databases.

### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 8091        | Couchbase exposes port 8091 for HTTP.     |
| Tcp       | -           | -             |

### Volume Mounts

Couchbase uses volume mounts to manage data storage. You can set these when running the container:

| Volume      | Description                                    |
| ----------- | ---------------------------------------------- |
| `/couchbase` | Path to store Couchbase configuration data.    |


### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation



|                       |                                                                                                                          |
|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [couch base](https://hub.docker.com/\_/couchbase)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: cou1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |  8091                                                                                                                      |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |
                                                                  


### Steps And Procedure&#x20;

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)


**Step-by-Step Guide to couch db Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `couchbase`
2. **Application Details:**
   * Application Name: couchbase
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `HTTP`
   * Port: `8091`
4. **Installation Options:**
   * Choose between "Default" or "Advanced" installation.
5. **Advanced Installation (Optional):**
   * If selecting "Advanced," you can customize the environment variables and working directory:
   *   **Environment Variables:**

       Environment variables are dynamic values used by a containerized application for configuration. They are defined as key-value pairs, like `API_KEY=xyz`, and provide flexibility to adjust an app's behavior without changing its code.

       * Environment Variables: Define environment variables with keys and values (e.g., `key=value OR MONGO_INITDB_ROOT_USERNAME=root, MONGO_INITDB_ROOT_PASSWORD=123` ).
   *   **Working Directory:**

       The working directory is the starting point inside a container where an app's files are located. It affects relative file paths and operations. For example, if set to `/usr/src/yourAPP`, an app will reference files from there, like `/usr/src/yourAPP/data.txt`.

       * Working Directory: Set the working directory for the application (e.g., `usr/src/yourAPP`).
       * Here use ( use the path after   " :"  )
       * /couchbase
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an mongodb instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots

![Alt Text](/img/1111.jpg)
![Alt Text](/img/2121.jpg)
![Alt Text](/img/23233.jpg)
![Alt Text](/img/23231.jpg)

![Alt Text](/img/44.jpg)
![Alt Text](/img/gg4.jpg)
![Alt Text](/img/d221.jpg)
![Alt Text](/img/dd211.jpg)

![Alt Text](/img/dede.jpg)


### FAQ

**About couchbase image we used.**

This is the official couchbase image.

**Are there any restrictions on adding data sources ?**

you can add any data source that couchbase supports.

**Can i deploy older version of  Mondo or my own modified couchbase image ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, database, couch base

</details>

</span>

