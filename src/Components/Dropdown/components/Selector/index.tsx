import useSelectDispatch from "Components/Dropdown/hooks/useSelectDispatch";
import useStyles from "Components/Dropdown/styles";
import { FC, useEffect, useRef } from "react";
import useSelectState from "./../../hooks/useSelectState";
import { ReactComponent as ArrowIcon } from "Components/Dropdown/icons/arrow.svg";

interface ISelectorType {
	placeholder: string;
}

const Selector: FC<ISelectorType> = ({ placeholder }) => {
	const dispatch = useSelectDispatch();
	const selectorRef = useRef<HTMLButtonElement>(null);
	const { isOpen, selected } = useSelectState();

	const classes = useStyles();

	const toggleDropDown = (value: boolean = !isOpen) => {
		dispatch({ type: "SET_IS_OPEN", value });
	};
	useEffect(() => {
		selectorRef.current?.focus();
	}, []);

	useEffect(() => {
		!isOpen && selectorRef.current?.focus();
		return () => {};
	}, [isOpen]);

	return (
		<>
			<button className={classes.selector} ref={selectorRef} onClick={() => toggleDropDown()} onKeyDown={(e) => e.key === "ArrowDown" && toggleDropDown(true)} tabIndex={1}>
				{selected ? selected.label : placeholder}
				<ArrowIcon width={15} height={15} />
			</button>
		</>
	);
};

export default Selector;
