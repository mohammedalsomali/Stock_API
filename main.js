let xval = [];
let yval = [];
const stock = document.querySelector('#stockcode');
const btn = document.querySelector('#lookup');
var stockcod = 0;
var myChart;
const stocktype = document.querySelector('#subject');
const timeintervalch = document.querySelector('#timeint');
const historych = document.querySelector('#history');
const personalAPIch = document.querySelector('#API');

var sear = '';
var interval = '';
var openor;
var chioce = 0;
var timeInt = 0;
var history = 0;
var Api_key = 'MOR0CI3PU3IZ43EN';



stocktype.addEventListener('change', function(){
	chioce = stocktype.value
	change();
	// console.log(chioce);

})



function change(){
	if (timeintervalch.value == "daily"){ 
		if (chioce == 'stock'){
			timeInt = 'TIME_SERIES_DAILY';
			sear = 'Time Series (Daily)';
		}
		else if (chioce == 'crypto'){
			timeInt = 'DIGITAL_CURRENCY_DAILY';
			sear = 'Time Series (Digital Currency Daily)';
			openpr = '1b. open (USD)';
			

		}
		

	}
	else if (timeintervalch.value == "hourly"){
		interval = '&interval=60min';
		if (chioce == 'stock'){
			timeInt = 'TIME_SERIES_INTRADAY';
			sear = 'Time Series (60min)';
		}
		else if (chioce == 'crypto'){
			timeInt = 'CRYPTO_INTRADAY';
			sear = 'Time Series Crypto (60min)';
			openpr = '1. open';

		}

		
	}
	// console.log(chioce);
}

timeintervalch.addEventListener('change', function(){
	change();
	

})


historych.addEventListener('change', function(){
	if (historych.value == 'full'){
		history = 'full';
	}
	else {
		history = 'compact';

	}
	// console.log(chioce);

})



personalAPIch.addEventListener('change', function(){
	// Api_key = personalAPIch.value
	// console.log(chioce);

})



btn.addEventListener('click', function() {
	
	
	if( typeof myChart != 'undefined'){
		myChart.destroy();
		


	}




	if(stock.value == 0 || chioce == 0 || timeInt == 0 || history == 0){
		alert('inter stock code/ pick a stock market first/ a time interval/  history');

	}
	else {
		stockcod = stock.value;
		sketch();
	}
	

} )



async function fetchstockAPI() {


	await fetch('https://www.alphavantage.co/query?function=' + timeInt + '&symbol=' + stockcod + interval + '&outputsize= ' + history + '&apikey=' + Api_key ,
	)
		.then(response => {
			let x = response.json()
			let data = JSON.stringify(x);
			xval.length = 0;
			yval.length = 0;


			console.log(x);
			return x
		})
		.then(data => {
			console.log(data);
		
			for (var key in data[sear]) {
				console.log(0);
				xval.unshift(key);
				yval.unshift(data[sear][key]['1. open']);

			}
			console.log(xval, yval);
		});

		// interval = '';
	

	


}

async function fetchcryptoAPI() {


	await fetch('https://www.alphavantage.co/query?function=' + timeInt + '&symbol=' + stockcod + '&market=USD' + interval + '&apikey=' + Api_key,
	)
		.then(response => {
			let x = response.json()
			let data = JSON.stringify(x);
			xval.length = 0;
			yval.length = 0;

			console.log(x);
			console.log(data);
			return x
		})
		.then(data => {
		
			for (var key in data[sear]) {
				// console.log(0);
				xval.unshift(key);
				yval.unshift(data[sear][key][openpr]);

			}
			
		});
		console.log(xval, yval);

	

	


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







