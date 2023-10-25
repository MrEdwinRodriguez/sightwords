import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Button} from 'reactstrap'
import DropdownComponent from '../../components/DropdownComponent';
import BiggerNumberCard from './BiggerNumberCard';

const BiggerNumberGame = () => {
	const [unit, updateUnit] = useState(null);
	const [firstNumber, updateFirstNumber] = useState(null);
	const [secondNumber, updateSecondNumber] = useState(null);
	const [numberRange, updateNumberRange] = useState(null); //object with values max and min
	const units = [{_id: 1, unit: 1, max: 10, min: 1}, {_id: 2, unit: 2, max: 20,  min: 10}, {_id: 3, unit: 3, max: 100, min: 1},  {_id: 4, unit: 4, max: 1000, min: 1}]
	const handleDropDown = (id) => {
		console.log('line 13', id)
		updateUnit(parseInt(id))
	};


	useEffect(() => {
		const unitSelected = units.find(unitObj => unitObj._id === unit);
		console.log('line 20', unitSelected)
		if (unitSelected) {
			const random = Math.floor(Math.random());
			updateFirstNumber(Math.floor(Math.random() * (unitSelected.max - unitSelected.min + 1) + unitSelected.min));
			updateSecondNumber(Math.floor(Math.random() * (unitSelected.max - unitSelected.min + 1) + unitSelected.min));
		};
	}, [unit]);

	return (
		<Container>
		<Row>
			<Col style={{"margin-top": "50px"}} md='3' >
				<DropdownComponent title="Choose Unit" options={units} callback={handleDropDown} />
			</Col>
			<Col style={{"margin-top": "50px"}} md='6'>
				Which number is bigger?
			</Col>
		</Row>
		<Row style={{"margin-top": "50px"}}>
			<Col md='3'></Col>
			<Col md='3'>
				<BiggerNumberCard number={firstNumber} />
			</Col>
			<Col md='3'>
				<BiggerNumberCard number={secondNumber} />
			</Col>
		</Row>
	</Container>
	)
}

export default BiggerNumberGame
