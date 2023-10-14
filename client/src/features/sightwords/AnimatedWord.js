import { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedWord = ({ word, compare }) => {
    const [toggle, setToggle] = useState(false);

	const handleMouseEnter = (e) => {
		console.log('do something in the future')
	};
	const handleMouseLeave = (e) => {
		console.log('do something in the future')
	};

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
	}, []);
	
	const handleClick = (e) => {
		const wordSelected = e.target.getAttribute("value");
		compare(wordSelected)
	}
    return (
        <animated.div style={animatedStyle} onMouseEnter={(e) => handleMouseEnter(e)}  onMouseLeave={(e) => handleMouseLeave(e)}>
			<Card 
				id={word}
				style={{
					height: '75px'
				}}
				className="margin-bot-20"
			>
				<CardBody value={word} onClick={(e)=>handleClick(e)} >
					<CardText value={word}>{word}</CardText>
				</CardBody>
			</Card>
        </animated.div>
    );
};

export default AnimatedWord;