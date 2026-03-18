// Global Variables
let cookieCharacter = "";
let selectedCharacter = "";
const cookieHand = [];

// cards in hand
let handSize = 0;
let cardHand1 = document.getElementById('card1');
let cardHand2 = document.getElementById('card2');
let cardHand3 = document.getElementById('card3');
let cardHand4 = document.getElementById('card4');
let cardHand5 = document.getElementById('card5');
let cardHand6 = document.getElementById('card6');
let cardHand7 = document.getElementById('card7');
let cardHand8 = document.getElementById('card8');
let cardHand9 = document.getElementById('card9');
let cardHand10 = document.getElementById('card10');
let cardHand11 = document.getElementById('card11');
let cardHand12 = document.getElementById('card12');

// Function to remove element from an array
function dropArrayElement(item, array){
  
  const filteredArray = array.filter(function(dropItem) {
    return dropItem !== item;
  });

  return filteredArray;
}

//Section for enabling use of cookies
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkPerks(abbr){
  for(var i = 1; i <= 15; i++){
    cookiePerk = getCookie("perk"+i);
    formPerk = document.getElementById(abbr+"Perk"+i);

    if (cookiePerk === abbr+"chosen"){
      formPerk.classList.add("checked");
    }
  }
}

function checkCookie() {
  var characterSelection = getCookie("character");
  var currentLevel = getCookie("level");
  var tempHand = getCookie("hand");
  const tempHand2 = tempHand.split(",");
  cookieHand.splice(0, cookieHand.length, ...tempHand2);

  cookieCharacter = characterSelection

  if (currentLevel >= 2 && currentLevel < 9){
    levelCount = currentLevel;
    levelCounter.innerHTML = "Level: "+levelCount;
    levelDown.classList.remove("at-min");
  }
  else if (currentLevel == 9){
    levelCount = 9;
    levelCounter.innerHTML = "Level: "+levelCount;
    levelDown.classList.remove("at-min");
    levelUp.classList.add("at-max;")
  }
  else {
    levelCount = 1;
  }
  switch (characterSelection){
    case "brute":
      brute.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("br");
      break;
    case "cragheart":
      cragheart.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("ch");
      break;
    case "mindthief":
      mindthief.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("mt");
      break;
    case "scoundrel":
      scoundrel.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("sc");
      break;
    case "spellweaver":
      spellweaver.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("sw");
      break;
    case "tinkerer":
      tinkerer.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("ti");
      break;
    case "beasttyrant":
      beasttyrant.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("bt");
      break;
    case "berserker":
      berserker.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("be");
      break;
    case "doomstalker":
      doomstalker.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("ds");
      break;
    case "elementalist":
      elementalist.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("el");
      break;
    case "nightshroud":
      nightshroud.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("ns");
      break;
    case "plagueherald":
      plagueherald.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("ph");
      break;
    case "quartermaster":
      quartermaster.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("qm");
      break;
    case "sawbones":
      sawbones.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("sb");
      break;
    case "sunkeeper":
      sunkeeper.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("sk");
      break;
    case "soothsinger":
      soothsinger.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("ss");
      break;
    case "summoner":
      summoner.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("su");
      break;
    case "bladeswarm":
      bladeswarm.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      checkPerks("bs");
      break;
    default:
      characterSelected = false;
      break;
  }
}

//flipped card path
let flippedCard = "";

//cards that are discarded, lost, or active
let discard1 = document.getElementById('discard1');
let discard2 = document.getElementById('discard2');
let discard3 = document.getElementById('discard3');
let discard4 = document.getElementById('discard4');
let discard5 = document.getElementById('discard5');
let discard6 = document.getElementById('discard6');
let discard7 = document.getElementById('discard7');
let discard8 = document.getElementById('discard8');
let discard9 = document.getElementById('discard9');
let discard10 = document.getElementById('discard10');
let discard11 = document.getElementById('discard11');
let discard12 = document.getElementById('discard12');
let lost1 = document.getElementById('lost1');
let lost2 = document.getElementById('lost2');
let lost3 = document.getElementById('lost3');
let lost4 = document.getElementById('lost4');
let lost5 = document.getElementById('lost5');
let lost6 = document.getElementById('lost6');
let lost7 = document.getElementById('lost7');
let lost8 = document.getElementById('lost8');
let lost9 = document.getElementById('lost9');
let lost10 = document.getElementById('lost10');
let lost11 = document.getElementById('lost11');
let lost12 = document.getElementById('lost12');
let active1 = document.getElementById('active1');
let active2 = document.getElementById('active2');
let active3 = document.getElementById('active3');
let active4 = document.getElementById('active4');
let active5 = document.getElementById('active5');
let active6 = document.getElementById('active6');

//buttons for play
let playCardsButton = document.getElementById('play-cards-button');
let discardButton = document.getElementById('discard-button');
let loseButton = document.getElementById('lose-button');
let activateButton = document.getElementById('activate-button');
let recoverDiscardButton = document.getElementById('recover-discard-button');
let shortRestButton = document.getElementById('short-rest-button');
let longRestButton = document.getElementById('long-rest-button');
let discardActiveCardButton = document.getElementById('discard-active-card');
let loseActiveCardButton = document.getElementById('lose-active-card');
let recoverLostCardButton = document.getElementById('recover-lost');
let loseCardFromRestButton = document.getElementById('lose-discard-button');
let rerollShortRestButton = document.getElementById('reroll-random-card-button');
let confirmCharacterButton = document.getElementById('confirm-character-button');
let togglePoison = document.getElementById('toggle-poison');
let toggleWounded = document.getElementById('toggle-wounded');
let toggleImmobilized = document.getElementById('toggle-immobilized');
let toggleDisarmed = document.getElementById('toggle-disarmed');
let toggleStunned = document.getElementById('toggle-stunned');
let toggleMuddled = document.getElementById('toggle-muddled');
let toggleInvisible = document.getElementById('toggle-invisible');
let toggleStrengthened = document.getElementById('toggle-strengthened');
let toggleBearPoison = document.getElementById('toggle-bear-poison');
let toggleBearWounded = document.getElementById('toggle-bear-wounded');
let toggleBearImmobilized = document.getElementById('toggle-bear-immobilized');
let toggleBearDisarmed = document.getElementById('toggle-bear-disarmed');
let toggleBearStunned = document.getElementById('toggle-bear-stunned');
let toggleBearMuddled = document.getElementById('toggle-bear-muddled');
let toggleBearInvisible = document.getElementById('toggle-bear-invisible');
let toggleBearStrengthened = document.getElementById('toggle-bear-strengthened');
let xpUp = document.getElementById('xp-up');
let xpDown = document.getElementById('xp-down');
let healButton = document.getElementById('heal');
let damageButton = document.getElementById('damage');
let lootUp = document.getElementById('loot-up');
let lootDown = document.getElementById('loot-down');
let levelUp = document.getElementById('level-up');
let levelDown = document.getElementById('level-down');
let confirmLevel = document.getElementById('confirm-level');
let goBack = document.getElementById('go-back1');
let goBack2 = document.getElementById('go-back2');
let loseHandCard = document.getElementById('lose-hand-card');
let loseDiscardButton = document.getElementById('lose-discard-button2');

//play cards variables
let playCard1 = "";
let playCard2 = "";

//counters
let cardCount = 0;
let discardCount = 0;
let cardCounter = document.getElementById('card-counter');
let cardsInPlayCounter = 0;
let chooseCardsNumber = document.getElementById('choose-cards-number');
let health = 0;
let xpCount = 0;
let maxHealth = 0;
let levelCounter = document.getElementById('level-counter');
let levelCount = 1;
let trackerSize = 1;
let trackerSizeCounter = document.getElementById('tracker-size');
let card1TrackerCounter = 0;
let card2TrackerCounter = 0;
let card3TrackerCounter = 0;
let card4TrackerCounter = 0;
let card5TrackerCounter = 0;
let card6TrackerCounter = 0;
let numberOfActiveCards = 0;
let bearHealth = 0;
let bearMaxHealth = 0;
let lootCount = 0;

//characters
let brute = document.getElementById('brute');
let cragheart = document.getElementById('cragheart');
let mindthief = document.getElementById('mindthief');
let spellweaver = document.getElementById('spellweaver');
let scoundrel = document.getElementById('scoundrel');
let tinkerer = document.getElementById('tinkerer');
let berserker = document.getElementById('berserker');
let beasttyrant = document.getElementById('beasttyrant');
let doomstalker = document.getElementById('doomstalker');
let elementalist = document.getElementById('elementalist');
let nightshroud = document.getElementById("nightshroud");
let plagueherald = document.getElementById('plagueherald');
let quartermaster = document.getElementById('quartermaster');
let sawbones = document.getElementById('sawbones');
let sunkeeper = document.getElementById('sunkeeper');
let soothsinger = document.getElementById('soothsinger');
let summoner = document.getElementById('summoner');
let bladeswarm = document.getElementById('bladeswarm');

//status effects
let poisoned = false;
let poisonedToken = document.getElementById('poisoned');
let wounded = false;
let woundedToken = document.getElementById('wounded');
let disarmed = false;
let disarmedToken = document.getElementById('disarmed');
let immobilized = false;
let immobilizedToken = document.getElementById('immobilized');
let stunned = false;
let stunnedToken = document.getElementById('stunned');
let muddled = false;
let muddledToken = document.getElementById('muddled');
let strengthened = false;
let strengthenedToken = document.getElementById('strengthened');
let invisible = false;
let invisibleToken = document.getElementById('invisible');
let bearPoisoned = false;
let bearPoisonedToken = document.getElementById('bear-poisoned');
let bearWounded = false;
let bearWoundedToken = document.getElementById('bear-wounded');
let bearDisarmed = false;
let bearDisarmedToken = document.getElementById('bear-disarmed');
let bearImmobilized = false;
let bearImmobilizedToken = document.getElementById('bear-immobilized');
let bearStunned = false;
let bearStunnedToken = document.getElementById('bear-stunned');
let bearMuddled = false;
let bearMuddledToken = document.getElementById('bear-muddled');
let bearStrengthened = false;
let bearStrengthenedToken = document.getElementById('bear-strengthened');
let bearInvisible = false;
let bearInvisibleToken = document.getElementById('bear-invisible');

let characterSelected = false;
var characterPortraits = document.querySelectorAll(".character");
for (var i = 0; i<characterPortraits.length; i++){
  (function (){
    var characterPortrait = characterPortraits[i];
    characterPortrait.onclick = () => {
      if (!isSelected(characterPortrait) && !characterSelected){
        //If no character is selected and the current character portrait is not selected, select the character and enable the confirm character button.
        characterSelected = true;
        characterPortrait.classList.add("character-selected");
        //not-without-more-selected means don't enable without more selected.
        confirmCharacterButton.classList.remove("not-without-more-selected");
      } else if(!isSelected(characterPortrait) && characterSelected){
        //If the current character portrait is not selected but a character is already selected, change the selected character to the current character.
        var charactersSelected = document.querySelectorAll(".character-selected");
        var selectedCharacter = charactersSelected[0];
        selectedCharacter.classList.remove("character-selected");
        characterPortrait.classList.add("character-selected");
      } else if(isSelected(characterPortrait) && characterSelected){
        //If the current character portrait is selected and a character is already selected, unselect the character and disable the confirm character button.
        characterSelected = false;
        characterPortrait.classList.remove("character-selected");
        confirmCharacterButton.classList.add("not-without-more-selected");
      }
    }
  //Call the funtion immediately to attach an onclick event to each character portrait.
  }).call(this,i);
}

function setCharacterCards(characterAbbr, handSize){
  flippedCard = "./"+characterAbbr+"/abilities/gh-"+characterAbbr+"-back.png";

  switch (handSize){
    case 8:
      cardHand9.classList.add("hiding");
      cardHand10.classList.add("hiding");
      cardHand11.classList.add("hiding");
      cardHand12.classList.add("hiding");
      break;
    case 9:
      cardHand10.classList.add("hiding");
      cardHand11.classList.add("hiding");
      cardHand12.classList.add("hiding");
      break;
    case 10:
      cardHand11.classList.add("hiding");
      cardHand12.classList.add("hiding");
      break;
    case 11:
      cardHand12.classList.add("hiding");
      break;
  }

  var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");

  // Load ability card images into deck selection table
  for (var i = 0; i<cardsToChooseFrom.length; i++){
    (function (){
      var cardToChooseFrom = cardsToChooseFrom[i];
      if((i < handSize+3) || (i >= 15)){
        cardToChooseFrom.innerHTML = "<img id ='"+`${cardToChooseFrom.id}`+"' class = 'chooseCards "+`${cardToChooseFrom.id}`+"' src = './"+characterAbbr+"/abilities/"+characterAbbr+i+".png' />";
      } else {
        cardToChooseFrom.innerHTML = "";
      }
    }).call(this,i);
  }
}

/*
Information to know for each character:
cardHand* refers to the cards shown in hand during play, hide the amount of cards that are not in use by each character.
cardToChooseFrom refers to the cards shown in the choose cards section, hide the amount of cards that are not in use by each character.
It assigns them to the images of the chosen character when the character is confirmed.
*/
function confirmCharacter(){
  if(characterSelected){

    if(cragheart.classList.contains("character-selected")){
      // Set ability cards for Cragheart
      selectedCharacter = "cragheart";
      setCookie("character", "cragheart", 365);
      document.getElementById("cragheart-perks").classList.remove("hiding");
      setCharacterCards("ch",11);
      handSize = 11;

      // Based on the level selected set the starting health
      maxHealth = 10 + (levelCount - 1) * 2;
      health = maxHealth;
    } else if(brute.classList.contains("character-selected")){
      // Set ability cards for Brute
      selectedCharacter = "brute";
      setCookie("character", "brute", 365);
      document.getElementById("brute-perks").classList.remove("hiding");
      setCharacterCards("br",10);
      handSize = 10;

      // Based on the level selected set the starting health
      maxHealth = 10 + (levelCount - 1) * 2;
      health = maxHealth;
    } else if(mindthief.classList.contains("character-selected")){
      // Set ability cards for Mindthief
      selectedCharacter = "mindthief";
      setCookie("character", "mindthief", 365);
      document.getElementById("mindthief-perks").classList.remove("hiding");
      setCharacterCards("mt",10);
      handSize = 10;

      // Based on the level selected set the starting health
      maxHealth = 6 + (levelCount - 1);
      health = maxHealth;
    } else if(scoundrel.classList.contains("character-selected")){
      // Set ability cards for Scoundrel
      selectedCharacter = "scoundrel";
      setCookie("character", "scoundrel", 365);
      document.getElementById("scoundrel-perks").classList.remove("hiding");
      setCharacterCards("sc",9);
      handSize = 9;

      // Based on the level selected set the starting health
      maxHealth = Math.floor(8 + (levelCount - 1) * 1.5);
      health = maxHealth;
    } else if(spellweaver.classList.contains("character-selected")){
      // Set ability cards for Spellweaver
      selectedCharacter = "spellweaver";
      setCookie("character", "spellweaver", 365);
      document.getElementById("spellweaver-perks").classList.remove("hiding");
      setCharacterCards("sw",8);
      handSize = 8;

      // Based on the level selected set the starting health
      maxHealth = 6 + (levelCount - 1);
      health = maxHealth;
    } else if(tinkerer.classList.contains("character-selected")){
      // Set ability cards for Tinkerer
      selectedCharacter = "tinkerer";
      setCookie("character", "tinkerer", 365);
      document.getElementById("tinkerer-perks").classList.remove("hiding");
      setCharacterCards("ti",12);
      handSize = 12;

      // Based on the level selected set the starting health
      maxHealth = Math.floor(8 + (levelCount - 1) * 1.5);
      health = maxHealth;
    } else if(berserker.classList.contains("character-selected")){
      // Set ability cards for Berserker "Lightning Bolts"
      selectedCharacter = "berserker";
      setCookie("character", "berserker", 365);
      document.getElementById("berserker-perks").classList.remove("hiding");
      setCharacterCards("be",10);
      handSize = 10;

      // Based on the level selected set the starting health
      maxHealth = 10 + (levelCount - 1) * 2;
      health = maxHealth;
    } else if(beasttyrant.classList.contains("character-selected")){
      // Set ability cards for Beast Tyrant "Two Minis"
      selectedCharacter = "beasttyrant";
      setCookie("character", "beasttyrant", 365);
      document.getElementById("beast-tyrant-perks").classList.remove("hiding");
      setCharacterCards("bt",10);
      handSize = 10;
      document.getElementById("bear-health").classList.remove("hiding");
      document.getElementById("bear-health-counter").classList.remove("hiding");
      document.getElementById("damage-bear").classList.remove("hiding");
      document.getElementById("heal-bear").classList.remove("hiding");
      document.getElementById("bear-status-effects").classList.remove("hiding");

      // Based on the level selected set the starting health
      maxHealth = 10 + (levelCount - 1) * 2;
      health = maxHealth;
    } else if(doomstalker.classList.contains("character-selected")){
      // Set ability cards for Doomstalker "Angry Face"
      selectedCharacter = "doomstalker";
      setCookie("character", "doomstalker", 365);
      document.getElementById("doomstalker-perks").classList.remove("hiding");
      setCharacterCards("ds",12);
      handSize = 12;

      // Based on the level selected set the starting health
      maxHealth = Math.floor(8 + (levelCount - 1) * 1.5);
      health = maxHealth;
    } else if(elementalist.classList.contains("character-selected")){
      // Set ability cards for Elementalist "Triangles"
      selectedCharacter = "elementalist";
      setCookie("character", "elementalist", 365);
      document.getElementById("elementalist-perks").classList.remove("hiding");
      setCharacterCards("el",10);
      handSize = 10;

      // Based on the level selected set the starting health
      maxHealth = 6 + (levelCount - 1);
      health = maxHealth;
    } else if(nightshroud.classList.contains("character-selected")){
      // Set ability cards for Nightshroud "Eclipse"
      selectedCharacter = "nightshroud";
      setCookie("character", "nightshroud", 365);
      document.getElementById("nightshroud-perks").classList.remove("hiding");
      setCharacterCards("ns",9);
      handSize = 9;

      // Based on the level selected set the starting health
      maxHealth = Math.floor(8 + (levelCount - 1) * 1.5);
      health = maxHealth;
    } else if(plagueherald.classList.contains("character-selected")){
      // Set ability cards for Plagueherald "Cthulhu"
      selectedCharacter = "plagueherald";
      setCookie("character", "plagueherald", 365);
      document.getElementById("plagueherald-perks").classList.remove("hiding");
      setCharacterCards("ph",11);
      handSize = 11;

      // Based on the level selected set the starting health
      maxHealth = 6 + (levelCount - 1);
      health = maxHealth;
    } else if(quartermaster.classList.contains("character-selected")){
      // Set ability cards for Quartermaster "Three Spears"
      selectedCharacter = "quartermaster";
      setCookie("character", "quartermaster", 365);
      document.getElementById("quartermaster-perks").classList.remove("hiding");
      setCharacterCards("qm",9);
      handSize = 9;

      // Based on the level selected set the starting health
      maxHealth = 10 + (levelCount - 1) * 2;
      health = maxHealth;
    } else if(sawbones.classList.contains("character-selected")){
      // Set ability cards for Sawbones "Saw"
      selectedCharacter = "sawbones";
      setCookie("character", "sawbones", 365);
      document.getElementById("sawbones-perks").classList.remove("hiding");
      setCharacterCards("sb",10);
      handSize = 10;

      // Based on the level selected set the starting health
      maxHealth = Math.floor(8 + (levelCount - 1) * 1.5);
      health = maxHealth;
    } else if(sunkeeper.classList.contains("character-selected")){
      // Set ability cards for Sunkeeper "Sun"
      selectedCharacter = "sunkeeper";
      setCookie("character", "sunkeeper", 365);
      document.getElementById("sunkeeper-perks").classList.remove("hiding");
      setCharacterCards("sk",11);
      handSize = 11;

      // Based on the level selected set the starting health
      maxHealth = 10 + (levelCount - 1) * 2;
      health = maxHealth;
    } else if(soothsinger.classList.contains("character-selected")){
      // Set ability cards for Soothsinger "Music Note"
      selectedCharacter = "soothsinger";
      setCookie("character", "soothsinger", 365);
      document.getElementById("soothsinger-perks").classList.remove("hiding");
      setCharacterCards("ss",9);
      handSize = 9;

      // Based on the level selected set the starting health
      maxHealth = 6 + (levelCount - 1);
      health = maxHealth;
    } else if(summoner.classList.contains("character-selected")){
      // Set ability cards for Summoner "Circles"
      selectedCharacter = "summoner";
      setCookie("character", "summoner", 365);
      document.getElementById("summoner-perks").classList.remove("hiding");
      setCharacterCards("su",9);
      handSize = 9;

      // Based on the level selected set the starting health
      maxHealth = Math.floor(8 + (levelCount - 1) * 1.5);
      health = maxHealth;
    } else if(bladeswarm.classList.contains("character-selected")){
      // Set ability cards for Bladeswarm "Envelope X"
      selectedCharacter = "bladeswarm";
      setCookie("character", "bladeswarm", 365);
      document.getElementById("bladeswarm-perks").classList.remove("hiding");
      setCharacterCards("bs",11);
      handSize = 11;

      // Based on the level selected set the starting health
      maxHealth = Math.floor(8 + (levelCount - 1) * 1.5);
      health = maxHealth;
    }
  
    // Default all the cards in the hand table to be the back of the card or selected card from cookie
    var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
    var hand = document.querySelectorAll(".hand");

    for (var a = 0; a<hand.length; a++){
      (function () {
        var handCardBack = hand[a];
        handCardBack.src = flippedCard;
      }).call(this,a);
    }

    // If the selected character matches the character from the cookie try to set up the hand with the saved cards from the cookie
    if (cookieCharacter === selectedCharacter){
      for (let i = 0; i<cookieHand.length; i++){
        for (let j = 0; j<cardsToChooseFrom.length; j++){
          if ((j < handSize+3) || (j >= 15)){
            tempFileName = cardsToChooseFrom[j].firstChild.src;
            tempFileName = cardsToChooseFrom[j].firstChild.src.split('/').pop();
            // If the filename in the select cards matches the file name from the cookie, load it into the hand
            if (cookieHand[i] === tempFileName){
              cardsToChooseFrom[j].firstChild.classList.add("add-border");
              let tempCardNum = i+1;
              let tempSelectedCardName = "card" + tempCardNum;
              let tempCard = document.getElementById(tempSelectedCardName);
              tempCard.classList.remove("flipped");
              imageFile = cardsToChooseFrom[j].firstChild.src;
              hand[i].src = imageFile;
              hand[i].classList.add(`${cardsToChooseFrom[j].id}`);
            }
          }
        }
      } 

      //cardCounter.innerHTML = cookieHand.length + "/" + cookieHand.length;
      cardCount = cookieHand.length;
      confirmHandButton.classList.remove("not-without-more-selected"); 
    } else {
      setCookie("hand", "", 365);
    }
    

    // Clear image from cards from the selection table higher than the level
    start = 15 + (levelCount - 1) * 2;
    for(var i = start; i<cardsToChooseFrom.length; i++){
      var cardToChooseFrom = cardsToChooseFrom[i];
      cardToChooseFrom.innerHTML = "";
    }

    // Hide level labels in the selection table higher than the level
    start = 3 + (levelCount - 1)
    var levelTitles = document.querySelectorAll(".level");
    for(var j = start; j<levelTitles.length; j++){
      var levelTitle = levelTitles[j];
      levelTitle.classList.add("hiding");
    }

    //After clicking the confirm character button, hide the character selection and level selection, and show the perk selection and go back button.
    //Also set a cookie for the level so that the user can refresh the page without losing their progress.
    goBack.classList.remove("hiding");
    document.getElementById("select-class-section").classList.add("hiding");
    document.getElementById("level-selection").classList.add("hiding");
    document.getElementById("perk-section").classList.remove("hiding");
    setCookie("level", `${levelCount}`, 365);
  }
}

confirmCharacterButton.onclick = () => {
  confirmCharacter();
}

//Functions for selecting what cards are in your hand. When you click on a card, it checks if it's already selected. 
// If it isn't, it adds a border to show that it's selected and adds the card to your hand. 
// If it is already selected, it removes the border and removes the card from your hand. 
// It also updates the counter to show how many cards you have selected out of your hand size, and if you have selected enough cards, it enables the confirm hand button.
var cards = document.querySelectorAll(".chooseCardsTable");
for (var i = 0; i < cards.length; i++) {
  (function () {
  var card = cards[i];
    card.onclick = (function () {
      if (!isSelected(card.firstChild) && cardCount<handSize){
        card.firstChild.classList.add("add-border");
        cardCount++;
        cardCounter.innerHTML = cardCount + "/"+ handSize;
        if(cardCount === handSize){
          confirmHandButton.classList.remove("not-without-more-selected")
        }
        if(cardHand1.classList.contains("flipped")){
            cardHand1.src = card.firstChild.src;
            cardHand1.classList.remove("flipped");
            cardHand1.classList.add(`${this.id}`);
          } else if (cardHand2.classList.contains("flipped")){
            cardHand2.src = card.firstChild.src;
            cardHand2.classList.remove("flipped");
            cardHand2.classList.add(`${this.id}`);
          } else if (cardHand3.classList.contains("flipped")){
            cardHand3.src = card.firstChild.src;
            cardHand3.classList.remove("flipped");
            cardHand3.classList.add(`${this.id}`);
          } else if (cardHand4.classList.contains("flipped")){
            cardHand4.src = card.firstChild.src;
            cardHand4.classList.remove("flipped");
            cardHand4.classList.add(`${this.id}`);
          } else if (cardHand5.classList.contains("flipped")){
            cardHand5.src = card.firstChild.src;
            cardHand5.classList.remove("flipped");
            cardHand5.classList.add(`${this.id}`);
          } else if (cardHand6.classList.contains("flipped")){
            cardHand6.src = card.firstChild.src;
            cardHand6.classList.remove("flipped");
            cardHand6.classList.add(`${this.id}`);
          } else if (cardHand7.classList.contains("flipped")){
            cardHand7.src = card.firstChild.src;
            cardHand7.classList.remove("flipped");
            cardHand7.classList.add(`${this.id}`);
          } else if (cardHand8.classList.contains("flipped")){
            cardHand8.src = card.firstChild.src;
            cardHand8.classList.remove("flipped");
            cardHand8.classList.add(`${this.id}`);
          } else if (cardHand9.classList.contains("flipped")){
            cardHand9.src = card.firstChild.src;
            cardHand9.classList.remove("flipped");
            cardHand9.classList.add(`${this.id}`);
          } else if (cardHand10.classList.contains("flipped")){
            cardHand10.src = card.firstChild.src;
            cardHand10.classList.remove("flipped");
            cardHand10.classList.add(`${this.id}`);
          } else if (cardHand11.classList.contains("flipped")){
            cardHand11.src = card.firstChild.src;
            cardHand11.classList.remove("flipped");
            cardHand11.classList.add(`${this.id}`);
          } else if (cardHand12.classList.contains("flipped")){
            cardHand12.src = card.firstChild.src;
            cardHand12.classList.remove("flipped");
            cardHand12.classList.add(`${this.id}`);
          }
      } else {
        card.firstChild.classList.remove("add-border");
        if(cardHand1.classList.contains(`${this.id}`)){
          flipCard(cardHand1);
          cardHand1.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand2.classList.contains(`${this.id}`)){
          flipCard(cardHand2);
          cardHand2.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand3.classList.contains(`${this.id}`)){
          flipCard(cardHand3);
          cardHand3.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand4.classList.contains(`${this.id}`)){
          flipCard(cardHand4);
          cardHand4.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand5.classList.contains(`${this.id}`)){
          flipCard(cardHand5);
          cardHand5.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand6.classList.contains(`${this.id}`)){
          flipCard(cardHand6);
          cardHand6.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand7.classList.contains(`${this.id}`)){
          flipCard(cardHand7);
          cardHand7.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand8.classList.contains(`${this.id}`)){
          flipCard(cardHand8);
          cardHand8.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand9.classList.contains(`${this.id}`)){
          flipCard(cardHand9);
          cardHand9.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand10.classList.contains(`${this.id}`)){
          flipCard(cardHand10);
          cardHand10.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand11.classList.contains(`${this.id}`)){
          flipCard(cardHand11);
          cardHand11.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand12.classList.contains(`${this.id}`)){
          flipCard(cardHand12);
          cardHand12.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        }
      }
    });
  }).call(this, i);
};

// Function to see if this card has been selected
const isSelected = card => {
  if (card.classList.contains("add-border") || card.classList.contains("discard-selected") || card.classList.contains("lost-selected") || card.classList.contains("active-selected") || card.classList.contains("character-selected")){
    return true;
  } else{
    return false;
  }
};

// Function to see if this card is flipped to the back
const isFlipped = card => {
  if (card.classList.contains("flipped")){
    return true;
  } else {
    return false;
  }
};

// Function to flip a card to the back
const flipCard = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("hand");
  card.classList.add("hiding");
  if(!handChosen){
  cardCount--;
  cardCounter.innerHTML = cardCount + "/"+ handSize;
}
};

const getCard1 = (card) => {
  playCard1 = card.src;
  flipCard(card);
};

const getCard2 = (card) => {
  playCard2 = card.src;
  flipCard(card);
};

const flipChosenCard = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("card-in-play");
};

const flipDiscard = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("discarded");
  card.classList.add("hiding");
}

const flipActive = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("active-card");
  card.classList.add("hiding");
}

const flipLost = card => {
  card.src = flippedCard;
  card.className = '';
  card.classList.add("flipped");
  card.classList.add("lost");
  card.classList.add("hiding");
}

//Confirm button variables and function
let confirmHandButton = document.getElementById('confirm-hand');
let initialTable = document.getElementById('initial-table');
let handChosen = false;
let blessesInDeck = document.getElementById('blessesInDeck');
let cursesInDeck = document.getElementById('cursesInDeck');

// The hand is complete, move to game play mode
confirmHandButton.onclick = () => {
  if(cardCount === handSize){
    initialTable.parentNode.removeChild(initialTable);
    document.getElementById('play-game').className = 'visible';
    document.getElementById('chosen-cards-title').setAttribute("style", "border: 1px solid white; text-align:center");
    document.getElementById('active-cards-title').setAttribute("style", "border: 1px solid white; text-align:center");
    document.getElementById('discarded-cards-title').setAttribute("style", "border: 1px solid white; text-align:center");
    document.getElementById('lost-cards-title').setAttribute("style", "border: 1px solid white; text-align:center");
    confirmHandButton.classList.add("hiding");
    goBack.classList.add("hiding");
    goBack2.classList.add("hiding");
    playCardsButton.classList.remove("hiding");
    playCardsButton.classList.add("visible");
    cardCount = 0;
    handChosen = true;
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    longRestButton.classList.add("not-without-more-cards");
    shortRestButton.classList.add("not-without-more-cards");
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
    loseCardFromRestButton.classList.add("not-unless-resting");
    rerollShortRestButton.classList.add("not-unless-resting");
    recoverDiscardButton.classList.add("not-without-more-selected");
    recoverLostCardButton.classList.add("not-without-more-selected");
    playCardsButton.classList.add("not-without-more-cards");
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
    healButton.classList.add("at-max");
    xpDown.classList.add("at-min");
    decreaseTrackerSize.classList.add("at-min");
    loseHandCard.classList.remove("hiding");
    acceptCardOpenButton.classList.remove("hiding");
    shuffleDeck();
    
    const cookieHand2 = [];
    var hand = document.querySelectorAll(".hand");
    for (var i = 0; i < handSize; i++) {
      let fileName = hand[i].src.split('/').pop();
      cookieHand2.push(fileName);
    }
    setCookie("hand", cookieHand2, 365);
  }
}

//function for clicking Hand
var hand = document.querySelectorAll(".hand");
for (var i = 0; i < hand.length; i++) {
  (function () {
  var handCard = hand[i];
    handCard.onclick = (function () {
      if (isFlipped(chosenCard1) && isFlipped(chosenCard2) && mustLoseCount<1){
      if(!isSelected(handCard) && handChosen === true && cardCount<2 && !isFlipped(handCard)){
        handCard.classList.add("add-border");
        cardCount++;
        if(cardCount === 2){
          playCardsButton.classList.remove("not-without-more-cards");
          loseHandCard.classList.add("not-without-more-selected");
        } else if(cardCount === 1){
          loseHandCard.classList.remove("not-without-more-selected");
        }
      } else if (isSelected(handCard)){
        handCard.classList.remove("add-border");
        cardCount--;
        playCardsButton.classList.add("not-without-more-cards");
        if (cardCount === 1){
          loseHandCard.classList.remove("not-without-more-selected");
        } else if(cardCount === 0){
          loseHandCard.classList.add("not-without-more-selected");
        }
      }
    } else {
      if(!isSelected(handCard) && handChosen === true && cardCount<1 && !isFlipped(handCard)){
        handCard.classList.add("add-border");
        cardCount++;
        loseHandCard.classList.remove("not-without-more-selected");
      } else if(!isSelected(handCard) && handChosen === true && cardCount === 1){
        for (var j = 0; j<hand.length; j++){
          if (hand[j].classList.contains("add-border")){
            hand[j].classList.remove("add-border");
            j = hand.length;
          }
        } handCard.classList.add("add-border");
      }else if (isSelected(handCard)){
        handCard.classList.remove("add-border");
        cardCount--;
        loseHandCard.classList.add("not-without-more-selected");
      }
    }
    });
  }).call(this, i);
};

playCardsButton.onclick = () => {
  if(cardCount === 2 && mustLoseCount<1 && !(shortResting) && !(longResting)){
    if(cardHand1.classList.contains("add-border")){
      getCard1(cardHand1);
    }else if(cardHand2.classList.contains("add-border")){
      getCard1(cardHand2);
    }else if(cardHand3.classList.contains("add-border")){
      getCard1(cardHand3);
    }else if(cardHand4.classList.contains("add-border")){
      getCard1(cardHand4);
    }else if(cardHand5.classList.contains("add-border")){
      getCard1(cardHand5);
    }else if(cardHand6.classList.contains("add-border")){
      getCard1(cardHand6);
    }else if(cardHand7.classList.contains("add-border")){
      getCard1(cardHand7);
    }else if(cardHand8.classList.contains("add-border")){
      getCard1(cardHand8);
    }else if(cardHand9.classList.contains("add-border")){
      getCard1(cardHand9);
    }else if(cardHand10.classList.contains("add-border")){
      getCard1(cardHand10);
    }else if(cardHand11.classList.contains("add-border")){
      getCard1(cardHand11);
    }
    if(cardHand2.classList.contains("add-border")){
      getCard2(cardHand2);
    }else if(cardHand3.classList.contains("add-border")){
      getCard2(cardHand3);
    }else if(cardHand4.classList.contains("add-border")){
      getCard2(cardHand4);
    }else if(cardHand5.classList.contains("add-border")){
      getCard2(cardHand5);
    }else if(cardHand6.classList.contains("add-border")){
      getCard2(cardHand6);
    }else if(cardHand7.classList.contains("add-border")){
      getCard2(cardHand7);
    }else if(cardHand8.classList.contains("add-border")){
      getCard2(cardHand8);
    }else if(cardHand9.classList.contains("add-border")){
      getCard2(cardHand9);
    }else if(cardHand10.classList.contains("add-border")){
      getCard2(cardHand10);
    }else if(cardHand11.classList.contains("add-border")){
      getCard2(cardHand11);
    }else if(cardHand12.classList.contains("add-border")){
      getCard2(cardHand12);
    }
    cardCount = 0;
    chosenCard1.src = playCard1;
    chosenCard1.classList.remove("flipped");
    chosenCard2.src = playCard2;
    chosenCard2.classList.remove("flipped");
    cardsInPlayCounter = 2;
    shortRestButton.classList.add("not-while-in-play");
    longRestButton.classList.add("not-while-in-play");
    loseCardFromRestButton.classList.add("not-while-in-play");
    rerollShortRestButton.classList.add("not-while-in-play");
    playCardsButton.classList.add("not-without-more-cards");
  }
};

let chosenCard1 = document.getElementById('chosen-card-1');
let chosenCard2 = document.getElementById('chosen-card-2');
let chosenCounter = 0;
chosenCard1.onclick = () => {
  if(chosenCounter < 1 && !isSelected(chosenCard1) && !isFlipped(chosenCard1) && mustLoseCount<1){
    chosenCard1.classList.add("add-border");
    chosenCounter++;
    discardButton.classList.remove("not-without-more-selected");
    loseButton.classList.remove("not-without-more-selected");
    activateButton.classList.remove("not-without-more-selected");
  } else if (chosenCounter === 1 && isSelected(chosenCard1)){
    chosenCard1.classList.remove("add-border");
    chosenCounter--;
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
  } else if (chosenCounter == 1 && !isSelected(chosenCard1) && !isFlipped(chosenCard1)){
    chosenCard2.classList.remove("add-border");
    chosenCard1.classList.add("add-border");
  }
};

chosenCard2.onclick = () => {
  if(chosenCounter < 1 && !isSelected(chosenCard2) && !isFlipped(chosenCard2) && mustLoseCount<1){
    chosenCard2.classList.add("add-border");
    chosenCounter++;
    discardButton.classList.remove("not-without-more-selected");
    loseButton.classList.remove("not-without-more-selected");
    activateButton.classList.remove("not-without-more-selected");
  } else if (chosenCounter == 1 && isSelected(chosenCard2)){
    chosenCard2.classList.remove("add-border");
    chosenCounter--;
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
  } else if (chosenCounter == 1 && !isSelected(chosenCard2) && !isFlipped(chosenCard2)){
    chosenCard1.classList.remove("add-border");
    chosenCard2.classList.add("add-border");
  }
};

discardButton.onclick = () => {
  if(chosenCard1.classList.contains("add-border") && mustLoseCount<1){
    if(discard1.classList.contains("flipped")){
      discard1.src = chosenCard1.src;
      discard1.classList.remove("hiding");
      discard1.classList.remove("flipped")
    } else if(discard2.classList.contains("flipped")){
      discard2.src = chosenCard1.src;
      discard2.classList.remove("hiding");
      discard2.classList.remove("flipped")
    } else if(discard3.classList.contains("flipped")){
      discard3.src = chosenCard1.src;
      discard3.classList.remove("hiding");
      discard3.classList.remove("flipped")
    } else if(discard4.classList.contains("flipped")){
      discard4.src = chosenCard1.src;
      discard4.classList.remove("hiding");
      discard4.classList.remove("flipped")
    } else if(discard5.classList.contains("flipped")){
      discard5.src = chosenCard1.src;
      discard5.classList.remove("hiding");
      discard5.classList.remove("flipped")
    } else if(discard6.classList.contains("flipped")){
      discard6.src = chosenCard1.src;
      discard6.classList.remove("hiding");
      discard6.classList.remove("flipped")
    } else if(discard7.classList.contains("flipped")){
      discard7.src = chosenCard1.src;
      discard7.classList.remove("hiding");
      discard7.classList.remove("flipped")
    } else if(discard8.classList.contains("flipped")){
      discard8.src = chosenCard1.src;
      discard8.classList.remove("hiding");
      discard8.classList.remove("flipped")
    } else if(discard9.classList.contains("flipped")){
      discard9.src = chosenCard1.src;
      discard9.classList.remove("hiding");
      discard9.classList.remove("flipped")
    } else if(discard10.classList.contains("flipped")){
      discard10.src = chosenCard1.src;
      discard10.classList.remove("hiding");
      discard10.classList.remove("flipped")
    } else if(discard11.classList.contains("flipped")){
      discard11.src = chosenCard1.src;
      discard11.classList.remove("hiding");
      discard11.classList.remove("flipped")
    } else if(discard12.classList.contains("flipped")){
      discard12.src = chosenCard1.src;
      discard12.classList.remove("hiding");
      discard12.classList.remove("flipped")
    }
    flipChosenCard(chosenCard1);
    chosenCounter--;
    discardCount++;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
    if(discardCount>1){
      shortRestButton.classList.remove("not-without-more-cards");
      longRestButton.classList.remove("not-without-more-cards");
    }
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
  }
  if(chosenCard2.classList.contains("add-border") && mustLoseCount<1){
    if(discard1.classList.contains("flipped")){
      discard1.src = chosenCard2.src;
      discard1.classList.remove("hiding");
      discard1.classList.remove("flipped")
    } else if(discard2.classList.contains("flipped")){
      discard2.src = chosenCard2.src;
      discard2.classList.remove("hiding");
      discard2.classList.remove("flipped")
    } else if(discard3.classList.contains("flipped")){
      discard3.src = chosenCard2.src;
      discard3.classList.remove("hiding");
      discard3.classList.remove("flipped")
    } else if(discard4.classList.contains("flipped")){
      discard4.src = chosenCard2.src;
      discard4.classList.remove("hiding");
      discard4.classList.remove("flipped")
    } else if(discard5.classList.contains("flipped")){
      discard5.src = chosenCard2.src;
      discard5.classList.remove("hiding");
      discard5.classList.remove("flipped")
    } else if(discard6.classList.contains("flipped")){
      discard6.src = chosenCard2.src;
      discard6.classList.remove("hiding");
      discard6.classList.remove("flipped")
    } else if(discard7.classList.contains("flipped")){
      discard7.src = chosenCard2.src;
      discard7.classList.remove("hiding");
      discard7.classList.remove("flipped")
    } else if(discard8.classList.contains("flipped")){
      discard8.src = chosenCard2.src;
      discard8.classList.remove("hiding");
      discard8.classList.remove("flipped")
    } else if(discard9.classList.contains("flipped")){
      discard9.src = chosenCard2.src;
      discard9.classList.remove("hiding");
      discard9.classList.remove("flipped")
    } else if(discard10.classList.contains("flipped")){
      discard10.src = chosenCard2.src;
      discard10.classList.remove("hiding");
      discard10.classList.remove("flipped")
    }
    else if(discard11.classList.contains("flipped")){
      discard11.src = chosenCard2.src;
      discard11.classList.remove("hiding");
      discard11.classList.remove("flipped")
    } else if(discard12.classList.contains("flipped")){
      discard12.src = chosenCard2.src;
      discard12.classList.remove("hiding");
      discard12.classList.remove("flipped")
    }
    flipChosenCard(chosenCard2);
    chosenCounter--;
    discardCount++
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");

    }
    if(discardCount>1){
      shortRestButton.classList.remove("not-without-more-cards");
      longRestButton.classList.remove("not-without-more-cards");
    }
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
      }
    };

loseButton.onclick = () => {
  if(chosenCard1.classList.contains("add-border") && mustLoseCount<1){
    if(chosenCard1.src.includes("acceptCards")){
      // Remove card completely from play as it is from another player
    } else if(lost1.classList.contains("flipped")){
      lost1.src = chosenCard1.src;
      lost1.classList.remove("hiding");
    lost1.classList.remove("flipped")
    } else if(lost2.classList.contains("flipped")){
      lost2.src = chosenCard1.src;
      lost2.classList.remove("hiding");
      lost2.classList.remove("flipped")
    } else if(lost3.classList.contains("flipped")){
      lost3.src = chosenCard1.src;
      lost3.classList.remove("hiding");
      lost3.classList.remove("flipped")
    } else if(lost4.classList.contains("flipped")){
      lost4.src = chosenCard1.src;
      lost4.classList.remove("hiding");
      lost4.classList.remove("flipped")
    } else if(lost5.classList.contains("flipped")){
      lost5.src = chosenCard1.src;
      lost5.classList.remove("hiding");
      lost5.classList.remove("flipped")
    } else if(lost6.classList.contains("flipped")){
      lost6.src = chosenCard1.src;
      lost6.classList.remove("hiding");
      lost6.classList.remove("flipped")
    } else if(lost7.classList.contains("flipped")){
      lost7.src = chosenCard1.src;
      lost7.classList.remove("hiding");
      lost7.classList.remove("flipped")
    } else if(lost8.classList.contains("flipped")){
      lost8.src = chosenCard1.src;
      lost8.classList.remove("hiding");
      lost8.classList.remove("flipped")
    } else if(lost9.classList.contains("flipped")){
      lost9.src = chosenCard1.src;
      lost9.classList.remove("hiding");
      lost9.classList.remove("flipped")
    } else if(lost10.classList.contains("flipped")){
      lost10.src = chosenCard1.src;
      lost10.classList.remove("hiding");
      lost10.classList.remove("flipped")
    } else if(lost11.classList.contains("flipped")){
      lost11.src = chosenCard1.src;
      lost11.classList.remove("hiding");
      lost11.classList.remove("flipped")
    } else if(lost12.classList.contains("flipped")){
      lost12.src = chosenCard1.src;
      lost12.classList.remove("hiding");
      lost12.classList.remove("flipped")
    }
    flipChosenCard(chosenCard1);
    chosenCounter--;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
  if(chosenCard2.classList.contains("add-border") && mustLoseCount<1){
    if(chosenCard2.src.includes("acceptCards")){
      // Remove card completely from play as it is from another player
    } else if(lost1.classList.contains("flipped")){
      lost1.src = chosenCard2.src;
      lost1.classList.remove("hiding");
      lost1.classList.remove("flipped")
    } else if(lost2.classList.contains("flipped")){
      lost2.src = chosenCard2.src;
      lost2.classList.remove("hiding");
      lost2.classList.remove("flipped")
    } else if(lost3.classList.contains("flipped")){
      lost3.src = chosenCard2.src;
      lost3.classList.remove("hiding");
      lost3.classList.remove("flipped")
    } else if(lost4.classList.contains("flipped")){
      lost4.src = chosenCard2.src;
      lost4.classList.remove("hiding");
      lost4.classList.remove("flipped")
    } else if(lost5.classList.contains("flipped")){
      lost5.src = chosenCard2.src;
      lost5.classList.remove("hiding");
      lost5.classList.remove("flipped")
    } else if(lost6.classList.contains("flipped")){
      lost6.src = chosenCard2.src;
      lost6.classList.remove("hiding");
      lost6.classList.remove("flipped")
    } else if(lost7.classList.contains("flipped")){
      lost7.src = chosenCard2.src;
      lost7.classList.remove("hiding");
      lost7.classList.remove("flipped")
    } else if(lost8.classList.contains("flipped")){
      lost8.src = chosenCard2.src;
      lost8.classList.remove("hiding");
      lost8.classList.remove("flipped")
    } else if(lost9.classList.contains("flipped")){
      lost9.src = chosenCard2.src;
      lost9.classList.remove("hiding");
      lost9.classList.remove("flipped")
    } else if(lost10.classList.contains("flipped")){
      lost10.src = chosenCard2.src;
      lost10.classList.remove("hiding");
      lost10.classList.remove("flipped")
    } else if(lost11.classList.contains("flipped")){
      lost11.src = chosenCard2.src;
      lost11.classList.remove("hiding");
      lost11.classList.remove("flipped")
    } else if(lost12.classList.contains("flipped")){
      lost12.src = chosenCard2.src;
      lost12.classList.remove("hiding");
      lost12.classList.remove("flipped")
    }
    flipChosenCard(chosenCard2);
    chosenCounter--;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
};

activateButton.onclick = () => {
  if(chosenCard1.classList.contains("add-border") && mustLoseCount<1 && numberOfActiveCards<6){
    if(active1.classList.contains("flipped")){
      active1.src = chosenCard1.src;
      active1.classList.remove("hiding");
      active1.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active2.classList.contains("flipped")){
      active2.src = chosenCard1.src;
      active2.classList.remove("hiding");
      active2.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active3.classList.contains("flipped")){
      active3.src = chosenCard1.src;
      active3.classList.remove("hiding");
      active3.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active4.classList.contains("flipped")){
      active4.src = chosenCard1.src;
      active4.classList.remove("hiding");
      active4.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active5.classList.contains("flipped")){
      active5.src = chosenCard1.src;
      active5.classList.remove("hiding");
      active5.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active6.classList.contains("flipped")){
      active6.src = chosenCard1.src;
      active6.classList.remove("hiding");
      active6.classList.remove("flipped");
      numberOfActiveCards++;
    }
    flipChosenCard(chosenCard1);
    chosenCounter--;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
  if(chosenCard2.classList.contains("add-border") && mustLoseCount<1 && numberOfActiveCards<6){
    if(active1.classList.contains("flipped")){
      active1.src = chosenCard2.src;
      active1.classList.remove("hiding");
      active1.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active2.classList.contains("flipped")){
      active2.src = chosenCard2.src;
      active2.classList.remove("hiding");
      active2.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active3.classList.contains("flipped")){
      active3.src = chosenCard2.src;
      active3.classList.remove("hiding");
      active3.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active4.classList.contains("flipped")){
      active4.src = chosenCard2.src;
      active4.classList.remove("hiding");
      active4.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active5.classList.contains("flipped")){
      active5.src = chosenCard2.src;
      active5.classList.remove("hiding");
      active5.classList.remove("flipped");
      numberOfActiveCards++;
    } else if(active6.classList.contains("flipped")){
      active6.src = chosenCard2.src;
      active6.classList.remove("hiding");
      active6.classList.remove("flipped");
      numberOfActiveCards++;
    }
    flipChosenCard(chosenCard2);
    chosenCounter--;
    cardsInPlayCounter--;
    if(cardsInPlayCounter === 0){
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
};

let discardsSelected = 0;
var discards = document.querySelectorAll(".discarded");
for (var i = 0; i < discards.length; i++) {
  (function () {
  var discardedCard = discards[i];
    discardedCard.onclick = (function () {
      if(!isSelected(discardedCard) && mustLoseCount<1 && discardsSelected === 0){
        discardedCard.classList.add("discard-selected");
        discardsSelected++;
        loseDiscardButton.classList.remove("not-without-more-selected");
        if(longResting){
          loseCardFromRestButton.classList.remove("not-unless-resting");
        } else {
          recoverDiscardButton.classList.remove("not-without-more-selected");
        }
      } else if (!isSelected(discardedCard) && discardsSelected === 1){
        var selectedDiscardedCards = document.querySelectorAll(".discard-selected");
        var selectedDiscardedCard = selectedDiscardedCards[0];
        selectedDiscardedCard.classList.remove("discard-selected");
        discardedCard.classList.add("discard-selected");
      } else if (isSelected(discardedCard) && discardsSelected === 1){
        discardedCard.classList.remove("discard-selected");
        discardsSelected--;
        loseDiscardButton.classList.add("not-without-more-selected");
        if(longResting){
          loseCardFromRestButton.classList.add("not-unless-resting");
        } else {
          recoverDiscardButton.classList.add("not-without-more-selected");
        }
      }
    });
  }).call(this, i);
};

let lostSelectedCounter = 0;
var lostCards = document.querySelectorAll(".lost");
for (var i = 0; i < lostCards.length; i++) {
  (function () {
  var lostCard = lostCards[i];
    lostCard.onclick = (function () {
      if(!isSelected(lostCard) && lostSelectedCounter === 0){
        lostCard.classList.add("lost-selected");
        lostSelectedCounter++
        recoverLostCardButton.classList.remove("not-without-more-selected");
      } else if(!isSelected(lostCard) && lostSelectedCounter === 1){
        var selectedLostCards = document.querySelectorAll(".lost-selected");
        var selectedLostCard = selectedLostCards[0];
        selectedLostCard.classList.remove("lost-selected");
        lostCard.classList.add("lost-selected");
      } else {
        lostCard.classList.remove("lost-selected");
        lostSelectedCounter--;
        recoverLostCardButton.classList.add("not-without-more-selected");
      }
    });
  }).call(this, i);
};


let activesSelected = 0;
var actives = document.querySelectorAll(".active-card");
for (var i = 0; i < actives.length; i++) {
  (function () {
  var activeCard = actives[i];
    activeCard.onclick = (function () {
      if(!isSelected(activeCard) && activesSelected === 0){
        activeCard.classList.add("active-selected");
        activesSelected++;
        discardActiveCardButton.className = "button";
        loseActiveCardButton.className = "button";
        createActiveTracker.className = "button";
        if(activeCard.classList.contains("has-tracker")){
          createActiveTracker.classList.add("not-without-more-selected");
        }
      } else if(!isSelected(activeCard) && activesSelected ===1){
        var activeCardsSelected = document.querySelectorAll(".active-selected");
        var activeCardSelected = activeCardsSelected[0];
        activeCard.classList.add("active-selected");
        activeCardSelected.classList.remove("active-selected");
        discardActiveCardButton.classList.remove("not-without-more-selected");
        loseActiveCardButton.classList.remove("not-without-more-selected");
        createActiveTracker.classList.remove("not-without-more-selected");
        if(activeCard.classList.contains("has-tracker")){
          createActiveTracker.classList.add("not-without-more-selected");
        }
      } else {
        activeCard.classList.remove("active-selected");
        activesSelected--;
        discardActiveCardButton.classList.add("not-without-more-selected");
        loseActiveCardButton.classList.add("not-without-more-selected");
        createActiveTracker.classList.add("not-without-more-selected");
      }
    });
  }).call(this, i);
};


const shortRestLoop = card => {
  if(!(card.classList.contains("flipped"))){
    card.classList.add("must-lose");
    card.insertAdjacentHTML("afterend", "<br/><p class = 'must-lose'>Must Lose</p>");
    mustLoseCount++
  }
}

// Short Rest button logic
let mustLose = false;
let shortResting = false;
let mustLoseCount = 0;
shortRestButton.onclick = () => {
  if(mustLoseCount === 0 && discardCount>1 && cardsInPlayCounter === 0 && !(longResting) && !(shortResting)){
    playCardsButton.classList.add("not-while-resting");
    shortRestButton.classList.add("not-while-resting");
    longRestButton.classList.add("not-while-resting");
    loseCardFromRestButton.classList.remove("not-unless-resting");
    rerollShortRestButton.classList.remove("not-unless-resting");
    recoverDiscardButton.classList.add("not-without-more-selected");
    loseDiscardButton.classList.add("not-without-more-selected");
    mustLose = true;
    shortResting = true;
    var discardedCards = document.querySelectorAll(".discarded");
    for (var i = 0; i<discardedCards.length; i++){
      var discardedCard = discardedCards[i];
      (function (){
        discardedCard.classList.remove("discard-selected");
      }).call(this,i);
    }
    let randomCard = Math.floor(Math.random()*discardCount);

    for (var i = randomCard; i<discardedCards.length; i++){
      var discardedCard = discardedCards[i];
      shortRestLoop(discardedCard);
      i=discardedCards.length;
    }
  }
}

// Long Rest card and status management logic
loseCardFromRestButton.onclick = () => {
  if(mustLoseCount>0 && mustLose && shortResting){
    playCardsButton.classList.remove("not-while-resting");
    shortRestButton.classList.remove("not-while-resting");
    longRestButton.classList.remove("not-while-resting");
    loseCardFromRestButton.classList.add("not-unless-resting");
    rerollShortRestButton.classList.remove("can-only-do-once");
    shortRestButton.classList.add("not-without-more-cards");
    longRestButton.classList.add("not-without-more-cards");
    rerollShortRestButton.classList.add("not-unless-resting");
    loseDiscardButton.classList.add("not-without-more-selected");
    mustLose = false;
    shortResting = false;
      var mustLoseCards = document.querySelectorAll(".must-lose");
        var mustLoseCard = mustLoseCards[0];
        (function (){
          for (var i = 0; i<lostCards.length; i++){
            var lostCard1 = lostCards[i];
            if(lostCard1.classList.contains("flipped")){
              lostCard1.classList.remove("flipped");
              lostCard1.classList.remove("hiding");
              lostCard1.src = mustLoseCard.src;
              i = lostCards.length;
            }
          }
        }).call(this, i);
        mustLoseCount = 0;
        discardCount = 0;
        discardsSelected = 0;
        mustLoseCard.nextSibling.remove();
        mustLoseCard.nextSibling.remove();
        flipDiscard(mustLoseCard);
        var discardedCards = document.querySelectorAll(".discarded");
        var cardsInHand = document.querySelectorAll(".hand");
        for (var j = 0; j<discardedCards.length; j++){
          (function (){
            var discardedCard = discardedCards[j];
            if(!(discardedCard.classList.contains("flipped"))){
              for (var k = 0; k<cardsInHand.length; k++){
                (function () {
                  var cardInHand = cardsInHand[k];
                  if(cardInHand.classList.contains("flipped")){
                    cardInHand.src = discardedCard.src;
                    cardInHand.classList.remove("flipped");
                    cardInHand.classList.remove("hiding");
                    flipDiscard(discardedCard);
                    k = cardsInHand.length;
                  }
                }).call(this,k);
            }
          }

        }).call(this,j);
      }
    } else if (longResting &&  discardsSelected === 1){
      playCardsButton.classList.remove("not-while-resting");
      shortRestButton.classList.remove("not-while-resting");
      longRestButton.classList.remove("not-while-resting");
      loseCardFromRestButton.classList.add("not-unless-resting");
      shortRestButton.classList.add("not-without-more-cards");
      longRestButton.classList.add("not-without-more-cards");
      loseDiscardButton.classList.add("not-without-more-selected");
      longResting = false;
      mustLose = false;
      var selectedDiscards = document.querySelectorAll(".discard-selected");
      var selectedDiscard = selectedDiscards[0];
      selectedDiscard.classList.remove("discard-selected");
      discardsSelected = 0;
      (function (){
        for (var i = 0; i<lostCards.length; i++){
          var lostCard1 = lostCards[i];
          if(lostCard1.classList.contains("flipped")){
            lostCard1.classList.remove("flipped");
            lostCard1.classList.remove("hiding");
            lostCard1.src = selectedDiscard.src;
            i = lostCards.length;
          }
        }
      }).call(this, i);
      discardCount = 0;
      Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
      }
      document.getElementById('choose-to-lose').remove();
      flipDiscard(selectedDiscard);
      var discardedCards = document.querySelectorAll(".discarded");
      var cardsInHand = document.querySelectorAll(".hand");
      for (var j = 0; j<discardedCards.length; j++){
        (function (){
          var discardedCard = discardedCards[j];
          if(!(discardedCard.classList.contains("flipped"))){
            for (var k = 0; k<cardsInHand.length; k++){
              (function () {
                var cardInHand = cardsInHand[k];
                if(cardInHand.classList.contains("flipped")){
                  cardInHand.src = discardedCard.src;
                  cardInHand.classList.remove("flipped");
                  cardInHand.classList.remove("hiding");
                  flipDiscard(discardedCard);
                  k = cardsInHand.length;
                }
              }).call(this,k);
          }
        }

      }).call(this,j);
    }
    if(poisoned){
      poisoned = false;
      poisonedToken.classList.add("hiding");
      healButton.classList.remove("poisoned");
      wounded = false;
      woundedToken.classList.add('hiding');
    } else if (health<maxHealth){
      health = health+2;
      healthCounter.innerHTML = health + "/" + maxHealth;
      wounded = false;
      woundedToken.classList.add('hiding');
      if(health>maxHealth){
        health = maxHealth;
        healthCounter.innerHTML = health + "/" + maxHealth;
      }
    }
  }
}

rerollShortRestButton.onclick = () => {
  if(mustLoseCount === 1){
    rerollShortRestButton.classList.add("can-only-do-once");
    health--;
    healButton.classList.remove("at-max");
    healthCounter.innerHTML =  health + "/" + maxHealth;
    var discardedCards = document.querySelectorAll(".discarded");
    for (var i = 0; i<discardedCards.length; i++){
      var discardedCard = discardedCards[i];
      (function (){
        discardedCard.classList.remove("discard-selected");
        if(discardedCard.classList.contains("must-lose")){
          discardedCard.classList.add("unloseable");
          i = discardedCards.length;
          discardedCard.classList.remove("must-lose");
          discardedCard.nextSibling.remove();
          discardedCard.nextSibling.remove();
        }
      }).call(this,i);
    }
    var randomCard2 = Math.floor(Math.random()*discardCount);
    var unloseable = document.querySelectorAll(".unloseable");
    var unloseableCard = unloseable[0];
    unloseableCard.classList.remove("unloseable");
    while (unloseableCard === discardedCards[randomCard2]){
      randomCard2 = Math.floor(Math.random()*discardCount);
    }

    for (var i = randomCard2; i<discardedCards.length; i++){
      var discardedCard = discardedCards[i];
      shortRestLoop(discardedCard);
      i=discardedCards.length;
    }
  }
}


let longResting = false;
longRestButton.onclick = () => {
  if(discardCount>1 && mustLoseCount === 0 && cardsInPlayCounter === 0 && !(shortResting) && !(longResting)){
    document.getElementById('discard-table').insertAdjacentHTML("beforebegin", "<p id = 'choose-to-lose'>Choose One Card to Lose</p><br/>");
    playCardsButton.classList.add("not-while-resting");
    shortRestButton.classList.add("not-while-resting");
    longRestButton.classList.add("not-while-resting");
    recoverDiscardButton.classList.add("not-without-more-selected");
    mustLose = true;
    longResting = true;
    if (discardsSelected === 1){
      loseCardFromRestButton.classList.remove("not-unless-resting");
    }
  }
}

recoverDiscardButton.onclick = () => {
  if(!shortResting && !longResting && !mustLose && discardsSelected>0){
    discardsSelected = 0;
    discardCount--;
    recoverDiscardButton.classList.add("not-without-more-selected");
    loseDiscardButton.classList.add("not-without-more-selected");
    var selectedDiscards = document.querySelectorAll(".discard-selected");
    var selectedDiscard = selectedDiscards[0];
    selectedDiscard.classList.remove("discard-selected");
    var cardsInHand = document.querySelectorAll(".hand");
    for (var i = 0; i<cardsInHand.length; i++){
      (function () {
        var cardInHand = cardsInHand[i];
        if(cardInHand.classList.contains("flipped")){
          cardInHand.src = selectedDiscard.src;
          cardInHand.classList.remove("flipped");
          cardInHand.classList.remove("hiding");
          flipDiscard(selectedDiscard);
          i = cardsInHand.length;
        }
      }).call(this,i);
    }
    if(discardCount<2){
      shortRestButton.classList.add("not-without-more-cards");
      longRestButton.classList.add("not-without-more-cards");
    }
  }
}

discardActiveCardButton.onclick = () => {
  if(!mustLose && activesSelected === 1){
    var activeCardsSelected = document.querySelectorAll(".active-selected");
    var activeCardSelected = activeCardsSelected[0];
    for (var i = 0; i<discards.length; i++){
      var discardedCard = discards[i];
      if(discardedCard.classList.contains("flipped")){
        discardedCard.src = activeCardSelected.src;
        discardedCard.classList.remove("flipped");
        discardedCard.classList.remove("hiding");
        i = discards.length;
        flipActive(activeCardSelected);
        activesSelected = 0;
        numberOfActiveCards--;
        discardCount++;
      }
    }
    if(discardCount>1){
      shortRestButton.classList.remove("not-without-more-cards");
      longRestButton.classList.remove("not-without-more-cards");
    }
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
  }
}

loseActiveCardButton.onclick = () => {
  if(activesSelected === 1){
    var activeCardsSelected = document.querySelectorAll(".active-selected");
    var activeCardSelected = activeCardsSelected[0];
    for (var i = 0; i<lostCards.length; i++){
      var lostCard = lostCards[i];
      if(lostCard.classList.contains("flipped")){
        lostCard.src = activeCardSelected.src;
        lostCard.classList.remove("flipped");
        lostCard.classList.remove("hiding");
        i = lostCards.length;
        flipActive(activeCardSelected);
        activesSelected = 0;
        numberOfActiveCards--;
      }
    }
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
  }
}

recoverLostCardButton.onclick = () => {
  if(!shortResting && !longResting && !mustLose && lostSelectedCounter>0){
    lostSelectedCounter = 0;
    var selectedLostCards = document.querySelectorAll(".lost-selected");
    var selectedLostCard = selectedLostCards[0];
    recoverLostCardButton.classList.add("not-without-more-selected");
    selectedLostCard.classList.remove("lost-selected");
    var cardsInHand = document.querySelectorAll(".hand");
      for (var i = 0; i<cardsInHand.length; i++){
        (function () {
          var cardInHand = cardsInHand[i];
          if(cardInHand.classList.contains("flipped")){
            cardInHand.src = selectedLostCard.src;
            cardInHand.classList.remove("flipped");
            cardInHand.classList.remove("hiding");
            flipLost(selectedLostCard);
            i = cardsInHand.length;
          }
        }).call(this,i);
      }
    }
}

togglePoison.onclick = () =>{
  if(!poisoned){
    poisoned = true;
    poisonedToken.classList.remove('hiding');
    healButton.classList.add("poisoned");
  }else{
    poisoned = false;
    poisonedToken.classList.add('hiding');
    healButton.classList.remove("poisoned");
  }
}

toggleBearPoison.onclick = () =>{
  if(!bearPoisoned){
    bearPoisoned = true;
    bearPoisonedToken.classList.remove('hiding');
    healBearButton.classList.add("poisoned");
  }else{
    bearPoisoned = false;
    bearPoisonedToken.classList.add('hiding');
    healBearButton.classList.remove("poisoned");
  }
}

toggleWounded.onclick = () =>{
  if(!wounded){
    wounded = true;
    woundedToken.classList.remove('hiding');
  }else{
    wounded = false;
    woundedToken.classList.add('hiding');
  }
}

toggleBearWounded.onclick = () =>{
  if(!bearWounded){
    bearWounded = true;
    bearWoundedToken.classList.remove('hiding');
  }else{
    bearWounded = false;
    bearWoundedToken.classList.add('hiding');
  }
}

toggleImmobilized.onclick = () =>{
  if(!immobilized){
    immobilized = true;
    immobilizedToken.classList.remove('hiding');
  }else{
    immobilized = false;
    immobilizedToken.classList.add('hiding');
  }
}

toggleBearImmobilized.onclick = () =>{
  if(!bearImmobilized){
    bearImmobilized = true;
    bearImmobilizedToken.classList.remove('hiding');
  }else{
    bearImmobilized = false;
    bearImmobilizedToken.classList.add('hiding');
  }
}

toggleDisarmed.onclick = () =>{
  if(!disarmed){
    disarmed = true;
    disarmedToken.classList.remove('hiding');
  }else{
    disarmed = false;
    disarmedToken.classList.add('hiding');
  }
}

toggleBearDisarmed.onclick = () =>{
  if(!bearDisarmed){
    bearDisarmed = true;
    bearDisarmedToken.classList.remove('hiding');
  }else{
    bearDisarmed = false;
    bearDisarmedToken.classList.add('hiding');
  }
}

toggleStunned.onclick = () =>{
  if(!stunned){
    stunned = true;
    stunnedToken.classList.remove('hiding');
  }else{
    stunned = false;
    stunnedToken.classList.add('hiding');
  }
}

toggleBearStunned.onclick = () =>{
  if(!bearStunned){
    bearStunned = true;
    bearStunnedToken.classList.remove('hiding');
  }else{
    bearStunned = false;
    bearStunnedToken.classList.add('hiding');
  }
}

toggleMuddled.onclick = () =>{
  if(!muddled){
    muddled = true;
    muddledToken.classList.remove('hiding');
  }else{
    muddled = false;
    muddledToken.classList.add('hiding');
  }
}

toggleBearMuddled.onclick = () =>{
  if(!bearMuddled){
    bearMuddled = true;
    bearMuddledToken.classList.remove('hiding');
  }else{
    bearMuddled = false;
    bearMuddledToken.classList.add('hiding');
  }
}

toggleInvisible.onclick = () =>{
  if(!invisible){
    invisible = true;
    invisibleToken.classList.remove('hiding');
  }else{
    invisible = false;
    invisibleToken.classList.add('hiding');
  }
}

toggleBearInvisible.onclick = () =>{
  if(!bearInvisible){
    bearInvisible = true;
    bearInvisibleToken.classList.remove('hiding');
  }else{
    bearInvisible = false;
    bearInvisibleToken.classList.add('hiding');
  }
}

toggleStrengthened.onclick = () =>{
  if(!strengthened){
    strengthened = true;
    strengthenedToken.classList.remove('hiding');
  }else{
    strengthened = false;
    strengthenedToken.classList.add('hiding');
  }
}

toggleBearStrengthened.onclick = () =>{
  if(!bearStrengthened){
    bearStrengthened = true;
    bearStrengthenedToken.classList.remove('hiding');
  }else{
    bearStrengthened = false;
    bearStrengthenedToken.classList.add('hiding');
  }
}

let healthCounter = document.getElementById('health-counter');
let xpCounter = document.getElementById('xp-counter');
let bearHealthCounter = document.getElementById('bear-health-counter');
let lootCounter = document.getElementById('loot-counter');


xpUp.onclick = () => {
  xpCount++;
  xpCounter.innerHTML = xpCount;
  xpDown.classList.remove("at-min");
}

xpDown.onclick = () => {
  if(xpCount>0){
    xpCount--;
    xpCounter.innerHTML = xpCount;
    if(xpCount === 0){
      xpDown.classList.add("at-min");
    }
  }
}

lootUp.onclick = () => {
  lootCount++;
  lootCounter.innerHTML = lootCount;
  lootDown.classList.remove("at-min");
}

lootDown.onclick = () => {
  if(lootCount>0){
    lootCount--;
    lootCounter.innerHTML = lootCount;
    if(lootCount === 0){
      lootDown.classList.add("at-min");
    }
  }
}

healButton.onclick = () => {
  if(!poisoned && health<maxHealth){
    health++;
    healthCounter.innerHTML =  health + "/" + maxHealth;
    damageButton.classList.remove("at-min");
    wounded = false;
    woundedToken.classList.add('hiding');
    if(health === maxHealth){
      healButton.classList.add("at-max");
    }
  }
}

damageButton.onclick = () =>{
  if(health>0){
    health--;
    healthCounter.innerHTML =  health + "/" + maxHealth;
    healButton.classList.remove("at-max");
    if(health === 0){
      damageButton.classList.add("at-min");
    }
  }
}

let healBearButton = document.getElementById("heal-bear");
let damageBearButton = document.getElementById("damage-bear");

healBearButton.onclick = () => {
  if(!poisoned && bearHealth<bearMaxHealth){
    bearHealth++;
    bearHealthCounter.innerHTML =  "Bear Health<br/>"+bearHealth + "/" + bearMaxHealth;
    damageBearButton.classList.remove("at-min");
    bearWounded = false;
    bearWoundedToken.classList.add('hiding');
    if(bearHealth === bearMaxHealth){
      healBearButton.classList.add("at-max");
    }
  }
}

damageBearButton.onclick = () =>{
  if(bearHealth>0){
    bearHealth--;
    bearHealthCounter.innerHTML =  "Bear Health<br/>"+bearHealth + "/" + bearMaxHealth;
    healBearButton.classList.remove("at-max");
    if(bearHealth === 0){
      damageBearButton.classList.add("at-min");
    }
  }
}

levelUp.onclick = () => {
  if(levelCount<9){
    levelCount++
    levelCounter.innerHTML = "Level: "+levelCount;
    levelDown.classList.remove("at-min");
    if(levelCount === 9){
      levelUp.classList.add("at-max");
    }
  }
}

levelDown.onclick = () =>{
  if(levelCount>1){
    levelCount--
    levelCounter.innerHTML = "Level: "+levelCount;
    levelUp.classList.remove("at-max");
    if(levelCount === 1){
      levelDown.classList.add("at-min");
    }
  }
}


let createActiveTracker = document.getElementById('create-active-tracker');
let increaseTrackerSize = document.getElementById('increase-tracker-size');
let decreaseTrackerSize = document.getElementById('decrease-tracker-size');
let tracker11 = document.getElementById('tracker1-1');
let tracker12 = document.getElementById('tracker1-2');
let tracker13 = document.getElementById('tracker1-3');
let tracker14 = document.getElementById('tracker1-4');
let tracker15 = document.getElementById('tracker1-5');
let tracker16 = document.getElementById('tracker1-6');
let tracker21 = document.getElementById('tracker2-1');
let tracker22 = document.getElementById('tracker2-2');
let tracker23 = document.getElementById('tracker2-3');
let tracker24 = document.getElementById('tracker2-4');
let tracker25 = document.getElementById('tracker2-5');
let tracker26 = document.getElementById('tracker2-6');
let tracker31 = document.getElementById('tracker3-1');
let tracker32 = document.getElementById('tracker3-2');
let tracker33 = document.getElementById('tracker3-3');
let tracker34 = document.getElementById('tracker3-4');
let tracker35 = document.getElementById('tracker3-5');
let tracker36 = document.getElementById('tracker3-6');
let tracker41 = document.getElementById('tracker4-1');
let tracker42 = document.getElementById('tracker4-2');
let tracker43 = document.getElementById('tracker4-3');
let tracker44 = document.getElementById('tracker4-4');
let tracker45 = document.getElementById('tracker4-5');
let tracker46 = document.getElementById('tracker4-6');
let tracker51 = document.getElementById('tracker5-1');
let tracker52 = document.getElementById('tracker5-2');
let tracker53 = document.getElementById('tracker5-3');
let tracker54 = document.getElementById('tracker5-4');
let tracker55 = document.getElementById('tracker5-5');
let tracker56 = document.getElementById('tracker5-6');
let tracker61 = document.getElementById('tracker6-1');
let tracker62 = document.getElementById('tracker6-2');
let tracker63 = document.getElementById('tracker6-3');
let tracker64 = document.getElementById('tracker6-4');
let tracker65 = document.getElementById('tracker6-5');
let tracker66 = document.getElementById('tracker6-6');

increaseTrackerSize.onclick = () => {
  if(trackerSize<6){
    trackerSize++;
    trackerSizeCounter.innerHTML = "Tracker Size: "+ trackerSize;
    decreaseTrackerSize.classList.remove("at-min");
    if(trackerSize === 6){
      increaseTrackerSize.classList.add("at-max");
    }
  }
}

decreaseTrackerSize.onclick = () => {
  if(trackerSize>1){
    trackerSize--;
    trackerSizeCounter.innerHTML = "Tracker Size: "+ trackerSize;
    increaseTrackerSize.classList.remove("at-max");
    if(trackerSize === 1){
      decreaseTrackerSize.classList.add("at-min");
    }
  }
}

createActiveTracker.onclick = () => {
  var activeCardsWithBorder = document.querySelectorAll(".active-selected");
  activeCardWithBorder = activeCardsWithBorder[0];
  if(!(activeCardWithBorder.classList.contains("has-tracker"))){
  switch(trackerSize){
    case 1:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
           activeCard.classList.remove("active-selected");
           activeCard.classList.add("has-tracker");
           switch (i){
            case 0:
              var card1Trackers = document.querySelectorAll(".tracker-button1");
              var card1Tracker1 = card1Trackers[0];
              card1Tracker1.classList.remove("invisible");
              card1TrackerCounter = 1;
              break;
            case 1:
              var card2Trackers = document.querySelectorAll(".tracker-button2");
              var card2Tracker1 = card2Trackers[0];
              card2Tracker1.classList.remove("invisible");
              card2TrackerCounter = 1;
              break;
            case 2:
              var card3Trackers = document.querySelectorAll(".tracker-button3");
              var card3Tracker1 = card3Trackers[0];
              card3Tracker1.classList.remove("invisible");
              card3TrackerCounter = 1;
              break;
            case 3:
              var card4Trackers = document.querySelectorAll(".tracker-button4");
              var card4Tracker1 = card4Trackers[0];
              card4Tracker1.classList.remove("invisible");
              card4TrackerCounter = 1;
              break;
            case 4:
              var card5Trackers = document.querySelectorAll(".tracker-button5");
              var card5Tracker1 = card5Trackers[0];
              card5Tracker1.classList.remove("invisible");
              card5TrackerCounter = 1;
              break;
            case 5:
              var card6Trackers = document.querySelectorAll(".tracker-button6");
              var card6Tracker1 = card6Trackers[0];
              card6Tracker1.classList.remove("invisible");
              card6TrackerCounter = 1;
              break;
           }
          }
        }).call(this,i);
      }
      break;
    case 2:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
            activeCard.classList.remove("active-selected");
            activeCard.classList.add("has-tracker");
            switch (i){
             case 0:
               var card1Trackers = document.querySelectorAll(".tracker-button1");
               for(var j = 0; j<card1Trackers.length; j++){
                 (function () {
                   var card1Tracker = card1Trackers[j];
                   if(j<2){
                     card1Tracker.classList.remove("invisible");
                     card1TrackerCounter = 2;
                   }
                 }).call(this, j);
               }
               break;
             case 1:
             var card2Trackers = document.querySelectorAll(".tracker-button2");
             for(var j = 0; j<card2Trackers.length; j++){
               (function () {
                 var card2Tracker = card2Trackers[j];
                 if(j<2){
                   card2Tracker.classList.remove("invisible");
                   card2TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
             case 2:
             var card3Trackers = document.querySelectorAll(".tracker-button3");
             for(var j = 0; j<card3Trackers.length; j++){
               (function () {
                 var card3Tracker = card3Trackers[j];
                 if(j<2){
                   card3Tracker.classList.remove("invisible");
                   card3TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
             case 3:
             var card4Trackers = document.querySelectorAll(".tracker-button4");
             for(var j = 0; j<card4Trackers.length; j++){
               (function () {
                 var card4Tracker = card4Trackers[j];
                 if(j<2){
                   card4Tracker.classList.remove("invisible");
                   card4TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
             case 4:
             var card5Trackers = document.querySelectorAll(".tracker-button5");
             for(var j = 0; j<card5Trackers.length; j++){
               (function () {
                 var card5Tracker = card5Trackers[j];
                 if(j<2){
                   card5Tracker.classList.remove("invisible");
                   card5TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
             case 5:
             var card6Trackers = document.querySelectorAll(".tracker-button6");
             for(var j = 0; j<card6Trackers.length; j++){
               (function () {
                 var card6Tracker = card6Trackers[j];
                 if(j<2){
                   card6Tracker.classList.remove("invisible");
                   card6TrackerCounter = 2;
                 }
               }).call(this, j);
             }
               break;
            }
          }
        }).call(this,i);
      }
      break;
    case 3:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
            activeCard.classList.remove("active-selected");
            activeCard.classList.add("has-tracker");
            switch (i){
             case 0:
               var card1Trackers = document.querySelectorAll(".tracker-button1");
               for(var j = 0; j<card1Trackers.length; j++){
                 (function () {
                   var card1Tracker = card1Trackers[j];
                   if(j<3){
                     card1Tracker.classList.remove("invisible");
                     card1TrackerCounter = 3;
                   }
                 }).call(this, j);
               }
               break;
             case 1:
             var card2Trackers = document.querySelectorAll(".tracker-button2");
             for(var j = 0; j<card2Trackers.length; j++){
               (function () {
                 var card2Tracker = card2Trackers[j];
                 if(j<3){
                   card2Tracker.classList.remove("invisible");
                   card2TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
             case 2:
             var card3Trackers = document.querySelectorAll(".tracker-button3");
             for(var j = 0; j<card3Trackers.length; j++){
               (function () {
                 var card3Tracker = card3Trackers[j];
                 if(j<3){
                   card3Tracker.classList.remove("invisible");
                   card3TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
             case 3:
             var card4Trackers = document.querySelectorAll(".tracker-button4");
             for(var j = 0; j<card4Trackers.length; j++){
               (function () {
                 var card4Tracker = card4Trackers[j];
                 if(j<3){
                   card4Tracker.classList.remove("invisible");
                   card4TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
             case 4:
             var card5Trackers = document.querySelectorAll(".tracker-button5");
             for(var j = 0; j<card5Trackers.length; j++){
               (function () {
                 var card5Tracker = card5Trackers[j];
                 if(j<3){
                   card5Tracker.classList.remove("invisible");
                   card5TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
             case 5:
             var card6Trackers = document.querySelectorAll(".tracker-button6");
             for(var j = 0; j<card6Trackers.length; j++){
               (function () {
                 var card6Tracker = card6Trackers[j];
                 if(j<3){
                   card6Tracker.classList.remove("invisible");
                   card6TrackerCounter = 3;
                 }
               }).call(this, j);
             }
               break;
            }
          }
        }).call(this,i);
      }
      break;
    case 4:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
          activeCard.classList.remove("active-selected");
          activeCard.classList.add("has-tracker");
          switch (i){
           case 0:
             var card1Trackers = document.querySelectorAll(".tracker-button1");
             for(var j = 0; j<card1Trackers.length; j++){
               (function () {
                 var card1Tracker = card1Trackers[j];
                 if(j<4){
                   card1Tracker.classList.remove("invisible");
                   card1TrackerCounter = 4;
                 }
               }).call(this, j);
             }
             break;
           case 1:
           var card2Trackers = document.querySelectorAll(".tracker-button2");
           for(var j = 0; j<card2Trackers.length; j++){
             (function () {
               var card2Tracker = card2Trackers[j];
               if(j<4){
                 card2Tracker.classList.remove("invisible");
                 card2TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
           case 2:
           var card3Trackers = document.querySelectorAll(".tracker-button3");
           for(var j = 0; j<card3Trackers.length; j++){
             (function () {
               var card3Tracker = card3Trackers[j];
               if(j<4){
                 card3Tracker.classList.remove("invisible");
                 card3TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
           case 3:
           var card4Trackers = document.querySelectorAll(".tracker-button4");
           for(var j = 0; j<card4Trackers.length; j++){
             (function () {
               var card4Tracker = card4Trackers[j];
               if(j<4){
                 card4Tracker.classList.remove("invisible");
                 card4TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
           case 4:
           var card5Trackers = document.querySelectorAll(".tracker-button5");
           for(var j = 0; j<card5Trackers.length; j++){
             (function () {
               var card5Tracker = card5Trackers[j];
               if(j<4){
                 card5Tracker.classList.remove("invisible");
                 card5TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
           case 5:
           var card6Trackers = document.querySelectorAll(".tracker-button6");
           for(var j = 0; j<card6Trackers.length; j++){
             (function () {
               var card6Tracker = card6Trackers[j];
               if(j<4){
                 card6Tracker.classList.remove("invisible");
                 card6TrackerCounter = 4;
               }
             }).call(this, j);
           }
             break;
          }
          }
        }).call(this,i);
      }
      break;
    case 5:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
            activeCard.classList.remove("active-selected");
            activeCard.classList.add("has-tracker");
            switch (i){
             case 0:
               var card1Trackers = document.querySelectorAll(".tracker-button1");
               for(var j = 0; j<card1Trackers.length; j++){
                 (function () {
                   var card1Tracker = card1Trackers[j];
                   if(j<5){
                     card1Tracker.classList.remove("invisible");
                     card1TrackerCounter = 5;
                   }
                 }).call(this, j);
               }
               break;
             case 1:
             var card2Trackers = document.querySelectorAll(".tracker-button2");
             for(var j = 0; j<card2Trackers.length; j++){
               (function () {
                 var card2Tracker = card2Trackers[j];
                 if(j<5){
                   card2Tracker.classList.remove("invisible");
                   card2TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
             case 2:
             var card3Trackers = document.querySelectorAll(".tracker-button3");
             for(var j = 0; j<card3Trackers.length; j++){
               (function () {
                 var card3Tracker = card3Trackers[j];
                 if(j<5){
                   card3Tracker.classList.remove("invisible");
                   card3TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
             case 3:
             var card4Trackers = document.querySelectorAll(".tracker-button4");
             for(var j = 0; j<card4Trackers.length; j++){
               (function () {
                 var card4Tracker = card4Trackers[j];
                 if(j<5){
                   card4Tracker.classList.remove("invisible");
                   card4TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
             case 4:
             var card5Trackers = document.querySelectorAll(".tracker-button5");
             for(var j = 0; j<card5Trackers.length; j++){
               (function () {
                 var card5Tracker = card5Trackers[j];
                 if(j<5){
                   card5Tracker.classList.remove("invisible");
                   card5TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
             case 5:
             var card6Trackers = document.querySelectorAll(".tracker-button6");
             for(var j = 0; j<card6Trackers.length; j++){
               (function () {
                 var card6Tracker = card6Trackers[j];
                 if(j<5){
                   card6Tracker.classList.remove("invisible");
                   card6TrackerCounter = 5;
                 }
               }).call(this, j);
             }
               break;
            }
          }
        }).call(this,i);
      }
      break;
    case 6:
      var activeCards = document.querySelectorAll(".active-card");
      for (var i = 0; i<activeCards.length; i++){
        (function (){
          var activeCard = activeCards[i];
          if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
            activeCard.classList.remove("active-selected");
            activeCard.classList.add("has-tracker");
            switch (i){
             case 0:
               var card1Trackers = document.querySelectorAll(".tracker-button1");
               for(var j = 0; j<card1Trackers.length; j++){
                 (function () {
                   var card1Tracker = card1Trackers[j];
                   if(j<6){
                     card1Tracker.classList.remove("invisible");
                     card1TrackerCounter = 6;
                   }
                 }).call(this, j);
               }
               break;
             case 1:
             var card2Trackers = document.querySelectorAll(".tracker-button2");
             for(var j = 0; j<card2Trackers.length; j++){
               (function () {
                 var card2Tracker = card2Trackers[j];
                 if(j<6){
                   card2Tracker.classList.remove("invisible");
                   card2TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
             case 2:
             var card3Trackers = document.querySelectorAll(".tracker-button3");
             for(var j = 0; j<card3Trackers.length; j++){
               (function () {
                 var card3Tracker = card3Trackers[j];
                 if(j<6){
                   card3Tracker.classList.remove("invisible");
                   card3TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
             case 3:
             var card4Trackers = document.querySelectorAll(".tracker-button4");
             for(var j = 0; j<card4Trackers.length; j++){
               (function () {
                 var card4Tracker = card4Trackers[j];
                 if(j<6){
                   card4Tracker.classList.remove("invisible");
                   card4TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
             case 4:
             var card5Trackers = document.querySelectorAll(".tracker-button5");
             for(var j = 0; j<card5Trackers.length; j++){
               (function () {
                 var card5Tracker = card5Trackers[j];
                 if(j<6){
                   card5Tracker.classList.remove("invisible");
                   card5TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
             case 5:
             var card6Trackers = document.querySelectorAll(".tracker-button6");
             for(var j = 0; j<card6Trackers.length; j++){
               (function () {
                 var card6Tracker = card6Trackers[j];
                 if(j<6){
                   card6Tracker.classList.remove("invisible");
                   card6TrackerCounter = 6;
                 }
               }).call(this, j);
             }
               break;
            }
          }
        }).call(this,i);
      }
      break;
    }
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
    activesSelected = 0;
}
}

var trackerUseButtons1 = document.querySelectorAll(".tracker-button1");
for (var i = 0; i<trackerUseButtons1.length; i++){
  (function (){
    var trackerUseButton1 = trackerUseButtons1[i];
    trackerUseButton1.onclick = () => {
      if (trackerUseButton1 === trackerUseButtons1[0]){
        trackerUseButton1.classList.add("invisible");
      }else if (trackerUseButton1.previousSibling.classList.contains("invisible")){
        trackerUseButton1.classList.add("invisible");
      } if(card1TrackerCounter === 1 && trackerUseButton1 === trackerUseButtons1[0]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card1TrackerCounter === 2 && trackerUseButton1 === trackerUseButtons1[1]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card1TrackerCounter === 3 && trackerUseButton1 === trackerUseButtons1[2]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card1TrackerCounter === 4 && trackerUseButton1 === trackerUseButtons1[3]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card1TrackerCounter === 5 && trackerUseButton1 === trackerUseButtons1[4]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card1TrackerCounter === 6 && trackerUseButton1 === trackerUseButtons1[5]){
        active1.classList.remove("has-tracker");
        if(active1.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons2 = document.querySelectorAll(".tracker-button2");
for (var i = 0; i<trackerUseButtons2.length; i++){
  (function (){
    var trackerUseButton2 = trackerUseButtons2[i];
    trackerUseButton2.onclick = () => {
      if (trackerUseButton2 === trackerUseButtons2[0]){
        trackerUseButton2.classList.add("invisible");
      }else if (trackerUseButton2.previousSibling.classList.contains("invisible")){
        trackerUseButton2.classList.add("invisible");
      } if(card2TrackerCounter === 1 && trackerUseButton2 === trackerUseButtons2[0]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card2TrackerCounter === 2 && trackerUseButton2 === trackerUseButtons2[1]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card2TrackerCounter === 3 && trackerUseButton2 === trackerUseButtons2[2]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card2TrackerCounter === 4 && trackerUseButton2 === trackerUseButtons2[3]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card2TrackerCounter === 5 && trackerUseButton2 === trackerUseButtons2[4]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card2TrackerCounter === 6 && trackerUseButton2 === trackerUseButtons2[5]){
        active2.classList.remove("has-tracker");
        if(active2.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons3 = document.querySelectorAll(".tracker-button3");
for (var i = 0; i<trackerUseButtons3.length; i++){
  (function (){
    var trackerUseButton3 = trackerUseButtons3[i];
    trackerUseButton3.onclick = () => {
      if (trackerUseButton3 === trackerUseButtons3[0]){
        trackerUseButton3.classList.add("invisible");
      }else if (trackerUseButton3.previousSibling.classList.contains("invisible")){
        trackerUseButton3.classList.add("invisible");
      } if(card3TrackerCounter === 1 && trackerUseButton3 === trackerUseButtons3[0]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card3TrackerCounter === 2 && trackerUseButton3 === trackerUseButtons3[1]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card3TrackerCounter === 3 && trackerUseButton3 === trackerUseButtons3[2]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card3TrackerCounter === 4 && trackerUseButton3 === trackerUseButtons3[3]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card3TrackerCounter === 5 && trackerUseButton3 === trackerUseButtons3[4]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card3TrackerCounter === 6 && trackerUseButton3 === trackerUseButtons3[5]){
        active3.classList.remove("has-tracker");
        if(active3.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons4 = document.querySelectorAll(".tracker-button4");
for (var i = 0; i<trackerUseButtons4.length; i++){
  (function (){
    var trackerUseButton4 = trackerUseButtons4[i];
    trackerUseButton4.onclick = () => {
      if (trackerUseButton4 === trackerUseButtons4[0]){
        trackerUseButton4.classList.add("invisible");
      }else if (trackerUseButton4.previousSibling.classList.contains("invisible")){
        trackerUseButton4.classList.add("invisible");
      } if(card4TrackerCounter === 1 && trackerUseButton4 === trackerUseButtons4[0]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card4TrackerCounter === 2 && trackerUseButton4 === trackerUseButtons4[1]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card4TrackerCounter === 3 && trackerUseButton4 === trackerUseButtons4[2]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card4TrackerCounter === 4 && trackerUseButton4 === trackerUseButtons4[3]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card4TrackerCounter === 5 && trackerUseButton4 === trackerUseButtons4[4]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card4TrackerCounter === 6 && trackerUseButton4 === trackerUseButtons4[5]){
        active4.classList.remove("has-tracker");
        if(active4.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons5 = document.querySelectorAll(".tracker-button5");
for (var i = 0; i<trackerUseButtons5.length; i++){
  (function (){
    var trackerUseButton5 = trackerUseButtons5[i];
    trackerUseButton5.onclick = () => {
      if (trackerUseButton5 === trackerUseButtons5[0]){
        trackerUseButton5.classList.add("invisible");
      }else if (trackerUseButton5.previousSibling.classList.contains("invisible")){
        trackerUseButton5.classList.add("invisible");
      } if(card5TrackerCounter === 1 && trackerUseButton5 === trackerUseButtons5[0]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card5TrackerCounter === 2 && trackerUseButton5 === trackerUseButtons5[1]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card5TrackerCounter === 3 && trackerUseButton5 === trackerUseButtons5[2]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card5TrackerCounter === 4 && trackerUseButton5 === trackerUseButtons5[3]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card5TrackerCounter === 5 && trackerUseButton5 === trackerUseButtons5[4]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card5TrackerCounter === 6 && trackerUseButton5 === trackerUseButtons5[5]){
        active5.classList.remove("has-tracker");
        if(active5.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

var trackerUseButtons6 = document.querySelectorAll(".tracker-button6");
for (var i = 0; i<trackerUseButtons6.length; i++){
  (function (){
    var trackerUseButton6 = trackerUseButtons6[i];
    trackerUseButton6.onclick = () => {
      if (trackerUseButton6 === trackerUseButtons6[0]){
        trackerUseButton6.classList.add("invisible");
      }else if (trackerUseButton6.previousSibling.classList.contains("invisible")){
        trackerUseButton6.classList.add("invisible");
      } if(card6TrackerCounter === 1 && trackerUseButton6 === trackerUseButtons6[0]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card6TrackerCounter === 2 && trackerUseButton6 === trackerUseButtons6[1]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }  else if (card6TrackerCounter === 3 && trackerUseButton6 === trackerUseButtons6[2]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card6TrackerCounter === 4 && trackerUseButton6 === trackerUseButtons6[3]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card6TrackerCounter === 5 && trackerUseButton6 === trackerUseButtons6[4]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (card6TrackerCounter === 6 && trackerUseButton6 === trackerUseButtons6[5]){
        active6.classList.remove("has-tracker");
        if(active6.classList.contains("active-selected")){
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    }
  }).call(this, i);
}

goBack.onclick = () => {
  var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
  var handCards = document.querySelectorAll(".hand");
  document.getElementById("select-class-section").classList.remove("hiding");
  document.getElementById("level-selection").classList.remove("hiding");
  confirmHandButton.classList.add("not-without-more-selected");
  modDeckArray = [mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8, mod9, mod10, mod11, mod12, mod13, mod14, mod15, mod16, mod17, mod18, mod19, mod20];
  var perkLists = document.querySelectorAll(".perks");
  for (var j = 0; j<perkLists.length; j++){
    var perkList = perkLists[j];
    perkList.classList.add("hiding");
  }
  goBack.classList.add("hiding");
  goBack2.classList.add("hiding");
  document.getElementById("perk-section").classList.add("hiding");
  document.getElementById("bear-health").classList.add("hiding");
  document.getElementById("bear-health-counter").classList.add("hiding");
  document.getElementById("damage-bear").classList.add("hiding");
  document.getElementById("heal-bear").classList.add("hiding");
  document.getElementById("bear-status-effects").classList.add("hiding");
  flipCard(cardHand1);
  flipCard(cardHand2);
  flipCard(cardHand3);
  flipCard(cardHand4);
  flipCard(cardHand5);
  flipCard(cardHand6);
  flipCard(cardHand7);
  flipCard(cardHand8);
  flipCard(cardHand9);
  flipCard(cardHand10);
  flipCard(cardHand11);
  flipCard(cardHand12);
  cardHand1.classList.remove("hiding");
  cardHand2.classList.remove("hiding");
  cardHand3.classList.remove("hiding");
  cardHand4.classList.remove("hiding");
  cardHand5.classList.remove("hiding");
  cardHand6.classList.remove("hiding");
  cardHand7.classList.remove("hiding");
  cardHand8.classList.remove("hiding");
  cardHand9.classList.remove("hiding");
  cardHand10.classList.remove("hiding");
  cardHand11.classList.remove("hiding");
  cardHand12.classList.remove("hiding");
  cardCount = 0;
  cardCounter.innerHTML = cardCount + "/"+ handSize;
  var levelTitles = document.querySelectorAll(".level");
  for(var k = 3; k<levelTitles.length; k++){
    var levelTitle = levelTitles[k];
    levelTitle.classList.remove("hiding");
  }
  for (var i = 0; i<cardsToChooseFrom.length; i++){
    (function (){
      var card = cardsToChooseFrom[i];
      card.firstChild.classList.remove("add-border");
    }).call(this,i);
  }
}

goBack2.onclick = () => {
  var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
  var handCards = document.querySelectorAll(".hand");
  document.getElementById("initial-table").classList.add("hiding");
  document.getElementById("hand-cards").classList.add("hiding");
  document.getElementById("confirm-buttons").classList.add("hiding");
  confirmHandButton.classList.add("not-without-more-selected");
  modDeckArray = [mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8, mod9, mod10, mod11, mod12, mod13, mod14, mod15, mod16, mod17, mod18, mod19, mod20];
  goBack.classList.remove("hiding");
  goBack2.classList.add("hiding");
  document.getElementById("perk-section").classList.remove("hiding");
  flipCard(cardHand1);
  flipCard(cardHand2);
  flipCard(cardHand3);
  flipCard(cardHand4);
  flipCard(cardHand5);
  flipCard(cardHand6);
  flipCard(cardHand7);
  flipCard(cardHand8);
  flipCard(cardHand9);
  flipCard(cardHand10);
  flipCard(cardHand11);
  flipCard(cardHand12);
  for (var j = 0; j<12; j++){
    var eachCardInHand = handCards[j];
    eachCardInHand.classList.add("hiding");
  }
  cardCount = 0;
  cardCounter.innerHTML = cardCount + "/"+ handSize;
  var levelTitles = document.querySelectorAll(".level");
  for(var k = levelCount+3; k<levelTitles.length; k++){
    var levelTitle = levelTitles[k];
    levelTitle.classList.add("hiding");
  }
  for (var i = 0; i<cardsToChooseFrom.length; i++){
    (function (){
      var card = cardsToChooseFrom[i];
      card.firstChild.classList.remove("add-border");
    }).call(this,i);
  }
}

loseDiscardButton.onclick = () => {
  var selectedDiscards = document.querySelectorAll(".discard-selected");
  if(discardsSelected === 1){
    for (var i = 0; i<lostCards.length; i++){
      var lostCard = lostCards[i];
      if(lostCard.classList.contains("flipped")){
        lostCard.src = selectedDiscards[0].src;
        lostCard.classList.remove("flipped");
        lostCard.classList.remove("hiding");
        i = lostCards.length;
        flipDiscard(selectedDiscards[0]);
        discardsSelected--;
        discardCount--;
        recoverDiscardButton.classList.add("not-without-more-selected");
        loseDiscardButton.classList.add("not-without-more-selected");
        loseCardFromRestButton.classList.add("not-unless-resting");
      }
    }
  }
  if(discardCount === 0 && longResting){
    longResting = false;
    mustLose = false;
    playCardsButton.classList.remove("not-while-resting");
    shortRestButton.classList.remove("not-while-resting");
    longRestButton.classList.remove("not-while-resting");
    loseCardFromRestButton.classList.add("not-unless-resting");
    shortRestButton.classList.add("not-without-more-cards");
    longRestButton.classList.add("not-without-more-cards");
    loseDiscardButton.classList.add("not-without-more-selected");
    Element.prototype.remove = function() {
      this.parentElement.removeChild(this);
    }
    document.getElementById('choose-to-lose').remove();
  }
}

loseHandCard.onclick = () => {
  if(cardCount === 1){
    var cardsInHand = document.querySelectorAll(".hand");
    for (var j = 0; j<cardsInHand.length; j++){
      var cardInHand = cardsInHand[j];
      if (cardInHand.classList.contains("add-border")){
        for (var i = 0; i<lostCards.length; i++){
          var lostCard = lostCards[i];
          if(lostCard.classList.contains("flipped")){
            lostCard.src = cardInHand.src;
            lostCard.classList.remove("flipped");
            lostCard.classList.remove("hiding");
            i = lostCards.length;
            flipCard(cardInHand);
            cardCount--;
            loseHandCard.classList.add('not-without-more-selected');
          }
        }
      }
    }
  }
}

//attack modifiers
let modifierDeck = document.getElementById('amDeck');
let playedModifiers = document.getElementById('playedModifiers');
let mod1 = "./common/attackModifiers/plus0.png";
let mod2 = "./common/attackModifiers/plus0.png";
let mod3 = "./common/attackModifiers/plus0.png";
let mod4 = "./common/attackModifiers/plus0.png";
let mod5 = "./common/attackModifiers/plus0.png";
let mod6 = "./common/attackModifiers/plus0.png";
let mod7 = "./common/attackModifiers/plus1.png";
let mod8 = "./common/attackModifiers/plus1.png";
let mod9 = "./common/attackModifiers/plus1.png";
let mod10 = "./common/attackModifiers/plus1.png";
let mod11 = "./common/attackModifiers/plus1.png";
let mod12 = "./common/attackModifiers/minus1.png";
let mod13 = "./common/attackModifiers/minus1.png";
let mod14 = "./common/attackModifiers/minus1.png";
let mod15 = "./common/attackModifiers/minus1.png";
let mod16 = "./common/attackModifiers/minus1.png";
let mod17 = "./common/attackModifiers/minus2.png";
let mod18 = "./common/attackModifiers/plus2.png";
let mod19 = "./common/attackModifiers/curseShuffle.png";
let mod20 = "./common/attackModifiers/blessShuffle.png";
let blessCard = "./common/attackModifiers/bless.png";
let curseCard = "./common/attackModifiers/curse.png";
let minus1 = "./common/attackModifiers/newMinus1.png";
let modDeckArray = [mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8, mod9, mod10, mod11, mod12, mod13, mod14, mod15, mod16, mod17, mod18, mod19, mod20];
let modZero = mod1;
let modPlus1 = mod7;
let modMinus1 = mod12;
let modMinus2 = mod17;
let defaultDeckArray = [];
let playedModifierArray = [];
let mustShuffle = document.getElementById("mustShuffle");
let blessButton = document.getElementById('bless');
let curseButton = document.getElementById('curse');
let shuffleModsButton = document.getElementById('shuffleMods');
let numOfCurses = 0;
let numOfBlesses = 0;
let addMinusOne = document.getElementById('add-minus-1');
let cardsInDeckText = document.getElementById("cardsInDeck");
let resetDeckButton = document.getElementById("reset-deck");
let usedMods = document.getElementById("used-modifier-cards");

modifierDeck.onclick = () => {
  if(modDeckArray.length>0){
    playedModifierArray.push(modDeckArray[0]);
    var DOM_img = document.createElement("img");
    DOM_img.src = playedModifierArray[playedModifierArray.length - 1];
    usedMods.appendChild(DOM_img);
    playedModifiers.classList.remove('hiding');
    playedModifiers.src = playedModifierArray[playedModifierArray.length - 1];
    playedModifiers.classList.add(`${modDeckArray[0]}`);
    modDeckArray.splice(0, 1);
    if (modDeckArray.length === 0){
      modifierDeck.classList.add("hiding");
    }
    if (playedModifiers.classList.contains("./common/attackModifiers/curseShuffle.png") || playedModifiers.classList.contains("./common/attackModifiers/blessShuffle.png")){
      mustShuffle.classList.remove("invisible");
    }
    if (playedModifiers.classList.contains("./common/attackModifiers/curse.png")){
      numOfCurses--;
      cursesInDeck.innerHTML = "Extra Curses in Deck: "+numOfCurses;
    }
    if (playedModifiers.classList.contains("./common/attackModifiers/bless.png")){
      numOfBlesses--;
      blessesInDeck.innerHTML = "Extra Blesses in Deck: "+numOfBlesses;
    }
    if (playedModifiers.classList.contains("./common/attackModifiers/bless.png") || playedModifiers.classList.contains("./common/attackModifiers/curse.png")){
      playedModifierArray.splice((playedModifierArray.length-1), 1);
      playedModifiers.classList.remove("./common/attackModifiers/bless.png");
      playedModifiers.classList.remove("./common/attackModifiers/curse.png");
    }
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
  }
}

function shuffleModifierDeck (){
  while (playedModifierArray.length > 0){
    modDeckArray.push(playedModifierArray[playedModifierArray.length - 1]);
    playedModifierArray.pop();
    playedModifiers.src = '';
    modifierDeck.src = "./common/attackModifiers/amback.png"
    mustShuffle.classList.add('invisible');
    playedModifiers.className = "attack-modifier";
    playedModifiers.classList.add('hiding');
    modifierDeck.classList.remove("hiding");
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    usedMods.innerHTML = "";
    shuffleDeck();
  }
}

function shuffleDeck (){
  var deckCopy = modDeckArray.slice();
  modDeckArray = [];
  while (deckCopy.length>0){
    var randomNumber = Math.floor(Math.random()*deckCopy.length);
    modDeckArray.push(deckCopy[randomNumber]);
    deckCopy.splice(randomNumber,1);
  }
}

shuffleModsButton.onclick = () => {
  shuffleModifierDeck();
}

function blessDeck (){
  if(numOfBlesses<10){
    modDeckArray.push(blessCard);
    modifierDeck.classList.remove("hiding");
    numOfBlesses++
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    shuffleDeck();
    blessesInDeck.innerHTML = "Extra Blesses in Deck: "+numOfBlesses;
  }
}

blessButton.onclick = () => {
  blessDeck();
}

function curseDeck (){
  if (numOfCurses<10){
    modDeckArray.push(curseCard);
    modifierDeck.classList.remove("hiding");
    numOfCurses++
    cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
    shuffleDeck();
    cursesInDeck.innerHTML = "Extra Curses in Deck: "+numOfCurses;
  }
}

curseButton.onclick = () => {
  curseDeck();
}

function addMinus1 (){
  modDeckArray.push(minus1);
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
}

addMinusOne.onclick = () => {
  addMinus1();
}

function resetDeck () {
  shuffleModifierDeck();
  modDeckArray = defaultDeckArray.slice();
  numOfCurses = 0;
  numOfBlesses = 0;
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
  blessesInDeck.innerHTML = "Extra Blesses in Deck: "+numOfBlesses;
  cursesInDeck.innerHTML = "Extra Curses in Deck: "+numOfCurses;
  shuffleDeck();
}

resetDeckButton.onclick = () => {
  resetDeck();
}

var checkboxes = document.querySelectorAll(".checkbox");
for (var i = 0; i<checkboxes.length; i++){
  (function(){
    var checkbox = checkboxes[i];
    checkbox.onclick = () =>{
      if(!checkbox.classList.contains("checked")){
        checkbox.classList.add("checked");
      } else {
        checkbox.classList.remove("checked");
      }

    }
  }).call(this,i);
}

function confirmPerks(){
  document.getElementById("initial-table").classList.remove("hiding");
  document.getElementById('hand-cards').classList.remove("hiding");
  let revealedCards = document.querySelectorAll(".hand");
  for (let i = 0; i<handSize; i++){
    let revealedCard = revealedCards[i];
    revealedCard.classList.remove("hiding");
  };
  document.getElementById("confirm-buttons").classList.remove("hiding");
  chooseCardsNumber.innerHTML = "Choose "+ handSize+ " Cards";
  cardCounter.innerHTML = cardCount+"/"+handSize;
  healthCounter.innerHTML = health + "/" + maxHealth;
  bearHealthCounter.innerHTML = "Bear Health<br/>"+ bearHealth + "/" + bearMaxHealth;
  xpCounter.innerHTML = xpCount;
  chosenCard1.src = flippedCard;
  chosenCard2.src = flippedCard;
  trackerSizeCounter.innerHTML = "Tracker Size: "+ trackerSize;
  document.getElementById("perk-section").classList.add("hiding");
  goBack2.classList.remove("hiding");
}

// Add a card to the Attack Modifier deck
function addAttackModifier (cardImage, quantity){
  for (var i = 0; i < quantity; i++){
    modDeckArray.push(cardImage);
  }
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
}

// Remove a card from the Attack Modifier deck
function removeAttackModifier (modifier, quantity){
  let foundCount = 0;

  for (var i = 0; i<modDeckArray.length; i++){
    if(modDeckArray[i] === modifier){
      modDeckArray.splice(i, 1);
      foundCount++;
      if(foundCount === quantity){
        i = modDeckArray.length;
      } else {
        i--;
      }
    }
  }
  cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
}

// ***********************************************************************
// *
// * Set perks for classes
// *
//************************************************************************

// Perk button vars
let brConfirmPerksButton = document.getElementById('brConfirmPerksButton');
let chConfirmPerksButton = document.getElementById('chConfirmPerksButton');
let mtConfirmPerksButton = document.getElementById('mtConfirmPerksButton');
let scConfirmPerksButton = document.getElementById('scConfirmPerksButton');
let swConfirmPerksButton = document.getElementById('swConfirmPerksButton');
let tiConfirmPerksButton = document.getElementById('tiConfirmPerksButton');
let beConfirmPerksButton = document.getElementById('beConfirmPerksButton');
let btConfirmPerksButton = document.getElementById('btConfirmPerksButton');
let elConfirmPerksButton = document.getElementById('elConfirmPerksButton');
let dsConfirmPerksButton = document.getElementById("dsConfirmPerksButton");
let nsConfirmPerksButton = document.getElementById('nsConfirmPerksButton');
let phConfirmPerksButton = document.getElementById('phConfirmPerksButton');
let qmConfirmPerksButton = document.getElementById('qmConfirmPerksButton');
let sbConfirmPerksButton = document.getElementById('sbConfirmPerksButton');
let skConfirmPerksButton = document.getElementById('skConfirmPerksButton');
let ssConfirmPerksButton = document.getElementById('ssConfirmPerksButton');
let suConfirmPerksButton = document.getElementById('suConfirmPerksButton');
let bsConfirmPerksButton = document.getElementById('bsConfirmPerksButton');

//Brute
let brPerk1 = document.getElementById("brPerk1");
let brPerk2 = document.getElementById("brPerk2");
let brPerk3 = document.getElementById("brPerk3");
let brPerk4 = document.getElementById("brPerk4");
let brPerk5 = document.getElementById("brPerk5");
let brPerk6 = document.getElementById("brPerk6");
let brPerk7 = document.getElementById("brPerk7");
let brPerk8 = document.getElementById("brPerk8");
let brPerk9 = document.getElementById("brPerk9");
let brPerk10 = document.getElementById("brPerk10");
let brPerk11 = document.getElementById("brPerk11");
let brPerk12 = document.getElementById("brPerk12");
let brPerk13 = document.getElementById("brPerk13");
let brPerk14 = document.getElementById("brPerk14");
let brPerk15 = document.getElementById("brPerk15");

brConfirmPerksButton.onclick = () => {
  if(brPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "brchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(brPerk2.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brPlus1.png", 1);
    removeAttackModifier(modMinus1, 1);
    setCookie("perk2", "brchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(brPerk3.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brPlus1.png", 2);
    setCookie("perk3", "brchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(brPerk4.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brPlus1.png", 2);
    setCookie("perk4", "brchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (brPerk5.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brPlus3.png", 1);
    setCookie("perk5", "brchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (brPerk6.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brRollingPush1.png", 3);
    setCookie("perk6", "brchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (brPerk7.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brRollingPush1.png", 3);
    setCookie("perk7", "brchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (brPerk8.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brRollingPierce3.png", 2);
    setCookie("perk8", "brchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (brPerk9.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brRollingStun.png", 1);
    setCookie("perk9", "brchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (brPerk10.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brRollingStun.png", 1);
    setCookie("perk10", "brchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (brPerk11.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brRollingDisarm.png", 1);
    addAttackModifier("./br/attackModifiers/brRollingMuddle.png", 1);
    setCookie("perk11", "brchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (brPerk12.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brRollingAddTarget.png", 1);
    setCookie("perk12", "brchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (brPerk13.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brRollingAddTarget.png", 1);
    setCookie("perk13", "brchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (brPerk14.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brPlus1Shield.png", 1);
    setCookie("perk14", "brchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (brPerk15.classList.contains('checked')){
    addAttackModifier("./br/attackModifiers/brPlus1.png", 2);
    setCookie("perk15", "brchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Cragheart
let chPerk1 = document.getElementById("chPerk1");
let chPerk2 = document.getElementById("chPerk2");
let chPerk3 = document.getElementById("chPerk3");
let chPerk4 = document.getElementById("chPerk4");
let chPerk5 = document.getElementById("chPerk5");
let chPerk6 = document.getElementById("chPerk6");
let chPerk7 = document.getElementById("chPerk7");
let chPerk8 = document.getElementById("chPerk8");
let chPerk9 = document.getElementById("chPerk9");
let chPerk10 = document.getElementById("chPerk10");
let chPerk11 = document.getElementById("chPerk11");
let chPerk12 = document.getElementById("chPerk12");
let chPerk13 = document.getElementById("chPerk13");
let chPerk14 = document.getElementById("chPerk14");
let chPerk15 = document.getElementById("chPerk15");
chConfirmPerksButton.onclick = () => {
  if(chPerk1.classList.contains('checked')){
    removeAttackModifier(modZero, 4);
    setCookie("perk1", "chchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(chPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./ch/attackModifiers/chPlus1.png", 1);
    setCookie("perk2", "chchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(chPerk3.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./ch/attackModifiers/chPlus1.png", 1);
    setCookie("perk3", "chchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(chPerk4.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./ch/attackModifiers/chPlus1.png", 1);
    setCookie("perk4", "chchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (chPerk5.classList.contains('checked')){
    addAttackModifier("./ch/attackModifiers/chMinus2.png", 1);
    addAttackModifier("./ch/attackModifiers/chPlus2.png", 2);
    setCookie("perk5", "chchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (chPerk6.classList.contains('checked')){
    addAttackModifier("./ch/attackModifiers/chPlus1Immobilize.png", 1);
    setCookie("perk6", "chchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (chPerk7.classList.contains('checked')){
    addAttackModifier("./ch/attackModifiers/chPlus1Immobilize.png", 1);
    setCookie("perk7", "chchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (chPerk8.classList.contains('checked')){
    addAttackModifier("./ch/attackModifiers/chPlus2Muddle.png", 1);
    setCookie("perk8", "chchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (chPerk9.classList.contains('checked')){
    addAttackModifier("./ch/attackModifiers/chPlus2Muddle.png", 1);
    setCookie("perk9", "chchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (chPerk10.classList.contains('checked')){
    addAttackModifier("./ch/attackModifiers/chRollingPush2.png", 2);
    setCookie("perk10", "chchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (chPerk11.classList.contains('checked')){
    addAttackModifier("./ch/attackModifiers/chRollingEarth.png", 2);
    setCookie("perk11", "chchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (chPerk12.classList.contains('checked')){
    addAttackModifier("./ch/attackModifiers/chRollingEarth.png", 2);
    setCookie("perk12", "chchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (chPerk13.classList.contains('checked')){
    addAttackModifier("./ch/attackModifiers/chRollingWind.png", 2);
    setCookie("perk13", "chchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (chPerk14.classList.contains('checked')){
    setCookie("perk14", "chchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (chPerk15.classList.contains('checked')){
    setCookie("perk15", "chchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Mindthief perks
let mtPerk1 = document.getElementById("mtPerk1");
let mtPerk2 = document.getElementById("mtPerk2");
let mtPerk3 = document.getElementById("mtPerk3");
let mtPerk4 = document.getElementById("mtPerk4");
let mtPerk5 = document.getElementById("mtPerk5");
let mtPerk6 = document.getElementById("mtPerk6");
let mtPerk7 = document.getElementById("mtPerk7");
let mtPerk8 = document.getElementById("mtPerk8");
let mtPerk9 = document.getElementById("mtPerk9");
let mtPerk10 = document.getElementById("mtPerk10");
let mtPerk11 = document.getElementById("mtPerk11");
let mtPerk12 = document.getElementById("mtPerk12");
let mtPerk13 = document.getElementById("mtPerk13");
let mtPerk14 = document.getElementById("mtPerk14");
let mtPerk15 = document.getElementById("mtPerk15");
mtConfirmPerksButton.onclick = () => {
  if(mtPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "mtchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(mtPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk2", "mtchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
 if (mtPerk3.classList.contains('checked')){
    removeAttackModifier(modZero, 4);
    setCookie("perk3", "mtchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (mtPerk4.classList.contains('checked')){
    removeAttackModifier(modPlus1, 2);
    addAttackModifier("./mt/attackModifiers/mtPlus2.png", 2);
    setCookie("perk4", "mtchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (mtPerk5.classList.contains('checked')){
    removeAttackModifier(modMinus2, 1);
    addAttackModifier("./mt/attackModifiers/mtPlus0.png", 2);
    setCookie("perk5", "mtchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (mtPerk6.classList.contains('checked')){
    addAttackModifier("./mt/attackModifiers/mtFrostPlus2.png", 1);
    setCookie("perk6", "mtchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (mtPerk7.classList.contains('checked')){
    addAttackModifier("./mt/attackModifiers/mtFrostPlus2.png", 1);
    setCookie("perk7", "mtchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (mtPerk8.classList.contains('checked')){
    addAttackModifier("./mt/attackModifiers/mtRollingPlus1.png", 2);
    setCookie("perk8", "mtchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (mtPerk9.classList.contains('checked')){
    addAttackModifier("./mt/attackModifiers/mtRollingPlus1.png", 2);
    setCookie("perk9", "mtchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (mtPerk10.classList.contains('checked')){
    addAttackModifier("./mt/attackModifiers/mtRollingPull1.png", 3);
    setCookie("perk10", "mtchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (mtPerk11.classList.contains('checked')){
    addAttackModifier("./mt/attackModifiers/mtRollingMuddle.png", 3);
    setCookie("perk11", "mtchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (mtPerk12.classList.contains('checked')){
    addAttackModifier("./mt/attackModifiers/mtRollingImmobilize.png", 2);
    setCookie("perk12", "mtchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (mtPerk13.classList.contains('checked')){
    addAttackModifier("./mt/attackModifiers/mtRollingStun.png", 1);
    setCookie("perk13", "mtchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (mtPerk14.classList.contains('checked')){
    addAttackModifier("./mt/attackModifiers/mtRollingDisarm.png", 1);
    addAttackModifier("./mt/attackModifiers/mtRollingMuddle.png", 1);
    setCookie("perk14", "mtchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (mtPerk15.classList.contains('checked')){
    setCookie("perk15", "mtchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Scoundrel
let scPerk1 = document.getElementById("scPerk1");
let scPerk2 = document.getElementById("scPerk2");
let scPerk3 = document.getElementById("scPerk3");
let scPerk4 = document.getElementById("scPerk4");
let scPerk5 = document.getElementById("scPerk5");
let scPerk6 = document.getElementById("scPerk6");
let scPerk7 = document.getElementById("scPerk7");
let scPerk8 = document.getElementById("scPerk8");
let scPerk9 = document.getElementById("scPerk9");
let scPerk10 = document.getElementById("scPerk10");
let scPerk11 = document.getElementById("scPerk11");
let scPerk12 = document.getElementById("scPerk12");
let scPerk13 = document.getElementById("scPerk13");
let scPerk14 = document.getElementById("scPerk14");
let scPerk15 = document.getElementById("scPerk15");

scConfirmPerksButton.onclick = () => {
  if(scPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "scchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(scPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk2", "scchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(scPerk3.classList.contains('checked')){
    removeAttackModifier(modZero, 4);
    setCookie("perk3", "scchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(scPerk4.classList.contains('checked')){
    removeAttackModifier(modMinus2, 1);
    addAttackModifier("./sc/attackModifiers/scPlus0.png", 1);
    setCookie("perk4", "scchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (scPerk5.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./sc/attackModifiers/scPlus1.png", 1);
    setCookie("perk5", "scchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (scPerk6.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./sc/attackModifiers/scPlus2.png", 1);
    setCookie("perk6", "scchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (scPerk7.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./sc/attackModifiers/scPlus2.png", 1);
    setCookie("perk7", "scchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (scPerk8.classList.contains('checked')){
    addAttackModifier("./sc/attackModifiers/scRollingPlus1.png", 2);
    setCookie("perk8", "scchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (scPerk9.classList.contains('checked')){
    addAttackModifier("./sc/attackModifiers/scRollingPlus1.png", 2);
    setCookie("perk9", "scchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (scPerk10.classList.contains('checked')){
    addAttackModifier("./sc/attackModifiers/scRollingPierce3.png", 2);
    setCookie("perk10", "scchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (scPerk11.classList.contains('checked')){
    addAttackModifier("./sc/attackModifiers/scRollingPoison.png", 2);
    setCookie("perk11", "scchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (scPerk12.classList.contains('checked')){
    addAttackModifier("./sc/attackModifiers/scRollingPoison.png", 2);
    setCookie("perk12", "scchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (scPerk13.classList.contains('checked')){
    addAttackModifier("./sc/attackModifiers/scRollingMuddle.png", 2);
    setCookie("perk13", "scchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (scPerk14.classList.contains('checked')){
    addAttackModifier("./sc/attackModifiers/scRollingInvisible.png", 1);
    setCookie("perk14", "scchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (scPerk15.classList.contains('checked')){
    setCookie("perk15", "scchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//spellweaver
let swPerk1 = document.getElementById("swPerk1");
let swPerk2 = document.getElementById("swPerk2");
let swPerk3 = document.getElementById("swPerk3");
let swPerk4 = document.getElementById("swPerk4");
let swPerk5 = document.getElementById("swPerk5");
let swPerk6 = document.getElementById("swPerk6");
let swPerk7 = document.getElementById("swPerk7");
let swPerk8 = document.getElementById("swPerk8");
let swPerk9 = document.getElementById("swPerk9");
let swPerk10 = document.getElementById("swPerk10");
let swPerk11 = document.getElementById("swPerk11");
let swPerk12 = document.getElementById("swPerk12");
let swPerk13 = document.getElementById("swPerk13");
let swPerk14 = document.getElementById("swPerk14");
let swPerk15 = document.getElementById("swPerk15");

swConfirmPerksButton.onclick = () => {
  if(swPerk1.classList.contains('checked')){
    removeAttackModifier(modZero, 4);
    setCookie("perk1", "swchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(swPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./sw/attackModifiers/swPlus1.png", 1);
    setCookie("perk2", "swchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(swPerk3.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./sw/attackModifiers/swPlus1.png", 1);
    setCookie("perk3", "swchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(swPerk4.classList.contains('checked')){
    addAttackModifier("./sw/attackModifiers/swPlus1.png", 2);
    setCookie("perk4", "swchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (swPerk5.classList.contains('checked')){
    addAttackModifier("./sw/attackModifiers/swPlus1.png", 2);
    setCookie("perk5", "swchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (swPerk6.classList.contains('checked')){
    addAttackModifier("./sw/attackModifiers/swPlus0Stun.png", 1);
    setCookie("perk6", "swchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (swPerk7.classList.contains('checked')){
    addAttackModifier("./sw/attackModifiers/swPlus1Wound.png", 1);
    setCookie("perk7", "swchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (swPerk8.classList.contains('checked')){
    addAttackModifier("./sw/attackModifiers/swPlus1Immobilize.png", 1);
    setCookie("perk8", "swchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (swPerk9.classList.contains('checked')){
    addAttackModifier("./sw/attackModifiers/swPlus1Curse.png", 1);
    setCookie("perk9", "swchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (swPerk10.classList.contains('checked')){
    addAttackModifier("./sw/attackModifiers/swPlus2Fire.png", 1);
    setCookie("perk10", "swchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (swPerk11.classList.contains('checked')){
    addAttackModifier("./sw/attackModifiers/swPlus2Fire.png", 1);
    setCookie("perk11", "swchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (swPerk12.classList.contains('checked')){
    addAttackModifier("./sw/attackModifiers/swPlus2Frost.png", 1);
    setCookie("perk12", "swchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (swPerk13.classList.contains('checked')){
    addAttackModifier("./sw/attackModifiers/swPlus2Frost.png", 1);
    setCookie("perk13", "swchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (swPerk14.classList.contains('checked')){
    addAttackModifier("./sw/attackModifiers/swRollingEarth.png", 1);
    addAttackModifier("./sw/attackModifiers/swRollingWind.png", 1);
    setCookie("perk14", "swchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (swPerk15.classList.contains('checked')){
    addAttackModifier("./sw/attackModifiers/swRollingLight.png", 1);
    addAttackModifier("./sw/attackModifiers/swRollingDark.png", 1);
    setCookie("perk15", "swchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Tinkerer
let tiPerk1 = document.getElementById("tiPerk1");
let tiPerk2 = document.getElementById("tiPerk2");
let tiPerk3 = document.getElementById("tiPerk3");
let tiPerk4 = document.getElementById("tiPerk4");
let tiPerk5 = document.getElementById("tiPerk5");
let tiPerk6 = document.getElementById("tiPerk6");
let tiPerk7 = document.getElementById("tiPerk7");
let tiPerk8 = document.getElementById("tiPerk8");
let tiPerk9 = document.getElementById("tiPerk9");
let tiPerk10 = document.getElementById("tiPerk10");
let tiPerk11 = document.getElementById("tiPerk11");
let tiPerk12 = document.getElementById("tiPerk12");
let tiPerk13 = document.getElementById("tiPerk13");
let tiPerk14 = document.getElementById("tiPerk14");
let tiPerk15 = document.getElementById("tiPerk15");

tiConfirmPerksButton.onclick = () => {
  if(tiPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "tichosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(tiPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk2", "tichosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(tiPerk3.classList.contains('checked')){
    removeAttackModifier(modMinus2, 2);
    addAttackModifier("./ti/attackModifiers/tiPlus0.png", 1);
    setCookie("perk3", "tichosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(tiPerk4.classList.contains('checked')){
    addAttackModifier("./ti/attackModifiers/tiPlus1.png", 2);
    setCookie("perk4", "tichosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (tiPerk5.classList.contains('checked')){
    addAttackModifier("./ti/attackModifiers/tiPlus3.png", 1);
    setCookie("perk5", "tichosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (tiPerk6.classList.contains('checked')){
    addAttackModifier("./ti/attackModifiers/tiRollingFire.png", 2);
    setCookie("perk6", "tichosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (tiPerk7.classList.contains('checked')){
    addAttackModifier("./ti/attackModifiers/tiRollingMuddle.png", 3);
    setCookie("perk7", "tichosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (tiPerk8.classList.contains('checked')){
    addAttackModifier("./ti/attackModifiers/tiPlus1Wound.png", 1);
    setCookie("perk8", "tichosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (tiPerk9.classList.contains('checked')){
    addAttackModifier("./ti/attackModifiers/tiPlus1Wound.png", 1);
    setCookie("perk9", "tichosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (tiPerk10.classList.contains('checked')){
    addAttackModifier("./ti/attackModifiers/tiPlus1Immobilize.png", 1);
    setCookie("perk10", "tichosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (tiPerk11.classList.contains('checked')){
    addAttackModifier("./ti/attackModifiers/tiPlus1Immobilize.png", 1);
    setCookie("perk11", "tichosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (tiPerk12.classList.contains('checked')){
    addAttackModifier("./ti/attackModifiers/tiPlus1Heal2.png", 1);
    setCookie("perk12", "tichosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (tiPerk13.classList.contains('checked')){
    addAttackModifier("./ti/attackModifiers/tiPlus1Heal2.png", 1);
    setCookie("perk13", "tichosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (tiPerk14.classList.contains('checked')){
    addAttackModifier("./ti/attackModifiers/tiPlus0AddTarget.png", 1);
    setCookie("perk14", "tichosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (tiPerk15.classList.contains('checked')){
    setCookie("perk15", "tichosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

// Berserker
let bePerk1 = document.getElementById("bePerk1");
let bePerk2 = document.getElementById("bePerk2");
let bePerk3 = document.getElementById("bePerk3");
let bePerk4 = document.getElementById("bePerk4");
let bePerk5 = document.getElementById("bePerk5");
let bePerk6 = document.getElementById("bePerk6");
let bePerk7 = document.getElementById("bePerk7");
let bePerk8 = document.getElementById("bePerk8");
let bePerk9 = document.getElementById("bePerk9");
let bePerk10 = document.getElementById("bePerk10");
let bePerk11 = document.getElementById("bePerk11");
let bePerk12 = document.getElementById("bePerk12");
let bePerk13 = document.getElementById("bePerk13");
let bePerk14 = document.getElementById("bePerk14");
let bePerk15 = document.getElementById("bePerk15");
beConfirmPerksButton.onclick = () => {
  if(bePerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "bechosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(bePerk2.classList.contains('checked')){
    removeAttackModifier(modZero, 2);
    setCookie("perk2", "bechosen", 365);
  } else {
    setCookie("perk2", "notchosen", 365);
  }
  if(bePerk3.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    addAttackModifier("./be/attackModifiers/bePlus1.png", 1);
    setCookie("perk3", "bechosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(bePerk4.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    addAttackModifier("./be/attackModifiers/bePlus1.png", 1);
    setCookie("perk4", "bechosen", 365);
  } else {
    setCookie("perk4", "notchosen", 365);
  }
  if (bePerk5.classList.contains('checked')){
    removeAttackModifier(modZero, 2);
    addAttackModifier("./be/attackModifiers/beRollingPlus2.png", 1);
    setCookie("perk5", "bechosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (bePerk6.classList.contains('checked')){
    removeAttackModifier(modZero, 2);
    addAttackModifier("./be/attackModifiers/beRollingPlus2.png", 1);
    setCookie("perk6", "bechosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (bePerk7.classList.contains('checked')){
    addAttackModifier("./be/attackModifiers/beRollingWound.png", 2);
    setCookie("perk7", "bechosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (bePerk8.classList.contains('checked')){
    addAttackModifier("./be/attackModifiers/beRollingWound.png", 2);
    setCookie("perk8", "bechosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (bePerk9.classList.contains('checked')){
    addAttackModifier("./be/attackModifiers/beRollingStun.png", 1);
    setCookie("perk9", "bechosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (bePerk10.classList.contains('checked')){
    addAttackModifier("./be/attackModifiers/beRollingStun.png", 1);
    setCookie("perk10", "bechosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (bePerk11.classList.contains('checked')){
    addAttackModifier("./be/attackModifiers/beRollingPlus1Disarm.png", 1);
    setCookie("perk11", "bechosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (bePerk12.classList.contains('checked')){
    addAttackModifier("./be/attackModifiers/beRollingHeal1.png", 2);
    setCookie("perk12", "bechosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (bePerk13.classList.contains('checked')){
    addAttackModifier("./be/attackModifiers/bePlus2Fire.png", 2);
    setCookie("perk13", "bechosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (bePerk14.classList.contains('checked')){
    addAttackModifier("./be/attackModifiers/bePlus2Fire.png", 2);
    setCookie("perk14", "bechosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (bePerk15.classList.contains('checked')){
    setCookie("perk15", "bechosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Beast tyrant
let btPerk1 = document.getElementById("btPerk1");
let btPerk2 = document.getElementById("btPerk2");
let btPerk3 = document.getElementById("btPerk3");
let btPerk4 = document.getElementById("btPerk4");
let btPerk5 = document.getElementById("btPerk5");
let btPerk6 = document.getElementById("btPerk6");
let btPerk7 = document.getElementById("btPerk7");
let btPerk8 = document.getElementById("btPerk8");
let btPerk9 = document.getElementById("btPerk9");
let btPerk10 = document.getElementById("btPerk10");
let btPerk11 = document.getElementById("btPerk11");
let btPerk12 = document.getElementById("btPerk12");
let btPerk13 = document.getElementById("btPerk13");
let btPerk14 = document.getElementById("btPerk14");
let btPerk15 = document.getElementById("btPerk15");

btConfirmPerksButton.onclick = () => {
  if(btPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "btchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(btPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./bt/attackModifiers/btPlus1.png", 1);
    setCookie("perk2", "btchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(btPerk3.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./bt/attackModifiers/btPlus1.png", 1);
    setCookie("perk3", "btchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(btPerk4.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./bt/attackModifiers/btPlus1.png", 1);
    setCookie("perk4", "btchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (btPerk5.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./bt/attackModifiers/btPlus2.png", 1);
    setCookie("perk5", "btchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (btPerk6.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./bt/attackModifiers/btPlus2.png", 1);
    setCookie("perk6", "btchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (btPerk7.classList.contains('checked')){
    addAttackModifier("./bt/attackModifiers/btPlus1Wound.png", 1);
    setCookie("perk7", "btchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (btPerk8.classList.contains('checked')){
    addAttackModifier("./bt/attackModifiers/btPlus1Wound.png", 1);
    setCookie("perk8", "btchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (btPerk9.classList.contains('checked')){
    addAttackModifier("./bt/attackModifiers/btPlus1Immobilize.png", 1);
    setCookie("perk9", "btchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (btPerk10.classList.contains('checked')){
    addAttackModifier("./bt/attackModifiers/btPlus1Immobilize.png", 1);
    setCookie("perk10", "btchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (btPerk11.classList.contains('checked')){
    addAttackModifier("./bt/attackModifiers/btRollingHeal1.png", 2);
    setCookie("perk11", "btchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (btPerk12.classList.contains('checked')){
    addAttackModifier("./bt/attackModifiers/btRollingHeal1.png", 2);
    setCookie("perk12", "btchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (btPerk13.classList.contains('checked')){
    addAttackModifier("./bt/attackModifiers/btRollingHeal1.png", 2);
    setCookie("perk13", "btchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (btPerk14.classList.contains('checked')){
    addAttackModifier("./bt/attackModifiers/btRollingEarth.png", 2);
    setCookie("perk14", "btchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (btPerk15.classList.contains('checked')){
    setCookie("perk15", "btchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
  }

//Doomstalker Perks
let dsPerk1 = document.getElementById("dsPerk1");
let dsPerk2 = document.getElementById("dsPerk2");
let dsPerk3 = document.getElementById("dsPerk3");
let dsPerk4 = document.getElementById("dsPerk4");
let dsPerk5 = document.getElementById("dsPerk5");
let dsPerk6 = document.getElementById("dsPerk6");
let dsPerk7 = document.getElementById("dsPerk7");
let dsPerk8 = document.getElementById("dsPerk8");
let dsPerk9 = document.getElementById("dsPerk9");
let dsPerk10 = document.getElementById("dsPerk10");
let dsPerk11 = document.getElementById("dsPerk11");
let dsPerk12 = document.getElementById("dsPerk12");
let dsPerk13 = document.getElementById("dsPerk13");
let dsPerk14 = document.getElementById("dsPerk14");
let dsPerk15 = document.getElementById("dsPerk15");
dsConfirmPerksButton.onclick = () =>{
  if(dsPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "dschosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(dsPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk2", "dschosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if (dsPerk3.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    addAttackModifier("./ds/attackModifiers/dsPlus1.png", 2);
    setCookie("perk3", "dschosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (dsPerk4.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    addAttackModifier("./ds/attackModifiers/dsPlus1.png", 2);
    setCookie("perk4", "dschosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (dsPerk5.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    addAttackModifier("./ds/attackModifiers/dsPlus1.png", 2);
    setCookie("perk5", "dschosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (dsPerk6.classList.contains('checked')){
    addAttackModifier("./ds/attackModifiers/dsRollingPlus1.png", 2);
    setCookie("perk6", "dschosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (dsPerk7.classList.contains('checked')){
    addAttackModifier("./ds/attackModifiers/dsRollingPlus1.png", 2);
    setCookie("perk7", "dschosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (dsPerk8.classList.contains('checked')){
    addAttackModifier("./ds/attackModifiers/dsPlus2Muddle.png", 1);
    setCookie("perk8", "dschosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (dsPerk9.classList.contains('checked')){
    addAttackModifier("./ds/attackModifiers/dsPlus1Poison.png", 1);
    setCookie("perk9", "dschosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (dsPerk10.classList.contains('checked')){
    addAttackModifier("./ds/attackModifiers/dsPlus1Wound.png", 1);
    setCookie("perk10", "dschosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (dsPerk11.classList.contains('checked')){
    addAttackModifier("./ds/attackModifiers/dsPlus1Immobilize.png", 1);
    setCookie("perk11", "dschosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (dsPerk12.classList.contains('checked')){
    addAttackModifier("./ds/attackModifiers/dsPlus0Stun.png", 1);
    setCookie("perk12", "dschosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (dsPerk13.classList.contains('checked')){
    addAttackModifier("./ds/attackModifiers/dsRollingAddTarget.png", 1);
    setCookie("perk13", "dschosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (dsPerk14.classList.contains('checked')){
    addAttackModifier("./ds/attackModifiers/dsRollingAddTarget.png", 1);
    setCookie("perk14", "dschosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (dsPerk15.classList.contains('checked')){
    setCookie("perk15", "dschosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Elementalist Perks
let elPerk1 = document.getElementById("elPerk1");
let elPerk2 = document.getElementById("elPerk2");
let elPerk3 = document.getElementById("elPerk3");
let elPerk4 = document.getElementById("elPerk4");
let elPerk5 = document.getElementById("elPerk5");
let elPerk6 = document.getElementById("elPerk6");
let elPerk7 = document.getElementById("elPerk7");
let elPerk8 = document.getElementById("elPerk8");
let elPerk9 = document.getElementById("elPerk9");
let elPerk10 = document.getElementById("elPerk10");
let elPerk11 = document.getElementById("elPerk11");
let elPerk12 = document.getElementById("elPerk12");
let elPerk13 = document.getElementById("elPerk13");
let elPerk14 = document.getElementById("elPerk14");
let elPerk15 = document.getElementById("elPerk15");
elConfirmPerksButton.onclick = () =>{
  if(elPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "elchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(elPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk2", "elchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if (elPerk3.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./el/attackModifiers/elPlus1.png", 1);
    setCookie("perk3", "elchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (elPerk4.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./el/attackModifiers/elPlus2.png", 1);
    setCookie("perk4", "elchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (elPerk5.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./el/attackModifiers/elPlus2.png", 1);
    setCookie("perk5", "elchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (elPerk6.classList.contains('checked')){
    addAttackModifier("./el/attackModifiers/elPlus0Fire.png", 3);
    setCookie("perk6", "elchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (elPerk7.classList.contains('checked')){
    addAttackModifier("./el/attackModifiers/elPlus0Frost.png", 3);
    setCookie("perk7", "elchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (elPerk8.classList.contains('checked')){
    addAttackModifier("./el/attackModifiers/elPlus0Wind.png", 3);
    setCookie("perk8", "elchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (elPerk9.classList.contains('checked')){
    addAttackModifier("./el/attackModifiers/elPlus0Earth.png", 3);
    setCookie("perk9", "elchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (elPerk10.classList.contains('checked')){
    removeAttackModifier(modZero, 2);
    addAttackModifier("./el/attackModifiers/elPlus0Fire.png", 1);
    addAttackModifier("./el/attackModifiers/elPlus0Earth.png", 1);
    setCookie("perk10", "elchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (elPerk11.classList.contains('checked')){
    removeAttackModifier(modZero, 2);
    addAttackModifier("./el/attackModifiers/elPlus0Frost.png", 1);
    addAttackModifier("./el/attackModifiers/elPlus0Wind.png", 1);
    setCookie("perk11", "elchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (elPerk12.classList.contains('checked')){
    addAttackModifier("./el/attackModifiers/elPlus1Push1.png", 2);
    setCookie("perk12", "elchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (elPerk13.classList.contains('checked')){
    addAttackModifier("./el/attackModifiers/elPlus1Wound.png", 1);
    setCookie("perk13", "elchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (elPerk14.classList.contains('checked')){
    addAttackModifier("./el/attackModifiers/elPlus0Stun.png", 1);
    setCookie("perk14", "elchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (elPerk15.classList.contains('checked')){
    addAttackModifier("./el/attackModifiers/elPlus0AddTarget.png", 1);
    setCookie("perk15", "elchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//nightshroud
let nsPerk1 = document.getElementById("nsPerk1");
let nsPerk2 = document.getElementById("nsPerk2");
let nsPerk3 = document.getElementById("nsPerk3");
let nsPerk4 = document.getElementById("nsPerk4");
let nsPerk5 = document.getElementById("nsPerk5");
let nsPerk6 = document.getElementById("nsPerk6");
let nsPerk7 = document.getElementById("nsPerk7");
let nsPerk8 = document.getElementById("nsPerk8");
let nsPerk9 = document.getElementById("nsPerk9");
let nsPerk10 = document.getElementById("nsPerk10");
let nsPerk11 = document.getElementById("nsPerk11");
let nsPerk12 = document.getElementById("nsPerk12");
let nsPerk13 = document.getElementById("nsPerk13");
let nsPerk14 = document.getElementById("nsPerk14");
let nsPerk15 = document.getElementById("nsPerk15");
let hasMinus1 = 0;
let nsModMinus1 = "./ns/attackModifiers/nsMinus1Dark.png";

nsConfirmPerksButton.onclick = () => {
  if(nsPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "nschosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(nsPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk2", "nschosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if(nsPerk3.classList.contains('checked')){
    removeAttackModifier(modZero, 4);
    setCookie("perk3", "nschosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if(nsPerk4.classList.contains('checked')){
    addAttackModifier("./ns/attackModifiers/nsMinus1Dark.png", 1);
    hasMinus1++;
    setCookie("perk4", "nschosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (nsPerk5.classList.contains('checked')){
    addAttackModifier("./ns/attackModifiers/nsMinus1Dark.png", 1);
    hasMinus1++;
    setCookie("perk5", "nschosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (nsPerk6.classList.contains('checked') && (hasMinus1> 0)){
    removeAttackModifier(nsModMinus1, 1);
    addAttackModifier("./ns/attackModifiers/nsPlus1Dark.png", 1);
    hasMinus1--;
    setCookie("perk6", "nschosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (nsPerk7.classList.contains('checked') && (hasMinus1> 0)){
    removeAttackModifier(nsModMinus1, 1);
    addAttackModifier("./ns/attackModifiers/nsPlus1Dark.png", 1);
    hasMinus1--;
    setCookie("perk7", "nschosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (nsPerk8.classList.contains('checked')){
    addAttackModifier("./ns/attackModifiers/nsPlus1Invisible.png", 1);
    setCookie("perk8", "nschosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (nsPerk9.classList.contains('checked')){
    addAttackModifier("./ns/attackModifiers/nsPlus1Invisible.png", 1);
    setCookie("perk9", "nschosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (nsPerk10.classList.contains('checked')){
    addAttackModifier("./ns/attackModifiers/nsRollingMuddle.png", 3);
    setCookie("perk10", "nschosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (nsPerk11.classList.contains('checked')){
    addAttackModifier("./ns/attackModifiers/nsRollingMuddle.png", 3);
    setCookie("perk11", "nschosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (nsPerk12.classList.contains('checked')){
    addAttackModifier("./ns/attackModifiers/nsRollingHeal1.png", 2);
    setCookie("perk12", "nschosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (nsPerk13.classList.contains('checked')){
    addAttackModifier("./ns/attackModifiers/nsRollingCurse.png", 2);
    setCookie("perk13", "nschosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (nsPerk14.classList.contains('checked')){
    addAttackModifier("./ns/attackModifiers/nsRollingAddTarget.png", 1);
    setCookie("perk14", "nschosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (nsPerk15.classList.contains('checked')){
    addAttackModifier("./ns/attackModifiers/nsPlus1.png", 2);
    setCookie("perk15", "nschosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Plagueherald Perks
let phPerk1 = document.getElementById("phPerk1");
let phPerk2 = document.getElementById("phPerk2");
let phPerk3 = document.getElementById("phPerk3");
let phPerk4 = document.getElementById("phPerk4");
let phPerk5 = document.getElementById("phPerk5");
let phPerk6 = document.getElementById("phPerk6");
let phPerk7 = document.getElementById("phPerk7");
let phPerk8 = document.getElementById("phPerk8");
let phPerk9 = document.getElementById("phPerk9");
let phPerk10 = document.getElementById("phPerk10");
let phPerk11 = document.getElementById("phPerk11");
let phPerk12 = document.getElementById("phPerk12");
let phPerk13 = document.getElementById("phPerk13");
let phPerk14 = document.getElementById("phPerk14");
let phPerk15 = document.getElementById("phPerk15");
phConfirmPerksButton.onclick = () =>{
  if(phPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus2, 1);
    addAttackModifier("./ph/attackModifiers/phPlus0.png", 1);
    setCookie("perk1", "phchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(phPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./ph/attackModifiers/phPlus1.png", 1);
    setCookie("perk2", "phchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if (phPerk3.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./ph/attackModifiers/phPlus1.png", 1);
    setCookie("perk3", "phchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (phPerk4.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./ph/attackModifiers/phPlus2.png", 1);
    setCookie("perk4", "phchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (phPerk5.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./ph/attackModifiers/phPlus2.png", 1);
    setCookie("perk5", "phchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (phPerk6.classList.contains('checked')){
    addAttackModifier("./ph/attackModifiers/phPlus1.png", 2);
    setCookie("perk6", "phchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (phPerk7.classList.contains('checked')){
    addAttackModifier("./ph/attackModifiers/phPlus1Wind.png", 1);
    setCookie("perk7", "phchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (phPerk8.classList.contains('checked')){
    addAttackModifier("./ph/attackModifiers/phPlus1Wind.png", 1);
    setCookie("perk8", "phchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (phPerk9.classList.contains('checked')){
    addAttackModifier("./ph/attackModifiers/phPlus1Wind.png", 1);
    setCookie("perk9", "phchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (phPerk10.classList.contains('checked')){
    addAttackModifier("./ph/attackModifiers/phRollingPoison.png", 3);
    setCookie("perk10", "phchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (phPerk11.classList.contains('checked')){
    addAttackModifier("./ph/attackModifiers/phRollingCurse.png", 2);
    setCookie("perk11", "phchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (phPerk12.classList.contains('checked')){
    addAttackModifier("./ph/attackModifiers/phRollingImmobilize.png", 2);
    setCookie("perk12", "phchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (phPerk13.classList.contains('checked')){
    addAttackModifier("./ph/attackModifiers/phRollingStun.png", 1);
    setCookie("perk13", "phchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (phPerk14.classList.contains('checked')){
    addAttackModifier("./ph/attackModifiers/phRollingStun.png", 1);
    setCookie("perk14", "phchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (phPerk15.classList.contains('checked')){
    addAttackModifier("./ph/attackModifiers/phPlus1.png", 1);
    setCookie("perk15", "phchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Quartermaster Perks
let qmPerk1 = document.getElementById("qmPerk1");
let qmPerk2 = document.getElementById("qmPerk2");
let qmPerk3 = document.getElementById("qmPerk3");
let qmPerk4 = document.getElementById("qmPerk4");
let qmPerk5 = document.getElementById("qmPerk5");
let qmPerk6 = document.getElementById("qmPerk6");
let qmPerk7 = document.getElementById("qmPerk7");
let qmPerk8 = document.getElementById("qmPerk8");
let qmPerk9 = document.getElementById("qmPerk9");
let qmPerk10 = document.getElementById("qmPerk10");
let qmPerk11 = document.getElementById("qmPerk11");
let qmPerk12 = document.getElementById("qmPerk12");
let qmPerk13 = document.getElementById("qmPerk13");
let qmPerk14 = document.getElementById("qmPerk14");
let qmPerk15 = document.getElementById("qmPerk15");
qmConfirmPerksButton.onclick = () =>{
  if(qmPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "qmchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(qmPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk2", "qmchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if (qmPerk3.classList.contains('checked')){
    removeAttackModifier(modZero, 4);
    setCookie("perk3", "qmchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (qmPerk4.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./qm/attackModifiers/qmPlus2.png", 1);
    setCookie("perk4", "qmchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (qmPerk5.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./qm/attackModifiers/qmPlus2.png", 1);
    setCookie("perk5", "qmchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (qmPerk6.classList.contains('checked')){
    addAttackModifier("./qm/attackModifiers/qmRollingPlus1.png", 2);
    setCookie("perk6", "qmchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (qmPerk7.classList.contains('checked')){
    addAttackModifier("./qm/attackModifiers/qmRollingPlus1.png", 2);
    setCookie("perk7", "qmchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (qmPerk8.classList.contains('checked')){
    addAttackModifier("./qm/attackModifiers/qmRollingMuddle.png", 3);
    setCookie("perk8", "qmchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (qmPerk9.classList.contains('checked')){
    addAttackModifier("./qm/attackModifiers/qmRollingPierce3.png", 2);
    setCookie("perk9", "qmchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (qmPerk10.classList.contains('checked')){
    addAttackModifier("./qm/attackModifiers/qmRollingStun.png", 1);
    setCookie("perk10", "qmchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (qmPerk11.classList.contains('checked')){
    addAttackModifier("./qm/attackModifiers/qmRollingAddTarget.png", 1);
    setCookie("perk11", "qmchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (qmPerk12.classList.contains('checked')){
    addAttackModifier("./qm/attackModifiers/qmPlus0RefreshItem.png", 1);
    setCookie("perk12", "qmchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (qmPerk13.classList.contains('checked')){
    addAttackModifier("./qm/attackModifiers/qmPlus0RefreshItem.png", 1);
    setCookie("perk13", "qmchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (qmPerk14.classList.contains('checked')){
    addAttackModifier("./qm/attackModifiers/qmPlus0RefreshItem.png", 1);
    setCookie("perk14", "qmchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (qmPerk15.classList.contains('checked')){
    addAttackModifier("./qm/attackModifiers/qmPlus1.png", 2);
    setCookie("perk15", "qmchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Sawbones Perks
let sbPerk1 = document.getElementById("sbPerk1");
let sbPerk2 = document.getElementById("sbPerk2");
let sbPerk3 = document.getElementById("sbPerk3");
let sbPerk4 = document.getElementById("sbPerk4");
let sbPerk5 = document.getElementById("sbPerk5");
let sbPerk6 = document.getElementById("sbPerk6");
let sbPerk7 = document.getElementById("sbPerk7");
let sbPerk8 = document.getElementById("sbPerk8");
let sbPerk9 = document.getElementById("sbPerk9");
let sbPerk10 = document.getElementById("sbPerk10");
let sbPerk11 = document.getElementById("sbPerk11");
let sbPerk12 = document.getElementById("sbPerk12");
let sbPerk13 = document.getElementById("sbPerk13");
let sbPerk14 = document.getElementById("sbPerk14");
let sbPerk15 = document.getElementById("sbPerk15");
sbConfirmPerksButton.onclick = () =>{
  if(sbPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "sbchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(sbPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk2", "sbchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if (sbPerk3.classList.contains('checked')){
    removeAttackModifier(modZero, 4);
    setCookie("perk3", "sbchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (sbPerk4.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./sb/attackModifiers/sbPlus2.png", 1);
    setCookie("perk4", "sbchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (sbPerk5.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./sb/attackModifiers/sbPlus2.png", 1);
    setCookie("perk5", "sbchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (sbPerk6.classList.contains('checked')){
    addAttackModifier("./sb/attackModifiers/sbRollingPlus2.png", 1);
    setCookie("perk6", "sbchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (sbPerk7.classList.contains('checked')){
    addAttackModifier("./sb/attackModifiers/sbRollingPlus2.png", 1);
    setCookie("perk7", "sbchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (sbPerk8.classList.contains('checked')){
    addAttackModifier("./sb/attackModifiers/sbPlus1Immobilize.png", 1);
    setCookie("perk8", "sbchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (sbPerk9.classList.contains('checked')){
    addAttackModifier("./sb/attackModifiers/sbPlus1Immobilize.png", 1);
    setCookie("perk9", "sbchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (sbPerk10.classList.contains('checked')){
    addAttackModifier("./sb/attackModifiers/sbRollingWound.png", 2);
    setCookie("perk10", "sbchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (sbPerk11.classList.contains('checked')){
    addAttackModifier("./sb/attackModifiers/sbRollingWound.png", 2);
    setCookie("perk11", "sbchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (sbPerk12.classList.contains('checked')){
    addAttackModifier("./sb/attackModifiers/sbRollingStun.png", 1);
    setCookie("perk12", "sbchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (sbPerk13.classList.contains('checked')){
    addAttackModifier("./sb/attackModifiers/sbRollingHeal3.png", 1);
    setCookie("perk13", "sbchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (sbPerk14.classList.contains('checked')){
    addAttackModifier("./sb/attackModifiers/sbRollingHeal3.png", 1);
    setCookie("perk14", "sbchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (sbPerk15.classList.contains('checked')){
    addAttackModifier("./sb/attackModifiers/sbPlus0RefreshItem.png", 1);
    setCookie("perk15", "sbchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Sunkeeper Perks
let skPerk1 = document.getElementById("skPerk1");
let skPerk2 = document.getElementById("skPerk2");
let skPerk3 = document.getElementById("skPerk3");
let skPerk4 = document.getElementById("skPerk4");
let skPerk5 = document.getElementById("skPerk5");
let skPerk6 = document.getElementById("skPerk6");
let skPerk7 = document.getElementById("skPerk7");
let skPerk8 = document.getElementById("skPerk8");
let skPerk9 = document.getElementById("skPerk9");
let skPerk10 = document.getElementById("skPerk10");
let skPerk11 = document.getElementById("skPerk11");
let skPerk12 = document.getElementById("skPerk12");
let skPerk13 = document.getElementById("skPerk13");
let skPerk14 = document.getElementById("skPerk14");
let skPerk15 = document.getElementById("skPerk15");
skConfirmPerksButton.onclick = () =>{
  if(skPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "skchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(skPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk2", "skchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if (skPerk3.classList.contains('checked')){
    removeAttackModifier(modZero, 4);
    setCookie("perk3", "skchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (skPerk4.classList.contains('checked')){
    removeAttackModifier(modMinus2, 1);
    addAttackModifier("./sk/attackModifiers/skPlus0.png", 1);
    setCookie("perk4", "skchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (skPerk5.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./sk/attackModifiers/skPlus2.png", 1);
    setCookie("perk5", "skchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (skPerk6.classList.contains('checked')){
    addAttackModifier("./sk/attackModifiers/skRollingPlus1.png", 2);
    setCookie("perk6", "skchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (skPerk7.classList.contains('checked')){
    addAttackModifier("./sk/attackModifiers/skRollingPlus1.png", 2);
    setCookie("perk7", "skchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (skPerk8.classList.contains('checked')){
    addAttackModifier("./sk/attackModifiers/skRollingHeal1.png", 2);
    setCookie("perk8", "skchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (skPerk9.classList.contains('checked')){
    addAttackModifier("./sk/attackModifiers/skRollingHeal1.png", 2);
    setCookie("perk9", "skchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (skPerk10.classList.contains('checked')){
    addAttackModifier("./sk/attackModifiers/skRollingStun.png", 1);
    setCookie("perk10", "skchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (skPerk11.classList.contains('checked')){
    addAttackModifier("./sk/attackModifiers/skRollingInfuseLight.png", 2);
    setCookie("perk11", "skchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (skPerk12.classList.contains('checked')){
    addAttackModifier("./sk/attackModifiers/skRollingInfuseLight.png", 2);
    setCookie("perk12", "skchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (skPerk13.classList.contains('checked')){
    addAttackModifier("./sk/attackModifiers/skRollingShield1.png", 2);
    setCookie("perk13", "skchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (skPerk14.classList.contains('checked')){
    addAttackModifier("./sk/attackModifiers/skPlus1.png", 2);
    setCookie("perk14", "skchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (skPerk15.classList.contains('checked')){
    setCookie("perk15", "skchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Soothsinger Perks
let ssPerk1 = document.getElementById("ssPerk1");
let ssPerk2 = document.getElementById("ssPerk2");
let ssPerk3 = document.getElementById("ssPerk3");
let ssPerk4 = document.getElementById("ssPerk4");
let ssPerk5 = document.getElementById("ssPerk5");
let ssPerk6 = document.getElementById("ssPerk6");
let ssPerk7 = document.getElementById("ssPerk7");
let ssPerk8 = document.getElementById("ssPerk8");
let ssPerk9 = document.getElementById("ssPerk9");
let ssPerk10 = document.getElementById("ssPerk10");
let ssPerk11 = document.getElementById("ssPerk11");
let ssPerk12 = document.getElementById("ssPerk12");
let ssPerk13 = document.getElementById("ssPerk13");
let ssPerk14 = document.getElementById("ssPerk14");
let ssPerk15 = document.getElementById("ssPerk15");
ssConfirmPerksButton.onclick = () =>{
  if(ssPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "sschosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(ssPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk2", "sschosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if (ssPerk3.classList.contains('checked')){
    removeAttackModifier(modMinus2, 1);
    setCookie("perk3", "sschosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (ssPerk4.classList.contains('checked')){
    removeAttackModifier(modPlus1, 2);
    addAttackModifier("./ss/attackModifiers/ssPlus4.png", 1);
    setCookie("perk4", "sschosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (ssPerk5.classList.contains('checked')){
    removeAttackModifier(modPlus1, 2);
    addAttackModifier("./ss/attackModifiers/ssPlus4.png", 1);
    setCookie("perk5", "sschosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (ssPerk6.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./ss/attackModifiers/ssPlus1Immobilize.png", 1);
    setCookie("perk6", "sschosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (ssPerk7.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./ss/attackModifiers/ssPlus1Disarm.png", 1);
    setCookie("perk7", "sschosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (ssPerk8.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./ss/attackModifiers/ssPlus2Wound.png", 1);
    setCookie("perk8", "sschosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (ssPerk9.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./ss/attackModifiers/ssPlus2Poison.png", 1);
    setCookie("perk9", "sschosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (ssPerk10.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./ss/attackModifiers/ssPlus2Curse.png", 1);
    setCookie("perk10", "sschosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (ssPerk11.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./ss/attackModifiers/ssPlus3Muddle.png", 1);
    setCookie("perk11", "sschosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (ssPerk12.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./ss/attackModifiers/ssStun.png", 1);
    setCookie("perk12", "sschosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (ssPerk13.classList.contains('checked')){
    addAttackModifier("./ss/attackModifiers/ssRollingPlus1.png", 3);
    setCookie("perk13", "sschosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (ssPerk14.classList.contains('checked')){
    addAttackModifier("./ss/attackModifiers/ssCurse.png", 2);
    setCookie("perk14", "sschosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (ssPerk15.classList.contains('checked')){
    addAttackModifier("./ss/attackModifiers/ssCurse.png", 2);
    setCookie("perk15", "sschosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Summoner Perks
let suPerk1 = document.getElementById("suPerk1");
let suPerk2 = document.getElementById("suPerk2");
let suPerk3 = document.getElementById("suPerk3");
let suPerk4 = document.getElementById("suPerk4");
let suPerk5 = document.getElementById("suPerk5");
let suPerk6 = document.getElementById("suPerk6");
let suPerk7 = document.getElementById("suPerk7");
let suPerk8 = document.getElementById("suPerk8");
let suPerk9 = document.getElementById("suPerk9");
let suPerk10 = document.getElementById("suPerk10");
let suPerk11 = document.getElementById("suPerk11");
let suPerk12 = document.getElementById("suPerk12");
let suPerk13 = document.getElementById("suPerk13");
let suPerk14 = document.getElementById("suPerk14");
let suPerk15 = document.getElementById("suPerk15");
suConfirmPerksButton.onclick = () =>{
  if(suPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus1, 2);
    setCookie("perk1", "suchosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(suPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus2, 1);
    addAttackModifier("./su/attackModifiers/suPlus0.png", 1);
    setCookie("perk2", "suchosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if (suPerk3.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./su/attackModifiers/suPlus1.png", 1);
    setCookie("perk3", "suchosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (suPerk4.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./su/attackModifiers/suPlus1.png", 1);
    setCookie("perk4", "suchosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (suPerk5.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./su/attackModifiers/suPlus1.png", 1);
    setCookie("perk5", "suchosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (suPerk6.classList.contains('checked')){
    addAttackModifier("./su/attackModifiers/suPlus2.png", 1);
    setCookie("perk6", "suchosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (suPerk7.classList.contains('checked')){
    addAttackModifier("./su/attackModifiers/suPlus2.png", 1);
    setCookie("perk7", "suchosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (suPerk8.classList.contains('checked')){
    addAttackModifier("./su/attackModifiers/suRollingWound.png", 2);
    setCookie("perk8", "suchosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (suPerk9.classList.contains('checked')){
    addAttackModifier("./su/attackModifiers/suRollingPoison.png", 2);
    setCookie("perk9", "suchosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (suPerk10.classList.contains('checked')){
    addAttackModifier("./su/attackModifiers/suRollingHeal1.png", 2);
    setCookie("perk10", "suchosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (suPerk11.classList.contains('checked')){
    addAttackModifier("./su/attackModifiers/suRollingHeal1.png", 2);
    setCookie("perk11", "suchosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (suPerk12.classList.contains('checked')){
    addAttackModifier("./su/attackModifiers/suRollingHeal1.png", 2);
    setCookie("perk12", "suchosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (suPerk13.classList.contains('checked')){
    addAttackModifier("./su/attackModifiers/suInfuseFire.png", 1);
    addAttackModifier("./su/attackModifiers/suInfuseWind.png", 1);
    setCookie("perk13", "suchosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (suPerk14.classList.contains('checked')){
    addAttackModifier("./su/attackModifiers/suInfuseDark.png", 1);
    addAttackModifier("./su/attackModifiers/suInfuseEarth.png", 1);
    setCookie("perk14", "suchosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (suPerk15.classList.contains('checked')){
    addAttackModifier("./su/attackModifiers/suPlus1.png", 2);
    setCookie("perk15", "suchosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Bladeswarm Perks
let bsPerk1 = document.getElementById("bsPerk1");
let bsPerk2 = document.getElementById("bsPerk2");
let bsPerk3 = document.getElementById("bsPerk3");
let bsPerk4 = document.getElementById("bsPerk4");
let bsPerk5 = document.getElementById("bsPerk5");
let bsPerk6 = document.getElementById("bsPerk6");
let bsPerk7 = document.getElementById("bsPerk7");
let bsPerk8 = document.getElementById("bsPerk8");
let bsPerk9 = document.getElementById("bsPerk9");
let bsPerk10 = document.getElementById("bsPerk10");
let bsPerk11 = document.getElementById("bsPerk11");
let bsPerk12 = document.getElementById("bsPerk12");
let bsPerk13 = document.getElementById("bsPerk13");
let bsPerk14 = document.getElementById("bsPerk14");
let bsPerk15 = document.getElementById("bsPerk15");
bsConfirmPerksButton.onclick = () =>{
  if(bsPerk1.classList.contains('checked')){
    removeAttackModifier(modMinus2, 1);
    addAttackModifier("./bs/attackModifiers/bsPlus0.png", 1);
    setCookie("perk1", "bschosen", 365);
  } else {
    setCookie("perk1", "notChosen", 365);
  }
  if(bsPerk2.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./bs/attackModifiers/bsWound.png", 1);
    setCookie("perk2", "bschosen", 365);
  } else {
    setCookie("perk2", "notChosen", 365);
  }
  if (bsPerk3.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./bs/attackModifiers/bsWound.png", 1);
    setCookie("perk3", "bschosen", 365);
  } else {
    setCookie("perk3", "notChosen", 365);
  }
  if (bsPerk4.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./bs/attackModifiers/bsPoison.png", 1);
    setCookie("perk4", "bschosen", 365);
  } else {
    setCookie("perk4", "notChosen", 365);
  }
  if (bsPerk5.classList.contains('checked')){
    removeAttackModifier(modMinus1, 1);
    addAttackModifier("./bs/attackModifiers/bsPoison.png", 1);
    setCookie("perk5", "bschosen", 365);
  } else {
    setCookie("perk5", "notChosen", 365);
  }
  if (bsPerk6.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./bs/attackModifiers/bsPlus1Wind.png", 1);
    setCookie("perk6", "bschosen", 365);
  } else {
    setCookie("perk6", "notChosen", 365);
  }
  if (bsPerk7.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./bs/attackModifiers/bsPlus1Earth.png", 1);
    setCookie("perk7", "bschosen", 365);
  } else {
    setCookie("perk7", "notChosen", 365);
  }
  if (bsPerk8.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./bs/attackModifiers/bsPlus1Light.png", 1);
    setCookie("perk8", "bschosen", 365);
  } else {
    setCookie("perk8", "notChosen", 365);
  }
  if (bsPerk9.classList.contains('checked')){
    removeAttackModifier(modZero, 1);
    addAttackModifier("./bs/attackModifiers/bsPlus1Dark.png", 1);
    setCookie("perk9", "bschosen", 365);
  } else {
    setCookie("perk9", "notChosen", 365);
  }
  if (bsPerk10.classList.contains('checked')){
    addAttackModifier("./bs/attackModifiers/bsPlus2Muddle.png", 1);
    setCookie("perk10", "bschosen", 365);
  } else {
    setCookie("perk10", "notChosen", 365);
  }
  if (bsPerk11.classList.contains('checked')){
    addAttackModifier("./bs/attackModifiers/bsPlus2Muddle.png", 1);
    setCookie("perk11", "bschosen", 365);
  } else {
    setCookie("perk11", "notChosen", 365);
  }
  if (bsPerk12.classList.contains('checked')){
    addAttackModifier("./bs/attackModifiers/bsRollingHeal1.png", 2);
    setCookie("perk12", "bschosen", 365);
  } else {
    setCookie("perk12", "notChosen", 365);
  }
  if (bsPerk13.classList.contains('checked')){
    addAttackModifier("./bs/attackModifiers/bsRollingHeal1.png", 2);
    setCookie("perk13", "bschosen", 365);
  } else {
    setCookie("perk13", "notChosen", 365);
  }
  if (bsPerk14.classList.contains('checked')){
    addAttackModifier("./bs/attackModifiers/bsPlus1.png", 1);
    setCookie("perk14", "bschosen", 365);
  } else {
    setCookie("perk14", "notChosen", 365);
  }
  if (bsPerk15.classList.contains('checked')){
    addAttackModifier("./bs/attackModifiers/bsPlus1.png", 1);
    setCookie("perk15", "bschosen", 365);
  } else {
    setCookie("perk15", "notChosen", 365);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
}

//Modal for showing what is in the played modifier deck
var zoomModal = document.getElementById("zoomModal");
var close = document.getElementById("zoomClose");
playedModifiers.onclick = function() {
  zoomModal.style.display = "block";
}

// Close the Modal when clicking on the X
close.onclick = function() {
  zoomModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == zoomModal) {
      zoomModal.style.display = "none";
  }
  if (event.target == acceptCardModal) {
    acceptCardModal.style.display = "none";
  }
}

//Modal for showing cards that can be added to hand from other players

// Button for opening the modal
let acceptCardOpenButton = document.getElementById('accept-card-button');

// Get the modal
var acceptCardModal = document.getElementById("acceptCardModal");

// Get the <span> element that closes the Accept Cards modal
var closeAccept = document.getElementById("acceptCardClose");

// When the user clicks on the button, open the modal
acceptCardOpenButton.onclick = function() {
  acceptCardModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeAccept.onclick = function() {
  acceptCardModal.style.display = "none";
}

// Button in the Accept Card modal to add card to hand
let acceptCardAddButton = document.getElementById("modalAcceptCard");

// Set up function when clicking on an ability card in the Accept Card dialog
var acceptCards = document.querySelectorAll(".acceptCard")
for (var i = 0; i < acceptCards.length; i++) {
  (function () {
    var acceptCard = acceptCards[i];
    acceptCard.onclick = (function (){
      if (acceptCard.classList.contains("active-selected")) {
        acceptCard.classList.remove("active-selected");
      } else {
        acceptCard.classList.add("active-selected");
      }
      var selectedCount = 0;
      for (var j = 0; j < acceptCards.length; j++) {
        if (acceptCards[j].classList.contains("active-selected")) {
          selectedCount++;
        }
      }
      if (selectedCount > 0) {
        acceptCardAddButton.classList.remove("not-without-more-selected");
      } else {
        acceptCardAddButton.classList.add("not-without-more-selected");
      }
    });
  }).call(this.i);
};

// Add selected cards to hand
acceptCardAddButton.onclick = () => {
  var cardsInHand = document.querySelectorAll(".hand");
  var acceptCard = "";
  for (var i = 0; i < acceptCards.length; i++){
    acceptCard = acceptCards[i];
    if (acceptCard.classList.contains("active-selected")){
      for (var j = 0; j < cardsInHand.length; j++){
        (function () {
          var cardInHand = cardsInHand[j];
          if(cardInHand.classList.contains("flipped")){
            cardInHand.src = acceptCard.src;
            cardInHand.classList.remove("flipped");
            cardInHand.classList.remove("hiding");
            j = cardsInHand.length;
          }
        }).call(this,i);
      }
      acceptCard.classList.remove("active-selected")
    }
  }
  acceptCardModal.style.display = "none";
}