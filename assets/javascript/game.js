

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];






<script>

    var userInput =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    function a(){
        userInput = "A";
        algo();
    }

    function b(){
        userInput = "B";
        algo();
    }

    function c(){
        userInput = "C";
        algo();
    }
    function d(){
        userInput = "D";
        algo();
    }

    function e(){
        userInput = "E";
        algo();
    }

    function f(){
        userInput = "F";
        algo();
    }
    function g(){
        userInput = "G";
        algo();
    }

    function h(){
        userInput = "H";
        algo();
    }

    function g(){
        userInput = "G";
        algo();
    }
    function h(){
        userInput = "H";
        algo();
    }

    function i(){
        userInput = "I";
        algo();
    }

    function j(){
        userInput = "J";
        algo();
    }
    function k(){
        userInput = "K";
        algo();
    }

    function l(){
        userInput = "L";
        algo();
    }

    function m(){
        userInput = "M";
        algo();
    }
    function n(){
        userInput = "N";
        algo();
    }

    function o(){
        userInput = "O";
        algo();
    }

    function p(){
        userInput = "P";
        algo();
    }
    function q(){
        userInput = "Q";
        algo();
    }

    function r(){
        userInput = "R";
        algo();
    }

    function s(){
        userInput = "S";
        algo();
    }
    function t(){
        userInput = "T";
        algo();
    }

    function u(){
        userInput = "U";
        algo();
    }

    function v(){
        userInput = "V";
        algo();
    }
    function w(){
        userInput = "W";
        algo();
    }

    function x(){
        userInput = "X";
        algo();
    }

    function y(){
        userInput = "Y";
        algo();
    }
    function z(){
        userInput = "Z";
        algo();
    }

    



    function algo() {        
        // var userInput = prompt('Choose Rock, Paper, or Scissors. Enter "Q" to quit.')
        var number = Math.floor(Math.random() * 26) + 1;
        var PCInput;

        if (number == 1) {
            PCInput = "A"
        }
        else if (number == 2) {
            PCInput = "B"
        }
        else if (number == 3) {
            PCInput = "C"
        }
        if (number == 4) {
            PCInput = "D"
        }
        else if (number == 5) {
            PCInput = "E"
        }
        else if (number == 6) {
            PCInput = "F"
        }
        if (number == 7) {
            PCInput = "G"
        }
        else if (number == 8) {
            PCInput = "H"
        }
        else if (number == 9) {
            PCInput = "I"
        }
        if (number == 10) {
            PCInput = "J"
        }
        else if (number == 11) {
            PCInput = "K"
        }
        else if (number == 12) {
            PCInput = "L"
        }
        if (number == 13) {
            PCInput = "M"
        }
        else if (number == 14) {
            PCInput = "N"
        }
        else if (number == 15) {
            PCInput = "O"
        }
        if (number == 16) {
            PCInput = "P"
        }
        else if (number == 17) {
            PCInput = "Q"
        }
        else if (number == 18) {
            PCInput = "R"
        }
        if (number == 19) {
            PCInput = "S"
        }
        else if (number == 20) {
            PCInput = "T"
        }
        else if (number == 21) {
            PCInput = "U"
        }
        if (number == 22) {
            PCInput = "V"
        }
        else if (number == 23) {
            PCInput = "W"
        }
        else if (number == 24) {
            PCInput = "X"
        }if (number == 25) {
            PCInput = "Y"
        }
        else if (number == 26) {
            PCInput = "Z"
        }
        

        console.log(PCInput);


        if (userInput == PCInput){
            alert("It's a tie!")
        }

        else if (userInput == "Rock" && PCInput == "Paper") {
            alert("Computer wins!")
        }
        else if (userInput == "Rock" && PCInput == "Scissors") {
            alert("You win!")
        }
        else if (userInput == "Paper" && PCInput == "Rock") {
            alert("You win!")
        }
        else if (userInput == "Paper" && PCInput == "Scissors") {
            alert("Computer wins!")
        }
        else if (userInput == "Scissors" && PCInput == "Rock") {
            alert("Computer wins!")
        }
        else if (userInput == "Scissors" && PCInput == "Paper") {
            alert("You win!")
        }
        else if (userInput!="Q"){
            alert("Play the game correctly you idiot!")
        }
    }
    </script>

