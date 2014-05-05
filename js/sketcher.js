// Generate the grid
var $grid = $('#container');

for (i = 0; i < 16; i++) 
{
    var row = '<div>';

    for (j = 0; j < 16; j++)
        row += '<div class="square"></div>';

    row += '</div>';

    $grid.append(row);
}

// Color a square when clicked on
$('.square').click(
  function() {
    $(this).addClass('colored');
  }
);

// Reset all sqares on button press
$('#reset').click(function() {
  $(".colored").each(function( i ) {
    $(this).removeClass('colored');
  });
});