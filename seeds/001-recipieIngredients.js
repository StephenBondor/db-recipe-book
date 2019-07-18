exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipyIngredients')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('recipyIngredients').insert([
				{recipe_id: 1, ingredient_id: 3, amount: 10.6},
				{recipe_id: 1, ingredient_id: 7, amount: 0.1},
				{recipe_id: 2, ingredient_id: 3, amount: 5},
				{recipe_id: 2, ingredient_id: 6, amount: 0.5},
				{recipe_id: 2, ingredient_id: 7, amount: 0.1},
				{recipe_id: 2, ingredient_id: 8, amount: 0.1},
				{recipe_id: 3, ingredient_id: 1, amount: 100000},
				{recipe_id: 3, ingredient_id: 2, amount: 7},
				{recipe_id: 3, ingredient_id: 3, amount: 25},
				{recipe_id: 3, ingredient_id: 4, amount: 4},
				{recipe_id: 3, ingredient_id: 9, amount: 1},
				{recipe_id: 4, ingredient_id: 1, amount: 100000},
				{recipe_id: 4, ingredient_id: 2, amount: 7},
				{recipe_id: 4, ingredient_id: 5, amount: 25},
				{recipe_id: 4, ingredient_id: 4, amount: 4},
				{recipe_id: 4, ingredient_id: 9, amount: 1},
				{recipe_id: 5, ingredient_id: 12, amount: 3},
				{recipe_id: 5, ingredient_id: 10, amount: 3},
				{recipe_id: 5, ingredient_id: 7, amount: 0.1},
				{recipe_id: 5, ingredient_id: 8, amount: 0.1},
				{recipe_id: 5, ingredient_id: 6, amount: 1},
				{recipe_id: 6, ingredient_id: 12, amount: 1},
				{recipe_id: 6, ingredient_id: 11, amount: 0.01},
				{recipe_id: 6, ingredient_id: 13, amount: 0.02},
				{recipe_id: 6, ingredient_id: 14, amount: 6},
				{recipe_id: 6, ingredient_id: 6, amount: 0.04}
			]);
		});
};
