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

export const fetchAllCandidates = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/candidates`, {
        heareds: {'Pragma': 'no-cache'}
    });
    // umozliwia pobranie budżetu i jego transakcji
    const data = await response.json();
    return data; // zwraca zartość, a nie promise
}

export const fetchAddCandidate = async (data) => { // jeżeli przekazuje obiekt, to kolejność mnie nie interesuje
    // dostosowanie wyniku [] do useMutaion 
    console.log({data})
    const response = await fetch(`${process.env.REACT_APP_API_URL}/candidates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return await response.json();
}

export const fetchAddEpression = async (data) => { // jeżeli przekazuje obiekt, to kolejność mnie nie interesuje
    // dostosowanie wyniku [] do useMutaion 
    console.log({data})
    const response = await fetch(`${process.env.REACT_APP_API_URL}/dictionary`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return await response.json();
}

export const fetchDeleteCandidate = async (id) => {
    // dostosowanie wyniku [] do useMutaion 
    const response = await fetch(`${process.env.REACT_APP_API_URL}/candidates/${id}`, {
        method: 'DELETE'
    });
    return await response.json();
}