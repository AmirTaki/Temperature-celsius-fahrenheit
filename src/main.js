let celsius = document.getElementById("celsius")
let fahrenheit = document.getElementById("fahrenheit")
  

const celsiusToFahrenheit = () => {
    const output = (parseFloat(celsius.value) * 9) / 5 + 32;
}