var portfolioText;
var emailText;
$("#editInfo").click(function(){
  $(".editProfile").prop("hidden", false);
  $(".normalProfile").prop("hidden", true);
});
$("#saveUserInfo").click(function(){
  portfolioText = $("#portfolioInput").val();
  $("#portfolioLink").text(portfolioText);
  $("#portfolioLink").attr("href", portfolioText);
  emailText = $("#emailInput").val();
  $("#emailOutput").val(emailText);
  $(".editProfile").prop("hidden", true);
  $(".normalProfile").prop("hidden", false);
});