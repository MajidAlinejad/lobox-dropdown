import { FC } from "react";

interface IOptionType {
	label: string;
	value: string;
}

const Option: FC<IOptionType> = ({ label, value }) => {
	return <option value={value}>{label}</option>;
};

export default Option;
