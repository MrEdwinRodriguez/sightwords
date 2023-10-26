import { useState, useEffect } from 'react';
import { Container, Card, CardText, CardBody, Row, Col, Button} from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import correct from '../../app/assets/audio/correct.wav';
import wrong from '../../app/assets/audio/wrong.wav';

const BiggerNumberCard = ({number, callback, selected}) => {
	const [toggle, setToggle] = useState(false);
	const [numberGiven, updateNumberGiven] = useState( null)
	const audioCorrect = new Audio(correct);
	const audioWrong = new Audio(wrong);
	if (number !=  numberGiven) {
		updateNumberGiven(number)
	}

	const handleMouseEnter = (e) => {
		console.log('do something in the future')
	};
	const handleMouseLeave = (e) => {
		console.log('do something in the future')
	};

	const handleClick = () =>{
		setToggle(false)
		callback(selected);
	}

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(false);
        setToggle(true);
	}, [numberGiven]);
	return (

		<animated.div style={animatedStyle} onMouseEnter={(e) => handleMouseEnter(e)}  onMouseLeave={(e) => handleMouseLeave(e)}>
			<Card 
				value={number}
				style={{
					height: '75px'
				}}
				className="margin-bot-20"
			>
				<CardBody value={number} onClick={(e)=>handleClick(e)} >
					<CardText value={number}>{number}</CardText>
				</CardBody>
			</Card>
		</animated.div>

	)
}

export default BiggerNumberCard
