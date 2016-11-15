var state = {
	item: [];
}

var addItem = function(state, item) {
	state.item.push(item);
}

var renderItems = function (state, element) {
	var itemsHTML = state.item.map(function(item) {
		return '<li>'+'<span class="shopping-item">'+ item + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">'+ '<span class="button-label">'+ 'check' + '</span>' '</button>' + '<button class="shopping-item-delete">' + 'delete' + '<span class="button-label">' + 'delete' + '</span>' + '</button>' + '</div>' + '</span>' + '</li>'
	});
	element.html(itemsHTML);
}





$('js-shopping-list-form').submit(function (event) {

	event.preventDefault();

	addItem(state, $('input').val());
	renderItems(state, )	


});