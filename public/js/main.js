// setting variables for armor button submission
var $addArmorSlot = $('#armorSlotInput')
var $addArmorPiece = $('#armorPieceName')
var $addArmorDescript = $('#armorDescript')

// set variables for armor slot
var $helmSelect = $('#helmSelect')
var $chestSelect = $('#chestSelect')
var $glovesSelect = $('#glovesSelect')
var $legsSelect = $('#legsSelect')
var $feetSelect = $('#feetSelect')

// set variable for weapons
var $weaponSelect = $('#weaponSelect')

var $armorList = $('#ajsdpf')
// setting variables for character
var $characterName = $('#character-name');

// GET character from full character list
function getCharName() {
  $.ajax({
    method: 'GET',
    url: '/api/character_list',
    data: {},
    datatype: 'json',
  }).done(function(character) {
    new CharacterDetails(character[0]); // event listener
  }).fail(function(xhr, text, status) {
    if (xhr.status == 404)
    console.log('help me, computer!', text, status, xhr.status);
  })
}
getCharName();

// GET list of helmets available to equip
function getHelmList() {
  $.ajax({
    method: 'GET',
    url: '/api/helms',
    data: {},
    datatype: 'json',
  }).done(function(armorList){
    armorList.forEach(function(armor){
      $("<option id='" + armor.armor_slot + "'>" + armor.armor_name + "</option>").appendTo($helmSelect);
    })
  })
}
getHelmList();

// GET list of chest available to equip
function getChestList() {
  $.ajax({
    method: 'GET',
    url: '/api/chests',
    data: {},
    datatype: 'json',
  }).done(function(armorList){
    armorList.forEach(function(armor){
      $("<option id='" + armor.armor_slot + "'>" + armor.armor_name + "</option>").appendTo($chestSelect);
    })
  })
}
getChestList();

// GET list of gloves available to equip
function getGlovesList() {
  $.ajax({
    method: 'GET',
    url: '/api/gloves',
    data: {},
    datatype: 'json',
  }).done(function(armorList){
    armorList.forEach(function(armor){
      $("<option id='" + armor.armor_slot + "'>" + armor.armor_name + "</option>").appendTo($glovesSelect);
    })
  })
}
getGlovesList();

// GET list of legs available to equip
function getLegsList() {
  $.ajax({
    method: 'GET',
    url: '/api/legs',
    data: {},
    datatype: 'json',
  }).done(function(armorList){
    armorList.forEach(function(armor){
      $("<option id='" + armor.armor_slot + "'>" + armor.armor_name + "</option>").appendTo($legsSelect);
    })
  })
}
getLegsList();

// GET list of feet available to equip
function getFeetList() {
  $.ajax({
    method: 'GET',
    url: '/api/feet',
    data: {},
    datatype: 'json',
  }).done(function(armorList){
    armorList.forEach(function(armor){
      $("<option id='" + armor.armor_slot + "'>" + armor.armor_name + "</option>").appendTo($feetSelect);
    })
  })
}
getFeetList();

// GET list of weapons available to equip
function getWeaponList() {
  $.ajax({
    method: 'GET',
    url: '/api/weapons',
    data: {},
    datatype: 'json',
  }).done(function(weaponList){
    console.log(weaponList);
    weaponList.forEach(function(weapon){
      // $("<option id='" + weapon.weapon_type + "'>" + weapon.weapon_name + "</option>").appendTo($weaponSelect);
      $("<option>").attr('id', weapon.weapon_name).text(weapon.weapon_name + ' ' + weapon.weapon_type).appendTo($weaponSelect);
    })
  })
}
getWeaponList();

// setInterval(function(){
// $.tasks.empty //empty out your tasks
// },5000)

// POST new armor piece via form
$("#addArmorBtn").on('click', function newArmorPiece() {
  var slot = $addArmorSlot.val();
  var piece = $addArmorPiece.val();
  var descript = $addArmorDescript.val();

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
    var charName = $("<p>").addClass('character').attr("id", this.info.charName).html(this.info.charName).appendTo(charContainer);

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
