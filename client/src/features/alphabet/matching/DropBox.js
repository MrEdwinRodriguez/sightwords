import React from 'react'


const DropBox = () => {
	const drag = function(ev) {
		ev.stopPropagation();
		ev.preventDefault();
		ev.dataTransfer.setData("text", "test here");
	  }

	  const allowDrop = function(e) {
		e.preventDefault();
		
	  }
	  
	  const drop = function (e) {
		e.stopPropagation();
		e.preventDefault();
		console.log(e.target)

		console.log('hi', e.target.getAttribute('data-value'));
	  }
  	return (
		<div id="div1" data-value={"A"}  onDrop={event => drop(event)} onDragOver={(event => drag(event))} >
			HEEEERRRE
		</div>
  	)
}

export default DropBox
