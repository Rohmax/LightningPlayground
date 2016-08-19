({ 
    doInit : function(component, event, helper) {
       	// Create the action
        var action = component.get("c.getItems");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    
    handleAdditem : function(component, event, helper) {
        var createItem = event.getParam("item");
        helper.createItem(component, createItem);
        /*var action = component.get("c.saveItem");
        action.setParams({
            "campingItem": item
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
        });
        $A.enqueueAction(action);*/
	}
    
	
})