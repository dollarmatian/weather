const functions = require('firebase-functions');
const { error } = require('firebase-functions/lib/logger');
const express = require('express');
const fetch = require('node-fetch');
const { response, json } = require('express');
const { query } = require('express');


const app = express()


app.get("/openweather", (req,res)=>{
    // res.send("Hello World")
    //  const city = req.query.q
  const request = req.query.q
    // console.log(req.params)
  fetch(`https://api.openweathermap.org/data/2.5/weather?${req.query.q}&units=metric&APPID=${functions.config().openweather.key}`)
    .then(res => res.json()) 
       .then(json => res.send(json) )

    
    .catch((error) => {
        console.error(error);
      });  

    })


    
//   app.get('/:place', async (request, response) => {
//     console.log(request.params)
//     const city = request.params.place
//     console.log(city)
//     const api_key = functions.config().openweather.key;
//     console.log(api_key)
//     const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${api_key}`;
//     console.log(weather_url)
//     const weather_response = await fetch(weather_url);
//     const weather_data = await weather_response.json();
//     response.send(weather_data)

//     .catch((error) => {
//               console.error(error);
//             });  

// })




 // Request 1
 exports.openweather =  functions.https.onRequest(app)

//Request 2

// exports.openweather = functions.https.onRequest((request,response)=>{
    
//     const app = express()


//     app.get("/:city", async (req,res)=>{
//         // res.send("Hello World")
//         const city = req.params.city
//         console.log(city)
//         console.log(req.params)
            
//        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${functions.config().openweather.key}`)
//         .then(res => res.json())   
//         .then(json => res.json(json))
//         .catch((error) => {
//             console.error(error);
//           });  
//         response.send(app)
       
        
//     })
    
// });


// exports.OpenWeatherNew =  functions.https.onRequest((request,response)=>{
//     console.log('started')
//     const app = express();
//     console.log('start next')
//     const port = 3000;
// app.listen(port, () => {
//   console.log(`Starting server at ${port}`);

// });
// console.log('next')

//     let data
//     console.log('data set')
//   app.get('/', async (request, response) => {
//     const api_key = functions.config().openweather.key;
//     console.log(api_key)
//     const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=${api_key}`;
//     console.log(weather_url)
//     const weather_response = await fetch(weather_url);
    

//     data = response.json('hello');

// })
// response.send('hello:'+ data)
// })
// exports.OpenWeatherTry =  functions.https.onRequest((request,response)=>{
    
    // app.get('/', async (request, response) => {
//     console.log(request.params);
//     const latlon = request.params.latlon.split(',');
//     console.log(latlon);
//     const lat = latlon[0];
//     const lon = latlon[1];
//     console.log(lat, lon);
//     const api_key = process.env.API_KEY;
//     const weather_url = `https://api.darksky.net/forecast/${api_key}/${lat},${lon}/?units=si`;
//     const weather_response = await fetch(weather_url);
//     const weather_data = await weather_response.json();
  
//     const aq_url = `https://api.openaq.org/v1/latest?coordinates=${lat},${lon}`;
//     const aq_response = await fetch(aq_url);
//     const aq_data = await aq_response.json();
  
//     const data = {
//       weather: weather_data,
//       air_quality: aq_data
//     };
//     response.json(data);
//   });

        
    
      
    // })
    
