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
      //passing Player 1 name to form
      $('#player1').children().keyup(updateName1);
      function updateName1() {
        $('#player1Name').text($(this).val());
      }
      //passing Player 2 name to form
      $('#player2').children().keyup(updateName2);
      function updateName2() {
        $('#player2Name').text($(this).val());
      }

      //adding functionality for START button
      $('#btnStart').on('click', function(){
          $('#btnStart').attr("disabled", true);
          $('#btnReset').attr("disabled", false);
      });
      //adding functionality for RESET button
      $('#btnReset').on('click', function(){
          $('#btnReset').attr("disabled", true);
          $('#btnStart').attr("disabled", false);
      });

      //function to update Score once someone wins
      function updateScore(val) {
          if (val.text() == 'X') {
            var addScore = parseInt($('#player1Score').text(), 10);
            var addScore = addScore + 1;
            $('#player1Score').text(addScore);
          }
          if (val.text() == 'O') {
            var addScore = parseInt($('#player2Score').text(), 10);
            var addScore = addScore + 1;
            $('#player2Score').text(addScore);
          }
      }

      function changeBackground (lastStep, place) {
        if (lastStep.text() == 'X') {
            place.css('background-color', '#FF851B');
            } if (lastStep.text() == 'O') {
            place.css('background-color', '#9933FF');
            }
      }

        function isVictory(player) {
       //top row check

        if ($('#a').text() !== '') {
            if ($('#a').text() == $('#b').text() &&
                $('#a').text() == $('#c').text()) {
                  alert('Game over! '+player+' is the winner!');
                  changeBackground($('#a'), $('#row0'));
                  updateScore($('#a'));
                }
            }
        //left column check
       if ($('#a').text() !== '') {
            if ($('#a').text() == $('#d').text() &&
                $('#a').text() == $('#g').text()) {
                  alert('Game over! '+player+' is the winner!');
                  changeBackground($('#a'), $('#a, #d, #g'));
                  updateScore($('#a'));
                }
            }
        //left diagonal check
          if ($('#a').text() !== '') {
            if ($('#a').text() == $('#e').text() &&
                $('#a').text() == $('#i').text()) {
                  alert('Game over! '+player+' is the winner!');
                  changeBackground($('#a'), $('#a, #e, #i'));
                  updateScore($('#a'));
                }
            }


       //middle column check
        if ($('#b').text() !== '') {
            if ($('#b').text() == $('#e').text() &&
                $('#b').text() == $('#h').text()) {
                  alert('Game over! '+player+' is the winner!');
                  changeBackground($('#b'), $('#b, #e, #h'));
                  updateScore($('#b'));
                }
            }

        //right column check
       if ($('#c').text() !== '') {
            if ($('#c').text() == $('#f').text() &&
                $('#c').text() == $('#i').text()) {
                  alert('Game over! '+player+' is the winner!');
                  changeBackground($('#c'), $('#c, #f, #i'));
                  updateScore($('#c'));
                }
            }
            //right diag check
          if ($('#c').text() !== '') {
            if ($('#c').text() == $('#e').text() &&
                $('#c').text() == $('#g').text()) {
                  alert('Game over! '+player+' is the winner!');
                  changeBackground($('#c'), $('#c, #e, #g'));
                  updateScore($('#c'));
                }
            }


        //middle row check

       if ($('#d').text() !== '') {
            if ($('#d').text() == $('#e').text() &&
                $('#d').text() == $('#f').text()) {
                  alert('Game over! '+player+' is the winner!');
                  changeBackground($('#d'), $('#row1'));
                  updateScore($('#d'));
                }
            }


        //bottom row check
       if ($('#g').text() !== '') {
            if ($('#g').text() == $('#h').text() &&
                $('#g').text() == $('#i').text()) {
                  alert('Game over! '+player+' is the winner!');
                  changeBackground($('#g'), $('#row2'));
                  updateScore($('#g'));
                }
            }
       }


    //$('#newGame').on('click',function(){
        //$('.square').text('');
});

