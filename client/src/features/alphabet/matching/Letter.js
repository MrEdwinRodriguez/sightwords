import React from 'react'


const Letter = ({letter, id}) => {

	const onDrag = (e, l) => {
		e.preventDefault();

		console.log('handdleDrag')
	}
  return (
	<div
		id="LETTER"
		data-tag={id}
		key={id}
		draggable
		onDrag={(e)=> onDrag(e, "le")}
	>
	  {letter}
	</div>
  )
}

export default Letter
