import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root : {
		display       : "flex",
		flexDirection : "column",
		alignItems    : "center",
		padding : theme.spacing(2),

		"& .backBtnContainer" : {
			alignSelf : "flex-start",

			"& .text" : {
				fontSize      : 18,
				color         : "#767676",
				textTransform : "none",
			},
		},

		"& .algContainer" : {
			width        : "97%",
			marginBottom : "40px",
		},

		"& .card" : {
			padding      : "10px 20px",
			borderRadius : "20px",
			boxShadow    : theme.shadows[5],
			width        : "97%",
		},

		"& .graph" : {
			display       : "flex",
			flexDirection : "row",

			"& > *" : {
				width    : "50%",
				maxWidth : "50%",
				minWidth : "50%",
			},

			"& .imageContainer img" : {
				width    : "100%",
				maxWidth : "100%",
			},
		},
	},
}));

export default useStyles;
