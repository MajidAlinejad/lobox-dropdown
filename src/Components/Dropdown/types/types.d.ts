type SelectedValue = { value: string; label: string };
interface SelectState {
	isOpen: boolean;
	theme: any;
	selected: SelectedValue | undefined;
}
type SelectAction = { type: "SET_THEME"; value: any } | { type: "SET_IS_OPEN"; value: boolean } | { type: "SET_SELECTED"; value?: SelectedValue };

interface WithChildren {
	children: JSX.Element | JSX.Element[];
}

interface IOptionType {
	label: string;
	value: string;
}

interface IDropdownType extends React.HTMLAttributes<HTMLDivElement>, WithChildren {
	onSelect: (value: string, label: string) => void;
}
