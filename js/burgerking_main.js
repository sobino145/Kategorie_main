$(document).ready(function(){

  /* /////////메뉴 바//////////// */
  $(".nav_main").mouseenter(function(){
    $(this).find("li>.nav_sub").stop(true,true).slideDown();
    $(".bg_box").stop(true,true).slideDown(); 
  });

  $("header").mouseleave(function(){
    $(this).find("li>.nav_sub").stop(true,true).slideUp();
    $(".bg_box").stop(true,true).slideUp(); 
  });

  /* /////////visual//////////// */


  let imgon_w= $(".slideon ul li").width();   
	let imgon_n= $(".slideon ul li").length;    
	let soldidxon=0;  
	let sindexon=0;  

	$(".slideon ul li:last").prependTo(".slideon ul");
		
	$(".slideon ul").css({left:-imgon_w}); 
	


	function slideonImg(sindexon,m){  

		
		if(m==0){
		
			
			$(".slideon ul").stop(true,true).animate({
				left:"+="+imgon_w+"px"},600,"easeOutCubic",function(){
				$(".slideon ul li:last").prependTo(".slideon ul");				
				$(".slideon ul").css({ left:-imgon_w }); 	
			});
			$(".slideon_btn ul li").eq(soldidxon).removeClass("activeon");  
			$(".slideon_btn ul li").eq(sindexon).addClass("activeon");  

		}else{ 
		

			$(".slideon ul").stop(true,true).animate({
				left:"-="+imgon_w+"px"},600,"easeOutCubic",function(){
				$(".slideon ul li:first").appendTo(".slideon ul");				
				$(".slideon ul").css({ left:-imgon_w }); 
			});
			$(".slideon_btn ul li").eq(soldidxon).removeClass("activeon");  
			$(".slideon_btn ul li").eq(sindexon).addClass("activeon");  

		}

		soldidxon=sindexon;

	} 

	//슬라이드 자동함수 생성
	function slideonAuto(){
		sindexon++;	
		if(sindexon==imgon_n){ 
			sindexon=0;
		}
		slideonImg(sindexon,1);
	}

	auto2=setInterval(slideonAuto,4000);


  //하단버튼 클릭
	$(".slideon_btn ul li").click(function(){

		clearInterval(auto2); 
		$(".playon").hide();
		$(".stopon").show();

		sindexon = $(this).index();

		//재배치
		for(let i=1; i <= imgon_n; i++){
			$(".slideon ul li.i"+i).appendTo(".slideon ul");
		}
		$(".slideon ul li:last").prependTo(".slideon ul");	
		$(".slideon ul li:last").prependTo(".slideon ul");	
		//번호만큼 이동
		for (let j=1; j<=sindexon+1;j++) {
			slideonImg(sindexon,1);
		}

		auto2=setInterval(slideonAuto,4000); 

	});

  //좌우버튼 클릭
  $(".nexon").click(function(){

		clearInterval(auto2); 
		$(".playon").hide();
		$(".stopon").show();

		sindexon++;	
		if(sindexon>=imgon_n){
			sindexon=0;      
		}
		slideonImg(sindexon,1);
		auto2=setInterval(slideonAuto,4000); 

	});

  $(".preon").click(function(){

		clearInterval(auto2); 
		$(".playon").hide();
		$(".stopon").show();

		sindexon--;	
		if(sindexon<0){ 
			sindexon=imgon_n-1;      
		}
		slideonImg(sindexon,0);
		auto2=setInterval(slideonAuto,4000);

	});

  //Play,Stop 클릭
  $(".playon").hide();  

  $(".stopon").click(function(){
    clearInterval(auto2);
    $(".stopon").hide();
		$(".playon").show();
  });
  $(".playon").click(function(){
    auto2=setInterval(slideonAuto,4000); 
    $(".playon").hide();
		$(".stopon").show();
  });

  /* /////////content///////// */

 //section 2 sns 아이콘 박스
	$(".sns_icon_I").hover(function(){
	$(".sns_icon_I li:first-child").stop(true,true).animate({marginLeft:"-100px"},250);
	},function(){
		$(".sns_icon_I li:first-child").stop(true,true).animate({marginLeft:"0px"},250);
	});

	$(".sns_icon_P").hover(function(){
		$(".sns_icon_P li:first-child").stop(true,true).animate({marginLeft:"-100px"},250);
	},function(){
		$(".sns_icon_P li:first-child").stop(true,true).animate({marginLeft:"0px"},250);
	});

	$(".sns_icon_Y").hover(function(){
		$(".sns_icon_Y li:first-child").stop(true,true).animate({marginLeft:"-100px"},250);
	},function(){
		$(".sns_icon_Y li:first-child").stop(true,true).animate({marginLeft:"0px"},250);
	});

////////section4/////////

	$(".box4L_box").hover(function(){
		$(".box4L_box li:first-child").stop(true,true).animate({marginTop:"-200px"},250);
	},function(){
		$(".box4L_box li:first-child").stop(true,true).animate({marginTop:"0px"},250);
	});

});