sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("valuehelpresue.valuehelpresue.controller.Value_help_resue", {
            onInit: function() {
                var json = new sap.ui.model.json.JSONModel("model/Data.json");
                var form = this.byId("EmpForm");
                this.getView().setModel(json, "formModel");
                form.bindElement("formModel>/results/0"); //element binding
    
            },
            onValueHelp:function(evt){
                this.id=evt.getSource().getId();
                if(!this.fragment1){
                    this.fragment1= new sap.ui.xmlfragment( "valuehelpresue.valuehelpresue.fragments.GenericF4", this);
                    var json=new sap.ui.model.json.JSONModel("model/Data.json");
                    this.fragment1.setModel(json);
                    this.fragment1.addStyleClass("sapUiSizeCompact"); 
                    }
                    var title="";
                    if(this.id.search("EmpId")>-1){
                        this.fragment1.setTitle("Select ID");
                        title="{id}";
                    }else if(this.id.search("EmpName")>-1){
                        this.fragment1.setTitle("Select Name");
                        title="{name}";
                    }else if(this.id.search("EmpMail")>-1){
                        this.fragment1.setTitle("Select Email");
                        title="{email}";
                    }
                    var template=new sap.m.StandardListItem({title:title});
                this.fragment1.bindAggregation("items","/results",template);
                    this.fragment1.open();
            },
            onCofirmF4:function(oEvent){
                var Title=oEvent.getParameter('selectedItem').getTitle();
                this.byId(this.id).setValue(Title);
            }
        });
    });
