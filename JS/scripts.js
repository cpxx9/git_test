(function() {
  const people = {
    people: ['Will', 'Laura'],
    init: function() {
      this.cacheDom();
      this.render();
    },
    cacheDom: function() {
      this.el = document.querySelector('#peopleModule');
      this.button = this.el.querySelector('button');
      this.input = this.el.querySelector('input');
      this.ul = this.el.querySelector('ul');
      this.template = this.el.querySelector('#people-template').toString();
    },
    render: function() {
      const data = {
        people: this.people,
      };
      this.ul.html(Mustache.render(this.template, data));
    },
  };

  people.init();
})()