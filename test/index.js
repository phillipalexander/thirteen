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
});
