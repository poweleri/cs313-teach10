require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL

const pool = new Pool({connectionString: connectionString})


//app.set("views", "views");
//app.set("view engine", "ejs");
//app.use(express.static("public"));

app.get("/getPerson", function(req, res){
   const id = req.query.id || 1;
   
   queryDb(id, function(row){
      console.log("Done with queryDb.");
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(row));
   });
   
});

app.listen(port, function() {
   console.log(`listening on port: ${port}`);
});

function queryDb(id, handleRequest) {
   pool.query('SELECT * FROM person WHERE person_id = $1', [id], (err, res) => {
      if (err) {
         throw err;
      }
      
      console.log('person:', res.rows[0]);
      handleRequest(res.rows[0]);
   });
}