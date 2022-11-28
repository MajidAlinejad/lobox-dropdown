export const SelectReducer = (state: SelectState, action: SelectAction): SelectState => {
	switch (action.type) {
		case "SET_THEME":
			return {
				...state,
				theme: action.value,
			};
		case "SET_IS_OPEN":
			return {
				...state,
				isOpen: action.value,
			};
		case "SET_SELECTED":
			return {
				...state,
				selected: action.value,
			};

		default:
			return state;
	}
};
