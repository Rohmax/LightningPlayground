({
	validateCampingListForm: function(component) {

        // Simplistic error checking
        var validItem = true;

        // Name, Price and Quantity must not be blank
        var nameField = component.find("itemName");
        var priceField = component.find("itemPrice");
        var quantField = component.find("itemQuantity");
        //var itemName = nameField.get("v.value");
        if ($A.util.isEmpty(nameField.get("v.value"))){
            validItem = false;
            nameField.set("v.errors", [{message:"Item name can't be blank."}]);
        }
        else {
          nameField.set("v.errors", null);  
        }
        if($A.util.isEmpty(priceField.get("v.value"))) {
            validItem = false;
            priceField.set("v.errors", [{message:"Item price can't be blank."}]);
        }
        else {
        	priceField.set("v.errors", null);   
        }
        if($A.util.isEmpty(quantField.get("v.value"))) {
            validItem = false;
            quantField.set("v.errors", [{message:"Item quantity can't be blank."}]);   
        }
        else {
            quantField.set("v.errors", null);
        }
        
        return(validItem);

        // If we pass error checking, do some real work
        /*if(validItem){
            // Create the new expense
            var newItem = component.get("v.newItem");
            console.log("Create Item: " + JSON.stringify(newItem));
            helper.createItem(component, newItem);
           
        }*/
    },
    
    createItem: function(component, newitem) {
    	var createEvent = component.getEvent("addItem");
        createEvent.setParams({ "item": newitem });
        createEvent.fire();
        var emptyItem = {'sobjectType': 'Camping_Item__c',
                  'Name':'',
                  'Price__c': 0,
                  'Quantity__c': 0,
                  'Packed__c': false};
        component.set("v.newItem", emptyItem);
	}
})