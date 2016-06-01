$(document).ready(function(){
  $('.words').on("click", function(){
    getDogs();
  });
});


function getDogs(){
  $.ajax({
    method: "GET",
    url: "/dogs"
  }).then( function(response){
    alert(response);
  })
}
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
