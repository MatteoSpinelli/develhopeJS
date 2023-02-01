const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const {firstName, lastName, ...personInfo} = person
const json = JSON.stringify(personInfo);

console.log(json); // Should return: { id: 1, age: 25 }