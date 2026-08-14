const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const value = button.innerText;
    if (value === "C") {
      display.value ="";
    }
    else if (value === "="){
      display.value = eval(display.value);
  }
  else{
    display.value +=value;
   }
  });
});
