import React, { Fragment } from 'react';

const Input = ({ attr, value, handleChange, inputClassArr, labelClassArr }) => {
	const capitalizedAttr = (str) => str[0].toUpperCase() + str.slice(1);
	return (
		<Fragment>
			<label className={labelClassArr.join(' ')} htmlFor={attr}>
				{capitalizedAttr(attr)}:
			</label>
			<input
				className={inputClassArr.join(' ')}
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
