import React, {useRef, useEffect, useState} from 'react';
import {Container, Col, Row, Button, Alert} from 'reactstrap';
import Sightword from './Sightword';
import AnimatedWord from './AnimatedWord';
import DropdownComponent from '../../../components/DropdownComponent';
import { getEncourangmentPhrase } from '../../../helpers/encourage';
import { sightwordHint } from '../../../helpers/hint';
import ConfettiExplosion from 'react-confetti-explosion';
import { getAllSightWords, selectSighwordListsById, getAllUnits } from './sightwordSlice'

const SightwordList = () => {
	const [showMic, toggleMic] = useState(false);
	const [showConfetti, toggleConfetti] = useState(false);
	const [showRepeat, toggleRepeat] = useState(false);
	const [currentWord, updateCurrentWord] = useState(null);
	const [unit, updateUnit] = useState('Choose Unit');
	const [wordsFullArray, updateWordFullsArray] = useState([]);
	const [score, updateScore] = useState(0);
	const [alert, toggleAlert] = useState(false);
	const [alertText, updateAlertText] = useState("");
	const [scorePercentage, updateScorePercentage] = useState(0);

	const allUnits = getAllUnits();
	let words = useRef([]);
	let utter = new window.SpeechSynthesisUtterance("");
	utter.voice = speechSynthesis.getVoices().filter(function(voice){ return voice.name == 'Daniel (English (United Kingdom))'; })[0];
	const onRead = () => {
		const randomNumber = Math.floor(Math.random() * words.current.length);
		const toSay = words.current.splice(randomNumber, 1);
		updateCurrentWord(toSay[0])
		if (words.current.length === 0) {
			toggleMic(false);
			toggleRepeat(false);
		} else {
			toggleMic(false);
			toggleRepeat(true);
		};
		utter.text = toSay[0];
		utter.voice = speechSynthesis.getVoices().filter(function(voice){ return voice.name == 'Daniel (English (United Kingdom))'; })[0];
		window.speechSynthesis.speak(utter); 
	};

	const onRepeat = () => {
		utter.text = currentWord;
		utter.voice = speechSynthesis.getVoices().filter(function(voice){ return voice.name == 'Daniel (English (United Kingdom))'; })[0];
		window.speechSynthesis.speak(utter); 
	};

	const compare = (selection) => {
		if (!currentWord) {
			utter.text = "Select a new word";
			window.speechSynthesis.speak(utter); 
		} else if (selection === currentWord) {
			updateScore(score + 1);
			utter.text = getEncourangmentPhrase();
			window.speechSynthesis.speak(utter);
			updateCurrentWord(null)
			if (words.current.length === 0) {
				updateScorePercentage((score+1)/wordsFullArray.length);
				toggleConfetti(true);
				toggleAlert(true);
				toggleMic(false);
				toggleRepeat(false);
				if ((score+1)/wordsFullArray.length === 1) {
					updateAlertText(`Perfect Score! You got ${score+1} points.`)
				} else if ((score+1)/wordsFullArray.length > .6) {
					updateAlertText(`Good Job! You got ${score+1} points.`)
				} else {
					updateAlertText(`Let's try this one again. You got ${score+1} points.`)
				}
			} else {
				toggleMic(true);
				toggleRepeat(false);
			};
		} else {
			if (score > 0) updateScore(score - 1);
			const hint = sightwordHint(currentWord);
			utter.text = hint
			window.speechSynthesis.speak(utter);
		}
	};

	const done = () => {

	};

	const handleDropDown = (id) => {
		const unitSelected = selectSighwordListsById(id);
		words.current = [...unitSelected.words];
		updateWordFullsArray(unitSelected.words);
		updateUnit(unitSelected.unit)
		toggleMic(true);
		updateScore(0);
	};

	const hideAlert = () => {
		toggleAlert(false);
	};

	return (
		<Container className="margin-top-20">
		{alert && <Alert color={scorePercentage > .6 ? "primary" : "warning"}>{alertText}<span className="fr" onClick={hideAlert}>x</span></Alert>}
		{showConfetti && <ConfettiExplosion particleCount={200} duration={4000} width={1000}/>}
			<DropdownComponent title="Choose Unit" options={allUnits} callback={handleDropDown}/>
			{unit && unit !== "Choose Unit" && <h1>Unit {unit}</h1>}
			<h3>Score</h3>
			<div>{score}</div>
			{showMic ? <Button onClick={onRead} className="margin-top-20"><i className="fa fa-microphone" aria-hidden="true"></i> New Word</Button> : ""}
			{showRepeat ? <Button onClick={onRepeat} className="margin-top-20"><i className="fa fa-repeat" aria-hidden="true"></i> Repeat</Button> : ""}
			<Row className="margin-top-20">
				{wordsFullArray && wordsFullArray.map((word, idx) => {
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
