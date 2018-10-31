document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  var summon_button = document.querySelector('.summon-cats');

  summon_button.addEventListener('click', function(e){
    console.log('Submit button wuz clicked');

    var promise = axios({
        url: 'http://bitkittens.herokuapp.com/cats.json',
        method: 'GET',
        dataType: 'json'
    });

    var cat_divs = document.querySelectorAll('.cat-box');

    promise.then(function(response){
      var i = 0;
      response.data.cats.forEach(function(cat){
        let img_tag = document.createElement('img');
        img_tag.src = cat.photo;
        cat_divs[i].innerHTML = ""; //reset cat div
        cat_divs[i].append(img_tag);
        i++;
      });
    });
  });

});
