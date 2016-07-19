if ( typeof window === 'undefined' ) {
  require('../../app/arrays');
  var expect = require('chai').expect;
}

describe('arrays', function() {

  it('you should be able to sum the items of an array', function() {
    expect(arraysAnswers.sum([ 1, 2, 3, 4 ])).to.eql(10);
  });

  it('you should be able to remove all odd numbers from the array', function() {
    expect(arraysAnswers.evens([ 1, 2, 3, 4 ])).to.eql([2, 4]);
    expect(arraysAnswers.evens([ 1, 2, 3, 4, 5, 6, 7, 8 ])).to.eql([ 2, 4, 6, 8 ]);
    expect(arraysAnswers.evens([ 1, 3, 5 ])).to.eql(null);
  });

  it('you should be able to get an array of names from an object', function() {
    var headCount = [
      { name: 'UK', score: 0 },
      { name: 'Germany', score: 1 },
      { name: 'Italy', score: 1 },
      { name: 'Hungary', score: 1 },
      { name: 'Poland', score: 1 },
      { name: 'Lithuania', score: 2 },
      { name: 'China', score: 1 }
    ];

    var expected = ['UK', 'Germany', 'Italy', 'Hungary', 'Poland', 'Lithuania', 'China'];

    expect(arraysAnswers.names(headCount)).to.eql(expected);
  });

});
