$(function(){

  var x = 'X';
  var o = 'O';
  var picked;
  var turn;
  var game = true;
  var playerOne = false;
  var playerTwo = false;


while (game){
    game = false;
    $('.box').on('click', function() {
    picked = $(this).html();
    //console.log(picked);

      if (picked === '&nbsp;'){
        $(this).text(x);
        playerOne = true;
        }

        if (playerOne){
        playerOne = false;
        $('.box').on('click', function() {
        picked = $(this).html();

        if (picked === '&nbsp;'){
            $(this).text(x);
            }

        //if statement for not overwritting a box
        else if (picked === 'X' || picked === 'O'){
          console.log("pick again");
          return;
          }
        })

        playerTwo = true;

      }


      if (playerTwo){
        playerTwo = false;
        $('.box').on('click', function() {
        picked = $(this).html();

        if (picked === '&nbsp;'){
            $(this).text(o);
            }

        //if statement for not overwritting a box
        else if (picked === 'X' || picked === 'O'){
          console.log("pick again");
          return;
          }
        })
        playerOne = true;

    }
    })









  }









});
