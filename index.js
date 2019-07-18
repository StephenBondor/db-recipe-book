const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const dbAccess = require('./helpers.js');

const server = express();

server.use(express.json());
server.use(helmet());

// conect to the database
const db = knex(knexConfig.development);

//sanity check
console.log('index.js running');
// dbAccess
// 	.getRecipes()
// 	.then(dishes => console.log(dishes))
// 	.catch();
// dbAccess
// 	.addRecipe({
// 		name: 'Raw Steak', instructions: "Eat it raw", dish_id : 2
// 	})
// 	.then(dishes => console.log(dishes))
// 	.catch();
dbAccess
	.getRecipe(3)
	.then(dishes => console.log(dishes))
	.catch();

//endpoint sanity check
server.get('/', (req, res) => {
	res.send('api working');
});

// add whatever to whatever table
server.post('/api/:table', (req, res) => {
	const body = req.body;
	db(req.params.table)
		.insert(body)
		.then(ids => {
			res.status(201).json(ids);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// list whatever
server.get('/api/:table', (req, res) => {
	db(req.params.table)
		.then(things => {
			res.status(200).json(things);
		})
		.catch(err => res.status(500).json(err));
});

const port = 3300;
server.listen(port, function() {
	console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
