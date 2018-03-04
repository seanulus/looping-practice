$(document).ready(function() {

  $("#lists").submit(function(event) {

    var unformatArray = [];
    var formatArray = [];
      $('#lists input').map(
        function(){
          unformatArray.push( $(this).val() )
      });


      unformatArray.map(function(i){
        //console.log(i.toUpperCase());
        formatArray.push(i.toUpperCase());
      });

      formatArray = formatArray.sort();

       console.log(formatArray);

    formatArray.map(function(jazz) {
      $(".finish").append("<li>" + jazz +"</li>")
    });

    $("#lists").hide();
    $("#showList").show();

    event.preventDefault();
  });
});
