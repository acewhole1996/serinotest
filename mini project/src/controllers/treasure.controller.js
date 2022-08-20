
const TreasureModel = require('../models/treasure.model');
var haversine = require("haversine-distance");

// get all treasure list
exports.getTreasureList = (req, res)=> {
    //console.log('here all treasures list');
    TreasureModel.getAllTreasures((err, treasures) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Treasures', treasures);
        res.send(treasures)
    })
}

// get treasure by ID
exports.getTreasureByID = (req, res)=>{
    //console.log('get emp by id');
    TreasureModel.getTreasureByID(req.params.id, (err, treasure)=>{
        if(err)
        res.send(err);
        console.log('single treasure data',treasure);
        console.log(treasure==0)
        res.send(treasure);
    })
}

// create new treasure
exports.createNewTreasure = (req, res) =>{
    const treasureReqData = new TreasureModel(req.body);
    console.log('treasureReqData', treasureReqData);
    var point1 = { lat: 14.552036595352455, lng: 121.01696118771324}
    var point2 = { lat: treasureReqData.latitude, lng: treasureReqData.longitude}
    var haversine_m = haversine(point1, point2);
    var treasurekm = haversine_m /1000; //Results in kilometers
    if(treasurekm > 10){
        res.send({success: false, message: 'ERROR: treasure coordinate exceeds 10km, currently '+treasurekm+'km away'});
    }else{
        TreasureModel.createTreasure(treasureReqData, (err, treasure)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Treasure Created Successfully', data: treasure.insertId})
        })
    }
}

// update treasure
exports.updateTreasure = (req, res)=>{
    const treasureReqData = new TreasureModel(req.body);
    console.log('treasureReqData update', treasureReqData);
    var point1 = { lat: 14.552036595352455, lng: 121.01696118771324}
    var point2 = { lat: treasureReqData.latitude, lng: treasureReqData.longitude}
    var haversine_m = haversine(point1, point2);
    var treasurekm = haversine_m /1000; //Results in kilometers
    if(treasurekm > 10){
        res.send({success: false, message: 'ERROR: treasure coordinate exceeds 10km, currently '+treasurekm+'km away'});
    }else{
        TreasureModel.updateTreasure(req.params.id, treasureReqData, (err, treasure)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Treasure updated Successfully'})
        })
    }
}

// delete treasure
exports.deleteTreasure = (req, res)=>{
    TreasureModel.deleteTreasure(req.params.id, (err, treasure)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: "OK"});
    })
}
// get all user list
exports.getUserList = (req, res)=> {
    //console.log('here all users list');
    UserModel.getAllUsers((err, users) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Users', users);
        res.send(users)
    })
}

// get user by ID
exports.getUserByID = (req, res)=>{
    //console.log('get emp by id');
    UserModel.getUserByID(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single user data',user);
        res.send(user);
    })
}

// create new user
exports.createNewUser = (req, res) =>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User Created Successfully', data: user.insertId})
        })
    }
}

// update user
exports.updateUser = (req, res)=>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData update', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.updateUser(req.params.id, userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User updated Successfully'})
        })
    }
}

// delete user
exports.deleteUser = (req, res)=>{
    UserModel.deleteUser(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'User deleted successully!'});
    })
}