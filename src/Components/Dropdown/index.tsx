import { FC, useEffect, useRef } from "react";
import { ThemeProvider } from "react-jss";
import SelectProvider from "./context/SelectContext";
import useOnClickOutside from "./hooks/usehooks-ts/useOnClickOutside";
import useSelectDispatch from "./hooks/useSelectDispatch";
import useSelectState from "./hooks/useSelectState";
import useStyles, { theme } from "./styles";

const Dropdown: FC<IDropdownType> = ({ children, onSelect, ...rest }) => {
	const classes = useStyles();

	const Organization = () => {
		const { selected } = useSelectState();
		const dispatch = useSelectDispatch();
		const ref = useRef<HTMLDivElement>(null);

		const handleClickOutside = () => {
			dispatch({ type: "SET_IS_OPEN", value: false });
		};

		useOnClickOutside(ref, handleClickOutside);

		useEffect(() => {
			selected && onSelect(selected?.value, selected?.label);
		}, [selected]);

		return (
			<div {...rest} ref={ref} className={classes.wrapper}>
				{children}
			</div>
		);
	};
	return (
		<>
			<ThemeProvider theme={theme}>
				<SelectProvider>
					<Organization />
				</SelectProvider>
			</ThemeProvider>
		</>
	);
};

export default Dropdown;
