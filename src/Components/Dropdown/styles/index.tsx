import { createUseStyles } from "react-jss";

export const theme = {
	colorPrimary: "green",
};

const useStyles = createUseStyles({
	wrapper: {
		display: "block",
		width: "100%",
		minWidth: "200px",
	},
	selector: {
		width: "100%",
		borderRadius: "8px",
		color: "gray",
		display: "flex",
		alignItems: "center",
		padding: "10px 8px",
		border: "2px solid #8292d0",
		background: "white",
		"&:focus": {
			boxShadow: "0px 0px 1px 3px #e0deff52",
		},
	},
	optionWrapper: {
		width: "100%",
		background: "white",
		borderRadius: "8px",
		overflow: "hidden",
		borderWidth: 0,
		position: "relative",
		marginTop: "5px",
		outlineWidth: 0,
		boxShadow: "0px 0px 2px #00000042",
		"& ul": {
			margin: 0,
			maxHeight: "200px",
			overflow: "auto",
			scrollBehavior: "initial",
			scrollSnapAlign: "center",
			scrollSnapType: "block",
			listStyleType: "none",
			display: "flex",
			flexDirection: "column",
			gap: "4px",
			padding: "4px 4px",
			"& li": {
				padding: "4px 8px",
				borderRadius: "8px",
			},

			"&:focus": {
				borderWidth: 0,
				outlineWidth: 0,
			},
		},
	},
	hover: {
		background: "#e0deff52",
	},
	optionItem: {
		display: "flex",
		width: "100%",
		padding: "4px 5px",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: "0",
		backgroundColor: "transparent",
		color: "#647ddf",
	},
});

export default useStyles;
