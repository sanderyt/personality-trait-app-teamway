const API_URL = "http://localhost:3000/api";

const defaultOptions = {
  authenticate: true,
  token: null,
  headers: null,
};

export const get = (url: string, params = {}, options = defaultOptions) => {
  return doRequest({
    url,
    params,
    method: "GET",
    ...defaultOptions,
    ...options,
  });
};

export const doRequest = async (config: any) => {
  let reqConfig = {
    method: config.method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "*",
    },
  };

  const url = API_URL + config.url;

  try {
    const response = await fetch(url, reqConfig);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};