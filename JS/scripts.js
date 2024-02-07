const myModule = {
  name: 'Will',
  age: 34,
  sayName: function() {
    alert(this.name);
  },
  setName: function(newName) {
    this.name = newName;
  },
};

myModule.setName('cole');
myModule.sayName();