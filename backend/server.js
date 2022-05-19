const express = require("express");
const bodyParser = require("body-parser");
const db = require('./db');

const app = express();

app.use(bodyParser.json());


//db table
db.pool.query(`create table lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    RPIMARY KEY (id)
)`, (err, results, fileds)=>{
    console.log('results', results)
})

//db lists
app.get('/api/values', function(req,res){
    db.pool.query('select * from lists;',
        (err, results, fileds)=>{
            if(err)
                return res.status(500).send(err)
            else
                return res.json(results)
    } )
})

app.post('/api/value', function(res, res, next){
    db.pool.query(`insert into lists (value) values("${req.body.value}")`,
        (err, results, fileds)=>{
            if(err)
                return res.sttatus(500).send(err)
            else
                return res.json({success: true, value: req.body.value})
        }
    )
})
 

app.listen(5000, ()=>{
    console.log('애플리케이션이 5000번 포트에서 시작되었습니다.');
});


