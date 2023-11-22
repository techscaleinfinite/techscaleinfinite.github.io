# Accessing Persistent Storage Via FTP

## FileZilla: Your Reliable FTP Solution

FileZilla is a popular, open-source, and user-friendly FTP (File Transfer Protocol) client that enables easy upload, download, and management of files between your local computer and a remote server. Whether you need to transfer files to your web hosting server, manage website content, or work with files on remote servers, FileZilla provides a straightforward way to perform these tasks.

## How to Install FileZilla: Step-by-Step Guide

Follow these steps to install FileZilla on your computer:

1. **Download FileZilla:**
   - Visit the official [FileZilla website](https://filezilla-project.org/download.php).
   - Navigate to the "Download FileZilla Client" section.
   - Choose the appropriate version for your operating system (Windows, macOS, Linux).

2. **Install FileZilla on Windows:**
   - After downloading the installer, double-click on it to start the installation.
   - Follow the on-screen instructions in the setup wizard.
   - Select the installation options you prefer.
   - Once the installation is complete, FileZilla should be available in your Start menu or on your desktop.

3. **Install FileZilla on macOS:**
   - Open the downloaded DMG file.
   - Drag the FileZilla icon to the Applications folder.
   - FileZilla will be installed in your Applications folder.

4. **Install FileZilla on Linux:**
   - The installation process can vary based on your Linux distribution. In most cases, you can install FileZilla through your package manager using the command-line interface. For example, on Ubuntu, you can use:
     ```bash
     sudo apt-get update
     sudo apt-get install filezilla
     ```

## Using FileZilla: Getting Started

### Launch FileZilla:
- Open FileZilla from your Start menu, Applications folder, or by typing `filezilla` in the terminal.

### Connect to a Server:
1. Click on "File" in the top menu and select "Site Manager."
2. Click on "New Site" and enter a name for your connection.
3. Enter the Host, Port, Protocol (FTP or SFTP), and log in with your Username and Password.
4. Click "Connect" to establish the connection.

### Transferring Files:
- Once connected, the interface will show your local files on the left and remote server files on the right.
- Navigate to the directory you want to upload or download files to/from.
- Select the files you want to transfer and drag them to the desired location.

### Managing Files:
- You can create new directories, delete files, rename items, and manage permissions using the context menu or toolbar.

## Our App Integration with FileZilla

We've integrated FileZilla into our platform, allowing you to easily access your hosted application files using the FTP credentials provided to you via email. Here's how it works:

1. **Receive FTP Credentials:**
   - After signing up for our service, you'll receive an email containing your unique FTP URL, username, and password.

2. **Download and Install FileZilla:**
   - If you don't already have FileZilla installed, you can download and install it from their [official website](https://filezilla-project.org/download.php).

3. **Connect to Your Application:**
   - Open FileZilla and enter the provided FTP URL, username, and password in the respective fields. Click "Quickconnect" to establish a secure connection to your application's files.

4. **Transfer Files:**
   - Once connected, you'll see a split-screen interface showing your local files on the left and your application's files on the right. Simply drag and drop files between the two panels to transfer them.

5. **Effortless File Management:**
   - With FileZilla, you can upload, download, delete, and organize files within your hosted applications with ease. It's a powerful tool for keeping your application's content up-to-date and managing data efficiently.

## Troubleshooting FileZilla Connection Issues

If you're experiencing connection issues with FileZilla, especially when using Wi-Fi or a mobile hotspot, here are some steps to troubleshoot and resolve the problem:

1. **Check Network Connection:**
   - Ensure that your computer is connected to the correct Wi-Fi network or mobile hotspot.
   - Check if you have a stable internet connection by visiting a website in your web browser.

2. **Firewall and Antivirus:**
   - Firewalls and antivirus software can sometimes block FileZilla's connection. Check your firewall and antivirus settings to ensure they are not blocking FileZilla's access to the internet.
   - Temporarily disable your firewall or antivirus and try connecting again to see if the issue persists.

3. **Check Server Details:**
   - Double-check that you've entered the correct server hostname, port number, and protocol (FTP or SFTP) in FileZilla's Site Manager.

4. **Passive Mode:**
   - Try switching between active and passive mode in FileZilla's settings. Go to "Edit" > "Settings" > "Connection" > "FTP" > "Transfer Mode" and switch between "Active" and "Passive."

5. **Network Restrictions:**
   - Some networks, especially public Wi-Fi networks, might have restrictions that prevent certain ports or protocols from working. Try connecting from a different network to see if the issue persists.

6. **Mobile Hotspot Troubleshooting:**
   - If you're using a mobile hotspot to connect, make sure that the hotspot is enabled and has a stable connection to the internet.
   - Verify that you have sufficient mobile data or the hotspot is not restricted by your mobile carrier.

7. **Restart Router/Hotspot:**
   - Sometimes, network issues can be resolved by restarting your router or mobile hotspot. Turn off the device, wait a few seconds, and then turn it back on.

8. **Check FileZilla Logs:**
   - FileZilla logs can provide more information about connection issues. Go to "View" > "Message Log" to see if there are any error messages.

9. **Update FileZilla:**
   - Make sure you are using the latest version of FileZilla. Outdated software can sometimes cause compatibility issues.

10. **Try a Different FTP Client:**
    - If you're still experiencing issues, consider trying a different FTP client to see if the problem is specific to FileZilla.

11. **Contact Support:**
    - If none of the above steps resolve the issue, consider reaching out to FileZilla's support or consulting online communities for assistance.
