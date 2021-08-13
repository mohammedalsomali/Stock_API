let xval = [];
let yval = [];
const stock = document.querySelector('#stockcode');
const btn = document.querySelector('#lookup');
var stockcod = 0;
var myChart;



btn.addEventListener('click', function() {
	
	
	if( typeof myChart != 'undefined'){
		myChart.destroy();
		xval.length = 0;
		yval.length = 0;


	}




	if(stock.value == 0){
		alert('inter stock code');

	}
	else {
		stockcod = stock.value;
		sketch();
	}
	

} )



async function fetchAPI() {


	await fetch("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=MOR0CI3PU3IZ43EN",
	)
		.then(response => {
			let x = response.json()
			let data = JSON.stringify(x);


			// console.log(x);
			return x
		})
		.then(data => {
			console.log(data);
		
			for (var key in data['Time Series (Digital Currency Daily)']) {
				xval.push(key);
				yval.push(data['Time Series (Digital Currency Daily)'][key]['1b. open (USD)']);

			}
			
		});
	

	


}







async function sketch() { 
	
	
	
	


	await fetchAPI();
	// console.log(xval, yval);
	const ctx = document.getElementById('chart').getContext('2d');
	myChart = new Chart(ctx, {
		
		
	
		
		type: 'line',
		data: {
			labels: xval,
			datasets: [
			{
				label: 'stock data of :' + stockcod,
				data: yval,
				backgroundColor: 'yellow',
				borderWidth: 1
			}]
		}

	});
	
	
	

}







