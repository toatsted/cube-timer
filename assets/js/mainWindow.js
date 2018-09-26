$(() => {
  let seconds = 00;
  let tens = 00;
  let Interval;

  $(document).on("keyup", function(e) {
    switch(e.which) {
      // space
      case 32:
        if(!Interval) {
          clearInterval(Interval);
          Interval = setInterval(startTimer, 10);
          seconds = 00;
          $(".seconds").text("00")
          tens = 00;
        } else {
          clearInterval(Interval);
          Interval = null;
          $(".collection").removeClass("hidden");
          $(".collection").append("<li class='collection-item'>" + seconds + ":" + tens + "</li>")
        }
        break;
    }
  })

  $("#stop").on("click", function(e) {
    clearInterval(Interval);
  })

  function startTimer() {
    tens++;

    if(tens < 9) {
      $(".tens").text("0" + tens);
    }
    
    if(tens > 9) {
      $(".tens").text(tens);
    }

    if(tens > 99) {
      console.log("seconds");
      seconds++;
      $(".seconds").text("0" + seconds);
      tens = 0;
      $(".tens").text("0" + tens);
    }

    if(seconds > 9) {
      $(".seconds").text(seconds);
    }
  }
});

  
