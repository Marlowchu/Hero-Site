var head = document.querySelector('h1');
const matrix = 'jumanji';
const omdbUrl = `http://www.omdbapi.com/?t=${matrix}&apikey=34da3d2a`;

fetch(omdbUrl)
	.then((response) => response.json())
	.then((data) => {
		const movie = data.Poster;
		console.log(movie);
		// var display = document.createElement('li');
		// display.append(document.createTextNode(movie));
		head.innerHTML = `<img src=${movie} />;`;

		console.log(data);
	});
