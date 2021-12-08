const pubKey = 'fb47d0b05d9f848159281d26dae489f1';
const prvKey = '63881b8a8f3fafeeb37ecdf95631f9f0015ac340';
const hash = 'f3f5921628bb39956cfbb6a529983f2c';
const ts = new Date();
var letter = '';
const random = Math.floor(Math.random() * (13 - 0) + 0);
const arr = [
	{
		name: 'luke+cage',
	},
	{
		name: 'hulk',
	},
	{
		name: 'iron+man',
	},
	{
		name: 'deadpool',
	},
	{
		name: 'captain+america',
	},
	{
		name: 'thor',
	},
	{
		name: 'falcon',
	},
	{
		name: 'hawkeye',
	},
	{
		name: 'doctor+strange',
	},
	{
		name: 'thanos',
	},
	{
		name: 'cable',
	},
	{
		name: 'beast',
	},
	{
		name: 'wolverine',
	},
];
const randomHero = arr[random].name;
const heroNameReturn = () => (letter = randomHero);
const marvel = document.querySelector('ol');
var encrypted = CryptoJS.MD5(ts + prvKey + pubKey).toString();
heroNameReturn();

var requestUrl = `http://gateway.marvel.com/v1/public/characters?name=${letter}&ts=${ts}&apikey=${pubKey}&hash=${encrypted}`;
fetch(requestUrl)
	.then((response) => response.json())
	.then((data) => {
		const dataList = data;
		const char = dataList.data.results;
		console.log(dataList.data.results[0].description);
		char.forEach((item, i) => {
			var each = document.createElement('li');
			console.log(item.thumbnail);
			var themName = item.name;
			var them = JSON.stringify(
				item.thumbnail.path + '.' + item.thumbnail.extension
			);
			each.append(document.createTextNode(item.thumbnail[i]));

			return (marvel.appendChild(
				each
			).innerHTML = `<div class='card'><p>Your Super Hero is</p>:<span>${themName}</span> <img src=${them} /></div> `);
		});
	});

console.log(arr[random].name);
console.log(random);

// this.data.forEach((item) => {
// console.log(this.requestUrl);
// });

// marvel.textContent = 'data';

// Established response API's
// http://gateway.marvel.com/v1/public/characters?nameStartsWith=${letter}&ts=${ts}&apikey=${pubKey}&hash=${encrypted}
