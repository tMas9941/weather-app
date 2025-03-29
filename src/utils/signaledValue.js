export default class SignaledValue {
	constructor(value) {
		this.value = value;
		this.registeredFunctions = {};
	}

	addFunction(functionName, newFunction) {
		this.registeredFunctions[functionName] = newFunction;
	}

	changeValue(newValue) {
		this.value = newValue;
		Object.values(this.registeredFunctions).forEach((func) => func(newValue));
	}
}
