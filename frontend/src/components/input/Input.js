import React, { Fragment } from 'react';

const Input = ({ attr, value, handleChange }) => {
	const capitalizedAttr = (str) => str[0].toUpperCase() + str.slice(1);
	return (
		<Fragment>
			<label className="label" htmlFor={attr}>
				{capitalizedAttr(attr)}:
			</label>
			<input
				className="input is-danger is-large"
				type="text"
				placeholder={`Enter ${attr}`}
				name={attr}
				onChange={(e) => handleChange(e.target.value)}
				value={value}
				required
			/>
		</Fragment>
	);
};

export default Input;
