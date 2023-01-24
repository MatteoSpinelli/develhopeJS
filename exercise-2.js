const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const id = person.id;
const {firstName, lastName, age} = person

console.log(id, {firstName, lastName, age});