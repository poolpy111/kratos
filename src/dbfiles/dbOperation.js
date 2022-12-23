const config            = require('./dbConfig'),
      sql               = require('mssql/msnodesqlv8');

const getRows = async() => {
    try {
        let pool = await sql.connect(config);
        let rows = pool.request().query("SELECT * from tblMail")
        console.log(rows);
        return rows;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getRows
}
