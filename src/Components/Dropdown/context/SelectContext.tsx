import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

interface ISelectContextType<T> {}

export const SelectContext = createContext<ISelectContextType<unknown>>({});

interface ISelectProviderType {
	children: JSX.Element | JSX.Element[];
	defaultValue: string;
}

const SelectProvider: FC<ISelectProviderType> = ({ children, defaultValue }) => {
	return <SelectContext.Provider value={{}}>{children}</SelectContext.Provider>;
};
export default SelectProvider;
