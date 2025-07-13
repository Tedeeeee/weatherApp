export interface WeatherMain {
    temp: number;
    feels_like: number;
    humidity: number;
}

export interface WeatherCondition {
    description: string;
    icon: string;
}

export interface WeatherData {
    name: string;
    main: WeatherMain;
    weather: WeatherCondition[];
}