exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('ingredients')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('ingredients').insert([
				{name: 'Tortilla', unit_id: 1},   //1
				{name: 'Onion', unit_id: 2},      //2
				{name: 'Steak', unit_id: 2},      //3
				{name: 'Hot Sauce', unit_id: 3},  //4
				{name: 'Cod', unit_id: 2},        //5
				{name: 'Bacon Fat', unit_id: 3},  //6
				{name: 'Salt', unit_id: 2},       //7
				{name: 'Pepper', unit_id: 2},     //8
				{name: 'Cilantro', unit_id: 2},   //9
				{name: 'Potatoes', unit_id: 1},   //10
				{name: 'Ginger', unit_id: 2},     //11
				{name: 'Salmon', unit_id: 2},     //12
				{name: 'Soy Sauce', unit_id: 3},  //13
				{name: 'Garlic Clove', unit_id: 1} //14 
			]);
		});
};
