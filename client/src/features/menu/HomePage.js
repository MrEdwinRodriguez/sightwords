import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import ListGroupItemDisplay from './ListGroupItemDisplay';




const Homepage = () => {
  return (
	<Container className="col-lg-4 col-md-6 col-xs-12" style={{ "margin-top": "40px"}}>
		<h1>Home Page</h1>
	<ListGroup>
		<ListGroupItemDisplay className="home-page" text={"Letters"} link={""}/>
		<ListGroupItemDisplay className="home-page" text={"Sightwords - Selecting"} link={"sightwords"}/>
		<ListGroupItemDisplay className="home-page" text={"Sightwords - Spelling"} link={""}/>
		<ListGroupItemDisplay className="home-page" text={"TBD"} link={""}/>
	</ListGroup>
	</Container>
  )
}

export default Homepage