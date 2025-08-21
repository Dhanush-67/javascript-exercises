const palindromes = function (str) {
  let copy = str.replace(/[^\w]|_/g, "").toLowerCase();
  let reverse_str = copy.split("").reverse().join("");
  return reverse_str == copy;
};

// Do not edit below this line
module.exports = palindromes;
