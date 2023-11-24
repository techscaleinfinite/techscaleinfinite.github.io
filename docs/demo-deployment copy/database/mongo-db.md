

# 🖥 Mongo DB

### What's Mongo DB?

MongoDB is a real gem in the database world and here's why:

**NoSQL databases:** MongoDB is a fresh departure from traditional databases. It doesn't limit your data to rigid tables and rows; instead, he dances to the beat of his own drums, using flexible, freehand collections of materials.

Document Orientation: Think of your data as a string of general-purpose JSON-like BSON documents. These documents can be as flexible as you want, can even contain nested tables and sub-documents. It's like having a stack of digital index cards that you can mix and match at will. Ability of extension: MongoDB is like a chameleon: it adapts to your needs. It is designed to be horizontally scalable, meaning you can easily distribute your data across multiple servers or clusters. This extension is like having a rubber band on your data storage, ensuring it can grow comfortably according to your needs.

**Flexible scheme:** In the MongoDB world, you are the master of your data destiny. MongoDB's dynamic schema is like a canvas on which you can draw different strokes for each document. It's a lifesaver when you're dealing with ever-changing data structures. It's like having a drawer on your desk where you can store new things without worrying about putting them in neat compartments.

So MongoDB is more than just a database; it's a flexible, document-friendly, and infinitely scalable solution that makes sense of the unpredictable nature of data. Whether you're working on a small project or managing large data sets, MongoDB has your back, allowing you to build your data landscape with creative freedom. It's a database for people who march to the beat of the drums based on their own data.

### **Working in Brief:**

**Data structure:** MongoDB keeps its data organized into collections that you can think of as tables in a traditional relational database. Each collection is a container of individual documents, like the rows in these tables.

**Document-oriented storage:** MongoDB stores data in BSON documents (binary JSON). These documents are extremely flexible and can hold many different types of data, from simple strings and numbers to more complex arrays and subdocuments. It's like having a Swiss army digital knife for data storage. Query and index: MongoDB is very powerful when it comes to querying data. You can use its powerful query language to filter, sort, and aggregate data in a collection. But here's the fun part: Intervening indexes to enhance your queries. They create special data structures that make data retrieval very fast, like having a well-organized library where you can quickly find the book you need.

**CRUD Operation:** MongoDB talks about the following basic CRUD operations:

Create: To add a new document to the collection, simply insert it. It's like putting a new book on the library shelf.

Read: When you want to get data, you use queries to find and retrieve documents. It's like going through the shelves of a library to choose a book to read.

Update: MongoDB allows you to easily modify existing documents. It's like adding a new chapter to a book or updating information in an encyclopedia. DELETE: Sometimes you need to delete data. MongoDB simplifies things by allowing you to remove documents from a collection, just like removing books from a library.

So MongoDB is more than just a data storage solution; it is a dynamic and flexible system that allows you to efficiently manipulate and retrieve your data. It's like having a library of information at your fingertips, where you can seamlessly add, explore, update, and delete documents as needed. It is both powerful and user-friendly data management. 📚📊

### Steps And Procedure&#x20;

**This deployment utilizes the official Mongodb Docker image. Here's a step-by-step guide to get you started:**

1. Begin by navigating to the "Create Apps" page and use the search bar to find the mongodb application.
2. Click on the "Install" button to initiate the installation process.
3. Fill in all the required fields with the necessary information.
4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
5. After making your selections, press the "Install" button to proceed.
6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
7. Copy the Hostname of the mongodb  application without the NodePort and paste it into your preferred browser's address bar.
8. Voilà! You're now able to access the mongodb webpage and explore its content.

### Steps to connect with mongo db

If you want to connect MongoDB Compass to a MongoDB instance running on a different host or IP address, you can follow these steps:

1. **Open MongoDB Compass**: Launch MongoDB Compass on your computer.
2. **Click "New Connection"**: In the MongoDB Compass interface, click on the "New Connection" button to start creating a new connection.
3.  **Configure Connection Details**: In the connection configuration window, follow these steps:

    * **Hostname**: Enter the IP address or hostname of the MongoDB server you want to connect to. In your case, this would be `103.37.96.201`.
    * **Port**: Use the default MongoDB port `27017`.
    * **Authentication**: If the MongoDB server requires authentication, enter the necessary credentials (username and password).

    **Enter Connection URL**: In the connection configuration window, you'll see a single text box labeled "Connection String." Here, you will directly enter the connection URL in the following format:

    ```arduino
     codemongodb://<IP_ADDRESS>:27017
    ```

    Replace `<IP_ADDRESS>` with the actual IP address of the MongoDB server. In your case, the URL would be:

    ```arduino
     codemongodb://103.37.96.201:27017
    ```
4. **Advanced Options** (Optional): If you need to specify additional connection options, you can expand the "Advanced" section. Here, you can configure options like SSL, replica set name, and more.
5. **Test Connection**: After entering the connection details, you can click the "Test" button to check if the connection is successful. MongoDB Compass will attempt to connect to the server and validate the settings.
6. **Save the Connection**: If the connection test is successful, you can give your connection a name and optionally add it to your favorites. Then click the "Connect" button to establish the connection.
7. **Explore and Manage Data**: Once the connection is established, MongoDB Compass will display the databases and collections available on the connected server. You can explore and manage your data using the intuitive graphical interface.

Remember that for the connection to work, the MongoDB server at the specified IP address (`103.37.96.201` in your case) must be reachable from your computer and configured to allow connections from the IP address you are using. Also, if the server requires authentication, make sure to provide the correct credentials during the connection setup.

### Installation

| Docker Image                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------- |
| [mongo db](https://hub.docker.com/\_/mongo)👈(click me,for the dockerhub image) |

| Application name                                                                  |
| --------------------------------------------------------------------------------- |
| Eg: mongo db1(you can put any name) |

| Resource Allocation                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.) |

`PROTOCOL`

<table><thead><tr><th width="417">Protocol</th><th>Protocol Value</th></tr></thead><tbody><tr><td>Http</td><td>-</td></tr><tr><td>Tcp</td><td>27017</td></tr></tbody></table>

| Install with Default                                                                                                                                        | Advanced                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (select this if you want install with default settings if don't have environment value and working directory) | (select this if you want to go with advanced settings, where you select you own environment value and working directory) |

If you choose Advanced option:

| ENV VARIABLE                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| |

| WORKING DIR                                                                             |
| --------------------------------------------------------------------------------------- |
| ```shellWORKDIR for the application.``` ```shellEg:usr/src/yourAPP```  |
| Here use ( use the path after   " :"  )                 |
| /my/own/datadir:/data/db                                                                |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to MONGO DB Deployment**

1. **Docker Image Selection****:**
   * Docker Image Name: `Mongo db`
2. **Application Details****:**
   * Application Name: Mongo1
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration****:**
   * Protocol: `TCP`
   * Port: `27017`
4. **Installation Options****:**
   * Choose between "Default" or "Advanced" installation.
5. **Advanced Installation (Optional****):**
   * If selecting "Advanced," you can customize the environment variables and working directory:
   *   **Environment Variables:**

       Environment variables are dynamic values used by a containerized application for configuration. They are defined as key-value pairs, like `API_KEY=xyz`, and provide flexibility to adjust an app's behavior without changing its code.

       * Environment Variables: Define environment variables with keys and values (e.g., `key=value OR MONGO_INITDB_ROOT_USERNAME=root, MONGO_INITDB_ROOT_PASSWORD=123` ).
   *   **Working Directory:**

       The working directory is the starting point inside a container where an app's files are located. It affects relative file paths and operations. For example, if set to `/usr/src/yourAPP`, an app will reference files from there, like `/usr/src/yourAPP/data.txt`.

       * Working Directory: Set the working directory for the application (e.g., `usr/src/yourAPP`).
       * Here use ( use the path after   " :"  )
       * /my/own/datadir:/data/db
6. **Access Configuration****:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation****:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an mongodb instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### Visual Snapshots




### FAQ

**About Mongo DB image we used.**

This is the official Mongo DB image.

**Are there any restrictions on adding data sources ?**

you can add any data source that Mongo Db supports.

**Can i deploy older version of  Mondo or my own modified Mongo db image ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, , database, mongo db

</details>
