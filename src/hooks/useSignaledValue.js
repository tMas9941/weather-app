import { useEffect, useState } from "react";

export default function useSignaledValue(signal, stateName) {
	const [value, setValue] = useState(signal.value);

	useEffect(() => {
		signal.connectFunction(stateName, (newStatus) => setValue(newStatus));
	}, []);

	return value;
}
