import { useState, useEffect } from 'react';
import { Container, Card, CardText, CardBody, Row, Col, Button} from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import correct from '../../app/assets/audio/correct.wav';
import wrong from '../../app/assets/audio/wrong.wav';

const BiggerNumberCard = ({number}) => {
	const [toggle, setToggle] = useState(false);
	const audioCorrect = new Audio(correct);
	const audioWrong = new Audio(wrong);


	const handleMouseEnter = (e) => {
		console.log('do something in the future')
	};
	const handleMouseLeave = (e) => {
		console.log('do something in the future')
	};

	const handleClick = () =>{
		audioCorrect.play()
		console.log('handle click')
	}

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
	}, []);
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
