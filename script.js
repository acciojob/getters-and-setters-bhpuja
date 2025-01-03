//complete this code
// Define the Person class
class Person {
  constructor(name, age) {
    this._name = name; // Private-like convention
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    if (typeof age === 'number' && age > 0) {
      this._age = age;
    } else {
      console.error("Please provide a valid age.");
    }
  }

  // Getter for age (optional)
  get age() {
    return this._age;
  }
}

// Define the Student subclass
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Define the Teacher subclass
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
