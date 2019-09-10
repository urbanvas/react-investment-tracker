import React from 'react';

const Entry = () => {
	return (
		<article className="message is-danger container is-fullhd">
			<div className="message-header">
				<h3 className="is-size-4">Please look above and do one of the following:</h3>
			</div>
			<div className="message-body has-text-centered">
				<p className="menu-label has-text-weight-bold">Sign Up</p>
				<p className="menu-label has-text-weight-bold">Login</p>
			</div>
		</article>
	);
};

export default Entry;
