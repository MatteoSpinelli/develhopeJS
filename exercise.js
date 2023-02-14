const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(user){
  localStorage.setItem("user", JSON.stringify(user))
}
function getUser(){
  return JSON.parse(localStorage.getItem("user"))
}

saveUser(user)
console.log(getUser())