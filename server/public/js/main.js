// on click of submit button,
$('#submit').on('click', function(){
  //grab whatever is in each input field
  var name = $('#name').val();
  var type = $('#type').val();
  var filling = $('#filling').val();
  var icing = $('#icing').val();
  var gluten = $('#gluten').val();
  // build an object with the corresponding keys
  var newDonut = {name: name,
                type: type,
                filling: filling,
                icing: icing,
                gluten: gluten};
  // take the object and post it to /donuts
  $.ajax({
    method: "POST",
    url: "http://localhost:3000/donuts",
    data: newDonut,
    success: function(response){
      window.location.reload();
    }
  });
});

// when the delete button is clicked
$('.delete').on('click', function(){
  // we need to grab the id of the wine that's being deleted
  var id = $(this).attr('id');
  // send a delete via ajax to /wines/id
  $.ajax({
    method: "DELETE",
    url: "http://localhost:3000/donuts/" + id,
    success: function(response){
      window.location.reload();
    }
  })
})
