fetch('https://run.mocky.io/v3/8458e246-9581-45ab-84b1-17a15322972a', {
    method: 'GET',
})
    .then(response => response.json())
    .then(data => {
        const Image_gta = data.top[0].image;
        const Image_civ = data.top[1].image;
        const Image_gow = data.top[2].image;

        const Title_gta = data.top[0].title;
        const Title_civ = data.top[1].title;
        const Title_gow = data.top[2].title;

        const Rating_gta = data.top[0].rating;
        const Rating_civ = data.top[1].rating;
        const Rating_gow = data.top[2].rating;

        let img_gta = document.getElementById('image_gta');
        let img_civ = document.getElementById('image_civ');
        let img_gow = document.getElementById('image_gow');

        let ttl_gta = document.getElementById('title_gta');
        let ttl_civ = document.getElementById('title_civ');
        let ttl_gow = document.getElementById('title_gow');

        let rat_gta = document.getElementById('rating_gta');
        let rat_civ = document.getElementById('rating_civ');
        let rat_gow = document.getElementById('rating_gow');

        img_gta.src = Image_gta;
        img_civ.src = Image_civ;
        img_gow.src = Image_gow;

        ttl_gta.innerText = Title_gta;
        ttl_civ.innerText = Title_civ;
        ttl_gow.innerText = Title_gow;

        rat_gta.innerText = Rating_gta;
        rat_civ.innerText = Rating_civ;
        rat_gow.innerText = Rating_gow;

        // console.log(Title_gta);
    })
    .catch(error => console.error(error));