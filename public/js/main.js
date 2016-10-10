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



var $characterName = $('#character-name');

function anything() {
  $.ajax({
    method: 'GET',
    url: '/api/character_list',
    date: {},
    "datatype": "json",
  }).done(function(character) {
    new CharacterDetails(character[1]); // event listener
  }).fail(function(xhr, text, status) {
    if (xhr.status == 404)
    console.log('help computer!', text, status, xhr.status);
  })
}
anything();

function CharacterDetails(characterObject) {
  console.log(characterObject);
    this.info = {
        charName: characterObject.name,
        weapon: characterObject.weapon_id,
        armor: characterObject.armor_id
    };

    var charContainer = $("<div>").attr("class", this.info.charName);
    var charName = $("<p>").attr("id", this.info.charName).html(this.info.charName).appendTo(charContainer);
    $(charContainer).insertAfter("header");

    this.MagicElements = function(characterObject) {
        var context = {
            charName: this.info.name,
            weapon: this.info.weapon_id,
            armor: this.info.armor_id,
        };
    };
    this.MagicElements(characterObject);
}
