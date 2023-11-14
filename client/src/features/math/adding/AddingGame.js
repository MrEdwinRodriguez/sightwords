import React, {Fragment, useEffect, useState } from 'react';
import {Col, Row, Button, Input} from 'reactstrap';
import Item from './Item';
import { audioCorrect, audioWrong } from '../../../helpers/audio';
import { getRandomNumber, getRandomNumberInRange } from '../../../helpers/utils';

const AddingGame = () => {
	const [numOne, updateNumOne] = useState(null);
	const [numTwo, updateNumTwo] = useState(null);
	const [answer, updateAnswer] = useState(null);

	const firstArray = new Array(numOne).fill('tree');
	const secondArray = new Array(numTwo).fill(null);

	useEffect(()=>{
		updateNumOne(getRandomNumber(10));
		updateNumTwo(getRandomNumber(10));
	}, [])

	const checkAnswer = (e) => {
		if (numOne + numTwo == e.target.value) {
			audioCorrect.play();
			updateAnswer(null)
			updateNumOne(getRandomNumber(10));
			updateNumTwo(getRandomNumber(10));
		} else {
			audioWrong.play()
		}
	};

  	return (
		<Fragment>
			<Row className="margin-top-20">
				<Col md='2'></Col>
				<Col md='2'>
					{firstArray && firstArray.map(num => <Item img="tree"/> )}
				</Col>
				<Col md="1">+</Col>
				<Col md='2'>
					{secondArray && secondArray.map(num => <Item img="tree"/> )}
				</Col>
				<Col md="1">=</Col>
				<Col md='2'><Input onBlur={checkAnswer} onKeyPress={event => {
					if (event.key === 'Enter') {
						checkAnswer(event);
					}
				}} value={answer}/></Col>
				<Col md='2'></Col>		
			</Row>
		</Fragment>
  	)
}

export default AddingGame
