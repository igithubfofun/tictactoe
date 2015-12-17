$(function(){

  var x = 'X';
  var o = 'O';
  var picked;
  var playerTurn = 0;
  var p1 = [];
  var p2 = [];
  var gameWon = false;

  var player1Name = prompt("Player One Name: ");
  var player2Name = prompt("Player Two Name: ");


    $('#player').append(player1Name + ' vs ' + player2Name);



  $('#restart').on('click', function(){
    window.location.reload();



  })

  $('.box').on('click', function() {

    if (playerTurn % 2 === 0){
        picked = x;

        var selected = $(this).attr('id');
        p1.push(selected);
        $(this).html(picked);
        $(this).addClass('x');

        $(this).css('pointer-events', 'none');
        $(this).css('background-color', '#3498db');

        if (
          p1.includes('one') && p1.includes('two') && p1.includes('three') ||
          p1.includes('one') && p1.includes('four') && p1.includes('seven') ||
          p1.includes('one') && p1.includes('five') && p1.includes('nine') ||
          p1.includes('two') && p1.includes('five') && p1.includes('eight') ||
          p1.includes('three') && p1.includes('five') && p1.includes('seven') ||
          p1.includes('three') && p1.includes('six') && p1.includes('nine') ||
          p1.includes('four') && p1.includes('five') && p1.includes('six') ||
          p1.includes('seven') && p1.includes('eight') && p1.includes('nine')
          )
        {
          alert("Player One WINS! hit OK to play again.");
          window.location.reload();
          gameWon = true;
        }

        playerTurn += 1;
    }

    else {
      picked = o;
      var selected = $(this).attr('id');
      p2.push(selected);
      $(this).text(picked);
      $(this).addClass('o');

      $(this).css('pointer-events', 'none');
      $(this).css('background-color', '#c0392b');

        if (
          p2.includes('one') && p2.includes('two') && p2.includes('three') || //top line
          p2.includes('one') && p2.includes('four') && p2.includes('seven') || //left line
          p2.includes('one') && p2.includes('five') && p2.includes('nine') || //diagonal down right
          p2.includes('two') && p2.includes('five') && p2.includes('eight') || //middle down
          p2.includes('three') && p2.includes('five') && p2.includes('seven') || //diagonal up right
          p2.includes('three') && p2.includes('six') && p2.includes('nine') || //right line
          p2.includes('four') && p2.includes('five') && p2.includes('six') || //middle side
          p2.includes('seven') && p2.includes('eight') && p2.includes('nine') //bottom line
          )
        {
          alert("Player Two WINS! hit OK to play again.");
          window.location.reload();
          gameWon = true;
        }


      playerTurn += 1;
    }

    if (playerTurn === 9 && gameWon === false){
      alert("its a DRAW! hit OK to play again.");
      window.location.reload();
    }

  })


});
