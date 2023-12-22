

# 📸 DigiKam Deployment

DigiKam is a versatile Content Management System (CMS) designed for self-hosted websites, focusing on multimedia galleries. It excels in handling various media formats, offers customized page and menu management, robust blogging features, efficient file handling, and multilingual support. With scheduled publishing, user management, and community interaction features, DigiKam empowers artists, photographers, filmmakers, and musicians to showcase their creativity seamlessly on a global stage.

## Exposed Ports

| Port Type | Port Number | Description                              |
| --------- | ----------- | ---------------------------------------- |
| Http      | 3000        | DigiKam application is on port 3000.      |
| Tcp       | -           | -                                       |

## Path Configuration

"DigiKam" uses path configuration. Set these when running the container:

| Path                          | Description                              |
| ----------------------------- | ---------------------------------------- |
|                               |                                          |

## Installation

|  Description          | Description                                                | 
| --------------------- | ---------------------------------------------------------- | 
| Docker Image          | [linuxserver/digikam](https://hub.docker.com/r/linuxserver/digikam)  |
| Application name      | Eg: zen1(you can put any name)                              | 
| Resource Allocation   | 0-100% (10 % of your allocated resources (CPU, RAM) will be used for this application.) |
| Protocol              |                                                            | 
| Http:                 | 3000                                                       |
| Tcp:                  |                                                            | 
| Advanced              | Install with Default                                        |

## Steps And Procedure

For Detailed steps and procedure please vist this page: [Click here](https://techscaleinfinite.github.io/introduction/cloud-float/Steps%20and%20procedure)

## Steps And Procedure

1. **Docker Image Selection:**
   - Docker Image Name: DigiKam
2. **Application Details:**
   - Application Name: DigiKam
   - Resource Allocation: Set the desired resource allocation from 0-100%.
3. **Protocol Configuration:**
   - Protocol: HTTP
   - Port: 3000
4. **Installation Options:**
   - Choose between "Default" or "Advanced" installation.
5. **Advanced Installation (Optional):**
   - If selecting "Advanced," you can customize the environment variables and working directory:
      - **Environment Variables:**
         - Define environment variables with keys and values (e.g., `key=value`).
      - **Working Directory:**
         - Set the working directory for the application (e.g., `usr/src/yourAPP`).
         - Here use (use the path after ":")
6. **Access Configuration:**
   - Choose between "Public" or "Private" access to the deployed application.
7. **Installation:**
   - Click the "Install" button to initiate the deployment process.

By following these steps, you can effortlessly deploy a DigiKam instance with your chosen configurations. This enables you to tailor the environment to match your application's requirements and specifications. Whether opting for the default installation or delving into advanced settings, our platform ensures a seamless deployment experience while providing you the flexibility to customize according to your needs.

## Visual Snapshots

![Alt Text](/img/f2.png)
![Alt Text](/img/f22.png)
![Alt Text](/img/f32.png)
![Alt Text](/img/f221.png)
![Alt Text](/img/f223.png)
![Alt Text](/img/f323.png)

## Youtube Tutorial

Check out our YouTube video for more clarification.

## FAQ

**About DigiKam image we used:**
This is the official DigiKam image.

**Can I deploy my own DigiKam image with modified configuration?**
Yes, you can simply deploy any version or modified image to our platform by linking your Docker Hub account to our platform.

**Are my data persistent?**
For the free user, there is no persistence, and for the premium user, you can choose different types of persistence.

## Join us

Stay informed and engaged with our project's latest developments and support on [Slack](https://app.slack.com/client/T04QS32JX6E/C04QKEWE146). Join us today to connect, collaborate, and keep the momentum going!


