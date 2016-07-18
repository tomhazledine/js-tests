if ( typeof window === 'undefined' ) {
  require('../../app/strings');
  var expect = require('chai').expect;
}

describe('strings', function() {
  it('you should be able to find all positions of a character in a string', function() {
    expect(stringsAnswers.charPositions('a', 'aaaabbbb')).to.eql([0, 1, 2, 3]);
    expect(stringsAnswers.charPositions('a', 'abaabbab')).to.eql([0, 2, 3, 6]);
    expect(stringsAnswers.charPositions('x', 'aaaabbbb')).to.eql(null);
  });

  it('you should be able to remove all digits in a string', function() {
    expect(stringsAnswers.replaceDigits('abc123')).to.eql('abc');
    expect(stringsAnswers.replaceDigits('a1b2c3')).to.eql('abc');
    expect(stringsAnswers.replaceDigits('123456')).to.eql('');
  });

  it('you should be able to return a word at a certain point', function() {
    var string = 'The goose is asleep in the lane';
    expect(stringsAnswers.extract(string, 1)).to.eql('goose');
    expect(stringsAnswers.extract(string, 3)).to.eql('asleep');
    expect(stringsAnswers.extract(string, -2)).to.eql('the');
    expect(stringsAnswers.extract(string, 7)).to.eql('');
  });
});
