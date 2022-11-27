import { useContext } from "react";
import { SelectContext } from "../context/SelectContext";

const useSelectState = () => {
	const context = useContext(SelectContext);
	if (context === undefined) {
		throw new Error("useSelectState was used outside of its Provider");
	}
	return context.state;
};

export default useSelectState;
