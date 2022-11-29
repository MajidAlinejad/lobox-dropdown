import useSelectState from "Components/Dropdown/hooks/useSelectState";
import useStyles from "Components/Dropdown/styles";
import { ReactComponent as CheckIcon } from "Components/Dropdown/icons/check.svg";
import { FC } from "react";

const Option: FC<IOptionType> = ({ label, value }) => {
	const { selected } = useSelectState();
	const classes = useStyles();

	return (
		<button role={"option"} value={value} className={classes.optionItem}>
			<span>{label}</span>
			<span>{selected?.value === value ? <CheckIcon width={15} height={15} /> : <></>}</span>
		</button>
	);
};

Option.displayName = "Option";

export default Option;
