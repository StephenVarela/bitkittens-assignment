document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  var summon_button = document.querySelector('.summon-cats');

  summon_button.addEventListener('click', function(e){
    console.log('Submit button wuz clicked');
    });


});
