'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');


              // var listingSchema = new Schema({
              //   /* your code here */
              //   code: {type: String, required: true},
              //   name: {type: String, required: true},
              //   coordinates: { latitude: Number, longitude: Number },
              //   address: String
              // });
              // {
              //     "code": "AAF", 
              //     "name": "Academic Advisement - Farrior Hall", 
              //     "coordinates": {
              //         "latitude": 29.6502323, 
              //         "longitude": -82.34563860000002
              //     }, 
              //     "address": "100 Fletcher Dr, Gainesville, FL 32611, United States"
              // }

/* Connect to your database */
// mongoose.createConnection(config.db.uri);
mongoose.connect(config.db.uri, { useMongoClient: true });

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
   
   listingsData = JSON.parse(data).entries;

   listingsData.forEach(function(entry){
      new Listing({
        code: entry.code,
        name: entry.name,
        coordinates: entry.coordinates,
        address: entry.address
      }).save();
   })
    
});





/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */