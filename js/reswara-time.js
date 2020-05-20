function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	// add a zero in front of numbers<10
	m = checkTime(m);
	s = checkTime(s);

	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	// document.getElementById('time').innerHTML = weekday[today.getDay()]+", "+h + ":" + m + ":" + s;
	$(".time").html(weekday[today.getDay()]+", "+h + ":" + m + ":" + s);
	$(".month").html(months[today.getMonth()]);
	$(".date").html(today.getDate());
	$(".year").html(today.getFullYear());

	t = setTimeout(function() {
		startTime()
	}, 500);
}
startTime();