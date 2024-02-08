var all_regions=[];

var all_cites=[[],[],[]];

all_regions[0]=["московская обл","ростовская обл","саратовская обл"];

all_regions[1]=["киевская обл","львовская обл","харьковская обл"];

all_regions[2]=["минская обл","брестская обл","гроднинская обл"];

all_cites[0][0]=["Москва","Химки","Калуга"];

all_cites[0][1]=["Такой-то город","Такой-то город","Калуга"];

all_cites[0][2]=["Такой-то город","Такой-то город","Такой-то город"];

all_cites[1][0]=["Киев","Жмеринка","Бердычев"];

all_cites[1][1]=["Львов","Сокаль","Стрый"];

all_cites[1][2]=["Харьков","Полтава","Пирятин"];

all_cites[2][0]=["Минск","Такой-то город","Такой-то город"];

all_cites[2][1]=["Брест","Такой-то город","Такой-то город"];

all_cites[2][2]=["Гродно","Такой-то город","Вильно"];

country_id.onchange = function() {

region_id.disabled = false;

region_id.innerHTML = "<option value='0'>- Выберите регион -</option>";

myregion = this.value - 1;

if (myregion != -1) {

for (var i = 0; i < all_regions[myregion].length; i++) {

region_id.innerHTML += '<option value="' + (i+1) + '">' + all_regions[myregion][i] + '</option>';

}

} else {

region_id.disabled = true;

city_id.disabled = true;

}

}

region_id.onchange = function() {

city_id.disabled = false;

city_id.innerHTML = "<option value='0'>- Выберите город -</option>";

var mycite = this.value - 1;

if (mycite != -1) {

for (var i = 0; i < all_cites[myregion][mycite].length; i++){

city_id.innerHTML += '<option value="' + (i + 1) + '">' + all_cites[myregion][mycite][i] + '</option>';

}

} else {

city_id.disabled = true;

}

}