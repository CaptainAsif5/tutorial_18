function submit() {

    var number = document.getElementById("input").value;
// document.getElementById("input").innerText = + number + "<br>"; 

    for (var i = 1; i <= 10; i++) {
        document.write(number + " * " + i + " " + " = " + number * i + "<br>");
    }
}
