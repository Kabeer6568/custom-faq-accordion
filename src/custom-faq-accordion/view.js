document.querySelectorAll(".plus_sign").forEach(function(button, index) {
	button.addEventListener("click", function() {
		button.style.display = "none";
		document.querySelectorAll(".minus_sign")[index].style.display = "block";
		document.querySelectorAll(".faq_accordian_ans")[index].style.display = "block";
	});
});

document.querySelectorAll(".minus_sign").forEach(function(button, index) {
	button.addEventListener("click", function() {
		button.style.display = "none";
		document.querySelectorAll(".plus_sign")[index].style.display = "block";
		document.querySelectorAll(".faq_accordian_ans")[index].style.display = "none";
	});
});

