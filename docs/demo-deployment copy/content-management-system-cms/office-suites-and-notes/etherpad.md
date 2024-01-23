---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';





# Etherpad
<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

<p align="center">
  <img src="/img/sfb.jpg" alt="Alt Text" width="25%"/>
</p>

# Etherpad: Collaborative Writing Symphony

Etherpad is not just a text editor; it's a virtuoso of collaborative writing. With features like rich editing, minimalist interface, dark mode, and seamless integration of visuals, it transforms your writing into a collaborative masterpiece. The real-time collaboration, version history, time slider, and group chat create a harmonious environment for multiple authors. Etherpad respects privacy with access control and self-hosting options, while its customization and exporting features allow your creativity to take center stage. It's an open-source symphony, where ideas unite, and documents come to life in a world of collaborative creativity.

### Exposed Ports

| Port Type | Port Number | Description |
| --------- | ----------- | ----------- |
| Http      | 9001        | Exposes port 9001 for the Etherpad application. Users can access Etherpad through this port. |

### Volume Mounts

| Path Mapping                                     | Description |
| ------------------------------------------------ | ----------- |
| application/lib/etherpad-lite/var/dirty.db       | Maps the host directory for Etherpad's dirty.db file to the corresponding directory inside the container. |

### Environment Variables

|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |



</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |  [ethepad](https://hub.docker.com/r/etherpad/etherpad)👈(click me,for the dockerhub image                                   |
| Application name      |  Eg: etherpad1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                | 9001                                                                                                                    |
|  Tcp:                 |                                                                                                                          | 
|    Advanced           |    Install with Default                                                                                                  |


### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots

<img src="/img/ee.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/ee3.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} /> <img src="/img/rr.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />

<img src="/img/ooyy.jpg" alt="Alt Text" style={{ maxWidth: '350px' }} />





### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.

### FAQ

For Detailed FAQ please vist this page: [FAQ](https://techscaleinfinite.github.io/FAQ)

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions&#x20;

</details>

</span>


<Comments />