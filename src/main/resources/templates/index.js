var baseUrl = "http://localhost:8080";
var userID = "";
$(function () {
      userID = $.cookie("id");
      $("#index").addClass("active");
      $("a[name='jumpShoes']").attr("href","shop/Shop.html");
});
