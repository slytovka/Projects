'use strict';
$(document).ready(function(){
    var turnCount = 0;

      //passing Player 1 name to form
      function updateName1() {
        $('#player1Name').text($(this).val());
      }
      $('#player1').children().keyup(updateName1);

      //passing Player 2 name to form
      function updateName2() {
        $('#player2Name').text($(this).val());
      }
      $('#player2').children().keyup(updateName2);

      // Function to clear board and reset background color
      function resetBoard() {
        $('.boardBody td').css('background-color', '#eee');
        $('.boardBody td').text('');
      }

      //adding functionality for START button
      $('#btnStart').on('click', function(){
          //$('#btnStart').attr("disabled", true);
          $('#btnReset').attr('disabled', false);
          $('.boardBody').css('visibility', 'visible');
          resetBoard();
          $('.notes').text('Player 1 turn');
          turnCount = 0;

      });
      //adding functionality for RESET button
      $('#btnReset').on('click', function(){
          $('#btnReset').attr('disabled', true);
          $('#btnStart').attr('disabled', false);
          $('#player1Score').text('0');
          $('#player2Score').text('0');
          $('#player1Name').text('');
          $('#player2Name').text('');
          $('#player1').children().val('');
          $('#player2').children().val('');
          resetBoard();
          $('.boardBody').css('visibility', 'hidden');
          $('#btnStart').val('START');
          $('.notes').text('');
      });

      //function to update Score once someone wins
      function updateScore(val) {
          if (val.text() === 'X') {
            var addScore = parseInt($('#player1Score').text(), 10);
            addScore = addScore + 1;
            $('#player1Score').text(addScore);
          }
          if (val.text() === 'O') {
            addScore = parseInt($('#player2Score').text(), 10);
            addScore = addScore + 1;
            $('#player2Score').text(addScore);
          }
      }
      // Function to change background color when someone wins
      function changeBackground (lastStep, place) {
        if (lastStep.text() === 'X') {
            place.css('background-color', 'red');
            } if (lastStep.text() === 'O') {
            place.css('background-color', 'black');
            }
      }
        // Function to check if one of the players is a winner
        function isVictory() {
        //top row check
        if ($('#a').text() !== '') {
            if ($('#a').text() === $('#b').text() &&
                $('#a').text() === $('#c').text()) {
                  changeBackground($('#a'), $('#a, #b, #c'));
                  updateScore($('#a'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('Great!');
                  turnCount = 0.5;
                }
            }
        //left column check
        if ($('#a').text() !== '') {
            if ($('#a').text() === $('#d').text() &&
                $('#a').text() === $('#g').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#a'), $('#a, #d, #g'));
                  updateScore($('#a'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('You are Genius');
                  turnCount = 0.5;
                }
            }
        //left diagonal check
        if ($('#a').text() !== '') {
            if ($('#a').text() === $('#e').text() &&
                $('#a').text() === $('#i').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#a'), $('#a, #e, #i'));
                  updateScore($('#a'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('Well done!');
                  turnCount = 0.5;
                }
            }


       //middle column check
        if ($('#b').text() !== '') {
            if ($('#b').text() === $('#e').text() &&
                $('#b').text() === $('#h').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#b'), $('#b, #e, #h'));
                  updateScore($('#b'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('Awesome');
                  turnCount = 0.5;
                }
            }

        //right column check
       if ($('#c').text() !== '') {
            if ($('#c').text() === $('#f').text() &&
                $('#c').text() === $('#i').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#c'), $('#c, #f, #i'));
                  updateScore($('#c'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('Good Job!');
                  turnCount = 0.5;
                }
            }
        //right diag check
       if ($('#c').text() !== '') {
            if ($('#c').text() === $('#e').text() &&
                $('#c').text() === $('#g').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#c'), $('#c, #e, #g'));
                  updateScore($('#c'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('Congratulations!');
                  turnCount = 0.5;
                }
            }

        //middle row check
       if ($('#d').text() !== '') {
            if ($('#d').text() === $('#e').text() &&
                $('#d').text() === $('#f').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#d'), $('#d, #e, #f'));
                  updateScore($('#d'));
                  $('#btnStart').val('PLAY ON');
                  $('.notes').text('Congratulations!');
                  turnCount = 0.5;
                }
            }

        //bottom row check
       if ($('#g').text() !== '') {
            if ($('#g').text() === $('#h').text() &&
                $('#g').text() === $('#i').text()) {
                  //alert('Game over! '+player+' is the winner!');
                  changeBackground($('#g'), $('#g, #h, #i'));
                  updateScore($('#g'));
                  $('#btnStart').val('PLAY ON');
                  turnCount = 0.5;
                }
            }
       }
     $('.board td').on('click', function(){
        if ($(this).text() === '') {
            if (turnCount % 2 === 0){
            //player 1's turn (X)
              $(this).text('X');
              $('.notes').text('Player 2 turn');
              isVictory();

            } else if (turnCount % 2 === 1) {
           //player 2's turn (O)
              $(this).text('O');
              $('.notes').text('Player 1 turn');
              isVictory();
            }
            }
            else {
              turnCount = turnCount - 1;
          }
          turnCount++;

      });
});

