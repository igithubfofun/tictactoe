$(function(){

  var x = 'X';
  var o = 'O';
  var picked;
  var playerTurn = 0;
  var p1 = [];
  var p2 = [];



  $('.box').on('click', function() {
  picked = $(this).html();


    if (playerTurn % 2 === 0){
        picked = x;

        var selected = $(this).attr('id');
        p1.push(selected);
        $(this).text(picked);


        $(this).css('pointer-events', 'none');

        if (p1.includes('one') && p1.includes('two') && p1.includes('three')) {
          alert("WINNER");
        }


        playerTurn += 1;
    }

    else {
      picked = o;
      var selected = $(this).attr('id');
      p2.push(selected);
      $(this).text(picked);

      $(this).css('pointer-events', 'none');
      playerTurn += 1;
    }

  })


});
