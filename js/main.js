$(function(){

  var x = 'X';
  var o = 'O';
  var picked;
  var turn;
  var playerOne = true;
  var playerTwo = false;


  while (playerOne === true){

    $('.box').on('click', function() {
      picked = $(this).html();
      console.log(picked);
      //playerOne = false;


      if (picked === '&nbsp;'){
          $(this).text(x);

      }

      //if statement for not overwritting a box
      else if (picked === 'X' || picked === 'O'){
        console.log("pick again");
        return;

      }

      playerOne = false;
      playerTwo = true;



    })

    while (playerTwo === true){

    $('.box').on('click', function() {
      picked = $(this).html();
      console.log(picked);
      //playerOne = false;


      if (picked === '&nbsp;'){
          $(this).text(x);

      }

      //if statement for not overwritting a box
      else if (picked === 'X' || picked === 'O'){
        console.log("pick again");
        return;

      }

      playerOne = true;
      playerTwo = false;;



    })

 // }

  // $('.box').on('click', function(e) {
  //   $(this).html(o);
  // })


});
