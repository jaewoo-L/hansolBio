$(function(){
	var $firstMenu = $('nav  ul > li'),
		$header = $('header'),
		$productsMenu = $header.find('li:nth-of-type(5)'),
		$sideMenuBtn = $header.find('.sideMenuBtn'),
		$wind = $(window),
		$secondMenu = $('nav > ul > li ul li'),
		$sideMenu = $('.sideMenuContainer'),
		$sideFirstMenu = $sideMenu.find('.first');	
	if(jQuery.browser.mobile) {
		$header.find('.header').addClass('hidden');
		$sideMenuBtn.css({
			right:50
		});
	};
	$firstMenu.on('mouseover',function(){
		$(this).find('ul').stop().animate({
			opacity: 0.9,
			top: 90 + 'px'
		},300)
		.css({
			visibility: 'visible'
		});
		$(this).find('ul').show();
	})
	.mouseout(function() {
		$(this).find('ul').stop().animate({
			opacity:0,
			top: 80 + 'px'
		},300)
		.css({
			visibility:'hidden'
		});
		$(this).find('ul').hide();
	});
	$wind.scroll(function() {
		if($(this).scrollTop()) {
			$header.addClass('scrolled')
		} else {
			$header.removeClass('scrolled')
		}
	});
	$sideMenuBtn.click(function(e){
		e.preventDefault();
		$('.closeBtn').addClass('visible');
		$('.overlay').addClass('visible');
		$sideMenu.addClass('visible');
	});
	$('.closeBtn').click(function(e){
		e.preventDefault();
		$('.closeBtn').removeClass('visible');
		$('.overlay').removeClass('visible');
		$sideMenu.removeClass('visible');
	});
	$('.overlay').click(function(){
		$('.closeBtn').removeClass('visible');
		$('.overlay').removeClass('visible');
		$sideMenu.removeClass('visible');
	});
	$sideFirstMenu.click(function(e){
		$(this).find('ul').slideToggle();
		$(this).find('span').toggleClass('visible');
	});
	$wind.trigger('scroll');

})
		