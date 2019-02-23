$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var gender = $("select#gender").val();
    var nature = $("select#nature").val();
    var category = $("select#category").val();

    var result = '';
    if (gender === 'male' && nature === 'good' && category === 'alpha'){
      result = 'Cyclops';
    }

    if (gender === 'male' && nature === 'evil' && category === 'alpha'){
      result = 'Magneto';
    }

    if (gender === 'female' && nature === 'good' && category === 'alpha'){
      result = 'Storm';
    }

    if (gender === 'female' && nature === 'evil' && category === 'alpha'){
      result = 'Polaris';
    }

    if (gender === 'male' && nature === 'good' && category === 'beta'){
      result = 'Colossus';
    }

    if (gender === 'male' && nature === 'evil' && category === 'beta'){
      result = 'Sabretooth';
    }

    if (gender === 'female' && nature === 'good' && category === 'beta'){
      result = 'Dazzler';
    }

    if (gender === 'female' && nature === 'evil' && category === 'beta'){
      result = 'Lady Mastermind';
    }

    if (gender === 'male' && nature === 'good' && category === 'omega'){
      result = 'Iceman';
    }

    if (gender === 'male' && nature === 'evil' && category === 'omega'){
      result = 'Vulcan';
    }

    if (gender === 'female' && nature === 'good' && category === 'omega'){
      result = 'Jean Grey';
    }
    
    if (gender === 'female' && nature === 'evil' && category === 'omega'){
      result = 'Dark Phoenix';
    }


    $("#mutant").text(result);
    $("#result").show();
  });
});
