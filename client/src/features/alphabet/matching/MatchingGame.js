import React from 'react'
import{Container, Row, Col, Button} from'reactstrap';
import Letter from './Letter';
import DropBox from'./DropBox';


const MatchingGame = () => {
  return (
	<Container>
		<Row>
			<Col md='1' className='m-1'></Col>
			<Col md='2' className='m-1'><Letter letter={'A'} id={1} /></Col>
			<Col md='2' className='m-1'></Col>
			<Col md='2' className='m-1'><DropBox/></Col>
			<Col md='2' className='m-1'></Col>
			<Col md='2' className='m-1'><Letter /></Col>
		</Row>
	</Container>
  )
}

export default MatchingGame
