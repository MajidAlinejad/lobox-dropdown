import { FC, useEffect } from "react";
import { ThemeProvider } from "react-jss";
import SelectProvider from "./context/SelectContext";
import useSelectState from "./hooks/useSelectState";
import useStyles, { theme } from "./styles";

interface IDropdownType extends WithChildren {
	onSelect: (value: string, label: string) => void;
}

const Dropdown: FC<IDropdownType> = ({ children, onSelect }) => {
	const classes = useStyles();

	const Organization = () => {
		const { selected } = useSelectState();
		useEffect(() => {
			selected && onSelect(selected?.value, selected?.label);
		}, [selected]);

		return <>{children}</>;
	};
	return (
		<div className={classes.wrapper}>
			<ThemeProvider theme={theme}>
				<SelectProvider>
					<Organization />
				</SelectProvider>
			</ThemeProvider>
		</div>
	);
};

export default Dropdown;
