
const MoneyvalModel = require('../models/moneyval.model');

// get all moneyval list
exports.getMoneyvalList = (req, res)=> {
    //console.log('here all moneyvals list');
    MoneyvalModel.getAllMoneyvals((err, moneyvals) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Moneyvals', moneyvals);
        res.send(moneyvals)
    })
}

// get moneyval by ID
exports.getMoneyvalByID = (req, res)=>{
    //console.log('get emp by id');
    MoneyvalModel.getMoneyvalByID(req.params.id, (err, moneyval)=>{
        if(err)
        res.send(err);
        console.log('single moneyval data',moneyval);
        res.send(moneyval);
    })
}

// create new moneyval
exports.createNewMoneyval = (req, res) =>{
    const moneyvalReqData = new MoneyvalModel(req.body);
    console.log('moneyvalReqData', moneyvalReqData);
    // check null

    if((moneyvalReqData.amount.indexOf(".") == -1) == false){
        res.send({success: false, message: 'ERROR: decimals are not acceptable'});
    }else{
        MoneyvalModel.createMoneyval(moneyvalReqData, (err, moneyval)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Moneyval Created Successfully', data: moneyval.insertId})
        })
    }
}

// update moneyval
exports.updateMoneyval = (req, res)=>{
    const moneyvalReqData = new MoneyvalModel(req.body);
    console.log('moneyvalReqData update', moneyvalReqData);
    // check null
    if((moneyvalReqData.amount.indexOf(".") == -1) == false){
        res.send({success: false, message: 'ERROR: decimals are not acceptable'});
    }else{
        MoneyvalModel.updateMoneyval(req.params.id, moneyvalReqData, (err, moneyval)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Moneyval updated Successfully'})
        })
    }
}

// delete moneyval
exports.deleteMoneyval = (req, res)=>{
    MoneyvalModel.deleteMoneyval(req.params.id, (err, moneyval)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Moneyval deleted successully!'});
    })
}