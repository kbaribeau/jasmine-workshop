describe('The list readers formatter',function(){
	
	var rootId = "listReadersFormatterSpec";
	var formatter = new ListReadersFormatter();
	
	beforeEach(function(){
		$('body').append(
			'<div id="'+rootId+'">' +
				'<div id="test1">' + 
					'<tr class="foobar">' +
						'<td class="baz">' +
							'<ul class="reader_action_list">'+
								'<li class="reader-list-item-publish"><a href="publish">Publish</a></li>'+
								'<li class="reader-list-item-edit"><a href="edit">edit</a></li>' +
								'<li class="reader-list-item-copy"><a href="copy">copy</a></li>' +
								'<li class="reader-list-item-delete"><a href="delete">delete</a></li>' +
							'</ul>' +
						'</td>' + 
					'</tr>' + 
				'</div>' +
				'<div id="test2">' +
					'<tr class="foobar">' +
						'<td class="baz">' +
							'<ul class="reader_action_list">'+
								'<li class="reader-list-item-publish"><a href="publish">Publish</a></li>'+
								'<li class="reader-list-item-edit"><a href="edit">edit</a></li>' +
								'<li class="reader-list-item-copy"><a href="copy">copy</a></li>' +
								'<li class="reader-list-item-delete"><a href="delete">delete</a></li>' +
							'</ul>' + 
							'<ul class="reader_action_list">'+
								'<li class="reader-list-item-publish"><a href="publish">Publish</a></li>'+
								'<li class="reader-list-item-edit"><a href="edit">edit</a></li>' +
								'<li class="reader-list-item-copy"><a href="copy">copy</a></li>' +
								'<li class="reader-list-item-delete"><a href="delete">delete</a></li>' +
							'</ul>' +
						'</td>' + 
					'</tr>' + 
				'</div>' +
				'<div id="test3">' + 
					'<tr class="foobar">' +
						'<td class="baz">' +
							'<ul class="reader_action_list">'+
								'<li class="reader-list-item-publish"><a href="publish">Publish</a></li>'+
								'<li class="reader-list-item-edit"><a href="edit">edit</a></li>' +
								'<li class="reader-list-item-copy"><a href="copy">copy</a></li>' +
							'</ul>' +
						'</td>' + 
					'</tr>' + 
				'</div>' +
			'</div>'
		);
	});

	afterEach(function() {
		$('#'+rootId).remove();
	});
	
	describe('when hiding the rightmost pipe',function() {
		
		function assertLastClassNotPresentOnPublishOrEditListItems(id) {
			it ('should not add the last class to the publish element', function() {				
				expect($(id + ' .reader-list-item-publish').hasClass('last')).toBe(false);
			});
			
			it ('should not add the last class to the edit element', function() {				
				expect($(id + ' .reader-list-item-edit').hasClass('last')).toBe(false);
			});	
		}
		
		function assertLastElementIsOnTheCorrectListItems(id) {
			assertLastClassNotPresentOnPublishOrEditListItems();
			
			it ('should not add the last class to the copy element', function() {				
				expect($(id + ' .reader-list-item-copy').hasClass('last')).toBe(true);
			});			
			
			it ('should add the last class to the last li element', function() {
				expect($(id + ' .reader-list-item-delete').hasClass('last')).toBe(true);
			});
		}
		
		describe('from a list with only one reader', function() {
			var id = '#test1';
			beforeEach(function () {
				formatter.hideRightPipeFromText(id);
			});
			
			assertLastElementIsOnTheCorrectListItems(id);
		});
		
		describe('from a list with two readers', function() {
			var id = '#test2';
			beforeEach(function () {
				formatter.hideRightPipeFromText(id);
			});
			
			assertLastElementIsOnTheCorrectListItems(id);			
		});
		
		describe('from a list without a delete link', function() {
			var id = '#test3';
			beforeEach(function () {
				formatter.hideRightPipeFromText(id);
			});
			
			assertLastClassNotPresentOnPublishOrEditListItems(id);
			
			it ('should not add the last class to the copy element', function() {				
				expect($(id + ' .reader-list-item-copy').hasClass('last')).toBe(true);
			});			
		});

	});
});
