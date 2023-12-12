var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// const dbConfig = require("./db.config.js");
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false

   
   

}));

var dbConn = mysql.createConnection({ host: "localhost", 
    user: "root", 
    password: "", 
    database: "pzi" 
});
dbConn.connect();
app.get("/korisnik",function(request,response){
dbConn.query('SELECT * FROM korisnik', function(error, results,fields)
{
    if (error)throw error;
    return response.send({error:false, data: results,massage:'READ svi korisnici.'});
});

});
app.get('/korisnik/:id', function (request, response){
    let korisnik_id = request.params.id;
    if (!korisnik_id){
        return response.status(400).send({error: true, massage: "Molim dajte ID KORISNIKA"});
    }
    dbConn.query('SELECT * FROM korisnik where id=?',korisnik_id, function(error,results,fields) {
        if (error) throw error;
        return response.send ({error:false,data:results[0],message:'Korisnik lista.'});
    });
});



app.get("/podaci",function(request, response)
{
    return response.send({massage:"ok"});
}
)

app.get("/test/:nekakavbroj", function(request, response)
{
    var nekakavbroj = request.params.nekakavbroj;
    return response.send({massage:nekakavbroj+ " je SUPER!"});
}

)

app.get("/podaci/:id",function(request, response)
{
    var id= request.params.id;
    return response.send({massage:id +" ok"});
    
}
)

app.post("/podaci",function(request, response)
{
    var podaci= request.body.podatak;
    return response.send({massage:podaci +" ok"});
    
}
)
app.post("/korisnik",function(request, response)
{
    var imena= request.body.ime;
    var prezimena= request.body.prezime;
     
    
    return response.send({massage:"Create "+ imena+ " " +prezimena});
    
}
)

/*app.put("/korisnik/:id",function(request, response)
{
    var id = request.params.id;
    var adresa = request.body.adresa;
    //var imena= request.body.ime;
    //var prezimena= request.body.prezime;
     
    
    return response.send({massage: id +" "+adresa+" ok"});
}
)*/

app.delete("/korisnik/:id",function(request, response)
{
    var id= request.params.id;
    
    dbConn.query('DELETE FROM korisnik where id=?',id, function(error,results,fields) {
        if (error) throw error;
        return response.send ({error:false,data:results[0],message:'Korisnik obrisan'});
    });

 } 
 )
app.post ("/korisnik", function(request, response){
var ime =request.body.ime;
var prezime= request.body.prezime;
var tel =request.body.tel;
dbConn.query('INSERT INTO korisnik values (NULL,?,?,?)',[ime,prezime,tel],function(error,results,fields){
if (error) throw error;
return response.send({error:false, data:results, message:'Insert korisnik ime= '+ime});
})
})

app.put ("/korisnik/:id", function(request, response){
    var id= request.params.id;
    var tel = request.body.tel;
    dbConn.query('UPDATE korisnik SET tel=? WHERE id=?',[tel,id], function(error,results,fields) {
        if (error) throw error;
        return response.send({error:false, data:results, message:'UPDATE korisnik id'+id+ 'tel='+tel});
    })
})

 app.get('/korisnik/', function (request, response) {
    let id = request.params.id;
    
        return response.send({  message: "READ korisnik(svi)" });

 })


 app.get('/korisnik/:id', function (request, response) {
    let id = request.params.id;
    
        return response.send({  message: "ID JE " +id });

 })


// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
