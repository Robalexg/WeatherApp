import React from 'react'

const Weather = ({description,city,country,error,temp}) => {
  
  if(description){
    const weatherDescription = description.split(' ')
    const keywords = ['cloudy','clouds','cloud','overcast']

    for(let i = 0; i < weatherDescription.length; i++){
      if(keywords.includes(weatherDescription[i])){
       return <img src='https://media.freestocktextures.com/cache/74/8b/748ba3fe5976d8b03219a64851d2790d.jpg' />
      }
    }

    console.log(keywords)
    console.log(weatherDescription)
  }

  return (
    <div>
      {city && country && <p>{city}, {country}</p>}
      {temp && <p>{temp} °F</p>}
      {description && <p>Conditions: {description}</p>}
      {error && <p>{error}</p>}
    </div>
  )
}


export default Weather