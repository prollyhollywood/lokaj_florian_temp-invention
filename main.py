while True:
    print("temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT))
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 100:
        light.set_all (light.rgb(0, 255, 0))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) < 100:
        light.set_all (light.rgb(255, 0, 0))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) == 80:
        light.set_all (light.rgb (255, 255, 0))