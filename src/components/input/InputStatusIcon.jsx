import React from "react";
import Spinner from "../misc/Spinner";

const SIZE = 40;

export default function InputStatusIcon({ status }) {
	switch (status) {
		case "cityAddedAlready":
		case "cityNotFound":
			return (
				<svg
					fill="#f27476"
					width={SIZE}
					height={SIZE}
					strokeWidth="1.5"
					viewBox="0 0 32 32"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>cancel</title>
					<path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
				</svg>
			);
		case "cityFound":
			return (
				<svg fill="#30db63" width={SIZE} height={SIZE} viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg">
					<path d="M4.63 15.638a1.028 1.028 0 0 1-.79-.37L.36 11.09a1.03 1.03 0 1 1 1.58-1.316l2.535 3.043L9.958 3.32a1.029 1.029 0 0 1 1.783 1.03L5.52 15.122a1.03 1.03 0 0 1-.803.511.89.89 0 0 1-.088.004z" />
				</svg>
			);
		case "loading":
			return (
				<div>
					<Spinner size={SIZE * 0.7} />
				</div>
			);
		default:
			return (
				<svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
						stroke="#cccccc"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
	}
}
