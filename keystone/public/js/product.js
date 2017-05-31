var about_blocks = document.getElementsByClassName('about_clients-container');
if (about_blocks.length > 0) {
	var about_count = 0;

	about_blocks[about_count].style.display = 'block';

	window.onscroll = function() {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		var height = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
		var innerHeight = document.documentElement.clientHeight;

		console.log(scrollTop, height, innerHeight);
		if (about_count < about_blocks.length - 1) {
			if (height - 150 < innerHeight + scrollTop) {
				about_count = about_count + 1;
				about_blocks[about_count].style.display = 'block';
			}
		}

	};
}

function onProductShow(el) {
	el.previousElementSibling.style.display = 'block';
}

function onProductClose(el) {
	el.parentNode.style.display = 'none';
}
