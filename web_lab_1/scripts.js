let weatherinfo = require("../web_lab_1/template.pug")
let error_message = require("../web_lab_1/error_temp.pug")
window.onload=function(){
	let elem = document.getElementById('button');
	elem.onclick=copypaste
}
async function copypaste()
{
	let apilink="https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById('inp').value+"&APPID=e9931f3a56608b6f3be9e93c5d8d26b4";
	let result = await fetch(apilink);
	
	if(result.ok)
	{
		let json= await result.json();
		let locals = {
			city: "Город: "+json.name,
			country: "Страна: "+json.sys.country, 
			weather: "Погода: "+json.weather[0].main,
			temperature: "Температура: "+(parseInt(json.main.temp,10)-273)+" °С",
			speedofweend: "Скорость ветра: "+json.wind.speed+" m/s",
			wetness: "Влажность воздуха: "+json.main.humidity+" %"
		}
		document.getElementById('maindiv').innerHTML= weatherinfo(locals);
	}
	else
	{
		let locals = {
			mess: "Ошибочка вышла :'("
		}
		document.getElementById('maindiv').innerHTML= error_message(locals);
	}
}