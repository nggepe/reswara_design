
var main = document.getElementsByClassName("main-top");

var btnstat_ = "close";
var sidebarShowing = "big";

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

var xmedia = window.matchMedia("(max-width: 700px)")
navStart(xmedia)
xmedia.addListener(navStart)


$(document).ready(function(){
	
});

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

function nav_started(btnstat){
	if (btnstat=="open") {
		
		btnstat_ = 'close';
		

		$('.sidebar').attr('style', 'width:250px;');
		$('.bio-sidebar').removeClass('hidden');
		main[0].style.marginLeft = "250px";
		$('.main-content').attr('style','margin-left: 280px; margin-top: 20px;');
		$('.sidebar').find( "span" ).show();
		$('.sidebar').find( "p" ).show();
		$('.sidebar-img-1').show();
		$('.sidebar-img-2').hide();
		$('.sidebar').find( "i" ).attr('style', 'font-size:14px; width:20px;');
		$('.sidebar').attr('align', 'left');
		$('.sidebar').removeClass('mini-side-bar');
		$('.sidebar-dropdown').removeClass('hidden');
		$('.sidebar').find('.sidebar-dropdown.active').next().children().slideDown('200').addClass("active");
	}
	else{
		
		btnstat_ = 'open';
		$('.sidebar').find( "span" ).hide();
		$('.bio-sidebar').addClass('hidden');

		$('.sidebar').find( "p" ).hide();
		$('.sidebar-img-2').show();
		$('.sidebar-img-1').hide();
		$('.sidebar').attr('align', 'center');
		$('.sidebar').addClass('mini-side-bar');
		$('.sidebar-dropdown').addClass('hidden');
		$(".sidebar-dropdown-item").slideUp('200').removeClass("active");
		if (xmedia.matches) {
			$('.sidebar').attr('style', 'width:0px;');
			main[0].style.marginLeft= "0px";
			$('.main-content').attr('style','margin-left: 30px; margin-top: 20px;');
		}
		else{
			$('.sidebar').attr('style', 'width:60px;');
			$('.sidebar-link').addClass('mini');
			
			main[0].style.marginLeft= "60px";
			$('.main-content').attr('style','margin-left: 90px; margin-top: 20px;');
		}
	}
}

