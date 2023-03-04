const api_key =`personal api address`;

const cityData = city=>{
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
  fetch(url)
  .then(res => res.json())
  .then(data =>displayData(data))
}
const displayData= weather=>{
  //console.log(weather.weather[0].description)
  const country= document.getElementById('country') ;
  country.innerText = weather.name ;
  const temparature= document.getElementById('tem') ;
  temparature.innerText = weather.main.temp ;
  const weatherSky= document.getElementById('sky') ;
  weatherSky.innerText = weather.weather[0].description ;
  
}

document.getElementById('btn').addEventListener('click',function(){
  
  const input = document.getElementById('input').value ;
  cityData(input);
  
 })
 
 



  