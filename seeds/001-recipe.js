exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipies')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('recipies').insert([
				{
					name: 'Grilled Steak',
					instructions: 'SLAP that steak on the grill. DONE',
					dish_id: 2
				},
				{
					name: 'Pan Fried Steak',
					instructions: 'SLAP that steak in the pan. DONE',
					dish_id: 2
				},
				{
					name: 'Steak Tacos',
					instructions: 'SLAP that steak on them tacos. DONE',
					dish_id: 1
				},
				{
					name: 'Fish Tacos',
					instructions: 'SLAP that fish on thy tacos. DONE',
					dish_id: 1
				},
				{
					name: 'Fish n Chips',
					instructions: 'SLAP that fish on the FRIETS. DONE',
					dish_id: 3
				},
				{
					name: 'Ginger Salmon',
					instructions:
						'SLAP that ginger on the fish on the grill. DONE',
					dish_id: 3
				}
			]);
		});
};
