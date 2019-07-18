exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('units')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('units').insert([
				{name: ''},
				{name: 'KiloGrams'},
				{name: 'Gallons'}
			]);
		});
};
