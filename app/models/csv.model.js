const CSVfun = function(employees) {
    // this.employee_id = employees.employee_id;
    // this.dept = employees.dept;
    // this.other_details = employees.other_details;   
    // this.name = employees.name;
    // this.email = employees.email;
    
  };



  CSVfun.write = async function (fileName, data) {
   const jsondata = {}
    try {
        jsondata = JSON.parse(data);
      } catch (err) {
        console.log(err);
      }
   
    const csv = await json2csvAsync(jsondata);
    await writeFile(fileName, csv, 'utf8');
  }
  
  module.exports = CSVfun;