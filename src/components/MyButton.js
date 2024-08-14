import React from 'react';

const MyButton = (props) => {
	return (
		<div>
			<button onClick={() => props.clicked()}>MyButton</button>
		</div>
	);
};

export default MyButton;
