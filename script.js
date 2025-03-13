//TODO: add on load/ready functionality
document.addEventListener("DOMContentLoaded", () => {
console.log("ready!");
// TODO: add functionality to change password
document.getElementById('change-password-form').addEventListener('submit', function(event) {
   event.preventDefault(); // Hindrer at skjemaet sender og oppdaterer siden

   // Hent verdiene fra inputfeltene
   const newPassword = document.getElementById('new-password').value;
   const confirmPassword = document.getElementById('confirm-password').value;

   // Valider at passordene er like
   if (newPassword === confirmPassword) {
       // Hvis passordene er like, vis en suksessmelding
       document.getElementById('password-feedback').innerText = "Password changed successfully!";
       document.getElementById('password-feedback').style.color = "green";
   } else {
       // Hvis passordene ikke er like, vis en feilmelding
       document.getElementById('password-feedback').innerText = "Passwords do not match.";
       document.getElementById('password-feedback').style.color = "red";
   }
});
});
$(".book").click(function () {
   var bookId = $(this).attr("id") + "-book"; // Finn bokens ID
   $("#" + bookId).removeClass("hidden"); // Vis boken
   $(".spell-page").addClass("hidden"); // Skjul alle åpne bøker
    $("#" + bookId).removeClass("hidden"); // Vis den nye boken
});

$("#close-tome").click(function () {
   $(this).closest(".spell-page").addClass("hidden"); // Skjul bokinnhold
});
// 
document.getElementById('rename-form').addEventListener('submit', function(event) {
   event.preventDefault(); // Hindrer at skjemaet sender og oppdaterer siden

   // Hent verdiene fra inputfeltene
   const newName = document.getElementById('new-name').value;
   const newTitle = document.getElementById('new-title').value;
   
   // Oppdater navnet og tittelen på siden
   document.getElementById('wizard-name').innerText = newName;
   document.getElementById('wizard-title').innerText = newTitle;
   
   // Vis en suksessmelding
   document.getElementById('name-feedback').innerText = "Name and title changed successfully!";
   document.getElementById('name-feedback').style.color = "green";
});

//TODO: add functionality to open the correct spell books
function openSpellBook(){
   console.log("How do you find the right spellbook?!")

}
document.getElementById('summon-form').addEventListener('submit', function(event) {
   event.preventDefault(); // Hindrer at skjemaet sender og oppdaterer siden

   // Hent verdier fra skjemaet
   const familiarName = document.getElementById('familiar-name').value;
   const familiarType = document.getElementById('familiar-type').value;
   const hasWings = document.getElementById('has-wings').checked;
   const wingType = hasWings ? document.getElementById('wing-type').value : 'None';
   const traits = Array.from(document.querySelectorAll('input[name="traits"]:checked')).map(el => el.value);
   const mood = document.getElementById('familiar-mood').value;
   const contractEnd = document.getElementById('contract-end').value;
   
   // Bygg en beskrivelse av familiaren
   let description = `${familiarName}, a ${familiarType} with ${wingType} wings.`;
   if (traits.length > 0) {
       familiardescription += ` It has the following traits: ${traits.join(', ')}.`;
   }
   familiardescription += ` It appears to be ${mood}. The contract ends on ${contractEnd}.`;

   // Vis familiarens beskrivelse i konsollen
   console.log(description);
   alert(familiarDescription);

   // Vis en tilbakemelding på nettsiden
   document.getElementById('familiar-feedback').innerText = "Familiar summoned successfully!";
   document.getElementById('familiar-feedback').style.color = "green";
});

// Dynamisk visning av vingetype basert på "Has Wings"-checkbox
document.getElementById('has-wings').addEventListener('change', function() {
   const wingTypeField = document.getElementById('wing-type');
   if (this.checked) {
       wingTypeField.classList.remove('hidden');
   } else {
       wingTypeField.classList.add('hidden');
   }
});
   

//TODO: add functionality to change password
//TODO: add functionality to change name
//TODO: add functionality to summon familiar
// have a function where you can load content into a "user array" -> easier to work with
