// CODE here for your Lambda Classes

// creating Person class
class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

// creating Instructor class
class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subjectStr) {
    console.log(`Today we are learning about ${subjectStr}`);
  }
  grade(studentObj, subjectStr) {
    console.log(`${studentObj.name} receives a perfect score on ${subjectStr}`);
  }
  // stretch creating addOrSubtract method
  addOrSubtract() {
    // creating coin, assigning it to random # between 0 - 100
    let coin = Math.floor(Math.random() * 101);
    // if coin > 50, subtract coin from nicholas's grade of 80
    if (coin > 50) {
      nicholas.grade -= coin;
      // else add coin from nicholas's grade of 80
    } else {
      nicholas.grade += coin;
    }
  }
}

//creating Student class
class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    // stretch "grade" prop
    this.grade = studentAttributes.grade;
  }
  listsSubjects() {
    console.log(this.favSubjects);
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  // stretch "graduate" method
  graduate() {
    if (this.grade > 70) {
      console.log(`${this.name} is ready to graduate!`);
    } else {
      console.log(`Retake the test!`);
    }
  }
}

// creating PM class

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(studentObj, subject) {
    // may have to do this.subject
    console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`);
  }
}

//test Person
// 1. create marcus object with Person class
const marcus = new Person({
  name: "Marcus",
  age: 25,
  location: "Sydney"
});

// logging marcus object
console.log(marcus);

// 2. create vlad object with Person class
const vlad = new Person({
  name: "Vlad",
  age: 23,
  location: "USA"
});

// logging vlad object
console.log(vlad);

// 3. create samantha object with Person class
const samantha = new Person({
  name: "Samantha",
  age: 25,
  location: "USA"
});

// logging samantha object
console.log(samantha);

// test instructor
// 1. creating fred object with Instructor class (inherits Person properties)
const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: "Don't forget the homies"
});

// logs fred object
console.log(fred);

// testing demo prototype method
fred.demo("Web Development"); // logs correctly

// testing grade prototype method
fred.grade({ name: "Marcus" }, "Web Development");

// test Student
// 1. creating nicholas object with Student class (inherits Person properties)
const nicholas = new Student({
  name: "Nicholas",
  age: 25,
  location: "USA",
  previousBackground: "Spy",
  className: "Web20",
  favSubjects: ["Web Development", "JavaScript", "Looking cool"],
  // stretch - added grade prop, assigned to value of 80
  grade: 80
});

// logging nicholas object
console.log(nicholas);

// testing listsSubject method
nicholas.listsSubjects();

// testing PRAssignment method
nicholas.PRAssignment("Preprocessing II");

// test PM
// 1. creating jamie object with Project Manager class (inherits Instructor properties that inherited Person properties)
const jamie = new ProjectManager({
  name: "Jamie",
  age: 30,
  location: "USA",
  specialty: "CSS",
  favLanguage: "JavaScript",
  catchPhrase: "Hey guys!",
  gradClassName: "Web15",
  favInstructor: "Josh"
});

// logging jamie object
console.log(jamie);

// testing standUp method
jamie.standUp("web20_jamie");

// testing debugsCode method
jamie.debugsCode({ name: "Marcus" }, "Web Development");

// testing addOrSubtract method via jamie PM object
jamie.addOrSubtract();

// testing graduate method via nicholas student
nicholas.graduate();
