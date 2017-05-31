
function onShow(question) {
	if (question.nextElementSibling.style.display != "none" && question.nextElementSibling.style.display != "block") {
		question.nextElementSibling.style.display = "none";
	} 
	if (question.nextElementSibling.style.display == "none") {
		question.nextElementSibling.style.display = "block";
	}
	else {
		question.nextElementSibling.style.display = "none"
	}
}
