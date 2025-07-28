# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.

1. Clone the project from the Git repository.
 
2. Update Namespace (Optional):

    Change the namespace if needed (e.g: rits.cap.custom.plugin.democapplugin) in index.html file under app->plugin->index.html.
 
3. File or Folder | Purpose
   ---------|----------
        `app/` | content for UI frontends goes here
        `db/` | your domain models and data go here
        `srv/` | your service models and code go here
       
  
4. Build the mta.yaml using your preferred method:
 
        Run mbt build, or
 
        Right-click the project and choose “Build MTA Project”.
 
5. Deploy the generated .mtar file to your Cloud Foundry space.
 
6. After deployment: 
        once the deployement is completed it will deploy two applications
		
        copy the url of the the application without srv name
 
        Note the plugin path from index.html (e.g., /democapplugin) and the namespace (e.g., rits.cap.custom.plugin.democapplugin).

 
7. Register the Plugin in SAP DMC

        Go to Manage Service Registry → UI Extensions tab.
 
        Create a new UI Extension entry:
 
        Use the plugin URL in the URL Field
		
		path in the path field
		
		Format the namespace using slashes (e.g., rits/cap/custom/plugin/democapplugin).
 
        Enable the status and click Create.
				
 
8. Verify Plugin in POD Designer
	    After registration, the plugins should be visible in the POD Designer.

9. Use the Plugin in POD Designer Drag and drop custom cap plugin onto a relevant POD layout such as WorkCenter or Operation.

10. Create Destination in BTP Subaccount

        Navigate to your RITS DMC Subaccount.

        Go to the Connectivity tab and open the Destinations section.

        Click "Create" → choose "From Scratch".

        Fill in the following details:

        Name: material-api (this must match the name used in your plugin controller).

        Type: HTTP

        Authentication: OAuth2ClientCredentials

        Client ID: Locate this in your BTP Instances. Find the Authorization and Trust Management service instance.Open the instance to view the Client ID.

        Client Secret: Also found in the same service instance details.

        Token Service URL:  This is provided in the Authorization Details of the same service instance.

        URL: Enter the deployed service URL from the BTP space (typically the srv module URL).

        Add a property:

                Key: HTML5.DynamicDestination

                Value: true

                Click "Create" to save the destination.

11. Verify Material Data

        Once the destination is created successfully and your plugin is properly connected:

        Navigate to your custom plugin.

        You should now see the Material Data loaded and displayed in the plugin table.
    
12. Run the CAP Project Using the Following Commands (in order):
    
        To run your CAP project correctly, always execute these commands in sequence:
    
             cds build
    
             cds deploy
    
             cds watch
    

14. Refer to the attached PPT in the project for guidance on the following:

        How to define the schema inside the db folder

        How to create services inside the srv folder

        How to call a SAP DMC API URL

        How to bind the API response to a table in your UI
    
    


