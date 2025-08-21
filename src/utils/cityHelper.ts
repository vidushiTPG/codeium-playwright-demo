/**
 * Utility functions for working with Indian cities and dates
 */

/**
 * List of major Indian cities
 */
const INDIAN_CITIES: readonly string[] = [
    'Mumbai',
    'Delhi',
    'Bengaluru',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune'
] as const;

/**
 * Returns a random city from the list of major Indian cities
 * @returns {string} A random Indian city name
 */
export function getRandomIndianCity(): string {
    const randomIndex = Math.floor(Math.random() * INDIAN_CITIES.length);
    return INDIAN_CITIES[randomIndex];
}

/**
 * Returns the dates for the upcoming weekend (Saturday and Sunday)
 * @returns {{saturday: Date, sunday: Date}} Object containing Saturday and Sunday dates
 */
export function getWeekendDates(): { saturday: Date; sunday: Date } {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    
    // Calculate days until next Saturday (6 - currentDay)
    const daysUntilSaturday = (6 - currentDay + 7) % 7 || 7;
    
    const saturday = new Date(today);
    saturday.setDate(today.getDate() + daysUntilSaturday);
    
    const sunday = new Date(saturday);
    sunday.setDate(saturday.getDate() + 1);
    
    return { saturday, sunday };
}

// Example usage:
// const city = getRandomIndianCity();
// const { saturday, sunday } = getWeekendDates();
// console.log(`Random Indian city: ${city}`);
// console.log(`Next weekend: ${saturday.toDateString()} - ${sunday.toDateString()}`);
