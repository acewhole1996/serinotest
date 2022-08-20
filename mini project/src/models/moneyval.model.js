var dbConn  = require('../../config/db.config');

var Moneyval = function(moneyval){
    this.amount     =   moneyval.amount;
    this.updated_at     =   new Date();
}

// get all moneyvals
Moneyval.getAllMoneyvals = (result) =>{
    dbConn.query('SELECT * FROM moneyvals WHERE is_deleted=0', (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Moneyvals fetched successfully');
            result(null,res);
        }
    })
}

// get moneyval by ID from DB
Moneyval.getMoneyvalByID = (id, result)=>{
    dbConn.query('SELECT * FROM moneyvals WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching moneyval by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new moneyval
Moneyval.createMoneyval = (moneyvalReqData, result) =>{
    dbConn.query('INSERT INTO moneyvals SET ? ', moneyvalReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Moneyval created successfully');
            result(null, res)
        }
    })
}

// update moneyval
Moneyval.updateMoneyval = (id, moneyvalReqData, result)=>{
    dbConn.query("UPDATE moneyvals SET amount=? WHERE id = ?", [moneyvalReqData.amount, id], (err, res)=>{
        if(err){
            console.log('Error while updating the moneyval');
            result(null, err);
        }else{
            console.log("Moneyval updated successfully");
            result(null, res);
        }
    });
}

// delete moneyval
Moneyval.deleteMoneyval = (id, result)=>{
    // dbConn.query('DELETE FROM moneyvals WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the moneyval');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE moneyvals SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the moneyval');
            result(null, err);
        }else{
            console.log("Moneyval deleted successfully");
            result(null, res);
        }
    });
}

module.exports = Moneyval;
