import React from 'react'
import { Card, CardText, CardBody, Col } from 'reactstrap';

const SightWordPracticeCard = ({word}) => {
  return (
	  <>
		<Col md='3' className='m-1'></Col>
		<Col md='6' className='m-1'>
			<Card style={{ padding: "50px", "margin-top": "50px", "margin-left": "50px"}}>
				<CardBody>
					<CardText><h1>{word}</h1></CardText>
				</CardBody>
			</Card>
		</Col>
	</>
  )
}

export default SightWordPracticeCard;
