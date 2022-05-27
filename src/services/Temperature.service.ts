export class TemperatureService {
  static getInCelsius = (kelvin: number) => {
    const celsius = kelvin - 273.15;
    return celsius.toFixed(1);
  };
}
