// setting variables for armor button submission
var $armorSlot = $('#armorSlotInput')
var $armorPiece = $('#armorPieceName')
var $armorDescript = $('#armorDescript')

// setting variables for character
var $characterName = $('#character-name');

// GET character from full character list
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


// POST new armor piece via form
$("#addArmorBtn").on('click', function newArmorPiece() {
  var slot = $armorSlot.val();
  var piece = $armorPiece.val();
  var descript = $armorDescript.val();

  $('#armorSlotInput').val('');

  $.ajax({
    method: 'POST',
    url: '/api/add_armor_piece',
    datatype: 'json',
    data: {
      armor_slot: slot,
      armor_name: piece,
      description: descript
    }
  })
})

// Constructor for character information
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
