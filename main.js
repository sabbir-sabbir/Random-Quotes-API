import { MY_API_KEY } from './config.js';

fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "4b58ce9628mshf92c27a3ceca604p1d3962jsn5e1d418be08a"
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
    
    document.getElementById('quote').innerHTML = response.content;
    document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
    document.getElementById("refreshBtn").addEventListener("click", function() {
       
        location.reload();
    });
    
})
.catch(err => {
	console.log(err);
});