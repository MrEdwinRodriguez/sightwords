import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import Sightword from './Sightword';

const SightwordList = () => {
	const words = ['it', "black", "red", "into", "in", "white", "brown"]
	return (
		<Container>
			<Row>
				{words.map((word, idx) => {
					return (
						<Col className='m-3 col-sm-4' key={idx}>
							<Sightword word={word} />
						</Col>
					);
				})}
			</Row>
		</Container>

	);
}

export default SightwordList
