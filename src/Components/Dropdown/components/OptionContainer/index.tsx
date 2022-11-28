import useSelectDispatch from "Components/Dropdown/hooks/useSelectDispatch";
import useSelectState from "Components/Dropdown/hooks/useSelectState";
import useStyles from "Components/Dropdown/styles";
import { FC, useRef, useEffect, Children, useState } from "react";

interface IOptionContainerType extends WithChildren {}
let timeOutSession: NodeJS.Timeout;
type Allowed_KEYS = "ArrowDown" | "ArrowUp" | "Enter" | "Escape";

function isKeyAllowed(key: Allowed_KEYS | string): key is Allowed_KEYS {
	const Allowed_keys = ["ArrowDown", "ArrowUp", "Enter", "Escape"];
	return Allowed_keys.includes(key);
}

const OptionContainer: FC<IOptionContainerType> = ({ children }) => {
	const { isOpen } = useSelectState();
	const dispatch = useSelectDispatch();
	const [navigateIndex, setNavigateIndex] = useState(0);
	const containerRef = useRef<HTMLUListElement>(null);
	const classes = useStyles();

	useEffect(() => {
		isOpen && containerRef.current?.focus();
		return () => {};
	}, [isOpen]);

	const setValue = () => {
		const childs = Children.map<IOptionType | null, React.ReactComponentElement<FC<IOptionType>>>(children, (child) => (child.type.displayName === "Option" ? child.props : null));
		const items = childs.filter((item) => item !== null);
		dispatch({ type: "SET_SELECTED", value: items[navigateIndex] });
		timeOutSession = setTimeout(() => {
			closeList();
			clearTimeout(timeOutSession);
		}, 50);
	};
	const closeList = () => {
		dispatch({ type: "SET_IS_OPEN", value: false });
	};
	const navigateAndSetValue = (key: string) => {
		if (isKeyAllowed(key)) {
			const childCount = Array.isArray(children) ? children.length - 1 : !!children;
			const keyOptions = {
				ArrowDown: () => setNavigateIndex((prev) => (prev === childCount ? childCount : prev + 1)),
				ArrowUp: () => setNavigateIndex((prev) => (prev === 0 ? prev : prev - 1)),
				Enter: setValue,
				Escape: closeList,
			};
			keyOptions[key]();
		}
	};

	return (
		<div hidden={!isOpen} className={classes.optionWrapper}>
			<ul ref={containerRef} tabIndex={1} onKeyDown={(e) => navigateAndSetValue(e.key)}>
				{Children.map<any, React.ReactComponentElement<FC<IOptionType>>>(children, (child, inx) => (
					<li style={{ backgroundColor: navigateIndex === inx ? "red" : "" }}>{child.type.displayName === "Option" ? child : <></>}</li>
				))}
			</ul>
		</div>
	);
};

export default OptionContainer;
