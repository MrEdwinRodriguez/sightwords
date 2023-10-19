import React, {useState} from 'react';
import SightWordPracticeCard from './SightWordPracticeCard';
import SightWordPracticeUtter from './SightWordPracticeUtter';
import {Row, Col, Container, Button} from 'reactstrap';
import DropdownComponent from '../../../components/DropdownComponent';
import { getAllSightWords, selectSighwordListsById, getAllUnits } from '../sightwordSlice';

const SightWordPractice = () => {
	const [unit, updateUnit] = useState(null);
	const [wordsFullArray, updateWordFullsArray] = useState([]);
	const [word, updateWord] = useState(null);
	const [words, updateWords] = useState([]);
	const [usedWords, updateUsedWords] = useState([]);
	const allUnits = getAllUnits();
	const handleDropDown = (id) => {
		const unitSelected = selectSighwordListsById(id);
		updateUnit(unitSelected);
		updateWords([...unitSelected.words]);
		
	};
	const newWord = () => {
		const randomNumber = Math.floor(Math.random() * words.length);
		const newWord = words.splice(randomNumber, 1);
		updateWord(newWord)
	};

	return (
		<Container>
			<Row>
				<Col style={{"margin-top": "50px"}} md='3' >
					<DropdownComponent  title="Choose Unit" options={allUnits} callback={handleDropDown} />
					{unit ? <h3 style={{"margin-top": "20px"}}>Unit {unit.unit}</h3> : ""}
					{unit ? <Button onClick={newWord}>New Word</Button> : ""}
				</Col>
				<SightWordPracticeCard word={word} />
				<SightWordPracticeUtter word={word}/>
			</Row>
		</Container>
	)
}

export default SightWordPractice
