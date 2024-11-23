const display = document.getElementById("display");

//to display
function appendToDisplay(input){
    display.value += input;
}

//to clear the display
function clearDisplay(){
    display.value = "";
}

//to calculate the result
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}