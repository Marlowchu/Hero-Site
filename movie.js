var head = document.querySelector('h1');
const key = '34da3d2a';
const matrix = 'the+avengers';
const omdbUrl = `http://www.omdbapi.com/?t=${matrix}&apikey=${key}`;

fetch(omdbUrl)
	.then((response) => response.json())
	.then((data) => {
		const movie = data.Poster;
		console.log(data.BoxOffice);
		// var display = document.createElement('li');
		// display.append(document.createTextNode(movie));
		head.innerHTML = `<img src=${movie} />;`;

		console.log(data);
	});
