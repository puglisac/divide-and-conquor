function findRotatedIndex(arr, num) {
	const mid = findMiddle(arr);
	const res1 = search(arr, num, 0, mid - 1);
	const res2 = search(arr, num, mid, arr.length - 1);
	if (res1) {
		return res1;
	}
	if (res2) {
		return res2;
	}
	return -1;
}

function search(arr, num, left, right) {
	while (left <= right) {
		let mid = Math.floor((right + left) / 2);
		if (arr[mid] == num) {
			return mid;
		} else if (arr[mid] > num) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return;
}

function findMiddle(arr) {
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

module.exports = findRotatedIndex;
