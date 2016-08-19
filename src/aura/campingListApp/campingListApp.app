<aura:application >
     <!-- Include the SLDS static resource (adjust to match package version) -->
    <ltng:require styles="{!$Resource.ScopedSLDS +
         '/assets/styles/salesforce-lightning-design-system-ltng.css'}"/>
 
    <!-- Add the "scoping" element to activate SLDS on components
         that we add inside it. -->
    <div class="ronz-th">
    	<c:campingList />
    </div>
</aura:application>