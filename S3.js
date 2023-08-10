function sortByAge(array) {
    array.sort(function(a, b) {
        return a.age - b.age;
    });
    return array;
}
let people = [
    {name: "Ali", age: 25},
    {name: "Sara", age: 20},
    {name: "Reza", age: 30},
    {name: "Maryam", age: 22}
];
let sorted = sortByAge(people);
console.log(sorted);