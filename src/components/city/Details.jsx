import React, { useState } from "react";

export default function Details({ children }) {
	const [details, setDetails] = useState();
	console.log("details data  ", data);
	return <div> {children}</div>;
}
