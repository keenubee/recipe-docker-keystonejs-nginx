var home_iconblock = document.querySelectorAll('.section_main_iconblock h3');

var home_mouseover = document.querySelectorAll('.section_main_iconblock_image');
for (j = 0; j < home_mouseover.length; j++) {
	home_mouseover[j].addEventListener('mouseover', function () {this.style.opacity = '0'});
	home_mouseover[j].addEventListener('mouseout', function () {this.style.opacity = '1'});
}

//open popup window
function onFullText(el) {
	var home_white_triangle = el.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
	var home_triangle = home_white_triangle.previousElementSibling;
	var home_popup = home_triangle.previousElementSibling;
	home_white_triangle.style.display = 'block';
	home_triangle.style.display = 'block';
	home_popup.style.display = 'block';
}
//close popup window
function onCloseText(el) {
	var home_popup = el.parentNode;
	var home_triangle = home_popup.nextElementSibling;
	var home_white_triangle = home_triangle.nextElementSibling;
	home_white_triangle.style.display = 'none';
	home_triangle.style.display = 'none';
	home_popup.style.display = 'none';	
	
	
}



//Tab for dashboard
var dash = ['.section_main_dashboard_wrapper1', '.section_main_dashboard_wrapper2', '.section_main_dashboard_wrapper3',
	'.section_main_dashboard_wrapper4', '.section_main_dashboard_wrapper5', '.section_main_dashboard_wrapper6',];
function onChangeDashboard(num) {
	for( i = 0; i < dash.length; i++) {
	var dashboard = document.querySelector(dash[i]);
		if (i + 1 == num) {
			dashboard.style.display = 'block';
		}
		else {
			dashboard.style.display = 'none';
		}
			}
}





