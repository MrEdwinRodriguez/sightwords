import React from 'react';
import { Card, CardText } from 'reactstrap';

const Sightword = ({word}) => {
	
  	return (
		<Card
			body
			className="my-4"
			style={{
			width: '18rem'
			}}
		>
			<CardText>{word}</CardText>
		</Card>
  	)
}

export default Sightword;
