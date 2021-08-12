// const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=demo';


// function getAlphaVantagedata() {

//   const apiKey = "IBM";

//   const symbol = 'MOR0CI3PU3IZ43EN';

//   const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + symbol + '&interval=1min&apikey=' + apiKey;

//   requestFile(url);

// }


// function requestFile(url) {

//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   // xhr.onerror = function (xhr) { console.log('error:', xhr); };
//   // xhr.onprogress = function (xhr) { console.log('bytes loaded:', xhr.loaded); }; /// or something
//   xhr.onload = callback;
//   // xhr.send(null);

//   function callback(xhr) {

//     let response, json, lines;

//     response = xhr.target.response;
//     // divContents.innerText = response;

//     json = JSON.parse(response);

//     console.log('json', json);

//   }

// }




// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=MOR0CI3PU3IZ43EN");
// // xhr.setRequestHeader("key ", "MOR0CI3PU3IZ43EN");
// // xhr.setRequestHeader("x-rapidapi-host", "alpha-vantage.p.rapidapi.com");

// xhr.send(data);




fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=MOR0CI3PU3IZ43EN", {
	"method": "GET",
	// "headers": {
	// 	// "x-rapidapi-key": "71860ee5d3msh6d874512c3d9c1ap1cf909jsn83ee5f0734c1",
	// 	// "x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	// }
})
.then(response => {
	console.log(response);
})
.then(response => {
	console.log(response);

});

