$(document).ready(function(){

  $('#btnGet').on('click', function(){
    getDogs();
  })
  $('#btnPost').on("click", function(){
    postDogs($("#txtName").val(), $("#txtBreed").val());
  });
  $('#btnPut').on("click", function(){
    putDogs($('#txtName').val(), $('#txtBreed').val());
  });
  $('#btnDelete').on("click", function(){
    deleteDogs($('#txtName').val());
  })
  // $('#btnLogin').on("click", function(){
  //   login($('#txtUsername').val(), $('#txtPassword').val());
  // })



function getDogs(){
  $.ajax({
    method: "GET",
    url: "/dogs",
    success: function(result){
      for(var i = 0; i < result.length; i++){
        $(".results").append(result[i].name + " " + result[i].breed+ "<br>" );
      }
    }
  });
};

function postDogs(name, breed){
  $.ajax({
    method: "POST",
    url: "/dogs",
    data: {
      "name":name,
      "breed":breed
    },
    success: console.log("I've got your dog!")
  })
}
function putDogs(name, breed){
  $.ajax({
    method: "PUT",
    url:"/dogs/" + name,
    data: {
      "name":name,
      "breed":breed
    },
    success: console.log("Your dog has changed!")
  })
}
function deleteDogs(name){
  $.ajax({
    method:"DELETE",
    url:"/dogs/"+name,
    success: console.log("Your dog is gone!")
  });
}

function login(username, password){
  $.ajax({
    method: "POST",
    url: "/login",
    data: {
      "username":username,
      "password":password
    },
    success: console.log("You're logged in")

  });
};
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
});
