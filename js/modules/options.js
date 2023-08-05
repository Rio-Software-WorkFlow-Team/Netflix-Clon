const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles',
  headers: {
    'X-RapidAPI-Key': 'bff80c9925msh5ac7ea6fe4b0b2ap1b0518jsncce747c57b04',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data.results);
// } catch (error) {
// 	console.error(error);
// }

export { options }