var express = require('express');
var mongoose = require('mongoose');

var app = express();

// Set up our node.js server on localhost:4200 allow operations
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

// Connect to our mongodb
mongoose.connect('mongodb://localhost/mystock');

// Stock sheme design
var stockSchema = new mongoose.Schema({
  symbol: 'string',
  name: 'string',
  lastSale: 'string',
  marketCap: 'string',
  iPOyear: 'string',
  sector: 'string',
  industry: 'string'
});

// Set our model
var StockModel = mongoose.model('stock',stockSchema);
/*Route Setup*/
app.get('/api/',function(req,res) {
	res.send('Working');
});

// Grab all of the stocks in the database
app.get('/api/stocks', function(req,res) {
	StockModel.find({},function(err,docs) {
		if(err) {
			res.send({error:err});
		}
		else {
			res.send({stock:docs});
		}
	});
});

// Grab only the stock with the desired symbol
app.get('/api/stocks/:id', function(req, res){
  StockModel.findOne({'symbol': req.params.id},function(err,docs){
  //  console.log(docs.symbol);
    if(err){
      res.send({error:err});
    }
    else{
      res.send({stock:docs});
    }
  });
});

// run our server on local
app.listen('4500');
