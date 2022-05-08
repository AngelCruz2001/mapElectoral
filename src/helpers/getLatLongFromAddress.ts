export const getLatLongFromAddress = (address: string) => {
    // Using mapbox geocoding API
    console.log("Hola")
    const mapboxToken = 'pk.eyJ1IjoiYW5nZWxjcnV6MjAwMSIsImEiOiJjbDJqcnZiMHgwMHhzM2twY3pvbmIxMHZmIn0.9R6ThaYhwoOO7H4fCapyrA';
    const data = fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxToken}`)
        .then(res => res.json())
        .then(data => {
            const { features } = data;
            if (features.length > 0) {
                const { center } = features[0];
                return center;
            }
            return null;
        }
        );
    return data;

}


