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
		return ;
	},
	//should return a list of all recipes in the database including the dish they belong to.
	getRecipes: () => {
		return;
	},
	//should add a recipe to the database and return the id of the new recipe.
	addRecipe: recipe => {
		return;
	}
};
