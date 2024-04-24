const sql = require('./db')

const User = function(user) {
    this.user_id = user.user_id;
    this.name = user.name;
    this.email = user.email;
    this.is_admin = user.is_admin;
  };

  User.create = (newuser, result) => {
    sql.query("INSERT INTO user SET ?", newuser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created new user: ", { id: res.insertId, ...newuser });
      result(null, { id: res.insertId, ...newuser });
    });
  };

  // User.getAll((err, res) => {
  //   let query = "SELECT * FROM user";
  
  //   sql.query(query,(err, res)=>{
  //     if (err) {
  //       console.log("error: ", err);
  //       result(null, err);
  //       return;
  //     }
  
  //     console.log("user: ", res);
  //     result(null, res);
  //     return;
  //   });
  // });


  User.getAll = (result) => {
    let query = "SELECT * FROM user";
  
    sql.query(query,(err, res)=>{
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("user: ", res);
      result(null,res)
      // result()
      // return result;
      // res.json(result)
      // result(null, res);
      return;
    });
  };

  User.findById = (user_id, result) => {
    sql.query(`SELECT * FROM user WHERE user_id = ${user_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found employee: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };

  User.updateById = (id, user, result) => {
    sql.query(
      "UPDATE user SET name = ?, email = ?, is_admin = ? WHERE user_id = ?",
      [user.name, user.email,user.is_admin, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found User with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated user: ", { id: id, ...user });
        result(null, { id: id, ...user });
      }
    );
  }
  User.remove = (user_id, result) => {
    sql.query("DELETE FROM User WHERE user_id = ?", user_id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted User with user_id: ", user_id);
      result(null, res);
    });
  };
  module.exports = User;