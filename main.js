let xval = [];
let yval = [];
const stock = document.querySelector('#stockcode');
const btn = document.querySelector('#lookup');
var stockcod = 0;


btn.addEventListener('click', function() {
	
	

	if(stock.value == 0){
		alert('inter stock code');

	}
	else {
		stockcod = stock.value;
		sketch();
	}
	

} )



async function fetchAPI() {



	await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+ stockcod + "&outputsize=compact&apikey=MOR0CI3PU3IZ43EN",
	)
		.then(response => {
			let x = response.json()
			let data = JSON.stringify(x);


			console.log(x);
			return x
		})
		.then(data => {
			console.log(data);
			// let apix = [];
			// let apiy = [];
			for (var key in data['Time Series (Daily)']) {
				xval.push(key);
				yval.push(data['Time Series (Daily)'][key]['1. open']);

			}
			// xval = apix;
			// yval = apiy;
			console.log(xval, yval);
		});

	


}







async function sketch() { 
	
	



	await fetchAPI();
	console.log(xval, yval);
	const ctx = document.getElementById('chart').getContext('2d');
	const myChart = new Chart(ctx, {
		
		
	
		
		type: 'line',
		data: {
			labels: xval,
			datasets: [
			{
				label: 'stock data',
				data: yval,
				backgroundColor: 'yellow',
				borderWidth: 1
			}]
		}

	});
	Chart.destroy();
	
	

}







