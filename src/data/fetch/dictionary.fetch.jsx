export const fetchAllDictionary = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/dictionary`);
  // umozliwia pobranie budżetu i jego transakcji
  const data = await response.json();
  return data; // zwraca zartość, a nie promise
};

export const fetchAllCategories = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/categories`
  ).catch((err) => console.log(err));

  const data = await response.json();
  return data; // zwraca zartość, a nie promise
};

export const fetchAllCandidates = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/candidates`, {
    heareds: { Pragma: "no-cache" },
  });
  // umozliwia pobranie budżetu i jego transakcji
  const data = await response.json();
  return data; // zwraca zartość, a nie promise
};

export const fetchAddCandidate = async (data) => {
  // jeżeli przekazuje obiekt, to kolejność mnie nie interesuje
  // dostosowanie wyniku [] do useMutaion
  //   console.log({ data });
  let res = "";
  await fetch(`${process.env.REACT_APP_API_URL}/candidates`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Origin": `${process.env.REACT_APP_API_URL}`,
      "Access-Control-Allow-Credentials": "true",
      //   "Access-Control-Request-Method": "All",
      //   "Access-Control-Request-Headers": "Content-Type, Authorization",
    },
    body: JSON.stringify(data),
  })
    .then((response) => (res = response.json()))
    .catch((err) => (res = { status: "error", message: err.message }));
  return await res;
};

export const fetchAddEpression = async (data) => {
  // jeżeli przekazuje obiekt, to kolejność mnie nie interesuje
  // dostosowanie wyniku [] do useMutaion
  console.log({ data });
  const response = await fetch(`${process.env.REACT_APP_API_URL}/dictionary`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const fetchDeleteCandidate = async (id) => {
  // dostosowanie wyniku [] do useMutaion
  let res = "";
  await fetch(
    `${process.env.REACT_APP_API_URL}/candidates/${id}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => (res = response.json()))
    .catch((err) => (res = { status: "error", message: err.message }));
  return await res;
};
