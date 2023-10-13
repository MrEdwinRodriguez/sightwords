import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';


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

export default ListGroupItemDisplay;