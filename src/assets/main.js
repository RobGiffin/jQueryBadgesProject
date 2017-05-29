$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/giffinr.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      console.log(response);
      $('#badges').append(response);
    }
  });

});
