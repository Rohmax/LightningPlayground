public with sharing class CampingListController {
	@AuraEnabled
    public static List<Camping_Item__c> getItems() {
        // Perform isAccessible() checking first, then
        return [SELECT Id, Name, Price__c, Quantity__c, 
                       Packed__c, CreatedDate 
                FROM Camping_Item__c];
    }
    
    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c campingItem) {
        try {
            /*Throwing various types of Exceptions to demnostrate
            how to handle server side exceptions in Lightning 
            Components.
            Throwing a standard exception or a custom exception
            to emulate a situation when either a standard or custom exception is caught and
            needs to be handled.
            Uncommnet the thrown exceptions below one at a time*/
            //throw new System.DmlException('Some Message');
            //throw new MyCustomException('Some Message');
            
            /* Perform isUpdatable() checking first as CRUD and FLS is not
            being taken care automatically by the platform in the Lightning Components' context, 
            then*/
            upsert campingItem;
            return campingItem;   
        }
        catch(Exception excptn) {
            /*This exception is definitely returned to the Lightning Framework,
            but irrespective of whatever be the custom message passed as parameter
            to the exception instance, at the front end JS the error message in the 
            response would be always: "An internal server error has occurred
            Error ID: <some not useful ErrorId, atleast not for us>" 
            and obviously you would be feeling like $%#@!!, cursing, is this 
            they(Salesforce) call a modern enterprise web app front end development 
            framework*/
            //throw excptn;
            /*Logic to log the exception and generate a message based on the excpetion
            using the Exception Framework needs to be added here*/
            //Uncomment the line below and comment the "throw excptn" line
            throw new AuraHandledException('Custom Exception Message');
            /*This AuraHandledException comes like an oasis in the desert where 
            you have been lost for days and you are done with all your supplies,
            metaphors aside, actually of all the Exceptions on Force.com, this is
            the only known exception to me that if thrown to the front end
            JS controller/handler to handle, then the error in the response contains your
            custom passed message i.e you will get "Custom Exception Message" in this case
            */
 
        }
        
    }

    public class MyCustomException extends Exception {}
}