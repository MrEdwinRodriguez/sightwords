import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const ListGroupItemDisplay = ({text, link}) => {
	const handleMouseEnter = (e) => {
		e.target.classList.add("active")
	};
	const handleMouseLeave = (e) => {
		e.target.classList.remove("active")

	};
	return (
		<ListGroupItem onMouseEnter={(e) => handleMouseEnter(e)}  onMouseLeave={(e) => handleMouseLeave(e)} >
			<Link to={'/'+link}>{text}</Link> 
		</ListGroupItem>
	)
}



const Homepage = () => {


  return (
	<Container className="col-lg-4 col-md-6 col-xs-12" style={{ "margin-top": "100px"}}>
		<h1>Home Page</h1>
	<ListGroup>
		<ListGroupItemDisplay text={"Letters"}/>
		<ListGroupItemDisplay text={"Sightwords - Selecting"} link={"sightwords"}/>
		<ListGroupItemDisplay text={"Sightwords - Spelling"}/>
		<ListGroupItemDisplay text={""}/>

		<ListGroupItem  >
			<Link to={'/sightwords'}>Sightwords - Selecting</Link> 
		</ListGroupItem>
		<ListGroupItem>
			Sightwords - Spelling
		</ListGroupItem>
		<ListGroupItem>
			TBD
		</ListGroupItem>
		<ListGroupItem>
			TBD
		</ListGroupItem>
	</ListGroup>
	</Container>
  )
}

export default Homepage
