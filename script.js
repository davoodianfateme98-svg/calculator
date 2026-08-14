const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const value = button.innerText;

    if (value === "C") {
    
      display.value = "";
    } 
    else if (value === "⌫") {
    
      display.value = display.value.slice(0, -1);
    } 
    else if (value === "=") {
      
      try {
      
        let calculation = display.value.replace(/%/g, "/100");
        
       
        calculation = calculation.replace(/×/g, "*").replace(/÷/g, "/");

        display.value = eval(calculation);
      } catch (error) {
        display.value = "Error!";
      }
    } 
    else {
    
      display.value += value;
    }
  });
});
