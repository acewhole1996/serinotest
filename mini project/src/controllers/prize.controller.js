
const PrizeModel = require('../models/prize.model');

// get prize by ID
exports.getPrizeByID = (req, res)=>{
    //console.log('get emp by id');
    PrizeModel.getPrizeByID(req.params.latitude, req.params.longitude, (err, prize)=>{
        if(prize == 0){
        res.send("NO TREASURE FOUND");}
        else{
            res.send("TREASURE CHEST FOUND YOUR REWARD: $"+Math.floor((Math.random() * (30 - 10)+10 )) );  
        }
    })
}

