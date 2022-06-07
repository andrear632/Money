var amounts;
var lastPay;
let corr = ["a", "b", "c", "d", "e", "f"];


function loadLocalStorage() {
    if (typeof (localStorage.dollars) == "undefined") {
        amounts = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00];

        document.getElementById("a").innerHTML = amounts[0].toFixed(2);
        document.getElementById("b").innerHTML = amounts[1].toFixed(2);
        document.getElementById("c").innerHTML = amounts[2].toFixed(2);
        document.getElementById("d").innerHTML = amounts[3].toFixed(2);
        document.getElementById("e").innerHTML = amounts[4].toFixed(2);
        document.getElementById("f").innerHTML = amounts[5].toFixed(2);

        document.getElementById("tot").innerHTML = amounts.reduce((a, b) => a + b, 0).toFixed(2);

        localStorage.dollars = JSON.stringify(amounts);
    }
    else {
        amounts = JSON.parse(localStorage.dollars)

        document.getElementById("a").innerHTML = amounts[0].toFixed(2);
        document.getElementById("b").innerHTML = amounts[1].toFixed(2);
        document.getElementById("c").innerHTML = amounts[2].toFixed(2);
        document.getElementById("d").innerHTML = amounts[3].toFixed(2);
        document.getElementById("e").innerHTML = amounts[4].toFixed(2);
        document.getElementById("f").innerHTML = amounts[5].toFixed(2);

        document.getElementById("tot").innerHTML = amounts.reduce((a, b) => a + b, 0).toFixed(2);
    }

    if (typeof (localStorage.lp) == "undefined") {
        lastPay = 1.01
        document.getElementById("lastPay").innerHTML = lastPay;
        localStorage.lp = JSON.stringify(lastPay);
    }
    else {
        lastPay = JSON.parse(localStorage.lp)
        document.getElementById("lastPay").value = lastPay;
    }
}

function PsaveLocalStorage() {
    var am = Number(document.getElementById("am").value);
    if (isNaN(am)) {
        alert("Input error")
    }
    else {
        var ele = document.getElementsByName("where");
        var found = false;
        for(i = 0; i < 6; i++) {
            if(ele[i].checked) {
                found = true;
                var actual = amounts[i];
                document.getElementById(corr[i]).innerHTML = (actual + am).toFixed(2);
                document.getElementById(corr[i]).classList.add("text-success");
                document.getElementById(corr[i]).classList.add("fw-bold");
                setTimeout(function(i) {
                    document.getElementById(corr[i]).classList.remove("text-success");
                    document.getElementById(corr[i]).classList.remove("fw-bold");
                }, 1500, i)
                amounts[i] = parseFloat((actual + am).toFixed(2));
                document.getElementById("tot").innerHTML = amounts.reduce((a, b) => a + b, 0).toFixed(2);
                document.getElementById("am").value="";
                document.getElementById("insuc").innerHTML = "Aggiornato! +"+am.toFixed(2);
                document.getElementById("suc").hidden = false;
                setTimeout(function() {
                    document.getElementById("suc").hidden = true;
                }, 1500)
            }
        }
        if (found == false) {
            document.getElementById("err").hidden = false;
            setTimeout(function() {
                document.getElementById("err").hidden = true;
            }, 1500)
        }
        localStorage.dollars = JSON.stringify(amounts);
    }   
}

function MsaveLocalStorage() {
    var am = Number(document.getElementById("am").value);
    if (isNaN(am)) {
        alert("Input error")
    }
    else {
        var ele = document.getElementsByName("where");
        var found = false;
        for(i = 0; i < 6; i++) {
            if(ele[i].checked) {
                found = true;
                var actual = amounts[i];
                document.getElementById(corr[i]).innerHTML = (actual - am).toFixed(2);
                document.getElementById(corr[i]).classList.add("text-danger");
                document.getElementById(corr[i]).classList.add("fw-bold");
                setTimeout(function(i) {
                    document.getElementById(corr[i]).classList.remove("text-danger");
                    document.getElementById(corr[i]).classList.remove("fw-bold");
                }, 1500, i)
                amounts[i] = parseFloat((actual - am).toFixed(2));
                document.getElementById("tot").innerHTML = amounts.reduce((a, b) => a + b, 0).toFixed(2);
                document.getElementById("am").value="";
                document.getElementById("insucm").innerHTML = "Aggiornato! -"+am.toFixed(2);
                document.getElementById("sucm").hidden = false;
                setTimeout(function() {
                    document.getElementById("sucm").hidden = true;
                }, 1500)
            }
        }
        if (found == false) {
            document.getElementById("err").hidden = false;
            setTimeout(function() {
                document.getElementById("err").hidden = true;
            }, 1500)
        }
        localStorage.dollars = JSON.stringify(amounts);
    }
}

function saveDate(){
    lastPay = document.getElementById("lastPay").value;
    localStorage.lp = JSON.stringify(lastPay);
}
