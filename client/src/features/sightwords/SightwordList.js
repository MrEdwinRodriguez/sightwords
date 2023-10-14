import React, {useRef, useEffect, useState} from 'react';
import {Container, Col, Row, Button} from 'reactstrap';
import Sightword from './Sightword';
import AnimatedWord from './AnimatedWord';
import { getAllSightWords, selectSighwordListsById } from './sightwordSlice'

const SightwordList = () => {
	const [showMic, toggleMic] = useState(true);
	const [currentWord, updateCurrentWord] = useState(null);
	const [score, updateScore] = useState(0);
	console.log(getAllSightWords())
	// console.log(selectSighwordListsById(0))

	const wordsFullArray = getAllSightWords();
	const words = useRef(getAllSightWords());

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
		<Container className="margin-top-20">
			<h1>Score</h1>
			<div>{score}</div>
			{showMic ? <Button onClick={onRead} className="margin-top-20"><i className="fa fa-microphone" aria-hidden="true"></i> New Word</Button> : ""}
			<Row className="margin-top-20">
				{wordsFullArray.map((word, idx) => {
					return (
						<Col className='col-sm-3' key={idx}>
							<AnimatedWord word={word} compare={compare} />
						</Col>
					);
				})}
			</Row>
		</Container>

	);
}

export default SightwordList
