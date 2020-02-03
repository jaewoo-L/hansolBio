$(function(){
	var $subMenu = $('.sub-menu'),
		$subNavi = $('.sub-top-navi'),
		$subSectionOne = $('.sub01-section01'),
		$subSectionTwo = $('.sub01-section02'),
		$subSectionThree = $('.sub01-section03'),
		$subSectionFour = $('.sub01-section04'),
		$subSectionFive = $('.sub01-section05'),
		$subSectionSix = $('.sub01-section06'),
		$subTwoSectionOne = $('.sub02-section01'),
		$subTwoSectionTwo = $('.sub02-section02'),
		$subTwoSectionThree = $('.sub02-section03'),
		$subTwoSectionThreeAreaOne = $subTwoSectionThree.find('.area01'),
		$subTwoSectionThreeAreaTwo = $subTwoSectionThree.find('.area02'),
		$subTwoSectionThreeAreaThree = $subTwoSectionThree.find('.area03'),
		$subTwoSectionFour = $('.sub02-section04'),
		$subTwoSectionFive = $('.sub02-section05'),
		$subTwoSectionFiveAreaOne = $subTwoSectionFive.find('.area01'),
		$subTwoSectionFiveAreaTwo = $subTwoSectionFive.find('.area02'),
		$subTwoSectionFiveAreaThree = $subTwoSectionFive.find('.area03'),
		$subThreeSectionOne = $('.sub03-section01'),
		$subThreeSectionSix = $('.sub03-section06'),
		progress2019 = $subTwoSectionTwo.find('.num-count').attr('data-rate'),
		progress2015 = $subTwoSectionFour.find('.num-count').attr('data-rate'),
		subMenuExcuted = false,
		subNaviExcuted = false,
		subSectionOneExcuted = false,
		subSectionTwoExcuted = false,
		subSectionThreeExcuted = false,
		subTwoSectionThreeAreaOneExcuted = false,
		subTwoSectionThreeAreaTwoExcuted = false,
		subTwoSectionThreeAreaThreeExcuted = false,
		subSectionFourExcuted = false,
		subSectionFiveExcuted = false,
		subSectionSixExcuted = false,
		subTwoSectionOneExcuted = false,
		subTwoSectionTwoExcuted = false,
		subTwoSectionThreeExcuted = false,
		subTwoSectionFourExcuted = false,
		subTwoSectionFiveExcuted = false,
		subTwoSectionFiveAreaOneExcuted = false,
		subTwoSectionFiveAreaTwoExcuted = false,
		subTwoSectionFiveAreaThreeExcuted = false,
		subThreeSectionOneExcuted = false,
		subThreeSectionSixExcuted = false,
		nowPage = location.href;

	$(window).scroll(function() {
		if(!subMenuExcuted) {
			if($(window).scrollTop() > $subNavi.offset().top - 500) {
				$subMenu.addClass('active');
				subMenuExcuted = true;
			}
		}
		if(!subNaviExcuted) {
			if($(window).scrollTop() > $subNavi.offset().top - 500) {
				$subNavi.addClass('active');
				subNaviExcuted = true;
			}
		}
	});

	if(nowPage.indexOf('intro.html') != -1) {
		$subMenu.find('li a').removeClass('on');
		$subMenu.find('li:nth-of-type(1) a').addClass('on');
		$(window).scroll(function() {
		if(!subSectionOneExcuted) {
			if($(window).scrollTop() > $subSectionOne.offset().top - 500) {
				$subSectionOne.addClass('fadeInDown');
				subSectionOneExcuted = true;
			}
		}
		if(!subSectionTwoExcuted) {
			if($(window).scrollTop() > $subSectionTwo.offset().top - 500) {
				$subSectionTwo.addClass('fadeInDown');
				subSectionTwoExcuted = true;
			}
		}
		if(!subSectionThreeExcuted) {
			if($(window).scrollTop() > $subSectionThree.offset().top - 500) {
				$subSectionThree.addClass('fadeInDown');
				subSectionThreeExcuted = true;
			}
		}
		if(!subSectionFourExcuted) {
			if($(window).scrollTop() > $subSectionFour.offset().top - 500) {
				$subSectionFour.addClass('fadeInDown');
				subSectionFourExcuted = true;
			}
		}
		if(!subSectionFiveExcuted) {
			if($(window).scrollTop() > $subSectionFive.offset().top - 500) {
				$subSectionFive.addClass('fadeInDown');
				subSectionFiveExcuted = true;
			}
		}
		if(!subSectionSixExcuted) {
			if($(window).scrollTop() > $subSectionSix.offset().top - 500) {
				$subSectionSix.addClass('fadeInDown');
			}
			if($(window).scrollTop() > $subSectionSix.find('ul').offset().top - 600) {
				$subSectionSix.find('ul').addClass('active');
				subSectionSixExcuted = true;
			}
		}
	});
	} else if(nowPage.indexOf('history.html') != -1) {
		$subMenu.find('li a').removeClass('on');
		$subMenu.find('li:nth-of-type(2) a').addClass('on');
		$(window).scroll(function() {
			if(!subTwoSectionOneExcuted) {
				if($(window).scrollTop() > $subTwoSectionOne.offset().top - 500) {
					$subTwoSectionOne.addClass('fadeInDown');
					subTwoSectionOneExcuted = true;
				}
			}
			if(!subTwoSectionTwoExcuted) {
				if($(window).scrollTop() > $subTwoSectionTwo.offset().top - 500) {
					$subTwoSectionTwo.addClass('fadeInDown');
					$({rate:0}).animate({rate:progress2019},
						{
							duration: 2000,
							progress: function() {
								var now = Math.ceil(this.rate);
								$subTwoSectionTwo.find('.num-count').text(now);
							}
						} 
					);
					subTwoSectionTwoExcuted = true;
				}
			}
			if(!subTwoSectionThreeAreaOneExcuted) {
				if($(window).scrollTop() > $subTwoSectionThreeAreaOne.offset().top - 300) {
					$subTwoSectionThreeAreaOne.addClass('fadeInDown');
					subTwoSectionThreeAreaOneExcuted = true;
				}
			}if(!subTwoSectionThreeAreaTwoExcuted) {
				if($(window).scrollTop() > $subTwoSectionThreeAreaTwo.offset().top - 300) {
					$subTwoSectionThreeAreaTwo.addClass('fadeInDown');
					subTwoSectionThreeAreaTwoExcuted = true;
				}
			}if(!subTwoSectionThreeAreaThreeExcuted) {
				if($(window).scrollTop() > $subTwoSectionThreeAreaThree.offset().top - 300) {
					$subTwoSectionThreeAreaThree.addClass('fadeInDown');
					subTwoSectionThreeAreaThreeExcuted = true;
				}
			}
			if(!subTwoSectionFourExcuted) {
				if($(window).scrollTop() > $subTwoSectionFour.offset().top - 500) {
					$subTwoSectionFour.addClass('fadeInDown');
					$({rate:0}).animate({rate:progress2015},
						{
							duration: 2000,
							progress: function() {
								var now = Math.ceil(this.rate);
								$subTwoSectionFour.find('.num-count').text(now);
							}
						} 
					);
					subTwoSectionFourExcuted = true;
				}
			}
			if(!subTwoSectionFiveAreaOneExcuted) {
				if($(window).scrollTop() > $subTwoSectionFiveAreaOne.offset().top - 500) {
					$subTwoSectionFiveAreaOne.addClass('fadeInDown');
					subTwoSectionFiveAreaOneExcuted = true;
				}
			}if(!subTwoSectionFiveAreaTwoExcuted) {
				if($(window).scrollTop() > $subTwoSectionFiveAreaTwo.offset().top - 500) {
					$subTwoSectionFiveAreaTwo.addClass('fadeInDown');
					subTwoSectionFiveAreaTwoExcuted = true;
				}
			}if(!subTwoSectionFiveAreaThreeExcuted) {
				if($(window).scrollTop() > $subTwoSectionFiveAreaThree.offset().top - 600) {
					$subTwoSectionFiveAreaThree.addClass('fadeInDown');
					subTwoSectionFiveAreaThreeExcuted = true;
				}
			}
		});
	}  else if(nowPage.indexOf('factory.html') != -1) {
		$subMenu.find('li a').removeClass('on');
		$subMenu.find('li:nth-of-type(3) a').addClass('on');
		$(window).scroll(function() {
			if(!subThreeSectionOneExcuted) {
				if($(window).scrollTop() > $subThreeSectionOne.offset().top - 500) {
					$subThreeSectionOne.addClass('fadeInDown');
					subThreeSectionOneExcuted = true;
				}
			}
			if(!subSectionTwoExcuted) {
				if($(window).scrollTop() > $subSectionTwo.offset().top - 500) {
					$subSectionTwo.addClass('fadeInDown');
					subSectionTwoExcuted = true;
				}
			}
			if(!subSectionThreeExcuted) {
				if($(window).scrollTop() > $subSectionThree.offset().top - 500) {
					$subSectionThree.addClass('fadeInDown');
					subSectionThreeExcuted = true;
				}
			}
			if(!subSectionFourExcuted) {
				if($(window).scrollTop() > $subSectionFour.offset().top - 500) {
					$subSectionFour.addClass('fadeInDown');
					subSectionFourExcuted = true;
				}
			}
			if(!subSectionFiveExcuted) {
				if($(window).scrollTop() > $subSectionFive.offset().top - 500) {
					$subSectionFive.addClass('fadeInDown');
					subSectionFiveExcuted = true;
				}
			}
			if(!subThreeSectionSixExcuted) {
				if($(window).scrollTop() > $subThreeSectionSix.offset().top - 600) {
					$subThreeSectionSix.addClass('fadeInDown');
					subThreeSectionSixExcuted = true;
				}
			}
		});
	}

})