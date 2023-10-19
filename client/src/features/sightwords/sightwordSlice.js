import { SIGHTWORDS } from '../../../src/app/shared/SIGHTWORDS';


export const getAllSightWords = () => {
	let allSightWords = [];
	SIGHTWORDS.forEach(list => {
		allSightWords = allSightWords.concat(list.words)
	});
	return allSightWords;
}

export const getAllUnits = () => {
	return SIGHTWORDS;
}

export const selectSighwordListsById = (id) => {
	return SIGHTWORDS.find((list) => list._id === parseInt(id));
}