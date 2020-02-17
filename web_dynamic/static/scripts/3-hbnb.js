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

  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:5001/api/v1/status/',
    success: function (data) {
      if (data.status === "OK") {
        $("#api_status").addClass("available");
      } else {
        $("#api_status").removeClass("available");
      }
    }
  });

  $.ajax({
  type: "POST",
  url: 'http://127.0.0.1:5001/api/v1/places_search',
  contentType: 'application/json',
  data: '{}',
  dataType: 'json',
  success: function (data) {
    for (let place of data) {
      $(".places").append(`<article>

            <div class="title">

              <h2>` +  place.name + `</h2>

              <div class="price_by_night">

                `+ place.price_by_night +`

              </div>
            </div>
            <div class="information">
              <div class="max_guest">
                <i class="fa fa-users fa-3x" aria-hidden="true"></i>

                <br />

                `+ place.max_guest +` Guests

              </div>
              <div class="number_rooms">
                <i class="fa fa-bed fa-3x" aria-hidden="true"></i>

                <br />

                `+ place.number_rooms +` Bedrooms
              </div>
              <div class="number_bathrooms">
                <i class="fa fa-bath fa-3x" aria-hidden="true"></i>

                <br />

                `+ place.number_bathrooms +` Bathroom

              </div>
            </div>

           <div class="description">

              `+ place.description +`

            </div>

          </article>`);
    }
  }
  });
});
