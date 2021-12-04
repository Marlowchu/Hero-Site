const requestUrl = 'https://www.marvel.com/characters/vision';

fetch(requestUrl)
	.then((response) => response.json())
	.then((data) => console.log(data));
