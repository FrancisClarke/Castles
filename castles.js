/*jslint browser: true */
function randomArray(length, max) {
    "use strict";
    return Array.apply(null, Array(length)).map(function () {
        return Math.round(Math.random() * max) + 1;
    });
}

function startCastles() {
    "use strict";
    var max = 10;
    var myArray = randomArray(10, max - 1);
    //myArray = [9, 8, 7, 4, 7, 7, 4, 3, 4, 5];
    var color,
        plateau = 0,
        downSlope = 0,
        left, right, current,
        upSlope = 0;

    for (var i = 0; i < max; i++) {
        color = "chart--default";

        left = myArray[i + 1];
        right = myArray[i - 1];
        current = myArray[i];

        if (i != max - 1) {
            if (current > right)
                if (current < left) {
                    upSlope++;
                    color = "chart--blue";
                }
            if (current < right)
                if (current > left) {
                    downSlope++;
                    color = "chart--green";
                }
        }

        if (current === left) {
            plateau++;
            color = "chart--yellow";
        }

        document.getElementById('chart').innerHTML += getHtml(myArray[i] * 10, color);
        document.getElementById('numbers').innerHTML += myArray[i] + " ";
    }
    document.getElementById('plateau').innerHTML = ("<span style='background-color:#F1C40F' >plateau " + plateau + "</span> <span style='background-color:#2980B9' >up " + upSlope + "</span>  <span style='background-color:#27AE60' >down " + downSlope + "</span>");
    document.getElementById('castles').innerHTML = "Castles = " + max + " - " + plateau + " - " + upSlope + " - " + downSlope + " = " +
        (max - plateau - upSlope - downSlope);
}


function getHtml(percent, color) {
    "use strict";
    var str = '<div class="charts__chart chart--pXXX  chart--default""><span style="visibility: hidden;";class="charts__percent"></span></div>';
    str = str.replace("XXX", percent);
    str = str.replace("chart--default", color);
    return str;
}
