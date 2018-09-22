var p = {
  player: []
}

$(document).ready(function() {
    $("#create").on("click", function() {
      $("input").each(function() {
        var d = this.value;
        p.player.push(d);
      });
      console.log(p);
    });
    
    $("#create").on("click", function(event) {
      $.ajax({
          url: 'http://localhost:6969/player',
          method: 'PUT',
          data: {
              player: p.player,
          },
          success: function(data) {
            console.log("OK");
          },
          error: function() {
            console.log("fail ajax!");
          }
        });
    });
 });