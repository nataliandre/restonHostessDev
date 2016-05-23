

    $('#toDayButton').click(function () {
        var date = new Date(),
            month = date.getMonth(),
            day = date.getDate(),
            year = date.getFullYear(),
            monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        if (day < 10) {
            day = "0" + day;
        }
        var text = monthNames[month] + ' ' + day + ', ' + year + ' - ' + monthNames[month] + ' ' + day + ', ' + year;
        $('#widgetField span').html(text);
    });
    $('#prevDayButton').click(function () {
        var text = $('#widgetField span').html();
        if (text === "") {
            $('#toDayButton').trigger('click')
        }
        else {
            var text = text.split(' '),
                date = new Date(),
                startDay = text[1].slice(0, -1),
                endDay = text[5].slice(0, -1),
                startMonth = text[0],
                startYear = text[2],
                endYear = text[6],
                endMonth = text[4],
                newStartDay = startDay - 1,
                newEndDay = endDay - 1,
                firstPiece = "",
                secondPiece = "",
                monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
            if (startDay < 10) {
                startDay = "0" + startDay
            }
            if (endDay < 10) {
                endDay = "0" + endDay
            }
            if (newStartDay < 1 || newEndDay < 1) {
                if (newStartDay < 1) {
                    var newMonthStart = $.inArray(startMonth, monthNames),
                        newStartYear = startYear;
                    newMonthStart = Number(newMonthStart) - 1;

                    if (newMonthStart < 0) {
                        newMonthStart = 11
                        var newStartYear = Number(startYear) - 1;
                    }
                    var date2 = new Date(startYear, newMonthStart + 1, 0),
                        newMonthStart = monthNames[newMonthStart];
                    newStartDay = date2.getDate();
                    if (newStartDay < 10) {
                        newStartDay = "0" + newStartDay
                    }
                    var firstPiece = newMonthStart + " " + newStartDay + ", " + newStartYear;
                }
                if (newEndDay < 1) {
                    var newMonthEnd = $.inArray(endMonth, monthNames),
                        newEndYear = endYear;
                    newMonthEnd = Number(newMonthEnd) - 1;

                    if (newMonthEnd < 0) {
                        newMonthEnd = 11
                        var newEndYear = Number(newEndYear) - 1;
                    }
                    var date2 = new Date(endYear, newMonthEnd + 1, 0),
                        newMonthEnd = monthNames[newMonthEnd];
                    newEndDay = date2.getDate();
                    if (newEndDay < 10) {
                        newEndDay = "0" + newEndDay
                    }
                    var secondPiece = newMonthEnd + " " + newEndDay + ", " + newEndYear;

                }
                if (firstPiece == "") {
                    if (newStartDay < 10) {
                        newStartDay = "0" + newStartDay
                    }
                    firstPiece = startMonth + " " + newStartDay + ", " + startYear
                }
                if (secondPiece == "") {
                    if (newEndDay < 10) {
                        newEndDay = "0" + newEndDay
                    }
                    secondPiece = endMonth + " " + newEndDay + ", " + endYear
                }
                text = firstPiece + " - " + secondPiece;
                $('#widgetField span').html(text);
            }
            else {
                if (newStartDay < 10) {
                    newStartDay = "0" + newStartDay
                }
                if (newEndDay < 10) {
                    newEndDay = "0" + newEndDay
                }
                text = startMonth + ' ' + newStartDay + ', ' + startYear + ' - ' + endMonth + ' ' + newEndDay + ', ' + endYear;
                $('#widgetField span').html(text);
            }
        }
    });

    $('#nextDayButton').click(function () {
        var text = $('#widgetField span').html();
        if (text === "") {
            $('#toDayButton').trigger('click')
        }
        else {
            var text = text.split(' '),
                date = new Date(),
                startDay = text[1].slice(0, -1),
                endDay = text[5].slice(0, -1),
                startMonth = text[0],
                startYear = text[2],
                endYear = text[6],
                endMonth = text[4],
                newStartDay = Number(startDay) + 1,
                newEndDay = Number(endDay) + 1;
            firstPiece = "",
                secondPiece = "",
                monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
            if (startDay < 10) {
                startDay = "0" + startDay
            }
            if (endDay < 10) {
                endDay = "0" + endDay
            }
            var startMonth = $.inArray(startMonth, monthNames),
                endMonth = $.inArray(endMonth, monthNames),
                date2 = new Date(startYear, startMonth + 1, 0),
                date3 = new Date(endYear, endMonth + 1, 0),
                newEndEndDay = date3.getDate();
            newStartEndDay = date2.getDate();
            if (newEndDay > newEndEndDay || newStartDay > newStartEndDay) {
                if (newStartDay > newStartEndDay) {
                    startMonth = startMonth + 1;
                    if (startMonth > 11) {
                        startMonth = 0;
                        startYear = Number(startYear) + 1;
                    }
                    startMonth = monthNames[startMonth];
                    startDay = "01";
                    firstPiece = startMonth + " " + startDay + ", " + startYear;
                }
                if (newEndDay > newEndEndDay) {
                    endMonth = endMonth + 1;
                    if (endMonth > 11) {
                        endMonth = 0;
                        endYear = Number(endYear) + 1;
                    }
                    endMonth = monthNames[endMonth];
                    endDay = "01";
                    secondPiece = endMonth + " " + endDay + ", " + endYear;
                }
                if (firstPiece == "") {
                    if (newStartDay < 10) {
                        newStartDay = "0" + newStartDay
                    }
                    startMonth = monthNames[startMonth];
                    firstPiece = startMonth + " " + newStartDay + ", " + startYear;
                }
                if (secondPiece == "") {
                    if (newEndDay < 10) {
                        newEndDay = "0" + newEndDay
                    }
                    endMonth = monthNames[endMonth];
                    secondPiece = endMonth + " " + newEndDay + ", " + endYear;
                }
                text = firstPiece + ' - ' + secondPiece;
                $('#widgetField span').html(text);
            }
            else {
                startMonth = monthNames[startMonth],
                    endMonth = monthNames[endMonth];
                if (newStartDay < 10) {
                    newStartDay = "0" + newStartDay
                }
                if (newEndDay < 10) {
                    newEndDay = "0" + newEndDay
                }
                text = startMonth + ' ' + newStartDay + ', ' + startYear + ' - ' + endMonth + ' ' + newEndDay + ', ' + endYear;
                $('#widgetField span').html(text);
            }
        }
    });

