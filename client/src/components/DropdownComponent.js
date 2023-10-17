import {Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import {useState} from 'react';

const DropdownComponent = ({title, options, direction="down", callback}) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);
	const handleClick = (e) => {
		callback(e.target.value);
	};

	return (
		<span className="d-flex">
			<Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
				<DropdownToggle caret>{title}</DropdownToggle>
				<DropdownMenu >
					{options.map((option) => {
						return (
							<DropdownItem value={option._id} onClick={handleClick}>Unit {option.unit}</DropdownItem>
						);
					})}
				</DropdownMenu>
			</Dropdown>
		</span>
  )
}

export default DropdownComponent;
