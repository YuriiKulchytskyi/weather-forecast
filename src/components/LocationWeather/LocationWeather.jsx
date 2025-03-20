import { useGeolocation } from "../../hooks/LocationHook";

const LocationWeather = () => {
    const { location, error } = useGeolocation();

    return (
        <div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {location ? (
                <p>
                    Ваша геолокація: 🌍 {location.latitude}, {location.longitude}
                </p>
            ) : (
                <p>Отримуємо вашу геолокацію...</p>
            )}
        </div>
    );
};

export default LocationWeather;
