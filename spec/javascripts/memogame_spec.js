describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("Button Click Event Tests", function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '/__spec__/fixtures';
    loadFixtures("memogame.html");
    memo = new MemoGame('.js_memogame');
    memo.init();
  });

  it("should be in DOM", function(){
    expect($('#led1')[0]).toBeInDOM();
  });

  it("should create the pairMatrix",function(){
    expect(memo.pairMatrix.length).toEqual(48);
    for(var i = 0; i<memo.pairMatrix.length; i++){
      var destination = memo.pairMatrix[i];
      expect(memo.pairMatrix[destination]).toEqual(i);
    }
  });

  it ("should invoke the saluta method on click over an element.", function() {
    var elementToClick = $('#led1')[0];
    var spy = spyOn(memo, 'saluta');
    elementToClick.click();
    expect(spy).toHaveBeenCalled();
  });
});