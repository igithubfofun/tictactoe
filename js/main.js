$(function(){

  var p1name = localStorage.getItem('p1name')
  var p2name = localStorage.getItem('p2name')
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

  // prompt user name, twice if first entry is space, if cancelled will default to Player 1
  if (localStorage.p1name === undefined || localStorage.p1name === "Player 1"){
    var p1name = prompt("Player One Name: ");
    localStorage.setItem('p1name', p1name);
    if (p1name === ''){
        p1name = "Player 1";
        localStorage.setItem('p1name', p1name);
    }
    if (p1name === null){
      p1name = "Player 1";
      localStorage.setItem('p1name', p1name);
    }
  }
  // player1Name=localStorage.p1name;
  // //prompt user name, twice if first entry is space, if cancelled will default to Player 2
  if (localStorage.p2name === undefined || localStorage.p2name === "Player 2"){
    var p2name = prompt("Player Two Name: ");
    localStorage.setItem('p2name', p2name);
    if (p2name === ''){
        p2name = "Player 2";
        localStorage.setItem('p2name', p2name);
    }
    if (p2name === null){
      p2name = "Player 2";
      localStorage.setItem('p2name', p2name);
    }
  }
  // player2Name=localStorage.p2name;
  //displays player 1 and player 2 name on middle banner
  $('#player').append(p1name + ' vs ' + p2name);

  //displays scoreboard on the left of current wins/ties
  $('#p1wins').text(p1name + ": " + p1wins);
  $('#ties').text("Ties: " + ties);
  $('#p2wins').text(p2name + ": " + p2wins);

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
      $('#p1wins').text(p1name + ": " + p1wins);
      localStorage.setItem('player1counter', p1wins);
      alert(p1name + " WINS, YOU CHEATER!");
    }

    //if player 2 cheats
    else {
      picked = o;
      $('.box').css('background-color', '#c0392b');
      $('.box').addClass('o');
      $('.box').css('pointer-events', 'none');
      $('.box').html(picked);
      p2wins = 99;
      $('#p2wins').text(p2name + ": " + p2wins);
      localStorage.setItem('player2counter', p2wins);
      alert(p2name + " WINS, YOU CHEATER!");
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
        if (ifWin(p1))
        {
          alert(p1name + " WINS! Click NEW GAME to play again.");
          $('.box').css('pointer-events', 'none');
          p1wins++;
          if (p1wins >= 99){
            p1wins = 99;
          }

          //increments player 2 wins and adds to local storage
          localStorage.setItem('player1counter', p1wins);
          $('#p1wins').text(p1name + ": " + p1wins);
          $('#p2wins').text(p2name + ": " + p2wins);

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

        if (ifWin(p2))
        {
          alert(p2name + " WINS! Click NEW GAME to play again.");

          $('.box').css('pointer-events', 'none');
          if (p2wins >= 99){
            p2wins = 99;
          }
          //increments player 2 wins and adds to local storage
          p2wins++;
          localStorage.setItem('player2counter', p2wins);
          $('#p1wins').text(p1name + ": " + p1wins);
          $('#p2wins').text(p2name + ": " + p2wins);

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
    }
  });

function ifWin(p){
  return(
  p.includes('one') && p.includes('two') && p.includes('three') || //top line
  p.includes('one') && p.includes('four') && p.includes('seven') || //left line
  p.includes('one') && p.includes('five') && p.includes('nine') || //diagonal down right
  p.includes('two') && p.includes('five') && p.includes('eight') || //middle down
  p.includes('three') && p.includes('six') && p.includes('nine') || //right line
  p.includes('three') && p.includes('five') && p.includes('seven') ||
  p.includes('four') && p.includes('five') && p.includes('six') || //middle side
  p.includes('seven') && p.includes('eight') && p.includes('nine')) //bottom line
  }
});
