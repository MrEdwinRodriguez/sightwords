import React from 'react';
import SightWordPracticeCard from './SightWordPracticeCard';
import SightWordPracticeUtter from './SightWordPracticeUtter';
import {Row} from 'reactstrap';



const SightWordPractice = () => {
	return (
		<div>
			<Row>
				<SightWordPracticeCard word={'Test'} />
				<SightWordPracticeUtter word={'Test'} />
			</Row>
		</div>
	)
}

export default SightWordPractice
