require.config({
	paths: {
		'jquery': "jquery",
		'swiper': 'swiper.min',
		"js": "js"
	}
})

define(['jquery', 'swiper'], function ($, swiper) {

	var mySwiper = new swiper('.main-banner .swiper-container', {
		autoplay: 5000,
		pagination: '.main-banner .swiper-pagination',
		paginationClickable: true,
	})
	var mySwiper = new swiper('.main-sale .fl .swiper-container', {
		autoplay: 5000,
		pagination: '.main-sale .fl .swiper-pagination',
		paginationClickable: true,
	})
	var mySwiper = new swiper('.main-sale .fr .swiper-container', {
		autoplay: 5000,
		pagination: '.main-sale .fr .swiper-pagination',
		paginationClickable: true,
	})


	var mySwiper = new swiper('.main-product-details .swiper-container', {
		autoplay: 5000,
		pagination: '.main-product-details .swiper-pagination',
		paginationClickable: true,
	})

	$('.header .child-menu-container .columns .item').on('click', function () {
		$(this).toggleClass('active').next('.por').children('.child-content').slideToggle();

	})

	$('.header .menu .root-menu.cild-menu').on('click', function () {
		$(this).toggleClass('active')
		$('.header .child-menu-container').slideToggle();
	})

	$('.main-product-list .item').on('mouseenter', function () {
		$('.main-product-list .item .layout').hide();
		$(this).children('.layout').fadeIn();
	}).on('mouseleave', function () {
		$('.main-product-list .item .layout').hide();
	})

	$('.main-product-list .item .layout').on('click', function (e) {
		return false;
	})
	$('.main-product-list .item .layout .close').on('click', function (e) {
		$(this).parent('.layout').fadeOut();
	})



	$('.layout-gotop').on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	})

	$('.public-number-select-plug').on('click', function (e) {
		var value = parseInt($(this).children('.value').val());
		$(e.target).hasClass('add') && value++;
		$(e.target).hasClass('min') && value--;
		value < 1 && (value = 1);
		$(this).children('.value').val(value)
	})




	$('.main .login-register .container .tabs-control .top a').on('click', function () {
		if ($(this).hasClass('js-login')) {
			$('.js-container').removeClass('active')
			$('.main .login-register .container .tabs-control .bar span').css('left', '0%');
			$('.js-container').height($('.js-container .js-wrapper .js-login').height())
		}
		if ($(this).hasClass('js-join')) {
			$('.js-container').addClass('active')
			$('.main .login-register .container .tabs-control .bar span').css('left', '50%');
			$('.js-container').height($('.js-container .js-wrapper .js-join').height())
		}
		//     js-login
		// js-join
	})

	$('.main .login-register .container .form .radio-container .item').on('click', function () {
		if ($(this).hasClass('new')) {
			$('.js-child-container').addClass('active')
		} else {
			$('.js-child-container').removeClass('active')
		}
		//     js-login
		// js-join
	})

	$('.map-info ul li.js-map').on('click', function () {
		var url = $(this).attr('data-src');
		$('#js-map-iframe').attr('src', url);
	});

	$('.layout-gotop').on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 300);
	})
	$(window).on('scroll', function (e) {
		(function () {
			var top = $(window).scrollTop(),
				height = window.innerHeight;
			if (top >= height) {
				$('.layout-gotop').addClass('active');
			} else {
				$('.layout-gotop').removeClass('active');
			}
		})()
	})

	
	$('.card-root').on('click',function() {
		$('.header .user-operation .card-container').slideToggle();
	})
})
