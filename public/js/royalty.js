$(document).ready(function() {
  $('#nojs').css('visibility', 'hidden');
  $.get('/README.md', function(md) {
    $('#readme').text(md);
  });

  now.ready(function(){

    var button = $('#button')
      , input = $('#input');

    button.click(function(e) {

      console.log('now.say(', input.val(), ')');

      // send the information both via now.js and post request, just for the
      // hell of it
      now.logOnServer(input.val());
      $.post('/?' + $('#royalForm').serialize());

      event.preventDefault();
      return false;
    });
  });
});
