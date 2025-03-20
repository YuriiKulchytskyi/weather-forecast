import { useEffect, useState } from "react";

export const useGeolocation = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation fail");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude }); // Використовуємо об'єкт
            },
            (err) => {
                setError("Cannot get geolocation: " + err.message);
            }
        );
    }, []);

    return { location, error };
};
