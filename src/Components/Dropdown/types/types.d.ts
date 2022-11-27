interface SelectState {
	isOpen: boolean;
	value: string | undefined;
	theme: any;
}
type SelectAction = { type: "SET_THEME"; value: any } | { type: "SET_IS_OPEN"; value: boolean } | { type: "SET_VALUE"; value: string };

interface WithChildren {
	children: JSX.Element | JSX.Element[];
}

interface IOptionType {
	label: string;
	value: string;
}
