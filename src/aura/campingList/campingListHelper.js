({
	createItem : function(component, item) {
        var action = component.get("c.saveItem");
        action.setParams({
            "campingItem": item
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
                component.set("v.errMessage", "");
            }
            else if(component.isValid() && state === "ERROR"){
                console.log("Exception caught successfully");
                console.log("Error object", response);
                console.log("Error Message", response.getError()[0]);
                console.log("Error Message", response.getError()[0].message);
                console.log("Error Message", response.getState());
                console.log("Error object", JSON.stringify(response));
                component.set("v.errMessage", response.getError()[0].message);
            }
        });
        $A.enqueueAction(action);
		
	}
})