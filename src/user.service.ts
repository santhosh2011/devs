export function getUserByName(users, firstname, lastname): any {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.firstname == firstname && user.lastname == lastname) {
      return user;
    }
  }

  return 'User not found';
}
