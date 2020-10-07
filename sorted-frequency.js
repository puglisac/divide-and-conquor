function sortedFrequency(arr, num) {
	let start = findFirstNum(arr, num);
	let end = findFirstNum(arr, num + 1);
	if (start == -1 && end == -1) {
		return -1;
	}
	if (start == -1) {
		start = 0;
	}
	if (end == -1) {
		end = arr.length;
	}
	return end - start;
}

function findFirstNum(arr, num, low = 0, high = arr.length - 1) {
	if (high >= low) {
		let mid = low + Math.floor((high - low) / 2);
		if (arr[mid - 1] === num - 1 && arr[mid] === num) {
			return mid;
		} else if (arr[mid] < num) {
			return findFirstNum(arr, num, mid + 1, high);
		}
		return findFirstNum(arr, num, low, mid - 1);
	}
	return -1;
}

module.exports = sortedFrequency;
