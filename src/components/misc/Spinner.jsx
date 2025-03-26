export default function Spinner({ size = 30 }) {
	return (
		<div
			style={{ width: size, height: size }}
			className={`inline-block text-accent animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]`}
			role="status"
		/>
	);
}
