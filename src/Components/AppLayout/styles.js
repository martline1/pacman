import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root : {
		position : "absolute",
		margin   : 0,
		padding  : 0,

		top    : 0,
		left   : 0,
		right  : 0,
		bottom : 0,

		display       : "flex",
		flexDirection : "row",

		"& .left" : {
			position  : "absolute",
			top       : 0,
			bottom    : 0,
			left      : 0,
			width     : "240px",
			minWidth  : "240px",
			boxShadow : theme.shadows[5],
			zIndex    : 1,

			display        : "flex",
			flexDirection  : "column",
			justifyContent : "flex-start",
			alignItems     : "center",
			backgroundColor : theme.palette.primary.main,

			"& .imageContainer" : {
				marginTop    : "47px",
				padding      : 0,
				borderRadius : 25,
			},

			"& .divider" : {
				margin : "30px auto 20px auto",
				width  : "90%",
				backgroundColor : theme.palette.common.white,
			},

			"& .actionsContainer" : {
				display       : "flex",
				flexDirection : "column",
				flexGrow      : 1,
				width         : "100%",

				"& .action" : {
					display        : "flex",
					flexDirection  : "row",
					justifyContent : "flex-start",
					width          : "100%",

					"& img, svg" : {
						marginLeft  : theme.spacing(2),
						marginRight : theme.spacing(1.5),
						fontSize    : "34px",
						color       : "white",
					},

					"& p" : {
						textTransform : "none",
						fontSize      : "22px",
						color         : "#fff",
						margin : "1px 0",
					},
				},
			},

			"& .socialMediaContainer" : {
				display        : "flex",
				flexDirection  : "row",
				justifyContent : "center",
				marginBottom   : "20px",
			},
		},

		"& .right" : {
			position        : "absolute",
			top             : 0,
			left            : 240,
			bottom          : 0,
			right           : 0,
			backgroundColor : theme.palette.common.white,

			"& iframe" : {
				width  : "100%",
				height : "100%",
			},
		},

		"& .authorLink" : {
			position : "absolute",
			right    : 0,
			bottom   : 0,
			zIndex   : theme.zIndex.drawer,
			
			border          : "none",
			margin          : theme.spacing(1),
			backgroundColor : "transparent",
			cursor          : "pointer",
			outline         : "none",
			fontStyle       : "italic",
			userSelect      : "none",

			"& span" : {
				color : theme.palette.primary.main,
			},
		},
	},
}));

export default useStyles;
