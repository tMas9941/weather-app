export function setCookieObj(name, value, exdays = 365) {
	const date = new Date();
	date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = "expires=" + date.toUTCString();
	document.cookie = name + "=" + JSON.stringify(value) + ";" + expires + ";path=/";
}

export function getCookieObj(cookieName) {
	let cookies = document.cookie.split(";");
	for (let cookie of cookies) {
		if (
			cookie.trimStart().startsWith(cookieName)
			// .split(cname + "=")[1]
		) {
			return JSON.parse(cookie.trim().replace(cookieName + "=", ""));
		}
	}
	return "";
}
