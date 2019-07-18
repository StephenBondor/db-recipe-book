exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipies')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('recipies').insert([
				{
					name: 'Grilled Steak', //1
					instructions: 'SLAP that steak on the grill. DONE',
					dish_id: 2
				},
				{
					name: 'Pan Fried Steak', //2
					instructions: 'SLAP that steak in the pan. DONE',
					dish_id: 2
				},
				{
					name: 'Steak Tacos',  //3
					instructions: 'SLAP that steak on them tacos. DONE',
					dish_id: 1
				},
				{
					name: 'Fish Tacos', //4
					instructions: 'SLAP that fish on thy tacos. DONE',
					dish_id: 1
				},
				{
					name: 'Fish n Chips', //5
					instructions: 'SLAP that fish on the FRIETS. DONE',
					dish_id: 3
				},
				{
					name: 'Ginger Salmon', //6
					instructions:
						'SLAP that ginger on the fish on the grill. DONE',
					dish_id: 3
				}
			]);
		});
};
