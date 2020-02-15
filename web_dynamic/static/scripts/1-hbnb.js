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
  });
});
