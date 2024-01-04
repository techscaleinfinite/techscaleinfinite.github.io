---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/w3r.png" alt="Alt Text" width="25%"/>
</p> 
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# 📺 Bazarr Deployment

# Bazarr: Your Subtitle Sidekick

**Bazarr** steps into the spotlight as the unsung hero of your media experience, focusing on perfect subtitles. Acting as the Robin to Sonarr and Radarr's Batman, Bazarr allows you to personalize your subtitle preferences for TV shows and movies. It embarks on a relentless quest, hunting and downloading subtitles that align with your media files, enhancing your viewing experience.
Bazarr seamlessly integrates with media management software, allowing you to set detailed subtitle preferences. It continuously monitors your media library, searching for new arrivals. Acting as a diligent detective, Bazarr explores subtitle provider websites, downloads, and matches subtitles with precision. Notifications signal the completion of the process, all automated for a worry-free media experience.

In a nutshell, Bazarr is your dedicated companion, ensuring your favorite shows and movies are adorned with perfectly matched subtitles. It brings a touch of personalization, convenience, and enjoyment to your media world. 🎬🍿✨

 

|  **Exposed Ports:**    | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Http port          |       6767 is exposed to facilitate web-based communication for Bazarr. Users can access the Bazarr application through this port.                              |
| Tcp port      |              -                                                                     | 

|  **Working directory:** | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| /path/to/bazarr/config:/config         |  This is the path  where Bazarr's configuration files are stored. It ensures that the necessary configuration data is accessible.                                  |
| /path/to/movies:/movies (optional):      |  Points to the directory where TV shows are stored.                                                                                        | 
| /path/to/tv:/tv (optional):  |  Points to the directory where TV shows are stored.                                | 


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |


</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [`bazarr`](https://hub.docker.com/r/linuxserver/bazarr)👈(click me,for the dockerhub image)                                   |
| Application name      |  Eg: bzzz1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 6767                                                                                                                       |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |

                                                                        


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots

![Alt Text](/img/fe3.jpg)
![Alt Text](/img/453.jpg)

![Alt Text](/img/454.jpg)
![Alt Text](/img/err.jpg)
### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About bazarr image we used.**

This is the official bazarr image.

**Can I deploy my own bazarr image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going.

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions , media, entertainment

</details>

</span>

<Comments />