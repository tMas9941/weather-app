import { useEffect, useState } from "react";

export default function useToggleCard(city, searchParams) {
	const [selected, setSelected] = useState(city === searchParams ? true : false);

	useEffect(
		(city, selected) => {
			if ((city === searchParams ? true : false) !== selected) setSelected(city === searchParams);
		},
		[searchParams]
	);

	return selected;
}
