$('.notes a').on('click', function() {

    note = $(this).attr('id');

    audio = document.getElementById(note + 'note');
    audio.play();

    $.each($('.notes a'), function(index, value) {
        if ($(value).attr('id') != note) {
            $(this).css('color', 'rgba(33, 33, 33, 1)');
            $(this).off('click');
        }
    });

    setTimeout(function(){ location.reload(); }, 2300);

});