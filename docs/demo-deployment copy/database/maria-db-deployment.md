

# 🦭 Maria Db Deployment

### What's  maria db?

**Data's Trusty Guardian:** Imagine MariaDB as a diligent librarian in a vast library filled with information. But instead of books, this library stores data, lots and lots of it. MariaDB's job is to organize, safeguard, and make that data easily accessible whenever you need it.

**Cousin to MySQL:** MariaDB shares its family tree with MySQL, another famous RDBMS. Think of them as cousins with a lot in common. In fact, they're so similar that you can often switch between them seamlessly. It's like having two cars from the same manufacturer; they both get you to your destination, but one might have a few extra features.

**Open-Source Spirit:** What makes MariaDB even more appealing is its open-source nature. This means the code behind it is like an open book, accessible to anyone who wants to take a peek. It's a bit like a community garden; everyone can pitch in, making it better and more beautiful over time.

**Structured Data Expert:** When it comes to handling data, MariaDB is meticulous. It loves structure and order. You feed it data in neat rows and columns, and it ensures that everything stays organized and can be retrieved quickly. It's like a master puzzle solver, arranging pieces so you can see the big picture.

**Multilingual Speaker:** MariaDB can understand many languages, but its favorite is SQL (Structured Query Language). SQL is like the universal language of databases, allowing you to communicate with MariaDB and ask it questions about your data. It's like having a personal translator when you're in a foreign country.

**Guardian of Integrity:** Data integrity is crucial, and MariaDB takes it seriously. It enforces rules to ensure your data stays accurate and consistent. It's like having a meticulous editor who proofreads every word in a document to catch errors.

**Scalable Companion:** Whether you have a small project or a massive enterprise, MariaDB is flexible. It can grow with you. It's like having a house that can expand as your family grows, saving you from having to move every time you need more space.

**Community-Powered:** MariaDB has a vibrant community of users and developers who constantly improve it. It's like a town where everyone knows each other, and they work together to make their community even better.

In summary, MariaDB is your go-to guardian for all things data-related. It's open, reliable, and well-versed in the language of structured data. Whether you're running a small blog or managing a global enterprise, MariaDB is there to keep your data safe, organized, and ready for action.

### **How It Works:**

**Data Entry and Organization:** MariaDB is a bit like a librarian in a vast, digital library. It starts with you feeding it data - this could be anything from your shopping list to a company's financial records. MariaDB likes data that's neatly organized into tables, kind of like how you'd lay out information in a spreadsheet.

**Speaking SQL:** To communicate with MariaDB, you use a language called SQL (Structured Query Language). It's like talking to MariaDB in a way it understands. You can ask questions, add new data, update existing stuff, or even say, "Hey, give me all the sales from last month." MariaDB takes your SQL commands and gets to work.

**Behind the Scenes:** When you send MariaDB a query, it's a bit like giving a librarian a reference number and asking for a specific book. MariaDB quickly scans its indexes, which are like the library's catalog, to find the right data. It's all about speed and efficiency.

**Data Integrity:** Just like our librarian friend ensures every book is in its place, MariaDB takes data integrity seriously. It has rules and checks in place to make sure data stays accurate. For instance, it won't let you put a letter in a column meant for numbers.

**Security Guard:** Your data's security is a priority for MariaDB. It's like a vigilant security guard, making sure only authorized users get access. You can set up passwords, user roles, and permissions to control who sees what.

**Saving and Retrieving:** When you add or change data, MariaDB saves it for you. Later, when you need that data, it retrieves it super fast, thanks to its efficient organization. It's like having a magical librarian who can instantly fetch the book you want from miles of shelves.

**Scaling Up:** Whether you're running a small blog or a massive online store, MariaDB can scale up to handle your data. It's like a building that can grow taller as your business grows, so you don't have to move to a bigger place.

**Open-Source Community:** MariaDB is open source, which means it's built and improved by a community of enthusiasts and experts. It's like a big family of volunteers and professionals constantly making it better.

**Cross-Platform Magic:** MariaDB is a globetrotter, running on various operating systems like Windows, Linux, and macOS. It's like a polyglot who can speak multiple languages, ensuring it can work wherever you need it.

So, MariaDB is your friendly data librarian, fluent in SQL, dedicated to keeping your data organized, secure, and easy to access. Whether you're running a small project or a large enterprise, it's there to make sure your data stays in tip-top shape.

### Steps And Procedure

*   **This deployment utilizes the official maria db Docker image. Here's a step-by-step guide to get you started:**

    1. Begin by navigating to the "Create Apps" page and use the search bar to find the maria db application.
    2. Click on the "Install" button to initiate the installation process.
    3. Fill in all the required fields with the necessary information.
    4. If you prefer, you can click on the "Advanced" option to access additional settings (this step is optional).
    5. After making your selections, press the "Install" button to proceed.
    6. Once the installation is complete, you'll be directed to the "My Apps" page, where you'll find a list of all the applications you've deployed.
    7. Copy the Hostname of the maria db application without the NodePort and paste it into your preferred browser's address bar.
    8. Voilà! You're now able to access the maria db webpage and explore its content.

    By following these straightforward steps, you'll have successfully deployed the maria db application and gained access to its features through a seamless and user-friendly process.

### Installation

| Docker Image                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------- |
| [`mairadb`](https://hub.docker.com/\_/mariadb)👈(click me,for the dockerhub image) |

| Application name                                                               |
| ------------------------------------------------------------------------------ |
| Eg: ymaria(you can put any name) |

| Resource Allocation                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.) |

`PROTOCOL`

<table><thead><tr><th width="417">Protocol</th><th>Protocol Value</th></tr></thead><tbody><tr><td>Http</td><td>-</td></tr><tr><td>Tcp</td><td>3306</td></tr></tbody></table>

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
| Here use ( use the path after   " :"  )                 |
| /etc/mysql/conf.d                                                                       |

`Access`

| Public                                      | Private                                      |
| ------------------------------------------- | -------------------------------------------- |
| (select this if you want to make it public) | (select this if you want to make it private) |

**Step-by-Step Guide to maria db Deployment**

1. **Docker Image Selection:**
   * Docker Image Name: `maria db`
2. **Application Details:**
   * Application Name: maria
   * Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   * Protocol: `TcP`
   * Port: `3306`
4. **Installation Options:**
   * Choose between "Default" or "Advanced" installation.
5. **Advanced Installation (Optional):**
   * If selecting "Advanced," you can customize the environment variables and working directory:
   *   **Environment Variables:**

       Environment variables are dynamic values used by a containerized application for configuration. They are defined as key-value pairs, like `API_KEY=xyz`, and provide flexibility to adjust an app's behavior without changing its code.

       * Environment Variables: Define environment variables with keys and values (e.g., `key=value`).

       ```yaml
       environment:
             MARIADB_ROOT_PASSWORD: example
       ```
   *   **Working Directory:**

       The working directory is the starting point inside a container where an app's files are located. It affects relative file paths and operations. For example, if set to `/usr/src/yourAPP`, an app will reference files from there, like `/usr/src/yourAPP/data.txt`.

       * Working Directory: Set the working directory for the application (e.g., `usr/src/yourAPP`).
       * Here use ( use the path after   " :"  )
       * here in this case use this /etc/mysql/conf.d
6. **Access Configuration:**
   * Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   * Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy an maria db instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

### How to connect?

**1. Install HeidiSQL:**

* If you haven't already, you'll need to download and install HeidiSQL on your computer. Think of it as the key to open the door to your MariaDB database.

**2. Launch HeidiSQL:**

* Once HeidiSQL is installed, open it up. It's like turning the key in the lock to enter your database world.

**3. Create a New Session:**

* In HeidiSQL, you'll need to set up a "session" to connect to your MariaDB database. Think of this as setting up your workspace.
* Click on "File" in the top menu, then select "Session manager."
* In the Session manager, click on the "New" button. It's like reserving a desk in the library.

**4. Configure Connection Details:**

* In the "Settings" tab of your new session, you'll need to fill in some details:
  * **Network Type:** Choose the appropriate network type. If you're connecting to a MariaDB server on the same computer, you can use "MariaDB or MySQL (TCP/IP)."
  * **Hostname/IP:** Enter the address of your MariaDB server. It's like putting in the library's address to find it.
  * **User:** Type in your MariaDB username. It's like telling the librarian your name.
  * **Password:** Enter your MariaDB password. Treat it like your library card's PIN.

**5. Test the Connection:**

* Click on the "Test" button to make sure everything is working smoothly. It's like checking if your library card opens the library door.

**6. Save the Session:**

* Go back to the "Main" tab of the session manager and give your session a name, like "My MariaDB Connection." This way, you can easily find it next time.

**7. Connect:**

* Finally, click "Open" to connect to your MariaDB database. It's like turning the key to unlock the library door and walk in.

**8. Explore Your Database:**

* You're in! HeidiSQL will display your MariaDB database structure on the left side, like bookshelves with different sections.
* You can now start running queries, viewing and editing your data, and managing your database, just like a librarian browsing through books.

Remember, HeidiSQL is your friendly librarian in the world of databases. With these steps, you've successfully connected to your MariaDB database, and you're ready to explore and manage your data.

### Visual Snapshots


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About maria db image we used.**

This is the officia maria db image.

**Can I deploy my own Maria db** **image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, database, maria db

</details>
