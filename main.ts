while (true) {
    console.log("temperature: " + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) > 100) {
        light.setAll(light.rgb(0, 255, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 100) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) == 80) {
        light.setAll(light.rgb(255, 255, 0))
    }
    
}
