'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    ;


var listingSchema = new Schema({
  /* your code here */
  code: {type: String, required: true},
  name: {type: String, required: true},
  coordinates: { latitude: Number, longitude: Number },
  address: String
});

/* Connect to your database */
mongoose.connect(db.uri);
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

var listingsData;

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
   if (err){
    throw err;
   }

   listingData = data.entries;
});

for(i=0; i<listingsData.length;i++){

  var newListing = Listing({
    code: listingsData[i].code,
    name: listingsData[i].name,
    coordinates: { latitude: listingsData[i].coordinates.latitude,
      longitude: listingsData[i].coordinates.longitude },
    address: listingsData[i].address
  });


}



/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */