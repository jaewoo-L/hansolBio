$(function() {
	var $wind = $(window),
		$mainSliderContainer = $('.main-slider-container'),
		$mainSlider = $('.slider .bg'),
		$teamSlider = $('.team-slider .inner'),
		aboutTotalPage = $('.about-list').length,
		numSlide = $('.main-slider-nav button').length,
		$sectionOne = $('.section01'),
		$sectionTwo = $('.section02'),
		$sectionThree = $('.section03'),
		$sectionFour = $('.section04'),
		$sectionFive = $('.section05'),
		$sectionSix = $('.section06'),
		$aboutList = $sectionFour.find('.about-list'),
		$productContainer = $('.product-container'),
		$loadMoreProduct = $('.btn-goods-more button'),
		$workSlideContainer = $('.work-container'),
		$privacyCheckBox = $('input:checkbox[id="checkPrivacy"]'),
		$formSubmit = $sectionSix.find('.submit'),
		progressNumYear = $sectionFive.find('.vision-container .info-area:nth-of-type(1) .num-count').attr('data-rate'),
		progressNumPeople = $sectionFive.find('.vision-container .info-area:nth-of-type(2) .num-count').attr('data-rate'),
		progressNumRND = $sectionFive.find('.vision-container .info-area:nth-of-type(3) .num-count').attr('data-rate'),
		progressNumProduct = $sectionFive.find('.vision-container .info-area:nth-of-type(4) .num-count').attr('data-rate'),
		addItemCount = 4,
		added = 0,
		$allData = [],
		slideIndex = 0,
		workSlideIndex = 0,
		mainCurrentSlideIndex = 0,
		teamCurrentSlideIndex = 0,
		workCurrentSlideIndex = 0,
		aboutCurrentSlideIndex = 0,
		sectionOneExcuted = false,
		sectionTwoExcuted = false,
		sectionThreeExcuted = false,
		sectionFourExcuted = false,
		sectionFiveExcuted = false,
		sectionSixExcuted = false;
	
	function mainSlide() {
		mainCurrentSlideIndex = this.currentSlide;
		$('.btn-nav').eq(mainCurrentSlideIndex).addClass('active').siblings().removeClass('active');
		$mainSlider.removeClass('active');
		$mainSlider.eq(mainCurrentSlideIndex).addClass('active');
	}
	function teamSlide() {
		teamCurrentSlideIndex = this.currentSlide;
		$teamSlider.removeClass('active');
		$teamSlider.eq(teamCurrentSlideIndex).addClass('active');
	};
	function currentSlideIndex() {
		workCurrentSlideIndex = this.currentSlide;
	};
	function aboutSlideIndex() {
		aboutCurrentSlideIndex = this.currentSlide ;
		$sectionFour.find('.pagination .current-page').html(aboutCurrentSlideIndex + 1);
		$aboutList.removeClass('active');
		$aboutList.eq(aboutCurrentSlideIndex).addClass('active');
	};
	function initProduct(data) {
		$allData = data;
		addItem();
		$loadMoreProduct.click(addItem);
	}
	function addItem() {
		var elements = [];
		var slicedData;
		slicedData = $allData.slice(added, added + addItemCount);
		$.each(slicedData, function(i, item) {
			var itemHTML = 
				'<li class="product-items">' +
					'<div class="item-content">' +
						'<div class="item-img">' +
							'<a href="#"><img src="' + item.images +'" alt="products"></a>' +
						'</div>' +
						'<div class="item-info">' +
							'<a href="#">'  +
								'<strong>' + item.title + '</strong>' +
								'<p>' + item.function.detail + '</p>' +
							'</a>' +
							'<div class="effect">' +
								'<strong>' + item.function.basic + '</strong>' +	
							'</div>' +
						'</div>' +
					'</div>' +
				'</li>';
			elements.push($(itemHTML).get(0));	
		});
		$productContainer.append(elements);
		added += slicedData.length;
		if(added >= $allData.length) {
			$loadMoreProduct.hide();
		} else {
			$loadMoreProduct.show();
		}
	}
	function workAutoSlide(){
		timer = setInterval(function(){
			workSlideIndex = (workCurrentSlideIndex + 1) % $workSlideContainer.length;
			if(workSlideIndex == $workSlideContainer.length - 1 || workSlideIndex == 0) {
				workSlideshow.next();
			} else {
				workSlideshow.goTo(workSlideIndex);
			}
		},4000);
	}
	const slideshow = new Siema({
		selector: '.slider',
		duration: 500,
		loop: true,
		onChange: mainSlide
	});
	const teamSlideshow = new Siema({
		selector: '.team-slider',
		duration: 500,
		loop: true,
		onChange: teamSlide
	});
	const workSlideshow = new Siema({
		selector: '.work-slider',
		duration: 500,
		loop: true,
		perPage: 4,
		onChange: currentSlideIndex
	});
	const aboutSlideshow = new Siema({
		selector: '.about-slider-container',
		duration: 500,
		loop: true,
		onChange: aboutSlideIndex
	});
	
	$wind.on('scroll',function(){
	// $wind.scroll(function(){
		if(!sectionOneExcuted) {
			if($(window).scrollTop() > $sectionOne.offset().top - 500) {
				$sectionOne.addClass('active');
				sectionOneExcuted = true;
			}
		}
		if(!sectionTwoExcuted) {
			if($(window).scrollTop() > $sectionTwo.offset().top - 500) {
				$sectionTwo.addClass('active');
				sectionTwoExcuted = true;
			}
		}
		if(!sectionThreeExcuted) {
			if($(window).scrollTop() > $sectionThree.offset().top - 500) {
				$sectionThree.addClass('active');
				sectionThreeExcuted = true;
			}
		}
		if(!sectionFourExcuted) {
			if($(window).scrollTop() > $sectionFour.offset().top - 500) {
				$sectionFour.addClass('active');
				sectionFourExcuted = true;
			}
		}
		if(!sectionFiveExcuted) {
			if($(window).scrollTop() > $sectionFive.offset().top - 500) {
				$sectionFive.addClass('active');
				$({rate:0}).animate({rate:progressNumYear},
					{
						duration: 5000,
						progress: function() {
							var now = Math.ceil(this.rate);
							$sectionFive.find('.vision-container .info-area:nth-of-type(1) .num-count').text(now);
						}
					} 
				);
				$({rate:0}).animate({rate:progressNumPeople},
					{
						duration: 5000,
						progress: function() {
							var now = Math.ceil(this.rate);
							$sectionFive.find('.vision-container .info-area:nth-of-type(2) .num-count').text(now);
						}
					} 
				);
				$({rate:0}).animate({rate:progressNumRND},
					{
						duration: 5000,
						progress: function() {
							var now = Math.ceil(this.rate);
							$sectionFive.find('.vision-container .info-area:nth-of-type(3) .num-count').text(now);
						}
					} 
				);
				$({rate:0}).animate({rate:progressNumProduct},
					{
						duration: 5000,
						progress: function() {
							var now = Math.ceil(this.rate);
							$sectionFive.find('.vision-container .info-area:nth-of-type(4) .num-count').text(now);
						}
					} 
				);
				sectionFiveExcuted = true;
			}
		}
		if(!sectionSixExcuted) {
			if($(window).scrollTop() > $sectionSix.offset().top - 600) {
				$sectionSix.addClass('active');
				sectionSixExcuted = true;
			}
		}
	});
	$mainSliderContainer.find('.swiper-button-next').click(function(){
		slideshow.next();
	});
	$mainSliderContainer.find('.swiper-button-prev').click(function(){
		slideshow.prev();
	});
	$('.btn-nav').click(function(){
		var idx = $(this).index();
		slideIndex = idx;
		$(this).addClass('active').siblings().removeClass('active');
		$mainSlider.removeClass('active');
		$mainSlider.eq(slideIndex).addClass('active');
		slideshow.goTo(idx);
	});
	$.getJSON('./data/content.json', initProduct);
	$sectionTwo.find('.swiper-button-next').click(function(){
		teamSlideshow.next();
	});	
	$sectionTwo.find('.swiper-button-prev').click(function(){
		teamSlideshow.prev();
	});	
	workAutoSlide();
	$sectionFour.find('.pagination .total-page').html(aboutTotalPage);
	$sectionFour.find('.swiper-button-next').click(function(){
		aboutSlideshow.next();
	});
	$sectionFour.find('.swiper-button-prev').click(function(){
		aboutSlideshow.prev();
	});
	$privacyCheckBox.click(function() {
		if($privacyCheckBox.is(":checked")) {
			$formSubmit.addClass('visible');
		} else {
			$formSubmit.removeClass('visible');
		}
	});
	$wind.trigger('scroll');
});

