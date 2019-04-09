var dgbJson = new XMLHttpRequest();
dgbJson.onload = function () {
	if (dgbJson.status >= 200 && dgbJson.status < 300) {
		var bookData = JSON.parse(dgbJson.response);
		var html = "<div class='carousel-wrapper'>";
		bookData.forEach(function(book) {
			html += "<div class='book-item'>";
			html += "<a href='" + book.link + "' target='_blank'>";
			html += "<div class='image-wrapper'>";
			html += "<img src='" + book.acf.cover_image.url + "' alt='" + book.acf.title + " book cover' />";
			html += "</div>";
			html += "<h3>" + book.acf.title + "</h3>";
			html += "<p>" + book.acf.author + "</p>";
			html += "</a>";
			html += "<a class='amazon-buy' href='" + book.acf.amazon_link + "' target='_blank'>";
			html += "Buy the book</a>";
			html += "</div>";
		});
		html += "</div>";
	} else {
		html += "</p>Unable to load book data!</p>";
	}
	document.getElementById("Carousel").innerHTML = html;
};
dgbJson.open('GET', 'https://www.deadgoodbooks.co.uk/wp-json/wp/v2/posts?categories=1207');
dgbJson.send();
