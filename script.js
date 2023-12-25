let countdownElement7y = document.querySelector('.countdown_7y');
let countdownElement23f = document.querySelector('.countdown_23f');
let countdownElement8m = document.querySelector('.countdown_8m');
let countdownElement1m = document.querySelector('.countdown_1m');
let countdownElement9m = document.querySelector('.countdown_9m');
let countdownElement12j = document.querySelector('.countdown_12j');
let countdownElement4n = document.querySelector('.countdown_4n');
let countdownElement2025 = document.querySelector('.countdown_2025');


//задаем дату отсчета
let countdownDate7y = new Date(2024, 0, 7, 0, 0, 0).getTime();//в UNIX
let countdownDate23f = new Date(2024, 1, 23, 0, 0, 0).getTime();//в UNIX
let countdownDate8m = new Date(2024, 2, 8, 0, 0, 0).getTime();//в UNIX
let countdownDate1m = new Date(2024, 4, 1, 0, 0, 0).getTime();//в UNIX
let countdownDate9m = new Date(2024, 4, 9, 0, 0, 0).getTime();//в UNIX
let countdownDate12j = new Date(2024, 5, 12, 0, 0, 0).getTime();//в UNIX
let countdownDate4n = new Date(2024, 10, 4, 0, 0, 0).getTime();//в UNIX
let countdownDate2025 = new Date(2025, 0, 1, 0, 0, 0).getTime();//в UNIX




function getCountTime(){
    
    const now = new Date().getTime();
    const distance = countdownDate7y - now;
    
    
    const oneDay = 24 * 60 * 60 * 1000 //дни
    const oneHour = 60 * 60 * 1000 //минуты
    const oneMinute = 60 * 1000 //секунды
    
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

    //дни
    if((days % 100 >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 100 == 0 || days % 10 == 0){
        document.querySelector('.d').innerHTML = 'дней';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.d').innerHTML = 'день';
    }
    else{
        document.querySelector('.d').innerHTML = 'дня'
    }

    //часы
    if((hours % 100 >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 100 == 0 || hours % 10 == 0){
        document.querySelector('.ch').innerHTML = 'часов';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.ch').innerHTML = 'час';
    }
    else{
        document.querySelector('.ch').innerHTML = 'часа'
    }

    //минуты
    
    if((minutes % 100 >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 100 == 0 || minutes % 10 == 0){
        document.querySelector('.min').innerHTML = 'минут';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.min').innerHTML = 'минута';
    }
    else{
        document.querySelector('.min').innerHTML = 'минуты'
    }


    //секунды
    
    if((seconds % 100 >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0){
        document.querySelector('.sec').innerHTML = 'секунд';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.sec').innerHTML = 'секунда';
    }
    else{
        document.querySelector('.sec').innerHTML = 'секунды'
    }
    
//если время истекло
    if(distance < 0){
        clearInterval(countdown7y);
        countdownElement7y.innerHTML = '<h4 class="expired">С новым годом!!!</h4>';
    }
}

//таймер обноавляется каждую секунду
let countdown7y = setInterval(getCountTime, 1000);
getCountTime();


function getCountTime_1(){
    
    const now = new Date().getTime();
    const distance = countdownDate23f - now;
    
    
    const oneDay = 24 * 60 * 60 * 1000 //дни
    const oneHour = 60 * 60 * 1000 //минуты
    const oneMinute = 60 * 1000 //секунды
    
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    document.querySelector('.days_1').innerHTML = days;
    document.querySelector('.hours_1').innerHTML = hours;
    document.querySelector('.minutes_1').innerHTML = minutes;
    document.querySelector('.seconds_1').innerHTML = seconds;

    //дни
    if((days % 100 >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 100 == 0 || days % 10 == 0){
        document.querySelector('.d_1').innerHTML = 'дней';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.d_1').innerHTML = 'день';
    }
    else{
        document.querySelector('.d_1').innerHTML = 'дня'
    }

    //часы
    if((hours % 100 >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 100 == 0 || hours % 10 == 0){
        document.querySelector('.ch_1').innerHTML = 'часов';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.ch_1').innerHTML = 'час';
    }
    else{
        document.querySelector('.ch_1').innerHTML = 'часа'
    }

    //минуты
    
    if((minutes % 100 >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 100 == 0 || minutes % 10 == 0){
        document.querySelector('.min_1').innerHTML = 'минут';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.min_1').innerHTML = 'минута';
    }
    else{
        document.querySelector('.min_1').innerHTML = 'минуты'
    }


    //секунды
    
    if((seconds % 100 >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0){
        document.querySelector('.sec_1').innerHTML = 'секунд';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.sec_1').innerHTML = 'секунда';
    }
    else{
        document.querySelector('.sec_1').innerHTML = 'секунды'
    }
    
//если время истекло
    if(distance < 0){
        clearInterval(countdown23f);
        countdownElement23f.innerHTML = '<h4 class="expired">С новым годом!!!</h4>';
    }
}

//таймер обноавляется каждую секунду
let countdown23f = setInterval(getCountTime, 1000);
getCountTime_1();






function getCountTime_2(){
    
    const now = new Date().getTime();
    const distance = countdownDate8m - now;
    
    
    const oneDay = 24 * 60 * 60 * 1000 //дни
    const oneHour = 60 * 60 * 1000 //минуты
    const oneMinute = 60 * 1000 //секунды
    
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    document.querySelector('.days_2').innerHTML = days;
    document.querySelector('.hours_2').innerHTML = hours;
    document.querySelector('.minutes_2').innerHTML = minutes;
    document.querySelector('.seconds_2').innerHTML = seconds;

    //дни
    if((days % 100 >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 100 == 0 || days % 10 == 0){
        document.querySelector('.d_2').innerHTML = 'дней';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.d_2').innerHTML = 'день';
    }
    else{
        document.querySelector('.d_2').innerHTML = 'дня'
    }

    //часы
    if((hours % 100 >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 100 == 0 || hours % 10 == 0){
        document.querySelector('.ch_2').innerHTML = 'часов';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.ch_2').innerHTML = 'час';
    }
    else{
        document.querySelector('.ch_2').innerHTML = 'часа'
    }

    //минуты
    
    if((minutes % 100 >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 100 == 0 || minutes % 10 == 0){
        document.querySelector('.min_2').innerHTML = 'минут';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.min_2').innerHTML = 'минута';
    }
    else{
        document.querySelector('.min_2').innerHTML = 'минуты'
    }


    //секунды
    
    if((seconds % 100 >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0){
        document.querySelector('.sec_2').innerHTML = 'секунд';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.sec_2').innerHTML = 'секунда';
    }
    else{
        document.querySelector('.sec_2').innerHTML = 'секунды'
    }
    
//если время истекло
    if(distance < 0){
        clearInterval(countdown23f);
        countdownElement8m.innerHTML = '<h4 class="expired">С новым годом!!!</h4>';
    }
}

//таймер обноавляется каждую секунду
let countdown8m = setInterval(getCountTime, 1000);
getCountTime_2();



function getCountTime_3(){
    
    const now = new Date().getTime();
    const distance = countdownDate1m - now;
    
    
    const oneDay = 24 * 60 * 60 * 1000 //дни
    const oneHour = 60 * 60 * 1000 //минуты
    const oneMinute = 60 * 1000 //секунды
    
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    document.querySelector('.days_3').innerHTML = days;
    document.querySelector('.hours_3').innerHTML = hours;
    document.querySelector('.minutes_3').innerHTML = minutes;
    document.querySelector('.seconds_3').innerHTML = seconds;

    //дни
    if((days % 100 >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 100 == 0 || days % 10 == 0){
        document.querySelector('.d_3').innerHTML = 'дней';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.d_3').innerHTML = 'день';
    }
    else{
        document.querySelector('.d_3').innerHTML = 'дня'
    }

    //часы
    if((hours % 100 >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 100 == 0 || hours % 10 == 0){
        document.querySelector('.ch_3').innerHTML = 'часов';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.ch_3').innerHTML = 'час';
    }
    else{
        document.querySelector('.ch_3').innerHTML = 'часа'
    }

    //минуты
    
    if((minutes % 100 >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 100 == 0 || minutes % 10 == 0){
        document.querySelector('.min_3').innerHTML = 'минут';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.min_3').innerHTML = 'минута';
    }
    else{
        document.querySelector('.min_3').innerHTML = 'минуты'
    }


    //секунды
    
    if((seconds % 100 >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0){
        document.querySelector('.sec_3').innerHTML = 'секунд';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.sec_3').innerHTML = 'секунда';
    }
    else{
        document.querySelector('.sec_3').innerHTML = 'секунды'
    }
    
//если время истекло
    if(distance < 0){
        clearInterval(countdown23f);
        countdownElement1m.innerHTML = '<h4 class="expired">С новым годом!!!</h4>';
    }
}

//таймер обноавляется каждую секунду
let countdown1m = setInterval(getCountTime, 1000);
getCountTime_3();





function getCountTime_4(){
    
    const now = new Date().getTime();
    const distance = countdownDate9m - now;
    
    
    const oneDay = 24 * 60 * 60 * 1000 //дни
    const oneHour = 60 * 60 * 1000 //минуты
    const oneMinute = 60 * 1000 //секунды
    
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    document.querySelector('.days_4').innerHTML = days;
    document.querySelector('.hours_4').innerHTML = hours;
    document.querySelector('.minutes_4').innerHTML = minutes;
    document.querySelector('.seconds_4').innerHTML = seconds;

    //дни
    if((days % 100 >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 100 == 0 || days % 10 == 0){
        document.querySelector('.d_4').innerHTML = 'дней';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.d_4').innerHTML = 'день';
    }
    else{
        document.querySelector('.d_4').innerHTML = 'дня'
    }

    //часы
    if((hours % 100 >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 100 == 0 || hours % 10 == 0){
        document.querySelector('.ch_4').innerHTML = 'часов';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.ch_4').innerHTML = 'час';
    }
    else{
        document.querySelector('.ch_4').innerHTML = 'часа'
    }

    //минуты
    
    if((minutes % 100 >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 100 == 0 || minutes % 10 == 0){
        document.querySelector('.min_4').innerHTML = 'минут';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.min_4').innerHTML = 'минута';
    }
    else{
        document.querySelector('.min_4').innerHTML = 'минуты'
    }


    //секунды
    
    if((seconds % 100 >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0){
        document.querySelector('.sec_4').innerHTML = 'секунд';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.sec_4').innerHTML = 'секунда';
    }
    else{
        document.querySelector('.sec_4').innerHTML = 'секунды'
    }
    
//если время истекло
    if(distance < 0){
        clearInterval(countdown23f);
        countdownElement9m.innerHTML = '<h4 class="expired">С новым годом!!!</h4>';
    }
}

//таймер обноавляется каждую секунду
let countdown9m = setInterval(getCountTime, 1000);
getCountTime_4();




function getCountTime_5(){
    
    const now = new Date().getTime();
    const distance = countdownDate12j - now;
    
    
    const oneDay = 24 * 60 * 60 * 1000 //дни
    const oneHour = 60 * 60 * 1000 //минуты
    const oneMinute = 60 * 1000 //секунды
    
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    document.querySelector('.days_5').innerHTML = days;
    document.querySelector('.hours_5').innerHTML = hours;
    document.querySelector('.minutes_5').innerHTML = minutes;
    document.querySelector('.seconds_5').innerHTML = seconds;

    //дни
    if((days % 100 >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 100 == 0 || days % 10 == 0){
        document.querySelector('.d_5').innerHTML = 'дней';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.d_5').innerHTML = 'день';
    }
    else{
        document.querySelector('.d_5').innerHTML = 'дня'
    }

    //часы
    if((hours % 100 >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 100 == 0 || hours % 10 == 0){
        document.querySelector('.ch_5').innerHTML = 'часов';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.ch_5').innerHTML = 'час';
    }
    else{
        document.querySelector('.ch_5').innerHTML = 'часа'
    }

    //минуты
    
    if((minutes % 100 >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 100 == 0 || minutes % 10 == 0){
        document.querySelector('.min_5').innerHTML = 'минут';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.min_5').innerHTML = 'минута';
    }
    else{
        document.querySelector('.min_5').innerHTML = 'минуты'
    }


    //секунды
    
    if((seconds % 100 >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0){
        document.querySelector('.sec_5').innerHTML = 'секунд';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.sec_5').innerHTML = 'секунда';
    }
    else{
        document.querySelector('.sec_5').innerHTML = 'секунды'
    }
    
//если время истекло
    if(distance < 0){
        clearInterval(countdown23f);
        countdownElement12j.innerHTML = '<h4 class="expired">С новым годом!!!</h4>';
    }
}

//таймер обноавляется каждую секунду
let countdown12j = setInterval(getCountTime, 1000);
getCountTime_5();




function getCountTime_6(){
    
    const now = new Date().getTime();
    const distance = countdownDate4n - now;
    
    
    const oneDay = 24 * 60 * 60 * 1000 //дни
    const oneHour = 60 * 60 * 1000 //минуты
    const oneMinute = 60 * 1000 //секунды
    
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    document.querySelector('.days_6').innerHTML = days;
    document.querySelector('.hours_6').innerHTML = hours;
    document.querySelector('.minutes_6').innerHTML = minutes;
    document.querySelector('.seconds_6').innerHTML = seconds;

    //дни
    if((days % 100 >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 100 == 0 || days % 10 == 0){
        document.querySelector('.d_6').innerHTML = 'дней';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.d_6').innerHTML = 'день';
    }
    else{
        document.querySelector('.d_6').innerHTML = 'дня'
    }

    //часы
    if((hours % 100 >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 100 == 0 || hours % 10 == 0){
        document.querySelector('.ch_6').innerHTML = 'часов';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.ch_6').innerHTML = 'час';
    }
    else{
        document.querySelector('.ch_6').innerHTML = 'часа'
    }

    //минуты
    
    if((minutes % 100 >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 100 == 0 || minutes % 10 == 0){
        document.querySelector('.min_6').innerHTML = 'минут';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.min_6').innerHTML = 'минута';
    }
    else{
        document.querySelector('.min_6').innerHTML = 'минуты'
    }


    //секунды
    
    if((seconds % 100 >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0){
        document.querySelector('.sec_6').innerHTML = 'секунд';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.sec_6').innerHTML = 'секунда';
    }
    else{
        document.querySelector('.sec_6').innerHTML = 'секунды'
    }
    
//если время истекло
    if(distance < 0){
        clearInterval(countdown23f);
        countdownElement4n.innerHTML = '<h4 class="expired">С новым годом!!!</h4>';
    }
}

//таймер обноавляется каждую секунду
let countdown4n = setInterval(getCountTime, 1000);
getCountTime_6();



function getCountTime_7(){
    
    const now = new Date().getTime();
    const distance = countdownDate2025 - now;
    
    
    const oneDay = 24 * 60 * 60 * 1000 //дни
    const oneHour = 60 * 60 * 1000 //минуты
    const oneMinute = 60 * 1000 //секунды
    
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    document.querySelector('.days_7').innerHTML = days;
    document.querySelector('.hours_7').innerHTML = hours;
    document.querySelector('.minutes_7').innerHTML = minutes;
    document.querySelector('.seconds_7').innerHTML = seconds;

    //дни
    if((days % 100 >= 5 && days % 100 <= 20) || days % 10 >= 5 || days % 100 == 0 || days % 10 == 0){
        document.querySelector('.d_7').innerHTML = 'дней';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.d_7').innerHTML = 'день';
    }
    else{
        document.querySelector('.d_7').innerHTML = 'дня'
    }

    //часы
    if((hours % 100 >= 5 && hours % 100 <= 20) || hours % 10 >= 5 || hours % 100 == 0 || hours % 10 == 0){
        document.querySelector('.ch_7').innerHTML = 'часов';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.ch_7').innerHTML = 'час';
    }
    else{
        document.querySelector('.ch_7').innerHTML = 'часа'
    }

    //минуты
    
    if((minutes % 100 >= 5 && minutes % 100 <= 20) || minutes % 10 >= 5 || minutes % 100 == 0 || minutes % 10 == 0){
        document.querySelector('.min_7').innerHTML = 'минут';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.min_7').innerHTML = 'минута';
    }
    else{
        document.querySelector('.min_7').innerHTML = 'минуты'
    }


    //секунды
    
    if((seconds % 100 >= 5 && seconds % 100 <= 20) || seconds % 10 >= 5 || seconds % 100 == 0 || seconds % 10 == 0){
        document.querySelector('.sec_7').innerHTML = 'секунд';
    }
    else if (days % 100 == 1 || days % 100 ==1){
        document.querySelector('.sec_7').innerHTML = 'секунда';
    }
    else{
        document.querySelector('.sec_7').innerHTML = 'секунды'
    }
    
//если время истекло
    if(distance < 0){
        clearInterval(countdown23f);
        countdownElement2025.innerHTML = '<h4 class="expired">С новым годом!!!</h4>';
    }
}

//таймер обноавляется каждую секунду
let countdown2023 = setInterval(getCountTime, 1000);
getCountTime_7();