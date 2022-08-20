var dbConn  = require('../../config/db.config');

var Prize = function(prize){
    this.latitude    =   prize.latitude;
    this.longitude      = prize.longitude;
    this.name         =   prize.name;
    this.updated_at     =   new Date();
}


// get prize by ID from DB
Prize.getPrizeByID = (latitude, longitude, result)=>{
    dbConn.query('SELECT * FROM treasures WHERE latitude=? AND longitude=?', [latitude,longitude], (err, res)=>{
        if(err){
            console.log('Error while fetching prize by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
        
    })


}



module.exports = Prize;
