$(function() {
	var $subMenu = $('.sub-menu'),
		$subNavi = $('.sub-top-navi'),
		$subSectionOne = $('.sub06-section01'),
		$subSectionTwo = $('.sub06-section02'),
		subMenuExcuted = false,
		subNaviExcuted = false,
		subSectionOneExcuted = false,
		subSectionTwoExcuted = false,
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
	});
	if(nowPage.indexOf('develop.html') != -1) {
		$subMenu.find('li a').removeClass('on');
		$subMenu.find('li:nth-of-type(1) a').addClass('on');
	} else if (nowPage.indexOf('certification.html') != -1) {
		$subMenu.find('li a').removeClass('on');
		$subMenu.find('li:nth-of-type(2) a').addClass('on');
	}
})