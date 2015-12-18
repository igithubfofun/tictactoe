$(function(){

  var p1wins = localStorage.getItem('player1counter');
  var p2wins = localStorage.getItem('player2counter');
  var ties = localStorage.getItem('tie_counter');
  console.log(p1wins);
  console.log(p2wins);

  var x = 'X';
  var o = 'O';
  var picked;
  var playerTurn = 0;
  var p1 = [];
  var p2 = [];
  var gameWon = false;



  var player1Name = prompt("Player One Name: ");
  if (player1Name === ''){
    player1Name = prompt("Player One, I said enter your name: ")
    if (player1Name === ''){
      player1Name = "Player 1";
    }
  }

  var player2Name = prompt("Player Two Name: ");
  if (player2Name === ''){
    player2Name = prompt("Player Two, I said enter your name: ")
    if (player2Name === ''){
      player2Name = "Player 2";
    }
  }
  if (player1Name === null){
    player1Name = "Player 1";
  }
  if (player2Name === null){
    player2Name = "Player 2";
  }


  $('#player').append(player1Name + ' vs ' + player2Name);

  $('#p1wins').text(player1Name + " wins: " + p1wins);
  $('#ties').text("Ties: " + ties);
  $('#p2wins').text(player2Name + " wins: " + p2wins);

  $('#cheat').on('click', function(){
    if (playerTurn % 2 === 0){
    picked = x;
    $('.box').css('background-color', '#3498db');
    $('.box').addClass('x');
    $('.box').css('pointer-events', 'none');
    $('.box').html(picked);
    alert(player1Name + " WINS, YOU CHEATER!");

    //window.location.reload();
    }
    else {

    picked = o;
    $('.box').css('background-color', '#c0392b');
    $('.box').addClass('o');
    $('.box').css('pointer-events', 'none');
    $('.box').html(picked);
    alert(player2Name + " WINS, YOU CHEATER!");
    //window.location.reload();
    }
  });

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

          alert(player1Name + " WINS! Click NEW GAME to play again.");

          if (p1wins === null) {
              p1wins = 0;
          }
          p1wins++;
          localStorage.setItem('player1counter', p1wins);
          $('#p1wins').text(player1Name + " wins: " + p1wins);
          $('#p2wins').text(player2Name + " wins: " + p2wins);


          //window.location.reload();
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
          alert(player2Name + " WINS! Click NEW GAME to play again.");

          if (p2wins === null) {
              p2wins = 0;
          }
          p2wins++;

          localStorage.setItem('player2counter', p2wins);

          $('#p1wins').text(player1Name + " wins: " + p1wins);
          $('#p2wins').text(player2Name + " wins: " + p2wins);

          //window.location.reload();
          gameWon = true;

        }


      playerTurn += 1;
    }

    if (playerTurn === 9 && gameWon === false){
      alert("its a DRAW! Click NEW GAME to play again.");
      if (ties === null) {
          ties = 0;
      }
      ties++;

      localStorage.setItem('tie_counter', ties);
      $('#ties').text("Ties: " + ties);
      //window.location.reload();
    }

  })


});
