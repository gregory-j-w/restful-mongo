var express = require('express'),
    app     = express(),
    server = require('http').createServer(app),
    path = require('path'),
    bodyParser = require('body-parser'),
    Wine = require('./models/Donut');

    require('./db/db')

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function(request, response){
  Donut.find(function(err, donuts){
    var allDonuts = {donuts: donuts};
    console.log(allDonuts);
    response.render('home', allDonuts);
  })
});

app.get('/donuts', function(request, response){
  //return all the donuts
  Donut.find(function(err, donuts){
    console.log(donuts);
    response.json(donuts);
  });
})

app.get('/donuts/:id', function(request, response){
  //return a specific donut by id
  var id = request.params.id;
  Donut.findById(id, function(err, donut){
    console.log(err);
    response.json(donut);
  })
})

app.post('/donuts', function(request, response){
  //create a new donut from the request body
  console.log(request.body);
  var donut = new Donut({name: request.body.name,
                      type: request.body.type,
                      icing: request.body.icing,
                      filling: request.body.filling,
                      gluten: request.body.gluten})
  donut.save();
  response.send("success");
})

app.patch('/donuts/:id', function(request, response){
  //update a donut by id with the request body
  var id = request.params.id;
  Donut.findById(id, function(err, wine){
    donut.name = request.body.name;
    donut.type = request.body.type;
    donut.icing = request.body.region;
    donut.filling = request.body.vintage;
    donut.gluten = request.body.organic;
    donut.save();
    response.json(donut);
  })
})

app.delete('/donuts/:id', function(request, response){
  //delete the donut by id
  var id = request.params.id;
  Donut.findById(id, function(err, donut){
    donut.remove();
    response.json("success");
  })
})

server.listen(3000, function(){
  console.log("listening on port 3000");
})
