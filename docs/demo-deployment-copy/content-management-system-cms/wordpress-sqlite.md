---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# WordPress SQLite

### What's WordPress SQLite?

<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/fds.jpg" alt="Alt Text" width="25%"/>
</p>

WordPress is a free and open-source content management system written in hypertext preprocessor language and paired with a MySQL or MariaDB database with supported HTTPS. SQLite is an open-source SQL database system that stores data in a text file on a device. It provides a simple and efficient way to manage and retrieve structured information locally.

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

**Key Points:**

1. **Open-Source SQL:** SQLite is freely accessible, offering SQL database capabilities for local storage.
2. **Text File Storage:** Data is stored in a single text file, eliminating the need for a separate server.
3. **Lightweight:** SQLite is compact, making it suitable for applications with limited resources.
4. **Embedded Database:** It's integrated within the application, not requiring a separate database server.
5. **Self-Contained:** The entire database is contained within a single file, enhancing portability.

### **Working in Brief:**

1. **Database Creation:** Applications integrate SQLite by creating a database file.
2. **Table Structure:** Define tables with columns to structure the data.
3. **Data Storage:** Insert, update, or delete data within the tables.
4. **SQL Queries:** Utilize SQL queries to retrieve specific information from the database.
5. **Local Retrieval:** Applications access data directly from the local SQLite file.

SQLite offers a convenient solution for applications that require structured data storage without the complexity of a traditional database system. Its lightweight nature and self-contained design make it an ideal choice for various applications.

### Steps And Procedure&#x20;
For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)

&#x20;**Docker image of this application consists of following layers :**

```
'FROM wordpress:latest' Taking Wordpress as the base image

Used PHP scripts to 'install' the SQLite plugin and setting up the database so that the wordpress will recognize the sqlite database. 

```

#### Deploy Wordpress SQLite on Scaleinfinite

* &#x20;Go to create apps page and Search scaleinfinite/wpsqlite on the search bar.
* &#x20;Click on install button.
* Fill all the required fields.
* &#x20;click on Advanced.
* &#x20;Click on the Install button.
* &#x20;You will be redirected to My Apps page, Here you can find all the applications you deployed.
* &#x20;Copy the wpsqlite application Hostname without NodePort and search the Url.
* Now you can see the wordpress language selection page.
* After selecting language you will be directly redirected to site creation page and fill all the fields like site name and username and so on.
* Then Login with that detials.
* Then you will be redirected to the wordpress Admin dashboard.

### Installation

| Docker Image                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------- |
| [`Wpsqlite`](https://hub.docker.com/\_/wordpress)👈(click me,for the dockerhub image) |

| Application name                                                                   |
| ---------------------------------------------------------------------------------- |
| Eg: wordpress1(you can put any name) |

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

| WORKING DIR                                                                             |
| --------------------------------------------------------------------------------------- |
| ```WORKDIR for the application.``` ```Eg:usr/src/yourAPP```  |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |


### Visual SnapShots


<img src="/img/zz3.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/ddq.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/rr5.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/cccf.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />



### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going! &#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, wordpress

</details>

</span>

<Comments />