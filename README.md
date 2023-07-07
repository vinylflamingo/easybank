# easybank

## Running this Solution
1. If your local IIS is listening on port 443, you'll need to stop it.
   > This requires an elevated PowerShell or command prompt.
   ```
   iisreset /stop
   ```

2. Run the following command. Include your license path. Admin password is set to "b" by default, but you can opt to change it. Topology is XM1 by default, but you can opt to change it. 
    ```ps1
    .\init.ps1 -InitEnv -LicenseXmlPath "C:\path\to\license.xml" -AdminPassword "DesiredAdminPassword" -Topology xm1
    ```
3. Run the following command. This will start your sitecore instance. 
   ```ps1
    .\up.ps1
    ```
   You can use the -noapp flag to only launch the containers with sitecore, and not the jss application. 
    ```ps1
    .\up.ps1 -noapp
    ```
4. Begin Development!
5. Before checking in, serialize new templates and content with: 
    ```ps1 
      dotnet sitecore ser pull
    ```
