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
  grade(studentObj,subjectStr) {
    console.log(
      `${studentObj.name} receives a perfect score on ${subjectStr}`
    );
  }
}

//creating Student class
class Student extends Person {
    constructor (studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects () {
        console.log(this.favSubjects);
    }
    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
}

//creating PM class
class ProjectManager extends Instructor {
    constructor (pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp (channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode (studentObj,subject) {
        // may have to do this.subject 
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`)
    }
}

