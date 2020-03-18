exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('cars')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('cars').insert([
				{
					VIN: '34SAD8985ASDF',
					Make: 'Mazda',
					Model: 'Miata',
					Mileage: 89000,
					Transmission: 'Manual',
					TitleStatus: 'clean'
				},
				{
					VIN: 'CVO494HDOG873',
					Make: 'BMW',
					Model: 'M3',
					Mileage: 23500,
					Transmission: 'Automatic',
					TitleStatus: 'salvage'
				},
				{
					VIN: 'NV93NSOF0235S',
					Make: 'Ford',
					Model: 'Mustang',
					Mileage: 180,
					Transmission: 'Manual',
					TitleStatus: ''
				}
			]);
		});
};
