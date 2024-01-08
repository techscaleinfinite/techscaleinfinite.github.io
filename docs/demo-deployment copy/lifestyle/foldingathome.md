---
draft: false
---
import Comments from '/src/components/HomepageFeatures/Comment';

<p align="center">
  <img src="/img/kh.png" alt="Alt Text" width="25%"/>
</p> 


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

# foldingathome Deployment
**Foldinghome:**
A distributed computing project focused on simulating protein dynamics, including the complex processes of protein folding and the movements of proteins associated with various diseases. Folding@home engages citizen scientists who volunteer their personal computers to run simulations. The insights derived from this collaborative effort contribute to a deeper understanding of biology and open new avenues for therapeutic development.





### Exposed Ports

| Port Type | Port Number | Description                               |
| --------- | ----------- | ----------------------------------------- |
| Http      | 7396       | foldingathome Web UI is accessible on port 7396. |
| Tcp       | -           | -             |

### Volume Mounts

foldingathome uses volume mounts to manage configuration and download data. You can set these when running the container:

| Volume                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `/path/to/appdata/config`    | Path to foldingathome's configuration files.  |



### Environment Variables


|   **Environment value:**          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
|-       |  -                              |

</span>


<span style={{ fontFamily: 'Roobert, sans-serif', fontSize: '12pt' }}>

### Installation


|  Description          | Decription                                                                                                               | 
| --------------------- | ------                                                                                                                   | 
| Docker Image          |   [linuxserver/foldingathome](https://hub.docker.com/r/linuxserver/foldingathome)👈(click me,for the dockerhub image)                           |
| Application name      |  Eg: foldingathome1(you can put any name)                                                                                        | 
| Resource Allocation   |  0-100%(10 % of your allocated resources (CPU, RAM) will be used for this application.)                                  | 
| `Protocol`            |                                                                                                                          | 
|  Http:                |     7396                                                                                                                    |
|  Tcp:                 |                                                                                                                        | 
|    Advanced           |    Install with Default                                                                                                  |




### Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)



### Visual Snapshots



![Alt Text](/img/t9.png)

![Alt Text](/img/t1.png)
![Alt Text](/img/t2.png)
![Alt Text](/img/t3.png)
![Alt Text](/img/t7.png)
![Alt Text](/img/t8.png)














### Youtube Tutorial&#x20;

Check out our youtube video for more clarification.



### FAQ

**About foldingathome image we used.**

This is the official foldingathome image.

**Can I deploy my own foldingathome image with modified configuration ?**

Yes, you can simply deploy any version or modified image to our platform by linking your docker hub account to our platform.

**Are my data persistent ?**

For the free user there is no persistence, and for the premium user you can different type of persistence.

### Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!&#x20;

<details>

<summary>Category</summary>

Kubernetes, cloud computing, DevOps, cloud services, hosting platform, container orchestration, cloud infrastructure, cloud deployment, cloud management, cloud technology, cloud solutions, foldingathome

</details>

</span>


<Comments />