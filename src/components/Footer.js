import React from 'react';

const Footer = (props) => {
	return (
		<div>
			<h1>Footer</h1>
			<p>{props.paragraph()}</p>
		</div>
	);
};

export default Footer;
