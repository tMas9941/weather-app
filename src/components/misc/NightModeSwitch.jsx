import { nightMode, changeNightMode } from "../../global/citiesData";

export default function NightModeSwitch({ scale = 0.8 }) {
	return (
		<button
			style={{ scale: scale }}
			onClick={() => changeNightMode(!nightMode.value)}
			className={`w-20 h-10 [&,&_*]:rounded-full p-1 cursor-pointer outline-3 hover:brightness-120 ${
				nightMode.value ? "bg-sky-900 outline-white" : "bg-sky-400 outline-sky-900 "
			} [&,&_*]:transition-[color, transform] [&_*]:duration-200 `}
		>
			<div className={` w-8 h-8 ${!nightMode.value ? "bg-amber-200 ms-10" : "bg-white"}`}>
				<div className={` w-7 h-7 opacity-100 mb-4 ms-[12px] ${!nightMode.value ? "opacity-100" : "bg-sky-900"}`}></div>
			</div>
		</button>
	);
}
