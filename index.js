let data=document.getElementById('data')
let cityName=document.getElementById('cityName')
let countryName=document.getElementById('countryName')
let temperature=document.getElementById('temperature')

let search=async()=>{
   let city=data.value 
   if(city=="")
   {
    alert("please enter a city name before search")
   }
   else{
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
    let response=await fetch(url)
    let info=await response.json()
    temperature.textContent=info.main.temp 
    cityName.textContent=info.name 
    countryName.textContent=info.sys.country
   }
}