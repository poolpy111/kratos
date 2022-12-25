const express     = require('express'),
      dbOperation = require('./src/dbfiles/dbOperation')
      cors        = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();


app.use(cors());

app.get('/api', function(req,res) {
    console.log('Called: /api')
    dbOperation.getRows().then(res_sql => {
        res.send({result: res_sql.recordset})
    })
    
})


// dbOperation.getRows().then(res => {
//     console.log(res.recordset)
// })

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
