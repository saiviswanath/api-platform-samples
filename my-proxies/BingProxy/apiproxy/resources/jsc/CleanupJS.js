 try {
 var totalresponse = context.getVariable("response.content");
 var scresponse = context.getVariable("calloutResponse.content");
 var jsonObj1 = JSON.parse(totalresponse);
 var jsonObj2 = JSON.parse(scresponse);
 var cleanRatings = {};
  var cleanTruck = {};
 cleanRatings = jsonObj1.entities;
  cleanTruck = jsonObj2.entities;

 for(var i = 0; i<cleanRatings.length;i++) {
     delete(cleanRatings[i].uuid);
     delete(cleanRatings[i].type);
     delete(cleanRatings[i].created);
     delete(cleanRatings[i].modified);
     delete(cleanRatings[i].metadata);
 }
 
  for(var i = 0; i<cleanTruck.length;i++) {
     delete(cleanTruck[i].uuid);
     delete(cleanTruck[i].type);
     delete(cleanTruck[i].created);
     delete(cleanTruck[i].modified);
     delete(cleanTruck[i].metadata);
 }
 context.setVariable("response.content", JSON.stringify(cleanRatings));
  context.setVariable("calloutResponse.content", JSON.stringify(cleanTruck));
 } catch(ex) {
     context.setVariable("js_error", ex.message);
 }
 