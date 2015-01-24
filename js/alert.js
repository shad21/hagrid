$(document).on('click', '.alert a.alert-close', function(e) {
    e.preventDefault();
    $(this).closest('.alert').fadeOut(500).queue(function() {
        $(this).closest('.alert').remove();
    });
});