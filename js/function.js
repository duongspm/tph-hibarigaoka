$(document).ready(function (){
    $open=false;
    
	function boxHide() {
		if($open==false){
			$open=true;
            $('.box__content--position').addClass('is-close');
            $('.box__hide--position').addClass('active');
            $(".box__more--position").addClass('is-close');
		}else{
			$open=false;
            $('.box__content--position').removeClass('is-close');
            $('.box__hide--position').removeClass('active');
            $(".box__more--position").removeClass('is-close');
		}
	}
    
	$('.box__more--position').on('click',function() {
		boxHide();
	});

});
$(document).ready(function (){
    $openD=false;
	function boxHideDesign() {
		if($openD==false){
			$openD=true;
            $('.box__content--design').addClass('is-close');
            $('.box__hide--design').addClass('active');
            $(".box__more--design").addClass('is-close');
		}else{
			$openD=false;
            $('.box__content--design').removeClass('is-close');
            $('.box__hide--design').removeClass('active');
            $(".box__more--design").removeClass('is-close');
		}
	}
    
    $('.box__more--design').on('click',function() {
		boxHideDesign();
	});
});

$(document).ready(function (){
    $openP=false;
	function boxHideplan() {
		if($openP==false){
			$openP=true;
            $('.box__content--plan').addClass('is-close');
            $('.box__hide--plan').addClass('active');
            $(".box__more--plan").addClass('is-close');
		}else{
			$openP=false;
            $('.box__content--plan').removeClass('is-close');
            $('.box__hide--plan').removeClass('active');
            $(".box__more--plan").removeClass('is-close');
		}
	}
    
    $('.box__more--plan').on('click',function() {
		boxHideplan();
	});
});

$(function(){
    $('.info__list').slick({
         responsive: [
            {
                breakpoint: 5000,
                settings: "unslick"
            },{
                breakpoint: 768,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    speed: 1000,
                    loop: true,
                    variableWidth: true,
                    arrows: false,
                    dots: false,
                 }
            }
        ]
    });
}); 
