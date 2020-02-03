$(function() {
	var $subMenu = $('.sub-menu'),
		$subNavi = $('.sub-top-navi'),
		$subSectionOne = $('.sub04-section01'),
		$subSectionTwo = $('.sub04-section02'),
		$subSectionThree = $('.sub04-section03'),
		$subSectionFour = $('.sub04-section04'),
		$subFiveSectionOne = $('.sub05-section01'),
		$subSectionTitle = $subSectionFour.find('h3'),
		$subSectionFourListOne = $subSectionFour.find('.list-item:nth-of-type(1)'),
		$subSectionFourListTwo = $subSectionFour.find('.list-item:nth-of-type(2)'),
		$subSectionFourListThree = $subSectionFour.find('.list-item:nth-of-type(3)'),
		$subSectionFourListFour = $subSectionFour.find('.list-item:nth-of-type(4)'),
		$subSectionFourListFive = $subSectionFour.find('.list-item:nth-of-type(5)'),
		$subSectionFourListSix = $subSectionFour.find('.list-item:nth-of-type(6)'),
		$subSectionFive = $('.sub04-section05'),
		$subSectionFiveList = $subSectionFive.find('li'),
		$subSectionSix = $('.sub04-section06'),
		subSectionOneExcuted = false,
		subSectionTwoExcuted = false,
		subSectionThreeExcuted = false,
		subSectionTitleExcuted = false,
		subSectionFourListOneExcuted = false,
		subSectionFourListTwoExcuted = false,
		subSectionFourListThreeExcuted = false,
		subSectionFourListFourExcuted = false,
		subSectionFourListFiveExcuted = false,
		subSectionFourListFiveListExcuted = false,
		subSectionFourListSixExcuted = false,
		subSectionFiveExcuted = false,
		subSectionSixExcuted = false,
		subFiveSectionOneExcuted = false,
		subMenuExcuted = false,
		subNaviExcuted = false,
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
	if(nowPage.indexOf('process.html') != -1) {
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
			// 
			if(!subSectionTitleExcuted) {
				if($(window).scrollTop() > $subSectionTitle.offset().top - 500) {
					$subSectionTitle.addClass('fadeInUp');
					subSectionTitleExcuted = true;
				}
			}
			if(!subSectionFourListOneExcuted) {
				if($(window).scrollTop() > $subSectionFourListOne.offset().top - 500) {
					$subSectionFourListOne.addClass('fadeInUp');
					subSectionFourListOneExcuted = true;
				}
			}
			if(!subSectionFourListTwoExcuted) {
				if($(window).scrollTop() > $subSectionFourListTwo.offset().top - 500) {
					$subSectionFourListTwo.addClass('fadeInUp');
					subSectionFourListTwoExcuted = true;
				}
			}
			if(!subSectionFourListThreeExcuted) {
				if($(window).scrollTop() > $subSectionFourListThree.offset().top - 500) {
					$subSectionFourListThree.addClass('fadeInUp');
					subSectionFourListThreeExcuted = true;
				}
			}
			if(!subSectionFourListFourExcuted) {
				if($(window).scrollTop() > $subSectionFourListFour.offset().top - 500) {
					$subSectionFourListFour.addClass('fadeInUp');
					subSectionFourListFourExcuted = true;
				}
			}
			if(!subSectionFourListFiveExcuted) {
				if($(window).scrollTop() > $subSectionFourListFive.offset().top - 500) {
					$subSectionFourListFive.addClass('fadeInUp');
					subSectionFourListFiveExcuted = true;
				}
			}
			if(!subSectionFourListSixExcuted) {
				if($(window).scrollTop() > $subSectionFourListSix.offset().top - 500) {
					$subSectionFourListSix.addClass('fadeInUp');
					subSectionFourListSixExcuted = true;
				}
			}
			if(!subSectionFiveExcuted) {
				if($(window).scrollTop() > $subSectionFive.offset().top - 500) {
					$subSectionFive.addClass('fadeInDown');
					$subSectionFiveList.addClass('fadeInLeft');
					subSectionFiveExcuted = true;
				}
			}
			if(!subSectionSixExcuted) {
				if($(window).scrollTop() > $subSectionSix.offset().top - 500) {
					$subSectionSix.addClass('fadeInDown');
					subSectionSixExcuted = true;
				}
			}
		})
	} else if(nowPage.indexOf('partner.html') != -1) {
		$subMenu.find('li a').removeClass('on');
		$subMenu.find('li:nth-of-type(2) a').addClass('on');
		$(window).scroll(function() {
			if(!subFiveSectionOneExcuted) {
				if($(window).scrollTop() > $subFiveSectionOne.offset().top - 500) {
					$subFiveSectionOne.addClass('fadeInDown');
					$subSectionSix.addClass('fadeInDown');
					subFiveSectionOneExcuted = true;
				}
			}
		});
	}
})