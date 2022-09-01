function showSalary(users, age) {
  let str = "";
  arr = [];
  // ваш код...
  users.map((item, index) => {
    if (users[index].age <= age) arr.push(users[index]);
  });
  arr.map((item, index) => {
    if (index == 0) {
      str = str + arr[index].name + ", " + arr[index].balance + "\n";
    } else if (index == arr.length - 1) {
      str = str + arr[index].name + ", " + arr[index].balance;
    } else {
      str = str + arr[index].name + ", " + arr[index].balance + "\n";
    }
  });

  return str;
}
