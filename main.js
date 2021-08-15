let xval = [];
let yval = [];
const stock = document.querySelector('#stockcode');
const btn = document.querySelector('#lookup');
var stockcod = 0;
var myChart;
const datatype = document.querySelector('#subject');
var chioce = 0;


datatype.addEventListener('change', function(){
	chioce = datatype.value
	// console.log(chioce);

})



btn.addEventListener('click', function() {
	
	
	if( typeof myChart != 'undefined'){
		myChart.destroy();
		xval.length = 0;
		yval.length = 0;


	}




	if(stock.value == 0 || chioce == 0){
		alert('inter stock code or pick a stock market first');

	}
	else {
		stockcod = stock.value;
		sketch();
	}
	

} )



async function fetchstockAPI() {


	await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+ stockcod + '&outputsize=compact&apikey=MOR0CI3PU3IZ43EN',
	)
		.then(response => {
			let x = response.json()
			let data = JSON.stringify(x);


			// console.log(x);
			return x
		})
		.then(data => {
			// console.log(data);
		
			for (var key in data['Time Series (Daily)']) {
				xval.push(key);
				yval.push(data['Time Series (Daily)'][key]['1. open']);

			}
			// console.log(xval, yval);
		});
	

	


}

async function fetchcryptoAPI() {


	await fetch('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=' + stockcod + '&market=USD&apikey=MOR0CI3PU3IZ43EN',
	)
		.then(response => {
			let x = response.json()
			let data = JSON.stringify(x);


			// console.log(x);
			return x
		})
		.then(data => {
			// console.log(data);
		
			for (var key in data['Time Series (Digital Currency Daily)']) {
				xval.push(key);
				yval.push(data['Time Series (Digital Currency Daily)'][key]['1b. open (USD)']);

			}
			
		});
		// console.log(xval, yval);

	

	


}







async function sketch() { 
	
	
	
	

	if (chioce == "crypto") {
		await fetchcryptoAPI();
	}
	else {

		await fetchstockAPI();

	}

	// console.log(xval, yval);
	const win = document.getElementById('chart');
	
	const ctx = win.getContext('2d');
	
	myChart = new Chart(ctx, {
		
		
	
		
		type: 'line',
		data: {
			labels: xval,
			datasets: [
			{
				label: 'stock data of :' + stockcod,
				data: yval,
				backgroundColor: 'yellow',
				borderColor: 'rgb(75, 192, 192)',
				borderWidth: 1,
				responsive: true,
				maintainAspectRatio: false
			}]
		}

	});
	
	
	

}







