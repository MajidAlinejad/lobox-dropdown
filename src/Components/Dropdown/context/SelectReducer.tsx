export const SelectReducer = (state: SelectState, action: SelectAction): SelectState => {
	switch (action.type) {
		case "SET_THEME":
			return {
				...state,
				theme: action.value,
			};

		default:
			return state;
	}
};
