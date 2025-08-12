import { useEffect, useState } from "react";

export default function useToggleCard(city, searchParams) {
	const [selected, setSelected] = useState(city === searchParams);

	useEffect(
		(city, selected) => {
			if ((city === searchParams) !== selected) setSelected(city === searchParams);
		},
		[searchParams]
	);

	return selected;
}
