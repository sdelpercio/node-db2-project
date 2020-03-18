const express = require('express');
const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
	db('cars')
		.then(cars => {
			res.status(200).json(cars);
		})
		.catch(err => {
			res.status(500).json({ error: 'Error retrieving cars.', err });
		});
});
router.get('/:id', (req, res) => {
	db('cars')
		.where({ id: req.params.id })
		.then(car => {
			if (car.length === 0) {
				res.status(404).json({ message: 'Car could not be found' });
			} else {
				res.status(200).json(car);
			}
		})
		.catch(err => {
			res.status(500).json({ error: 'Error retrieving car.', err });
		});
});
router.post('/', (req, res) => {
	db('cars')
		.insert(req.body, 'id')
		.then(id => {
			res.status(201).json(id);
		})
		.catch(err => {
			res.status(500).json({ error: 'Error posting car.', err });
		});
});
module.exports = router;
