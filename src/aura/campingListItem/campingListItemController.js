({
	packItem : function(component, event, helper) {
		var btnCmp = event.getSource();
        //var item = component.get("v.item");//This approach
        //item.Packed__c = true;//is just to
        //component.set("v.item", item);//clear the lightning components trailhead exercise
        component.set("v.item.Packed__c", true);
        btnCmp.set("v.disabled", true);
	}
})