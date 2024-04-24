const CSVfun = function(employees) {
    // this.employee_id = employees.employee_id;
    // this.dept = employees.dept;
    // this.other_details = employees.other_details;   
    // this.name = employees.name;
    // this.email = employees.email;
    
  };



  CSVfun.write = async function (data) {

    sql.query("SELECT e.employee_id,e.name AS employee_name, DATE_FORMAT(a.date, '%Y-%m') AS month,SUM(CASE WHEN a.status = 'present' THEN 1 ELSE 0 END) AS present_count,SUM(CASE WHEN a.status = 'absent' THEN 1 ELSE 0 END) AS absent_count FROM  attendance a INNER JOIN 
    employees e ON a.employee_id = e.employee_id GROUP BY e.employee_id HAVING month='2021-04';", 
    newemployees, async (err, res) =>{
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created new employees: ", { id: res.insertId, ...newemployees });
      // result(null, { id: res.insertId, ...newemployees });
      const jsondata = {...res}
      /*try {
        jsondata = JSON.parse(data);
      } catch (err) {
        console.log(err);
      }*/

      const csv = await json2csvAsync(jsondata);
      await writeFile("csvlatest", csv, 'utf8');
      
    });



  }
  
  module.exports = CSVfun;