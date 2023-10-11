

$('form').on('submit', function(e) {
    e.preventDefault();

    const taskName = $('#task-name').val();
    const newItem = $(`<li>${taskName}</li>`);

    $(newItem).appendTo('ul');
    $('#task-name').val('');
});

$('ul').on('click','li',function() {
    $(this).toggleClass('checked-list');
});