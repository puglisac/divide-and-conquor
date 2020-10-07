function findRotationCount(arr) {
	if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
	var start = 0;
	var end = arr.length - 1;
	while (start <= end) {
		var mid = Math.floor((start + end) / 2);
		if (arr[mid] > arr[mid + 1]) return mid + 1;
		else if (arr[start] <= arr[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
}

module.exports = findRotationCount;
