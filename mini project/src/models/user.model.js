var dbConn  = require('../../config/db.config');

var User = function(user){
    this.name     =   user.name;
    this.age     =   user.age;
    this.password       =   user.password;
    this.email          =   user.email;
    this.updated_at     =   new Date();
}

// get all users
User.getAllUsers = (result) =>{
    dbConn.query('SELECT * FROM users WHERE is_deleted=0', (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Users fetched successfully');
            result(null,res);
        }
    })
}

// get user by ID from DB
User.getUserByID = (id, result)=>{
    dbConn.query('SELECT * FROM users WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching user by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new user
User.createUser = (userReqData, result) =>{
    dbConn.query('INSERT INTO users SET ? ', userReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('User created successfully');
            result(null, res)
        }
    })
}

// update user
User.updateUser = (id, userReqData, result)=>{
    dbConn.query("UPDATE users SET name=?,age=?,password=?,email=? WHERE id = ?", [userReqData.name,userReqData.age,userReqData.password,userReqData.email, id], (err, res)=>{
        if(err){
            console.log('Error while updating the user');
            result(null, err);
        }else{
            console.log("User updated successfully");
            result(null, res);
        }
    });
}

// delete user
User.deleteUser = (id, result)=>{
    // dbConn.query('DELETE FROM users WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the user');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE users SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the user');
            result(null, err);
        }else{
            console.log("User deleted successfully");
            result(null, res);
        }
    });
}

module.exports = User;
