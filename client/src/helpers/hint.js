export const sightwordHint = (word) => {
	const first_letter = word.charAt(0);
	return `Try  again, ${word} starts wit the letter ${first_letter}.`
};

export const sightwordHintTwo = (word) => {
	const first_two_letters = word.substring(0,2);
	return `Try  again, ${word} starts wit the letters ${first_two_letters}.`
};
