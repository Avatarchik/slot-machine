$(document).ready(function() {

  $("form").submit(function(event){
    event.preventDefault();
    var url = $(this).attr('action');
    
    $.post(url, function(data){
      console.log(data);
      // $( "#die").empty();
      // $( "#die").append(data);
      $( "#die").html(data);
    });

  });

});
