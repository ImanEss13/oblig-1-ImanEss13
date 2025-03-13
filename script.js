//TODO: add on load/ready functionality
document.addEventListener("DOMContentLoaded", () => {
console.log("ready!");

});
$(".book").click(function () {
   var bookId = $(this).attr("id") + "-book"; // Finn bokens ID
   $(".spell-page").addClass("hidden"); // Skjul alle åpne bøker
    $("#" + bookId).removeClass("hidden"); // Vis den nye boken
});


//TODO: add functionality to open the correct spell books
function openSpellBook(){
   console.log("How do you find the right spellbook?!")

}

$(document).ready(function () {
   // Klikk på bokomslagene for å vise de respektive spell-sidene
   $('#change-password-book-cover').click(function () {
       $('#change-password-book').removeClass('hidden');
       $('#book-view').removeClass('hidden');
   });

   $('#change-name-book-cover').click(function () {
       $('#change-name-book').removeClass('hidden');
       $('#book-view').removeClass('hidden');
   });

   $('#summon-familiar-book-cover').click(function () {
       $('#summon-familiar-book').removeClass('hidden');
       $('#book-view').removeClass('hidden');
   });

   // Lukk boken
   $('#close-tome').click(function () {
       $('#book-view').addClass('hidden');
   });

   // Formulær for å endre passord
   $('#change-password-form').submit(function (e) {
       e.preventDefault();
       var newPassword = $('#new-password').val();
       var confirmPassword = $('#confirm-password').val();

       if (newPassword === confirmPassword) {
           $('#password-feedback').text('Password changed successfully!');
       } else {
           $('#password-feedback').text('Passwords do not match.');
       }
   });

   // Formulær for å endre navn
   $('#rename-form').submit(function (e) {
       e.preventDefault();
       var newName = $('#new-name').val();
       var newTitle = $('#new-title').val();

       $('#wizard-name').text(newName);
       $('#wizard-title').text(newTitle);

       $('#name-feedback').text('Name and title updated!');
       $('#name-title').html(newTitle);
   });

   // Formulær for å påkalle familiar
$('#summon-form').submit(function (e) {
   e.preventDefault();
   var familiarName = $('#familiar-name').val();
   var familiarType = $('#familiar-type').val();
   var hasWings = $('#has-wings').is(':checked');
   var familiarMood = $('#familiar-mood').val();
   var contractEnd = $('#contract-end').val();

   var familiarDetails = 'Summoning: ' + familiarName + ' the ' + familiarType + ' with a mood of ' + familiarMood;
   if (hasWings) {
       var wingType = $('#wing-type').val();
       familiarDetails += ' and wings (' + wingType + ')';
   }
   alert(familiarDetails);
});

   // Vis/hide wing type input
   $('#has-wings').change(function () {
       if ($(this).is(':checked')) {
           $('#wing-type').removeClass('hidden');
       } else {
           $('#wing-type').addClass('hidden');
       }
   });
});
   

//TODO: add functionality to change password
//TODO: add functionality to change name
//TODO: add functionality to summon familiar
// have a function where you can load content into a "user array" -> easier to work with
