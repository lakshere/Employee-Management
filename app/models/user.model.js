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

  User.getAll = (result) => {
    let query = "SELECT * FROM user";
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("user: ", res);
      result(null, res);
    });
  };