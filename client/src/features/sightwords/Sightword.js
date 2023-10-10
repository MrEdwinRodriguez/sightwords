import React from 'react';
import { Card, CardText, CardBody, Button, Col } from 'reactstrap';

const Sightword = ({word}) => {
	
  	return (
		<Card>
			<CardBody>
				<CardText>{word}</CardText>
			</CardBody>
		</Card>
  	)
}

export default Sightword;
