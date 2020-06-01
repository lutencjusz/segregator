export const fetchAllDictionary = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/dictionary`);
    // umozliwia pobranie budżetu i jego transakcji
    const data = await response.json();
    return data; // zwraca zartość, a nie promise
}

export const fetchAllCategories = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/categories`);
    // umozliwia pobranie budżetu i jego transakcji
    const data = await response.json();
    return data; // zwraca zartość, a nie promise
}