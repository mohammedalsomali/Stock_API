fetch("https://alpha-vantage.p.rapidapi.com/query?market=CNY&symbol=BTC&function=DIGITAL_CURRENCY_DAILY", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "71860ee5d3msh6d874512c3d9c1ap1cf909jsn83ee5f0734c1",
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});




fetch("https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&datatype=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "71860ee5d3msh6d874512c3d9c1ap1cf909jsn83ee5f0734c1",
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	}
})
.then(response => {
  let m = JSON.stringify(response);
  let arr = JSON.parse(m);
	console.log(arr);
})
