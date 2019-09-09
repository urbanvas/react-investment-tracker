import React from 'react';

const Form = ({ classes, buttonText, children, handleSubmit }) => {
	return (
		<form className={classes} onSubmit={(e) => handleSubmit(e)}>
			{children}
			<button type="submit">{buttonText}</button>
		</form>
	);
};

export default Form;
