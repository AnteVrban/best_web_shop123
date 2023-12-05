var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

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

app.put("/korisnik/:id",function(request, response)
{
    var id = request.params.id;
    var adresa = request.body.adresa;
    //var imena= request.body.ime;
    //var prezimena= request.body.prezime;
     
    
    return response.send({massage: id +" "+adresa+" ok"});
}
)

app.delete("/korisnik/:id",function(request, response)
{
    var id= request.params.id;
    return response.send({message:"DELETE "+ id});

 } 
 )
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
