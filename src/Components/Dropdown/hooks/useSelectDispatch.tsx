import { useContext } from "react";
import { SelectContext } from "../context/SelectContext";

const useSelectDispatch = () => {
	const context = useContext(SelectContext);
	if (context === undefined) {
		throw new Error("useSelectDispatch was used outside of its Provider");
	}
	return context.dispatch;
};

export default useSelectDispatch;
