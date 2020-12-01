while True:
    print("Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT))
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 212:
        light.set_all(light.rgb(0,255,0))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) == 200: 
        light.set_all(light.rgb(255,255,0))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) < 212: 
        light.set_all(light.rgb(255,0,0))