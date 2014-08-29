var expect = require('chai').expect;
var thirteen = require('../index.js');

describe('thirteen', function() {
  it('should be a function', function(done) {
    expect(thirteen).to.be.a("function");
    done();
  });
  it('should return its argument multiplied by thirteen', function(done) {
    expect(thirteen(10)).to.eql(130);
    done();
  });
  it('should NOT return its argument multiplied by twelve', function(done) {
    expect(thirteen(10)).to.not.eql(120);
    done();
  });
  it('should return its arguments number-like value multiplied by thirteen', function(done) {
    var wannabeString = {};
    var wannabeValue = {};

    wannabeString.toString = function() { return '13'; };
    wannabeValue.valueOf = function() { return '13'; };

    expect(thirteen(wannabeString)).to.eql(169);
    expect(thirteen(wannabeValue)).to.eql(169);
    done();
  });
});
