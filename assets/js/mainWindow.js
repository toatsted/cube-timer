$(() => {
  $(document).on("keyup", function(e) {
    switch(e.which) {
      // space
      case 32:
        alert("you fuckin pressed space!");
        break;
    }
  })
});

  
