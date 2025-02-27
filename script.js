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
//TODO: add functionality to open the correct spell books
function openSpellBook(){
   console.log("How do you find the right spellbook?!")

}
//TODO: add functionality to change password
//TODO: add functionality to change name
//TODO: add functionality to summon familiar
// have a function where you can load content into a "user array" -> easier to work with
