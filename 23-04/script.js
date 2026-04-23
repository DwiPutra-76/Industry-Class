$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
    success: function (r) {
      let data = '';
      for (let i = 0; i < r.length; i++) {
        data += <li>${r[i].name}</li>
      }
      $("#list").html(data);
    },
  });
});
// hahahahha