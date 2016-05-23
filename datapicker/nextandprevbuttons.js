
$(document).ready(function(){
 function makeInstall(hour){
//     //alert(hour);
//     hour = parseInt(hour);
//     if(hour == 18){
//         $('[data-numtable="23"]').removeClass('green__point').addClass('red__point');
//         $('[data-numtable="23"]').attr('data-info','Забронирован на 18:00');
//         $('[data-numtable="45"]').removeClass('green__point').addClass('red__point');
//         $('[data-numtable="45"]').attr('data-info','Забронирован на 18:00');
//     }
//     if(hour == 19){
//         $('[data-numtable="23"]').removeClass('green__point').addClass('red__point');
//         $('[data-numtable="23"]').attr('data-info','Забронирован на 19:00');
//         $('[data-numtable="45"]').removeClass('green__point').addClass('red__point');
//         $('[data-numtable="45"]').attr('data-info','Забронирован на 19:00');
//     }
//     if(hour == 20){
//         $('[data-numtable="23"]').removeClass('green__point').addClass('red__point');
//         $('[data-numtable="23"]').attr('data-info','Забронирован на 20:00');
//         $('[data-numtable="45"]').removeClass('red__point').addClass('green__point');
//         $('[data-numtable="45"]').attr('data-info','Cвободен');
//     }else{
//         $('[data-numtable="23"]').removeClass('red__point').addClass('green__point');
//         $('[data-numtable="23"]').attr('data-info','Cвободен');
//         $('[data-numtable="45"]').removeClass('red__point').addClass('green__point');
//         $('[data-numtable="45"]').attr('data-info','Cвободен');
//     }
 }


$('.prevButtonDate').click(function () {
    var obj = $($(this).attr('data-target'));
    var text = obj.val();
    if (text === "") {
        var nowDate = new Date(),
            day = nowDate.getDate(),
            month = nowDate.getMonth() + 1,
            year = nowDate.getFullYear();
        if (day < 10) { day = "0" + day; }
        if (month < 10) { month = "0" + month; }
        var  nowDate = day + "." + month + "." + year;
        obj.val(nowDate);
    } else {
        var piceArray = text.split('.');
        var newPice = Number(piceArray['0']) - 1;
        var monthPice = Number(piceArray['1']) - 1;
        var yearPice = Number(piceArray['1']);
        if (newPice === 0) {
            var year = piceArray['2'],
                month = piceArray['1'];
            var lastDate = new Date(year, month - 1, 0),
                lastDay = lastDate.getDate(),
                lastMonth = lastDate.getMonth() + 1,
                lastYear = lastDate.getFullYear();
            if (lastMonth < 10) {lastMonth = "0" + lastMonth; }
            newSelectDate = lastDay + "." + lastMonth + "." + lastYear;
            obj.val(newSelectDate);
            
        } else if (newPice < 10) {
            var newSelectDate = "0" + newPice + "." + piceArray['1'] + "." + piceArray['2'];
            obj.val(newSelectDate);
        } else if (monthPice === 0) {
            var prevYear = yearPice - 1,
                lastDate = new Date(prevYear, 12, 0),
                lastDay = lastDate.getDate(),
                newSelectDate = lastDay + ".12." + prevYear;
            obj.val(newSelectDate);
        } else {
            var newSelectDate = newPice + "." + piceArray['1'] + "." + piceArray['2'];
            obj.val(newSelectDate);}
    }
});

$('.nextButtonDate').click(function () {
    var obj = $($(this).attr('data-target'));
    var text = obj.val();
    if (text === "") {
        var nowDate = new Date(),
            day = nowDate.getDate(),
            month = nowDate.getMonth() + 1,
            year = nowDate.getFullYear();
        if (day < 10) { day = "0" + day;}
        if (month < 10) { month = "0" + month}
        var  nowDate = day + "." + month + "." + year;
        obj.val(nowDate);
    } 
    else {
        var piceArray = text.split('.'),
            newPice = Number(piceArray['0']) + 1,
            monthPice = Number(piceArray['1']),
            yearPice = Number(piceArray['2']),
            lastDate = new Date(yearPice, monthPice, 0),
            lastDay = lastDate.getDate();
        if (monthPice === 12 && newPice > lastDay) {
            var yearPice = yearPice + 1,
                newSelectDate = "01" + ".01." + yearPice;
                obj.val(newSelectDate);
        } else if (newPice == lastDay + 1) {
            var monthPice = monthPice + 1;
            if (monthPice < 10) {monthPice = "0" + monthPice}
                newSelectDate = "01" + "." + monthPice + "." + yearPice;
            obj.val(newSelectDate);
            
        } else if (newPice < 10) {
            var newSelectDate = "0" + newPice + "." + piceArray['1'] + "." + piceArray['2'];
            obj.val(newSelectDate);
        } else {var newSelectDate = newPice + "." + piceArray['1'] + "." + piceArray['2'];
            obj.val(newSelectDate);}
        }
});


$('.prevButtonTime').click(function () {
    var obj = $($(this).attr('data-target'));
    var time = obj.val();
    if (time === "") {
        var nowTime = new Date(),
            hour = nowTime.getHours(),
            minutes = nowTime.getMinutes();
        makeInstall(hour);
        if (hour < 10) { hour = "0" + hour;}
        if (minutes < 10) { minutes = "0" + minutes}
        var  nowTime = hour + ":" + minutes;
        obj.val(nowTime);
    } else {
        var piceTime = time.split(':'),
            hour = Number(piceTime['0']),
            minutes = Number(piceTime['1']),
            newHour = hour;
        makeInstall(hour);
            minutes = Math.floor(minutes/5);
            minutes = minutes*5 - 5;
            if( minutes <= 0){
                minutes = 55;
                newHour--;
            }
        if (newHour === -1) {
            if (minutes < 10) { minutes = "0" + minutes}
            var newSelectTime = "23:" + minutes;
            obj.val(newSelectTime);
        } else if (newHour < 23){
            if (minutes < 10) { minutes = "0" + minutes}
            if (newHour < 10) { newHour = "0" + newHour;}
            var newSelectTime = newHour + ":" + minutes;
            obj.val(newSelectTime);
        }
    }
});

$('.nextButtonTime').click(function () {
    var obj = $($(this).attr('data-target'));
    var time = obj.val();
    if (time === "") {
        var nowTime = new Date(),
            hour = nowTime.getHours(),
            minutes = nowTime.getMinutes();
        makeInstall(hour);
        if (hour < 10) { hour = "0" + hour;}
        if (minutes < 10) { minutes = "0" + minutes}
        var  nowTime = hour + ":" + minutes;
        obj.val(nowTime);
    } else {
        var piceTime = time.split(':'),
            hour = Number(piceTime['0']),
            minutes = Number(piceTime['1']),
            newHour = hour;
            minutes = Math.floor(minutes/5);
            minutes = minutes*5 + 5;
        makeInstall(hour);
            if( minutes >= 60){
                minutes = 0;
                newHour++;
            }
        if (newHour < 24){
            if (minutes < 10) { minutes = "0" + minutes}
            if (newHour < 10) { newHour = "0" + newHour;}
            var newSelectTime = newHour + ":" + minutes;
            obj.val(newSelectTime);
        } else if (newHour === 24) {
            if (minutes < 10) { minutes = "0" + minutes}
            var newSelectTime = "00:" + minutes;
            obj.val(newSelectTime);
        }
    }
});

    var nowTime = new Date(),
        hour = nowTime.getHours(),
        minutes = nowTime.getMinutes();
        minutes = Math.floor(minutes/5);
        minutes = minutes*5
        if( minutes == 60){
            minutes = 0;
            hour++;
        }
    makeInstall(hour);
    if(hour < 10){ hour = "0"+hour;}
    if(minutes < 10){ minutes = "0"+minutes;}


    var nowDate = new Date(),
        day = nowDate.getDate(),
        month = nowDate.getMonth()+1;
        year = nowDate.getFullYear();
    if(month < 10){ month = "0"+month;}
    $('[data-init="hours"]').val(hour+":"+minutes);

    $('[data-init="data"]').val(day+"."+month+"."+year);


    $('.jsDateTimeNow').click(function(e){
            e.preventDefault();
            var data = $($(this).attr('data-date'));
            var time = $($(this).attr('data-time'));
            var nowTime = new Date(),
                hour = nowTime.getHours(),
                minutes = nowTime.getMinutes();
            minutes = Math.floor(minutes/5);
            minutes = minutes*5;
            if( minutes == 60){
                minutes = 0;
                hour++;
            }
        makeInstall(hour);
            if(hour < 10){ hour = "0"+hour;}
            var nowDate = new Date(),
                day = nowDate.getDate(),
                month = nowDate.getMonth()+1;
            year = nowDate.getFullYear();
            if(minutes < 10){ minutes = "0"+minutes;}
            if(month < 10){ month = "0"+month;}
            data.val(day+"."+month+"."+year);
            time.val(hour+":"+minutes);


    });











});

