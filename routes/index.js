var express = require('express');
var router = express.Router();

// var mongo = require('mongodb').MongoClient;
// var objectId = require('mongodb').ObjectID;
var mongodb = require('mongodb');
var url = 'mongodb://admin:admin@ds139984.mlab.com:39984/proyecto2';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function getPlaces(callback) {
	mongodb.connect(url,(err, db)=>{
		if(err) throw err;
		var places = db.collection('ensayaderos');
		places.find({}).toArray((err2, places)=>{
			if(err2) throw err2;
			callback(places);
		})
	})
}

router.get('/api/places', function(req, res) {
	getPlaces((places)=>{
		res.json(places);
	});
  });

router.post('/api/insert', function(req, res, next) {
	var item = {

		//Llenar dependiendo del index.
		//Ejemplo: nombre : req.body.nombre
		nombre: req.nombre,
    	direccion: req.direccion,
    	telefono: req.telefono,
    	precio: req.precio,
    	lat: req.lat,
    	lng: req.lng
	};

	mongo.connect(url, function(err, db) {
		db.collection('ensayaderos').insertOne(item, function(err, result) {
			db.close();
		});
	});

	res.redirect('/');
});

router.post('/api/update', function(req, res, next) {
	var item = {

		//Llenar dependiendo del index.
		//Ejemplo: nombre : req.body.nombre
		nombre: req.nombre,
    	direccion: req.direccion,
    	telefono: req.telefono,
    	precio: req.precio,
    	lat: req.lat,
    	lng: req.lng
	};

	//Id del objeto.
	var id = req.boby.id;

	mongo.connect(url, function(err, db) {
		db.collection('ensayaderos').updateOne({"_id": objectId(id)}, {$set: item}, function(err, result) {
			db.close();
		});
	});
});

router.post('/api/delete', function(req, res, next) {

	//Id del objeto.
	var id = req.body.id;

  	mongo.connect(url, function(err, db) {
    
    db.collection('ensayaderos').deleteOne({"_id": objectId(id)}, function(err, result) {
      	db.close();
    });
  });
});

// router.get('/getByName', function(req, res, next) {

// 	//Nombre a buscar.
// 	var nomb = req.nomb;

// 	mongo.connect(url, function(err, db) {
// 		db.collection('ensayaderos').findOne({
// 			'nombre': nomb
// 		},
// 		function (err, result) {
// 			res.status(200).json(result)
// 		});
// 	});
// });

// router.get('/getByPrice', function(req, res, next) {

// 	//Precio a buscar.
// 	var price = req.price;

// 	var resultArray = [];
// 	mongo.connect(url, function(err, db) {
// 		var cursor = db.collection('ensayaderos').find({'precio':{$lt:price}});
// 		cursor.forEach(function(doc, err) {
// 			resultArray.push(doc);
// 		}, function() {
// 			db.close();
// 			//Render del index.
// 		});
// 	});
// });

module.exports = router;
