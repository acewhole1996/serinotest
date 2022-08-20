var dbConn  = require('./config/db.config');
var haversine = require("haversine-distance");
var Treasure = function(treasure){
    this.latitude    =   treasure.latitude;
    this.longitude      =   treasure.longitude;
    this.name         =   treasure.name;
    this.updated_at     =   new Date();
}
var idnum;
var datanum=10;
//var sql ="INSERT INTO `treasures` (`latitude`,`longitude`,`name`) VALUES('null','null','null')";
//dbConn.query(sql, function (err, result) {
  //if (err) throw err;
  //console.log("1  records Inserted, ID:"+ result.insertId);
//});
var point1 = { lat: 14.552036595352455, lng: 121.01696118771324}


for (let i = 0; i < datanum; i++) { 
    var point2 = { lat: (Math.random() * (14.552036596 - 14.552036595352455)+14.552036595352455 ), lng: (Math.random() * (121.0169611878 - 121.01696118771324)+121.01696118771324 )}
    var haversine_m = haversine(point1, point2);
    var treasurekm = haversine_m /1000; //Results in kilometers
    console.log(treasurekm+"km");
    if (treasurekm < 10)
    {
        dbConn.query("INSERT INTO `treasures`(`latitude`, `longitude`, `name`) VALUES ('"+point2.lat+"','"+point2.lng+"','T"+i+"')") 
console.log("inserted successfully")
    }
    else
    {
        i=i-1;
    }
    
}
console.log("treasure seeding done")