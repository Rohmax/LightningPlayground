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
            }
        });
        $A.enqueueAction(action);
		
	}
})