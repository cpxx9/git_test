class Person {
  static species = 'Homo Sapiens';

  static speciesSentance() {
    return `Humans are classifies as ${this.species}.`
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  set fullName(name) {
    name = name.split(' ');
    this.setFirstName(name[0]);
    this.setLastName(name[1]);
  }
}

class Worker extends Person {
  constructor(firstName, lastName, job) {
    super(firstName, lastName);
    this.job = job;
    this.hasJob = true;
  }

  setJob(job) {
    this.job = job;
  }

  get biography() {
    const bio = `${this.fullName()} is a ${this.job}.`.toUpperCase();
    return bio;
  }
}

const p1 = new Person("Cole", "Drizzle");
const w1 = new Worker("Dgad", "Frizzle", "ptute");