$(document).ready(function(){

	$('.carousel__inner').slick({
		speed: 1200,
		slidesToShow: 1,
		adaptiveHeight: false,
		prevArrow: '<button type="button" class="prev"><img src="img/arrow-left.png"></button>',
		nextArrow: '<button type="button" class="next"><img src="img/arrow-right.png"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});

	/* $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(item){
		$(item).each(function(i){
			$(this) .on('click', function(e){
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__hover').eq(i).toggleClass('catalog-item__hover_active');  
			})
		}); 
	};

	toggleSlide('.catalog-item__link');
	toogleSlide('.catalog-item__back'); */
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__hover').eq(i).toggleClass('catalog-item__hover_active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	//Modal
	//Open modal window by pressing CTA button
	$('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn();
	});
	//Close modal window by pressing cross 
	$('.modal__close').on('click',function(){
		$('.overlay, #consultation, #success, #order').fadeOut();
	});
	//
	/* $('.button_catalog').on('click',function(){
		$('.overlay, #order').fadeIn();
	}); */ 
	$('.button_catalog').each(function(i){
		$(this).on('click', function(){
			$('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
			$('.overlay, #order').fadeIn();  
		})
	})
	//Validation form plugin 
	/* $('#modal-form').validate({
		rules:{
			name:{
				required: true,
				minlength: 2,  
			},
			phone:"required",
			email:{
				required:true, 
				email:true 
			}
		},
		messages:{
			name: {
				required: "Pls input your name",
				minlength: jQuery.validator.format("Put min {0} characters!")
			}, 
			phone: "Pls input your telephone number",
			email:{
				required: "Pls input your email",
				email:"wrong email name" 
			} 
		}
	});
	$('#modal-form').validate();
	$('#modal-order').validate(); */

	function validateForms(form){
		$(form).validate({
			rules:{
				name:{
					required: true,
					minlength: 2,  
				},
				phone:"required",
				email:{
					required:true, 
					email:true 
				}
			},
			messages:{
				name: {
					required: "Pls input your name",
					minlength: jQuery.validator.format("Put min {0} characters!")
				}, 
				phone: "Pls input your telephone number",
				email:{
					required: "Pls input your email",
					email:"wrong email name" 
				} 
			}
		});
	};

	validateForms('#consultation-form');
	validateForms('#modal-form');
	validateForms('#modal-order');

	$('input[name=phone]').mask("ES (+34)999-999-999");

	$('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #success').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
	//Pageup settings
	$(window).scroll(function(){
		if ($(this).scrollTop()>1600){
			$('.scrollup').fadeIn();
		} else{
			$('.scrollup').fadeOut();	
		}
	});

	//Smooth scroll settings 
	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
});

/* const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: false 
});

document.querySelector('.prev').addEventListener('click', function(){
	slider.goTo('prev'); 
});

document.querySelector('.next').addEventListener('click', function(){
	slider.goTo('next'); 
});  */

	