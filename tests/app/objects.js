if ( typeof window === 'undefined' ) {
  require('../../app/objects');
  var expect = require('chai').expect;
}

describe('objects and context', function() {

  it('you should be able to call a function with the correct context', function() {
    function greet() {
      return 'Hi ' + this.name + '!';
    }

    var person = {
      name: 'Ben',
      job: 'Programmer'
    };

    expect(objectsAnswers.callContext(greet, person)).to.eql('Hi Ben!');
  });

  it('You should be able to create an object which inherits from another', function() {
    var mammal = {
      name: 'Dude',
      getName: function() {
        return this.name;
      }
    };


    var cat = objectsAnswers.inheritObject(mammal, 'Liono');
    expect(cat.getName()).to.eql('Liono');
    expect(cat.speak()).to.eql('Liono says "Roar!"');
  });
});
