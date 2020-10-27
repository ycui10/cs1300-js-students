var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=GrGzLC8izaSMySU7irpI3yttutdvXZgqOYEVfRDZ_H8";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

const renderData = (response) => {

    const plantData = JSON.parse(response).data;

}



  corsPromise().then( (request) => request.onload = request.onerror = function() {

      const plantData = JSON.parse(request.response).data;
      const genus = Array.from(plantData.map(plant => plant.genus));
      

      document.getElementById('plants').innerHTML = genus;
  })

  

  
// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
// corsPromise().then(
//   (request) =>
//     (request.onload = request.onerror = function () {
//       // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
//     })
// );

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////
