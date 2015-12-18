$(function(){

  var p1wins = localStorage.getItem('player1counter') || '0';
  var p2wins = localStorage.getItem('player2counter') || '0';
  var ties = localStorage.getItem('tie_counter') || '0';
  var x = 'X';
  var o = 'O';
  var picked;
  var playerTurn = 0;
  var p1 = [];
  var p2 = [];
  var gameWon = false;

  //prompt user name, twice if first entry is space, if cancelled will default to Player 1
  var player1Name = prompt("Player One Name: ");
  if (player1Name === ''){
    player1Name = prompt("Player One, I said enter your name: ")
    if (player1Name === ''){
      player1Name = "Player 1";
    }
  }
  if (player1Name === null){
    player1Name = "Player 1";
  }

  //prompt user name, twice if first entry is space, if cancelled will default to Player 2
  var player2Name = prompt("Player Two Name: ");
  if (player2Name === ''){
    player2Name = prompt("Player Two, I said enter your name: ")
    if (player2Name === ''){
      player2Name = "Player 2";
    }
  }
  if (player2Name === null){
    player2Name = "Player 2";
  }

  //displays player 1 and player 2 name on middle banner
  $('#player').append(player1Name + ' vs ' + player2Name);

  //displays scoreboard on the left of current wins/ties
  $('#p1wins').text(player1Name + ": " + p1wins);
  $('#ties').text("Ties: " + ties);
  $('#p2wins').text(player2Name + ": " + p2wins);

  //easter egg cheat button to the right of new game
  //if player 1 cheats
  $('#cheat').on('click', function(){
    if (playerTurn % 2 === 0){
      picked = x;
      $('.box').css('background-color', '#3498db');
      $('.box').addClass('x');
      $('.box').css('pointer-events', 'none');
      $('.box').html(picked);
      p1wins = 99;
      $('#p1wins').text(player1Name + ": " + p1wins);
      localStorage.setItem('player1counter', p1wins);
      alert(player1Name + " WINS, YOU CHEATER!");
      //window.location.reload();
    }

    //if player 2 cheats
    else {
      picked = o;
      $('.box').css('background-color', '#c0392b');
      $('.box').addClass('o');
      $('.box').css('pointer-events', 'none');
      $('.box').html(picked);
      p2wins = 99;
      $('#p2wins').text(player2Name + ": " + p2wins);
      localStorage.setItem('player2counter', p2wins);
      alert(player2Name + " WINS, YOU CHEATER!");
      //window.location.reload();
    }
  });


  //when new game is clicked page reloads - did not get chance to keep name and avoid prompt again
  $('#restart').on('click', function(){
    window.location.reload();
  })

  //clears local storage history and reloads the page
  $('#clear').on('click', function(){
    localStorage.clear();
    alert("Game history cleared!");
    window.location.reload();
  })


  //allows current player to click on any box
  $('.box').on('click', function() {
    if (playerTurn % 2 === 0){
        picked = x;
        var selected = $(this).attr('id');
        p1.push(selected);
        $(this).html(picked);
        $(this).addClass('x');
        $(this).css('pointer-events', 'none');
        $(this).css('background-color', '#3498db');

        //looks at pushed array for player 1 and uses condition to determine if any of these conditions are true
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

          p1wins++;
          if (p1wins >= 99){
            p1wins = 99;
          }

          //increments player 2 wins and adds to local storage
          localStorage.setItem('player1counter', p1wins);
          $('#p1wins').text(player1Name + ": " + p1wins);
          $('#p2wins').text(player2Name + ": " + p2wins);
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

          p2wins++;
          if (p2wins >= 99){
            p2wins = 99;
          }
          //increments player 2 wins and adds to local storage
          p2wins++;
          localStorage.setItem('player2counter', p2wins);
          $('#p1wins').text(player1Name + ": " + p1wins);
          $('#p2wins').text(player2Name + ": " + p2wins);

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
