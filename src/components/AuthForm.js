import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
		<form>
			<ValidatorForm
				autoComplete="off"
				className="dflexForm"
				spacing={2}
				onSubmit={props.onSubmit}>
				<TextValidator className="textfields namelogin"
						id="outlined-name"
						validators={['minNumber:3', 'maxNumber:16']}
						label="Name"
						onChange={(e) => onChange(e.target.value, 'login')}
						xs={6}
						variant="outlined" /> 

					<TextValidator className="textfields"
						xs={6}
						id="outlined-password-input"
						label="Password"
						type="password"
						onChange={(e) => onChange(e.target.value, 'password')}
						autoComplete="current-password"
						margin="normal"
						variant="outlined" />
				<Button
					size="large"
					className="buttonSubmit"
					variant="outlined"
					color="primary"
					role="submit"
					type="submit">
					GO
				</Button>
				</ValidatorForm>
		</form>
	)

};

export default AuthForm;