const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e53a2fee2msh59b5dd753eb9107p11b072jsneed16b0ce910',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	//.then(response => console.log(response))
    .then(data =>{
        //console.log(data)
        const list = data.d;

        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src = "${poster}"><h2>${name}</h2></li>`

            document.querySelector('.movies').innerHTML += movie;
        })
    })
	.catch(err => console.error(err));