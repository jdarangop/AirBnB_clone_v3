$(function () {
  let dict = {};
  $("input:checkbox").click(function () {
    if ($(this).is(":checked")) {
      dict[$(this).data("name")] = $(this).data("id");
    } else {
      delete dict[$(this).data("name")];
    }
    let keys = Object.keys(dict);
    let result = "";
    for (let item of keys) {
      if (result === "") {
        result += item;
      } else {
        result += ", " + item;
      }
    }
    if (result === "") {
      $("div.amenities h4").html('&nbsp;');
    } else {
      $("div.amenities h4").html(result);
    }
    $("div.amenities h4").css("height", "length");
    $("div.amenities h4").css("height", "17px");
    $("div.amenities h4").css("width", "length");
    $("div.amenities h4").css("width", "260px");
    $("div.amenities h4").css("white-space", "nowrap");
    $("div.amenities h4").css("overflow", "hidden");
    $("div.amenities h4").css("text-overflow", "ellipsis");
  });
});
