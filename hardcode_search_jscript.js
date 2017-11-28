$(".foodColor").change(function(){
	var colorOption = $(".foodColor option:selected").text();
  var typeOption = $(".foodType option:selected").text();
	$(".foods tr").each(function(){
		$(this).find("td").each(function(){
  		if(($(this).attr("data-foodcolor") == colorOption && $(this).attr("data-foodtype") == typeOption) || ($(this).attr("data-foodcolor") == colorOption && typeOption == "")){
    		$(this).prop("hidden", false);
    	}
      else if((colorOption == "" && $(this).attr("data-foodtype") == typeOption) || (colorOption == "" && typeOption == "")){
      	$(this).prop("hidden", false);
      }
    	else{
    		$(this).prop("hidden", true);
    	}
  	})
	})
});
$(".foodType").change(function(){
	var typeOption = $(".foodType option:selected").text();
  var colorOption = $(".foodColor option:selected").text();
	$(".foods tr").each(function(){
		$(this).find("td").each(function(){
  		if(($(this).attr("data-foodtype") == typeOption && $(this).attr("data-foodcolor") == colorOption) || ($(this).attr("data-foodtype") == typeOption && colorOption == "")){
    		$(this).prop("hidden", false);
    	}
      else if((typeOption == "" && $(this).attr("data-foodcolor") == colorOption) || (colorOption == "" && typeOption == "")){
      	$(this).prop("hidden", false);
      }
    	else{
    		$(this).prop("hidden", true);
    	}
  	})
	})
});
