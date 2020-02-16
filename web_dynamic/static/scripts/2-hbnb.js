$(function () {
  let dict = {};
  $("input:checkbox").click(function () {
    if ($(this).is(":checked")) {
      dict[$(this).data("name")] = $(this).data("id");
    } else {
      delete dict[$(this).data("name")];
    }
    console.log(dict);
    let keys = Object.keys(dict);
    let result = "";
    for (let item of keys) {
      /*if (result.length > 24) {
      } else if (result.length > 19) {
        result += item.charAt(0) + "...";
      } else */
      if (result === "") {
        result += item;
      } else {
        result += ", " + item;
      }
    }
    $("div.amenities h4").text(result);
    //$("div.amenities h4").css("margin-right", "70px");
    //$("div.amenities h4").css("width", "70px");
    //$("div.amenities h4").text(result).css("max-height", "10px");
    $("div.amenities").css("width", "300px");
    $("div.amenities").css("height", "100px");
  });

  $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status/',
    success: function (data) {
      console.log(data);
      if (data.status === "OK") {
        $("DIV#api_status").addClass("available");
      } else {
        $("DIV#api_status").removeClass("available");
      }
    }
  });

  $.get("http://127.0.0.1:5001/api/v1/status/", function(data) {
    console.log(data);
  });
});
