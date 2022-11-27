import useSelectDispatch from "Components/Dropdown/hooks/useSelectDispatch";
import { FC, useEffect, useRef } from "react";
import useSelectState from "./../../hooks/useSelectState";

interface ISelectorType {
	children: string;
}

const Selector: FC<ISelectorType> = ({ children }) => {
	const dispatch = useSelectDispatch();
	const selectorRef = useRef<HTMLButtonElement>(null);
	const { isOpen, value } = useSelectState();

	const toggleDropDown = (value: boolean = !isOpen) => {
		dispatch({ type: "SET_IS_OPEN", value });
	};

	useEffect(() => {
		!isOpen && selectorRef.current?.focus();
		return () => {};
	}, [isOpen]);

	return (
		<>
			<button ref={selectorRef} onClick={() => toggleDropDown()} onKeyDown={(e) => e.key === "ArrowDown" && toggleDropDown(true)} tabIndex={1}>
				{value ? value : children}
			</button>
		</>
	);
};

export default Selector;
