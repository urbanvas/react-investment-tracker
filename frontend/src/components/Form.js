import React from 'react';

const Form = ({ classes, buttonText, children, handleSubmit }) => {
	return (
		<form className={classes} onSubmit={(e) => handleSubmit(e)}>
			{children}
			<button className="button is-warning" type="submit">
				{buttonText}
			</button>
		</form>
	);
};

export default Form;
