if ( typeof window === 'undefined' ) {
  require('../../app/leapYear');
  var expect = require('chai').expect;
}

describe('flow control', function() {
  it('you should be able to conditionally branch your code', function() {
    expect(leapYearAnswers.isLeapYear(2001)).to.eql(false);
    expect(leapYearAnswers.isLeapYear(1996)).to.eql(true);
    expect(leapYearAnswers.isLeapYear(1900)).to.eql(false);
    expect(leapYearAnswers.isLeapYear(2000)).to.eql(true);
    expect(leapYearAnswers.isLeapYear(2016)).to.eql(true);
    expect(leapYearAnswers.isLeapYear(2015)).to.eql(false);
  });
});
