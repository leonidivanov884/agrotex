$(document).ready(function() {
	$('.open-video').click(function(e) {
		e.preventDefault()
		$('.popupVideo').fadeIn()	
	})

	$( 'body' ).on( "click", ".popup-video", function(e) {
		if (e.target.classList.contains('popup-video')){
			$('.popup-video').fadeOut()
		}
	});

	$('.inp input').focus(function(){
			$(this).placeholder = "";
	})
	
	// open popup
	$('.closePopup').click(() => {
		$('.popup').fadeOut()
	})
	$('.openPopupList').click(() => {
		$('.popup').fadeOut()
		$('.popupList').fadeIn()
	})
	$( 'body' ).on( "click", ".popup ", function(e) {
		if (e.target.classList.contains('popup')){
			$('.popup').fadeOut()
		}
	});

	$('.header__bottom-reg').click(() => $('.popupFirst').fadeIn())
	// open popup

	$('.iso__box').click(() => {
		$(this).find('.icon-arrow').toggleClass('active')
		$('.iso__hid').slideToggle('slow')
	})

	$('.gallery__min li').click(function(e) {
		e.preventDefault();		
		if ($(this).hasClass('open-video')){
			$(`popupVideo-${$(this).attr('data-key')}`).fadeIn()
		}else{
			$('.gallery__min li').removeClass('active')
			$(this).addClass('active')	
			const src = $(this).find('img').attr('src')
			const alt = $(this).find('img').attr('alt')
			const img = `<img src="${src}" alt="${alt}">`	
			$('.gallery__main img').remove()
			$('.gallery__main').append(img)
		}	
	})

	//burger - menu

	$('.burger-one').click(() => {
		$('.header__bottom nav').addClass('active')
		$('.window').fadeIn()
	})

	$('.burger-two').click(() => {
		$('.header__bottom nav').removeClass('active')
		$('.window').fadeOut()
	})

	$('.window').click(function() {
		$(this).fadeOut()
		$('.header__bottom nav').removeClass('active')
	})

	//burger 


	$('.applic__head').click(function() {
		const parent = $(this).parent()
		parent.toggleClass('active')		
		parent.find('.applic__hid').slideToggle('slow')
	})
	// sldiers  ----------------------------------------------

	if ( $('.mat__slider').length ){
		$('.mat__slider').slick({
			dots: false,
			infinite: true,
			variableWidth: true,
			focusOnSelect: true,
		});
	}
	
	// sldiers  ----------------------------------------------

});

