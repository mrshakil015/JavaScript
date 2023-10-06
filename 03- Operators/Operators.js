// Creating an object using object literal notation
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    isStudent: false,
    hobbies: ["Reading", "Gardening", "Swimming"],
    address: {
        street: "123 Main Street",
        city: "Anytown",
        state: "CA",
        zipCode: "12345"
    },
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
};

// Accessing object properties
console.log(person.firstName); // "John"
console.log(person.age); // 30
console.log(person.hobbies[0]); // "Reading"
console.log(person.address.city); // "Anytown"

// Modifying object properties
person.age = 32;
person.hobbies.push("Painting");
person.address.zipCode = "54321";

// Adding a new property
person.gender = "Male";

// Calling a method
person.sayHello(); // "Hello, my name is John Doe."

// Deleting a property
delete person.isStudent;

// Iterating through object properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Checking if an object has a property
if ("email" in person) {
    console.log("Person has an email property.");
} else {
    console.log("Person does not have an email property.");
}
