// var Frame = require('../src/frame');

describe('Frame', function () {

  var frame;

  beforeEach(function() {
    frame = new Frame()
  });

  it('saves the score of roll1 in a hash in an array', function() {
    frame.roll1(1, 5)
    expect(frame.basicScore[0]).toEqual({'roll1': 5, 'roll2': null, 'special': null, 'total': null})
  });

  it('saves the score of roll2 in a hash in an array', function() {
    frame.roll2(1, 5)
    expect(frame.basicScore[0]).toEqual({'roll1': null, 'roll2': 5, 'special': null, 'total': null})
  });



});
