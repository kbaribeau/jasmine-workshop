describe("The closest to zero function", function() {
  var closestToZeroFinder;
	var rootId = 'closestToZero';

  beforeEach(function() {
     closestToZeroFinder = new ClosestToZeroFinder();
  });
	
  beforeEach(function(){
    $('body').append(
      '<div id="'+rootId+'">' +
        '<ul id="test1">' +
					'<li>0</li>' +
        '</ul>' + 
			'</div>'
    );
  });

  afterEach(function() {
    $('#'+rootId).remove();
  });

  it("should style the 0 element when it is present", function() {
		closestToZeroFinder.addStylesToULs();

    expect($('#test1 li').hasClass("closest")).toBeTruthy();
  });

});
