describe("initializing the game", function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '/__spec__/fixtures';
    loadFixtures("memogame.html");
    randomLedNumber = 48;
    memo = new MemoGame('.js_memogame', randomLedNumber);
  });

  it("led1 should be in DOM", function(){
    expect($('#led1')[0]).toBeInDOM();
  });

  it("should fill the pairMatrix",function(){
    memo.buildMatrix();
    expect(memo.pairMatrix.length).toEqual(randomLedNumber);
    for(var i = 0; i<memo.pairMatrix.length; i++){
      var destination = memo.pairMatrix[i];
      expect(memo.pairMatrix[destination]).toEqual(i);
    }
  });

  it("should add a joker between the matrix values",function(){
    var matrixLength = memo.pairMatrix.length;
    memo.pairMatrix[matrixLength-1] = null;
    memo.addJoker();
    expect(memo.pairMatrix.length).toEqual(matrixLength+1);
    expect(memo.pairMatrix.indexOf('joker')).not.toEqual(-1);
  });

  it ("should invoke the saluta method on click over an element.", function() {
    memo.init();
    var elementToClick = $('#led1')[0];
    var spy = spyOn(memo, 'saluta');
    elementToClick.click();
    expect(spy).toHaveBeenCalled();
  });
});