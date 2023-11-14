import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { selectUnitById, getAllUnits } from './biggerNumberGameSlice';
import { Container, Row, Col, Button} from 'reactstrap'
import DropdownComponent from '../../components/DropdownComponent';
import BiggerNumberCard from './BiggerNumberCard';
import { audioCorrect, audioWrong } from '../../helpers/audio';
import { getRandomNumberInRange} from '../../helpers/utils';

const BiggerNumberGame = () => {
	const [unit, updateUnit] = useState(null);
	const [firstNumber, updateFirstNumber] = useState(null);
	const [secondNumber, updateSecondNumber] = useState(null);
	const [numberRange, updateNumberRange] = useState(null); //object with values max and min
	const units = useSelector(getAllUnits)
	// const units = [{_id: 1, unit: 1, max: 10, min: 1}, {_id: 2, unit: 2, max: 20,  min: 10}, {_id: 3, unit: 3, max: 100, min: 1},  {_id: 4, unit: 4, max: 1000, min: 1}];

	useEffect(() => {
		const unitSelected = units.find(unitObj => unitObj._id === unit);
		if (unitSelected) {
			updateFirstNumber(getRandomNumberInRange(unitSelected.min), unitSelected.max)
			updateSecondNumber(getRandomNumberInRange(unitSelected.min), unitSelected.max)
		};
	}, [unit]);

	useEffect(() => {
		if (unit && firstNumber == secondNumber) {
			const unitSelected = units.find(unitObj => unitObj._id === unit);
			updateSecondNumber(getRandomNumberInRange(unitSelected.min), unitSelected.max);
		};
	}, [secondNumber])
	
	const handleDropDown = (id) => {
		updateUnit(parseInt(id))
	};

	const checkAnswer = (selected) => {
		if (selected === 'first' &&  firstNumber > secondNumber) audioCorrect.play();
		else if (selected === 'second' &&  firstNumber < secondNumber)audioCorrect.play();
		else audioWrong.play();
		setTimeout(()=>{
			const unitSelected = units.find(unitObj => unitObj._id === unit);
			updateFirstNumber(getRandomNumberInRange(unitSelected.max), unitSelected.min)
			updateSecondNumber(getRandomNumberInRange(unitSelected.max), unitSelected.min)
		}, 500)
	};

	return (
		<Container>
		<Row>
			<Col style={{"marginTop": "50px"}} md='3' >
				<DropdownComponent title="Choose Unit" options={units} callback={handleDropDown} />
			</Col>
			<Col style={{"marginTop": "50px"}} md='6'>
				Which number is bigger?
			</Col>
		</Row>
		<Row style={{"marginTop": "50px"}}>
			<Col md='3'></Col>
			<Col md='3'>
				{unit && <BiggerNumberCard number={firstNumber} callback={checkAnswer} selected={'first'} />}
			</Col>
			<Col md='3'>
				{unit && <BiggerNumberCard number={secondNumber} callback={checkAnswer} selected={'second'} /> }
			</Col>
		</Row>
	</Container>
	)
}

export default BiggerNumberGame
