const request = require("request")
const dotenv = require("dotenv").config()


const address = process.argv[2]

var url = `http://api.openweathermap.org/data/2.5/weather?q=${address} &units=metric&appid=${process.env.API_KEY}`

if(!address){
    return console.log("Please enter name of city and country")
}

request(url, (error, response, body) => {
    const data = JSON.parse(body)
    console.log("City: "+data.name)
    console.log("Temperature: "+data.main.temp)
})
