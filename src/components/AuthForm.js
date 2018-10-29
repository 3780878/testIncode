import React from "react";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const AuthForm = (props) => {
	const onChange = (value, key) => {						
		const result = {}
		result[key] = value;

	if (key === 'login') {
		result.password = props.password;
	}
	if (key === 'password') {
		result.login = props.login;
	}
	props.onChange(result);
}
	return (
		<ValidatorForm
			autoComplete="off"
			className="dflexForm"
			spacing={2}
			onSubmit={props.onSubmit}>
			<TextValidator className="textfields namelogin"
					id="outlined-name"
					//validators={['minStringLength:3', 'maxStringLength:16']}
					onChange={(e) => onChange(e.target.value, 'login')}
					label="Name"
					name="login"
					xs={6}
					variant="outlined" /> 

				<TextValidator className="textfields fieldPassw"
					xs={6}
					id="outlined-password-input"
					label="Password"
					type="password"
					name="password"
					onChange={(e) => onChange(e.target.value, 'password')}
					//validators={['minStringLength:3', 'maxStringLength:16']}
					autoComplete="current-password"
					margin="normal"
					variant="outlined" />
			<Button
				size="large"
				className="buttonSubmit"
				variant="outlined"
				color="primary"
				type="submit">
				GO
			</Button>
		</ValidatorForm>
	)

};

export default AuthForm;