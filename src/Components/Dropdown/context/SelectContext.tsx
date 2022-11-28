import { createContext, FC, useReducer, Dispatch } from "react";
import { SelectReducer } from "./SelectReducer";

const initialState: SelectState = {
	isOpen: false,
	theme: undefined,
	selected: undefined,
};
interface ISelectContextType {
	state: SelectState;
	dispatch: Dispatch<SelectAction>;
}

export const SelectContext = createContext<ISelectContextType>({
	state: initialState,
	dispatch: (initialState) => initialState,
});

interface ISelectProviderType {
	children: JSX.Element | JSX.Element[];
}

const SelectProvider: FC<ISelectProviderType> = ({ children }) => {
	const [state, dispatch] = useReducer(SelectReducer, initialState);
	return <SelectContext.Provider value={{ state, dispatch }}>{children}</SelectContext.Provider>;
};
export default SelectProvider;
