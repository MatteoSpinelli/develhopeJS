const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon"

console.log(person1);
console.log(person2);

/* 
By modifying the property "firstName" of the object person2 you are not actually changing 
a object stored in the variable person2. You are modifyng a property of an object which is pointed by person2. Therefore we can say that the object has two variables which are pointing it: person2 and person.
By changing a property of person2, also the same property of person will be changed because they refer to the same object.
*/
