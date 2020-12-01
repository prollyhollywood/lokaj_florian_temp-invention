while (true) {
    console.log("Temperature: " + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 212) {
        light.setAll(light.rgb(0, 255, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) == 200) {
        light.setAll(light.rgb(255, 255, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 212) {
        light.setAll(light.rgb(255, 0, 0))
    }
    
}
