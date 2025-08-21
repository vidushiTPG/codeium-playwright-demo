/**
 * Utility functions for handling Indian cities
 */

// List of major Indian cities
const INDIAN_CITIES: string[] = [
    'Mumbai',
    'Delhi',
    'Bengaluru',
    'Chennai',
    'Hyderabad',
    'Pune'
];

/**
 * Returns a randomly selected Indian city from the predefined list
 * @returns {string} A random Indian city name
 */
export function getRandomIndianCity(): string {
    const randomIndex = Math.floor(Math.random() * INDIAN_CITIES.length);
    return INDIAN_CITIES[randomIndex];
}

/**
 * Returns all available Indian cities
 * @returns {string[]} Array of all Indian cities
 */
export function getAllIndianCities(): string[] {
    return [...INDIAN_CITIES];
}

/**
 * Returns multiple random Indian cities without duplicates
 * @param count - Number of cities to return (default: 3)
 * @returns {string[]} Array of random Indian cities
 */
export function getMultipleRandomIndianCities(count: number = 3): string[] {
    if (count >= INDIAN_CITIES.length) {
        return [...INDIAN_CITIES];
    }
    
    const shuffled = [...INDIAN_CITIES].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

/**
 * Checks if a given city is in the Indian cities list
 * @param city - City name to check
 * @returns {boolean} True if city is in the list
 */
export function isValidIndianCity(city: string): boolean {
    return INDIAN_CITIES.includes(city);
}
