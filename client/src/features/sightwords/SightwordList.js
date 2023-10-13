import React, {useRef, useEffect, useState} from 'react';
import {Container, Col, Row, Button} from 'reactstrap';
import Sightword from './Sightword';
import AnimatedWord from './AnimatedWord';

const SightwordList = () => {
	const [showMic, toggleMic] = useState(true);
	const [currentWord, updateCurrentWord] = useState(null);
	const [score, updateScore] = useState(0)

	const wordsFullArray = ['it', "black", "red", "into", "in", "white", "brown"];
	const words = useRef(['it', "black", "red", "into", "in", "white", "brown"]);

	const onRead = () => {
		const randomNumber = Math.floor(Math.random() * words.current.length);
		const toSay = words.current.splice(randomNumber, 1);
		updateCurrentWord(toSay[0])
		if (words.current.length === 0) toggleMic(false);
		const utter = new window.SpeechSynthesisUtterance(toSay[0]);
		window.speechSynthesis.speak(utter); 
	};

	const compare = (selection) => {
		if (!currentWord) {
			const utter = new window.SpeechSynthesisUtterance("Select a new word");
			window.speechSynthesis.speak(utter); 
		} else if (selection === currentWord) {
			updateScore(score + 1);
			const utter = new window.SpeechSynthesisUtterance("Great Job");
			window.speechSynthesis.speak(utter);
			updateCurrentWord(null)
		} else {
			if (score > 0) updateScore(score - 1);
			const utter = new window.SpeechSynthesisUtterance("Try Again");
			window.speechSynthesis.speak(utter);
		}
	};

	return (
		<Container>
			<h1>Score</h1>
			<div>{score}</div>
			{showMic ? <Button onClick={onRead}><i className="fa fa-microphone" aria-hidden="true"></i></Button> : ""}
			<Row>
				{wordsFullArray.map((word, idx) => {
					return (
						<Col className='m-3 col-sm-4' key={idx}>
							<AnimatedWord word={word} compare={compare} />
						</Col>
					);
				})}
			</Row>
		</Container>

	);
}

export default SightwordList
