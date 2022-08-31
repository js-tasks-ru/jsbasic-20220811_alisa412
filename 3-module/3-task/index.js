function camelize(str) {
  // ваш код..

  let bla = str.split("-").map((item, index) => {
    if (index === 0) {
      //?
      return item;
    }
    return item[0].toUpperCase() + item.slice(1);
  });
  return (bla = bla.join(""));

  if (!str) {
    return str;
  }
}

/*
console.log(camelize("-webkit-transition"));
*/
