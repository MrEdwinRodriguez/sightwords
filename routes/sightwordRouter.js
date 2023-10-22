const express = require('express');
const sightWordRouter = express.Router();
const SightWord = require('../models/sightword');

sightWordRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get(async (req, res, next) => {
	try {
		const allSightWords = await SightWord.find().exec();
		res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(allSightWords);
	} catch (error) {
		next(error);
	};
})
.post((req, res) => {
    res.end('POST operation not supported on /sighwords');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /sightwords');
})
.delete((req, res) => {
    res.end('Deleting all sightword');
});

sightWordRouter.route('/:sighwordId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get(async (req, res, next) => {
	try {
		const allSightWords = await SightWord.findById(req.params.sighwordId).exec();
		res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(allSightWords);
	} catch (error) {
		next(error);
	};
})
.post((req, res) => {
    try {
		const sightword = await SightWord.findById(req.params.sighwordId).exec();
		if (!sightword) throw new Error('sightword list not found');
		const { words, unit, quarter } = req.body;
		if (words) sightword.words = words;
		if (unit) sightword.unit = unit;
		if (quarter) sightword.quarter = quarter;
		await sightword.save();
		res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sightword);
	} catch (error) {
		next(error);
	};
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /sightwords/:sightwordId');
})
.delete((req, res) => {
    res.end('Deleting all sightword');
});


module.exports = sightWordRouter;