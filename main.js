const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	// if (this.readyState === this.DONE) {
		console.log(this.response);
	// }
});

xhr.open("GET", "https://unogsng.p.rapidapi.com/search?start_year=1972&orderby=rating&audiosubtitle_andor=and&limit=100&subtitle=english&countrylist=78%2C46&audio=english&country_andorunique=unique&offset=0&end_year=2019");
xhr.setRequestHeader("x-rapidapi-key", "71860ee5d3msh6d874512c3d9c1ap1cf909jsn83ee5f0734c1");
xhr.setRequestHeader("x-rapidapi-host", "unogsng.p.rapidapi.com");

xhr.send(data);

console.log(xhr);