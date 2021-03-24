class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getPerson() {
        return personInfo;

    }
}
let personInfo = new Person('Name: ${name}', 'email: ${email}', 'age: ${age}');

function getPerson() {
    return personInfo;


}

getPerson();
console.log(getPerson('Name: ${name}'));
console.log(getPerson('email: ${email}'));
console.log(getPerson('age: ${age}'));
module.exports = Person;