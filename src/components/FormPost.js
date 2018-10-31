import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const FormPost = (props) => {
	const onChange = (value, key) => {						
		const result = {}
		result[key] = value;
	if (key === 'title') {
		result.title = props.title;
	}
	if (key === 'body') {
		result.body = props.body;
	}
	props.onChange(result);
}
	return (
		<form
			autoComplete="off"
			className="dflexForm"
			spacing={2}
			onSubmit={props.onSubmit}>
			<TextField className="titleNewPost"
				id="outlined-full-width"
				label="Title"
				onChange={(e) => onChange(e.target.value, 'title')}
				style={{ margin: 8 }}
				placeholder="Subject of your post"
				xs={6}
				margin="normal"
				variant="outlined"
				InputLabelProps={{
					shrink: true}}
			/>
      <TextField
        id="outlined-full-width"
        label="Description"
        onChange={(e) => onChange(e.target.value, 'body')}
        style={{ margin: 8 }}
        placeholder="Tell me about what your post will be.."
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true}}
      />
			<Button
				size="large"
				className="buttonSubmit"
				variant="outlined"
				color="primary"
				type="submit">
				GO
			</Button>
      </form>
	)
};
export default FormPost;
