const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(user){
    const userJson = JSON.stringify(user)
    localStorage.setItem("user", userJson)
}

saveUser(user)