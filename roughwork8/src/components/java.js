//how to add new property address to obj1
const obj1 = {
  name: "mithun",
  age: "25",
};
//1st method
obj1.address = "aaa";
console.log(obj1);
//2nd method
let newobj = Object.assign({}, obj1, { address: "aa" });
console.log(newobj);

//How will you add 5 new persons with name and age, address to personsArryObj.
const personsArryObj = [
  {
    Name: "Mithun",
    age: "25",
  },
];

personsArryObj.push(
  (Name = "Siva"),
  (age = "25"),
  (Name = "Rama"),
  (age = "25"),
  (Name = "Krishna"),
  (age = "25"),
  (Name = "Siva"),
  (age = "25"),
  (Name = "Maruthi"),
  (age = "25")
);
console.log(personsArryObj);

//How will you remove a person
personsArryObj.splice(2, 2);
console.log(personsArryObj);

//How will you find duplicates with same name
let dup = personsArryObj.filter((ele, index) => {
  return personsArryObj.indexOf(ele) != index;
});

console.log(dup);

//How will you filter distinct persons in an persons array.
let newobject = [...new Set(personsArryObj)];
console.log(newobject);
