export function getRandomIndianCity(): string {
    const indianCities = [
        'Mumbai',
        'Delhi',
        'Bengaluru',
        'Chennai',
        'Hyderabad',
        'Pune',
        'Ahmedabad',
        'Kolkata',
        'Jaipur',
        'Kochi',
    ];

    const index = Math.floor(Math.random() * indianCities.length);
    return indianCities[index];
}
