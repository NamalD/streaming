// TODO: Make secret
const TOKEN = "4MUZSDNVTG6P3PI5HYXBDK7T7XEBDEZITZN6S5PN2EGFHU2HKJUA";
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

