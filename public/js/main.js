// var $taskDescription = $('#task-description')
//
// var $createTaskButton = $('#create-task')
//
// function createArmorPiece(){
//   var description = $taskDescription.val();
//
//   return $.ajax({
//     method: 'GET',
//     url: '/api/get/',
//     data: {
//     description: description}
//   });
// }
//
// $createTaskButton.click(createArmorPiece)

$.ajax({
  method: 'GET',
  url: '/api/'
}).done(function(person) {
  $name.text(person.name)
}).fail(function(xhr, text, status) {
  if (xhr.status == 404)
  console.log('help computer!', text, status, xhr.status)
})
