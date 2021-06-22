import { useState } from "react";

// User Input Hook
export const useInput = (initialValue: any) => {
	const [value, setValue] = useState(initialValue);

	return {
		value,
		setValue,
		reset: () => setValue(""),
		bind: {
			value,
			onChange: (event: any) => {
				setValue(event.target.value);
			},
		},
	};
};
