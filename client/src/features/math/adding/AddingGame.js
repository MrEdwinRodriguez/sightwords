import React, {Fragment} from 'react';
import {Col, Row, Button, Input} from 'reactstrap';
import Item from './Item';
import { audioCorrect, audioWrong } from '../../../helpers/audio'

const AddingGame = () => {

	const numOne = 8;
	const numTwo = 3;

	const firstArray = new Array(numOne).fill('tree');
	const secondArray = new Array(numTwo).fill(null);

	const checkAnswer = (e) => {
		console.log(e.target.value)
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
				}}/></Col>
				<Col md='2'></Col>		
			</Row>
		</Fragment>
  	)
}

export default AddingGame
