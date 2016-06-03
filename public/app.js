var dogs=[];
$(document).ready(function(){
  getDogs();

  $('#btnGet').on('click', function(){
    getDogs();
    console.log(dogs);

  })
  $('#btnPost').on("click", function(){
    postDogs($("#txtName").val(), $("#txtBreed").val());
    getDogs();

  });
  $('#btnPut').on("click", function(){
    putDogs($('#txtName').val(), $('#txtBreed').val());
    getDogs();

  });
  $('#btnDelete').on("click", function(){
    deleteDogs($('#txtName').val());
    getDogs();

  })

  $('#list').change(updateBoxes(this.id));
  // $('#btnLogin').on("click", function(){
  //   login($('#txtUsername').val(), $('#txtPassword').val());
  // })



function getDogs(){
  $('.results').empty();
  $.ajax({
    method: "GET",
    url: "/dogs",
    success: function(result){
      dogs = result;
      fillList(dogs);

      // for(var i = 0; i < result.length; i++){
      //   $(".results").append(result[i].name + " " + result[i].breed+ "<br>" );
      // }
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
    }
  })


}
function putDogs(name, breed){
  $.ajax({
    method: "PUT",
    url:"/dogs/" + $("#list").val(),
    data: {
      "name":name,
      "breed":breed
    }
  })
}
function deleteDogs(name){
  $.ajax({
    method:"DELETE",
    url:"/dogs/"+$("#list").val()
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

function fillList(data){
    $("#list").empty();
    for(var i = 0; i < data.length; i++){
      $("#list").append($('<option>' , { id:i, value:dogs[i]._id}).text(data[i].name + " the " + data[i].breed));
    }
  }

function updateBoxes(i){
    $('#txtName').val(dogs[i].name);
    $('#txtBreed').val(dogs[i].breed);
}
// <select name="select">
//   <option value="value1">Value 1</option>
//   <option value="value2" selected>Value 2</option>
//   <option value="value3">Value 3</option>
// </select>
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
