import {
    parsedata,
    queryfunc
} from '../web_lab_1/aux_funcs.js'

import {assert} from 'chai'

let data = {
    "coord": {
    "lon": 30.52,
    "lat": 50.43
    },
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04n"
    }
    ],
    "base": "stations",
    "main": {
    "temp": 264.93,
    "pressure": 1037,
    "humidity": 61,
    "temp_min": 264.15,
    "temp_max": 265.37
    },
    "visibility": 10000,
    "wind": {
    "speed": 6,
    "deg": 110
    },
    "clouds": {
    "all": 64
    },
    "dt": 1574389632,
    "sys": {
    "type": 1,
    "id": 8903,
    "country": "UA",
    "sunrise": 1574400167,
    "sunset": 1574431525
    },
    "timezone": 7200,
    "id": 703448,
    "name": "Kiev",
    "cod": 200
};

let baddata ={};

let goodlocals = {
    city: "Город: Kiev",
    country: "Страна: UA", 
    weather: "Погода: Clouds",
    temperature: "Температура: -9 °С",
    speedofweend: "Скорость ветра: 6 m/s",
    wetness: "Влажность воздуха: 61 %"
}

let badlocals = {
    city: "Упс, информация о городе потерялась :(",
    country: "Упс, информация о стране потерялась :(", 
    weather: "Упс, информация о погоде потерялась :(",
    temperature: "Упс, информация о температуре потерялась :(",
    speedofweend: "Упс, информация о скорости ветра потерялась :(",
    wetness: "Упс, информация о влажности воздуха потерялась :("
}

let goodresult = {
    ok: true,
    json: async function () {
        return data;
    }
};

let badresult = {
    ok: false
};

let getFetch = function (payload){
    return async function (query) {
        return payload;
    };
};

describe('test parsedata', function () {
    it('should return goodlocals when data is correct', async function() {
        let locals = parsedata(data);
        assert.deepEqual(locals, goodlocals);
    });

    it('should return badlocals when data is not correct', async function() {
        let locals = parsedata(baddata);
        assert.deepEqual(locals, badlocals);
    });
});

describe('test queryfunc', function() {
    it('should retutn weather template when result is ok', async function() {
        let template = await queryfunc(goodresult);
        assert.isNotEmpty(template);
    });
    it('should retutn error template when result is not ok', async function() {
        let data = "Error";
        let template = await queryfunc(badresult);
        assert.isNotEmpty(template);
    });
});