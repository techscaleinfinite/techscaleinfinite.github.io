---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/vvvc.png" alt="Alt Text" width="25%"/>
</p>
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 🖥 Media Wiki Deployment

# MediaWiki: Crafting Collaborative Knowledge

**MediaWiki**, the force behind Wikipedia, is more than software; it's the architect of collaborative knowledge creation. Users, like a team of friends, contribute and edit articles, creating a digital playground for learning and sharing. With a detailed version control system, users can navigate through the history of changes and revert if needed.

It's not just about text; MediaWiki embraces media with ease, allowing users to incorporate images, audio, and video seamlessly. With user contributions, personal spaces are created, fostering community interaction. The software's markup language simplifies content creation, making it accessible to all. In essence, MediaWiki is the unsung hero behind.

### Exposed Ports

| Port Type | Port Number | Description                        |
| --------- | ----------- | ---------------------------------- |
| Http      | 80          | MediaWiki exposes port 80 for HTTP. |
| Tcp       | -           | -             |

### Volume Mounts

MediaWiki uses volume mounts to manage data storage. You can set these when running the container:

| Volume                                       | Description                                      |
| -------------------------------------------- | ------------------------------------------------ |
| `/var/www/html`                              | This is the path where MediaWiki's site files are stored. |

### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |
</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`mediawiki`](https://hub.docker.com/\_/mediawiki)(click me,for the dockerhub image)                                  |
| Application name      |  Eg: wiki(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |  80                                                                                                                   |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)




### Visual Snapshots

![Alt Text](/img/dd222.jpg)
![Alt Text](/img/aa2.jpg)
![Alt Text](/img/dd244.jpg)


### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About media wiki image we used.**

This is the official medi wiki image.

**Can I deploy my own media wiki image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, media wiki&#x20;

</details>

</span>

<Comments />