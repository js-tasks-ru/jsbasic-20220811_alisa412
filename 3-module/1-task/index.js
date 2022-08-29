function namify(users) {
  // ваш код...
  /*
  for (let i = 0; i < users.length; i++) {
    users[i] = users[i].name;
  }
  return users;
  */
  return users.map((item) => item.name);
}
