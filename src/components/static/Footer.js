import React from "react";
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';

const Footer = () => {
  return(
		<footer>
			<Paper className="paper foot" dir="rtl" xs={7}>
					Web by noname
			</Paper>    
		</footer>
)
}

export default connect(
		state => ({
		}),

		dispatch => ({
						
				}
		)
	)(Footer);
