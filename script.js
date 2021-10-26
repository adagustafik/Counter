let variable = 0;
$('#increase').click(() => {
    $('h2').text(variable + 1);
    variable = variable + 1;
});
$('#decrease').click(() => {
    $('h2').text(variable - 1);
    variable = variable - 1;
});