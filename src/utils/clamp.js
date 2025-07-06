export default function clamp(min, max, value) {
	return Math.max(Math.min(max, value), min);
}
