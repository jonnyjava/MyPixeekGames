describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("Button Click Event Tests", function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '/__spec__/fixtures';
    loadFixtures("memogame.html");
  });

  it("should be in DOM", function(){
    expect($('#led1')[0]).toBeInDOM();
  });

  it ("should invoke the js_memogame click event.", function() {
    var spyEvent = spyOnEvent('.js_memogame', 'click');
    $('.js_memogame').click();
    expect('click').toHaveBeenTriggeredOn('.js_memogame');
    expect(spyEvent).toHaveBeenTriggered();
  });

});