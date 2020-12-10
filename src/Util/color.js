/**
 * Transform rgb input to a hexadecimal value
 * 
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 * @param  {...any} args rgba values
 */
const color = (...args) => {
	const addZeroIfNeeded = str => (str + "").length === 1 ? "0" + str : str;

	// Transform each section to base 16
	const hexValue = args.reduce((acc, val) => {
		return acc + addZeroIfNeeded(val.toString(16));
	}, "");

	return parseInt(hexValue, 16);
};

export default color;
