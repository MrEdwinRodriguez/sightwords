import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import ListGroupItemDisplay from './ListGroupItemDisplay';




const Homepage = () => {
  return (
	<Container className="col-lg-4 col-md-6 col-xs-12" style={{ "margin-top": "40px"}}>
		<h1>Home Page</h1>
	<ListGroup>
		<ListGroupItemDisplay className="home-page" text={"Letters"} link={"alphabet"}/>
		<ListGroupItemDisplay className="home-page" text={"Bigger Number"} link={"biggernumbergame"}/>
		<ListGroupItemDisplay className="home-page" text={"Adding"} link={"addinggame"}/>
		<ListGroupItemDisplay className="home-page" text={"Sightwords - Practice"} link={"sightwords/practice"}/>
		<ListGroupItemDisplay className="home-page" text={"Sightwords - Test"} link={"sightwords"}/>
		<ListGroupItemDisplay className="home-page" text={"Sightwords - Spelling"} link={""}/>
		<ListGroupItemDisplay className="home-page" text={"TBD"} link={""}/>
	</ListGroup>
	</Container>
  )
}

export default Homepage