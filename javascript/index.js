setInterval(updateClock,1000);

function updateClock(){
    dateBozemanSetter();
    timeSetter();
}

function dateBozemanSetter() {
    let D = new Date();
    let year = D.getFullYear();
    let month = D.getMonth();
    let date = D.getDate();
    let day = D.getDay();

    function m(month) {
        switch (month) {
            case 0:
                return "Jan";
                break;

            case 1:
                return "Feb";
                break;

            case 2:
                return "Mar";
                break;

            case 3:
                return "Apr";
                break;

            case 4:
                return "May";
                break;

            case 5:
                return "Jun";
                break;

            case 6:
                return "Jul";
                break;

            case 7:
                return "Aug";
                break;

            case 8:
                return "Sep";
                break;

            case 9:
                return "Oct";
                break;

            case 10:
                return "Nov";
                break;

            case 11:
                return "Dec";
                break;
        }
    }

    function d(day){
        switch (day) {
            case 0:
                return "Monday";
                break;

            case 1:
                return "Tuesday";
                break;

            case 2:
                return "Wednesday";
                break;

            case 3:
                return "Thursday";
                break;

            case 4:
                return "Friday";
                break;

            case 5:
                return "Saturday";
                break;

            case 6:
                return "Sunday";
                break;
        }
    }

    let today = year + "/" + m(month) + "/" + date;

    document.getElementById("dayBozeman").innerHTML = d(day);
    document.getElementById("dateBozeman").innerHTML = today;
}

function timeSetter(){
    let d = new Date();

    class time {

        constructor(hour, minute, second) {
            this.hour = hour;
            this.minute = minute;
            this.second = second;
        }

        hourSetter(){
            if (this.hour < 10){
                this.hour = 0 + hour;
            }

            if (this.hour > 24){
                this.hour = this.hour - 24;
            }

            return this.hour;
        }

        minuteSetter(){
            if (this.minute < 10){
                this.minute = 0 + minute;
            }

            return this.minute;
        }

        secondSetter(){
            if (this.second < 10){
                this.second = 0 + second;
            }

            return this.second;
        }
    }

    let hourBZN = d.getHours();
    let minuteBZN = d.getMinutes();
    let secondBZN = d.getSeconds();

    let hourTYO = d.getUTCHours() + 9;
    let minuteTYO = d.getUTCMinutes();
    let secondTYO = d.getUTCSeconds();

    let hourLDN = d.getUTCHours();
    let minuteLDN = d.getUTCMinutes();
    let secondLDN = d.getUTCSeconds();

    const BZN = new time(hourBZN, minuteBZN, secondBZN);
    const TYO = new time(hourTYO, minuteTYO, secondTYO);
    const LDN = new time(hourLDN, minuteLDN,secondLDN);

    hourBZN = BZN.hourSetter();
    minuteBZN = BZN.minuteSetter();
    secondBZN = BZN.secondSetter();

    hourTYO = TYO.hourSetter();
    minuteTYO = TYO.minuteSetter();
    secondTYO = TYO.secondSetter();

    hourLDN = LDN.hourSetter();
    minuteLDN = LDN.minuteSetter();
    secondLDN = LDN.secondSetter();

    let timeBZN = hourBZN + ":" + minuteBZN + ":" + secondBZN;
    let timeTYO = hourTYO + ":" + minuteTYO + ":" + secondTYO;
    let timeLDN = hourLDN + ":" + minuteLDN + ":" + secondLDN;

    document.getElementById("timeBozeman").innerHTML = timeBZN;
    document.getElementById("timeTokyo").innerHTML = timeTYO;
    document.getElementById("timeLondon").innerHTML = timeLDN;
}

document.getElementById("navdrawer").addEventListener("click", event => {
    return }
);

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "500px";
    document.getElementById("main").style.marginLeft = "100px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}