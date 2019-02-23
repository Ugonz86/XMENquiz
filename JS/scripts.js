$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var gender = $("select#gender").val();
    var nature = $("select#nature").val();
    var category = $("select#category").val();

    var result = '';
    if (gender === 'Male' && nature === 'Good' && category === 'Alpha'){
      result = 'Cyclops';
    }
    var result = '';
    if (gender === 'Male' && nature === 'Evil' && category === 'Alpha'){
      result = 'Magneto';
    }
    var result = '';
    if (gender === 'Female' && nature === 'Good' && category === 'Alpha'){
      result = 'Storm';
    }
    var result = '';
    if (gender === 'Female' && nature === 'Evil' && category === 'Alpha'){
      result = 'Polaris';
    }
    var result = '';
    if (gender === 'Male' && nature === 'Good' && category === 'Beta'){
      result = 'Colossus';
    }
    var result = '';
    if (gender === 'Male' && nature === 'Evil' && category === 'Beta'){
      result = 'Sabretooth';
    }
    var result = '';
    if (gender === 'Female' && nature === 'Good' && category === 'Beta'){
      result = 'Dazzler';
    }
    var result = '';
    if (gender === 'Female' && nature === 'Evil' && category === 'Beta'){
      result = 'Lady Mastermind';
    }
    var result = '';
    if (gender === 'Male' && nature === 'Good' && category === 'Omega'){
      result = 'Iceman';
    }
    var result = '';
    if (gender === 'Male' && nature === 'Evil' && category === 'Omega'){
      result = 'Vulcan';
    }
    var result = '';
    if (gender === 'Female' && nature === 'Good' && category === 'Omega'){
      result = 'Jean Grey';
    }
    var result = '';
    if (gender === 'Female' && nature === 'Evil' && category === 'Omega'){
      result = 'Dark Phoenix';
    }


    $("#mutant").text(result);
    $("#result").show();
  });
});
