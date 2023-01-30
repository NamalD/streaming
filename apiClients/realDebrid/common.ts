// TODO: Populate from env
const TOKEN = "";
const BASE_URL = "https://api.real-debrid.com/rest/1.0/";

export function buildUrl(path: string, params?: Record<string, string>) {
  const url = new URL(path, BASE_URL);

  if (params) {
    const searchParams = new URLSearchParams(params);
    url.search = searchParams.toString();
  }

  return url.toString();
}

export function fetchWithAuth(url: string, initOverride?: RequestInit) {
  return fetch(url, {
    headers: {Authorization: `Bearer ${TOKEN}`},
    ...initOverride
  });
}

export function fetchJsonWithAuth(url: string, initOverride?: RequestInit) {
  return fetchWithAuth(url, initOverride).then(response => response.json());
}

