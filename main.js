

class getdata {

	constructor() {
		this.xvalues = [];
		this.yvalues = [];

	}


	fetchAPI() {
		fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMZN&outputsize=compact&apikey=MOR0CI3PU3IZ43EN",
		)
			.then(response => {
				let x = response.json()
				let data = JSON.stringify(x);


				console.log(x);
				return x
			})
			.then(data => {
				console.log(data);
				let apix = [];
				let apiy = [];
				for (var key in data['Time Series (Daily)']) {
					apix.push(key);
					apiy.push(data['Time Series (Daily)'][key]['1. open']);

				}
				this.xvalues = apix;
				this.yvalues = apiy;

			});
		
			

		sketch();
	}


}


var stock = new getdata();
stock.fetchAPI();


function sketch() { 

	const ctx = document.getElementById('chart').getContext('2d');
	const myChart = new Chart(ctx, {

		type: 'bar',
		data: {
			labels: stock.xvalues,
			datasets: [
			{
				label: 'stock data',
				data: stock.yvalues,
				backgroundColor: ['rgba(255, 99, 132, 0.2)',],
				borderWidth: 1
			}]
		}

	});
}

sketch();


