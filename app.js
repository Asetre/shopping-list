$(document).ready(function() {
	var state = {
	item: []
	}

	var addItem = function(state, item) {
		state.item.push(item);
	}

	var renderItems = function(state, element) {
		var itemsHTML = state.item.map(function(items) {
			var x = '<li>' +
	        '<span class="shopping-item">' + items + '</span>' +
	        '<div class="shopping-item-controls">' +
	          '<button class="shopping-item-toggle">' +
	            '<span class="button-label">check</span>' +
	          '</button>' +
	          '<button class="shopping-item-delete">' +
	            '<span class="button-label">delete</span>' +
	          '</button>' +
	        '</div>' +
	      '</li>'
	      return x;
		});

		element.append(itemsHTML);
	}

	var removeItem = function (state, itemName) {
		for (var i = 0 ; i < state.item.length ; i++) {
			if (itemName === state.item[i]) {
				state.item.splice(i, 1);
			}
		}
	}


	//Add items to shopping list
	$('#js-shopping-list-form').submit(function (event) {
		event.preventDefault();
		addItem(state, $('input').val());
		renderItems(state, $(".shopping-list"));
	});
	//Delete Items from list
	$('.shopping-item-delete').on("click", '.shopping-item-delete', function () {
		var itemName = $(this).parent().siblings(".shopping-item").html();
		removeItem(state, itemName);
		console.log(state.item);
		
	})




	
});
