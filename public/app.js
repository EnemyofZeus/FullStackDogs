$(document).ready(function(){
  $('.words').on("click", function(){
    $.ajax({
      method: "GET",
      url: "/dogs"
    }).then(function(response){
      alert("They seem more jagged than normal!");
    });
  });
});

var string = "\"Hello World! \"";
// $.get( "ajax/test.html", function( data ) {
//   $( ".result" ).html( data );
//   alert( "Load was performed." );
// });

// .ajax({
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType
// });
