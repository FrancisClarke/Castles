/*jslint browser: true */
function randomArray(length, max, offset) {
    "use strict";
    return Array.apply(null, Array(length)).map(function () {
        return (Math.round(Math.random() * max) + 1) + offset;
    });
}

var firstTime = true;

function startCastles() {
    "use strict";
    var length = 10,
        offset = -2;
    var myArray;

    var color,
        plateau = 0,
        downSlope = 0,
        left, right, current,
        upSlope = 0;

    if (firstTime) {
        myArray = [2, 3, 0, 4, 5, 5, 5, -1, 3, 3];
        //myArray = [2, 8, 6, 1, 4, 3, 8, 4, 7, 6];
        firstTime = false;
    } else {
        myArray = randomArray(10, length - 1, offset)
    }

    document.getElementById('chart').innerHTML = "";
    document.getElementById('numbers').innerHTML = "";

    for (var i = 0; i < length; i++) {

        color = "chart--default";

        left = myArray[i - 1];
        right = myArray[i + 1];
        current = myArray[i];
        if (i == 0) {
            color = "chart--yellow";
        }
        if (i != length - 1) {
            if (current > right) {
                upSlope = true;
                if (downSlope) {
                    color = "chart--blue";
                    downSlope = false;
                }
            }
            if (current < right) {
                downSlope = true;
                if (upSlope) {
                    color = "chart--green";
                    upSlope = false;
                }
            }
        } else {
            color = "chart--default";
            if (upSlope)
                color = "chart--green";
            if (downSlope)
                color = "chart--blue";
        }

        document.getElementById('chart').innerHTML += getHtml((myArray[i] - offset) * 10, color);
        document.getElementById('numbers').innerHTML += myArray[i] + " ";
        document.getElementById('key').innerHTML = ("<span style='background-color:#F1C40F' >Initial " + "</span> <span style='background-color:#2980B9' >Peak " + "</span>  <span style='background-color:#27AE60' >Valley" + "</span>");
    }
}


function getHtml(percent, color) {
    "use strict";
    var str = '<div class="charts__chart chart--pXXX  chart--default""><span style="visibility: hidden;";class="charts__percent"></span></div>';
    str = str.replace("XXX", percent);
    str = str.replace("chart--default", color);
    return str;
}
