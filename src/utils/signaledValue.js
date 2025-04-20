export default class SignaledValue {
	constructor(value) {
		this.value = value;
		this.connectedFunctions = {};
	}

	connectFunction(functionName, newFunction) {
		this.connectedFunctions[functionName] = newFunction;
	}

	changeValue(newValue) {
		this.value = newValue;
		Object.values(this.connectedFunctions).forEach((func) => func(newValue));
	}
}
