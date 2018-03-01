$(document).ready(function() {
  $("#lists").submit(function(event) {
    debugger
    var item1 = $('input#item1').val();
    var item2 = $('input#item2').val();
    var item3 = $('input#item3').val();
    var item4 = $('input#item4').val();
    var item5 = $('input#item5').val();
    var groceryArray = [item1, item2, item3, item4, item5];

    var specialArray = [];

    specialArray.push(item1, item2, item3, item4, item5)


    groceryArray.sort();


        // groceryArray.forEach(function(list) {
    //   var userInput = $("input#" + list).val();
    //   groceryArray.push(userInput);
    // });

    //var newArray = [".item1", ".item2", ".item3", ".item4", ".item5"];

    $("#groceries").hide();
    $("#showList").show();

    alert(groceryArray);
    alert(specialArray);

    event.preventDefault();
  });
});
