$(function() {
	$subNavi = $('.sub-top-navi'),
	$sortList = $('.sort-list'),
	$itemCategory = $('.item-category'),
	$productContainer = $('.product-container'),
	$allData = [],
	addItemCount = 8,
	added = 0,
	$loadMoreProduct = $('.btn-goods-more button'),
	subNaviExcuted = false;

	$(window).scroll(function() {
		if(!subNaviExcuted) {
			if($(window).scrollTop() > $subNavi.offset().top - 500) {
				$subNavi.addClass('active');
				subNaviExcuted = true;
			}
		}
	});
	function initProduct(data) {
		var sortField,
			nowData;
		if($itemCategory.find('.cleansing').hasClass('on')) {
			nowData = data.filter(function(ele) {
				return ele.class == '클렌징';
			});
		} else if($itemCategory.find('.toner').hasClass('on')) {
			nowData = data.filter(function(ele) {
				return ele.class == '토너';
			});
		} else if($itemCategory.find('.serum').hasClass('on')) {
			nowData = data.filter(function(ele) {
				return ele.class == '세럼';
			});
		} else if($itemCategory.find('.lotion').hasClass('on')) {
			nowData = data.filter(function(ele) {
				return ele.class == '로션';
			});
		} else {
			$itemCategory.find('.all').addClass('on').siblings().removeClass('on');
			nowData = data;
		}
		if($sortList.find('.low').hasClass('on')) {
			sortField = 'price';
			$allData = nowData.sort(function(a,b) {
				return a[sortField] - b[sortField];
			});	
			initContainer();
		} else if($sortList.find('.high').hasClass('on')) {
			sortField = 'price';
			$allData = nowData.sort(function(a,b) {
				return b[sortField] - a[sortField];
			});
			initContainer();
		} else if($sortList.find('.sales').hasClass('on')) {
			sortField = 'sales';
			$allData = nowData.sort(function(a,b) {
				return b[sortField] - a[sortField];
			});
			initContainer();
		} else {
			$sortList.find('li:first-of-type').addClass('on').siblings().removeClass('on');
			$allData = nowData;
			initContainer();
		}
	}
	function initContainer() {
		added = 0;
		$productContainer.empty();
		addItem();
		$loadMoreProduct.click(addItem);
	};
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
		added += addItemCount;
		if(added >= $allData.length) {
			$loadMoreProduct.hide();
		} else {
			$loadMoreProduct.show();
		}
	}
	$itemCategory.find('li a').click(function() { 
		var category = $(this).parents('li').attr('class');
		localStorage.setItem('category', category);
		$(this).parents('li').addClass('on').siblings().removeClass('on');
	});
	if($itemCategory.find('li').hasClass(localStorage.getItem('category'))) {
		$itemCategory.find('li.' + localStorage.getItem('category')).addClass('on');
	}
	$sortList.find('li').click(function() {
		var sort = $(this).attr('class');
		localStorage.setItem('sort', sort);
		$(this).addClass('on').siblings().removeClass('on');
	});
	if($sortList.find('li').hasClass(localStorage.getItem('sort'))) {
		$sortList.find('li.' + localStorage.getItem('sort')).addClass('on');
	};
	if(location.href.indexOf('products.html') != -1) {
		$itemCategory.find('li').removeClass('on');
		$itemCategory.find('li:nth-of-type(1)').addClass('on');
	}
	$.getJSON('../../data/products.json', initProduct);
})