export const fetchAll = async (path, {cache}) => {
  // console.log({cache}, {path});
  let response;
  if (cache) {
    response = await fetch(
      `${process.env.REACT_APP_API_URL_AMZ}/DEV/api/v1/table?name="${path}"`
    );
  } else {
    response = await fetch(
      `${process.env.REACT_APP_API_URL_AMZ}/DEV/api/v1/${path}`
    );
  }
  const data = await response.json();
  return data; // zwraca zartość, a nie promise
};

export const fetchAddCandidate = async (data) => {
  // jeżeli przekazuje obiekt, to kolejność mnie nie interesuje
  // dostosowanie wyniku [] do useMutaion
  console.log({ data });
  let res = "";
  // await fetch(`${process.env.REACT_APP_API_URL}/candidates`, {
  await fetch(`${process.env.REACT_APP_API_URL_AMZ}/DEV/api/v1/candidate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Request-Origin": `${process.env.REACT_APP_API_URL_AMZ}`,
      // "Access-Control-Allow-Credentials": "true",
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
  let res = "";
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/dictionary`, {
  await fetch(`${process.env.REACT_APP_API_URL_AMZ}/DEV/api/v1/dictionary`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => (res = response.json()))
    .catch((err) => (res = { status: "error", message: err.message }));
  return await res;
};

export const fetchDeleteCandidate = async ({ id, name }) => {
  // dostosowanie wyniku [] do useMutaion
  let res = "";
  await fetch(
    // `${process.env.REACT_APP_API_URL}/candidates/${id}`,
    `${process.env.REACT_APP_API_URL_AMZ}/DEV/api/v1/candidate/delete`,
    {
      method: "OPTIONS",
      body: JSON.stringify({ id, name }),
    }
  )
    .then((response) => (res = response.json()))
    .catch((err) => (res = { status: "error", message: err.message }));
  return await res;
};
