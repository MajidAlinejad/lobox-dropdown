import { FC } from "react";

const Option: FC<IOptionType> = ({ label, value }) => {
	return <option value={value}>{label}</option>;
};

Option.displayName = "Option";

export default Option;
