let celsius = document.getElementById("celsius")
let fahrenheit = document.getElementById("fahrenheit")
  

const celsiusToFahrenheit = () => {
    const output = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

const fahrenheitToCelsius = () => {
    const output = ((parseFloat(fahrenheit.value) - 32 ) * 5)  / 9;
    celsius.value = parseFloat(output.toFixed(2))

}
