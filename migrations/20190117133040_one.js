exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('dishes', tbl => {
			//primary key
			tbl.increments(); //defaults to a column named id, autoincrements

			//other feilds
			tbl.text('name', 128);

			// time stamps
			tbl.timestamps(true, true);

			//constraints
			tbl.unique('name', 'uq_dishes_name'); //makes name unique
		})
		.createTable('recipies', tbl => {
			//primary key
			tbl.increments(); //defaults to a column named id, autoincrements

			//other feilds
			tbl.text('name', 128);
			tbl.text('instructions');
			tbl.integer('dish_id')
				.unsigned()
				.references('id')
				.inTable('dishes');

			// time stamps
			tbl.timestamps(true, true);

			//constraints
			tbl.unique('name', 'uq_recipies_name'); //makes name unique
		})
		.createTable('units', tbl => {
			//primary key
			tbl.increments(); //defaults to a column named id, autoincrements

			//other feilds
			tbl.text('name', 128);

			// time stamps
			tbl.timestamps(true, true);

			//constraints
			tbl.unique('name', 'uq_units_name');
		})
		.createTable('ingredients', tbl => {
			//primary key
			tbl.increments(); //defaults to a column named id, autoincrements

			//other feilds
			tbl.text('name', 128);
			tbl.integer('unit_id')
				.unsigned()
				.references('id')
				.inTable('units');

			// time stamps
			tbl.timestamps(true, true);

			//constraints
			tbl.unique('name', 'uq_ingredients_name');
		})
		.createTable('recipyIngredients', tbl => {
			//primary key
			tbl.increments(); //defaults to a column named id, autoincrements

			//other feilds
			tbl.float('amount');
			tbl.integer('recipe_id')
				.unsigned()
				.references('id')
				.inTable('recipies');
			tbl.integer('ingredient_id')
				.unsigned()
				.references('id')
				.inTable('ingredients');

			// time stamps
			tbl.timestamps(true, true);

			//constraints
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTableIfExists('dishes')
		.dropTableIfExists('recipies')
		.dropTableIfExists('units')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipyIngredients');
};
