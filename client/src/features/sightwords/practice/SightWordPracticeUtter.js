import React from 'react';
import { Card, CardText, CardBody, Col, Button } from 'reactstrap';

const SightWordPracticeUtter = ({word}) => {
	let utter = new window.SpeechSynthesisUtterance("");
	utter.voice = speechSynthesis.getVoices().filter(function(voice){ return voice.name == 'Daniel (English (United Kingdom))'; })[0];
	const checkMe = () => {
		utter.text = word;
		window.speechSynthesis.speak(utter); 
	};
	return (
		<Col md='12' className='m-1'>
			<Card style={{ padding: "50px", "margin-top": "50px", "margin-left": "50px", border: "none"}}>
				<CardBody>
					<CardText>
						<Button onClick={checkMe}>Check Me</Button>	
					</CardText>
				</CardBody>
			</Card>
		</Col>
	)
}

export default SightWordPracticeUtter
