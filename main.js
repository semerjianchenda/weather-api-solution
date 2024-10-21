document.querySelector('button').addEventListener('click', getWeather)

function getWeather() {

    const userInputCountry = document.querySelector('.country').value
    const userInputCity = document.querySelector('.city').value

    let url = `https://api.weatherbit.io/v2.0/current?units=I&city=${userInputCity}&country=${userInputCountry}&key=7c4ea66f842e422e86965193f7204eb4`
//switch to imperial units ^^ 
    


    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data) 
            console.log(data.data[0].temp) //temperature for day(changing from celsius to F?)
            console.log(data.data[0].weather.description) //description
            console.log(data.data[0].city_name)

            document.querySelector('h2').innerText = data.data[0].temp
            document.querySelector('h3').innerText = data.data[0].weather.description //convert to farenheight
            document.querySelector('h4').innerText = data.data[0].city_name
            // document.querySelector('img').src = data.weather.icon // concatenate the icon into a string to getb the icon for broken clouds data.weather.icon



        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}


