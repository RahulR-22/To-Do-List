$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(ev) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	ev.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
	if (event.originalEvent.key === 'Enter') {
		const inputValue = $(this).val();
		$('ul').append(`<li><span><i class="far fa-trash-alt"></i></span>${inputValue}</li>`);
		$(this).val('');
	}
});

$('#toggle-form').click(function() {
	$("input[type='text']").fadeToggle(500);
});
