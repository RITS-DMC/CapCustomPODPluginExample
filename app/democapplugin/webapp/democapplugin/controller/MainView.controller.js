sap.ui.define([
    'jquery.sap.global',
	"sap/dm/dme/podfoundation/controller/PluginViewController",
	"sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v4/ODataModel"
], function (jQuery, PluginViewController, JSONModel,ODataModel) {
	"use strict";

	return PluginViewController.extend("rits.cap.custom.plugin.democapplugin.democapplugin.controller.MainView", {
		onInit: function () {
			PluginViewController.prototype.onInit.apply(this, arguments);
			
			           
            
		},




        onAfterRendering: function(){
           
            this.getView().byId("backButton").setVisible(this.getConfiguration().backButtonVisible);
            this.getView().byId("closeButton").setVisible(this.getConfiguration().closeButtonVisible);
            
            this.getView().byId("headerTitle").setText(this.getConfiguration().title);
            this.getView().byId("textPlugin").setText(this.getConfiguration().text); 

        },

		onBeforeRenderingPlugin: function () {

			let oDataModel = new ODataModel({
				serviceUrl: "https://" + window.location.host + "/destination/material-api/odata/v4/my/",
				operationMode: "Server",
				groupId: "$direct",
				synchronizationMode: "None",
				odataVersion: "4.0"
			});
			
			this.getView().setModel(oDataModel);
			
		},

        isSubscribingToNotifications: function() {
            
            var bNotificationsEnabled = true;
           
            return bNotificationsEnabled;
        },


        getCustomNotificationEvents: function(sTopic) {
            //return ["template"];
        },


        getNotificationMessageHandler: function(sTopic) {

            //if (sTopic === "template") {
            //    return this._handleNotificationMessage;
            //}
            return null;
        },

        _handleNotificationMessage: function(oMsg) {
           
            var sMessage = "Message not found in payload 'message' property";
            if (oMsg && oMsg.parameters && oMsg.parameters.length > 0) {
                for (var i = 0; i < oMsg.parameters.length; i++) {

                    switch (oMsg.parameters[i].name){
                        case "template":
                            
                            break;
                        case "template2":
                            
                        
                        }        
          

                    
                }
            }

        },
        

		onExit: function () {
			PluginViewController.prototype.onExit.apply(this, arguments);


		}
	});
});