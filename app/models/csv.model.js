const CSVfun = function(employees) {
    // this.employee_id = employees.employee_id;
    // this.dept = employees.dept;
    // this.other_details = employees.other_details;   
    // this.name = employees.name;
    // this.email = employees.email;
    
  };



  CSVfun.write = async function (data) {

    sql.query("INSERT INTO employees SET ?", newemployees, async (err, res) =>{
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created new employees: ", { id: res.insertId, ...newemployees });
      // result(null, { id: res.insertId, ...newemployees });
      const jsondata = {...res}
      try {
        jsondata = JSON.parse(data);
      } catch (err) {
        console.log(err);
      }

      const csv = await json2csvAsync(jsondata);
      await writeFile("csvlatest", csv, 'utf8');
      
    });



  }
  
  module.exports = CSVfun;