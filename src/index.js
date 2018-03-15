module.exports = function longestConsecutiveLength(array) {
  // your solution here

  if (array.length == 0) {
  	return 0;
  }

  let set = new Set(array);
  let max = 1;

  for (let i = 0; i < array.length; i++) {
  	let right = array[i] + 1;
  	let count = 1;

	if(!set.has(array[i] - 1)) {
	  while (set.has(right)) {
	  	count++;
	  	right++;
	  }
	  max = Math.max(count, max);
	}
  }

  return max;
}