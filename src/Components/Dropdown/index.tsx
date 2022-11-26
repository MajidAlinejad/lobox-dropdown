import { FC } from "react";
import Option from "./components/OptionItem";
import { createUseStyles, useTheme, ThemeProvider } from "react-jss";

interface IDropdownType {}

const theme = {
	colorPrimary: "green",
};

const useStyles = createUseStyles({
	myButton: {
		color: theme.colorPrimary,
		margin: {
			top: 5,
			right: 0,
			bottom: 0,
			left: "1rem",
		},
		"& span": {
			fontWeight: "bold",
		},
	},
	myLabel: {
		fontStyle: "italic",
	},
});

const Dropdown: FC<IDropdownType> = ({}) => {
	const classes = useStyles();
	return (
		<>
			<ThemeProvider theme={theme}>
				<select className={classes.myButton}>
					<Option label="new" value="oi" />
					<Option label="new" value="oi" />
					<Option label="new" value="oi" />
					<Option label="new" value="oi" />
					<Option label="new" value="oi" />
				</select>
			</ThemeProvider>
		</>
	);
};

export default Dropdown;
