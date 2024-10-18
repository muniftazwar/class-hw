function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    // Adding Date, Month, and Year
    var day = date.getDate();
    var month = date.getMonth() + 1;  // Months are 0-based, so we add 1
    var year = date.getFullYear();

    // Formatting date and adding leading zero
    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    var fullDate = day + "/" + month + "/" + year;

    // Displaying Time and Date
    document.getElementById("MyClockDisplay").innerText = time + " | " + fullDate;
    setTimeout(showTime, 1000);
}

showTime();