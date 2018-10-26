import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
		<div>
			<form
				autoComplete="off"
				className="dflexForm"
				spacing={2}
				onSubmit={props.onSubmit}>
				<Grid>
					<TextField className="textfields namelogin"
						id="outlined-name"
						label="Name"
						onChange={(e) => onChange(e.target.value, 'login')}
						xs={6}
						variant="outlined" /> 
				</Grid>
				<Grid>
					<TextField className="textfields"
						xs={6}
						id="outlined-password-input"
						label="Password"
						type="password"
						onChange={(e) => onChange(e.target.value, 'password')}
						autoComplete="current-password"
						margin="normal"
						variant="outlined" />
				</Grid>

				<Button
					size="large"
					className="buttonSubmit"
					variant="outlined"
					color="primary"
					role="submit"
					type="submit">
					GO
				</Button>
			</form>
		</div>
	)

};

export default AuthForm;