export function getUserByName(users,name):any{

  for(let i=0;i<users.length;i++){
    let user = users[i];
    if (user.Name == name){
      return user;
    }
  }

  return "User not found";
}