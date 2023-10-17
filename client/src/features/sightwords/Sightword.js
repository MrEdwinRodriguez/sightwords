import React from 'react';
import { Card, CardText, CardBody} from 'reactstrap';

const Sightword = ({word, compare}) => {
	const handleClick = (e) => {
		const wordSelected = e.target.getAttribute("value");
		compare(wordSelected)
	}
  	return (
		<Card 
			id={word}
			style={{
				height: '100px'
			}}
		>
			<CardBody value={word} onClick={(e)=>handleClick(e)}>
				<CardText value={word}>{word}</CardText>
			</CardBody>
		</Card>
  	)
}

export default Sightword;
