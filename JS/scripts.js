// function Book(title, author, pages, hasRead) {
//   this.title = title;  
//   this.author = author;  
//   this.pages = pages;  
//   this.hasRead = hasRead;
//   this.info = function() {
//     return `${this.title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())} by ${this.author.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}, ${this.pages} pages, ${this.hasRead ? "has been read" : "not read yet"}`;
//   };
// }

// const theHobbit = new Book("the hobbit", "j.R.R. tolkien", 295, false);

// console.log(theHobbit.info());

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function() {
//     console.log(this.name)
//   };
// }

// Player.prototype.sayHello = function () {
//   console.log(`Hello, I'm a player`);
// };

// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');
// player1.sayHello();

// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }

// function Warrior(name, level, weapon) {
//   Hero.call(this, name, level);
//   this.weapon = weapon;
// }

// function Healer(name, level, spell) {
//   Hero.call(this, name, spell);
//   this.spell = spell;
// }

// Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
// Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Hero.prototype.greet = function () {
//   return `${this.name} says hello.`
// };

// Warrior.prototype.attack = function () {
//   return `${this.name} attacks with ${this.weapon}.`;
// };

// Healer.prototype.heal = function () {
//   return `${this.name} casts ${this.spell}.`;
// };

// let hero1 = new Warrior('Bjorn', 1, 'axe');
// let hero2 = new Healer('Kanin', 1, 'cure');

// class User {
//   constructor(email, name){
//     this.email = email;
//     this.name = name;
//     this.score = 0;
//   }
//   login() {
//     console.log(this.email, 'just logged in');
//     return this;
//   }
//   logout() {
//     console.log(this.email, 'just logged out');
//     return this;
//   }
//   updateScore(repeatAmt = 1) {
//     for(let i = 0; i < repeatAmt; i++) {
//       this.score ++;
//       console.log(this.email, 'score is now', this.score);
//     }
//     return this;
//   }
// }

// class Admin extends User {
//   deleteUser(userToDel) {
//     users = users.filter(user => {
//       return user.email != userToDel.email;
//     });
//   }
// }

// let userOne = new User('c@p.com', 'cole');
// let userTwo = new User('rock@p.com', 'rock');
// let admin = new Admin('admin@c.com', 'admin');

// let users = [userOne, userTwo, admin];

// admin.deleteUser(userOne);

// console.log(users);
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.role = 'stdUser';
}

User.prototype.login = function() {
  this.online = true;
  console.log(this.email, 'just logged in');
}

User.prototype.logout = function() {
  this.online = false;
  console.log(this.email, 'just logged out');
}

function Admin(...args) {
  User.apply(this, args);
  this.role = 'admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(userToDel) {
  users = users.filter(user => {
    return user.email != userToDel.email;
  });
};

let userOne = new User('c@p.com', 'cole');
let userTwo = new User('rock@p.com', 'rock');

let admin = new Admin('admin@c.com', 'admin');

let users = [userOne, userTwo, admin];

console.table(users);