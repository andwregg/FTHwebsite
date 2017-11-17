//var $ = require('jquery');
$(document).ready(function(){
  var portfolioText;
  var emailText;
  $(".editInfo").click(function(){
    $(".portfolioInput").prop("hidden", false);
    $(".emailInput").prop("hidden", false);
    $(".socialMedia").prop("hidden", false);
    $(".saveUserInfo").prop("hidden", false);
    $(".editInfo").prop("hidden", true);
    $(".portfolioLink").prop("hidden", true);
    $(".emailOutput").prop("hidden", true);
  });
  $(".saveUserInfo").click(function(){
    portfolioText = $(".portfolioInput").val();
    $(".portfolioLink").text(portfolioText);
    $(".portfolioLink").attr("href", portfolioText);
    emailText = $(".emailInput").val();
    $(".emailOutput").val(emailText);
    $(".portfolioInput").prop("hidden", true);
    $(".emailInput").prop("hidden", true);
    $(".socialMedia").prop("hidden", true);
    $(".saveUserInfo").prop("hidden", true);
    $(".editInfo").prop("hidden", false);
    $(".portfolioLink").prop("hidden", false);
    $(".emailOutput").prop("hidden", false);
  });
});
