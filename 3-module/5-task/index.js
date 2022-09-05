function getMinMax(str) {
  arrNumbers = [];
  arrStr = str.split(" ");
  arrStr.map((item, index) => {
    if (isNaN(parseInt(arrStr[index])) !== true) {
      arrNumbers.push(arrStr[index]);
    }
  });

  let min = Math.min.apply(null, arrNumbers);
  let max = Math.max.apply(null, arrNumbers);

  return { min, max };
}

console.log(getMinMax("hi 33 223 hi"));
