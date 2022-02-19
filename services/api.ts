const API_URL =
  "https://personality-trait-app-teamway-23tovildc-sanderyt.vercel.app/api";

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
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
