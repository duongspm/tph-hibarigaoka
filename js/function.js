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
    $open=false;
	function boxHideDesign() {
		if($open==false){
			$open=true;
            $('.box__content--design').addClass('is-close');
            $('.box__hide--design').addClass('active');
            $(".box__more--design").addClass('is-close');
		}else{
			$open=false;
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
    $open=false;
	function boxHideplan() {
		if($open==false){
			$open=true;
            $('.box__content--plan').addClass('is-close');
            $('.box__hide--plan').addClass('active');
            $(".box__more--plan").addClass('is-close');
		}else{
			$open=false;
            $('.box__content--plan').removeClass('is-close');
            $('.box__hide--plan').removeClass('active');
            $(".box__more--plan").removeClass('is-close');
		}
	}
    
    $('.box__more--plan').on('click',function() {
		boxHideplan();
	});
});
/*=============== SHOW ===============*/
// const BoxHide = document.getElementById('box-hide'),
// BoxMore = document.getElementById('box-more')


// if(BoxMore){
//     BoxMore.addEventListener('click',()=>{
//         BoxHide.classList.add('show-menu')
//     })
// }
