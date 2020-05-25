
var main = document.getElementsByClassName("main-top");

var btnstat_ = "close";
var sidebarShowing = "big";


var xmedia = window.matchMedia("(max-width: 700px)");
navStart(xmedia);
xmedia.addListener(navStart);


$(document).ready(function(){
	$(document).mouseup(function(e) 
	{
	    var container = $(".sidebar");
	    var nav_provile = $(".nav-profile-details");

	    if (!container.is(e.target) && container.has(e.target).length === 0) 
	    {
	        if (xmedia.matches) {
	        	nav_started('close');
	        }
	    }

	    if (!nav_provile.is(e.target) && nav_provile.has(e.target).length === 0) 
	    {
	        // if (xmedia.matches) {
	        	$(".nav-profile-details").removeClass('show');
	        // }
	    }

	});
	$('body').attr('class','loaded');
	$('.progress-bar-pre.progress-bar-primary').attr("style", "width:100%;");
	$(".progress-bar-pre.progress-bar-primary").hide();


	$(".sidebar").mousemove(function(e) 
	{
	    nav_started('open');
	});

	$(".sidebar").mouseleave(function(e) 
	{
		if (sidebarShowing=="mini") {
	    	nav_started('close');
		}
	});

	$(".openbtn").click(
		function() {
			if (btnstat_=="open") {sidebarShowing="big"}
			else{sidebarShowing="mini"}
			console.log(btnstat_);
			nav_started(btnstat_);
			

		}
	);
	$(".nav-profile").click(function(e){
		if ($(".nav-profile-details").hasClass('show')) {
			$(".nav-profile-details").removeClass('show');
		}
		else{
			$(".nav-profile-details").addClass('show');
		}
	});

	$(".nav-notif").click(function(e){
		if ($(".nav-notif-details").hasClass('show')) {
			$(".nav-notif-details").removeClass('show');
		}
		else{
			$(".nav-notif-details").addClass('show');
		}
	});

	$(".sidebar-link").click(function(){

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			if ($(this).hasClass('sidebar-dropdown')) {
				$(this).next().children().slideUp('200').removeClass("active");
			}
		}
		else{
			$('.sidebar-link').removeClass('active');
			$(this).addClass('active');

			$(".sidebar-dropdown-item").slideUp('200').removeClass("active");
			
			if ($(this).hasClass('sidebar-dropdown')) {
				$(this).next().children().slideDown('200').addClass("active");
			}
		}
	});

	$(".task").flip({
	    trigger: 'click',
	});


	$('.count').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 1000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});

	$(".ripple, .openbtn, .accent-inner").click(function(e){
		const circle = document.createElement("div");
		
		var x =  e.offsetX;
		var y = e.offsetY;
		circle.classList.add("circle");
		circle.style.left = `${x}px`;
		circle.style.top = `${y}px`;
		$(this).append(circle);
		el = $(this);

		setTimeout(
	        function() {
	            console.log(el.find('.circle').remove());
	        },600);
	});


});


window.onbeforeunload = function(e) {
	var b = 0;
	
	$(".progress-bar-pre.progress-bar-primary").show();
};

function nav_started(btnstat){
	if (btnstat=="open") {
		
		btnstat_ = 'close';
		

		$('.bio-sidebar').removeClass('hidden');
		$('.sidebar').find( "span" ).show();
		$('.sidebar').find( "p" ).show();
		// $('.sidebar-img-1').show();
		$('.sidebar-img-2').show();
		$('.sidebar').find( "i" ).attr('style', 'font-size:14px; width:20px;');
		$('.sidebar').attr('align', 'left');
		$('.sidebar').removeClass('mini-side-bar');
		$('.sidebar-dropdown').removeClass('hidden');
		$('.sidebar').find('.sidebar-dropdown.active').next().children().slideDown(0).addClass("active");
		$('.sidebar-logo').attr('style', 'padding-left:20px;');
		$('.sidebar-logo').find('span').attr('style', 'font-size: 20px;');
		$('.sidebar-logo').find('span').show( 400 );
		if (xmedia.matches || sidebarShowing=="mini") {
			$('.sidebar').attr('style', 'width:250px;');
			// $('.openbtn').find('i').attr('class', 'ti-lock');
		}
		else{
			$('.sidebar').attr('style', 'width:250px;');
			main[0].style.marginLeft = "250px";
			$('.main-content').attr('style','margin-left: 250px;');
			$('.openbtn').find('i').attr('class', 'ti-unlock');
		}
	}
	else{
		
		btnstat_ = 'open';
		$('.sidebar').find( "span" ).hide();
		$('.bio-sidebar').addClass('hidden');

		$('.sidebar').find( "p" ).hide();
		$('.sidebar-img-2').show();
		// $('.sidebar-img-1').hide();
		$('.sidebar').attr('align', 'center');
		$('.sidebar').addClass('mini-side-bar');
		$('.sidebar-dropdown').addClass('hidden');
		$(".sidebar-dropdown-item").slideUp(0).removeClass("active");
		$('.sidebar-logo').attr('style', 'padding-left:0px;');
		$('.sidebar-logo').find('span').attr('style', 'font-size: 2px;');
		$('.sidebar-logo').find('span').hide();
		if (xmedia.matches) {
			$('.sidebar').attr('style', 'width:0px;');
			main[0].style.marginLeft= "0px";
			$('.main-content').attr('style','margin-left: 0px; margin-top: 0px;');
			$('.openbtn').find('i').attr('class', 'ti-lock');
		}
		else{
			$('.sidebar').attr('style', 'width:60px;');
			$('.sidebar-link').addClass('mini');
			$('.openbtn').find('i').attr('class', 'ti-lock');
			
			main[0].style.marginLeft= "60px";
			$('.main-content').attr('style','margin-left: 60px; margin-top: 0px;');
		}
	}
}

function navStart(xmedia){
	if (xmedia.matches) {
		sidebarShowing = "mini";
		nav_started('close');
	}
	else{
		sidebarShowing = "big";
		nav_started('open');
	}
}