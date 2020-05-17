
var main = document.getElementsByClassName("main-top");

var btnstat_ = "close";

function navStart(xmedia){
	if (xmedia.matches) {
		nav_started('close');
	}
	else{
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

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        if (xmedia.matches) {
        	nav_started('close');
        }
    }
});

$(".openbtn").click(
	function() {
		nav_started(btnstat_);
	}
);

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
		$('.sidebar').attr('style', 'width:250px;');
		main[0].style.marginLeft = "250px";
		btnstat_ = 'close';
		$('.sidebar').find( "span" ).show();
		$('.sidebar').find( "p" ).show();
		$('.sidebar-img-1').show();
		$('.sidebar-img-2').hide();
		$('.sidebar').find( "i" ).attr('style', 'font-size:14px; width:20px;');
		$('.sidebar').attr('align', 'left');
		$('.sidebar').removeClass('mini-side-bar');
		$('.sidebar-dropdown').removeClass('hidden');
	}
	else{
		
		btnstat_ = 'open';
		$('.sidebar').find( "span" ).hide();
		$('.sidebar').find( "p" ).hide();
		$('.sidebar-img-2').show();
		$('.sidebar-img-1').hide();
		$('.sidebar').attr('align', 'center');
		$('.sidebar').addClass('mini-side-bar');
		$('.sidebar-dropdown').addClass('hidden');
		if (xmedia.matches) {
			$('.sidebar').attr('style', 'width:0px;');
			main[0].style.marginLeft= "0px";
		}
		else{
			$('.sidebar').attr('style', 'width:60px;');
			$('.sidebar-link').addClass('mini');
			main[0].style.marginLeft= "60px";
		}
	}
}

