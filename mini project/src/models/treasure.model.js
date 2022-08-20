var dbConn  = require('../../config/db.config');

var Treasure = function(treasure){
    this.latitude    =   treasure.latitude;
    this.longitude      =   treasure.longitude;
    this.name         =   treasure.name;
    this.updated_at     =   new Date();
}


// get all treasures
Treasure.getAllTreasures = (result) =>{
    dbConn.query('SELECT * FROM treasures WHERE is_deleted=0', (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('treasures fetched successfully');
            result(null,res);
        }
    })
}

// get treasure by ID from DB
Treasure.getTreasureByID = (id, result)=>{
    dbConn.query('SELECT * FROM treasures WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching treasure by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new treasure
Treasure.createTreasure = (treasureReqData, result) =>{
    dbConn.query('INSERT INTO treasures SET ? ', treasureReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('treasure created successfully');
            result(null, res)
        }
    })
}

// update treasure
Treasure.updateTreasure = (id, treasureReqData, result)=>{
    dbConn.query("UPDATE treasures SET latitude=?,longitude=?,name=? WHERE id = ?", [treasureReqData.latitude,treasureReqData.longitude,treasureReqData.name, id], (err, res)=>{
        
        if(err){
            console.log('Error while updating the treasure');
            result(null, err);
        }else{
            console.log("treasure updated successfully");
            result(null, res);
        }
    });
}

// delete treasure
Treasure.deleteTreasure = (id, result)=>{
    // dbConn.query('DELETE FROM treasures WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the treasure');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE treasures SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the treasure');
            result(null, err);
        }else{
            console.log("treasure deleted successfully");
            result(null, res);
        }
    });
}






module.exports = Treasure;