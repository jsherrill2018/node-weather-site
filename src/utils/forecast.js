const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=ba6951b573b53cb6a90391d0f50fcd7d&query=' + latitude + ',' + longitude 

    request({ url, json: true }, (error, { body }) => { 
        if (error) {
            callback('unable to connect to weather service...', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + 'It is currently ' +  body.current.temperature.toFixed(0) + ' degrees outside.  There is a ' + body.current.precip + '% chance of rain today.')
        }
    })
}

module.exports = forecast