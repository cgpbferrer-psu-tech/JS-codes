// fetch = function used for making HTTP requests to fetch resources from a server.

// it could be (JSON, images, text files, etc.)
// simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send data asynchronously over the web.


// Basic Syntax:
// fetch(url, options)
//     .then(response => { /* handle response */ })
//     .catch(error => { /* handle error */ }); 


//Example 1: Fetching JSON Data

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// Example 2: Fetching an Image

// fetch("https://picsum.photos/200")
//     .then(response => response.blob())
//     .then(imageBlob => {
//         const imageURL = URL.createObjectURL(imageBlob);
//         const imgElement = document.createElement("img");
//         imgElement.src = imageURL;
//         document.body.appendChild(imgElement);
//     })
//     .catch(error => console.error("Fetch error:", error));

// Example 3: Fetching Data from a Public API

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data => console.log(data.moves))
//     .catch(error => console.error(error));

// Example 4: Using Async/Await with Fetch

// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Fetch error:", error);
//     }
// }

// fetchData();

