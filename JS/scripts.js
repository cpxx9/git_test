const User = function (name) {
  this.name = name;
  this.discordName = `@${name}`;
}

//above can be re-written as a factory
function createUser (name) {
  const discordName = `@${name}`;
  return {name, discordName};        // shorthand for {name: name, discordName: discordName}
                                     // if variable name is same as property name, can use shorthand
}

//does not require new keyword

