$(function(){
	$(".div3").on("click",function(){
		$(this).hide().siblings(".div2").slideDown(600).siblings(".div4").show(400);
	});
	$(".div4").on("click",function(){
		$(this).hide().siblings(".div2").slideUp(600).siblings(".div3").show(400);
	});
	
});

$(function(){
	var btn=$("#btn");
	var i=193;
	btn.click(function(){
		++i;
		$("#num1").text(i);
	
	
	if(i>=200 && i<250){		
		$(".top_2 li:eq(1)").find("img").attr("src","images/x1.png");
		}
	if(i>=250 && i<300){
			$(".top_2 li:eq(2)").find("img").attr("src","images/x3.png");
		}
	if(i>=300 && i<350){		
		$(".top_2 li:eq(2)").find("img").attr("src","images/x1.png");
	   }
	if(i>=350 && i<400){
			$(".top_2 li:eq(2)").find("img").attr("src","images/x3.png");
		}
	if(i>=400 && i<450){		
		$(".top_2 li:eq(2)").find("img").attr("src","images/x1.png");
	   }
	if(i>=450 && i<500){
			$(".top_2 li:eq(2)").find("img").attr("src","images/x3.png");
		}
	if(i>=500 ){		
		$(".top_2 li:eq(2)").find("img").attr("src","images/x1.png");
	   }
	});
});

