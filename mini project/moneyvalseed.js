var dbConn  = require('./config/db.config');
var Moneyval = function(moneyval){
    this.amount     =   moneyval.amount;
    this.updated_at     =   new Date();
}
var datanum=10;
for (let i = 0; i < datanum; i++) { 
    dbConn.query("INSERT INTO `moneyvals`(`amount`) VALUES ('"+Math.floor((Math.random() * (30 - 10)+10 ))+"')")  
}
console.log("moneyval seeding done")