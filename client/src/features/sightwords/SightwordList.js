import React from 'react';
import {Col, Row} from 'reactstrap';
import Sightword from './Sightword';

const SightwordList = () => {
	const words = ['it', "black", "red", "into", "in", "white", "brown"]
	return (
		<Col md='5' className='m-1'>
			<h4>Comments</h4>
			{words.map((word, index) => {
				return <Sightword key={index+1} word={word} />;
			})}
		</Col>
	);
}

export default SightwordList
