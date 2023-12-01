<p align="center">
  <img src="/img/kkkw.jpg" alt="Alt Text" width="25%"/>
</p> 
<span style={{ fontFamily: 'Georgia', fontSize: '12pt' }}>

# 🖥 Mysql deployment

### MySQL: The Trusty Librarian of Data

**MySQL** serves as an open-source Relational Database Management System (RDBMS), offering structured data organization with SQL queries. It acts like a trusted librarian, ensuring data integrity, scalability, and ease of retrieval. MySQL's role extends from creating databases and defining tables to inserting, retrieving, and manipulating data, making it a reliable partner for various web and software projects.

</span>


<span style={{ fontFamily: 'Helvetica', fontSize: '12pt' }}>

### Installation&#x20;

|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [`mysql`](https://hub.docker.com/\_/mysql)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: mysql1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
| Protocol Value        |   TCP:3306                                                                                                   | 
| Install with Default  | (select this if you want install with default settings if don't have environment value and working directory)            |
| Advanced              | (select this if you want to go with advanced settings, where you select you own environment value and working directory) | 
| If you choose Advanced option|                                                                                                                   | 
| ENV VARIABLE          | ```Give env variable.``` ```Eg:key==value```                                                                             | 
| WORKING DIR           | ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```Here use ( use the path after   " :"  )  ``` -v /my/custom:/etc/mysql/conf.d```                   |
| `Access`              |                                                                                                                          | 
| Public                |    (select this if you want to make it public)                                                                           |
| Private               |  (select this if you want to make it private)                                                                            |

### Steps And Procedure

*

    **This deployment utilizes the official MySql  image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the mysql application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the mysql  application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the  mysql webpage and explore its content.


**Step-by-Step Guide to Mysql Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `mysql`
2. **Application Details:**
   * Application Name: `mysql1`
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `TCP`
   * Port: `3306`
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
           -v /my/custom:/etc/mysql/conf.d
           ```
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.



By following these steps, you can effortlessly deploy an MYSQL instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

**Connecting to MySQL Database via MySQL Client**

When deploying a MySQL application, you can't directly connect to it via a web browser as you would with HTTP applications. Instead, you need to use a MySQL client to establish a connection using the application's IP address, username, and password. Here's how to do it:

1. **Install MySQL Client:** If you don't have MySQL client installed, you can download and install it on your local machine from the official MySQL website.
2. **Gather Connection Details:** After deploying your MySQL application, note down its IP address, username, and password. You might have received these details during the deployment process or through an email.
3. **Open MySQL Client:** Open your MySQL client application on your local machine.
4. **Create a New Connection:** Look for an option to create a new connection or establish a new session. This might vary based on the MySQL client you are using.
5. **Enter Connection Details:** In the connection setup, provide the following details:
   * Host: The IP address of your deployed MySQL application.
   * Username: The MySQL username associated with your application.
   * Password: The corresponding password for the provided username.
6. **Connect:** Once you've entered the details, click on the "Connect" or "Log In" button to establish a connection.
7. **Execute Queries:** After successfully connecting, you'll be able to execute SQL queries, manage databases, and perform various database-related operations using the MySQL client interface.

### Visual Snapshot

![Alt Text](/img/13w.jpg)
![Alt Text](/img/ew22.jpg)

![Alt Text](/img/dwe3.jpg)
![Alt Text](/img/fwd2.jpg)
![Alt Text](/img/we2.jpg)
![Alt Text](/img/dw2.jpg)

![Alt Text](/img/gfw3.jpg)
![Alt Text](/img/ed3.jpg)
### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About mysql image we used.**

This is the official mysql image.

**Are there any restrictions on adding data sources ?**

you can add any data source that mysql supports.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

#### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, database, mysql

</details>

</span>
