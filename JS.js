//write first method
function sleep_in(weekday, vacation) {
    if(weekday == false){
        return true;
    }else if(vacation != true) {
        return false;
    } else {
        return true;
    }
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    if(((a_smile == true) && (b_smile == true)) || ((a_smile == false) && (b_smile == false))){
        return true;
    } else {
        return false;
    }
}

function string_times(string, int) {
    var y = string;
    if(int > 0){
        for (var x = 1; x < int; x++) {
            y += string;
        }
        return y;
    }else{
        return 0;
    }
}

function front_times(string, n) {
    var y = string.substring(0, 3);
    if(n > 0){
        for (var x = 1; x < n; x++) {
            y += string.substring(0, 3);
        }
        return y;
    }else{
        return 0;
    }
}

function string_bits(string){
    if(string.length == 0){
        return "";
    }else{
        var y = string[0];
        for(var x = 2; x < string.length; x += 2){
            y += string[x];
        }
        return y;
    }
}

function caughtSpeeding(speed, birthday){
    if(birthday == false) {
        if(speed <= 60) {
            return 0;
        } else if(60 < speed && speed <= 80) {
            return 1;
        } else if(speed > 81) {
            return 2;
        }
    }else{
        if(speed <= 65) {
            return 0;
        } else if(65 < speed <= 85) {
            return 1;
        } else if(speed > 85) {
            return 2;
        }
    }
}

function fizz_buzz(x){
    if(((x % 3) == 0) && ((x % 5) == 0)){
        return "FizzBuzz";
    }else if((x  %  5) == 0){
        return "Buzz";
    }else if((x % 3) == 0){
        return "Fizz";
    }else{
        return x + "!";
    }
}

function teaParty(tea, candy){
    if(tea < 5 || candy < 5){
        return 0;
    }else if((tea * 2 <= candy) || (candy * 2 <= tea)){
        return 2;
    }else{
        return 1;
    }
}

function blackjack(x, y){
    if(x > 21 && y > 21){
        return 0;
    }else if(y > 21){
        return x;
    }else if(x > 21){
        return y;
    }else if(x > y){
        return x;
    }else if(y > x){
        return y;
    }
}

function loneSum(a, b, c){
    if(a == b && b == c) {
        return 0;
    }else if(a == b){
        return c;
    }else if(b == c){
        return a;
    }else if(a == c){
        return b;
    }else {
        return a + b + c;
    }
}

function tester() {
    document.getElementById("output").innerHTML = sleep_in(true, false);
    document.getElementById("output").innerHTML = monkey_trouble(true, false);
    document.getElementById("output").innerHTML = string_times("Hi", 7);
    document.getElementById("output").innerHTML = front_times("Chicken", 7);
    document.getElementById("output").innerHTML = string_bits("hdejlgluos");
    document.getElementById("output").innerHTML = caughtSpeeding(83, true);
    document.getElementById("output").innerHTML = fizz_buzz(45);
    document.getElementById("output").innerHTML = teaParty(6, 12);
    document.getElementById("output").innerHTML = blackjack(6, 12);
    document.getElementById("output").innerHTML = loneSum(1, 2, 3);
}
