
let weatherinfo = require("../web_lab_1/template.pug")
let error_message = require("../web_lab_1/error_temp.pug")

function parsedata(json)
{
	let locals = {
		city: "",
		country: "", 
		weather: "",
		temperature: "",
		speedofweend: "",
		wetness: ""
	}
	if (json.name)
		locals.city = "Город: "+json.name;
	else 
		locals.city = "Упс, информация о городе потерялась :(";
	if (json.sys && json.sys.country)
		locals.country = "Страна: "+json.sys.country;
	else 
		locals.country = "Упс, информация о стране потерялась :(";
	if (json.weather && json.weather[0] && json.weather[0].main)
		locals.weather = "Погода: "+json.weather[0].main;
	else 
		locals.weather = "Упс, информация о погоде потерялась :(";
	if (json.main && json.main.temp)
		locals.temperature = "Температура: "+(parseInt(json.main.temp,10)-273)+" °С";
	else 
		locals.temperature = "Упс, информация о температуре потерялась :(";
	if (json.wind && json.wind.speed)
		locals.speedofweend = "Скорость ветра: "+json.wind.speed+" m/s";
	else 
		locals.speedofweend = "Упс, информация о скорости ветра потерялась :(";
	if (json.main && json.main.humidity)
		locals.wetness = "Влажность воздуха: "+json.main.humidity+" %";
	else
		locals.wetness = "Упс, информация о влажности воздуха потерялась :(";

	return locals;
}

async function queryfunc(result)
{	
	if(result.ok)
	{
		let json= await result.json();
		let locals = parsedata(json);
		return weatherinfo(locals);
	}
	else
	{
		let locals = {
			mess: "Ошибочка вышла :'("
		}
		return error_message(locals);
	}
}

export {queryfunc, parsedata};