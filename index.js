var findLength = function (s) {
  let curr = 0;
  let max = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    if (s[right] === "0") curr++;
    while (curr > 1) {
      if (s[left] === "0") {
        curr -= 1;
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

console.log(findLength("1101100111"));
