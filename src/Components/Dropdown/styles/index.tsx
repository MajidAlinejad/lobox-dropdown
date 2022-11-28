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
		height: "32px",
		borderRadius: "8px",
	},
	optionWrapper: {
		width: "100%",
		background: "white",
		"& ul": {
			margin: 0,
			padding: 0,
			listStyleType: "none",

			"& li": {},
		},
	},
});

export default useStyles;
