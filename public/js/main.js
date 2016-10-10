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

function getCharName() {
  $.ajax({
    method: 'GET',
    url: '/api/character_list',
    data: {},
    "datatype": "json",
  }).done(function(character) {
    new CharacterDetails(character[1]); // event listener
  }).fail(function(xhr, text, status) {
    if (xhr.status == 404)
    console.log('help me, computer!', text, status, xhr.status);
  })
}
getCharName();

// $('#armorSlotInput').keypress(function(event) {
//     var inputStringOne = $('#armorSlotInput').val();
//     if (event.which == 13) {
//         newArmorPiece(inputStringOne);
//         return false;
//     }
// });
//
// $('#armorPieceName').keypress(function(event) {
//     var inputStringTwo = $('#armorPieceName').val();
//     if (event.which == 13) {
//         newArmorPiece(inputStringTwo);
//         return false;
//     }
// });
//
// function newArmorPiece(inputStringOne, inputStringTwo) {
//   var armorAdd = $("#addArmorBtn").val("");
//   $.ajax({
//     method: 'POST',
//     url: '/api/add_armor_piece',
//     data: {
//       armor_slot: inputStringOne,
//       armor_name: inputStringTwo,
//     },
//     datatype: 'json',
//   })
// };

var $armorSlot = $('#armorSlotInput')
var $armorPiece = $('#armorPieceName')

$("#addArmorBtn").on('click', function newArmorPiece() {
  var slot = $armorSlot.val();
  var piece = $armorPiece.val();

  $('#armorSlotInput').val('');

  $.ajax({
    method: 'POST',
    url: '/api/add_armor_piece',
    datatype: 'json',
    data: {
      armor_slot: slot,
      armor_name: piece
    }
  })
})

//
//   }).done(function(armor) {
//     new ArmorDetails(armor);
//
//   }).fail(function(xhr, text, status) {
//     if (xhr.status == 404)
//     console.log('help me, computer!', text, status, xhr.status);
//   })
//   console.log(armorAdd)
// }



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

    // $("#" + this.info.charname)

    this.MagicElements = function(characterObject) {
        var context = {
            charName: this.info.name,
            weapon: this.info.weapon_id,
            armor: this.info.armor_id,
        };
    };
    this.MagicElements(characterObject);
}
