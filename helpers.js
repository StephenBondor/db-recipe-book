const knex = require('knex');
const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
	//should return a list of all dishes in the database.
	getDishes: () => {
		return db('dishes');
	},
	//should add the dish to the database and return the id of the new dish.
	addDish: dish => {
		return db('dishes').insert(dish);
	},
	//should return the dish with the provided id and include a list of the related recipes.
	getDish: id => {
		const dishes = db('dishes')
			.where({id})
			.first();
		const recipies = db('recipies')
			.select('id', 'name')
			.where({dish_id: id});

		return Promise.all([dishes, recipies]).then(results => {
			let [dish, recipies] = results;
			return {dish: dish.name, id: dish.id, recipies: recipies};
		});
	},
	//should return a list of all recipes in the database including the dish they belong to.
	getRecipes: () => {
		return db('recipies')
			.join('dishes', 'recipies.dish_id', '=', 'dishes.id')
			.select('recipies.id', 'recipies.name', {dishName: 'dishes.name'});
	},
	//should add a recipe to the database and return the id of the new recipe.
	addRecipe: recipe => {
		return db('recipies').insert(recipe);;
	}
};
