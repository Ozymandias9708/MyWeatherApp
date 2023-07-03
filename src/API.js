export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':`${process.env.REACT_APP_RAPID_API_KEY}`,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

console.log("dotenv",process.env.REACT_APP_API_KEY)
export const url2 = "https://api.openweathermap.org/data/2.5";
export const key =`${process.env.REACT_APP_API_KEY}`  ////have o move to gitIgnore