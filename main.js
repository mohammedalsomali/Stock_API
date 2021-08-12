

// fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=compact&apikey=MOR0CI3PU3IZ43EN",
// )
// .then(response => {
// 	let x = response.json()
// 	let data = JSON.stringify(x);
	

// 	console.log(x);
// 	return x
// })
// .then(data => {
// 	console.log(data);
// 	let tex = {};
// 	for(var key in data['Time Series (Daily)']){

// 		tex.key = data['Time Series (Daily)'][key]['1. open'];

// 	}
// 	document.querySelector('.div').textContent = tex.;


// });

tex = [
	{
	name: 'henry',
	age: '32',
	car: 'yes',
	}

	,
	{
	name: 'sam',
	age: '30',
	car: 'no',
	}

];
// var y = JSON.stringify(tex);
// console.log(y);
// y = y.replaceAll(/{/g, ' ');
// y = y.replaceAll(/"/g, ' ');
// y = y.replaceAll(/:/g, ' ');
// y = y.replaceAll(/,/g, ' ');
// // y = y.replaceAll(/[/g, ' ');
// y = y.replaceAll(/]/g, ' ');
var w  = tex.slice(',')
y = w.join(" /n ")


document.querySelector('.div').textContent = y;