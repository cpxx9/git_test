const User = function (name) {
  this.name = name;
  this.discordName = `@${name}`;
}

//above can be re-written as a factory
function createUser (name) {
  const discordName = `@${name}`;
  return {name, discordName};
}

//does not require new keyword

