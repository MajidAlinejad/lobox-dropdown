import { FC } from "react";
import Option from "./components/OptionItem";
import { createUseStyles, useTheme, ThemeProvider } from "react-jss";
import SelectProvider from "./context/SelectContext";
import Selector from "./components/Selector";
import OptionContainer from "./components/OptionContainer";

interface IDropdownType extends WithChildren {}

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

const Dropdown: FC<IDropdownType> = ({ children }) => {
	const classes = useStyles();
	return (
		<>
			<ThemeProvider theme={theme}>
				<SelectProvider>
					<>{children}</>
				</SelectProvider>
			</ThemeProvider>
		</>
	);
};

export default Dropdown;
