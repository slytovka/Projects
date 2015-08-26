$(document).ready(function(){
    var turnCount=0;

      $('.board td').on('click', function(){

        /// adding audio file
        if ($(this).text()=='') {
            if (turnCount % 2 === 0){
              $(this).text('X');
              $('.notes').text('Player 2 turn');
              isVictory('X');

            } else {
           //player 2's turn (O)
              $(this).text('O');
              $('.notes').text('Player 1 turn');
              isVictory('O');
            }
            }
            else {
              turnCount = turnCount-1;
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
          //$('#btnStart').attr("disabled", true);
          $('#btnReset').attr("disabled", false);
          $('.boardBody').css('visibility', 'visible');
          resetBoard();
          $('.notes').text('Player 1 turn');

      });
      //adding functionality for RESET button
      $('#btnReset').on('click', function(){
          $('#btnReset').attr("disabled", true);
          $('#btnStart').attr("disabled", false);
          $('#player1Score').text('0');
          $('#player2Score').text('0');
          $('#player1Name').text('');
          $('#player2Name').text('');
          $('#player1').children().val('');
          $('#player2').children().val('');
          resetBoard();
          $('.boardBody').css('visibility', 'hidden');
          $('#btnStart').val('START');
      });
      // Function to clear board and reset background color
      function resetBoard() {
        $('.boardBody td').css('background-color', '#eee');
        $('.boardBody td').text('');
      }

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
      // Function to change background color when someone wins
      function changeBackground (lastStep, place) {
        if (lastStep.text() == 'X') {
            place.css('background-color', 'red');
            } if (lastStep.text() == 'O') {
            place.css('background-color', 'black');
            }
      }
        // Function to check if one of the players is a winner
        function isVictory(player) {
        //top row check
        if ($('#a').text() !== '') {
            if ($('#a').text() == $('#b').text() &&
                $('#a').text() == $('#c').text()) {
                  changeBackground($('#a'), $('#a, #b, #c'));
                  updateScore($('#a'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('Great!');
                }
            }
        //left column check
        if ($('#a').text() !== '') {
            if ($('#a').text() == $('#d').text() &&
                $('#a').text() == $('#g').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#a'), $('#a, #d, #g'));
                  updateScore($('#a'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('You are Genius');
                }
            }
        //left diagonal check
        if ($('#a').text() !== '') {
            if ($('#a').text() == $('#e').text() &&
                $('#a').text() == $('#i').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#a'), $('#a, #e, #i'));
                  updateScore($('#a'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('Well done!');
                }
            }


       //middle column check
        if ($('#b').text() !== '') {
            if ($('#b').text() == $('#e').text() &&
                $('#b').text() == $('#h').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#b'), $('#b, #e, #h'));
                  updateScore($('#b'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('Awesome');
                }
            }

        //right column check
       if ($('#c').text() !== '') {
            if ($('#c').text() == $('#f').text() &&
                $('#c').text() == $('#i').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#c'), $('#c, #f, #i'));
                  updateScore($('#c'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('Good Job!');
                }
            }
        //right diag check
       if ($('#c').text() !== '') {
            if ($('#c').text() == $('#e').text() &&
                $('#c').text() == $('#g').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#c'), $('#c, #e, #g'));
                  updateScore($('#c'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('Congratulations!');
                }
            }

        //middle row check
       if ($('#d').text() !== '') {
            if ($('#d').text() == $('#e').text() &&
                $('#d').text() == $('#f').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#d'), $('#d, #e, #f'));
                  updateScore($('#d'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('Congratulations!');

                }
            }

        //bottom row check
       if ($('#g').text() !== '') {
            if ($('#g').text() == $('#h').text() &&
                $('#g').text() == $('#i').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#g'), $('#g, #h, #i'));
                  updateScore($('#g'));
                  $('#btnStart').val('PLAY ON');
                }
            }
       }
});

