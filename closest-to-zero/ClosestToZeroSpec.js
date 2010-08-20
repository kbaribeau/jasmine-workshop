describe("The closest to zero function", function() {
  var closestToZeroFinder;

  beforeEach(function() {
     closestToZeroFinder = new ClosestToZeroFinder();
  });

  it("should return null when we pass it an empty list", function() {
		var result = closestToZeroFinder.find([]);

    expect(result).toBeNull();
  });

});
