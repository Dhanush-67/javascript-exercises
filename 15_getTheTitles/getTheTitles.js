const getTheTitles = function (books) {
  //   let arr = [];
  //   for (let item of books) {
  //     arr.push(item.title);
  //   }
  //   return arr;

  const arr = books.map((item) => item.title);
  return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
