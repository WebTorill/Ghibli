
//finding the root element
const app = document.getElementById('root');

//creating an element for the logo
const logo = document.createElement('img');
logo.src = 'logo.png';

//creating a container element
const container = document.createElement('div');
container.setAttribute('class', 'container');

//attaching the logo and the container to the root element
app.appendChild(logo);
app.appendChild(container);

//the url is our endpoint and contains the data that we want to work with
let url = 'https://ghibliapi.herokuapp.com/films';
//TODO: copy/paste the link into a browser, so that you can see the data you are going to work with
//The endpoint is passed into the call of the fetch function. The call of the fetch returns a promise
fetch(url)
    //when the promise is resolved we extract the JSON part of the response object
    .then(response => {
        return response.json();
    })
    //then we can work with the JSON data
    .then(data => {
        // We iterate through all the objects
        data.forEach(movie => {
            //Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            //Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1');
            //TODO: set the h1 to contain the title of the movie

            // Create a p and set the text content to the film's description
            const p = document.createElement('p');
            //TODO: limit the movie description to 300 chars, and then output it to p

            // Each card will contain an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);

            // TODO: Append the cards to the container element
        })
    })
    .catch(err => {
        // Do something for an error here
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    })
