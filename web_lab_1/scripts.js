import { queryfunc } from "./aux_funcs.js";

window.onload=function(){
	let elem = document.getElementById('button');
	elem.onclick=copypaste
}

async function copypaste()
{
	let city_name = document.getElementById('inp').value;
	let apilink="https://api.openweathermap.org/data/2.5/weather?q="+city_name+"&appid=e9931f3a56608b6f3be9e93c5d8d26b4";
	let result = await fetch(apilink);
	let qery_res = await queryfunc(result);
	document.getElementById('maindiv').innerHTML = qery_res;
}