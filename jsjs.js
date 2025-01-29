let weekdaysRu = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let weekdaysEn = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
let day;
let time;
let lang = prompt("выберите язык: en / ru");
if(lang == 'ru') {
    day = prompt('Введи свой день недели в сокращенном виде: ')
        if(day == weekdaysRu[0]){
            alert('Понедельник');
        }
        else if(day == weekdaysRu[1]){
            alert('Вторник');
        }
        else if(day == weekdaysRu[2]){
            alert('Среда');
        }
        else if(day == weekdaysRu[3]){
            alert('Четверг');
        }
        else if(day == weekdaysRu[4]){
            alert('Пятница');
        }
        else if(day == weekdaysRu[5]){
            alert('Суббота');
        }
        else if(day == weekdaysRu[6]){
            alert('Воскресенье');
        }
        else{
            alert('не знаю такой день недели!')
        }
        time = prompt('Какое у тебя сейчас время? (в часах)')
        if(time > 5 && time < 12){
            alert('Доброе утро!')
        }
        else if(time > 11 && time < 18){
            alert('Добрый день!')
        }
        else{
            alert('Добрый вечер!')
        }
}
else if(lang == 'en') {
    day = prompt('write your abbreviated day of the week: ')
    if(day == weekdaysEn[0]){
        alert('Monday');
    }
    else if(day == weekdaysEn[1]){
        alert('Tuesday');
    }
    else if(day == weekdaysEn[2]){
        alert('Wednesday');
    }
    else if(day == weekdaysEn[3]){
        alert('Thursday');
    }
    else if(day == weekdaysEn[4]){
        alert('Friday');
    }
    else if(day == weekdaysEn[5]){
        alert('Saturday');
    }
    else if(day == weekdaysEn[6]){
        alert('Sunday');
    }
    else{
        alert('I don`t know that day of the week!')
    }
    time = prompt('What is your time? (in hours)')
        if(time > 5 && time < 12){
            alert('Good morning!')
        }
        else if(time > 11 && time < 18){
            alert('Good afternoon!')
        }
        else{
            alert('Good evening!')
        }

}
else{
    alert('я не знаю такого языка! I don`t know this language!')
}