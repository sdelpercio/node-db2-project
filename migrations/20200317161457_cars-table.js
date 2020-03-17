exports.up = function(knex) {
	return knex.schema.createTable('cars', tbl => {
		// id
		tbl.increments();

		// vin number
		tbl
			.string('VIN', 255)
			.notNullable()
			.index();

		// make
		tbl.string('Make', 255).notNullable();

		// model
		tbl.string('Model', 255).notNullable();

		// mileage
		tbl.integer('Mileage').notNullable();

		// transmission type
		tbl.string('Transmission', 255);

		// title status
		tbl.string('TitleStatus', 255);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('cars');
};
