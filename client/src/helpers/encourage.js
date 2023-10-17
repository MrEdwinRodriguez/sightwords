export const phrases = ["Great Job!", "Keep it up!", "You are doing Great!", "That's correct!", "Awesome!", "Awesome Sauce!", "Cool Beans!", "You Rock!", "You are doing so good!", "Keep up the good work!", "You are a superstar!"];

export const getEncourangmentPhrase = () => {
	const randomNumber = Math.floor(Math.random() * phrases.length);
	return phrases[randomNumber];
}

