import React from 'react';
import STRAWBERRY from '../../../app/assets/img/strawberry.png';
import BEAR from '../../../app/assets/img/bear.png';
import TREE from '../../../app/assets/img/tree.png';
import APPLE from '../../../app/assets/img/apple.png';
import UNICORN from '../../../app/assets/img/unicorn.png';

const Item = ({img}) => {
	let image = STRAWBERRY;
	if (img && img ===  "bear") image = BEAR;
	if (img && img ===  "tree") image = TREE;
	if (img && img ===  "apple") image = APPLE;
	if (img && img ===  "unicorn") image = UNICORN;
  	return (
		<div>
			<img src={image} style={{height: "40px", width: "40px"}}alt='nucamp logo' className='float-start' />
		</div>
  	)
}

export default Item
