$(document).ready(function(){
    var turnCount=0;

      $('.board td').on('click', function(){
            if (turnCount % 2 === 0){
              $(this).text('X');
              isVictory('X');
            } else {
           //player 2's turn (O)
              $(this).text('O');
              isVictory('O');
            }
          turnCount++;

      });

      function isGameOver () {

      }

        function isVictory(player) {
       //top row check
       for (var i=1; i<=9; i++) {
        var anchorA = $('.board'+i+' #a');
        var anchorB = $('.board'+i+' #b');
        var anchorC = $('.board'+i+' #c');
        var anchorD = $('.board'+i+' #d');
        var anchorE = $('.board'+i+' #e');
        var anchorF = $('.board'+i+' #f');
        var anchorG = $('.board'+i+' #g');
        var anchorH = $('.board'+i+' #h');
        var anchorI = $('.board'+i+' #i');
        var anchorJ = $('.board'+i+' #j');
        if (anchorA.text() !== '') {
            if (anchorA.text() == anchorB.text() &&
                anchorA.text() == anchorC.text()) {
                  alert('Game over! '+player+' is the winner!');
                  if (anchorA.text() == 'X') {
                    $('.board'+i).css('background-color', '#FF851B');
                  } if (anchorA.text() == 'O') {
                    $('.board'+i).css('background-color', '#9933FF');
                  }

                    //TODO Assign whole table to a winner
                    //Check if whole game finished
                    //$('.board'+i+' td').hide();
                }
            }
        //left column check
        if (anchorA.text() !== ''){
            if (anchorA.text() == anchorD.text() &&
                anchorA.text() == anchorJ.text()) {
                    alert('Game over! '+player+' is the winner!');
                    //$('.board'+i).text() = anchorA.text();
                    //$('.board'+i+' td').hide();
                    i=1;
                }
            }
        //left diagonal check
          if (anchorA.text() !== ''){
            if (anchorA.text() == anchorE.text() &&
                anchorA.text() == anchorI.text()) {
                    alert('Game over! '+player+' is the winner!');
                    //$('.board'+i).text() = anchorA.text();
                    //$('.board'+i+' td').hide();
                    i=1;
                }
            }


       //middle column check
         if (anchorB.text() !== ''){
            if (anchorB.text() == anchorE.text() &&
                anchorB.text() == $('.board'+i+' #h').text()) {
                    alert('Game over! '+player+' is the winner!');
                    //$('.board'+i).text() = $('.board'+i+' #b').text();
                    //$('.board'+i+' td').hide();
                    i=1;
                }
            }

        //right column check
        if (anchorC.text() !== ''){
            if (anchorC.text() == $('.board'+i+' #f').text() &&
                anchorC.text() == anchorI.text()) {
                    alert('Game over! '+player+' is the winner!');
                    //$('.board'+i).text() = anchorC.text();
                    //$('.board'+i+' td').hide();
                    i=1;
                }
            }
            //right diag check
          if (anchorC.text() !== ''){
            if (anchorC.text() == anchorE.text() &&
                anchorC.text() == anchorJ.text()) {
                    alert('Game over! '+player+' is the winner!');
                    //$('.board'+i).text() = $('.board'+i+' #c').text();
                    //$('.board'+i+' td').hide();
                    i=1;
                }
            }


        //middle row check

        if (anchorD.text() !== ''){
            if (anchorD.text() == anchorE.text() &&
                anchorD.text() == $('.board'+i+' #f').text()) {
                    alert('Game over! '+player+' is the winner!');
                    //$('.board'+i).text() = $('.board'+i+' #d').text();
                    //$('.board'+i+' td').hide();
                    i=1;
                }
            }


        //bottom row check
        if (anchorJ.text() !== ''){
            if (anchorJ.text() == $('.board'+i+' #h').text() &&
                anchorJ.text() == anchorI.text()) {
                    alert('Game over! '+player+' is the winner!');
                    //$('.board'+i).text() = $('.board'+i+' #j').text();
                    //$('.board'+i+' td').hide();
                    i=1;
                }
            }
       }
     }

    //$('#newGame').on('click',function(){
        //$('.square').text('');
});

