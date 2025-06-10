import { useState } from "react";

export default function useSignaledValue(signal, stateName) {
	const [value, setValue] = useState(() => connectSignal(signal));

	function connectSignal(signal) {
		signal.connectFunction(stateName, (newStatus) => setValue(newStatus));
		return signal.value;
	}
	return value;
}
