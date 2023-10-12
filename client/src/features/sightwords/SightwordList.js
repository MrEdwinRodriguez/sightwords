import React, {useEffect, useState} from 'react';
import {Container, Col, Row, Button} from 'reactstrap';
import Sightword from './Sightword';

const SightwordList = () => {
	const [showMic, toggleMic] = useState(true);
	const [currentWord, updateCurrentWord] = useState(null);
	const words = ['it', "black", "red", "into", "in", "white", "brown"]

	const onRead = () => {
		const randomNumber = Math.floor(Math.random() * words.length);
		const toSay = words.splice(randomNumber, 1);
		updateCurrentWord(toSay[0])
		console.log(words)
		if (words.length === 0) toggleMic(false);
		// const utter = new window.SpeechSynthesisUtterance(toSay[0]);
		// window.speechSynthesis.speak(utter);
	};

	const compare = (selection) => {
		if (selection === currentWord) {
			const utter = new window.SpeechSynthesisUtterance("Great Job");
			window.speechSynthesis.speak(utter);
		} else {
			const utter = new window.SpeechSynthesisUtterance("Try Again");
			window.speechSynthesis.speak(utter);
		}
	};

	return (
		<Container>
			{showMic ? <Button onClick={onRead}><i className="fa fa-microphone" aria-hidden="true"></i></Button> : ""}
			<Row>
				{words.map((word, idx) => {
					return (
						<Col className='m-3 col-sm-4' key={idx}>
							<Sightword word={word} compare={compare} />
						</Col>
					);
				})}
			</Row>
		</Container>

	);
}

export default SightwordList
